#pragma once

#include "JavascriptMemoryObject.generated.h"

/**
 * 
 */
UCLASS(BlueprintType, Abstract)
class V8_API UJavascriptMemoryObject : public UObject
{
	GENERATED_BODY()

public:
	virtual void* GetMemory() { return nullptr; }
	virtual int32 GetSize() { return 0; }
};
