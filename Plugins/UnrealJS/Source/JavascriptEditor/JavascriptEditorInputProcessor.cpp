#include "JavascriptEditor.h"
#include "Framework/Application/IInputProcessor.h"
#include "JavascriptEditorInputProcessor.h"

class FMyInputProcessor : public IInputProcessor
{
public:
	TWeakObjectPtr<UJavascriptEditorInputProcessor> Processor;

	FMyInputProcessor(UJavascriptEditorInputProcessor* InProcessor)
	{
		Processor = InProcessor;
	}

	virtual void Tick(const float DeltaTime, FSlateApplication& SlateApp, TSharedRef<ICursor> Cursor)
	{
		return;
	}

	virtual bool HandleKeyDownEvent(FSlateApplication& SlateApp, const FKeyEvent& InKeyEvent)
	{
		return Processor.IsValid() && Processor->HandleKeyDownEvent(InKeyEvent);
	}

	virtual bool HandleKeyUpEvent(FSlateApplication& SlateApp, const FKeyEvent& InKeyEvent)
	{
		return Processor.IsValid() && Processor->HandleKeyUpEvent(InKeyEvent);
	}

	virtual bool HandleMouseMoveEvent(FSlateApplication& SlateApp, const FPointerEvent& InPointerEvent)
	{
		return Processor.IsValid() && Processor->HandleMouseMoveEvent(InPointerEvent);
	}
	
	virtual bool HandleAnalogInputEvent(FSlateApplication& SlateApp, const FAnalogInputEvent& InAnalogInputEvent)
	{
		return Processor.IsValid() && Processor->HandleAnalogInputEvent(InAnalogInputEvent);
	}
};

void UJavascriptEditorInputProcessor::BeginDestroy()
{
	Activate(false);

	Super::BeginDestroy();
}

void UJavascriptEditorInputProcessor::Activate(bool bActivate)
{
	if (bActivate)
	{
		if (bActivated) return;
		bActivated = true;

		FSlateApplication::Get().SetInputPreProcessor(true, MakeShareable(new FMyInputProcessor(this)));
	}
	else
	{
		if (!bActivated) return;
		bActivated = false;

		if (FSlateApplication::IsInitialized())
		{
			FSlateApplication::Get().SetInputPreProcessor(false);
		}
	}
}