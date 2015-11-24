#include "V8PCH.h"
#include "Translator.h"

namespace v8
{
	UObject* UObjectFromV8(Local<Value> Value)
	{
		uint8* Memory = RawMemoryFromV8(Value);
		if (Memory)
		{
			auto uobj = reinterpret_cast<UObject*>(Memory);
			if (uobj->IsValidLowLevelFast() && !uobj->HasAnyFlags(RF_PendingKill))
			{
				return uobj;
			}
		}	

		return nullptr;
	}

	uint8* RawMemoryFromV8(Local<Value> Value)
	{
		if (Value.IsEmpty() || !Value->IsObject() || Value->IsUndefined() || Value->IsNull())
		{
			return nullptr;
		}

		auto v8_obj = Value->ToObject();
		if (v8_obj->InternalFieldCount() == 0)
		{
			return nullptr;
		}
		return reinterpret_cast<uint8*>(v8_obj->GetAlignedPointerFromInternalField(0));		
	}

	UClass* UClassFromV8(Isolate* isolate_, Local<Value> Value)
	{
		if (Value.IsEmpty() || !Value->IsObject())
		{
			return nullptr;
		}

		auto v8_obj = Value->ToObject();
		if (v8_obj.IsEmpty())
		{
			return nullptr;
		}

		if (v8_obj->IsFunction())
		{
			auto vv = v8_obj->Get(V8_KeywordString(isolate_, "StaticClass"));
			if (!vv.IsEmpty())
			{
				v8_obj = vv->ToObject();
			}
		}

		if (v8_obj->IsExternal())
		{
			auto v8_class = Local<External>::Cast(v8_obj);

			UClass* Class{ nullptr };
			if (!v8_class.IsEmpty())
			{
				Class = reinterpret_cast<UClass*>(v8_class->Value());
			}

			return Class;
		}

		return nullptr;
	}

	Local<String> V8_String(Isolate* isolate, const FString& String)
	{
		return String::NewFromUtf8(isolate, TCHAR_TO_UTF8(*String));
	}

	Local<String> V8_String(Isolate* isolate, const char* String)
	{
		return String::NewFromUtf8(isolate, String);
	}

	Local<String> V8_KeywordString(Isolate* isolate, const FString& String)
	{
		return String::NewFromUtf8(isolate, TCHAR_TO_UTF8(*String), String::kInternalizedString);
	}

	Local<String> V8_KeywordString(Isolate* isolate, const char* String)
	{
		return String::NewFromUtf8(isolate, String, String::kInternalizedString);
	}

	FString StringFromV8(Local<Value> Value)
	{
		return UTF8_TO_TCHAR(*String::Utf8Value(Value));
	}

	FString StringFromArgs(const FunctionCallbackInfo<v8::Value>& args, int StartIndex)
	{
		HandleScope handle_scope(args.GetIsolate());

		TArray<FString> ArgStrings;

		for (int Index = StartIndex; Index < args.Length(); Index++)
		{
			ArgStrings.Add(StringFromV8(args[Index]));
		}

		return FString::Join(ArgStrings, TEXT(" "));
	}
}