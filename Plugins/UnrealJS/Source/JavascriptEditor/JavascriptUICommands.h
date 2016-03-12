#pragma once

#include "JavascriptUICommands.generated.h"

UENUM()
namespace EJavasrciptUserInterfaceActionType
{
	enum Type
	{
		/** Momentary buttons or menu items.  These support enable state, and execute a delegate when clicked. */
		Button,

		/** Toggleable buttons or menu items that store on/off state.  These support enable state, and execute a delegate when toggled. */
		ToggleButton,
		
		/** Radio buttons are similar to toggle buttons in that they are for menu items that store on/off state.  However they should be used to indicate that menu items in a group can only be in one state */
		RadioButton,

		/** Similar to Button but will display a readonly checkbox next to the item. */
		Check
	};
}

USTRUCT(BlueprintType)
struct FJavascriptUICommand
{
	GENERATED_BODY()

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FString Id;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FString FriendlyName;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FString Description;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FInputChord DefaultChord;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	TEnumAsByte<EJavasrciptUserInterfaceActionType::Type> ActionType;
};

/**
*
*/
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptUICommands : public UObject, public IEditorExtension
{
	GENERATED_UCLASS_BODY()

public:
	DECLARE_DYNAMIC_DELEGATE_OneParam(FJavascriptExecuteAction, FString, Id);

	DECLARE_DYNAMIC_DELEGATE_RetVal_OneParam(bool, FJavascriptCanExecuteAction, FString, Id);

#if WITH_EDITOR
	UPROPERTY()
	FJavascriptExecuteAction OnExecuteAction;	

	UPROPERTY()
	FJavascriptCanExecuteAction OnCanExecuteAction;	

	UPROPERTY()
	FJavascriptCanExecuteAction OnIsActionChecked;	

	UPROPERTY()
	FJavascriptCanExecuteAction OnIsActionButtonVisible;	

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	TArray<FJavascriptUICommand> Commands;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FString ContextName;
	
	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FText ContextDesc;
	
	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FName ContextNameParent;
	
	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FName StyleSetName;

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	void Commit();

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	void Discard();

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	void Refresh();

	bool bRegistered;

	TArray<TSharedPtr<FUICommandInfo>> CommandInfos;
	TSharedPtr<FBindingContext> BindingContext;

	void Bind(FUICommandList* CommandList);
	void Unbind(FUICommandList* CommandList);

	virtual void Register() override;
	virtual void Unregister() override;

	virtual void BeginDestroy() override;

	TSharedPtr<FUICommandInfo> GetAction(FString Id);
#endif
};
