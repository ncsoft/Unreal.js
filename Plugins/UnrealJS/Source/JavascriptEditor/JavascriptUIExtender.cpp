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

void UJavascriptUIExtender::BeginSection(FName Name, FText Text)
{
#if WITH_EDITOR
	if (SectionDisabled) return;

	if (CurrentMenuBuilder)
	{
		CurrentMenuBuilder->BeginSection(Name, Text);
	}
	else if (CurrentToolbarBuilder)
	{
		CurrentToolbarBuilder->BeginSection(Name);
	}
#endif
}

void UJavascriptUIExtender::EndSection()
{
#if WITH_EDITOR
	if (SectionDisabled) return;

	if (CurrentMenuBuilder)
	{
		CurrentMenuBuilder->EndSection();
	}
	else if (CurrentToolbarBuilder)
	{
		CurrentToolbarBuilder->EndSection();
	}
#endif
}

void UJavascriptUIExtender::AddMenuEntry(UJavascriptUICommands* Commands, FString Id)
{
#if WITH_EDITOR
	if (CurrentMenuBuilder)
	{
		auto Action = Commands->GetAction(Id);
		if (Action.IsValid())
		{
			CurrentMenuBuilder->AddMenuEntry(Action);
		}		
	}
#endif
}

void UJavascriptUIExtender::AddMenuSeparator()
{	
#if WITH_EDITOR
	if (CurrentMenuBuilder)
	{
		CurrentMenuBuilder->AddMenuSeparator();		
	}
#endif
}

void UJavascriptUIExtender::AddToolBarButton(UJavascriptUICommands* Commands, FString Id)
{
#if WITH_EDITOR
	if (CurrentToolbarBuilder)
	{
		auto Action = Commands->GetAction(Id);
		if (Action.IsValid())
		{
			CurrentToolbarBuilder->AddToolBarButton(Action);
		}
	}
#endif
}

void UJavascriptUIExtender::Bind(UJavascriptUICommands* Commands)
{
#if WITH_EDITOR
	if (CurrentMenuBuilder && Commands)
	{
		auto List = CurrentMenuBuilder->GetTopCommandList();
		if (List.IsValid())
		{
			Commands->Bind(const_cast<FUICommandList*>(List.Get()));
		}		
	}
#endif
}

#if WITH_EDITOR
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