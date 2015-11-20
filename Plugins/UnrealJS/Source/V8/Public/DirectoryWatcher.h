#pragma once

#include "IDirectoryWatcher.h"
#include "DirectoryWatcher.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE(FDirectoryWatcherCallback);

UCLASS()
class V8_API UDirectoryWatcher : public UObject
{
	GENERATED_BODY()

public:	
	virtual void BeginDestroy() override;

	IDirectoryWatcher::FDirectoryChanged Changed;

	FDelegateHandle DelegateHandle;

	FString Directory;

	UPROPERTY(BlueprintReadOnly, Category = "Javascript")
	TArray<FString> Added;

	UPROPERTY(BlueprintReadOnly, Category = "Javascript")
	TArray<FString> Modified;

	UPROPERTY(BlueprintReadOnly, Category = "Javascript")
	TArray<FString> Removed;

	UPROPERTY(BlueprintAssignable)
	FDirectoryWatcherCallback OnChanged;

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	bool Contains(const FString& File);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	void Watch(const FString& Directory);	

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	void Unwatch();
};
