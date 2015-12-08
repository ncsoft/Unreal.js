#include "JavascriptEditor.h"
#include "JavascriptEditorGlobalDelegates.h"

void UJavascriptEditorGlobalDelegates::BeginDestroy()
{
	Super::BeginDestroy();

	UnbindAll();
}

void UJavascriptEditorGlobalDelegates::Bind(FString Key)
{
	FDelegateHandle Handle;

#if WITH_EDITOR
	if (Key == TEXT("PreBeginPIE"))
	{
		Handle = FEditorDelegates::PreBeginPIE.AddUObject(this, &UJavascriptEditorGlobalDelegates::PreBeginPIE);
	}
	else if (Key == TEXT("BeginPIE"))
	{
		Handle = FEditorDelegates::BeginPIE.AddUObject(this, &UJavascriptEditorGlobalDelegates::BeginPIE);
	}
	else if (Key == TEXT("EndPIE"))
	{
		Handle = FEditorDelegates::EndPIE.AddUObject(this, &UJavascriptEditorGlobalDelegates::EndPIE);
	}
	else if (Key == TEXT("ResumePIE"))
	{
		Handle = FEditorDelegates::ResumePIE.AddUObject(this, &UJavascriptEditorGlobalDelegates::ResumePIE);
	}
	else if (Key == TEXT("SingleStepPIE"))
	{
		Handle = FEditorDelegates::SingleStepPIE.AddUObject(this, &UJavascriptEditorGlobalDelegates::SingleStepPIE);
	}
#endif

	if (Handle.IsValid())
	{
		Handles.Add(Key, Handle);
	}
}

void UJavascriptEditorGlobalDelegates::UnbindAll()
{
	for (auto Iter = Handles.CreateIterator(); Iter; ++Iter)
	{
		Unbind(Iter->Key);
	}
}

void UJavascriptEditorGlobalDelegates::Unbind(FString Key)
{
	auto Handle = Handles[Key];

#if WITH_EDITOR
	if (Key == TEXT("PreBeginPIE"))
	{
		FEditorDelegates::PreBeginPIE.Remove(Handle);
	}
	else if (Key == TEXT("BeginPIE"))
	{
		FEditorDelegates::BeginPIE.Remove(Handle);
	}
	else if (Key == TEXT("EndPIE"))
	{
		FEditorDelegates::EndPIE.Remove(Handle);
	}
	else if (Key == TEXT("ResumePIE"))
	{
		FEditorDelegates::ResumePIE.Remove(Handle);
	}
	else if (Key == TEXT("SingleStepPIE"))
	{
		FEditorDelegates::SingleStepPIE.Remove(Handle);
	}
#endif

	Handles.Remove(Key);
}