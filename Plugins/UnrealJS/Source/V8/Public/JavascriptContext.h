#pragma once

#include "JavascriptContext.generated.h"

struct FJavascriptContext;
class UJavascriptIsolate;

struct V8_API FArrayBufferAccessor
{	
	static int32 GetSize();
	static void* GetData();
	static void Discard();
};

UCLASS()
class V8_API UJavascriptContext : public UObject
{
	GENERATED_UCLASS_BODY()

public:
	// Begin UObject interface.
	virtual void BeginDestroy() override;
	static void AddReferencedObjects(UObject* InThis, FReferenceCollector& Collector);
	// End UObject interface.

	TSharedPtr<FJavascriptContext> JavascriptContext;

	TSharedPtr<FString> ContextId;

	UPROPERTY(BlueprintReadWrite, Category = "Scripting|Javascript")
	TArray<FString> Paths;

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	void SetContextId(FString Name);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	void Expose(FString Name, UObject* Object);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	FString GetScriptFileFullPath(FString Filename);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	FString ReadScriptFile(FString Filename);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	void RunFile(FString Filename);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	FString RunScript(FString Script, bool bOutput = true);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	bool WriteAliases(FString Target);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	bool WriteDTS(FString Target, bool bIncludingTooltip);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	void SetAsDebugContext();

	UFUNCTION(BlueprintPure, Category = "Scripting|Javascript")
	bool IsDebugContext() const;

	bool HasProxyFunction(UObject* Holder, UFunction* Function);
	bool CallProxyFunction(UObject* Holder, UObject* This, UFunction* Function, void* Parms);

	// FastCall
	void InternalPushArgument(int32 Value);
	void InternalPushArgument(float Value);
	void InternalPushArgument(bool Value);
	void InternalPushArgument(const FString& Value)
	{
		InternalPushArgument(*Value);
	}
	void InternalPushArgument(const TCHAR* Value);
	void InternalPushArgument(UObject* Value);

	bool InternalPopReturnValue(int32& Value);
	bool InternalPopReturnValue(float& Value);
	bool InternalPopReturnValue(bool& Value);
	bool InternalPopReturnValue(FString& Value);
	bool InternalPopReturnValue(UObject*& Value);

	void InternalBegin();
	void InternalEnd();
	bool InternalCall(UObject* Object, FName Name);

	template <typename First>
	void InternalPushArguments(const First& first)
	{
		InternalPushArgument(first);
	}

	template <typename First, typename... Rest>
	void InternalPushArguments(const First& first, Rest... rest)
	{
		InternalPushArgument(first);
		InternalPushArguments(rest...);
	}

	template <typename... Rest>
	bool FastCall(UObject* Object, FName Name, Rest... rest)
	{
		InternalBegin();
		InternalPushArguments(rest...);
		bool successful = InternalCall(Object, Name);
		InternalEnd();
		return successful;
	}

	template <typename Ret, typename... Rest>
	bool FastCallWithReturn(UObject* Object, FName Name, Ret* ret, Rest... rest)
	{
		InternalBegin();
		InternalPushArguments(rest...);
		bool successful = InternalCall(Object, Name);
		if (successful)
		{
			if (!InternalPopReturnValue(*ret))
			{
				successful = false;
			}
		}
		InternalEnd();
		return successful;
	}
};