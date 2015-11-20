#pragma once

#include "ModuleManager.h"

/**
* The public interface to this module. 
*/
class IV8 : public IModuleInterface
{
public:

	static inline IV8& Get()
	{
		return FModuleManager::LoadModuleChecked<IV8>("V8");
	}

	static inline bool IsAvailable()
	{
		return FModuleManager::Get().IsModuleLoaded("V8");
	}	

	virtual void AddGlobalScriptSearchPath(const FString& Path) = 0;
	virtual void RemoveGlobalScriptSearchPath(const FString& Path) = 0;
	virtual TArray<FString> GetGlobalScriptSearchPaths() = 0;
	virtual bool HasDebugContext() const = 0;
	virtual void GetContextIds(TArray<TSharedPtr<FString>>& OutContexts) = 0;
	virtual void FillAutoCompletion(TSharedPtr<FString> TargetContext, TArray<FString>& OutArray, const TCHAR* Input) = 0;
	virtual void Exec(TSharedPtr<FString> TargetContext, const TCHAR* Command) = 0;
};
