#include "JavascriptUMG.h"
#include "JavascriptTileView.h"
#include "JavascriptContext.h"

UJavascriptTileView::UJavascriptTileView(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{	
}

TSharedRef<SWidget> UJavascriptTileView::RebuildWidget()
{
	MyTileView = SNew(STileView< UObject* >)
		.SelectionMode(SelectionMode)
		.ListItemsSource(&Items)
		.ItemHeight(ItemHeight)
		.OnGenerateTile(BIND_UOBJECT_DELEGATE(STileView< UObject* >::FOnGenerateRow, HandleOnGenerateTile))
		.OnSelectionChanged_Lambda([this](UObject* Object, ESelectInfo::Type SelectInfo){
			OnSelectionChanged(Object, SelectInfo);
		})
		.OnMouseButtonDoubleClick_Lambda([this](UObject* Object){
			OnDoubleClick(Object);
		})
		//.OnContextMenuOpening(this, &SSocketManager::OnContextMenuOpening)
		//.OnItemScrolledIntoView(this, &SSocketManager::OnItemScrolledIntoView)
		//	.HeaderRow
		//	(
		//		SNew(SHeaderRow)
		//		.Visibility(EVisibility::Collapsed)
		//		+ SHeaderRow::Column(TEXT("Socket"))
		//	);
		;

	return BuildDesignTimeWidget(MyTileView.ToSharedRef());
}

void UJavascriptTileView::ProcessEvent(UFunction* Function, void* Parms)
{
	if (JavascriptContext && JavascriptContext->CallProxyFunction(this, this, Function, Parms))
	{
		return;
	}

	Super::ProcessEvent(Function, Parms);
}