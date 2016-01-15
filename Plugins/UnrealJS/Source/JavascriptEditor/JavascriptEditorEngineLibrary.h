#pragma once

#include "JavascriptEditorGlobalDelegates.h"
#include "JavascriptEditorEngineLibrary.generated.h"

/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptEditorEngineLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

#if WITH_EDITOR	
	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static UWorld* GetEditorWorld(UEngine* Engine);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static UWorld* GetPIEWorld(UEngine* Engine);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void RedrawAllViewports(UEditorEngine* Engine, bool bInvalidateHitProxies);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static bool Exec(UEditorEngine* Engine, UWorld* InWorld, const FString& Command, FString& Out);
		
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static UBrushBuilder* FindBrushBuilder(UEditorEngine* Engine, UClass* BrushBuilderClass);

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

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static class USelection* GetSelectedComponents(UEditorEngine* Engine);
	
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static class USelection* GetSelectedObjects(UEditorEngine* Engine);
	
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static class USelection* GetSelectedSet(UEditorEngine* Engine, const UClass* Class);	

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void RebuildLevel(UEditorEngine* Engine, ULevel* Level);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static int32 bspBrushCSG(UEditorEngine* Engine, ABrush* Actor, UModel* Model, int32 PolyFlags, EBrushType BrushType, ECsgOper CSGOper, bool bBuildBounds, bool bMergePolys, bool bReplaceNULLMaterialRefs, bool bShowProgressBar = true);
	
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void RebuildStaticNavigableGeometry(UEditorEngine* Engine, ULevel* Level);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void SetMaterial(UEditorEngine* Engine, UModel* InModel, UMaterialInterface* Material, const TArray<int32>& Surfaces);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static void GetSurfaces(ABrush* Brush, TArray<int32>& Surfaces);
#endif
};
