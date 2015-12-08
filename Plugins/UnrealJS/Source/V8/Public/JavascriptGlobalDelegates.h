#pragma once

#include "JavascriptGlobalDelegates.generated.h"

UCLASS()
class V8_API UJavascriptGlobalDelegates : public UObject
{
	GENERATED_BODY()

public:
	virtual void BeginDestroy() override;

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnObjectModified(UObject* Object);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnAssetLoaded(UObject* Object);	

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnObjectSaved(UObject* Object);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Bind(FString Key);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Unbind(FString Key);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void UnbindAll();

	TMap<FString,FDelegateHandle> Handles;
};