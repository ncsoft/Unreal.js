#pragma once

#include "JavascriptProfile.generated.h"

USTRUCT()
struct FJavascriptProfileNode
{
	GENERATED_BODY()

	const void* Node;
};

UCLASS(BlueprintType)
class V8_API UJavascriptProfile : public UObject
{
	GENERATED_BODY()

public:
	void* Profile{ nullptr };

	virtual void BeginDestroy() override;

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	FJavascriptProfileNode GetTopDownRoot();

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	int32 GetSamplesCount();
	
	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	FJavascriptProfileNode GetSample(int32 index);
		
	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	float GetSampleTimestamp(int32 index);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	static void Start(const FString& Title, bool bRecordSamples);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	static UJavascriptProfile* Stop(const FString& Title);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	static void SetSamplingInterval(int32 us);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	static void SetIdle(bool is_idle);
};
