#pragma once

#include "JavascriptSemaphore.generated.h"

/**
 * 
 */
UCLASS(BlueprintType)
class V8_API UJavascriptSemaphore : public UObject
{
	GENERATED_BODY()

private:
	FGenericPlatformProcess::FSemaphore* Semaphore{ nullptr };

public:
	virtual void BeginDestroy() override;

	UFUNCTION(BlueprintCallable, Category = "Javascript")
	void Dispose();

	UFUNCTION(BlueprintCallable, Category = "Javascript")
	void Lock();

	UFUNCTION(BlueprintCallable, Category = "Javascript")
	bool TryLock(int32 NanosecondsToWait);

	UFUNCTION(BlueprintCallable, Category = "Javascript")
	void Unlock();

	UFUNCTION(BlueprintCallable, Category = "Javascript")
	static UJavascriptSemaphore* Create(const FName& Name, bool bCreate, int32 MaxLocks);
};
