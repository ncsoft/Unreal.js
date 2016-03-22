#pragma once

#include "JavascriptEditorMenu.generated.h"


/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptEditorMenu : public UWidget
{
	GENERATED_UCLASS_BODY()

public:	
	DECLARE_DYNAMIC_DELEGATE_OneParam(FOnHook, FName, Hook);

#if WITH_EDITOR
	UPROPERTY()
	FOnHook OnHook;

	TArray<TWeakPtr<SVerticalBox>> SpawnedMenus;

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void AddPullDownMenu(const FName& Id, const FText& MenuLabel, const FText& Tooltip);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	void Refresh();
	
	void Commit();
	void Setup(TSharedRef<SVerticalBox> VerticalBox);
	void Check(SVerticalBox* LastOne);

	virtual TSharedRef<SWidget> RebuildWidget();
#endif
};
