#pragma once

#if WITH_EDITOR
#include "TickableEditorObject.h"
#endif
#include "JavascriptEditorTick.generated.h"

/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptEditorTick : public UObject
{
	GENERATED_UCLASS_BODY()

public:
#if WITH_EDITOR
	FTickableEditorObject* Tickable;

	DECLARE_DYNAMIC_DELEGATE_OneParam(FJavascriptEditorTickSignature, float, DeltaSeconds);

	UPROPERTY()
	FJavascriptEditorTickSignature OnTick;

	UFUNCTION()
	UEditorEngine* GetEngine();

	virtual void BeginDestroy() override;
#endif
};
