#pragma once

#include "JavascriptUMGBlueprintLibrary.generated.h"

/**
 * 
 */
UCLASS()
class JAVASCRIPTUMG_API UJavascriptUMGBlueprintLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

public:	
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static FSlateColor SlateColor_UseForeground();	

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static FSlateColor SlateColor_UseSubduedForeground();

	UFUNCTION(BlueprintCallable, Category = "Painting")
	static void DrawSpaceSpline(UPARAM(ref) FPaintContext& Context, FVector2D InStart, FVector2D InStartDir, FVector2D InEnd, FVector2D InEndDir, float InThickness, FLinearColor InTint);
};