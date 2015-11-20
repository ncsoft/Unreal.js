#include "JavascriptEditor.h"
#include "JavascriptNotification.h"

#define LOCTEXT_NAMESPACE "UMG"

UJavascriptNotification::UJavascriptNotification(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer),
FadeInDuration(0.5f),
FadeOutDuration(2.0f),
ExpireDuration(1.0f),
bUseThrobber(true),
bUseSuccessFailIcons(true),
bUseLargeFont(true),
bFireAndForget(true),
CheckBoxState(ECheckBoxState::Unchecked),
bAllowThrottleWhenFrameRateIsLow(true)
{}

ECheckBoxState UJavascriptNotification::GetCheckBoxState() const
{
	return CheckBoxState;
}

void UJavascriptNotification::Fire()
{
#if WITH_EDITOR
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
#endif
}

void UJavascriptNotification::Success()
{
#if WITH_EDITOR
	if (Item.IsValid()) Item->SetCompletionState(SNotificationItem::CS_Success);
#endif
}

void UJavascriptNotification::Pending()
{
#if WITH_EDITOR
	if (Item.IsValid()) Item->SetCompletionState(SNotificationItem::CS_Pending);
#endif
}

void UJavascriptNotification::Fail()
{
#if WITH_EDITOR
	if (Item.IsValid()) Item->SetCompletionState(SNotificationItem::CS_Fail);
#endif
}

void UJavascriptNotification::Fadeout()
{
#if WITH_EDITOR
	if (Item.IsValid()) Item->Fadeout();
#endif
}

void UJavascriptNotification::Reset()
{
#if WITH_EDITOR
	Item.Reset();
#endif
}