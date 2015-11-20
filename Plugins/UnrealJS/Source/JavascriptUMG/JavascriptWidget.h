#pragma once

#include "UserWidget.h"
#include "JavascriptWidget.generated.h"

class UJavascriptWidget;
class UJavascriptContext;

/**
 * 
 */
UCLASS()
class JAVASCRIPTUMG_API UJavascriptWidget : public UUserWidget
{
	GENERATED_UCLASS_BODY()

public:	
	UPROPERTY(BlueprintReadWrite, Category = "Javascript")
	UJavascriptContext* JavascriptContext;

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void SetRootWidget(UWidget* Widget);	

	virtual void ProcessEvent(UFunction* Function, void* Parms) override;

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void CallSynchronizeProperties(UVisual* WidgetOrSlot);	

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static bool HasValidCachedWidget(UWidget* Widget);	
};