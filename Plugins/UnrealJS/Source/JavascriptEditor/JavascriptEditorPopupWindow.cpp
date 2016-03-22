#include "JavascriptEditor.h"
#include "JavascriptEditorPopupWindow.h"

#if WITH_EDITOR
bool UJavascriptEditorPopupWindow::Open(const FText& HeadingText, const FVector2D& PopupDesiredSize)
{
	// Create the contents of the popup
	TSharedRef<SWidget> ActualWidget = Widget->TakeWidget();

	// Wrap the picker widget in a multibox-style menu body
	FMenuBuilder MenuBuilder(/*BShouldCloseAfterSelection=*/ false, /*CommandList=*/ nullptr);
	MenuBuilder.BeginSection("OpenPopupWindow", HeadingText);
	MenuBuilder.AddWidget(ActualWidget, FText::GetEmpty(), /*bNoIndent=*/ true);
	MenuBuilder.EndSection();

	auto WindowContents = MenuBuilder.MakeWidget();

	// Determine where the pop-up should open
	TSharedPtr<SWindow> ParentWindow = FSlateApplication::Get().GetActiveTopLevelWindow();
	FVector2D WindowPosition = FSlateApplication::Get().GetCursorPos();
	if (!ParentWindow.IsValid())
	{
		return false;
	}

	if (ParentWindow.IsValid())
	{
		FSlateRect ParentMonitorRect = ParentWindow->GetFullScreenInfo();
		const FVector2D MonitorCenter((ParentMonitorRect.Right + ParentMonitorRect.Left) * 0.5f, (ParentMonitorRect.Top + ParentMonitorRect.Bottom) * 0.5f);
		WindowPosition = MonitorCenter - PopupDesiredSize * 0.5f;

		// Open the pop-up
		FPopupTransitionEffect TransitionEffect(FPopupTransitionEffect::None);
		auto Menu = FSlateApplication::Get().PushMenu(ParentWindow.ToSharedRef(), FWidgetPath(), WindowContents, WindowPosition, TransitionEffect, /*bFocusImmediately=*/ true);
		Menu->GetOnMenuDismissed().AddUObject(this, &UJavascriptEditorPopupWindow::OnDismissedRaw);
	}

	return true;
}

void UJavascriptEditorPopupWindow::OnDismissedRaw(TSharedRef<IMenu> Menu)
{
	OnDismissed();
}
#endif