#pragma once

#include "JavascriptProcess.generated.h"

/**
 * 
 */
UCLASS(BlueprintType)
class V8_API UJavascriptProcess: public UObject
{
	GENERATED_UCLASS_BODY()

public:
	FProcHandle ProcessHandle;
	uint32 ProcessID;
	void* ReadPipe;
	void* WritePipe;

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	static UJavascriptProcess* Create(const FString& URL, const FString& Parms, bool bLaunchDetached, bool bLaunchHidden, bool bLaunchReallyHidden, int32 PriorityModifier, const FString& OptionalWorkingDirectory, bool bUsePipe);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	bool IsRunning();

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	void Close();

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	void Wait();

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	void Terminate(bool KillTree = false);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	bool GetReturnCode(int32& ReturnCode);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	FString ReadFromPipe();

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	bool ReadArrayFromPipe(TArray<uint8>& Array);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Scripting")
	bool WriteToPipe(const FString& Message, FString& OutWritten);
};
