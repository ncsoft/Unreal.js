/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
/// <reference path="_part_2_ue.d.ts">/>
/// <reference path="_part_3_ue.d.ts">/>
/// <reference path="_part_4_ue.d.ts">/>
declare class FractureToolAutoUV extends FractureModalTool { 
	AutoUVSettings: FractureAutoUVSettings;
	static Load(ResourceName: string): FractureToolAutoUV;
	static Find(Outer: UObject, ResourceName: string): FractureToolAutoUV;
	static GetDefaultObject(): FractureToolAutoUV;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolAutoUV;
	static C(Other: UObject | any): FractureToolAutoUV;
}

declare type EInspectedAttributeEnum = 'Volume' | 'Level' | 'InitialDynamicState' | 'Size' | 'EInspectedAttributeEnum_MAX';
declare var EInspectedAttributeEnum : { Volume:'Volume',Level:'Level',InitialDynamicState:'InitialDynamicState',Size:'Size',EInspectedAttributeEnum_MAX:'EInspectedAttributeEnum_MAX', };
declare class HistogramSettings extends UObject { 
	InspectedAttribute: EInspectedAttributeEnum;
	bSorted: boolean;
	bShowClusters: boolean;
	bShowRigids: boolean;
	bShowEmbedded: boolean;
	static Load(ResourceName: string): HistogramSettings;
	static Find(Outer: UObject, ResourceName: string): HistogramSettings;
	static GetDefaultObject(): HistogramSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HistogramSettings;
	static C(Other: UObject | any): HistogramSettings;
}

declare type EOutlinerItemNameEnum = 'BoneName' | 'BoneIndex' | 'EOutlinerItemNameEnum_MAX';
declare var EOutlinerItemNameEnum : { BoneName:'BoneName',BoneIndex:'BoneIndex',EOutlinerItemNameEnum_MAX:'EOutlinerItemNameEnum_MAX', };
declare type EOutlinerColumnMode = 'StateAndSize' | 'Damage' | 'Removal' | 'Collision' | 'EOutlinerColumnMode_MAX';
declare var EOutlinerColumnMode : { StateAndSize:'StateAndSize',Damage:'Damage',Removal:'Removal',Collision:'Collision',EOutlinerColumnMode_MAX:'EOutlinerColumnMode_MAX', };
declare class OutlinerSettings extends UObject { 
	ItemText: EOutlinerItemNameEnum;
	ColorByLevel: boolean;
	ColumnMode: EOutlinerColumnMode;
	static Load(ResourceName: string): OutlinerSettings;
	static Find(Outer: UObject, ResourceName: string): OutlinerSettings;
	static GetDefaultObject(): OutlinerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OutlinerSettings;
	static C(Other: UObject | any): OutlinerSettings;
}

declare type EDataSourceTypeEnum = 'ChaosNiagara_DataSourceType_Collision' | 'ChaosNiagara_DataSourceType_Breaking' | 'ChaosNiagara_DataSourceType_Trailing' | 'ChaosNiagara_Max';
declare var EDataSourceTypeEnum : { ChaosNiagara_DataSourceType_Collision:'ChaosNiagara_DataSourceType_Collision',ChaosNiagara_DataSourceType_Breaking:'ChaosNiagara_DataSourceType_Breaking',ChaosNiagara_DataSourceType_Trailing:'ChaosNiagara_DataSourceType_Trailing',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationFilteringModeEnum = 'ChaosNiagara_LocationFilteringMode_Inclusive' | 'ChaosNiagara_LocationFilteringMode_Exclusive' | 'ChaosNiagara_Max';
declare var ELocationFilteringModeEnum : { ChaosNiagara_LocationFilteringMode_Inclusive:'ChaosNiagara_LocationFilteringMode_Inclusive',ChaosNiagara_LocationFilteringMode_Exclusive:'ChaosNiagara_LocationFilteringMode_Exclusive',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationXToSpawnEnum = 'ChaosNiagara_LocationXToSpawn_None' | 'ChaosNiagara_LocationXToSpawn_Min' | 'ChaosNiagara_LocationXToSpawn_Max' | 'ChaosNiagara_LocationXToSpawn_MinMax' | 'ChaosNiagara_Max';
declare var ELocationXToSpawnEnum : { ChaosNiagara_LocationXToSpawn_None:'ChaosNiagara_LocationXToSpawn_None',ChaosNiagara_LocationXToSpawn_Min:'ChaosNiagara_LocationXToSpawn_Min',ChaosNiagara_LocationXToSpawn_Max:'ChaosNiagara_LocationXToSpawn_Max',ChaosNiagara_LocationXToSpawn_MinMax:'ChaosNiagara_LocationXToSpawn_MinMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationYToSpawnEnum = 'ChaosNiagara_LocationYToSpawn_None' | 'ChaosNiagara_LocationYToSpawn_Min' | 'ChaosNiagara_LocationYToSpawn_Max' | 'ChaosNiagara_LocationYToSpawn_MinMax' | 'ChaosNiagara_Max';
declare var ELocationYToSpawnEnum : { ChaosNiagara_LocationYToSpawn_None:'ChaosNiagara_LocationYToSpawn_None',ChaosNiagara_LocationYToSpawn_Min:'ChaosNiagara_LocationYToSpawn_Min',ChaosNiagara_LocationYToSpawn_Max:'ChaosNiagara_LocationYToSpawn_Max',ChaosNiagara_LocationYToSpawn_MinMax:'ChaosNiagara_LocationYToSpawn_MinMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationZToSpawnEnum = 'ChaosNiagara_LocationZToSpawn_None' | 'ChaosNiagara_LocationZToSpawn_Min' | 'ChaosNiagara_LocationZToSpawn_Max' | 'ChaosNiagara_LocationZToSpawn_MinMax' | 'ChaosNiagara_Max';
declare var ELocationZToSpawnEnum : { ChaosNiagara_LocationZToSpawn_None:'ChaosNiagara_LocationZToSpawn_None',ChaosNiagara_LocationZToSpawn_Min:'ChaosNiagara_LocationZToSpawn_Min',ChaosNiagara_LocationZToSpawn_Max:'ChaosNiagara_LocationZToSpawn_Max',ChaosNiagara_LocationZToSpawn_MinMax:'ChaosNiagara_LocationZToSpawn_MinMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type EDataSortTypeEnum = 'ChaosNiagara_DataSortType_NoSorting' | 'ChaosNiagara_DataSortType_RandomShuffle' | 'ChaosNiagara_DataSortType_SortByMassMaxToMin' | 'ChaosNiagara_DataSortType_SortByMassMinToMax' | 'ChaosNiagara_Max';
declare var EDataSortTypeEnum : { ChaosNiagara_DataSortType_NoSorting:'ChaosNiagara_DataSortType_NoSorting',ChaosNiagara_DataSortType_RandomShuffle:'ChaosNiagara_DataSortType_RandomShuffle',ChaosNiagara_DataSortType_SortByMassMaxToMin:'ChaosNiagara_DataSortType_SortByMassMaxToMin',ChaosNiagara_DataSortType_SortByMassMinToMax:'ChaosNiagara_DataSortType_SortByMassMinToMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ERandomVelocityGenerationTypeEnum = 'ChaosNiagara_RandomVelocityGenerationType_RandomDistribution' | 'ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers' | 'ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased' | 'ChaosNiagara_Max';
declare var ERandomVelocityGenerationTypeEnum : { ChaosNiagara_RandomVelocityGenerationType_RandomDistribution:'ChaosNiagara_RandomVelocityGenerationType_RandomDistribution',ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers:'ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers',ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased:'ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type EDebugTypeEnum = 'ChaosNiagara_DebugType_NoDebug' | 'ChaosNiagara_DebugType_ColorBySolver' | 'ChaosNiagara_DebugType_ColorByParticleIndex' | 'ChaosNiagara_Max';
declare var EDebugTypeEnum : { ChaosNiagara_DebugType_NoDebug:'ChaosNiagara_DebugType_NoDebug',ChaosNiagara_DebugType_ColorBySolver:'ChaosNiagara_DebugType_ColorBySolver',ChaosNiagara_DebugType_ColorByParticleIndex:'ChaosNiagara_DebugType_ColorByParticleIndex',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare class NiagaraDataInterfaceChaosDestruction extends NiagaraDataInterface { 
	ChaosSolverActorSet: Set<ChaosSolverActor>;
	DataSourceType: EDataSourceTypeEnum;
	DataProcessFrequency: number;
	MaxNumberOfDataEntriesToSpawn: number;
	DoSpawn: boolean;
	SpawnMultiplierMinMax: Vector2D;
	SpawnChance: number;
	ImpulseToSpawnMinMax: Vector2D;
	SpeedToSpawnMinMax: Vector2D;
	MassToSpawnMinMax: Vector2D;
	ExtentMinToSpawnMinMax: Vector2D;
	ExtentMaxToSpawnMinMax: Vector2D;
	VolumeToSpawnMinMax: Vector2D;
	SolverTimeToSpawnMinMax: Vector2D;
	SurfaceTypeToSpawn: number;
	LocationFilteringMode: ELocationFilteringModeEnum;
	LocationXToSpawn: ELocationXToSpawnEnum;
	LocationXToSpawnMinMax: Vector2D;
	LocationYToSpawn: ELocationYToSpawnEnum;
	LocationYToSpawnMinMax: Vector2D;
	LocationZToSpawn: ELocationZToSpawnEnum;
	LocationZToSpawnMinMax: Vector2D;
	TrailMinSpeedToSpawn: number;
	DataSortingType: EDataSortTypeEnum;
	bGetExternalCollisionData: boolean;
	DoSpatialHash: boolean;
	SpatialHashVolumeMin: Vector;
	SpatialHashVolumeMax: Vector;
	SpatialHashVolumeCellSize: Vector;
	MaxDataPerCell: number;
	bApplyMaterialsFilter: boolean;
	ChaosBreakingMaterialSet: Set<PhysicalMaterial>;
	bGetExternalBreakingData: boolean;
	bGetExternalTrailingData: boolean;
	RandomPositionMagnitudeMinMax: Vector2D;
	InheritedVelocityMultiplier: number;
	RandomVelocityGenerationType: ERandomVelocityGenerationTypeEnum;
	RandomVelocityMagnitudeMinMax: Vector2D;
	SpreadAngleMax: number;
	VelocityOffsetMin: Vector;
	VelocityOffsetMax: Vector;
	FinalVelocityMagnitudeMinMax: Vector2D;
	MaxLatency: number;
	DebugType: EDebugTypeEnum;
	LastSpawnedPointID: number;
	LastSpawnTime: number;
	SolverTime: number;
	TimeStampOfLastProcessedData: number;
	static Load(ResourceName: string): NiagaraDataInterfaceChaosDestruction;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceChaosDestruction;
	static GetDefaultObject(): NiagaraDataInterfaceChaosDestruction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceChaosDestruction;
	static C(Other: UObject | any): NiagaraDataInterfaceChaosDestruction;
}

declare class NiagaraDataInterfaceGeometryCollection extends NiagaraDataInterface { 
	GeometryCollectionActor: GeometryCollectionActor;
	static Load(ResourceName: string): NiagaraDataInterfaceGeometryCollection;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceGeometryCollection;
	static GetDefaultObject(): NiagaraDataInterfaceGeometryCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceGeometryCollection;
	static C(Other: UObject | any): NiagaraDataInterfaceGeometryCollection;
}

declare class NiagaraDataInterfacePhysicsField extends NiagaraDataInterface { 
	static Load(ResourceName: string): NiagaraDataInterfacePhysicsField;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfacePhysicsField;
	static GetDefaultObject(): NiagaraDataInterfacePhysicsField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfacePhysicsField;
	static C(Other: UObject | any): NiagaraDataInterfacePhysicsField;
}

declare class ActorFactoryChaosSolver extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryChaosSolver;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryChaosSolver;
	static GetDefaultObject(): ActorFactoryChaosSolver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryChaosSolver;
	static C(Other: UObject | any): ActorFactoryChaosSolver;
}

declare class ChaosSolverFactory extends Factory { 
	static Load(ResourceName: string): ChaosSolverFactory;
	static Find(Outer: UObject, ResourceName: string): ChaosSolverFactory;
	static GetDefaultObject(): ChaosSolverFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosSolverFactory;
	static C(Other: UObject | any): ChaosSolverFactory;
}

declare class DataflowSettings extends DeveloperSettings { 
	ArrayPinTypeColor: LinearColor;
	ManagedArrayCollectionPinTypeColor: LinearColor;
	BoxPinTypeColor: LinearColor;
	GeometryCollectionCategoryNodeTitleColor: LinearColor;
	GeometryCollectionCategoryNodeBodyTintColor: LinearColor;
	static Load(ResourceName: string): DataflowSettings;
	static Find(Outer: UObject, ResourceName: string): DataflowSettings;
	static GetDefaultObject(): DataflowSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DataflowSettings;
	static C(Other: UObject | any): DataflowSettings;
}

declare class DataflowAssetFactory extends Factory { 
	static Load(ResourceName: string): DataflowAssetFactory;
	static Find(Outer: UObject, ResourceName: string): DataflowAssetFactory;
	static GetDefaultObject(): DataflowAssetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DataflowAssetFactory;
	static C(Other: UObject | any): DataflowAssetFactory;
}

declare class DataflowSchema extends EdGraphSchema { 
	static Load(ResourceName: string): DataflowSchema;
	static Find(Outer: UObject, ResourceName: string): DataflowSchema;
	static GetDefaultObject(): DataflowSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DataflowSchema;
	static C(Other: UObject | any): DataflowSchema;
}

declare class ActorFactoryGeometryCollection extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryGeometryCollection;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCollection;
	static GetDefaultObject(): ActorFactoryGeometryCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCollection;
	static C(Other: UObject | any): ActorFactoryGeometryCollection;
}

declare class GeometryCollectionCacheFactory extends Factory { 
	TargetCollection: GeometryCollection;
	static Load(ResourceName: string): GeometryCollectionCacheFactory;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionCacheFactory;
	static GetDefaultObject(): GeometryCollectionCacheFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionCacheFactory;
	static C(Other: UObject | any): GeometryCollectionCacheFactory;
}

declare class GeometryCollectionFactory extends Factory { 
	static Load(ResourceName: string): GeometryCollectionFactory;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionFactory;
	static GetDefaultObject(): GeometryCollectionFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionFactory;
	static C(Other: UObject | any): GeometryCollectionFactory;
}

declare class GeometryCollectionThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): GeometryCollectionThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionThumbnailRenderer;
	static GetDefaultObject(): GeometryCollectionThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionThumbnailRenderer;
	static C(Other: UObject | any): GeometryCollectionThumbnailRenderer;
}

declare class MovieSceneGeometryCollectionParams { 
	GeometryCollectionCache: SoftObjectPath;
	StartFrameOffset: FrameNumber;
	EndFrameOffset: FrameNumber;
	PlayRate: number;
	clone() : MovieSceneGeometryCollectionParams;
	static C(Other: UObject | any): MovieSceneGeometryCollectionParams;
}

declare class MovieSceneGeometryCollectionSection extends MovieSceneSection { 
	Params: MovieSceneGeometryCollectionParams;
	static Load(ResourceName: string): MovieSceneGeometryCollectionSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCollectionSection;
	static GetDefaultObject(): MovieSceneGeometryCollectionSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCollectionSection;
	static C(Other: UObject | any): MovieSceneGeometryCollectionSection;
}

declare class MovieSceneGeometryCollectionTrack extends MovieSceneNameableTrack { 
	AnimationSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneGeometryCollectionTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCollectionTrack;
	static GetDefaultObject(): MovieSceneGeometryCollectionTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCollectionTrack;
	static C(Other: UObject | any): MovieSceneGeometryCollectionTrack;
}

declare type ERecomputeUVsPropertiesIslandMode = 'PolyGroups' | 'ExistingUVs' | 'ERecomputeUVsPropertiesIslandMode_MAX';
declare var ERecomputeUVsPropertiesIslandMode : { PolyGroups:'PolyGroups',ExistingUVs:'ExistingUVs',ERecomputeUVsPropertiesIslandMode_MAX:'ERecomputeUVsPropertiesIslandMode_MAX', };
declare type ERecomputeUVsPropertiesUnwrapType = 'ExpMap' | 'Conformal' | 'SpectralConformal' | 'IslandMerging' | 'ERecomputeUVsPropertiesUnwrapType_MAX';
declare var ERecomputeUVsPropertiesUnwrapType : { ExpMap:'ExpMap',Conformal:'Conformal',SpectralConformal:'SpectralConformal',IslandMerging:'IslandMerging',ERecomputeUVsPropertiesUnwrapType_MAX:'ERecomputeUVsPropertiesUnwrapType_MAX', };
declare type ERecomputeUVsToolOrientationMode = 'None' | 'MinBounds' | 'ERecomputeUVsToolOrientationMode_MAX';
declare var ERecomputeUVsToolOrientationMode : { None:'None',MinBounds:'MinBounds',ERecomputeUVsToolOrientationMode_MAX:'ERecomputeUVsToolOrientationMode_MAX', };
declare type ERecomputeUVsPropertiesLayoutType = 'None' | 'Repack' | 'NormalizeToBounds' | 'NormalizeToWorld' | 'ERecomputeUVsPropertiesLayoutType_MAX';
declare var ERecomputeUVsPropertiesLayoutType : { None:'None',Repack:'Repack',NormalizeToBounds:'NormalizeToBounds',NormalizeToWorld:'NormalizeToWorld',ERecomputeUVsPropertiesLayoutType_MAX:'ERecomputeUVsPropertiesLayoutType_MAX', };
declare class RecomputeUVsToolProperties extends InteractiveToolPropertySet { 
	bEnablePolygroupSupport: boolean;
	IslandGeneration: ERecomputeUVsPropertiesIslandMode;
	UnwrapType: ERecomputeUVsPropertiesUnwrapType;
	AutoRotation: ERecomputeUVsToolOrientationMode;
	bPreserveIrregularity: boolean;
	SmoothingSteps: number;
	SmoothingAlpha: number;
	MergingDistortionThreshold: number;
	MergingAngleThreshold: number;
	LayoutType: ERecomputeUVsPropertiesLayoutType;
	TextureResolution: number;
	NormalizeScale: number;
	static Load(ResourceName: string): RecomputeUVsToolProperties;
	static Find(Outer: UObject, ResourceName: string): RecomputeUVsToolProperties;
	static GetDefaultObject(): RecomputeUVsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RecomputeUVsToolProperties;
	static C(Other: UObject | any): RecomputeUVsToolProperties;
}

declare type EUVLayoutType = 'Transform' | 'Stack' | 'Repack' | 'EUVLayoutType_MAX';
declare var EUVLayoutType : { Transform:'Transform',Stack:'Stack',Repack:'Repack',EUVLayoutType_MAX:'EUVLayoutType_MAX', };
declare class UVLayoutProperties extends InteractiveToolPropertySet { 
	LayoutType: EUVLayoutType;
	TextureResolution: number;
	Scale: number;
	Translation: Vector2D;
	bAllowFlips: boolean;
	static Load(ResourceName: string): UVLayoutProperties;
	static Find(Outer: UObject, ResourceName: string): UVLayoutProperties;
	static GetDefaultObject(): UVLayoutProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVLayoutProperties;
	static C(Other: UObject | any): UVLayoutProperties;
}

declare class RecomputeUVsOpFactory extends UObject { 
	Settings: RecomputeUVsToolProperties;
	static Load(ResourceName: string): RecomputeUVsOpFactory;
	static Find(Outer: UObject, ResourceName: string): RecomputeUVsOpFactory;
	static GetDefaultObject(): RecomputeUVsOpFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RecomputeUVsOpFactory;
	static C(Other: UObject | any): RecomputeUVsOpFactory;
}

declare class UVLayoutOperatorFactory extends UObject { 
	Settings: UVLayoutProperties;
	static Load(ResourceName: string): UVLayoutOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): UVLayoutOperatorFactory;
	static GetDefaultObject(): UVLayoutOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVLayoutOperatorFactory;
	static C(Other: UObject | any): UVLayoutOperatorFactory;
}

declare class DeleteGeometrySelectionCommand extends GeometrySelectionEditCommand { 
	static Load(ResourceName: string): DeleteGeometrySelectionCommand;
	static Find(Outer: UObject, ResourceName: string): DeleteGeometrySelectionCommand;
	static GetDefaultObject(): DeleteGeometrySelectionCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeleteGeometrySelectionCommand;
	static C(Other: UObject | any): DeleteGeometrySelectionCommand;
}

declare type ELocalFrameMode = 'FromObject' | 'FromGeometry' | 'ELocalFrameMode_MAX';
declare var ELocalFrameMode : { FromObject:'FromObject',FromGeometry:'FromGeometry',ELocalFrameMode_MAX:'ELocalFrameMode_MAX', };
declare class PolyEditCommonProperties extends InteractiveToolPropertySet { 
	bShowWireframe: boolean;
	bShowSelectableCorners: boolean;
	bGizmoVisible: boolean;
	LocalFrameMode: ELocalFrameMode;
	bLockRotation: boolean;
	bLocalCoordSystem: boolean;
	static Load(ResourceName: string): PolyEditCommonProperties;
	static Find(Outer: UObject, ResourceName: string): PolyEditCommonProperties;
	static GetDefaultObject(): PolyEditCommonProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditCommonProperties;
	static C(Other: UObject | any): PolyEditCommonProperties;
}

declare class PolyEditActivityContext extends UObject { 
	CommonProperties: PolyEditCommonProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	SelectionMechanic: PolygonSelectionMechanic;
	static Load(ResourceName: string): PolyEditActivityContext;
	static Find(Outer: UObject, ResourceName: string): PolyEditActivityContext;
	static GetDefaultObject(): PolyEditActivityContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditActivityContext;
	static C(Other: UObject | any): PolyEditActivityContext;
}

declare class AddPrimitiveToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): AddPrimitiveToolBuilder;
	static Find(Outer: UObject, ResourceName: string): AddPrimitiveToolBuilder;
	static GetDefaultObject(): AddPrimitiveToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddPrimitiveToolBuilder;
	static C(Other: UObject | any): AddPrimitiveToolBuilder;
}

declare type EMakeMeshPolygroupMode = 'PerShape' | 'PerFace' | 'PerQuad' | 'EMakeMeshPolygroupMode_MAX';
declare var EMakeMeshPolygroupMode : { PerShape:'PerShape',PerFace:'PerFace',PerQuad:'PerQuad',EMakeMeshPolygroupMode_MAX:'EMakeMeshPolygroupMode_MAX', };
declare type EMakeMeshPlacementType = 'GroundPlane' | 'OnScene' | 'EMakeMeshPlacementType_MAX';
declare var EMakeMeshPlacementType : { GroundPlane:'GroundPlane',OnScene:'OnScene',EMakeMeshPlacementType_MAX:'EMakeMeshPlacementType_MAX', };
declare type EMakeMeshPivotLocation = 'Base' | 'Centered' | 'Top' | 'EMakeMeshPivotLocation_MAX';
declare var EMakeMeshPivotLocation : { Base:'Base',Centered:'Centered',Top:'Top',EMakeMeshPivotLocation_MAX:'EMakeMeshPivotLocation_MAX', };
declare class ProceduralShapeToolProperties extends InteractiveToolPropertySet { 
	PolygroupMode: EMakeMeshPolygroupMode;
	TargetSurface: EMakeMeshPlacementType;
	PivotLocation: EMakeMeshPivotLocation;
	Rotation: number;
	bAlignToNormal: boolean;
	bShowGizmo: boolean;
	bShowGizmoOptions: boolean;
	static Load(ResourceName: string): ProceduralShapeToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProceduralShapeToolProperties;
	static GetDefaultObject(): ProceduralShapeToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralShapeToolProperties;
	static C(Other: UObject | any): ProceduralShapeToolProperties;
}

declare class ProceduralBoxToolProperties extends ProceduralShapeToolProperties { 
	Width: number;
	Depth: number;
	Height: number;
	WidthSubdivisions: number;
	DepthSubdivisions: number;
	HeightSubdivisions: number;
	static Load(ResourceName: string): ProceduralBoxToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProceduralBoxToolProperties;
	static GetDefaultObject(): ProceduralBoxToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralBoxToolProperties;
	static C(Other: UObject | any): ProceduralBoxToolProperties;
}

declare type EProceduralRectType = 'Rectangle' | 'RoundedRectangle' | 'EProceduralRectType_MAX';
declare var EProceduralRectType : { Rectangle:'Rectangle',RoundedRectangle:'RoundedRectangle',EProceduralRectType_MAX:'EProceduralRectType_MAX', };
declare class ProceduralRectangleToolProperties extends ProceduralShapeToolProperties { 
	RectangleType: EProceduralRectType;
	Width: number;
	Depth: number;
	WidthSubdivisions: number;
	DepthSubdivisions: number;
	CornerRadius: number;
	CornerSlices: number;
	static Load(ResourceName: string): ProceduralRectangleToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProceduralRectangleToolProperties;
	static GetDefaultObject(): ProceduralRectangleToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralRectangleToolProperties;
	static C(Other: UObject | any): ProceduralRectangleToolProperties;
}

declare type EProceduralDiscType = 'Disc' | 'PuncturedDisc' | 'EProceduralDiscType_MAX';
declare var EProceduralDiscType : { Disc:'Disc',PuncturedDisc:'PuncturedDisc',EProceduralDiscType_MAX:'EProceduralDiscType_MAX', };
declare class ProceduralDiscToolProperties extends ProceduralShapeToolProperties { 
	DiscType: EProceduralDiscType;
	Radius: number;
	RadialSlices: number;
	RadialSubdivisions: number;
	HoleRadius: number;
	static Load(ResourceName: string): ProceduralDiscToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProceduralDiscToolProperties;
	static GetDefaultObject(): ProceduralDiscToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralDiscToolProperties;
	static C(Other: UObject | any): ProceduralDiscToolProperties;
}

declare class ProceduralTorusToolProperties extends ProceduralShapeToolProperties { 
	MajorRadius: number;
	MinorRadius: number;
	MajorSlices: number;
	MinorSlices: number;
	static Load(ResourceName: string): ProceduralTorusToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProceduralTorusToolProperties;
	static GetDefaultObject(): ProceduralTorusToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralTorusToolProperties;
	static C(Other: UObject | any): ProceduralTorusToolProperties;
}

declare class ProceduralCylinderToolProperties extends ProceduralShapeToolProperties { 
	Radius: number;
	Height: number;
	RadialSlices: number;
	HeightSubdivisions: number;
	static Load(ResourceName: string): ProceduralCylinderToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProceduralCylinderToolProperties;
	static GetDefaultObject(): ProceduralCylinderToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralCylinderToolProperties;
	static C(Other: UObject | any): ProceduralCylinderToolProperties;
}

declare class ProceduralConeToolProperties extends ProceduralShapeToolProperties { 
	Radius: number;
	Height: number;
	RadialSlices: number;
	HeightSubdivisions: number;
	static Load(ResourceName: string): ProceduralConeToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProceduralConeToolProperties;
	static GetDefaultObject(): ProceduralConeToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralConeToolProperties;
	static C(Other: UObject | any): ProceduralConeToolProperties;
}

declare class ProceduralArrowToolProperties extends ProceduralShapeToolProperties { 
	ShaftRadius: number;
	ShaftHeight: number;
	HeadRadius: number;
	HeadHeight: number;
	RadialSlices: number;
	HeightSubdivisions: number;
	static Load(ResourceName: string): ProceduralArrowToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProceduralArrowToolProperties;
	static GetDefaultObject(): ProceduralArrowToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralArrowToolProperties;
	static C(Other: UObject | any): ProceduralArrowToolProperties;
}

declare type EProceduralSphereType = 'LatLong' | 'Box' | 'EProceduralSphereType_MAX';
declare var EProceduralSphereType : { LatLong:'LatLong',Box:'Box',EProceduralSphereType_MAX:'EProceduralSphereType_MAX', };
declare class ProceduralSphereToolProperties extends ProceduralShapeToolProperties { 
	Radius: number;
	SubdivisionType: EProceduralSphereType;
	Subdivisions: number;
	HorizontalSlices: number;
	VerticalSlices: number;
	static Load(ResourceName: string): ProceduralSphereToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProceduralSphereToolProperties;
	static GetDefaultObject(): ProceduralSphereToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralSphereToolProperties;
	static C(Other: UObject | any): ProceduralSphereToolProperties;
}

declare type EProceduralStairsType = 'Linear' | 'Floating' | 'Curved' | 'Spiral' | 'EProceduralStairsType_MAX';
declare var EProceduralStairsType : { Linear:'Linear',Floating:'Floating',Curved:'Curved',Spiral:'Spiral',EProceduralStairsType_MAX:'EProceduralStairsType_MAX', };
declare class ProceduralStairsToolProperties extends ProceduralShapeToolProperties { 
	StairsType: EProceduralStairsType;
	NumSteps: number;
	StepWidth: number;
	StepHeight: number;
	StepDepth: number;
	CurveAngle: number;
	SpiralAngle: number;
	InnerRadius: number;
	static Load(ResourceName: string): ProceduralStairsToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProceduralStairsToolProperties;
	static GetDefaultObject(): ProceduralStairsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralStairsToolProperties;
	static C(Other: UObject | any): ProceduralStairsToolProperties;
}

declare class NewMeshMaterialProperties extends InteractiveToolPropertySet { 
	Material: MaterialInterface;
	UVScale: number;
	bWorldSpaceUVScale: boolean;
	bShowWireframe: boolean;
	bShowExtendedOptions: boolean;
	static Load(ResourceName: string): NewMeshMaterialProperties;
	static Find(Outer: UObject, ResourceName: string): NewMeshMaterialProperties;
	static GetDefaultObject(): NewMeshMaterialProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NewMeshMaterialProperties;
	static C(Other: UObject | any): NewMeshMaterialProperties;
}

declare class AddPrimitiveTool extends SingleClickTool { 
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	ShapeSettings: ProceduralShapeToolProperties;
	MaterialProperties: NewMeshMaterialProperties;
	PreviewMesh: PreviewMesh;
	Gizmo: CombinedTransformGizmo;
	DragAlignmentMechanic: DragAlignmentMechanic;
	AssetName: string;
	static Load(ResourceName: string): AddPrimitiveTool;
	static Find(Outer: UObject, ResourceName: string): AddPrimitiveTool;
	static GetDefaultObject(): AddPrimitiveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddPrimitiveTool;
	static C(Other: UObject | any): AddPrimitiveTool;
}

declare class AddBoxPrimitiveTool extends AddPrimitiveTool { 
	static Load(ResourceName: string): AddBoxPrimitiveTool;
	static Find(Outer: UObject, ResourceName: string): AddBoxPrimitiveTool;
	static GetDefaultObject(): AddBoxPrimitiveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddBoxPrimitiveTool;
	static C(Other: UObject | any): AddBoxPrimitiveTool;
}

declare class AddCylinderPrimitiveTool extends AddPrimitiveTool { 
	static Load(ResourceName: string): AddCylinderPrimitiveTool;
	static Find(Outer: UObject, ResourceName: string): AddCylinderPrimitiveTool;
	static GetDefaultObject(): AddCylinderPrimitiveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddCylinderPrimitiveTool;
	static C(Other: UObject | any): AddCylinderPrimitiveTool;
}

declare class AddConePrimitiveTool extends AddPrimitiveTool { 
	static Load(ResourceName: string): AddConePrimitiveTool;
	static Find(Outer: UObject, ResourceName: string): AddConePrimitiveTool;
	static GetDefaultObject(): AddConePrimitiveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddConePrimitiveTool;
	static C(Other: UObject | any): AddConePrimitiveTool;
}

declare class AddRectanglePrimitiveTool extends AddPrimitiveTool { 
	static Load(ResourceName: string): AddRectanglePrimitiveTool;
	static Find(Outer: UObject, ResourceName: string): AddRectanglePrimitiveTool;
	static GetDefaultObject(): AddRectanglePrimitiveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddRectanglePrimitiveTool;
	static C(Other: UObject | any): AddRectanglePrimitiveTool;
}

declare class AddDiscPrimitiveTool extends AddPrimitiveTool { 
	static Load(ResourceName: string): AddDiscPrimitiveTool;
	static Find(Outer: UObject, ResourceName: string): AddDiscPrimitiveTool;
	static GetDefaultObject(): AddDiscPrimitiveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddDiscPrimitiveTool;
	static C(Other: UObject | any): AddDiscPrimitiveTool;
}

declare class AddTorusPrimitiveTool extends AddPrimitiveTool { 
	static Load(ResourceName: string): AddTorusPrimitiveTool;
	static Find(Outer: UObject, ResourceName: string): AddTorusPrimitiveTool;
	static GetDefaultObject(): AddTorusPrimitiveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddTorusPrimitiveTool;
	static C(Other: UObject | any): AddTorusPrimitiveTool;
}

declare class AddArrowPrimitiveTool extends AddPrimitiveTool { 
	static Load(ResourceName: string): AddArrowPrimitiveTool;
	static Find(Outer: UObject, ResourceName: string): AddArrowPrimitiveTool;
	static GetDefaultObject(): AddArrowPrimitiveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddArrowPrimitiveTool;
	static C(Other: UObject | any): AddArrowPrimitiveTool;
}

declare class AddSpherePrimitiveTool extends AddPrimitiveTool { 
	static Load(ResourceName: string): AddSpherePrimitiveTool;
	static Find(Outer: UObject, ResourceName: string): AddSpherePrimitiveTool;
	static GetDefaultObject(): AddSpherePrimitiveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddSpherePrimitiveTool;
	static C(Other: UObject | any): AddSpherePrimitiveTool;
}

declare class AddStairsPrimitiveTool extends AddPrimitiveTool { 
	static Load(ResourceName: string): AddStairsPrimitiveTool;
	static Find(Outer: UObject, ResourceName: string): AddStairsPrimitiveTool;
	static GetDefaultObject(): AddStairsPrimitiveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddStairsPrimitiveTool;
	static C(Other: UObject | any): AddStairsPrimitiveTool;
}

declare class CombineMeshesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): CombineMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): CombineMeshesToolBuilder;
	static GetDefaultObject(): CombineMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CombineMeshesToolBuilder;
	static C(Other: UObject | any): CombineMeshesToolBuilder;
}

declare class CombineMeshesToolProperties extends InteractiveToolPropertySet { 
	bIsDuplicateMode: boolean;
	OutputWriteTo: EBaseCreateFromSelectedTargetType;
	OutputNewName: string;
	OutputExistingName: string;
	static Load(ResourceName: string): CombineMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): CombineMeshesToolProperties;
	static GetDefaultObject(): CombineMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CombineMeshesToolProperties;
	static C(Other: UObject | any): CombineMeshesToolProperties;
}

declare class CombineMeshesTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: CombineMeshesToolProperties;
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	HandleSourceProperties: OnAcceptHandleSourcesPropertiesBase;
	static Load(ResourceName: string): CombineMeshesTool;
	static Find(Outer: UObject, ResourceName: string): CombineMeshesTool;
	static GetDefaultObject(): CombineMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CombineMeshesTool;
	static C(Other: UObject | any): CombineMeshesTool;
}

declare type ECSGOperation = 'DifferenceAB' | 'DifferenceBA' | 'Intersect' | 'Union' | 'ECSGOperation_MAX';
declare var ECSGOperation : { DifferenceAB:'DifferenceAB',DifferenceBA:'DifferenceBA',Intersect:'Intersect',Union:'Union',ECSGOperation_MAX:'ECSGOperation_MAX', };
declare class CSGMeshesToolProperties extends InteractiveToolPropertySet { 
	Operation: ECSGOperation;
	bTryFixHoles: boolean;
	bTryCollapseEdges: boolean;
	WindingThreshold: number;
	bShowNewBoundaries: boolean;
	bShowSubtractedMesh: boolean;
	SubtractedMeshOpacity: number;
	SubtractedMeshColor: LinearColor;
	bUseFirstMeshMaterials: boolean;
	static Load(ResourceName: string): CSGMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): CSGMeshesToolProperties;
	static GetDefaultObject(): CSGMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CSGMeshesToolProperties;
	static C(Other: UObject | any): CSGMeshesToolProperties;
}

declare type ETrimOperation = 'TrimA' | 'TrimB' | 'ETrimOperation_MAX';
declare var ETrimOperation : { TrimA:'TrimA',TrimB:'TrimB',ETrimOperation_MAX:'ETrimOperation_MAX', };
declare type ETrimSide = 'RemoveInside' | 'RemoveOutside' | 'ETrimSide_MAX';
declare var ETrimSide : { RemoveInside:'RemoveInside',RemoveOutside:'RemoveOutside',ETrimSide_MAX:'ETrimSide_MAX', };
declare class TrimMeshesToolProperties extends InteractiveToolPropertySet { 
	WhichMesh: ETrimOperation;
	TrimSide: ETrimSide;
	WindingThreshold: number;
	bShowTrimmingMesh: boolean;
	OpacityOfTrimmingMesh: number;
	ColorOfTrimmingMesh: LinearColor;
	static Load(ResourceName: string): TrimMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): TrimMeshesToolProperties;
	static GetDefaultObject(): TrimMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TrimMeshesToolProperties;
	static C(Other: UObject | any): TrimMeshesToolProperties;
}

declare class CSGMeshesTool extends BaseCreateFromSelectedTool { 
	CSGProperties: CSGMeshesToolProperties;
	TrimProperties: TrimMeshesToolProperties;
	OriginalMeshPreviews: PreviewMesh[];
	PreviewsGhostMaterial: MaterialInstanceDynamic;
	DrawnLineSet: LineSetComponent;
	static Load(ResourceName: string): CSGMeshesTool;
	static Find(Outer: UObject, ResourceName: string): CSGMeshesTool;
	static GetDefaultObject(): CSGMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CSGMeshesTool;
	static C(Other: UObject | any): CSGMeshesTool;
}

declare class CSGMeshesToolBuilder extends BaseCreateFromSelectedToolBuilder { 
	static Load(ResourceName: string): CSGMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): CSGMeshesToolBuilder;
	static GetDefaultObject(): CSGMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CSGMeshesToolBuilder;
	static C(Other: UObject | any): CSGMeshesToolBuilder;
}

declare class CutMeshWithMeshToolProperties extends InteractiveToolPropertySet { 
	bTryFixHoles: boolean;
	bTryCollapseEdges: boolean;
	WindingThreshold: number;
	bShowNewBoundaries: boolean;
	bUseFirstMeshMaterials: boolean;
	static Load(ResourceName: string): CutMeshWithMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): CutMeshWithMeshToolProperties;
	static GetDefaultObject(): CutMeshWithMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CutMeshWithMeshToolProperties;
	static C(Other: UObject | any): CutMeshWithMeshToolProperties;
}

declare class CutMeshWithMeshTool extends BaseCreateFromSelectedTool { 
	CutProperties: CutMeshWithMeshToolProperties;
	IntersectPreviewMesh: PreviewMesh;
	DrawnLineSet: LineSetComponent;
	static Load(ResourceName: string): CutMeshWithMeshTool;
	static Find(Outer: UObject, ResourceName: string): CutMeshWithMeshTool;
	static GetDefaultObject(): CutMeshWithMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CutMeshWithMeshTool;
	static C(Other: UObject | any): CutMeshWithMeshTool;
}

declare class CutMeshWithMeshToolBuilder extends BaseCreateFromSelectedToolBuilder { 
	static Load(ResourceName: string): CutMeshWithMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): CutMeshWithMeshToolBuilder;
	static GetDefaultObject(): CutMeshWithMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CutMeshWithMeshToolBuilder;
	static C(Other: UObject | any): CutMeshWithMeshToolBuilder;
}

declare class DrawAndRevolveToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): DrawAndRevolveToolBuilder;
	static Find(Outer: UObject, ResourceName: string): DrawAndRevolveToolBuilder;
	static GetDefaultObject(): DrawAndRevolveToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawAndRevolveToolBuilder;
	static C(Other: UObject | any): DrawAndRevolveToolBuilder;
}

declare type ERevolvePropertiesPolygroupMode = 'PerShape' | 'PerFace' | 'PerRevolveStep' | 'PerPathSegment' | 'ERevolvePropertiesPolygroupMode_MAX';
declare var ERevolvePropertiesPolygroupMode : { PerShape:'PerShape',PerFace:'PerFace',PerRevolveStep:'PerRevolveStep',PerPathSegment:'PerPathSegment',ERevolvePropertiesPolygroupMode_MAX:'ERevolvePropertiesPolygroupMode_MAX', };
declare type ERevolvePropertiesQuadSplit = 'Uniform' | 'Compact' | 'ERevolvePropertiesQuadSplit_MAX';
declare var ERevolvePropertiesQuadSplit : { Uniform:'Uniform',Compact:'Compact',ERevolvePropertiesQuadSplit_MAX:'ERevolvePropertiesQuadSplit_MAX', };
declare class RevolveProperties extends InteractiveToolPropertySet { 
	RevolveDegreesClamped: number;
	RevolveDegrees: number;
	RevolveDegreesOffset: number;
	StepsMaxDegrees: number;
	bExplicitSteps: boolean;
	NumExplicitSteps: number;
	HeightOffsetPerDegree: number;
	bReverseRevolutionDirection: boolean;
	bFlipMesh: boolean;
	bSharpNormals: boolean;
	SharpNormalsDegreeThreshold: number;
	bPathAtMidpointOfStep: boolean;
	PolygroupMode: ERevolvePropertiesPolygroupMode;
	QuadSplitMode: ERevolvePropertiesQuadSplit;
	static Load(ResourceName: string): RevolveProperties;
	static Find(Outer: UObject, ResourceName: string): RevolveProperties;
	static GetDefaultObject(): RevolveProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RevolveProperties;
	static C(Other: UObject | any): RevolveProperties;
}

declare type ERevolvePropertiesCapFillMode = 'None' | 'CenterFan' | 'Delaunay' | 'EarClipping' | 'ERevolvePropertiesCapFillMode_MAX';
declare var ERevolvePropertiesCapFillMode : { None:'None',CenterFan:'CenterFan',Delaunay:'Delaunay',EarClipping:'EarClipping',ERevolvePropertiesCapFillMode_MAX:'ERevolvePropertiesCapFillMode_MAX', };
declare class RevolveToolProperties extends RevolveProperties { 
	CapFillMode: ERevolvePropertiesCapFillMode;
	bClosePathToAxis: boolean;
	DrawPlaneOrigin: Vector;
	DrawPlaneOrientation: Rotator;
	bEnableSnapping: boolean;
	bAllowedToEditDrawPlane: boolean;
	static Load(ResourceName: string): RevolveToolProperties;
	static Find(Outer: UObject, ResourceName: string): RevolveToolProperties;
	static GetDefaultObject(): RevolveToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RevolveToolProperties;
	static C(Other: UObject | any): RevolveToolProperties;
}

declare class DrawAndRevolveTool extends InteractiveTool { 
	ControlPointsMechanic: CurveControlPointsMechanic;
	PlaneMechanic: ConstructionPlaneMechanic;
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	Settings: RevolveToolProperties;
	MaterialProperties: NewMeshMaterialProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): DrawAndRevolveTool;
	static Find(Outer: UObject, ResourceName: string): DrawAndRevolveTool;
	static GetDefaultObject(): DrawAndRevolveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawAndRevolveTool;
	static C(Other: UObject | any): DrawAndRevolveTool;
}

declare class RevolveOperatorFactory extends UObject { 
	RevolveTool: DrawAndRevolveTool;
	static Load(ResourceName: string): RevolveOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): RevolveOperatorFactory;
	static GetDefaultObject(): RevolveOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RevolveOperatorFactory;
	static C(Other: UObject | any): RevolveOperatorFactory;
}

declare class DrawPolygonToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): DrawPolygonToolBuilder;
	static Find(Outer: UObject, ResourceName: string): DrawPolygonToolBuilder;
	static GetDefaultObject(): DrawPolygonToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolygonToolBuilder;
	static C(Other: UObject | any): DrawPolygonToolBuilder;
}

declare type EDrawPolygonDrawMode = 'Freehand' | 'Circle' | 'Square' | 'Rectangle' | 'RoundedRectangle' | 'Ring' | 'EDrawPolygonDrawMode_MAX';
declare var EDrawPolygonDrawMode : { Freehand:'Freehand',Circle:'Circle',Square:'Square',Rectangle:'Rectangle',RoundedRectangle:'RoundedRectangle',Ring:'Ring',EDrawPolygonDrawMode_MAX:'EDrawPolygonDrawMode_MAX', };
declare type EDrawPolygonExtrudeMode = 'Flat' | 'Fixed' | 'Interactive' | 'EDrawPolygonExtrudeMode_MAX';
declare var EDrawPolygonExtrudeMode : { Flat:'Flat',Fixed:'Fixed',Interactive:'Interactive',EDrawPolygonExtrudeMode_MAX:'EDrawPolygonExtrudeMode_MAX', };
declare class DrawPolygonToolStandardProperties extends InteractiveToolPropertySet { 
	PolygonDrawMode: EDrawPolygonDrawMode;
	bAllowSelfIntersections: boolean;
	FeatureSizeRatio: number;
	RadialSlices: number;
	Distance: number;
	bShowGridGizmo: boolean;
	ExtrudeMode: EDrawPolygonExtrudeMode;
	ExtrudeHeight: number;
	static Load(ResourceName: string): DrawPolygonToolStandardProperties;
	static Find(Outer: UObject, ResourceName: string): DrawPolygonToolStandardProperties;
	static GetDefaultObject(): DrawPolygonToolStandardProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolygonToolStandardProperties;
	static C(Other: UObject | any): DrawPolygonToolStandardProperties;
}

declare class DrawPolygonToolSnapProperties extends InteractiveToolPropertySet { 
	bEnableSnapping: boolean;
	bSnapToWorldGrid: boolean;
	bSnapToVertices: boolean;
	bSnapToEdges: boolean;
	bSnapToAxes: boolean;
	bSnapToLengths: boolean;
	bSnapToSurfaces: boolean;
	SnapToSurfacesOffset: number;
	static Load(ResourceName: string): DrawPolygonToolSnapProperties;
	static Find(Outer: UObject, ResourceName: string): DrawPolygonToolSnapProperties;
	static GetDefaultObject(): DrawPolygonToolSnapProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolygonToolSnapProperties;
	static C(Other: UObject | any): DrawPolygonToolSnapProperties;
}

declare class DrawPolygonTool extends InteractiveTool { 
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	PolygonProperties: DrawPolygonToolStandardProperties;
	SnapProperties: DrawPolygonToolSnapProperties;
	MaterialProperties: NewMeshMaterialProperties;
	PreviewMesh: PreviewMesh;
	PlaneTransformGizmo: CombinedTransformGizmo;
	PlaneTransformProxy: TransformProxy;
	HeightMechanic: PlaneDistanceFromHitMechanic;
	DragAlignmentMechanic: DragAlignmentMechanic;
	static Load(ResourceName: string): DrawPolygonTool;
	static Find(Outer: UObject, ResourceName: string): DrawPolygonTool;
	static GetDefaultObject(): DrawPolygonTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolygonTool;
	static C(Other: UObject | any): DrawPolygonTool;
}

declare class EditMeshPolygonsToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): EditMeshPolygonsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsToolBuilder;
	static GetDefaultObject(): EditMeshPolygonsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsToolBuilder;
	static C(Other: UObject | any): EditMeshPolygonsToolBuilder;
}

declare class EditMeshPolygonsActionModeToolBuilder extends EditMeshPolygonsToolBuilder { 
	static Load(ResourceName: string): EditMeshPolygonsActionModeToolBuilder;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsActionModeToolBuilder;
	static GetDefaultObject(): EditMeshPolygonsActionModeToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsActionModeToolBuilder;
	static C(Other: UObject | any): EditMeshPolygonsActionModeToolBuilder;
}

declare class EditMeshPolygonsSelectionModeToolBuilder extends EditMeshPolygonsToolBuilder { 
	static Load(ResourceName: string): EditMeshPolygonsSelectionModeToolBuilder;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsSelectionModeToolBuilder;
	static GetDefaultObject(): EditMeshPolygonsSelectionModeToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsSelectionModeToolBuilder;
	static C(Other: UObject | any): EditMeshPolygonsSelectionModeToolBuilder;
}

declare class EditMeshPolygonsToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): EditMeshPolygonsToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsToolActionPropertySet;
	static GetDefaultObject(): EditMeshPolygonsToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsToolActionPropertySet;
	static C(Other: UObject | any): EditMeshPolygonsToolActionPropertySet;
}

declare class PolyEditTopologyProperties extends EditMeshPolygonsToolActionPropertySet { 
	bAddExtraCorners: boolean;
	ExtraCornerAngleThresholdDegrees: number;
	static Load(ResourceName: string): PolyEditTopologyProperties;
	static Find(Outer: UObject, ResourceName: string): PolyEditTopologyProperties;
	static GetDefaultObject(): PolyEditTopologyProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditTopologyProperties;
	RegenerateExtraCorners(): void;
	static C(Other: UObject | any): PolyEditTopologyProperties;
}

declare class EditMeshPolygonsToolActions extends EditMeshPolygonsToolActionPropertySet { 
	static Load(ResourceName: string): EditMeshPolygonsToolActions;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsToolActions;
	static GetDefaultObject(): EditMeshPolygonsToolActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsToolActions;
	SimplifyByGroups(): void;
	Retriangulate(): void;
	RecalcNormals(): void;
	PushPull(): void;
	Outset(): void;
	Offset(): void;
	Merge(): void;
	Inset(): void;
	InsertEdgeLoop(): void;
	InsertEdge(): void;
	Flip(): void;
	Extrude(): void;
	Duplicate(): void;
	Disconnect(): void;
	Delete(): void;
	Decompose(): void;
	CutFaces(): void;
	Bevel(): void;
	static C(Other: UObject | any): EditMeshPolygonsToolActions;
}

declare class EditMeshPolygonsToolActions_Triangles extends EditMeshPolygonsToolActionPropertySet { 
	static Load(ResourceName: string): EditMeshPolygonsToolActions_Triangles;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsToolActions_Triangles;
	static GetDefaultObject(): EditMeshPolygonsToolActions_Triangles;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsToolActions_Triangles;
	RecalcNormals(): void;
	PushPull(): void;
	Poke(): void;
	Outset(): void;
	Offset(): void;
	Inset(): void;
	Flip(): void;
	Extrude(): void;
	Duplicate(): void;
	Disconnect(): void;
	Delete(): void;
	CutFaces(): void;
	static C(Other: UObject | any): EditMeshPolygonsToolActions_Triangles;
}

declare class EditMeshPolygonsToolUVActions extends EditMeshPolygonsToolActionPropertySet { 
	static Load(ResourceName: string): EditMeshPolygonsToolUVActions;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsToolUVActions;
	static GetDefaultObject(): EditMeshPolygonsToolUVActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsToolUVActions;
	PlanarProjection(): void;
	static C(Other: UObject | any): EditMeshPolygonsToolUVActions;
}

declare class EditMeshPolygonsToolEdgeActions extends EditMeshPolygonsToolActionPropertySet { 
	static Load(ResourceName: string): EditMeshPolygonsToolEdgeActions;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsToolEdgeActions;
	static GetDefaultObject(): EditMeshPolygonsToolEdgeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsToolEdgeActions;
	Weld(): void;
	Straighten(): void;
	FillHole(): void;
	Bridge(): void;
	Bevel(): void;
	static C(Other: UObject | any): EditMeshPolygonsToolEdgeActions;
}

declare class EditMeshPolygonsToolEdgeActions_Triangles extends EditMeshPolygonsToolActionPropertySet { 
	static Load(ResourceName: string): EditMeshPolygonsToolEdgeActions_Triangles;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsToolEdgeActions_Triangles;
	static GetDefaultObject(): EditMeshPolygonsToolEdgeActions_Triangles;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsToolEdgeActions_Triangles;
	Weld(): void;
	Split(): void;
	Flip(): void;
	FillHole(): void;
	Collapse(): void;
	static C(Other: UObject | any): EditMeshPolygonsToolEdgeActions_Triangles;
}

declare class EditMeshPolygonsToolCancelAction extends EditMeshPolygonsToolActionPropertySet { 
	static Load(ResourceName: string): EditMeshPolygonsToolCancelAction;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsToolCancelAction;
	static GetDefaultObject(): EditMeshPolygonsToolCancelAction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsToolCancelAction;
	Done(): void;
	static C(Other: UObject | any): EditMeshPolygonsToolCancelAction;
}

declare class EditMeshPolygonsToolAcceptCancelAction extends EditMeshPolygonsToolActionPropertySet { 
	static Load(ResourceName: string): EditMeshPolygonsToolAcceptCancelAction;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsToolAcceptCancelAction;
	static GetDefaultObject(): EditMeshPolygonsToolAcceptCancelAction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsToolAcceptCancelAction;
	Cancel(): void;
	Apply(): void;
	static C(Other: UObject | any): EditMeshPolygonsToolAcceptCancelAction;
}

declare type EPolyEditExtrudeDistanceMode = 'ClickInViewport' | 'Fixed' | 'EPolyEditExtrudeDistanceMode_MAX';
declare var EPolyEditExtrudeDistanceMode : { ClickInViewport:'ClickInViewport',Fixed:'Fixed',EPolyEditExtrudeDistanceMode_MAX:'EPolyEditExtrudeDistanceMode_MAX', };
declare type EPolyEditExtrudeDirection = 'SelectionNormal' | 'WorldX' | 'WorldY' | 'WorldZ' | 'LocalX' | 'LocalY' | 'LocalZ' | 'EPolyEditExtrudeDirection_MAX';
declare var EPolyEditExtrudeDirection : { SelectionNormal:'SelectionNormal',WorldX:'WorldX',WorldY:'WorldY',WorldZ:'WorldZ',LocalX:'LocalX',LocalY:'LocalY',LocalZ:'LocalZ',EPolyEditExtrudeDirection_MAX:'EPolyEditExtrudeDirection_MAX', };
declare type EPolyEditExtrudeModeOptions = 'SingleDirection' | 'SelectedTriangleNormals' | 'SelectedTriangleNormalsEven' | 'EPolyEditExtrudeModeOptions_MAX';
declare var EPolyEditExtrudeModeOptions : { SingleDirection:'SingleDirection',SelectedTriangleNormals:'SelectedTriangleNormals',SelectedTriangleNormalsEven:'SelectedTriangleNormalsEven',EPolyEditExtrudeModeOptions_MAX:'EPolyEditExtrudeModeOptions_MAX', };
declare class PolyEditExtrudeProperties extends InteractiveToolPropertySet { 
	DistanceMode: EPolyEditExtrudeDistanceMode;
	Distance: number;
	Direction: EPolyEditExtrudeDirection;
	MeasureDirection: EPolyEditExtrudeDirection;
	bShellsToSolids: boolean;
	DirectionMode: EPolyEditExtrudeModeOptions;
	MaxDistanceScaleFactor: number;
	bUseColinearityForSettingBorderGroups: boolean;
	static Load(ResourceName: string): PolyEditExtrudeProperties;
	static Find(Outer: UObject, ResourceName: string): PolyEditExtrudeProperties;
	static GetDefaultObject(): PolyEditExtrudeProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditExtrudeProperties;
	static C(Other: UObject | any): PolyEditExtrudeProperties;
}

declare type EPolyEditOffsetModeOptions = 'VertexNormals' | 'SelectedTriangleNormals' | 'SelectedTriangleNormalsEven' | 'EPolyEditOffsetModeOptions_MAX';
declare var EPolyEditOffsetModeOptions : { VertexNormals:'VertexNormals',SelectedTriangleNormals:'SelectedTriangleNormals',SelectedTriangleNormalsEven:'SelectedTriangleNormalsEven',EPolyEditOffsetModeOptions_MAX:'EPolyEditOffsetModeOptions_MAX', };
declare class PolyEditOffsetProperties extends InteractiveToolPropertySet { 
	DistanceMode: EPolyEditExtrudeDistanceMode;
	Distance: number;
	DirectionMode: EPolyEditOffsetModeOptions;
	MaxDistanceScaleFactor: number;
	bShellsToSolids: boolean;
	MeasureDirection: EPolyEditExtrudeDirection;
	bUseColinearityForSettingBorderGroups: boolean;
	static Load(ResourceName: string): PolyEditOffsetProperties;
	static Find(Outer: UObject, ResourceName: string): PolyEditOffsetProperties;
	static GetDefaultObject(): PolyEditOffsetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditOffsetProperties;
	static C(Other: UObject | any): PolyEditOffsetProperties;
}

declare type EPolyEditPushPullModeOptions = 'SelectedTriangleNormals' | 'SelectedTriangleNormalsEven' | 'SingleDirection' | 'VertexNormals' | 'EPolyEditPushPullModeOptions_MAX';
declare var EPolyEditPushPullModeOptions : { SelectedTriangleNormals:'SelectedTriangleNormals',SelectedTriangleNormalsEven:'SelectedTriangleNormalsEven',SingleDirection:'SingleDirection',VertexNormals:'VertexNormals',EPolyEditPushPullModeOptions_MAX:'EPolyEditPushPullModeOptions_MAX', };
declare class PolyEditPushPullProperties extends InteractiveToolPropertySet { 
	DistanceMode: EPolyEditExtrudeDistanceMode;
	Distance: number;
	DirectionMode: EPolyEditPushPullModeOptions;
	MaxDistanceScaleFactor: number;
	bShellsToSolids: boolean;
	MeasureDirection: EPolyEditExtrudeDirection;
	bUseColinearityForSettingBorderGroups: boolean;
	static Load(ResourceName: string): PolyEditPushPullProperties;
	static Find(Outer: UObject, ResourceName: string): PolyEditPushPullProperties;
	static GetDefaultObject(): PolyEditPushPullProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditPushPullProperties;
	static C(Other: UObject | any): PolyEditPushPullProperties;
}

declare class PolyEditExtrudeActivity extends InteractiveToolActivity { 
	ExtrudeProperties: PolyEditExtrudeProperties;
	OffsetProperties: PolyEditOffsetProperties;
	PushPullProperties: PolyEditPushPullProperties;
	ExtrudeHeightMechanic: PlaneDistanceFromHitMechanic;
	ActivityContext: PolyEditActivityContext;
	static Load(ResourceName: string): PolyEditExtrudeActivity;
	static Find(Outer: UObject, ResourceName: string): PolyEditExtrudeActivity;
	static GetDefaultObject(): PolyEditExtrudeActivity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditExtrudeActivity;
	static C(Other: UObject | any): PolyEditExtrudeActivity;
}

declare class PolyEditInsetOutsetProperties extends InteractiveToolPropertySet { 
	Softness: number;
	bBoundaryOnly: boolean;
	AreaScale: number;
	bReproject: boolean;
	bOutset: boolean;
	static Load(ResourceName: string): PolyEditInsetOutsetProperties;
	static Find(Outer: UObject, ResourceName: string): PolyEditInsetOutsetProperties;
	static GetDefaultObject(): PolyEditInsetOutsetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditInsetOutsetProperties;
	static C(Other: UObject | any): PolyEditInsetOutsetProperties;
}

declare class PolyEditInsetOutsetActivity extends InteractiveToolActivity { 
	Settings: PolyEditInsetOutsetProperties;
	EditPreview: PolyEditPreviewMesh;
	CurveDistMechanic: SpatialCurveDistanceMechanic;
	ActivityContext: PolyEditActivityContext;
	static Load(ResourceName: string): PolyEditInsetOutsetActivity;
	static Find(Outer: UObject, ResourceName: string): PolyEditInsetOutsetActivity;
	static GetDefaultObject(): PolyEditInsetOutsetActivity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditInsetOutsetActivity;
	static C(Other: UObject | any): PolyEditInsetOutsetActivity;
}

declare type EPolyEditCutPlaneOrientation = 'FaceNormals' | 'ViewDirection' | 'EPolyEditCutPlaneOrientation_MAX';
declare var EPolyEditCutPlaneOrientation : { FaceNormals:'FaceNormals',ViewDirection:'ViewDirection',EPolyEditCutPlaneOrientation_MAX:'EPolyEditCutPlaneOrientation_MAX', };
declare class PolyEditCutProperties extends InteractiveToolPropertySet { 
	Orientation: EPolyEditCutPlaneOrientation;
	bSnapToVertices: boolean;
	static Load(ResourceName: string): PolyEditCutProperties;
	static Find(Outer: UObject, ResourceName: string): PolyEditCutProperties;
	static GetDefaultObject(): PolyEditCutProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditCutProperties;
	static C(Other: UObject | any): PolyEditCutProperties;
}

declare class PolyEditCutFacesActivity extends InteractiveToolActivity { 
	CutProperties: PolyEditCutProperties;
	EditPreview: PolyEditPreviewMesh;
	SurfacePathMechanic: CollectSurfacePathMechanic;
	ActivityContext: PolyEditActivityContext;
	static Load(ResourceName: string): PolyEditCutFacesActivity;
	static Find(Outer: UObject, ResourceName: string): PolyEditCutFacesActivity;
	static GetDefaultObject(): PolyEditCutFacesActivity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditCutFacesActivity;
	static C(Other: UObject | any): PolyEditCutFacesActivity;
}

declare class PolyEditSetUVProperties extends InteractiveToolPropertySet { 
	bShowMaterial: boolean;
	static Load(ResourceName: string): PolyEditSetUVProperties;
	static Find(Outer: UObject, ResourceName: string): PolyEditSetUVProperties;
	static GetDefaultObject(): PolyEditSetUVProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditSetUVProperties;
	static C(Other: UObject | any): PolyEditSetUVProperties;
}

declare class PolyEditPlanarProjectionUVActivity extends InteractiveToolActivity { 
	SetUVProperties: PolyEditSetUVProperties;
	EditPreview: PolyEditPreviewMesh;
	SurfacePathMechanic: CollectSurfacePathMechanic;
	ActivityContext: PolyEditActivityContext;
	static Load(ResourceName: string): PolyEditPlanarProjectionUVActivity;
	static Find(Outer: UObject, ResourceName: string): PolyEditPlanarProjectionUVActivity;
	static GetDefaultObject(): PolyEditPlanarProjectionUVActivity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditPlanarProjectionUVActivity;
	static C(Other: UObject | any): PolyEditPlanarProjectionUVActivity;
}

declare type EGroupEdgeInsertionMode = 'Retriangulate' | 'PlaneCut' | 'EGroupEdgeInsertionMode_MAX';
declare var EGroupEdgeInsertionMode : { Retriangulate:'Retriangulate',PlaneCut:'PlaneCut',EGroupEdgeInsertionMode_MAX:'EGroupEdgeInsertionMode_MAX', };
declare class GroupEdgeInsertionProperties extends InteractiveToolPropertySet { 
	InsertionMode: EGroupEdgeInsertionMode;
	VertexTolerance: number;
	static Load(ResourceName: string): GroupEdgeInsertionProperties;
	static Find(Outer: UObject, ResourceName: string): GroupEdgeInsertionProperties;
	static GetDefaultObject(): GroupEdgeInsertionProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroupEdgeInsertionProperties;
	static C(Other: UObject | any): GroupEdgeInsertionProperties;
}

declare class PolyEditInsertEdgeActivity extends InteractiveToolActivity { 
	Settings: GroupEdgeInsertionProperties;
	ActivityContext: PolyEditActivityContext;
	static Load(ResourceName: string): PolyEditInsertEdgeActivity;
	static Find(Outer: UObject, ResourceName: string): PolyEditInsertEdgeActivity;
	static GetDefaultObject(): PolyEditInsertEdgeActivity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditInsertEdgeActivity;
	static C(Other: UObject | any): PolyEditInsertEdgeActivity;
}

declare type EEdgeLoopPositioningMode = 'Even' | 'ProportionOffset' | 'DistanceOffset' | 'EEdgeLoopPositioningMode_MAX';
declare var EEdgeLoopPositioningMode : { Even:'Even',ProportionOffset:'ProportionOffset',DistanceOffset:'DistanceOffset',EEdgeLoopPositioningMode_MAX:'EEdgeLoopPositioningMode_MAX', };
declare type EEdgeLoopInsertionMode = 'Retriangulate' | 'PlaneCut' | 'EEdgeLoopInsertionMode_MAX';
declare var EEdgeLoopInsertionMode : { Retriangulate:'Retriangulate',PlaneCut:'PlaneCut',EEdgeLoopInsertionMode_MAX:'EEdgeLoopInsertionMode_MAX', };
declare class EdgeLoopInsertionProperties extends InteractiveToolPropertySet { 
	PositionMode: EEdgeLoopPositioningMode;
	InsertionMode: EEdgeLoopInsertionMode;
	NumLoops: number;
	ProportionOffset: number;
	DistanceOffset: number;
	bInteractive: boolean;
	bFlipOffsetDirection: boolean;
	bHighlightProblemGroups: boolean;
	VertexTolerance: number;
	static Load(ResourceName: string): EdgeLoopInsertionProperties;
	static Find(Outer: UObject, ResourceName: string): EdgeLoopInsertionProperties;
	static GetDefaultObject(): EdgeLoopInsertionProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdgeLoopInsertionProperties;
	static C(Other: UObject | any): EdgeLoopInsertionProperties;
}

declare class PolyEditInsertEdgeLoopActivity extends InteractiveToolActivity { 
	Settings: EdgeLoopInsertionProperties;
	ActivityContext: PolyEditActivityContext;
	static Load(ResourceName: string): PolyEditInsertEdgeLoopActivity;
	static Find(Outer: UObject, ResourceName: string): PolyEditInsertEdgeLoopActivity;
	static GetDefaultObject(): PolyEditInsertEdgeLoopActivity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditInsertEdgeLoopActivity;
	static C(Other: UObject | any): PolyEditInsertEdgeLoopActivity;
}

declare class PolyEditBevelEdgeProperties extends InteractiveToolPropertySet { 
	BevelDistance: number;
	static Load(ResourceName: string): PolyEditBevelEdgeProperties;
	static Find(Outer: UObject, ResourceName: string): PolyEditBevelEdgeProperties;
	static GetDefaultObject(): PolyEditBevelEdgeProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditBevelEdgeProperties;
	static C(Other: UObject | any): PolyEditBevelEdgeProperties;
}

declare class PolyEditBevelEdgeActivity extends InteractiveToolActivity { 
	BevelProperties: PolyEditBevelEdgeProperties;
	ActivityContext: PolyEditActivityContext;
	static Load(ResourceName: string): PolyEditBevelEdgeActivity;
	static Find(Outer: UObject, ResourceName: string): PolyEditBevelEdgeActivity;
	static GetDefaultObject(): PolyEditBevelEdgeActivity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolyEditBevelEdgeActivity;
	static C(Other: UObject | any): PolyEditBevelEdgeActivity;
}

declare class EditMeshPolygonsTool extends SingleSelectionMeshEditingTool { 
	Preview: MeshOpPreviewWithBackgroundCompute;
	CommonProps: PolyEditCommonProperties;
	EditActions: EditMeshPolygonsToolActions;
	EditActions_Triangles: EditMeshPolygonsToolActions_Triangles;
	EditEdgeActions: EditMeshPolygonsToolEdgeActions;
	EditEdgeActions_Triangles: EditMeshPolygonsToolEdgeActions_Triangles;
	EditUVActions: EditMeshPolygonsToolUVActions;
	CancelAction: EditMeshPolygonsToolCancelAction;
	AcceptCancelAction: EditMeshPolygonsToolAcceptCancelAction;
	TopologyProperties: PolyEditTopologyProperties;
	ExtrudeActivity: PolyEditExtrudeActivity;
	InsetOutsetActivity: PolyEditInsetOutsetActivity;
	CutFacesActivity: PolyEditCutFacesActivity;
	PlanarProjectionUVActivity: PolyEditPlanarProjectionUVActivity;
	InsertEdgeActivity: PolyEditInsertEdgeActivity;
	InsertEdgeLoopActivity: PolyEditInsertEdgeLoopActivity;
	BevelEdgeActivity: PolyEditBevelEdgeActivity;
	ActivityContext: PolyEditActivityContext;
	SelectionMechanic: PolygonSelectionMechanic;
	DragAlignmentMechanic: DragAlignmentMechanic;
	TransformGizmo: CombinedTransformGizmo;
	TransformProxy: TransformProxy;
	static Load(ResourceName: string): EditMeshPolygonsTool;
	static Find(Outer: UObject, ResourceName: string): EditMeshPolygonsTool;
	static GetDefaultObject(): EditMeshPolygonsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshPolygonsTool;
	static C(Other: UObject | any): EditMeshPolygonsTool;
}

declare type ESetMeshMaterialMode = 'Original' | 'Checkerboard' | 'Override' | 'ESetMeshMaterialMode_MAX';
declare var ESetMeshMaterialMode : { Original:'Original',Checkerboard:'Checkerboard',Override:'Override',ESetMeshMaterialMode_MAX:'ESetMeshMaterialMode_MAX', };
declare class ExistingMeshMaterialProperties extends InteractiveToolPropertySet { 
	MaterialMode: ESetMeshMaterialMode;
	CheckerDensity: number;
	OverrideMaterial: MaterialInterface;
	UVChannel: string;
	UVChannelNamesList: string[];
	CheckerMaterial: MaterialInstanceDynamic;
	static Load(ResourceName: string): ExistingMeshMaterialProperties;
	static Find(Outer: UObject, ResourceName: string): ExistingMeshMaterialProperties;
	static GetDefaultObject(): ExistingMeshMaterialProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExistingMeshMaterialProperties;
	GetUVChannelNamesFunc(): string[];
	static C(Other: UObject | any): ExistingMeshMaterialProperties;
}

declare type EMeshEditingMaterialModes = 'ExistingMaterial' | 'Diffuse' | 'Grey' | 'Soft' | 'Transparent' | 'TangentNormal' | 'VertexColor' | 'CustomImage' | 'Custom' | 'EMeshEditingMaterialModes_MAX';
declare var EMeshEditingMaterialModes : { ExistingMaterial:'ExistingMaterial',Diffuse:'Diffuse',Grey:'Grey',Soft:'Soft',Transparent:'Transparent',TangentNormal:'TangentNormal',VertexColor:'VertexColor',CustomImage:'CustomImage',Custom:'Custom',EMeshEditingMaterialModes_MAX:'EMeshEditingMaterialModes_MAX', };
declare class MeshEditingViewProperties extends InteractiveToolPropertySet { 
	bShowWireframe: boolean;
	MaterialMode: EMeshEditingMaterialModes;
	bFlatShading: boolean;
	Color: LinearColor;
	UImage: Texture2D;
	Opacity: number;
	TransparentMaterialColor: LinearColor;
	bTwoSided: boolean;
	CustomMaterial: MaterialInterface;
	static Load(ResourceName: string): MeshEditingViewProperties;
	static Find(Outer: UObject, ResourceName: string): MeshEditingViewProperties;
	static GetDefaultObject(): MeshEditingViewProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditingViewProperties;
	static C(Other: UObject | any): MeshEditingViewProperties;
}

declare class MeshUVChannelProperties extends InteractiveToolPropertySet { 
	UVChannel: string;
	UVChannelNamesList: string[];
	static Load(ResourceName: string): MeshUVChannelProperties;
	static Find(Outer: UObject, ResourceName: string): MeshUVChannelProperties;
	static GetDefaultObject(): MeshUVChannelProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshUVChannelProperties;
	GetUVChannelNamesFunc(): string[];
	static C(Other: UObject | any): MeshUVChannelProperties;
}

declare class RecomputeUVsToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): RecomputeUVsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): RecomputeUVsToolBuilder;
	static GetDefaultObject(): RecomputeUVsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RecomputeUVsToolBuilder;
	static C(Other: UObject | any): RecomputeUVsToolBuilder;
}

declare class RecomputeUVsTool extends SingleSelectionMeshEditingTool { 
	UVChannelProperties: MeshUVChannelProperties;
	Settings: RecomputeUVsToolProperties;
	PolygroupLayerProperties: PolygroupLayersProperties;
	MaterialSettings: ExistingMeshMaterialProperties;
	bCreateUVLayoutViewOnSetup: boolean;
	UVLayoutView: UVLayoutPreview;
	RecomputeUVsOpFactory: RecomputeUVsOpFactory;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): RecomputeUVsTool;
	static Find(Outer: UObject, ResourceName: string): RecomputeUVsTool;
	static GetDefaultObject(): RecomputeUVsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RecomputeUVsTool;
	static C(Other: UObject | any): RecomputeUVsTool;
}

declare class UVLayoutToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): UVLayoutToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVLayoutToolBuilder;
	static GetDefaultObject(): UVLayoutToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVLayoutToolBuilder;
	static C(Other: UObject | any): UVLayoutToolBuilder;
}

declare class UVLayoutTool extends MultiSelectionMeshEditingTool { 
	UVChannelProperties: MeshUVChannelProperties;
	BasicProperties: UVLayoutProperties;
	MaterialSettings: ExistingMeshMaterialProperties;
	Previews: MeshOpPreviewWithBackgroundCompute[];
	Factories: UVLayoutOperatorFactory[];
	UVLayoutView: UVLayoutPreview;
	static Load(ResourceName: string): UVLayoutTool;
	static Find(Outer: UObject, ResourceName: string): UVLayoutTool;
	static GetDefaultObject(): UVLayoutTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVLayoutTool;
	static C(Other: UObject | any): UVLayoutTool;
}

declare class UVProjectionToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): UVProjectionToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVProjectionToolBuilder;
	static GetDefaultObject(): UVProjectionToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVProjectionToolBuilder;
	static C(Other: UObject | any): UVProjectionToolBuilder;
}

declare class UVProjectionToolEditActions extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): UVProjectionToolEditActions;
	static Find(Outer: UObject, ResourceName: string): UVProjectionToolEditActions;
	static GetDefaultObject(): UVProjectionToolEditActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVProjectionToolEditActions;
	Reset(): void;
	AutoFitAlign(): void;
	AutoFit(): void;
	static C(Other: UObject | any): UVProjectionToolEditActions;
}

declare type EUVProjectionMethod = 'Box' | 'Cylinder' | 'Plane' | 'ExpMap' | 'EUVProjectionMethod_MAX';
declare var EUVProjectionMethod : { Box:'Box',Cylinder:'Cylinder',Plane:'Plane',ExpMap:'ExpMap',EUVProjectionMethod_MAX:'EUVProjectionMethod_MAX', };
declare type EUVProjectionToolInitializationMode = 'Default' | 'UsePrevious' | 'AutoFit' | 'AutoFitAlign' | 'EUVProjectionToolInitializationMode_MAX';
declare var EUVProjectionToolInitializationMode : { Default:'Default',UsePrevious:'UsePrevious',AutoFit:'AutoFit',AutoFitAlign:'AutoFitAlign',EUVProjectionToolInitializationMode_MAX:'EUVProjectionToolInitializationMode_MAX', };
declare class UVProjectionToolProperties extends InteractiveToolPropertySet { 
	ProjectionType: EUVProjectionMethod;
	Dimensions: Vector;
	bUniformDimensions: boolean;
	Initialization: EUVProjectionToolInitializationMode;
	CylinderSplitAngle: number;
	ExpMapNormalBlending: number;
	ExpMapSmoothingSteps: number;
	ExpMapSmoothingAlpha: number;
	Rotation: number;
	Scale: Vector2D;
	Translation: Vector2D;
	SavedDimensions: Vector;
	bSavedUniformDimensions: boolean;
	SavedTransform: Transform;
	static Load(ResourceName: string): UVProjectionToolProperties;
	static Find(Outer: UObject, ResourceName: string): UVProjectionToolProperties;
	static GetDefaultObject(): UVProjectionToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVProjectionToolProperties;
	static C(Other: UObject | any): UVProjectionToolProperties;
}

declare class UVProjectionTool extends SingleSelectionMeshEditingTool { 
	UVChannelProperties: MeshUVChannelProperties;
	BasicProperties: UVProjectionToolProperties;
	EditActions: UVProjectionToolEditActions;
	MaterialSettings: ExistingMeshMaterialProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	CheckerMaterial: MaterialInstanceDynamic;
	TransformGizmo: CombinedTransformGizmo;
	TransformProxy: TransformProxy;
	OperatorFactory: UVProjectionOperatorFactory;
	EdgeRenderer: PreviewGeometry;
	ClickToSetPlaneBehavior: SingleClickInputBehavior;
	static Load(ResourceName: string): UVProjectionTool;
	static Find(Outer: UObject, ResourceName: string): UVProjectionTool;
	static GetDefaultObject(): UVProjectionTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVProjectionTool;
	static C(Other: UObject | any): UVProjectionTool;
}

declare class UVProjectionOperatorFactory extends UObject { 
	Tool: UVProjectionTool;
	static Load(ResourceName: string): UVProjectionOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): UVProjectionOperatorFactory;
	static GetDefaultObject(): UVProjectionOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVProjectionOperatorFactory;
	static C(Other: UObject | any): UVProjectionOperatorFactory;
}

declare type EBakeNormalSpace = 'Tangent' | 'Object' | 'EBakeNormalSpace_MAX';
declare var EBakeNormalSpace : { Tangent:'Tangent',Object:'Object',EBakeNormalSpace_MAX:'EBakeNormalSpace_MAX', };
declare class BakeInputMeshProperties extends InteractiveToolPropertySet { 
	TargetStaticMesh: StaticMesh;
	TargetSkeletalMesh: SkeletalMesh;
	TargetDynamicMesh: Actor;
	TargetUVLayer: string;
	bHasTargetUVLayer: boolean;
	SourceStaticMesh: StaticMesh;
	SourceSkeletalMesh: SkeletalMesh;
	SourceDynamicMesh: Actor;
	bHideSourceMesh: boolean;
	SourceNormalMap: Texture2D;
	SourceNormalMapUVLayer: string;
	SourceNormalSpace: EBakeNormalSpace;
	bHasSourceNormalMap: boolean;
	ProjectionDistance: number;
	bProjectionInWorldSpace: boolean;
	TargetUVLayerNamesList: string[];
	SourceUVLayerNamesList: string[];
	static Load(ResourceName: string): BakeInputMeshProperties;
	static Find(Outer: UObject, ResourceName: string): BakeInputMeshProperties;
	static GetDefaultObject(): BakeInputMeshProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeInputMeshProperties;
	GetTargetUVLayerNamesFunc(): string[];
	GetSourceUVLayerNamesFunc(): string[];
	static C(Other: UObject | any): BakeInputMeshProperties;
}

declare class BakeNormalMapToolProperties extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): BakeNormalMapToolProperties;
	static Find(Outer: UObject, ResourceName: string): BakeNormalMapToolProperties;
	static GetDefaultObject(): BakeNormalMapToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeNormalMapToolProperties;
	static C(Other: UObject | any): BakeNormalMapToolProperties;
}

declare class BakeOcclusionMapToolProperties extends InteractiveToolPropertySet { 
	OcclusionRays: number;
	MaxDistance: number;
	SpreadAngle: number;
	BiasAngle: number;
	static Load(ResourceName: string): BakeOcclusionMapToolProperties;
	static Find(Outer: UObject, ResourceName: string): BakeOcclusionMapToolProperties;
	static GetDefaultObject(): BakeOcclusionMapToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeOcclusionMapToolProperties;
	static C(Other: UObject | any): BakeOcclusionMapToolProperties;
}

declare type EBakeCurvatureTypeMode = 'MeanAverage' | 'Max' | 'Min' | 'Gaussian' | 'EBakeCurvatureTypeMode_MAX';
declare var EBakeCurvatureTypeMode : { MeanAverage:'MeanAverage',Max:'Max',Min:'Min',Gaussian:'Gaussian',EBakeCurvatureTypeMode_MAX:'EBakeCurvatureTypeMode_MAX', };
declare type EBakeCurvatureColorMode = 'Grayscale' | 'RedBlue' | 'RedGreenBlue' | 'EBakeCurvatureColorMode_MAX';
declare var EBakeCurvatureColorMode : { Grayscale:'Grayscale',RedBlue:'RedBlue',RedGreenBlue:'RedGreenBlue',EBakeCurvatureColorMode_MAX:'EBakeCurvatureColorMode_MAX', };
declare type EBakeCurvatureClampMode = 'None' | 'OnlyPositive' | 'OnlyNegative' | 'EBakeCurvatureClampMode_MAX';
declare var EBakeCurvatureClampMode : { None:'None',OnlyPositive:'OnlyPositive',OnlyNegative:'OnlyNegative',EBakeCurvatureClampMode_MAX:'EBakeCurvatureClampMode_MAX', };
declare class BakeCurvatureMapToolProperties extends InteractiveToolPropertySet { 
	CurvatureType: EBakeCurvatureTypeMode;
	ColorMapping: EBakeCurvatureColorMode;
	ColorRangeMultiplier: number;
	MinRangeMultiplier: number;
	Clamping: EBakeCurvatureClampMode;
	static Load(ResourceName: string): BakeCurvatureMapToolProperties;
	static Find(Outer: UObject, ResourceName: string): BakeCurvatureMapToolProperties;
	static GetDefaultObject(): BakeCurvatureMapToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeCurvatureMapToolProperties;
	static C(Other: UObject | any): BakeCurvatureMapToolProperties;
}

declare class BakeTexture2DProperties extends InteractiveToolPropertySet { 
	SourceTexture: Texture2D;
	UVLayer: string;
	UVLayerNamesList: string[];
	static Load(ResourceName: string): BakeTexture2DProperties;
	static Find(Outer: UObject, ResourceName: string): BakeTexture2DProperties;
	static GetDefaultObject(): BakeTexture2DProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeTexture2DProperties;
	GetUVLayerNamesFunc(): string[];
	static C(Other: UObject | any): BakeTexture2DProperties;
}

declare class BakeMultiTexture2DProperties extends InteractiveToolPropertySet { 
	MaterialIDSourceTextures: Texture2D[];
	UVLayer: string;
	UVLayerNamesList: string[];
	AllSourceTextures: Texture2D[];
	static Load(ResourceName: string): BakeMultiTexture2DProperties;
	static Find(Outer: UObject, ResourceName: string): BakeMultiTexture2DProperties;
	static GetDefaultObject(): BakeMultiTexture2DProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMultiTexture2DProperties;
	GetUVLayerNamesFunc(): string[];
	static C(Other: UObject | any): BakeMultiTexture2DProperties;
}

declare class BakeVisualizationProperties extends InteractiveToolPropertySet { 
	bPreviewAsMaterial: boolean;
	Brightness: number;
	AOMultiplier: number;
	static Load(ResourceName: string): BakeVisualizationProperties;
	static Find(Outer: UObject, ResourceName: string): BakeVisualizationProperties;
	static GetDefaultObject(): BakeVisualizationProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeVisualizationProperties;
	static C(Other: UObject | any): BakeVisualizationProperties;
}

declare class MeshSculptBrushOpProps extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): MeshSculptBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): MeshSculptBrushOpProps;
	static GetDefaultObject(): MeshSculptBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSculptBrushOpProps;
	static C(Other: UObject | any): MeshSculptBrushOpProps;
}

declare class BaseKelvinletBrushOpProps extends MeshSculptBrushOpProps { 
	Stiffness: number;
	Incompressiblity: number;
	BrushSteps: number;
	static Load(ResourceName: string): BaseKelvinletBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): BaseKelvinletBrushOpProps;
	static GetDefaultObject(): BaseKelvinletBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BaseKelvinletBrushOpProps;
	static C(Other: UObject | any): BaseKelvinletBrushOpProps;
}

declare class ScaleKelvinletBrushOpProps extends BaseKelvinletBrushOpProps { 
	Strength: number;
	Falloff: number;
	static Load(ResourceName: string): ScaleKelvinletBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): ScaleKelvinletBrushOpProps;
	static GetDefaultObject(): ScaleKelvinletBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ScaleKelvinletBrushOpProps;
	static C(Other: UObject | any): ScaleKelvinletBrushOpProps;
}

declare class PullKelvinletBrushOpProps extends BaseKelvinletBrushOpProps { 
	Falloff: number;
	Depth: number;
	static Load(ResourceName: string): PullKelvinletBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): PullKelvinletBrushOpProps;
	static GetDefaultObject(): PullKelvinletBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PullKelvinletBrushOpProps;
	static C(Other: UObject | any): PullKelvinletBrushOpProps;
}

declare class SharpPullKelvinletBrushOpProps extends BaseKelvinletBrushOpProps { 
	Falloff: number;
	Depth: number;
	static Load(ResourceName: string): SharpPullKelvinletBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): SharpPullKelvinletBrushOpProps;
	static GetDefaultObject(): SharpPullKelvinletBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SharpPullKelvinletBrushOpProps;
	static C(Other: UObject | any): SharpPullKelvinletBrushOpProps;
}

declare class TwistKelvinletBrushOpProps extends BaseKelvinletBrushOpProps { 
	Strength: number;
	Falloff: number;
	static Load(ResourceName: string): TwistKelvinletBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): TwistKelvinletBrushOpProps;
	static GetDefaultObject(): TwistKelvinletBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TwistKelvinletBrushOpProps;
	static C(Other: UObject | any): TwistKelvinletBrushOpProps;
}

declare class GroupEraseBrushOpProps extends MeshSculptBrushOpProps { 
	Group: number;
	bOnlyEraseCurrent: boolean;
	static Load(ResourceName: string): GroupEraseBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): GroupEraseBrushOpProps;
	static GetDefaultObject(): GroupEraseBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroupEraseBrushOpProps;
	static C(Other: UObject | any): GroupEraseBrushOpProps;
}

declare class GroupPaintBrushOpProps extends MeshSculptBrushOpProps { 
	Group: number;
	bOnlyPaintUngrouped: boolean;
	static Load(ResourceName: string): GroupPaintBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): GroupPaintBrushOpProps;
	static GetDefaultObject(): GroupPaintBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroupPaintBrushOpProps;
	static C(Other: UObject | any): GroupPaintBrushOpProps;
}

declare class InflateBrushOpProps extends MeshSculptBrushOpProps { 
	Strength: number;
	Falloff: number;
	static Load(ResourceName: string): InflateBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): InflateBrushOpProps;
	static GetDefaultObject(): InflateBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InflateBrushOpProps;
	static C(Other: UObject | any): InflateBrushOpProps;
}

declare class ModelingToolsAxisFilter { 
	bAxisX: boolean;
	bAxisY: boolean;
	bAxisZ: boolean;
	clone() : ModelingToolsAxisFilter;
	static C(Other: UObject | any): ModelingToolsAxisFilter;
}

declare class MoveBrushOpProps extends MeshSculptBrushOpProps { 
	Strength: number;
	Falloff: number;
	Depth: number;
	AxisFilters: ModelingToolsAxisFilter;
	static Load(ResourceName: string): MoveBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): MoveBrushOpProps;
	static GetDefaultObject(): MoveBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MoveBrushOpProps;
	static C(Other: UObject | any): MoveBrushOpProps;
}

declare class PinchBrushOpProps extends MeshSculptBrushOpProps { 
	Strength: number;
	Falloff: number;
	Depth: number;
	bPerpDamping: boolean;
	static Load(ResourceName: string): PinchBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): PinchBrushOpProps;
	static GetDefaultObject(): PinchBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PinchBrushOpProps;
	static C(Other: UObject | any): PinchBrushOpProps;
}

declare class BasePlaneBrushOpProps extends MeshSculptBrushOpProps { 
	static Load(ResourceName: string): BasePlaneBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): BasePlaneBrushOpProps;
	static GetDefaultObject(): BasePlaneBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasePlaneBrushOpProps;
	static C(Other: UObject | any): BasePlaneBrushOpProps;
}

declare type EPlaneBrushSideMode = 'BothSides' | 'PushDown' | 'PullTowards' | 'EPlaneBrushSideMode_MAX';
declare var EPlaneBrushSideMode : { BothSides:'BothSides',PushDown:'PushDown',PullTowards:'PullTowards',EPlaneBrushSideMode_MAX:'EPlaneBrushSideMode_MAX', };
declare class PlaneBrushOpProps extends BasePlaneBrushOpProps { 
	Strength: number;
	Falloff: number;
	Depth: number;
	WhichSide: EPlaneBrushSideMode;
	static Load(ResourceName: string): PlaneBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): PlaneBrushOpProps;
	static GetDefaultObject(): PlaneBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneBrushOpProps;
	static C(Other: UObject | any): PlaneBrushOpProps;
}

declare class ViewAlignedPlaneBrushOpProps extends BasePlaneBrushOpProps { 
	Strength: number;
	Falloff: number;
	Depth: number;
	WhichSide: EPlaneBrushSideMode;
	static Load(ResourceName: string): ViewAlignedPlaneBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): ViewAlignedPlaneBrushOpProps;
	static GetDefaultObject(): ViewAlignedPlaneBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewAlignedPlaneBrushOpProps;
	static C(Other: UObject | any): ViewAlignedPlaneBrushOpProps;
}

declare class FixedPlaneBrushOpProps extends BasePlaneBrushOpProps { 
	Strength: number;
	Falloff: number;
	Depth: number;
	WhichSide: EPlaneBrushSideMode;
	static Load(ResourceName: string): FixedPlaneBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): FixedPlaneBrushOpProps;
	static GetDefaultObject(): FixedPlaneBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FixedPlaneBrushOpProps;
	static C(Other: UObject | any): FixedPlaneBrushOpProps;
}

declare class StandardSculptBrushOpProps extends MeshSculptBrushOpProps { 
	Strength: number;
	Falloff: number;
	static Load(ResourceName: string): StandardSculptBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): StandardSculptBrushOpProps;
	static GetDefaultObject(): StandardSculptBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StandardSculptBrushOpProps;
	static C(Other: UObject | any): StandardSculptBrushOpProps;
}

declare class ViewAlignedSculptBrushOpProps extends MeshSculptBrushOpProps { 
	Strength: number;
	Falloff: number;
	static Load(ResourceName: string): ViewAlignedSculptBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): ViewAlignedSculptBrushOpProps;
	static GetDefaultObject(): ViewAlignedSculptBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewAlignedSculptBrushOpProps;
	static C(Other: UObject | any): ViewAlignedSculptBrushOpProps;
}

declare class SculptMaxBrushOpProps extends MeshSculptBrushOpProps { 
	Strength: number;
	Falloff: number;
	MaxHeight: number;
	bUseFixedHeight: boolean;
	FixedHeight: number;
	static Load(ResourceName: string): SculptMaxBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): SculptMaxBrushOpProps;
	static GetDefaultObject(): SculptMaxBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SculptMaxBrushOpProps;
	static C(Other: UObject | any): SculptMaxBrushOpProps;
}

declare class BaseSmoothBrushOpProps extends MeshSculptBrushOpProps { 
	static Load(ResourceName: string): BaseSmoothBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): BaseSmoothBrushOpProps;
	static GetDefaultObject(): BaseSmoothBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BaseSmoothBrushOpProps;
	static C(Other: UObject | any): BaseSmoothBrushOpProps;
}

declare class SmoothBrushOpProps extends BaseSmoothBrushOpProps { 
	Strength: number;
	Falloff: number;
	bPreserveUVFlow: boolean;
	static Load(ResourceName: string): SmoothBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): SmoothBrushOpProps;
	static GetDefaultObject(): SmoothBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothBrushOpProps;
	static C(Other: UObject | any): SmoothBrushOpProps;
}

declare class SecondarySmoothBrushOpProps extends BaseSmoothBrushOpProps { 
	Strength: number;
	Falloff: number;
	bPreserveUVFlow: boolean;
	static Load(ResourceName: string): SecondarySmoothBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): SecondarySmoothBrushOpProps;
	static GetDefaultObject(): SecondarySmoothBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SecondarySmoothBrushOpProps;
	static C(Other: UObject | any): SecondarySmoothBrushOpProps;
}

declare class SmoothFillBrushOpProps extends BaseSmoothBrushOpProps { 
	Strength: number;
	Falloff: number;
	bPreserveUVFlow: boolean;
	static Load(ResourceName: string): SmoothFillBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): SmoothFillBrushOpProps;
	static GetDefaultObject(): SmoothFillBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothFillBrushOpProps;
	static C(Other: UObject | any): SmoothFillBrushOpProps;
}

declare class FlattenBrushOpProps extends MeshSculptBrushOpProps { 
	Strength: number;
	Falloff: number;
	Depth: number;
	WhichSide: EPlaneBrushSideMode;
	static Load(ResourceName: string): FlattenBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): FlattenBrushOpProps;
	static GetDefaultObject(): FlattenBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlattenBrushOpProps;
	static C(Other: UObject | any): FlattenBrushOpProps;
}

declare class EraseBrushOpProps extends MeshSculptBrushOpProps { 
	Strength: number;
	Falloff: number;
	static Load(ResourceName: string): EraseBrushOpProps;
	static Find(Outer: UObject, ResourceName: string): EraseBrushOpProps;
	static GetDefaultObject(): EraseBrushOpProps;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EraseBrushOpProps;
	static C(Other: UObject | any): EraseBrushOpProps;
}

declare class PatternToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): PatternToolBuilder;
	static Find(Outer: UObject, ResourceName: string): PatternToolBuilder;
	static GetDefaultObject(): PatternToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PatternToolBuilder;
	static C(Other: UObject | any): PatternToolBuilder;
}

declare type EPatternToolShape = 'Line' | 'Grid' | 'Circle' | 'EPatternToolShape_MAX';
declare var EPatternToolShape : { Line:'Line',Grid:'Grid',Circle:'Circle',EPatternToolShape_MAX:'EPatternToolShape_MAX', };
declare type EPatternToolSingleAxis = 'XAxis' | 'YAxis' | 'ZAxis' | 'EPatternToolSingleAxis_MAX';
declare var EPatternToolSingleAxis : { XAxis:'XAxis',YAxis:'YAxis',ZAxis:'ZAxis',EPatternToolSingleAxis_MAX:'EPatternToolSingleAxis_MAX', };
declare type EPatternToolSinglePlane = 'XYPlane' | 'XZPlane' | 'YZPlane' | 'EPatternToolSinglePlane_MAX';
declare var EPatternToolSinglePlane : { XYPlane:'XYPlane',XZPlane:'XZPlane',YZPlane:'YZPlane',EPatternToolSinglePlane_MAX:'EPatternToolSinglePlane_MAX', };
declare class PatternToolSettings extends InteractiveToolPropertySet { 
	Shape: EPatternToolShape;
	SingleAxis: EPatternToolSingleAxis;
	SinglePlane: EPatternToolSinglePlane;
	bHideSources: boolean;
	Seed: number;
	static Load(ResourceName: string): PatternToolSettings;
	static Find(Outer: UObject, ResourceName: string): PatternToolSettings;
	static GetDefaultObject(): PatternToolSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PatternToolSettings;
	static C(Other: UObject | any): PatternToolSettings;
}

declare type EPatternToolAxisSpacingMode = 'ByCount' | 'StepSize' | 'Packed' | 'EPatternToolAxisSpacingMode_MAX';
declare var EPatternToolAxisSpacingMode : { ByCount:'ByCount',StepSize:'StepSize',Packed:'Packed',EPatternToolAxisSpacingMode_MAX:'EPatternToolAxisSpacingMode_MAX', };
declare class PatternTool_LinearSettings extends InteractiveToolPropertySet { 
	SpacingMode: EPatternToolAxisSpacingMode;
	Count: number;
	StepSize: number;
	Extent: number;
	bCentered: boolean;
	static Load(ResourceName: string): PatternTool_LinearSettings;
	static Find(Outer: UObject, ResourceName: string): PatternTool_LinearSettings;
	static GetDefaultObject(): PatternTool_LinearSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PatternTool_LinearSettings;
	static C(Other: UObject | any): PatternTool_LinearSettings;
}

declare class PatternTool_GridSettings extends InteractiveToolPropertySet { 
	SpacingX: EPatternToolAxisSpacingMode;
	CountX: number;
	StepSizeX: number;
	ExtentX: number;
	bCenteredX: boolean;
	SpacingY: EPatternToolAxisSpacingMode;
	CountY: number;
	StepSizeY: number;
	ExtentY: number;
	bCenteredY: boolean;
	static Load(ResourceName: string): PatternTool_GridSettings;
	static Find(Outer: UObject, ResourceName: string): PatternTool_GridSettings;
	static GetDefaultObject(): PatternTool_GridSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PatternTool_GridSettings;
	static C(Other: UObject | any): PatternTool_GridSettings;
}

declare class PatternTool_RadialSettings extends InteractiveToolPropertySet { 
	SpacingMode: EPatternToolAxisSpacingMode;
	Count: number;
	StepSize: number;
	Radius: number;
	StartAngle: number;
	EndAngle: number;
	AngleShift: number;
	bOriented: boolean;
	static Load(ResourceName: string): PatternTool_RadialSettings;
	static Find(Outer: UObject, ResourceName: string): PatternTool_RadialSettings;
	static GetDefaultObject(): PatternTool_RadialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PatternTool_RadialSettings;
	static C(Other: UObject | any): PatternTool_RadialSettings;
}

declare class PatternTool_RotationSettings extends InteractiveToolPropertySet { 
	bInterpolate: boolean;
	bJitter: boolean;
	StartRotation: Rotator;
	EndRotation: Rotator;
	RotationJitterRange: Rotator;
	static Load(ResourceName: string): PatternTool_RotationSettings;
	static Find(Outer: UObject, ResourceName: string): PatternTool_RotationSettings;
	static GetDefaultObject(): PatternTool_RotationSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PatternTool_RotationSettings;
	static C(Other: UObject | any): PatternTool_RotationSettings;
}

declare class PatternTool_TranslationSettings extends InteractiveToolPropertySet { 
	bInterpolate: boolean;
	bJitter: boolean;
	StartTranslation: Vector;
	EndTranslation: Vector;
	TranslationJitterRange: Vector;
	static Load(ResourceName: string): PatternTool_TranslationSettings;
	static Find(Outer: UObject, ResourceName: string): PatternTool_TranslationSettings;
	static GetDefaultObject(): PatternTool_TranslationSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PatternTool_TranslationSettings;
	static C(Other: UObject | any): PatternTool_TranslationSettings;
}

declare class PatternTool_ScaleSettings extends InteractiveToolPropertySet { 
	bUniform: boolean;
	bInterpolate: boolean;
	bJitter: boolean;
	StartScale: Vector;
	EndScale: Vector;
	ScaleJitterRange: number;
	ScaleJitterRangeNonUniform: Vector;
	static Load(ResourceName: string): PatternTool_ScaleSettings;
	static Find(Outer: UObject, ResourceName: string): PatternTool_ScaleSettings;
	static GetDefaultObject(): PatternTool_ScaleSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PatternTool_ScaleSettings;
	static C(Other: UObject | any): PatternTool_ScaleSettings;
}

declare class PatternTool_OutputSettings extends InteractiveToolPropertySet { 
	bSeparateActors: boolean;
	bConvertToDynamic: boolean;
	bCreateISMCs: boolean;
	bHaveStaticMeshes: boolean;
	static Load(ResourceName: string): PatternTool_OutputSettings;
	static Find(Outer: UObject, ResourceName: string): PatternTool_OutputSettings;
	static GetDefaultObject(): PatternTool_OutputSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PatternTool_OutputSettings;
	static C(Other: UObject | any): PatternTool_OutputSettings;
}

declare class PatternTool extends MultiSelectionMeshEditingTool { 
	Settings: PatternToolSettings;
	LinearSettings: PatternTool_LinearSettings;
	GridSettings: PatternTool_GridSettings;
	RadialSettings: PatternTool_RadialSettings;
	RotationSettings: PatternTool_RotationSettings;
	TranslationSettings: PatternTool_TranslationSettings;
	ScaleSettings: PatternTool_ScaleSettings;
	OutputSettings: PatternTool_OutputSettings;
	TransformProxy_End: TransformProxy;
	TransformGizmo_End: CombinedTransformGizmo;
	DragAlignmentMechanic: DragAlignmentMechanic;
	PlaneMechanic: ConstructionPlaneMechanic;
	AllComponents: Set<PrimitiveComponent>;
	PreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): PatternTool;
	static Find(Outer: UObject, ResourceName: string): PatternTool;
	static GetDefaultObject(): PatternTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PatternTool;
	static C(Other: UObject | any): PatternTool;
}

declare type EMeshBoundaryConstraint = 'Fixed' | 'Refine' | 'Free' | 'EMeshBoundaryConstraint_MAX';
declare var EMeshBoundaryConstraint : { Fixed:'Fixed',Refine:'Refine',Free:'Free',EMeshBoundaryConstraint_MAX:'EMeshBoundaryConstraint_MAX', };
declare type EGroupBoundaryConstraint = 'Fixed' | 'Refine' | 'Free' | 'Ignore' | 'EGroupBoundaryConstraint_MAX';
declare var EGroupBoundaryConstraint : { Fixed:'Fixed',Refine:'Refine',Free:'Free',Ignore:'Ignore',EGroupBoundaryConstraint_MAX:'EGroupBoundaryConstraint_MAX', };
declare type EMaterialBoundaryConstraint = 'Fixed' | 'Refine' | 'Free' | 'Ignore' | 'EMaterialBoundaryConstraint_MAX';
declare var EMaterialBoundaryConstraint : { Fixed:'Fixed',Refine:'Refine',Free:'Free',Ignore:'Ignore',EMaterialBoundaryConstraint_MAX:'EMaterialBoundaryConstraint_MAX', };
declare class MeshConstraintProperties extends InteractiveToolPropertySet { 
	bPreserveSharpEdges: boolean;
	MeshBoundaryConstraint: EMeshBoundaryConstraint;
	GroupBoundaryConstraint: EGroupBoundaryConstraint;
	MaterialBoundaryConstraint: EMaterialBoundaryConstraint;
	bPreventNormalFlips: boolean;
	bPreventTinyTriangles: boolean;
	static Load(ResourceName: string): MeshConstraintProperties;
	static Find(Outer: UObject, ResourceName: string): MeshConstraintProperties;
	static GetDefaultObject(): MeshConstraintProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshConstraintProperties;
	static C(Other: UObject | any): MeshConstraintProperties;
}

declare class RemeshProperties extends MeshConstraintProperties { 
	SmoothingStrength: number;
	bFlips: boolean;
	bSplits: boolean;
	bCollapses: boolean;
	static Load(ResourceName: string): RemeshProperties;
	static Find(Outer: UObject, ResourceName: string): RemeshProperties;
	static GetDefaultObject(): RemeshProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemeshProperties;
	static C(Other: UObject | any): RemeshProperties;
}

declare class AddPatchToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): AddPatchToolBuilder;
	static Find(Outer: UObject, ResourceName: string): AddPatchToolBuilder;
	static GetDefaultObject(): AddPatchToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddPatchToolBuilder;
	static C(Other: UObject | any): AddPatchToolBuilder;
}

declare class AddPatchToolProperties extends InteractiveToolPropertySet { 
	Width: number;
	Rotation: number;
	Subdivisions: number;
	Shift: number;
	static Load(ResourceName: string): AddPatchToolProperties;
	static Find(Outer: UObject, ResourceName: string): AddPatchToolProperties;
	static GetDefaultObject(): AddPatchToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddPatchToolProperties;
	static C(Other: UObject | any): AddPatchToolProperties;
}

declare class AddPatchTool extends SingleClickTool { 
	ShapeSettings: AddPatchToolProperties;
	MaterialProperties: NewMeshMaterialProperties;
	PreviewMesh: PreviewMesh;
	static Load(ResourceName: string): AddPatchTool;
	static Find(Outer: UObject, ResourceName: string): AddPatchTool;
	static GetDefaultObject(): AddPatchTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddPatchTool;
	static C(Other: UObject | any): AddPatchTool;
}

declare class AlignObjectsToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): AlignObjectsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): AlignObjectsToolBuilder;
	static GetDefaultObject(): AlignObjectsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlignObjectsToolBuilder;
	static C(Other: UObject | any): AlignObjectsToolBuilder;
}

declare type EAlignObjectsAlignTypes = 'Pivots' | 'BoundingBoxes' | 'EAlignObjectsAlignTypes_MAX';
declare var EAlignObjectsAlignTypes : { Pivots:'Pivots',BoundingBoxes:'BoundingBoxes',EAlignObjectsAlignTypes_MAX:'EAlignObjectsAlignTypes_MAX', };
declare type EAlignObjectsAlignToOptions = 'FirstSelected' | 'LastSelected' | 'Combined' | 'EAlignObjectsAlignToOptions_MAX';
declare var EAlignObjectsAlignToOptions : { FirstSelected:'FirstSelected',LastSelected:'LastSelected',Combined:'Combined',EAlignObjectsAlignToOptions_MAX:'EAlignObjectsAlignToOptions_MAX', };
declare type EAlignObjectsBoxPoint = 'Center' | 'Bottom' | 'Top' | 'Left' | 'Right' | 'Front' | 'Back' | 'Min' | 'Max' | 'EAlignObjectsBoxPoint_MAX';
declare var EAlignObjectsBoxPoint : { Center:'Center',Bottom:'Bottom',Top:'Top',Left:'Left',Right:'Right',Front:'Front',Back:'Back',Min:'Min',Max:'Max',EAlignObjectsBoxPoint_MAX:'EAlignObjectsBoxPoint_MAX', };
declare class AlignObjectsToolProperties extends InteractiveToolPropertySet { 
	AlignType: EAlignObjectsAlignTypes;
	AlignTo: EAlignObjectsAlignToOptions;
	BoxPosition: EAlignObjectsBoxPoint;
	bAlignX: boolean;
	bAlignY: boolean;
	bAlignZ: boolean;
	static Load(ResourceName: string): AlignObjectsToolProperties;
	static Find(Outer: UObject, ResourceName: string): AlignObjectsToolProperties;
	static GetDefaultObject(): AlignObjectsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlignObjectsToolProperties;
	static C(Other: UObject | any): AlignObjectsToolProperties;
}

declare class AlignObjectsTool extends MultiSelectionMeshEditingTool { 
	AlignProps: AlignObjectsToolProperties;
	static Load(ResourceName: string): AlignObjectsTool;
	static Find(Outer: UObject, ResourceName: string): AlignObjectsTool;
	static GetDefaultObject(): AlignObjectsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlignObjectsTool;
	static C(Other: UObject | any): AlignObjectsTool;
}

declare class BakeMeshAttributeMapsToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): BakeMeshAttributeMapsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): BakeMeshAttributeMapsToolBuilder;
	static GetDefaultObject(): BakeMeshAttributeMapsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMeshAttributeMapsToolBuilder;
	static C(Other: UObject | any): BakeMeshAttributeMapsToolBuilder;
}

declare type EBakeTextureResolution = 'Resolution16' | 'Resolution32' | 'Resolution64' | 'Resolution128' | 'Resolution256' | 'Resolution512' | 'Resolution1024' | 'Resolution2048' | 'Resolution4096' | 'Resolution8192' | 'EBakeTextureResolution_MAX';
declare var EBakeTextureResolution : { Resolution16:'Resolution16',Resolution32:'Resolution32',Resolution64:'Resolution64',Resolution128:'Resolution128',Resolution256:'Resolution256',Resolution512:'Resolution512',Resolution1024:'Resolution1024',Resolution2048:'Resolution2048',Resolution4096:'Resolution4096',Resolution8192:'Resolution8192',EBakeTextureResolution_MAX:'EBakeTextureResolution_MAX', };
declare type EBakeTextureBitDepth = 'ChannelBits8' | 'ChannelBits16' | 'EBakeTextureBitDepth_MAX';
declare var EBakeTextureBitDepth : { ChannelBits8:'ChannelBits8',ChannelBits16:'ChannelBits16',EBakeTextureBitDepth_MAX:'EBakeTextureBitDepth_MAX', };
declare type EBakeTextureSamplesPerPixel = 'Sample1' | 'Sample4' | 'Sample16' | 'Sample64' | 'Sample256' | 'EBakeTextureSamplesPerPixel_MAX';
declare var EBakeTextureSamplesPerPixel : { Sample1:'Sample1',Sample4:'Sample4',Sample16:'Sample16',Sample64:'Sample64',Sample256:'Sample256',EBakeTextureSamplesPerPixel_MAX:'EBakeTextureSamplesPerPixel_MAX', };
declare class BakeMeshAttributeMapsToolProperties extends InteractiveToolPropertySet { 
	MapTypes: number;
	MapPreview: string;
	Resolution: EBakeTextureResolution;
	BitDepth: EBakeTextureBitDepth;
	SamplesPerPixel: EBakeTextureSamplesPerPixel;
	SampleFilterMask: Texture2D;
	MapPreviewNamesList: string[];
	static Load(ResourceName: string): BakeMeshAttributeMapsToolProperties;
	static Find(Outer: UObject, ResourceName: string): BakeMeshAttributeMapsToolProperties;
	static GetDefaultObject(): BakeMeshAttributeMapsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMeshAttributeMapsToolProperties;
	GetMapPreviewNamesFunc(): string[];
	static C(Other: UObject | any): BakeMeshAttributeMapsToolProperties;
}

declare class BakeMeshAttributeTool extends MultiSelectionMeshEditingTool { 
	OcclusionSettings: BakeOcclusionMapToolProperties;
	CurvatureSettings: BakeCurvatureMapToolProperties;
	TextureSettings: BakeTexture2DProperties;
	MultiTextureSettings: BakeMultiTexture2DProperties;
	WorkingPreviewMaterial: MaterialInstanceDynamic;
	ErrorPreviewMaterial: MaterialInstanceDynamic;
	static Load(ResourceName: string): BakeMeshAttributeTool;
	static Find(Outer: UObject, ResourceName: string): BakeMeshAttributeTool;
	static GetDefaultObject(): BakeMeshAttributeTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMeshAttributeTool;
	static C(Other: UObject | any): BakeMeshAttributeTool;
}

declare type EBakeMapType = 'None' | 'TangentSpaceNormal' | 'ObjectSpaceNormal' | 'FaceNormal' | 'BentNormal' | 'Position' | 'Curvature' | 'AmbientOcclusion' | 'Texture' | 'MultiTexture' | 'VertexColor' | 'MaterialID' | 'All' | 'EBakeMapType_MAX';
declare var EBakeMapType : { None:'None',TangentSpaceNormal:'TangentSpaceNormal',ObjectSpaceNormal:'ObjectSpaceNormal',FaceNormal:'FaceNormal',BentNormal:'BentNormal',Position:'Position',Curvature:'Curvature',AmbientOcclusion:'AmbientOcclusion',Texture:'Texture',MultiTexture:'MultiTexture',VertexColor:'VertexColor',MaterialID:'MaterialID',All:'All',EBakeMapType_MAX:'EBakeMapType_MAX', };
declare class BakeMeshAttributeMapsToolBase extends BakeMeshAttributeTool { 
	VisualizationProps: BakeVisualizationProperties;
	PreviewMesh: PreviewMesh;
	PreviewMaterial: MaterialInstanceDynamic;
	BentNormalPreviewMaterial: MaterialInstanceDynamic;
	CachedMaps: Map<EBakeMapType, Texture2D>;
	EmptyNormalMap: Texture2D;
	EmptyColorMapBlack: Texture2D;
	EmptyColorMapWhite: Texture2D;
	static Load(ResourceName: string): BakeMeshAttributeMapsToolBase;
	static Find(Outer: UObject, ResourceName: string): BakeMeshAttributeMapsToolBase;
	static GetDefaultObject(): BakeMeshAttributeMapsToolBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMeshAttributeMapsToolBase;
	static C(Other: UObject | any): BakeMeshAttributeMapsToolBase;
}

declare class BakeMeshAttributeMapsResultToolProperties extends InteractiveToolPropertySet { 
	Result: Map<EBakeMapType, Texture2D>;
	static Load(ResourceName: string): BakeMeshAttributeMapsResultToolProperties;
	static Find(Outer: UObject, ResourceName: string): BakeMeshAttributeMapsResultToolProperties;
	static GetDefaultObject(): BakeMeshAttributeMapsResultToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMeshAttributeMapsResultToolProperties;
	static C(Other: UObject | any): BakeMeshAttributeMapsResultToolProperties;
}

declare class BakeMeshAttributeMapsTool extends BakeMeshAttributeMapsToolBase { 
	InputMeshSettings: BakeInputMeshProperties;
	Settings: BakeMeshAttributeMapsToolProperties;
	ResultSettings: BakeMeshAttributeMapsResultToolProperties;
	static Load(ResourceName: string): BakeMeshAttributeMapsTool;
	static Find(Outer: UObject, ResourceName: string): BakeMeshAttributeMapsTool;
	static GetDefaultObject(): BakeMeshAttributeMapsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMeshAttributeMapsTool;
	static C(Other: UObject | any): BakeMeshAttributeMapsTool;
}

declare class BakeMeshAttributeVertexToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): BakeMeshAttributeVertexToolBuilder;
	static Find(Outer: UObject, ResourceName: string): BakeMeshAttributeVertexToolBuilder;
	static GetDefaultObject(): BakeMeshAttributeVertexToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMeshAttributeVertexToolBuilder;
	static C(Other: UObject | any): BakeMeshAttributeVertexToolBuilder;
}

declare type EBakeVertexOutput = 'RGBA' | 'PerChannel' | 'EBakeVertexOutput_MAX';
declare var EBakeVertexOutput : { RGBA:'RGBA',PerChannel:'PerChannel',EBakeVertexOutput_MAX:'EBakeVertexOutput_MAX', };
declare type EBakeVertexChannel = 'R' | 'G' | 'B' | 'A' | 'RGBA' | 'EBakeVertexChannel_MAX';
declare var EBakeVertexChannel : { R:'R',G:'G',B:'B',A:'A',RGBA:'RGBA',EBakeVertexChannel_MAX:'EBakeVertexChannel_MAX', };
declare class BakeMeshAttributeVertexToolProperties extends InteractiveToolPropertySet { 
	OutputMode: EBakeVertexOutput;
	OutputType: number;
	OutputTypeR: number;
	OutputTypeG: number;
	OutputTypeB: number;
	OutputTypeA: number;
	PreviewMode: EBakeVertexChannel;
	bSplitAtNormalSeams: boolean;
	bSplitAtUVSeams: boolean;
	static Load(ResourceName: string): BakeMeshAttributeVertexToolProperties;
	static Find(Outer: UObject, ResourceName: string): BakeMeshAttributeVertexToolProperties;
	static GetDefaultObject(): BakeMeshAttributeVertexToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMeshAttributeVertexToolProperties;
	static C(Other: UObject | any): BakeMeshAttributeVertexToolProperties;
}

declare class BakeMeshAttributeVertexTool extends BakeMeshAttributeTool { 
	InputMeshSettings: BakeInputMeshProperties;
	Settings: BakeMeshAttributeVertexToolProperties;
	PreviewMesh: PreviewMesh;
	PreviewMaterial: MaterialInstanceDynamic;
	PreviewAlphaMaterial: MaterialInstanceDynamic;
	static Load(ResourceName: string): BakeMeshAttributeVertexTool;
	static Find(Outer: UObject, ResourceName: string): BakeMeshAttributeVertexTool;
	static GetDefaultObject(): BakeMeshAttributeVertexTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMeshAttributeVertexTool;
	static C(Other: UObject | any): BakeMeshAttributeVertexTool;
}

declare class BakeMultiMeshAttributeMapsToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): BakeMultiMeshAttributeMapsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): BakeMultiMeshAttributeMapsToolBuilder;
	static GetDefaultObject(): BakeMultiMeshAttributeMapsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMultiMeshAttributeMapsToolBuilder;
	static C(Other: UObject | any): BakeMultiMeshAttributeMapsToolBuilder;
}

declare class BakeMultiMeshAttributeMapsToolProperties extends InteractiveToolPropertySet { 
	MapTypes: number;
	MapPreview: string;
	Resolution: EBakeTextureResolution;
	BitDepth: EBakeTextureBitDepth;
	SamplesPerPixel: EBakeTextureSamplesPerPixel;
	SampleFilterMask: Texture2D;
	MapPreviewNamesList: string[];
	static Load(ResourceName: string): BakeMultiMeshAttributeMapsToolProperties;
	static Find(Outer: UObject, ResourceName: string): BakeMultiMeshAttributeMapsToolProperties;
	static GetDefaultObject(): BakeMultiMeshAttributeMapsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMultiMeshAttributeMapsToolProperties;
	GetMapPreviewNamesFunc(): string[];
	static C(Other: UObject | any): BakeMultiMeshAttributeMapsToolProperties;
}

declare class BakeMultiMeshDetailProperties { 
	SourceMesh: StaticMesh;
	SourceTexture: Texture2D;
	SourceTextureUVLayer: number;
	clone() : BakeMultiMeshDetailProperties;
	static C(Other: UObject | any): BakeMultiMeshDetailProperties;
}

declare class BakeMultiMeshInputToolProperties extends InteractiveToolPropertySet { 
	TargetStaticMesh: StaticMesh;
	TargetSkeletalMesh: SkeletalMesh;
	TargetDynamicMesh: Actor;
	TargetUVLayer: string;
	SourceMeshes: BakeMultiMeshDetailProperties[];
	ProjectionDistance: number;
	TargetUVLayerNamesList: string[];
	static Load(ResourceName: string): BakeMultiMeshInputToolProperties;
	static Find(Outer: UObject, ResourceName: string): BakeMultiMeshInputToolProperties;
	static GetDefaultObject(): BakeMultiMeshInputToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMultiMeshInputToolProperties;
	GetTargetUVLayerNamesFunc(): string[];
	static C(Other: UObject | any): BakeMultiMeshInputToolProperties;
}

declare class BakeMultiMeshAttributeMapsTool extends BakeMeshAttributeMapsToolBase { 
	Settings: BakeMultiMeshAttributeMapsToolProperties;
	InputMeshSettings: BakeMultiMeshInputToolProperties;
	ResultSettings: BakeMeshAttributeMapsResultToolProperties;
	static Load(ResourceName: string): BakeMultiMeshAttributeMapsTool;
	static Find(Outer: UObject, ResourceName: string): BakeMultiMeshAttributeMapsTool;
	static GetDefaultObject(): BakeMultiMeshAttributeMapsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeMultiMeshAttributeMapsTool;
	static C(Other: UObject | any): BakeMultiMeshAttributeMapsTool;
}

declare class BakeRenderCaptureResults extends InteractiveToolPropertySet { 
	BaseColorMap: Texture2D;
	NormalMap: Texture2D;
	PackedMRSMap: Texture2D;
	MetallicMap: Texture2D;
	RoughnessMap: Texture2D;
	SpecularMap: Texture2D;
	EmissiveMap: Texture2D;
	static Load(ResourceName: string): BakeRenderCaptureResults;
	static Find(Outer: UObject, ResourceName: string): BakeRenderCaptureResults;
	static GetDefaultObject(): BakeRenderCaptureResults;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeRenderCaptureResults;
	static C(Other: UObject | any): BakeRenderCaptureResults;
}

declare class BakeRenderCaptureToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): BakeRenderCaptureToolBuilder;
	static Find(Outer: UObject, ResourceName: string): BakeRenderCaptureToolBuilder;
	static GetDefaultObject(): BakeRenderCaptureToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeRenderCaptureToolBuilder;
	static C(Other: UObject | any): BakeRenderCaptureToolBuilder;
}

declare class RenderCaptureProperties extends InteractiveToolPropertySet { 
	Resolution: EBakeTextureResolution;
	bBaseColorMap: boolean;
	bNormalMap: boolean;
	bPackedMRSMap: boolean;
	bMetallicMap: boolean;
	bRoughnessMap: boolean;
	bSpecularMap: boolean;
	bEmissiveMap: boolean;
	bAntiAliasing: boolean;
	CaptureFieldOfView: number;
	NearPlaneDist: number;
	bDeviceDepthMap: boolean;
	static Load(ResourceName: string): RenderCaptureProperties;
	static Find(Outer: UObject, ResourceName: string): RenderCaptureProperties;
	static GetDefaultObject(): RenderCaptureProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RenderCaptureProperties;
	static C(Other: UObject | any): RenderCaptureProperties;
}

declare class BakeRenderCaptureToolProperties extends InteractiveToolPropertySet { 
	MapPreview: string;
	MapPreviewNamesList: string[];
	SamplesPerPixel: EBakeTextureSamplesPerPixel;
	TextureSize: EBakeTextureResolution;
	ValidSampleDepthThreshold: number;
	static Load(ResourceName: string): BakeRenderCaptureToolProperties;
	static Find(Outer: UObject, ResourceName: string): BakeRenderCaptureToolProperties;
	static GetDefaultObject(): BakeRenderCaptureToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeRenderCaptureToolProperties;
	GetMapPreviewNamesFunc(): string[];
	static C(Other: UObject | any): BakeRenderCaptureToolProperties;
}

declare class BakeRenderCaptureInputToolProperties extends InteractiveToolPropertySet { 
	TargetStaticMesh: StaticMesh;
	TargetUVLayer: string;
	TargetUVLayerNamesList: string[];
	static Load(ResourceName: string): BakeRenderCaptureInputToolProperties;
	static Find(Outer: UObject, ResourceName: string): BakeRenderCaptureInputToolProperties;
	static GetDefaultObject(): BakeRenderCaptureInputToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeRenderCaptureInputToolProperties;
	GetTargetUVLayerNamesFunc(): string[];
	GetTargetUVLayerIndex(): number;
	static C(Other: UObject | any): BakeRenderCaptureInputToolProperties;
}

declare class BakeRenderCaptureTool extends BakeMeshAttributeMapsToolBase { 
	Actors: Actor[];
	Settings: BakeRenderCaptureToolProperties;
	RenderCaptureProperties: RenderCaptureProperties;
	InputMeshSettings: BakeRenderCaptureInputToolProperties;
	ResultSettings: BakeRenderCaptureResults;
	EmptyEmissiveMap: Texture2D;
	EmptyPackedMRSMap: Texture2D;
	EmptyRoughnessMap: Texture2D;
	EmptyMetallicMap: Texture2D;
	EmptySpecularMap: Texture2D;
	PreviewMaterialRC: MaterialInstanceDynamic;
	PreviewMaterialPackedRC: MaterialInstanceDynamic;
	ComputedRenderCaptureProperties: RenderCaptureProperties;
	static Load(ResourceName: string): BakeRenderCaptureTool;
	static Find(Outer: UObject, ResourceName: string): BakeRenderCaptureTool;
	static GetDefaultObject(): BakeRenderCaptureTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeRenderCaptureTool;
	static C(Other: UObject | any): BakeRenderCaptureTool;
}

declare class BakeTransformToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): BakeTransformToolBuilder;
	static Find(Outer: UObject, ResourceName: string): BakeTransformToolBuilder;
	static GetDefaultObject(): BakeTransformToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeTransformToolBuilder;
	static C(Other: UObject | any): BakeTransformToolBuilder;
}

declare type EBakeScaleMethod = 'BakeFullScale' | 'BakeNonuniformScale' | 'DoNotBakeScale' | 'EBakeScaleMethod_MAX';
declare var EBakeScaleMethod : { BakeFullScale:'BakeFullScale',BakeNonuniformScale:'BakeNonuniformScale',DoNotBakeScale:'DoNotBakeScale',EBakeScaleMethod_MAX:'EBakeScaleMethod_MAX', };
declare class BakeTransformToolProperties extends InteractiveToolPropertySet { 
	bBakeRotation: boolean;
	BakeScale: EBakeScaleMethod;
	bRecenterPivot: boolean;
	bAllowNoScale: boolean;
	static Load(ResourceName: string): BakeTransformToolProperties;
	static Find(Outer: UObject, ResourceName: string): BakeTransformToolProperties;
	static GetDefaultObject(): BakeTransformToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeTransformToolProperties;
	static C(Other: UObject | any): BakeTransformToolProperties;
}

declare class BakeTransformTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: BakeTransformToolProperties;
	static Load(ResourceName: string): BakeTransformTool;
	static Find(Outer: UObject, ResourceName: string): BakeTransformTool;
	static GetDefaultObject(): BakeTransformTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BakeTransformTool;
	static C(Other: UObject | any): BakeTransformTool;
}

declare class ConvertMeshesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): ConvertMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ConvertMeshesToolBuilder;
	static GetDefaultObject(): ConvertMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConvertMeshesToolBuilder;
	static C(Other: UObject | any): ConvertMeshesToolBuilder;
}

declare class ConvertMeshesToolProperties extends InteractiveToolPropertySet { 
	bTransferMaterials: boolean;
	static Load(ResourceName: string): ConvertMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): ConvertMeshesToolProperties;
	static GetDefaultObject(): ConvertMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConvertMeshesToolProperties;
	static C(Other: UObject | any): ConvertMeshesToolProperties;
}

declare class ConvertMeshesTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: ConvertMeshesToolProperties;
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	static Load(ResourceName: string): ConvertMeshesTool;
	static Find(Outer: UObject, ResourceName: string): ConvertMeshesTool;
	static GetDefaultObject(): ConvertMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConvertMeshesTool;
	static C(Other: UObject | any): ConvertMeshesTool;
}

declare class ConvertToPolygonsToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): ConvertToPolygonsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ConvertToPolygonsToolBuilder;
	static GetDefaultObject(): ConvertToPolygonsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConvertToPolygonsToolBuilder;
	static C(Other: UObject | any): ConvertToPolygonsToolBuilder;
}

declare type EConvertToPolygonsMode = 'FaceNormalDeviation' | 'FindPolygons' | 'FromUVIslands' | 'FromNormalSeams' | 'FromConnectedTris' | 'FromFurthestPointSampling' | 'CopyFromLayer' | 'EConvertToPolygonsMode_MAX';
declare var EConvertToPolygonsMode : { FaceNormalDeviation:'FaceNormalDeviation',FindPolygons:'FindPolygons',FromUVIslands:'FromUVIslands',FromNormalSeams:'FromNormalSeams',FromConnectedTris:'FromConnectedTris',FromFurthestPointSampling:'FromFurthestPointSampling',CopyFromLayer:'CopyFromLayer',EConvertToPolygonsMode_MAX:'EConvertToPolygonsMode_MAX', };
declare class ConvertToPolygonsToolProperties extends InteractiveToolPropertySet { 
	ConversionMode: EConvertToPolygonsMode;
	AngleTolerance: number;
	NumPoints: number;
	bSplitExisting: boolean;
	bNormalWeighted: boolean;
	NormalWeighting: number;
	QuadAdjacencyWeight: number;
	QuadMetricClamp: number;
	QuadSearchRounds: number;
	bRespectUVSeams: boolean;
	bRespectHardNormals: boolean;
	MinGroupSize: number;
	bCalculateNormals: boolean;
	bShowGroupColors: boolean;
	static Load(ResourceName: string): ConvertToPolygonsToolProperties;
	static Find(Outer: UObject, ResourceName: string): ConvertToPolygonsToolProperties;
	static GetDefaultObject(): ConvertToPolygonsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConvertToPolygonsToolProperties;
	static C(Other: UObject | any): ConvertToPolygonsToolProperties;
}

declare class OutputPolygroupLayerProperties extends InteractiveToolPropertySet { 
	GroupLayer: string;
	OptionsList: string[];
	bShowNewLayerName: boolean;
	NewLayerName: string;
	static Load(ResourceName: string): OutputPolygroupLayerProperties;
	static Find(Outer: UObject, ResourceName: string): OutputPolygroupLayerProperties;
	static GetDefaultObject(): OutputPolygroupLayerProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OutputPolygroupLayerProperties;
	GetGroupOptionsList(): string[];
	static C(Other: UObject | any): OutputPolygroupLayerProperties;
}

declare class ConvertToPolygonsTool extends SingleSelectionMeshEditingTool { 
	Settings: ConvertToPolygonsToolProperties;
	CopyFromLayerProperties: PolygroupLayersProperties;
	OutputProperties: OutputPolygroupLayerProperties;
	PreviewCompute: MeshOpPreviewWithBackgroundCompute;
	PreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): ConvertToPolygonsTool;
	static Find(Outer: UObject, ResourceName: string): ConvertToPolygonsTool;
	static GetDefaultObject(): ConvertToPolygonsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConvertToPolygonsTool;
	static C(Other: UObject | any): ConvertToPolygonsTool;
}

declare class ConvertToPolygonsOperatorFactory extends UObject { 
	ConvertToPolygonsTool: ConvertToPolygonsTool;
	static Load(ResourceName: string): ConvertToPolygonsOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): ConvertToPolygonsOperatorFactory;
	static GetDefaultObject(): ConvertToPolygonsOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConvertToPolygonsOperatorFactory;
	static C(Other: UObject | any): ConvertToPolygonsOperatorFactory;
}

declare class CubeGridToolBuilder extends InteractiveToolWithToolTargetsBuilder { 
	static Load(ResourceName: string): CubeGridToolBuilder;
	static Find(Outer: UObject, ResourceName: string): CubeGridToolBuilder;
	static GetDefaultObject(): CubeGridToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CubeGridToolBuilder;
	static C(Other: UObject | any): CubeGridToolBuilder;
}

declare type ECubeGridToolFaceSelectionMode = 'OutsideBasedOnNormal' | 'InsideBasedOnNormal' | 'OutsideBasedOnViewRay' | 'InsideBasedOnViewRay' | 'ECubeGridToolFaceSelectionMode_MAX';
declare var ECubeGridToolFaceSelectionMode : { OutsideBasedOnNormal:'OutsideBasedOnNormal',InsideBasedOnNormal:'InsideBasedOnNormal',OutsideBasedOnViewRay:'OutsideBasedOnViewRay',InsideBasedOnViewRay:'InsideBasedOnViewRay',ECubeGridToolFaceSelectionMode_MAX:'ECubeGridToolFaceSelectionMode_MAX', };
declare class CubeGridToolProperties extends InteractiveToolPropertySet { 
	GridFrameOrigin: Vector;
	GridFrameOrientation: Rotator;
	bShowGizmo: boolean;
	GridPower: number;
	CurrentBlockSize: number;
	BlocksPerStep: number;
	bPowerOfTwoBlockSizes: boolean;
	BlockBaseSize: number;
	bCrosswiseDiagonal: boolean;
	bKeepSideGroups: boolean;
	PlaneTolerance: number;
	bHitUnrelatedGeometry: boolean;
	bHitGridGroundPlaneIfCloser: boolean;
	FaceSelectionMode: ECubeGridToolFaceSelectionMode;
	ToggleCornerMode: string;
	PushPull: string;
	ResizeGrid: string;
	SlideSelection: string;
	FlipSelection: string;
	GridGizmo: string;
	QuickShiftGizmo: string;
	AlignGizmo: string;
	bInCornerMode: boolean;
	bAllowedToEditGrid: boolean;
	static Load(ResourceName: string): CubeGridToolProperties;
	static Find(Outer: UObject, ResourceName: string): CubeGridToolProperties;
	static GetDefaultObject(): CubeGridToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CubeGridToolProperties;
	static C(Other: UObject | any): CubeGridToolProperties;
}

declare class CubeGridToolActions extends InteractiveToolPropertySet { 
	GridSourceActor: Actor;
	static Load(ResourceName: string): CubeGridToolActions;
	static Find(Outer: UObject, ResourceName: string): CubeGridToolActions;
	static GetDefaultObject(): CubeGridToolActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CubeGridToolActions;
	SlideForward(): void;
	SlideBack(): void;
	ResetGridFromActor(): void;
	Push(): void;
	Pull(): void;
	Flip(): void;
	CornerMode(): void;
	static C(Other: UObject | any): CubeGridToolActions;
}

declare class CubeGridDuringActivityActions extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): CubeGridDuringActivityActions;
	static Find(Outer: UObject, ResourceName: string): CubeGridDuringActivityActions;
	static GetDefaultObject(): CubeGridDuringActivityActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CubeGridDuringActivityActions;
	Done(): void;
	Cancel(): void;
	static C(Other: UObject | any): CubeGridDuringActivityActions;
}

declare class CubeGridTool extends InteractiveTool { 
	GridGizmo: CombinedTransformGizmo;
	GridGizmoAlignmentMechanic: DragAlignmentMechanic;
	GridGizmoTransformProxy: TransformProxy;
	LineSets: PreviewGeometry;
	ClickDragBehavior: ClickDragInputBehavior;
	HoverBehavior: MouseHoverBehavior;
	CtrlMiddleClickBehavior: LocalSingleClickInputBehavior;
	MiddleClickDragBehavior: LocalClickDragInputBehavior;
	Settings: CubeGridToolProperties;
	ToolActions: CubeGridToolActions;
	DuringActivityActions: CubeGridDuringActivityActions;
	MaterialProperties: NewMeshMaterialProperties;
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	Target: ToolTarget;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): CubeGridTool;
	static Find(Outer: UObject, ResourceName: string): CubeGridTool;
	static GetDefaultObject(): CubeGridTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CubeGridTool;
	static C(Other: UObject | any): CubeGridTool;
}

declare class DeformMeshPolygonsToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): DeformMeshPolygonsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): DeformMeshPolygonsToolBuilder;
	static GetDefaultObject(): DeformMeshPolygonsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeformMeshPolygonsToolBuilder;
	static C(Other: UObject | any): DeformMeshPolygonsToolBuilder;
}

declare type EGroupTopologyDeformationStrategy = 'Linear' | 'Laplacian' | 'EGroupTopologyDeformationStrategy_MAX';
declare var EGroupTopologyDeformationStrategy : { Linear:'Linear',Laplacian:'Laplacian',EGroupTopologyDeformationStrategy_MAX:'EGroupTopologyDeformationStrategy_MAX', };
declare type EQuickTransformerMode = 'AxisTranslation' | 'AxisRotation' | 'EQuickTransformerMode_MAX';
declare var EQuickTransformerMode : { AxisTranslation:'AxisTranslation',AxisRotation:'AxisRotation',EQuickTransformerMode_MAX:'EQuickTransformerMode_MAX', };
declare type EWeightScheme = 'Uniform' | 'Umbrella' | 'Valence' | 'MeanValue' | 'Cotangent' | 'ClampedCotangent' | 'IDTCotangent' | 'EWeightScheme_MAX';
declare var EWeightScheme : { Uniform:'Uniform',Umbrella:'Umbrella',Valence:'Valence',MeanValue:'MeanValue',Cotangent:'Cotangent',ClampedCotangent:'ClampedCotangent',IDTCotangent:'IDTCotangent',EWeightScheme_MAX:'EWeightScheme_MAX', };
declare class DeformMeshPolygonsTransformProperties extends InteractiveToolPropertySet { 
	DeformationStrategy: EGroupTopologyDeformationStrategy;
	TransformMode: EQuickTransformerMode;
	bSelectFaces: boolean;
	bSelectEdges: boolean;
	bSelectVertices: boolean;
	bShowWireframe: boolean;
	SelectedWeightScheme: EWeightScheme;
	HandleWeight: number;
	bPostFixHandles: boolean;
	static Load(ResourceName: string): DeformMeshPolygonsTransformProperties;
	static Find(Outer: UObject, ResourceName: string): DeformMeshPolygonsTransformProperties;
	static GetDefaultObject(): DeformMeshPolygonsTransformProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeformMeshPolygonsTransformProperties;
	static C(Other: UObject | any): DeformMeshPolygonsTransformProperties;
}

declare class DeformMeshPolygonsTool extends MeshSurfacePointTool { 
	PreviewMeshActor: InternalToolFrameworkActor;
	DynamicMeshComponent: DynamicMeshComponent;
	TransformProps: DeformMeshPolygonsTransformProperties;
	static Load(ResourceName: string): DeformMeshPolygonsTool;
	static Find(Outer: UObject, ResourceName: string): DeformMeshPolygonsTool;
	static GetDefaultObject(): DeformMeshPolygonsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeformMeshPolygonsTool;
	static C(Other: UObject | any): DeformMeshPolygonsTool;
}

declare type EDisplaceMeshToolDisplaceType = 'Constant' | 'DisplacementMap' | 'RandomNoise' | 'PerlinNoise' | 'SineWave' | 'EDisplaceMeshToolDisplaceType_MAX';
declare var EDisplaceMeshToolDisplaceType : { Constant:'Constant',DisplacementMap:'DisplacementMap',RandomNoise:'RandomNoise',PerlinNoise:'PerlinNoise',SineWave:'SineWave',EDisplaceMeshToolDisplaceType_MAX:'EDisplaceMeshToolDisplaceType_MAX', };
declare type EDisplaceMeshToolSubdivisionType = 'Flat' | 'PNTriangles' | 'EDisplaceMeshToolSubdivisionType_MAX';
declare var EDisplaceMeshToolSubdivisionType : { Flat:'Flat',PNTriangles:'PNTriangles',EDisplaceMeshToolSubdivisionType_MAX:'EDisplaceMeshToolSubdivisionType_MAX', };
declare class DisplaceMeshCommonProperties extends InteractiveToolPropertySet { 
	DisplacementType: EDisplaceMeshToolDisplaceType;
	DisplaceIntensity: number;
	RandomSeed: number;
	SubdivisionType: EDisplaceMeshToolSubdivisionType;
	Subdivisions: number;
	WeightMap: string;
	WeightMapsList: string[];
	bInvertWeightMap: boolean;
	bShowWireframe: boolean;
	bDisableSizeWarning: boolean;
	static Load(ResourceName: string): DisplaceMeshCommonProperties;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshCommonProperties;
	static GetDefaultObject(): DisplaceMeshCommonProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshCommonProperties;
	GetWeightMapsFunc(): string[];
	static C(Other: UObject | any): DisplaceMeshCommonProperties;
}

declare type EDisplaceMeshToolTriangleSelectionType = 'None' | 'Material' | 'EDisplaceMeshToolTriangleSelectionType_MAX';
declare var EDisplaceMeshToolTriangleSelectionType : { None:'None',Material:'Material',EDisplaceMeshToolTriangleSelectionType_MAX:'EDisplaceMeshToolTriangleSelectionType_MAX', };
declare class SelectiveTessellationProperties extends InteractiveToolPropertySet { 
	SelectionType: EDisplaceMeshToolTriangleSelectionType;
	ActiveMaterial: string;
	MaterialIDList: string[];
	static Load(ResourceName: string): SelectiveTessellationProperties;
	static Find(Outer: UObject, ResourceName: string): SelectiveTessellationProperties;
	static GetDefaultObject(): SelectiveTessellationProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelectiveTessellationProperties;
	GetMaterialIDsFunc(): string[];
	static C(Other: UObject | any): SelectiveTessellationProperties;
}

declare type EDisplaceMeshToolChannelType = 'Red' | 'Green' | 'Blue' | 'Alpha' | 'EDisplaceMeshToolChannelType_MAX';
declare var EDisplaceMeshToolChannelType : { Red:'Red',Green:'Green',Blue:'Blue',Alpha:'Alpha',EDisplaceMeshToolChannelType_MAX:'EDisplaceMeshToolChannelType_MAX', };
declare class DisplaceMeshTextureMapProperties extends InteractiveToolPropertySet { 
	DisplacementMap: Texture2D;
	Channel: EDisplaceMeshToolChannelType;
	DisplacementMapBaseValue: number;
	UVScale: Vector2D;
	UVOffset: Vector2D;
	bApplyAdjustmentCurve: boolean;
	AdjustmentCurve: CurveFloat;
	bRecalcNormals: boolean;
	static Load(ResourceName: string): DisplaceMeshTextureMapProperties;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshTextureMapProperties;
	static GetDefaultObject(): DisplaceMeshTextureMapProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshTextureMapProperties;
	static C(Other: UObject | any): DisplaceMeshTextureMapProperties;
}

declare class DisplaceMeshDirectionalFilterProperties extends InteractiveToolPropertySet { 
	bEnableFilter: boolean;
	FilterDirection: Vector;
	FilterWidth: number;
	static Load(ResourceName: string): DisplaceMeshDirectionalFilterProperties;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshDirectionalFilterProperties;
	static GetDefaultObject(): DisplaceMeshDirectionalFilterProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshDirectionalFilterProperties;
	static C(Other: UObject | any): DisplaceMeshDirectionalFilterProperties;
}

declare class PerlinLayerProperties { 
	Frequency: number;
	Intensity: number;
	clone() : PerlinLayerProperties;
	static C(Other: UObject | any): PerlinLayerProperties;
}

declare class DisplaceMeshPerlinNoiseProperties extends InteractiveToolPropertySet { 
	PerlinLayerProperties: PerlinLayerProperties[];
	static Load(ResourceName: string): DisplaceMeshPerlinNoiseProperties;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshPerlinNoiseProperties;
	static GetDefaultObject(): DisplaceMeshPerlinNoiseProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshPerlinNoiseProperties;
	static C(Other: UObject | any): DisplaceMeshPerlinNoiseProperties;
}

declare class DisplaceMeshSineWaveProperties extends InteractiveToolPropertySet { 
	SineWaveFrequency: number;
	SineWavePhaseShift: number;
	SineWaveDirection: Vector;
	static Load(ResourceName: string): DisplaceMeshSineWaveProperties;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshSineWaveProperties;
	static GetDefaultObject(): DisplaceMeshSineWaveProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshSineWaveProperties;
	static C(Other: UObject | any): DisplaceMeshSineWaveProperties;
}

declare class DisplaceMeshToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): DisplaceMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshToolBuilder;
	static GetDefaultObject(): DisplaceMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshToolBuilder;
	static C(Other: UObject | any): DisplaceMeshToolBuilder;
}

declare class DisplaceMeshTool extends SingleSelectionMeshEditingTool { 
	CommonProperties: DisplaceMeshCommonProperties;
	DirectionalFilterProperties: DisplaceMeshDirectionalFilterProperties;
	TextureMapProperties: DisplaceMeshTextureMapProperties;
	NoiseProperties: DisplaceMeshPerlinNoiseProperties;
	SineWaveProperties: DisplaceMeshSineWaveProperties;
	SelectiveTessellationProperties: SelectiveTessellationProperties;
	ActiveContrastCurveTarget: CurveFloat;
	PreviewMeshActor: InternalToolFrameworkActor;
	DynamicMeshComponent: DynamicMeshComponent;
	static Load(ResourceName: string): DisplaceMeshTool;
	static Find(Outer: UObject, ResourceName: string): DisplaceMeshTool;
	static GetDefaultObject(): DisplaceMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DisplaceMeshTool;
	static C(Other: UObject | any): DisplaceMeshTool;
}

declare class DrawPolyPathToolBuilder extends MeshSurfacePointToolBuilder { 
	static Load(ResourceName: string): DrawPolyPathToolBuilder;
	static Find(Outer: UObject, ResourceName: string): DrawPolyPathToolBuilder;
	static GetDefaultObject(): DrawPolyPathToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolyPathToolBuilder;
	static C(Other: UObject | any): DrawPolyPathToolBuilder;
}

declare type EDrawPolyPathWidthMode = 'Fixed' | 'Interactive' | 'EDrawPolyPathWidthMode_MAX';
declare var EDrawPolyPathWidthMode : { Fixed:'Fixed',Interactive:'Interactive',EDrawPolyPathWidthMode_MAX:'EDrawPolyPathWidthMode_MAX', };
declare type EDrawPolyPathRadiusMode = 'Fixed' | 'Interactive' | 'EDrawPolyPathRadiusMode_MAX';
declare var EDrawPolyPathRadiusMode : { Fixed:'Fixed',Interactive:'Interactive',EDrawPolyPathRadiusMode_MAX:'EDrawPolyPathRadiusMode_MAX', };
declare type EDrawPolyPathExtrudeMode = 'Flat' | 'Fixed' | 'Interactive' | 'RampFixed' | 'RampInteractive' | 'EDrawPolyPathExtrudeMode_MAX';
declare var EDrawPolyPathExtrudeMode : { Flat:'Flat',Fixed:'Fixed',Interactive:'Interactive',RampFixed:'RampFixed',RampInteractive:'RampInteractive',EDrawPolyPathExtrudeMode_MAX:'EDrawPolyPathExtrudeMode_MAX', };
declare class DrawPolyPathProperties extends InteractiveToolPropertySet { 
	WidthMode: EDrawPolyPathWidthMode;
	Width: number;
	bRoundedCorners: boolean;
	RadiusMode: EDrawPolyPathRadiusMode;
	CornerRadius: number;
	RadialSlices: number;
	bSinglePolyGroup: boolean;
	ExtrudeMode: EDrawPolyPathExtrudeMode;
	ExtrudeHeight: number;
	RampStartRatio: number;
	static Load(ResourceName: string): DrawPolyPathProperties;
	static Find(Outer: UObject, ResourceName: string): DrawPolyPathProperties;
	static GetDefaultObject(): DrawPolyPathProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolyPathProperties;
	static C(Other: UObject | any): DrawPolyPathProperties;
}

declare type EDrawPolyPathExtrudeDirection = 'SelectionNormal' | 'WorldX' | 'WorldY' | 'WorldZ' | 'LocalX' | 'LocalY' | 'LocalZ' | 'EDrawPolyPathExtrudeDirection_MAX';
declare var EDrawPolyPathExtrudeDirection : { SelectionNormal:'SelectionNormal',WorldX:'WorldX',WorldY:'WorldY',WorldZ:'WorldZ',LocalX:'LocalX',LocalY:'LocalY',LocalZ:'LocalZ',EDrawPolyPathExtrudeDirection_MAX:'EDrawPolyPathExtrudeDirection_MAX', };
declare class DrawPolyPathExtrudeProperties extends InteractiveToolPropertySet { 
	Direction: EDrawPolyPathExtrudeDirection;
	static Load(ResourceName: string): DrawPolyPathExtrudeProperties;
	static Find(Outer: UObject, ResourceName: string): DrawPolyPathExtrudeProperties;
	static GetDefaultObject(): DrawPolyPathExtrudeProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolyPathExtrudeProperties;
	static C(Other: UObject | any): DrawPolyPathExtrudeProperties;
}

declare class DrawPolyPathTool extends InteractiveTool { 
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	TransformProps: DrawPolyPathProperties;
	ExtrudeProperties: DrawPolyPathExtrudeProperties;
	MaterialProperties: NewMeshMaterialProperties;
	PlaneMechanic: ConstructionPlaneMechanic;
	EditPreview: PolyEditPreviewMesh;
	ExtrudeHeightMechanic: PlaneDistanceFromHitMechanic;
	CurveDistMechanic: SpatialCurveDistanceMechanic;
	SurfacePathMechanic: CollectSurfacePathMechanic;
	static Load(ResourceName: string): DrawPolyPathTool;
	static Find(Outer: UObject, ResourceName: string): DrawPolyPathTool;
	static GetDefaultObject(): DrawPolyPathTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DrawPolyPathTool;
	static C(Other: UObject | any): DrawPolyPathTool;
}

declare class DynamicMeshBrushTool extends BaseBrushTool { 
	PreviewMesh: PreviewMesh;
	static Load(ResourceName: string): DynamicMeshBrushTool;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshBrushTool;
	static GetDefaultObject(): DynamicMeshBrushTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshBrushTool;
	static C(Other: UObject | any): DynamicMeshBrushTool;
}

declare class DynamicMeshSculptToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): DynamicMeshSculptToolBuilder;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshSculptToolBuilder;
	static GetDefaultObject(): DynamicMeshSculptToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshSculptToolBuilder;
	static C(Other: UObject | any): DynamicMeshSculptToolBuilder;
}

declare type EBrushToolSizeType = 'Adaptive' | 'World' | 'EBrushToolSizeType_MAX';
declare var EBrushToolSizeType : { Adaptive:'Adaptive',World:'World',EBrushToolSizeType_MAX:'EBrushToolSizeType_MAX', };
declare class BrushToolRadius { 
	SizeType: EBrushToolSizeType;
	AdaptiveSize: number;
	WorldRadius: number;
	clone() : BrushToolRadius;
	static C(Other: UObject | any): BrushToolRadius;
}

declare class DynamicMeshBrushProperties extends InteractiveToolPropertySet { 
	BrushSize: BrushToolRadius;
	BrushFalloffAmount: number;
	Depth: number;
	bHitBackFaces: boolean;
	static Load(ResourceName: string): DynamicMeshBrushProperties;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshBrushProperties;
	static GetDefaultObject(): DynamicMeshBrushProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshBrushProperties;
	static C(Other: UObject | any): DynamicMeshBrushProperties;
}

declare type EDynamicMeshSculptBrushType = 'Move' | 'PullKelvin' | 'PullSharpKelvin' | 'Smooth' | 'Offset' | 'SculptView' | 'SculptMax' | 'Inflate' | 'ScaleKelvin' | 'Pinch' | 'TwistKelvin' | 'Flatten' | 'Plane' | 'PlaneViewAligned' | 'FixedPlane' | 'Resample' | 'LastValue' | 'EDynamicMeshSculptBrushType_MAX';
declare var EDynamicMeshSculptBrushType : { Move:'Move',PullKelvin:'PullKelvin',PullSharpKelvin:'PullSharpKelvin',Smooth:'Smooth',Offset:'Offset',SculptView:'SculptView',SculptMax:'SculptMax',Inflate:'Inflate',ScaleKelvin:'ScaleKelvin',Pinch:'Pinch',TwistKelvin:'TwistKelvin',Flatten:'Flatten',Plane:'Plane',PlaneViewAligned:'PlaneViewAligned',FixedPlane:'FixedPlane',Resample:'Resample',LastValue:'LastValue',EDynamicMeshSculptBrushType_MAX:'EDynamicMeshSculptBrushType_MAX', };
declare class DynamicMeshBrushSculptProperties extends InteractiveToolPropertySet { 
	bIsRemeshingEnabled: boolean;
	PrimaryBrushType: EDynamicMeshSculptBrushType;
	PrimaryBrushSpeed: number;
	bPreserveUVFlow: boolean;
	bFreezeTarget: boolean;
	SmoothBrushSpeed: number;
	bDetailPreservingSmooth: boolean;
	static Load(ResourceName: string): DynamicMeshBrushSculptProperties;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshBrushSculptProperties;
	static GetDefaultObject(): DynamicMeshBrushSculptProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshBrushSculptProperties;
	static C(Other: UObject | any): DynamicMeshBrushSculptProperties;
}

declare class DynamicSculptToolActions extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): DynamicSculptToolActions;
	static Find(Outer: UObject, ResourceName: string): DynamicSculptToolActions;
	static GetDefaultObject(): DynamicSculptToolActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicSculptToolActions;
	DiscardAttributes(): void;
	static C(Other: UObject | any): DynamicSculptToolActions;
}

declare class BrushRemeshProperties extends RemeshProperties { 
	bEnableRemeshing: boolean;
	TriangleSize: number;
	PreserveDetail: number;
	Iterations: number;
	static Load(ResourceName: string): BrushRemeshProperties;
	static Find(Outer: UObject, ResourceName: string): BrushRemeshProperties;
	static GetDefaultObject(): BrushRemeshProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BrushRemeshProperties;
	static C(Other: UObject | any): BrushRemeshProperties;
}

declare class FixedPlaneBrushProperties extends InteractiveToolPropertySet { 
	bPropertySetEnabled: boolean;
	bShowGizmo: boolean;
	Position: Vector;
	Rotation: Quat;
	static Load(ResourceName: string): FixedPlaneBrushProperties;
	static Find(Outer: UObject, ResourceName: string): FixedPlaneBrushProperties;
	static GetDefaultObject(): FixedPlaneBrushProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FixedPlaneBrushProperties;
	static C(Other: UObject | any): FixedPlaneBrushProperties;
}

declare class SculptMaxBrushProperties extends InteractiveToolPropertySet { 
	MaxHeight: number;
	bFreezeCurrentHeight: boolean;
	static Load(ResourceName: string): SculptMaxBrushProperties;
	static Find(Outer: UObject, ResourceName: string): SculptMaxBrushProperties;
	static GetDefaultObject(): SculptMaxBrushProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SculptMaxBrushProperties;
	static C(Other: UObject | any): SculptMaxBrushProperties;
}

declare class KelvinBrushProperties extends InteractiveToolPropertySet { 
	FalloffDistance: number;
	Stiffness: number;
	Incompressiblity: number;
	BrushSteps: number;
	static Load(ResourceName: string): KelvinBrushProperties;
	static Find(Outer: UObject, ResourceName: string): KelvinBrushProperties;
	static GetDefaultObject(): KelvinBrushProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KelvinBrushProperties;
	static C(Other: UObject | any): KelvinBrushProperties;
}

declare class DynamicMeshSculptTool extends MeshSurfacePointTool { 
	BrushProperties: DynamicMeshBrushProperties;
	SculptProperties: DynamicMeshBrushSculptProperties;
	SculptMaxBrushProperties: SculptMaxBrushProperties;
	KelvinBrushProperties: KelvinBrushProperties;
	RemeshProperties: BrushRemeshProperties;
	GizmoProperties: FixedPlaneBrushProperties;
	ViewProperties: MeshEditingViewProperties;
	SculptToolActions: DynamicSculptToolActions;
	BrushIndicator: BrushStampIndicator;
	BrushIndicatorMaterial: MaterialInstanceDynamic;
	BrushIndicatorMesh: PreviewMesh;
	DynamicMeshComponent: OctreeDynamicMeshComponent;
	ActiveOverrideMaterial: MaterialInstanceDynamic;
	PlaneTransformGizmo: CombinedTransformGizmo;
	PlaneTransformProxy: TransformProxy;
	static Load(ResourceName: string): DynamicMeshSculptTool;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshSculptTool;
	static GetDefaultObject(): DynamicMeshSculptTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshSculptTool;
	static C(Other: UObject | any): DynamicMeshSculptTool;
}

declare class EditNormalsToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): EditNormalsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): EditNormalsToolBuilder;
	static GetDefaultObject(): EditNormalsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditNormalsToolBuilder;
	static C(Other: UObject | any): EditNormalsToolBuilder;
}

declare type ENormalCalculationMethod = 'AreaWeighted' | 'AngleWeighted' | 'AreaAngleWeighting' | 'ENormalCalculationMethod_MAX';
declare var ENormalCalculationMethod : { AreaWeighted:'AreaWeighted',AngleWeighted:'AngleWeighted',AreaAngleWeighting:'AreaAngleWeighting',ENormalCalculationMethod_MAX:'ENormalCalculationMethod_MAX', };
declare type ESplitNormalMethod = 'UseExistingTopology' | 'FaceNormalThreshold' | 'FaceGroupID' | 'PerTriangle' | 'PerVertex' | 'ESplitNormalMethod_MAX';
declare var ESplitNormalMethod : { UseExistingTopology:'UseExistingTopology',FaceNormalThreshold:'FaceNormalThreshold',FaceGroupID:'FaceGroupID',PerTriangle:'PerTriangle',PerVertex:'PerVertex',ESplitNormalMethod_MAX:'ESplitNormalMethod_MAX', };
declare class EditNormalsToolProperties extends InteractiveToolPropertySet { 
	bRecomputeNormals: boolean;
	NormalCalculationMethod: ENormalCalculationMethod;
	bFixInconsistentNormals: boolean;
	bInvertNormals: boolean;
	SplitNormalMethod: ESplitNormalMethod;
	SharpEdgeAngleThreshold: number;
	bAllowSharpVertices: boolean;
	static Load(ResourceName: string): EditNormalsToolProperties;
	static Find(Outer: UObject, ResourceName: string): EditNormalsToolProperties;
	static GetDefaultObject(): EditNormalsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditNormalsToolProperties;
	static C(Other: UObject | any): EditNormalsToolProperties;
}

declare class EditNormalsAdvancedProperties extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): EditNormalsAdvancedProperties;
	static Find(Outer: UObject, ResourceName: string): EditNormalsAdvancedProperties;
	static GetDefaultObject(): EditNormalsAdvancedProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditNormalsAdvancedProperties;
	static C(Other: UObject | any): EditNormalsAdvancedProperties;
}

declare class EditNormalsTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: EditNormalsToolProperties;
	AdvancedProperties: EditNormalsAdvancedProperties;
	PolygroupLayerProperties: PolygroupLayersProperties;
	Previews: MeshOpPreviewWithBackgroundCompute[];
	static Load(ResourceName: string): EditNormalsTool;
	static Find(Outer: UObject, ResourceName: string): EditNormalsTool;
	static GetDefaultObject(): EditNormalsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditNormalsTool;
	static C(Other: UObject | any): EditNormalsTool;
}

declare class EditNormalsOperatorFactory extends UObject { 
	Tool: EditNormalsTool;
	static Load(ResourceName: string): EditNormalsOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): EditNormalsOperatorFactory;
	static GetDefaultObject(): EditNormalsOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditNormalsOperatorFactory;
	static C(Other: UObject | any): EditNormalsOperatorFactory;
}

declare class EditPivotToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): EditPivotToolBuilder;
	static Find(Outer: UObject, ResourceName: string): EditPivotToolBuilder;
	static GetDefaultObject(): EditPivotToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditPivotToolBuilder;
	static C(Other: UObject | any): EditPivotToolBuilder;
}

declare type EEditPivotSnapDragRotationMode = 'Ignore' | 'Align' | 'AlignFlipped' | 'LastValue' | 'EEditPivotSnapDragRotationMode_MAX';
declare var EEditPivotSnapDragRotationMode : { Ignore:'Ignore',Align:'Align',AlignFlipped:'AlignFlipped',LastValue:'LastValue',EEditPivotSnapDragRotationMode_MAX:'EEditPivotSnapDragRotationMode_MAX', };
declare class EditPivotToolProperties extends InteractiveToolPropertySet { 
	bEnableSnapDragging: boolean;
	RotationMode: EEditPivotSnapDragRotationMode;
	static Load(ResourceName: string): EditPivotToolProperties;
	static Find(Outer: UObject, ResourceName: string): EditPivotToolProperties;
	static GetDefaultObject(): EditPivotToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditPivotToolProperties;
	static C(Other: UObject | any): EditPivotToolProperties;
}

declare class EditPivotToolActionPropertySet extends InteractiveToolPropertySet { 
	bUseWorldBox: boolean;
	static Load(ResourceName: string): EditPivotToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): EditPivotToolActionPropertySet;
	static GetDefaultObject(): EditPivotToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditPivotToolActionPropertySet;
	WorldOrigin(): void;
	Top(): void;
	Right(): void;
	Left(): void;
	Front(): void;
	Center(): void;
	Bottom(): void;
	Back(): void;
	static C(Other: UObject | any): EditPivotToolActionPropertySet;
}

declare class EditPivotTarget { 
	TransformProxy: TransformProxy;
	TransformGizmo: CombinedTransformGizmo;
	clone() : EditPivotTarget;
	static C(Other: UObject | any): EditPivotTarget;
}

declare class EditPivotTool extends MultiSelectionMeshEditingTool { 
	TransformProps: EditPivotToolProperties;
	EditPivotActions: EditPivotToolActionPropertySet;
	ActiveGizmos: EditPivotTarget[];
	DragAlignmentMechanic: DragAlignmentMechanic;
	static Load(ResourceName: string): EditPivotTool;
	static Find(Outer: UObject, ResourceName: string): EditPivotTool;
	static GetDefaultObject(): EditPivotTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditPivotTool;
	static C(Other: UObject | any): EditPivotTool;
}

declare class EditUVIslandsToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): EditUVIslandsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): EditUVIslandsToolBuilder;
	static GetDefaultObject(): EditUVIslandsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditUVIslandsToolBuilder;
	static C(Other: UObject | any): EditUVIslandsToolBuilder;
}

declare class EditUVIslandsTool extends MeshSurfacePointTool { 
	MaterialSettings: ExistingMeshMaterialProperties;
	CheckerMaterial: MaterialInstanceDynamic;
	PreviewMeshActor: InternalToolFrameworkActor;
	DynamicMeshComponent: DynamicMeshComponent;
	SelectionMechanic: PolygonSelectionMechanic;
	MultiTransformer: MultiTransformer;
	static Load(ResourceName: string): EditUVIslandsTool;
	static Find(Outer: UObject, ResourceName: string): EditUVIslandsTool;
	static GetDefaultObject(): EditUVIslandsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditUVIslandsTool;
	static C(Other: UObject | any): EditUVIslandsTool;
}

declare class HoleFillToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): HoleFillToolBuilder;
	static Find(Outer: UObject, ResourceName: string): HoleFillToolBuilder;
	static GetDefaultObject(): HoleFillToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillToolBuilder;
	static C(Other: UObject | any): HoleFillToolBuilder;
}

declare class SmoothHoleFillProperties extends InteractiveToolPropertySet { 
	bConstrainToHoleInterior: boolean;
	RemeshingExteriorRegionWidth: number;
	SmoothingExteriorRegionWidth: number;
	SmoothingInteriorRegionWidth: number;
	InteriorSmoothness: number;
	FillDensityScalar: number;
	bProjectDuringRemesh: boolean;
	static Load(ResourceName: string): SmoothHoleFillProperties;
	static Find(Outer: UObject, ResourceName: string): SmoothHoleFillProperties;
	static GetDefaultObject(): SmoothHoleFillProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothHoleFillProperties;
	static C(Other: UObject | any): SmoothHoleFillProperties;
}

declare type EHoleFillOpFillType = 'TriangleFan' | 'PolygonEarClipping' | 'Planar' | 'Minimal' | 'Smooth' | 'EHoleFillOpFillType_MAX';
declare var EHoleFillOpFillType : { TriangleFan:'TriangleFan',PolygonEarClipping:'PolygonEarClipping',Planar:'Planar',Minimal:'Minimal',Smooth:'Smooth',EHoleFillOpFillType_MAX:'EHoleFillOpFillType_MAX', };
declare class HoleFillToolProperties extends InteractiveToolPropertySet { 
	FillType: EHoleFillOpFillType;
	bRemoveIsolatedTriangles: boolean;
	bQuickFillSmallHoles: boolean;
	static Load(ResourceName: string): HoleFillToolProperties;
	static Find(Outer: UObject, ResourceName: string): HoleFillToolProperties;
	static GetDefaultObject(): HoleFillToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillToolProperties;
	static C(Other: UObject | any): HoleFillToolProperties;
}

declare class HoleFillToolActions extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): HoleFillToolActions;
	static Find(Outer: UObject, ResourceName: string): HoleFillToolActions;
	static GetDefaultObject(): HoleFillToolActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillToolActions;
	SelectAll(): void;
	Clear(): void;
	static C(Other: UObject | any): HoleFillToolActions;
}

declare class HoleFillStatisticsProperties extends InteractiveToolPropertySet { 
	InitialHoles: string;
	SelectedHoles: string;
	SuccessfulFills: string;
	FailedFills: string;
	RemainingHoles: string;
	static Load(ResourceName: string): HoleFillStatisticsProperties;
	static Find(Outer: UObject, ResourceName: string): HoleFillStatisticsProperties;
	static GetDefaultObject(): HoleFillStatisticsProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillStatisticsProperties;
	static C(Other: UObject | any): HoleFillStatisticsProperties;
}

declare class HoleFillTool extends SingleSelectionMeshEditingTool { 
	SmoothHoleFillProperties: SmoothHoleFillProperties;
	Properties: HoleFillToolProperties;
	Actions: HoleFillToolActions;
	Statistics: HoleFillStatisticsProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	SelectionMechanic: PolygonSelectionMechanic;
	static Load(ResourceName: string): HoleFillTool;
	static Find(Outer: UObject, ResourceName: string): HoleFillTool;
	static GetDefaultObject(): HoleFillTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillTool;
	static C(Other: UObject | any): HoleFillTool;
}

declare class HoleFillOperatorFactory extends UObject { 
	FillTool: HoleFillTool;
	static Load(ResourceName: string): HoleFillOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): HoleFillOperatorFactory;
	static GetDefaultObject(): HoleFillOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoleFillOperatorFactory;
	static C(Other: UObject | any): HoleFillOperatorFactory;
}

declare class LatticeDeformerToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): LatticeDeformerToolBuilder;
	static Find(Outer: UObject, ResourceName: string): LatticeDeformerToolBuilder;
	static GetDefaultObject(): LatticeDeformerToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LatticeDeformerToolBuilder;
	static C(Other: UObject | any): LatticeDeformerToolBuilder;
}

declare type ELatticeInterpolationType = 'Linear' | 'Cubic' | 'ELatticeInterpolationType_MAX';
declare var ELatticeInterpolationType : { Linear:'Linear',Cubic:'Cubic',ELatticeInterpolationType_MAX:'ELatticeInterpolationType_MAX', };
declare class LatticeDeformerToolProperties extends InteractiveToolPropertySet { 
	XAxisResolution: number;
	YAxisResolution: number;
	ZAxisResolution: number;
	Padding: number;
	InterpolationType: ELatticeInterpolationType;
	bDeformNormals: boolean;
	bCanChangeResolution: boolean;
	GizmoCoordinateSystem: EToolContextCoordinateSystem;
	bSetPivotMode: boolean;
	bSoftDeformation: boolean;
	static Load(ResourceName: string): LatticeDeformerToolProperties;
	static Find(Outer: UObject, ResourceName: string): LatticeDeformerToolProperties;
	static GetDefaultObject(): LatticeDeformerToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LatticeDeformerToolProperties;
	Constrain(): void;
	ClearConstraints(): void;
	static C(Other: UObject | any): LatticeDeformerToolProperties;
}

declare class LatticeDeformerTool extends SingleSelectionMeshEditingTool { 
	ControlPointsMechanic: LatticeControlPointsMechanic;
	Settings: LatticeDeformerToolProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	bLatticeDeformed: boolean;
	static Load(ResourceName: string): LatticeDeformerTool;
	static Find(Outer: UObject, ResourceName: string): LatticeDeformerTool;
	static GetDefaultObject(): LatticeDeformerTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LatticeDeformerTool;
	static C(Other: UObject | any): LatticeDeformerTool;
}

declare class LatticeDeformerOperatorFactory extends UObject { 
	LatticeDeformerTool: LatticeDeformerTool;
	static Load(ResourceName: string): LatticeDeformerOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): LatticeDeformerOperatorFactory;
	static GetDefaultObject(): LatticeDeformerOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LatticeDeformerOperatorFactory;
	static C(Other: UObject | any): LatticeDeformerOperatorFactory;
}

declare class MeshAttributePaintToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshAttributePaintToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshAttributePaintToolBuilder;
	static GetDefaultObject(): MeshAttributePaintToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAttributePaintToolBuilder;
	static C(Other: UObject | any): MeshAttributePaintToolBuilder;
}

declare type EBrushActionMode = 'Paint' | 'FloodFill' | 'EBrushActionMode_MAX';
declare var EBrushActionMode : { Paint:'Paint',FloodFill:'FloodFill',EBrushActionMode_MAX:'EBrushActionMode_MAX', };
declare class MeshAttributePaintBrushOperationProperties extends InteractiveToolPropertySet { 
	BrushAction: EBrushActionMode;
	static Load(ResourceName: string): MeshAttributePaintBrushOperationProperties;
	static Find(Outer: UObject, ResourceName: string): MeshAttributePaintBrushOperationProperties;
	static GetDefaultObject(): MeshAttributePaintBrushOperationProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAttributePaintBrushOperationProperties;
	static C(Other: UObject | any): MeshAttributePaintBrushOperationProperties;
}

declare class MeshAttributePaintToolProperties extends InteractiveToolPropertySet { 
	Attribute: string;
	static Load(ResourceName: string): MeshAttributePaintToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshAttributePaintToolProperties;
	static GetDefaultObject(): MeshAttributePaintToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAttributePaintToolProperties;
	GetAttributeNames(): string[];
	static C(Other: UObject | any): MeshAttributePaintToolProperties;
}

declare class MeshAttributePaintEditActions extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): MeshAttributePaintEditActions;
	static Find(Outer: UObject, ResourceName: string): MeshAttributePaintEditActions;
	static GetDefaultObject(): MeshAttributePaintEditActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAttributePaintEditActions;
	static C(Other: UObject | any): MeshAttributePaintEditActions;
}

declare class MeshAttributePaintTool extends DynamicMeshBrushTool { 
	BrushActionProps: MeshAttributePaintBrushOperationProperties;
	AttribProps: MeshAttributePaintToolProperties;
	static Load(ResourceName: string): MeshAttributePaintTool;
	static Find(Outer: UObject, ResourceName: string): MeshAttributePaintTool;
	static GetDefaultObject(): MeshAttributePaintTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAttributePaintTool;
	static C(Other: UObject | any): MeshAttributePaintTool;
}

declare class MeshBoundaryToolBase extends SingleSelectionMeshEditingTool { 
	SelectionMechanic: PolygonSelectionMechanic;
	static Load(ResourceName: string): MeshBoundaryToolBase;
	static Find(Outer: UObject, ResourceName: string): MeshBoundaryToolBase;
	static GetDefaultObject(): MeshBoundaryToolBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshBoundaryToolBase;
	static C(Other: UObject | any): MeshBoundaryToolBase;
}

declare class MeshGroupPaintToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshGroupPaintToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshGroupPaintToolBuilder;
	static GetDefaultObject(): MeshGroupPaintToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshGroupPaintToolBuilder;
	static C(Other: UObject | any): MeshGroupPaintToolBuilder;
}

declare type EMeshGroupPaintBrushType = 'Paint' | 'Erase' | 'LastValue' | 'EMeshGroupPaintBrushType_MAX';
declare var EMeshGroupPaintBrushType : { Paint:'Paint',Erase:'Erase',LastValue:'LastValue',EMeshGroupPaintBrushType_MAX:'EMeshGroupPaintBrushType_MAX', };
declare type EMeshGroupPaintInteractionType = 'Brush' | 'Fill' | 'GroupFill' | 'PolyLasso' | 'LastValue' | 'EMeshGroupPaintInteractionType_MAX';
declare var EMeshGroupPaintInteractionType : { Brush:'Brush',Fill:'Fill',GroupFill:'GroupFill',PolyLasso:'PolyLasso',LastValue:'LastValue',EMeshGroupPaintInteractionType_MAX:'EMeshGroupPaintInteractionType_MAX', };
declare type EMeshGroupPaintBrushAreaType = 'Connected' | 'Volumetric' | 'EMeshGroupPaintBrushAreaType_MAX';
declare var EMeshGroupPaintBrushAreaType : { Connected:'Connected',Volumetric:'Volumetric',EMeshGroupPaintBrushAreaType_MAX:'EMeshGroupPaintBrushAreaType_MAX', };
declare type EMeshGroupPaintVisibilityType = 'None' | 'FrontFacing' | 'Unoccluded' | 'EMeshGroupPaintVisibilityType_MAX';
declare var EMeshGroupPaintVisibilityType : { None:'None',FrontFacing:'FrontFacing',Unoccluded:'Unoccluded',EMeshGroupPaintVisibilityType_MAX:'EMeshGroupPaintVisibilityType_MAX', };
declare class GroupPaintBrushFilterProperties extends InteractiveToolPropertySet { 
	PrimaryBrushType: EMeshGroupPaintBrushType;
	SubToolType: EMeshGroupPaintInteractionType;
	BrushSize: number;
	BrushAreaMode: EMeshGroupPaintBrushAreaType;
	bHitBackFaces: boolean;
	SetGroup: number;
	bOnlySetUngrouped: boolean;
	EraseGroup: number;
	bOnlyEraseCurrent: boolean;
	AngleThreshold: number;
	bUVSeams: boolean;
	bNormalSeams: boolean;
	VisibilityFilter: EMeshGroupPaintVisibilityType;
	MinTriVertCount: number;
	static Load(ResourceName: string): GroupPaintBrushFilterProperties;
	static Find(Outer: UObject, ResourceName: string): GroupPaintBrushFilterProperties;
	static GetDefaultObject(): GroupPaintBrushFilterProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroupPaintBrushFilterProperties;
	static C(Other: UObject | any): GroupPaintBrushFilterProperties;
}

declare class MeshGroupPaintToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): MeshGroupPaintToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): MeshGroupPaintToolActionPropertySet;
	static GetDefaultObject(): MeshGroupPaintToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshGroupPaintToolActionPropertySet;
	static C(Other: UObject | any): MeshGroupPaintToolActionPropertySet;
}

declare class MeshGroupPaintToolFreezeActions extends MeshGroupPaintToolActionPropertySet { 
	static Load(ResourceName: string): MeshGroupPaintToolFreezeActions;
	static Find(Outer: UObject, ResourceName: string): MeshGroupPaintToolFreezeActions;
	static GetDefaultObject(): MeshGroupPaintToolFreezeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshGroupPaintToolFreezeActions;
	UnfreezeAll(): void;
	ShrinkCurrent(): void;
	GrowCurrent(): void;
	FreezeOthers(): void;
	FreezeCurrent(): void;
	FloodFillCurrent(): void;
	ClearCurrent(): void;
	ClearAll(): void;
	static C(Other: UObject | any): MeshGroupPaintToolFreezeActions;
}

declare class SculptBrushProperties extends InteractiveToolPropertySet { 
	BrushSize: BrushToolRadius;
	BrushFalloffAmount: number;
	bShowFalloff: boolean;
	Depth: number;
	bHitBackFaces: boolean;
	FlowRate: number;
	Spacing: number;
	Lazyness: number;
	bShowPerBrushProps: boolean;
	bShowLazyness: boolean;
	bShowFlowRate: boolean;
	bShowSpacing: boolean;
	static Load(ResourceName: string): SculptBrushProperties;
	static Find(Outer: UObject, ResourceName: string): SculptBrushProperties;
	static GetDefaultObject(): SculptBrushProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SculptBrushProperties;
	static C(Other: UObject | any): SculptBrushProperties;
}

declare class WorkPlaneProperties extends InteractiveToolPropertySet { 
	bPropertySetEnabled: boolean;
	bShowGizmo: boolean;
	Position: Vector;
	Rotation: Quat;
	static Load(ResourceName: string): WorkPlaneProperties;
	static Find(Outer: UObject, ResourceName: string): WorkPlaneProperties;
	static GetDefaultObject(): WorkPlaneProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WorkPlaneProperties;
	static C(Other: UObject | any): WorkPlaneProperties;
}

declare class MeshSculptToolBase extends MeshSurfacePointTool { 
	BrushProperties: SculptBrushProperties;
	GizmoProperties: WorkPlaneProperties;
	BrushOpPropSets: Map<number, MeshSculptBrushOpProps>;
	SecondaryBrushOpPropSets: Map<number, MeshSculptBrushOpProps>;
	ViewProperties: MeshEditingViewProperties;
	ActiveOverrideMaterial: MaterialInstanceDynamic;
	BrushIndicator: BrushStampIndicator;
	bIsVolumetricIndicator: boolean;
	BrushIndicatorMaterial: MaterialInstanceDynamic;
	BrushIndicatorMesh: PreviewMesh;
	PlaneTransformGizmo: CombinedTransformGizmo;
	PlaneTransformProxy: TransformProxy;
	static Load(ResourceName: string): MeshSculptToolBase;
	static Find(Outer: UObject, ResourceName: string): MeshSculptToolBase;
	static GetDefaultObject(): MeshSculptToolBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSculptToolBase;
	static C(Other: UObject | any): MeshSculptToolBase;
}

declare class MeshGroupPaintTool extends MeshSculptToolBase { 
	PolygroupLayerProperties: PolygroupLayersProperties;
	FilterProperties: GroupPaintBrushFilterProperties;
	PaintBrushOpProperties: GroupPaintBrushOpProps;
	EraseBrushOpProperties: GroupEraseBrushOpProps;
	FreezeActions: MeshGroupPaintToolFreezeActions;
	PolyLassoMechanic: PolyLassoMarqueeMechanic;
	PreviewMeshActor: InternalToolFrameworkActor;
	DynamicMeshComponent: DynamicMeshComponent;
	MeshElementsDisplay: MeshElementsVisualizer;
	static Load(ResourceName: string): MeshGroupPaintTool;
	static Find(Outer: UObject, ResourceName: string): MeshGroupPaintTool;
	static GetDefaultObject(): MeshGroupPaintTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshGroupPaintTool;
	static C(Other: UObject | any): MeshGroupPaintTool;
}

declare class MeshInspectorToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshInspectorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshInspectorToolBuilder;
	static GetDefaultObject(): MeshInspectorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInspectorToolBuilder;
	static C(Other: UObject | any): MeshInspectorToolBuilder;
}

declare class MeshInspectorProperties extends InteractiveToolPropertySet { 
	bWireframe: boolean;
	bBoundaryEdges: boolean;
	bBowtieVertices: boolean;
	bPolygonBorders: boolean;
	bUVSeams: boolean;
	bUVBowties: boolean;
	bMissingUVs: boolean;
	bNormalSeams: boolean;
	bNormalVectors: boolean;
	bTangentVectors: boolean;
	NormalLength: number;
	TangentLength: number;
	static Load(ResourceName: string): MeshInspectorProperties;
	static Find(Outer: UObject, ResourceName: string): MeshInspectorProperties;
	static GetDefaultObject(): MeshInspectorProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInspectorProperties;
	static C(Other: UObject | any): MeshInspectorProperties;
}

declare class MeshInspectorTool extends SingleSelectionMeshEditingTool { 
	Settings: MeshInspectorProperties;
	MaterialSettings: ExistingMeshMaterialProperties;
	PreviewMesh: PreviewMesh;
	DrawnLineSet: LineSetComponent;
	DefaultMaterial: MaterialInterface;
	static Load(ResourceName: string): MeshInspectorTool;
	static Find(Outer: UObject, ResourceName: string): MeshInspectorTool;
	static GetDefaultObject(): MeshInspectorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInspectorTool;
	static C(Other: UObject | any): MeshInspectorTool;
}

declare class MeshSelectionToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshSelectionToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionToolBuilder;
	static GetDefaultObject(): MeshSelectionToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionToolBuilder;
	static C(Other: UObject | any): MeshSelectionToolBuilder;
}

declare class MeshSelectionToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): MeshSelectionToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionToolActionPropertySet;
	static GetDefaultObject(): MeshSelectionToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionToolActionPropertySet;
	static C(Other: UObject | any): MeshSelectionToolActionPropertySet;
}

declare class MeshSelectionEditActions extends MeshSelectionToolActionPropertySet { 
	static Load(ResourceName: string): MeshSelectionEditActions;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionEditActions;
	static GetDefaultObject(): MeshSelectionEditActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionEditActions;
	Shrink(): void;
	SelectAll(): void;
	OptimizeBorder(): void;
	LargestTriCountPart(): void;
	LargestAreaPart(): void;
	Invert(): void;
	Grow(): void;
	FloodFill(): void;
	Clear(): void;
	static C(Other: UObject | any): MeshSelectionEditActions;
}

declare class MeshSelectionMeshEditActions extends MeshSelectionToolActionPropertySet { 
	static Load(ResourceName: string): MeshSelectionMeshEditActions;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionMeshEditActions;
	static GetDefaultObject(): MeshSelectionMeshEditActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionMeshEditActions;
	SmoothBorder(): void;
	Separate(): void;
	FlipNormals(): void;
	Duplicate(): void;
	Disconnect(): void;
	Delete(): void;
	CreatePolygroup(): void;
	static C(Other: UObject | any): MeshSelectionMeshEditActions;
}

declare type EMeshSelectionToolPrimaryMode = 'Brush' | 'VolumetricBrush' | 'AngleFiltered' | 'Visible' | 'AllConnected' | 'AllInGroup' | 'ByMaterial' | 'ByUVIsland' | 'AllWithinAngle' | 'EMeshSelectionToolPrimaryMode_MAX';
declare var EMeshSelectionToolPrimaryMode : { Brush:'Brush',VolumetricBrush:'VolumetricBrush',AngleFiltered:'AngleFiltered',Visible:'Visible',AllConnected:'AllConnected',AllInGroup:'AllInGroup',ByMaterial:'ByMaterial',ByUVIsland:'ByUVIsland',AllWithinAngle:'AllWithinAngle',EMeshSelectionToolPrimaryMode_MAX:'EMeshSelectionToolPrimaryMode_MAX', };
declare type EMeshFacesColorMode = 'None' | 'ByGroup' | 'ByMaterialID' | 'ByUVIsland' | 'EMeshFacesColorMode_MAX';
declare var EMeshFacesColorMode : { None:'None',ByGroup:'ByGroup',ByMaterialID:'ByMaterialID',ByUVIsland:'ByUVIsland',EMeshFacesColorMode_MAX:'EMeshFacesColorMode_MAX', };
declare class MeshSelectionToolProperties extends InteractiveToolPropertySet { 
	SelectionMode: EMeshSelectionToolPrimaryMode;
	AngleTolerance: number;
	bHitBackFaces: boolean;
	bShowPoints: boolean;
	FaceColorMode: EMeshFacesColorMode;
	static Load(ResourceName: string): MeshSelectionToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionToolProperties;
	static GetDefaultObject(): MeshSelectionToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionToolProperties;
	static C(Other: UObject | any): MeshSelectionToolProperties;
}

declare class MeshStatisticsProperties extends InteractiveToolPropertySet { 
	Mesh: string;
	UV: string;
	Attributes: string;
	static Load(ResourceName: string): MeshStatisticsProperties;
	static Find(Outer: UObject, ResourceName: string): MeshStatisticsProperties;
	static GetDefaultObject(): MeshStatisticsProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshStatisticsProperties;
	static C(Other: UObject | any): MeshStatisticsProperties;
}

declare class MeshSelectionTool extends DynamicMeshBrushTool { 
	SelectionProps: MeshSelectionToolProperties;
	SelectionActions: MeshSelectionEditActions;
	EditActions: MeshSelectionToolActionPropertySet;
	MeshStatisticsProperties: MeshStatisticsProperties;
	MeshElementsDisplay: MeshElementsVisualizer;
	UVChannelProperties: MeshUVChannelProperties;
	PolygroupLayerProperties: PolygroupLayersProperties;
	USelection: MeshSelectionSet;
	SpawnedActors: Actor[];
	static Load(ResourceName: string): MeshSelectionTool;
	static Find(Outer: UObject, ResourceName: string): MeshSelectionTool;
	static GetDefaultObject(): MeshSelectionTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSelectionTool;
	static C(Other: UObject | any): MeshSelectionTool;
}

declare class MeshSpaceDeformerToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshSpaceDeformerToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshSpaceDeformerToolBuilder;
	static GetDefaultObject(): MeshSpaceDeformerToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSpaceDeformerToolBuilder;
	static C(Other: UObject | any): MeshSpaceDeformerToolBuilder;
}

declare type ENonlinearOperationType = 'Bend' | 'Flare' | 'Twist' | 'ENonlinearOperationType_MAX';
declare var ENonlinearOperationType : { Bend:'Bend',Flare:'Flare',Twist:'Twist',ENonlinearOperationType_MAX:'ENonlinearOperationType_MAX', };
declare type EFlareProfileType = 'SinMode' | 'SinSquaredMode' | 'TriangleMode' | 'EFlareProfileType_MAX';
declare var EFlareProfileType : { SinMode:'SinMode',SinSquaredMode:'SinSquaredMode',TriangleMode:'TriangleMode',EFlareProfileType_MAX:'EFlareProfileType_MAX', };
declare class MeshSpaceDeformerToolProperties extends InteractiveToolPropertySet { 
	SelectedOperationType: ENonlinearOperationType;
	UpperBoundsInterval: number;
	LowerBoundsInterval: number;
	BendDegrees: number;
	TwistDegrees: number;
	FlareProfileType: EFlareProfileType;
	FlarePercentY: number;
	bLockXAndYFlaring: boolean;
	FlarePercentX: number;
	bLockBottom: boolean;
	bShowOriginalMesh: boolean;
	bDrawVisualization: boolean;
	bAlignToNormalOnCtrlClick: boolean;
	static Load(ResourceName: string): MeshSpaceDeformerToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshSpaceDeformerToolProperties;
	static GetDefaultObject(): MeshSpaceDeformerToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSpaceDeformerToolProperties;
	static C(Other: UObject | any): MeshSpaceDeformerToolProperties;
}

declare class MeshSpaceDeformerToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): MeshSpaceDeformerToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): MeshSpaceDeformerToolActionPropertySet;
	static GetDefaultObject(): MeshSpaceDeformerToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSpaceDeformerToolActionPropertySet;
	ShiftToCenter(): void;
	static C(Other: UObject | any): MeshSpaceDeformerToolActionPropertySet;
}

declare class MeshSpaceDeformerTool extends SingleSelectionMeshEditingTool { 
	Settings: MeshSpaceDeformerToolProperties;
	ToolActions: MeshSpaceDeformerToolActionPropertySet;
	StateTarget: GizmoTransformChangeStateTarget;
	DragAlignmentMechanic: DragAlignmentMechanic;
	Preview: MeshOpPreviewWithBackgroundCompute;
	OriginalMeshPreview: PreviewMesh;
	IntervalGizmo: IntervalGizmo;
	TransformGizmo: CombinedTransformGizmo;
	TransformProxy: TransformProxy;
	UpIntervalSource: GizmoLocalFloatParameterSource;
	DownIntervalSource: GizmoLocalFloatParameterSource;
	ForwardIntervalSource: GizmoLocalFloatParameterSource;
	static Load(ResourceName: string): MeshSpaceDeformerTool;
	static Find(Outer: UObject, ResourceName: string): MeshSpaceDeformerTool;
	static GetDefaultObject(): MeshSpaceDeformerTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSpaceDeformerTool;
	static C(Other: UObject | any): MeshSpaceDeformerTool;
}

declare class SpaceDeformerOperatorFactory extends UObject { 
	SpaceDeformerTool: MeshSpaceDeformerTool;
	static Load(ResourceName: string): SpaceDeformerOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): SpaceDeformerOperatorFactory;
	static GetDefaultObject(): SpaceDeformerOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpaceDeformerOperatorFactory;
	static C(Other: UObject | any): SpaceDeformerOperatorFactory;
}

declare class MeshVertexSculptToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshVertexSculptToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshVertexSculptToolBuilder;
	static GetDefaultObject(): MeshVertexSculptToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshVertexSculptToolBuilder;
	static C(Other: UObject | any): MeshVertexSculptToolBuilder;
}

declare type EMeshVertexSculptBrushType = 'Move' | 'PullKelvin' | 'PullSharpKelvin' | 'Smooth' | 'SmoothFill' | 'Offset' | 'SculptView' | 'SculptMax' | 'Inflate' | 'ScaleKelvin' | 'Pinch' | 'TwistKelvin' | 'Flatten' | 'Plane' | 'PlaneViewAligned' | 'FixedPlane' | 'LastValue' | 'EMeshVertexSculptBrushType_MAX';
declare var EMeshVertexSculptBrushType : { Move:'Move',PullKelvin:'PullKelvin',PullSharpKelvin:'PullSharpKelvin',Smooth:'Smooth',SmoothFill:'SmoothFill',Offset:'Offset',SculptView:'SculptView',SculptMax:'SculptMax',Inflate:'Inflate',ScaleKelvin:'ScaleKelvin',Pinch:'Pinch',TwistKelvin:'TwistKelvin',Flatten:'Flatten',Plane:'Plane',PlaneViewAligned:'PlaneViewAligned',FixedPlane:'FixedPlane',LastValue:'LastValue',EMeshVertexSculptBrushType_MAX:'EMeshVertexSculptBrushType_MAX', };
declare type EMeshSculptFalloffType = 'Smooth' | 'Linear' | 'Inverse' | 'Round' | 'BoxSmooth' | 'BoxLinear' | 'BoxInverse' | 'BoxRound' | 'LastValue' | 'EMeshSculptFalloffType_MAX';
declare var EMeshSculptFalloffType : { Smooth:'Smooth',Linear:'Linear',Inverse:'Inverse',Round:'Round',BoxSmooth:'BoxSmooth',BoxLinear:'BoxLinear',BoxInverse:'BoxInverse',BoxRound:'BoxRound',LastValue:'LastValue',EMeshSculptFalloffType_MAX:'EMeshSculptFalloffType_MAX', };
declare type EMeshVertexSculptBrushFilterType = 'None' | 'Component' | 'PolyGroup' | 'EMeshVertexSculptBrushFilterType_MAX';
declare var EMeshVertexSculptBrushFilterType : { None:'None',Component:'Component',PolyGroup:'PolyGroup',EMeshVertexSculptBrushFilterType_MAX:'EMeshVertexSculptBrushFilterType_MAX', };
declare class VertexBrushAlphaProperties extends InteractiveToolPropertySet { 
	Alpha: Texture2D;
	RotationAngle: number;
	bRandomize: boolean;
	RandomRange: number;
	static Load(ResourceName: string): VertexBrushAlphaProperties;
	static Find(Outer: UObject, ResourceName: string): VertexBrushAlphaProperties;
	static GetDefaultObject(): VertexBrushAlphaProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VertexBrushAlphaProperties;
	static C(Other: UObject | any): VertexBrushAlphaProperties;
}

declare class MeshSymmetryProperties extends InteractiveToolPropertySet { 
	bEnableSymmetry: boolean;
	bSymmetryCanBeEnabled: boolean;
	static Load(ResourceName: string): MeshSymmetryProperties;
	static Find(Outer: UObject, ResourceName: string): MeshSymmetryProperties;
	static GetDefaultObject(): MeshSymmetryProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshSymmetryProperties;
	static C(Other: UObject | any): MeshSymmetryProperties;
}

declare class MeshVertexSculptTool extends MeshSculptToolBase { 
	SculptProperties: VertexBrushSculptProperties;
	AlphaProperties: VertexBrushAlphaProperties;
	BrushAlpha: Texture2D;
	SymmetryProperties: MeshSymmetryProperties;
	PreviewMeshActor: InternalToolFrameworkActor;
	DynamicMeshComponent: DynamicMeshComponent;
	static Load(ResourceName: string): MeshVertexSculptTool;
	static Find(Outer: UObject, ResourceName: string): MeshVertexSculptTool;
	static GetDefaultObject(): MeshVertexSculptTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshVertexSculptTool;
	static C(Other: UObject | any): MeshVertexSculptTool;
}

declare class VertexBrushSculptProperties extends InteractiveToolPropertySet { 
	PrimaryBrushType: EMeshVertexSculptBrushType;
	PrimaryFalloffType: EMeshSculptFalloffType;
	BrushFilter: EMeshVertexSculptBrushFilterType;
	bFreezeTarget: boolean;
	Tool: MeshVertexSculptTool;
	static Load(ResourceName: string): VertexBrushSculptProperties;
	static Find(Outer: UObject, ResourceName: string): VertexBrushSculptProperties;
	static GetDefaultObject(): VertexBrushSculptProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VertexBrushSculptProperties;
	static C(Other: UObject | any): VertexBrushSculptProperties;
}

declare class MirrorToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MirrorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MirrorToolBuilder;
	static GetDefaultObject(): MirrorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MirrorToolBuilder;
	static C(Other: UObject | any): MirrorToolBuilder;
}

declare type EMirrorOperationMode = 'MirrorAndAppend' | 'MirrorExisting' | 'EMirrorOperationMode_MAX';
declare var EMirrorOperationMode : { MirrorAndAppend:'MirrorAndAppend',MirrorExisting:'MirrorExisting',EMirrorOperationMode_MAX:'EMirrorOperationMode_MAX', };
declare type EMirrorCtrlClickBehavior = 'Reposition' | 'RepositionAndReorient' | 'EMirrorCtrlClickBehavior_MAX';
declare var EMirrorCtrlClickBehavior : { Reposition:'Reposition',RepositionAndReorient:'RepositionAndReorient',EMirrorCtrlClickBehavior_MAX:'EMirrorCtrlClickBehavior_MAX', };
declare type EMirrorSaveMode = 'UpdateAssets' | 'CreateNewAssets' | 'EMirrorSaveMode_MAX';
declare var EMirrorSaveMode : { UpdateAssets:'UpdateAssets',CreateNewAssets:'CreateNewAssets',EMirrorSaveMode_MAX:'EMirrorSaveMode_MAX', };
declare class MirrorToolProperties extends InteractiveToolPropertySet { 
	OperationMode: EMirrorOperationMode;
	bCropAlongMirrorPlaneFirst: boolean;
	bWeldVerticesOnMirrorPlane: boolean;
	PlaneTolerance: number;
	bAllowBowtieVertexCreation: boolean;
	CtrlClickBehavior: EMirrorCtrlClickBehavior;
	bButtonsOnlyChangeOrientation: boolean;
	bShowPreview: boolean;
	SaveMode: EMirrorSaveMode;
	static Load(ResourceName: string): MirrorToolProperties;
	static Find(Outer: UObject, ResourceName: string): MirrorToolProperties;
	static GetDefaultObject(): MirrorToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MirrorToolProperties;
	static C(Other: UObject | any): MirrorToolProperties;
}

declare class MirrorToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): MirrorToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): MirrorToolActionPropertySet;
	static GetDefaultObject(): MirrorToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MirrorToolActionPropertySet;
	Up(): void;
	ShiftToCenter(): void;
	Right(): void;
	Left(): void;
	Forward(): void;
	Down(): void;
	Backward(): void;
	static C(Other: UObject | any): MirrorToolActionPropertySet;
}

declare class MirrorTool extends MultiSelectionMeshEditingTool { 
	Settings: MirrorToolProperties;
	ToolActions: MirrorToolActionPropertySet;
	MeshesToMirror: DynamicMeshReplacementChangeTarget[];
	Previews: MeshOpPreviewWithBackgroundCompute[];
	PlaneMechanic: ConstructionPlaneMechanic;
	static Load(ResourceName: string): MirrorTool;
	static Find(Outer: UObject, ResourceName: string): MirrorTool;
	static GetDefaultObject(): MirrorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MirrorTool;
	static C(Other: UObject | any): MirrorTool;
}

declare class MirrorOperatorFactory extends UObject { 
	MirrorTool: MirrorTool;
	static Load(ResourceName: string): MirrorOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): MirrorOperatorFactory;
	static GetDefaultObject(): MirrorOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MirrorOperatorFactory;
	static C(Other: UObject | any): MirrorOperatorFactory;
}

declare type EOffsetMeshToolOffsetType = 'Iterative' | 'Implicit' | 'EOffsetMeshToolOffsetType_MAX';
declare var EOffsetMeshToolOffsetType : { Iterative:'Iterative',Implicit:'Implicit',EOffsetMeshToolOffsetType_MAX:'EOffsetMeshToolOffsetType_MAX', };
declare class OffsetMeshToolProperties extends InteractiveToolPropertySet { 
	OffsetType: EOffsetMeshToolOffsetType;
	Distance: number;
	bCreateShell: boolean;
	static Load(ResourceName: string): OffsetMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): OffsetMeshToolProperties;
	static GetDefaultObject(): OffsetMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OffsetMeshToolProperties;
	static C(Other: UObject | any): OffsetMeshToolProperties;
}

declare class OffsetWeightMapSetProperties extends WeightMapSetProperties { 
	MinDistance: number;
	static Load(ResourceName: string): OffsetWeightMapSetProperties;
	static Find(Outer: UObject, ResourceName: string): OffsetWeightMapSetProperties;
	static GetDefaultObject(): OffsetWeightMapSetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OffsetWeightMapSetProperties;
	static C(Other: UObject | any): OffsetWeightMapSetProperties;
}

declare class IterativeOffsetProperties extends InteractiveToolPropertySet { 
	Steps: number;
	bOffsetBoundaries: boolean;
	SmoothingPerStep: number;
	bReprojectSmooth: boolean;
	static Load(ResourceName: string): IterativeOffsetProperties;
	static Find(Outer: UObject, ResourceName: string): IterativeOffsetProperties;
	static GetDefaultObject(): IterativeOffsetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IterativeOffsetProperties;
	static C(Other: UObject | any): IterativeOffsetProperties;
}

declare class ImplicitOffsetProperties extends InteractiveToolPropertySet { 
	Smoothness: number;
	bPreserveUVs: boolean;
	static Load(ResourceName: string): ImplicitOffsetProperties;
	static Find(Outer: UObject, ResourceName: string): ImplicitOffsetProperties;
	static GetDefaultObject(): ImplicitOffsetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImplicitOffsetProperties;
	static C(Other: UObject | any): ImplicitOffsetProperties;
}

declare class OffsetMeshTool extends BaseMeshProcessingTool { 
	OffsetProperties: OffsetMeshToolProperties;
	IterativeProperties: IterativeOffsetProperties;
	ImplicitProperties: ImplicitOffsetProperties;
	WeightMapProperties: OffsetWeightMapSetProperties;
	static Load(ResourceName: string): OffsetMeshTool;
	static Find(Outer: UObject, ResourceName: string): OffsetMeshTool;
	static GetDefaultObject(): OffsetMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OffsetMeshTool;
	static C(Other: UObject | any): OffsetMeshTool;
}

declare class OffsetMeshToolBuilder extends BaseMeshProcessingToolBuilder { 
	static Load(ResourceName: string): OffsetMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): OffsetMeshToolBuilder;
	static GetDefaultObject(): OffsetMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OffsetMeshToolBuilder;
	static C(Other: UObject | any): OffsetMeshToolBuilder;
}

declare type ECollisionGeometryMode = 'Default' | 'SimpleAndComplex' | 'UseSimpleAsComplex' | 'UseComplexAsSimple' | 'ECollisionGeometryMode_MAX';
declare var ECollisionGeometryMode : { Default:'Default',SimpleAndComplex:'SimpleAndComplex',UseSimpleAsComplex:'UseSimpleAsComplex',UseComplexAsSimple:'UseComplexAsSimple',ECollisionGeometryMode_MAX:'ECollisionGeometryMode_MAX', };
declare class PhysicsSphereData { 
	Radius: number;
	Transform: Transform;
	Element: KShapeElem;
	clone() : PhysicsSphereData;
	static C(Other: UObject | any): PhysicsSphereData;
}

declare class PhysicsBoxData { 
	Dimensions: Vector;
	Transform: Transform;
	Element: KShapeElem;
	clone() : PhysicsBoxData;
	static C(Other: UObject | any): PhysicsBoxData;
}

declare class PhysicsCapsuleData { 
	Radius: number;
	Length: number;
	Transform: Transform;
	Element: KShapeElem;
	clone() : PhysicsCapsuleData;
	static C(Other: UObject | any): PhysicsCapsuleData;
}

declare class PhysicsConvexData { 
	NumVertices: number;
	NumFaces: number;
	Element: KShapeElem;
	clone() : PhysicsConvexData;
	static C(Other: UObject | any): PhysicsConvexData;
}

declare class PhysicsLevelSetData { 
	Element: KShapeElem;
	clone() : PhysicsLevelSetData;
	static C(Other: UObject | any): PhysicsLevelSetData;
}

declare class PhysicsObjectToolPropertySet extends InteractiveToolPropertySet { 
	ObjectName: string;
	CollisionType: ECollisionGeometryMode;
	Spheres: PhysicsSphereData[];
	Boxes: PhysicsBoxData[];
	Capsules: PhysicsCapsuleData[];
	Convexes: PhysicsConvexData[];
	LevelSets: PhysicsLevelSetData[];
	static Load(ResourceName: string): PhysicsObjectToolPropertySet;
	static Find(Outer: UObject, ResourceName: string): PhysicsObjectToolPropertySet;
	static GetDefaultObject(): PhysicsObjectToolPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsObjectToolPropertySet;
	static C(Other: UObject | any): PhysicsObjectToolPropertySet;
}

declare class CollisionGeometryVisualizationProperties extends InteractiveToolPropertySet { 
	LineThickness: number;
	bShowHidden: boolean;
	bRandomColors: boolean;
	Color: Color;
	static Load(ResourceName: string): CollisionGeometryVisualizationProperties;
	static Find(Outer: UObject, ResourceName: string): CollisionGeometryVisualizationProperties;
	static GetDefaultObject(): CollisionGeometryVisualizationProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CollisionGeometryVisualizationProperties;
	static C(Other: UObject | any): CollisionGeometryVisualizationProperties;
}

declare class ExtractCollisionGeometryToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): ExtractCollisionGeometryToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ExtractCollisionGeometryToolBuilder;
	static GetDefaultObject(): ExtractCollisionGeometryToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtractCollisionGeometryToolBuilder;
	static C(Other: UObject | any): ExtractCollisionGeometryToolBuilder;
}

declare type EExtractCollisionOutputType = 'Simple' | 'Complex' | 'EExtractCollisionOutputType_MAX';
declare var EExtractCollisionOutputType : { Simple:'Simple',Complex:'Complex',EExtractCollisionOutputType_MAX:'EExtractCollisionOutputType_MAX', };
declare class ExtractCollisionToolProperties extends InteractiveToolPropertySet { 
	CollisionType: EExtractCollisionOutputType;
	bWeldEdges: boolean;
	bOutputSeparateMeshes: boolean;
	bShowPreview: boolean;
	bShowInputMesh: boolean;
	static Load(ResourceName: string): ExtractCollisionToolProperties;
	static Find(Outer: UObject, ResourceName: string): ExtractCollisionToolProperties;
	static GetDefaultObject(): ExtractCollisionToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtractCollisionToolProperties;
	static C(Other: UObject | any): ExtractCollisionToolProperties;
}

declare class ExtractCollisionGeometryTool extends SingleSelectionMeshEditingTool { 
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	Settings: ExtractCollisionToolProperties;
	VizSettings: CollisionGeometryVisualizationProperties;
	ObjectProps: PhysicsObjectToolPropertySet;
	PreviewElements: PreviewGeometry;
	PreviewMesh: PreviewMesh;
	static Load(ResourceName: string): ExtractCollisionGeometryTool;
	static Find(Outer: UObject, ResourceName: string): ExtractCollisionGeometryTool;
	static GetDefaultObject(): ExtractCollisionGeometryTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtractCollisionGeometryTool;
	static C(Other: UObject | any): ExtractCollisionGeometryTool;
}

declare class PhysicsInspectorToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): PhysicsInspectorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): PhysicsInspectorToolBuilder;
	static GetDefaultObject(): PhysicsInspectorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsInspectorToolBuilder;
	static C(Other: UObject | any): PhysicsInspectorToolBuilder;
}

declare class PhysicsInspectorTool extends MultiSelectionMeshEditingTool { 
	VizSettings: CollisionGeometryVisualizationProperties;
	ObjectData: PhysicsObjectToolPropertySet[];
	LineMaterial: MaterialInterface;
	PreviewElements: PreviewGeometry[];
	static Load(ResourceName: string): PhysicsInspectorTool;
	static Find(Outer: UObject, ResourceName: string): PhysicsInspectorTool;
	static GetDefaultObject(): PhysicsInspectorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsInspectorTool;
	static C(Other: UObject | any): PhysicsInspectorTool;
}

declare class SetCollisionGeometryToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SetCollisionGeometryToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SetCollisionGeometryToolBuilder;
	static GetDefaultObject(): SetCollisionGeometryToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetCollisionGeometryToolBuilder;
	static C(Other: UObject | any): SetCollisionGeometryToolBuilder;
}

declare type ECollisionGeometryType = 'KeepExisting' | 'AlignedBoxes' | 'OrientedBoxes' | 'MinimalSpheres' | 'Capsules' | 'ConvexHulls' | 'SweptHulls' | 'LevelSets' | 'MinVolume' | 'None' | 'ECollisionGeometryType_MAX';
declare var ECollisionGeometryType : { KeepExisting:'KeepExisting',AlignedBoxes:'AlignedBoxes',OrientedBoxes:'OrientedBoxes',MinimalSpheres:'MinimalSpheres',Capsules:'Capsules',ConvexHulls:'ConvexHulls',SweptHulls:'SweptHulls',LevelSets:'LevelSets',MinVolume:'MinVolume',None:'None',ECollisionGeometryType_MAX:'ECollisionGeometryType_MAX', };
declare type ESetCollisionGeometryInputMode = 'CombineAll' | 'PerInputObject' | 'PerMeshComponent' | 'PerMeshGroup' | 'ESetCollisionGeometryInputMode_MAX';
declare var ESetCollisionGeometryInputMode : { CombineAll:'CombineAll',PerInputObject:'PerInputObject',PerMeshComponent:'PerMeshComponent',PerMeshGroup:'PerMeshGroup',ESetCollisionGeometryInputMode_MAX:'ESetCollisionGeometryInputMode_MAX', };
declare type EProjectedHullAxis = 'X' | 'Y' | 'Z' | 'SmallestBoxDimension' | 'SmallestVolume' | 'EProjectedHullAxis_MAX';
declare var EProjectedHullAxis : { X:'X',Y:'Y',Z:'Z',SmallestBoxDimension:'SmallestBoxDimension',SmallestVolume:'SmallestVolume',EProjectedHullAxis_MAX:'EProjectedHullAxis_MAX', };
declare class SetCollisionGeometryToolProperties extends InteractiveToolPropertySet { 
	GeometryType: ECollisionGeometryType;
	InputMode: ESetCollisionGeometryInputMode;
	bUseWorldSpace: boolean;
	bRemoveContained: boolean;
	bEnableMaxCount: boolean;
	MaxCount: number;
	MinThickness: number;
	bDetectBoxes: boolean;
	bDetectSpheres: boolean;
	bDetectCapsules: boolean;
	bSimplifyHulls: boolean;
	HullTargetFaceCount: number;
	MaxHullsPerMesh: number;
	ConvexDecompositionSearchFactor: number;
	AddHullsErrorTolerance: number;
	MinPartThickness: number;
	bSimplifyPolygons: boolean;
	HullTolerance: number;
	SweepAxis: EProjectedHullAxis;
	LevelSetResolution: number;
	bAppendToExisting: boolean;
	SetCollisionType: ECollisionGeometryMode;
	static Load(ResourceName: string): SetCollisionGeometryToolProperties;
	static Find(Outer: UObject, ResourceName: string): SetCollisionGeometryToolProperties;
	static GetDefaultObject(): SetCollisionGeometryToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetCollisionGeometryToolProperties;
	static C(Other: UObject | any): SetCollisionGeometryToolProperties;
}

declare class SetCollisionGeometryTool extends MultiSelectionMeshEditingTool { 
	Settings: SetCollisionGeometryToolProperties;
	PolygroupLayerProperties: PolygroupLayersProperties;
	VizSettings: CollisionGeometryVisualizationProperties;
	CollisionProps: PhysicsObjectToolPropertySet;
	LineMaterial: MaterialInterface;
	PreviewGeom: PreviewGeometry;
	static Load(ResourceName: string): SetCollisionGeometryTool;
	static Find(Outer: UObject, ResourceName: string): SetCollisionGeometryTool;
	static GetDefaultObject(): SetCollisionGeometryTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetCollisionGeometryTool;
	static C(Other: UObject | any): SetCollisionGeometryTool;
}

declare class PlaneCutToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): PlaneCutToolBuilder;
	static Find(Outer: UObject, ResourceName: string): PlaneCutToolBuilder;
	static GetDefaultObject(): PlaneCutToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneCutToolBuilder;
	static C(Other: UObject | any): PlaneCutToolBuilder;
}

declare class AcceptOutputProperties extends InteractiveToolPropertySet { 
	bExportSeparatedPiecesAsNewMeshAssets: boolean;
	static Load(ResourceName: string): AcceptOutputProperties;
	static Find(Outer: UObject, ResourceName: string): AcceptOutputProperties;
	static GetDefaultObject(): AcceptOutputProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AcceptOutputProperties;
	static C(Other: UObject | any): AcceptOutputProperties;
}

declare class PlaneCutToolProperties extends InteractiveToolPropertySet { 
	bKeepBothHalves: boolean;
	SpacingBetweenHalves: number;
	bShowPreview: boolean;
	bFillCutHole: boolean;
	bFillSpans: boolean;
	static Load(ResourceName: string): PlaneCutToolProperties;
	static Find(Outer: UObject, ResourceName: string): PlaneCutToolProperties;
	static GetDefaultObject(): PlaneCutToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneCutToolProperties;
	static C(Other: UObject | any): PlaneCutToolProperties;
}

declare class PlaneCutTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: PlaneCutToolProperties;
	AcceptProperties: AcceptOutputProperties;
	Previews: MeshOpPreviewWithBackgroundCompute[];
	MeshesToCut: DynamicMeshReplacementChangeTarget[];
	PlaneMechanic: ConstructionPlaneMechanic;
	static Load(ResourceName: string): PlaneCutTool;
	static Find(Outer: UObject, ResourceName: string): PlaneCutTool;
	static GetDefaultObject(): PlaneCutTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneCutTool;
	FlipPlane(): void;
	Cut(): void;
	static C(Other: UObject | any): PlaneCutTool;
}

declare class PlaneCutOperatorFactory extends UObject { 
	CutTool: PlaneCutTool;
	static Load(ResourceName: string): PlaneCutOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): PlaneCutOperatorFactory;
	static GetDefaultObject(): PlaneCutOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneCutOperatorFactory;
	static C(Other: UObject | any): PlaneCutOperatorFactory;
}

declare class ProjectToTargetToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): ProjectToTargetToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ProjectToTargetToolBuilder;
	static GetDefaultObject(): ProjectToTargetToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProjectToTargetToolBuilder;
	static C(Other: UObject | any): ProjectToTargetToolBuilder;
}

declare type ERemeshSmoothingType = 'Uniform' | 'Cotangent' | 'MeanValue' | 'ERemeshSmoothingType_MAX';
declare var ERemeshSmoothingType : { Uniform:'Uniform',Cotangent:'Cotangent',MeanValue:'MeanValue',ERemeshSmoothingType_MAX:'ERemeshSmoothingType_MAX', };
declare type ERemeshType = 'Standard' | 'FullPass' | 'NormalFlow' | 'ERemeshType_MAX';
declare var ERemeshType : { Standard:'Standard',FullPass:'FullPass',NormalFlow:'NormalFlow',ERemeshType_MAX:'ERemeshType_MAX', };
declare class RemeshMeshToolProperties extends RemeshProperties { 
	TargetTriangleCount: number;
	SmoothingType: ERemeshSmoothingType;
	bDiscardAttributes: boolean;
	bShowGroupColors: boolean;
	RemeshType: ERemeshType;
	RemeshIterations: number;
	MaxRemeshIterations: number;
	ExtraProjectionIterations: number;
	bUseTargetEdgeLength: boolean;
	TargetEdgeLength: number;
	bReproject: boolean;
	bReprojectConstraints: boolean;
	BoundaryCornerAngleThreshold: number;
	static Load(ResourceName: string): RemeshMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): RemeshMeshToolProperties;
	static GetDefaultObject(): RemeshMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemeshMeshToolProperties;
	static C(Other: UObject | any): RemeshMeshToolProperties;
}

declare class ProjectToTargetToolProperties extends RemeshMeshToolProperties { 
	bWorldSpace: boolean;
	bParallel: boolean;
	FaceProjectionPassesPerRemeshIteration: number;
	SurfaceProjectionSpeed: number;
	NormalAlignmentSpeed: number;
	bSmoothInFillAreas: boolean;
	FillAreaDistanceMultiplier: number;
	FillAreaSmoothMultiplier: number;
	static Load(ResourceName: string): ProjectToTargetToolProperties;
	static Find(Outer: UObject, ResourceName: string): ProjectToTargetToolProperties;
	static GetDefaultObject(): ProjectToTargetToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProjectToTargetToolProperties;
	static C(Other: UObject | any): ProjectToTargetToolProperties;
}

declare class RemeshMeshTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: RemeshMeshToolProperties;
	MeshStatisticsProperties: MeshStatisticsProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	MeshElementsDisplay: MeshElementsVisualizer;
	static Load(ResourceName: string): RemeshMeshTool;
	static Find(Outer: UObject, ResourceName: string): RemeshMeshTool;
	static GetDefaultObject(): RemeshMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemeshMeshTool;
	static C(Other: UObject | any): RemeshMeshTool;
}

declare class ProjectToTargetTool extends RemeshMeshTool { 
	static Load(ResourceName: string): ProjectToTargetTool;
	static Find(Outer: UObject, ResourceName: string): ProjectToTargetTool;
	static GetDefaultObject(): ProjectToTargetTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProjectToTargetTool;
	static C(Other: UObject | any): ProjectToTargetTool;
}

declare class MeshAnalysisProperties extends InteractiveToolPropertySet { 
	SurfaceArea: string;
	Volume: string;
	static Load(ResourceName: string): MeshAnalysisProperties;
	static Find(Outer: UObject, ResourceName: string): MeshAnalysisProperties;
	static GetDefaultObject(): MeshAnalysisProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshAnalysisProperties;
	static C(Other: UObject | any): MeshAnalysisProperties;
}

declare class RemeshMeshToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): RemeshMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): RemeshMeshToolBuilder;
	static GetDefaultObject(): RemeshMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemeshMeshToolBuilder;
	static C(Other: UObject | any): RemeshMeshToolBuilder;
}

declare class RemoveOccludedTrianglesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): RemoveOccludedTrianglesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): RemoveOccludedTrianglesToolBuilder;
	static GetDefaultObject(): RemoveOccludedTrianglesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveOccludedTrianglesToolBuilder;
	static C(Other: UObject | any): RemoveOccludedTrianglesToolBuilder;
}

declare type EOcclusionCalculationUIMode = 'GeneralizedWindingNumber' | 'RaycastOcclusionSamples' | 'EOcclusionCalculationUIMode_MAX';
declare var EOcclusionCalculationUIMode : { GeneralizedWindingNumber:'GeneralizedWindingNumber',RaycastOcclusionSamples:'RaycastOcclusionSamples',EOcclusionCalculationUIMode_MAX:'EOcclusionCalculationUIMode_MAX', };
declare type EOcclusionTriangleSamplingUIMode = 'Vertices' | 'VerticesAndCentroids' | 'EOcclusionTriangleSamplingUIMode_MAX';
declare var EOcclusionTriangleSamplingUIMode : { Vertices:'Vertices',VerticesAndCentroids:'VerticesAndCentroids',EOcclusionTriangleSamplingUIMode_MAX:'EOcclusionTriangleSamplingUIMode_MAX', };
declare type EOccludedAction = 'Remove' | 'SetNewGroup' | 'EOccludedAction_MAX';
declare var EOccludedAction : { Remove:'Remove',SetNewGroup:'SetNewGroup',EOccludedAction_MAX:'EOccludedAction_MAX', };
declare class RemoveOccludedTrianglesToolProperties extends InteractiveToolPropertySet { 
	OcclusionTestMethod: EOcclusionCalculationUIMode;
	TriangleSampling: EOcclusionTriangleSamplingUIMode;
	WindingIsoValue: number;
	AddRandomRays: number;
	AddTriangleSamples: number;
	bOnlySelfOcclude: boolean;
	ShrinkRemoval: number;
	MinAreaIsland: number;
	MinTriCountIsland: number;
	Action: EOccludedAction;
	static Load(ResourceName: string): RemoveOccludedTrianglesToolProperties;
	static Find(Outer: UObject, ResourceName: string): RemoveOccludedTrianglesToolProperties;
	static GetDefaultObject(): RemoveOccludedTrianglesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveOccludedTrianglesToolProperties;
	static C(Other: UObject | any): RemoveOccludedTrianglesToolProperties;
}

declare class RemoveOccludedTrianglesAdvancedProperties extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): RemoveOccludedTrianglesAdvancedProperties;
	static Find(Outer: UObject, ResourceName: string): RemoveOccludedTrianglesAdvancedProperties;
	static GetDefaultObject(): RemoveOccludedTrianglesAdvancedProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveOccludedTrianglesAdvancedProperties;
	static C(Other: UObject | any): RemoveOccludedTrianglesAdvancedProperties;
}

declare class RemoveOccludedTrianglesTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: RemoveOccludedTrianglesToolProperties;
	PolygroupLayersProperties: PolygroupLayersProperties;
	AdvancedProperties: RemoveOccludedTrianglesAdvancedProperties;
	Previews: MeshOpPreviewWithBackgroundCompute[];
	PreviewCopies: PreviewMesh[];
	static Load(ResourceName: string): RemoveOccludedTrianglesTool;
	static Find(Outer: UObject, ResourceName: string): RemoveOccludedTrianglesTool;
	static GetDefaultObject(): RemoveOccludedTrianglesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveOccludedTrianglesTool;
	static C(Other: UObject | any): RemoveOccludedTrianglesTool;
}

declare class RemoveOccludedTrianglesOperatorFactory extends UObject { 
	Tool: RemoveOccludedTrianglesTool;
	static Load(ResourceName: string): RemoveOccludedTrianglesOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): RemoveOccludedTrianglesOperatorFactory;
	static GetDefaultObject(): RemoveOccludedTrianglesOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveOccludedTrianglesOperatorFactory;
	static C(Other: UObject | any): RemoveOccludedTrianglesOperatorFactory;
}

declare class RevolveBoundaryToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): RevolveBoundaryToolBuilder;
	static Find(Outer: UObject, ResourceName: string): RevolveBoundaryToolBuilder;
	static GetDefaultObject(): RevolveBoundaryToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RevolveBoundaryToolBuilder;
	static C(Other: UObject | any): RevolveBoundaryToolBuilder;
}

declare class RevolveBoundaryToolProperties extends RevolveProperties { 
	CapFillMode: ERevolvePropertiesCapFillMode;
	bDisplayInputMesh: boolean;
	AxisOrigin: Vector;
	AxisOrientation: Vector2D;
	static Load(ResourceName: string): RevolveBoundaryToolProperties;
	static Find(Outer: UObject, ResourceName: string): RevolveBoundaryToolProperties;
	static GetDefaultObject(): RevolveBoundaryToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RevolveBoundaryToolProperties;
	static C(Other: UObject | any): RevolveBoundaryToolProperties;
}

declare class RevolveBoundaryTool extends MeshBoundaryToolBase { 
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	Settings: RevolveBoundaryToolProperties;
	MaterialProperties: NewMeshMaterialProperties;
	PlaneMechanic: ConstructionPlaneMechanic;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): RevolveBoundaryTool;
	static Find(Outer: UObject, ResourceName: string): RevolveBoundaryTool;
	static GetDefaultObject(): RevolveBoundaryTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RevolveBoundaryTool;
	static C(Other: UObject | any): RevolveBoundaryTool;
}

declare class RevolveBoundaryOperatorFactory extends UObject { 
	RevolveBoundaryTool: RevolveBoundaryTool;
	static Load(ResourceName: string): RevolveBoundaryOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): RevolveBoundaryOperatorFactory;
	static GetDefaultObject(): RevolveBoundaryOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RevolveBoundaryOperatorFactory;
	static C(Other: UObject | any): RevolveBoundaryOperatorFactory;
}

declare class SeamSculptToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): SeamSculptToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SeamSculptToolBuilder;
	static GetDefaultObject(): SeamSculptToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SeamSculptToolBuilder;
	static C(Other: UObject | any): SeamSculptToolBuilder;
}

declare class SeamSculptToolProperties extends InteractiveToolPropertySet { 
	bShowWireframe: boolean;
	bHitBackFaces: boolean;
	static Load(ResourceName: string): SeamSculptToolProperties;
	static Find(Outer: UObject, ResourceName: string): SeamSculptToolProperties;
	static GetDefaultObject(): SeamSculptToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SeamSculptToolProperties;
	static C(Other: UObject | any): SeamSculptToolProperties;
}

declare class SeamSculptTool extends DynamicMeshBrushTool { 
	Settings: SeamSculptToolProperties;
	PreviewGeom: PreviewGeometry;
	static Load(ResourceName: string): SeamSculptTool;
	static Find(Outer: UObject, ResourceName: string): SeamSculptTool;
	static GetDefaultObject(): SeamSculptTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SeamSculptTool;
	static C(Other: UObject | any): SeamSculptTool;
}

declare class SelfUnionMeshesToolProperties extends InteractiveToolPropertySet { 
	bTrimFlaps: boolean;
	bTryFixHoles: boolean;
	bTryCollapseEdges: boolean;
	WindingThreshold: number;
	bShowNewBoundaryEdges: boolean;
	bOnlyUseFirstMeshMaterials: boolean;
	static Load(ResourceName: string): SelfUnionMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): SelfUnionMeshesToolProperties;
	static GetDefaultObject(): SelfUnionMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelfUnionMeshesToolProperties;
	static C(Other: UObject | any): SelfUnionMeshesToolProperties;
}

declare class SelfUnionMeshesTool extends BaseCreateFromSelectedTool { 
	Properties: SelfUnionMeshesToolProperties;
	DrawnLineSet: LineSetComponent;
	static Load(ResourceName: string): SelfUnionMeshesTool;
	static Find(Outer: UObject, ResourceName: string): SelfUnionMeshesTool;
	static GetDefaultObject(): SelfUnionMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelfUnionMeshesTool;
	static C(Other: UObject | any): SelfUnionMeshesTool;
}

declare class SelfUnionMeshesToolBuilder extends BaseCreateFromSelectedToolBuilder { 
	static Load(ResourceName: string): SelfUnionMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SelfUnionMeshesToolBuilder;
	static GetDefaultObject(): SelfUnionMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelfUnionMeshesToolBuilder;
	static C(Other: UObject | any): SelfUnionMeshesToolBuilder;
}

declare class SkinWeightsBindingToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SkinWeightsBindingToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsBindingToolBuilder;
	static GetDefaultObject(): SkinWeightsBindingToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsBindingToolBuilder;
	static C(Other: UObject | any): SkinWeightsBindingToolBuilder;
}

declare type ESkinWeightsBindType = 'DirectDistance' | 'GeodesicVoxel' | 'ESkinWeightsBindType_MAX';
declare var ESkinWeightsBindType : { DirectDistance:'DirectDistance',GeodesicVoxel:'GeodesicVoxel',ESkinWeightsBindType_MAX:'ESkinWeightsBindType_MAX', };
declare class SkinWeightsBindingToolProperties extends InteractiveToolPropertySet { 
	CurrentBone: BoneReference;
	BindingType: ESkinWeightsBindType;
	Stiffness: number;
	MaxInfluences: number;
	VoxelResolution: number;
	static Load(ResourceName: string): SkinWeightsBindingToolProperties;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsBindingToolProperties;
	static GetDefaultObject(): SkinWeightsBindingToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsBindingToolProperties;
	static C(Other: UObject | any): SkinWeightsBindingToolProperties;
}

declare class SkinWeightsBindingTool extends MultiSelectionMeshEditingTool { 
	Properties: SkinWeightsBindingToolProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): SkinWeightsBindingTool;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsBindingTool;
	static GetDefaultObject(): SkinWeightsBindingTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsBindingTool;
	static C(Other: UObject | any): SkinWeightsBindingTool;
}

declare class SkinWeightsPaintToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): SkinWeightsPaintToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsPaintToolBuilder;
	static GetDefaultObject(): SkinWeightsPaintToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsPaintToolBuilder;
	static C(Other: UObject | any): SkinWeightsPaintToolBuilder;
}

declare class SkinWeightsPaintToolProperties extends InteractiveToolPropertySet { 
	CurrentBone: BoneReference;
	static Load(ResourceName: string): SkinWeightsPaintToolProperties;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsPaintToolProperties;
	static GetDefaultObject(): SkinWeightsPaintToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsPaintToolProperties;
	static C(Other: UObject | any): SkinWeightsPaintToolProperties;
}

declare class SkinWeightsPaintTool extends DynamicMeshBrushTool { 
	ToolProps: SkinWeightsPaintToolProperties;
	static Load(ResourceName: string): SkinWeightsPaintTool;
	static Find(Outer: UObject, ResourceName: string): SkinWeightsPaintTool;
	static GetDefaultObject(): SkinWeightsPaintTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkinWeightsPaintTool;
	static C(Other: UObject | any): SkinWeightsPaintTool;
}

declare type ESmoothMeshToolSmoothType = 'Iterative' | 'Implicit' | 'Diffusion' | 'ESmoothMeshToolSmoothType_MAX';
declare var ESmoothMeshToolSmoothType : { Iterative:'Iterative',Implicit:'Implicit',Diffusion:'Diffusion',ESmoothMeshToolSmoothType_MAX:'ESmoothMeshToolSmoothType_MAX', };
declare class SmoothMeshToolProperties extends InteractiveToolPropertySet { 
	SmoothingType: ESmoothMeshToolSmoothType;
	static Load(ResourceName: string): SmoothMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): SmoothMeshToolProperties;
	static GetDefaultObject(): SmoothMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothMeshToolProperties;
	static C(Other: UObject | any): SmoothMeshToolProperties;
}

declare class IterativeSmoothProperties extends InteractiveToolPropertySet { 
	SmoothingPerStep: number;
	Steps: number;
	bSmoothBoundary: boolean;
	static Load(ResourceName: string): IterativeSmoothProperties;
	static Find(Outer: UObject, ResourceName: string): IterativeSmoothProperties;
	static GetDefaultObject(): IterativeSmoothProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IterativeSmoothProperties;
	static C(Other: UObject | any): IterativeSmoothProperties;
}

declare class DiffusionSmoothProperties extends InteractiveToolPropertySet { 
	SmoothingPerStep: number;
	Steps: number;
	bPreserveUVs: boolean;
	static Load(ResourceName: string): DiffusionSmoothProperties;
	static Find(Outer: UObject, ResourceName: string): DiffusionSmoothProperties;
	static GetDefaultObject(): DiffusionSmoothProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DiffusionSmoothProperties;
	static C(Other: UObject | any): DiffusionSmoothProperties;
}

declare class ImplicitSmoothProperties extends InteractiveToolPropertySet { 
	SmoothSpeed: number;
	Smoothness: number;
	bPreserveUVs: boolean;
	VolumeCorrection: number;
	static Load(ResourceName: string): ImplicitSmoothProperties;
	static Find(Outer: UObject, ResourceName: string): ImplicitSmoothProperties;
	static GetDefaultObject(): ImplicitSmoothProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImplicitSmoothProperties;
	static C(Other: UObject | any): ImplicitSmoothProperties;
}

declare class SmoothWeightMapSetProperties extends WeightMapSetProperties { 
	MinSmoothMultiplier: number;
	static Load(ResourceName: string): SmoothWeightMapSetProperties;
	static Find(Outer: UObject, ResourceName: string): SmoothWeightMapSetProperties;
	static GetDefaultObject(): SmoothWeightMapSetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothWeightMapSetProperties;
	static C(Other: UObject | any): SmoothWeightMapSetProperties;
}

declare class SmoothMeshTool extends BaseMeshProcessingTool { 
	SmoothProperties: SmoothMeshToolProperties;
	IterativeProperties: IterativeSmoothProperties;
	DiffusionProperties: DiffusionSmoothProperties;
	ImplicitProperties: ImplicitSmoothProperties;
	WeightMapProperties: SmoothWeightMapSetProperties;
	static Load(ResourceName: string): SmoothMeshTool;
	static Find(Outer: UObject, ResourceName: string): SmoothMeshTool;
	static GetDefaultObject(): SmoothMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothMeshTool;
	static C(Other: UObject | any): SmoothMeshTool;
}

declare class SmoothMeshToolBuilder extends BaseMeshProcessingToolBuilder { 
	static Load(ResourceName: string): SmoothMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SmoothMeshToolBuilder;
	static GetDefaultObject(): SmoothMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmoothMeshToolBuilder;
	static C(Other: UObject | any): SmoothMeshToolBuilder;
}

declare class SplitMeshesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SplitMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SplitMeshesToolBuilder;
	static GetDefaultObject(): SplitMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitMeshesToolBuilder;
	static C(Other: UObject | any): SplitMeshesToolBuilder;
}

declare class SplitMeshesToolProperties extends InteractiveToolPropertySet { 
	bTransferMaterials: boolean;
	static Load(ResourceName: string): SplitMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): SplitMeshesToolProperties;
	static GetDefaultObject(): SplitMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitMeshesToolProperties;
	static C(Other: UObject | any): SplitMeshesToolProperties;
}

declare class SplitMeshesTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: SplitMeshesToolProperties;
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	static Load(ResourceName: string): SplitMeshesTool;
	static Find(Outer: UObject, ResourceName: string): SplitMeshesTool;
	static GetDefaultObject(): SplitMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitMeshesTool;
	static C(Other: UObject | any): SplitMeshesTool;
}

declare class TransferMeshToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): TransferMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): TransferMeshToolBuilder;
	static GetDefaultObject(): TransferMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransferMeshToolBuilder;
	static C(Other: UObject | any): TransferMeshToolBuilder;
}

declare class TransferMeshToolProperties extends InteractiveToolPropertySet { 
	bTransferMaterials: boolean;
	SourceLOD: string;
	TargetLod: string;
	bIsStaticMeshSource: boolean;
	SourceLODNamesList: string[];
	TargetLODNamesList: string[];
	bIsStaticMeshTarget: boolean;
	static Load(ResourceName: string): TransferMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): TransferMeshToolProperties;
	static GetDefaultObject(): TransferMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransferMeshToolProperties;
	GetTargetLODNamesFunc(): string[];
	GetSourceLODNamesFunc(): string[];
	static C(Other: UObject | any): TransferMeshToolProperties;
}

declare class TransferMeshTool extends MultiSelectionMeshEditingTool { 
	BasicProperties: TransferMeshToolProperties;
	static Load(ResourceName: string): TransferMeshTool;
	static Find(Outer: UObject, ResourceName: string): TransferMeshTool;
	static GetDefaultObject(): TransferMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransferMeshTool;
	static C(Other: UObject | any): TransferMeshTool;
}

declare class TransformMeshesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): TransformMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): TransformMeshesToolBuilder;
	static GetDefaultObject(): TransformMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransformMeshesToolBuilder;
	static C(Other: UObject | any): TransformMeshesToolBuilder;
}

declare type ETransformMeshesTransformMode = 'SharedGizmo' | 'SharedGizmoLocal' | 'PerObjectGizmo' | 'LastValue' | 'ETransformMeshesTransformMode_MAX';
declare var ETransformMeshesTransformMode : { SharedGizmo:'SharedGizmo',SharedGizmoLocal:'SharedGizmoLocal',PerObjectGizmo:'PerObjectGizmo',LastValue:'LastValue',ETransformMeshesTransformMode_MAX:'ETransformMeshesTransformMode_MAX', };
declare type ETransformMeshesSnapDragSource = 'ClickPoint' | 'Pivot' | 'LastValue' | 'ETransformMeshesSnapDragSource_MAX';
declare var ETransformMeshesSnapDragSource : { ClickPoint:'ClickPoint',Pivot:'Pivot',LastValue:'LastValue',ETransformMeshesSnapDragSource_MAX:'ETransformMeshesSnapDragSource_MAX', };
declare type ETransformMeshesSnapDragRotationMode = 'Ignore' | 'Align' | 'AlignFlipped' | 'LastValue' | 'ETransformMeshesSnapDragRotationMode_MAX';
declare var ETransformMeshesSnapDragRotationMode : { Ignore:'Ignore',Align:'Align',AlignFlipped:'AlignFlipped',LastValue:'LastValue',ETransformMeshesSnapDragRotationMode_MAX:'ETransformMeshesSnapDragRotationMode_MAX', };
declare class TransformMeshesToolProperties extends InteractiveToolPropertySet { 
	TransformMode: ETransformMeshesTransformMode;
	bApplyToInstances: boolean;
	bSetPivotMode: boolean;
	bEnableSnapDragging: boolean;
	SnapDragSource: ETransformMeshesSnapDragSource;
	RotationMode: ETransformMeshesSnapDragRotationMode;
	bHaveInstances: boolean;
	static Load(ResourceName: string): TransformMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): TransformMeshesToolProperties;
	static GetDefaultObject(): TransformMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransformMeshesToolProperties;
	static C(Other: UObject | any): TransformMeshesToolProperties;
}

declare class TransformMeshesTarget { 
	TransformProxy: TransformProxy;
	TransformGizmo: CombinedTransformGizmo;
	clone() : TransformMeshesTarget;
	static C(Other: UObject | any): TransformMeshesTarget;
}

declare class TransformMeshesTool extends MultiSelectionMeshEditingTool { 
	TransformProps: TransformMeshesToolProperties;
	ActiveGizmos: TransformMeshesTarget[];
	DragAlignmentMechanic: DragAlignmentMechanic;
	static Load(ResourceName: string): TransformMeshesTool;
	static Find(Outer: UObject, ResourceName: string): TransformMeshesTool;
	static GetDefaultObject(): TransformMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransformMeshesTool;
	static C(Other: UObject | any): TransformMeshesTool;
}

declare class VolumeToMeshToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): VolumeToMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VolumeToMeshToolBuilder;
	static GetDefaultObject(): VolumeToMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumeToMeshToolBuilder;
	static C(Other: UObject | any): VolumeToMeshToolBuilder;
}

declare class VolumeToMeshToolProperties extends InteractiveToolPropertySet { 
	bWeldEdges: boolean;
	bAutoRepair: boolean;
	bOptimizeMesh: boolean;
	bShowWireframe: boolean;
	static Load(ResourceName: string): VolumeToMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): VolumeToMeshToolProperties;
	static GetDefaultObject(): VolumeToMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumeToMeshToolProperties;
	static C(Other: UObject | any): VolumeToMeshToolProperties;
}

declare class VolumeToMeshTool extends InteractiveTool { 
	Settings: VolumeToMeshToolProperties;
	OutputTypeProperties: CreateMeshObjectTypeProperties;
	PreviewMesh: PreviewMesh;
	TargetVolume: Volume;
	VolumeEdgesSet: LineSetComponent;
	static Load(ResourceName: string): VolumeToMeshTool;
	static Find(Outer: UObject, ResourceName: string): VolumeToMeshTool;
	static GetDefaultObject(): VolumeToMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumeToMeshTool;
	static C(Other: UObject | any): VolumeToMeshTool;
}

declare type EVoxelBlendOperation = 'Union' | 'Subtract' | 'EVoxelBlendOperation_MAX';
declare var EVoxelBlendOperation : { Union:'Union',Subtract:'Subtract',EVoxelBlendOperation_MAX:'EVoxelBlendOperation_MAX', };
declare class VoxelBlendMeshesToolProperties extends InteractiveToolPropertySet { 
	BlendPower: number;
	BlendFalloff: number;
	Operation: EVoxelBlendOperation;
	bVoxWrap: boolean;
	bRemoveInternalsAfterVoxWrap: boolean;
	ThickenShells: number;
	static Load(ResourceName: string): VoxelBlendMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): VoxelBlendMeshesToolProperties;
	static GetDefaultObject(): VoxelBlendMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelBlendMeshesToolProperties;
	static C(Other: UObject | any): VoxelBlendMeshesToolProperties;
}

declare class VoxelBlendMeshesTool extends BaseVoxelTool { 
	BlendProperties: VoxelBlendMeshesToolProperties;
	static Load(ResourceName: string): VoxelBlendMeshesTool;
	static Find(Outer: UObject, ResourceName: string): VoxelBlendMeshesTool;
	static GetDefaultObject(): VoxelBlendMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelBlendMeshesTool;
	static C(Other: UObject | any): VoxelBlendMeshesTool;
}

declare class VoxelBlendMeshesToolBuilder extends BaseCreateFromSelectedToolBuilder { 
	static Load(ResourceName: string): VoxelBlendMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VoxelBlendMeshesToolBuilder;
	static GetDefaultObject(): VoxelBlendMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelBlendMeshesToolBuilder;
	static C(Other: UObject | any): VoxelBlendMeshesToolBuilder;
}

declare type EMorphologyOperation = 'Dilate' | 'Contract' | 'Close' | 'Open' | 'EMorphologyOperation_MAX';
declare var EMorphologyOperation : { Dilate:'Dilate',Contract:'Contract',Close:'Close',Open:'Open',EMorphologyOperation_MAX:'EMorphologyOperation_MAX', };
declare class VoxelMorphologyMeshesToolProperties extends InteractiveToolPropertySet { 
	Operation: EMorphologyOperation;
	Distance: number;
	bVoxWrap: boolean;
	bRemoveInternalsAfterVoxWrap: boolean;
	ThickenShells: number;
	static Load(ResourceName: string): VoxelMorphologyMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): VoxelMorphologyMeshesToolProperties;
	static GetDefaultObject(): VoxelMorphologyMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelMorphologyMeshesToolProperties;
	static C(Other: UObject | any): VoxelMorphologyMeshesToolProperties;
}

declare class VoxelMorphologyMeshesTool extends BaseVoxelTool { 
	MorphologyProperties: VoxelMorphologyMeshesToolProperties;
	static Load(ResourceName: string): VoxelMorphologyMeshesTool;
	static Find(Outer: UObject, ResourceName: string): VoxelMorphologyMeshesTool;
	static GetDefaultObject(): VoxelMorphologyMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelMorphologyMeshesTool;
	static C(Other: UObject | any): VoxelMorphologyMeshesTool;
}

declare class VoxelMorphologyMeshesToolBuilder extends BaseCreateFromSelectedToolBuilder { 
	static Load(ResourceName: string): VoxelMorphologyMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VoxelMorphologyMeshesToolBuilder;
	static GetDefaultObject(): VoxelMorphologyMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelMorphologyMeshesToolBuilder;
	static C(Other: UObject | any): VoxelMorphologyMeshesToolBuilder;
}

declare class VoxelSolidifyMeshesToolProperties extends InteractiveToolPropertySet { 
	WindingThreshold: number;
	ExtendBounds: number;
	SurfaceSearchSteps: number;
	bSolidAtBoundaries: boolean;
	bApplyThickenShells: boolean;
	ThickenShells: number;
	static Load(ResourceName: string): VoxelSolidifyMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): VoxelSolidifyMeshesToolProperties;
	static GetDefaultObject(): VoxelSolidifyMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelSolidifyMeshesToolProperties;
	static C(Other: UObject | any): VoxelSolidifyMeshesToolProperties;
}

declare class VoxelSolidifyMeshesTool extends BaseVoxelTool { 
	SolidifyProperties: VoxelSolidifyMeshesToolProperties;
	static Load(ResourceName: string): VoxelSolidifyMeshesTool;
	static Find(Outer: UObject, ResourceName: string): VoxelSolidifyMeshesTool;
	static GetDefaultObject(): VoxelSolidifyMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelSolidifyMeshesTool;
	static C(Other: UObject | any): VoxelSolidifyMeshesTool;
}

declare class VoxelSolidifyMeshesToolBuilder extends BaseCreateFromSelectedToolBuilder { 
	static Load(ResourceName: string): VoxelSolidifyMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VoxelSolidifyMeshesToolBuilder;
	static GetDefaultObject(): VoxelSolidifyMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelSolidifyMeshesToolBuilder;
	static C(Other: UObject | any): VoxelSolidifyMeshesToolBuilder;
}

declare class WeldMeshEdgesToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): WeldMeshEdgesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): WeldMeshEdgesToolBuilder;
	static GetDefaultObject(): WeldMeshEdgesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WeldMeshEdgesToolBuilder;
	static C(Other: UObject | any): WeldMeshEdgesToolBuilder;
}

declare class WeldMeshEdgesToolProperties extends InteractiveToolPropertySet { 
	Tolerance: number;
	bOnlyUnique: boolean;
	bResolveTJunctions: boolean;
	InitialEdges: number;
	RemainingEdges: number;
	static Load(ResourceName: string): WeldMeshEdgesToolProperties;
	static Find(Outer: UObject, ResourceName: string): WeldMeshEdgesToolProperties;
	static GetDefaultObject(): WeldMeshEdgesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WeldMeshEdgesToolProperties;
	static C(Other: UObject | any): WeldMeshEdgesToolProperties;
}

declare class WeldMeshEdgesTool extends SingleSelectionMeshEditingTool { 
	Settings: WeldMeshEdgesToolProperties;
	PreviewCompute: MeshOpPreviewWithBackgroundCompute;
	MeshElementsDisplay: MeshElementsVisualizer;
	OperatorFactory: WeldMeshEdgesOperatorFactory;
	static Load(ResourceName: string): WeldMeshEdgesTool;
	static Find(Outer: UObject, ResourceName: string): WeldMeshEdgesTool;
	static GetDefaultObject(): WeldMeshEdgesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WeldMeshEdgesTool;
	static C(Other: UObject | any): WeldMeshEdgesTool;
}

declare class WeldMeshEdgesOperatorFactory extends UObject { 
	WeldMeshEdgesTool: WeldMeshEdgesTool;
	static Load(ResourceName: string): WeldMeshEdgesOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): WeldMeshEdgesOperatorFactory;
	static GetDefaultObject(): WeldMeshEdgesOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WeldMeshEdgesOperatorFactory;
	static C(Other: UObject | any): WeldMeshEdgesOperatorFactory;
}

declare class EditorModelingObjectsCreationAPI extends ModelingObjectsCreationAPI { 
	static Load(ResourceName: string): EditorModelingObjectsCreationAPI;
	static Find(Outer: UObject, ResourceName: string): EditorModelingObjectsCreationAPI;
	static GetDefaultObject(): EditorModelingObjectsCreationAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorModelingObjectsCreationAPI;
	static C(Other: UObject | any): EditorModelingObjectsCreationAPI;
}

declare class DynamicMeshComponentToolTarget extends PrimitiveComponentToolTarget { 
	static Load(ResourceName: string): DynamicMeshComponentToolTarget;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshComponentToolTarget;
	static GetDefaultObject(): DynamicMeshComponentToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshComponentToolTarget;
	static C(Other: UObject | any): DynamicMeshComponentToolTarget;
}

declare class DynamicMeshComponentToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): DynamicMeshComponentToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): DynamicMeshComponentToolTargetFactory;
	static GetDefaultObject(): DynamicMeshComponentToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicMeshComponentToolTargetFactory;
	static C(Other: UObject | any): DynamicMeshComponentToolTargetFactory;
}

declare class SkeletalMeshComponentReadOnlyToolTarget extends PrimitiveComponentToolTarget { 
	static Load(ResourceName: string): SkeletalMeshComponentReadOnlyToolTarget;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshComponentReadOnlyToolTarget;
	static GetDefaultObject(): SkeletalMeshComponentReadOnlyToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshComponentReadOnlyToolTarget;
	static C(Other: UObject | any): SkeletalMeshComponentReadOnlyToolTarget;
}

declare class SkeletalMeshComponentToolTarget extends SkeletalMeshComponentReadOnlyToolTarget { 
	static Load(ResourceName: string): SkeletalMeshComponentToolTarget;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshComponentToolTarget;
	static GetDefaultObject(): SkeletalMeshComponentToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshComponentToolTarget;
	static C(Other: UObject | any): SkeletalMeshComponentToolTarget;
}

declare class SkeletalMeshComponentReadOnlyToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): SkeletalMeshComponentReadOnlyToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshComponentReadOnlyToolTargetFactory;
	static GetDefaultObject(): SkeletalMeshComponentReadOnlyToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshComponentReadOnlyToolTargetFactory;
	static C(Other: UObject | any): SkeletalMeshComponentReadOnlyToolTargetFactory;
}

declare class SkeletalMeshComponentToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): SkeletalMeshComponentToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshComponentToolTargetFactory;
	static GetDefaultObject(): SkeletalMeshComponentToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshComponentToolTargetFactory;
	static C(Other: UObject | any): SkeletalMeshComponentToolTargetFactory;
}

declare class SkeletalMeshReadOnlyToolTarget extends ToolTarget { 
	static Load(ResourceName: string): SkeletalMeshReadOnlyToolTarget;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshReadOnlyToolTarget;
	static GetDefaultObject(): SkeletalMeshReadOnlyToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshReadOnlyToolTarget;
	static C(Other: UObject | any): SkeletalMeshReadOnlyToolTarget;
}

declare class SkeletalMeshToolTarget extends SkeletalMeshReadOnlyToolTarget { 
	static Load(ResourceName: string): SkeletalMeshToolTarget;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshToolTarget;
	static GetDefaultObject(): SkeletalMeshToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshToolTarget;
	static C(Other: UObject | any): SkeletalMeshToolTarget;
}

declare class SkeletalMeshReadOnlyToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): SkeletalMeshReadOnlyToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshReadOnlyToolTargetFactory;
	static GetDefaultObject(): SkeletalMeshReadOnlyToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshReadOnlyToolTargetFactory;
	static C(Other: UObject | any): SkeletalMeshReadOnlyToolTargetFactory;
}

declare class SkeletalMeshToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): SkeletalMeshToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshToolTargetFactory;
	static GetDefaultObject(): SkeletalMeshToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshToolTargetFactory;
	static C(Other: UObject | any): SkeletalMeshToolTargetFactory;
}

declare class StaticMeshComponentToolTarget extends PrimitiveComponentToolTarget { 
	static Load(ResourceName: string): StaticMeshComponentToolTarget;
	static Find(Outer: UObject, ResourceName: string): StaticMeshComponentToolTarget;
	static GetDefaultObject(): StaticMeshComponentToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshComponentToolTarget;
	static C(Other: UObject | any): StaticMeshComponentToolTarget;
}

declare class StaticMeshComponentToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): StaticMeshComponentToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): StaticMeshComponentToolTargetFactory;
	static GetDefaultObject(): StaticMeshComponentToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshComponentToolTargetFactory;
	static C(Other: UObject | any): StaticMeshComponentToolTargetFactory;
}

declare class StaticMeshToolTarget extends ToolTarget { 
	static Load(ResourceName: string): StaticMeshToolTarget;
	static Find(Outer: UObject, ResourceName: string): StaticMeshToolTarget;
	static GetDefaultObject(): StaticMeshToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshToolTarget;
	static C(Other: UObject | any): StaticMeshToolTarget;
}

declare class StaticMeshToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): StaticMeshToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): StaticMeshToolTargetFactory;
	static GetDefaultObject(): StaticMeshToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshToolTargetFactory;
	static C(Other: UObject | any): StaticMeshToolTargetFactory;
}

declare class VolumeComponentToolTarget extends PrimitiveComponentToolTarget { 
	static Load(ResourceName: string): VolumeComponentToolTarget;
	static Find(Outer: UObject, ResourceName: string): VolumeComponentToolTarget;
	static GetDefaultObject(): VolumeComponentToolTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumeComponentToolTarget;
	static C(Other: UObject | any): VolumeComponentToolTarget;
}

declare class VolumeComponentToolTargetFactory extends ToolTargetFactory { 
	static Load(ResourceName: string): VolumeComponentToolTargetFactory;
	static Find(Outer: UObject, ResourceName: string): VolumeComponentToolTargetFactory;
	static GetDefaultObject(): VolumeComponentToolTargetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumeComponentToolTargetFactory;
	static C(Other: UObject | any): VolumeComponentToolTargetFactory;
}

declare type EParameterizeMeshUVMethod = 'PatchBuilder' | 'UVAtlas' | 'XAtlas' | 'EParameterizeMeshUVMethod_MAX';
declare var EParameterizeMeshUVMethod : { PatchBuilder:'PatchBuilder',UVAtlas:'UVAtlas',XAtlas:'XAtlas',EParameterizeMeshUVMethod_MAX:'EParameterizeMeshUVMethod_MAX', };
declare class ParameterizeMeshToolProperties extends InteractiveToolPropertySet { 
	Method: EParameterizeMeshUVMethod;
	static Load(ResourceName: string): ParameterizeMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolProperties;
	static GetDefaultObject(): ParameterizeMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolProperties;
	static C(Other: UObject | any): ParameterizeMeshToolProperties;
}

declare class ParameterizeMeshToolUVAtlasProperties extends InteractiveToolPropertySet { 
	IslandStretch: number;
	NumIslands: number;
	TextureResolution: number;
	static Load(ResourceName: string): ParameterizeMeshToolUVAtlasProperties;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolUVAtlasProperties;
	static GetDefaultObject(): ParameterizeMeshToolUVAtlasProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolUVAtlasProperties;
	static C(Other: UObject | any): ParameterizeMeshToolUVAtlasProperties;
}

declare class ParameterizeMeshToolXAtlasProperties extends InteractiveToolPropertySet { 
	MaxIterations: number;
	static Load(ResourceName: string): ParameterizeMeshToolXAtlasProperties;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolXAtlasProperties;
	static GetDefaultObject(): ParameterizeMeshToolXAtlasProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolXAtlasProperties;
	static C(Other: UObject | any): ParameterizeMeshToolXAtlasProperties;
}

declare class ParameterizeMeshToolPatchBuilderProperties extends InteractiveToolPropertySet { 
	InitialPatches: number;
	CurvatureAlignment: number;
	MergingDistortionThreshold: number;
	MergingAngleThreshold: number;
	SmoothingSteps: number;
	SmoothingAlpha: number;
	bRepack: boolean;
	TextureResolution: number;
	static Load(ResourceName: string): ParameterizeMeshToolPatchBuilderProperties;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolPatchBuilderProperties;
	static GetDefaultObject(): ParameterizeMeshToolPatchBuilderProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolPatchBuilderProperties;
	static C(Other: UObject | any): ParameterizeMeshToolPatchBuilderProperties;
}

declare class ParameterizeMeshOperatorFactory extends UObject { 
	Settings: ParameterizeMeshToolProperties;
	UVAtlasProperties: ParameterizeMeshToolUVAtlasProperties;
	XAtlasProperties: ParameterizeMeshToolXAtlasProperties;
	PatchBuilderProperties: ParameterizeMeshToolPatchBuilderProperties;
	static Load(ResourceName: string): ParameterizeMeshOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshOperatorFactory;
	static GetDefaultObject(): ParameterizeMeshOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshOperatorFactory;
	static C(Other: UObject | any): ParameterizeMeshOperatorFactory;
}

declare class ISMEditorToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): ISMEditorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ISMEditorToolBuilder;
	static GetDefaultObject(): ISMEditorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorToolBuilder;
	static C(Other: UObject | any): ISMEditorToolBuilder;
}

declare type EISMEditorTransformMode = 'SharedGizmo' | 'SharedGizmoLocal' | 'PerObjectGizmo' | 'LastValue' | 'EISMEditorTransformMode_MAX';
declare var EISMEditorTransformMode : { SharedGizmo:'SharedGizmo',SharedGizmoLocal:'SharedGizmoLocal',PerObjectGizmo:'PerObjectGizmo',LastValue:'LastValue',EISMEditorTransformMode_MAX:'EISMEditorTransformMode_MAX', };
declare class ISMEditorToolProperties extends InteractiveToolPropertySet { 
	TransformMode: EISMEditorTransformMode;
	bSetPivotMode: boolean;
	bShowSelectable: boolean;
	bShowSelected: boolean;
	bHideWhenDragging: boolean;
	SelectedInstances: string[];
	static Load(ResourceName: string): ISMEditorToolProperties;
	static Find(Outer: UObject, ResourceName: string): ISMEditorToolProperties;
	static GetDefaultObject(): ISMEditorToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorToolProperties;
	static C(Other: UObject | any): ISMEditorToolProperties;
}

declare class ISMEditorToolActionPropertySetBase extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): ISMEditorToolActionPropertySetBase;
	static Find(Outer: UObject, ResourceName: string): ISMEditorToolActionPropertySetBase;
	static GetDefaultObject(): ISMEditorToolActionPropertySetBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorToolActionPropertySetBase;
	static C(Other: UObject | any): ISMEditorToolActionPropertySetBase;
}

declare class ISMEditorToolActionPropertySet extends ISMEditorToolActionPropertySetBase { 
	static Load(ResourceName: string): ISMEditorToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): ISMEditorToolActionPropertySet;
	static GetDefaultObject(): ISMEditorToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorToolActionPropertySet;
	Duplicate(): void;
	Delete(): void;
	ClearSelection(): void;
	static C(Other: UObject | any): ISMEditorToolActionPropertySet;
}

declare class ISMEditorToolReplacePropertySet extends ISMEditorToolActionPropertySetBase { 
	ReplaceWith: StaticMesh;
	static Load(ResourceName: string): ISMEditorToolReplacePropertySet;
	static Find(Outer: UObject, ResourceName: string): ISMEditorToolReplacePropertySet;
	static GetDefaultObject(): ISMEditorToolReplacePropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorToolReplacePropertySet;
	Replace(): void;
	static C(Other: UObject | any): ISMEditorToolReplacePropertySet;
}

declare class ISMEditorTarget { 
	TransformProxy: TransformProxy;
	TransformGizmo: CombinedTransformGizmo;
	clone() : ISMEditorTarget;
	static C(Other: UObject | any): ISMEditorTarget;
}

declare class ISMEditorTool extends InteractiveTool { 
	ClickOrDragBehavior: SingleClickOrDragInputBehavior;
	RectangleMarqueeMechanic: RectangleMarqueeMechanic;
	TransformProps: ISMEditorToolProperties;
	ToolActions: ISMEditorToolActionPropertySet;
	ReplaceAction: ISMEditorToolReplacePropertySet;
	TargetComponents: InstancedStaticMeshComponent[];
	ActiveGizmos: ISMEditorTarget[];
	PreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): ISMEditorTool;
	static Find(Outer: UObject, ResourceName: string): ISMEditorTool;
	static GetDefaultObject(): ISMEditorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ISMEditorTool;
	static C(Other: UObject | any): ISMEditorTool;
}

declare class PivotActorTransformProperties extends InteractiveToolPropertySet { 
	Position: Vector;
	Rotation: Quat;
	static Load(ResourceName: string): PivotActorTransformProperties;
	static Find(Outer: UObject, ResourceName: string): PivotActorTransformProperties;
	static GetDefaultObject(): PivotActorTransformProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PivotActorTransformProperties;
	static C(Other: UObject | any): PivotActorTransformProperties;
}

declare class AddPivotActorToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): AddPivotActorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): AddPivotActorToolBuilder;
	static GetDefaultObject(): AddPivotActorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddPivotActorToolBuilder;
	static C(Other: UObject | any): AddPivotActorToolBuilder;
}

declare class AddPivotActorTool extends MultiSelectionMeshEditingTool { 
	DragAlignmentMechanic: DragAlignmentMechanic;
	TransformGizmo: CombinedTransformGizmo;
	TransformProxy: TransformProxy;
	TransformProperties: PivotActorTransformProperties;
	static Load(ResourceName: string): AddPivotActorTool;
	static Find(Outer: UObject, ResourceName: string): AddPivotActorTool;
	static GetDefaultObject(): AddPivotActorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AddPivotActorTool;
	static C(Other: UObject | any): AddPivotActorTool;
}

declare class AttributeEditorToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): AttributeEditorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorToolBuilder;
	static GetDefaultObject(): AttributeEditorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorToolBuilder;
	static C(Other: UObject | any): AttributeEditorToolBuilder;
}

declare class AttributeEditorAttribProperties extends InteractiveToolPropertySet { 
	VertexAttributes: string[];
	InstanceAttributes: string[];
	TriangleAttributes: string[];
	PolygonAttributes: string[];
	EdgeAttributes: string[];
	GroupAttributes: string[];
	static Load(ResourceName: string): AttributeEditorAttribProperties;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorAttribProperties;
	static GetDefaultObject(): AttributeEditorAttribProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorAttribProperties;
	static C(Other: UObject | any): AttributeEditorAttribProperties;
}

declare class AttributeEditorActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): AttributeEditorActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorActionPropertySet;
	static GetDefaultObject(): AttributeEditorActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorActionPropertySet;
	static C(Other: UObject | any): AttributeEditorActionPropertySet;
}

declare class AttributeEditorNormalsActions extends AttributeEditorActionPropertySet { 
	static Load(ResourceName: string): AttributeEditorNormalsActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorNormalsActions;
	static GetDefaultObject(): AttributeEditorNormalsActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorNormalsActions;
	ResetHardNormals(): void;
	static C(Other: UObject | any): AttributeEditorNormalsActions;
}

declare class AttributeEditorUVActions extends AttributeEditorActionPropertySet { 
	UVLayer: string;
	UVLayerNamesList: string[];
	static Load(ResourceName: string): AttributeEditorUVActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorUVActions;
	static GetDefaultObject(): AttributeEditorUVActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorUVActions;
	GetUVLayerNamesFunc(): string[];
	DuplicateSelected(): void;
	DeleteSelected(): void;
	ClearAll(): void;
	AddNew(): void;
	static C(Other: UObject | any): AttributeEditorUVActions;
}

declare class AttributeEditorLightmapUVActions extends AttributeEditorActionPropertySet { 
	bGenerateLightmapUVs: boolean;
	SourceUVIndex: number;
	DestinationUVIndex: number;
	static Load(ResourceName: string): AttributeEditorLightmapUVActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorLightmapUVActions;
	static GetDefaultObject(): AttributeEditorLightmapUVActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorLightmapUVActions;
	Reset(): void;
	Enable(): void;
	Disable(): void;
	static C(Other: UObject | any): AttributeEditorLightmapUVActions;
}

declare type EAttributeEditorElementType = 'Vertex' | 'VertexInstance' | 'Triangle' | 'Polygon' | 'Edge' | 'PolygonGroup' | 'EAttributeEditorElementType_MAX';
declare var EAttributeEditorElementType : { Vertex:'Vertex',VertexInstance:'VertexInstance',Triangle:'Triangle',Polygon:'Polygon',Edge:'Edge',PolygonGroup:'PolygonGroup',EAttributeEditorElementType_MAX:'EAttributeEditorElementType_MAX', };
declare type EAttributeEditorAttribType = 'Int32' | 'Boolean' | 'Float' | 'Vector2' | 'Vector3' | 'Vector4' | 'String' | 'Unknown' | 'EAttributeEditorAttribType_MAX';
declare var EAttributeEditorAttribType : { Int32:'Int32',Boolean:'Boolean',Float:'Float',Vector2:'Vector2',Vector3:'Vector3',Vector4:'Vector4',String:'String',Unknown:'Unknown',EAttributeEditorAttribType_MAX:'EAttributeEditorAttribType_MAX', };
declare class AttributeEditorNewAttributeActions extends AttributeEditorActionPropertySet { 
	NewName: string;
	ElementType: EAttributeEditorElementType;
	DataType: EAttributeEditorAttribType;
	static Load(ResourceName: string): AttributeEditorNewAttributeActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorNewAttributeActions;
	static GetDefaultObject(): AttributeEditorNewAttributeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorNewAttributeActions;
	AddWeightMapLayer(): void;
	AddPolyGroupLayer(): void;
	static C(Other: UObject | any): AttributeEditorNewAttributeActions;
}

declare class AttributeEditorModifyAttributeActions extends AttributeEditorActionPropertySet { 
	Attribute: string;
	AttributeNamesList: string[];
	static Load(ResourceName: string): AttributeEditorModifyAttributeActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorModifyAttributeActions;
	static GetDefaultObject(): AttributeEditorModifyAttributeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorModifyAttributeActions;
	GetAttributeNamesFunc(): string[];
	DeleteSelected(): void;
	static C(Other: UObject | any): AttributeEditorModifyAttributeActions;
}

declare class AttributeEditorCopyAttributeActions extends AttributeEditorActionPropertySet { 
	FromAttribute: string[];
	ToAttribute: string[];
	static Load(ResourceName: string): AttributeEditorCopyAttributeActions;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorCopyAttributeActions;
	static GetDefaultObject(): AttributeEditorCopyAttributeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorCopyAttributeActions;
	CopyFromTo(): void;
	static C(Other: UObject | any): AttributeEditorCopyAttributeActions;
}

declare class AttributeEditorTool extends MultiSelectionMeshEditingTool { 
	NormalsActions: AttributeEditorNormalsActions;
	UVActions: AttributeEditorUVActions;
	LightmapUVActions: AttributeEditorLightmapUVActions;
	AttributeProps: AttributeEditorAttribProperties;
	NewAttributeProps: AttributeEditorNewAttributeActions;
	ModifyAttributeProps: AttributeEditorModifyAttributeActions;
	CopyAttributeProps: AttributeEditorCopyAttributeActions;
	static Load(ResourceName: string): AttributeEditorTool;
	static Find(Outer: UObject, ResourceName: string): AttributeEditorTool;
	static GetDefaultObject(): AttributeEditorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AttributeEditorTool;
	static C(Other: UObject | any): AttributeEditorTool;
}

declare class BspConversionToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): BspConversionToolBuilder;
	static Find(Outer: UObject, ResourceName: string): BspConversionToolBuilder;
	static GetDefaultObject(): BspConversionToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BspConversionToolBuilder;
	static C(Other: UObject | any): BspConversionToolBuilder;
}

declare type EBspConversionMode = 'ConvertFirst' | 'CombineFirst' | 'EBspConversionMode_MAX';
declare var EBspConversionMode : { ConvertFirst:'ConvertFirst',CombineFirst:'CombineFirst',EBspConversionMode_MAX:'EBspConversionMode_MAX', };
declare class BspConversionToolProperties extends InteractiveToolPropertySet { 
	ConversionMode: EBspConversionMode;
	bIncludeVolumes: boolean;
	bRemoveConvertedVolumes: boolean;
	bExplicitSubtractiveBrushSelection: boolean;
	bRemoveConvertedSubtractiveBrushes: boolean;
	bCacheBrushes: boolean;
	bShowPreview: boolean;
	static Load(ResourceName: string): BspConversionToolProperties;
	static Find(Outer: UObject, ResourceName: string): BspConversionToolProperties;
	static GetDefaultObject(): BspConversionToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BspConversionToolProperties;
	static C(Other: UObject | any): BspConversionToolProperties;
}

declare class BspConversionToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): BspConversionToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): BspConversionToolActionPropertySet;
	static GetDefaultObject(): BspConversionToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BspConversionToolActionPropertySet;
	SelectAllValidBrushes(): void;
	DeselectVolumes(): void;
	DeselectNonValid(): void;
	static C(Other: UObject | any): BspConversionToolActionPropertySet;
}

declare class BspConversionTool extends InteractiveTool { 
	Settings: BspConversionToolProperties;
	ToolActions: BspConversionToolActionPropertySet;
	PreviewMesh: PreviewMesh;
	static Load(ResourceName: string): BspConversionTool;
	static Find(Outer: UObject, ResourceName: string): BspConversionTool;
	static GetDefaultObject(): BspConversionTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BspConversionTool;
	static C(Other: UObject | any): BspConversionTool;
}

declare class EditMeshMaterialsToolBuilder extends MeshSelectionToolBuilder { 
	static Load(ResourceName: string): EditMeshMaterialsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): EditMeshMaterialsToolBuilder;
	static GetDefaultObject(): EditMeshMaterialsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshMaterialsToolBuilder;
	static C(Other: UObject | any): EditMeshMaterialsToolBuilder;
}

declare class EditMeshMaterialsToolProperties extends InteractiveToolPropertySet { 
	ActiveMaterial: string;
	MaterialNamesList: string[];
	Materials: MaterialInterface[];
	static Load(ResourceName: string): EditMeshMaterialsToolProperties;
	static Find(Outer: UObject, ResourceName: string): EditMeshMaterialsToolProperties;
	static GetDefaultObject(): EditMeshMaterialsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshMaterialsToolProperties;
	GetMaterialNamesFunc(): string[];
	static C(Other: UObject | any): EditMeshMaterialsToolProperties;
}

declare class EditMeshMaterialsEditActions extends MeshSelectionToolActionPropertySet { 
	static Load(ResourceName: string): EditMeshMaterialsEditActions;
	static Find(Outer: UObject, ResourceName: string): EditMeshMaterialsEditActions;
	static GetDefaultObject(): EditMeshMaterialsEditActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshMaterialsEditActions;
	AssignActiveMaterial(): void;
	static C(Other: UObject | any): EditMeshMaterialsEditActions;
}

declare class EditMeshMaterialsTool extends MeshSelectionTool { 
	MaterialProps: EditMeshMaterialsToolProperties;
	static Load(ResourceName: string): EditMeshMaterialsTool;
	static Find(Outer: UObject, ResourceName: string): EditMeshMaterialsTool;
	static GetDefaultObject(): EditMeshMaterialsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditMeshMaterialsTool;
	static C(Other: UObject | any): EditMeshMaterialsTool;
}

declare class MergeMeshesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MergeMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MergeMeshesToolBuilder;
	static GetDefaultObject(): MergeMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MergeMeshesToolBuilder;
	static C(Other: UObject | any): MergeMeshesToolBuilder;
}

declare class MergeMeshesToolProperties extends InteractiveToolPropertySet { 
	VoxelCount: number;
	MeshAdaptivity: number;
	OffsetDistance: number;
	bAutoSimplify: boolean;
	static Load(ResourceName: string): MergeMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): MergeMeshesToolProperties;
	static GetDefaultObject(): MergeMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MergeMeshesToolProperties;
	static C(Other: UObject | any): MergeMeshesToolProperties;
}

declare class MergeMeshesTool extends MultiSelectionMeshEditingTool { 
	MergeProps: MergeMeshesToolProperties;
	MeshStatisticsProperties: MeshStatisticsProperties;
	HandleSourcesProperties: OnAcceptHandleSourcesProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): MergeMeshesTool;
	static Find(Outer: UObject, ResourceName: string): MergeMeshesTool;
	static GetDefaultObject(): MergeMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MergeMeshesTool;
	static C(Other: UObject | any): MergeMeshesTool;
}

declare class MeshTangentsToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshTangentsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshTangentsToolBuilder;
	static GetDefaultObject(): MeshTangentsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshTangentsToolBuilder;
	static C(Other: UObject | any): MeshTangentsToolBuilder;
}

declare type EMeshTangentsType = 'MikkTSpace' | 'FastMikkTSpace' | 'PerTriangle' | 'CopyExisting' | 'EMeshTangentsType_MAX';
declare var EMeshTangentsType : { MikkTSpace:'MikkTSpace',FastMikkTSpace:'FastMikkTSpace',PerTriangle:'PerTriangle',CopyExisting:'CopyExisting',EMeshTangentsType_MAX:'EMeshTangentsType_MAX', };
declare class MeshTangentsToolProperties extends InteractiveToolPropertySet { 
	CalculationMethod: EMeshTangentsType;
	bShowTangents: boolean;
	bShowNormals: boolean;
	LineLength: number;
	LineThickness: number;
	bShowDegenerates: boolean;
	bCompareWithMikkt: boolean;
	CompareWithMikktThreshold: number;
	static Load(ResourceName: string): MeshTangentsToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshTangentsToolProperties;
	static GetDefaultObject(): MeshTangentsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshTangentsToolProperties;
	static C(Other: UObject | any): MeshTangentsToolProperties;
}

declare class MeshTangentsTool extends SingleSelectionMeshEditingTool { 
	Settings: MeshTangentsToolProperties;
	DefaultMaterial: MaterialInterface;
	PreviewMesh: PreviewMesh;
	PreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): MeshTangentsTool;
	static Find(Outer: UObject, ResourceName: string): MeshTangentsTool;
	static GetDefaultObject(): MeshTangentsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshTangentsTool;
	static C(Other: UObject | any): MeshTangentsTool;
}

declare class MeshToVolumeToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshToVolumeToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshToVolumeToolBuilder;
	static GetDefaultObject(): MeshToVolumeToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshToVolumeToolBuilder;
	static C(Other: UObject | any): MeshToVolumeToolBuilder;
}

declare type EMeshToVolumeMode = 'TriangulatePolygons' | 'MinimalPolygons' | 'EMeshToVolumeMode_MAX';
declare var EMeshToVolumeMode : { TriangulatePolygons:'TriangulatePolygons',MinimalPolygons:'MinimalPolygons',EMeshToVolumeMode_MAX:'EMeshToVolumeMode_MAX', };
declare class MeshToVolumeToolProperties extends InteractiveToolPropertySet { 
	ConversionMode: EMeshToVolumeMode;
	NewVolumeType: UnrealEngineClass;
	TargetVolume: Volume;
	static Load(ResourceName: string): MeshToVolumeToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshToVolumeToolProperties;
	static GetDefaultObject(): MeshToVolumeToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshToVolumeToolProperties;
	static C(Other: UObject | any): MeshToVolumeToolProperties;
}

declare class MeshToVolumeTool extends SingleSelectionMeshEditingTool { 
	Settings: MeshToVolumeToolProperties;
	HandleSourcesProperties: OnAcceptHandleSourcesProperties;
	PreviewMesh: PreviewMesh;
	VolumeEdgesSet: LineSetComponent;
	static Load(ResourceName: string): MeshToVolumeTool;
	static Find(Outer: UObject, ResourceName: string): MeshToVolumeTool;
	static GetDefaultObject(): MeshToVolumeTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshToVolumeTool;
	static C(Other: UObject | any): MeshToVolumeTool;
}

declare class PolygonOnMeshToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): PolygonOnMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshToolBuilder;
	static GetDefaultObject(): PolygonOnMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshToolBuilder;
	static C(Other: UObject | any): PolygonOnMeshToolBuilder;
}

declare type EEmbeddedPolygonOpMethod = 'TrimOutside' | 'TrimInside' | 'InsertPolygon' | 'CutThrough' | 'EEmbeddedPolygonOpMethod_MAX';
declare var EEmbeddedPolygonOpMethod : { TrimOutside:'TrimOutside',TrimInside:'TrimInside',InsertPolygon:'InsertPolygon',CutThrough:'CutThrough',EEmbeddedPolygonOpMethod_MAX:'EEmbeddedPolygonOpMethod_MAX', };
declare type EPolygonType = 'Circle' | 'Square' | 'Rectangle' | 'RoundRect' | 'Custom' | 'EPolygonType_MAX';
declare var EPolygonType : { Circle:'Circle',Square:'Square',Rectangle:'Rectangle',RoundRect:'RoundRect',Custom:'Custom',EPolygonType_MAX:'EPolygonType_MAX', };
declare class PolygonOnMeshToolProperties extends InteractiveToolPropertySet { 
	Operation: EEmbeddedPolygonOpMethod;
	Shape: EPolygonType;
	bCutWithBoolean: boolean;
	bTryToFixCracks: boolean;
	PolygonScale: number;
	Width: number;
	Height: number;
	CornerRatio: number;
	Subdivisions: number;
	bCanAcceptFailedResult: boolean;
	bShowIntermediateResultOnFailure: boolean;
	static Load(ResourceName: string): PolygonOnMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshToolProperties;
	static GetDefaultObject(): PolygonOnMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshToolProperties;
	static C(Other: UObject | any): PolygonOnMeshToolProperties;
}

declare class PolygonOnMeshToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): PolygonOnMeshToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshToolActionPropertySet;
	static GetDefaultObject(): PolygonOnMeshToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshToolActionPropertySet;
	DrawPolygon(): void;
	static C(Other: UObject | any): PolygonOnMeshToolActionPropertySet;
}

declare class PolygonOnMeshTool extends SingleSelectionMeshEditingTool { 
	BasicProperties: PolygonOnMeshToolProperties;
	ActionProperties: PolygonOnMeshToolActionPropertySet;
	Preview: MeshOpPreviewWithBackgroundCompute;
	DrawnLineSet: LineSetComponent;
	PlaneMechanic: ConstructionPlaneMechanic;
	DrawPolygonMechanic: CollectSurfacePathMechanic;
	static Load(ResourceName: string): PolygonOnMeshTool;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshTool;
	static GetDefaultObject(): PolygonOnMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshTool;
	static C(Other: UObject | any): PolygonOnMeshTool;
}

declare class ShapeSprayToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): ShapeSprayToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ShapeSprayToolBuilder;
	static GetDefaultObject(): ShapeSprayToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShapeSprayToolBuilder;
	static C(Other: UObject | any): ShapeSprayToolBuilder;
}

declare class ShapeSprayToolProperties extends InteractiveToolPropertySet { 
	Color: LinearColor;
	bRandomColor: boolean;
	DropSpeed: number;
	ObjectSize: number;
	NumSplats: number;
	Material: MaterialInterface;
	static Load(ResourceName: string): ShapeSprayToolProperties;
	static Find(Outer: UObject, ResourceName: string): ShapeSprayToolProperties;
	static GetDefaultObject(): ShapeSprayToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShapeSprayToolProperties;
	static C(Other: UObject | any): ShapeSprayToolProperties;
}

declare class ShapeSprayTool extends DynamicMeshBrushTool { 
	Settings: ShapeSprayToolProperties;
	AccumMeshComponent: DynamicMeshComponent;
	static Load(ResourceName: string): ShapeSprayTool;
	static Find(Outer: UObject, ResourceName: string): ShapeSprayTool;
	static GetDefaultObject(): ShapeSprayTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShapeSprayTool;
	static C(Other: UObject | any): ShapeSprayTool;
}

declare class SimplifyMeshToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SimplifyMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SimplifyMeshToolBuilder;
	static GetDefaultObject(): SimplifyMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimplifyMeshToolBuilder;
	static C(Other: UObject | any): SimplifyMeshToolBuilder;
}

declare type ESimplifyType = 'QEM' | 'Attribute' | 'UEStandard' | 'MinimalExistingVertex' | 'MinimalPlanar' | 'MinimalPolygroup' | 'ESimplifyType_MAX';
declare var ESimplifyType : { QEM:'QEM',Attribute:'Attribute',UEStandard:'UEStandard',MinimalExistingVertex:'MinimalExistingVertex',MinimalPlanar:'MinimalPlanar',MinimalPolygroup:'MinimalPolygroup',ESimplifyType_MAX:'ESimplifyType_MAX', };
declare type ESimplifyTargetType = 'Percentage' | 'TriangleCount' | 'VertexCount' | 'EdgeLength' | 'MinimalPlanar' | 'ESimplifyTargetType_MAX';
declare var ESimplifyTargetType : { Percentage:'Percentage',TriangleCount:'TriangleCount',VertexCount:'VertexCount',EdgeLength:'EdgeLength',MinimalPlanar:'MinimalPlanar',ESimplifyTargetType_MAX:'ESimplifyTargetType_MAX', };
declare class SimplifyMeshToolProperties extends MeshConstraintProperties { 
	SimplifierType: ESimplifyType;
	TargetMode: ESimplifyTargetType;
	TargetPercentage: number;
	TargetEdgeLength: number;
	TargetTriangleCount: number;
	TargetVertexCount: number;
	MinimalAngleThreshold: number;
	PolyEdgeAngleTolerance: number;
	bDiscardAttributes: boolean;
	bGeometricConstraint: boolean;
	GeometricTolerance: number;
	bShowGroupColors: boolean;
	bReproject: boolean;
	static Load(ResourceName: string): SimplifyMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): SimplifyMeshToolProperties;
	static GetDefaultObject(): SimplifyMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimplifyMeshToolProperties;
	static C(Other: UObject | any): SimplifyMeshToolProperties;
}

declare class SimplifyMeshTool extends SingleSelectionMeshEditingTool { 
	SimplifyProperties: SimplifyMeshToolProperties;
	MeshStatisticsProperties: MeshStatisticsProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	MeshElementsDisplay: MeshElementsVisualizer;
	static Load(ResourceName: string): SimplifyMeshTool;
	static Find(Outer: UObject, ResourceName: string): SimplifyMeshTool;
	static GetDefaultObject(): SimplifyMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimplifyMeshTool;
	static C(Other: UObject | any): SimplifyMeshTool;
}

declare class SubdividePolyToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SubdividePolyToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SubdividePolyToolBuilder;
	static GetDefaultObject(): SubdividePolyToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubdividePolyToolBuilder;
	static C(Other: UObject | any): SubdividePolyToolBuilder;
}

declare type ESubdivisionScheme = 'Bilinear' | 'CatmullClark' | 'Loop' | 'ESubdivisionScheme_MAX';
declare var ESubdivisionScheme : { Bilinear:'Bilinear',CatmullClark:'CatmullClark',Loop:'Loop',ESubdivisionScheme_MAX:'ESubdivisionScheme_MAX', };
declare type ESubdivisionOutputNormals = 'Interpolated' | 'Generated' | 'None' | 'ESubdivisionOutputNormals_MAX';
declare var ESubdivisionOutputNormals : { Interpolated:'Interpolated',Generated:'Generated',None:'None',ESubdivisionOutputNormals_MAX:'ESubdivisionOutputNormals_MAX', };
declare type ESubdivisionOutputUVs = 'Interpolated' | 'None' | 'ESubdivisionOutputUVs_MAX';
declare var ESubdivisionOutputUVs : { Interpolated:'Interpolated',None:'None',ESubdivisionOutputUVs_MAX:'ESubdivisionOutputUVs_MAX', };
declare class SubdividePolyToolProperties extends InteractiveToolPropertySet { 
	SubdivisionLevel: number;
	bCatmullClarkOK: boolean;
	SubdivisionScheme: ESubdivisionScheme;
	NormalComputationMethod: ESubdivisionOutputNormals;
	UVComputationMethod: ESubdivisionOutputUVs;
	bNewPolyGroups: boolean;
	bRenderGroups: boolean;
	bRenderCage: boolean;
	static Load(ResourceName: string): SubdividePolyToolProperties;
	static Find(Outer: UObject, ResourceName: string): SubdividePolyToolProperties;
	static GetDefaultObject(): SubdividePolyToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubdividePolyToolProperties;
	static C(Other: UObject | any): SubdividePolyToolProperties;
}

declare class SubdividePolyTool extends SingleSelectionMeshEditingTool { 
	PreviewMesh: PreviewMesh;
	Properties: SubdividePolyToolProperties;
	PreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): SubdividePolyTool;
	static Find(Outer: UObject, ResourceName: string): SubdividePolyTool;
	static GetDefaultObject(): SubdividePolyTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubdividePolyTool;
	static C(Other: UObject | any): SubdividePolyTool;
}

declare class VoxelCSGMeshesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): VoxelCSGMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VoxelCSGMeshesToolBuilder;
	static GetDefaultObject(): VoxelCSGMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelCSGMeshesToolBuilder;
	static C(Other: UObject | any): VoxelCSGMeshesToolBuilder;
}

declare type EVoxelCSGOperation = 'DifferenceAB' | 'DifferenceBA' | 'Intersect' | 'Union' | 'EVoxelCSGOperation_MAX';
declare var EVoxelCSGOperation : { DifferenceAB:'DifferenceAB',DifferenceBA:'DifferenceBA',Intersect:'Intersect',Union:'Union',EVoxelCSGOperation_MAX:'EVoxelCSGOperation_MAX', };
declare class VoxelCSGMeshesToolProperties extends InteractiveToolPropertySet { 
	Operation: EVoxelCSGOperation;
	VoxelCount: number;
	MeshAdaptivity: number;
	OffsetDistance: number;
	bAutoSimplify: boolean;
	static Load(ResourceName: string): VoxelCSGMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): VoxelCSGMeshesToolProperties;
	static GetDefaultObject(): VoxelCSGMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelCSGMeshesToolProperties;
	static C(Other: UObject | any): VoxelCSGMeshesToolProperties;
}

declare class VoxelCSGMeshesTool extends MultiSelectionMeshEditingTool { 
	CSGProps: VoxelCSGMeshesToolProperties;
	MeshStatisticsProperties: MeshStatisticsProperties;
	HandleSourcesProperties: OnAcceptHandleSourcesProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): VoxelCSGMeshesTool;
	static Find(Outer: UObject, ResourceName: string): VoxelCSGMeshesTool;
	static GetDefaultObject(): VoxelCSGMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelCSGMeshesTool;
	static C(Other: UObject | any): VoxelCSGMeshesTool;
}

declare class BasicLineSetComponentBase extends MeshComponent { 
	LineMaterial: MaterialInterface;
	Bounds: BoxSphereBounds;
	bBoundsDirty: boolean;
	Color: Color;
	Size: number;
	DepthBias: number;
	static Load(ResourceName: string): BasicLineSetComponentBase;
	static Find(Outer: UObject, ResourceName: string): BasicLineSetComponentBase;
	static GetDefaultObject(): BasicLineSetComponentBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicLineSetComponentBase;
	static C(Other: UObject | any): BasicLineSetComponentBase;
}

declare class Basic2DLineSetComponent extends BasicLineSetComponentBase { 
	static Load(ResourceName: string): Basic2DLineSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic2DLineSetComponent;
	static GetDefaultObject(): Basic2DLineSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic2DLineSetComponent;
	static C(Other: UObject | any): Basic2DLineSetComponent;
}

declare class Basic3DLineSetComponent extends BasicLineSetComponentBase { 
	static Load(ResourceName: string): Basic3DLineSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic3DLineSetComponent;
	static GetDefaultObject(): Basic3DLineSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic3DLineSetComponent;
	static C(Other: UObject | any): Basic3DLineSetComponent;
}

declare class BasicPointSetComponentBase extends MeshComponent { 
	PointMaterial: MaterialInterface;
	Bounds: BoxSphereBounds;
	bBoundsDirty: boolean;
	Color: Color;
	Size: number;
	DepthBias: number;
	static Load(ResourceName: string): BasicPointSetComponentBase;
	static Find(Outer: UObject, ResourceName: string): BasicPointSetComponentBase;
	static GetDefaultObject(): BasicPointSetComponentBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicPointSetComponentBase;
	static C(Other: UObject | any): BasicPointSetComponentBase;
}

declare class Basic2DPointSetComponent extends BasicPointSetComponentBase { 
	static Load(ResourceName: string): Basic2DPointSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic2DPointSetComponent;
	static GetDefaultObject(): Basic2DPointSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic2DPointSetComponent;
	static C(Other: UObject | any): Basic2DPointSetComponent;
}

declare class Basic3DPointSetComponent extends BasicPointSetComponentBase { 
	static Load(ResourceName: string): Basic3DPointSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic3DPointSetComponent;
	static GetDefaultObject(): Basic3DPointSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic3DPointSetComponent;
	static C(Other: UObject | any): Basic3DPointSetComponent;
}

declare class BasicTriangleSetComponentBase extends MeshComponent { 
	TriangleMaterial: MaterialInterface;
	Bounds: BoxSphereBounds;
	bBoundsDirty: boolean;
	Color: Color;
	Normal: Vector3f;
	static Load(ResourceName: string): BasicTriangleSetComponentBase;
	static Find(Outer: UObject, ResourceName: string): BasicTriangleSetComponentBase;
	static GetDefaultObject(): BasicTriangleSetComponentBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicTriangleSetComponentBase;
	static C(Other: UObject | any): BasicTriangleSetComponentBase;
}

declare class Basic2DTriangleSetComponent extends BasicTriangleSetComponentBase { 
	static Load(ResourceName: string): Basic2DTriangleSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic2DTriangleSetComponent;
	static GetDefaultObject(): Basic2DTriangleSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic2DTriangleSetComponent;
	static C(Other: UObject | any): Basic2DTriangleSetComponent;
}

declare class Basic3DTriangleSetComponent extends BasicTriangleSetComponentBase { 
	static Load(ResourceName: string): Basic3DTriangleSetComponent;
	static Find(Outer: UObject, ResourceName: string): Basic3DTriangleSetComponent;
	static GetDefaultObject(): Basic3DTriangleSetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Basic3DTriangleSetComponent;
	static C(Other: UObject | any): Basic3DTriangleSetComponent;
}

declare class UVEditorMechanicAdapterTool extends InteractiveTool { 
	static Load(ResourceName: string): UVEditorMechanicAdapterTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorMechanicAdapterTool;
	static GetDefaultObject(): UVEditorMechanicAdapterTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorMechanicAdapterTool;
	static C(Other: UObject | any): UVEditorMechanicAdapterTool;
}

declare class UVToolContextObject extends UObject { 
	static Load(ResourceName: string): UVToolContextObject;
	static Find(Outer: UObject, ResourceName: string): UVToolContextObject;
	static GetDefaultObject(): UVToolContextObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolContextObject;
	static C(Other: UObject | any): UVToolContextObject;
}

declare class UVToolAssetInputsContext extends UVToolContextObject { 
	static Load(ResourceName: string): UVToolAssetInputsContext;
	static Find(Outer: UObject, ResourceName: string): UVToolAssetInputsContext;
	static GetDefaultObject(): UVToolAssetInputsContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolAssetInputsContext;
	static C(Other: UObject | any): UVToolAssetInputsContext;
}

declare class UVToolViewportButtonsAPI extends UVToolContextObject { 
	static Load(ResourceName: string): UVToolViewportButtonsAPI;
	static Find(Outer: UObject, ResourceName: string): UVToolViewportButtonsAPI;
	static GetDefaultObject(): UVToolViewportButtonsAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolViewportButtonsAPI;
	static C(Other: UObject | any): UVToolViewportButtonsAPI;
}

declare class UVUnwrapDynamicMesh extends Interface { 
	static Load(ResourceName: string): UVUnwrapDynamicMesh;
	static Find(Outer: UObject, ResourceName: string): UVUnwrapDynamicMesh;
	static GetDefaultObject(): UVUnwrapDynamicMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVUnwrapDynamicMesh;
	static C(Other: UObject | any): UVUnwrapDynamicMesh;
}

declare class UVEditorToolMeshInput extends ToolTarget { 
	UnwrapPreview: MeshOpPreviewWithBackgroundCompute;
	AppliedPreview: MeshOpPreviewWithBackgroundCompute;
	WireframeDisplay: MeshElementsVisualizer;
	static Load(ResourceName: string): UVEditorToolMeshInput;
	static Find(Outer: UObject, ResourceName: string): UVEditorToolMeshInput;
	static GetDefaultObject(): UVEditorToolMeshInput;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorToolMeshInput;
	static C(Other: UObject | any): UVEditorToolMeshInput;
}

declare class UVToolSelectionHighlightMechanic extends InteractionMechanic { 
	UnwrapGeometryActor: PreviewGeometryActor;
	TriangleSetMaterial: MaterialInstanceDynamic;
	UnwrapStationaryGeometryActor: PreviewGeometryActor;
	LivePreviewGeometryActor: PreviewGeometryActor;
	static Load(ResourceName: string): UVToolSelectionHighlightMechanic;
	static Find(Outer: UObject, ResourceName: string): UVToolSelectionHighlightMechanic;
	static GetDefaultObject(): UVToolSelectionHighlightMechanic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolSelectionHighlightMechanic;
	static C(Other: UObject | any): UVToolSelectionHighlightMechanic;
}

declare class UVToolEmitChangeAPI extends UVToolContextObject { 
	static Load(ResourceName: string): UVToolEmitChangeAPI;
	static Find(Outer: UObject, ResourceName: string): UVToolEmitChangeAPI;
	static GetDefaultObject(): UVToolEmitChangeAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolEmitChangeAPI;
	static C(Other: UObject | any): UVToolEmitChangeAPI;
}

declare class UVToolLivePreviewAPI extends UVToolContextObject { 
	World: World;
	InputRouter: InputRouter;
	static Load(ResourceName: string): UVToolLivePreviewAPI;
	static Find(Outer: UObject, ResourceName: string): UVToolLivePreviewAPI;
	static GetDefaultObject(): UVToolLivePreviewAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolLivePreviewAPI;
	static C(Other: UObject | any): UVToolLivePreviewAPI;
}

declare class UVEditorMeshSelectionMechanic extends InteractionMechanic { 
	SelectionAPI: UVToolSelectionAPI;
	ViewportButtonsAPI: UVToolViewportButtonsAPI;
	EmitChangeAPI: UVToolEmitChangeAPI;
	LivePreviewAPI: UVToolLivePreviewAPI;
	UnwrapClickTargetRouter: LocalSingleClickInputBehavior;
	LivePreviewClickTargetRouter: LocalSingleClickInputBehavior;
	UnwrapHoverBehaviorTargetRouter: LocalMouseHoverBehavior;
	LivePreviewHoverBehaviorTargetRouter: LocalMouseHoverBehavior;
	MarqueeMechanic: RectangleMarqueeMechanic;
	LivePreviewMarqueeMechanic: RectangleMarqueeMechanic;
	HoverTriangleSetMaterial: MaterialInstanceDynamic;
	HoverGeometryActor: PreviewGeometryActor;
	LivePreviewBehaviorSet: InputBehaviorSet;
	LivePreviewBehaviorSource: LocalInputBehaviorSource;
	LivePreviewHoverGeometryActor: PreviewGeometryActor;
	static Load(ResourceName: string): UVEditorMeshSelectionMechanic;
	static Find(Outer: UObject, ResourceName: string): UVEditorMeshSelectionMechanic;
	static GetDefaultObject(): UVEditorMeshSelectionMechanic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorMeshSelectionMechanic;
	static C(Other: UObject | any): UVEditorMeshSelectionMechanic;
}

declare class UVToolSelectionAPI extends UVToolContextObject { 
	Targets: UVEditorToolMeshInput[];
	MechanicAdapter: UVEditorMechanicAdapterTool;
	HighlightMechanic: UVToolSelectionHighlightMechanic;
	SelectionMechanic: UVEditorMeshSelectionMechanic;
	EmitChangeAPI: UVToolEmitChangeAPI;
	static Load(ResourceName: string): UVToolSelectionAPI;
	static Find(Outer: UObject, ResourceName: string): UVToolSelectionAPI;
	static GetDefaultObject(): UVToolSelectionAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolSelectionAPI;
	static C(Other: UObject | any): UVToolSelectionAPI;
}

declare class UVToolAction extends UObject { 
	SelectionAPI: UVToolSelectionAPI;
	EmitChangeAPI: UVToolEmitChangeAPI;
	static Load(ResourceName: string): UVToolAction;
	static Find(Outer: UObject, ResourceName: string): UVToolAction;
	static GetDefaultObject(): UVToolAction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolAction;
	static C(Other: UObject | any): UVToolAction;
}

declare class UVSeamSewAction extends UVToolAction { 
	static Load(ResourceName: string): UVSeamSewAction;
	static Find(Outer: UObject, ResourceName: string): UVSeamSewAction;
	static GetDefaultObject(): UVSeamSewAction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVSeamSewAction;
	static C(Other: UObject | any): UVSeamSewAction;
}

declare class UVSplitAction extends UVToolAction { 
	static Load(ResourceName: string): UVSplitAction;
	static Find(Outer: UObject, ResourceName: string): UVSplitAction;
	static GetDefaultObject(): UVSplitAction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVSplitAction;
	static C(Other: UObject | any): UVSplitAction;
}

declare class UDIMBlock { 
	UDIM: number;
	clone() : UDIMBlock;
	static C(Other: UObject | any): UDIMBlock;
}

declare class UVTool2DViewportAPI extends UVToolContextObject { 
	UDIMBlocks: UDIMBlock[];
	bDrawGrid: boolean;
	bDrawRulers: boolean;
	static Load(ResourceName: string): UVTool2DViewportAPI;
	static Find(Outer: UObject, ResourceName: string): UVTool2DViewportAPI;
	static GetDefaultObject(): UVTool2DViewportAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVTool2DViewportAPI;
	static C(Other: UObject | any): UVTool2DViewportAPI;
}

declare class UVToolAssetAndChannelAPI extends UVToolContextObject { 
	static Load(ResourceName: string): UVToolAssetAndChannelAPI;
	static Find(Outer: UObject, ResourceName: string): UVToolAssetAndChannelAPI;
	static GetDefaultObject(): UVToolAssetAndChannelAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolAssetAndChannelAPI;
	static C(Other: UObject | any): UVToolAssetAndChannelAPI;
}

declare class UVToolAABBTreeStorage extends UVToolContextObject { 
	static Load(ResourceName: string): UVToolAABBTreeStorage;
	static Find(Outer: UObject, ResourceName: string): UVToolAABBTreeStorage;
	static GetDefaultObject(): UVToolAABBTreeStorage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolAABBTreeStorage;
	static C(Other: UObject | any): UVToolAABBTreeStorage;
}

declare class UVEditorToolPropertiesAPI extends UVToolContextObject { 
	ToolDisplayProperties: UObject;
	static Load(ResourceName: string): UVEditorToolPropertiesAPI;
	static Find(Outer: UObject, ResourceName: string): UVEditorToolPropertiesAPI;
	static GetDefaultObject(): UVEditorToolPropertiesAPI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorToolPropertiesAPI;
	static C(Other: UObject | any): UVEditorToolPropertiesAPI;
}

declare type EUVEditorRecomputeUVsPropertiesIslandMode = 'PolyGroups' | 'ExistingUVs' | 'EUVEditorRecomputeUVsPropertiesIslandMode_MAX';
declare var EUVEditorRecomputeUVsPropertiesIslandMode : { PolyGroups:'PolyGroups',ExistingUVs:'ExistingUVs',EUVEditorRecomputeUVsPropertiesIslandMode_MAX:'EUVEditorRecomputeUVsPropertiesIslandMode_MAX', };
declare type EUVEditorRecomputeUVsPropertiesUnwrapType = 'ExpMap' | 'Conformal' | 'SpectralConformal' | 'IslandMerging' | 'EUVEditorRecomputeUVsPropertiesUnwrapType_MAX';
declare var EUVEditorRecomputeUVsPropertiesUnwrapType : { ExpMap:'ExpMap',Conformal:'Conformal',SpectralConformal:'SpectralConformal',IslandMerging:'IslandMerging',EUVEditorRecomputeUVsPropertiesUnwrapType_MAX:'EUVEditorRecomputeUVsPropertiesUnwrapType_MAX', };
declare type EUVEditorRecomputeUVsToolOrientationMode = 'None' | 'MinBounds' | 'EUVEditorRecomputeUVsToolOrientationMode_MAX';
declare var EUVEditorRecomputeUVsToolOrientationMode : { None:'None',MinBounds:'MinBounds',EUVEditorRecomputeUVsToolOrientationMode_MAX:'EUVEditorRecomputeUVsToolOrientationMode_MAX', };
declare type EUVEditorRecomputeUVsPropertiesLayoutType = 'None' | 'Repack' | 'NormalizeToExistingBounds' | 'NormalizeToBounds' | 'NormalizeToWorld' | 'EUVEditorRecomputeUVsPropertiesLayoutType_MAX';
declare var EUVEditorRecomputeUVsPropertiesLayoutType : { None:'None',Repack:'Repack',NormalizeToExistingBounds:'NormalizeToExistingBounds',NormalizeToBounds:'NormalizeToBounds',NormalizeToWorld:'NormalizeToWorld',EUVEditorRecomputeUVsPropertiesLayoutType_MAX:'EUVEditorRecomputeUVsPropertiesLayoutType_MAX', };
declare class UVEditorRecomputeUVsToolProperties extends InteractiveToolPropertySet { 
	bEnablePolygroupSupport: boolean;
	IslandGeneration: EUVEditorRecomputeUVsPropertiesIslandMode;
	UnwrapType: EUVEditorRecomputeUVsPropertiesUnwrapType;
	AutoRotation: EUVEditorRecomputeUVsToolOrientationMode;
	bPreserveIrregularity: boolean;
	SmoothingSteps: number;
	SmoothingAlpha: number;
	MergingDistortionThreshold: number;
	MergingAngleThreshold: number;
	LayoutType: EUVEditorRecomputeUVsPropertiesLayoutType;
	TextureResolution: number;
	NormalizeScale: number;
	bEnableUDIMLayout: boolean;
	bUDIMCVAREnabled: boolean;
	static Load(ResourceName: string): UVEditorRecomputeUVsToolProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorRecomputeUVsToolProperties;
	static GetDefaultObject(): UVEditorRecomputeUVsToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorRecomputeUVsToolProperties;
	static C(Other: UObject | any): UVEditorRecomputeUVsToolProperties;
}

declare class UVEditorRecomputeUVsOpFactory extends UObject { 
	Settings: UVEditorRecomputeUVsToolProperties;
	static Load(ResourceName: string): UVEditorRecomputeUVsOpFactory;
	static Find(Outer: UObject, ResourceName: string): UVEditorRecomputeUVsOpFactory;
	static GetDefaultObject(): UVEditorRecomputeUVsOpFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorRecomputeUVsOpFactory;
	static C(Other: UObject | any): UVEditorRecomputeUVsOpFactory;
}

declare type EUVEditorUVLayoutType = 'Transform' | 'Stack' | 'Repack' | 'EUVEditorUVLayoutType_MAX';
declare var EUVEditorUVLayoutType : { Transform:'Transform',Stack:'Stack',Repack:'Repack',EUVEditorUVLayoutType_MAX:'EUVEditorUVLayoutType_MAX', };
declare class UVEditorUVLayoutProperties extends InteractiveToolPropertySet { 
	LayoutType: EUVEditorUVLayoutType;
	TextureResolution: number;
	Scale: number;
	Translation: Vector2D;
	bAllowFlips: boolean;
	bEnableUDIMLayout: boolean;
	bUDIMCVAREnabled: boolean;
	static Load(ResourceName: string): UVEditorUVLayoutProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVLayoutProperties;
	static GetDefaultObject(): UVEditorUVLayoutProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVLayoutProperties;
	static C(Other: UObject | any): UVEditorUVLayoutProperties;
}

declare class UVEditorUVLayoutOperatorFactory extends UObject { 
	Settings: UVEditorUVLayoutProperties;
	static Load(ResourceName: string): UVEditorUVLayoutOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVLayoutOperatorFactory;
	static GetDefaultObject(): UVEditorUVLayoutOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVLayoutOperatorFactory;
	static C(Other: UObject | any): UVEditorUVLayoutOperatorFactory;
}

declare class UVEditorUVTransformPropertiesBase extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): UVEditorUVTransformPropertiesBase;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVTransformPropertiesBase;
	static GetDefaultObject(): UVEditorUVTransformPropertiesBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVTransformPropertiesBase;
	static C(Other: UObject | any): UVEditorUVTransformPropertiesBase;
}

declare type EUVEditorTranslationMode = 'Relative' | 'Absolute' | 'EUVEditorTranslationMode_MAX';
declare var EUVEditorTranslationMode : { Relative:'Relative',Absolute:'Absolute',EUVEditorTranslationMode_MAX:'EUVEditorTranslationMode_MAX', };
declare type EUVEditorPivotType = 'BoundingBoxCenter' | 'Origin' | 'IndividualBoundingBoxCenter' | 'Manual' | 'EUVEditorPivotType_MAX';
declare var EUVEditorPivotType : { BoundingBoxCenter:'BoundingBoxCenter',Origin:'Origin',IndividualBoundingBoxCenter:'IndividualBoundingBoxCenter',Manual:'Manual',EUVEditorPivotType_MAX:'EUVEditorPivotType_MAX', };
declare class UVEditorUVTransformProperties extends UVEditorUVTransformPropertiesBase { 
	Scale: Vector2D;
	Rotation: number;
	Translation: Vector2D;
	TranslationMode: EUVEditorTranslationMode;
	PivotMode: EUVEditorPivotType;
	ManualPivot: Vector2D;
	QuickTranslateOffset: number;
	QuickRotationOffset: number;
	QuickTranslation: Vector2D;
	QuickRotation: number;
	static Load(ResourceName: string): UVEditorUVTransformProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVTransformProperties;
	static GetDefaultObject(): UVEditorUVTransformProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVTransformProperties;
	static C(Other: UObject | any): UVEditorUVTransformProperties;
}

declare class UVEditorUVQuickTransformProperties extends UVEditorUVTransformProperties { 
	static Load(ResourceName: string): UVEditorUVQuickTransformProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVQuickTransformProperties;
	static GetDefaultObject(): UVEditorUVQuickTransformProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVQuickTransformProperties;
	static C(Other: UObject | any): UVEditorUVQuickTransformProperties;
}

declare type EUVEditorAlignAnchor = 'BoundingBox' | 'UDIMTile' | 'Manual' | 'EUVEditorAlignAnchor_MAX';
declare var EUVEditorAlignAnchor : { BoundingBox:'BoundingBox',UDIMTile:'UDIMTile',Manual:'Manual',EUVEditorAlignAnchor_MAX:'EUVEditorAlignAnchor_MAX', };
declare type EUVEditorAlignDirection = 'None' | 'Top' | 'Bottom' | 'Left' | 'Right' | 'CenterVertically' | 'CenterHorizontally' | 'EUVEditorAlignDirection_MAX';
declare var EUVEditorAlignDirection : { None:'None',Top:'Top',Bottom:'Bottom',Left:'Left',Right:'Right',CenterVertically:'CenterVertically',CenterHorizontally:'CenterHorizontally',EUVEditorAlignDirection_MAX:'EUVEditorAlignDirection_MAX', };
declare type EUVEditorAlignDistributeGroupingMode = 'IndividualBoundingBoxes' | 'EnclosingBoundingBox' | 'IndividualVertices' | 'EUVEditorAlignDistributeGroupingMode_MAX';
declare var EUVEditorAlignDistributeGroupingMode : { IndividualBoundingBoxes:'IndividualBoundingBoxes',EnclosingBoundingBox:'EnclosingBoundingBox',IndividualVertices:'IndividualVertices',EUVEditorAlignDistributeGroupingMode_MAX:'EUVEditorAlignDistributeGroupingMode_MAX', };
declare class UVEditorUVAlignProperties extends UVEditorUVTransformPropertiesBase { 
	AlignAnchor: EUVEditorAlignAnchor;
	ManualAnchor: Vector2D;
	AlignDirection: EUVEditorAlignDirection;
	Grouping: EUVEditorAlignDistributeGroupingMode;
	static Load(ResourceName: string): UVEditorUVAlignProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVAlignProperties;
	static GetDefaultObject(): UVEditorUVAlignProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVAlignProperties;
	static C(Other: UObject | any): UVEditorUVAlignProperties;
}

declare type EUVEditorDistributeMode = 'None' | 'VerticalSpace' | 'HorizontalSpace' | 'TopEdges' | 'BottomEdges' | 'LeftEdges' | 'RightEdges' | 'CentersVertically' | 'CentersHorizontally' | 'MinimallyRemoveOverlap' | 'EUVEditorDistributeMode_MAX';
declare var EUVEditorDistributeMode : { None:'None',VerticalSpace:'VerticalSpace',HorizontalSpace:'HorizontalSpace',TopEdges:'TopEdges',BottomEdges:'BottomEdges',LeftEdges:'LeftEdges',RightEdges:'RightEdges',CentersVertically:'CentersVertically',CentersHorizontally:'CentersHorizontally',MinimallyRemoveOverlap:'MinimallyRemoveOverlap',EUVEditorDistributeMode_MAX:'EUVEditorDistributeMode_MAX', };
declare class UVEditorUVDistributeProperties extends UVEditorUVTransformPropertiesBase { 
	DistributeMode: EUVEditorDistributeMode;
	Grouping: EUVEditorAlignDistributeGroupingMode;
	bEnableManualDistances: boolean;
	ManualExtent: number;
	ManualSpacing: number;
	static Load(ResourceName: string): UVEditorUVDistributeProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVDistributeProperties;
	static GetDefaultObject(): UVEditorUVDistributeProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVDistributeProperties;
	static C(Other: UObject | any): UVEditorUVDistributeProperties;
}

declare class UVEditorUVTransformOperatorFactory extends UObject { 
	Settings: UVEditorUVTransformPropertiesBase;
	static Load(ResourceName: string): UVEditorUVTransformOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVTransformOperatorFactory;
	static GetDefaultObject(): UVEditorUVTransformOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVTransformOperatorFactory;
	static C(Other: UObject | any): UVEditorUVTransformOperatorFactory;
}

declare class UVToolSupportsSelection extends Interface { 
	static Load(ResourceName: string): UVToolSupportsSelection;
	static Find(Outer: UObject, ResourceName: string): UVToolSupportsSelection;
	static GetDefaultObject(): UVToolSupportsSelection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVToolSupportsSelection;
	static C(Other: UObject | any): UVToolSupportsSelection;
}

declare class UVEditorChannelEditToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorChannelEditToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditToolBuilder;
	static GetDefaultObject(): UVEditorChannelEditToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditToolBuilder;
	static C(Other: UObject | any): UVEditorChannelEditToolBuilder;
}

declare type EChannelEditToolAction = 'NoAction' | 'Add' | 'Copy' | 'Delete' | 'EChannelEditToolAction_MAX';
declare var EChannelEditToolAction : { NoAction:'NoAction',Add:'Add',Copy:'Copy',Delete:'Delete',EChannelEditToolAction_MAX:'EChannelEditToolAction_MAX', };
declare class UVEditorChannelEditSettings extends InteractiveToolPropertySet { 
	Action: EChannelEditToolAction;
	static Load(ResourceName: string): UVEditorChannelEditSettings;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditSettings;
	static GetDefaultObject(): UVEditorChannelEditSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditSettings;
	static C(Other: UObject | any): UVEditorChannelEditSettings;
}

declare class UVEditorChannelEditTargetProperties extends InteractiveToolPropertySet { 
	Asset: string;
	TargetChannel: string;
	ReferenceChannel: string;
	bActionNeedsAsset: boolean;
	bActionNeedsReference: boolean;
	bActionNeedsTarget: boolean;
	static Load(ResourceName: string): UVEditorChannelEditTargetProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditTargetProperties;
	static GetDefaultObject(): UVEditorChannelEditTargetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditTargetProperties;
	GetUVChannelNames(): string[];
	GetAssetNames(): string[];
	static C(Other: UObject | any): UVEditorChannelEditTargetProperties;
}

declare class UVEditorChannelEditAddProperties extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): UVEditorChannelEditAddProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditAddProperties;
	static GetDefaultObject(): UVEditorChannelEditAddProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditAddProperties;
	static C(Other: UObject | any): UVEditorChannelEditAddProperties;
}

declare class UVEditorChannelEditCopyProperties extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): UVEditorChannelEditCopyProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditCopyProperties;
	static GetDefaultObject(): UVEditorChannelEditCopyProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditCopyProperties;
	static C(Other: UObject | any): UVEditorChannelEditCopyProperties;
}

declare class UVEditorChannelEditDeleteProperties extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): UVEditorChannelEditDeleteProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditDeleteProperties;
	static GetDefaultObject(): UVEditorChannelEditDeleteProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditDeleteProperties;
	static C(Other: UObject | any): UVEditorChannelEditDeleteProperties;
}

declare class UVEditorChannelEditToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): UVEditorChannelEditToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditToolActionPropertySet;
	static GetDefaultObject(): UVEditorChannelEditToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditToolActionPropertySet;
	Apply(): void;
	static C(Other: UObject | any): UVEditorChannelEditToolActionPropertySet;
}

declare class UVEditorChannelEditTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	ToolActions: UVEditorChannelEditToolActionPropertySet;
	ActionSelectionProperties: UVEditorChannelEditSettings;
	SourceChannelProperties: UVEditorChannelEditTargetProperties;
	AddActionProperties: UVEditorChannelEditAddProperties;
	CopyActionProperties: UVEditorChannelEditCopyProperties;
	DeleteActionProperties: UVEditorChannelEditDeleteProperties;
	EmitChangeAPI: UVToolEmitChangeAPI;
	static Load(ResourceName: string): UVEditorChannelEditTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorChannelEditTool;
	static GetDefaultObject(): UVEditorChannelEditTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorChannelEditTool;
	static C(Other: UObject | any): UVEditorChannelEditTool;
}

declare class UVEditorLayoutToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorLayoutToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorLayoutToolBuilder;
	static GetDefaultObject(): UVEditorLayoutToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorLayoutToolBuilder;
	static C(Other: UObject | any): UVEditorLayoutToolBuilder;
}

declare class UVEditorLayoutTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	Settings: UVEditorUVLayoutProperties;
	Factories: UVEditorUVLayoutOperatorFactory[];
	UVToolSelectionAPI: UVToolSelectionAPI;
	static Load(ResourceName: string): UVEditorLayoutTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorLayoutTool;
	static GetDefaultObject(): UVEditorLayoutTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorLayoutTool;
	static C(Other: UObject | any): UVEditorLayoutTool;
}

declare class UVEditorRecomputeUVsToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorRecomputeUVsToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorRecomputeUVsToolBuilder;
	static GetDefaultObject(): UVEditorRecomputeUVsToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorRecomputeUVsToolBuilder;
	static C(Other: UObject | any): UVEditorRecomputeUVsToolBuilder;
}

declare class UVEditorRecomputeUVsTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	Settings: UVEditorRecomputeUVsToolProperties;
	PolygroupLayerProperties: PolygroupLayersProperties;
	Factories: UVEditorRecomputeUVsOpFactory[];
	UVToolSelectionAPI: UVToolSelectionAPI;
	static Load(ResourceName: string): UVEditorRecomputeUVsTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorRecomputeUVsTool;
	static GetDefaultObject(): UVEditorRecomputeUVsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorRecomputeUVsTool;
	static C(Other: UObject | any): UVEditorRecomputeUVsTool;
}

declare class UVEditorSeamToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorSeamToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorSeamToolBuilder;
	static GetDefaultObject(): UVEditorSeamToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorSeamToolBuilder;
	static C(Other: UObject | any): UVEditorSeamToolBuilder;
}

declare class UVEditorSeamTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	LivePreviewAPI: UVToolLivePreviewAPI;
	EmitChangeAPI: UVToolEmitChangeAPI;
	LivePreviewBehaviorSet: InputBehaviorSet;
	LivePreviewBehaviorSource: LocalInputBehaviorSource;
	UnwrapGeometry: PreviewGeometry;
	LivePreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): UVEditorSeamTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorSeamTool;
	static GetDefaultObject(): UVEditorSeamTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorSeamTool;
	static C(Other: UObject | any): UVEditorSeamTool;
}

declare class UVEditorTransformToolDisplayProperties extends InteractiveToolPropertySet { 
	bDrawPivots: boolean;
	static Load(ResourceName: string): UVEditorTransformToolDisplayProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorTransformToolDisplayProperties;
	static GetDefaultObject(): UVEditorTransformToolDisplayProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorTransformToolDisplayProperties;
	static C(Other: UObject | any): UVEditorTransformToolDisplayProperties;
}

declare class UVEditorBaseTransformToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorBaseTransformToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorBaseTransformToolBuilder;
	static GetDefaultObject(): UVEditorBaseTransformToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorBaseTransformToolBuilder;
	static C(Other: UObject | any): UVEditorBaseTransformToolBuilder;
}

declare class UVEditorTransformToolBuilder extends UVEditorBaseTransformToolBuilder { 
	static Load(ResourceName: string): UVEditorTransformToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorTransformToolBuilder;
	static GetDefaultObject(): UVEditorTransformToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorTransformToolBuilder;
	static C(Other: UObject | any): UVEditorTransformToolBuilder;
}

declare class UVEditorAlignToolBuilder extends UVEditorBaseTransformToolBuilder { 
	static Load(ResourceName: string): UVEditorAlignToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorAlignToolBuilder;
	static GetDefaultObject(): UVEditorAlignToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorAlignToolBuilder;
	static C(Other: UObject | any): UVEditorAlignToolBuilder;
}

declare class UVEditorDistributeToolBuilder extends UVEditorBaseTransformToolBuilder { 
	static Load(ResourceName: string): UVEditorDistributeToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorDistributeToolBuilder;
	static GetDefaultObject(): UVEditorDistributeToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorDistributeToolBuilder;
	static C(Other: UObject | any): UVEditorDistributeToolBuilder;
}

declare class UVEditorTransformTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	Settings: UVEditorUVTransformPropertiesBase;
	DisplaySettings: UVEditorTransformToolDisplayProperties;
	Factories: UVEditorUVTransformOperatorFactory[];
	UVToolSelectionAPI: UVToolSelectionAPI;
	static Load(ResourceName: string): UVEditorTransformTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorTransformTool;
	static GetDefaultObject(): UVEditorTransformTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorTransformTool;
	static C(Other: UObject | any): UVEditorTransformTool;
}

declare class UVSelectToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVSelectToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVSelectToolBuilder;
	static GetDefaultObject(): UVSelectToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVSelectToolBuilder;
	static C(Other: UObject | any): UVSelectToolBuilder;
}

declare class UVSelectTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	ViewportButtonsAPI: UVToolViewportButtonsAPI;
	EmitChangeAPI: UVToolEmitChangeAPI;
	SelectionAPI: UVToolSelectionAPI;
	SelectionMechanic: UVEditorMeshSelectionMechanic;
	TransformGizmo: CombinedTransformGizmo;
	static Load(ResourceName: string): UVSelectTool;
	static Find(Outer: UObject, ResourceName: string): UVSelectTool;
	static GetDefaultObject(): UVSelectTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVSelectTool;
	static C(Other: UObject | any): UVSelectTool;
}

declare type EUVEditorParameterizeMeshUVMethod = 'PatchBuilder' | 'UVAtlas' | 'XAtlas' | 'EUVEditorParameterizeMeshUVMethod_MAX';
declare var EUVEditorParameterizeMeshUVMethod : { PatchBuilder:'PatchBuilder',UVAtlas:'UVAtlas',XAtlas:'XAtlas',EUVEditorParameterizeMeshUVMethod_MAX:'EUVEditorParameterizeMeshUVMethod_MAX', };
declare class UVEditorParameterizeMeshToolProperties extends InteractiveToolPropertySet { 
	Method: EUVEditorParameterizeMeshUVMethod;
	static Load(ResourceName: string): UVEditorParameterizeMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshToolProperties;
	static GetDefaultObject(): UVEditorParameterizeMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshToolProperties;
	static C(Other: UObject | any): UVEditorParameterizeMeshToolProperties;
}

declare class UVEditorParameterizeMeshToolUVAtlasProperties extends InteractiveToolPropertySet { 
	IslandStretch: number;
	NumIslands: number;
	TextureResolution: number;
	bUsePolygroups: boolean;
	bLayoutUDIMPerPolygroup: boolean;
	bPolygroupsEnabled: boolean;
	bUDIMsEnabled: boolean;
	static Load(ResourceName: string): UVEditorParameterizeMeshToolUVAtlasProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshToolUVAtlasProperties;
	static GetDefaultObject(): UVEditorParameterizeMeshToolUVAtlasProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshToolUVAtlasProperties;
	static C(Other: UObject | any): UVEditorParameterizeMeshToolUVAtlasProperties;
}

declare class UVEditorParameterizeMeshToolXAtlasProperties extends InteractiveToolPropertySet { 
	MaxIterations: number;
	static Load(ResourceName: string): UVEditorParameterizeMeshToolXAtlasProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshToolXAtlasProperties;
	static GetDefaultObject(): UVEditorParameterizeMeshToolXAtlasProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshToolXAtlasProperties;
	static C(Other: UObject | any): UVEditorParameterizeMeshToolXAtlasProperties;
}

declare class UVEditorParameterizeMeshToolPatchBuilderProperties extends InteractiveToolPropertySet { 
	InitialPatches: number;
	CurvatureAlignment: number;
	MergingDistortionThreshold: number;
	MergingAngleThreshold: number;
	SmoothingSteps: number;
	SmoothingAlpha: number;
	bRepack: boolean;
	TextureResolution: number;
	bUsePolygroups: boolean;
	bLayoutUDIMPerPolygroup: boolean;
	bPolygroupsEnabled: boolean;
	bUDIMsEnabled: boolean;
	static Load(ResourceName: string): UVEditorParameterizeMeshToolPatchBuilderProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshToolPatchBuilderProperties;
	static GetDefaultObject(): UVEditorParameterizeMeshToolPatchBuilderProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshToolPatchBuilderProperties;
	static C(Other: UObject | any): UVEditorParameterizeMeshToolPatchBuilderProperties;
}

declare class UVEditorParameterizeMeshOperatorFactory extends UObject { 
	Settings: UVEditorParameterizeMeshToolProperties;
	UVAtlasProperties: UVEditorParameterizeMeshToolUVAtlasProperties;
	XAtlasProperties: UVEditorParameterizeMeshToolXAtlasProperties;
	PatchBuilderProperties: UVEditorParameterizeMeshToolPatchBuilderProperties;
	static Load(ResourceName: string): UVEditorParameterizeMeshOperatorFactory;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshOperatorFactory;
	static GetDefaultObject(): UVEditorParameterizeMeshOperatorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshOperatorFactory;
	static C(Other: UObject | any): UVEditorParameterizeMeshOperatorFactory;
}

declare class UVEditorParameterizeMeshToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): UVEditorParameterizeMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshToolBuilder;
	static GetDefaultObject(): UVEditorParameterizeMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshToolBuilder;
	static C(Other: UObject | any): UVEditorParameterizeMeshToolBuilder;
}

declare class UVEditorParameterizeMeshTool extends InteractiveTool { 
	Targets: UVEditorToolMeshInput[];
	Settings: UVEditorParameterizeMeshToolProperties;
	UVAtlasProperties: UVEditorParameterizeMeshToolUVAtlasProperties;
	XAtlasProperties: UVEditorParameterizeMeshToolXAtlasProperties;
	PatchBuilderProperties: UVEditorParameterizeMeshToolPatchBuilderProperties;
	PolygroupLayerProperties: PolygroupLayersProperties;
	Factories: UVEditorParameterizeMeshOperatorFactory[];
	static Load(ResourceName: string): UVEditorParameterizeMeshTool;
	static Find(Outer: UObject, ResourceName: string): UVEditorParameterizeMeshTool;
	static GetDefaultObject(): UVEditorParameterizeMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorParameterizeMeshTool;
	static C(Other: UObject | any): UVEditorParameterizeMeshTool;
}

declare class UVEditorInitializationContext extends UVToolContextObject { 
	static Load(ResourceName: string): UVEditorInitializationContext;
	static Find(Outer: UObject, ResourceName: string): UVEditorInitializationContext;
	static GetDefaultObject(): UVEditorInitializationContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorInitializationContext;
	static C(Other: UObject | any): UVEditorInitializationContext;
}

declare class UVEditor extends AssetEditor { 
	OriginalObjectsToEdit: UObject[];
	static Load(ResourceName: string): UVEditor;
	static Find(Outer: UObject, ResourceName: string): UVEditor;
	static GetDefaultObject(): UVEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditor;
	static C(Other: UObject | any): UVEditor;
}

declare type EUVEditorBackgroundSourceType = 'Checkerboard' | 'Texture' | 'Material' | 'EUVEditorBackgroundSourceType_MAX';
declare var EUVEditorBackgroundSourceType : { Checkerboard:'Checkerboard',Texture:'Texture',Material:'Material',EUVEditorBackgroundSourceType_MAX:'EUVEditorBackgroundSourceType_MAX', };
declare class UVEditorBackgroundPreviewProperties extends InteractiveToolPropertySet { 
	bVisible: boolean;
	SourceType: EUVEditorBackgroundSourceType;
	SourceTexture: Texture2D;
	SourceMaterial: Material;
	UDIMBlocks: number[];
	bUDIMsEnabled: boolean;
	static Load(ResourceName: string): UVEditorBackgroundPreviewProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorBackgroundPreviewProperties;
	static GetDefaultObject(): UVEditorBackgroundPreviewProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorBackgroundPreviewProperties;
	static C(Other: UObject | any): UVEditorBackgroundPreviewProperties;
}

declare class UVEditorBackgroundPreview extends PreviewGeometry { 
	Settings: UVEditorBackgroundPreviewProperties;
	BackgroundComponent: TriangleSetComponent;
	BackgroundMaterial: MaterialInstanceDynamic;
	static Load(ResourceName: string): UVEditorBackgroundPreview;
	static Find(Outer: UObject, ResourceName: string): UVEditorBackgroundPreview;
	static GetDefaultObject(): UVEditorBackgroundPreview;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorBackgroundPreview;
	static C(Other: UObject | any): UVEditorBackgroundPreview;
}

declare class UVEditorGridProperties extends InteractiveToolPropertySet { 
	bDrawGrid: boolean;
	bDrawRulers: boolean;
	static Load(ResourceName: string): UVEditorGridProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorGridProperties;
	static GetDefaultObject(): UVEditorGridProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorGridProperties;
	static C(Other: UObject | any): UVEditorGridProperties;
}

declare class UDIMSpecifier { 
	UDIM: number;
	UCoord: number;
	VCoord: number;
	clone() : UDIMSpecifier;
	static C(Other: UObject | any): UDIMSpecifier;
}

declare class UVEditorUDIMProperties extends InteractiveToolPropertySet { 
	UDIMSourceAsset: string;
	UDIMSourceTexture: Texture2D;
	ActiveUDIMs: UDIMSpecifier[];
	static Load(ResourceName: string): UVEditorUDIMProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUDIMProperties;
	static GetDefaultObject(): UVEditorUDIMProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUDIMProperties;
	SetUDIMsFromTexture(): void;
	SetUDIMsFromAsset(): void;
	GetAssetNames(): string[];
	AssetByIndex(): number;
	static C(Other: UObject | any): UVEditorUDIMProperties;
}

declare class UVEditorMode extends EdMode { 
	BackgroundVisualization: UVEditorBackgroundPreview;
	UVEditorGridProperties: UVEditorGridProperties;
	UVEditorUDIMProperties: UVEditorUDIMProperties;
	RegisteredActions: UVToolAction[];
	OriginalObjectsToEdit: UObject[];
	ToolTargets: ToolTarget[];
	ToolInputObjects: UVEditorToolMeshInput[];
	LivePreviewWorld: World;
	SelectionAPI: UVToolSelectionAPI;
	PropertyObjectsToTick: InteractiveToolPropertySet[];
	static Load(ResourceName: string): UVEditorMode;
	static Find(Outer: UObject, ResourceName: string): UVEditorMode;
	static GetDefaultObject(): UVEditorMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorMode;
	static C(Other: UObject | any): UVEditorMode;
}

declare class UVEditorUVChannelProperties extends InteractiveToolPropertySet { 
	Asset: string;
	UVChannel: string;
	static Load(ResourceName: string): UVEditorUVChannelProperties;
	static Find(Outer: UObject, ResourceName: string): UVEditorUVChannelProperties;
	static GetDefaultObject(): UVEditorUVChannelProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUVChannelProperties;
	GetUVChannelNames(): string[];
	GetAssetNames(): string[];
	static C(Other: UObject | any): UVEditorUVChannelProperties;
}

declare class UVEditorUISubsystem extends AssetEditorUISubsystem { 
	static Load(ResourceName: string): UVEditorUISubsystem;
	static Find(Outer: UObject, ResourceName: string): UVEditorUISubsystem;
	static GetDefaultObject(): UVEditorUISubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorUISubsystem;
	static C(Other: UObject | any): UVEditorUISubsystem;
}

declare class UVEditorSubsystem extends EditorSubsystem { 
	ToolTargetManager: ToolTargetManager;
	static Load(ResourceName: string): UVEditorSubsystem;
	static Find(Outer: UObject, ResourceName: string): UVEditorSubsystem;
	static GetDefaultObject(): UVEditorSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UVEditorSubsystem;
	static C(Other: UObject | any): UVEditorSubsystem;
}

declare class InterchangeBlueprintPipelineBaseFactory extends Factory { 
	BlueprintType: EBlueprintType;
	ParentClass: UnrealEngineClass;
	static Load(ResourceName: string): InterchangeBlueprintPipelineBaseFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangeBlueprintPipelineBaseFactory;
	static GetDefaultObject(): InterchangeBlueprintPipelineBaseFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeBlueprintPipelineBaseFactory;
	static C(Other: UObject | any): InterchangeBlueprintPipelineBaseFactory;
}

declare class InterchangePipelineBaseFactory extends Factory { 
	static Load(ResourceName: string): InterchangePipelineBaseFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangePipelineBaseFactory;
	static GetDefaultObject(): InterchangePipelineBaseFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePipelineBaseFactory;
	static C(Other: UObject | any): InterchangePipelineBaseFactory;
}

declare class InterchangePythonPipelineAssetFactory extends Factory { 
	static Load(ResourceName: string): InterchangePythonPipelineAssetFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangePythonPipelineAssetFactory;
	static GetDefaultObject(): InterchangePythonPipelineAssetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePythonPipelineAssetFactory;
	static C(Other: UObject | any): InterchangePythonPipelineAssetFactory;
}

declare class InterchangeGraphInspectorPipeline extends InterchangePipelineBase { 
	static Load(ResourceName: string): InterchangeGraphInspectorPipeline;
	static Find(Outer: UObject, ResourceName: string): InterchangeGraphInspectorPipeline;
	static GetDefaultObject(): InterchangeGraphInspectorPipeline;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeGraphInspectorPipeline;
	static C(Other: UObject | any): InterchangeGraphInspectorPipeline;
}

declare class InterchangePipelineConfigurationGeneric extends InterchangePipelineConfigurationBase { 
	static Load(ResourceName: string): InterchangePipelineConfigurationGeneric;
	static Find(Outer: UObject, ResourceName: string): InterchangePipelineConfigurationGeneric;
	static GetDefaultObject(): InterchangePipelineConfigurationGeneric;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePipelineConfigurationGeneric;
	static C(Other: UObject | any): InterchangePipelineConfigurationGeneric;
}

declare class InterchangeFilePickerGeneric extends InterchangeFilePickerBase { 
	static Load(ResourceName: string): InterchangeFilePickerGeneric;
	static Find(Outer: UObject, ResourceName: string): InterchangeFilePickerGeneric;
	static GetDefaultObject(): InterchangeFilePickerGeneric;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeFilePickerGeneric;
	static C(Other: UObject | any): InterchangeFilePickerGeneric;
}

declare class InterchangeResultMeshWarning extends InterchangeResultWarning { 
	MeshName: string;
	static Load(ResourceName: string): InterchangeResultMeshWarning;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshWarning;
	static GetDefaultObject(): InterchangeResultMeshWarning;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshWarning;
	static C(Other: UObject | any): InterchangeResultMeshWarning;
}

declare class InterchangeResultTextureWarning extends InterchangeResultWarning { 
	TextureName: string;
	static Load(ResourceName: string): InterchangeResultTextureWarning;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultTextureWarning;
	static GetDefaultObject(): InterchangeResultTextureWarning;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultTextureWarning;
	static C(Other: UObject | any): InterchangeResultTextureWarning;
}

declare class InterchangeResultMeshError extends InterchangeResultError { 
	MeshName: string;
	static Load(ResourceName: string): InterchangeResultMeshError;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshError;
	static GetDefaultObject(): InterchangeResultMeshError;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshError;
	static C(Other: UObject | any): InterchangeResultMeshError;
}

declare class InterchangeResultMeshWarning_Generic extends InterchangeResultMeshWarning { 
	Text: string;
	static Load(ResourceName: string): InterchangeResultMeshWarning_Generic;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshWarning_Generic;
	static GetDefaultObject(): InterchangeResultMeshWarning_Generic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshWarning_Generic;
	static C(Other: UObject | any): InterchangeResultMeshWarning_Generic;
}

declare class InterchangeResultMeshError_Generic extends InterchangeResultMeshError { 
	Text: string;
	static Load(ResourceName: string): InterchangeResultMeshError_Generic;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshError_Generic;
	static GetDefaultObject(): InterchangeResultMeshError_Generic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshError_Generic;
	static C(Other: UObject | any): InterchangeResultMeshError_Generic;
}

declare class InterchangeResultMeshWarning_TooManyUVs extends InterchangeResultMeshWarning { 
	ExcessUVs: number;
	static Load(ResourceName: string): InterchangeResultMeshWarning_TooManyUVs;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshWarning_TooManyUVs;
	static GetDefaultObject(): InterchangeResultMeshWarning_TooManyUVs;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshWarning_TooManyUVs;
	static C(Other: UObject | any): InterchangeResultMeshWarning_TooManyUVs;
}

declare class InterchangeResultTextureWarning_TextureFileDoNotExist extends InterchangeResultTextureWarning { 
	Text: string;
	MaterialName: string;
	static Load(ResourceName: string): InterchangeResultTextureWarning_TextureFileDoNotExist;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultTextureWarning_TextureFileDoNotExist;
	static GetDefaultObject(): InterchangeResultTextureWarning_TextureFileDoNotExist;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultTextureWarning_TextureFileDoNotExist;
	static C(Other: UObject | any): InterchangeResultTextureWarning_TextureFileDoNotExist;
}

declare class InterchangeTextureWriter extends InterchangeWriterBase { 
	static Load(ResourceName: string): InterchangeTextureWriter;
	static Find(Outer: UObject, ResourceName: string): InterchangeTextureWriter;
	static GetDefaultObject(): InterchangeTextureWriter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTextureWriter;
	static C(Other: UObject | any): InterchangeTextureWriter;
}

declare class GeometryCacheTrack extends UObject { 
	Duration: number;
	static Load(ResourceName: string): GeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack;
	static GetDefaultObject(): GeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack;
	static C(Other: UObject | any): GeometryCacheTrack;
}

declare class GeometryCache extends UObject { 
	AssetImportData: AssetImportData;
	ThumbnailInfo: ThumbnailInfo;
	Materials: MaterialInterface[];
	Tracks: GeometryCacheTrack[];
	StartFrame: number;
	EndFrame: number;
	Hash: number;
	static Load(ResourceName: string): GeometryCache;
	static Find(Outer: UObject, ResourceName: string): GeometryCache;
	static GetDefaultObject(): GeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCache;
	static C(Other: UObject | any): GeometryCache;
}

declare class GeometryCacheComponent extends MeshComponent { 
	GeometryCache: GeometryCache;
	bRunning: boolean;
	bLooping: boolean;
	bExtrapolateFrames: boolean;
	StartTimeOffset: number;
	PlaybackSpeed: number;
	MotionVectorScale: number;
	NumTracks: number;
	ElapsedTime: number;
	Duration: number;
	bManualTick: boolean;
	bOverrideWireframeColor: boolean;
	WireframeOverrideColor: LinearColor;
	static Load(ResourceName: string): GeometryCacheComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheComponent;
	TickAtThisTime(Time: number,bInIsRunning: boolean,bInBackwards: boolean,bInIsLooping: boolean): void;
	Stop(): void;
	SetWireframeOverrideColor(Color: LinearColor): void;
	SetStartTimeOffset(NewStartTimeOffset: number): void;
	SetPlaybackSpeed(NewPlaybackSpeed: number): void;
	SetOverrideWireframeColor(bOverride: boolean): void;
	SetMotionVectorScale(NewMotionVectorScale: number): void;
	SetLooping(bNewLooping: boolean): void;
	SetGeometryCache(NewGeomCache: GeometryCache): boolean;
	SetExtrapolateFrames(bNewExtrapolating: boolean): void;
	PlayReversedFromEnd(): void;
	PlayReversed(): void;
	PlayFromStart(): void;
	Play(): void;
	Pause(): void;
	IsPlayingReversed(): boolean;
	IsPlaying(): boolean;
	IsLooping(): boolean;
	IsExtrapolatingFrames(): boolean;
	GetWireframeOverrideColor(): LinearColor;
	GetStartTimeOffset(): number;
	GetPlaybackSpeed(): number;
	GetPlaybackDirection(): number;
	GetOverrideWireframeColor(): boolean;
	GetNumberOfFrames(): number;
	GetMotionVectorScale(): number;
	GetDuration(): number;
	GetAnimationTime(): number;
	static C(Other: UObject | any): GeometryCacheComponent;
}

declare class GeometryCacheActor extends Actor { 
	GeometryCacheComponent: GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheActor;
	GetGeometryCacheComponent(): GeometryCacheComponent;
	static C(Other: UObject | any): GeometryCacheActor;
}

declare class GeometryCacheCodecBase extends UObject { 
	TopologyRanges: number[];
	static Load(ResourceName: string): GeometryCacheCodecBase;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecBase;
	static GetDefaultObject(): GeometryCacheCodecBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecBase;
	static C(Other: UObject | any): GeometryCacheCodecBase;
}

declare class GeometryCacheCodecRaw extends GeometryCacheCodecBase { 
	DummyProperty: number;
	static Load(ResourceName: string): GeometryCacheCodecRaw;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecRaw;
	static GetDefaultObject(): GeometryCacheCodecRaw;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecRaw;
	static C(Other: UObject | any): GeometryCacheCodecRaw;
}

declare class GeometryCacheCodecV1 extends GeometryCacheCodecBase { 
	static Load(ResourceName: string): GeometryCacheCodecV1;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecV1;
	static GetDefaultObject(): GeometryCacheCodecV1;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecV1;
	static C(Other: UObject | any): GeometryCacheCodecV1;
}

declare class GeometryCacheMeshData { 
	clone() : GeometryCacheMeshData;
	static C(Other: UObject | any): GeometryCacheMeshData;
}

declare class GeometryCacheTrack_FlipbookAnimation extends GeometryCacheTrack { 
	NumMeshSamples: number;
	static Load(ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static GetDefaultObject(): GeometryCacheTrack_FlipbookAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_FlipbookAnimation;
	AddMeshSample(MeshData: GeometryCacheMeshData,SampleTime: number): void;
	static C(Other: UObject | any): GeometryCacheTrack_FlipbookAnimation;
}

declare class GeometryCacheTrackStreamable extends GeometryCacheTrack { 
	Codec: GeometryCacheCodecBase;
	StartSampleTime: number;
	static Load(ResourceName: string): GeometryCacheTrackStreamable;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrackStreamable;
	static GetDefaultObject(): GeometryCacheTrackStreamable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrackStreamable;
	static C(Other: UObject | any): GeometryCacheTrackStreamable;
}

declare class GeometryCacheTrack_TransformAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformAnimation;
}

declare class GeometryCacheTrack_TransformGroupAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformGroupAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformGroupAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformGroupAnimation;
}

declare class NiagaraGeometryCacheReference { 
	GeometryCache: GeometryCache;
	GeometryCacheUserParamBinding: NiagaraUserParameterBinding;
	OverrideMaterials: MaterialInterface[];
	clone() : NiagaraGeometryCacheReference;
	static C(Other: UObject | any): NiagaraGeometryCacheReference;
}

declare class NiagaraGeometryCacheRendererProperties extends NiagaraRendererProperties { 
	GeometryCaches: NiagaraGeometryCacheReference[];
	bIsLooping: boolean;
	ComponentCountLimit: number;
	PositionBinding: NiagaraVariableAttributeBinding;
	RotationBinding: NiagaraVariableAttributeBinding;
	ScaleBinding: NiagaraVariableAttributeBinding;
	ElapsedTimeBinding: NiagaraVariableAttributeBinding;
	EnabledBinding: NiagaraVariableAttributeBinding;
	ArrayIndexBinding: NiagaraVariableAttributeBinding;
	RendererVisibilityTagBinding: NiagaraVariableAttributeBinding;
	RendererVisibility: number;
	bAssignComponentsOnParticleID: boolean;
	static Load(ResourceName: string): NiagaraGeometryCacheRendererProperties;
	static Find(Outer: UObject, ResourceName: string): NiagaraGeometryCacheRendererProperties;
	static GetDefaultObject(): NiagaraGeometryCacheRendererProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraGeometryCacheRendererProperties;
	static C(Other: UObject | any): NiagaraGeometryCacheRendererProperties;
}

declare type EAlembicSamplingType = 'PerFrame' | 'PerXFrames' | 'PerTimeStep' | 'EAlembicSamplingType_MAX';
declare var EAlembicSamplingType : { PerFrame:'PerFrame',PerXFrames:'PerXFrames',PerTimeStep:'PerTimeStep',EAlembicSamplingType_MAX:'EAlembicSamplingType_MAX', };
declare class AbcSamplingSettings { 
	SamplingType: EAlembicSamplingType;
	FrameSteps: number;
	TimeSteps: number;
	FrameStart: number;
	FrameEnd: number;
	bSkipEmpty: boolean;
	clone() : AbcSamplingSettings;
	static C(Other: UObject | any): AbcSamplingSettings;
}

declare class AbcNormalGenerationSettings { 
	bForceOneSmoothingGroupPerObject: boolean;
	HardEdgeAngleThreshold: number;
	bRecomputeNormals: boolean;
	bIgnoreDegenerateTriangles: boolean;
	bSkipComputingTangents: boolean;
	clone() : AbcNormalGenerationSettings;
	static C(Other: UObject | any): AbcNormalGenerationSettings;
}

declare class AbcMaterialSettings { 
	bCreateMaterials: boolean;
	bFindMaterials: boolean;
	clone() : AbcMaterialSettings;
	static C(Other: UObject | any): AbcMaterialSettings;
}

declare type EBaseCalculationType = 'None' | 'PercentageBased' | 'FixedNumber' | 'NoCompression' | 'EBaseCalculationType_MAX';
declare var EBaseCalculationType : { None:'None',PercentageBased:'PercentageBased',FixedNumber:'FixedNumber',NoCompression:'NoCompression',EBaseCalculationType_MAX:'EBaseCalculationType_MAX', };
declare class AbcCompressionSettings { 
	bMergeMeshes: boolean;
	bBakeMatrixAnimation: boolean;
	BaseCalculationType: EBaseCalculationType;
	PercentageOfTotalBases: number;
	MaxNumberOfBases: number;
	MinimumNumberOfVertexInfluencePercentage: number;
	clone() : AbcCompressionSettings;
	static C(Other: UObject | any): AbcCompressionSettings;
}

declare class AbcStaticMeshSettings { 
	bMergeMeshes: boolean;
	bPropagateMatrixTransformations: boolean;
	bGenerateLightmapUVs: boolean;
	clone() : AbcStaticMeshSettings;
	static C(Other: UObject | any): AbcStaticMeshSettings;
}

declare type EAbcGeometryCacheMotionVectorsImport = 'NoMotionVectors' | 'ImportAbcVelocitiesAsMotionVectors' | 'CalculateMotionVectorsDuringImport' | 'EAbcGeometryCacheMotionVectorsImport_MAX';
declare var EAbcGeometryCacheMotionVectorsImport : { NoMotionVectors:'NoMotionVectors',ImportAbcVelocitiesAsMotionVectors:'ImportAbcVelocitiesAsMotionVectors',CalculateMotionVectorsDuringImport:'CalculateMotionVectorsDuringImport',EAbcGeometryCacheMotionVectorsImport_MAX:'EAbcGeometryCacheMotionVectorsImport_MAX', };
declare class AbcGeometryCacheSettings { 
	bFlattenTracks: boolean;
	bStoreImportedVertexNumbers: boolean;
	bApplyConstantTopologyOptimizations: boolean;
	bCalculateMotionVectorsDuringImport: boolean;
	MotionVectors: EAbcGeometryCacheMotionVectorsImport;
	bOptimizeIndexBuffers: boolean;
	CompressedPositionPrecision: number;
	CompressedTextureCoordinatesNumberOfBits: number;
	clone() : AbcGeometryCacheSettings;
	static C(Other: UObject | any): AbcGeometryCacheSettings;
}

declare type EAbcConversionPreset = 'Maya' | 'Max' | 'Custom' | 'EAbcConversionPreset_MAX';
declare var EAbcConversionPreset : { Maya:'Maya',Max:'Max',Custom:'Custom',EAbcConversionPreset_MAX:'EAbcConversionPreset_MAX', };
declare class AbcConversionSettings { 
	Preset: EAbcConversionPreset;
	bFlipU: boolean;
	bFlipV: boolean;
	Scale: Vector;
	Rotation: Vector;
	clone() : AbcConversionSettings;
	static C(Other: UObject | any): AbcConversionSettings;
}

declare class AbcAssetImportData extends AssetImportData { 
	TrackNames: string[];
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	MaterialSettings: AbcMaterialSettings;
	CompressionSettings: AbcCompressionSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	GeometryCacheSettings: AbcGeometryCacheSettings;
	ConversionSettings: AbcConversionSettings;
	static Load(ResourceName: string): AbcAssetImportData;
	static Find(Outer: UObject, ResourceName: string): AbcAssetImportData;
	static GetDefaultObject(): AbcAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcAssetImportData;
	static C(Other: UObject | any): AbcAssetImportData;
}

declare type EAlembicImportType = 'StaticMesh' | 'GeometryCache' | 'Skeletal' | 'EAlembicImportType_MAX';
declare var EAlembicImportType : { StaticMesh:'StaticMesh',GeometryCache:'GeometryCache',Skeletal:'Skeletal',EAlembicImportType_MAX:'EAlembicImportType_MAX', };
declare class AbcImportSettings extends UObject { 
	ImportType: EAlembicImportType;
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	MaterialSettings: AbcMaterialSettings;
	CompressionSettings: AbcCompressionSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	GeometryCacheSettings: AbcGeometryCacheSettings;
	ConversionSettings: AbcConversionSettings;
	static Load(ResourceName: string): AbcImportSettings;
	static Find(Outer: UObject, ResourceName: string): AbcImportSettings;
	static GetDefaultObject(): AbcImportSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcImportSettings;
	static C(Other: UObject | any): AbcImportSettings;
}

declare class AlembicTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): AlembicTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): AlembicTestCommandlet;
	static GetDefaultObject(): AlembicTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicTestCommandlet;
	static C(Other: UObject | any): AlembicTestCommandlet;
}

declare class AlembicImportFactory extends Factory { 
	ImportSettings: AbcImportSettings;
	bShowOption: boolean;
	static Load(ResourceName: string): AlembicImportFactory;
	static Find(Outer: UObject, ResourceName: string): AlembicImportFactory;
	static GetDefaultObject(): AlembicImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicImportFactory;
	static C(Other: UObject | any): AlembicImportFactory;
}

declare class ActorFactoryGeometryCache extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryGeometryCache;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCache;
	static GetDefaultObject(): ActorFactoryGeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCache;
	static C(Other: UObject | any): ActorFactoryGeometryCache;
}

declare class GeometryCacheThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): GeometryCacheThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheThumbnailRenderer;
	static GetDefaultObject(): GeometryCacheThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheThumbnailRenderer;
	static C(Other: UObject | any): GeometryCacheThumbnailRenderer;
}

declare class ImgMediaSettings extends UObject { 
	DefaultFrameRate: FrameRate;
	CacheBehindPercentage: number;
	CacheSizeGB: number;
	CacheThreads: number;
	CacheThreadStackSizeKB: number;
	GlobalCacheSizeGB: number;
	UseGlobalCache: boolean;
	ExrDecoderThreads: number;
	DefaultProxy: string;
	UseDefaultProxy: boolean;
	static Load(ResourceName: string): ImgMediaSettings;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSettings;
	static GetDefaultObject(): ImgMediaSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSettings;
	static C(Other: UObject | any): ImgMediaSettings;
}

declare class ImgMediaSourceCustomizationSequenceProxy { 
	clone() : ImgMediaSourceCustomizationSequenceProxy;
	static C(Other: UObject | any): ImgMediaSourceCustomizationSequenceProxy;
}

declare class ImgMediaSource extends BaseMediaSource { 
	IsPathRelativeToProjectRoot: boolean;
	FrameRateOverride: FrameRate;
	ProxyOverride: string;
	bFillGapsInSequence: boolean;
	SequenceProxy: ImgMediaSourceCustomizationSequenceProxy;
	SequencePath: DirectoryPath;
	static Load(ResourceName: string): ImgMediaSource;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSource;
	static GetDefaultObject(): ImgMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSource;
	SetTokenizedSequencePath(Path: string): void;
	SetSequencePath(Path: string): void;
	SetMipLevelDistance(Distance: number): void;
	RemoveTargetObject(InActor: Actor): void;
	RemoveGlobalCamera(InActor: Actor): void;
	GetSequencePath(): string;
	GetProxies(OutProxies?: string[]): {OutProxies: string[]};
	AddTargetObject(InActor: Actor): void;
	AddGlobalCamera(InActor: Actor): void;
	static C(Other: UObject | any): ImgMediaSource;
}

declare class MovieSceneMediaPlayerPropertySection extends MovieSceneSection { 
	MediaSource: MediaSource;
	bLoop: boolean;
	static Load(ResourceName: string): MovieSceneMediaPlayerPropertySection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaPlayerPropertySection;
	static GetDefaultObject(): MovieSceneMediaPlayerPropertySection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaPlayerPropertySection;
	static C(Other: UObject | any): MovieSceneMediaPlayerPropertySection;
}

declare class MovieSceneMediaPlayerPropertyTrack extends MovieScenePropertyTrack { 
	static Load(ResourceName: string): MovieSceneMediaPlayerPropertyTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaPlayerPropertyTrack;
	static GetDefaultObject(): MovieSceneMediaPlayerPropertyTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaPlayerPropertyTrack;
	static C(Other: UObject | any): MovieSceneMediaPlayerPropertyTrack;
}

declare class MediaSourceCacheSettings { 
	bOverride: boolean;
	TimeToLookAhead: number;
	clone() : MediaSourceCacheSettings;
	static C(Other: UObject | any): MediaSourceCacheSettings;
}

declare class MovieSceneMediaSection extends MovieSceneSection { 
	MediaSource: MediaSource;
	bLooping: boolean;
	StartFrameOffset: FrameNumber;
	MediaTexture: MediaTexture;
	MediaSoundComponent: MediaSoundComponent;
	bUseExternalMediaPlayer: boolean;
	ExternalMediaPlayer: MediaPlayer;
	CacheSettings: MediaSourceCacheSettings;
	bHasMediaPlayerProxy: boolean;
	ThumbnailReferenceOffset: number;
	static Load(ResourceName: string): MovieSceneMediaSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaSection;
	static GetDefaultObject(): MovieSceneMediaSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaSection;
	static C(Other: UObject | any): MovieSceneMediaSection;
}

declare class MovieSceneMediaTrack extends MovieSceneNameableTrack { 
	MediaSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneMediaTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaTrack;
	static GetDefaultObject(): MovieSceneMediaTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaTrack;
	static C(Other: UObject | any): MovieSceneMediaTrack;
}

declare class MediaPlateAssetUserData extends AssetUserData { 
	static Load(ResourceName: string): MediaPlateAssetUserData;
	static Find(Outer: UObject, ResourceName: string): MediaPlateAssetUserData;
	static GetDefaultObject(): MediaPlateAssetUserData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlateAssetUserData;
	static C(Other: UObject | any): MediaPlateAssetUserData;
}

declare type EMediaTextureVisibleMipsTiles = 'None' | 'Plane' | 'Sphere' | 'EMediaTextureVisibleMipsTiles_MAX';
declare var EMediaTextureVisibleMipsTiles : { None:'None',Plane:'Plane',Sphere:'Sphere',EMediaTextureVisibleMipsTiles_MAX:'EMediaTextureVisibleMipsTiles_MAX', };
declare class MediaPlateComponent extends ActorComponent { 
	bPlayOnOpen: boolean;
	bAutoPlay: boolean;
	bEnableAudio: boolean;
	StartTime: number;
	bIsAspectRatioAuto: boolean;
	SoundComponent: MediaSoundComponent;
	StaticMeshComponent: StaticMeshComponent;
	Letterboxes: StaticMeshComponent[];
	MediaPlaylist: MediaPlaylist;
	PlaylistIndex: number;
	CacheSettings: MediaSourceCacheSettings;
	bIsMediaPlatePlaying: boolean;
	bPlayOnlyWhenVisible: boolean;
	bLoop: boolean;
	VisibleMipsTilesCalculations: EMediaTextureVisibleMipsTiles;
	MipMapBias: number;
	LetterboxAspectRatio: number;
	MeshRange: Vector2D;
	MediaTexture: MediaTexture;
	MediaPlayer: MediaPlayer;
	static Load(ResourceName: string): MediaPlateComponent;
	static Find(Outer: UObject, ResourceName: string): MediaPlateComponent;
	static GetDefaultObject(): MediaPlateComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlateComponent;
	SetPlayOnlyWhenVisible(bInPlayOnlyWhenVisible: boolean): void;
	SetMeshRange(InMeshRange: Vector2D): void;
	SetLoop(bInLoop: boolean): void;
	SetLetterboxAspectRatio(AspectRatio: number): void;
	Seek(Time: Timespan): boolean;
	Rewind(): boolean;
	Play(): void;
	Pause(): void;
	Open(): void;
	OnMediaOpened(DeviceUrl: string): void;
	OnMediaEnd(): void;
	IsMediaPlatePlaying(): boolean;
	GetMeshRange(): Vector2D;
	GetMediaTexture(): MediaTexture;
	GetMediaPlayer(): MediaPlayer;
	GetLoop(): boolean;
	GetLetterboxAspectRatio(): number;
	Close(): void;
	static C(Other: UObject | any): MediaPlateComponent;
}

declare class MediaPlate extends Actor { 
	MediaPlateComponent: MediaPlateComponent;
	StaticMeshComponent: StaticMeshComponent;
	static GetDefaultObject(): MediaPlate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlate;
	static C(Other: UObject | any): MediaPlate;
}

declare type EMediaPlayerRecordingNumerationStyle = 'AppendFrameNumber' | 'AppendSampleTime' | 'EMediaPlayerRecordingNumerationStyle_MAX';
declare var EMediaPlayerRecordingNumerationStyle : { AppendFrameNumber:'AppendFrameNumber',AppendSampleTime:'AppendSampleTime',EMediaPlayerRecordingNumerationStyle_MAX:'EMediaPlayerRecordingNumerationStyle_MAX', };
declare type EMediaPlayerRecordingImageFormat = 'PNG' | 'JPEG' | 'BMP' | 'EXR' | 'EMediaPlayerRecordingImageFormat_MAX';
declare var EMediaPlayerRecordingImageFormat : { PNG:'PNG',JPEG:'JPEG',BMP:'BMP',EXR:'EXR',EMediaPlayerRecordingImageFormat_MAX:'EMediaPlayerRecordingImageFormat_MAX', };
declare class MediaPlayerRecordingSettings { 
	bActive: boolean;
	bRecordMediaFrame: boolean;
	BaseFilename: string;
	NumerationStyle: EMediaPlayerRecordingNumerationStyle;
	ImageFormat: EMediaPlayerRecordingImageFormat;
	CompressionQuality: number;
	bResetAlpha: boolean;
	clone() : MediaPlayerRecordingSettings;
	static C(Other: UObject | any): MediaPlayerRecordingSettings;
}

declare class MediaPlayerRecording extends SequenceRecordingBase { 
	RecordingSettings: MediaPlayerRecordingSettings;
	MediaPlayerToRecord: MediaPlayer;
	static Load(ResourceName: string): MediaPlayerRecording;
	static Find(Outer: UObject, ResourceName: string): MediaPlayerRecording;
	static GetDefaultObject(): MediaPlayerRecording;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerRecording;
	static C(Other: UObject | any): MediaPlayerRecording;
}

declare class MediaSequenceRecorderSettings extends UObject { 
	bRecordMediaPlayerEnabled: boolean;
	MediaPlayerSubDirectory: string;
	static Load(ResourceName: string): MediaSequenceRecorderSettings;
	static Find(Outer: UObject, ResourceName: string): MediaSequenceRecorderSettings;
	static GetDefaultObject(): MediaSequenceRecorderSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSequenceRecorderSettings;
	static C(Other: UObject | any): MediaSequenceRecorderSettings;
}

declare class MediaPlayerEditorMediaContext extends ToolMenuContextBase { 
	SelectedAsset: UObject;
	StyleSetName: string;
	static Load(ResourceName: string): MediaPlayerEditorMediaContext;
	static Find(Outer: UObject, ResourceName: string): MediaPlayerEditorMediaContext;
	static GetDefaultObject(): MediaPlayerEditorMediaContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerEditorMediaContext;
	static C(Other: UObject | any): MediaPlayerEditorMediaContext;
}

declare type EMediaPlayerEditorScale = 'Fill' | 'Fit' | 'Original' | 'EMediaPlayerEditorScale_MAX';
declare var EMediaPlayerEditorScale : { Fill:'Fill',Fit:'Fit',Original:'Original',EMediaPlayerEditorScale_MAX:'EMediaPlayerEditorScale_MAX', };
declare class MediaPlayerEditorSettings extends UObject { 
	DesiredPlayerName: string;
	ShowTextOverlays: boolean;
	ViewportScale: EMediaPlayerEditorScale;
	static Load(ResourceName: string): MediaPlayerEditorSettings;
	static Find(Outer: UObject, ResourceName: string): MediaPlayerEditorSettings;
	static GetDefaultObject(): MediaPlayerEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerEditorSettings;
	static C(Other: UObject | any): MediaPlayerEditorSettings;
}

declare class FileMediaSourceFactoryNew extends Factory { 
	static Load(ResourceName: string): FileMediaSourceFactoryNew;
	static Find(Outer: UObject, ResourceName: string): FileMediaSourceFactoryNew;
	static GetDefaultObject(): FileMediaSourceFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FileMediaSourceFactoryNew;
	static C(Other: UObject | any): FileMediaSourceFactoryNew;
}

declare class MediaPlayerFactoryNew extends Factory { 
	static Load(ResourceName: string): MediaPlayerFactoryNew;
	static Find(Outer: UObject, ResourceName: string): MediaPlayerFactoryNew;
	static GetDefaultObject(): MediaPlayerFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerFactoryNew;
	static C(Other: UObject | any): MediaPlayerFactoryNew;
}

declare class MediaPlaylistFactoryNew extends Factory { 
	static Load(ResourceName: string): MediaPlaylistFactoryNew;
	static Find(Outer: UObject, ResourceName: string): MediaPlaylistFactoryNew;
	static GetDefaultObject(): MediaPlaylistFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlaylistFactoryNew;
	static C(Other: UObject | any): MediaPlaylistFactoryNew;
}

declare class MediaTextureFactoryNew extends Factory { 
	static Load(ResourceName: string): MediaTextureFactoryNew;
	static Find(Outer: UObject, ResourceName: string): MediaTextureFactoryNew;
	static GetDefaultObject(): MediaTextureFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaTextureFactoryNew;
	static C(Other: UObject | any): MediaTextureFactoryNew;
}

declare class PlatformMediaSourceFactoryNew extends Factory { 
	static Load(ResourceName: string): PlatformMediaSourceFactoryNew;
	static Find(Outer: UObject, ResourceName: string): PlatformMediaSourceFactoryNew;
	static GetDefaultObject(): PlatformMediaSourceFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformMediaSourceFactoryNew;
	static C(Other: UObject | any): PlatformMediaSourceFactoryNew;
}

declare class StreamMediaSourceFactoryNew extends Factory { 
	static Load(ResourceName: string): StreamMediaSourceFactoryNew;
	static Find(Outer: UObject, ResourceName: string): StreamMediaSourceFactoryNew;
	static GetDefaultObject(): StreamMediaSourceFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StreamMediaSourceFactoryNew;
	static C(Other: UObject | any): StreamMediaSourceFactoryNew;
}

declare class ActorFactoryMediaPlate extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryMediaPlate;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryMediaPlate;
	static GetDefaultObject(): ActorFactoryMediaPlate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryMediaPlate;
	static C(Other: UObject | any): ActorFactoryMediaPlate;
}

declare class SequencerExportFBXParams { 
	World: World;
	Sequence: LevelSequence;
	RootSequence: LevelSequence;
	Bindings: MovieSceneBindingProxy[];
	MasterTracks: MovieSceneTrack[];
	OverrideOptions: FbxExportOption;
	FBXFileName: string;
	clone() : SequencerExportFBXParams;
	static C(Other: UObject | any): SequencerExportFBXParams;
	ExportLevelSequenceFBX(): boolean;
	static ExportLevelSequenceFBX(InParams: SequencerExportFBXParams): boolean;
}

declare class SequencerToolsFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SequencerToolsFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): SequencerToolsFunctionLibrary;
	static GetDefaultObject(): SequencerToolsFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerToolsFunctionLibrary;
	static LinkAnimSequence(Sequence: LevelSequence,AnimSequence: AnimSequence,ExportOptions: AnimSeqExportOption,Binding: MovieSceneBindingProxy): boolean;
	static IsRenderingMovie(): boolean;
	static IsEventEndpointValid(InEndpoint: SequencerQuickBindingResult): boolean;
	static ImportLevelSequenceFBX(InWorld: World,InSequence: LevelSequence,InBindings: MovieSceneBindingProxy[],InImportFBXSettings: MovieSceneUserImportFBXSettings,InImportFilename: string): boolean;
	static ImportFBXToControlRig(World: World,InSequence: LevelSequence,ActorWithControlRigTrack: string,SelectedControlRigNames: string[],ImportFBXControlRigSettings: MovieSceneUserImportFBXControlRigSettings,ImportFilename: string): boolean;
	static GetObjectBindings(InWorld: World,InSequence: LevelSequence,InObject: UObject[],InRange: SequencerScriptingRange): SequencerBoundObjects[];
	static GetLevelSequenceLinkFromAnimSequence(InAnimSequence: AnimSequence): AnimSequenceLevelSequenceLink;
	static GetBoundObjects(InWorld: World,InSequence: LevelSequence,InBindings: MovieSceneBindingProxy[],InRange: SequencerScriptingRange): SequencerBoundObjects[];
	static GetAnimSequenceLinkFromLevelSequence(InLevelSequence: LevelSequence): LevelSequenceAnimSequenceLink;
	static ExportLevelSequenceFBX(InParams: SequencerExportFBXParams): boolean;
	static ExportAnimSequence(World: World,Sequence: LevelSequence,AnimSequence: AnimSequence,ExportOption: AnimSeqExportOption,Binding: MovieSceneBindingProxy,bCreateLink: boolean): boolean;
	static CreateQuickBinding(InSequence: MovieSceneSequence,InObject: UObject,InFunctionName: string,bCallInEditor: boolean): SequencerQuickBindingResult;
	static CreateEvent(InSequence: MovieSceneSequence,InSection: MovieSceneEventSectionBase,InEndpoint: SequencerQuickBindingResult,InPayload: string[]): MovieSceneEvent;
	static ClearLinkedAnimSequences(InLevelSequence: LevelSequence): void;
	static CancelMovieRender(): void;
	static C(Other: UObject | any): SequencerToolsFunctionLibrary;
}

declare class OnRenderMovieStopped__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnRenderMovieStopped__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnRenderMovieStopped__PythonCallable;
	static GetDefaultObject(): OnRenderMovieStopped__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnRenderMovieStopped__PythonCallable;
	static C(Other: UObject | any): OnRenderMovieStopped__PythonCallable;
}

declare class LayersBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LayersBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): LayersBlueprintLibrary;
	static GetDefaultObject(): LayersBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LayersBlueprintLibrary;
	static RemoveActorFromLayer(InActor: Actor,Layer: ActorLayer): void;
	static GetActors(WorldContextObject: UObject,ActorLayer: ActorLayer): Actor[];
	static AddActorToLayer(InActor: Actor,Layer: ActorLayer): void;
	static C(Other: UObject | any): LayersBlueprintLibrary;
}

declare class AndroidPermissionCallbackProxy extends UObject { 
	OnPermissionsGrantedDynamicDelegate: UnrealEngineMulticastDelegate<(Permissions: string[], GrantResults: boolean[]) => void>;
	static Load(ResourceName: string): AndroidPermissionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionCallbackProxy;
	static GetDefaultObject(): AndroidPermissionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionCallbackProxy;
}

declare class AndroidPermissionFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AndroidPermissionFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionFunctionLibrary;
	static GetDefaultObject(): AndroidPermissionFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionFunctionLibrary;
	static CheckPermission(permission: string): boolean;
	static AcquirePermissions(Permissions: string[]): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionFunctionLibrary;
}

declare class AndroidPermissionDynamicDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AndroidPermissionDynamicDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionDynamicDelegate__PythonCallable;
	static GetDefaultObject(): AndroidPermissionDynamicDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionDynamicDelegate__PythonCallable;
	static C(Other: UObject | any): AndroidPermissionDynamicDelegate__PythonCallable;
}

declare class AppleImageInterface extends Interface { 
	static Load(ResourceName: string): AppleImageInterface;
	static Find(Outer: UObject, ResourceName: string): AppleImageInterface;
	static GetDefaultObject(): AppleImageInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageInterface;
	static C(Other: UObject | any): AppleImageInterface;
}

declare class AppleImageUtilsImageConversionResult { 
	Error: string;
	ImageData: number[];
	clone() : AppleImageUtilsImageConversionResult;
	static C(Other: UObject | any): AppleImageUtilsImageConversionResult;
}

declare type ETextureRotationDirection = 'None' | 'Left' | 'Right' | 'Down' | 'LeftMirrored' | 'RightMirrored' | 'DownMirrored' | 'UpMirrored' | 'ETextureRotationDirection_MAX';
declare var ETextureRotationDirection : { None:'None',Left:'Left',Right:'Right',Down:'Down',LeftMirrored:'LeftMirrored',RightMirrored:'RightMirrored',DownMirrored:'DownMirrored',UpMirrored:'UpMirrored',ETextureRotationDirection_MAX:'ETextureRotationDirection_MAX', };
declare class AppleImageUtilsBaseAsyncTaskBlueprintProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) => void>;
	ConversionResult: AppleImageUtilsImageConversionResult;
	static Load(ResourceName: string): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static Find(Outer: UObject, ResourceName: string): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static GetDefaultObject(): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToTIFF(SourceImage: Texture,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToPNG(SourceImage: Texture,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToJPEG(SourceImage: Texture,Quality: number,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToHEIF(SourceImage: Texture,Quality: number,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static C(Other: UObject | any): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
}

declare class AppleImageConversionDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AppleImageConversionDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AppleImageConversionDelegate__PythonCallable;
	static GetDefaultObject(): AppleImageConversionDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageConversionDelegate__PythonCallable;
	static C(Other: UObject | any): AppleImageConversionDelegate__PythonCallable;
}

declare class K2Node_ConvertToJPEG extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToJPEG;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToJPEG;
	static GetDefaultObject(): K2Node_ConvertToJPEG;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToJPEG;
	static C(Other: UObject | any): K2Node_ConvertToJPEG;
}

declare class K2Node_ConvertToHEIF extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToHEIF;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToHEIF;
	static GetDefaultObject(): K2Node_ConvertToHEIF;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToHEIF;
	static C(Other: UObject | any): K2Node_ConvertToHEIF;
}

declare class K2Node_ConvertToTIFF extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToTIFF;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToTIFF;
	static GetDefaultObject(): K2Node_ConvertToTIFF;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToTIFF;
	static C(Other: UObject | any): K2Node_ConvertToTIFF;
}

declare class K2Node_ConvertToPNG extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToPNG;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToPNG;
	static GetDefaultObject(): K2Node_ConvertToPNG;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToPNG;
	static C(Other: UObject | any): K2Node_ConvertToPNG;
}

declare type ECollectionScriptingShareType = 'Local' | 'Private' | 'Shared' | 'ECollectionScriptingShareType_MAX';
declare var ECollectionScriptingShareType : { Local:'Local',Private:'Private',Shared:'Shared',ECollectionScriptingShareType_MAX:'ECollectionScriptingShareType_MAX', };
declare class AssetTagsSubsystem extends EngineSubsystem { 
	static Load(ResourceName: string): AssetTagsSubsystem;
	static Find(Outer: UObject, ResourceName: string): AssetTagsSubsystem;
	static GetDefaultObject(): AssetTagsSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetTagsSubsystem;
	ReparentCollection(Name: string,NewParentName: string): boolean;
	RenameCollection(Name: string,NewName: string): boolean;
	RemoveAssetsFromCollection(Name: string,AssetPathNames: string[]): boolean;
	RemoveAssetPtrsFromCollection(Name: string,AssetPtrs: UObject[]): boolean;
	RemoveAssetPtrFromCollection(Name: string,AssetPtr: UObject): boolean;
	RemoveAssetFromCollection(Name: string,AssetPathName: string): boolean;
	RemoveAssetDatasFromCollection(Name: string,AssetDatas: AssetData[]): boolean;
	RemoveAssetDataFromCollection(Name: string,AssetData: AssetData): boolean;
	K2_RemoveAssetsFromCollection(Name: string,AssetPaths: SoftObjectPath[]): boolean;
	K2_RemoveAssetFromCollection(Name: string,AssetPath: SoftObjectPath): boolean;
	K2_GetCollectionsContainingAsset(AssetPath: SoftObjectPath): string[];
	K2_AddAssetToCollection(Name: string,AssetPath: SoftObjectPath): boolean;
	K2_AddAssetsToCollection(Name: string,AssetPaths: SoftObjectPath[]): boolean;
	GetCollectionsContainingAssetPtr(AssetPtr: UObject): string[];
	GetCollectionsContainingAssetData(AssetData: AssetData): string[];
	GetCollectionsContainingAsset(AssetPathName: string): string[];
	GetCollections(): string[];
	GetAssetsInCollection(Name: string): AssetData[];
	EmptyCollection(Name: string): boolean;
	DestroyCollection(Name: string): boolean;
	CreateCollection(Name: string,ShareType: ECollectionScriptingShareType): boolean;
	CollectionExists(Name: string): boolean;
	AddAssetToCollection(Name: string,AssetPathName: string): boolean;
	AddAssetsToCollection(Name: string,AssetPathNames: string[]): boolean;
	AddAssetPtrToCollection(Name: string,AssetPtr: UObject): boolean;
	AddAssetPtrsToCollection(Name: string,AssetPtrs: UObject[]): boolean;
	AddAssetDataToCollection(Name: string,AssetData: AssetData): boolean;
	AddAssetDatasToCollection(Name: string,AssetDatas: AssetData[]): boolean;
	static C(Other: UObject | any): AssetTagsSubsystem;
}

declare class ArchVisCharacter extends Character { 
	LookUpAxisName: string;
	LookUpAtRateAxisName: string;
	TurnAxisName: string;
	TurnAtRateAxisName: string;
	MoveForwardAxisName: string;
	MoveRightAxisName: string;
	MouseSensitivityScale_Pitch: number;
	MouseSensitivityScale_Yaw: number;
	static GetDefaultObject(): ArchVisCharacter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharacter;
	static C(Other: UObject | any): ArchVisCharacter;
}

declare class ArchVisCharMovementComponent extends CharacterMovementComponent { 
	RotationalAcceleration: Rotator;
	RotationalDeceleration: Rotator;
	MaxRotationalVelocity: Rotator;
	MinPitch: number;
	MaxPitch: number;
	WalkingFriction: number;
	WalkingSpeed: number;
	WalkingAcceleration: number;
	static Load(ResourceName: string): ArchVisCharMovementComponent;
	static Find(Outer: UObject, ResourceName: string): ArchVisCharMovementComponent;
	static GetDefaultObject(): ArchVisCharMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharMovementComponent;
	static C(Other: UObject | any): ArchVisCharMovementComponent;
}

declare class AudioCaptureDeviceInfo { 
	DeviceName: string;
	NumInputChannels: number;
	SampleRate: number;
	clone() : AudioCaptureDeviceInfo;
	static C(Other: UObject | any): AudioCaptureDeviceInfo;
}

declare class AudioCapture extends AudioGenerator { 
	static Load(ResourceName: string): AudioCapture;
	static Find(Outer: UObject, ResourceName: string): AudioCapture;
	static GetDefaultObject(): AudioCapture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCapture;
	StopCapturingAudio(): void;
	StartCapturingAudio(): void;
	IsCapturingAudio(): boolean;
	GetAudioCaptureDeviceInfo(OutInfo?: AudioCaptureDeviceInfo): {OutInfo: AudioCaptureDeviceInfo, $: boolean};
	static C(Other: UObject | any): AudioCapture;
}

declare class AudioCaptureFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AudioCaptureFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureFunctionLibrary;
	static GetDefaultObject(): AudioCaptureFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureFunctionLibrary;
	static CreateAudioCapture(): AudioCapture;
	static C(Other: UObject | any): AudioCaptureFunctionLibrary;
}

declare class AudioCaptureBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AudioCaptureBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureBlueprintLibrary;
	static GetDefaultObject(): AudioCaptureBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureBlueprintLibrary;
	static Conv_AudioInputDeviceInfoToString(Info: AudioInputDeviceInfo): string;
	static C(Other: UObject | any): AudioCaptureBlueprintLibrary;
}

declare class AudioCaptureComponent extends SynthComponent { 
	JitterLatencyFrames: number;
	static Load(ResourceName: string): AudioCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureComponent;
	static GetDefaultObject(): AudioCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureComponent;
	static C(Other: UObject | any): AudioCaptureComponent;
}

declare class OnAudioInputDevicesObtained__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnAudioInputDevicesObtained__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnAudioInputDevicesObtained__PythonCallable;
	static GetDefaultObject(): OnAudioInputDevicesObtained__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnAudioInputDevicesObtained__PythonCallable;
	static C(Other: UObject | any): OnAudioInputDevicesObtained__PythonCallable;
}

declare class MovieSceneGeometryCacheParams { 
	GeometryCacheAsset: GeometryCache;
	FirstLoopStartFrameOffset: FrameNumber;
	StartFrameOffset: FrameNumber;
	EndFrameOffset: FrameNumber;
	PlayRate: number;
	bReverse: boolean;
	StartOffset: number;
	EndOffset: number;
	GeometryCache: SoftObjectPath;
	clone() : MovieSceneGeometryCacheParams;
	static C(Other: UObject | any): MovieSceneGeometryCacheParams;
}

declare class MovieSceneGeometryCacheSection extends MovieSceneSection { 
	Params: MovieSceneGeometryCacheParams;
	static Load(ResourceName: string): MovieSceneGeometryCacheSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheSection;
	static GetDefaultObject(): MovieSceneGeometryCacheSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheSection;
	static C(Other: UObject | any): MovieSceneGeometryCacheSection;
}

declare class MovieSceneGeometryCacheTrack extends MovieSceneNameableTrack { 
	AnimationSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneGeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheTrack;
	static GetDefaultObject(): MovieSceneGeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheTrack;
	static C(Other: UObject | any): MovieSceneGeometryCacheTrack;
}

declare class GeometryCacheStreamerSettings extends DeveloperSettings { 
	LookAheadBuffer: number;
	MaxMemoryAllowed: number;
	static Load(ResourceName: string): GeometryCacheStreamerSettings;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheStreamerSettings;
	static GetDefaultObject(): GeometryCacheStreamerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheStreamerSettings;
	static C(Other: UObject | any): GeometryCacheStreamerSettings;
}

declare type EGooglePADErrorCode = 'AssetPack_NO_ERROR' | 'AssetPack_APP_UNAVAILABLE' | 'AssetPack_UNAVAILABLE' | 'AssetPack_INVALID_REQUEST' | 'AssetPack_DOWNLOAD_NOT_FOUND' | 'AssetPack_API_NOT_AVAILABLE' | 'AssetPack_NETWORK_ERROR' | 'AssetPack_ACCESS_DENIED' | 'AssetPack_INSUFFICIENT_STORAGE' | 'AssetPack_PLAY_STORE_NOT_FOUND' | 'AssetPack_NETWORK_UNRESTRICTED' | 'AssetPack_INTERNAL_ERROR' | 'AssetPack_INITIALIZATION_NEEDED' | 'AssetPack_INITIALIZATION_FAILED' | 'AssetPack_MAX';
declare var EGooglePADErrorCode : { AssetPack_NO_ERROR:'AssetPack_NO_ERROR',AssetPack_APP_UNAVAILABLE:'AssetPack_APP_UNAVAILABLE',AssetPack_UNAVAILABLE:'AssetPack_UNAVAILABLE',AssetPack_INVALID_REQUEST:'AssetPack_INVALID_REQUEST',AssetPack_DOWNLOAD_NOT_FOUND:'AssetPack_DOWNLOAD_NOT_FOUND',AssetPack_API_NOT_AVAILABLE:'AssetPack_API_NOT_AVAILABLE',AssetPack_NETWORK_ERROR:'AssetPack_NETWORK_ERROR',AssetPack_ACCESS_DENIED:'AssetPack_ACCESS_DENIED',AssetPack_INSUFFICIENT_STORAGE:'AssetPack_INSUFFICIENT_STORAGE',AssetPack_PLAY_STORE_NOT_FOUND:'AssetPack_PLAY_STORE_NOT_FOUND',AssetPack_NETWORK_UNRESTRICTED:'AssetPack_NETWORK_UNRESTRICTED',AssetPack_INTERNAL_ERROR:'AssetPack_INTERNAL_ERROR',AssetPack_INITIALIZATION_NEEDED:'AssetPack_INITIALIZATION_NEEDED',AssetPack_INITIALIZATION_FAILED:'AssetPack_INITIALIZATION_FAILED',AssetPack_MAX:'AssetPack_MAX', };
declare type EGooglePADStorageMethod = 'AssetPack_STORAGE_FILES' | 'AssetPack_STORAGE_APK' | 'AssetPack_STORAGE_UNKNOWN' | 'AssetPack_STORAGE_NOT_INSTALLED' | 'AssetPack_STORAGE_MAX';
declare var EGooglePADStorageMethod : { AssetPack_STORAGE_FILES:'AssetPack_STORAGE_FILES',AssetPack_STORAGE_APK:'AssetPack_STORAGE_APK',AssetPack_STORAGE_UNKNOWN:'AssetPack_STORAGE_UNKNOWN',AssetPack_STORAGE_NOT_INSTALLED:'AssetPack_STORAGE_NOT_INSTALLED',AssetPack_STORAGE_MAX:'AssetPack_STORAGE_MAX', };
declare type EGooglePADCellularDataConfirmStatus = 'AssetPack_CONFIRM_UNKNOWN' | 'AssetPack_CONFIRM_PENDING' | 'AssetPack_CONFIRM_USER_APPROVED' | 'AssetPack_CONFIRM_USER_CANCELED' | 'AssetPack_CONFIRM_MAX';
declare var EGooglePADCellularDataConfirmStatus : { AssetPack_CONFIRM_UNKNOWN:'AssetPack_CONFIRM_UNKNOWN',AssetPack_CONFIRM_PENDING:'AssetPack_CONFIRM_PENDING',AssetPack_CONFIRM_USER_APPROVED:'AssetPack_CONFIRM_USER_APPROVED',AssetPack_CONFIRM_USER_CANCELED:'AssetPack_CONFIRM_USER_CANCELED',AssetPack_CONFIRM_MAX:'AssetPack_CONFIRM_MAX', };
declare type EGooglePADDownloadStatus = 'AssetPack_UNKNOWN' | 'AssetPack_DOWNLOAD_PENDING' | 'AssetPack_DOWNLOADING' | 'AssetPack_TRANSFERRING' | 'AssetPack_DOWNLOAD_COMPLETED' | 'AssetPack_DOWNLOAD_FAILED' | 'AssetPack_DOWNLOAD_CANCELED' | 'AssetPack_WAITING_FOR_WIFI' | 'AssetPack_NOT_INSTALLED' | 'AssetPack_INFO_PENDING' | 'AssetPack_INFO_FAILED' | 'AssetPack_REMOVAL_PENDING' | 'AssetPack_REMOVAL_FAILED' | 'AssetPack_MAX';
declare var EGooglePADDownloadStatus : { AssetPack_UNKNOWN:'AssetPack_UNKNOWN',AssetPack_DOWNLOAD_PENDING:'AssetPack_DOWNLOAD_PENDING',AssetPack_DOWNLOADING:'AssetPack_DOWNLOADING',AssetPack_TRANSFERRING:'AssetPack_TRANSFERRING',AssetPack_DOWNLOAD_COMPLETED:'AssetPack_DOWNLOAD_COMPLETED',AssetPack_DOWNLOAD_FAILED:'AssetPack_DOWNLOAD_FAILED',AssetPack_DOWNLOAD_CANCELED:'AssetPack_DOWNLOAD_CANCELED',AssetPack_WAITING_FOR_WIFI:'AssetPack_WAITING_FOR_WIFI',AssetPack_NOT_INSTALLED:'AssetPack_NOT_INSTALLED',AssetPack_INFO_PENDING:'AssetPack_INFO_PENDING',AssetPack_INFO_FAILED:'AssetPack_INFO_FAILED',AssetPack_REMOVAL_PENDING:'AssetPack_REMOVAL_PENDING',AssetPack_REMOVAL_FAILED:'AssetPack_REMOVAL_FAILED',AssetPack_MAX:'AssetPack_MAX', };
declare class GooglePADFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GooglePADFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): GooglePADFunctionLibrary;
	static GetDefaultObject(): GooglePADFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GooglePADFunctionLibrary;
	static ShowCellularDataConfirmation(): EGooglePADErrorCode;
	static RequestRemoval(Name: string): EGooglePADErrorCode;
	static RequestInfo(AssetPacks: string[]): EGooglePADErrorCode;
	static RequestDownload(AssetPacks: string[]): EGooglePADErrorCode;
	static ReleaseDownloadState(State: number): void;
	static ReleaseAssetPackLocation(Location: number): void;
	static GetTotalBytesToDownload(State: number): number;
	static GetStorageMethod(Location: number): EGooglePADStorageMethod;
	static GetShowCellularDataConfirmationStatus(Status?: EGooglePADCellularDataConfirmStatus): {Status: EGooglePADCellularDataConfirmStatus, $: EGooglePADErrorCode};
	static GetDownloadStatus(State: number): EGooglePADDownloadStatus;
	static GetDownloadState(Name: string,State?: number): {State: number, $: EGooglePADErrorCode};
	static GetBytesDownloaded(State: number): number;
	static GetAssetsPath(Location: number): string;
	static GetAssetPackLocation(Name: string,Location?: number): {Location: number, $: EGooglePADErrorCode};
	static CancelDownload(AssetPacks: string[]): EGooglePADErrorCode;
	static C(Other: UObject | any): GooglePADFunctionLibrary;
}

declare class ParameterizeMeshToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): ParameterizeMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolBuilder;
	static GetDefaultObject(): ParameterizeMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolBuilder;
	static C(Other: UObject | any): ParameterizeMeshToolBuilder;
}

declare class ParameterizeMeshToolPatchBuilderGroupLayerProperties extends PolygroupLayersProperties { 
	bConstrainToPolygroups: boolean;
	static Load(ResourceName: string): ParameterizeMeshToolPatchBuilderGroupLayerProperties;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshToolPatchBuilderGroupLayerProperties;
	static GetDefaultObject(): ParameterizeMeshToolPatchBuilderGroupLayerProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshToolPatchBuilderGroupLayerProperties;
	static C(Other: UObject | any): ParameterizeMeshToolPatchBuilderGroupLayerProperties;
}

declare class ParameterizeMeshTool extends SingleSelectionMeshEditingTool { 
	UVChannelProperties: MeshUVChannelProperties;
	Settings: ParameterizeMeshToolProperties;
	UVAtlasProperties: ParameterizeMeshToolUVAtlasProperties;
	XAtlasProperties: ParameterizeMeshToolXAtlasProperties;
	PatchBuilderProperties: ParameterizeMeshToolPatchBuilderProperties;
	PolygroupLayerProperties: ParameterizeMeshToolPatchBuilderGroupLayerProperties;
	MaterialSettings: ExistingMeshMaterialProperties;
	bCreateUVLayoutViewOnSetup: boolean;
	UVLayoutView: UVLayoutPreview;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): ParameterizeMeshTool;
	static Find(Outer: UObject, ResourceName: string): ParameterizeMeshTool;
	static GetDefaultObject(): ParameterizeMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParameterizeMeshTool;
	static C(Other: UObject | any): ParameterizeMeshTool;
}

declare class OnDynamicMeshModifiedBP__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDynamicMeshModifiedBP__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDynamicMeshModifiedBP__PythonCallable;
	static GetDefaultObject(): OnDynamicMeshModifiedBP__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDynamicMeshModifiedBP__PythonCallable;
	static C(Other: UObject | any): OnDynamicMeshModifiedBP__PythonCallable;
}

declare class MobileInstalledContent extends UObject { 
	static Load(ResourceName: string): MobileInstalledContent;
	static Find(Outer: UObject, ResourceName: string): MobileInstalledContent;
	static GetDefaultObject(): MobileInstalledContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobileInstalledContent;
	Mount(PakOrder: number,MountPoint: string): boolean;
	GetInstalledContentSize(): number;
	GetDiskFreeSpace(): number;
	static C(Other: UObject | any): MobileInstalledContent;
}

declare class MobilePendingContent extends MobileInstalledContent { 
	static Load(ResourceName: string): MobilePendingContent;
	static Find(Outer: UObject, ResourceName: string): MobilePendingContent;
	static GetDefaultObject(): MobilePendingContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePendingContent;
	GetTotalDownloadedSize(): number;
	GetRequiredDiskSpace(): number;
	GetInstallProgress(): number;
	GetDownloadStatusText(): string;
	GetDownloadSpeed(): number;
	GetDownloadSize(): number;
	static C(Other: UObject | any): MobilePendingContent;
}

declare class MobilePatchingLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MobilePatchingLibrary;
	static Find(Outer: UObject, ResourceName: string): MobilePatchingLibrary;
	static GetDefaultObject(): MobilePatchingLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePatchingLibrary;
	static HasActiveWiFiConnection(): boolean;
	static GetSupportedPlatformNames(): string[];
	static GetInstalledContent(InstallDirectory: string): MobileInstalledContent;
	static GetActiveDeviceProfileName(): string;
	static C(Other: UObject | any): MobilePatchingLibrary;
}

declare class OnContentInstallFailed__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnContentInstallFailed__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnContentInstallFailed__PythonCallable;
	static GetDefaultObject(): OnContentInstallFailed__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnContentInstallFailed__PythonCallable;
	static C(Other: UObject | any): OnContentInstallFailed__PythonCallable;
}

declare class OnContentInstallSucceeded__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnContentInstallSucceeded__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnContentInstallSucceeded__PythonCallable;
	static GetDefaultObject(): OnContentInstallSucceeded__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnContentInstallSucceeded__PythonCallable;
	static C(Other: UObject | any): OnContentInstallSucceeded__PythonCallable;
}

declare class OnRequestContentFailed__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnRequestContentFailed__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnRequestContentFailed__PythonCallable;
	static GetDefaultObject(): OnRequestContentFailed__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnRequestContentFailed__PythonCallable;
	static C(Other: UObject | any): OnRequestContentFailed__PythonCallable;
}

declare class OnRequestContentSucceeded__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnRequestContentSucceeded__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnRequestContentSucceeded__PythonCallable;
	static GetDefaultObject(): OnRequestContentSucceeded__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnRequestContentSucceeded__PythonCallable;
	static C(Other: UObject | any): OnRequestContentSucceeded__PythonCallable;
}

declare type EResonanceRenderMode = 'StereoPanning' | 'BinauralLowQuality' | 'BinauralMediumQuality' | 'BinauralHighQuality' | 'RoomEffectsOnly' | 'EResonanceRenderMode_MAX';
declare var EResonanceRenderMode : { StereoPanning:'StereoPanning',BinauralLowQuality:'BinauralLowQuality',BinauralMediumQuality:'BinauralMediumQuality',BinauralHighQuality:'BinauralHighQuality',RoomEffectsOnly:'RoomEffectsOnly',EResonanceRenderMode_MAX:'EResonanceRenderMode_MAX', };
declare class ResonanceAudioSoundfieldSettings extends SoundfieldEncodingSettingsBase { 
	RenderMode: EResonanceRenderMode;
	static Load(ResourceName: string): ResonanceAudioSoundfieldSettings;
	static Find(Outer: UObject, ResourceName: string): ResonanceAudioSoundfieldSettings;
	static GetDefaultObject(): ResonanceAudioSoundfieldSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioSoundfieldSettings;
	static C(Other: UObject | any): ResonanceAudioSoundfieldSettings;
}

declare type ERaMaterialName = 'TRANSPARENT' | 'ACOUSTIC_CEILING_TILES' | 'BRICK_BARE' | 'BRICK_PAINTED' | 'CONCRETE_BLOCK_COARSE' | 'CONCRETE_BLOCK_PAINTED' | 'CURTAIN_HEAVY' | 'FIBER_GLASS_INSULATION' | 'GLASS_THIN' | 'GLASS_THICK' | 'GRASS' | 'LINOLEUM_ON_CONCRETE' | 'MARBLE' | 'METAL' | 'PARQUET_ONCONCRETE' | 'PLASTER_ROUGH' | 'PLASTER_SMOOTH' | 'PLYWOOD_PANEL' | 'POLISHED_CONCRETE_OR_TILE' | 'SHEETROCK' | 'WATER_OR_ICE_SURFACE' | 'WOOD_CEILING' | 'WOOD_PANEL' | 'UNIFORM' | 'ERaMaterialName_MAX';
declare var ERaMaterialName : { TRANSPARENT:'TRANSPARENT',ACOUSTIC_CEILING_TILES:'ACOUSTIC_CEILING_TILES',BRICK_BARE:'BRICK_BARE',BRICK_PAINTED:'BRICK_PAINTED',CONCRETE_BLOCK_COARSE:'CONCRETE_BLOCK_COARSE',CONCRETE_BLOCK_PAINTED:'CONCRETE_BLOCK_PAINTED',CURTAIN_HEAVY:'CURTAIN_HEAVY',FIBER_GLASS_INSULATION:'FIBER_GLASS_INSULATION',GLASS_THIN:'GLASS_THIN',GLASS_THICK:'GLASS_THICK',GRASS:'GRASS',LINOLEUM_ON_CONCRETE:'LINOLEUM_ON_CONCRETE',MARBLE:'MARBLE',METAL:'METAL',PARQUET_ONCONCRETE:'PARQUET_ONCONCRETE',PLASTER_ROUGH:'PLASTER_ROUGH',PLASTER_SMOOTH:'PLASTER_SMOOTH',PLYWOOD_PANEL:'PLYWOOD_PANEL',POLISHED_CONCRETE_OR_TILE:'POLISHED_CONCRETE_OR_TILE',SHEETROCK:'SHEETROCK',WATER_OR_ICE_SURFACE:'WATER_OR_ICE_SURFACE',WOOD_CEILING:'WOOD_CEILING',WOOD_PANEL:'WOOD_PANEL',UNIFORM:'UNIFORM',ERaMaterialName_MAX:'ERaMaterialName_MAX', };
declare class ResonanceAudioReverbPluginSettings { 
	bEnableRoomEffects: boolean;
	bGetTransformFromAudioVolume: boolean;
	RoomPosition: Vector;
	RoomRotation: Quat;
	RoomDimensions: Vector;
	LeftWallMaterial: ERaMaterialName;
	RightWallMaterial: ERaMaterialName;
	FloorMaterial: ERaMaterialName;
	CeilingMaterial: ERaMaterialName;
	FrontWallMaterial: ERaMaterialName;
	BackWallMaterial: ERaMaterialName;
	ReflectionScalar: number;
	ReverbGain: number;
	ReverbTimeModifier: number;
	ReverbBrightness: number;
	clone() : ResonanceAudioReverbPluginSettings;
	static C(Other: UObject | any): ResonanceAudioReverbPluginSettings;
}

declare class ResonanceAudioReverbPluginPreset extends SoundEffectSubmixPreset { 
	Settings: ResonanceAudioReverbPluginSettings;
	static Load(ResourceName: string): ResonanceAudioReverbPluginPreset;
	static Find(Outer: UObject, ResourceName: string): ResonanceAudioReverbPluginPreset;
	static GetDefaultObject(): ResonanceAudioReverbPluginPreset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioReverbPluginPreset;
	SetRoomRotation(InRotation: Quat): void;
	SetRoomPosition(InPosition: Vector): void;
	SetRoomMaterials(InMaterials: ERaMaterialName[]): void;
	SetRoomDimensions(InDimensions: Vector): void;
	SetReverbTimeModifier(InReverbTimeModifier: number): void;
	SetReverbGain(InReverbGain: number): void;
	SetReverbBrightness(InReverbBrightness: number): void;
	SetReflectionScalar(InReflectionScalar: number): void;
	SetEnableRoomEffects(bInEnableRoomEffects: boolean): void;
	static C(Other: UObject | any): ResonanceAudioReverbPluginPreset;
	SetGlobalReverbPreset(): void;
	static SetGlobalReverbPreset(InPreset: ResonanceAudioReverbPluginPreset): void;
}

declare class ResonanceAudioBlueprintFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): ResonanceAudioBlueprintFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): ResonanceAudioBlueprintFunctionLibrary;
	static GetDefaultObject(): ResonanceAudioBlueprintFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioBlueprintFunctionLibrary;
	static SetGlobalReverbPreset(InPreset: ResonanceAudioReverbPluginPreset): void;
	static GetGlobalReverbPreset(): ResonanceAudioReverbPluginPreset;
	static C(Other: UObject | any): ResonanceAudioBlueprintFunctionLibrary;
}

declare type ERaSpatializationMethod = 'STEREO_PANNING' | 'HRTF' | 'ERaSpatializationMethod_MAX';
declare var ERaSpatializationMethod : { STEREO_PANNING:'STEREO_PANNING',HRTF:'HRTF',ERaSpatializationMethod_MAX:'ERaSpatializationMethod_MAX', };
declare type ERaDistanceRolloffModel = 'LOGARITHMIC' | 'LINEAR' | 'NONE' | 'ERaDistanceRolloffModel_MAX';
declare var ERaDistanceRolloffModel : { LOGARITHMIC:'LOGARITHMIC',LINEAR:'LINEAR',NONE:'NONE',ERaDistanceRolloffModel_MAX:'ERaDistanceRolloffModel_MAX', };
declare class ResonanceAudioSpatializationSourceSettings extends SpatializationPluginSourceSettingsBase { 
	SpatializationMethod: ERaSpatializationMethod;
	Pattern: number;
	Sharpness: number;
	bToggleVisualization: boolean;
	Scale: number;
	Spread: number;
	Rolloff: ERaDistanceRolloffModel;
	MinDistance: number;
	MaxDistance: number;
	static Load(ResourceName: string): ResonanceAudioSpatializationSourceSettings;
	static Find(Outer: UObject, ResourceName: string): ResonanceAudioSpatializationSourceSettings;
	static GetDefaultObject(): ResonanceAudioSpatializationSourceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioSpatializationSourceSettings;
	SetSoundSourceSpread(InSpread: number): void;
	SetSoundSourceDirectivity(InPattern: number,InSharpness: number): void;
	static C(Other: UObject | any): ResonanceAudioSpatializationSourceSettings;
}

declare class ResonanceAudioDirectivityVisualizer extends Actor { 
	Material: Material;
	Settings: ResonanceAudioSpatializationSourceSettings;
	static GetDefaultObject(): ResonanceAudioDirectivityVisualizer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioDirectivityVisualizer;
	static C(Other: UObject | any): ResonanceAudioDirectivityVisualizer;
}

declare type ERaQualityMode = 'STEREO_PANNING' | 'BINAURAL_LOW' | 'BINAURAL_MEDIUM' | 'BINAURAL_HIGH' | 'ERaQualityMode_MAX';
declare var ERaQualityMode : { STEREO_PANNING:'STEREO_PANNING',BINAURAL_LOW:'BINAURAL_LOW',BINAURAL_MEDIUM:'BINAURAL_MEDIUM',BINAURAL_HIGH:'BINAURAL_HIGH',ERaQualityMode_MAX:'ERaQualityMode_MAX', };
declare class ResonanceAudioSettings extends UObject { 
	OutputSubmix: SoftObjectPath;
	QualityMode: ERaQualityMode;
	GlobalReverbPreset: SoftObjectPath;
	GlobalSourcePreset: SoftObjectPath;
	static Load(ResourceName: string): ResonanceAudioSettings;
	static Find(Outer: UObject, ResourceName: string): ResonanceAudioSettings;
	static GetDefaultObject(): ResonanceAudioSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ResonanceAudioSettings;
	static C(Other: UObject | any): ResonanceAudioSettings;
}

declare class SynthesisEditorSettings extends DeveloperSettings { 
	static Load(ResourceName: string): SynthesisEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SynthesisEditorSettings;
	static GetDefaultObject(): SynthesisEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SynthesisEditorSettings;
	static C(Other: UObject | any): SynthesisEditorSettings;
}

declare class AudioImpulseResponseFactory extends Factory { 
	static Load(ResourceName: string): AudioImpulseResponseFactory;
	static Find(Outer: UObject, ResourceName: string): AudioImpulseResponseFactory;
	static GetDefaultObject(): AudioImpulseResponseFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioImpulseResponseFactory;
	static C(Other: UObject | any): AudioImpulseResponseFactory;
}

declare class ModularSynthPresetBankFactory extends Factory { 
	static Load(ResourceName: string): ModularSynthPresetBankFactory;
	static Find(Outer: UObject, ResourceName: string): ModularSynthPresetBankFactory;
	static GetDefaultObject(): ModularSynthPresetBankFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModularSynthPresetBankFactory;
	static C(Other: UObject | any): ModularSynthPresetBankFactory;
}

declare class MonoWaveTableSynthPresetFactory extends Factory { 
	static Load(ResourceName: string): MonoWaveTableSynthPresetFactory;
	static Find(Outer: UObject, ResourceName: string): MonoWaveTableSynthPresetFactory;
	static GetDefaultObject(): MonoWaveTableSynthPresetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MonoWaveTableSynthPresetFactory;
	static C(Other: UObject | any): MonoWaveTableSynthPresetFactory;
}

declare class ObjectMixerEditorListMenuContext extends UObject { 
	static Load(ResourceName: string): ObjectMixerEditorListMenuContext;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerEditorListMenuContext;
	static GetDefaultObject(): ObjectMixerEditorListMenuContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerEditorListMenuContext;
	static C(Other: UObject | any): ObjectMixerEditorListMenuContext;
}

declare class ObjectMixerObjectFilter extends UObject { 
	static Load(ResourceName: string): ObjectMixerObjectFilter;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerObjectFilter;
	static GetDefaultObject(): ObjectMixerObjectFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerObjectFilter;
	static C(Other: UObject | any): ObjectMixerObjectFilter;
}

declare type EObjectMixerInheritanceInclusionOptions = 'None' | 'IncludeOnlyImmediateParent' | 'IncludeOnlyImmediateChildren' | 'IncludeOnlyImmediateParentAndChildren' | 'IncludeAllParents' | 'IncludeAllChildren' | 'IncludeAllParentsAndChildren' | 'IncludeAllParentsAndOnlyImmediateChildren' | 'IncludeOnlyImmediateParentAndAllChildren' | 'EObjectMixerInheritanceInclusionOptions_MAX';
declare var EObjectMixerInheritanceInclusionOptions : { None:'None',IncludeOnlyImmediateParent:'IncludeOnlyImmediateParent',IncludeOnlyImmediateChildren:'IncludeOnlyImmediateChildren',IncludeOnlyImmediateParentAndChildren:'IncludeOnlyImmediateParentAndChildren',IncludeAllParents:'IncludeAllParents',IncludeAllChildren:'IncludeAllChildren',IncludeAllParentsAndChildren:'IncludeAllParentsAndChildren',IncludeAllParentsAndOnlyImmediateChildren:'IncludeAllParentsAndOnlyImmediateChildren',IncludeOnlyImmediateParentAndAllChildren:'IncludeOnlyImmediateParentAndAllChildren',EObjectMixerInheritanceInclusionOptions_MAX:'EObjectMixerInheritanceInclusionOptions_MAX', };
declare class ObjectMixerBlueprintObjectFilter extends ObjectMixerObjectFilter { 
	static Load(ResourceName: string): ObjectMixerBlueprintObjectFilter;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerBlueprintObjectFilter;
	static GetDefaultObject(): ObjectMixerBlueprintObjectFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerBlueprintObjectFilter;
	ShouldIncludeUnsupportedProperties(): boolean;
	OnSetRowEditorVisibility(InObject: UObject,bNewIsVisible: boolean): void;
	GetRowTooltipText(InObject: UObject,bIsHybridRow: boolean): string;
	GetRowEditorVisibility(InObject: UObject): boolean;
	GetRowDisplayName(InObject: UObject,bIsHybridRow: boolean): string;
	GetObjectMixerPropertyInheritanceInclusionOptions(): EObjectMixerInheritanceInclusionOptions;
	GetObjectMixerPlacementClassInclusionOptions(): EObjectMixerInheritanceInclusionOptions;
	GetObjectClassesToPlace(): Set<UnrealEngineClass>;
	GetObjectClassesToFilter(): Set<UnrealEngineClass>;
	GetForceAddedColumns(): Set<string>;
	GetColumnsToShowByDefault(): Set<string>;
	GetColumnsToExclude(): Set<string>;
	static C(Other: UObject | any): ObjectMixerBlueprintObjectFilter;
}

declare class ObjectMixerCollectionObjectData { 
	ObjectPath: SoftObjectPath;
	clone() : ObjectMixerCollectionObjectData;
	static C(Other: UObject | any): ObjectMixerCollectionObjectData;
}

declare class ObjectMixerCollectionObjectSet { 
	CollectionName: string;
	CollectionObjects: ObjectMixerCollectionObjectData[];
	clone() : ObjectMixerCollectionObjectSet;
	static C(Other: UObject | any): ObjectMixerCollectionObjectSet;
}

declare class ObjectMixerColumnData { 
	ColumnName: string;
	bShouldBeEnabled: boolean;
	clone() : ObjectMixerColumnData;
	static C(Other: UObject | any): ObjectMixerColumnData;
}

declare class ObjectMixerSerializationDataPerFilter { 
	FilterClassName: string;
	SerializedCollections: ObjectMixerCollectionObjectSet[];
	SerializedColumnData: Set<ObjectMixerColumnData>;
	clone() : ObjectMixerSerializationDataPerFilter;
	static C(Other: UObject | any): ObjectMixerSerializationDataPerFilter;
}

declare class ObjectMixerEditorSerializedData extends UObject { 
	SerializedDataPerFilter: Set<ObjectMixerSerializationDataPerFilter>;
	static Load(ResourceName: string): ObjectMixerEditorSerializedData;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerEditorSerializedData;
	static GetDefaultObject(): ObjectMixerEditorSerializedData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerEditorSerializedData;
	static C(Other: UObject | any): ObjectMixerEditorSerializedData;
}

declare class ObjectMixerEditorSettings extends UObject { 
	bSyncSelection: boolean;
	bExpandTreeViewItemsByDefault: boolean;
	static Load(ResourceName: string): ObjectMixerEditorSettings;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerEditorSettings;
	static GetDefaultObject(): ObjectMixerEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerEditorSettings;
	static C(Other: UObject | any): ObjectMixerEditorSettings;
}

declare class ObjectMixerBlueprintFilterFactory extends Factory { 
	ParentClass: UnrealEngineClass;
	static Load(ResourceName: string): ObjectMixerBlueprintFilterFactory;
	static Find(Outer: UObject, ResourceName: string): ObjectMixerBlueprintFilterFactory;
	static GetDefaultObject(): ObjectMixerBlueprintFilterFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectMixerBlueprintFilterFactory;
	static C(Other: UObject | any): ObjectMixerBlueprintFilterFactory;
}

declare class LightMixerEditorSettings extends UObject { 
	bHideObjectMixerMenuItem: boolean;
	static Load(ResourceName: string): LightMixerEditorSettings;
	static Find(Outer: UObject, ResourceName: string): LightMixerEditorSettings;
	static GetDefaultObject(): LightMixerEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightMixerEditorSettings;
	static C(Other: UObject | any): LightMixerEditorSettings;
}

declare class LightMixerObjectFilter extends ObjectMixerObjectFilter { 
	static Load(ResourceName: string): LightMixerObjectFilter;
	static Find(Outer: UObject, ResourceName: string): LightMixerObjectFilter;
	static GetDefaultObject(): LightMixerObjectFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightMixerObjectFilter;
	static C(Other: UObject | any): LightMixerObjectFilter;
}

declare class ContentBrowserAssetDataSource extends ContentBrowserDataSource { 
	static Load(ResourceName: string): ContentBrowserAssetDataSource;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserAssetDataSource;
	static GetDefaultObject(): ContentBrowserAssetDataSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserAssetDataSource;
	static C(Other: UObject | any): ContentBrowserAssetDataSource;
}

declare class ContentBrowserClassDataSource extends ContentBrowserDataSource { 
	static Load(ResourceName: string): ContentBrowserClassDataSource;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserClassDataSource;
	static GetDefaultObject(): ContentBrowserClassDataSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserClassDataSource;
	static C(Other: UObject | any): ContentBrowserClassDataSource;
}

declare class AssetInfo { 
	Path: string;
	Version: string;
	clone() : AssetInfo;
	static C(Other: UObject | any): AssetInfo;
}

declare class VersionData { 
	Assets: AssetInfo[];
	clone() : VersionData;
	static C(Other: UObject | any): VersionData;
}

declare class VersionInfoHandler extends UObject { 
	CommonVersionData: VersionData;
	static Load(ResourceName: string): VersionInfoHandler;
	static Find(Outer: UObject, ResourceName: string): VersionInfoHandler;
	static GetDefaultObject(): VersionInfoHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VersionInfoHandler;
	static Get(): VersionInfoHandler;
	static C(Other: UObject | any): VersionInfoHandler;
}

declare class MegascansSettings extends UObject { 
	bCreateFoliage: boolean;
	bApplyToSelection: boolean;
	static Load(ResourceName: string): MegascansSettings;
	static Find(Outer: UObject, ResourceName: string): MegascansSettings;
	static GetDefaultObject(): MegascansSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MegascansSettings;
	static C(Other: UObject | any): MegascansSettings;
}

declare class MaterialBlendSettings extends UObject { 
	BlendedMaterialName: string;
	BlendedMaterialPath: DirectoryPath;
	static Load(ResourceName: string): MaterialBlendSettings;
	static Find(Outer: UObject, ResourceName: string): MaterialBlendSettings;
	static GetDefaultObject(): MaterialBlendSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialBlendSettings;
	static C(Other: UObject | any): MaterialBlendSettings;
}

declare class MaterialAssetSettings extends UObject { 
	MasterMaterial3d: string;
	MasterMaterialSurface: string;
	MasterMaterialPlant: string;
	static Load(ResourceName: string): MaterialAssetSettings;
	static Find(Outer: UObject, ResourceName: string): MaterialAssetSettings;
	static GetDefaultObject(): MaterialAssetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialAssetSettings;
	static C(Other: UObject | any): MaterialAssetSettings;
}

declare class MaterialPresetsSettings extends UObject { 
	MasterMaterial3d: Material;
	MasterMaterialSurface: Material;
	MasterMaterialPlant: Material;
	static Load(ResourceName: string): MaterialPresetsSettings;
	static Find(Outer: UObject, ResourceName: string): MaterialPresetsSettings;
	static GetDefaultObject(): MaterialPresetsSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialPresetsSettings;
	static C(Other: UObject | any): MaterialPresetsSettings;
}

declare class NodePort extends UObject { 
	static Load(ResourceName: string): NodePort;
	static Find(Outer: UObject, ResourceName: string): NodePort;
	static GetDefaultObject(): NodePort;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NodePort;
	IsNodeRunning(): boolean;
	GetNodePort(): string;
	static C(Other: UObject | any): NodePort;
}

declare class WebJSCallbackBase { 
	clone() : WebJSCallbackBase;
	static C(Other: UObject | any): WebJSCallbackBase;
}

declare class WebJSFunction extends WebJSCallbackBase { 
	clone() : WebJSFunction;
	static C(Other: UObject | any): WebJSFunction;
}

declare class BrowserBinding extends UObject { 
	static Load(ResourceName: string): BrowserBinding;
	static Find(Outer: UObject, ResourceName: string): BrowserBinding;
	static GetDefaultObject(): BrowserBinding;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BrowserBinding;
	StartNodeProcess(): void;
	ShowLoginDialog(LoginUrl: string,ResponseCodeUrl: string): void;
	ShowDialog(Type: string,URL: string): void;
	SendSuccess(Value: string): void;
	SendFailure(Message: string): void;
	SaveAuthToken(Value: string): void;
	RestartNodeProcess(): void;
	OpenMegascansPluginSettings(): void;
	OpenExternalUrl(URL: string): void;
	OnExitCallback(OnExitJSCallback: WebJSFunction): void;
	OnDroppedCallback(OnDroppedJSCallback: WebJSFunction): void;
	OnDropDiscardedCallback(OnDropDiscardedJSCallback: WebJSFunction): void;
	Logout(): void;
	GetProjectPath(): string;
	GetAuthToken(): string;
	ExportDataToMSPlugin(Data: string): void;
	DragStarted(ImageUrl: string[],IDs: string[],Types: string[]): void;
	DialogSuccessCallback(DialogJSCallback: WebJSFunction): void;
	DialogFailCallback(DialogJSCallback: WebJSFunction): void;
	static C(Other: UObject | any): BrowserBinding;
}

declare type ETakeRecorderActorRecordType = 'Possessable' | 'Spawnable' | 'ProjectDefault' | 'ETakeRecorderActorRecordType_MAX';
declare var ETakeRecorderActorRecordType : { Possessable:'Possessable',Spawnable:'Spawnable',ProjectDefault:'ProjectDefault',ETakeRecorderActorRecordType_MAX:'ETakeRecorderActorRecordType_MAX', };
declare class TakeRecorderActorSource extends TakeRecorderSource { 
	Target: Actor;
	RecordType: ETakeRecorderActorRecordType;
	bRecordParentHierarchy: boolean;
	bReduceKeys: boolean;
	RecordedProperties: ActorRecorderPropertyMap;
	IncludeAnimationNames: string[];
	ExcludeAnimationNames: string[];
	TargetLevelSequence: LevelSequence;
	MasterLevelSequence: LevelSequence;
	FactorySettings: UObject[];
	TrackRecorders: MovieSceneTrackRecorder[];
	ParentSource: TakeRecorderActorSource;
	bShowProgressDialog: boolean;
	static Load(ResourceName: string): TakeRecorderActorSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderActorSource;
	static GetDefaultObject(): TakeRecorderActorSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderActorSource;
	SetSourceActor(InTarget: Actor): void;
	static RemoveActorFromSources(InActor: Actor,InSources: TakeRecorderSources): void;
	GetSourceActor(): Actor;
	static AddSourceForActor(InActor: Actor,InSources: TakeRecorderSources): TakeRecorderSource;
	static C(Other: UObject | any): TakeRecorderActorSource;
}

declare class TakeRecorderCameraCutSource extends TakeRecorderSource { 
	World: World;
	MasterLevelSequence: LevelSequence;
	static Load(ResourceName: string): TakeRecorderCameraCutSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderCameraCutSource;
	static GetDefaultObject(): TakeRecorderCameraCutSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderCameraCutSource;
	static C(Other: UObject | any): TakeRecorderCameraCutSource;
}

declare class TakeRecorderLevelSequenceSource extends TakeRecorderSource { 
	LevelSequencesToTrigger: LevelSequence[];
	static Load(ResourceName: string): TakeRecorderLevelSequenceSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderLevelSequenceSource;
	static GetDefaultObject(): TakeRecorderLevelSequenceSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderLevelSequenceSource;
	static C(Other: UObject | any): TakeRecorderLevelSequenceSource;
}

declare class TakeRecorderLevelVisibilitySourceSettings extends TakeRecorderSource { 
	LevelVisibilityTrackName: string;
	static Load(ResourceName: string): TakeRecorderLevelVisibilitySourceSettings;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderLevelVisibilitySourceSettings;
	static GetDefaultObject(): TakeRecorderLevelVisibilitySourceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderLevelVisibilitySourceSettings;
	static C(Other: UObject | any): TakeRecorderLevelVisibilitySourceSettings;
}

declare class TakeRecorderLevelVisibilitySource extends TakeRecorderLevelVisibilitySourceSettings { 
	static Load(ResourceName: string): TakeRecorderLevelVisibilitySource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderLevelVisibilitySource;
	static GetDefaultObject(): TakeRecorderLevelVisibilitySource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderLevelVisibilitySource;
	static C(Other: UObject | any): TakeRecorderLevelVisibilitySource;
}

declare class TakeRecorderMicrophoneAudioSourceSettings extends TakeRecorderSource { 
	AudioTrackName: string;
	AudioSubDirectory: string;
	static Load(ResourceName: string): TakeRecorderMicrophoneAudioSourceSettings;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderMicrophoneAudioSourceSettings;
	static GetDefaultObject(): TakeRecorderMicrophoneAudioSourceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderMicrophoneAudioSourceSettings;
	static C(Other: UObject | any): TakeRecorderMicrophoneAudioSourceSettings;
}

declare class TakeRecorderMicrophoneAudioSource extends TakeRecorderMicrophoneAudioSourceSettings { 
	AudioGain: number;
	bSplitAudioChannelsIntoSeparateTracks: boolean;
	bReplaceRecordedAudio: boolean;
	static Load(ResourceName: string): TakeRecorderMicrophoneAudioSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderMicrophoneAudioSource;
	static GetDefaultObject(): TakeRecorderMicrophoneAudioSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderMicrophoneAudioSource;
	static C(Other: UObject | any): TakeRecorderMicrophoneAudioSource;
}

declare class TakeRecorderNearbySpawnedActorSource extends TakeRecorderSource { 
	Proximity: number;
	bFilterSpawnedActors: boolean;
	FilterTypes: UnrealEngineClass[];
	static Load(ResourceName: string): TakeRecorderNearbySpawnedActorSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderNearbySpawnedActorSource;
	static GetDefaultObject(): TakeRecorderNearbySpawnedActorSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderNearbySpawnedActorSource;
	static C(Other: UObject | any): TakeRecorderNearbySpawnedActorSource;
}

declare class TakeRecorderPlayerSource extends TakeRecorderSource { 
	static Load(ResourceName: string): TakeRecorderPlayerSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderPlayerSource;
	static GetDefaultObject(): TakeRecorderPlayerSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderPlayerSource;
	static C(Other: UObject | any): TakeRecorderPlayerSource;
}

declare class TakeRecorderWorldSourceSettings extends TakeRecorderSource { 
	bRecordWorldSettings: boolean;
	bAutotrackActors: boolean;
	static Load(ResourceName: string): TakeRecorderWorldSourceSettings;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderWorldSourceSettings;
	static GetDefaultObject(): TakeRecorderWorldSourceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderWorldSourceSettings;
	static C(Other: UObject | any): TakeRecorderWorldSourceSettings;
}

declare class TakeRecorderWorldSource extends TakeRecorderWorldSourceSettings { 
	static Load(ResourceName: string): TakeRecorderWorldSource;
	static Find(Outer: UObject, ResourceName: string): TakeRecorderWorldSource;
	static GetDefaultObject(): TakeRecorderWorldSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TakeRecorderWorldSource;
	static C(Other: UObject | any): TakeRecorderWorldSource;
}

declare class AudioSynesthesiaNRTFactory extends Factory { 
	AudioSynesthesiaNRTClass: UnrealEngineClass;
	static Load(ResourceName: string): AudioSynesthesiaNRTFactory;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaNRTFactory;
	static GetDefaultObject(): AudioSynesthesiaNRTFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaNRTFactory;
	static C(Other: UObject | any): AudioSynesthesiaNRTFactory;
}

declare class AudioSynesthesiaNRTSettingsFactory extends Factory { 
	AudioSynesthesiaNRTSettingsClass: UnrealEngineClass;
	static Load(ResourceName: string): AudioSynesthesiaNRTSettingsFactory;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaNRTSettingsFactory;
	static GetDefaultObject(): AudioSynesthesiaNRTSettingsFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaNRTSettingsFactory;
	static C(Other: UObject | any): AudioSynesthesiaNRTSettingsFactory;
}

declare class AudioSynesthesiaSettingsFactory extends Factory { 
	AudioSynesthesiaSettingsClass: UnrealEngineClass;
	static Load(ResourceName: string): AudioSynesthesiaSettingsFactory;
	static Find(Outer: UObject, ResourceName: string): AudioSynesthesiaSettingsFactory;
	static GetDefaultObject(): AudioSynesthesiaSettingsFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSynesthesiaSettingsFactory;
	static C(Other: UObject | any): AudioSynesthesiaSettingsFactory;
}

declare type EJavasriptTabActivationCause = 'UserClickedOnTab' | 'SetDirectly' | 'EJavasriptTabActivationCause_MAX';
declare var EJavasriptTabActivationCause : { UserClickedOnTab:'UserClickedOnTab',SetDirectly:'SetDirectly',EJavasriptTabActivationCause_MAX:'EJavasriptTabActivationCause_MAX', };
declare class JavascriptWorkspaceItem { 
	clone() : JavascriptWorkspaceItem;
	static C(Other: UObject | any): JavascriptWorkspaceItem;
	AddGroup(DisplayName: string): JavascriptWorkspaceItem;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
}

declare type EJavascriptTabRole = 'MajorTab' | 'PanelTab' | 'NomadTab' | 'DocumentTab' | 'EJavascriptTabRole_MAX';
declare var EJavascriptTabRole : { MajorTab:'MajorTab',PanelTab:'PanelTab',NomadTab:'NomadTab',DocumentTab:'DocumentTab',EJavascriptTabRole_MAX:'EJavascriptTabRole_MAX', };
declare class JavascriptEditorTab extends UObject { 
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	OnCloseTab: UnrealEngineDelegate<(Widget: Widget) => void>;
	OnTabActivatedCallback: UnrealEngineDelegate<(TabId: string, Cause: EJavasriptTabActivationCause) => void>;
	Group: JavascriptWorkspaceItem;
	TabId: string;
	DisplayName: string;
	Icon: JavascriptSlateIcon;
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	static Load(ResourceName: string): JavascriptEditorTab;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
	static GetDefaultObject(): JavascriptEditorTab;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	SetTabLabel(InLabelName: string): void;
	ForceCommit(): void;
	Discard(): void;
	Commit(): void;
	CloseTab(Widget: Widget): void;
	ActivateInParent(): void;
	static C(Other: UObject | any): JavascriptEditorTab;
}

declare class JavascriptUICommandInfo { 
	clone() : JavascriptUICommandInfo;
	static C(Other: UObject | any): JavascriptUICommandInfo;
	static GenericCommand(What: string): JavascriptUICommandInfo;
}

declare class JavascriptUICommand { 
	ID: string;
	FriendlyName: string;
	Description: string;
	DefaultChord: InputChord;
	ActionType: EJavasrciptUserInterfaceActionType;
	CommandInfo: JavascriptUICommandInfo;
	IconStyleName: string;
	clone() : JavascriptUICommand;
	static C(Other: UObject | any): JavascriptUICommand;
}

declare class JavascriptBindingContext { 
	clone() : JavascriptBindingContext;
	static C(Other: UObject | any): JavascriptBindingContext;
	Destroy(): void;
	UI_COMMAND_Function(Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static Destroy(Context: JavascriptBindingContext): void;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
}

declare class JavascriptUICommandList { 
	clone() : JavascriptUICommandList;
	static C(Other: UObject | any): JavascriptUICommandList;
	CreateMenuBarBuilder(UFunction: JavascriptFunction): void;
	CreateMenuBuilder(bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	CreateToolbarBuilder(Orientation: EOrientation,UFunction: JavascriptFunction): void;
	ProcessCommandBindings_KeyEvent(InKeyEvent: KeyEvent): boolean;
	ProcessCommandBindings_PointerEvent(InMouseEvent: UPointerEvent): boolean;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static CreateUICommandList(): JavascriptUICommandList;
	static GetLevelEditorActions(): JavascriptUICommandList;
}

declare class JavascriptUICommands extends UObject { 
	OnExecuteAction: UnrealEngineDelegate<(ID: string) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(ID: string) => boolean>;
	Commands: JavascriptUICommand[];
	ContextName: string;
	ContextDesc: string;
	ContextNameParent: string;
	StyleSetName: string;
	TextSubNamespace: string;
	CommandInfos: JavascriptUICommandInfo[];
	BindingContext: JavascriptBindingContext;
	static Load(ResourceName: string): JavascriptUICommands;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands;
	static GetDefaultObject(): JavascriptUICommands;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands;
	Uninitialize(): void;
	Unbind(List: JavascriptUICommandList): void;
	Refresh(): void;
	Initialize(): void;
	GetAction(ID: string): JavascriptUICommandInfo;
	Discard(): void;
	Commit(): void;
	static BroadcastCommandsChanged(InContextName: string): void;
	Bind(List: JavascriptUICommandList): void;
	static C(Other: UObject | any): JavascriptUICommands;
}

declare type EJavascriptExtensionHook = 'Before' | 'After' | 'First' | 'EJavascriptExtensionHook_MAX';
declare var EJavascriptExtensionHook : { Before:'Before',After:'After',First:'First',EJavascriptExtensionHook_MAX:'EJavascriptExtensionHook_MAX', };
declare class JavascriptMenuExtension { 
	ExtensionHook: string;
	HookPosition: EJavascriptExtensionHook;
	clone() : JavascriptMenuExtension;
	static C(Other: UObject | any): JavascriptMenuExtension;
}

declare class JavascriptUIExtender extends UObject { 
	MenuExtensions: JavascriptMenuExtension[];
	ToolbarExtensions: JavascriptMenuExtension[];
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	static Load(ResourceName: string): JavascriptUIExtender;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender;
	static GetDefaultObject(): JavascriptUIExtender;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static GetTopCommandList(): JavascriptUICommandList;
	static EndSection(): void;
	static Bind(Commands: JavascriptUICommands): void;
	static BeginSection(Name: string,Text: string): void;
	static AddToolBarButton(Commands: JavascriptUICommands,ID: string): void;
	static AddMenuSeparator(): void;
	static AddMenuEntry(Commands: JavascriptUICommands,ID: string): void;
	static C(Other: UObject | any): JavascriptUIExtender;
}

declare class JavascriptAssetEditorToolkit extends UObject { 
	ToolkitFName: string;
	Layout: string;
	BaseToolkitName: string;
	ToolkitName: string;
	WorldCentricTabColorScale: LinearColor;
	WorldCentricTabPrefix: string;
	Tabs: JavascriptEditorTab[];
	Commands: JavascriptUICommands;
	MenuExtender: JavascriptUIExtender;
	ToolbarExtender: JavascriptUIExtender;
	TestArray: number[];
	static Load(ResourceName: string): JavascriptAssetEditorToolkit;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetEditorToolkit;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetEditorToolkit;
}

declare class JavascriptAssetPicker extends Widget { 
	OnGetDefaultValue: UnrealEngineDelegate<() => string>;
	OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
	CategoryObject: UObject;
	AllowedClasses: string;
	static Load(ResourceName: string): JavascriptAssetPicker;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetPicker;
	static GetDefaultObject(): JavascriptAssetPicker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetPicker;
	SetDefaultObjectPath(InDefaultObjectPath: string): void;
	SetCategoryObject(InCategoryObject: UObject): void;
	SetAllowedClasses(InAllowedClasses: string): void;
	static C(Other: UObject | any): JavascriptAssetPicker;
}

declare class JavascriptAssetTypeActions extends UObject { 
	ActionsName: string;
	Color: Color;
	SupportedClass: UnrealEngineClass;
	Editor: JavascriptAssetEditorToolkit;
	Actions: JavascriptUIExtender;
	static Load(ResourceName: string): JavascriptAssetTypeActions;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetTypeActions;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetTypeActions;
}

declare class JavascriptClassViewer extends Widget { 
	OnGetDefaultValue: UnrealEngineDelegate<() => UnrealEngineClass>;
	OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
	CategoryClass: UnrealEngineClass;
	AllowedChildrenOfClasses: UnrealEngineClass[];
	static Load(ResourceName: string): JavascriptClassViewer;
	static Find(Outer: UObject, ResourceName: string): JavascriptClassViewer;
	static GetDefaultObject(): JavascriptClassViewer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptClassViewer;
	SetDefaultClass(InDefaultClass: UnrealEngineClass): void;
	SetCategoryClass(InCategoryClass: UnrealEngineClass): void;
	SetAllowedChildrenOfClasses(InAllowedChildrenOfClasses: UnrealEngineClass[]): void;
	static C(Other: UObject | any): JavascriptClassViewer;
}

declare class JavascriptColorPicker extends Widget { 
	OnColorChanged: UnrealEngineMulticastDelegate<(Color: LinearColor) => void>;
	SelectedColor: LinearColor;
	static Load(ResourceName: string): JavascriptColorPicker;
	static Find(Outer: UObject, ResourceName: string): JavascriptColorPicker;
	static GetDefaultObject(): JavascriptColorPicker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptColorPicker;
	static C(Other: UObject | any): JavascriptColorPicker;
}

declare class JavascriptCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptCommandlet;
	static GetDefaultObject(): JavascriptCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCommandlet;
	static C(Other: UObject | any): JavascriptCommandlet;
}

declare class JavascriptCurveTableEditor extends Widget { 
	static Load(ResourceName: string): JavascriptCurveTableEditor;
	static Find(Outer: UObject, ResourceName: string): JavascriptCurveTableEditor;
	static GetDefaultObject(): JavascriptCurveTableEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCurveTableEditor;
	SetObject(UObject: CurveTable,bCanEdit: boolean): void;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): JavascriptCurveTableEditor;
}

declare class JavascriptWholeRowDetailCustomization extends UObject { 
	TypeName: string;
	CategoryName: string;
	CustomWidget: JavascriptSlateWidget;
	static Load(ResourceName: string): JavascriptWholeRowDetailCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptWholeRowDetailCustomization;
	static GetDefaultObject(): JavascriptWholeRowDetailCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWholeRowDetailCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptWholeRowDetailCustomization;
}

declare class JavascriptDetailCustomization extends UObject { 
	TypeName: string;
	CategoryName: string;
	NameWidget: JavascriptSlateWidget;
	ValueWidget: JavascriptSlateWidget;
	static Load(ResourceName: string): JavascriptDetailCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptDetailCustomization;
	static GetDefaultObject(): JavascriptDetailCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDetailCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptDetailCustomization;
}

declare class JavascriptEditorEngineLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorEngineLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorEngineLibrary;
	static GetDefaultObject(): JavascriptEditorEngineLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorEngineLibrary;
	static SetMaterial(Engine: EditorEngine,InModel: Model,Material: MaterialInterface,Surfaces: number[]): void;
	static SelectNone(Engine: EditorEngine,bNoteSelectionChange: boolean,bDeselectBSPSurfs: boolean,WarnAboutManyActors: boolean): void;
	static SelectGroup(Engine: EditorEngine,InGroupActor: GroupActor,bForceSelection: boolean,bInSelected: boolean,bNotify: boolean): void;
	static SelectComponent(Engine: EditorEngine,Component: ActorComponent,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean): void;
	static SelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean,bForceRefresh: boolean): void;
	static RedrawAllViewports(Engine: EditorEngine,bInvalidateHitProxies: boolean): void;
	static RebuildStaticNavigableGeometry(Engine: EditorEngine,Level: Level): void;
	static RebuildLevel(Engine: EditorEngine,Level: Level): void;
	static GetSurfaces(Brush: Brush,Surfaces?: number[]): {Surfaces: number[]};
	static GetSelectedSet(Engine: EditorEngine,Class: UnrealEngineClass): USelection;
	static GetSelectedObjects(Engine: EditorEngine): USelection;
	static GetSelectedComponents(Engine: EditorEngine): USelection;
	static GetSelectedActors(Engine: EditorEngine): USelection;
	static GetPIEWorld(Engine: Engine): World;
	static GetLongPackagePath(InPackage: Package): string;
	static GetEditorWorld(Engine: Engine): World;
	static FindBrushBuilder(Engine: EditorEngine,BrushBuilderClass: UnrealEngineClass): BrushBuilder;
	static Exec(Engine: EditorEngine,InWorld: World,Command: string,Out?: string): {Out: string, $: boolean};
	static DuplicateAsset(AssetName: string,PackagePath: string,OriginalObject: UObject): UObject;
	static DeleteObjectsUnchecked(ObjectsToDelete: UObject[]): number;
	static CanSelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bSelectEvenIfHidden: boolean,bWarnIfLevelLocked: boolean): boolean;
	static bspBrushCSG(Engine: EditorEngine,Actor: Brush,Model: Model,PolyFlags: number,BrushType: EBrushType,CSGOper: ECsgOper,bBuildBounds: boolean,bMergePolys: boolean,bReplaceNULLMaterialRefs: boolean,bShowProgressBar: boolean): number;
	static C(Other: UObject | any): JavascriptEditorEngineLibrary;
}

declare class JavascriptAssetData { 
	ObjectPath: string;
	PackageName: string;
	PackagePath: string;
	AssetName: string;
	AssetClass: string;
	ChunkIDs: number[];
	PackageFlags: number;
	clone() : JavascriptAssetData;
	static C(Other: UObject | any): JavascriptAssetData;
	GetAllTags(OutArray?: string[]): {OutArray: string[]};
	GetAsset(): UObject;
	GetClass(): UnrealEngineClass;
	GetPackage(): Package;
	GetTagValue(Name: string,OutValue?: string): {OutValue: string, $: boolean};
	IsAssetLoaded(): boolean;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
}

declare class JavascriptEditorGlobalDelegates extends UObject { 
	static Load(ResourceName: string): JavascriptEditorGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorGlobalDelegates;
	static GetDefaultObject(): JavascriptEditorGlobalDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorGlobalDelegates;
	WorldChange(): void;
	UnbindAll(): void;
	Unbind(Key: string): void;
	SurfProps(): void;
	SingleStepPIE(bIsSimulating: boolean): void;
	SelectObjectEvent(UObject: UObject): void;
	SelectNoneEvent(): void;
	SelectionChangedEvent(UObject: UObject): void;
	SelectedProps(): void;
	ResumePIE(bIsSimulating: boolean): void;
	RefreshPrimitiveStatsBrowser(): void;
	RefreshLayerBrowser(): void;
	RefreshEditor(): void;
	RefreshAllBrowsers(): void;
	RedrawAllViewports(): void;
	PropertySelectionChange(): void;
	PreSaveWorld_Friendly(SaveFlags: number,World: World): void;
	PrePIEEnded(bIsSimulating: boolean): void;
	PreBeginPIE(bIsSimulating: boolean): void;
	PostSaveWorld_Friendly(SaveFlags: number,World: World,bSuccess: boolean): void;
	PostPIEStarted(bIsSimulating: boolean): void;
	PostLandscapeLayerUpdated(): void;
	OnShutdownPostPackagesSaved(): void;
	OnPathRemoved(Path: string): void;
	OnPathAdded(Path: string): void;
	OnObjectReimported(UObject: UObject): void;
	OnNewAssetCreated(InFactory: Factory): void;
	OnNewActorsDropped(DroppedObjects: UObject[],OutNewActors: Actor[]): void;
	OnMapOpened(Filename: string,bAsTemplate: boolean): void;
	OnMainFrameCreationFinished_Friendly(): void;
	OnLightingBuildStarted(): void;
	OnLightingBuildKept(): void;
	OnLevelActorDeleted(Actor: Actor): void;
	OnLevelActorAdded(Actor: Actor): void;
	OnInMemoryAssetDeleted(InObject: UObject): void;
	OnInMemoryAssetCreated(InObject: UObject): void;
	OnGridSnappingChanged(bGridEnabled: boolean,GridSize: number): void;
	OnFocusViewportOnActors(Actors: Actor[]): void;
	OnFinishPickingBlueprintClass(InClass: UnrealEngineClass): void;
	OnFilesLoaded(): void;
	OnFileLoadProgressUpdated_Friendly(NumTotalAssets: number,NumAssetsProcessedByAssetRegistry: number,NumAssetsPendingDataLoad: number,bIsDiscoveringAssetFiles: boolean): void;
	OnEditPasteActorsEnd(): void;
	OnEditPasteActorsBegin(): void;
	OnEditorCameraMoved(ViewLocation: Vector,ViewRotation: Rotator,ViewportType: ELevelViewportType,ViewIndex: number): void;
	OnEditCutActorsEnd(): void;
	OnEditCutActorsBegin(): void;
	OnEditCopyActorsEnd(): void;
	OnEditCopyActorsBegin(): void;
	OnDuplicateActorsEnd(): void;
	OnDuplicateActorsBegin(): void;
	OnDollyPerspectiveCamera(Drag: Vector,ViewIndex: number): void;
	OnDeleteActorsEnd(): void;
	OnDeleteActorsBegin(): void;
	OnConsoleCommandJS(Args: string[],InWorld: World): void;
	OnConfigureNewAssetProperties(InFactory: Factory): void;
	OnClassPackageLoadedOrUnloaded(): void;
	OnBlueprintReinstanced(): void;
	OnBlueprintPreCompile(Blueprint: Blueprint): void;
	OnBlueprintCompiled(): void;
	OnAssetsPreDelete(Assets: UObject[]): void;
	OnAssetsDeleted(Classes: UnrealEngineClass[]): void;
	OnAssetRenamed_Friendly(AssetData: JavascriptAssetData,Name: string): void;
	OnAssetRemoved_Friendly(AssetData: JavascriptAssetData): void;
	OnAssetReimport(InCreatedObject: UObject): void;
	OnAssetPreImport_Friendly(InFactory: Factory,InClass: UnrealEngineClass,InParent: UObject,Name: string,Type: string): void;
	OnAssetPostImport(InFactory: Factory,InCreatedObject: UObject): void;
	OnAssetAdded_Friendly(AssetData: JavascriptAssetData): void;
	OnApplyObjectToActor(ObjectToApply: UObject,Actor: Actor): void;
	OnApplicationPreInputKeyDownListener(KeyEvent: KeyEvent): void;
	OnAddLevelToWorld(Level: Level): void;
	OnActionAxisMappingsChanged(): void;
	NewCurrentLevel(): void;
	MapChange_Friendly(MapChangeFlags: number): void;
	LoadSelectedAssetsIfNeeded(): void;
	LayerChange(): void;
	FitTextureToSurface(World: World): void;
	EndPlayMapDelegate(): void;
	EndPIE(bIsSimulating: boolean): void;
	DisplayLoadErrors(): void;
	CleanseEditor(): void;
	ChangeEditorMode(NewMode: string): void;
	Bind(Key: string): void;
	BeginPIE(bIsSimulating: boolean): void;
	ActorPropertiesChange(): void;
	static C(Other: UObject | any): JavascriptEditorGlobalDelegates;
}

declare class JavascriptEditorInputProcessor extends UObject { 
	static Load(ResourceName: string): JavascriptEditorInputProcessor;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorInputProcessor;
	static GetDefaultObject(): JavascriptEditorInputProcessor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorInputProcessor;
	UnRegister(): void;
	Register(): void;
	HandleMouseWheelOrGestureEvent(InWheelEvent: UPointerEvent,InGestureEvent: UPointerEvent): boolean;
	HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
	HandleMouseButtonUpEvent(InPointerEvent: UPointerEvent): boolean;
	HandleMouseButtonDownEvent(InPointerEvent: UPointerEvent): boolean;
	HandleMouseButtonDoubleClickEvent(InPointerEvent: UPointerEvent): boolean;
	HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
	HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
	HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
	Activate(bEnable: boolean): void;
	static C(Other: UObject | any): JavascriptEditorInputProcessor;
}

declare class JavascriptExtensionBase { 
	clone() : JavascriptExtensionBase;
	static C(Other: UObject | any): JavascriptExtensionBase;
}

declare class JavascriptMenuBuilder { 
	clone() : JavascriptMenuBuilder;
	static C(Other: UObject | any): JavascriptMenuBuilder;
	AddComboButton(UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	AddMenuByCommands(UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	AddMenuEntry(UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	AddSeparator(): {Builder: JavascriptMenuBuilder};
	AddSubMenu(Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	AddToolBarButton(CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	AddToolBarButtonByContext(Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	AddWidget(Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	BeginSection(InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	EndSection(): {Builder: JavascriptMenuBuilder};
	PopCommandList(): {Builder: JavascriptMenuBuilder};
	PushCommandList(List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddMenuByCommands(Builder?: JavascriptMenuBuilder,UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddSubMenu(Builder?: JavascriptMenuBuilder,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
}

declare class JavascriptExtender { 
	clone() : JavascriptExtender;
	static C(Other: UObject | any): JavascriptExtender;
	AddMenubarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddMenuExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddToolBarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	Apply(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	RemoveExtension(Extension: JavascriptExtensionBase): void;
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
}

declare class JavascriptLazyExtenderDelegates extends UObject { 
	GetExtender: UnrealEngineDelegate<(List: JavascriptUICommandList, EditingObjects: UObject[]) => JavascriptExtender>;
	static Load(ResourceName: string): JavascriptLazyExtenderDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptLazyExtenderDelegates;
	static GetDefaultObject(): JavascriptLazyExtenderDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLazyExtenderDelegates;
	static C(Other: UObject | any): JavascriptLazyExtenderDelegates;
}

declare type EJavascriptRHIFeatureLevel = 'ES2' | 'ES3_1' | 'SM4' | 'SM5' | 'Num' | 'EJavascriptRHIFeatureLevel_MAX';
declare var EJavascriptRHIFeatureLevel : { ES2:'ES2',ES3_1:'ES3_1',SM4:'SM4',SM5:'SM5',Num:'Num',EJavascriptRHIFeatureLevel_MAX:'EJavascriptRHIFeatureLevel_MAX', };
declare class JavascriptPDI { 
	clone() : JavascriptPDI;
	static C(Other: UObject | any): JavascriptPDI;
	DrawArc(Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawCircle(Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawConnectedArrow(ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	DrawDashedLine(Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	DrawDirectionalArrow(ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	DrawOrientedWireBox(Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawPolygon(Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	DrawWireBox(Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireBox2(Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireCapsule(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireChoppedCone(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireCone(Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	DrawWireCylinder(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireDiamond(Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireSphere(Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphere2(Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides(Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides2(Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereCappedCone(Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireStar(Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	SetHitProxy(Name: string): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
}

declare class JavascriptExtensibilityManager { 
	clone() : JavascriptExtensibilityManager;
	static C(Other: UObject | any): JavascriptExtensibilityManager;
	AddExtender(Extender: JavascriptExtender): void;
	AddLazyExtender(Delegates: JavascriptLazyExtenderDelegates): void;
	RemoveAllLazyExtender(): void;
	RemoveExtender(Extender: JavascriptExtender): void;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
}

declare class JavascriptEditorObjectManager extends UObject { 
	static Load(ResourceName: string): JavascriptEditorObjectManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorObjectManager;
	static GetDefaultObject(): JavascriptEditorObjectManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorObjectManager;
	SetStructRef(Key: string,Value: UnrealEngineClass,bOverride: boolean): boolean;
	SetRef(Key: string,Value: UnrealEngineClass,bOverride: boolean): boolean;
	SetObject(Key: string,Value: UObject): boolean;
	RemoveStructRef(Key: string): void;
	RemoveRef(Key: string): void;
	RemoveObjects(Key: string): void;
	HasStructRef(Key: string): boolean;
	HasRef(Key: string): boolean;
	GetStructRef(Key: string): ScriptStruct;
	GetRef(Key: string): UnrealEngineClass;
	GetObjects(Key: string): UObject[];
	GetObjectKeys(): string[];
	Clear(bWithClass: boolean): void;
	static C(Other: UObject | any): JavascriptEditorObjectManager;
}

declare type EJavascriptMessageSeverity = 'CriticalError' | 'Error' | 'PerformanceWarning' | 'Warning' | 'Info' | 'EJavascriptMessageSeverity_MAX';
declare var EJavascriptMessageSeverity : { CriticalError:'CriticalError',Error:'Error',PerformanceWarning:'PerformanceWarning',Warning:'Warning',Info:'Info',EJavascriptMessageSeverity_MAX:'EJavascriptMessageSeverity_MAX', };
declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorLibrary;
	static GetDefaultObject(): JavascriptEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorLibrary;
	static UpdateModelComponents(Level: Level): void;
	static ToggleSelect(USelection: USelection,InObject: UObject): void;
	static ToggleIsExecuteTestModePIE(): boolean;
	static SetIsTemporarilyHiddenInEditor(Actor: Actor,bIsHidden: boolean): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
	static SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static SetFolderPath_Recursively(Actor: Actor,NewFolderPath: string): void;
	static SetFolderPath(Actor: Actor,NewFolderPath: string): void;
	static SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number,PaintingRestriction: ELandscapeLayerPaintingRestriction): void;
	static SetActorLocation(Actor: Actor,NewLocation: Vector,bSweep: boolean,SweepHitResult?: HitResult,bTeleport?: boolean): {SweepHitResult: HitResult, $: boolean};
	static SetActorLabelUnique(Actor: Actor,NewActorLabel: string,InExistingActorLabels: string[]): void;
	static SetActorLabel(Actor: Actor,NewActorLabel: string,bMarkDirty: boolean): void;
	static Select(USelection: USelection,InObject: UObject): void;
	static SavePackage(Package: Package,Filename: string): boolean;
	static SaveFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static RequestEndPlayMapInPIE(): void;
	static ReplaceAnimNotifyClass(Sequence: AnimSequenceBase,NotifyName: string,NewNotifyName: string,NewNotifyClass: UObject): number;
	static RemoveLevelInstance(World: World): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static RemoveComponentFromBlueprint(Blueprint: Blueprint,RemoveComponent: ActorComponent,bPromoteChildren: boolean): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static PostEditChange(InObject: UObject): void;
	static OpenFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static OpenEditorForAssetByPath(AssetPathName: string,ObjectName: string): void;
	static OpenEditorForAsset(Asset: UObject): boolean;
	static OpenDirectoryDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,OutFolderName?: string): {OutFolderName: string, $: boolean};
	static OpenCreateBlueprintFromActorDialog(Actor: Actor): void;
	static NotifyUpdateCurveTable(InCurveTable: CurveTable): void;
	static ModifyObject(UObject: UObject,bAlwaysMarkDirty: boolean): void;
	static MarkPackageDirty(InObject: UObject): boolean;
	static LoadImageFromDiskAsync(ImagePath: string,Callback: AsyncTaskDownloadImage): boolean;
	static LoadFileToString(Path: string,Data?: string): {Data: string, $: boolean};
	static LoadFileToIntArray(Path: string,FileData?: number[]): {FileData: number[], $: boolean};
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsActorLabelEditable(Actor: Actor): boolean;
	static IsActive(Transactor: Transactor): boolean;
	static InvalidateModelGeometry(World: World,InLevel: Level): void;
	static HasMetaData(Field: Field,Key: string): boolean;
	static GetWorldPositionFromViewportClick(Actor: Actor,Click: JavascriptViewportClick,OutHitResult?: HitResult): {OutHitResult: HitResult, $: boolean};
	static GetUniqueID(InObject: UObject): number;
	static GetTransaction(Transactor: Transactor,QueueIndex: number): JavascriptTransaction;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetTitle(Transaction: JavascriptTransaction): string;
	static GetTagValueByAssetData(AssetData: AssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static GetSourceControlStatusText(): string;
	static GetSelectedObjects(USelection: USelection,Out?: UObject[]): {Out: UObject[], $: number};
	static GetRootWindow(): JavascriptSlateWidget;
	static GetQueueLength(Transactor: Transactor): number;
	static GetPrimaryObject(Transaction: JavascriptTransaction): UObject;
	static GetParentClassOfBlueprint(Blueprint: Blueprint): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static GetName(Proxy: JavascriptHitProxy): string;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetLevelEditorActions(): JavascriptUICommandList;
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	static GetKeyNameByKeyEvent(Event: KeyEvent): string;
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetIsShiftDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIsExecuteTestModePIE(): boolean;
	static GetIsControlDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIsAltDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIPAddress(): string;
	static GetHostName(): string;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetEngine(): EditorEngine;
	static GetEditorPlayWorld(): World;
	static GetEditorObjectManager(): JavascriptEditorObjectManager;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetDefaultBrush(World: World): Brush;
	static GetDataTableAsJSON(InDataTable: DataTable,InDTExportFlags: number): string;
	static GetContext(Transaction: JavascriptTransaction): string;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetAverageMS(): number;
	static GetAverageFPS(): number;
	static GetAssetsByType(Types: string[],bRecursiveClasses: boolean): AssetData[];
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetAllTagsByAssetData(AssetData: AssetData,OutArray?: string[]): {OutArray: string[]};
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetActorRotation(Actor: Actor): Rotator;
	static GetActorLocation(Actor: Actor): Vector;
	static GetActorLabel(Actor: Actor): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static FromStringTable(InTableId: string,InKey: string): JavascriptTextProperty;
	static FindWorldInPackage(Package: Package): World;
	static FindRichCurve(InCurveTable: CurveTable,Key: string,OutCurve?: RichCurve): {OutCurve: RichCurve, $: boolean};
	static ExportNavigation(InWorld: World,Path: string): string;
	static EditorExec(World: World,Cmd: string): boolean;
	static EditorDestroyActor(World: World,Actor: Actor,bShouldModifyLevel: boolean): boolean;
	static EditorAddModalWindow(Widget: JavascriptSlateWidget): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DownloadImageFromUrl(ImageUrl: string,Callback: AsyncTaskDownloadImage): void;
	static DeselectAll(USelection: USelection,InClass: UnrealEngineClass): void;
	static Deselect(USelection: USelection,InObject: UObject): void;
	static DeletePackage(Package: Package): boolean;
	static csgAdd(DefaultBrush: Brush,PolyFlags: number,BrushType: EBrushType): Brush;
	static CreatePropertyEditorToolkit(ObjectsForPropertiesMenu: UObject[]): void;
	static CreateLogListingWidget(InLogName: string): JavascriptSlateWidget;
	static CreateLogListing(InLogName: string,InLabel: string): void;
	static CreateBrushForVolumeActor(NewActor: Volume,BrushBuilder: BrushBuilder): void;
	static ConditionalBeginDestroybyUObject(TargetObject: UObject): boolean;
	static CompileBlueprint(Blueprint: Blueprint): void;
	static ClearActorLabel(Actor: Actor): void;
	static CheckActivatedStatGroup(GroupName: string): boolean;
	static Build(Builder: BrushBuilder,InWorld: World,InBrush: Brush): boolean;
	static BroadcastHotReload(): void;
	static BroadcastAssetCreated(NewAsset: UObject): void;
	static AddWhitelistedObject(InObject: UObject): void;
	static AddRichCurve(InCurveTable: CurveTable,Key: string,InCurve: RichCurve): void;
	static AddLogListingMessage(InLogName: string,InSeverity: EJavascriptMessageSeverity,LogText: string): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddComponentsToBlueprint(Blueprint: Blueprint,Components: ActorComponent[],bHarvesting: boolean,OptionalNewRootComponent: ActorComponent,bKeepMobility: boolean): void;
	static C(Other: UObject | any): JavascriptEditorLibrary;
}

declare class JavascriptEditorPopupWindow extends UObject { 
	Widget: Widget;
	static Load(ResourceName: string): JavascriptEditorPopupWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorPopupWindow;
	static GetDefaultObject(): JavascriptEditorPopupWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorPopupWindow;
	Open(Heading: string,DesiredSize: Vector2D): boolean;
	OnDismissed(): void;
	static C(Other: UObject | any): JavascriptEditorPopupWindow;
}

declare class JavascriptEditorTabManager extends Widget { 
	Layout: string;
	Tabs: JavascriptEditorTab[];
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTabManager;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	InvokeTab(SearchForTabId: string): void;
	InsertNewTab(PlaceholderId: string,SearchForTabId: string,NewTab: JavascriptEditorTab): void;
	static C(Other: UObject | any): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	static Load(ResourceName: string): JavascriptEditorTick;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick;
	static GetDefaultObject(): JavascriptEditorTick;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	GetEngine(): EditorEngine;
	ForceTick(DeltaTime: number): void;
	static C(Other: UObject | any): JavascriptEditorTick;
}

declare class JavascriptEditorToolbar extends Widget { 
	OnHook: UnrealEngineDelegate<() => JavascriptMenuBuilder>;
	static Load(ResourceName: string): JavascriptEditorToolbar;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar;
	static GetDefaultObject(): JavascriptEditorToolbar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar;
	static C(Other: UObject | any): JavascriptEditorToolbar;
}

declare class JavascriptInputEventState { 
	clone() : JavascriptInputEventState;
	static C(Other: UObject | any): JavascriptInputEventState;
	GetInputEvent(): EInputEvent;
	GetKey(): Key;
	IsAltButtonEvent(): boolean;
	IsAltButtonPressed(): boolean;
	IsAnyMouseButtonDown(): boolean;
	IsButtonPressed(InKey: Key): boolean;
	IsCtrlButtonEvent(): boolean;
	IsCtrlButtonPressed(): boolean;
	IsLeftMouseButtonPressed(): boolean;
	IsMiddleMouseButtonPressed(): boolean;
	IsMouseButtonEvent(): boolean;
	IsRightMouseButtonPressed(): boolean;
	IsShiftButtonEvent(): boolean;
	IsShiftButtonPressed(): boolean;
	IsSpaceBarPressed(): boolean;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
}

declare type EJavascriptWidgetMode = 'WM_Translate' | 'WM_TranslateRotateZ' | 'WM_2D' | 'WM_Rotate' | 'WM_Scale' | 'WM_Max' | 'WM_None';
declare var EJavascriptWidgetMode : { WM_Translate:'WM_Translate',WM_TranslateRotateZ:'WM_TranslateRotateZ',WM_2D:'WM_2D',WM_Rotate:'WM_Rotate',WM_Scale:'WM_Scale',WM_Max:'WM_Max',WM_None:'WM_None', };
declare class JavascriptEditorViewport extends PanelWidget { 
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStarted: UnrealEngineDelegate<(InputState: JavascriptInputEventState, bIsDraggingWidget: boolean, bNudge: boolean, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStopped: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => void>;
	OnInputWidgetDelta: UnrealEngineDelegate<(Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorViewport) => boolean>;
	OnInputKey: UnrealEngineDelegate<(ControllerId: number, Key: Key, Event: EInputEvent, Instance: JavascriptEditorViewport) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorViewport) => void>;
	OnDrawCanvas: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorViewport) => void>;
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Vector>;
	OnGetWidgetRotation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Rotator>;
	OnGetWidgetMode: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => EJavascriptWidgetMode>;
	static Load(ResourceName: string): JavascriptEditorViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport;
	static GetDefaultObject(): JavascriptEditorViewport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport;
	SetWidgetMode(WidgetMode: EJavascriptWidgetMode): void;
	SetViewRotation(ViewRotation: Rotator): void;
	SetViewportType(InViewportType: ELevelViewportType): void;
	SetViewMode(InViewModeIndex: EViewModeIndex): void;
	SetViewLocation(ViewLocation: Vector): void;
	SetViewFOV(InViewFOV: number): void;
	SetSkyBrightness(SkyBrightness: number): void;
	SetSimulatePhysics(bShouldSimulatePhysics: boolean): void;
	SetRealtime(bInRealtime: boolean,bStoreCurrentValue: boolean): void;
	SetProfileIndex(InProfileIndex: number): void;
	SetLightLocation(InLightPos: Vector): void;
	SetLightDirection(InLightDir: Rotator): void;
	SetLightColor(LightColor: Color): void;
	SetLightBrightness(LightBrightness: number): void;
	SetFloorOffset(InFloorOffset: number): void;
	SetEngineShowFlags(In: string): boolean;
	SetCameraSpeedSetting(SpeedSetting: number): void;
	SetBackgroundColor(BackgroundColor: LinearColor): void;
	Redraw(): void;
	ProjectWorldToScreen(WorldPosition: Vector,OutScreenPosition?: Vector2D): {OutScreenPosition: Vector2D};
	OverridePostProcessSettings(PostProcessSettings: PostProcessSettings,Weight: number): void;
	GetWidgetMode(): EJavascriptWidgetMode;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	GetViewFOV(): number;
	GetSkyComponent(): StaticMeshComponent;
	GetFloorMeshComponent(): StaticMeshComponent;
	GetEngineShowFlags(): string;
	GetDefaultSphereReflectionComponent(): SphereReflectionCaptureComponent;
	GetDefaultSkySphereComponent(): StaticMeshComponent;
	GetDefaultSkyLightComponent(): SkyLightComponent;
	GetDefaultPostProcessComponent(): PostProcessComponent;
	GetDefaultInstancedSkyMaterial(): MaterialInstanceConstant;
	GetDefaultDirectionalLightComponent(): DirectionalLightComponent;
	GetDefaultAssetViewerSettings(): AssetViewerSettings;
	GetCurrentProfileIndex(): number;
	GetCameraSpeedSetting(): number;
	DeprojectScreenToWorld(ScreenPosition: Vector2D,OutRayOrigin?: Vector,OutRayDirection?: Vector): {OutRayOrigin: Vector, OutRayDirection: Vector};
	static C(Other: UObject | any): JavascriptEditorViewport;
}

declare class JavascriptEditorModeTools { 
	clone() : JavascriptEditorModeTools;
	static C(Other: UObject | any): JavascriptEditorModeTools;
	ActivateDefaultMode(): {Tools: JavascriptEditorModeTools};
	ActivateMode(InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	DeactivateAllModes(): {Tools: JavascriptEditorModeTools};
	DeactivateMode(InID?: string): {Tools: JavascriptEditorModeTools};
	DestroyMode(InID?: string): {Tools: JavascriptEditorModeTools};
	EndTracking(Viewport: JavascriptEdViewport): boolean;
	EnsureNotInMode(ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	IsDefaultModeActive(): {Tools: JavascriptEditorModeTools, $: boolean};
	IsModeActive(InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	IsTracking(): boolean;
	SetDefaultMode(DefaultID?: string): {Tools: JavascriptEditorModeTools};
	StartTracking(Viewport: JavascriptEdViewport): boolean;
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static GetLevelEditorModeTools(): JavascriptEditorModeTools;
}

declare class JavascriptEditorMode { 
	clone() : JavascriptEditorMode;
	static C(Other: UObject | any): JavascriptEditorMode;
	GetCurrentWidgetAxis(): number;
	GetModeManager(): JavascriptEditorModeTools;
	SelectNone(): void;
	SetCurrentWidgetAxis(InAxis: number): void;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
}

declare type EJavascriptEditAction = 'Skip' | 'Process' | 'Halt' | 'EJavascriptEditAction_MAX';
declare var EJavascriptEditAction : { Skip:'Skip',Process:'Process',Halt:'Halt',EJavascriptEditAction_MAX:'EJavascriptEditAction_MAX', };
declare class JavascriptEdMode extends UObject { 
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => Vector>;
	OnSelect: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorMode) => void>;
	OnDrawHUD: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorMode) => void>;
	IsSelectionAllowed: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorMode) => boolean>;
	OnQuery: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnStartTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnEndTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorMode) => boolean>;
	OnInputKey: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Key: Key, Event: EInputEvent, Instance: JavascriptEditorMode) => boolean>;
	OnInputDelta: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorMode) => boolean>;
	OnCapturedMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnLostFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnReceivedFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnSelectionChanged: UnrealEngineDelegate<(Tools: JavascriptEditorModeTools, Item: UObject) => void>;
	OnGetContent: UnrealEngineDelegate<() => Widget>;
	OnProcess: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnGetAction: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => EJavascriptEditAction>;
	OnUsesToolkits: UnrealEngineDelegate<() => boolean>;
	OnIsCompatibleWith: UnrealEngineDelegate<(bIsCompatibleWith: string) => boolean>;
	OnActorMoved: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorsDuplicated: UnrealEngineDelegate<(PreDuplicateSelection: Actor[], PostDuplicateSelection: Actor[], bOffsetLocations: boolean, Instance: JavascriptEditorMode) => void>;
	OnActorSelectionChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorPropChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnMapChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	ModeId: string;
	SlateIcon: JavascriptSlateIcon;
	ModeName: string;
	bVisible: boolean;
	PriorityOrder: number;
	static Load(ResourceName: string): JavascriptEdMode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode;
	static GetDefaultObject(): JavascriptEdMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptEdMode;
}

declare class JavascriptEdModeLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEdModeLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdModeLibrary;
	static GetDefaultObject(): JavascriptEdModeLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdModeLibrary;
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static SetSelectionLock(bValue: boolean): void;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static GetWorldPositionFromJavascriptEdViewport(Actor: Actor,Viewport: JavascriptEdViewport,OutVector?: Vector): {OutVector: Vector, $: boolean};
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static GetLevelEditorModeTools(): JavascriptEditorModeTools;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static C(Other: UObject | any): JavascriptEdModeLibrary;
}

declare class JavascriptInputEventStateLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptInputEventStateLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptInputEventStateLibrary;
	static GetDefaultObject(): JavascriptInputEventStateLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptInputEventStateLibrary;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static C(Other: UObject | any): JavascriptInputEventStateLibrary;
}

declare class JavascriptLogSubscriber extends UObject { 
	OnNewLogMessage: UnrealEngineMulticastDelegate<(Message: string, Type: string, Category: string) => void>;
	static Load(ResourceName: string): JavascriptLogSubscriber;
	static Find(Outer: UObject, ResourceName: string): JavascriptLogSubscriber;
	static GetDefaultObject(): JavascriptLogSubscriber;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLogSubscriber;
	static C(Other: UObject | any): JavascriptLogSubscriber;
}

declare class JavascriptMenuLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptMenuLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuLibrary;
	static GetDefaultObject(): JavascriptMenuLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuLibrary;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
	static GenericCommand(What: string): JavascriptUICommandInfo;
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static Destroy(Context: JavascriptBindingContext): void;
	static CreateUICommandList(): JavascriptUICommandList;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddSubMenu(Builder?: JavascriptMenuBuilder,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddMenuByCommands(Builder?: JavascriptMenuBuilder,UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMenuLibrary;
}

declare class JavascriptMultiBox extends Widget { 
	OnHook: UnrealEngineDelegate<(ID: string, Self: JavascriptMultiBox, CurrentBuilder: JavascriptMenuBuilder) => void>;
	static Load(ResourceName: string): JavascriptMultiBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox;
	static GetDefaultObject(): JavascriptMultiBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox;
	static Bind(Builder: JavascriptMenuBuilder): void;
	AddSubMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMultiBox;
}

declare type EJSCheckBoxState = 'Unchecked' | 'Checked' | 'Undetermined' | 'EJSCheckBoxState_MAX';
declare var EJSCheckBoxState : { Unchecked:'Unchecked',Checked:'Checked',Undetermined:'Undetermined',EJSCheckBoxState_MAX:'EJSCheckBoxState_MAX', };
declare class JavascriptNotification extends UObject { 
	Text: string;
	bUseImage: boolean;
	UImage: SlateBrush;
	FadeInDuration: number;
	FadeOutDuration: number;
	ExpireDuration: number;
	bUseThrobber: boolean;
	bUseSuccessFailIcons: boolean;
	bUseLargeFont: boolean;
	bFireAndForget: boolean;
	CheckBoxState: EJSCheckBoxState;
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	CheckBoxText: string;
	Hyperlink: UnrealEngineDelegate<() => void>;
	HyperlinkText: string;
	bAllowThrottleWhenFrameRateIsLow: boolean;
	static Load(ResourceName: string): JavascriptNotification;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
	static GetDefaultObject(): JavascriptNotification;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	Success(): void;
	SetText(InText: string): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
	static C(Other: UObject | any): JavascriptNotification;
}

declare class JavascriptOnEditorCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptOnEditorCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptOnEditorCommandlet;
	static GetDefaultObject(): JavascriptOnEditorCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptOnEditorCommandlet;
	GetEngine(): EditorEngine;
	static C(Other: UObject | any): JavascriptOnEditorCommandlet;
}

declare type EPropertyAccessResult = 'MultipleValues' | 'Fail' | 'Success' | 'EPropertyAccessResult_MAX';
declare var EPropertyAccessResult : { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success',EPropertyAccessResult_MAX:'EPropertyAccessResult_MAX', };
declare class JavascriptSimpleDelegateWrapper extends UObject { 
	delegate: UnrealEngineDelegate<() => void>;
	static Load(ResourceName: string): JavascriptSimpleDelegateWrapper;
	static Find(Outer: UObject, ResourceName: string): JavascriptSimpleDelegateWrapper;
	static GetDefaultObject(): JavascriptSimpleDelegateWrapper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSimpleDelegateWrapper;
	static C(Other: UObject | any): JavascriptSimpleDelegateWrapper;
}

declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject | any): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GeneratePathToProperty(): string;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetIndexInArray(): number;
	GetJavascriptRefValue(OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	GetKeyHandle(): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetObjectValue(OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	GetOuterObjects(): UObject[];
	GetParentHandle(): JavascriptPropertyHandle;
	GetProperty(): any;
	GetPropertyName(): string;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	IsArrayProperty(): boolean;
	IsArrayPropertyWithValueType(): boolean;
	IsEditConst(): boolean;
	IsValidHandle(): boolean;
	SetJavascriptRefValue(InValue: JavascriptRef): EPropertyAccessResult;
	SetObjectValue(InValue: UObject): EPropertyAccessResult;
	SetOnPropertyValueChanged(Wrapper: JavascriptSimpleDelegateWrapper): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetProperty(Handle: JavascriptPropertyHandle): any;
	static GetPropertyName(Handle: JavascriptPropertyHandle): string;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Wrapper: JavascriptSimpleDelegateWrapper): void;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
}

declare class JavascriptDetailWidgetDecl { 
	clone() : JavascriptDetailWidgetDecl;
	static C(Other: UObject | any): JavascriptDetailWidgetDecl;
	SetContent(Widget: JavascriptSlateWidget): void;
	SetHAlign(InAlignment: EHorizontalAlignment): void;
	SetMaxDesiredWidth(MaxWidth: number): void;
	SetMinDesiredWidth(MinWidth: number): void;
	SetVAlign(InAlignment: EVerticalAlignment): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
}

declare class JavascriptDetailWidgetRow { 
	clone() : JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptDetailWidgetRow;
	NameContent(): JavascriptDetailWidgetDecl;
	SetFilterString(InFilterString: string): void;
	ValueContent(): JavascriptDetailWidgetDecl;
	WholeRowContent(): JavascriptDetailWidgetDecl;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
}

declare class JavascriptPropertyTypeCustomizationUtils { 
	clone() : JavascriptPropertyTypeCustomizationUtils;
	static C(Other: UObject | any): JavascriptPropertyTypeCustomizationUtils;
	RequestRefresh(bForce: boolean): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
}

declare class JavascriptSimpleGetBoolDelegateWrapper extends UObject { 
	delegate: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static Find(Outer: UObject, ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static GetDefaultObject(): JavascriptSimpleGetBoolDelegateWrapper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSimpleGetBoolDelegateWrapper;
	static C(Other: UObject | any): JavascriptSimpleGetBoolDelegateWrapper;
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject | any): JavascriptDetailPropertyRow;
	BindVisibility(Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject | any): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	AddExternalObjectProperty(Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	AddExternalObjects(Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
}

declare class JavascriptPropertyCustomization extends UObject { 
	PropertyTypeName: string;
	OnDestroy: UnrealEngineDelegate<(ID: number) => void>;
	OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnPropertyValueChanged: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptPropertyCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization;
	static GetDefaultObject(): JavascriptPropertyCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptPropertyCustomization;
}

declare class JavascriptPropertyCustomizationLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomizationLibrary;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Wrapper: JavascriptSimpleDelegateWrapper): void;
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static GetPropertyName(Handle: JavascriptPropertyHandle): string;
	static GetProperty(Handle: JavascriptPropertyHandle): any;
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string): JavascriptSlateWidget;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptPropertyCustomizationLibrary;
}

declare type EPropertyEditorNameAreaSettings = 'HideNameArea' | 'ObjectsUseNameArea' | 'ActorsUseNameArea' | 'ComponentsAndActorsUseNameArea' | 'EPropertyEditorNameAreaSettings_MAX';
declare var EPropertyEditorNameAreaSettings : { HideNameArea:'HideNameArea',ObjectsUseNameArea:'ObjectsUseNameArea',ActorsUseNameArea:'ActorsUseNameArea',ComponentsAndActorsUseNameArea:'ComponentsAndActorsUseNameArea',EPropertyEditorNameAreaSettings_MAX:'EPropertyEditorNameAreaSettings_MAX', };
declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(PropertyName: string, MemberPropertyName: string) => void>;
	bUpdateFromSelection: boolean;
	bLockable: boolean;
	bAllowSearch: boolean;
	bHideSelectionTip: boolean;
	bReadOnly: boolean;
	bEnablePropertyPath: boolean;
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	ReadOnlyDelegate: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static GetDefaultObject(): PropertyEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	IsPropertyVisible(PropertName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	IsPropertyReadOnly(PropertyName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	ForceRefresh(): void;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): PropertyEditor;
}

declare class JavascriptPropertyTable extends Widget { 
	OnGenerateCustomCellWidget: UnrealEngineDelegate<(UObject: UObject, ColumnName: string) => JavascriptSlateWidget>;
	OnUseCustomCellWidget: UnrealEngineDelegate<(UObject: UObject, ColumnName: string) => boolean>;
	bUseCustomColumns: boolean;
	static Load(ResourceName: string): JavascriptPropertyTable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyTable;
	static GetDefaultObject(): JavascriptPropertyTable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyTable;
	SetEditingObjects(InEditingObjects: UObject[]): void;
	GetSelectedTableObjects(): UObject[];
	GetEditingObjects(): UObject[];
	static C(Other: UObject | any): JavascriptPropertyTable;
}

declare class JavascriptRawMeshLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptRawMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
	static GetDefaultObject(): JavascriptRawMeshLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRawMeshLibrary;
	static SetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number,Info: MeshSectionInfo): void;
	static SaveRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,InMesh?: JavascriptRawMesh): {InMesh: JavascriptRawMesh};
	static LoadRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,OutMesh?: JavascriptRawMesh): {OutMesh: JavascriptRawMesh};
	static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
	static IsValid(RawMesh: JavascriptRawMesh): boolean;
	static GetWedgePosition(RawMesh: JavascriptRawMesh,WedgeIndex: number): Vector;
	static GetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number): MeshSectionInfo;
	static GetPhysicsBodySetupFromStaticMeshComponent(InStaticMeshComp: StaticMeshComponent): BodySetup;
	static GetPhysicsBodySetupFromStaticMesh(InStaticMesh: StaticMesh): BodySetup;
	static GetPhysicsBodySetupFromMesh(InSkeletalMesh: SkeletalMesh,InName: string): BodySetup;
	static GetPhysicsBodySetup(InSkeletalMeshComp: SkeletalMeshComponent,InName: string): BodySetup;
	static Empty(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static CompactMaterialIndices(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static Build(StaticMesh: StaticMesh): void;
	static C(Other: UObject | any): JavascriptRawMeshLibrary;
}

declare class JavascriptScrubControlPanel extends Widget { 
	OnClick_Forward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_ToggleLoop_Delegate: UnrealEngineMulticastDelegate<() => void>;
	SetPlaybackPosition_Delegate: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptScrubControlPanel;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel;
	static GetDefaultObject(): JavascriptScrubControlPanel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel;
	SetViewRange(NewMin: number,NewMax: number): void;
	SetSumFrames(NewSumFrames: number): void;
	SetPlaybackPosition(NewTime: number): void;
	SetLooping(NewbLooping: boolean): void;
	SetFramesPerSecond(NewFramesPerSecond: number): void;
	IsLooping(): boolean;
	GetViewRangeMin(): number;
	GetViewRangeMax(): number;
	GetTotalSequenceLength(): number;
	GetTotalFrameCount(): number;
	GetPlaybackPosition(): number;
	GetFramesPerSecond(): number;
	static C(Other: UObject | any): JavascriptScrubControlPanel;
}

declare class JavascriptWebBrowser extends Widget { 
	OnUrlChanged: UnrealEngineMulticastDelegate<(Text: string) => void>;
	OnBeforePopup: UnrealEngineMulticastDelegate<(URL: string, Frame: string) => void>;
	bShowAddressBar: boolean;
	bShowControls: boolean;
	bSupportsThumbMouseButtonNavigation: boolean;
	static Load(ResourceName: string): JavascriptWebBrowser;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebBrowser;
	static GetDefaultObject(): JavascriptWebBrowser;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebBrowser;
	LoadURL(NewURL: string): void;
	LoadString(Contents: string,DummyURL: string): void;
	GetUrl(): string;
	GetTitleText(): string;
	ExecuteJavascript(ScriptText: string): void;
	static C(Other: UObject | any): JavascriptWebBrowser;
}

declare class JavascriptPinParams { 
	ContainerType: EPinContainerType;
	bIsReference: boolean;
	bIsConst: boolean;
	Index: number;
	clone() : JavascriptPinParams;
	static C(Other: UObject | any): JavascriptPinParams;
}

declare class JavascriptGraphEdNode extends EdGraphNode { 
	BackgroundColor: SlateColor;
	GraphNode: UObject;
	IsTitleOnly: boolean;
	IsCustomNode: boolean;
	WidgetFinalized: JavascriptFunction;
	RenderOpacity: number;
	Bidirectional: boolean;
	PriorityOrder: number;
	PinRefMap: Map<string, UObject>;
	static Load(ResourceName: string): JavascriptGraphEdNode;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode;
	static GetDefaultObject(): JavascriptGraphEdNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode;
	UpdateSlate(): void;
	SetVisible(bVisible: boolean): void;
	SetTitleSelectionMode(InTitleHeight: number): void;
	SetRenderOpacity(Opacity: number): void;
	SetEnable(bEnable: boolean): void;
	ResetTitleSelectionMode(): void;
	RemovePinByName(PinName: string): boolean;
	RemovePin(Pin: JavascriptEdGraphPin): boolean;
	GetVisible(): boolean;
	GetNumOfPins(Direction: EEdGraphPinDirection): number;
	GetDesiredSize(): Vector2D;
	CreatePin(Dir: EEdGraphPinDirection,PinCategory: string,PinSubCategory: string,PinSubCategoryObject: UObject,PinName: string,PinToolTip: string,PinDisplayName: string,InPinParams: JavascriptPinParams): JavascriptEdGraphPin;
	static C(Other: UObject | any): JavascriptGraphEdNode;
	GetOwnerPanel(): JavascriptSlateWidget;
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
}

declare class JavascriptSlateEdNode { 
	clone() : JavascriptSlateEdNode;
	static C(Other: UObject | any): JavascriptSlateEdNode;
	AddPinToHoverSet(Pin: JavascriptEdGraphPin): void;
	RemovePinFromHoverSet(Pin: JavascriptEdGraphPin): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
}

declare class JavascriptPerformSecondPassLayoutContainer { 
	PrevNode: EdGraphNode;
	NextNode: EdGraphNode;
	NodeIndex: number;
	MaxNodes: number;
	clone() : JavascriptPerformSecondPassLayoutContainer;
	static C(Other: UObject | any): JavascriptPerformSecondPassLayoutContainer;
}

declare class JavascriptConnectionParams { 
	WireColor: LinearColor;
	AssociatedPin1: JavascriptEdGraphPin;
	AssociatedPin2: JavascriptEdGraphPin;
	WireThickness: number;
	bDrawBubbles: boolean;
	bUserFlag1: boolean;
	bUserFlag2: boolean;
	StartDirection: EEdGraphPinDirection;
	EndDirection: EEdGraphPinDirection;
	clone() : JavascriptConnectionParams;
	static C(Other: UObject | any): JavascriptConnectionParams;
}

declare class JavascriptGraphConnectionDrawingPolicyContainer { 
	clone() : JavascriptGraphConnectionDrawingPolicyContainer;
	static C(Other: UObject | any): JavascriptGraphConnectionDrawingPolicyContainer;
	ApplyHoverDeemphasis(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	DetermineWiringStyle(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	DrawConnection(A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	DrawSplineWithArrow(StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	GetHorveredPinNum(): number;
	IsContainedHoveredPins(Pin: JavascriptEdGraphPin): boolean;
	MakeRotatedBox(ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
}

declare type EGraphSchemaGetStringQuery = 'Description' | 'Title' | 'EGraphSchemaGetStringQuery_MAX';
declare var EGraphSchemaGetStringQuery : { Description:'Description',Title:'Title',EGraphSchemaGetStringQuery_MAX:'EGraphSchemaGetStringQuery_MAX', };
declare class JavascriptGraphMenuBuilder extends JavascriptMenuBuilder { 
	Graph: EdGraph;
	GraphNode: EdGraphNode;
	GraphPin: JavascriptEdGraphPin;
	Context: GraphNodeContextMenuContext;
	clone() : JavascriptGraphMenuBuilder;
	static C(Other: UObject | any): JavascriptGraphMenuBuilder;
}

declare type ECanCreateConnectionResponse = 'CONNECT_RESPONSE_MAKE' | 'CONNECT_RESPONSE_DISALLOW' | 'CONNECT_RESPONSE_BREAK_OTHERS_A' | 'CONNECT_RESPONSE_BREAK_OTHERS_B' | 'CONNECT_RESPONSE_BREAK_OTHERS_AB' | 'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE' | 'CONNECT_RESPONSE_MAKE_WITH_PROMOTION' | 'CONNECT_RESPONSE_MAX';
declare var ECanCreateConnectionResponse : { CONNECT_RESPONSE_MAKE:'CONNECT_RESPONSE_MAKE',CONNECT_RESPONSE_DISALLOW:'CONNECT_RESPONSE_DISALLOW',CONNECT_RESPONSE_BREAK_OTHERS_A:'CONNECT_RESPONSE_BREAK_OTHERS_A',CONNECT_RESPONSE_BREAK_OTHERS_B:'CONNECT_RESPONSE_BREAK_OTHERS_B',CONNECT_RESPONSE_BREAK_OTHERS_AB:'CONNECT_RESPONSE_BREAK_OTHERS_AB',CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE:'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE',CONNECT_RESPONSE_MAKE_WITH_PROMOTION:'CONNECT_RESPONSE_MAKE_WITH_PROMOTION',CONNECT_RESPONSE_MAX:'CONNECT_RESPONSE_MAX', };
declare class JavascriptPinConnectionResponse { 
	Message: string;
	Response: ECanCreateConnectionResponse;
	clone() : JavascriptPinConnectionResponse;
	static C(Other: UObject | any): JavascriptPinConnectionResponse;
}

declare class EdGraphSchemaAction { 
	MenuDescription: string;
	TooltipDescription: string;
	Category: string;
	Keywords: string;
	Grouping: number;
	SectionID: number;
	MenuDescriptionArray: string[];
	FullSearchTitlesArray: string[];
	FullSearchKeywordsArray: string[];
	FullSearchCategoryArray: string[];
	LocalizedMenuDescriptionArray: string[];
	LocalizedFullSearchTitlesArray: string[];
	LocalizedFullSearchKeywordsArray: string[];
	LocalizedFullSearchCategoryArray: string[];
	SearchText: string;
	clone() : EdGraphSchemaAction;
	static C(Other: UObject | any): EdGraphSchemaAction;
}

declare class PerformActionContext { 
	ParentGraph: EdGraph;
	FromPins: JavascriptEdGraphPin[];
	Location: Vector2D;
	bSelectNewNode: boolean;
	clone() : PerformActionContext;
	static C(Other: UObject | any): PerformActionContext;
}

declare class JavascriptArrangedWidget { 
	clone() : JavascriptArrangedWidget;
	static C(Other: UObject | any): JavascriptArrangedWidget;
}

declare class JavascriptPinWidget { 
	clone() : JavascriptPinWidget;
	static C(Other: UObject | any): JavascriptPinWidget;
}

declare class JavascriptDetermineLinkGeometryContainer { 
	clone() : JavascriptDetermineLinkGeometryContainer;
	static C(Other: UObject | any): JavascriptDetermineLinkGeometryContainer;
	FindPinGeometries(PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	FindPinToPinWidgetMap(Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	GetArrangedNodes(UNode: EdGraphNode): JavascriptArrangedWidget;
	GetOutputPinWidget(): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
}

declare class JavascriptGraphAssetGraphSchema extends EdGraphSchema { 
	OnGetPinColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetPinTextColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetDefaultValueVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetSlateBrushName: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => string>;
	OnPinConnectionListChanged: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => void>;
	OnTryCreateConnection: UnrealEngineDelegate<(PinA: JavascriptEdGraphPin, PinB: JavascriptEdGraphPin) => void>;
	OnMouseEnter: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseMove: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Delta: Vector2D, bUserIsDragging: boolean, MouseZone: number, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonDown: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonUp: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnPerformSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptPerformSecondPassLayoutContainer>;
	OnRequiresSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnMoveTo: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, NewPosition: Vector2D) => boolean>;
	OnTakeContentWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, OutLeftNodeBoxWidget: JavascriptSlateWidget, OutRightNodeBoxWidget: JavascriptSlateWidget) => JavascriptSlateWidget>;
	OnGetValueWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetActualPinWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetPinStatusIndicator: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnDisableMakePins: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEnablePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingDefaultPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetPinLabelVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetCustomPinBoxWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnUsingNodeWidgetMap: UnrealEngineDelegate<() => boolean>;
	OnDetermineWiringStyle: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => void>;
	OnComputeSplineTangent: UnrealEngineDelegate<(A: Vector2D, B: Vector2D) => Vector2D>;
	OnDrawSplineWithArrow: UnrealEngineDelegate<(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowRadius: Vector2D) => boolean>;
	OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<(A: Geometry, B: Geometry, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnDrawPreviewConnector: UnrealEngineDelegate<(PinGeometry: Geometry, StartPoint: Vector2D, Endpoint: Vector2D, Pin: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnTakeUserWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeTitleAreaWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeErrorReportingWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnGetString: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Query: EGraphSchemaGetStringQuery) => string>;
	OnBuildMenu: UnrealEngineDelegate<(Builder: JavascriptGraphMenuBuilder) => void>;
	OnAllocateDefaultPins: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreatePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnCanCreateConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => JavascriptPinConnectionResponse>;
	OnPerformAction: UnrealEngineDelegate<(Action: EdGraphSchemaAction, Context: PerformActionContext) => EdGraphNode>;
	OnContextActions: UnrealEngineDelegate<(FromPin: JavascriptEdGraphPin) => EdGraphSchemaAction[]>;
	OnNodeConnectionListChanged: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateAutomaticConversionNodeAndConnections: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => boolean>;
	OnDetermineLinkGeometry: UnrealEngineDelegate<(OutPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, StartWidgetGeometry: JavascriptArrangedWidget, EndWidgetGeometry: JavascriptArrangedWidget, Container: JavascriptDetermineLinkGeometryContainer) => boolean>;
	OnIsNodeComment: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEndUserInteraction: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateOutputSideAddButton: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnAddPinByAddButton: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnShouldAlwaysPurgeOnModification: UnrealEngineDelegate<() => boolean>;
	OnDragEnter: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDragLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnDragOver: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDrop: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnGetSideMarginInPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => number>;
	OnCommitedBubbleComment: UnrealEngineDelegate<(Comment: string) => void>;
	OnMouseDownGraphPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema;
	BreakSinglePinLink(SourcePin: JavascriptEdGraphPin,TargetPin: JavascriptEdGraphPin): void;
	BreakPinLinks(TargetPin: JavascriptEdGraphPin,bSendsNodeNotifcation: boolean): void;
	BreakNodeLinks(TargetNode: EdGraphNode): void;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema;
}

declare class JavascriptGraphEdCustomNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdCustomNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdCustomNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	SetGraphPanel(InGraphPanel: JavascriptSlateWidget): void;
	static C(Other: UObject | any): JavascriptGraphEdCustomNodeWidget;
}

declare class JavascriptNodeCreator { 
	UNode: JavascriptGraphEdNode;
	clone() : JavascriptNodeCreator;
	static C(Other: UObject | any): JavascriptNodeCreator;
	Finalize(): {Creator: JavascriptNodeCreator};
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
}

declare class JavascriptGraphEdGraph extends EdGraph { 
	CustomNodes: JavascriptGraphEdNode[];
	static Load(ResourceName: string): JavascriptGraphEdGraph;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdGraph;
	static GetDefaultObject(): JavascriptGraphEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdGraph;
	RebuildGenericGraph(): void;
	static C(Other: UObject | any): JavascriptGraphEdGraph;
	CommentNodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	CustomNodeCreator(): JavascriptNodeCreator;
	NodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	static CommentNodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
}

declare class JavascriptGraphEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptGraphEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorLibrary;
	static GetDefaultObject(): JavascriptGraphEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorLibrary;
	static TryConnection(Schema: EdGraphSchema,A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): boolean;
	static SetPinType(Pin: JavascriptEdGraphPin,PinType: EdGraphPinType): void;
	static SetPinRefObject(InPin: JavascriptEdGraphPin,InObject: UObject): void;
	static SetPinInfo(A: JavascriptEdGraphPin,InPinName: string,InPinToolTip: string): void;
	static SetPinHidden(A: JavascriptEdGraphPin,bHidden: boolean): void;
	static SetPinContainerType(A: JavascriptEdGraphPin,ContainerType: EJavascriptPinContainerType): void;
	static SetPinAdvancedView(A: JavascriptEdGraphPin,bAdvancedView: boolean): void;
	static SetParentPin(A: JavascriptEdGraphPin,Parent: JavascriptEdGraphPin): void;
	static SetNodeMetaData(Schema: EdGraphSchema,UNode: EdGraphNode,KeyValue: string): boolean;
	static ResizeNode(UNode: EdGraphNode,NewSize: Vector2D): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static MakeLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static IsValid(A: JavascriptEdGraphPin): boolean;
	static IsPinHidden(A: JavascriptEdGraphPin): boolean;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static GetSubPins(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetPinType(A: JavascriptEdGraphPin): EdGraphPinType;
	static GetPins(UNode: EdGraphNode): JavascriptEdGraphPin[];
	static GetPinRefObject(InPin: JavascriptEdGraphPin): UObject;
	static GetPinName(A: JavascriptEdGraphPin): string;
	static GetPinIndex(A: JavascriptEdGraphPin): number;
	static GetPinGUID(A: JavascriptEdGraphPin): Guid;
	static GetPinContainerType(A: JavascriptEdGraphPin): EJavascriptPinContainerType;
	static GetParentPin(A: JavascriptEdGraphPin): JavascriptEdGraphPin;
	static GetOwningNode(A: JavascriptEdGraphPin): EdGraphNode;
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
	static GetLinkedTo(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetLinkedPinNum(A: JavascriptEdGraphPin): number;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static GetDirection(A: JavascriptEdGraphPin): EEdGraphPinDirection;
	static GetDefaultObject(): JavascriptEdGraphPin;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPin(UNode: EdGraphNode,PinName: string,Direction: EEdGraphPinDirection): JavascriptEdGraphPin;
	static FindClosestPointOnGeom(Geom: Geometry,TestPoint: Vector2D): Vector2D;
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DestroyNode(UNode: EdGraphNode): void;
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
	static CommentNodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static CenterOf(Geom: Geometry): Vector2D;
	static CanUserDeleteNode(UNode: EdGraphNode): boolean;
	static CanDuplicateNode(UNode: EdGraphNode): boolean;
	static BreakLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static BreakAllPinLinks(A: JavascriptEdGraphPin): void;
	static AutowireNewNode(UNode: EdGraphNode,FromPin: JavascriptEdGraphPin): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static C(Other: UObject | any): JavascriptGraphEditorLibrary;
}

declare class JavascriptGraphAppearanceInfo { 
	CornerImage: SlateBrush;
	CornerText: string;
	PIENotifyText: string;
	ReadOnlyText: string;
	InstructionText: string;
	clone() : JavascriptGraphAppearanceInfo;
	static C(Other: UObject | any): JavascriptGraphAppearanceInfo;
}

declare type EPinVisibility = 'Pin_Show' | 'Pin_HideNoConnection' | 'Pin_HideNoConnectionNoDefault' | 'Pin_MAX';
declare var EPinVisibility : { Pin_Show:'Pin_Show',Pin_HideNoConnection:'Pin_HideNoConnection',Pin_HideNoConnectionNoDefault:'Pin_HideNoConnectionNoDefault',Pin_MAX:'Pin_MAX', };
declare class JavascriptGraphEditorWidget extends Widget { 
	EdGraph: JavascriptGraphEdGraph;
	OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) => void>;
	OnDropActor: UnrealEngineDelegate<(Actors: Actor[], Graph: EdGraph, Point: Vector2D) => void>;
	OnDisallowedPinConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => void>;
	OnSelectedNodesChanged: UnrealEngineDelegate<(Set: UObject[]) => void>;
	OnInitialGraphPanelUpdated: UnrealEngineDelegate<() => void>;
	AppearanceInfo: JavascriptGraphAppearanceInfo;
	CommandList: JavascriptUICommandList;
	static Load(ResourceName: string): JavascriptGraphEditorWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget;
	static GetDefaultObject(): JavascriptGraphEditorWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget;
	SetViewLocation(Location: Vector2D,ZoomAmount: number): void;
	SetPinVisibility(InVisibility: EPinVisibility): void;
	SetNodeSelection(UNode: EdGraphNode,bSelect: boolean): void;
	SetGraph(InEdGraph: JavascriptGraphEdGraph): void;
	SelectAllNodes(): void;
	NotifyGraphChanged(): void;
	static NewGraph(ParentScope: UObject): JavascriptGraphEdGraph;
	JumpToPin(JumpToMe: JavascriptEdGraphPin): void;
	JumpToNode(JumpToMe: EdGraphNode,bRequestRename: boolean,bSelectNode: boolean): void;
	GetViewLocation(OutLocation?: Vector2D,OutZoomAmount?: number): {OutLocation: Vector2D, OutZoomAmount: number};
	GetSelectedNodes(): UObject[];
	GetPasteLocation(): Vector2D;
	ClearSelectionSet(): void;
	static C(Other: UObject | any): JavascriptGraphEditorWidget;
}

declare class JavascriptGraphEdNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	static C(Other: UObject | any): JavascriptGraphEdNodeWidget;
}

declare class JavascriptGraphEdNode_Comment extends JavascriptGraphEdNode { 
	CommentColor: LinearColor;
	FontSize: number;
	bCommentBubbleVisible_InDetailsPanel: boolean;
	bColorCommentBubble: boolean;
	MoveMode: ECommentBoxMode;
	CommentDepth: number;
	static Load(ResourceName: string): JavascriptGraphEdNode_Comment;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode_Comment;
	static GetDefaultObject(): JavascriptGraphEdNode_Comment;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode_Comment;
	static C(Other: UObject | any): JavascriptGraphEdNode_Comment;
}

declare class JavascriptGraphTextPropertyEditableTextBox extends Widget { 
	OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
	OnGetDefaultValue: UnrealEngineDelegate<() => JavascriptTextProperty>;
	OnIsValidText: UnrealEngineDelegate<(TextValue: string) => string>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(TextProperty: JavascriptTextProperty) => void>;
	WidgetStyle: EditableTextBoxStyle;
	WrapTextAt: number;
	AutoWrapText: boolean;
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox;
}

declare class JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
}

declare class JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox_OnGetDefaultValue__PythonCallable;
}

declare class JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox_OnGetGraphPin__PythonCallable;
}

declare class JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox_OnIsValidText__PythonCallable;
}

declare class JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable;
	static GetDefaultObject(): JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphEditorWidget_OnDisallowedPinConnection__PythonCallable;
}

declare class JavascriptGraphEditorWidget_OnDropActor__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphEditorWidget_OnDropActor__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget_OnDropActor__PythonCallable;
	static GetDefaultObject(): JavascriptGraphEditorWidget_OnDropActor__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget_OnDropActor__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphEditorWidget_OnDropActor__PythonCallable;
}

declare class JavascriptGraphEditorWidget_SetNodes__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphEditorWidget_SetNodes__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget_SetNodes__PythonCallable;
	static GetDefaultObject(): JavascriptGraphEditorWidget_SetNodes__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget_SetNodes__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphEditorWidget_SetNodes__PythonCallable;
}

declare class JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable;
	static GetDefaultObject(): JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphEditorWidget_SimpleDelegate__PythonCallable;
}

declare class JavascriptGraphEditorWidget_SingleNode__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphEditorWidget_SingleNode__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget_SingleNode__PythonCallable;
	static GetDefaultObject(): JavascriptGraphEditorWidget_SingleNode__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget_SingleNode__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphEditorWidget_SingleNode__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnBuildMenu__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnCanCreateConnection__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnCommitedBubbleComment__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnContextActions__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnCreatePin__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnDetermineLinkGeometry__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnDetermineWiringStyle__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnDrawPreviewConnector__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnDrawSplineWithArrow_Geom__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnEdNodeAction__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetBoolean__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetBoolean_GraphPin__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetBooleanMoveTo__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetBooleanWidget__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetCustomPinBoxWidget__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetPinColor__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetPins__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetSideMarginInPin__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetSlateBrushName__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnGetString__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnMouseDragEvent__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnMouseEvent__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnMouseEvent_GraphPin__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnMouseEventAdvanced__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnPerformAction__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnPerformSecondPassLayout__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnPinConnectionListChanged__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnShouldAlwaysPurgeOnModification__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnTakeContentWidget__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnTakeWidget__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnTryCreateConnection__PythonCallable;
}

declare class JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema_OnVectorArith__PythonCallable;
}

declare class DynamicSimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): DynamicSimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): DynamicSimpleDelegate__PythonCallable;
	static GetDefaultObject(): DynamicSimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicSimpleDelegate__PythonCallable;
	static C(Other: UObject | any): DynamicSimpleDelegate__PythonCallable;
}

declare class DynamicSimpleGetBoolDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): DynamicSimpleGetBoolDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): DynamicSimpleGetBoolDelegate__PythonCallable;
	static GetDefaultObject(): DynamicSimpleGetBoolDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicSimpleGetBoolDelegate__PythonCallable;
	static C(Other: UObject | any): DynamicSimpleGetBoolDelegate__PythonCallable;
}

declare class OnGenerateCustomCellWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGenerateCustomCellWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGenerateCustomCellWidget__PythonCallable;
	static GetDefaultObject(): OnGenerateCustomCellWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGenerateCustomCellWidget__PythonCallable;
	static C(Other: UObject | any): OnGenerateCustomCellWidget__PythonCallable;
}

declare class OnUseCustomCellWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnUseCustomCellWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnUseCustomCellWidget__PythonCallable;
	static GetDefaultObject(): OnUseCustomCellWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnUseCustomCellWidget__PythonCallable;
	static C(Other: UObject | any): OnUseCustomCellWidget__PythonCallable;
}

declare class PropertyEditorPropertyChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): PropertyEditorPropertyChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): PropertyEditorPropertyChanged__PythonCallable;
	static GetDefaultObject(): PropertyEditorPropertyChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditorPropertyChanged__PythonCallable;
	static C(Other: UObject | any): PropertyEditorPropertyChanged__PythonCallable;
}

declare class PropertyEditorReadOnly__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): PropertyEditorReadOnly__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): PropertyEditorReadOnly__PythonCallable;
	static GetDefaultObject(): PropertyEditorReadOnly__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditorReadOnly__PythonCallable;
	static C(Other: UObject | any): PropertyEditorReadOnly__PythonCallable;
}

declare class JavascriptWebBrowser_OnBeforePopup__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptWebBrowser_OnBeforePopup__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebBrowser_OnBeforePopup__PythonCallable;
	static GetDefaultObject(): JavascriptWebBrowser_OnBeforePopup__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebBrowser_OnBeforePopup__PythonCallable;
	static C(Other: UObject | any): JavascriptWebBrowser_OnBeforePopup__PythonCallable;
}

declare class JavascriptWebBrowser_OnUrlChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptWebBrowser_OnUrlChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebBrowser_OnUrlChanged__PythonCallable;
	static GetDefaultObject(): JavascriptWebBrowser_OnUrlChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebBrowser_OnUrlChanged__PythonCallable;
	static C(Other: UObject | any): JavascriptWebBrowser_OnUrlChanged__PythonCallable;
}

declare class JavascriptUIExtender_OnHook__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptUIExtender_OnHook__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender_OnHook__PythonCallable;
	static GetDefaultObject(): JavascriptUIExtender_OnHook__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender_OnHook__PythonCallable;
	static C(Other: UObject | any): JavascriptUIExtender_OnHook__PythonCallable;
}

declare class JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable;
	static GetDefaultObject(): JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable;
	static C(Other: UObject | any): JavascriptUICommands_JavascriptCanExecuteAction__PythonCallable;
}

declare class JavascriptUICommands_JavascriptExecuteAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptUICommands_JavascriptExecuteAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands_JavascriptExecuteAction__PythonCallable;
	static GetDefaultObject(): JavascriptUICommands_JavascriptExecuteAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands_JavascriptExecuteAction__PythonCallable;
	static C(Other: UObject | any): JavascriptUICommands_JavascriptExecuteAction__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Backward__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Backward__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Backward__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Backward__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Backward_End__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Backward_Step__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Forward__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Forward__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Forward__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Forward__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Forward_End__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_Forward_Step__PythonCallable;
}

declare class JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_OnClick_ToggleLoop__PythonCallable;
}

declare class JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable;
	static GetDefaultObject(): JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable;
	static C(Other: UObject | any): JavascriptScrubControlPanel_SetPlaybackPosition__PythonCallable;
}

declare class JavascriptPropertyCustomization_CustomChildren__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptPropertyCustomization_CustomChildren__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization_CustomChildren__PythonCallable;
	static GetDefaultObject(): JavascriptPropertyCustomization_CustomChildren__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization_CustomChildren__PythonCallable;
	static C(Other: UObject | any): JavascriptPropertyCustomization_CustomChildren__PythonCallable;
}

declare class JavascriptPropertyCustomization_CustomHeader__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptPropertyCustomization_CustomHeader__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization_CustomHeader__PythonCallable;
	static GetDefaultObject(): JavascriptPropertyCustomization_CustomHeader__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization_CustomHeader__PythonCallable;
	static C(Other: UObject | any): JavascriptPropertyCustomization_CustomHeader__PythonCallable;
}

declare class JavascriptPropertyCustomization_OnDestroy__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptPropertyCustomization_OnDestroy__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization_OnDestroy__PythonCallable;
	static GetDefaultObject(): JavascriptPropertyCustomization_OnDestroy__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization_OnDestroy__PythonCallable;
	static C(Other: UObject | any): JavascriptPropertyCustomization_OnDestroy__PythonCallable;
}

declare class JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable;
	static GetDefaultObject(): JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable;
	static C(Other: UObject | any): JavascriptPropertyCustomization_OnPropertyValueChanged__PythonCallable;
}

declare class JavascriptNotification_CheckDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptNotification_CheckDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification_CheckDelegate__PythonCallable;
	static GetDefaultObject(): JavascriptNotification_CheckDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification_CheckDelegate__PythonCallable;
	static C(Other: UObject | any): JavascriptNotification_CheckDelegate__PythonCallable;
}

declare class JavascriptNotification_SimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptNotification_SimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification_SimpleDelegate__PythonCallable;
	static GetDefaultObject(): JavascriptNotification_SimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification_SimpleDelegate__PythonCallable;
	static C(Other: UObject | any): JavascriptNotification_SimpleDelegate__PythonCallable;
}

declare class JavascriptMultiBox_OnHook__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptMultiBox_OnHook__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox_OnHook__PythonCallable;
	static GetDefaultObject(): JavascriptMultiBox_OnHook__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox_OnHook__PythonCallable;
	static C(Other: UObject | any): JavascriptMultiBox_OnHook__PythonCallable;
}

declare class JavascriptLogSubscriber_OnNewLogMessage__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptLogSubscriber_OnNewLogMessage__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptLogSubscriber_OnNewLogMessage__PythonCallable;
	static GetDefaultObject(): JavascriptLogSubscriber_OnNewLogMessage__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLogSubscriber_OnNewLogMessage__PythonCallable;
	static C(Other: UObject | any): JavascriptLogSubscriber_OnNewLogMessage__PythonCallable;
}

declare class JavascriptEdMode_ActorDuplicated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_ActorDuplicated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_ActorDuplicated__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_ActorDuplicated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_ActorDuplicated__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_ActorDuplicated__PythonCallable;
}

declare class JavascriptEdMode_OnClick__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnClick__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnClick__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnClick__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnClick__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnClick__PythonCallable;
}

declare class JavascriptEdMode_OnDraw__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnDraw__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnDraw__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnDraw__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnDraw__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnDraw__PythonCallable;
}

declare class JavascriptEdMode_OnDrawHUD__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnDrawHUD__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnDrawHUD__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnDrawHUD__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnDrawHUD__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnDrawHUD__PythonCallable;
}

declare class JavascriptEdMode_OnGetAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnGetAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnGetAction__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnGetAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnGetAction__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnGetAction__PythonCallable;
}

declare class JavascriptEdMode_OnGetWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnGetWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnGetWidget__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnGetWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnGetWidget__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnGetWidget__PythonCallable;
}

declare class JavascriptEdMode_OnIsCompatibleWith__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnIsCompatibleWith__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnIsCompatibleWith__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnIsCompatibleWith__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnIsCompatibleWith__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnIsCompatibleWith__PythonCallable;
}

declare class JavascriptEdMode_OnProcess__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnProcess__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnProcess__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnProcess__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnProcess__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnProcess__PythonCallable;
}

declare class JavascriptEdMode_OnSelect__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnSelect__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnSelect__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnSelect__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnSelect__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnSelect__PythonCallable;
}

declare class JavascriptEdMode_OnSelectionChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnSelectionChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnSelectionChanged__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnSelectionChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnSelectionChanged__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnSelectionChanged__PythonCallable;
}

declare class JavascriptEdMode_OnUsesToolkits__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_OnUsesToolkits__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_OnUsesToolkits__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_OnUsesToolkits__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_OnUsesToolkits__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_OnUsesToolkits__PythonCallable;
}

declare class JavascriptEdMode_QueryVector__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_QueryVector__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_QueryVector__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_QueryVector__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_QueryVector__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_QueryVector__PythonCallable;
}

declare class JavascriptEdMode_SimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_SimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_SimpleDelegate__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_SimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_SimpleDelegate__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_SimpleDelegate__PythonCallable;
}

declare class JavascriptEdMode_Viewport0__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_Viewport0__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_Viewport0__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_Viewport0__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_Viewport0__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_Viewport0__PythonCallable;
}

declare class JavascriptEdMode_ViewportAxis__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_ViewportAxis__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_ViewportAxis__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_ViewportAxis__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_ViewportAxis__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_ViewportAxis__PythonCallable;
}

declare class JavascriptEdMode_ViewportDelta__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_ViewportDelta__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_ViewportDelta__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_ViewportDelta__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_ViewportDelta__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_ViewportDelta__PythonCallable;
}

declare class JavascriptEdMode_ViewportKey__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_ViewportKey__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_ViewportKey__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_ViewportKey__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_ViewportKey__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_ViewportKey__PythonCallable;
}

declare class JavascriptEdMode_ViewportXY__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEdMode_ViewportXY__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode_ViewportXY__PythonCallable;
	static GetDefaultObject(): JavascriptEdMode_ViewportXY__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode_ViewportXY__PythonCallable;
	static C(Other: UObject | any): JavascriptEdMode_ViewportXY__PythonCallable;
}

declare class JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnGetWidgetLocation__PythonCallable;
}

declare class JavascriptEditorViewport_OnGetWidgetMode__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnGetWidgetMode__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnGetWidgetMode__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnGetWidgetMode__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnGetWidgetMode__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnGetWidgetMode__PythonCallable;
}

declare class JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnGetWidgetRotation__PythonCallable;
}

declare class JavascriptEditorViewport_OnInputAxis__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnInputAxis__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnInputAxis__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnInputAxis__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnInputAxis__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnInputAxis__PythonCallable;
}

declare class JavascriptEditorViewport_OnInputKey__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnInputKey__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnInputKey__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnInputKey__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnInputKey__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnInputKey__PythonCallable;
}

declare class JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnInputWidgetDelta__PythonCallable;
}

declare class JavascriptEditorViewport_OnMouseEnter__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnMouseEnter__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnMouseEnter__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnMouseEnter__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnMouseEnter__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnMouseEnter__PythonCallable;
}

declare class JavascriptEditorViewport_OnMouseLeave__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnMouseLeave__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnMouseLeave__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnMouseLeave__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnMouseLeave__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnMouseLeave__PythonCallable;
}

declare class JavascriptEditorViewport_OnMouseMove__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnMouseMove__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnMouseMove__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnMouseMove__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnMouseMove__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnMouseMove__PythonCallable;
}

declare class JavascriptEditorViewport_OnViewportClick__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnViewportClick__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnViewportClick__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnViewportClick__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnViewportClick__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnViewportClick__PythonCallable;
}

declare class JavascriptEditorViewport_OnViewportDraw__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnViewportDraw__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnViewportDraw__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnViewportDraw__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnViewportDraw__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnViewportDraw__PythonCallable;
}

declare class JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnViewportDrawCanvas__PythonCallable;
}

declare class JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnViewportTrackingStarted__PythonCallable;
}

declare class JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable;
	static GetDefaultObject(): JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorViewport_OnViewportTrackingStopped__PythonCallable;
}

declare class JavascriptEditorToolbar_OnHook__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorToolbar_OnHook__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar_OnHook__PythonCallable;
	static GetDefaultObject(): JavascriptEditorToolbar_OnHook__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar_OnHook__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorToolbar_OnHook__PythonCallable;
}

declare class JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable;
	static GetDefaultObject(): JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorTick_JavascriptEditorTickSignature__PythonCallable;
}

declare class JavascriptEditorTab_CloseTab__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorTab_CloseTab__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab_CloseTab__PythonCallable;
	static GetDefaultObject(): JavascriptEditorTab_CloseTab__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab_CloseTab__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorTab_CloseTab__PythonCallable;
}

declare class JavascriptEditorTab_OnTabActivated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorTab_OnTabActivated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab_OnTabActivated__PythonCallable;
	static GetDefaultObject(): JavascriptEditorTab_OnTabActivated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab_OnTabActivated__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorTab_OnTabActivated__PythonCallable;
}

declare class JavascriptEditorTab_SpawnTab__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorTab_SpawnTab__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab_SpawnTab__PythonCallable;
	static GetDefaultObject(): JavascriptEditorTab_SpawnTab__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab_SpawnTab__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorTab_SpawnTab__PythonCallable;
}

declare class JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable;
	static GetDefaultObject(): JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable;
	static C(Other: UObject | any): JavascriptLazyExtenderDelegates_JavascriptGetExtender__PythonCallable;
}

declare class JavascriptColorPicker_OnColorChangedEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptColorPicker_OnColorChangedEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptColorPicker_OnColorChangedEvent__PythonCallable;
	static GetDefaultObject(): JavascriptColorPicker_OnColorChangedEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptColorPicker_OnColorChangedEvent__PythonCallable;
	static C(Other: UObject | any): JavascriptColorPicker_OnColorChangedEvent__PythonCallable;
}

declare class JavascriptClassViewer_OnGetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptClassViewer_OnGetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptClassViewer_OnGetDefaultValue__PythonCallable;
	static GetDefaultObject(): JavascriptClassViewer_OnGetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptClassViewer_OnGetDefaultValue__PythonCallable;
	static C(Other: UObject | any): JavascriptClassViewer_OnGetDefaultValue__PythonCallable;
}

declare class JavascriptClassViewer_OnSetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptClassViewer_OnSetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptClassViewer_OnSetDefaultValue__PythonCallable;
	static GetDefaultObject(): JavascriptClassViewer_OnSetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptClassViewer_OnSetDefaultValue__PythonCallable;
	static C(Other: UObject | any): JavascriptClassViewer_OnSetDefaultValue__PythonCallable;
}

declare class JavascriptAssetPicker_OnGetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptAssetPicker_OnGetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetPicker_OnGetDefaultValue__PythonCallable;
	static GetDefaultObject(): JavascriptAssetPicker_OnGetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetPicker_OnGetDefaultValue__PythonCallable;
	static C(Other: UObject | any): JavascriptAssetPicker_OnGetDefaultValue__PythonCallable;
}

declare class JavascriptAssetPicker_OnSetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptAssetPicker_OnSetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetPicker_OnSetDefaultValue__PythonCallable;
	static GetDefaultObject(): JavascriptAssetPicker_OnSetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetPicker_OnSetDefaultValue__PythonCallable;
	static C(Other: UObject | any): JavascriptAssetPicker_OnSetDefaultValue__PythonCallable;
}

declare class LevelInstanceActorFactory extends ActorFactory { 
	static Load(ResourceName: string): LevelInstanceActorFactory;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceActorFactory;
	static GetDefaultObject(): LevelInstanceActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceActorFactory;
	static C(Other: UObject | any): LevelInstanceActorFactory;
}

declare class LevelInstanceEditorMode extends EdMode { 
	static Load(ResourceName: string): LevelInstanceEditorMode;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceEditorMode;
	static GetDefaultObject(): LevelInstanceEditorMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceEditorMode;
	static C(Other: UObject | any): LevelInstanceEditorMode;
}

declare class LevelInstanceEditorSettings extends UObject { 
	TemplateMapInfos: TemplateMapInfo[];
	LevelInstanceClassName: string;
	static Load(ResourceName: string): LevelInstanceEditorSettings;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceEditorSettings;
	static GetDefaultObject(): LevelInstanceEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceEditorSettings;
	static C(Other: UObject | any): LevelInstanceEditorSettings;
}

declare type ELevelInstancePivotType = 'CenterMinZ' | 'Center' | 'Actor' | 'WorldOrigin' | 'ELevelInstancePivotType_MAX';
declare var ELevelInstancePivotType : { CenterMinZ:'CenterMinZ',Center:'Center',Actor:'Actor',WorldOrigin:'WorldOrigin',ELevelInstancePivotType_MAX:'ELevelInstancePivotType_MAX', };
declare class LevelInstanceEditorPerProjectUserSettings extends DeveloperSettings { 
	bAlwaysShowDialog: boolean;
	PivotType: ELevelInstancePivotType;
	static Load(ResourceName: string): LevelInstanceEditorPerProjectUserSettings;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceEditorPerProjectUserSettings;
	static GetDefaultObject(): LevelInstanceEditorPerProjectUserSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceEditorPerProjectUserSettings;
	static C(Other: UObject | any): LevelInstanceEditorPerProjectUserSettings;
}

declare class TestPawnAction_Log extends PawnAction { 
	static Load(ResourceName: string): TestPawnAction_Log;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_Log;
	static GetDefaultObject(): TestPawnAction_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_Log;
	static C(Other: UObject | any): TestPawnAction_Log;
}

declare class TestPawnAction_CallFunction extends TestPawnAction_Log { 
	static Load(ResourceName: string): TestPawnAction_CallFunction;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_CallFunction;
	static GetDefaultObject(): TestPawnAction_CallFunction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_CallFunction;
	static C(Other: UObject | any): TestPawnAction_CallFunction;
}

declare class TestBTDecorator_Blackboard extends BTDecorator_Blackboard { 
	LogIndexBecomeRelevant: number;
	LogIndexCeaseRelevant: number;
	LogIndexCalculate: number;
	static Load(ResourceName: string): TestBTDecorator_Blackboard;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_Blackboard;
	static GetDefaultObject(): TestBTDecorator_Blackboard;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_Blackboard;
	static C(Other: UObject | any): TestBTDecorator_Blackboard;
}

declare class TestBTDecorator_CantExecute extends BTDecorator { 
	static Load(ResourceName: string): TestBTDecorator_CantExecute;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_CantExecute;
	static GetDefaultObject(): TestBTDecorator_CantExecute;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_CantExecute;
	static C(Other: UObject | any): TestBTDecorator_CantExecute;
}

declare class TestBTDecorator_DelayedAbort extends BTDecorator { 
	DelayTicks: number;
	bOnlyOnce: boolean;
	static Load(ResourceName: string): TestBTDecorator_DelayedAbort;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_DelayedAbort;
	static GetDefaultObject(): TestBTDecorator_DelayedAbort;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_DelayedAbort;
	static C(Other: UObject | any): TestBTDecorator_DelayedAbort;
}

declare class TestBTService_Log extends BTService { 
	LogActivation: number;
	LogDeactivation: number;
	KeyNameTick: string;
	KeyNameBecomeRelevant: string;
	KeyNameCeaseRelevant: string;
	LogTick: number;
	bToggleValue: boolean;
	static Load(ResourceName: string): TestBTService_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTService_Log;
	static GetDefaultObject(): TestBTService_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTService_Log;
	static C(Other: UObject | any): TestBTService_Log;
}

declare type EBTTestServiceStopTree = 'DuringBecomeRelevant' | 'DuringTick' | 'DuringCeaseRelevant' | 'EBTTestServiceStopTree_MAX';
declare var EBTTestServiceStopTree : { DuringBecomeRelevant:'DuringBecomeRelevant',DuringTick:'DuringTick',DuringCeaseRelevant:'DuringCeaseRelevant',EBTTestServiceStopTree_MAX:'EBTTestServiceStopTree_MAX', };
declare class TestBTService_StopTree extends BTService { 
	LogIndex: number;
	StopTimming: EBTTestServiceStopTree;
	static Load(ResourceName: string): TestBTService_StopTree;
	static Find(Outer: UObject, ResourceName: string): TestBTService_StopTree;
	static GetDefaultObject(): TestBTService_StopTree;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTService_StopTree;
	static C(Other: UObject | any): TestBTService_StopTree;
}

declare class TestBTTask_LatentWithFlags extends BTTaskNode { 
	LogIndexExecuteStart: number;
	LogIndexExecuting: number;
	LogIndexExecuteFinish: number;
	LogIndexAbortStart: number;
	LogIndexAborting: number;
	LogIndexAbortFinish: number;
	ExecuteHalfTicks: number;
	AbortHalfTicks: number;
	KeyNameExecute: string;
	KeyNameAbort: string;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_LatentWithFlags;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_LatentWithFlags;
	static GetDefaultObject(): TestBTTask_LatentWithFlags;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_LatentWithFlags;
	static C(Other: UObject | any): TestBTTask_LatentWithFlags;
}

declare class TestBTTask_Log extends BTTaskNode { 
	LogIndex: number;
	LogFinished: number;
	ExecutionTicks: number;
	LogTickIndex: number;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_Log;
	static GetDefaultObject(): TestBTTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_Log;
	static C(Other: UObject | any): TestBTTask_Log;
}

declare class TestBTTask_SetFlag extends BTTaskNode { 
	KeyName: string;
	bValue: boolean;
	OnAbortKeyName: string;
	bOnAbortValue: boolean;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetFlag;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetFlag;
	static GetDefaultObject(): TestBTTask_SetFlag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetFlag;
	static C(Other: UObject | any): TestBTTask_SetFlag;
}

declare class TestBTTask_SetValue extends BTTaskNode { 
	KeyName: string;
	Value: number;
	OnAbortKeyName: string;
	OnAbortValue: number;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetValue;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetValue;
	static GetDefaultObject(): TestBTTask_SetValue;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetValue;
	static C(Other: UObject | any): TestBTTask_SetValue;
}

declare type EBTTestTaskStopTree = 'DuringExecute' | 'DuringTick' | 'DuringAbort' | 'DuringFinish' | 'EBTTestTaskStopTree_MAX';
declare var EBTTestTaskStopTree : { DuringExecute:'DuringExecute',DuringTick:'DuringTick',DuringAbort:'DuringAbort',DuringFinish:'DuringFinish',EBTTestTaskStopTree_MAX:'EBTTestTaskStopTree_MAX', };
declare class TestBTTask_StopTree extends BTTaskNode { 
	StopTimming: EBTTestTaskStopTree;
	LogIndex: number;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_StopTree;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_StopTree;
	static GetDefaultObject(): TestBTTask_StopTree;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_StopTree;
	static C(Other: UObject | any): TestBTTask_StopTree;
}

declare class TestBTTask_ToggleFlag extends BTTaskNode { 
	LogIndex: number;
	KeyName: string;
	NumToggles: number;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_ToggleFlag;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_ToggleFlag;
	static GetDefaultObject(): TestBTTask_ToggleFlag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_ToggleFlag;
	static C(Other: UObject | any): TestBTTask_ToggleFlag;
}

declare class MockAI extends UObject { 
	Actor: Actor;
	BBComp: BlackboardComponent;
	BrainComp: BrainComponent;
	PerceptionComp: AIPerceptionComponent;
	PawnActionComp: PawnActionsComponent;
	static Load(ResourceName: string): MockAI;
	static Find(Outer: UObject, ResourceName: string): MockAI;
	static GetDefaultObject(): MockAI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI;
	static C(Other: UObject | any): MockAI;
}

declare class MockAI_BT extends MockAI { 
	BTComp: BehaviorTreeComponent;
	static Load(ResourceName: string): MockAI_BT;
	static Find(Outer: UObject, ResourceName: string): MockAI_BT;
	static GetDefaultObject(): MockAI_BT;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI_BT;
	static C(Other: UObject | any): MockAI_BT;
}

declare class MockTask_Log extends GameplayTask { 
	static Load(ResourceName: string): MockTask_Log;
	static Find(Outer: UObject, ResourceName: string): MockTask_Log;
	static GetDefaultObject(): MockTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockTask_Log;
	static C(Other: UObject | any): MockTask_Log;
}

declare class MockGameplayTasksComponent extends GameplayTasksComponent { 
	static Load(ResourceName: string): MockGameplayTasksComponent;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTasksComponent;
	static GetDefaultObject(): MockGameplayTasksComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTasksComponent;
	static C(Other: UObject | any): MockGameplayTasksComponent;
}

declare class MockGameplayTaskOwner extends UObject { 
	GTComponent: GameplayTasksComponent;
	static Load(ResourceName: string): MockGameplayTaskOwner;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTaskOwner;
	static GetDefaultObject(): MockGameplayTaskOwner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTaskOwner;
	static C(Other: UObject | any): MockGameplayTaskOwner;
}

declare type ELiveCodingStartupMode = 'Automatic' | 'AutomaticButHidden' | 'Manual' | 'ELiveCodingStartupMode_MAX';
declare var ELiveCodingStartupMode : { Automatic:'Automatic',AutomaticButHidden:'AutomaticButHidden',Manual:'Manual',ELiveCodingStartupMode_MAX:'ELiveCodingStartupMode_MAX', };
declare class LiveCodingSettings extends UObject { 
	bEnabled: boolean;
	Startup: ELiveCodingStartupMode;
	bEnableReinstancing: boolean;
	bAutomaticallyCompileNewClasses: boolean;
	bPreloadEngineModules: boolean;
	bPreloadEnginePluginModules: boolean;
	bPreloadProjectModules: boolean;
	bPreloadProjectPluginModules: boolean;
	PreloadNamedModules: string[];
	static Load(ResourceName: string): LiveCodingSettings;
	static Find(Outer: UObject, ResourceName: string): LiveCodingSettings;
	static GetDefaultObject(): LiveCodingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveCodingSettings;
	static C(Other: UObject | any): LiveCodingSettings;
}

declare class DocumentationBaseUrl { 
	ID: string;
	URL: string;
	clone() : DocumentationBaseUrl;
	static C(Other: UObject | any): DocumentationBaseUrl;
}

declare class DocumentationSettings extends DeveloperSettings { 
	DocumentationBaseUrls: DocumentationBaseUrl[];
	static Load(ResourceName: string): DocumentationSettings;
	static Find(Outer: UObject, ResourceName: string): DocumentationSettings;
	static GetDefaultObject(): DocumentationSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DocumentationSettings;
	static C(Other: UObject | any): DocumentationSettings;
}

declare type ELogTimes = 'None' | 'UTC' | 'SinceGStartTime' | 'Local' | 'ELogTimes_MAX';
declare var ELogTimes : { None:'None',UTC:'UTC',SinceGStartTime:'SinceGStartTime',Local:'Local',ELogTimes_MAX:'ELogTimes_MAX', };
declare type ELogCategoryColorizationMode = 'None' | 'ColorizeWholeLine' | 'ColorizeCategoryOnly' | 'ColorizeCategoryAsBadge' | 'ELogCategoryColorizationMode_MAX';
declare var ELogCategoryColorizationMode : { None:'None',ColorizeWholeLine:'ColorizeWholeLine',ColorizeCategoryOnly:'ColorizeCategoryOnly',ColorizeCategoryAsBadge:'ColorizeCategoryAsBadge',ELogCategoryColorizationMode_MAX:'ELogCategoryColorizationMode_MAX', };
declare class OutputLogSettings extends UObject { 
	LogFontSize: number;
	LogTimestampMode: ELogTimes;
	CategoryColorizationMode: ELogCategoryColorizationMode;
	bCycleToOutputLogDrawer: boolean;
	bEnableOutputLogWordWrap: boolean;
	bEnableOutputLogClearOnPIE: boolean;
	static Load(ResourceName: string): OutputLogSettings;
	static Find(Outer: UObject, ResourceName: string): OutputLogSettings;
	static GetDefaultObject(): OutputLogSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OutputLogSettings;
	static C(Other: UObject | any): OutputLogSettings;
}

declare class NaniteAuditErrorArguments extends EditorConfigBase { 
	ProhibitUnsupportedBlendMode: boolean;
	ProhibitVertexInterpolator: boolean;
	ProhibitPixelDepthOffset: boolean;
	ProhibitWorldPositionOffset: boolean;
	static Load(ResourceName: string): NaniteAuditErrorArguments;
	static Find(Outer: UObject, ResourceName: string): NaniteAuditErrorArguments;
	static GetDefaultObject(): NaniteAuditErrorArguments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NaniteAuditErrorArguments;
	static C(Other: UObject | any): NaniteAuditErrorArguments;
}

declare class NaniteAuditOptimizeArguments extends EditorConfigBase { 
	TriangleThreshold: number;
	DisallowUnsupportedBlendMode: boolean;
	DisallowVertexInterpolator: boolean;
	DisallowPixelDepthOffset: boolean;
	DisallowWorldPositionOffset: boolean;
	static Load(ResourceName: string): NaniteAuditOptimizeArguments;
	static Find(Outer: UObject, ResourceName: string): NaniteAuditOptimizeArguments;
	static GetDefaultObject(): NaniteAuditOptimizeArguments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NaniteAuditOptimizeArguments;
	static C(Other: UObject | any): NaniteAuditOptimizeArguments;
}

declare class StructViewerProjectSettings extends UObject { 
	InternalOnlyPaths: DirectoryPath[];
	InternalOnlyStructs: ScriptStruct[];
	static Load(ResourceName: string): StructViewerProjectSettings;
	static Find(Outer: UObject, ResourceName: string): StructViewerProjectSettings;
	static GetDefaultObject(): StructViewerProjectSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StructViewerProjectSettings;
	static C(Other: UObject | any): StructViewerProjectSettings;
}

declare class AnimationBlueprintEditorSettings extends UObject { 
	bPoseWatchSelectedNodes: boolean;
	bShowGraphCornerText: boolean;
	static Load(ResourceName: string): AnimationBlueprintEditorSettings;
	static Find(Outer: UObject, ResourceName: string): AnimationBlueprintEditorSettings;
	static GetDefaultObject(): AnimationBlueprintEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationBlueprintEditorSettings;
	static C(Other: UObject | any): AnimationBlueprintEditorSettings;
}

declare class AnimationBlueprintToolMenuContext extends UObject { 
	static Load(ResourceName: string): AnimationBlueprintToolMenuContext;
	static Find(Outer: UObject, ResourceName: string): AnimationBlueprintToolMenuContext;
	static GetDefaultObject(): AnimationBlueprintToolMenuContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationBlueprintToolMenuContext;
	static C(Other: UObject | any): AnimationBlueprintToolMenuContext;
}

declare class LocalizationDashboardSettings extends UObject { 
	static Load(ResourceName: string): LocalizationDashboardSettings;
	static Find(Outer: UObject, ResourceName: string): LocalizationDashboardSettings;
	static GetDefaultObject(): LocalizationDashboardSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationDashboardSettings;
	static C(Other: UObject | any): LocalizationDashboardSettings;
}

declare class MeshApproximationSettingsObject extends UObject { 
	Settings: MeshApproximationSettings;
	static Load(ResourceName: string): MeshApproximationSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshApproximationSettingsObject;
	static GetDefaultObject(): MeshApproximationSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshApproximationSettingsObject;
	static C(Other: UObject | any): MeshApproximationSettingsObject;
}

declare class MeshInstancingSettings { 
	ActorClassToUse: UnrealEngineClass;
	InstanceReplacementThreshold: number;
	bSkipMeshesWithVertexColors: boolean;
	bUseHLODVolumes: boolean;
	ISMComponentToUse: UnrealEngineClass;
	clone() : MeshInstancingSettings;
	static C(Other: UObject | any): MeshInstancingSettings;
}

declare class MeshInstancingSettingsObject extends UObject { 
	Settings: MeshInstancingSettings;
	static Load(ResourceName: string): MeshInstancingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshInstancingSettingsObject;
	static GetDefaultObject(): MeshInstancingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInstancingSettingsObject;
	static C(Other: UObject | any): MeshInstancingSettingsObject;
}

declare class MeshMergingSettingsObject extends UObject { 
	Settings: MeshMergingSettings;
	static Load(ResourceName: string): MeshMergingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshMergingSettingsObject;
	static GetDefaultObject(): MeshMergingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshMergingSettingsObject;
	static C(Other: UObject | any): MeshMergingSettingsObject;
}

declare class MeshProxySettingsObject extends UObject { 
	Settings: MeshProxySettings;
	static Load(ResourceName: string): MeshProxySettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshProxySettingsObject;
	static GetDefaultObject(): MeshProxySettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshProxySettingsObject;
	static C(Other: UObject | any): MeshProxySettingsObject;
}

declare class EditorKeyboardShortcutSettings extends DeveloperSettings { 
	static Load(ResourceName: string): EditorKeyboardShortcutSettings;
	static Find(Outer: UObject, ResourceName: string): EditorKeyboardShortcutSettings;
	static GetDefaultObject(): EditorKeyboardShortcutSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorKeyboardShortcutSettings;
	static C(Other: UObject | any): EditorKeyboardShortcutSettings;
}

declare class ContentBundleEditorSubsystemModule extends UObject { 
	static Load(ResourceName: string): ContentBundleEditorSubsystemModule;
	static Find(Outer: UObject, ResourceName: string): ContentBundleEditorSubsystemModule;
	static GetDefaultObject(): ContentBundleEditorSubsystemModule;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBundleEditorSubsystemModule;
	static C(Other: UObject | any): ContentBundleEditorSubsystemModule;
}

declare class ContentBundleEditionSubmodule extends ContentBundleEditorSubsystemModule { 
	static Load(ResourceName: string): ContentBundleEditionSubmodule;
	static Find(Outer: UObject, ResourceName: string): ContentBundleEditionSubmodule;
	static GetDefaultObject(): ContentBundleEditionSubmodule;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBundleEditionSubmodule;
	static C(Other: UObject | any): ContentBundleEditionSubmodule;
}

declare class ContentBundleEditorSubsystem extends EditorSubsystem { 
	ContentBundleEditionSubmodule: ContentBundleEditionSubmodule;
	static Load(ResourceName: string): ContentBundleEditorSubsystem;
	static Find(Outer: UObject, ResourceName: string): ContentBundleEditorSubsystem;
	static GetDefaultObject(): ContentBundleEditorSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBundleEditorSubsystem;
	static C(Other: UObject | any): ContentBundleEditorSubsystem;
}

declare class HLODLayerFactory extends Factory { 
	static Load(ResourceName: string): HLODLayerFactory;
	static Find(Outer: UObject, ResourceName: string): HLODLayerFactory;
	static GetDefaultObject(): HLODLayerFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODLayerFactory;
	static C(Other: UObject | any): HLODLayerFactory;
}

declare class WorldPartitionConvertOptions extends UObject { 
	CommandletClass: UnrealEngineClass;
	bInPlace: boolean;
	bDeleteSourceLevels: boolean;
	bGenerateIni: boolean;
	bReportOnly: boolean;
	bVerbose: boolean;
	bSkipStableGUIDValidation: boolean;
	bOnlyMergeSubLevels: boolean;
	bSaveFoliageTypeToContentFolder: boolean;
	static Load(ResourceName: string): WorldPartitionConvertOptions;
	static Find(Outer: UObject, ResourceName: string): WorldPartitionConvertOptions;
	static GetDefaultObject(): WorldPartitionConvertOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WorldPartitionConvertOptions;
	static C(Other: UObject | any): WorldPartitionConvertOptions;
}

declare class WorldPartitionEditorSettings extends DeveloperSettings { 
	CommandletClass: UnrealEngineClass;
	InstancedFoliageGridSize: number;
	MinimapLowQualityWorldUnitsPerPixelThreshold: number;
	static Load(ResourceName: string): WorldPartitionEditorSettings;
	static Find(Outer: UObject, ResourceName: string): WorldPartitionEditorSettings;
	static GetDefaultObject(): WorldPartitionEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WorldPartitionEditorSettings;
	static C(Other: UObject | any): WorldPartitionEditorSettings;
}

declare type ESVGTheme = 'Dark' | 'Light' | 'ESVGTheme_MAX';
declare var ESVGTheme : { Dark:'Dark',Light:'Light',ESVGTheme_MAX:'ESVGTheme_MAX', };
declare class CSVtoSVGArugments extends EditorConfigBase { 
	CSV: FilePath;
	OutputDirectory: DirectoryPath;
	OutputFilename: string;
	skipRows: number;
	MinX: number;
	MaxX: number;
	MinY: number;
	MaxY: number;
	smooth: boolean;
	smoothKernelSize: number;
	smoothKernelPercent: number;
	Width: number;
	Height: number;
	Title: string;
	noMetadata: boolean;
	graphOnly: boolean;
	budget: number;
	Thickness: number;
	theme: ESVGTheme;
	Threshold: number;
	stacked: boolean;
	stacktotalstack: string;
	Interactive: boolean;
	showaverages: boolean;
	colourOffset: number;
	averageThreshold: number;
	static Load(ResourceName: string): CSVtoSVGArugments;
	static Find(Outer: UObject, ResourceName: string): CSVtoSVGArugments;
	static GetDefaultObject(): CSVtoSVGArugments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CSVtoSVGArugments;
	static C(Other: UObject | any): CSVtoSVGArugments;
}

declare class PrecachePayloadsCommandlet extends Commandlet { 
	static Load(ResourceName: string): PrecachePayloadsCommandlet;
	static Find(Outer: UObject, ResourceName: string): PrecachePayloadsCommandlet;
	static GetDefaultObject(): PrecachePayloadsCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PrecachePayloadsCommandlet;
	static C(Other: UObject | any): PrecachePayloadsCommandlet;
}

declare type EAndroidInstallLocation = 'InternalOnly' | 'PreferExternal' | 'Auto' | 'EAndroidInstallLocation_MAX';
declare var EAndroidInstallLocation : { InternalOnly:'InternalOnly',PreferExternal:'PreferExternal',Auto:'Auto',EAndroidInstallLocation_MAX:'EAndroidInstallLocation_MAX', };
declare type EAndroidScreenOrientation = 'Portrait' | 'ReversePortrait' | 'SensorPortrait' | 'Landscape' | 'ReverseLandscape' | 'SensorLandscape' | 'Sensor' | 'FullSensor' | 'EAndroidScreenOrientation_MAX';
declare var EAndroidScreenOrientation : { Portrait:'Portrait',ReversePortrait:'ReversePortrait',SensorPortrait:'SensorPortrait',Landscape:'Landscape',ReverseLandscape:'ReverseLandscape',SensorLandscape:'SensorLandscape',Sensor:'Sensor',FullSensor:'FullSensor',EAndroidScreenOrientation_MAX:'EAndroidScreenOrientation_MAX', };
declare type EAndroidDepthBufferPreference = 'Default' | 'Bits16' | 'Bits24' | 'Bits32' | 'EAndroidDepthBufferPreference_MAX';
declare var EAndroidDepthBufferPreference : { Default:'Default',Bits16:'Bits16',Bits24:'Bits24',Bits32:'Bits32',EAndroidDepthBufferPreference_MAX:'EAndroidDepthBufferPreference_MAX', };
declare type EOculusMobileDevice = 'Quest' | 'Quest2' | 'EOculusMobileDevice_MAX';
declare var EOculusMobileDevice : { Quest:'Quest',Quest2:'Quest2',EOculusMobileDevice_MAX:'EOculusMobileDevice_MAX', };
declare class GooglePlayAchievementMapping { 
	Name: string;
	AchievementID: string;
	clone() : GooglePlayAchievementMapping;
	static C(Other: UObject | any): GooglePlayAchievementMapping;
}

declare class GooglePlayLeaderboardMapping { 
	Name: string;
	LeaderboardID: string;
	clone() : GooglePlayLeaderboardMapping;
	static C(Other: UObject | any): GooglePlayLeaderboardMapping;
}

declare type EAndroidAudio = 'Default' | 'OGG' | 'ADPCM' | 'EAndroidAudio_MAX';
declare var EAndroidAudio : { Default:'Default',OGG:'OGG',ADPCM:'ADPCM',EAndroidAudio_MAX:'EAndroidAudio_MAX', };
declare type EAndroidGraphicsDebugger = 'None' | 'Mali' | 'Adreno' | 'EAndroidGraphicsDebugger_MAX';
declare var EAndroidGraphicsDebugger : { None:'None',Mali:'Mali',Adreno:'Adreno',EAndroidGraphicsDebugger_MAX:'EAndroidGraphicsDebugger_MAX', };
declare class AndroidRuntimeSettings extends UObject { 
	PackageName: string;
	StoreVersion: number;
	StoreVersionOffsetArm64: number;
	StoreVersionOffsetX8664: number;
	ApplicationDisplayName: string;
	VersionDisplayName: string;
	MinSDKVersion: number;
	TargetSDKVersion: number;
	InstallLocation: EAndroidInstallLocation;
	bEnableLint: boolean;
	bPackageDataInsideApk: boolean;
	bCreateAllPlatformsInstall: boolean;
	bDisableVerifyOBBOnStartUp: boolean;
	bForceSmallOBBFiles: boolean;
	bAllowLargeOBBFiles: boolean;
	bAllowPatchOBBFile: boolean;
	bAllowOverflowOBBFiles: boolean;
	bUseExternalFilesDir: boolean;
	bPublicLogFiles: boolean;
	Orientation: EAndroidScreenOrientation;
	MaxAspectRatio: number;
	bUseDisplayCutout: boolean;
	bRestoreNotificationsOnReboot: boolean;
	bFullScreen: boolean;
	bEnableNewKeyboard: boolean;
	DepthBufferPreference: EAndroidDepthBufferPreference;
	bValidateTextureFormats: boolean;
	bForceCompressNativeLibs: boolean;
	bEnableAdvancedBinaryCompression: boolean;
	bEnableBundle: boolean;
	bEnableUniversalAPK: boolean;
	bBundleABISplit: boolean;
	bBundleLanguageSplit: boolean;
	bBundleDensitySplit: boolean;
	ExtraManifestNodeTags: string[];
	ExtraApplicationNodeTags: string[];
	ExtraApplicationSettings: string;
	ExtraActivityNodeTags: string[];
	ExtraActivitySettings: string;
	ExtraPermissions: string[];
	bAndroidVoiceEnabled: boolean;
	PackageForOculusMobile: EOculusMobileDevice[];
	bRemoveOSIG: boolean;
	KeyStore: string;
	KeyAlias: string;
	KeyStorePassword: string;
	KeyPassword: string;
	bBuildForArm64: boolean;
	bBuildForX8664: boolean;
	bBuildForES31: boolean;
	bSupportsVulkan: boolean;
	bSupportsVulkanSM5: boolean;
	DebugVulkanLayerDirectory: DirectoryPath;
	DebugVulkanDeviceLayers: string[];
	DebugVulkanInstanceLayers: string[];
	bAndroidOpenGLSupportsBackbufferSampling: boolean;
	bDetectVulkanByDefault: boolean;
	bBuildWithHiddenSymbolVisibility: boolean;
	bDisableStackProtector: boolean;
	bDisableLibCppSharedDependencyValidation: boolean;
	bSaveSymbols: boolean;
	bStripShaderReflection: boolean;
	bEnableGooglePlaySupport: boolean;
	bUseGetAccounts: boolean;
	GamesAppID: string;
	AchievementMap: GooglePlayAchievementMapping[];
	LeaderboardMap: GooglePlayLeaderboardMapping[];
	bEnableSnapshots: boolean;
	bSupportAdMob: boolean;
	AdMobAdUnitID: string;
	AdMobAdUnitIDs: string[];
	GooglePlayLicenseKey: string;
	GCMClientSenderID: string;
	bShowLaunchImage: boolean;
	bAllowIMU: boolean;
	bAllowControllers: boolean;
	bBlockAndroidKeysOnControllers: boolean;
	bControllersBlockDeviceFeedback: boolean;
	AndroidAudio: EAndroidAudio;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	SourceDataOverridePlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	CacheSizeKB: number;
	MaxChunkSizeOverrideKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	AndroidGraphicsDebugger: EAndroidGraphicsDebugger;
	MaliGraphicsDebuggerPath: DirectoryPath;
	bEnableMaliPerfCounters: boolean;
	bMultiTargetFormat_ETC2: boolean;
	bMultiTargetFormat_DXT: boolean;
	bMultiTargetFormat_ASTC: boolean;
	TextureFormatPriority_ETC2: number;
	TextureFormatPriority_DXT: number;
	TextureFormatPriority_ASTC: number;
	SDKAPILevelOverride: string;
	NDKAPILevelOverride: string;
	BuildToolsOverride: string;
	bStreamLandscapeMeshLODs: boolean;
	bEnableDomStorage: boolean;
	static Load(ResourceName: string): AndroidRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidRuntimeSettings;
	static GetDefaultObject(): AndroidRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidRuntimeSettings;
	static C(Other: UObject | any): AndroidRuntimeSettings;
}

declare type EIOSCloudKitSyncStrategy = 'None' | 'OnlyAtGameStart' | 'Always' | 'EIOSCloudKitSyncStrategy_MAX';
declare var EIOSCloudKitSyncStrategy : { None:'None',OnlyAtGameStart:'OnlyAtGameStart',Always:'Always',EIOSCloudKitSyncStrategy_MAX:'EIOSCloudKitSyncStrategy_MAX', };
declare class IOSBuildResourceDirectory { 
	Path: string;
	clone() : IOSBuildResourceDirectory;
	static C(Other: UObject | any): IOSBuildResourceDirectory;
}

declare class IOSBuildResourceFilePath { 
	FilePath: string;
	clone() : IOSBuildResourceFilePath;
	static C(Other: UObject | any): IOSBuildResourceFilePath;
}

declare type EIOSLandscapeOrientation = 'LandscapeLeft' | 'LandscapeRight' | 'EIOSLandscapeOrientation_MAX';
declare var EIOSLandscapeOrientation : { LandscapeLeft:'LandscapeLeft',LandscapeRight:'LandscapeRight',EIOSLandscapeOrientation_MAX:'EIOSLandscapeOrientation_MAX', };
declare type EPowerUsageFrameRateLock = 'PUFRL_None' | 'PUFRL_20' | 'PUFRL_30' | 'PUFRL_60' | 'PUFRL_MAX';
declare var EPowerUsageFrameRateLock : { PUFRL_None:'PUFRL_None',PUFRL_20:'PUFRL_20',PUFRL_30:'PUFRL_30',PUFRL_60:'PUFRL_60',PUFRL_MAX:'PUFRL_MAX', };
declare type EIOSVersion = 'IOS_15' | 'IOS_16' | 'IOS_MAX';
declare var EIOSVersion : { IOS_15:'IOS_15',IOS_16:'IOS_16',IOS_MAX:'IOS_MAX', };
declare class IOSRuntimeSettings extends UObject { 
	bEnableGameCenterSupport: boolean;
	bEnableCloudKitSupport: boolean;
	IOSCloudKitSyncStrategy: EIOSCloudKitSyncStrategy;
	bEnableRemoteNotificationsSupport: boolean;
	bEnableBackgroundFetch: boolean;
	bSupportsMetal: boolean;
	bSupportsMetalMRT: boolean;
	bBuildAsFramework: boolean;
	WindowsMetalToolchainOverride: IOSBuildResourceDirectory;
	bGeneratedSYMFile: boolean;
	bGeneratedSYMBundle: boolean;
	bGenerateCrashReportSymbols: boolean;
	bGenerateXCArchive: boolean;
	bShipForBitcode: boolean;
	bEnableAdvertisingIdentifier: boolean;
	AdditionalLinkerFlags: string;
	AdditionalShippingLinkerFlags: string;
	RemoteServerName: string;
	bUseRSync: boolean;
	RSyncUsername: string;
	RemoteServerOverrideBuildPath: string;
	CwRsyncInstallPath: IOSBuildResourceDirectory;
	SSHPrivateKeyLocation: string;
	SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
	bRunAsCurrentUser: boolean;
	bGameSupportsMultipleActiveControllers: boolean;
	bAllowRemoteRotation: boolean;
	bAllowControllers: boolean;
	bControllersBlockDeviceFeedback: boolean;
	bDisableMotionData: boolean;
	bSupportsPortraitOrientation: boolean;
	bSupportsUpsideDownOrientation: boolean;
	bSupportsLandscapeLeftOrientation: boolean;
	bSupportsLandscapeRightOrientation: boolean;
	bSupportsITunesFileSharing: boolean;
	bSupportsFilesApp: boolean;
	PreferredLandscapeOrientation: EIOSLandscapeOrientation;
	BundleDisplayName: string;
	BundleName: string;
	BundleIdentifier: string;
	VersionInfo: string;
	FrameRateLock: EPowerUsageFrameRateLock;
	bEnableDynamicMaxFPS: boolean;
	MinimumiOSVersion: EIOSVersion;
	bSupportsIPad: boolean;
	bSupportsIPhone: boolean;
	AdditionalPlistData: string;
	bCustomLaunchscreenStoryboard: boolean;
	bEnableFacebookSupport: boolean;
	FacebookAppID: string;
	MobileProvision: string;
	SigningCertificate: string;
	bAutomaticSigning: boolean;
	IOSTeamID: string;
	DevCenterUsername: string;
	DevCenterPassword: string;
	bDisableHTTPS: boolean;
	MetalLanguageVersion: number;
	UseFastIntrinsics: boolean;
	ForceFloats: boolean;
	EnableMathOptimisations: boolean;
	IndirectArgumentTier: number;
	bSupportAppleA8: boolean;
	bUseIntegratedKeyboard: boolean;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	SourceDataOverridePlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	CacheSizeKB: number;
	MaxChunkSizeOverrideKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	bStreamLandscapeMeshLODs: boolean;
	static Load(ResourceName: string): IOSRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): IOSRuntimeSettings;
	static GetDefaultObject(): IOSRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IOSRuntimeSettings;
	static C(Other: UObject | any): IOSRuntimeSettings;
}

declare class HoloLensCorePackageStringResources { 
	PackageDisplayName: string;
	PublisherDisplayName: string;
	PackageDescription: string;
	ApplicationDisplayName: string;
	ApplicationDescription: string;
	clone() : HoloLensCorePackageStringResources;
	static C(Other: UObject | any): HoloLensCorePackageStringResources;
}

declare class HoloLensCorePackageImageResources { 
	clone() : HoloLensCorePackageImageResources;
	static C(Other: UObject | any): HoloLensCorePackageImageResources;
}

declare class HoloLensCorePackageLocalizedResources { 
	CultureId: string;
	Strings: HoloLensCorePackageStringResources;
	Images: HoloLensCorePackageImageResources;
	clone() : HoloLensCorePackageLocalizedResources;
	static C(Other: UObject | any): HoloLensCorePackageLocalizedResources;
}

declare class HoloLensTargetSettings extends UObject { 
	bBuildForEmulation: boolean;
	bBuildForDevice: boolean;
	bUseNameForLogo: boolean;
	bBuildForRetailWindowsStore: boolean;
	bAutoIncrementVersion: boolean;
	bShouldCreateAppInstaller: boolean;
	AppInstallerInstallationURL: string;
	HoursBetweenUpdateChecks: number;
	bEnablePIXProfiling: boolean;
	TileBackgroundColor: Color;
	SplashScreenBackgroundColor: Color;
	PerCultureResources: HoloLensCorePackageLocalizedResources[];
	TargetDeviceFamily: string;
	MinimumPlatformVersion: string;
	MaximumPlatformVersionTested: string;
	MaxTrianglesPerCubicMeter: number;
	SpatialMeshingVolumeSize: number;
	CompilerVersion: ECompilerVersion;
	Windows10SDKVersion: string;
	CapabilityList: string[];
	DeviceCapabilityList: string[];
	UapCapabilityList: string[];
	Uap2CapabilityList: string[];
	bSetDefaultCapabilities: boolean;
	SpatializationPlugin: string;
	SourceDataOverridePlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	SoundCueCookQualityIndex: number;
	static Load(ResourceName: string): HoloLensTargetSettings;
	static Find(Outer: UObject, ResourceName: string): HoloLensTargetSettings;
	static GetDefaultObject(): HoloLensTargetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoloLensTargetSettings;
	static C(Other: UObject | any): HoloLensTargetSettings;
}

declare class AndroidSDKSettings extends UObject { 
	SDKPath: DirectoryPath;
	NDKPath: DirectoryPath;
	JavaPath: DirectoryPath;
	SDKAPILevel: string;
	NDKAPILevel: string;
	static Load(ResourceName: string): AndroidSDKSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidSDKSettings;
	static GetDefaultObject(): AndroidSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject | any): AndroidSDKSettings;
}

declare class VisualLoggerRenderingComponent extends DebugDrawComponent { 
	static Load(ResourceName: string): VisualLoggerRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerRenderingComponent;
	static GetDefaultObject(): VisualLoggerRenderingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingComponent;
	static C(Other: UObject | any): VisualLoggerRenderingComponent;
}

declare class LogVisualizerSessionSettings extends UObject { 
	bEnableGraphsVisualization: boolean;
	static Load(ResourceName: string): LogVisualizerSessionSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSessionSettings;
	static GetDefaultObject(): LogVisualizerSessionSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSessionSettings;
	static C(Other: UObject | any): LogVisualizerSessionSettings;
}

declare class CategoryFilter { 
	CategoryName: string;
	LogVerbosity: number;
	Enabled: boolean;
	clone() : CategoryFilter;
	static C(Other: UObject | any): CategoryFilter;
}

declare class VisualLoggerFiltersData { 
	SearchBoxFilter: string;
	ObjectNameFilter: string;
	Categories: CategoryFilter[];
	SelectedClasses: string[];
	clone() : VisualLoggerFiltersData;
	static C(Other: UObject | any): VisualLoggerFiltersData;
}

declare class LogVisualizerSettings extends UObject { 
	bIgnoreTrivialLogs: boolean;
	TrivialLogsThreshold: number;
	bStickToRecentData: boolean;
	bResetDataWithNewSession: boolean;
	bShowHistogramLabelsOutside: boolean;
	DefaultCameraDistance: number;
	bSearchInsideLogs: boolean;
	bUseFilterVolumes: boolean;
	GraphsBackgroundColor: Color;
	bPersistentFilters: boolean;
	bDrawExtremesOnGraphs: boolean;
	bConstrainGraphToLocalMinMax: boolean;
	bUsePlayersOnlyForPause: boolean;
	bLogNavOctreeOnStop: boolean;
	bForceUniqueLogNames: boolean;
	PersistentFilters: VisualLoggerFiltersData;
	DebugMeshMaterialFakeLight: Material;
	DebugMeshMaterialFakeLightName: string;
	static Load(ResourceName: string): LogVisualizerSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSettings;
	static GetDefaultObject(): LogVisualizerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSettings;
	static C(Other: UObject | any): LogVisualizerSettings;
}

declare class VisualLoggerCameraController extends DebugCameraController { 
	PickedActor: Actor;
	static GetDefaultObject(): VisualLoggerCameraController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerCameraController;
	static C(Other: UObject | any): VisualLoggerCameraController;
}

declare class VisualLoggerHUD extends DebugCameraHUD { 
	static GetDefaultObject(): VisualLoggerHUD;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerHUD;
	static C(Other: UObject | any): VisualLoggerHUD;
}

declare class VisualLoggerRenderingActorBase extends Actor { 
	static GetDefaultObject(): VisualLoggerRenderingActorBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActorBase;
	static C(Other: UObject | any): VisualLoggerRenderingActorBase;
}

declare class VisualLoggerRenderingActor extends VisualLoggerRenderingActorBase { 
	static GetDefaultObject(): VisualLoggerRenderingActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActor;
	static C(Other: UObject | any): VisualLoggerRenderingActor;
}

declare class ClothingAssetExporter extends UObject { 
	static Load(ResourceName: string): ClothingAssetExporter;
	static Find(Outer: UObject, ResourceName: string): ClothingAssetExporter;
	static GetDefaultObject(): ClothingAssetExporter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothingAssetExporter;
	static C(Other: UObject | any): ClothingAssetExporter;
}

declare class ClothPainterSettings extends MeshPaintSettings { 
	ViewMin: number;
	ViewMax: number;
	bAutoViewRange: boolean;
	AutoCalculatedViewMin: number;
	AutoCalculatedViewMax: number;
	ClothingAssets: ClothingAssetCommon[];
	bFlipNormal: boolean;
	bCullBackface: boolean;
	Opacity: number;
	static Load(ResourceName: string): ClothPainterSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPainterSettings;
	static GetDefaultObject(): ClothPainterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPainterSettings;
	static C(Other: UObject | any): ClothPainterSettings;
}

declare class ClothPaintTool_BrushSettings extends UObject { 
	PaintValue: number;
	static Load(ResourceName: string): ClothPaintTool_BrushSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_BrushSettings;
	static GetDefaultObject(): ClothPaintTool_BrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_BrushSettings;
	static C(Other: UObject | any): ClothPaintTool_BrushSettings;
}

declare class ClothPaintTool_GradientSettings extends UObject { 
	GradientStartValue: number;
	GradientEndValue: number;
	bUseRegularBrush: boolean;
	static Load(ResourceName: string): ClothPaintTool_GradientSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_GradientSettings;
	static GetDefaultObject(): ClothPaintTool_GradientSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_GradientSettings;
	static C(Other: UObject | any): ClothPaintTool_GradientSettings;
}

declare class ClothPaintTool_SmoothSettings extends UObject { 
	Strength: number;
	static Load(ResourceName: string): ClothPaintTool_SmoothSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_SmoothSettings;
	static GetDefaultObject(): ClothPaintTool_SmoothSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_SmoothSettings;
	static C(Other: UObject | any): ClothPaintTool_SmoothSettings;
}

declare class ClothPaintTool_FillSettings extends UObject { 
	Threshold: number;
	FillValue: number;
	static Load(ResourceName: string): ClothPaintTool_FillSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_FillSettings;
	static GetDefaultObject(): ClothPaintTool_FillSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_FillSettings;
	static C(Other: UObject | any): ClothPaintTool_FillSettings;
}

declare class ActorFactoryLandscape extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryLandscape;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryLandscape;
	static GetDefaultObject(): ActorFactoryLandscape;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryLandscape;
	static C(Other: UObject | any): ActorFactoryLandscape;
}

declare type ELandscapeToolFlattenMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'Interval' | 'Terrace' | 'ELandscapeToolFlattenMode_MAX';
declare var ELandscapeToolFlattenMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',Interval:'Interval',Terrace:'Terrace',ELandscapeToolFlattenMode_MAX:'ELandscapeToolFlattenMode_MAX', };
declare type ELandscapeToolErosionMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'ELandscapeToolErosionMode_MAX';
declare var ELandscapeToolErosionMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',ELandscapeToolErosionMode_MAX:'ELandscapeToolErosionMode_MAX', };
declare type ELandscapeToolHydroErosionMode = 'Invalid' | 'Both' | 'Positive' | 'ELandscapeToolHydroErosionMode_MAX';
declare var ELandscapeToolHydroErosionMode : { Invalid:'Invalid',Both:'Both',Positive:'Positive',ELandscapeToolHydroErosionMode_MAX:'ELandscapeToolHydroErosionMode_MAX', };
declare type ELandscapeToolNoiseMode = 'Invalid' | 'Both' | 'Add' | 'Sub' | 'ELandscapeToolNoiseMode_MAX';
declare var ELandscapeToolNoiseMode : { Invalid:'Invalid',Both:'Both',Add:'Add',Sub:'Sub',ELandscapeToolNoiseMode_MAX:'ELandscapeToolNoiseMode_MAX', };
declare type ELandscapeToolPasteMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'ELandscapeToolPasteMode_MAX';
declare var ELandscapeToolPasteMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',ELandscapeToolPasteMode_MAX:'ELandscapeToolPasteMode_MAX', };
declare class GizmoImportLayer { 
	LayerFilename: string;
	LayerName: string;
	bNoImport: boolean;
	clone() : GizmoImportLayer;
	static C(Other: UObject | any): GizmoImportLayer;
}

declare type ELandscapeMirrorOperation = 'MinusXToPlusX' | 'PlusXToMinusX' | 'MinusYToPlusY' | 'PlusYToMinusY' | 'RotateMinusXToPlusX' | 'RotatePlusXToMinusX' | 'RotateMinusYToPlusY' | 'RotatePlusYToMinusY' | 'ELandscapeMirrorOperation_MAX';
declare var ELandscapeMirrorOperation : { MinusXToPlusX:'MinusXToPlusX',PlusXToMinusX:'PlusXToMinusX',MinusYToPlusY:'MinusYToPlusY',PlusYToMinusY:'PlusYToMinusY',RotateMinusXToPlusX:'RotateMinusXToPlusX',RotatePlusXToMinusX:'RotatePlusXToMinusX',RotateMinusYToPlusY:'RotateMinusYToPlusY',RotatePlusYToMinusY:'RotatePlusYToMinusY',ELandscapeMirrorOperation_MAX:'ELandscapeMirrorOperation_MAX', };
declare type ELandscapeConvertMode = 'Invalid' | 'Expand' | 'Clip' | 'Resample' | 'ELandscapeConvertMode_MAX';
declare var ELandscapeConvertMode : { Invalid:'Invalid',Expand:'Expand',Clip:'Clip',Resample:'Resample',ELandscapeConvertMode_MAX:'ELandscapeConvertMode_MAX', };
declare type ELandscapeImportResult = 'Success' | 'Warning' | 'Error' | 'ELandscapeImportResult_MAX';
declare var ELandscapeImportResult : { Success:'Success',Warning:'Warning',Error:'Error',ELandscapeImportResult_MAX:'ELandscapeImportResult_MAX', };
declare type ELandscapeImportTransformType = 'None' | 'ExpandOffset' | 'ExpandCentered' | 'Resample' | 'ELandscapeImportTransformType_MAX';
declare var ELandscapeImportTransformType : { None:'None',ExpandOffset:'ExpandOffset',ExpandCentered:'ExpandCentered',Resample:'Resample',ELandscapeImportTransformType_MAX:'ELandscapeImportTransformType_MAX', };
declare class LandscapeImportResolution { 
	Width: number;
	Height: number;
	clone() : LandscapeImportResolution;
	static C(Other: UObject | any): LandscapeImportResolution;
}

declare class LandscapeFileResolution { 
	Width: number;
	Height: number;
	clone() : LandscapeFileResolution;
	static C(Other: UObject | any): LandscapeFileResolution;
}

declare class LandscapeImportFileDescriptor { 
	Coord: IntPoint;
	FilePath: string;
	clone() : LandscapeImportFileDescriptor;
	static C(Other: UObject | any): LandscapeImportFileDescriptor;
}

declare class LandscapeImportDescriptor { 
	ImportResolutions: LandscapeImportResolution[];
	FileResolutions: LandscapeFileResolution[];
	FileDescriptors: LandscapeImportFileDescriptor[];
	Scale: Vector;
	clone() : LandscapeImportDescriptor;
	static C(Other: UObject | any): LandscapeImportDescriptor;
}

declare type ELandscapeImportAlphamapType = 'Additive' | 'Layered' | 'ELandscapeImportAlphamapType_MAX';
declare var ELandscapeImportAlphamapType : { Additive:'Additive',Layered:'Layered',ELandscapeImportAlphamapType_MAX:'ELandscapeImportAlphamapType_MAX', };
declare class LandscapeImportLayerInfo { 
	LayerName: string;
	LayerInfo: LandscapeLayerInfoObject;
	SourceFilePath: string;
	clone() : LandscapeImportLayerInfo;
	static C(Other: UObject | any): LandscapeImportLayerInfo;
}

declare class LandscapeImportLayer extends LandscapeImportLayerInfo { 
	ThumbnailMIC: LandscapeMaterialInstanceConstant;
	ImportResult: ELandscapeImportResult;
	ErrorMessage: string;
	ExportFilePath: string;
	bSelected: boolean;
	clone() : LandscapeImportLayer;
	static C(Other: UObject | any): LandscapeImportLayer;
}

declare class LandscapePatternBrushWorldSpaceSettings { 
	Origin: Vector2D;
	Rotation: number;
	bCenterTextureOnOrigin: boolean;
	RepeatSize: number;
	clone() : LandscapePatternBrushWorldSpaceSettings;
	static C(Other: UObject | any): LandscapePatternBrushWorldSpaceSettings;
}

declare type EColorChannel = 'Red' | 'Green' | 'Blue' | 'Alpha' | 'EColorChannel_MAX';
declare var EColorChannel : { Red:'Red',Green:'Green',Blue:'Blue',Alpha:'Alpha',EColorChannel_MAX:'EColorChannel_MAX', };
declare class LandscapeEditorObject extends UObject { 
	ToolStrength: number;
	PaintToolStrength: number;
	bUseWeightTargetValue: boolean;
	WeightTargetValue: number;
	MaximumValueRadius: number;
	bCombinedLayersOperation: boolean;
	FlattenMode: ELandscapeToolFlattenMode;
	bUseSlopeFlatten: boolean;
	bPickValuePerApply: boolean;
	bUseFlattenTarget: boolean;
	FlattenTarget: number;
	bShowFlattenTargetPreview: boolean;
	TerraceInterval: number;
	TerraceSmooth: number;
	bFlattenEyeDropperModeActivated: boolean;
	FlattenEyeDropperModeDesiredTarget: number;
	RampWidth: number;
	RampSideFalloff: number;
	SmoothFilterKernelSize: number;
	bDetailSmooth: boolean;
	DetailScale: number;
	ErodeThresh: number;
	ErodeSurfaceThickness: number;
	ErodeIterationNum: number;
	ErosionNoiseMode: ELandscapeToolErosionMode;
	ErosionNoiseScale: number;
	RainAmount: number;
	SedimentCapacity: number;
	HErodeIterationNum: number;
	RainDistMode: ELandscapeToolHydroErosionMode;
	RainDistScale: number;
	bHErosionDetailSmooth: boolean;
	HErosionDetailScale: number;
	NoiseMode: ELandscapeToolNoiseMode;
	NoiseScale: number;
	bUseSelectedRegion: boolean;
	bUseNegativeMask: boolean;
	PasteMode: ELandscapeToolPasteMode;
	bApplyToAllTargets: boolean;
	bSnapGizmo: boolean;
	bSmoothGizmoBrush: boolean;
	GizmoHeightmapFilenameString: string;
	GizmoImportSize: IntPoint;
	GizmoImportLayers: GizmoImportLayer[];
	MirrorPoint: Vector2D;
	MirrorOp: ELandscapeMirrorOperation;
	MirrorSmoothingWidth: number;
	BlueprintBrush: UnrealEngineClass;
	ResizeLandscape_QuadsPerSection: number;
	ResizeLandscape_SectionsPerComponent: number;
	ResizeLandscape_ComponentCount: IntPoint;
	ResizeLandscape_ConvertMode: ELandscapeConvertMode;
	NewLandscape_Material: MaterialInterface;
	NewLandscape_QuadsPerSection: number;
	NewLandscape_SectionsPerComponent: number;
	NewLandscape_ComponentCount: IntPoint;
	NewLandscape_Location: Vector;
	NewLandscape_Rotation: Rotator;
	NewLandscape_Scale: Vector;
	ImportLandscape_HeightmapImportResult: ELandscapeImportResult;
	ImportLandscape_HeightmapErrorMessage: string;
	ImportLandscape_HeightmapFilename: string;
	ImportLandscape_Width: number;
	ImportLandscape_Height: number;
	HeightmapExportFilename: string;
	ImportLandscape_GizmoLocalPosition: IntPoint;
	ImportType: ELandscapeImportTransformType;
	bHeightmapSelected: boolean;
	bExportEditLayer: boolean;
	bExportSingleFile: boolean;
	HeightmapImportDescriptor: LandscapeImportDescriptor;
	HeightmapImportDescriptorIndex: number;
	ImportLandscape_Data: number[];
	bCanHaveLayersContent: boolean;
	bFlipYAxis: boolean;
	WorldPartitionGridSize: number;
	ImportLandscape_AlphamapType: ELandscapeImportAlphamapType;
	ImportLandscape_Layers: LandscapeImportLayer[];
	BrushRadius: number;
	PaintBrushRadius: number;
	BrushFalloff: number;
	PaintBrushFalloff: number;
	bUseClayBrush: boolean;
	AlphaBrushScale: number;
	bAlphaBrushAutoRotate: boolean;
	AlphaBrushRotation: number;
	AlphaBrushPanU: number;
	AlphaBrushPanV: number;
	bUseWorldSpacePatternBrush: boolean;
	WorldSpacePatternBrushSettings: LandscapePatternBrushWorldSpaceSettings;
	AlphaTexture: Texture2D;
	AlphaTextureChannel: EColorChannel;
	AlphaTextureSizeX: number;
	AlphaTextureSizeY: number;
	AlphaTextureData: number[];
	BrushComponentSize: number;
	PaintingRestriction: ELandscapeLayerPaintingRestriction;
	TargetDisplayOrder: ELandscapeLayerDisplayMode;
	ShowUnusedLayers: boolean;
	CurrentLayerIndex: number;
	static Load(ResourceName: string): LandscapeEditorObject;
	static Find(Outer: UObject, ResourceName: string): LandscapeEditorObject;
	static GetDefaultObject(): LandscapeEditorObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeEditorObject;
	static C(Other: UObject | any): LandscapeEditorObject;
}

declare class LandscapeLayerInfoObjectFactory extends Factory { 
	static Load(ResourceName: string): LandscapeLayerInfoObjectFactory;
	static Find(Outer: UObject, ResourceName: string): LandscapeLayerInfoObjectFactory;
	static GetDefaultObject(): LandscapeLayerInfoObjectFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeLayerInfoObjectFactory;
	static C(Other: UObject | any): LandscapeLayerInfoObjectFactory;
}

declare class LandscapePlaceholder extends Actor { 
	static GetDefaultObject(): LandscapePlaceholder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapePlaceholder;
	static C(Other: UObject | any): LandscapePlaceholder;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

