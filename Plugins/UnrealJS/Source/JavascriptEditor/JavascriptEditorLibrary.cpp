#include "JavascriptEditor.h"
#include "JavascriptEditorLibrary.h"
#include "Editor/LandscapeEditor/Private/LandscapeEdModeTools.h"
#include "JavascriptContext.h"
#include "BSPOps.h"

#if WITH_EDITOR
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

void UJavascriptEditorLibrary::GetAllTags(const FJavascriptAssetData& AssetData, TArray<FName>& OutArray)
{
	AssetData.SourceAssetData.TagsAndValues.GetKeys(OutArray);
}

bool UJavascriptEditorLibrary::GetTagValue(const FJavascriptAssetData& AssetData, const FName& Name, FString& OutValue)
{
	auto Value = AssetData.SourceAssetData.TagsAndValues.Find(Name);

	if (Value)
	{
		OutValue = *Value;
		return true;
	}
	else
	{
		return false;
	}
}

UClass* UJavascriptEditorLibrary::GetClass(const FJavascriptAssetData& AssetData)
{
	return AssetData.SourceAssetData.GetClass();
}

UPackage* UJavascriptEditorLibrary::GetPackage(const FJavascriptAssetData& AssetData)
{
	return AssetData.SourceAssetData.GetPackage();
}

UObject* UJavascriptEditorLibrary::GetAsset(const FJavascriptAssetData& AssetData)
{
	return AssetData.SourceAssetData.GetAsset();
}

bool UJavascriptEditorLibrary::IsAssetLoaded(const FJavascriptAssetData& AssetData)
{
	return AssetData.SourceAssetData.IsAssetLoaded();
}

bool UJavascriptEditorLibrary::EditorDestroyActor(UWorld* World, AActor* Actor, bool bShouldModifyLevel)
{
	return World->EditorDestroyActor(Actor, bShouldModifyLevel);
}

void UJavascriptEditorLibrary::SetIsTemporarilyHiddenInEditor(AActor* Actor, bool bIsHidden)
{
	Actor->SetIsTemporarilyHiddenInEditor(bIsHidden);
}

ABrush* UJavascriptEditorLibrary::GetDefaultBrush(UWorld* World) const
{
	return World->GetDefaultBrush();
}

bool UJavascriptEditorLibrary::Build(UBrushBuilder* Builder, UWorld* InWorld, ABrush* InBrush)
{
	return Builder->Build(InWorld, InBrush);
}

void UJavascriptEditorLibrary::Select(USelection* Selection, UObject* InObject)
{
	Selection->Select(InObject);
}

void UJavascriptEditorLibrary::Deselect(USelection* Selection, UObject* InObject)
{
	Selection->Deselect(InObject);
}

void UJavascriptEditorLibrary::ToggleSelect(USelection* Selection, UObject* InObject)
{
	Selection->ToggleSelect(InObject);
}

void UJavascriptEditorLibrary::DeselectAll(USelection* Selection, UClass* InClass)
{
	Selection->DeselectAll(InClass);
}

int32 UJavascriptEditorLibrary::GetSelectedObjects(USelection* Selection, TArray<UObject*>& Out)
{
	return Selection->GetSelectedObjects(Out);
}

ABrush* UJavascriptEditorLibrary::csgAdd(ABrush* DefaultBrush, int32 PolyFlags, EBrushType BrushType)
{
	return FBSPOps::csgAddOperation(DefaultBrush, PolyFlags, BrushType);
}

void UJavascriptEditorLibrary::ModifyObject(UObject* Object, bool bAlwaysMarkDirty)
{
	Object->Modify(bAlwaysMarkDirty);
}

void UJavascriptEditorLibrary::InvalidateModelGeometry(UWorld* World, ULevel* InLevel)
{
	World->InvalidateModelGeometry(InLevel);
}

void UJavascriptEditorLibrary::UpdateModelComponents(ULevel* Level)
{
	Level->UpdateModelComponents();
}
#endif