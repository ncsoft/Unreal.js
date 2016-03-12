#include "JavascriptEditor.h"
#include "JavascriptEditorMenu.h"
#include "JavascriptUIExtender.h"

#if WITH_EDITOR
class JAVASCRIPTEDITOR_API SJavascriptMenu : public SVerticalBox
{
public:
	SLATE_BEGIN_ARGS(SJavascriptMenu)
	{}
	SLATE_END_ARGS()

	UJavascriptEditorMenu* Owner;
	TSharedPtr<const FUICommandList> CommandList;

	void Construct(const FArguments& InArgs)
	{
		SVerticalBox::Construct(SVerticalBox::FArguments());
	}

	virtual ~SJavascriptMenu()
	{
		Owner->Check(this);
	}
};
#endif

UJavascriptEditorMenu::UJavascriptEditorMenu(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{	
}

#define LOCTEXT_NAMESPACE "SDeviceManager"

#if WITH_EDITOR	
namespace 
{
	static FMenuBarBuilder* CurrentMenuBarBuilder{ nullptr };
	static UJavascriptEditorMenu* CurrentEditorMenu{ nullptr };
	static TSharedPtr<const FUICommandList> CurrentCommandList;
}
void UJavascriptEditorMenu::Setup(TSharedRef<SVerticalBox> VerticalBox)
{	
	auto DockArea = StaticCastSharedRef<SJavascriptMenu>(VerticalBox);
	auto CommandList = DockArea->CommandList.ToSharedRef();
	CurrentCommandList = DockArea->CommandList;

	FMenuBarBuilder MenuBarBuilder = FMenuBarBuilder(DockArea->CommandList);
	CurrentMenuBarBuilder = &MenuBarBuilder;
	CurrentEditorMenu = this;
	OnHook.ExecuteIfBound("Menubar");	
	CurrentMenuBarBuilder = nullptr;
	CurrentEditorMenu = nullptr;
	CurrentCommandList.Reset();

	VerticalBox->ClearChildren();
	VerticalBox->AddSlot()		
		.FillHeight(1.0f)
		[
			MenuBarBuilder.MakeWidget()
		];
}

void UJavascriptEditorMenu::AddPullDownMenu(const FName& Id, const FText& MenuLabel, const FText& Tooltip)
{
	auto Self = CurrentEditorMenu;
	auto CommandList = CurrentCommandList.ToSharedRef();
	CurrentMenuBarBuilder->AddPullDownMenu(
		MenuLabel,
		Tooltip,
		FNewMenuDelegate::CreateLambda([Self, Id, CommandList](FMenuBuilder& MenuBuilder) {
			MenuBuilder.PushCommandList(CommandList);
			UJavascriptUIExtender::PushMenuBuilder(MenuBuilder);
			Self->OnHook.ExecuteIfBound(Id);
			UJavascriptUIExtender::Reset();
		}),
		Id
	);
}


void UJavascriptEditorMenu::Refresh()
{
	for (auto Area : SpawnedMenus)
	{
		auto Ptr = Area.Pin();
		if (Ptr.IsValid())
		{
			Setup(Ptr.ToSharedRef());
		}
	}
}

TSharedRef<SWidget> UJavascriptEditorMenu::RebuildWidget()
{	
	auto PrimaryArea = SNew(SJavascriptMenu);		
	PrimaryArea->Owner = this;
	PrimaryArea->CommandList = MakeShareable(new FUICommandList);

	Setup(PrimaryArea);
	SpawnedMenus.Add(PrimaryArea);

	if (SpawnedMenus.Num() == 1)
	{
		AddToRoot();
	}

	return PrimaryArea;
}

void UJavascriptEditorMenu::Check(SVerticalBox* LastOne)
{
	for (int32 Index = SpawnedMenus.Num() - 1; Index >= 0; --Index)
	{
		if (!SpawnedMenus[Index].IsValid())
		{
			SpawnedMenus.RemoveAt(Index);
		}
	}

	if (SpawnedMenus.Num() == 0 || SpawnedMenus.Num() == 1 && SpawnedMenus[0].Pin().Get() == LastOne)
	{
		RemoveFromRoot();
	}
}
#endif
