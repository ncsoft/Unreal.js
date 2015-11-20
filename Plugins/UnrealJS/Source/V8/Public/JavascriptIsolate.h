#pragma once

#include "JavascriptIsolate.generated.h"

class UJavascriptContext;
class FJavascriptIsolate;

UCLASS()
class V8_API UJavascriptIsolate : public UObject
{
	GENERATED_UCLASS_BODY()

public:
	virtual ~UJavascriptIsolate() override;

	TSharedPtr<FJavascriptIsolate> JavascriptIsolate;	

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	UJavascriptContext* CreateContext();

	// Begin UObject interface.
	static void AddReferencedObjects(UObject* InThis, FReferenceCollector& Collector);
	// End UObject interface.
};
