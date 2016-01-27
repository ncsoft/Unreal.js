#pragma once

#include "JavascriptOutputDevice.generated.h"

UENUM()
enum class ELogVerbosity_JS : uint8
{
	/** Not used */
	NoLogging,

	/** Always prints s fatal error to console (and log file) and crashes (even if logging is disabled) */
	Fatal,

	/**
	* Prints an error to console (and log file).
	* Commandlets and the editor collect and report errors. Error messages result in commandlet failure.
	*/
	Error,

	/**
	* Prints a warning to console (and log file).
	* Commandlets and the editor collect and report warnings. Warnings can be treated as an error.
	*/
	Warning,

	/** Prints a message to console (and log file) */
	Display,

	/** Prints a message to a log file (does not print to console) */
	Log,

	/**
	* Prints a verbose message to a log file (if Verbose logging is enabled for the given category,
	* usually used for detailed logging)
	*/
	Verbose,

	/**
	* Prints a verbose message to a log file (if VeryVerbose logging is enabled,
	* usually used for detailed logging that would otherwise spam output)
	*/
	VeryVerbose		
};

UCLASS()
class V8_API UJavascriptOutputDevice : public UObject
{
	GENERATED_UCLASS_BODY()

public:
	virtual void BeginDestroy() override;

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Kill();

	UFUNCTION(BlueprintImplementableEvent, Category = "Scripting | Javascript")
	void OnMessage(const FString& Message, ELogVerbosity_JS Verbosity, FName Category);

	TSharedPtr<FOutputDevice> OutputDevice;
};