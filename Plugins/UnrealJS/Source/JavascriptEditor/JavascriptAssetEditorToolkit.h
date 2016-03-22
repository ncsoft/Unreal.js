#pragma once

#if WITH_EDITOR
#include "AssetEditorToolkit.h"
#endif

#include "JavascriptAssetEditorToolkit.generated.h"

class UJavascriptEditorTab;
class UJavascriptUICommands;
class UJavascriptUIExtender;

/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptAssetEditorToolkit : public UObject, public IEditorExtension
{
	GENERATED_UCLASS_BODY()

public:		
#if WITH_EDITOR
	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FName ToolkitFName;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FString Layout;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FText BaseToolkitName;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FText ToolkitName;	

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FLinearColor WorldCentricTabColorScale;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FString WorldCentricTabPrefix;
	
	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	TArray<UJavascriptEditorTab*> Tabs;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	UJavascriptUICommands* Commands;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	UJavascriptUIExtender* MenuExtender;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	UJavascriptUIExtender* ToolbarExtender;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	TArray<int32> TestArray;
		
	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	void Commit();

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	void Discard();

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	void Refresh();

	bool bRegistered;

	virtual void Register() override;
	virtual void Unregister() override;

	virtual void BeginDestroy() override;

	TArray<TWeakPtr<FAssetEditorToolkit>> SpawnedEditors;

	void Open(const TArray<UObject*>& InObjects, TSharedPtr<IToolkitHost> EditWithinLevelEditor);
#endif
};
