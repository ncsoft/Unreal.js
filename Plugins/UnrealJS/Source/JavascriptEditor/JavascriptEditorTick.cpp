#include "JavascriptEditor.h"
#include "JavascriptEditorTick.h"
#include "ScopedTransaction.h"

#if WITH_EDITOR
class FJavascriptEditorTick : public FTickableEditorObject
{
public:
	FJavascriptEditorTick(UJavascriptEditorTick* InObject)
		: Object(InObject)
	{}

	UJavascriptEditorTick* Object;

	virtual void Tick(float DeltaTime) override
	{
		FEditorScriptExecutionGuard ScriptGuard;

		Object->OnTick.ExecuteIfBound(DeltaTime);
	}

	virtual bool IsTickable() const override
	{
		return true;
	}

	virtual TStatId GetStatId() const override
	{
		RETURN_QUICK_DECLARE_CYCLE_STAT(FJavascriptEditorTick, STATGROUP_Tickables);
	}
};
#endif

UJavascriptEditorTick::UJavascriptEditorTick(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{
#if WITH_EDITOR
	if (!IsTemplate(RF_ClassDefaultObject))
	{
		Tickable = new FJavascriptEditorTick(this);
	}
#endif
}

#if WITH_EDITOR
void UJavascriptEditorTick::BeginDestroy()
{
	Super::BeginDestroy();

	if (Tickable)
	{
		delete Tickable;
	}
}

UEditorEngine* UJavascriptEditorTick::GetEngine()
{
	return Cast<UEditorEngine>(GEngine);
}
#endif