#include "V8PCH.h"
#include "JavascriptIsolate.h"
#include "JavascriptContext.h"
#include "JavascriptComponent.h"
#include "Config.h"
#include "Translator.h"
#include "Exception.h"

#include "JavascriptIsolate_Private.h"
#include "JavascriptContext_Private.h"

using namespace v8;

DEFINE_LOG_CATEGORY(Javascript);

UJavascriptIsolate::UJavascriptIsolate(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{
	const bool bIsClassDefaultObject = IsTemplate(RF_ClassDefaultObject);
	if (!bIsClassDefaultObject)
	{
		JavascriptIsolate = TSharedPtr<FJavascriptIsolate>(FJavascriptIsolate::Create());
	}
}

void UJavascriptIsolate::AddReferencedObjects(UObject* InThis, FReferenceCollector& Collector)
{
	UJavascriptIsolate* This = CastChecked<UJavascriptIsolate>(InThis);

	if (This->JavascriptIsolate.IsValid())
	{
		Collector.AllowEliminatingReferences(false);
		
		This->JavascriptIsolate->AddReferencedObjects(This, Collector);		

		Collector.AllowEliminatingReferences(true);
	}		
	
	Super::AddReferencedObjects(This, Collector);
}

UJavascriptIsolate::~UJavascriptIsolate()
{
	const bool bIsClassDefaultObject = IsTemplate(RF_ClassDefaultObject);
	if (!bIsClassDefaultObject)
	{
		JavascriptIsolate.Reset();
	}
}

UJavascriptContext* UJavascriptIsolate::CreateContext()
{
	return NewObject<UJavascriptContext>(this);
}

UJavascriptContext::UJavascriptContext(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{
	const bool bIsClassDefaultObject = IsTemplate(RF_ClassDefaultObject);
	if (!bIsClassDefaultObject)
	{
		auto Isolate = Cast<UJavascriptIsolate>(GetOuter());
		JavascriptContext = TSharedPtr<FJavascriptContext>(FJavascriptContext::Create(Isolate->JavascriptIsolate,Paths));

		Expose("Context", this);

		SetContextId(GetName());
	}	
}

void UJavascriptContext::SetContextId(FString Name)
{
	ContextId = MakeShareable(new FString(Name));
}

void UJavascriptContext::AddReferencedObjects(UObject* InThis, FReferenceCollector& Collector)
{
	UJavascriptContext* This = CastChecked<UJavascriptContext>(InThis);

	if (This->JavascriptContext.IsValid())
	{
		Collector.AllowEliminatingReferences(false);

		This->JavascriptContext->AddReferencedObjects(This, Collector);

		Collector.AllowEliminatingReferences(true);
	}

	Super::AddReferencedObjects(This, Collector);
}

void UJavascriptContext::Expose(FString Name, UObject* Object)
{
	JavascriptContext->Expose(Name, Object);
}

FString UJavascriptContext::GetScriptFileFullPath(FString Filename)
{
	return JavascriptContext->GetScriptFileFullPath(Filename);
}

FString UJavascriptContext::ReadScriptFile(FString Filename)
{
	return JavascriptContext->ReadScriptFile(Filename);
}

void UJavascriptContext::RunFile(FString Filename)
{
	JavascriptContext->Public_RunFile(Filename);
}

FString UJavascriptContext::RunScript(FString Script, bool bOutput)
{
	return JavascriptContext->Public_RunScript(Script, bOutput);	
}

void UJavascriptContext::SetAsDebugContext()
{
	JavascriptContext->SetAsDebugContext();
}

bool UJavascriptContext::IsDebugContext() const
{
	return JavascriptContext->IsDebugContext();
}

bool UJavascriptContext::WriteAliases(FString Filename)
{
	return JavascriptContext->WriteAliases(Filename);
}

bool UJavascriptContext::WriteDTS(FString Filename, bool bIncludingTooltip)
{
	return JavascriptContext->WriteDTS(Filename, bIncludingTooltip);
}

bool UJavascriptContext::HasProxyFunction(UObject* Holder, UFunction* Function)
{
	return JavascriptContext->HasProxyFunction(Holder, Function);
}

bool UJavascriptContext::CallProxyFunction(UObject* Holder, UObject* This, UFunction* FunctionToCall, void* Parms)
{
	return JavascriptContext->CallProxyFunction(Holder, This, FunctionToCall, Parms);
}

namespace fastcall
{
	enum { MaxArgs = 32 };

	Handle<Value> argv[MaxArgs];
	Handle<Value> retval;
	int argc = 0;

	void push(Local<Value> value)
	{
		argv[argc++] = value;
	}

	void call(Local<Object> self, Local<Function> func)
	{
		retval = func->Call(self, argc, argv);
	}

	void reset()
	{
		for (int32 Index = 0; Index < argc; ++Index)
		{
			argv[Index].Clear();
		}
		argc = 0;
		retval.Clear();
	}
	
	uint8 handle_scope_raw[sizeof(HandleScope)];

	void enter(Isolate* isolate)
	{
		isolate->Enter();
		new(reinterpret_cast<HandleScope*>(handle_scope_raw)) HandleScope(isolate);
	}

	void exit(Isolate* isolate)
	{
		reinterpret_cast<HandleScope*>(handle_scope_raw)->~HandleScope();
		isolate->Exit();		
	}

	void enter(Local<Context> context)
	{
		context->Enter();
	}

	void exit(Local<Context> context)
	{
		context->Exit();		
	}
}

void UJavascriptContext::BeginDestroy()
{
	Super::BeginDestroy();

	JavascriptContext.Reset();
	ContextId.Reset();
}

void UJavascriptContext::InternalPushArgument(int32 Value)
{
	auto isolate = JavascriptContext->isolate();
	fastcall::push(Int32::New(isolate, Value));
}

void UJavascriptContext::InternalPushArgument(float Value)
{
	auto isolate = JavascriptContext->isolate();
	fastcall::push(Number::New(isolate, Value));
}

void UJavascriptContext::InternalPushArgument(bool Value)
{
	auto isolate = JavascriptContext->isolate();
	fastcall::push(Boolean::New(isolate, Value));
}

void UJavascriptContext::InternalPushArgument(const TCHAR* Value)
{
	auto isolate = JavascriptContext->isolate();
	fastcall::push(V8_String(isolate,Value));
}

void UJavascriptContext::InternalPushArgument(UObject* Value)
{
	fastcall::push(JavascriptContext->ExportObject(Value));
}

bool UJavascriptContext::InternalPopReturnValue(int32& Value)
{
	return !fastcall::retval.IsEmpty() && ((Value = fastcall::retval->Int32Value()), true);
}

bool UJavascriptContext::InternalPopReturnValue(float& Value)
{
	return !fastcall::retval.IsEmpty() && ((Value = fastcall::retval->NumberValue()), true);
}

bool UJavascriptContext::InternalPopReturnValue(bool& Value)
{
	return !fastcall::retval.IsEmpty() && ((Value = fastcall::retval->BooleanValue()), true);
}

bool UJavascriptContext::InternalPopReturnValue(FString& Value)
{
	return !fastcall::retval.IsEmpty() && ((Value = (StringFromV8(fastcall::retval))), true);
}

bool UJavascriptContext::InternalPopReturnValue(UObject*& Value)
{
	return !fastcall::retval.IsEmpty() && ((Value = UObjectFromV8(fastcall::retval)), true);
}

void UJavascriptContext::InternalBegin()
{	
	fastcall::enter(JavascriptContext->isolate());
	fastcall::enter(JavascriptContext->context());
}

bool UJavascriptContext::InternalCall(UObject* Object, FName Name)
{
	auto context = JavascriptContext->context();
	
	auto func = JavascriptContext->GetProxyFunction(Object, *(Name.ToString()));
	if (!func.IsEmpty() && func->IsFunction())
	{
		auto function = Local<Function>::Cast(func);

		TryCatch try_catch;
		
		fastcall::call(context->Global(), function);

		if (try_catch.HasCaught())
		{
			FV8Exception::Report(try_catch);
			return false;
		}
		else
		{
			return true;
		}		
	}	
	else
	{
		return false;
	}	
}

void UJavascriptContext::InternalEnd()
{	
	fastcall::reset();
	fastcall::exit(JavascriptContext->context());
	fastcall::exit(JavascriptContext->isolate());
}