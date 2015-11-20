#include "JavascriptLogPrivatePCH.h"
#include "JavascriptConsoleModule.h"
#include "SJavascriptConsole.h"
#include "SJavascriptLog.h"

namespace JavascriptConsoleDefs
{
	// How many seconds to animate when console is summoned
	static const float IntroAnimationDuration = 0.25f;
}

BEGIN_SLATE_FUNCTION_BUILD_OPTIMIZATION

void SJavascriptConsole::Construct( const FArguments& InArgs, const EJavascriptConsoleStyle::Type InStyle, FJavascriptConsoleModule* JavascriptConsoleModule, const FJavascriptConsoleDelegates* JavascriptConsoleDelegates )
{
	CurrentStyle = InStyle;

	TSharedPtr<SJavascriptConsoleInputBox> ConsoleInputBox;
	
	check( JavascriptConsoleModule != NULL );
	ChildSlot
	[ 
		SNew( SVerticalBox )

		+SVerticalBox::Slot()
		.AutoHeight()
		[
			SNew( SVerticalBox )
				.Visibility( this, &SJavascriptConsole::MakeVisibleIfLogIsShown )
					
				+SVerticalBox::Slot()
				.AutoHeight()
				.Padding( 10.0f )
				[
					SNew(SBox)
					.HeightOverride( 200.0f )
					[
						SNew( SBorder )
							.BorderImage( FEditorStyle::GetBrush( "ToolPanel.GroupBorder" ) )
							.ColorAndOpacity( this, &SJavascriptConsole::GetAnimatedColorAndOpacity )
							.BorderBackgroundColor( this, &SJavascriptConsole::GetAnimatedSlateColor )
							[
								SNew( SSpacer )
							]
					]
				]
		]

		+SVerticalBox::Slot()
		.AutoHeight()
		.Padding( 10.0f )
		[
			SNew(SBox)
			.HeightOverride( 26.0f )
			.HAlign( HAlign_Left )
			[
				SNew( SBorder )
				.Padding( FMargin(2) )
				.BorderImage( FEditorStyle::GetBrush( "JavascriptConsole.Background" ) )
				.ColorAndOpacity( this, &SJavascriptConsole::GetAnimatedColorAndOpacity )
				.BorderBackgroundColor( this, &SJavascriptConsole::GetAnimatedSlateColor )
				[
					SNew(SHorizontalBox)
					+ SHorizontalBox::Slot()
					.AutoWidth()
					.Padding(3.0f)
					.VAlign(VAlign_Center)
					[
						SNew(STextBlock)
						.Text(NSLOCTEXT("Console", "ConsoleLabel", "Console"))

					]
					+ SHorizontalBox::Slot()
					.Padding(5.0f, 2.0f)
					.VAlign(VAlign_Center)
					.MaxWidth(400.0f)
					[
						SAssignNew(ConsoleInputBox, SJavascriptConsoleInputBox)
						.OnConsoleCommandExecuted(JavascriptConsoleDelegates->OnConsoleCommandExecuted)
					]
				]
			]
		]
	];

	EditableTextBox = ConsoleInputBox->GetEditableTextBox();

	// Kick off intro animation
	AnimCurveSequence = FCurveSequence();
	AnimCurve = AnimCurveSequence.AddCurve( 0.0f, JavascriptConsoleDefs::IntroAnimationDuration, ECurveEaseFunction::QuadOut );
	FlashCurve = AnimCurveSequence.AddCurve( JavascriptConsoleDefs::IntroAnimationDuration, .15f, ECurveEaseFunction::QuadInOut );

	AnimCurveSequence.Play(this->AsShared());
}
END_SLATE_FUNCTION_BUILD_OPTIMIZATION

SJavascriptConsole::SJavascriptConsole()
	: CurrentStyle( EJavascriptConsoleStyle::Compact )
{
}


void SJavascriptConsole::SetFocusToEditableText()
{
	FSlateApplication::Get().SetKeyboardFocus( EditableTextBox.ToSharedRef(), EFocusCause::SetDirectly );
}

EVisibility SJavascriptConsole::MakeVisibleIfLogIsShown() const
{
	return CurrentStyle == EJavascriptConsoleStyle::WithLog ? EVisibility::Visible : EVisibility::Collapsed;
}


FLinearColor SJavascriptConsole::GetAnimatedColorAndOpacity() const
{
	return FLinearColor( 1.0f, 1.0f, 1.0f, AnimCurve.GetLerp() );
}


FSlateColor SJavascriptConsole::GetAnimatedSlateColor() const
{
	return FSlateColor( GetAnimatedColorAndOpacity() );
}

FSlateColor SJavascriptConsole::GetFlashColor() const
{
	float FlashAlpha = 1.0f - FlashCurve.GetLerp();

	if (FlashAlpha == 1.0f)
	{
		FlashAlpha = 0.0f;
	}

	return FLinearColor(1,1,1,FlashAlpha);
}