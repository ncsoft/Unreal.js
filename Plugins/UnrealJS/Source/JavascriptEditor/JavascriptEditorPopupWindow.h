#pragma once

#include "JavascriptEditorPopupWindow.generated.h"

/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptEditorPopupWindow : public UObject
{
	GENERATED_BODY()

public:
	UPROPERTY(BlueprintReadonly, Category = "Scripting | Javascript")
	UWidget* Widget;

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	bool Open(const FText& Heading, const FVector2D& DesiredSize);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnDismissed();

	void OnDismissedRaw(TSharedRef<IMenu> Menu);
};
