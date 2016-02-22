#include "V8PCH.h"
#include <libplatform/libplatform.h>
#include "JavascriptContext.h"
#include "IV8.h"
#include "JavascriptStats.h"
#include "JavascriptSettings.h"

DEFINE_STAT(STAT_JavascriptDelegate);
DEFINE_STAT(STAT_JavascriptProxy);
DEFINE_STAT(STAT_Scavenge);
DEFINE_STAT(STAT_MarkSweepCompact);
DEFINE_STAT(STAT_IncrementalMarking);
DEFINE_STAT(STAT_ProcessWeakCallbacks);

DEFINE_STAT(STAT_JavascriptPropertyGet);
DEFINE_STAT(STAT_JavascriptPropertySet);
DEFINE_STAT(STAT_JavascriptFunctionCallToEngine);
DEFINE_STAT(STAT_JavascriptFunctionCallToJavascript);
DEFINE_STAT(STAT_JavascriptReadOffStruct);

DEFINE_STAT(STAT_NewSpace);
DEFINE_STAT(STAT_OldSpace);
DEFINE_STAT(STAT_CodeSpace);
DEFINE_STAT(STAT_MapSpace);
DEFINE_STAT(STAT_LoSpace);

using namespace v8;

UJavascriptSettings::UJavascriptSettings(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
	V8Flags = TEXT("--harmony --harmony-shipping --es-staging --expose-debug-as=v8debug --expose-gc --harmony_destructuring --harmony_simd --harmony_default_parameters");
}

void UJavascriptSettings::Apply() const
{
	V8::SetFlagsFromString(TCHAR_TO_ANSI(*V8Flags), strlen(TCHAR_TO_ANSI(*V8Flags)));
}

class V8Module : public IV8
{

public:
	TArray<FString> Paths;
	v8::Platform* platform_;

	/** IModuleInterface implementation */
	virtual void StartupModule() override
	{
		Paths.Add(GetGameScriptsDirectory());
		Paths.Add(GetPluginScriptsDirectory());
		Paths.Add(GetPluginScriptsDirectory2());
		Paths.Add(GetPluginScriptsDirectory3());
		Paths.Add(GetPakPluginScriptsDirectory());

		const UJavascriptSettings& Settings = *GetDefault<UJavascriptSettings>();
		Settings.Apply();

		V8::InitializeICU();
		platform_ = platform::CreateDefaultPlatform();
		V8::InitializePlatform(platform_);
		V8::Initialize();
	}

	virtual void ShutdownModule() override
	{		
		V8::Dispose();
		V8::ShutdownPlatform();
		delete platform_;
	}

	static FString GetPluginScriptsDirectory()
	{
		return FPaths::EnginePluginsDir() / "Backend/UnrealJS/Content/Scripts/";
	}

	static FString GetPluginScriptsDirectory2()
	{
		return FPaths::EnginePluginsDir() / "UnrealJS/Content/Scripts/";
	}

	static FString GetPluginScriptsDirectory3()
	{
		return FPaths::GamePluginsDir() / "UnrealJS/Content/Scripts/";
	}

	static FString GetPakPluginScriptsDirectory()
	{
		return FPaths::EngineDir() / "Contents/Scripts/";
	}

	static FString GetGameScriptsDirectory()
	{
		return FPaths::GameContentDir() / "Scripts/";
	}

	virtual void AddGlobalScriptSearchPath(const FString& Path) override
	{
		Paths.Add(Path);
	}

	virtual void RemoveGlobalScriptSearchPath(const FString& Path) override
	{
		Paths.Remove(Path);
	}

	virtual TArray<FString> GetGlobalScriptSearchPaths() override
	{
		return Paths;
	}

	virtual void FillAutoCompletion(TSharedPtr<FString> TargetContext, TArray<FString>& OutArray, const TCHAR* Input) override
	{
		static auto SourceCode = LR"doc(
(function () {
    var pattern = '%s'; var head = '';
    pattern.replace(/\\W*([\\w\\.]+)$/, function (a, b, c) { head = pattern.substr(0, c + a.length - b.length); pattern = b });
    var index = pattern.lastIndexOf('.');
    var scope = this;
    var left = '';
    if (index >= 0) {
        left = pattern.substr(0, index + 1);
        try { scope = eval(pattern.substr(0, index)); }
        catch (e) { scope = null; }
        pattern = pattern.substr(index + 1);
    }
    result = [];
    for (var k in scope) {
        if (k.indexOf(pattern) == 0) {
            result.push(head + left + k);
        }
    }
    return result.join(',');
})()
)doc";

		for (TObjectIterator<UJavascriptContext> It; It; ++It)
		{
			UJavascriptContext* Context = *It;

			if (Context->ContextId == TargetContext || !TargetContext.IsValid() && Context->IsDebugContext())
			{
				FString Result = Context->RunScript(FString::Printf(SourceCode, *FString(Input).ReplaceCharWithEscapedChar()), false);
				Result.ParseIntoArray(OutArray, TEXT(","));
			}
		}
	}

	virtual void Exec(TSharedPtr<FString> TargetContext, const TCHAR* Command) override
	{
		for (TObjectIterator<UJavascriptContext> It; It; ++It)
		{
			UJavascriptContext* Context = *It;

			if (Context->ContextId == TargetContext || !TargetContext.IsValid() && Context->IsDebugContext())
			{
				static FName NAME_JavascriptCmd("JavascriptCmd");
				GLog->Log(NAME_JavascriptCmd, ELogVerbosity::Log, Command);
				Context->RunScript(Command);
			}
		}
	}

	virtual bool HasDebugContext() const
	{
		for (TObjectIterator<UJavascriptContext> It; It; ++It)
		{
			UJavascriptContext* Context = *It;

			if (Context->IsDebugContext())
			{
				return true;
			}
		}

		return false;
	}

	virtual void GetContextIds(TArray<TSharedPtr<FString>>& OutContexts) override
	{
		for (TObjectIterator<UJavascriptContext> It; It; ++It)
		{
			UJavascriptContext* Context = *It;

			if (!Context->IsTemplate(RF_ClassDefaultObject))
			{
				OutContexts.Add(Context->ContextId);
			}
		}
	}
};

IMPLEMENT_MODULE(V8Module, V8)


