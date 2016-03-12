#include "JavascriptEditor.h"
#include "AssetToolsModule.h"
#include "JavascriptIsolate.h"
#include "JavascriptContext.h"
#include "JavascriptEditorTick.h"
#include "IV8.h"
#include "ScopedTransaction.h"
#if WITH_EDITOR
// Settings
#include "JavascriptSettings.h"
#include "ISettingsModule.h"
#include "Settings/EditorLoadingSavingSettings.h"
#endif

#define LOCTEXT_NAMESPACE "UnrealJSEditor"

class FJavascriptEditorModule : public IJavascriptEditorModule
{
	// Begin IModuleInterface
	virtual void StartupModule() override;
	virtual void ShutdownModule() override;
	// End IModuleInterface
	
	virtual void AddExtension(IEditorExtension* Extension) override;
	virtual void RemoveExtension(IEditorExtension* Extension) override;
	
private:
#if WITH_EDITOR
	TArray<IEditorExtension*> Extensions;

	UJavascriptEditorTick* Tick{ nullptr };
	UJavascriptContext* JavascriptContext{ nullptr };

	bool bRegistered{ false };
	FDelegateHandle OnPropertyChangedDelegateHandle;

	void Unregister();

	void RegisterSettings()
	{
		if (ISettingsModule* SettingsModule = FModuleManager::GetModulePtr<ISettingsModule>("Settings"))
		{
			SettingsModule->RegisterSettings("Project", "Plugins", "UnrealJS",
				LOCTEXT("RuntimeSettingsName", "UnrealJS"),
				LOCTEXT("RuntimeSettingsDescription", "Configure the UnrealJS plugin"),
				GetMutableDefault<UJavascriptSettings>());
		}
	}

	void UnregisterSettings()
	{
		if (ISettingsModule* SettingsModule = FModuleManager::GetModulePtr<ISettingsModule>("Settings"))
		{
			SettingsModule->UnregisterSettings("Project", "Plugins", "UnrealJS");
		}
	}

	// Called when a property on the specified object is modified
	void OnPropertyChanged(UObject* ObjectBeingModified, FPropertyChangedEvent& PropertyChangedEvent)
	{
		if (auto Settings = Cast<UJavascriptSettings>(ObjectBeingModified))
		{
			Settings->Apply();
		}
	}
#endif
};

IMPLEMENT_MODULE(FJavascriptEditorModule, JavascriptEditor)

void FJavascriptEditorModule::AddExtension(IEditorExtension* Extension)
{
#if WITH_EDITOR
	Extensions.Add(Extension);
	Extension->Register();
#endif
}

void FJavascriptEditorModule::RemoveExtension(IEditorExtension* Extension)
{
#if WITH_EDITOR
	Extensions.RemoveSingle(Extension);
	Extension->Unregister();
#endif
}

#if WITH_EDITOR
static void PatchReimportRule() 
{
	FAutoReimportWildcard WildcardToInject;
	WildcardToInject.Wildcard = TEXT("Scripts/**.json");
	WildcardToInject.bInclude = false;

	auto Default = GetMutableDefault<UEditorLoadingSavingSettings>();
	bool bHasChanged = false;
	for (auto& Setting : Default->AutoReimportDirectorySettings)
	{
		bool bFound = false;
		for (const auto& Wildcard : Setting.Wildcards)
		{
			if (Wildcard.Wildcard == WildcardToInject.Wildcard)
			{
				bFound = true;
				break;
			}
		}
		if (!bFound)
		{
			Setting.Wildcards.Add(WildcardToInject);
			bHasChanged = true;
		}
	}
	if (bHasChanged)
	{
		Default->PostEditChange();
	}
}
#endif

void FJavascriptEditorModule::StartupModule()
{
#if WITH_EDITOR	
	if (!IsRunningCommandlet())
	{
		// Register to be notified when properties are edited
		OnPropertyChangedDelegateHandle = FCoreUObjectDelegates::OnObjectPropertyChanged.AddRaw(this, &FJavascriptEditorModule::OnPropertyChanged);

		RegisterSettings();

		PatchReimportRule();

		auto Isolate = NewObject<UJavascriptIsolate>();
		auto Context = Isolate->CreateContext();
	
		JavascriptContext = Context;
		JavascriptContext->AddToRoot();

		JavascriptContext->SetContextId(TEXT("Editor"));

		Tick = NewObject<UJavascriptEditorTick>(JavascriptContext);
		JavascriptContext->Expose(TEXT("Root"), Tick);
		Tick->AddToRoot();
		
		FEditorScriptExecutionGuard ScriptGuard;

		Context->RunFile("editor.js");
	
		bRegistered = true;
	
		FCoreDelegates::OnPreExit.AddRaw(this, &FJavascriptEditorModule::Unregister);
	}
#endif
}

void FJavascriptEditorModule::ShutdownModule()
{
#if WITH_EDITOR	
	if (!IsRunningCommandlet())
	{
		Unregister();

		if (UObjectInitialized())
		{
			UnregisterSettings();
		}

		// Unregister the property modification handler
		FCoreUObjectDelegates::OnObjectPropertyChanged.Remove(OnPropertyChangedDelegateHandle);
	}
#endif
}

#if WITH_EDITOR	
void FJavascriptEditorModule::Unregister()
{
	if (!bRegistered) return;
	bRegistered = false;

	for (auto e : Extensions) { e->Unregister(); }
	Extensions.Empty();

	JavascriptContext->RunScript(TEXT("gc()"));

	JavascriptContext->JavascriptContext.Reset();
	
	JavascriptContext->RemoveFromRoot();
	Tick->RemoveFromRoot();		

	CollectGarbage(GARBAGE_COLLECTION_KEEPFLAGS);	
}
#endif
