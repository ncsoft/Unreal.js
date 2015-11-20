#include "JavascriptEditor.h"
#include "JavascriptEditorTab.h"
#include "WorkspaceMenuStructureModule.h"

UJavascriptEditorTab::UJavascriptEditorTab(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer), bRegistered(false), bIsNomad(true)
{	
}

TSharedPtr<SDockTab> UJavascriptEditorTab::MajorTab;

#if WITH_EDITOR
void UJavascriptEditorTab::BeginDestroy()
{
	Super::BeginDestroy();

	Discard();
}
#endif

void UJavascriptEditorTab::Commit()
{
#if WITH_EDITOR
	Discard();

	IJavascriptEditorModule::Get().AddExtension(this);
	
	bRegistered = true;
#endif
}

void UJavascriptEditorTab::Discard()
{
#if WITH_EDITOR
	if (bRegistered)
	{
		IJavascriptEditorModule::Get().RemoveExtension(this);
	}

	bRegistered = false;
#endif
}

#if WITH_EDITOR
struct FHackFindDocktab
{
	UWidget* Widget;
	TWeakPtr<SDockTab> DockTab;
};

TArray<FHackFindDocktab> GHackFindDocktabs;

TSharedPtr<SDockTab> UJavascriptEditorTab::FindDocktab(UWidget* Widget)
{
	if (MajorTab.IsValid()) return MajorTab;

	for (auto& entry : GHackFindDocktabs)
	{
		for (auto p = Widget; p; p = p->GetParent())
		{
			if (p == entry.Widget)
			{
				return entry.DockTab.Pin();
			}
		}
	}

	return TSharedPtr<SDockTab>();
}

UWidget* UJavascriptEditorTab::TakeWidget(UObject* Context)
{
	if (OnSpawnTab.IsBound())
	{
		UWidget* Widget = OnSpawnTab.Execute(Context);
		if (Widget) return Widget;
	}
	return NewObject<UButton>();
}

void UJavascriptEditorTab::Register(TSharedRef<FTabManager> TabManager, UObject* Context, TSharedRef<FWorkspaceItem> Group)
{
	FSlateIcon Icon(FEditorStyle::GetStyleSetName(), "DeviceDetails.Tabs.ProfileEditor");

	auto Lambda = FOnSpawnTab::CreateLambda([this, Context](const FSpawnTabArgs& SpawnTabArgs){
		auto Widget = this->TakeWidget(Context);

		const TSharedRef<SDockTab> MajorTab = SNew(SDockTab)
			.TabRole(ETabRole(Role.GetValue()))
			.OnTabClosed_Lambda([Widget](TSharedRef<SDockTab> ClosedTab){
				Widget->RemoveFromRoot();
			});

		auto OldTab = UJavascriptEditorTab::MajorTab;
		UJavascriptEditorTab::MajorTab = MajorTab;

		Widget->AddToRoot();
		MajorTab->SetContent(Widget->TakeWidget());
		auto entry = new(GHackFindDocktabs)FHackFindDocktab;
		entry->Widget = Widget;
		entry->DockTab = MajorTab;
		
		UJavascriptEditorTab::MajorTab = OldTab;

		SpawnedTabs.Add(MajorTab);

		return MajorTab;
	});	

	auto& SpawnerEntry = bIsNomad && TabManager == FGlobalTabmanager::Get() ? FGlobalTabmanager::Get()->RegisterNomadTabSpawner(TabId, Lambda) : TabManager->RegisterTabSpawner(TabId, Lambda);
	SpawnerEntry
		.SetDisplayName(DisplayName)
		.SetIcon(Icon)
		.SetGroup(Group);	
}

void UJavascriptEditorTab::Unregister(TSharedRef<FTabManager> TabManager)
{
	if (bIsNomad && TabManager == FGlobalTabmanager::Get())
	{
		FGlobalTabmanager::Get()->UnregisterNomadTabSpawner(TabId);
	}
	else
	{
		TabManager->UnregisterTabSpawner(TabId);
	}	
}

void UJavascriptEditorTab::Register()
{
	Register(FGlobalTabmanager::Get(), nullptr, WorkspaceMenu::GetMenuStructure().GetDeveloperToolsMiscCategory());
}

void UJavascriptEditorTab::Unregister()
{
	Unregister(FGlobalTabmanager::Get());
}
#endif

void UJavascriptEditorTab::Refresh()
{
#if WITH_EDITOR
	for (auto& tab : SpawnedTabs)
	{		
		if (tab.IsValid())
		{
			tab.Pin()->RequestCloseTab();
			SpawnedTabs.Empty();
			FGlobalTabmanager::Get()->InvokeTab(TabId);
			return;
		}
	}

	SpawnedTabs.Empty();	
#endif
}