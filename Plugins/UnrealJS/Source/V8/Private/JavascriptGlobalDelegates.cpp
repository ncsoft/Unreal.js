#include "V8PCH.h"
#include "JavascriptGlobalDelegates.h"

void UJavascriptGlobalDelegates::BeginDestroy()
{
	Super::BeginDestroy();

	UnbindAll();
}

void UJavascriptGlobalDelegates::Bind(FString Key)
{
	FDelegateHandle Handle;
	
#if WITH_EDITOR
	if (Key == TEXT("OnObjectModified"))
	{
		Handle = FCoreUObjectDelegates::OnObjectModified.AddUObject(this, &UJavascriptGlobalDelegates::OnObjectModified);
	}
	else if (Key == TEXT("OnAssetLoaded"))
	{
		Handle = FCoreUObjectDelegates::OnAssetLoaded.AddUObject(this, &UJavascriptGlobalDelegates::OnAssetLoaded);
	}
	else if (Key == TEXT("OnObjectSaved"))
	{
		Handle = FCoreUObjectDelegates::OnObjectSaved.AddUObject(this, &UJavascriptGlobalDelegates::OnObjectSaved);
	}
#endif

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

#if WITH_EDITOR
	if (Key == TEXT("OnObjectModified"))
	{
		FCoreUObjectDelegates::OnObjectModified.Remove(Handle);
	}
	else if (Key == TEXT("OnAssetLoaded"))
	{
		FCoreUObjectDelegates::OnAssetLoaded.Remove(Handle);
	}
	else if (Key == TEXT("OnObjectSaved"))
	{
		FCoreUObjectDelegates::OnObjectSaved.Remove(Handle);
	}	
#endif

	Handles.Remove(Key);
}