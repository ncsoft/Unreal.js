#include "V8PCH.h"
#include "JavascriptGlobalDelegates.h"

void UJavascriptGlobalDelegates::BeginDestroy()
{
	Super::BeginDestroy();

	UnbindAll();
}

#define DO_REFLECT() \
OP_REFLECT(OnPreObjectPropertyChanged)\
OP_REFLECT(OnObjectPropertyChanged)\
OP_REFLECT(RedirectorFollowed)\
OP_REFLECT(PreGarbageCollect)\
OP_REFLECT(PostGarbageCollect)\
OP_REFLECT(PreLoadMap)\
OP_REFLECT(PostLoadMap)\
OP_REFLECT(PostDemoPlay)\
OP_REFLECT(PackageCreatedForLoad)

#if WITH_EDITOR
#define DO_REFLECT_EDITOR_ONLY() \
OP_REFLECT(OnObjectModified)\
OP_REFLECT(OnAssetLoaded)\
OP_REFLECT(OnObjectSaved)
#else
#define DO_REFLECT_EDITOR_ONLY()
#endif

void UJavascriptGlobalDelegates::Bind(FString Key)
{
	FDelegateHandle Handle;
	
#define OP_REFLECT(x) else if (Key == #x) { Handle = FCoreUObjectDelegates::x.AddUObject(this, &UJavascriptGlobalDelegates::x); }
	if (false) {}
	DO_REFLECT()
	DO_REFLECT_EDITOR_ONLY()

	if (Handle.IsValid())
	{
		Handles.Add(Key, Handle);
	}
}

void UJavascriptGlobalDelegates::UnbindAll()
{
	for (auto Iter = Handles.CreateIterator(); Iter; ++Iter)
	{
		Unbind(Iter->Key);		
	}
}

void UJavascriptGlobalDelegates::Unbind(FString Key)
{
	auto Handle = Handles[Key];

#define OP_REFLECT(x) else if (Key == #x) { FCoreUObjectDelegates::x.Remove(Handle); }
	if (false) {}
	DO_REFLECT()
	DO_REFLECT_EDITOR_ONLY()

	Handles.Remove(Key);
}