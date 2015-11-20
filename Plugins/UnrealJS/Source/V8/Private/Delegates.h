#pragma once

namespace v8
{
	struct IDelegateManager
	{
		static IDelegateManager* Create(Isolate* isolate);
		virtual void Destroy() = 0;
		virtual Local<Value> GetProxy(Local<Object> This, UObject* Object, UProperty* Property) = 0;
	};
}