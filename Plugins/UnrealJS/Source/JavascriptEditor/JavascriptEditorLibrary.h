#pragma once

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
#endif
};
