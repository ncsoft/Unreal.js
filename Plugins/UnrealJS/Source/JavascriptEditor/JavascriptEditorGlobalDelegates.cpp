#include "JavascriptEditor.h"
#include "AssetRegistryModule.h"
#include "JavascriptEditorGlobalDelegates.h"

void UJavascriptEditorGlobalDelegates::BeginDestroy()
{
	Super::BeginDestroy();

	UnbindAll();
}

#define DO_REFLECT() \
OP_REFLECT(NewCurrentLevel)\
OP_REFLECT(MapChange)\
OP_REFLECT(LayerChange)\
OP_REFLECT(ChangeEditorMode)\
OP_REFLECT(SurfProps)\
OP_REFLECT(SelectedProps)\
OP_REFLECT(FitTextureToSurface)\
OP_REFLECT(ActorPropertiesChange)\
OP_REFLECT(RefreshEditor)\
OP_REFLECT(RefreshAllBrowsers)\
OP_REFLECT(RefreshLayerBrowser)\
OP_REFLECT(RefreshPrimitiveStatsBrowser)\
OP_REFLECT(LoadSelectedAssetsIfNeeded)\
OP_REFLECT(DisplayLoadErrors)\
OP_REFLECT(PreBeginPIE)\
OP_REFLECT(BeginPIE)\
OP_REFLECT(EndPIE)\
OP_REFLECT(ResumePIE)\
OP_REFLECT(SingleStepPIE)\
OP_REFLECT(PropertySelectionChange)\
OP_REFLECT(PostLandscapeLayerUpdated)\
OP_REFLECT(PreSaveWorld)\
OP_REFLECT(PostSaveWorld)\
OP_REFLECT(OnFinishPickingBlueprintClass)\
OP_REFLECT(OnConfigureNewAssetProperties)\
OP_REFLECT(OnNewAssetCreated)\
OP_REFLECT(OnAssetPreImport)\
OP_REFLECT(OnAssetPostImport)\
OP_REFLECT(OnAssetReimport)\
OP_REFLECT(OnNewActorsDropped)\
OP_REFLECT(OnGridSnappingChanged)\
OP_REFLECT(OnLightingBuildStarted)\
OP_REFLECT(OnLightingBuildKept)\
OP_REFLECT(OnApplyObjectToActor)\
OP_REFLECT(OnFocusViewportOnActors)\
OP_REFLECT(OnMapOpened)\
OP_REFLECT(OnEditorCameraMoved)\
OP_REFLECT(OnDollyPerspectiveCamera)\
OP_REFLECT(OnShutdownPostPackagesSaved)\
OP_REFLECT(OnAssetsPreDelete)\
OP_REFLECT(OnAssetsDeleted)\
OP_REFLECT(OnActionAxisMappingsChanged)\
OP_REFLECT(OnAddLevelToWorld)

#define DO_REFLECT_ASSETREGISTRY() \
OP_REFLECT_ASSETREGISTRY(OnPathAdded)\
OP_REFLECT_ASSETREGISTRY(OnPathRemoved)\
OP_REFLECT_ASSETREGISTRY(OnAssetAdded)\
OP_REFLECT_ASSETREGISTRY(OnAssetRemoved)\
OP_REFLECT_ASSETREGISTRY(OnAssetRenamed)\
OP_REFLECT_ASSETREGISTRY(OnInMemoryAssetCreated)\
OP_REFLECT_ASSETREGISTRY(OnInMemoryAssetDeleted)\
OP_REFLECT_ASSETREGISTRY(OnFilesLoaded)\
OP_REFLECT_ASSETREGISTRY(OnFileLoadProgressUpdated)

#if WITH_EDITOR
FJavascriptAssetData::FJavascriptAssetData(const FAssetData& Source)
	: ObjectPath(Source.ObjectPath), PackageName(Source.PackageName), PackagePath(Source.PackagePath), GroupNames(Source.GroupNames), AssetName(Source.AssetName), AssetClass(Source.AssetClass), ChunkIDs(Source.ChunkIDs), PackageFlags((int32)Source.PackageFlags), SourceAssetData(Source)
{
}
#endif

void UJavascriptEditorGlobalDelegates::Bind(FString Key)
{
	FDelegateHandle Handle;

#if WITH_EDITOR
	auto& AssetRegistry = FModuleManager::LoadModuleChecked<FAssetRegistryModule>(TEXT("AssetRegistry")).Get();
#define OP_REFLECT(x) else if (Key == #x) { Handle = FEditorDelegates::x.AddUObject(this, &UJavascriptEditorGlobalDelegates::x); }
#define OP_REFLECT_ASSETREGISTRY(x) else if (Key == #x) { Handle = AssetRegistry.x().AddUObject(this, &UJavascriptEditorGlobalDelegates::x); }
	if (false) {}
	DO_REFLECT()
	DO_REFLECT_ASSETREGISTRY()
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
	auto& AssetRegistry = FModuleManager::LoadModuleChecked<FAssetRegistryModule>(TEXT("AssetRegistry")).Get();
#define OP_REFLECT(x) else if (Key == #x) { FEditorDelegates::x.Remove(Handle); }
#define OP_REFLECT_ASSETREGISTRY(x) else if (Key == #x) { AssetRegistry.x().Remove(Handle); }
	if (false) {}
	DO_REFLECT()	
	DO_REFLECT_ASSETREGISTRY()
#endif

	Handles.Remove(Key);
}