#pragma once

#include "JavascriptEditorGlobalDelegates.generated.h"

UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptEditorGlobalDelegates : public UObject
{
	GENERATED_BODY()

public:
	virtual void BeginDestroy() override;

#if WITH_EDITOR
	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PreBeginPIE(const bool bIsSimulating);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void BeginPIE(const bool bIsSimulating);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void EndPIE(const bool bIsSimulating);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void ResumePIE(const bool bIsSimulating);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void SingleStepPIE(const bool bIsSimulating);
#endif

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Bind(FString Key);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Unbind(FString Key);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void UnbindAll();

	TMap<FString,FDelegateHandle> Handles;
};