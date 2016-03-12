#include "JavascriptEditor.h"
#include "JavascriptEditorTabManager.h"

#define LOCTEXT_NAMESPACE "JavascriptTabManager"

#if WITH_EDITOR
class JAVASCRIPTEDITOR_API SPrimaryDockingArea : public SVerticalBox
{
public:
	SLATE_BEGIN_ARGS(SPrimaryDockingArea)
	{}
	SLATE_END_ARGS()

	UJavascriptEditorTabManager* Owner;

	void Construct(const FArguments& InArgs)
	{
		SVerticalBox::Construct(SVerticalBox::FArguments());
	}

	virtual ~SPrimaryDockingArea()
	{
		Owner->Check(this);
	}
	
	TSharedPtr<FTabManager> TabManager;
	TWeakPtr<SDockTab> DockTab;
};
#endif

UJavascriptEditorTabManager::UJavascriptEditorTabManager(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{	
}

#if WITH_EDITOR	
void UJavascriptEditorTabManager::Setup(TSharedRef<SVerticalBox> VerticalBox)
{	
	auto DockArea = StaticCastSharedRef<SPrimaryDockingArea>(VerticalBox);

	TSharedRef<SDockTab> ConstructUnderMajorTab = DockArea->DockTab.Pin().ToSharedRef();
	TSharedPtr<SWindow> ConstructUnderWindow;

	auto TabManager = FGlobalTabmanager::Get()->NewTabManager(ConstructUnderMajorTab);
	auto AppMenuGroup = TabManager->AddLocalWorkspaceMenuCategory(LOCTEXT("DeviceManagerMenuGroupName", "Device Manager"));

	TabManager->UnregisterAllTabSpawners();

	for (auto Tab : Tabs)
	{
		Tab->Register(TabManager, nullptr, AppMenuGroup);
	}

	auto CachedLayout = FTabManager::FLayout::NewFromString(Layout);	

	VerticalBox->ClearChildren();

	if (CachedLayout.IsValid())
	{
		VerticalBox->AddSlot()
			.FillHeight(1.0f)
			[
				TabManager->RestoreFrom(CachedLayout.ToSharedRef(), ConstructUnderWindow).ToSharedRef()
			];
	}	

	DockArea->TabManager = TabManager;
}

//void UJavascriptEditorTabManager::Refresh()
//{
//	for (auto Area : SpawnedAreas)
//	{
//		auto Ptr = Area.Pin();
//		if (Ptr.IsValid())
//		{
//			Setup(Ptr.ToSharedRef());
//		}
//	}
//}

TSharedRef<SWidget> UJavascriptEditorTabManager::RebuildWidget()
{	
	auto DockTab = UJavascriptEditorTab::FindDocktab(this);
	if (DockTab.IsValid())
	{
		auto PrimaryArea = SNew(SPrimaryDockingArea);
		PrimaryArea->DockTab = DockTab;
		PrimaryArea->Owner = this;

		Setup(PrimaryArea);
		SpawnedAreas.Add(PrimaryArea);

		if (SpawnedAreas.Num() == 1)
		{
			AddToRoot();
		}

		return PrimaryArea;
	}
	else
	{
		return SNew(SButton);
	}	
}

void UJavascriptEditorTabManager::Check(SVerticalBox* LastOne)
{
	for (int32 Index = SpawnedAreas.Num() - 1; Index >= 0; --Index)
	{
		if (!SpawnedAreas[Index].IsValid())
		{
			SpawnedAreas.RemoveAt(Index);
		}
	}

	if (SpawnedAreas.Num() == 0 || SpawnedAreas.Num() == 1 && SpawnedAreas[0].Pin().Get() == LastOne)
	{
		RemoveFromRoot();
	}
}
#endif
