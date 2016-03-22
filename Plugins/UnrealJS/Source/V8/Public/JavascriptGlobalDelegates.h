#pragma once

#include "JavascriptGlobalDelegates.generated.h"

UCLASS()
class V8_API UJavascriptGlobalDelegates : public UObject
{
	GENERATED_BODY()

public:
	virtual void BeginDestroy() override;

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnPreObjectPropertyChanged_Friendly(UObject* InObject, UProperty* Property, UProperty* MemberProperty);

	void OnPreObjectPropertyChanged(UObject* InObject, const class FEditPropertyChain& Chain)
	{
		OnPreObjectPropertyChanged_Friendly(InObject, Chain.GetActiveNode()->GetValue(), Chain.GetActiveMemberNode()->GetValue());
	}

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnObjectPropertyChanged_Friendly(UObject* InObject, UProperty* Property, UProperty* MemberProperty, int32 ChangeType);

	void OnObjectPropertyChanged(UObject* InObject, struct FPropertyChangedEvent& Event)
	{
		OnObjectPropertyChanged_Friendly(InObject, Event.Property, Event.MemberProperty, (int32)Event.ChangeType);
	}

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void RedirectorFollowed(const FString& PackageName, UObject* Redirector);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PreGarbageCollect();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PostGarbageCollect();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PreLoadMap();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PostLoadMap();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PostDemoPlay();
	
	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PackageCreatedForLoad(class UPackage* InPackage);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnObjectModified(UObject* Object);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnAssetLoaded(UObject* Object);	

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnObjectSaved(UObject* Object);

	/// WorldDelegates
	///@todo : ELevelTick -> BT Type
// 	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
// 	void OnWorldTickStart(ELevelTick LevelTickType, float Delta);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnPostWorldCreation(UWorld* World);

	///@todo : InitializationValues -> BT Type
// 	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
// 	void OnPreWorldInitialization(UWorld* World, const UWorld::InitializationValues IVS);
// 
// 	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
// 	void OnPostWorldInitialization(UWorld* World, const UWorld::InitializationValues IVS);

#if WITH_EDITOR
	// Callback for world rename event (pre)
// 	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
// 	void OnPreWorldRename(UWorld* World, const TCHAR* InName, UObject* NewOuter, ERenameFlags Flags, bool& bShouldFailRename);
#endif // WITH_EDITOR

// 	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
// 	void OnPostDuplicate(UWorld* World, bool bDuplicateForPIE, FReplacementMap& ReplacementMap, TArray<UObject*>& ObjectsToFixReferences);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnWorldCleanup(UWorld* World, bool bSessionEnded, bool bCleanupResources);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnPreWorldFinishDestroy(UWorld* World);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void LevelAddedToWorld(ULevel* Level, UWorld* World);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void LevelRemovedFromWorld(ULevel* Level, UWorld* World);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PostApplyLevelOffset(ULevel* Level, UWorld* World, const FVector& Offset, bool Flag);

// 	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
// 	void GetAssetTags(const UWorld* World, TArray<UObject::FAssetRegistryTag>& Tags);

#if WITH_EDITOR
// 	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
// 	void RefreshLevelScriptActions(UWorld* World);
#endif
	/// end of WorldDelegates

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Bind(FString Key);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Unbind(FString Key);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void UnbindAll();

	TMap<FString,FDelegateHandle> Handles;
};