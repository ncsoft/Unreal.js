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
	static void SetAlphamapDataFromMemory(ULandscapeInfo* LandscapeInfo, ULandscapeLayerInfoObject* LayerInfo, int32 MinX, int32 MinY, int32 MaxX, int32 MaxY, ELandscapeLayerPaintingRestriction PaintingRestriction  = ELandscapeLayerPaintingRestriction::None);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void GetAlphamapDataToMemory(ULandscapeInfo* LandscapeInfo, ULandscapeLayerInfoObject* LayerInfo, int32 MinX, int32 MinY, int32 MaxX, int32 MaxY);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static ULandscapeLayerInfoObject* GetLayerInfoByName(ULandscapeInfo* LandscapeInfo, FName LayerName, ALandscapeProxy* Owner = NULL);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static bool GetLandscapeExtent(ULandscapeInfo* LandscapeInfo, int32& MinX, int32& MinY, int32& MaxX, int32& MaxY);
		
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
	static ABrush* GetDefaultBrush(UWorld* World);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static bool Build(UBrushBuilder* Builder, UWorld* InWorld, ABrush* InBrush = nullptr);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void Select(USelection* Selection, UObject* InObject);
	
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void Deselect(USelection* Selection, UObject* InObject);
	
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void ToggleSelect(USelection* Selection, UObject* InObject);
	
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void DeselectAll(USelection* Selection, UClass* InClass = NULL);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static int32 GetSelectedObjects(USelection* Selection, TArray<UObject*>& Out);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static ABrush* csgAdd(ABrush* DefaultBrush, int32 PolyFlags, EBrushType BrushType);
	
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript", DisplayName = "Modify")
	static void ModifyObject(UObject* Object, bool bAlwaysMarkDirty = false);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript", DisplayName = "Modify")
	static void InvalidateModelGeometry(UWorld* World, ULevel* InLevel);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript", DisplayName = "Modify")
	static void UpdateModelComponents(ULevel* Level);	
#endif
};
