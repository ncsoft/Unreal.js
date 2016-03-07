#include "JavascriptUMG.h"
#include "JavascriptUMGBlueprintLibrary.h"
#include "JavascriptTextModel.h"

FSlateColor UJavascriptUMGBlueprintLibrary::SlateColor_UseForeground()
{
	return FSlateColor::UseForeground();
}

FSlateColor UJavascriptUMGBlueprintLibrary::SlateColor_UseSubduedForeground()
{
	return FSlateColor::UseSubduedForeground();
}

void UJavascriptUMGBlueprintLibrary::DrawSpaceSpline(UPARAM(ref) FPaintContext& Context, FVector2D InStart, FVector2D InStartDir, FVector2D InEnd, FVector2D InEndDir, float InThickness, FLinearColor InTint)
{
	Context.MaxLayer++;

	auto Transform = Context.AllottedGeometry.GetAccumulatedLayoutTransform();

	FSlateDrawElement::MakeDrawSpaceSpline(
		Context.OutDrawElements,
		Context.MaxLayer,
		Transform.TransformPoint(InStart),
		Transform.TransformVector(InStartDir),
		Transform.TransformPoint(InEnd),
		Transform.TransformVector(InEndDir),
		Context.MyClippingRect,
		InThickness * Transform.GetScale(),
		ESlateDrawEffect::None,
		InTint);
}

FString UJavascriptUMGBlueprintLibrary::GetAsText(UPARAM(ref) const FJavascriptTextLayout& TextLayout)
{
	FString String;
	TextLayout.ConstTextLayout->GetAsText(String);
	return String;
}

void UJavascriptUMGBlueprintLibrary::ClearLines(UPARAM(ref) FJavascriptTextLayout& TextLayout)
{
	TextLayout.TextLayout->ClearLines();
}

void UJavascriptUMGBlueprintLibrary::AddLine(UPARAM(ref) FJavascriptTextLayout& TextLayout, UJavascriptTextModel* Model, const TArray<FJavascriptSlateTextRun>& InRuns)
{
	TArray<TSharedRef<IRun>> Runs;
	for (auto InRun : InRuns)
	{
		if (InRun.Run.IsValid())
		{
			Runs.Add(InRun.Run.ToSharedRef());
		}		
	}	

	if (Model && Model->Model.IsValid())
	{
		TextLayout.TextLayout->AddLine(Model->Model.ToSharedRef(), Runs);
	}	
}
