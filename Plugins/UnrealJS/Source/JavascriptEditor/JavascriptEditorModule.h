#pragma once

#include "ModuleManager.h"

struct IEditorExtension
{
#if WITH_EDITOR
	virtual void Register() = 0;
	virtual void Unregister() = 0;
#endif
};

/**
 * The public interface to this module
 */
class IJavascriptEditorModule : public IModuleInterface
{

public:

	/**
	 * Singleton-like access to this module's interface.  This is just for convenience!
	 * Beware of calling this during the shutdown phase, though.  Your module might have been unloaded already.
	 *
	 * @return Returns singleton instance, loading the module on demand if needed
	 */
	static inline IJavascriptEditorModule& Get()
	{
		return FModuleManager::LoadModuleChecked< IJavascriptEditorModule >("JavascriptEditor");
	}

	/**
	 * Checks to see if this module is loaded and ready.  It is only valid to call Get() if IsAvailable() returns true.
	 *
	 * @return True if the module is loaded and ready to use
	 */
	static inline bool IsAvailable()
	{
		return FModuleManager::Get().IsModuleLoaded( "JavascriptEditor" );
	}

	virtual void AddExtension(IEditorExtension* Extension) = 0;
	virtual void RemoveExtension(IEditorExtension* Extension) = 0;
};
