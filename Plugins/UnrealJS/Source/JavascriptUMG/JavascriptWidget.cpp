#include "JavascriptUMG.h"
#include "JavascriptWidget.h"
#include "JavascriptContext.h"
#include "Blueprint/WidgetTree.h"

UJavascriptWidget::UJavascriptWidget(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{
	WidgetTree = CreateDefaultSubobject<UWidgetTree>(TEXT("WidgetTree"));
	WidgetTree->SetFlags(RF_Transactional);
}

void UJavascriptWidget::SetRootWidget(UWidget* Widget)
{
	WidgetTree->RootWidget = Widget;
}

void UJavascriptWidget::ProcessEvent(UFunction* Function, void* Parms)
{
	if (JavascriptContext && JavascriptContext->CallProxyFunction(this, this, Function, Parms))
	{		
		return;
	}
	
	Super::ProcessEvent(Function, Parms);	
}

void UJavascriptWidget::CallSynchronizeProperties(UVisual* Visual)
{
	if (auto Widget = Cast<UWidget>(Visual))
	{
		TSharedPtr<SWidget> SafeWidget = Widget->GetCachedWidget();
		if (SafeWidget.IsValid())
		{
			Widget->SynchronizeProperties();
		}
	}
	else if (auto Slot = Cast<UPanelSlot>(Visual))
	{
		Slot->SynchronizeProperties();
	}	
}

bool UJavascriptWidget::HasValidCachedWidget(UWidget* Widget)
{
	return Widget && Widget->GetCachedWidget().IsValid();
}
