#include "V8PCH.h"
#include "JavascriptDelegate.h"
#include "Translator.h"
#include "Delegates.h"
#include "JavascriptStats.h"

using namespace v8;

class FJavascriptDelegate
{
public:
	FWeakObjectPtr WeakObject;
	UProperty* Property;
	Persistent<Context> context_;
	TMap<int32, UniquePersistent<Function>> functions;
	Persistent<Object> WrappedObject;
	Isolate* isolate_;
	int32 NextUniqueId{ 0 };
	bool bAbandoned{ false };

	bool IsValid() const
	{
		return WeakObject.IsValid();
	}

	FJavascriptDelegate(UObject* InObject, UProperty* InProperty)
		: WeakObject(InObject), Property(InProperty)
	{}

	~FJavascriptDelegate()
	{
		Purge();
	}

	void Purge()
	{
		if (!bAbandoned)
		{
			bAbandoned = true;

			WrappedObject.Reset();

			ClearDelegateObjects();

			context_.Reset();
		}
	}

	Local<Object> Initialize(Local<Context> context)
	{
		isolate_ = context->GetIsolate();
		context_.Reset(isolate_, context);

		auto out = Object::New(isolate_);

		auto add = [](const FunctionCallbackInfo<Value>& info) {
			for (;;)
			{
				auto payload = reinterpret_cast<FJavascriptDelegate*>(Local<External>::Cast(info.Data())->Value());
				if (info.Length() == 1)
				{
					auto func = Local<Function>::Cast(info[0]);
					if (!func.IsEmpty())
					{
						payload->Add(func);
						break;
					}
				}

				UE_LOG(Javascript, Log, TEXT("Invalid argument for delegate"));
				break;
			}
		};

		auto remove = [](const FunctionCallbackInfo<Value>& info) {
			for (;;)
			{
				auto payload = reinterpret_cast<FJavascriptDelegate*>(Local<External>::Cast(info.Data())->Value());
				if (info.Length() == 1)
				{
					auto func = Local<Function>::Cast(info[0]);
					if (!func.IsEmpty())
					{
						payload->Remove(func);
						break;
					}
				}

				UE_LOG(Javascript, Log, TEXT("Invalid argument for delegate"));
				break;
			}
		};

		auto clear = [](const FunctionCallbackInfo<Value>& info) {
			auto payload = reinterpret_cast<FJavascriptDelegate*>(Local<External>::Cast(info.Data())->Value());
			payload->Clear();			
		};

		auto toJSON = [](const FunctionCallbackInfo<Value>& info) {
			auto payload = reinterpret_cast<FJavascriptDelegate*>(Local<External>::Cast(info.Data())->Value());

			uint32_t Index = 0;			
			auto arr = Array::New(info.GetIsolate(), payload->DelegateObjects.Num());
			const bool bIsMulticastDelegate = payload->Property->IsA(UMulticastDelegateProperty::StaticClass());

			for (auto DelegateObject : payload->DelegateObjects)
			{
				auto JavascriptFunction = payload->functions.Find(DelegateObject->UniqueId);
				if (JavascriptFunction)
				{
					auto function = Local<Function>::New(info.GetIsolate(), *JavascriptFunction);
					if (!bIsMulticastDelegate)
					{
						info.GetReturnValue().Set(function);
						return;
					}
					
					arr->Set(Index++, function);
				}
			}

			if (!bIsMulticastDelegate)
			{
				info.GetReturnValue().Set(Null(info.GetIsolate()));
			}
			else
			{
				info.GetReturnValue().Set(arr);
			}			
		};

		auto data = External::New(isolate_, this);

		out->Set(V8_KeywordString(isolate_, "Add"), Function::New(isolate_, add, data));
		out->Set(V8_KeywordString(isolate_, "Remove"), Function::New(isolate_, remove, data));
		out->Set(V8_KeywordString(isolate_, "Clear"), Function::New(isolate_, clear, data));
		out->Set(V8_KeywordString(isolate_, "toJSON"), Function::New(isolate_, toJSON, data));

		WrappedObject.Reset(isolate_, out);

		return out;
	}

	TArray<UJavascriptDelegate*> DelegateObjects;

	void ClearDelegateObjects()
	{
		for (auto obj : DelegateObjects)
		{
			obj->RemoveFromRoot();
		}
		DelegateObjects.Empty();
		functions.Empty();
	}

	void Add(Local<Function> function)
	{
		auto DelegateObject = NewObject<UJavascriptDelegate>();

		DelegateObject->UniqueId = NextUniqueId++;

		Bind(DelegateObject, function);
	}

	UJavascriptDelegate* FindJavascriptDelegateByFunction(Local<Function> function)
	{
		HandleScope handle_scope(isolate_);

		bool bWasSuccessful = false;
		for (auto it = functions.CreateIterator(); it; ++it)
		{
			if (Local<Function>::New(isolate_, it.Value())->Equals(function))
			{
				for (auto obj : DelegateObjects)
				{
					if (obj->UniqueId == it.Key())
					{
						return obj;
					}
				}
			}
		}

		return nullptr;
	}

	void Remove(Local<Function> function)
	{
		auto obj = FindJavascriptDelegateByFunction(function);

		if (obj)
		{
			Unbind(obj);
		}
		else
		{
			UE_LOG(Javascript, Log, TEXT("No match for removing delegate"));
		}
	}

	void Clear()
	{
		while (DelegateObjects.Num())
		{
			Unbind(DelegateObjects[0]);
		}
	}

	void Bind(UJavascriptDelegate* DelegateObject, Local<Function> function)
	{
		static FName NAME_Fire("Fire");

		if (WeakObject.IsValid())
		{
			if (auto p = Cast<UMulticastDelegateProperty>(Property))
			{
				FScriptDelegate Delegate;
				Delegate.BindUFunction(DelegateObject, NAME_Fire);

				auto Target = p->GetPropertyValuePtr_InContainer(WeakObject.Get());
				Target->Add(Delegate);
			}
			else if (auto p = Cast<UDelegateProperty>(Property))
			{
				auto Target = p->GetPropertyValuePtr_InContainer(WeakObject.Get());
				Target->BindUFunction(DelegateObject, NAME_Fire);
			}
		}

		DelegateObject->JavascriptDelegate = this;
		DelegateObject->AddToRoot();
		DelegateObjects.Add(DelegateObject);

		functions.Add( DelegateObject->UniqueId, UniquePersistent<Function>(isolate_, function) );
	}

	void Unbind(UJavascriptDelegate* DelegateObject)
	{
		static FName NAME_Fire("Fire");

		if (WeakObject.IsValid())
		{
			if (auto p = Cast<UMulticastDelegateProperty>(Property))
			{
				FScriptDelegate Delegate;
				Delegate.BindUFunction(DelegateObject, NAME_Fire);

				auto Target = p->GetPropertyValuePtr_InContainer(WeakObject.Get());
				Target->Remove(Delegate);
			}
			else if (auto p = Cast<UDelegateProperty>(Property))
			{
				auto Target = p->GetPropertyValuePtr_InContainer(WeakObject.Get());
				Target->Clear();
			}
		}

		DelegateObject->JavascriptDelegate = nullptr;
		DelegateObject->RemoveFromRoot();
		DelegateObjects.Remove(DelegateObject);

		if (!bAbandoned)
		{
			functions.Remove(DelegateObject->UniqueId);
		}
	}

	UFunction* GetSignatureFunction()
	{
		if (auto p = Cast<UMulticastDelegateProperty>(Property))
		{
			return p->SignatureFunction;
		}
		else if (auto p = Cast<UDelegateProperty>(Property))
		{
			return p->SignatureFunction;
		}
		else
		{
			return nullptr;
		}
	}

	void Fire(void* Parms, UJavascriptDelegate* Delegate)
	{
		SCOPE_CYCLE_COUNTER(STAT_JavascriptDelegate);

		auto Buffer = reinterpret_cast<uint8*>(Parms);

		auto it = functions.Find(Delegate->UniqueId);
		if (WeakObject.IsValid() && it)
		{
			Isolate::Scope isolate_scope(isolate_);
			HandleScope handle_scope(isolate_);

			auto func = Local<Function>::New(isolate_, *it);
			if (!func.IsEmpty())
			{
				auto context = Local<Context>::New(isolate_, context_);

				Context::Scope context_sopce(context);

				CallJavascriptFunction(context, context->Global(), GetSignatureFunction(), func, Parms);
			}
		}
	}
};

struct FDelegateManager : IDelegateManager
{
	Isolate* isolate_;

	FDelegateManager(Isolate* isolate)
		: isolate_(isolate)
	{}

	virtual ~FDelegateManager()
	{
		PurgeAllDelegates();
	}

	virtual void Destroy() override
	{
		delete this;
	}

	TSet<FJavascriptDelegate*> Delegates;

	void CollectGarbageDelegates()
	{
		for (auto it = Delegates.CreateIterator(); it; ++it)
		{
			auto d = *it;
			if (!d->IsValid())
			{
				delete d;
				it.RemoveCurrent();
			}
		}
	}

	void PurgeAllDelegates()
	{
		for (auto d : Delegates)
		{
			delete d;
		}
		Delegates.Empty();
	}

	Local<Object> CreateDelegate(UObject* Object, UProperty* Property)
	{
		//@HACK
		CollectGarbageDelegates();

		auto payload = new FJavascriptDelegate(Object, Property);
		auto created = payload->Initialize(isolate_->GetCurrentContext());

		Delegates.Add(payload);

		return created;
	}

	virtual Local<Value> GetProxy(Local<Object> This, UObject* Object, UProperty* Property) override
	{
		auto cache_id = V8_KeywordString(isolate_, FString::Printf(TEXT("$internal_%s"), *(Property->GetName())));
		auto cached = This->Get(cache_id);
		if (cached.IsEmpty() || cached->IsUndefined())
		{
			auto created = CreateDelegate(Object, Property);

			This->Set(cache_id, created);
			return created;
		}
		else
		{
			return cached;
		}
	}
};

namespace v8
{
	IDelegateManager* IDelegateManager::Create(Isolate* isolate)
	{
		return new FDelegateManager(isolate);
	}
}

void UJavascriptDelegate::Fire()
{}

void UJavascriptDelegate::ProcessEvent(UFunction* Function, void* Parms)
{
	if (JavascriptDelegate)
	{
		JavascriptDelegate->Fire(Parms, this);
	}
}