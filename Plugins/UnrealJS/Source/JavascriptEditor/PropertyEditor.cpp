#include "JavascriptEditor.h"
#include "PropertyEditor.h"

#define LOCTEXT_NAMESPACE "UMG"

UPropertyEditor::UPropertyEditor(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{}

#if WITH_EDITOR
void UPropertyEditor::SetObject(UObject* Object)
{
	ObjectToInspect = Object;

	if (View.IsValid())
	{
		View->SetObject(Object);
	}	
}

TSharedRef<SWidget> UPropertyEditor::RebuildWidget()
{
	if (IsDesignTime())
	{
		return BuildDesignTimeWidget(SNew(SBox)
			.HAlign(HAlign_Center)
			.VAlign(VAlign_Center)
			[
				SNew(STextBlock)
				.Text(LOCTEXT("PropertyEditor", "PropertyEditor"))
			]);
	}
	else
	{
		FPropertyEditorModule& EditModule = FModuleManager::Get().GetModuleChecked<FPropertyEditorModule>("PropertyEditor");
		FDetailsViewArgs DetailsViewArgs(/*bUpdateFromSelection=*/ false, /*bLockable=*/ false, /*bAllowSearch=*/ false, /*InNameAreaSettings=*/ FDetailsViewArgs::HideNameArea, /*bHideSelectionTip=*/ true);
		View = EditModule.CreateDetailView(DetailsViewArgs);

		if (ObjectToInspect.IsValid())
		{
			View->SetObject(ObjectToInspect.Get());
		}

		View->OnFinishedChangingProperties().AddUObject(this, &UPropertyEditor::OnFinishedChangingProperties);
		
		return View.ToSharedRef();
	}
}

void UPropertyEditor::ReleaseSlateResources(bool bReleaseChildren)
{
	Super::ReleaseSlateResources(bReleaseChildren);

	View.Reset();
}

void UPropertyEditor::OnFinishedChangingProperties(const FPropertyChangedEvent& PropertyChangedEvent)
{
	if (PropertyChangedEvent.Property != nullptr && OnChange.IsBound())
	{
		OnChange.Broadcast(PropertyChangedEvent.Property->GetFName());
	}
}
#endif