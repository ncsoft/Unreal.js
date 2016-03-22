#pragma once

#include "Widget.h"
#include "Editor/PropertyEditor/Public/PropertyEditorModule.h"
#include "PropertyEditor.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FPropertyEditorParameterChanged, FName, ParameterName);

/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UPropertyEditor : public UWidget
{
	GENERATED_UCLASS_BODY()

#if WITH_EDITOR
	UFUNCTION(BlueprintCallable, Category = "PropertyEditor")
	void SetObject(UObject* Object);

	UPROPERTY(BlueprintAssignable, Category = "PropertyEditor")
	FPropertyEditorParameterChanged OnChange;
	
	FWeakObjectPtr ObjectToInspect;

public:	
	virtual void ReleaseSlateResources(bool bReleaseChildren) override;

protected:
	TSharedPtr<class IDetailsView> View;

protected:
	// UWidget interface
	virtual TSharedRef<SWidget> RebuildWidget() override;
	// End of UWidget interface

	void OnFinishedChangingProperties(const FPropertyChangedEvent& PropertyChangedEvent);
#endif	
};
