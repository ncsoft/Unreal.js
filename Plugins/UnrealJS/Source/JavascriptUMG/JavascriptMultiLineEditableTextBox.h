#pragma once

#include "MultiLineEditableTextBox.h"
#include "JavascriptMultiLineEditableTextBox.generated.h"

USTRUCT()
struct FJavascriptTextLayout
{
	GENERATED_BODY()

	TSharedPtr<FTextLayout> TextLayout;
	TSharedPtr<FTextLayout const> ConstTextLayout;
};

/**
 * 
 */
UCLASS()
class JAVASCRIPTUMG_API UJavascriptMultiLineEditableTextBox : public UMultiLineEditableTextBox
{
	GENERATED_BODY()

public:	
	DECLARE_DYNAMIC_DELEGATE_RetVal_OneParam(FString, FGetText, const FJavascriptTextLayout&, TextLayout);
	DECLARE_DYNAMIC_DELEGATE_TwoParams(FSetText, FString, InText, const FJavascriptTextLayout&, TextLayout);
	DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnVScrollBarUserScrolled, float, Offset);

	/** Called whenever the text is committed.  This happens when the user presses enter or the text box loses focus. */
	UPROPERTY(BlueprintAssignable, Category = "Widget Event")
	FOnVScrollBarUserScrolled OnVScrollBarUserScrolled;

	UPROPERTY()
	FGetText GetTextDelegate;
	
	UPROPERTY()
	FSetText SetTextDelegate;

	UPROPERTY()
	bool bIsReadOnly;

	UPROPERTY()
	bool bAlwaysShowScrollbars;

	virtual TSharedRef<SWidget> RebuildWidget() override;

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void ScrollTo(int32 Line, int32 Offset);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void GoTo(int32 Line, int32 Offset);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Refresh();
};