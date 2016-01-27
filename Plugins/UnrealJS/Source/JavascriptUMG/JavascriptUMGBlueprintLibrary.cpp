#include "JavascriptUMG.h"
#include "JavascriptUMGBlueprintLibrary.h"

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