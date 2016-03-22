#pragma once
#if WITH_EDITOR
#include "AssetData.h"
#include "IAssetRegistry.h"
#endif
#include "JavascriptEditorGlobalDelegates.generated.h"

USTRUCT()
struct FJavascriptTagAndValue
{
	GENERATED_BODY()

	UPROPERTY()
	FName Tag;

	UPROPERTY()
	FString Value;
};

USTRUCT()
struct FJavascriptAssetData
{
	GENERATED_BODY()

	FJavascriptAssetData() {}

#if WITH_EDITOR
	FJavascriptAssetData(const FAssetData&);
#endif

	UPROPERTY()
	FName ObjectPath;
	UPROPERTY()
	FName PackageName;
	UPROPERTY()
	FName PackagePath;
	UPROPERTY()
	FName GroupNames;
	UPROPERTY()
	FName AssetName;
	UPROPERTY()
	FName AssetClass;
	UPROPERTY()
	TArray<int32> ChunkIDs;	
	UPROPERTY()
	int32 PackageFlags;

#if WITH_EDITOR
	FAssetData SourceAssetData;
#endif
};

UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptEditorGlobalDelegates : public UObject
{
	GENERATED_BODY()

public:
	virtual void BeginDestroy() override;

#if WITH_EDITOR
	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void NewCurrentLevel();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void MapChange_Friendly(int32 MapChangeFlags);

	void MapChange(uint32 MapChangeFlags)
	{
		MapChange_Friendly((int32)MapChangeFlags);
	}

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void LayerChange();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void ChangeEditorMode(FName NewMode);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void SurfProps();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void SelectedProps();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void FitTextureToSurface(UWorld* World);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void ActorPropertiesChange();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void RefreshEditor();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void RefreshAllBrowsers();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void RefreshLayerBrowser();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void RefreshPrimitiveStatsBrowser();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void LoadSelectedAssetsIfNeeded();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void DisplayLoadErrors();
	/*FEditorDelegates::FOnEditorModeTransitioned				FEditorDelegates::EditorModeEnter;
	FEditorDelegates::FOnEditorModeTransitioned				FEditorDelegates::EditorModeExit;*/
	// PIE
	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PropertySelectionChange();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PostLandscapeLayerUpdated();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PreSaveWorld_Friendly(int32 SaveFlags, UWorld* World);

	void PreSaveWorld(uint32 SaveFlags, UWorld* World)
	{
		PreSaveWorld_Friendly((int32)SaveFlags, World);
	}

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void PostSaveWorld_Friendly(int32 SaveFlags, UWorld* World, bool bSuccess);

	void PostSaveWorld(uint32 SaveFlags, UWorld* World, bool bSuccess)
	{
		PostSaveWorld_Friendly(SaveFlags, World, bSuccess);
	}

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnFinishPickingBlueprintClass(UClass* InClass);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnConfigureNewAssetProperties(UFactory* InFactory);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnNewAssetCreated(UFactory* InFactory);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnAssetPreImport_Friendly(UFactory* InFactory, UClass* InClass, UObject* InParent, const FName& Name, const FName& Type);

	void OnAssetPreImport(UFactory* InFactory, UClass* InClass, UObject* InParent, const FName& Name, const TCHAR* Type)
	{
		OnAssetPreImport_Friendly(InFactory, InClass, InParent, Name, FName(Type));
	}

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnAssetPostImport(UFactory* InFactory, UObject* InCreatedObject);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnAssetReimport(UObject* InCreatedObject);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnNewActorsDropped(const TArray<UObject*>& DroppedObjects, const TArray<AActor*>& OutNewActors);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnGridSnappingChanged(bool bGridEnabled, float GridSize);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnLightingBuildStarted();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnLightingBuildKept();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnApplyObjectToActor(UObject* ObjectToApply, AActor* Actor);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnFocusViewportOnActors(const TArray<AActor*>& Actors);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnMapOpened(const FString& Filename, bool bAsTemplate);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnEditorCameraMoved(const FVector& ViewLocation, const FRotator& ViewRotation, ELevelViewportType ViewportType, int32 ViewIndex);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnDollyPerspectiveCamera(const FVector& Drag, int32 ViewIndex);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnShutdownPostPackagesSaved();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnAssetsPreDelete(const TArray<UObject*>& Assets);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnAssetsDeleted(const TArray<UClass*>& Classes);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnActionAxisMappingsChanged();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnAddLevelToWorld(ULevel* Level);

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

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnPathAdded(const FString& Path);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnPathRemoved(const FString& Path);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnAssetAdded_Friendly(const FJavascriptAssetData& AssetData);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnAssetRemoved_Friendly(const FJavascriptAssetData& AssetData);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnAssetRenamed_Friendly(const FJavascriptAssetData& AssetData, const FString& Name);

	void OnAssetAdded(const FAssetData& AssetData)
	{
		OnAssetAdded_Friendly(AssetData);
	}
	void OnAssetRemoved(const FAssetData& AssetData)
	{
		OnAssetRemoved_Friendly(AssetData);
	}
	void OnAssetRenamed(const FAssetData& AssetData, const FString& Name)
	{
		OnAssetRenamed_Friendly(AssetData, Name);
	}	

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnInMemoryAssetCreated(UObject* InObject);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnInMemoryAssetDeleted(UObject* InObject);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnFilesLoaded();
	
	void OnFileLoadProgressUpdated(const IAssetRegistry::FFileLoadProgressUpdateData& ProgressUpdateData)
	{
		OnFileLoadProgressUpdated_Friendly(
			ProgressUpdateData.NumTotalAssets, 
			ProgressUpdateData.NumAssetsProcessedByAssetRegistry, 
			ProgressUpdateData.NumAssetsPendingDataLoad, 
			ProgressUpdateData.bIsDiscoveringAssetFiles);
	}

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnFileLoadProgressUpdated_Friendly(int32 NumTotalAssets, int32 NumAssetsProcessedByAssetRegistry, int32 NumAssetsPendingDataLoad, bool bIsDiscoveringAssetFiles);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnBlueprintPreCompile(UBlueprint* Blueprint);

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnBlueprintCompiled();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnBlueprintReinstanced();
	
	//OnObjectsReplaced

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnClassPackageLoadedOrUnloaded();
	
	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnObjectReimported(UObject* Object);

		//GetActorRecordingState

	// FEditorSupportDelegates

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void RedrawAllViewports();
	
	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void CleanseEditor();
	
	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void WorldChange();
	
#endif

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Bind(FString Key);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Unbind(FString Key);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void UnbindAll();

	TMap<FString,FDelegateHandle> Handles;
};