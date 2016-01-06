#pragma once

#if WITH_EDITOR
#define V8_ENABLE_DIRECTORY_WATCHER 1
#else
#define V8_ENABLE_DIRECTORY_WATCHER 0
#endif

#if V8_ENABLE_DIRECTORY_WATCHER
#include "IDirectoryWatcher.h"
#endif

#include "DirectoryWatcher.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE(FDirectoryWatcherCallback);

UCLASS()
class V8_API UDirectoryWatcher : public UObject
{
	GENERATED_BODY()

public:	
	virtual void BeginDestroy() override;

#if V8_ENABLE_DIRECTORY_WATCHER
	IDirectoryWatcher::FDirectoryChanged Changed;
#endif

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
