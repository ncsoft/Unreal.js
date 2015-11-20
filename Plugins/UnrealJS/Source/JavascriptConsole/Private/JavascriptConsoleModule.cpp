#include "JavascriptLogPrivatePCH.h"
#include "SJavascriptConsole.h"
#include "SJavascriptLog.h"
#include "Editor/WorkspaceMenuStructure/Public/WorkspaceMenuStructureModule.h"
#include "SDockTab.h"

IMPLEMENT_MODULE( FJavascriptConsoleModule, JavascriptLog );

namespace JavascriptConsoleModule
{
	static const FName JavascriptLogTabName = FName(TEXT("JavascriptLog"));
}

/** This class is to capture all log output even if the log window is closed */
class FJavascriptLogHistory : public FOutputDevice
{
public:

	FJavascriptLogHistory()
	{
		GLog->AddOutputDevice(this);
		GLog->SerializeBacklog(this);
	}

	~FJavascriptLogHistory()
	{
		// At shutdown, GLog may already be null
		if( GLog != NULL )
		{
			GLog->RemoveOutputDevice(this);
		}
	}

	/** Gets all captured messages */
	const TArray< TSharedPtr<FLogMessage> >& GetMessages() const
	{
		return Messages;
	}

protected:

	virtual void Serialize( const TCHAR* V, ELogVerbosity::Type Verbosity, const class FName& Category ) override
	{
		// Capture all incoming messages and store them in history
		SJavascriptLog::CreateLogMessages(V, Verbosity, Category, Messages);
	}

private:

	/** All log messsges since this module has been started */
	TArray< TSharedPtr<FLogMessage> > Messages;
};

/** Our global output log app spawner */
static TSharedPtr<FJavascriptLogHistory> JavascriptLogHistory;

TSharedRef<SDockTab> SpawnJavascriptLog( const FSpawnTabArgs& Args )
{
	return SNew(SDockTab)
		.Icon(FEditorStyle::GetBrush("Log.TabIcon"))
		.TabRole( ETabRole::NomadTab )
		.Label( NSLOCTEXT("JavascriptConsole", "TabTitle", "Javascript Console") )
		[
			SNew(SJavascriptLog).Messages( JavascriptLogHistory->GetMessages() )
		];
}

void FJavascriptConsoleModule::StartupModule()
{
	FGlobalTabmanager::Get()->RegisterNomadTabSpawner(JavascriptConsoleModule::JavascriptLogTabName, FOnSpawnTab::CreateStatic( &SpawnJavascriptLog ) )
		.SetDisplayName(NSLOCTEXT("UnrealEditor", "JavascriptLogTab", "Javascript Console"))
		.SetTooltipText(NSLOCTEXT("UnrealEditor", "JavascriptLogTooltipText", "Open the Javascript Console tab."))
		.SetGroup( WorkspaceMenu::GetMenuStructure().GetDeveloperToolsLogCategory() )
		.SetIcon( FSlateIcon(FEditorStyle::GetStyleSetName(), "Log.TabIcon") );
	
	JavascriptLogHistory = MakeShareable(new FJavascriptLogHistory);
}

void FJavascriptConsoleModule::ShutdownModule()
{
	if (FSlateApplication::IsInitialized())
	{
		FGlobalTabmanager::Get()->UnregisterNomadTabSpawner(JavascriptConsoleModule::JavascriptLogTabName);
	}
}

TSharedRef< SWidget > FJavascriptConsoleModule::MakeConsoleInputBox( TSharedPtr< SEditableTextBox >& OutExposedEditableTextBox ) const
{
	TSharedRef< SJavascriptConsoleInputBox > NewConsoleInputBox = SNew( SJavascriptConsoleInputBox );
	OutExposedEditableTextBox = NewConsoleInputBox->GetEditableTextBox();
	return NewConsoleInputBox;
}


void FJavascriptConsoleModule::ToggleJavascriptConsoleForWindow( const TSharedRef< SWindow >& Window, const EJavascriptConsoleStyle::Type InStyle, const FJavascriptConsoleDelegates& JavascriptConsoleDelegates )
{
	bool bShouldOpen = true;
	// Close an existing console box, if there is one
	TSharedPtr< SWidget > PinnedJavascriptConsole( JavascriptConsole.Pin() );
	if( PinnedJavascriptConsole.IsValid() )
	{
		// If the console is already open close it unless it is in a different window.  In that case reopen it on that window
		bShouldOpen = false;
		TSharedPtr< SWindow > WindowForExistingConsole = FSlateApplication::Get().FindWidgetWindow(PinnedJavascriptConsole.ToSharedRef());
		if (WindowForExistingConsole.IsValid())
		{
			WindowForExistingConsole->RemoveOverlaySlot(PinnedJavascriptConsole.ToSharedRef());
			JavascriptConsole.Reset();
		}

		if( WindowForExistingConsole != Window )
		{
			// Console is being opened on another window
			bShouldOpen = true;
		}
	}
	
	TSharedPtr<SDockTab> ActiveTab = FGlobalTabmanager::Get()->GetActiveTab();
	if (ActiveTab.IsValid() && ActiveTab->GetLayoutIdentifier() == FTabId(JavascriptConsoleModule::JavascriptLogTabName))
	{
		FGlobalTabmanager::Get()->DrawAttention(ActiveTab.ToSharedRef());
		bShouldOpen = false;
	}

	if( bShouldOpen )
	{
		const EJavascriptConsoleStyle::Type JavascriptConsoleStyle = InStyle;
		TSharedRef< SJavascriptConsole > JavascriptConsoleRef = SNew( SJavascriptConsole, JavascriptConsoleStyle, this, &JavascriptConsoleDelegates );
		JavascriptConsole = JavascriptConsoleRef;

		const int32 MaximumZOrder = MAX_int32;
		Window->AddOverlaySlot( MaximumZOrder )
		.VAlign(VAlign_Bottom)
		.HAlign(HAlign_Center)
		.Padding( 10.0f )
		[
			JavascriptConsoleRef
		];

		// Force keyboard focus
		JavascriptConsoleRef->SetFocusToEditableText();
	}
}


void FJavascriptConsoleModule::CloseJavascriptConsole()
{
	TSharedPtr< SWidget > PinnedJavascriptConsole( JavascriptConsole.Pin() );

	if( PinnedJavascriptConsole.IsValid() )
	{
		TSharedPtr< SWindow > WindowForExistingConsole = FSlateApplication::Get().FindWidgetWindow(PinnedJavascriptConsole.ToSharedRef());
		if (WindowForExistingConsole.IsValid())
		{
			WindowForExistingConsole->RemoveOverlaySlot( PinnedJavascriptConsole.ToSharedRef() );
			JavascriptConsole.Reset();
		}
	}
}