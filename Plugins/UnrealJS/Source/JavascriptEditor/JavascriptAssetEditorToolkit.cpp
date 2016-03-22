#include "JavascriptEditor.h"

#if WITH_EDITOR
#include "JavascriptAssetEditorToolkit.h"
#include "JavascriptEditorTab.h"
#include "JavascriptUICommands.h"
#include "JavascriptUIExtender.h"
#include "WorkspaceMenuStructureModule.h"
#endif

UJavascriptAssetEditorToolkit::UJavascriptAssetEditorToolkit(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
#if WITH_EDITOR
, bRegistered(false)
#endif
{	
}

#if WITH_EDITOR
void UJavascriptAssetEditorToolkit::BeginDestroy()
{
	Super::BeginDestroy();

	Discard();
}

void UJavascriptAssetEditorToolkit::Commit()
{
	Discard();

	IJavascriptEditorModule::Get().AddExtension(this);
	
	bRegistered = true;
}

void UJavascriptAssetEditorToolkit::Discard()
{
	if (bRegistered)
	{
		IJavascriptEditorModule::Get().RemoveExtension(this);
	}

	bRegistered = false;
}

void UJavascriptAssetEditorToolkit::Refresh()
{
	if (bRegistered)
	{
		Unregister();
		Register();
	}
}

class FAssetEditorToolkit_Javascript : public FAssetEditorToolkit
{
public:
	UJavascriptAssetEditorToolkit* Outer;
	UObject* Context;

	FAssetEditorToolkit_Javascript(UJavascriptAssetEditorToolkit* InOuter)
		: Outer(InOuter)
	{
		Outer->AddToRoot();
	}

	~FAssetEditorToolkit_Javascript()
	{
		Outer->RemoveFromRoot();
	}

	virtual void RegisterTabSpawners(const TSharedRef<class FTabManager>& TabManager) override
	{		
		FAssetEditorToolkit::RegisterTabSpawners(TabManager);

		for (auto Tab : Outer->Tabs)
		{
			Tab->Register(TabManager, Context, WorkspaceMenu::GetMenuStructure().GetDeveloperToolsMiscCategory());
		}
	}

	virtual void UnregisterTabSpawners(const TSharedRef<class FTabManager>& TabManager) override
	{
		FAssetEditorToolkit::UnregisterTabSpawners(TabManager);

		for (auto Tab : Outer->Tabs)
		{
			Tab->Unregister(TabManager);
		}
	}

	virtual FName GetToolkitFName() const override
	{
		return Outer->ToolkitFName;
	}
	virtual FText GetBaseToolkitName() const override
	{
		return Outer->BaseToolkitName;
	}
	virtual FText GetToolkitName() const override
	{
		return Outer->ToolkitName;
	}
	virtual FString GetWorldCentricTabPrefix() const override
	{
		return Outer->WorldCentricTabPrefix;
	}	
	virtual FLinearColor GetWorldCentricTabColorScale() const
	{
		return Outer->WorldCentricTabColorScale;
	}
	void Open(const TArray<UObject*>& InObjects, TSharedPtr<IToolkitHost> EditWithinLevelEditor)
	{
		Context = InObjects[0];

		const EToolkitMode::Type Mode = EditWithinLevelEditor.IsValid() ? EToolkitMode::WorldCentric : EToolkitMode::Standalone;

		if (Outer->Commands)
		{
			Outer->Commands->Bind(&(GetToolkitCommands().Get()));
		}
				
		TSharedPtr<FTabManager::FLayout> StandaloneDefaultLayout = FTabManager::FLayout::NewFromString(Outer->Layout.Replace(TEXT("#toolbartab"), *(GetToolbarTabId().ToString())));

		// Initialize the asset editor and spawn nothing (dummy layout)
		InitAssetEditor(Mode, EditWithinLevelEditor, Outer->ToolkitFName, StandaloneDefaultLayout.ToSharedRef(), /*bCreateDefaultStandaloneMenu=*/ true, /*bCreateDefaultToolbar=*/ true, InObjects);

		if (Outer->MenuExtender)
		{
			auto Extender = Outer->MenuExtender->TakeMenuExtender(GetToolkitCommands());
			if (Extender.IsValid())
			{
				AddMenuExtender(Extender);
			}
		}

		if (Outer->ToolbarExtender)
		{
			auto Extender = Outer->ToolbarExtender->TakeToolbarExtender(GetToolkitCommands());
			if (Extender.IsValid())
			{
				AddToolbarExtender(Extender);
			}
		}

		RegenerateMenusAndToolbars();
	}
};

void UJavascriptAssetEditorToolkit::Register()
{	
}

void UJavascriptAssetEditorToolkit::Unregister()
{
}

void UJavascriptAssetEditorToolkit::Open(const TArray<UObject*>& InObjects, TSharedPtr<IToolkitHost> EditWithinLevelEditor)
{
	TSharedRef<FAssetEditorToolkit_Javascript> Editor(new FAssetEditorToolkit_Javascript(this));

	Editor->Open(InObjects, EditWithinLevelEditor);

	SpawnedEditors.Add(Editor);
}
#endif