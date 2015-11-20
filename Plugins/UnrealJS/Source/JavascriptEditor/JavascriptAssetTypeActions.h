#pragma once

#if WITH_EDITOR
#include "IAssetTypeActions.h"
#endif

#include "JavascriptAssetTypeActions.generated.h"

class UJavascriptAssetEditorToolkit;
class UJavascriptUIExtender;

/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptAssetTypeActions : public UObject, public IEditorExtension
{
	GENERATED_UCLASS_BODY()

public:		
	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FText ActionsName;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	FColor Color;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	TSubclassOf<UObject> SupportedClass;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	UJavascriptAssetEditorToolkit* Editor;

	UPROPERTY(BlueprintReadWrite, Category = "Javascript | Editor")
	UJavascriptUIExtender* Actions;
		
	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	void Commit();

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	void Discard();

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	void Refresh();

	bool bRegistered;

#if WITH_EDITOR	
	virtual void Register() override;
	virtual void Unregister() override;

	virtual void BeginDestroy() override;

	TSharedPtr<IAssetTypeActions> Instance;
#endif
};
