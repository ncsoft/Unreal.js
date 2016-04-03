#pragma once

#include "JavascriptIsolate.generated.h"

class UJavascriptContext;
class FJavascriptIsolate;

USTRUCT()
struct FJavascriptMemoryStruct
{
	GENERATED_BODY()

public:
	virtual int32 GetDimension() { return 1;  }
	virtual void* GetMemory(const int32* Dim) { return nullptr; }
	virtual int32 GetSize(int32 Dim) { return 0; }
};

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
