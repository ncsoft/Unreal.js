#pragma once

#include "JavascriptUMGBlueprintLibrary.generated.h"

/**
 * 
 */
UCLASS()
class JAVASCRIPTUMG_API UJavascriptUMGBlueprintLibrary : public UUserWidget
{
	GENERATED_BODY()

public:	
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static FSlateColor SlateColor_UseForeground();	

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static FSlateColor SlateColor_UseSubduedForeground();
};