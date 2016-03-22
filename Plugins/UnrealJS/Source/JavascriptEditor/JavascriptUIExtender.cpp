#include "JavascriptEditor.h"

#if WITH_EDITOR
#include "JavascriptUIExtender.h"
#include "JavascriptUICommands.h"

namespace
{
	bool SectionDisabled{ false };
	FMenuBuilder* CurrentMenuBuilder{ nullptr };
	FToolBarBuilder* CurrentToolbarBuilder{ nullptr };
}
#endif

UJavascriptUIExtender::UJavascriptUIExtender(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{	
}

#if WITH_EDITOR
void UJavascriptUIExtender::BeginSection(FName Name, FText Text)
{
	if (SectionDisabled) return;

	if (CurrentMenuBuilder)
	{
		CurrentMenuBuilder->BeginSection(Name, Text);
	}
	else if (CurrentToolbarBuilder)
	{
		CurrentToolbarBuilder->BeginSection(Name);
	}
}

void UJavascriptUIExtender::EndSection()
{
	if (SectionDisabled) return;

	if (CurrentMenuBuilder)
	{
		CurrentMenuBuilder->EndSection();
	}
	else if (CurrentToolbarBuilder)
	{
		CurrentToolbarBuilder->EndSection();
	}
}

void UJavascriptUIExtender::AddMenuEntry(UJavascriptUICommands* Commands, FString Id)
{
	if (CurrentMenuBuilder)
	{
		auto Action = Commands->GetAction(Id);
		if (Action.IsValid())
		{
			CurrentMenuBuilder->AddMenuEntry(Action);
		}		
	}
}

void UJavascriptUIExtender::AddMenuSeparator()
{	
	if (CurrentMenuBuilder)
	{
		CurrentMenuBuilder->AddMenuSeparator();		
	}
}

void UJavascriptUIExtender::AddToolBarButton(UJavascriptUICommands* Commands, FString Id)
{
	if (CurrentToolbarBuilder)
	{
		auto Action = Commands->GetAction(Id);
		if (Action.IsValid())
		{
			CurrentToolbarBuilder->AddToolBarButton(Action);
		}
	}
}

void UJavascriptUIExtender::Bind(UJavascriptUICommands* Commands)
{
	if (CurrentMenuBuilder && Commands)
	{
		auto List = CurrentMenuBuilder->GetTopCommandList();
		if (List.IsValid())
		{
			Commands->Bind(const_cast<FUICommandList*>(List.Get()));
		}		
	}
}

TSharedPtr<FExtender> UJavascriptUIExtender::TakeMenuExtender(const TSharedPtr< FUICommandList >& CommandList)
{
	TSharedPtr<FExtender> MenuExtender = MakeShareable(new FExtender);
	for (const auto& Extension : MenuExtensions)
	{
		auto Hook = Extension.ExtensionHook;
		auto HookPosition = EExtensionHook::Position(Extension.HookPosition.GetValue());
		MenuExtender->AddMenuExtension(
			Hook,
			HookPosition,
			CommandList,
			FMenuExtensionDelegate::CreateLambda([this, Hook](class FMenuBuilder& MenuBuilder){
				if (OnHook.IsBound())
				{
					CurrentMenuBuilder = &MenuBuilder;
					OnHook.Execute(Hook);
					CurrentMenuBuilder = nullptr;
				}
		}));
	}
	return MenuExtender;
}

void UJavascriptUIExtender::PushMenuBuilder(FMenuBuilder& MenuBuilder)
{
	CurrentMenuBuilder = &MenuBuilder;
}
void UJavascriptUIExtender::Reset()
{
	CurrentMenuBuilder = nullptr;
}

void UJavascriptUIExtender::BuildMenu(FMenuBuilder& MenuBuilder)
{
	if (OnHook.IsBound())
	{
		for (const auto& Extension : MenuExtensions)
		{
			auto Hook = Extension.ExtensionHook;
			
			PushMenuBuilder(MenuBuilder);
			OnHook.Execute(Hook);
			Reset();
		}
	}
}

TSharedPtr<FExtender> UJavascriptUIExtender::TakeToolbarExtender(const TSharedPtr< FUICommandList >& CommandList)
{
	TSharedPtr<FExtender> MenuExtender = MakeShareable(new FExtender);
	for (const auto& Extension : ToolbarExtensions)
	{
		auto Hook = Extension.ExtensionHook;
		auto HookPosition = EExtensionHook::Position(Extension.HookPosition.GetValue());
		MenuExtender->AddToolBarExtension(
			Hook,
			HookPosition,
			CommandList,
			FToolBarExtensionDelegate::CreateLambda([this, Hook, HookPosition](FToolBarBuilder& ToolbarBuilder){
			if (OnHook.IsBound())
			{
				SectionDisabled = HookPosition == EExtensionHook::Position::First;
				CurrentToolbarBuilder = &ToolbarBuilder;
				OnHook.Execute(Hook);
				CurrentToolbarBuilder = nullptr;
			}
		}));
	}
	return MenuExtender;
}
#endif