#include "JavascriptEditor.h"
#include "AssetToolsModule.h"
#include "JavascriptIsolate.h"
#include "JavascriptContext.h"
#include "JavascriptEditorTick.h"
#include "IV8.h"
#include "ScopedTransaction.h"

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

	void Unregister();
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

void FJavascriptEditorModule::StartupModule()
{
#if WITH_EDITOR	
	auto Isolate = NewObject<UJavascriptIsolate>();
	auto Context = Isolate->CreateContext();
	
	JavascriptContext = Context;
	JavascriptContext->AddToRoot();

	JavascriptContext->SetContextId(TEXT("Editor"));

	Tick = NewObject<UJavascriptEditorTick>(JavascriptContext);
	JavascriptContext->Expose(TEXT("Root"), Tick);
	Tick->AddToRoot();

	if (!IsRunningCommandlet())
	{
		if (GEngine && GEngine->GetWorldContexts().Num() > 0)
		{
			FEditorScriptExecutionGuard ScriptGuard;

			Context->RunFile("editor.js");
		}
	}

	bRegistered = true;
	
	FCoreDelegates::OnPreExit.AddRaw(this, &FJavascriptEditorModule::Unregister);
#endif
}

void FJavascriptEditorModule::ShutdownModule()
{
#if WITH_EDITOR	
	Unregister();
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
