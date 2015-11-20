#include "JavascriptUMG.h"
#include "JavascriptListView.h"
#include "JavascriptContext.h"

UJavascriptListView::UJavascriptListView(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{	
}

TSharedRef<SWidget> UJavascriptListView::RebuildWidget()
{
	MyListView = SNew(SListView< UObject* >)
		.SelectionMode(SelectionMode)
		.ListItemsSource(&Items)
		.ItemHeight(ItemHeight)
		.OnGenerateRow(BIND_UOBJECT_DELEGATE(SListView< UObject* >::FOnGenerateRow, HandleOnGenerateRow))
		.OnSelectionChanged_Lambda([this](UObject* Object, ESelectInfo::Type SelectInfo){
			OnSelectionChanged(Object, SelectInfo);
		})
		.OnMouseButtonClick_Lambda([this](UObject* Object){
			OnClick(Object);
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

	return BuildDesignTimeWidget(MyListView.ToSharedRef());
}

void UJavascriptListView::ProcessEvent(UFunction* Function, void* Parms)
{
	if (JavascriptContext && JavascriptContext->CallProxyFunction(this, this, Function, Parms))
	{
		return;
	}

	Super::ProcessEvent(Function, Parms);
}

void UJavascriptListView::RequestListRefresh()
{
	MyListView->RequestListRefresh();
}