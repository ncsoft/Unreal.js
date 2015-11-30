#pragma once

struct FJavascriptContext : TSharedFromThis<FJavascriptContext>
{
	FJavascriptContext(TSharedPtr<FJavascriptIsolate> InEnvironment) : Environment(InEnvironment) {}

	/** Isolate **/
	TSharedPtr<FJavascriptIsolate> Environment;

	/** A map from Unreal UObject to V8 Object */
	TMap< UObject*, v8::UniquePersistent<v8::Value> > ObjectToObjectMap;

	/** A map from Struct buffer to V8 Object */
	TMap< TSharedPtr<FStructMemoryInstance>, v8::UniquePersistent<v8::Value> > MemoryToObjectMap;

	virtual ~FJavascriptContext() {}
	virtual void Expose(FString RootName, UObject* Object) = 0;
	virtual FString GetScriptFileFullPath(const FString& Filename) = 0;
	virtual FString ReadScriptFile(const FString& Filename) = 0;
	virtual FString Public_RunScript(const FString& Script, bool bOutput = true) = 0;
	virtual void Public_RunFile(const FString& Filename) = 0;
	virtual void SetAsDebugContext() = 0;
	virtual bool IsDebugContext() const = 0;
	virtual bool WriteAliases(const FString& Filename) = 0;
	virtual bool WriteDTS(const FString& Filename, bool bIncludingTooltip) = 0;
	virtual bool HasProxyFunction(UObject* Holder, UFunction* Function) = 0;
	virtual bool CallProxyFunction(UObject* Holder, UObject* This, UFunction* FunctionToCall, void* Parms) = 0;	

	virtual v8::Isolate* isolate() = 0;
	virtual v8::Local<v8::Context> context() = 0;
	virtual v8::Local<v8::Value> ExportObject(UObject* Object, bool bForce = false) = 0;
	virtual v8::Local<v8::Value> GetProxyFunction(UObject* Object, const TCHAR* Name) = 0;

	static FJavascriptContext* FromV8(v8::Local<v8::Context> Context);

	static FJavascriptContext* Create(TSharedPtr<FJavascriptIsolate> InEnvironment, TArray<FString>& InPaths);

	virtual void AddReferencedObjects(UObject* InThis, FReferenceCollector& Collector) = 0;

	virtual const FObjectInitializer* GetObjectInitializer() = 0;
};