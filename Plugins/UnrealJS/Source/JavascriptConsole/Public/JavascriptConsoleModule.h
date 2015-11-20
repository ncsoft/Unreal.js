#pragma once

#include "SlateBasics.h"

/** Style of the debug console */
namespace EJavascriptConsoleStyle
{
	enum Type
	{
		/** Shows the debug console input line with tab completion only */
		Compact,

		/** Shows a scrollable log window with the input line on the bottom */
		WithLog,
	};
};

struct FJavascriptConsoleDelegates
{
	FSimpleDelegate OnFocusLost;
	FSimpleDelegate OnConsoleCommandExecuted;
};

class FJavascriptConsoleModule : public IModuleInterface
{
public:
	virtual void StartupModule();
	virtual void ShutdownModule();

	/** Generates a console input box widget.  Remember, this widget will become invalid if the
	    output log DLL is unloaded on the fly. */
	virtual TSharedRef< SWidget > MakeConsoleInputBox( TSharedPtr< SEditableTextBox >& OutExposedEditableTextBox ) const;

	/** Opens a debug console in the specified window, if not already open */
	virtual void ToggleJavascriptConsoleForWindow( const TSharedRef< SWindow >& Window, const EJavascriptConsoleStyle::Type InStyle, const FJavascriptConsoleDelegates& JavascriptConsoleDelegates );

	/** Closes the debug console for the specified window */
	virtual void CloseJavascriptConsole();


private:

	/** Weak pointer to a debug console that's currently open, if any */
	TWeakPtr< SWidget > JavascriptConsole;
};
