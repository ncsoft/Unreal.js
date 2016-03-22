#pragma once

#include "JavascriptEditorInputProcessor.generated.h"

/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptEditorInputProcessor : public UObject
{
	GENERATED_BODY()

public:	
	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting|Javascript")
	bool HandleKeyDownEvent(const FKeyEvent& InKeyEvent);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting|Javascript")
	bool HandleKeyUpEvent(const FKeyEvent& InKeyEvent);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting|Javascript")
	bool HandleMouseMoveEvent(const FPointerEvent& InPointerEvent);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting|Javascript")
	bool HandleAnalogInputEvent(const FAnalogInputEvent& InKeyEvent);
	
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Activate(bool bEnable);

	virtual void BeginDestroy() override;

	bool bActivated{ false };
};
