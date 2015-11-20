#pragma once

enum class EPropertyOwner
{
	None,
	Object,
	Memory
};

struct IPropertyOwner
{
	EPropertyOwner Owner;
};

struct FNoPropertyOwner : IPropertyOwner
{
	FNoPropertyOwner()
	{
		Owner = EPropertyOwner::None;
	}
};

namespace v8
{
	Local<Value> ReadProperty(Isolate* isolate, UProperty* Property, uint8* Buffer, const IPropertyOwner& Owner);
	void WriteProperty(Isolate* isolate, UProperty* Property, uint8* Buffer, Local<Value> value);
	void ReportException(Isolate* isolate, TryCatch& try_catch);
	Local<String> V8_String(Isolate* isolate, const FString& String);
	Local<String> V8_String(Isolate* isolate, const char* String);
	Local<String> V8_KeywordString(Isolate* isolate, const FString& String);
	Local<String> V8_KeywordString(Isolate* isolate, const char* String);
	FString StringFromV8(Local<Value> Value);
	void CallJavascriptFunction(Handle<Context> context, Handle<Value> This, UFunction* SignatureFunction, Handle<Function> func, void* Parms);
	UClass* UClassFromV8(Isolate* isolate_, Local<Value> Value);
	UObject* UObjectFromV8(Local<Value> Value);
	uint8* RawMemoryFromV8(Local<Value> Value);
	FString StringFromArgs(const FunctionCallbackInfo<v8::Value>& args, int StartIndex = 0);
}
