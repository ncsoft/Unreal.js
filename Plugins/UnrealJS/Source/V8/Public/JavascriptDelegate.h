#pragma once

#include "JavascriptDelegate.generated.h"

class FJavascriptDelegate;

UCLASS()
class V8_API UJavascriptDelegate : public UObject
{
	GENERATED_BODY()

public:
	int32 UniqueId;

	FJavascriptDelegate* JavascriptDelegate;	

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	void Fire();

	virtual void ProcessEvent(UFunction* Function, void* Parms) override;
};