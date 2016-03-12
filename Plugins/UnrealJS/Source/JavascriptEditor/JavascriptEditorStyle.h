#pragma once

#include "JavascriptEditorStyle.generated.h"


/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptEditorStyle : public UObject
{
	GENERATED_UCLASS_BODY()

public:		

#if WITH_EDITOR
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FButtonStyle GetButtonStyle(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FTextBlockStyle GetTextBlockStyle(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FEditableTextStyle GetEditableTextStyle(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FEditableTextBoxStyle GetEditableTextBoxStyle(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FCheckBoxStyle GetCheckBoxStyle(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FComboBoxStyle GetComboBoxStyle(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FComboButtonStyle GetComboButtonStyle(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FMargin GetMargin(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FSlateColor GetSlateColor(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FSlateBrush GetBrush(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FLinearColor GetColor(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FVector2D GetVector(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static float GetFloat(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FSlateFontInfo GetFontStyle(const FName& StyleName);
	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static FSlateSound GetSound(const FName& StyleName);

	UPROPERTY()
	FSlateColor SlateColor;	

	UPROPERTY()
	FSlateBrush SlateBrush;

	UPROPERTY()
	FButtonStyle ButtonStyle;
	
	UPROPERTY()
	FTextBlockStyle TextBlockStyle;

	UPROPERTY()
	FEditableTextStyle EditableTextStyle;

	UPROPERTY()
	FEditableTextBoxStyle EditableTextBoxStyle;

	UPROPERTY()
	FCheckBoxStyle CheckBoxStyle;

	UPROPERTY()
	FComboBoxStyle ComboBoxStyle;

	UPROPERTY()
	FComboButtonStyle ComboButtonStyle;
#endif
};
