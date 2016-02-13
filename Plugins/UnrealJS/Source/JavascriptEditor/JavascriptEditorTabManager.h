#pragma once

#include "JavascriptEditorTab.h"
#include "JavascriptEditorTabManager.generated.h"

class UJavascriptEditorTabManager;

/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptEditorTabManager : public UWidget
{
	GENERATED_UCLASS_BODY()

public:	
	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FString Layout;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	TArray<UJavascriptEditorTab*> Tabs;

#if WITH_EDITOR
	TArray<TWeakPtr<SVerticalBox>> SpawnedAreas;
	
	void Commit();
	void Setup(TSharedRef<SVerticalBox> VerticalBox);
	void Check(SVerticalBox* LastOne);

	virtual TSharedRef<SWidget> RebuildWidget();
	virtual const FText GetPaletteCategory() override;
#endif
};
