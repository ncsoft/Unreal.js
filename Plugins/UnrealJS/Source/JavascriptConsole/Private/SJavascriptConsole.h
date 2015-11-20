#pragma once


/**
 * Debug console widget, designed to be summoned on top of a viewport or window
 */
class SJavascriptConsole : public SCompoundWidget
{
public:

	SLATE_BEGIN_ARGS( SJavascriptConsole )	
	{
	}

	SLATE_END_ARGS()

	/** Constructs this widget */
	void Construct( const FArguments& InArgs, const EJavascriptConsoleStyle::Type InStyle, FJavascriptConsoleModule* JavascriptConsoleModule, const FJavascriptConsoleDelegates* JavascriptConsoleDelegates );

	/** Call to set focus to this debug console's editable text box */
	void SetFocusToEditableText();

	/** Default constructor */
	SJavascriptConsole();


protected:
	/** Returns EVisibility::Visible if style has log being shown, otherwise VIS_COLLAPSED */
	EVisibility MakeVisibleIfLogIsShown() const;

	/** Returns a color and opacity value to use based on any current animation */
	FLinearColor GetAnimatedColorAndOpacity() const;

	/** Returns a Slate color based on any current animation (same color as GetAnimatedColorAndOpacity) */
	FSlateColor GetAnimatedSlateColor() const;

	FSlateColor GetFlashColor() const;
private:

	/** Editable text box for this debug console's input line */
	TSharedPtr< SEditableTextBox > EditableTextBox;

	/** Current style of the debug console.  Can be changed on the fly. */
	EJavascriptConsoleStyle::Type CurrentStyle;

	/** Intro/outro animation curve */
	FCurveSequence AnimCurveSequence;
	FCurveHandle AnimCurve;
	FCurveHandle FlashCurve;
};

