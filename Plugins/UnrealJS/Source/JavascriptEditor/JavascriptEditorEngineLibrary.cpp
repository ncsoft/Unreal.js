#include "JavascriptEditor.h"
#include "JavascriptEditorEngineLibrary.h"
#include "JavascriptContext.h"


UWorld* UJavascriptEditorEngineLibrary::GetEditorWorld(UEngine* Engine)
{
	for (const FWorldContext& Context : GEngine->GetWorldContexts())
	{
		if (Context.WorldType == EWorldType::Editor)
		{
			return Context.World();
		}
	}

	return nullptr;
}

UWorld* UJavascriptEditorEngineLibrary::GetPIEWorld(UEngine* Engine)
{
	for (const FWorldContext& Context : GEngine->GetWorldContexts())
	{
		if (Context.WorldType == EWorldType::PIE)
		{
			return Context.World();
		}
	}

	return nullptr;
}

void UJavascriptEditorEngineLibrary::RedrawAllViewports(UEditorEngine* Engine, bool bInvalidateHitProxies)
{
	if (Engine)
	{
		Engine->RedrawAllViewports(bInvalidateHitProxies);
	}	
}

bool UJavascriptEditorEngineLibrary::Exec(UEditorEngine* Engine, UWorld* InWorld, const FString& Command, FString& Out)
{
	FStringOutputDevice StringOutputDevice;
	bool bResult = Engine->Exec(InWorld, *Command, StringOutputDevice);
	Out = *StringOutputDevice;
	return bResult;
}

UBrushBuilder* UJavascriptEditorEngineLibrary::FindBrushBuilder(UEditorEngine* Engine, UClass* BrushBuilderClass)
{
	return Engine->FindBrushBuilder(BrushBuilderClass);
}

// Selection.
void UJavascriptEditorEngineLibrary::SelectActor(UEditorEngine* Engine, AActor* Actor, bool bInSelected, bool bNotify, bool bSelectEvenIfHidden, bool bForceRefresh)
{
	Engine->SelectActor(Actor, bInSelected, bNotify, bSelectEvenIfHidden, bForceRefresh);
}

bool UJavascriptEditorEngineLibrary::CanSelectActor(UEditorEngine* Engine, AActor* Actor, bool bInSelected, bool bSelectEvenIfHidden, bool bWarnIfLevelLocked )
{
	return Engine->CanSelectActor(Actor, bInSelected, bSelectEvenIfHidden, bWarnIfLevelLocked);
}

void UJavascriptEditorEngineLibrary::SelectGroup(UEditorEngine* Engine, class AGroupActor* InGroupActor, bool bForceSelection, bool bInSelected, bool bNotify)
{
	Engine->SelectGroup(InGroupActor, bForceSelection, bInSelected, bNotify);
}

void UJavascriptEditorEngineLibrary::SelectComponent(UEditorEngine* Engine, class UActorComponent* Component, bool bInSelected, bool bNotify, bool bSelectEvenIfHidden)
{
	Engine->SelectComponent(Component, bInSelected, bNotify, bSelectEvenIfHidden);
}

void UJavascriptEditorEngineLibrary::SelectNone(UEditorEngine* Engine, bool bNoteSelectionChange, bool bDeselectBSPSurfs, bool WarnAboutManyActors)
{
	Engine->SelectNone(bNoteSelectionChange, bDeselectBSPSurfs, WarnAboutManyActors);
}

class USelection* UJavascriptEditorEngineLibrary::GetSelectedComponents(UEditorEngine* Engine)
{
	return Engine->GetSelectedComponents();
}

class USelection* UJavascriptEditorEngineLibrary::GetSelectedObjects(UEditorEngine* Engine)
{
	return Engine->GetSelectedObjects();
}

class USelection* UJavascriptEditorEngineLibrary::GetSelectedSet(UEditorEngine* Engine, const UClass* Class)
{
	return Engine->GetSelectedSet(Class);
}

void UJavascriptEditorEngineLibrary::RebuildLevel(UEditorEngine* Engine, ULevel* Level)
{
	Engine->RebuildLevel(*Level);
}