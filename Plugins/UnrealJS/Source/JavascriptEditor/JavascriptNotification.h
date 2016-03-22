#pragma once

#include "SNotificationList.h"
#include "NotificationManager.h"
#include "JavascriptNotification.generated.h"

/**
 * 
 */
UCLASS()
class JAVASCRIPTEDITOR_API UJavascriptNotification : public UObject
{
	GENERATED_UCLASS_BODY()
	
	DECLARE_DYNAMIC_DELEGATE_OneParam(FCheckDelegate, ECheckBoxState, State);
	DECLARE_DYNAMIC_DELEGATE(FSimpleDelegate);

#if WITH_EDITOR
	TSharedPtr<SNotificationItem> Item;

	UFUNCTION(BlueprintCallable, Category = "JavascriptNotification")
	void Fire();

	UFUNCTION(BlueprintCallable, Category = "JavascriptNotification")
	void Success();

	UFUNCTION(BlueprintCallable, Category = "JavascriptNotification")
	void Pending();

	UFUNCTION(BlueprintCallable, Category = "JavascriptNotification")
	void Fail();

	UFUNCTION(BlueprintCallable, Category = "JavascriptNotification")
	void Fadeout();

	UFUNCTION(BlueprintCallable, Category = "JavascriptNotification")
	void Reset();

	/** The text displayed in this text block */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	FText Text;

	/** Setup information for the buttons on the notification */
	//TArray<FNotificationButtonInfo> ButtonDetails;

	/** The icon image to display next to the text */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	bool bUseImage;
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	FSlateBrush Image;

	/** The fade in duration for this element */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	float FadeInDuration;

	/** The fade out duration for this element */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	float FadeOutDuration;

	/** The duration before a fadeout for this element */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	float ExpireDuration;

	/** Controls whether or not to add the animated throbber */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	bool bUseThrobber;

	/** Controls whether or not to display the success and fail icons */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	bool bUseSuccessFailIcons;

	/** When true the larger bolder font will be used to display the message */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	bool bUseLargeFont;

	/** When set this forces the width of the box, used to stop resizing on text change */
	//FOptionalSize WidthOverride;

	/** When true the notification will automatically time out after the expire duration. */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	bool bFireAndForget;

	/** When set this will display a check box on the notification; handles getting the current check box state */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	TEnumAsByte<ECheckBoxState> CheckBoxState;

	/** When set this will display a check box on the notification; handles setting the new check box state */
	UPROPERTY()
	FCheckDelegate CheckBoxStateChanged;

	/** Text to display for the check box message */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	FText CheckBoxText;

	/** When set this will display as a hyperlink on the right side of the notification. */
	UPROPERTY()
	FSimpleDelegate Hyperlink;

	/** Text to display for the hyperlink message */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	FText HyperlinkText;

	/** True if we should throttle the editor while the notification is transitioning and performance is poor, to make sure the user can see the animation */
	UPROPERTY(BlueprintReadWrite, Category = "Javscript|Editor")
	bool bAllowThrottleWhenFrameRateIsLow;

	ECheckBoxState GetCheckBoxState() const;
#endif
};
