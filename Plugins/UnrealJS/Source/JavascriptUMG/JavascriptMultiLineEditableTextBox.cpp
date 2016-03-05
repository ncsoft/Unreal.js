#include "JavascriptUMG.h"
#include "JavascriptMultiLineEditableTextBox.h"
#include "BaseTextLayoutMarshaller.h"

struct FJavascriptTextLayoutMarshaller : FBaseTextLayoutMarshaller
{
	FJavascriptTextLayoutMarshaller(UJavascriptMultiLineEditableTextBox* InParent)
		: Parent(InParent)
	{}

	UJavascriptMultiLineEditableTextBox* Parent;
	
	virtual void SetText(const FString& SourceString, FTextLayout& TargetTextLayout) override
	{
		FJavascriptTextLayout layout;
		layout.TextLayout = TargetTextLayout.AsShared();

		Parent->SetTextDelegate.ExecuteIfBound(SourceString, layout);
	}

	virtual void GetText(FString& TargetString, const FTextLayout& SourceTextLayout) override
	{
		FJavascriptTextLayout layout;
		layout.ConstTextLayout = SourceTextLayout.AsShared();

		if (Parent->GetTextDelegate.IsBound())
		{
			TargetString = Parent->GetTextDelegate.Execute(layout);
		}
	}
};

TSharedRef<SWidget> UJavascriptMultiLineEditableTextBox::RebuildWidget()
{
	auto Marshaller = MakeShareable(new FJavascriptTextLayoutMarshaller(this));
	MyEditableTextBlock = SNew(SMultiLineEditableTextBox)
		.Style(&WidgetStyle)
		.TextStyle(&TextStyle)
		.Justification(Justification)
		.AutoWrapText(bAutoWrapText)
		.WrapTextAt(WrapTextAt)
		.Marshaller(Marshaller)
		.IsReadOnly(bIsReadOnly)
		.AlwaysShowScrollbars(bAlwaysShowScrollbars)
		//		.MinDesiredWidth(MinimumDesiredWidth)
		//		.Padding(Padding)
		//		.IsCaretMovedWhenGainFocus(IsCaretMovedWhenGainFocus)
		//		.SelectAllTextWhenFocused(SelectAllTextWhenFocused)
		//		.RevertTextOnEscape(RevertTextOnEscape)
		//		.ClearKeyboardFocusOnCommit(ClearKeyboardFocusOnCommit)
		//		.SelectAllTextOnCommit(SelectAllTextOnCommit)
		.OnVScrollBarUserScrolled_Lambda([&](float Offset) { OnVScrollBarUserScrolled.Broadcast(Offset); })
		.OnTextChanged(BIND_UOBJECT_DELEGATE(FOnTextChanged, HandleOnTextChanged))
		.OnTextCommitted(BIND_UOBJECT_DELEGATE(FOnTextCommitted, HandleOnTextCommitted))
		;

	return MyEditableTextBlock.ToSharedRef();
}

void UJavascriptMultiLineEditableTextBox::ScrollTo(int32 Line, int32 Offset)
{
	if (MyEditableTextBlock.IsValid())
	{
		MyEditableTextBlock->ScrollTo(FTextLocation(Line, Offset));
	}
}

void UJavascriptMultiLineEditableTextBox::GoTo(int32 Line, int32 Offset)
{
	if (MyEditableTextBlock.IsValid())
	{
		MyEditableTextBlock->GoTo(FTextLocation(Line, Offset));
	}
}

void UJavascriptMultiLineEditableTextBox::Refresh()
{
	if (MyEditableTextBlock.IsValid())
	{
		MyEditableTextBlock->Refresh();
	}	
}