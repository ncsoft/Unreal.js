#include "JavascriptEditor.h"
#include "JavascriptUICommands.h"
#include "Framework/Commands/Commands.h"

PRAGMA_DISABLE_OPTIMIZATION

UJavascriptUICommands::UJavascriptUICommands(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer), bRegistered(false)
{	
}

#if WITH_EDITOR
void UJavascriptUICommands::BeginDestroy()
{
	Super::BeginDestroy();

	Discard();
}

void UJavascriptUICommands::Commit()
{
	Discard();

	IJavascriptEditorModule::Get().AddExtension(this);
	
	bRegistered = true;
}

void UJavascriptUICommands::Discard()
{
	if (bRegistered)
	{
		IJavascriptEditorModule::Get().RemoveExtension(this);
	}

	bRegistered = false;
}

void UJavascriptUICommands::Register()
{	
	BindingContext = MakeShareable(new FBindingContext(*ContextName, ContextDesc, ContextNameParent, StyleSetName.IsNone() ? FEditorStyle::GetStyleSetName() : StyleSetName));

	for (auto info : Commands)
	{
		TSharedPtr<FUICommandInfo> CommandInfo;

		if (info.FriendlyName.Len() == 0)
		{
			info.FriendlyName = info.Id;
		}

		UI_COMMAND_Function(
			BindingContext.Get(), 
			CommandInfo, 
			TEXT(""), 
			*info.Id, 
			*FString::Printf(TEXT("%s_Tooltip"), *info.Id), 
			TCHAR_TO_ANSI(*FString::Printf(TEXT(".%s"), *info.Id)), 
			*info.FriendlyName, 
			*info.Description, 
			EUserInterfaceActionType::Type(info.ActionType.GetValue()), 
			info.DefaultChord);

		CommandInfos.Add(CommandInfo);
	}
	
	FBindingContext::CommandsChanged.Broadcast();
}

void UJavascriptUICommands::Unregister()
{
	FInputBindingManager::Get().RemoveContextByName(BindingContext->GetContextName());

	CommandInfos.Empty();
	
	FBindingContext::CommandsChanged.Broadcast();
}

void UJavascriptUICommands::Refresh()
{
}

void UJavascriptUICommands::Bind(FUICommandList* CommandList)
{
	for (int32 Index = 0; Index < Commands.Num(); ++Index)
	{
		CommandList->MapAction(
			CommandInfos[Index],
			FExecuteAction::CreateLambda([this, Index](){
				if (OnExecuteAction.IsBound())
				{
					OnExecuteAction.Execute(Commands[Index].Id);
				}
			}),
			FCanExecuteAction::CreateLambda([this, Index](){
				return OnCanExecuteAction.IsBound() && OnCanExecuteAction.Execute(Commands[Index].Id);
			}),
			FCanExecuteAction::CreateLambda([this, Index](){
				return OnIsActionChecked.IsBound() && OnIsActionChecked.Execute(Commands[Index].Id);
			}),
			FCanExecuteAction::CreateLambda([this, Index](){
				return OnIsActionButtonVisible.IsBound() && OnIsActionButtonVisible.Execute(Commands[Index].Id);
			})
		);
	}
	
}
void UJavascriptUICommands::Unbind(FUICommandList* CommandList)
{
	// unbind is not supported, just rebind again!
}

TSharedPtr<FUICommandInfo> UJavascriptUICommands::GetAction(FString Id)
{
	if (Commands.Num() == CommandInfos.Num())
	{
		for (int32 Index = 0; Index < Commands.Num(); ++Index)
		{
			if (Commands[Index].Id == Id)
			{
				return CommandInfos[Index];
			}
		}
	}

	return TSharedPtr<FUICommandInfo>();
}
#endif

PRAGMA_ENABLE_OPTIMIZATION