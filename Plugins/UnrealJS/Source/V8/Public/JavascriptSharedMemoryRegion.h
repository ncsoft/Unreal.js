#pragma once

#include "JavascriptMemoryObject.h"
#include "JavascriptSharedMemoryRegion.generated.h"

/**
 * 
 */
UCLASS(BlueprintType)
class V8_API UJavascriptSharedMemoryRegion : public UJavascriptMemoryObject
{
	GENERATED_BODY()

private:
	FGenericPlatformMemory::FSharedMemoryRegion* Region{ nullptr };

public:
	virtual void BeginDestroy() override;

	UFUNCTION(BlueprintCallable, Category = "Javascript")
	void Dispose();

	virtual void* GetMemory() override;
	virtual int32 GetSize() override;

	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static UJavascriptSharedMemoryRegion* Create(const FName& Name, bool bCreate, bool bRead, bool bWrite, int32 Size);
};
