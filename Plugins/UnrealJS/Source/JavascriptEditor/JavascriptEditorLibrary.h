#pragma once

#include "JavascriptEditorGlobalDelegates.h"
#include "JavascriptEditorLibrary.generated.h"

/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptEditorLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

#if WITH_EDITOR
	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static ULandscapeInfo* GetLandscapeInfo(ALandscape* Landscape, bool bSpawnNewActor);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void SetHeightmapDataFromMemory(ULandscapeInfo* LandscapeInfo, int32 MinX, int32 MinY, int32 MaxX, int32 MaxY);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void GetHeightmapDataToMemory(ULandscapeInfo* LandscapeInfo, int32 MinX, int32 MinY, int32 MaxX, int32 MaxY);	

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void SetAlphamapDataFromMemory(ULandscapeInfo* LandscapeInfo, ULandscapeLayerInfoObject* LayerInfo, int32 MinX, int32 MinY, int32 MaxX, int32 MaxY, ELandscapeLayerPaintingRestriction::Type PaintingRestriction  = ELandscapeLayerPaintingRestriction::None);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void GetAlphamapDataToMemory(ULandscapeInfo* LandscapeInfo, ULandscapeLayerInfoObject* LayerInfo, int32 MinX, int32 MinY, int32 MaxX, int32 MaxY);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static ULandscapeLayerInfoObject* GetLayerInfoByName(ULandscapeInfo* LandscapeInfo, FName LayerName, ALandscapeProxy* Owner = NULL);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static bool GetLandscapeExtent(ULandscapeInfo* LandscapeInfo, int32& MinX, int32& MinY, int32& MaxX, int32& MaxY);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static UWorld* GetEditorWorld(UEngine* Engine);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static UWorld* GetPIEWorld(UEngine* Engine);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void RedrawAllViewports(UEditorEngine* Engine, bool bInvalidateHitProxies);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void OpenPopupWindow(UWidget* Widget, const FVector2D& PopupDesiredSize, const FText& HeadingText);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void GetAllTags(const FJavascriptAssetData& AssetData, TArray<FName>& OutArray);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static bool GetTagValue(const FJavascriptAssetData& AssetData, const FName& Name, FString& OutValue);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static UClass* GetClass(const FJavascriptAssetData& AssetData);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static UPackage* GetPackage(const FJavascriptAssetData& AssetData);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static UObject* GetAsset(const FJavascriptAssetData& AssetData);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static bool IsAssetLoaded(const FJavascriptAssetData& AssetData);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static bool EditorDestroyActor(UWorld* World, AActor* Actor, bool bShouldModifyLevel);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void SetIsTemporarilyHiddenInEditor(AActor* Actor, bool bIsHidden);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static bool Exec(UEditorEngine* Engine, UWorld* InWorld, const FString& Command);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static ABrush* GetDefaultBrush(UWorld* World);

	// Selection.
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void SelectActor(UEditorEngine* Engine, AActor* Actor, bool bInSelected, bool bNotify, bool bSelectEvenIfHidden = false, bool bForceRefresh = false);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static bool CanSelectActor(UEditorEngine* Engine, AActor* Actor, bool bInSelected, bool bSelectEvenIfHidden = false, bool bWarnIfLevelLocked = false);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void SelectGroup(UEditorEngine* Engine, class AGroupActor* InGroupActor, bool bForceSelection = false, bool bInSelected = true, bool bNotify = true);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void SelectComponent(UEditorEngine* Engine, class UActorComponent* Component, bool bInSelected, bool bNotify, bool bSelectEvenIfHidden = false);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void SelectNone(UEditorEngine* Engine, bool bNoteSelectionChange, bool bDeselectBSPSurfs, bool WarnAboutManyActors = true);

#endif
};
