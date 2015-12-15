#include "JavascriptEditor.h"
#include "JavascriptEditorLibrary.h"
#include "Editor/LandscapeEditor/Private/LandscapeEdModeTools.h"
#include "JavascriptContext.h"

ULandscapeInfo* UJavascriptEditorLibrary::GetLandscapeInfo(ALandscape* Landscape, bool bSpawnNewActor)
{
	return Landscape ? Landscape->GetLandscapeInfo(bSpawnNewActor) : nullptr;
}

void UJavascriptEditorLibrary::SetHeightmapDataFromMemory(ULandscapeInfo* LandscapeInfo, int32 MinX, int32 MinY, int32 MaxX, int32 MaxY)
{
	const int32 SizeX = (1 + MaxX - MinX);
	const int32 SizeY = (1 + MaxY - MinY);

	if (SizeX * SizeY * 2 == FArrayBufferAccessor::GetSize())
	{
		FHeightmapAccessor<false> Accessor(LandscapeInfo);
		Accessor.SetData(MinX, MinY, MaxX, MaxY, (uint16*)FArrayBufferAccessor::GetData());
	}	
}

void UJavascriptEditorLibrary::GetHeightmapDataToMemory(ULandscapeInfo* LandscapeInfo, int32 MinX, int32 MinY, int32 MaxX, int32 MaxY)
{
	const int32 SizeX = (1 + MaxX - MinX);
	const int32 SizeY = (1 + MaxY - MinY);

	if (SizeX * SizeY * 2 == FArrayBufferAccessor::GetSize())
	{
		auto Buffer = (uint16*)FArrayBufferAccessor::GetData();

		FHeightmapAccessor<false> Accessor(LandscapeInfo);

		TMap<FIntPoint, uint16> Data;
		Accessor.GetData(MinX, MinY, MaxX, MaxY, Data);

		FMemory::Memzero(Buffer, SizeX * SizeY * 2);

		for (auto it = Data.CreateConstIterator(); it; ++it)
		{
			const auto& Point = it.Key();
			Buffer[Point.X + Point.Y * SizeX] = it.Value();
		}
	}
}

void UJavascriptEditorLibrary::SetAlphamapDataFromMemory(ULandscapeInfo* LandscapeInfo, ULandscapeLayerInfoObject* LayerInfo, int32 MinX, int32 MinY, int32 MaxX, int32 MaxY, ELandscapeLayerPaintingRestriction::Type PaintingRestriction)
{
	if (LayerInfo == nullptr)
	{
		return;
	}

	const int32 SizeX = (1 + MaxX - MinX);
	const int32 SizeY = (1 + MaxY - MinY);

	if (SizeX * SizeY * 1 == FArrayBufferAccessor::GetSize())
	{
		FAlphamapAccessor<false,false> Accessor(LandscapeInfo, LayerInfo);
		Accessor.SetData(MinX, MinY, MaxX, MaxY, (uint8*)FArrayBufferAccessor::GetData(), PaintingRestriction);
	}
}

void UJavascriptEditorLibrary::GetAlphamapDataToMemory(ULandscapeInfo* LandscapeInfo, ULandscapeLayerInfoObject* LayerInfo, int32 MinX, int32 MinY, int32 MaxX, int32 MaxY)
{
	if (LayerInfo == nullptr)
	{
		return;
	}

	const int32 SizeX = (1 + MaxX - MinX);
	const int32 SizeY = (1 + MaxY - MinY);

	if (SizeX * SizeY * 1 == FArrayBufferAccessor::GetSize())
	{
		auto Buffer = (uint8*)FArrayBufferAccessor::GetData();

		FAlphamapAccessor<false, false> Accessor(LandscapeInfo, LayerInfo);

		TMap<FIntPoint, uint8> Data;
		Accessor.GetData(MinX, MinY, MaxX, MaxY, Data);

		FMemory::Memzero(Buffer, SizeX * SizeY);

		for (auto it = Data.CreateConstIterator(); it; ++it)
		{
			const auto& Point = it.Key();
			Buffer[Point.X + Point.Y * SizeX] = it.Value();
		}
	}
}

bool UJavascriptEditorLibrary::GetLandscapeExtent(ULandscapeInfo* LandscapeInfo, int32& MinX, int32& MinY, int32& MaxX, int32& MaxY) 
{
	if (!LandscapeInfo) return false;

	return LandscapeInfo->GetLandscapeExtent(MinX, MinY, MaxX, MaxY);
}

ULandscapeLayerInfoObject* UJavascriptEditorLibrary::GetLayerInfoByName(ULandscapeInfo* LandscapeInfo, FName LayerName, ALandscapeProxy* Owner)
{
	return LandscapeInfo ? LandscapeInfo->GetLayerInfoByName(LayerName, Owner) : nullptr;
}

UWorld* UJavascriptEditorLibrary::GetEditorWorld(UEngine* Engine)
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

UWorld* UJavascriptEditorLibrary::GetPIEWorld(UEngine* Engine)
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

void UJavascriptEditorLibrary::RedrawAllViewports(UEditorEngine* Engine, bool bInvalidateHitProxies)
{
	if (Engine)
	{
		Engine->RedrawAllViewports(bInvalidateHitProxies);
	}	
}

void UJavascriptEditorLibrary::OpenPopupWindow(UWidget* Widget, const FVector2D& PopupDesiredSize, const FText& HeadingText)
{
	// Create the contents of the popup
	TSharedRef<SWidget> ActualWidget = Widget->TakeWidget();

	// Wrap the picker widget in a multibox-style menu body
	FMenuBuilder MenuBuilder(/*BShouldCloseAfterSelection=*/ false, /*CommandList=*/ nullptr);
	MenuBuilder.BeginSection("OpenPopupWindow", HeadingText);
	MenuBuilder.AddWidget(ActualWidget, FText::GetEmpty(), /*bNoIndent=*/ true);
	MenuBuilder.EndSection();

	auto WindowContents = MenuBuilder.MakeWidget();

	// Determine where the pop-up should open
	TSharedPtr<SWindow> ParentWindow = FSlateApplication::Get().GetActiveTopLevelWindow();
	FVector2D WindowPosition = FSlateApplication::Get().GetCursorPos();
	if (!ParentWindow.IsValid())
	{
		return;
	}

	if (ParentWindow.IsValid())
	{
		FSlateRect ParentMonitorRect = ParentWindow->GetFullScreenInfo();
		const FVector2D MonitorCenter((ParentMonitorRect.Right + ParentMonitorRect.Left) * 0.5f, (ParentMonitorRect.Top + ParentMonitorRect.Bottom) * 0.5f);
		WindowPosition = MonitorCenter - PopupDesiredSize * 0.5f;

		// Open the pop-up
		FPopupTransitionEffect TransitionEffect(FPopupTransitionEffect::None);
		auto Menu = FSlateApplication::Get().PushMenu(ParentWindow.ToSharedRef(), FWidgetPath(), WindowContents, WindowPosition, TransitionEffect, /*bFocusImmediately=*/ true);
	}
}