#include "JavascriptEditor.h"
#include "JavascriptNotification.h"

#define LOCTEXT_NAMESPACE "UMG"

UJavascriptNotification::UJavascriptNotification(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
#if WITH_EDITOR
,
FadeInDuration(0.5f),
FadeOutDuration(2.0f),
ExpireDuration(1.0f),
bUseThrobber(true),
bUseSuccessFailIcons(true),
bUseLargeFont(true),
bFireAndForget(true),
CheckBoxState(ECheckBoxState::Unchecked),
bAllowThrottleWhenFrameRateIsLow(true)
#endif
{}

#if WITH_EDITOR
ECheckBoxState UJavascriptNotification::GetCheckBoxState() const
{
	return CheckBoxState;
}

void UJavascriptNotification::Fire()
{
	FNotificationInfo Info(Text);

	if (bUseImage)
	{
		Info.Image = &Image;
	}
	
	Info.FadeInDuration = FadeInDuration;
	Info.FadeOutDuration = FadeOutDuration;
	Info.ExpireDuration = ExpireDuration;
	Info.bUseThrobber = bUseThrobber;
	Info.bUseSuccessFailIcons = bUseSuccessFailIcons;
	Info.bUseLargeFont = bUseLargeFont;
	Info.bFireAndForget = bFireAndForget;

	if (CheckBoxStateChanged.IsBound())
	{
		Info.CheckBoxState.BindUObject(this, &UJavascriptNotification::GetCheckBoxState);
		Info.CheckBoxStateChanged.BindLambda([this](ECheckBoxState State){
			CheckBoxStateChanged.ExecuteIfBound(State);
		});
		Info.CheckBoxText.Set(CheckBoxText);
	}

	if (Hyperlink.IsBound())
	{
		Info.Hyperlink.BindLambda([this]{
			Hyperlink.ExecuteIfBound();
		});
		Info.HyperlinkText.Set(HyperlinkText);
	}
	
	Info.bAllowThrottleWhenFrameRateIsLow = bAllowThrottleWhenFrameRateIsLow;

	Item = FSlateNotificationManager::Get().AddNotification(Info);		
}

void UJavascriptNotification::Success()
{
	if (Item.IsValid()) Item->SetCompletionState(SNotificationItem::CS_Success);
}

void UJavascriptNotification::Pending()
{
	if (Item.IsValid()) Item->SetCompletionState(SNotificationItem::CS_Pending);
}

void UJavascriptNotification::Fail()
{
	if (Item.IsValid()) Item->SetCompletionState(SNotificationItem::CS_Fail);
}

void UJavascriptNotification::Fadeout()
{
	if (Item.IsValid()) Item->Fadeout();
}

void UJavascriptNotification::Reset()
{
	Item.Reset();
}
#endif