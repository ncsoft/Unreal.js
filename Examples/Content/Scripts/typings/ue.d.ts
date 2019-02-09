/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
declare class ParticleModuleSubUVMovie extends ParticleModuleSubUV { 
	bUseEmitterTime: boolean;
	FrameRate: RawDistributionFloat;
	StartingFrame: number;
	static Load(ResourceName: string): ParticleModuleSubUVMovie;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleSubUVMovie;
	static GetDefaultObject(): ParticleModuleSubUVMovie;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSubUVMovie;
	static C(Other: UObject | any): ParticleModuleSubUVMovie;
}

declare class ParticleModuleTrailBase extends ParticleModule { 
	static Load(ResourceName: string): ParticleModuleTrailBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTrailBase;
	static GetDefaultObject(): ParticleModuleTrailBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTrailBase;
	static C(Other: UObject | any): ParticleModuleTrailBase;
}

declare type ETrail2SourceMethod = 'PET2SRCM_Default' | 'PET2SRCM_Particle' | 'PET2SRCM_Actor' | 'PET2SRCM_MAX';
declare var ETrail2SourceMethod : { PET2SRCM_Default:'PET2SRCM_Default',PET2SRCM_Particle:'PET2SRCM_Particle',PET2SRCM_Actor:'PET2SRCM_Actor',PET2SRCM_MAX:'PET2SRCM_MAX', };
declare type EParticleSourceSelectionMethod = 'EPSSM_Random' | 'EPSSM_Sequential' | 'EPSSM_MAX';
declare var EParticleSourceSelectionMethod : { EPSSM_Random:'EPSSM_Random',EPSSM_Sequential:'EPSSM_Sequential',EPSSM_MAX:'EPSSM_MAX', };
declare class ParticleModuleTrailSource extends ParticleModuleTrailBase { 
	SourceMethod: ETrail2SourceMethod;
	SourceName: string;
	SourceStrength: RawDistributionFloat;
	bLockSourceStength: boolean;
	SourceOffsetCount: number;
	SourceOffsetDefaults: Vector[];
	SelectionMethod: EParticleSourceSelectionMethod;
	bInheritRotation: boolean;
	static Load(ResourceName: string): ParticleModuleTrailSource;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTrailSource;
	static GetDefaultObject(): ParticleModuleTrailSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTrailSource;
	static C(Other: UObject | any): ParticleModuleTrailSource;
}

declare class ParticleModuleTypeDataAnimTrail extends ParticleModuleTypeDataBase { 
	bDeadTrailsOnDeactivate: boolean;
	bEnablePreviousTangentRecalculation: boolean;
	bTangentRecalculationEveryFrame: boolean;
	TilingDistance: number;
	DistanceTessellationStepSize: number;
	TangentTessellationStepSize: number;
	WidthTessellationStepSize: number;
	static Load(ResourceName: string): ParticleModuleTypeDataAnimTrail;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataAnimTrail;
	static GetDefaultObject(): ParticleModuleTypeDataAnimTrail;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataAnimTrail;
	static C(Other: UObject | any): ParticleModuleTypeDataAnimTrail;
}

declare type EBeam2Method = 'PEB2M_Distance' | 'PEB2M_Target' | 'PEB2M_Branch' | 'PEB2M_MAX';
declare var EBeam2Method : { PEB2M_Distance:'PEB2M_Distance',PEB2M_Target:'PEB2M_Target',PEB2M_Branch:'PEB2M_Branch',PEB2M_MAX:'PEB2M_MAX', };
declare type EBeamTaperMethod = 'PEBTM_None' | 'PEBTM_Full' | 'PEBTM_Partial' | 'PEBTM_MAX';
declare var EBeamTaperMethod : { PEBTM_None:'PEBTM_None',PEBTM_Full:'PEBTM_Full',PEBTM_Partial:'PEBTM_Partial',PEBTM_MAX:'PEBTM_MAX', };
declare class ParticleModuleTypeDataBeam2 extends ParticleModuleTypeDataBase { 
	BeamMethod: EBeam2Method;
	TextureTile: number;
	TextureTileDistance: number;
	Sheets: number;
	MaxBeamCount: number;
	Speed: number;
	InterpolationPoints: number;
	bAlwaysOn: boolean;
	UpVectorStepSize: number;
	BranchParentName: string;
	Distance: RawDistributionFloat;
	TaperMethod: EBeamTaperMethod;
	TaperFactor: RawDistributionFloat;
	TaperScale: RawDistributionFloat;
	RenderGeometry: boolean;
	RenderDirectLine: boolean;
	RenderLines: boolean;
	RenderTessellation: boolean;
	static Load(ResourceName: string): ParticleModuleTypeDataBeam2;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataBeam2;
	static GetDefaultObject(): ParticleModuleTypeDataBeam2;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataBeam2;
	static C(Other: UObject | any): ParticleModuleTypeDataBeam2;
}

declare class VectorField extends UObject { 
	Bounds: Box;
	Intensity: number;
	static Load(ResourceName: string): VectorField;
	static Find(Outer: UObject, ResourceName: string): VectorField;
	static GetDefaultObject(): VectorField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorField;
	static C(Other: UObject | any): VectorField;
}

declare class GPUSpriteLocalVectorFieldInfo { 
	Field: VectorField;
	Transform: Transform;
	MinInitialRotation: Rotator;
	MaxInitialRotation: Rotator;
	RotationRate: Rotator;
	Intensity: number;
	Tightness: number;
	bIgnoreComponentTransform: boolean;
	bTileX: boolean;
	bTileY: boolean;
	bTileZ: boolean;
	bUseFixDT: boolean;
	clone() : GPUSpriteLocalVectorFieldInfo;
	static C(Other: UObject | any): GPUSpriteLocalVectorFieldInfo;
}

declare class FloatDistribution { 
	Table: DistributionLookupTable;
	clone() : FloatDistribution;
	static C(Other: UObject | any): FloatDistribution;
}

declare class GPUSpriteEmitterInfo { 
	RequiredModule: ParticleModuleRequired;
	SpawnModule: ParticleModuleSpawn;
	SpawnPerUnitModule: ParticleModuleSpawnPerUnit;
	SpawnModules: ParticleModule[];
	LocalVectorField: GPUSpriteLocalVectorFieldInfo;
	VectorFieldScale: FloatDistribution;
	DragCoefficient: FloatDistribution;
	PointAttractorStrength: FloatDistribution;
	Resilience: FloatDistribution;
	ConstantAcceleration: Vector;
	PointAttractorPosition: Vector;
	PointAttractorRadiusSq: number;
	OrbitOffsetBase: Vector;
	OrbitOffsetRange: Vector;
	InvMaxSize: Vector2D;
	InvRotationRateScale: number;
	MaxLifetime: number;
	MaxParticleCount: number;
	ScreenAlignment: EParticleScreenAlignment;
	LockAxisFlag: EParticleAxisLock;
	bEnableCollision: boolean;
	CollisionMode: EParticleCollisionMode;
	bRemoveHMDRoll: boolean;
	MinFacingCameraBlendDistance: number;
	MaxFacingCameraBlendDistance: number;
	DynamicColor: RawDistributionVector;
	DynamicAlpha: RawDistributionFloat;
	DynamicColorScale: RawDistributionVector;
	DynamicAlphaScale: RawDistributionFloat;
	clone() : GPUSpriteEmitterInfo;
	static C(Other: UObject | any): GPUSpriteEmitterInfo;
}

declare class GPUSpriteResourceData { 
	QuantizedColorSamples: Color[];
	QuantizedMiscSamples: Color[];
	QuantizedSimulationAttrSamples: Color[];
	ColorScale: Vector4;
	ColorBias: Vector4;
	MiscScale: Vector4;
	MiscBias: Vector4;
	SimulationAttrCurveScale: Vector4;
	SimulationAttrCurveBias: Vector4;
	SubImageSize: Vector4;
	SizeBySpeed: Vector4;
	ConstantAcceleration: Vector;
	OrbitOffsetBase: Vector;
	OrbitOffsetRange: Vector;
	OrbitFrequencyBase: Vector;
	OrbitFrequencyRange: Vector;
	OrbitPhaseBase: Vector;
	OrbitPhaseRange: Vector;
	GlobalVectorFieldScale: number;
	GlobalVectorFieldTightness: number;
	PerParticleVectorFieldScale: number;
	PerParticleVectorFieldBias: number;
	DragCoefficientScale: number;
	DragCoefficientBias: number;
	ResilienceScale: number;
	ResilienceBias: number;
	CollisionRadiusScale: number;
	CollisionRadiusBias: number;
	CollisionTimeBias: number;
	CollisionRandomSpread: number;
	CollisionRandomDistribution: number;
	OneMinusFriction: number;
	RotationRateScale: number;
	CameraMotionBlurAmount: number;
	ScreenAlignment: EParticleScreenAlignment;
	LockAxisFlag: EParticleAxisLock;
	PivotOffset: Vector2D;
	bRemoveHMDRoll: boolean;
	MinFacingCameraBlendDistance: number;
	MaxFacingCameraBlendDistance: number;
	clone() : GPUSpriteResourceData;
	static C(Other: UObject | any): GPUSpriteResourceData;
}

declare class ParticleModuleTypeDataGpu extends ParticleModuleTypeDataBase { 
	EmitterInfo: GPUSpriteEmitterInfo;
	ResourceData: GPUSpriteResourceData;
	CameraMotionBlurAmount: number;
	bClearExistingParticlesOnInit: boolean;
	static Load(ResourceName: string): ParticleModuleTypeDataGpu;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataGpu;
	static GetDefaultObject(): ParticleModuleTypeDataGpu;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataGpu;
	static C(Other: UObject | any): ParticleModuleTypeDataGpu;
}

declare type EMeshScreenAlignment = 'PSMA_MeshFaceCameraWithRoll' | 'PSMA_MeshFaceCameraWithSpin' | 'PSMA_MeshFaceCameraWithLockedAxis' | 'PSMA_MAX';
declare var EMeshScreenAlignment : { PSMA_MeshFaceCameraWithRoll:'PSMA_MeshFaceCameraWithRoll',PSMA_MeshFaceCameraWithSpin:'PSMA_MeshFaceCameraWithSpin',PSMA_MeshFaceCameraWithLockedAxis:'PSMA_MeshFaceCameraWithLockedAxis',PSMA_MAX:'PSMA_MAX', };
declare type EMeshCameraFacingUpAxis = 'CameraFacing_NoneUP' | 'CameraFacing_ZUp' | 'CameraFacing_NegativeZUp' | 'CameraFacing_YUp' | 'CameraFacing_NegativeYUp' | 'CameraFacing_MAX';
declare var EMeshCameraFacingUpAxis : { CameraFacing_NoneUP:'CameraFacing_NoneUP',CameraFacing_ZUp:'CameraFacing_ZUp',CameraFacing_NegativeZUp:'CameraFacing_NegativeZUp',CameraFacing_YUp:'CameraFacing_YUp',CameraFacing_NegativeYUp:'CameraFacing_NegativeYUp',CameraFacing_MAX:'CameraFacing_MAX', };
declare type EMeshCameraFacingOptions = 'XAxisFacing_NoUp' | 'XAxisFacing_ZUp' | 'XAxisFacing_NegativeZUp' | 'XAxisFacing_YUp' | 'XAxisFacing_NegativeYUp' | 'LockedAxis_ZAxisFacing' | 'LockedAxis_NegativeZAxisFacing' | 'LockedAxis_YAxisFacing' | 'LockedAxis_NegativeYAxisFacing' | 'VelocityAligned_ZAxisFacing' | 'VelocityAligned_NegativeZAxisFacing' | 'VelocityAligned_YAxisFacing' | 'VelocityAligned_NegativeYAxisFacing' | 'EMeshCameraFacingOptions_MAX';
declare var EMeshCameraFacingOptions : { XAxisFacing_NoUp:'XAxisFacing_NoUp',XAxisFacing_ZUp:'XAxisFacing_ZUp',XAxisFacing_NegativeZUp:'XAxisFacing_NegativeZUp',XAxisFacing_YUp:'XAxisFacing_YUp',XAxisFacing_NegativeYUp:'XAxisFacing_NegativeYUp',LockedAxis_ZAxisFacing:'LockedAxis_ZAxisFacing',LockedAxis_NegativeZAxisFacing:'LockedAxis_NegativeZAxisFacing',LockedAxis_YAxisFacing:'LockedAxis_YAxisFacing',LockedAxis_NegativeYAxisFacing:'LockedAxis_NegativeYAxisFacing',VelocityAligned_ZAxisFacing:'VelocityAligned_ZAxisFacing',VelocityAligned_NegativeZAxisFacing:'VelocityAligned_NegativeZAxisFacing',VelocityAligned_YAxisFacing:'VelocityAligned_YAxisFacing',VelocityAligned_NegativeYAxisFacing:'VelocityAligned_NegativeYAxisFacing',EMeshCameraFacingOptions_MAX:'EMeshCameraFacingOptions_MAX', };
declare class ParticleModuleTypeDataMesh extends ParticleModuleTypeDataBase { 
	Mesh: StaticMesh;
	bUseStaticMeshLODs: boolean;
	LODSizeScale: number;
	CastShadows: boolean;
	DoCollisions: boolean;
	MeshAlignment: EMeshScreenAlignment;
	bOverrideMaterial: boolean;
	bOverrideDefaultMotionBlurSettings: boolean;
	bEnableMotionBlur: boolean;
	Pitch: number;
	Roll: number;
	Yaw: number;
	RollPitchYawRange: RawDistributionVector;
	AxisLockOption: EParticleAxisLock;
	bCameraFacing: boolean;
	CameraFacingUpAxisOption: EMeshCameraFacingUpAxis;
	CameraFacingOption: EMeshCameraFacingOptions;
	bApplyParticleRotationAsSpin: boolean;
	bFaceCameraDirectionRatherThanPosition: boolean;
	bCollisionsConsiderPartilceSize: boolean;
	static Load(ResourceName: string): ParticleModuleTypeDataMesh;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataMesh;
	static GetDefaultObject(): ParticleModuleTypeDataMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataMesh;
	static C(Other: UObject | any): ParticleModuleTypeDataMesh;
}

declare type ETrailsRenderAxisOption = 'Trails_CameraUp' | 'Trails_SourceUp' | 'Trails_WorldUp' | 'Trails_MAX';
declare var ETrailsRenderAxisOption : { Trails_CameraUp:'Trails_CameraUp',Trails_SourceUp:'Trails_SourceUp',Trails_WorldUp:'Trails_WorldUp',Trails_MAX:'Trails_MAX', };
declare class ParticleModuleTypeDataRibbon extends ParticleModuleTypeDataBase { 
	MaxTessellationBetweenParticles: number;
	SheetsPerTrail: number;
	MaxTrailCount: number;
	MaxParticleInTrailCount: number;
	bDeadTrailsOnDeactivate: boolean;
	bDeadTrailsOnSourceLoss: boolean;
	bClipSourceSegement: boolean;
	bEnablePreviousTangentRecalculation: boolean;
	bTangentRecalculationEveryFrame: boolean;
	bSpawnInitialParticle: boolean;
	RenderAxis: ETrailsRenderAxisOption;
	TangentSpawningScalar: number;
	bRenderGeometry: boolean;
	bRenderSpawnPoints: boolean;
	bRenderTangents: boolean;
	bRenderTessellation: boolean;
	TilingDistance: number;
	DistanceTessellationStepSize: number;
	bEnableTangentDiffInterpScale: boolean;
	TangentTessellationScalar: number;
	static Load(ResourceName: string): ParticleModuleTypeDataRibbon;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataRibbon;
	static GetDefaultObject(): ParticleModuleTypeDataRibbon;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataRibbon;
	static C(Other: UObject | any): ParticleModuleTypeDataRibbon;
}

declare class ParticleModuleVectorFieldBase extends ParticleModule { 
	static Load(ResourceName: string): ParticleModuleVectorFieldBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldBase;
	static GetDefaultObject(): ParticleModuleVectorFieldBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldBase;
	static C(Other: UObject | any): ParticleModuleVectorFieldBase;
}

declare class ParticleModuleVectorFieldGlobal extends ParticleModuleVectorFieldBase { 
	bOverrideGlobalVectorFieldTightness: boolean;
	GlobalVectorFieldScale: number;
	GlobalVectorFieldTightness: number;
	static Load(ResourceName: string): ParticleModuleVectorFieldGlobal;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldGlobal;
	static GetDefaultObject(): ParticleModuleVectorFieldGlobal;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldGlobal;
	static C(Other: UObject | any): ParticleModuleVectorFieldGlobal;
}

declare class ParticleModuleVectorFieldLocal extends ParticleModuleVectorFieldBase { 
	VectorField: VectorField;
	RelativeTranslation: Vector;
	RelativeRotation: Rotator;
	RelativeScale3D: Vector;
	Intensity: number;
	Tightness: number;
	bIgnoreComponentTransform: boolean;
	bTileX: boolean;
	bTileY: boolean;
	bTileZ: boolean;
	bUseFixDT: boolean;
	static Load(ResourceName: string): ParticleModuleVectorFieldLocal;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldLocal;
	static GetDefaultObject(): ParticleModuleVectorFieldLocal;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldLocal;
	static C(Other: UObject | any): ParticleModuleVectorFieldLocal;
}

declare class ParticleModuleVectorFieldRotation extends ParticleModuleVectorFieldBase { 
	MinInitialRotation: Vector;
	MaxInitialRotation: Vector;
	static Load(ResourceName: string): ParticleModuleVectorFieldRotation;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldRotation;
	static GetDefaultObject(): ParticleModuleVectorFieldRotation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldRotation;
	static C(Other: UObject | any): ParticleModuleVectorFieldRotation;
}

declare class ParticleModuleVectorFieldRotationRate extends ParticleModuleVectorFieldBase { 
	RotationRate: Vector;
	static Load(ResourceName: string): ParticleModuleVectorFieldRotationRate;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldRotationRate;
	static GetDefaultObject(): ParticleModuleVectorFieldRotationRate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldRotationRate;
	static C(Other: UObject | any): ParticleModuleVectorFieldRotationRate;
}

declare class ParticleModuleVectorFieldScale extends ParticleModuleVectorFieldBase { 
	VectorFieldScale: DistributionFloat;
	VectorFieldScaleRaw: RawDistributionFloat;
	static Load(ResourceName: string): ParticleModuleVectorFieldScale;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldScale;
	static GetDefaultObject(): ParticleModuleVectorFieldScale;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldScale;
	static C(Other: UObject | any): ParticleModuleVectorFieldScale;
}

declare class ParticleModuleVectorFieldScaleOverLife extends ParticleModuleVectorFieldBase { 
	VectorFieldScaleOverLife: DistributionFloat;
	VectorFieldScaleOverLifeRaw: RawDistributionFloat;
	static Load(ResourceName: string): ParticleModuleVectorFieldScaleOverLife;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVectorFieldScaleOverLife;
	static GetDefaultObject(): ParticleModuleVectorFieldScaleOverLife;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldScaleOverLife;
	static C(Other: UObject | any): ParticleModuleVectorFieldScaleOverLife;
}

declare class ParticleModuleVelocityBase extends ParticleModule { 
	bInWorldSpace: boolean;
	bApplyOwnerScale: boolean;
	static Load(ResourceName: string): ParticleModuleVelocityBase;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocityBase;
	static GetDefaultObject(): ParticleModuleVelocityBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityBase;
	static C(Other: UObject | any): ParticleModuleVelocityBase;
}

declare class ParticleModuleVelocity extends ParticleModuleVelocityBase { 
	StartVelocity: RawDistributionVector;
	StartVelocityRadial: RawDistributionFloat;
	static Load(ResourceName: string): ParticleModuleVelocity;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocity;
	static GetDefaultObject(): ParticleModuleVelocity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocity;
	static C(Other: UObject | any): ParticleModuleVelocity;
}

declare class ParticleModuleVelocity_Seeded extends ParticleModuleVelocity { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	static Load(ResourceName: string): ParticleModuleVelocity_Seeded;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocity_Seeded;
	static GetDefaultObject(): ParticleModuleVelocity_Seeded;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocity_Seeded;
	static C(Other: UObject | any): ParticleModuleVelocity_Seeded;
}

declare class ParticleModuleVelocityCone extends ParticleModuleVelocityBase { 
	Angle: RawDistributionFloat;
	Velocity: RawDistributionFloat;
	Direction: Vector;
	static Load(ResourceName: string): ParticleModuleVelocityCone;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocityCone;
	static GetDefaultObject(): ParticleModuleVelocityCone;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityCone;
	static C(Other: UObject | any): ParticleModuleVelocityCone;
}

declare class ParticleModuleVelocityInheritParent extends ParticleModuleVelocityBase { 
	Scale: RawDistributionVector;
	static Load(ResourceName: string): ParticleModuleVelocityInheritParent;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocityInheritParent;
	static GetDefaultObject(): ParticleModuleVelocityInheritParent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityInheritParent;
	static C(Other: UObject | any): ParticleModuleVelocityInheritParent;
}

declare class ParticleModuleVelocityOverLifetime extends ParticleModuleVelocityBase { 
	VelOverLife: RawDistributionVector;
	Absolute: boolean;
	static Load(ResourceName: string): ParticleModuleVelocityOverLifetime;
	static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocityOverLifetime;
	static GetDefaultObject(): ParticleModuleVelocityOverLifetime;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityOverLifetime;
	static C(Other: UObject | any): ParticleModuleVelocityOverLifetime;
}

declare class ParticleSpriteEmitter extends ParticleEmitter { 
	static Load(ResourceName: string): ParticleSpriteEmitter;
	static Find(Outer: UObject, ResourceName: string): ParticleSpriteEmitter;
	static GetDefaultObject(): ParticleSpriteEmitter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleSpriteEmitter;
	static C(Other: UObject | any): ParticleSpriteEmitter;
}

declare class PathFollowingAgentInterface extends Interface { 
	static Load(ResourceName: string): PathFollowingAgentInterface;
	static Find(Outer: UObject, ResourceName: string): PathFollowingAgentInterface;
	static GetDefaultObject(): PathFollowingAgentInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PathFollowingAgentInterface;
	static C(Other: UObject | any): PathFollowingAgentInterface;
}

declare class PawnNoiseEmitterComponent extends ActorComponent { 
	bAIPerceptionSystemCompatibilityMode: boolean;
	LastRemoteNoisePosition: Vector;
	NoiseLifetime: number;
	LastRemoteNoiseVolume: number;
	LastRemoteNoiseTime: number;
	LastLocalNoiseVolume: number;
	LastLocalNoiseTime: number;
	static Load(ResourceName: string): PawnNoiseEmitterComponent;
	static Find(Outer: UObject, ResourceName: string): PawnNoiseEmitterComponent;
	static GetDefaultObject(): PawnNoiseEmitterComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PawnNoiseEmitterComponent;
	MakeNoise(NoiseMaker: Actor,Loudness: number,NoiseLocation: Vector): void;
	static C(Other: UObject | any): PawnNoiseEmitterComponent;
}

declare class PhysicalAnimationComponent extends ActorComponent { 
	StrengthMultiplyer: number;
	SkeletalMeshComponent: SkeletalMeshComponent;
	static Load(ResourceName: string): PhysicalAnimationComponent;
	static Find(Outer: UObject, ResourceName: string): PhysicalAnimationComponent;
	static GetDefaultObject(): PhysicalAnimationComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicalAnimationComponent;
	SetStrengthMultiplyer(InStrengthMultiplyer: number): void;
	SetSkeletalMeshComponent(InSkeletalMeshComponent: SkeletalMeshComponent): void;
	GetBodyTargetTransform(BodyName: string): Transform;
	ApplyPhysicalAnimationSettingsBelow(BodyName: string,PhysicalAnimationData: PhysicalAnimationData,bIncludeSelf: boolean): void;
	ApplyPhysicalAnimationSettings(BodyName: string,PhysicalAnimationData: PhysicalAnimationData): void;
	ApplyPhysicalAnimationProfileBelow(BodyName: string,ProfileName: string,bIncludeSelf: boolean,bClearNotFound: boolean): void;
	static C(Other: UObject | any): PhysicalAnimationComponent;
}

declare class RigidBodyBase extends Actor { 
	static GetDefaultObject(): RigidBodyBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RigidBodyBase;
	static C(Other: UObject | any): RigidBodyBase;
}

declare class ConstrainComponentPropName { 
	ComponentName: string;
	clone() : ConstrainComponentPropName;
	static C(Other: UObject | any): ConstrainComponentPropName;
}

declare type EConstraintFrame = 'Frame1' | 'Frame2' | 'EConstraintFrame_MAX';
declare var EConstraintFrame : { Frame1:'Frame1',Frame2:'Frame2',EConstraintFrame_MAX:'EConstraintFrame_MAX', };
declare class PhysicsConstraintComponent extends SceneComponent { 
	ConstraintActor1: Actor;
	ComponentName1: ConstrainComponentPropName;
	ConstraintActor2: Actor;
	ComponentName2: ConstrainComponentPropName;
	ConstraintSetup: PhysicsConstraintTemplate;
	OnConstraintBroken: UnrealEngineMulticastDelegate<(ConstraintIndex: number) => void>;
	ConstraintInstance: ConstraintInstance;
	static Load(ResourceName: string): PhysicsConstraintComponent;
	static Find(Outer: UObject, ResourceName: string): PhysicsConstraintComponent;
	static GetDefaultObject(): PhysicsConstraintComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsConstraintComponent;
	SetOrientationDriveTwistAndSwing(bEnableTwistDrive: boolean,bEnableSwingDrive: boolean): void;
	SetOrientationDriveSLERP(bEnableSLERP: boolean): void;
	SetLinearZLimit(ConstraintType: ELinearConstraintMotion,LimitSize: number): void;
	SetLinearYLimit(ConstraintType: ELinearConstraintMotion,LimitSize: number): void;
	SetLinearXLimit(ConstraintType: ELinearConstraintMotion,LimitSize: number): void;
	SetLinearVelocityTarget(InVelTarget: Vector): void;
	SetLinearVelocityDrive(bEnableDriveX: boolean,bEnableDriveY: boolean,bEnableDriveZ: boolean): void;
	SetLinearPositionTarget(InPosTarget: Vector): void;
	SetLinearPositionDrive(bEnableDriveX: boolean,bEnableDriveY: boolean,bEnableDriveZ: boolean): void;
	SetLinearDriveParams(PositionStrength: number,VelocityStrength: number,InForceLimit: number): void;
	SetLinearBreakable(bLinearBreakable: boolean,LinearBreakThreshold: number): void;
	SetDisableCollision(bDisableCollision: boolean): void;
	SetConstraintReferencePosition(Frame: EConstraintFrame,RefPosition: Vector): void;
	SetConstraintReferenceOrientation(Frame: EConstraintFrame,PriAxis: Vector,SecAxis: Vector): void;
	SetConstraintReferenceFrame(Frame: EConstraintFrame,RefFrame: Transform): void;
	SetConstrainedComponents(Component1: PrimitiveComponent,BoneName1: string,Component2: PrimitiveComponent,BoneName2: string): void;
	SetAngularVelocityTarget(InVelTarget: Vector): void;
	SetAngularVelocityDriveTwistAndSwing(bEnableTwistDrive: boolean,bEnableSwingDrive: boolean): void;
	SetAngularVelocityDriveSLERP(bEnableSLERP: boolean): void;
	SetAngularVelocityDrive(bEnableSwingDrive: boolean,bEnableTwistDrive: boolean): void;
	SetAngularTwistLimit(ConstraintType: EAngularConstraintMotion,TwistLimitAngle: number): void;
	SetAngularSwing2Limit(MotionType: EAngularConstraintMotion,Swing2LimitAngle: number): void;
	SetAngularSwing1Limit(MotionType: EAngularConstraintMotion,Swing1LimitAngle: number): void;
	SetAngularOrientationTarget(InPosTarget: Rotator): void;
	SetAngularOrientationDrive(bEnableSwingDrive: boolean,bEnableTwistDrive: boolean): void;
	SetAngularDriveParams(PositionStrength: number,VelocityStrength: number,InForceLimit: number): void;
	SetAngularDriveMode(DriveMode: EAngularDriveMode): void;
	SetAngularBreakable(bAngularBreakable: boolean,AngularBreakThreshold: number): void;
	IsBroken(): boolean;
	GetCurrentTwist(): number;
	GetCurrentSwing2(): number;
	GetCurrentSwing1(): number;
	GetConstraintForce(OutLinearForce?: Vector,OutAngularForce?: Vector): {OutLinearForce: Vector, OutAngularForce: Vector};
	BreakConstraint(): void;
	static C(Other: UObject | any): PhysicsConstraintComponent;
}

declare class PhysicsConstraintActor extends RigidBodyBase { 
	ConstraintComp: PhysicsConstraintComponent;
	ConstraintActor1: Actor;
	ConstraintActor2: Actor;
	bDisableCollision: boolean;
	static GetDefaultObject(): PhysicsConstraintActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsConstraintActor;
	static C(Other: UObject | any): PhysicsConstraintActor;
}

declare class PhysicsHandleComponent extends ActorComponent { 
	GrabbedComponent: PrimitiveComponent;
	bSoftAngularConstraint: boolean;
	bSoftLinearConstraint: boolean;
	bInterpolateTarget: boolean;
	LinearDamping: number;
	LinearStiffness: number;
	AngularDamping: number;
	AngularStiffness: number;
	InterpolationSpeed: number;
	static Load(ResourceName: string): PhysicsHandleComponent;
	static Find(Outer: UObject, ResourceName: string): PhysicsHandleComponent;
	static GetDefaultObject(): PhysicsHandleComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsHandleComponent;
	SetTargetRotation(NewRotation: Rotator): void;
	SetTargetLocationAndRotation(NewLocation: Vector,NewRotation: Rotator): void;
	SetTargetLocation(NewLocation: Vector): void;
	SetLinearStiffness(NewLinearStiffness: number): void;
	SetLinearDamping(NewLinearDamping: number): void;
	SetInterpolationSpeed(NewInterpolationSpeed: number): void;
	SetAngularStiffness(NewAngularStiffness: number): void;
	SetAngularDamping(NewAngularDamping: number): void;
	ReleaseComponent(): void;
	GrabComponentAtLocationWithRotation(Component: PrimitiveComponent,InBoneName: string,Location: Vector,Rotation: Rotator): void;
	GrabComponentAtLocation(Component: PrimitiveComponent,InBoneName: string,GrabLocation: Vector): void;
	GrabComponent(Component: PrimitiveComponent,InBoneName: string,GrabLocation: Vector,bConstrainRotation: boolean): void;
	GetTargetLocationAndRotation(TargetLocation?: Vector,TargetRotation?: Rotator): {TargetLocation: Vector, TargetRotation: Rotator};
	GetGrabbedComponent(): PrimitiveComponent;
	static C(Other: UObject | any): PhysicsHandleComponent;
}

declare class RigidBodyErrorCorrection { 
	PingExtrapolation: number;
	PingLimit: number;
	ErrorPerLinearDifference: number;
	ErrorPerAngularDifference: number;
	MaxRestoredStateError: number;
	MaxLinearHardSnapDistance: number;
	PositionLerp: number;
	AngleLerp: number;
	LinearVelocityCoefficient: number;
	AngularVelocityCoefficient: number;
	ErrorAccumulationSeconds: number;
	ErrorAccumulationDistanceSq: number;
	ErrorAccumulationSimilarity: number;
	clone() : RigidBodyErrorCorrection;
	static C(Other: UObject | any): RigidBodyErrorCorrection;
}

declare type ESettingsLockedAxis = 'None' | 'X' | 'Y' | 'Z' | 'Invalid' | 'ESettingsLockedAxis_MAX';
declare var ESettingsLockedAxis : { None:'None',X:'X',Y:'Y',Z:'Z',Invalid:'Invalid',ESettingsLockedAxis_MAX:'ESettingsLockedAxis_MAX', };
declare type ESettingsDOF = 'Full3D' | 'YZPlane' | 'XZPlane' | 'XYPlane' | 'ESettingsDOF_MAX';
declare var ESettingsDOF : { Full3D:'Full3D',YZPlane:'YZPlane',XZPlane:'XZPlane',XYPlane:'XYPlane',ESettingsDOF_MAX:'ESettingsDOF_MAX', };
declare class PhysicalSurfaceName { 
	Type: EPhysicalSurface;
	Name: string;
	clone() : PhysicalSurfaceName;
	static C(Other: UObject | any): PhysicalSurfaceName;
}

declare class PhysicsSettings extends DeveloperSettings { 
	DefaultGravityZ: number;
	DefaultTerminalVelocity: number;
	DefaultFluidFriction: number;
	SimulateScratchMemorySize: number;
	RagdollAggregateThreshold: number;
	TriangleMeshTriangleMinAreaThreshold: number;
	bEnableAsyncScene: boolean;
	bEnableShapeSharing: boolean;
	bEnablePCM: boolean;
	bEnableStabilization: boolean;
	bWarnMissingLocks: boolean;
	bEnable2DPhysics: boolean;
	PhysicErrorCorrection: RigidBodyErrorCorrection;
	LockedAxis: ESettingsLockedAxis;
	DefaultDegreesOfFreedom: ESettingsDOF;
	BounceThresholdVelocity: number;
	FrictionCombineMode: EFrictionCombineMode;
	RestitutionCombineMode: EFrictionCombineMode;
	MaxAngularVelocity: number;
	MaxDepenetrationVelocity: number;
	ContactOffsetMultiplier: number;
	MinContactOffset: number;
	MaxContactOffset: number;
	bSimulateSkeletalMeshOnDedicatedServer: boolean;
	DefaultShapeComplexity: ECollisionTraceFlag;
	bDefaultHasComplexCollision: boolean;
	bSuppressFaceRemapTable: boolean;
	bSupportUVFromHitResults: boolean;
	bDisableActiveActors: boolean;
	bDisableKinematicStaticPairs: boolean;
	bDisableKinematicKinematicPairs: boolean;
	bDisableCCD: boolean;
	bEnableEnhancedDeterminism: boolean;
	MaxPhysicsDeltaTime: number;
	bSubstepping: boolean;
	bSubsteppingAsync: boolean;
	MaxSubstepDeltaTime: number;
	MaxSubsteps: number;
	SyncSceneSmoothingFactor: number;
	AsyncSceneSmoothingFactor: number;
	InitialAverageFrameRate: number;
	PhysXTreeRebuildRate: number;
	PhysicalSurfaces: PhysicalSurfaceName[];
	DefaultBroadphaseSettings: BroadphaseSettings;
	static Load(ResourceName: string): PhysicsSettings;
	static Find(Outer: UObject, ResourceName: string): PhysicsSettings;
	static GetDefaultObject(): PhysicsSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsSettings;
	static C(Other: UObject | any): PhysicsSettings;
}

declare class PhysicsSpringComponent extends SceneComponent { 
	SpringStiffness: number;
	SpringDamping: number;
	SpringLengthAtRest: number;
	SpringRadius: number;
	SpringChannel: ECollisionChannel;
	bIgnoreSelf: boolean;
	SpringCompression: number;
	static Load(ResourceName: string): PhysicsSpringComponent;
	static Find(Outer: UObject, ResourceName: string): PhysicsSpringComponent;
	static GetDefaultObject(): PhysicsSpringComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsSpringComponent;
	GetSpringRestingPoint(): Vector;
	GetSpringDirection(): Vector;
	GetSpringCurrentEndPoint(): Vector;
	GetNormalizedCompressionScalar(): number;
	static C(Other: UObject | any): PhysicsSpringComponent;
}

declare class PhysicsThrusterComponent extends SceneComponent { 
	ThrustStrength: number;
	static Load(ResourceName: string): PhysicsThrusterComponent;
	static Find(Outer: UObject, ResourceName: string): PhysicsThrusterComponent;
	static GetDefaultObject(): PhysicsThrusterComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsThrusterComponent;
	static C(Other: UObject | any): PhysicsThrusterComponent;
}

declare class PhysicsThruster extends RigidBodyBase { 
	ThrusterComponent: PhysicsThrusterComponent;
	ArrowComponent: ArrowComponent;
	static GetDefaultObject(): PhysicsThruster;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsThruster;
	static C(Other: UObject | any): PhysicsThruster;
}

declare class SceneCapture extends Actor { 
	MeshComp: StaticMeshComponent;
	static GetDefaultObject(): SceneCapture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCapture;
	static C(Other: UObject | any): SceneCapture;
}

declare type ESceneCapturePrimitiveRenderMode = 'PRM_LegacySceneCapture' | 'PRM_RenderScenePrimitives' | 'PRM_UseShowOnlyList' | 'PRM_MAX';
declare var ESceneCapturePrimitiveRenderMode : { PRM_LegacySceneCapture:'PRM_LegacySceneCapture',PRM_RenderScenePrimitives:'PRM_RenderScenePrimitives',PRM_UseShowOnlyList:'PRM_UseShowOnlyList',PRM_MAX:'PRM_MAX', };
declare class EngineShowFlagsSetting { 
	ShowFlagName: string;
	Enabled: boolean;
	clone() : EngineShowFlagsSetting;
	static C(Other: UObject | any): EngineShowFlagsSetting;
}

declare class SceneCaptureComponent extends SceneComponent { 
	PrimitiveRenderMode: ESceneCapturePrimitiveRenderMode;
	HiddenComponents: any[];
	HiddenActors: Actor[];
	ShowOnlyComponents: any[];
	ShowOnlyActors: Actor[];
	bCaptureEveryFrame: boolean;
	bCaptureOnMovement: boolean;
	bAlwaysPersistRenderingState: boolean;
	LODDistanceFactor: number;
	MaxViewDistanceOverride: number;
	CaptureSortPriority: number;
	ShowFlagSettings: EngineShowFlagsSetting[];
	ProfilingEventName: string;
	static Load(ResourceName: string): SceneCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): SceneCaptureComponent;
	static GetDefaultObject(): SceneCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCaptureComponent;
	ShowOnlyComponent(InComponent: PrimitiveComponent): void;
	ShowOnlyActorComponents(InActor: Actor): void;
	SetCaptureSortPriority(NewCaptureSortPriority: number): void;
	RemoveShowOnlyComponent(InComponent: PrimitiveComponent): void;
	RemoveShowOnlyActorComponents(InActor: Actor): void;
	HideComponent(InComponent: PrimitiveComponent): void;
	HideActorComponents(InActor: Actor): void;
	ClearShowOnlyComponents(InComponent: PrimitiveComponent): void;
	ClearHiddenComponents(): void;
	static C(Other: UObject | any): SceneCaptureComponent;
}

declare class PlanarReflectionComponent extends SceneCaptureComponent { 
	PreviewBox: BoxComponent;
	NormalDistortionStrength: number;
	PrefilterRoughness: number;
	PrefilterRoughnessDistance: number;
	ScreenPercentage: number;
	ExtraFOV: number;
	DistanceFromPlaneFadeStart: number;
	DistanceFromPlaneFadeEnd: number;
	DistanceFromPlaneFadeoutStart: number;
	DistanceFromPlaneFadeoutEnd: number;
	AngleFromPlaneFadeStart: number;
	AngleFromPlaneFadeEnd: number;
	bRenderSceneTwoSided: boolean;
	static Load(ResourceName: string): PlanarReflectionComponent;
	static Find(Outer: UObject, ResourceName: string): PlanarReflectionComponent;
	static GetDefaultObject(): PlanarReflectionComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlanarReflectionComponent;
	static C(Other: UObject | any): PlanarReflectionComponent;
}

declare class PlanarReflection extends SceneCapture { 
	PlanarReflectionComponent: PlanarReflectionComponent;
	SpriteComponent: BillboardComponent;
	bShowPreviewPlane: boolean;
	static GetDefaultObject(): PlanarReflection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlanarReflection;
	OnInterpToggle(bEnable: boolean): void;
	static C(Other: UObject | any): PlanarReflection;
}

declare class PlaneReflectionCapture extends ReflectionCapture { 
	static GetDefaultObject(): PlaneReflectionCapture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneReflectionCapture;
	static C(Other: UObject | any): PlaneReflectionCapture;
}

declare class PlaneReflectionCaptureComponent extends ReflectionCaptureComponent { 
	InfluenceRadiusScale: number;
	PreviewInfluenceRadius: DrawSphereComponent;
	PreviewCaptureBox: BoxComponent;
	static Load(ResourceName: string): PlaneReflectionCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): PlaneReflectionCaptureComponent;
	static GetDefaultObject(): PlaneReflectionCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneReflectionCaptureComponent;
	static C(Other: UObject | any): PlaneReflectionCaptureComponent;
}

declare class PlatformEventsComponent extends ActorComponent { 
	PlatformChangedToLaptopModeDelegate: UnrealEngineMulticastDelegate<() => void>;
	PlatformChangedToTabletModeDelegate: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): PlatformEventsComponent;
	static Find(Outer: UObject, ResourceName: string): PlatformEventsComponent;
	static GetDefaultObject(): PlatformEventsComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformEventsComponent;
	SupportsConvertibleLaptops(): boolean;
	IsInTabletMode(): boolean;
	IsInLaptopMode(): boolean;
	static C(Other: UObject | any): PlatformEventsComponent;
}

declare class PlatformInterfaceWebResponse extends UObject { 
	OriginalURL: string;
	ResponseCode: number;
	Tag: number;
	StringResponse: string;
	BinaryResponse: number[];
	static Load(ResourceName: string): PlatformInterfaceWebResponse;
	static Find(Outer: UObject, ResourceName: string): PlatformInterfaceWebResponse;
	static GetDefaultObject(): PlatformInterfaceWebResponse;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformInterfaceWebResponse;
	GetNumHeaders(): number;
	GetHeaderValue(HeaderName: string): string;
	GetHeader(HeaderIndex: number,Header?: string,Value?: string): {Header: string, Value: string};
	static C(Other: UObject | any): PlatformInterfaceWebResponse;
}

declare class PlayerStart extends NavigationObjectBase { 
	PlayerStartTag: string;
	ArrowComponent: ArrowComponent;
	static GetDefaultObject(): PlayerStart;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlayerStart;
	static C(Other: UObject | any): PlayerStart;
}

declare class PlayerStartPIE extends PlayerStart { 
	static GetDefaultObject(): PlayerStartPIE;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlayerStartPIE;
	static C(Other: UObject | any): PlayerStartPIE;
}

declare class PluginCommandlet extends Commandlet { 
	static Load(ResourceName: string): PluginCommandlet;
	static Find(Outer: UObject, ResourceName: string): PluginCommandlet;
	static GetDefaultObject(): PluginCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginCommandlet;
	static C(Other: UObject | any): PluginCommandlet;
}

declare class PointLight extends Light { 
	PointLightComponent: PointLightComponent;
	static GetDefaultObject(): PointLight;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PointLight;
	SetRadius(NewRadius: number): void;
	SetLightFalloffExponent(NewLightFalloffExponent: number): void;
	static C(Other: UObject | any): PointLight;
}

declare class Polys extends UObject { 
	static Load(ResourceName: string): Polys;
	static Find(Outer: UObject, ResourceName: string): Polys;
	static GetDefaultObject(): Polys;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Polys;
	static C(Other: UObject | any): Polys;
}

declare type EBoneSpaces = 'WorldSpace' | 'ComponentSpace' | 'EBoneSpaces_MAX';
declare var EBoneSpaces : { WorldSpace:'WorldSpace',ComponentSpace:'ComponentSpace',EBoneSpaces_MAX:'EBoneSpaces_MAX', };
declare class PoseableMeshComponent extends SkinnedMeshComponent { 
	static Load(ResourceName: string): PoseableMeshComponent;
	static Find(Outer: UObject, ResourceName: string): PoseableMeshComponent;
	static GetDefaultObject(): PoseableMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PoseableMeshComponent;
	SetBoneTransformByName(BoneName: string,InTransform: Transform,BoneSpace: EBoneSpaces): void;
	SetBoneScaleByName(BoneName: string,InScale3D: Vector,BoneSpace: EBoneSpaces): void;
	SetBoneRotationByName(BoneName: string,InRotation: Rotator,BoneSpace: EBoneSpaces): void;
	SetBoneLocationByName(BoneName: string,InLocation: Vector,BoneSpace: EBoneSpaces): void;
	ResetBoneTransformByName(BoneName: string): void;
	GetBoneTransformByName(BoneName: string,BoneSpace: EBoneSpaces): Transform;
	GetBoneScaleByName(BoneName: string,BoneSpace: EBoneSpaces): Vector;
	GetBoneRotationByName(BoneName: string,BoneSpace: EBoneSpaces): Rotator;
	GetBoneLocationByName(BoneName: string,BoneSpace: EBoneSpaces): Vector;
	CopyPoseFromSkeletalComponent(InComponentToCopy: SkeletalMeshComponent): void;
	static C(Other: UObject | any): PoseableMeshComponent;
}

declare class PostProcessVolume extends Volume { 
	Settings: PostProcessSettings;
	Priority: number;
	BlendRadius: number;
	BlendWeight: number;
	bEnabled: boolean;
	bUnbound: boolean;
	static GetDefaultObject(): PostProcessVolume;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PostProcessVolume;
	static C(Other: UObject | any): PostProcessVolume;
}

declare class PrecomputedVisibilityOverrideVolume extends Volume { 
	OverrideVisibleActors: Actor[];
	OverrideInvisibleActors: Actor[];
	OverrideInvisibleLevels: string[];
	static GetDefaultObject(): PrecomputedVisibilityOverrideVolume;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PrecomputedVisibilityOverrideVolume;
	static C(Other: UObject | any): PrecomputedVisibilityOverrideVolume;
}

declare class PrecomputedVisibilityVolume extends Volume { 
	static GetDefaultObject(): PrecomputedVisibilityVolume;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PrecomputedVisibilityVolume;
	static C(Other: UObject | any): PrecomputedVisibilityVolume;
}

declare class PreviewCollectionInterface extends Interface { 
	static Load(ResourceName: string): PreviewCollectionInterface;
	static Find(Outer: UObject, ResourceName: string): PreviewCollectionInterface;
	static GetDefaultObject(): PreviewCollectionInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PreviewCollectionInterface;
	static C(Other: UObject | any): PreviewCollectionInterface;
}

declare class PreviewMeshCollectionEntry { 
	SkeletalMesh: SkeletalMesh;
	clone() : PreviewMeshCollectionEntry;
	static C(Other: UObject | any): PreviewMeshCollectionEntry;
}

declare class PreviewMeshCollection extends DataAsset { 
	Skeleton: Skeleton;
	SkeletalMeshes: PreviewMeshCollectionEntry[];
	static Load(ResourceName: string): PreviewMeshCollection;
	static Find(Outer: UObject, ResourceName: string): PreviewMeshCollection;
	static GetDefaultObject(): PreviewMeshCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PreviewMeshCollection;
	static C(Other: UObject | any): PreviewMeshCollection;
}

declare class CollectionReference { 
	CollectionName: string;
	clone() : CollectionReference;
	static C(Other: UObject | any): CollectionReference;
}

declare class PrimaryAssetLabel extends PrimaryDataAsset { 
	Rules: PrimaryAssetRules;
	bLabelAssetsInMyDirectory: boolean;
	bIsRuntimeLabel: boolean;
	ExplicitAssets: UObject[];
	ExplicitBlueprints: Class[];
	AssetCollection: CollectionReference;
	static Load(ResourceName: string): PrimaryAssetLabel;
	static Find(Outer: UObject, ResourceName: string): PrimaryAssetLabel;
	static GetDefaultObject(): PrimaryAssetLabel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PrimaryAssetLabel;
	static C(Other: UObject | any): PrimaryAssetLabel;
}

declare class ProjectileMovementComponent extends MovementComponent { 
	InitialSpeed: number;
	MaxSpeed: number;
	bRotationFollowsVelocity: boolean;
	bShouldBounce: boolean;
	bInitialVelocityInLocalSpace: boolean;
	bForceSubStepping: boolean;
	bSimulationEnabled: boolean;
	bSweepCollision: boolean;
	bIsHomingProjectile: boolean;
	bBounceAngleAffectsFriction: boolean;
	bIsSliding: boolean;
	bInterpMovement: boolean;
	bInterpRotation: boolean;
	PreviousHitTime: number;
	PreviousHitNormal: Vector;
	ProjectileGravityScale: number;
	Buoyancy: number;
	Bounciness: number;
	Friction: number;
	BounceVelocityStopSimulatingThreshold: number;
	MinFrictionFraction: number;
	OnProjectileBounce: UnrealEngineMulticastDelegate<(ImpactResult: HitResult, ImpactVelocity: Vector) => void>;
	OnProjectileStop: UnrealEngineMulticastDelegate<(ImpactResult: HitResult) => void>;
	HomingAccelerationMagnitude: number;
	HomingTargetComponent: any;
	MaxSimulationTimeStep: number;
	MaxSimulationIterations: number;
	BounceAdditionalIterations: number;
	InterpLocationTime: number;
	InterpRotationTime: number;
	InterpLocationMaxLagDistance: number;
	InterpLocationSnapToTargetDistance: number;
	static Load(ResourceName: string): ProjectileMovementComponent;
	static Find(Outer: UObject, ResourceName: string): ProjectileMovementComponent;
	static GetDefaultObject(): ProjectileMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProjectileMovementComponent;
	StopSimulating(HitResult: HitResult): void;
	SetVelocityInLocalSpace(NewVelocity: Vector): void;
	SetInterpolatedComponent(Component: SceneComponent): void;
	ResetInterpolation(): void;
	MoveInterpolationTarget(NewLocation: Vector,NewRotation: Rotator): void;
	LimitVelocity(NewVelocity: Vector): Vector;
	IsVelocityUnderSimulationThreshold(): boolean;
	IsInterpolationComplete(): boolean;
	static C(Other: UObject | any): ProjectileMovementComponent;
}

declare class ProxyLODMeshSimplificationSettings extends DeveloperSettings { 
	ProxyLODMeshReductionModuleName: string;
	static Load(ResourceName: string): ProxyLODMeshSimplificationSettings;
	static Find(Outer: UObject, ResourceName: string): ProxyLODMeshSimplificationSettings;
	static GetDefaultObject(): ProxyLODMeshSimplificationSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProxyLODMeshSimplificationSettings;
	static C(Other: UObject | any): ProxyLODMeshSimplificationSettings;
}

declare class RadialForceComponent extends SceneComponent { 
	Radius: number;
	Falloff: ERadialImpulseFalloff;
	ImpulseStrength: number;
	bImpulseVelChange: boolean;
	bIgnoreOwningActor: boolean;
	ForceStrength: number;
	DestructibleDamage: number;
	ObjectTypesToAffect: EObjectTypeQuery[];
	static Load(ResourceName: string): RadialForceComponent;
	static Find(Outer: UObject, ResourceName: string): RadialForceComponent;
	static GetDefaultObject(): RadialForceComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RadialForceComponent;
	RemoveObjectTypeToAffect(ObjectType: EObjectTypeQuery): void;
	FireImpulse(): void;
	AddObjectTypeToAffect(ObjectType: EObjectTypeQuery): void;
	static C(Other: UObject | any): RadialForceComponent;
}

declare class RadialForceActor extends RigidBodyBase { 
	ForceComponent: RadialForceComponent;
	SpriteComponent: BillboardComponent;
	static GetDefaultObject(): RadialForceActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RadialForceActor;
	ToggleForce(): void;
	FireImpulse(): void;
	EnableForce(): void;
	DisableForce(): void;
	static C(Other: UObject | any): RadialForceActor;
}

declare class RectLightComponent extends LocalLightComponent { 
	SourceWidth: number;
	SourceHeight: number;
	SourceTexture: Texture;
	static Load(ResourceName: string): RectLightComponent;
	static Find(Outer: UObject, ResourceName: string): RectLightComponent;
	static GetDefaultObject(): RectLightComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RectLightComponent;
	SetSourceWidth(bNewValue: number): void;
	SetSourceHeight(NewValue: number): void;
	static C(Other: UObject | any): RectLightComponent;
}

declare class RectLight extends Light { 
	RectLightComponent: RectLightComponent;
	static GetDefaultObject(): RectLight;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RectLight;
	static C(Other: UObject | any): RectLight;
}

declare type EMobileMSAASampleCount = 'One' | 'Two' | 'Four' | 'Eight' | 'EMobileMSAASampleCount_MAX';
declare var EMobileMSAASampleCount : { One:'One',Two:'Two',Four:'Four',Eight:'Eight',EMobileMSAASampleCount_MAX:'EMobileMSAASampleCount_MAX', };
declare type ETranslucentSortPolicy = 'SortByDistance' | 'SortByProjectedZ' | 'SortAlongAxis' | 'ETranslucentSortPolicy_MAX';
declare var ETranslucentSortPolicy : { SortByDistance:'SortByDistance',SortByProjectedZ:'SortByProjectedZ',SortAlongAxis:'SortAlongAxis',ETranslucentSortPolicy_MAX:'ETranslucentSortPolicy_MAX', };
declare type ECustomDepthStencil = 'Disabled' | 'Enabled' | 'EnabledOnDemand' | 'EnabledWithStencil' | 'ECustomDepthStencil_MAX';
declare var ECustomDepthStencil : { Disabled:'Disabled',Enabled:'Enabled',EnabledOnDemand:'EnabledOnDemand',EnabledWithStencil:'EnabledWithStencil',ECustomDepthStencil_MAX:'ECustomDepthStencil_MAX', };
declare type EAlphaChannelMode = 'Disabled' | 'LinearColorSpaceOnly' | 'AllowThroughTonemapper' | 'EAlphaChannelMode_MAX';
declare var EAlphaChannelMode : { Disabled:'Disabled',LinearColorSpaceOnly:'LinearColorSpaceOnly',AllowThroughTonemapper:'AllowThroughTonemapper',EAlphaChannelMode_MAX:'EAlphaChannelMode_MAX', };
declare type EAutoExposureMethodUI = 'AEM_Histogram' | 'AEM_Basic' | 'AEM_Manual' | 'AEM_MAX';
declare var EAutoExposureMethodUI : { AEM_Histogram:'AEM_Histogram',AEM_Basic:'AEM_Basic',AEM_Manual:'AEM_Manual',AEM_MAX:'AEM_MAX', };
declare type EAntiAliasingMethod = 'AAM_None' | 'AAM_FXAA' | 'AAM_TemporalAA' | 'AAM_MSAA' | 'AAM_MAX';
declare var EAntiAliasingMethod : { AAM_None:'AAM_None',AAM_FXAA:'AAM_FXAA',AAM_TemporalAA:'AAM_TemporalAA',AAM_MSAA:'AAM_MSAA',AAM_MAX:'AAM_MAX', };
declare type EDefaultBackBufferPixelFormat = 'DBBPF_B8G8R8A8' | 'DBBPF_A16B16G16R16_DEPRECATED' | 'DBBPF_FloatRGB_DEPRECATED' | 'DBBPF_FloatRGBA' | 'DBBPF_A2B10G10R10' | 'DBBPF_MAX';
declare var EDefaultBackBufferPixelFormat : { DBBPF_B8G8R8A8:'DBBPF_B8G8R8A8',DBBPF_A16B16G16R16_DEPRECATED:'DBBPF_A16B16G16R16_DEPRECATED',DBBPF_FloatRGB_DEPRECATED:'DBBPF_FloatRGB_DEPRECATED',DBBPF_FloatRGBA:'DBBPF_FloatRGBA',DBBPF_A2B10G10R10:'DBBPF_A2B10G10R10',DBBPF_MAX:'DBBPF_MAX', };
declare type EEarlyZPass = 'None' | 'OpaqueOnly' | 'OpaqueAndMasked' | 'Auto' | 'EEarlyZPass_MAX';
declare var EEarlyZPass : { None:'None',OpaqueOnly:'OpaqueOnly',OpaqueAndMasked:'OpaqueAndMasked',Auto:'Auto',EEarlyZPass_MAX:'EEarlyZPass_MAX', };
declare type EClearSceneOptions = 'NoClear' | 'HardwareClear' | 'QuadAtMaxZ' | 'EClearSceneOptions_MAX';
declare var EClearSceneOptions : { NoClear:'NoClear',HardwareClear:'HardwareClear',QuadAtMaxZ:'QuadAtMaxZ',EClearSceneOptions_MAX:'EClearSceneOptions_MAX', };
declare type EGBufferFormat = 'Force8BitsPerChannel' | 'Default' | 'HighPrecisionNormals' | 'Force16BitsPerChannel' | 'EGBufferFormat_MAX';
declare var EGBufferFormat : { Force8BitsPerChannel:'Force8BitsPerChannel',Default:'Default',HighPrecisionNormals:'HighPrecisionNormals',Force16BitsPerChannel:'Force16BitsPerChannel',EGBufferFormat_MAX:'EGBufferFormat_MAX', };
declare class RendererSettings extends DeveloperSettings { 
	bMobileHDR: boolean;
	bMobileDisableVertexFog: boolean;
	MaxMobileCascades: number;
	MobileMSAASampleCount: EMobileMSAASampleCount;
	bMobileUseLegacyShadingModel: boolean;
	bMobileAllowDitheredLODTransition: boolean;
	bMobileAllowSoftwareOcclusionCulling: boolean;
	bDiscardUnusedQualityLevels: boolean;
	bOcclusionCulling: boolean;
	MinScreenRadiusForLights: number;
	MinScreenRadiusForEarlyZPass: number;
	MinScreenRadiusForCSMdepth: number;
	bPrecomputedVisibilityWarning: boolean;
	bTextureStreaming: boolean;
	bUseDXT5NormalMaps: boolean;
	bClearCoatEnableSecondNormal: boolean;
	ReflectionCaptureResolution: number;
	ReflectionEnvironmentLightmapMixBasedOnRoughness: boolean;
	bForwardShading: boolean;
	bVertexFoggingForOpaque: boolean;
	bAllowStaticLighting: boolean;
	bUseNormalMapsForStaticLighting: boolean;
	bGenerateMeshDistanceFields: boolean;
	bEightBitMeshDistanceFields: boolean;
	bGenerateLandscapeGIData: boolean;
	bCompressMeshDistanceFields: boolean;
	TessellationAdaptivePixelsPerTriangle: number;
	bSeparateTranslucency: boolean;
	TranslucentSortPolicy: ETranslucentSortPolicy;
	TranslucentSortAxis: Vector;
	CustomDepthStencil: ECustomDepthStencil;
	bCustomDepthTaaJitter: boolean;
	bEnableAlphaChannelInPostProcessing: EAlphaChannelMode;
	bUseNewAlgorithm: boolean;
	bDefaultFeatureBloom: boolean;
	bDefaultFeatureAmbientOcclusion: boolean;
	bDefaultFeatureAmbientOcclusionStaticFraction: boolean;
	bDefaultFeatureAutoExposure: boolean;
	DefaultFeatureAutoExposure: EAutoExposureMethodUI;
	bExtendDefaultLuminanceRangeInAutoExposureSettings: boolean;
	bUsePreExposure: boolean;
	bDefaultFeatureMotionBlur: boolean;
	bDefaultFeatureLensFlare: boolean;
	bTemporalUpsampling: boolean;
	DefaultFeatureAntiAliasing: EAntiAliasingMethod;
	DefaultLightUnits: ELightUnits;
	DefaultBackBufferPixelFormat: EDefaultBackBufferPixelFormat;
	bRenderUnbuiltPreviewShadowsInGame: boolean;
	bStencilForLODDither: boolean;
	EarlyZPass: EEarlyZPass;
	bEarlyZPassMovable: boolean;
	bEarlyZPassOnlyMaterialMasking: boolean;
	bDBuffer: boolean;
	ClearSceneMethod: EClearSceneOptions;
	bBasePassOutputsVelocity: boolean;
	bSelectiveBasePassOutputs: boolean;
	bDefaultParticleCutouts: boolean;
	GPUSimulationTextureSizeX: number;
	GPUSimulationTextureSizeY: number;
	bGlobalClipPlane: boolean;
	GBufferFormat: EGBufferFormat;
	bUseGPUMorphTargets: boolean;
	bNvidiaAftermathEnabled: boolean;
	bInstancedStereo: boolean;
	bMultiView: boolean;
	bMobileMultiView: boolean;
	bMobileMultiViewDirect: boolean;
	bMonoscopicFarField: boolean;
	bRoundRobinOcclusion: boolean;
	bODSCapture: boolean;
	WireframeCullThreshold: number;
	bSupportStationarySkylight: boolean;
	bSupportLowQualityLightmaps: boolean;
	bSupportPointLightWholeSceneShadows: boolean;
	bSupportAtmosphericFog: boolean;
	bSupportSkinCacheShaders: boolean;
	bMobileEnableStaticAndCSMShadowReceivers: boolean;
	bMobileEnableMovableLightCSMShaderCulling: boolean;
	bMobileAllowDistanceFieldShadows: boolean;
	bMobileAllowMovableDirectionalLights: boolean;
	MobileNumDynamicPointLights: any;
	bMobileDynamicPointLightsUseStaticBranch: boolean;
	SkinCacheSceneMemoryLimitInMB: number;
	bGPUSkinLimit2BoneInfluences: boolean;
	bSupportDepthOnlyIndexBuffers: boolean;
	bSupportReversedIndexBuffers: boolean;
	bSupportMaterialLayers: boolean;
	static Load(ResourceName: string): RendererSettings;
	static Find(Outer: UObject, ResourceName: string): RendererSettings;
	static GetDefaultObject(): RendererSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RendererSettings;
	static C(Other: UObject | any): RendererSettings;
}

declare class RendererOverrideSettings extends DeveloperSettings { 
	bSupportAllShaderPermutations: boolean;
	bForceRecomputeTangents: boolean;
	static Load(ResourceName: string): RendererOverrideSettings;
	static Find(Outer: UObject, ResourceName: string): RendererOverrideSettings;
	static GetDefaultObject(): RendererOverrideSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RendererOverrideSettings;
	static C(Other: UObject | any): RendererOverrideSettings;
}

declare class ReplicationConnectionDriver extends UObject { 
	static Load(ResourceName: string): ReplicationConnectionDriver;
	static Find(Outer: UObject, ResourceName: string): ReplicationConnectionDriver;
	static GetDefaultObject(): ReplicationConnectionDriver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReplicationConnectionDriver;
	static C(Other: UObject | any): ReplicationConnectionDriver;
}

declare class RotatingMovementComponent extends MovementComponent { 
	RotationRate: Rotator;
	PivotTranslation: Vector;
	bRotationInLocalSpace: boolean;
	static Load(ResourceName: string): RotatingMovementComponent;
	static Find(Outer: UObject, ResourceName: string): RotatingMovementComponent;
	static GetDefaultObject(): RotatingMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RotatingMovementComponent;
	static C(Other: UObject | any): RotatingMovementComponent;
}

declare class RVOAvoidanceInterface extends Interface { 
	static Load(ResourceName: string): RVOAvoidanceInterface;
	static Find(Outer: UObject, ResourceName: string): RVOAvoidanceInterface;
	static GetDefaultObject(): RVOAvoidanceInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RVOAvoidanceInterface;
	static C(Other: UObject | any): RVOAvoidanceInterface;
}

declare class Scene extends UObject { 
	static Load(ResourceName: string): Scene;
	static Find(Outer: UObject, ResourceName: string): Scene;
	static GetDefaultObject(): Scene;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Scene;
	static C(Other: UObject | any): Scene;
}

declare type ESceneCaptureSource = 'SCS_SceneColorHDR' | 'SCS_SceneColorHDRNoAlpha' | 'SCS_FinalColorLDR' | 'SCS_SceneColorSceneDepth' | 'SCS_SceneDepth' | 'SCS_DeviceDepth' | 'SCS_Normal' | 'SCS_BaseColor' | 'SCS_MAX';
declare var ESceneCaptureSource : { SCS_SceneColorHDR:'SCS_SceneColorHDR',SCS_SceneColorHDRNoAlpha:'SCS_SceneColorHDRNoAlpha',SCS_FinalColorLDR:'SCS_FinalColorLDR',SCS_SceneColorSceneDepth:'SCS_SceneColorSceneDepth',SCS_SceneDepth:'SCS_SceneDepth',SCS_DeviceDepth:'SCS_DeviceDepth',SCS_Normal:'SCS_Normal',SCS_BaseColor:'SCS_BaseColor',SCS_MAX:'SCS_MAX', };
declare type ESceneCaptureCompositeMode = 'SCCM_Overwrite' | 'SCCM_Additive' | 'SCCM_Composite' | 'SCCM_MAX';
declare var ESceneCaptureCompositeMode : { SCCM_Overwrite:'SCCM_Overwrite',SCCM_Additive:'SCCM_Additive',SCCM_Composite:'SCCM_Composite',SCCM_MAX:'SCCM_MAX', };
declare class SceneCaptureComponent2D extends SceneCaptureComponent { 
	ProjectionType: ECameraProjectionMode;
	FOVAngle: number;
	OrthoWidth: number;
	TextureTarget: TextureRenderTarget2D;
	CaptureSource: ESceneCaptureSource;
	CompositeMode: ESceneCaptureCompositeMode;
	PostProcessSettings: PostProcessSettings;
	PostProcessBlendWeight: number;
	bUseCustomProjectionMatrix: boolean;
	CustomProjectionMatrix: Matrix;
	bEnableClipPlane: boolean;
	ClipPlaneBase: Vector;
	ClipPlaneNormal: Vector;
	bCameraCutThisFrame: boolean;
	static Load(ResourceName: string): SceneCaptureComponent2D;
	static Find(Outer: UObject, ResourceName: string): SceneCaptureComponent2D;
	static GetDefaultObject(): SceneCaptureComponent2D;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCaptureComponent2D;
	CaptureScene(): void;
	static C(Other: UObject | any): SceneCaptureComponent2D;
}

declare class SceneCapture2D extends SceneCapture { 
	CaptureComponent2D: SceneCaptureComponent2D;
	DrawFrustum: DrawFrustumComponent;
	static GetDefaultObject(): SceneCapture2D;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCapture2D;
	OnInterpToggle(bEnable: boolean): void;
	static C(Other: UObject | any): SceneCapture2D;
}

declare class TextureRenderTargetCube extends TextureRenderTarget { 
	SizeX: number;
	ClearColor: LinearColor;
	OverrideFormat: EPixelFormat;
	bHDR: boolean;
	bForceLinearGamma: boolean;
	static Load(ResourceName: string): TextureRenderTargetCube;
	static Find(Outer: UObject, ResourceName: string): TextureRenderTargetCube;
	static GetDefaultObject(): TextureRenderTargetCube;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextureRenderTargetCube;
	static C(Other: UObject | any): TextureRenderTargetCube;
}

declare class SceneCaptureComponentCube extends SceneCaptureComponent { 
	TextureTarget: TextureRenderTargetCube;
	TextureTargetLeft: TextureRenderTargetCube;
	TextureTargetRight: TextureRenderTargetCube;
	TextureTargetODS: TextureRenderTarget2D;
	IPD: number;
	static Load(ResourceName: string): SceneCaptureComponentCube;
	static Find(Outer: UObject, ResourceName: string): SceneCaptureComponentCube;
	static GetDefaultObject(): SceneCaptureComponentCube;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCaptureComponentCube;
	CaptureScene(): void;
	static C(Other: UObject | any): SceneCaptureComponentCube;
}

declare class SceneCaptureCube extends SceneCapture { 
	CaptureComponentCube: SceneCaptureComponentCube;
	DrawFrustum: DrawFrustumComponent;
	static GetDefaultObject(): SceneCaptureCube;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCaptureCube;
	OnInterpToggle(bEnable: boolean): void;
	static C(Other: UObject | any): SceneCaptureCube;
}

declare type EShadowMapFlags = 'SMF_None' | 'SMF_Streamed' | 'SMF_MAX';
declare var EShadowMapFlags : { SMF_None:'SMF_None',SMF_Streamed:'SMF_Streamed',SMF_MAX:'SMF_MAX', };
declare class ShadowMapTexture2D extends Texture2D { 
	ShadowmapFlags: EShadowMapFlags;
	static Load(ResourceName: string): ShadowMapTexture2D;
	static Find(Outer: UObject, ResourceName: string): ShadowMapTexture2D;
	static GetDefaultObject(): ShadowMapTexture2D;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShadowMapTexture2D;
	static C(Other: UObject | any): ShadowMapTexture2D;
}

declare type ESkyLightSourceType = 'SLS_CapturedScene' | 'SLS_SpecifiedCubemap' | 'SLS_MAX';
declare var ESkyLightSourceType : { SLS_CapturedScene:'SLS_CapturedScene',SLS_SpecifiedCubemap:'SLS_SpecifiedCubemap',SLS_MAX:'SLS_MAX', };
declare type EOcclusionCombineMode = 'OCM_Minimum' | 'OCM_Multiply' | 'OCM_MAX';
declare var EOcclusionCombineMode : { OCM_Minimum:'OCM_Minimum',OCM_Multiply:'OCM_Multiply',OCM_MAX:'OCM_MAX', };
declare class SkyLightComponent extends LightComponentBase { 
	SourceType: ESkyLightSourceType;
	Cubemap: TextureCube;
	SourceCubemapAngle: number;
	CubemapResolution: number;
	SkyDistanceThreshold: number;
	bCaptureEmissiveOnly: boolean;
	bLowerHemisphereIsBlack: boolean;
	LowerHemisphereColor: LinearColor;
	OcclusionMaxDistance: number;
	Contrast: number;
	OcclusionExponent: number;
	MinOcclusion: number;
	OcclusionTint: Color;
	OcclusionCombineMode: EOcclusionCombineMode;
	BlendDestinationCubemap: TextureCube;
	static Load(ResourceName: string): SkyLightComponent;
	static Find(Outer: UObject, ResourceName: string): SkyLightComponent;
	static GetDefaultObject(): SkyLightComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkyLightComponent;
	SetVolumetricScatteringIntensity(NewIntensity: number): void;
	SetOcclusionTint(InTint: Color): void;
	SetOcclusionExponent(InOcclusionExponent: number): void;
	SetOcclusionContrast(InOcclusionContrast: number): void;
	SetMinOcclusion(InMinOcclusion: number): void;
	SetLowerHemisphereColor(InLowerHemisphereColor: LinearColor): void;
	SetLightColor(NewLightColor: LinearColor): void;
	SetIntensity(NewIntensity: number): void;
	SetIndirectLightingIntensity(NewIntensity: number): void;
	SetCubemapBlend(SourceCubemap: TextureCube,DestinationCubemap: TextureCube,InBlendFraction: number): void;
	SetCubemap(NewCubemap: TextureCube): void;
	RecaptureSky(): void;
	static C(Other: UObject | any): SkyLightComponent;
}

declare class SkyLight extends Info { 
	LightComponent: SkyLightComponent;
	bEnabled: boolean;
	static GetDefaultObject(): SkyLight;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkyLight;
	OnRep_bEnabled(): void;
	static C(Other: UObject | any): SkyLight;
}

declare class SlateTextureAtlasInterface extends Interface { 
	static Load(ResourceName: string): SlateTextureAtlasInterface;
	static Find(Outer: UObject, ResourceName: string): SlateTextureAtlasInterface;
	static GetDefaultObject(): SlateTextureAtlasInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SlateTextureAtlasInterface;
	static C(Other: UObject | any): SlateTextureAtlasInterface;
}

declare class SmokeTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): SmokeTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): SmokeTestCommandlet;
	static GetDefaultObject(): SmokeTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmokeTestCommandlet;
	static C(Other: UObject | any): SmokeTestCommandlet;
}

declare class SoundGroup { 
	SoundGroup: ESoundGroup;
	DisplayName: string;
	bAlwaysDecompressOnLoad: boolean;
	DecompressedDuration: number;
	clone() : SoundGroup;
	static C(Other: UObject | any): SoundGroup;
}

declare class SoundGroups extends UObject { 
	SoundGroupProfiles: SoundGroup[];
	static Load(ResourceName: string): SoundGroups;
	static Find(Outer: UObject, ResourceName: string): SoundGroups;
	static GetDefaultObject(): SoundGroups;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundGroups;
	static C(Other: UObject | any): SoundGroups;
}

declare class SoundNodeAssetReferencer extends SoundNode { 
	static Load(ResourceName: string): SoundNodeAssetReferencer;
	static Find(Outer: UObject, ResourceName: string): SoundNodeAssetReferencer;
	static GetDefaultObject(): SoundNodeAssetReferencer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeAssetReferencer;
	static C(Other: UObject | any): SoundNodeAssetReferencer;
}

declare class SoundNodeAttenuation extends SoundNode { 
	AttenuationSettings: SoundAttenuation;
	AttenuationOverrides: SoundAttenuationSettings;
	bOverrideAttenuation: boolean;
	static Load(ResourceName: string): SoundNodeAttenuation;
	static Find(Outer: UObject, ResourceName: string): SoundNodeAttenuation;
	static GetDefaultObject(): SoundNodeAttenuation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeAttenuation;
	static C(Other: UObject | any): SoundNodeAttenuation;
}

declare class SoundNodeBranch extends SoundNode { 
	BoolParameterName: string;
	static Load(ResourceName: string): SoundNodeBranch;
	static Find(Outer: UObject, ResourceName: string): SoundNodeBranch;
	static GetDefaultObject(): SoundNodeBranch;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeBranch;
	static C(Other: UObject | any): SoundNodeBranch;
}

declare class SoundNodeConcatenator extends SoundNode { 
	InputVolume: number[];
	static Load(ResourceName: string): SoundNodeConcatenator;
	static Find(Outer: UObject, ResourceName: string): SoundNodeConcatenator;
	static GetDefaultObject(): SoundNodeConcatenator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeConcatenator;
	static C(Other: UObject | any): SoundNodeConcatenator;
}

declare class SoundNodeDelay extends SoundNode { 
	DelayMin: number;
	DelayMax: number;
	static Load(ResourceName: string): SoundNodeDelay;
	static Find(Outer: UObject, ResourceName: string): SoundNodeDelay;
	static GetDefaultObject(): SoundNodeDelay;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDelay;
	static C(Other: UObject | any): SoundNodeDelay;
}

declare class DialogueWaveParameter { 
	DialogueWave: DialogueWave;
	Context: DialogueContext;
	clone() : DialogueWaveParameter;
	static C(Other: UObject | any): DialogueWaveParameter;
}

declare class SoundNodeDialoguePlayer extends SoundNode { 
	DialogueWaveParameter: DialogueWaveParameter;
	bLooping: boolean;
	static Load(ResourceName: string): SoundNodeDialoguePlayer;
	static Find(Outer: UObject, ResourceName: string): SoundNodeDialoguePlayer;
	static GetDefaultObject(): SoundNodeDialoguePlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDialoguePlayer;
	static C(Other: UObject | any): SoundNodeDialoguePlayer;
}

declare class DistanceDatum { 
	FadeInDistanceStart: number;
	FadeInDistanceEnd: number;
	FadeOutDistanceStart: number;
	FadeOutDistanceEnd: number;
	Volume: number;
	clone() : DistanceDatum;
	static C(Other: UObject | any): DistanceDatum;
}

declare class SoundNodeDistanceCrossFade extends SoundNode { 
	CrossFadeInput: DistanceDatum[];
	static Load(ResourceName: string): SoundNodeDistanceCrossFade;
	static Find(Outer: UObject, ResourceName: string): SoundNodeDistanceCrossFade;
	static GetDefaultObject(): SoundNodeDistanceCrossFade;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDistanceCrossFade;
	static C(Other: UObject | any): SoundNodeDistanceCrossFade;
}

declare class SoundNodeDoppler extends SoundNode { 
	DopplerIntensity: number;
	static Load(ResourceName: string): SoundNodeDoppler;
	static Find(Outer: UObject, ResourceName: string): SoundNodeDoppler;
	static GetDefaultObject(): SoundNodeDoppler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDoppler;
	static C(Other: UObject | any): SoundNodeDoppler;
}

declare class SoundNodeEnveloper extends SoundNode { 
	LoopStart: number;
	LoopEnd: number;
	DurationAfterLoop: number;
	LoopCount: number;
	bLoopIndefinitely: boolean;
	bLoop: boolean;
	VolumeInterpCurve: DistributionFloatConstantCurve;
	PitchInterpCurve: DistributionFloatConstantCurve;
	VolumeCurve: RuntimeFloatCurve;
	PitchCurve: RuntimeFloatCurve;
	PitchMin: number;
	PitchMax: number;
	VolumeMin: number;
	VolumeMax: number;
	static Load(ResourceName: string): SoundNodeEnveloper;
	static Find(Outer: UObject, ResourceName: string): SoundNodeEnveloper;
	static GetDefaultObject(): SoundNodeEnveloper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeEnveloper;
	static C(Other: UObject | any): SoundNodeEnveloper;
}

declare class SoundNodeGroupControl extends SoundNode { 
	GroupSizes: number[];
	static Load(ResourceName: string): SoundNodeGroupControl;
	static Find(Outer: UObject, ResourceName: string): SoundNodeGroupControl;
	static GetDefaultObject(): SoundNodeGroupControl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeGroupControl;
	static C(Other: UObject | any): SoundNodeGroupControl;
}

declare class SoundNodeLooping extends SoundNode { 
	LoopCount: number;
	bLoopIndefinitely: boolean;
	static Load(ResourceName: string): SoundNodeLooping;
	static Find(Outer: UObject, ResourceName: string): SoundNodeLooping;
	static GetDefaultObject(): SoundNodeLooping;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeLooping;
	static C(Other: UObject | any): SoundNodeLooping;
}

declare class SoundNodeMature extends SoundNode { 
	static Load(ResourceName: string): SoundNodeMature;
	static Find(Outer: UObject, ResourceName: string): SoundNodeMature;
	static GetDefaultObject(): SoundNodeMature;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeMature;
	static C(Other: UObject | any): SoundNodeMature;
}

declare class SoundNodeMixer extends SoundNode { 
	InputVolume: number[];
	static Load(ResourceName: string): SoundNodeMixer;
	static Find(Outer: UObject, ResourceName: string): SoundNodeMixer;
	static GetDefaultObject(): SoundNodeMixer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeMixer;
	static C(Other: UObject | any): SoundNodeMixer;
}

declare class SoundNodeModulator extends SoundNode { 
	PitchMin: number;
	PitchMax: number;
	VolumeMin: number;
	VolumeMax: number;
	static Load(ResourceName: string): SoundNodeModulator;
	static Find(Outer: UObject, ResourceName: string): SoundNodeModulator;
	static GetDefaultObject(): SoundNodeModulator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeModulator;
	static C(Other: UObject | any): SoundNodeModulator;
}

declare type ModulationParamMode = 'MPM_Normal' | 'MPM_Abs' | 'MPM_Direct' | 'MPM_MAX';
declare var ModulationParamMode : { MPM_Normal:'MPM_Normal',MPM_Abs:'MPM_Abs',MPM_Direct:'MPM_Direct',MPM_MAX:'MPM_MAX', };
declare class ModulatorContinuousParams { 
	ParameterName: string;
	Default: number;
	MinInput: number;
	MaxInput: number;
	MinOutput: number;
	MaxOutput: number;
	ParamMode: ModulationParamMode;
	clone() : ModulatorContinuousParams;
	static C(Other: UObject | any): ModulatorContinuousParams;
}

declare class SoundNodeModulatorContinuous extends SoundNode { 
	PitchModulationParams: ModulatorContinuousParams;
	VolumeModulationParams: ModulatorContinuousParams;
	static Load(ResourceName: string): SoundNodeModulatorContinuous;
	static Find(Outer: UObject, ResourceName: string): SoundNodeModulatorContinuous;
	static GetDefaultObject(): SoundNodeModulatorContinuous;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeModulatorContinuous;
	static C(Other: UObject | any): SoundNodeModulatorContinuous;
}

declare class SoundNodeOscillator extends SoundNode { 
	bModulateVolume: boolean;
	bModulatePitch: boolean;
	AmplitudeMin: number;
	AmplitudeMax: number;
	FrequencyMin: number;
	FrequencyMax: number;
	OffsetMin: number;
	OffsetMax: number;
	CenterMin: number;
	CenterMax: number;
	static Load(ResourceName: string): SoundNodeOscillator;
	static Find(Outer: UObject, ResourceName: string): SoundNodeOscillator;
	static GetDefaultObject(): SoundNodeOscillator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeOscillator;
	static C(Other: UObject | any): SoundNodeOscillator;
}

declare class SoundNodeParamCrossFade extends SoundNodeDistanceCrossFade { 
	ParamName: string;
	static Load(ResourceName: string): SoundNodeParamCrossFade;
	static Find(Outer: UObject, ResourceName: string): SoundNodeParamCrossFade;
	static GetDefaultObject(): SoundNodeParamCrossFade;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeParamCrossFade;
	static C(Other: UObject | any): SoundNodeParamCrossFade;
}

declare class SoundNodeQualityLevel extends SoundNode { 
	static Load(ResourceName: string): SoundNodeQualityLevel;
	static Find(Outer: UObject, ResourceName: string): SoundNodeQualityLevel;
	static GetDefaultObject(): SoundNodeQualityLevel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeQualityLevel;
	static C(Other: UObject | any): SoundNodeQualityLevel;
}

declare class SoundNodeRandom extends SoundNode { 
	Weights: number[];
	PreselectAtLevelLoad: number;
	bShouldExcludeFromBranchCulling: boolean;
	bSoundCueExcludedFromBranchCulling: boolean;
	bRandomizeWithoutReplacement: boolean;
	HasBeenUsed: boolean[];
	NumRandomUsed: number;
	PIEHiddenNodes: number[];
	static Load(ResourceName: string): SoundNodeRandom;
	static Find(Outer: UObject, ResourceName: string): SoundNodeRandom;
	static GetDefaultObject(): SoundNodeRandom;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeRandom;
	static C(Other: UObject | any): SoundNodeRandom;
}

declare class SoundNodeSoundClass extends SoundNode { 
	SoundClassOverride: SoundClass;
	static Load(ResourceName: string): SoundNodeSoundClass;
	static Find(Outer: UObject, ResourceName: string): SoundNodeSoundClass;
	static GetDefaultObject(): SoundNodeSoundClass;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeSoundClass;
	static C(Other: UObject | any): SoundNodeSoundClass;
}

declare class SoundNodeSwitch extends SoundNode { 
	IntParameterName: string;
	static Load(ResourceName: string): SoundNodeSwitch;
	static Find(Outer: UObject, ResourceName: string): SoundNodeSwitch;
	static GetDefaultObject(): SoundNodeSwitch;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeSwitch;
	static C(Other: UObject | any): SoundNodeSwitch;
}

declare class SoundNodeWaveParam extends SoundNode { 
	WaveParameterName: string;
	static Load(ResourceName: string): SoundNodeWaveParam;
	static Find(Outer: UObject, ResourceName: string): SoundNodeWaveParam;
	static GetDefaultObject(): SoundNodeWaveParam;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeWaveParam;
	static C(Other: UObject | any): SoundNodeWaveParam;
}

declare class SoundNodeWavePlayer extends SoundNodeAssetReferencer { 
	SoundWaveAssetPtr: SoundWave;
	SoundWave: SoundWave;
	bLooping: boolean;
	static Load(ResourceName: string): SoundNodeWavePlayer;
	static Find(Outer: UObject, ResourceName: string): SoundNodeWavePlayer;
	static GetDefaultObject(): SoundNodeWavePlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeWavePlayer;
	static C(Other: UObject | any): SoundNodeWavePlayer;
}

declare class SpectatorPawnMovement extends FloatingPawnMovement { 
	bIgnoreTimeDilation: boolean;
	static Load(ResourceName: string): SpectatorPawnMovement;
	static Find(Outer: UObject, ResourceName: string): SpectatorPawnMovement;
	static GetDefaultObject(): SpectatorPawnMovement;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpectatorPawnMovement;
	static C(Other: UObject | any): SpectatorPawnMovement;
}

declare class SphereReflectionCapture extends ReflectionCapture { 
	DrawCaptureRadius: DrawSphereComponent;
	static GetDefaultObject(): SphereReflectionCapture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SphereReflectionCapture;
	static C(Other: UObject | any): SphereReflectionCapture;
}

declare class SphereReflectionCaptureComponent extends ReflectionCaptureComponent { 
	InfluenceRadius: number;
	CaptureDistanceScale: number;
	PreviewInfluenceRadius: DrawSphereComponent;
	static Load(ResourceName: string): SphereReflectionCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): SphereReflectionCaptureComponent;
	static GetDefaultObject(): SphereReflectionCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SphereReflectionCaptureComponent;
	static C(Other: UObject | any): SphereReflectionCaptureComponent;
}

declare class SplineMeshActor extends Actor { 
	SplineMeshComponent: SplineMeshComponent;
	static GetDefaultObject(): SplineMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplineMeshActor;
	static C(Other: UObject | any): SplineMeshActor;
}

declare class SpringArmComponent extends SceneComponent { 
	TargetArmLength: number;
	SocketOffset: Vector;
	TargetOffset: Vector;
	ProbeSize: number;
	ProbeChannel: ECollisionChannel;
	bDoCollisionTest: boolean;
	bUsePawnControlRotation: boolean;
	bInheritPitch: boolean;
	bInheritYaw: boolean;
	bInheritRoll: boolean;
	bEnableCameraLag: boolean;
	bEnableCameraRotationLag: boolean;
	bUseCameraLagSubstepping: boolean;
	bDrawDebugLagMarkers: boolean;
	CameraLagSpeed: number;
	CameraRotationLagSpeed: number;
	CameraLagMaxTimeStep: number;
	CameraLagMaxDistance: number;
	static Load(ResourceName: string): SpringArmComponent;
	static Find(Outer: UObject, ResourceName: string): SpringArmComponent;
	static GetDefaultObject(): SpringArmComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpringArmComponent;
	IsCollisionFixApplied(): boolean;
	GetUnfixedCameraPosition(): Vector;
	GetTargetRotation(): Rotator;
	static C(Other: UObject | any): SpringArmComponent;
}

declare type EStereoLayerType = 'SLT_WorldLocked' | 'SLT_TrackerLocked' | 'SLT_FaceLocked' | 'SLT_MAX';
declare var EStereoLayerType : { SLT_WorldLocked:'SLT_WorldLocked',SLT_TrackerLocked:'SLT_TrackerLocked',SLT_FaceLocked:'SLT_FaceLocked',SLT_MAX:'SLT_MAX', };
declare type EStereoLayerShape = 'SLSH_QuadLayer' | 'SLSH_CylinderLayer' | 'SLSH_CubemapLayer' | 'SLSH_MAX';
declare var EStereoLayerShape : { SLSH_QuadLayer:'SLSH_QuadLayer',SLSH_CylinderLayer:'SLSH_CylinderLayer',SLSH_CubemapLayer:'SLSH_CubemapLayer',SLSH_MAX:'SLSH_MAX', };
declare class StereoLayerComponent extends SceneComponent { 
	bLiveTexture: boolean;
	bSupportsDepth: boolean;
	bNoAlphaChannel: boolean;
	Texture: Texture;
	LeftTexture: Texture;
	bQuadPreserveTextureRatio: boolean;
	QuadSize: Vector2D;
	UVRect: Box2D;
	CylinderRadius: number;
	CylinderOverlayArc: number;
	CylinderHeight: number;
	StereoLayerType: EStereoLayerType;
	StereoLayerShape: EStereoLayerShape;
	Priority: number;
	static Load(ResourceName: string): StereoLayerComponent;
	static Find(Outer: UObject, ResourceName: string): StereoLayerComponent;
	static GetDefaultObject(): StereoLayerComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StereoLayerComponent;
	SetUVRect(InUVRect: Box2D): void;
	SetTexture(InTexture: Texture): void;
	SetQuadSize(InQuadSize: Vector2D): void;
	SetPriority(InPriority: number): void;
	MarkTextureForUpdate(): void;
	GetUVRect(): Box2D;
	GetTexture(): Texture;
	GetQuadSize(): Vector2D;
	GetPriority(): number;
	static C(Other: UObject | any): StereoLayerComponent;
}

declare class StereoLayerFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): StereoLayerFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): StereoLayerFunctionLibrary;
	static GetDefaultObject(): StereoLayerFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StereoLayerFunctionLibrary;
	static ShowSplashScreen(): void;
	static SetSplashScreen(Texture: Texture,Scale: Vector2D,Offset: Vector2D,bShowLoadingMovie: boolean,bShowOnSet: boolean): void;
	static HideSplashScreen(): void;
	static EnableAutoLoadingSplashScreen(InAutoShowEnabled: boolean): void;
	static C(Other: UObject | any): StereoLayerFunctionLibrary;
}

declare class StringTable extends UObject { 
	static Load(ResourceName: string): StringTable;
	static Find(Outer: UObject, ResourceName: string): StringTable;
	static GetDefaultObject(): StringTable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StringTable;
	static C(Other: UObject | any): StringTable;
}

declare class SystemTimeTimecodeProvider extends TimecodeProvider { 
	FrameRate: FrameRate;
	static Load(ResourceName: string): SystemTimeTimecodeProvider;
	static Find(Outer: UObject, ResourceName: string): SystemTimeTimecodeProvider;
	static GetDefaultObject(): SystemTimeTimecodeProvider;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SystemTimeTimecodeProvider;
	SetFrameRate(InFrameRate: FrameRate): void;
	static C(Other: UObject | any): SystemTimeTimecodeProvider;
}

declare class TargetPoint extends Actor { 
	SpriteComponent: BillboardComponent;
	ArrowComponent: ArrowComponent;
	static GetDefaultObject(): TargetPoint;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TargetPoint;
	static C(Other: UObject | any): TargetPoint;
}

declare class TextPropertyTestObject extends UObject { 
	DefaultedText: string;
	UndefaultedText: string;
	TransientText: string;
	static Load(ResourceName: string): TextPropertyTestObject;
	static Find(Outer: UObject, ResourceName: string): TextPropertyTestObject;
	static GetDefaultObject(): TextPropertyTestObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextPropertyTestObject;
	static C(Other: UObject | any): TextPropertyTestObject;
}

declare class TextRenderActor extends Actor { 
	TextRender: TextRenderComponent;
	SpriteComponent: BillboardComponent;
	static GetDefaultObject(): TextRenderActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextRenderActor;
	static C(Other: UObject | any): TextRenderActor;
}

declare class TimelineEventEntry { 
	Time: number;
	EventFunc: UnrealEngineDelegate<() => void>;
	clone() : TimelineEventEntry;
	static C(Other: UObject | any): TimelineEventEntry;
}

declare class TimelineVectorTrack { 
	VectorCurve: CurveVector;
	InterpFunc: UnrealEngineDelegate<(Output: Vector) => void>;
	TrackName: string;
	VectorPropertyName: string;
	VectorProperty: StructProperty;
	clone() : TimelineVectorTrack;
	static C(Other: UObject | any): TimelineVectorTrack;
}

declare class TimelineFloatTrack { 
	FloatCurve: CurveFloat;
	InterpFunc: UnrealEngineDelegate<(Output: number) => void>;
	TrackName: string;
	FloatPropertyName: string;
	FloatProperty: FloatProperty;
	clone() : TimelineFloatTrack;
	static C(Other: UObject | any): TimelineFloatTrack;
}

declare class TimelineLinearColorTrack { 
	LinearColorCurve: CurveLinearColor;
	InterpFunc: UnrealEngineDelegate<(Output: LinearColor) => void>;
	TrackName: string;
	LinearColorPropertyName: string;
	LinearColorProperty: StructProperty;
	clone() : TimelineLinearColorTrack;
	static C(Other: UObject | any): TimelineLinearColorTrack;
}

declare class Timeline { 
	LengthMode: ETimelineLengthMode;
	bLooping: boolean;
	bReversePlayback: boolean;
	bPlaying: boolean;
	Length: number;
	PlayRate: number;
	Position: number;
	Events: TimelineEventEntry[];
	InterpVectors: TimelineVectorTrack[];
	InterpFloats: TimelineFloatTrack[];
	InterpLinearColors: TimelineLinearColorTrack[];
	TimelinePostUpdateFunc: UnrealEngineDelegate<() => void>;
	TimelineFinishedFunc: UnrealEngineDelegate<() => void>;
	PropertySetObject: any;
	DirectionPropertyName: string;
	DirectionProperty: Property;
	clone() : Timeline;
	static C(Other: UObject | any): Timeline;
}

declare class TimelineComponent extends ActorComponent { 
	TheTimeline: Timeline;
	bIgnoreTimeDilation: boolean;
	static Load(ResourceName: string): TimelineComponent;
	static Find(Outer: UObject, ResourceName: string): TimelineComponent;
	static GetDefaultObject(): TimelineComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TimelineComponent;
	Stop(): void;
	SetVectorCurve(NewVectorCurve: CurveVector,VectorTrackName: string): void;
	SetTimelineLengthMode(NewLengthMode: ETimelineLengthMode): void;
	SetTimelineLength(NewLength: number): void;
	SetPlayRate(NewRate: number): void;
	SetPlaybackPosition(NewPosition: number,bFireEvents: boolean,bFireUpdate: boolean): void;
	SetNewTime(NewTime: number): void;
	SetLooping(bNewLooping: boolean): void;
	SetLinearColorCurve(NewLinearColorCurve: CurveLinearColor,LinearColorTrackName: string): void;
	SetIgnoreTimeDilation(bNewIgnoreTimeDilation: boolean): void;
	SetFloatCurve(NewFloatCurve: CurveFloat,FloatTrackName: string): void;
	ReverseFromEnd(): void;
	Reverse(): void;
	PlayFromStart(): void;
	Play(): void;
	OnRep_Timeline(): void;
	IsReversing(): boolean;
	IsPlaying(): boolean;
	IsLooping(): boolean;
	GetTimelineLength(): number;
	GetPlayRate(): number;
	GetPlaybackPosition(): number;
	GetIgnoreTimeDilation(): boolean;
	static C(Other: UObject | any): TimelineComponent;
}

declare class TriggerBase extends Actor { 
	CollisionComponent: ShapeComponent;
	SpriteComponent: BillboardComponent;
	static GetDefaultObject(): TriggerBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TriggerBase;
	static C(Other: UObject | any): TriggerBase;
}

declare class TriggerBox extends TriggerBase { 
	static GetDefaultObject(): TriggerBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TriggerBox;
	static C(Other: UObject | any): TriggerBox;
}

declare class TriggerCapsule extends TriggerBase { 
	static GetDefaultObject(): TriggerCapsule;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TriggerCapsule;
	static C(Other: UObject | any): TriggerCapsule;
}

declare class TriggerSphere extends TriggerBase { 
	static GetDefaultObject(): TriggerSphere;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TriggerSphere;
	static C(Other: UObject | any): TriggerSphere;
}

declare class TriggerVolume extends Volume { 
	static GetDefaultObject(): TriggerVolume;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TriggerVolume;
	static C(Other: UObject | any): TriggerVolume;
}

declare type ETwitterRequestMethod = 'TRM_Get' | 'TRM_Post' | 'TRM_Delete' | 'TRM_MAX';
declare var ETwitterRequestMethod : { TRM_Get:'TRM_Get',TRM_Post:'TRM_Post',TRM_Delete:'TRM_Delete',TRM_MAX:'TRM_MAX', };
declare class TwitterIntegrationBase extends PlatformInterfaceBase { 
	static Load(ResourceName: string): TwitterIntegrationBase;
	static Find(Outer: UObject, ResourceName: string): TwitterIntegrationBase;
	static GetDefaultObject(): TwitterIntegrationBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TwitterIntegrationBase;
	TwitterRequest(URL: string,ParamKeysAndValues: string[],RequestMethod: ETwitterRequestMethod,AccountIndex: number): boolean;
	ShowTweetUI(InitialMessage: string,URL: string,Picture: string): boolean;
	Init(): void;
	GetNumAccounts(): number;
	GetAccountName(AccountIndex: number): string;
	CanShowTweetUI(): boolean;
	AuthorizeAccounts(): boolean;
	static C(Other: UObject | any): TwitterIntegrationBase;
}

declare class UserDefinedEnum extends Enum { 
	UniqueNameIndex: any;
	EnumDescription: string;
	DisplayNameMap: any;
	static Load(ResourceName: string): UserDefinedEnum;
	static Find(Outer: UObject, ResourceName: string): UserDefinedEnum;
	static GetDefaultObject(): UserDefinedEnum;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UserDefinedEnum;
	static C(Other: UObject | any): UserDefinedEnum;
}

declare type ERenderFocusRule = 'Always' | 'NonPointer' | 'NavigationOnly' | 'Never' | 'ERenderFocusRule_MAX';
declare var ERenderFocusRule : { Always:'Always',NonPointer:'NonPointer',NavigationOnly:'NavigationOnly',Never:'Never',ERenderFocusRule_MAX:'ERenderFocusRule_MAX', };
declare type EUIScalingRule = 'ShortestSide' | 'LongestSide' | 'Horizontal' | 'Vertical' | 'Custom' | 'EUIScalingRule_MAX';
declare var EUIScalingRule : { ShortestSide:'ShortestSide',LongestSide:'LongestSide',Horizontal:'Horizontal',Vertical:'Vertical',Custom:'Custom',EUIScalingRule_MAX:'EUIScalingRule_MAX', };
declare class UserInterfaceSettings extends DeveloperSettings { 
	RenderFocusRule: ERenderFocusRule;
	HardwareCursors: any;
	SoftwareCursors: any;
	DefaultCursor: SoftClassPath;
	TextEditBeamCursor: SoftClassPath;
	CrosshairsCursor: SoftClassPath;
	HandCursor: SoftClassPath;
	GrabHandCursor: SoftClassPath;
	GrabHandClosedCursor: SoftClassPath;
	SlashedCircleCursor: SoftClassPath;
	ApplicationScale: number;
	UIScaleRule: EUIScalingRule;
	CustomScalingRuleClass: SoftClassPath;
	UIScaleCurve: RuntimeFloatCurve;
	bAllowHighDPIInGameMode: boolean;
	bLoadWidgetsOnDedicatedServer: boolean;
	CursorClasses: UObject[];
	CustomScalingRuleClassInstance: UnrealEngineClass;
	CustomScalingRule: DPICustomScalingRule;
	static Load(ResourceName: string): UserInterfaceSettings;
	static Find(Outer: UObject, ResourceName: string): UserInterfaceSettings;
	static GetDefaultObject(): UserInterfaceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UserInterfaceSettings;
	static C(Other: UObject | any): UserInterfaceSettings;
}

declare type EVectorFieldConstructionOp = 'VFCO_Extrude' | 'VFCO_Revolve' | 'VFCO_MAX';
declare var EVectorFieldConstructionOp : { VFCO_Extrude:'VFCO_Extrude',VFCO_Revolve:'VFCO_Revolve',VFCO_MAX:'VFCO_MAX', };
declare class VectorFieldStatic extends VectorField { 
	SizeX: number;
	SizeY: number;
	SizeZ: number;
	SourceFilePath: string;
	AssetImportData: AssetImportData;
	static Load(ResourceName: string): VectorFieldStatic;
	static Find(Outer: UObject, ResourceName: string): VectorFieldStatic;
	static GetDefaultObject(): VectorFieldStatic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldStatic;
	static C(Other: UObject | any): VectorFieldStatic;
}

declare class VectorFieldAnimated extends VectorField { 
	Texture: Texture2D;
	ConstructionOp: EVectorFieldConstructionOp;
	VolumeSizeX: number;
	VolumeSizeY: number;
	VolumeSizeZ: number;
	SubImagesX: number;
	SubImagesY: number;
	FrameCount: number;
	FramesPerSecond: number;
	bLoop: boolean;
	NoiseField: VectorFieldStatic;
	NoiseScale: number;
	NoiseMax: number;
	static Load(ResourceName: string): VectorFieldAnimated;
	static Find(Outer: UObject, ResourceName: string): VectorFieldAnimated;
	static GetDefaultObject(): VectorFieldAnimated;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldAnimated;
	static C(Other: UObject | any): VectorFieldAnimated;
}

declare class VectorFieldComponent extends PrimitiveComponent { 
	VectorField: VectorField;
	Intensity: number;
	Tightness: number;
	bPreviewVectorField: boolean;
	static Load(ResourceName: string): VectorFieldComponent;
	static Find(Outer: UObject, ResourceName: string): VectorFieldComponent;
	static GetDefaultObject(): VectorFieldComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldComponent;
	SetIntensity(NewIntensity: number): void;
	static C(Other: UObject | any): VectorFieldComponent;
}

declare class VectorFieldVolume extends Actor { 
	VectorFieldComponent: VectorFieldComponent;
	SpriteComponent: BillboardComponent;
	static GetDefaultObject(): VectorFieldVolume;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldVolume;
	static C(Other: UObject | any): VectorFieldVolume;
}

declare class VirtualTextureLayer { 
	Format: ETextureSourceFormat;
	bCompressed: boolean;
	bHasAlpha: boolean;
	CompressionSettings: TextureCompressionSettings;
	clone() : VirtualTextureLayer;
	static C(Other: UObject | any): VirtualTextureLayer;
}

declare type PageTableFormat = 'PTF_16' | 'PTF_32' | 'PTF_MAX';
declare var PageTableFormat : { PTF_16:'PTF_16',PTF_32:'PTF_32',PTF_MAX:'PTF_MAX', };
declare class VirtualTextureSpace extends UObject { 
	Layers: VirtualTextureLayer[];
	TileSize: number;
	BorderWidth: number;
	Size: number;
	Dimensions: number;
	Format: PageTableFormat;
	PoolSize: number;
	static Load(ResourceName: string): VirtualTextureSpace;
	static Find(Outer: UObject, ResourceName: string): VirtualTextureSpace;
	static GetDefaultObject(): VirtualTextureSpace;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VirtualTextureSpace;
	static C(Other: UObject | any): VirtualTextureSpace;
}

declare class VirtualTexture extends UObject { 
	Layers: Texture[];
	Space: VirtualTextureSpace;
	Rebuild: boolean;
	static Load(ResourceName: string): VirtualTexture;
	static Find(Outer: UObject, ResourceName: string): VirtualTexture;
	static GetDefaultObject(): VirtualTexture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VirtualTexture;
	static C(Other: UObject | any): VirtualTexture;
}

declare class LightMapVirtualTexture extends VirtualTexture { 
	LayerFlags: number;
	static Load(ResourceName: string): LightMapVirtualTexture;
	static Find(Outer: UObject, ResourceName: string): LightMapVirtualTexture;
	static GetDefaultObject(): LightMapVirtualTexture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightMapVirtualTexture;
	static C(Other: UObject | any): LightMapVirtualTexture;
}

declare class LightMapVirtualTextureSpace extends VirtualTextureSpace { 
	static Load(ResourceName: string): LightMapVirtualTextureSpace;
	static Find(Outer: UObject, ResourceName: string): LightMapVirtualTextureSpace;
	static GetDefaultObject(): LightMapVirtualTextureSpace;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightMapVirtualTextureSpace;
	static C(Other: UObject | any): LightMapVirtualTextureSpace;
}

declare class VisualLoggerAutomationTests extends UObject { 
	static Load(ResourceName: string): VisualLoggerAutomationTests;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerAutomationTests;
	static GetDefaultObject(): VisualLoggerAutomationTests;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerAutomationTests;
	static C(Other: UObject | any): VisualLoggerAutomationTests;
}

declare class VisualLoggerDebugSnapshotInterface extends Interface { 
	static Load(ResourceName: string): VisualLoggerDebugSnapshotInterface;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerDebugSnapshotInterface;
	static GetDefaultObject(): VisualLoggerDebugSnapshotInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerDebugSnapshotInterface;
	static C(Other: UObject | any): VisualLoggerDebugSnapshotInterface;
}

declare class VisualLoggerKismetLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): VisualLoggerKismetLibrary;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerKismetLibrary;
	static GetDefaultObject(): VisualLoggerKismetLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerKismetLibrary;
	static RedirectVislog(SourceOwner: UObject,DestinationOwner: UObject): void;
	static LogText(WorldContextObject: UObject,text: string,LogCategory: string,bAddToMessageLog: boolean): void;
	static LogSegment(WorldContextObject: UObject,SegmentStart: Vector,SegmentEnd: Vector,text: string,ObjectColor: LinearColor,Thickness: number,CategoryName: string,bAddToMessageLog: boolean): void;
	static LogLocation(WorldContextObject: UObject,Location: Vector,text: string,ObjectColor: LinearColor,Radius: number,LogCategory: string,bAddToMessageLog: boolean): void;
	static LogBox(WorldContextObject: UObject,BoxShape: Box,text: string,ObjectColor: LinearColor,LogCategory: string,bAddToMessageLog: boolean): void;
	static EnableRecording(bEnabled: boolean): void;
	static C(Other: UObject | any): VisualLoggerKismetLibrary;
}

declare class VoiceChannel extends Channel { 
	static Load(ResourceName: string): VoiceChannel;
	static Find(Outer: UObject, ResourceName: string): VoiceChannel;
	static GetDefaultObject(): VoiceChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoiceChannel;
	static C(Other: UObject | any): VoiceChannel;
}

declare class VoiceSettings { 
	ComponentToAttachTo: SceneComponent;
	AttenuationSettings: SoundAttenuation;
	SourceEffectChain: SoundEffectSourcePresetChain;
	clone() : VoiceSettings;
	static C(Other: UObject | any): VoiceSettings;
}

declare class VOIPTalker extends ActorComponent { 
	Settings: VoiceSettings;
	static Load(ResourceName: string): VOIPTalker;
	static Find(Outer: UObject, ResourceName: string): VOIPTalker;
	static GetDefaultObject(): VOIPTalker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VOIPTalker;
	RegisterWithPlayerState(OwningState: PlayerState): void;
	GetVoiceLevel(): number;
	static CreateTalkerForPlayer(OwningState: PlayerState): VOIPTalker;
	BPOnTalkingEnd(): void;
	BPOnTalkingBegin(AudioComponent: AudioComponent): void;
	static C(Other: UObject | any): VOIPTalker;
}

declare class VOIPStatics extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): VOIPStatics;
	static Find(Outer: UObject, ResourceName: string): VOIPStatics;
	static GetDefaultObject(): VOIPStatics;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VOIPStatics;
	static SetMicThreshold(InThreshold: number): void;
	static C(Other: UObject | any): VOIPStatics;
}

declare class VolumeTexture extends Texture { 
	Source2DTexture: Texture2D;
	SourceLightingGuid: Guid;
	Source2DTileSizeX: number;
	Source2DTileSizeY: number;
	static Load(ResourceName: string): VolumeTexture;
	static Find(Outer: UObject, ResourceName: string): VolumeTexture;
	static GetDefaultObject(): VolumeTexture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumeTexture;
	static C(Other: UObject | any): VolumeTexture;
}

declare class VolumetricLightmapDensityVolume extends Volume { 
	AllowedMipLevelRange: Int32Interval;
	static GetDefaultObject(): VolumetricLightmapDensityVolume;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VolumetricLightmapDensityVolume;
	static C(Other: UObject | any): VolumetricLightmapDensityVolume;
}

declare type EWindSourceType = 'Directional' | 'Point' | 'EWindSourceType_MAX';
declare var EWindSourceType : { Directional:'Directional',Point:'Point',EWindSourceType_MAX:'EWindSourceType_MAX', };
declare class WindDirectionalSourceComponent extends SceneComponent { 
	Strength: number;
	Speed: number;
	MinGustAmount: number;
	MaxGustAmount: number;
	Radius: number;
	bPointWind: boolean;
	static Load(ResourceName: string): WindDirectionalSourceComponent;
	static Find(Outer: UObject, ResourceName: string): WindDirectionalSourceComponent;
	static GetDefaultObject(): WindDirectionalSourceComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WindDirectionalSourceComponent;
	SetWindType(InNewType: EWindSourceType): void;
	SetStrength(InNewStrength: number): void;
	SetSpeed(InNewSpeed: number): void;
	SetRadius(InNewRadius: number): void;
	SetMinimumGustAmount(InNewMinGust: number): void;
	SetMaximumGustAmount(InNewMaxGust: number): void;
	static C(Other: UObject | any): WindDirectionalSourceComponent;
}

declare class WindDirectionalSource extends Info { 
	Component: WindDirectionalSourceComponent;
	ArrowComponent: ArrowComponent;
	static GetDefaultObject(): WindDirectionalSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WindDirectionalSource;
	static C(Other: UObject | any): WindDirectionalSource;
}

declare class HierarchicalLODSetup extends UObject { 
	HierarchicalLODSetup: HierarchicalSimplification[];
	OverrideBaseMaterial: MaterialInterface;
	static Load(ResourceName: string): HierarchicalLODSetup;
	static Find(Outer: UObject, ResourceName: string): HierarchicalLODSetup;
	static GetDefaultObject(): HierarchicalLODSetup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HierarchicalLODSetup;
	static C(Other: UObject | any): HierarchicalLODSetup;
}

declare class MoviePlayerSettings extends UObject { 
	bWaitForMoviesToComplete: boolean;
	bMoviesAreSkippable: boolean;
	StartupMovies: string[];
	static Load(ResourceName: string): MoviePlayerSettings;
	static Find(Outer: UObject, ResourceName: string): MoviePlayerSettings;
	static GetDefaultObject(): MoviePlayerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MoviePlayerSettings;
	static C(Other: UObject | any): MoviePlayerSettings;
}

declare class SoundFactory extends Factory { 
	bAutoCreateCue: boolean;
	bIncludeAttenuationNode: boolean;
	bIncludeLoopingNode: boolean;
	bIncludeModulatorNode: boolean;
	CueVolume: number;
	CuePackageSuffix: string;
	static Load(ResourceName: string): SoundFactory;
	static Find(Outer: UObject, ResourceName: string): SoundFactory;
	static GetDefaultObject(): SoundFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundFactory;
	static C(Other: UObject | any): SoundFactory;
}

declare class ReimportSoundFactory extends SoundFactory { 
	static Load(ResourceName: string): ReimportSoundFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSoundFactory;
	static GetDefaultObject(): ReimportSoundFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSoundFactory;
	static C(Other: UObject | any): ReimportSoundFactory;
}

declare class SoundSurroundFactory extends Factory { 
	CueVolume: number;
	static Load(ResourceName: string): SoundSurroundFactory;
	static Find(Outer: UObject, ResourceName: string): SoundSurroundFactory;
	static GetDefaultObject(): SoundSurroundFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundSurroundFactory;
	static C(Other: UObject | any): SoundSurroundFactory;
}

declare class ReimportSoundSurroundFactory extends SoundSurroundFactory { 
	ReimportPaths: string[];
	static Load(ResourceName: string): ReimportSoundSurroundFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSoundSurroundFactory;
	static GetDefaultObject(): ReimportSoundSurroundFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSoundSurroundFactory;
	static C(Other: UObject | any): ReimportSoundSurroundFactory;
}

declare class MacTargetSettings extends UObject { 
	TargetedRHIs: string[];
	MaxShaderLanguageVersion: number;
	UseFastIntrinsics: boolean;
	EnableMathOptimisations: boolean;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	static Load(ResourceName: string): MacTargetSettings;
	static Find(Outer: UObject, ResourceName: string): MacTargetSettings;
	static GetDefaultObject(): MacTargetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MacTargetSettings;
	static C(Other: UObject | any): MacTargetSettings;
}

declare class LinuxTargetSettings extends UObject { 
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	TargetedRHIs: string[];
	static Load(ResourceName: string): LinuxTargetSettings;
	static Find(Outer: UObject, ResourceName: string): LinuxTargetSettings;
	static GetDefaultObject(): LinuxTargetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LinuxTargetSettings;
	static C(Other: UObject | any): LinuxTargetSettings;
}

declare class DialogueVoiceFactory extends Factory { 
	static Load(ResourceName: string): DialogueVoiceFactory;
	static Find(Outer: UObject, ResourceName: string): DialogueVoiceFactory;
	static GetDefaultObject(): DialogueVoiceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DialogueVoiceFactory;
	static C(Other: UObject | any): DialogueVoiceFactory;
}

declare class DialogueWaveFactory extends Factory { 
	InitialSoundWave: SoundWave;
	InitialSpeakerVoice: DialogueVoice;
	HasSetInitialTargetVoice: boolean;
	InitialTargetVoices: DialogueVoice[];
	static Load(ResourceName: string): DialogueWaveFactory;
	static Find(Outer: UObject, ResourceName: string): DialogueWaveFactory;
	static GetDefaultObject(): DialogueWaveFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DialogueWaveFactory;
	static C(Other: UObject | any): DialogueWaveFactory;
}

declare class ReverbEffectFactory extends Factory { 
	static Load(ResourceName: string): ReverbEffectFactory;
	static Find(Outer: UObject, ResourceName: string): ReverbEffectFactory;
	static GetDefaultObject(): ReverbEffectFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReverbEffectFactory;
	static C(Other: UObject | any): ReverbEffectFactory;
}

declare class SoundAttenuationFactory extends Factory { 
	static Load(ResourceName: string): SoundAttenuationFactory;
	static Find(Outer: UObject, ResourceName: string): SoundAttenuationFactory;
	static GetDefaultObject(): SoundAttenuationFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundAttenuationFactory;
	static C(Other: UObject | any): SoundAttenuationFactory;
}

declare class SoundClassFactory extends Factory { 
	static Load(ResourceName: string): SoundClassFactory;
	static Find(Outer: UObject, ResourceName: string): SoundClassFactory;
	static GetDefaultObject(): SoundClassFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundClassFactory;
	static C(Other: UObject | any): SoundClassFactory;
}

declare class SoundClassGraph extends EdGraph { 
	static Load(ResourceName: string): SoundClassGraph;
	static Find(Outer: UObject, ResourceName: string): SoundClassGraph;
	static GetDefaultObject(): SoundClassGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundClassGraph;
	static C(Other: UObject | any): SoundClassGraph;
}

declare class SoundClassGraphNode extends EdGraphNode { 
	SoundClass: SoundClass;
	static Load(ResourceName: string): SoundClassGraphNode;
	static Find(Outer: UObject, ResourceName: string): SoundClassGraphNode;
	static GetDefaultObject(): SoundClassGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundClassGraphNode;
	static C(Other: UObject | any): SoundClassGraphNode;
}

declare class SoundClassGraphSchema extends EdGraphSchema { 
	static Load(ResourceName: string): SoundClassGraphSchema;
	static Find(Outer: UObject, ResourceName: string): SoundClassGraphSchema;
	static GetDefaultObject(): SoundClassGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundClassGraphSchema;
	static C(Other: UObject | any): SoundClassGraphSchema;
}

declare class SoundConcurrencyFactory extends Factory { 
	static Load(ResourceName: string): SoundConcurrencyFactory;
	static Find(Outer: UObject, ResourceName: string): SoundConcurrencyFactory;
	static GetDefaultObject(): SoundConcurrencyFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundConcurrencyFactory;
	static C(Other: UObject | any): SoundConcurrencyFactory;
}

declare class SoundCueFactoryNew extends Factory { 
	InitialSoundWave: SoundWave;
	InitialDialogueWave: DialogueWave;
	static Load(ResourceName: string): SoundCueFactoryNew;
	static Find(Outer: UObject, ResourceName: string): SoundCueFactoryNew;
	static GetDefaultObject(): SoundCueFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundCueFactoryNew;
	static C(Other: UObject | any): SoundCueFactoryNew;
}

declare class SoundCueGraph extends EdGraph { 
	static Load(ResourceName: string): SoundCueGraph;
	static Find(Outer: UObject, ResourceName: string): SoundCueGraph;
	static GetDefaultObject(): SoundCueGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundCueGraph;
	static C(Other: UObject | any): SoundCueGraph;
}

declare class SoundCueGraphNode_Base extends EdGraphNode { 
	static Load(ResourceName: string): SoundCueGraphNode_Base;
	static Find(Outer: UObject, ResourceName: string): SoundCueGraphNode_Base;
	static GetDefaultObject(): SoundCueGraphNode_Base;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundCueGraphNode_Base;
	static C(Other: UObject | any): SoundCueGraphNode_Base;
}

declare class SoundCueGraphNode extends SoundCueGraphNode_Base { 
	SoundNode: SoundNode;
	static Load(ResourceName: string): SoundCueGraphNode;
	static Find(Outer: UObject, ResourceName: string): SoundCueGraphNode;
	static GetDefaultObject(): SoundCueGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundCueGraphNode;
	static C(Other: UObject | any): SoundCueGraphNode;
}

declare class SoundCueGraphNode_Root extends SoundCueGraphNode_Base { 
	static Load(ResourceName: string): SoundCueGraphNode_Root;
	static Find(Outer: UObject, ResourceName: string): SoundCueGraphNode_Root;
	static GetDefaultObject(): SoundCueGraphNode_Root;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundCueGraphNode_Root;
	static C(Other: UObject | any): SoundCueGraphNode_Root;
}

declare class SoundCueGraphSchema extends EdGraphSchema { 
	static Load(ResourceName: string): SoundCueGraphSchema;
	static Find(Outer: UObject, ResourceName: string): SoundCueGraphSchema;
	static GetDefaultObject(): SoundCueGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundCueGraphSchema;
	static C(Other: UObject | any): SoundCueGraphSchema;
}

declare class SoundMixFactory extends Factory { 
	static Load(ResourceName: string): SoundMixFactory;
	static Find(Outer: UObject, ResourceName: string): SoundMixFactory;
	static GetDefaultObject(): SoundMixFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundMixFactory;
	static C(Other: UObject | any): SoundMixFactory;
}

declare class SoundSourceBusFactory extends Factory { 
	static Load(ResourceName: string): SoundSourceBusFactory;
	static Find(Outer: UObject, ResourceName: string): SoundSourceBusFactory;
	static GetDefaultObject(): SoundSourceBusFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundSourceBusFactory;
	static C(Other: UObject | any): SoundSourceBusFactory;
}

declare class SoundSourceEffectFactory extends Factory { 
	SoundEffectSourcepresetClass: UnrealEngineClass;
	static Load(ResourceName: string): SoundSourceEffectFactory;
	static Find(Outer: UObject, ResourceName: string): SoundSourceEffectFactory;
	static GetDefaultObject(): SoundSourceEffectFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundSourceEffectFactory;
	static C(Other: UObject | any): SoundSourceEffectFactory;
}

declare class SoundSourceEffectChainFactory extends Factory { 
	static Load(ResourceName: string): SoundSourceEffectChainFactory;
	static Find(Outer: UObject, ResourceName: string): SoundSourceEffectChainFactory;
	static GetDefaultObject(): SoundSourceEffectChainFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundSourceEffectChainFactory;
	static C(Other: UObject | any): SoundSourceEffectChainFactory;
}

declare class SoundSubmixEffectFactory extends Factory { 
	SoundEffectSubmixPresetClass: UnrealEngineClass;
	static Load(ResourceName: string): SoundSubmixEffectFactory;
	static Find(Outer: UObject, ResourceName: string): SoundSubmixEffectFactory;
	static GetDefaultObject(): SoundSubmixEffectFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundSubmixEffectFactory;
	static C(Other: UObject | any): SoundSubmixEffectFactory;
}

declare class SoundSubmixFactory extends Factory { 
	static Load(ResourceName: string): SoundSubmixFactory;
	static Find(Outer: UObject, ResourceName: string): SoundSubmixFactory;
	static GetDefaultObject(): SoundSubmixFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundSubmixFactory;
	static C(Other: UObject | any): SoundSubmixFactory;
}

declare class SoundSubmixGraph extends EdGraph { 
	static Load(ResourceName: string): SoundSubmixGraph;
	static Find(Outer: UObject, ResourceName: string): SoundSubmixGraph;
	static GetDefaultObject(): SoundSubmixGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundSubmixGraph;
	static C(Other: UObject | any): SoundSubmixGraph;
}

declare class SoundSubmixGraphNode extends EdGraphNode { 
	SoundSubmix: SoundSubmix;
	static Load(ResourceName: string): SoundSubmixGraphNode;
	static Find(Outer: UObject, ResourceName: string): SoundSubmixGraphNode;
	static GetDefaultObject(): SoundSubmixGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundSubmixGraphNode;
	static C(Other: UObject | any): SoundSubmixGraphNode;
}

declare class SoundSubmixGraphSchema extends EdGraphSchema { 
	static Load(ResourceName: string): SoundSubmixGraphSchema;
	static Find(Outer: UObject, ResourceName: string): SoundSubmixGraphSchema;
	static GetDefaultObject(): SoundSubmixGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundSubmixGraphSchema;
	static C(Other: UObject | any): SoundSubmixGraphSchema;
}

declare class AnimationBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AnimationBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AnimationBlueprintLibrary;
	static GetDefaultObject(): AnimationBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationBlueprintLibrary;
	static SetRootMotionLockType(AnimationSequence: AnimSequence,RootMotionLockType: ERootMotionRootLock): void;
	static SetRootMotionEnabled(AnimationSequence: AnimSequence,bEnabled: boolean): void;
	static SetRateScale(AnimationSequence: AnimSequence,RateScale: number): void;
	static SetIsRootMotionLockForced(AnimationSequence: AnimSequence,bForced: boolean): void;
	static SetCompressionScheme(AnimationSequence: AnimSequence,CompressionScheme: AnimCompress): void;
	static SetAnimationInterpolationType(AnimationSequence: AnimSequence,InterpolationType: EAnimInterpolationType): void;
	static SetAdditiveBasePoseType(AnimationSequence: AnimSequence,AdditiveBasePoseType: EAdditiveBasePoseType): void;
	static SetAdditiveAnimationType(AnimationSequence: AnimSequence,AdditiveAnimationType: EAdditiveAnimationType): void;
	static RemoveVirtualBones(AnimationSequence: AnimSequence,VirtualBoneNames: string[]): void;
	static RemoveVirtualBone(AnimationSequence: AnimSequence,VirtualBoneName: string): void;
	static RemoveMetaDataOfClass(AnimationSequence: AnimSequence,MetaDataClass: UnrealEngineClass): void;
	static RemoveMetaData(AnimationSequence: AnimSequence,MetaDataObject: AnimMetaData): void;
	static RemoveCurve(AnimationSequence: AnimSequence,CurveName: string,bRemoveNameFromSkeleton: boolean): void;
	static RemoveBoneAnimation(AnimationSequence: AnimSequence,BoneName: string,bIncludeChildren: boolean,bFinalize: boolean): void;
	static RemoveAnimationSyncMarkersByTrack(AnimationSequence: AnimSequence,NotifyTrackName: string): number;
	static RemoveAnimationSyncMarkersByName(AnimationSequence: AnimSequence,MarkerName: string): number;
	static RemoveAnimationNotifyTrack(AnimationSequence: AnimSequence,NotifyTrackName: string): void;
	static RemoveAnimationNotifyEventsByTrack(AnimationSequence: AnimSequence,NotifyTrackName: string): number;
	static RemoveAnimationNotifyEventsByName(AnimationSequence: AnimSequence,NotifyName: string): number;
	static RemoveAllVirtualBones(AnimationSequence: AnimSequence): void;
	static RemoveAllMetaData(AnimationSequence: AnimSequence): void;
	static RemoveAllCurveData(AnimationSequence: AnimSequence): void;
	static RemoveAllBoneAnimation(AnimationSequence: AnimSequence): void;
	static RemoveAllAnimationSyncMarkers(AnimationSequence: AnimSequence): void;
	static RemoveAllAnimationNotifyTracks(AnimationSequence: AnimSequence): void;
	static IsValidTime(AnimationSequence: AnimSequence,Time: number,IsValid?: boolean): {IsValid: boolean};
	static IsValidRawAnimationTrackName(AnimationSequence: AnimSequence,TrackName: string): boolean;
	static IsValidAnimNotifyTrackName(AnimationSequence: AnimSequence,NotifyTrackName: string): boolean;
	static IsValidAnimationSyncMarkerName(AnimationSequence: AnimSequence,MarkerName: string): boolean;
	static IsRootMotionLockForced(AnimationSequence: AnimSequence): boolean;
	static IsRootMotionEnabled(AnimationSequence: AnimSequence): boolean;
	static GetVectorKeys(AnimationSequence: AnimSequence,CurveName: string,Times?: number[],Values?: Vector[]): {Times: number[], Values: Vector[]};
	static GetUniqueMarkerNames(AnimationSequence: AnimSequence,MarkerNames?: string[]): {MarkerNames: string[]};
	static GetTransformationKeys(AnimationSequence: AnimSequence,CurveName: string,Times?: number[],Values?: Transform[]): {Times: number[], Values: Transform[]};
	static GetTimeAtFrame(AnimationSequence: AnimSequence,Frame: number,Time?: number): {Time: number};
	static GetSequenceLength(AnimationSequence: AnimSequence,Length?: number): {Length: number};
	static GetRootMotionLockType(AnimationSequence: AnimSequence,LockType?: ERootMotionRootLock): {LockType: ERootMotionRootLock};
	static GetRawTrackScaleData(AnimationSequence: AnimSequence,TrackName: string,ScaleData?: Vector[]): {ScaleData: Vector[]};
	static GetRawTrackRotationData(AnimationSequence: AnimSequence,TrackName: string,RotationData?: Quat[]): {RotationData: Quat[]};
	static GetRawTrackPositionData(AnimationSequence: AnimSequence,TrackName: string,PositionData?: Vector[]): {PositionData: Vector[]};
	static GetRawTrackData(AnimationSequence: AnimSequence,TrackName: string,PositionKeys?: Vector[],RotationKeys?: Quat[],ScalingKeys?: Vector[]): {PositionKeys: Vector[], RotationKeys: Quat[], ScalingKeys: Vector[]};
	static GetRateScale(AnimationSequence: AnimSequence,RateScale?: number): {RateScale: number};
	static GetNumFrames(AnimationSequence: AnimSequence,NumFrames?: number): {NumFrames: number};
	static GetMetaDataOfClass(AnimationSequence: AnimSequence,MetaDataClass: UnrealEngineClass,MetaDataOfClass: AnimMetaData[]): void;
	static GetMetaData(AnimationSequence: AnimSequence,MetaData: AnimMetaData[]): void;
	static GetFrameAtTime(AnimationSequence: AnimSequence,Time: number,Frame?: number): {Frame: number};
	static GetFloatKeys(AnimationSequence: AnimSequence,CurveName: string,Times?: number[],Values?: number[]): {Times: number[], Values: number[]};
	static GetCompressionScheme(AnimationSequence: AnimSequence,CompressionScheme?: AnimCompress): {CompressionScheme: AnimCompress};
	static GetBonePosesForTime(AnimationSequence: AnimSequence,BoneNames: string[],Time: number,bExtractRootMotion: boolean,Poses?: Transform[],PreviewMesh?: SkeletalMesh): {Poses: Transform[]};
	static GetBonePosesForFrame(AnimationSequence: AnimSequence,BoneNames: string[],Frame: number,bExtractRootMotion: boolean,Poses?: Transform[],PreviewMesh?: SkeletalMesh): {Poses: Transform[]};
	static GetBonePoseForTime(AnimationSequence: AnimSequence,BoneName: string,Time: number,bExtractRootMotion: boolean,Pose?: Transform): {Pose: Transform};
	static GetBonePoseForFrame(AnimationSequence: AnimSequence,BoneName: string,Frame: number,bExtractRootMotion: boolean,Pose?: Transform): {Pose: Transform};
	static GetAnimNotifyEventTriggerTime(NotifyEvent: AnimNotifyEvent): number;
	static GetAnimationTrackNames(AnimationSequence: AnimSequence,TrackNames?: string[]): {TrackNames: string[]};
	static GetAnimationSyncMarkersForTrack(AnimationSequence: AnimSequence,NotifyTrackName: string,Markers?: AnimSyncMarker[]): {Markers: AnimSyncMarker[]};
	static GetAnimationSyncMarkers(AnimationSequence: AnimSequence,Markers?: AnimSyncMarker[]): {Markers: AnimSyncMarker[]};
	static GetAnimationNotifyTrackNames(AnimationSequence: AnimSequence,TrackNames?: string[]): {TrackNames: string[]};
	static GetAnimationNotifyEventsForTrack(AnimationSequence: AnimSequence,NotifyTrackName: string,Events?: AnimNotifyEvent[]): {Events: AnimNotifyEvent[]};
	static GetAnimationNotifyEvents(AnimationSequence: AnimSequence,NotifyEvents?: AnimNotifyEvent[]): {NotifyEvents: AnimNotifyEvent[]};
	static GetAnimationNotifyEventNames(AnimationSequence: AnimSequence,EventNames?: string[]): {EventNames: string[]};
	static GetAnimationInterpolationType(AnimationSequence: AnimSequence,InterpolationType?: EAnimInterpolationType): {InterpolationType: EAnimInterpolationType};
	static GetAdditiveBasePoseType(AnimationSequence: AnimSequence,AdditiveBasePoseType?: EAdditiveBasePoseType): {AdditiveBasePoseType: EAdditiveBasePoseType};
	static GetAdditiveAnimationType(AnimationSequence: AnimSequence,AdditiveAnimationType?: EAdditiveAnimationType): {AdditiveAnimationType: EAdditiveAnimationType};
	static FindBonePathToRoot(AnimationSequence: AnimSequence,BoneName: string,BonePath?: string[]): {BonePath: string[]};
	static FinalizeBoneAnimation(AnimationSequence: AnimSequence): void;
	static DoesCurveExist(AnimationSequence: AnimSequence,CurveName: string,CurveType: ERawCurveTrackTypes): boolean;
	static DoesBoneNameExist(AnimationSequence: AnimSequence,BoneName: string,bExists?: boolean): {bExists: boolean};
	static ContainsMetaDataOfClass(AnimationSequence: AnimSequence,MetaDataClass: UnrealEngineClass): boolean;
	static AddVirtualBone(AnimationSequence: AnimSequence,SourceBoneName: string,TargetBoneName: string,VirtualBoneName?: string): {VirtualBoneName: string};
	static AddVectorCurveKeys(AnimationSequence: AnimSequence,CurveName: string,Times: number[],Vectors: Vector[]): void;
	static AddVectorCurveKey(AnimationSequence: AnimSequence,CurveName: string,Time: number,Vector: Vector): void;
	static AddTransformationCurveKeys(AnimationSequence: AnimSequence,CurveName: string,Times: number[],Transforms: Transform[]): void;
	static AddTransformationCurveKey(AnimationSequence: AnimSequence,CurveName: string,Time: number,Transform: Transform): void;
	static AddMetaDataObject(AnimationSequence: AnimSequence,MetaDataObject: AnimMetaData): void;
	static AddMetaData(AnimationSequence: AnimSequence,MetaDataClass: UnrealEngineClass,MetaDataInstance: AnimMetaData): void;
	static AddFloatCurveKeys(AnimationSequence: AnimSequence,CurveName: string,Times: number[],Values: number[]): void;
	static AddFloatCurveKey(AnimationSequence: AnimSequence,CurveName: string,Time: number,Value: number): void;
	static AddCurve(AnimationSequence: AnimSequence,CurveName: string,CurveType: ERawCurveTrackTypes,bMetaDataCurve: boolean): void;
	static AddAnimationSyncMarker(AnimationSequence: AnimSequence,MarkerName: string,Time: number,NotifyTrackName: string): void;
	static AddAnimationNotifyTrack(AnimationSequence: AnimSequence,NotifyTrackName: string,TrackColor: LinearColor): void;
	static AddAnimationNotifyEventObject(AnimationSequence: AnimSequence,StartTime: number,Notify: AnimNotify,NotifyTrackName: string): void;
	static AddAnimationNotifyEvent(AnimationSequence: AnimSequence,NotifyTrackName: string,StartTime: number,Duration: number,NotifyClass: UnrealEngineClass): AnimNotify;
	static C(Other: UObject | any): AnimationBlueprintLibrary;
}

declare class AnimationModifier extends UObject { 
	RevisionGuid: Guid;
	AppliedGuid: Guid;
	StoredNativeRevision: number;
	static Load(ResourceName: string): AnimationModifier;
	static Find(Outer: UObject, ResourceName: string): AnimationModifier;
	static GetDefaultObject(): AnimationModifier;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationModifier;
	OnRevert(AnimationSequence: AnimSequence): void;
	OnApply(AnimationSequence: AnimSequence): void;
	static C(Other: UObject | any): AnimationModifier;
}

declare class AnimationModifiersAssetUserData extends AssetUserData { 
	AnimationModifierInstances: AnimationModifier[];
	static Load(ResourceName: string): AnimationModifiersAssetUserData;
	static Find(Outer: UObject, ResourceName: string): AnimationModifiersAssetUserData;
	static GetDefaultObject(): AnimationModifiersAssetUserData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationModifiersAssetUserData;
	static C(Other: UObject | any): AnimationModifiersAssetUserData;
}

declare class DatasmithObjectTemplate extends UObject { 
	static Load(ResourceName: string): DatasmithObjectTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithObjectTemplate;
	static GetDefaultObject(): DatasmithObjectTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithObjectTemplate;
	static C(Other: UObject | any): DatasmithObjectTemplate;
}

declare class DatasmithActorTemplate extends DatasmithObjectTemplate { 
	Layers: any;
	Tags: any;
	static Load(ResourceName: string): DatasmithActorTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithActorTemplate;
	static GetDefaultObject(): DatasmithActorTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithActorTemplate;
	static C(Other: UObject | any): DatasmithActorTemplate;
}

declare type EDatasmithAreaLightActorShape = 'Rectangle' | 'Disc' | 'Sphere' | 'Cylinder' | 'EDatasmithAreaLightActorShape_MAX';
declare var EDatasmithAreaLightActorShape : { Rectangle:'Rectangle',Disc:'Disc',Sphere:'Sphere',Cylinder:'Cylinder',EDatasmithAreaLightActorShape_MAX:'EDatasmithAreaLightActorShape_MAX', };
declare class DatasmithAreaLightActor extends Actor { 
	LightShape: EDatasmithAreaLightActorShape;
	Dimensions: Vector2D;
	Color: LinearColor;
	Intensity: number;
	static GetDefaultObject(): DatasmithAreaLightActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithAreaLightActor;
	static C(Other: UObject | any): DatasmithAreaLightActor;
}

declare class DatasmithAreaLightActorTemplate extends DatasmithObjectTemplate { 
	LightShape: EDatasmithAreaLightActorShape;
	Dimensions: Vector2D;
	Color: LinearColor;
	Intensity: number;
	bHidden: boolean;
	static Load(ResourceName: string): DatasmithAreaLightActorTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithAreaLightActorTemplate;
	static GetDefaultObject(): DatasmithAreaLightActorTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithAreaLightActorTemplate;
	static C(Other: UObject | any): DatasmithAreaLightActorTemplate;
}

declare class DatasmithAssetImportOptions { 
	PackagePath: string;
	clone() : DatasmithAssetImportOptions;
	static C(Other: UObject | any): DatasmithAssetImportOptions;
}

declare class DatasmithAssetImportData extends AssetImportData { 
	AssetImportOptions: DatasmithAssetImportOptions;
	static Load(ResourceName: string): DatasmithAssetImportData;
	static Find(Outer: UObject, ResourceName: string): DatasmithAssetImportData;
	static GetDefaultObject(): DatasmithAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithAssetImportData;
	static C(Other: UObject | any): DatasmithAssetImportData;
}

declare type EDatasmithImportLightmapMin = 'LIGHTMAP_16' | 'LIGHTMAP_32' | 'LIGHTMAP_64' | 'LIGHTMAP_128' | 'LIGHTMAP_256' | 'LIGHTMAP_512' | 'LIGHTMAP_MAX';
declare var EDatasmithImportLightmapMin : { LIGHTMAP_16:'LIGHTMAP_16',LIGHTMAP_32:'LIGHTMAP_32',LIGHTMAP_64:'LIGHTMAP_64',LIGHTMAP_128:'LIGHTMAP_128',LIGHTMAP_256:'LIGHTMAP_256',LIGHTMAP_512:'LIGHTMAP_512',LIGHTMAP_MAX:'LIGHTMAP_MAX', };
declare type EDatasmithImportLightmapMax = 'LIGHTMAP_64' | 'LIGHTMAP_128' | 'LIGHTMAP_256' | 'LIGHTMAP_512' | 'LIGHTMAP_1024' | 'LIGHTMAP_2048' | 'LIGHTMAP_4096' | 'LIGHTMAP_MAX';
declare var EDatasmithImportLightmapMax : { LIGHTMAP_64:'LIGHTMAP_64',LIGHTMAP_128:'LIGHTMAP_128',LIGHTMAP_256:'LIGHTMAP_256',LIGHTMAP_512:'LIGHTMAP_512',LIGHTMAP_1024:'LIGHTMAP_1024',LIGHTMAP_2048:'LIGHTMAP_2048',LIGHTMAP_4096:'LIGHTMAP_4096',LIGHTMAP_MAX:'LIGHTMAP_MAX', };
declare class DatasmithStaticMeshImportOptions { 
	MinLightmapResolution: EDatasmithImportLightmapMin;
	MaxLightmapResolution: EDatasmithImportLightmapMax;
	bGenerateLightmapUVs: boolean;
	bRemoveDegenerates: boolean;
	clone() : DatasmithStaticMeshImportOptions;
	static C(Other: UObject | any): DatasmithStaticMeshImportOptions;
}

declare class DatasmithStaticMeshImportData extends DatasmithAssetImportData { 
	ImportOptions: DatasmithStaticMeshImportOptions;
	static Load(ResourceName: string): DatasmithStaticMeshImportData;
	static Find(Outer: UObject, ResourceName: string): DatasmithStaticMeshImportData;
	static GetDefaultObject(): DatasmithStaticMeshImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithStaticMeshImportData;
	static C(Other: UObject | any): DatasmithStaticMeshImportData;
}

declare class DatasmithTessellationOptions { 
	ChordTolerance: number;
	MaxEdgeLength: number;
	NormalTolerance: number;
	clone() : DatasmithTessellationOptions;
	static C(Other: UObject | any): DatasmithTessellationOptions;
}

declare class DatasmithStaticMeshCADImportData extends DatasmithStaticMeshImportData { 
	TessellationOptions: DatasmithTessellationOptions;
	ModelUnit: any;
	ModelTolerance: any;
	ResourcePath: string;
	ResourceFilename: string;
	AuxiliaryFilenames: string[];
	static Load(ResourceName: string): DatasmithStaticMeshCADImportData;
	static Find(Outer: UObject, ResourceName: string): DatasmithStaticMeshCADImportData;
	static GetDefaultObject(): DatasmithStaticMeshCADImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithStaticMeshCADImportData;
	static C(Other: UObject | any): DatasmithStaticMeshCADImportData;
}

declare type EDatasmithImportScene = 'NewLevel' | 'CurrentLevel' | 'AssetsOnly' | 'EDatasmithImportScene_MAX';
declare var EDatasmithImportScene : { NewLevel:'NewLevel',CurrentLevel:'CurrentLevel',AssetsOnly:'AssetsOnly',EDatasmithImportScene_MAX:'EDatasmithImportScene_MAX', };
declare class DatasmithImportBaseOptions { 
	SceneHandling: EDatasmithImportScene;
	bIncludeGeometry: boolean;
	bIncludeMaterial: boolean;
	bIncludeLight: boolean;
	bIncludeCamera: boolean;
	AssetOptions: DatasmithAssetImportOptions;
	StaticMeshOptions: DatasmithStaticMeshImportOptions;
	clone() : DatasmithImportBaseOptions;
	static C(Other: UObject | any): DatasmithImportBaseOptions;
}

declare class DatasmithSceneImportData extends AssetImportData { 
	BaseOptions: DatasmithImportBaseOptions;
	static Load(ResourceName: string): DatasmithSceneImportData;
	static Find(Outer: UObject, ResourceName: string): DatasmithSceneImportData;
	static GetDefaultObject(): DatasmithSceneImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithSceneImportData;
	static C(Other: UObject | any): DatasmithSceneImportData;
}

declare class DatasmithCADImportSceneData extends DatasmithSceneImportData { 
	TessellationOptions: DatasmithTessellationOptions;
	static Load(ResourceName: string): DatasmithCADImportSceneData;
	static Find(Outer: UObject, ResourceName: string): DatasmithCADImportSceneData;
	static GetDefaultObject(): DatasmithCADImportSceneData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithCADImportSceneData;
	static C(Other: UObject | any): DatasmithCADImportSceneData;
}

declare class DatasmithMDLSceneImportData extends DatasmithSceneImportData { 
	static Load(ResourceName: string): DatasmithMDLSceneImportData;
	static Find(Outer: UObject, ResourceName: string): DatasmithMDLSceneImportData;
	static GetDefaultObject(): DatasmithMDLSceneImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithMDLSceneImportData;
	static C(Other: UObject | any): DatasmithMDLSceneImportData;
}

declare class DatasmithDeltaGenAssetImportData extends DatasmithAssetImportData { 
	static Load(ResourceName: string): DatasmithDeltaGenAssetImportData;
	static Find(Outer: UObject, ResourceName: string): DatasmithDeltaGenAssetImportData;
	static GetDefaultObject(): DatasmithDeltaGenAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithDeltaGenAssetImportData;
	static C(Other: UObject | any): DatasmithDeltaGenAssetImportData;
}

declare class DatasmithDeltaGenSceneImportData extends DatasmithSceneImportData { 
	static Load(ResourceName: string): DatasmithDeltaGenSceneImportData;
	static Find(Outer: UObject, ResourceName: string): DatasmithDeltaGenSceneImportData;
	static GetDefaultObject(): DatasmithDeltaGenSceneImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithDeltaGenSceneImportData;
	static C(Other: UObject | any): DatasmithDeltaGenSceneImportData;
}

declare class DatasmithVREDAssetImportData extends DatasmithAssetImportData { 
	static Load(ResourceName: string): DatasmithVREDAssetImportData;
	static Find(Outer: UObject, ResourceName: string): DatasmithVREDAssetImportData;
	static GetDefaultObject(): DatasmithVREDAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithVREDAssetImportData;
	static C(Other: UObject | any): DatasmithVREDAssetImportData;
}

declare class DatasmithVREDSceneImportData extends DatasmithSceneImportData { 
	static Load(ResourceName: string): DatasmithVREDSceneImportData;
	static Find(Outer: UObject, ResourceName: string): DatasmithVREDSceneImportData;
	static GetDefaultObject(): DatasmithVREDSceneImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithVREDSceneImportData;
	static C(Other: UObject | any): DatasmithVREDSceneImportData;
}

declare class DatasmithCameraFilmbackSettingsTemplate { 
	SensorWidth: number;
	SensorHeight: number;
	clone() : DatasmithCameraFilmbackSettingsTemplate;
	static C(Other: UObject | any): DatasmithCameraFilmbackSettingsTemplate;
}

declare class DatasmithCameraLensSettingsTemplate { 
	MaxFStop: number;
	clone() : DatasmithCameraLensSettingsTemplate;
	static C(Other: UObject | any): DatasmithCameraLensSettingsTemplate;
}

declare class DatasmithCameraFocusSettingsTemplate { 
	FocusMethod: ECameraFocusMethod;
	ManualFocusDistance: number;
	clone() : DatasmithCameraFocusSettingsTemplate;
	static C(Other: UObject | any): DatasmithCameraFocusSettingsTemplate;
}

declare class DatasmithPostProcessSettingsTemplate { 
	bOverride_WhiteTemp: boolean;
	bOverride_ColorSaturation: boolean;
	bOverride_VignetteIntensity: boolean;
	bOverride_FilmWhitePoint: boolean;
	bOverride_AutoExposureMethod: boolean;
	bOverride_CameraISO: boolean;
	WhiteTemp: number;
	VignetteIntensity: number;
	FilmWhitePoint: LinearColor;
	ColorSaturation: Vector4;
	AutoExposureMethod: EAutoExposureMethod;
	CameraISO: number;
	clone() : DatasmithPostProcessSettingsTemplate;
	static C(Other: UObject | any): DatasmithPostProcessSettingsTemplate;
}

declare class DatasmithCineCameraComponentTemplate extends DatasmithObjectTemplate { 
	FilmbackSettings: DatasmithCameraFilmbackSettingsTemplate;
	LensSettings: DatasmithCameraLensSettingsTemplate;
	FocusSettings: DatasmithCameraFocusSettingsTemplate;
	CurrentFocalLength: number;
	CurrentAperture: number;
	PostProcessSettings: DatasmithPostProcessSettingsTemplate;
	static Load(ResourceName: string): DatasmithCineCameraComponentTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithCineCameraComponentTemplate;
	static GetDefaultObject(): DatasmithCineCameraComponentTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithCineCameraComponentTemplate;
	static C(Other: UObject | any): DatasmithCineCameraComponentTemplate;
}

declare class DatasmithContentBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): DatasmithContentBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): DatasmithContentBlueprintLibrary;
	static GetDefaultObject(): DatasmithContentBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithContentBlueprintLibrary;
	static GetDatasmithUserDataValueForKey(UObject: UObject,Key: string): string;
	static GetDatasmithUserDataKeysAndValuesForValue(UObject: UObject,StringToMatch: string,OutKeys?: string[],OutValues?: string[]): {OutKeys: string[], OutValues: string[]};
	static GetDatasmithUserData(UObject: UObject): DatasmithAssetUserData;
	static GetAllObjectsAndValuesForKey(Key: string,ObjectClass: UnrealEngineClass,OutObjects?: UObject[],OutValues?: string[]): {OutObjects: UObject[], OutValues: string[]};
	static GetAllDatasmithUserData(ObjectClass: UnrealEngineClass,OutUserData?: DatasmithAssetUserData[]): {OutUserData: DatasmithAssetUserData[]};
	static C(Other: UObject | any): DatasmithContentBlueprintLibrary;
}

declare type EDatasmithImportSearchPackagePolicy = 'Current' | 'All' | 'EDatasmithImportSearchPackagePolicy_MAX';
declare var EDatasmithImportSearchPackagePolicy : { Current:'Current',All:'All',EDatasmithImportSearchPackagePolicy_MAX:'EDatasmithImportSearchPackagePolicy_MAX', };
declare type EDatasmithImportAssetConflictPolicy = 'Replace' | 'Update' | 'Use' | 'Ignore' | 'EDatasmithImportAssetConflictPolicy_MAX';
declare var EDatasmithImportAssetConflictPolicy : { Replace:'Replace',Update:'Update',Use:'Use',Ignore:'Ignore',EDatasmithImportAssetConflictPolicy_MAX:'EDatasmithImportAssetConflictPolicy_MAX', };
declare type EDatasmithImportActorPolicy = 'Update' | 'Full' | 'Ignore' | 'EDatasmithImportActorPolicy_MAX';
declare var EDatasmithImportActorPolicy : { Update:'Update',Full:'Full',Ignore:'Ignore',EDatasmithImportActorPolicy_MAX:'EDatasmithImportActorPolicy_MAX', };
declare type EDatasmithImportMaterialQuality = 'UseNoFresnelCurves' | 'UseSimplifierFresnelCurves' | 'UseRealFresnelCurves' | 'EDatasmithImportMaterialQuality_MAX';
declare var EDatasmithImportMaterialQuality : { UseNoFresnelCurves:'UseNoFresnelCurves',UseSimplifierFresnelCurves:'UseSimplifierFresnelCurves',UseRealFresnelCurves:'UseRealFresnelCurves',EDatasmithImportMaterialQuality_MAX:'EDatasmithImportMaterialQuality_MAX', };
declare class DatasmithReimportOptions { 
	bUpdateActors: boolean;
	bRespawnDeletedActors: boolean;
	clone() : DatasmithReimportOptions;
	static C(Other: UObject | any): DatasmithReimportOptions;
}

declare class DatasmithImportOptions extends UObject { 
	SearchPackagePolicy: EDatasmithImportSearchPackagePolicy;
	MaterialConflictPolicy: EDatasmithImportAssetConflictPolicy;
	TextureConflictPolicy: EDatasmithImportAssetConflictPolicy;
	StaticMeshActorImportPolicy: EDatasmithImportActorPolicy;
	LightImportPolicy: EDatasmithImportActorPolicy;
	CameraImportPolicy: EDatasmithImportActorPolicy;
	OtherActorImportPolicy: EDatasmithImportActorPolicy;
	MaterialQuality: EDatasmithImportMaterialQuality;
	BaseOptions: DatasmithImportBaseOptions;
	TessellationOptions: DatasmithTessellationOptions;
	ReimportOptions: DatasmithReimportOptions;
	static Load(ResourceName: string): DatasmithImportOptions;
	static Find(Outer: UObject, ResourceName: string): DatasmithImportOptions;
	static GetDefaultObject(): DatasmithImportOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithImportOptions;
	static C(Other: UObject | any): DatasmithImportOptions;
}

declare class DatasmithLandscapeTemplate extends DatasmithObjectTemplate { 
	LandscapeMaterial: MaterialInterface;
	StaticLightingLOD: number;
	static Load(ResourceName: string): DatasmithLandscapeTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithLandscapeTemplate;
	static GetDefaultObject(): DatasmithLandscapeTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithLandscapeTemplate;
	static C(Other: UObject | any): DatasmithLandscapeTemplate;
}

declare class DatasmithLightComponentTemplate extends DatasmithObjectTemplate { 
	bVisible: boolean;
	CastShadows: boolean;
	bUseTemperature: boolean;
	bUseIESBrightness: boolean;
	Intensity: number;
	Temperature: number;
	IESBrightnessScale: number;
	LightColor: LinearColor;
	LightFunctionMaterial: MaterialInterface;
	IESTexture: TextureLightProfile;
	static Load(ResourceName: string): DatasmithLightComponentTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithLightComponentTemplate;
	static GetDefaultObject(): DatasmithLightComponentTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithLightComponentTemplate;
	static C(Other: UObject | any): DatasmithLightComponentTemplate;
}

declare class DatasmithPointLightComponentTemplate extends DatasmithObjectTemplate { 
	IntensityUnits: ELightUnits;
	SourceRadius: number;
	SourceLength: number;
	AttenuationRadius: number;
	static Load(ResourceName: string): DatasmithPointLightComponentTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithPointLightComponentTemplate;
	static GetDefaultObject(): DatasmithPointLightComponentTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithPointLightComponentTemplate;
	static C(Other: UObject | any): DatasmithPointLightComponentTemplate;
}

declare class DatasmithScene extends UObject { 
	AssetImportData: DatasmithSceneImportData;
	BulkDataVersion: number;
	static Load(ResourceName: string): DatasmithScene;
	static Find(Outer: UObject, ResourceName: string): DatasmithScene;
	static GetDefaultObject(): DatasmithScene;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithScene;
	static C(Other: UObject | any): DatasmithScene;
}

declare class DatasmithSceneActor extends Actor { 
	Scene: DatasmithScene;
	RelatedActors: any;
	static GetDefaultObject(): DatasmithSceneActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithSceneActor;
	static C(Other: UObject | any): DatasmithSceneActor;
}

declare class DatasmithSceneComponentTemplate extends DatasmithObjectTemplate { 
	RelativeTransform: Transform;
	Mobility: EComponentMobility;
	AttachParent: SceneComponent;
	Tags: any;
	static Load(ResourceName: string): DatasmithSceneComponentTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithSceneComponentTemplate;
	static GetDefaultObject(): DatasmithSceneComponentTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithSceneComponentTemplate;
	static C(Other: UObject | any): DatasmithSceneComponentTemplate;
}

declare class DatasmithSkyLightComponentTemplate extends DatasmithObjectTemplate { 
	SourceType: ESkyLightSourceType;
	CubemapResolution: number;
	Cubemap: TextureCube;
	static Load(ResourceName: string): DatasmithSkyLightComponentTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithSkyLightComponentTemplate;
	static GetDefaultObject(): DatasmithSkyLightComponentTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithSkyLightComponentTemplate;
	static C(Other: UObject | any): DatasmithSkyLightComponentTemplate;
}

declare class DatasmithSpotLightComponentTemplate extends DatasmithObjectTemplate { 
	InnerConeAngle: number;
	OuterConeAngle: number;
	static Load(ResourceName: string): DatasmithSpotLightComponentTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithSpotLightComponentTemplate;
	static GetDefaultObject(): DatasmithSpotLightComponentTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithSpotLightComponentTemplate;
	static C(Other: UObject | any): DatasmithSpotLightComponentTemplate;
}

declare class DatasmithStaticMeshComponentTemplate extends DatasmithSceneComponentTemplate { 
	StaticMesh: StaticMesh;
	OverrideMaterials: MaterialInterface[];
	static Load(ResourceName: string): DatasmithStaticMeshComponentTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithStaticMeshComponentTemplate;
	static GetDefaultObject(): DatasmithStaticMeshComponentTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithStaticMeshComponentTemplate;
	static C(Other: UObject | any): DatasmithStaticMeshComponentTemplate;
}

declare class DatasmithMeshSectionInfoMapTemplate { 
	Map: any;
	clone() : DatasmithMeshSectionInfoMapTemplate;
	static C(Other: UObject | any): DatasmithMeshSectionInfoMapTemplate;
}

declare class DatasmithMeshBuildSettingsTemplate { 
	bUseMikkTSpace: boolean;
	bRecomputeNormals: boolean;
	bRecomputeTangents: boolean;
	bRemoveDegenerates: boolean;
	bBuildAdjacencyBuffer: boolean;
	bUseHighPrecisionTangentBasis: boolean;
	bUseFullPrecisionUVs: boolean;
	bGenerateLightmapUVs: boolean;
	MinLightmapResolution: number;
	SrcLightmapIndex: number;
	DstLightmapIndex: number;
	clone() : DatasmithMeshBuildSettingsTemplate;
	static C(Other: UObject | any): DatasmithMeshBuildSettingsTemplate;
}

declare class DatasmithStaticMaterialTemplate { 
	MaterialSlotName: string;
	MaterialInterface: MaterialInterface;
	clone() : DatasmithStaticMaterialTemplate;
	static C(Other: UObject | any): DatasmithStaticMaterialTemplate;
}

declare class DatasmithStaticMeshTemplate extends DatasmithObjectTemplate { 
	SectionInfoMap: DatasmithMeshSectionInfoMapTemplate;
	LightMapCoordinateIndex: number;
	LightMapResolution: number;
	BuildSettings: DatasmithMeshBuildSettingsTemplate[];
	StaticMaterials: DatasmithStaticMaterialTemplate[];
	static Load(ResourceName: string): DatasmithStaticMeshTemplate;
	static Find(Outer: UObject, ResourceName: string): DatasmithStaticMeshTemplate;
	static GetDefaultObject(): DatasmithStaticMeshTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithStaticMeshTemplate;
	static C(Other: UObject | any): DatasmithStaticMeshTemplate;
}

declare class MRMeshComponent extends PrimitiveComponent { 
	Material: MaterialInterface;
	bCreateMeshProxySections: boolean;
	bUpdateNavMeshOnMeshUpdate: boolean;
	BodySetups: BodySetup[];
	static Load(ResourceName: string): MRMeshComponent;
	static Find(Outer: UObject, ResourceName: string): MRMeshComponent;
	static GetDefaultObject(): MRMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MRMeshComponent;
	IsConnected(): boolean;
	ForceNavMeshUpdate(): void;
	Clear(): void;
	static C(Other: UObject | any): MRMeshComponent;
}

declare class MeshReconstructorBase extends UObject { 
	static Load(ResourceName: string): MeshReconstructorBase;
	static Find(Outer: UObject, ResourceName: string): MeshReconstructorBase;
	static GetDefaultObject(): MeshReconstructorBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshReconstructorBase;
	StopReconstruction(): void;
	StartReconstruction(): void;
	PauseReconstruction(): void;
	IsReconstructionStarted(): boolean;
	IsReconstructionPaused(): boolean;
	DisconnectMRMesh(): void;
	ConnectMRMesh(Mesh: MRMeshComponent): void;
	static C(Other: UObject | any): MeshReconstructorBase;
}

declare class MagicLeapSecureStorage extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapSecureStorage;
	static Find(Outer: UObject, ResourceName: string): MagicLeapSecureStorage;
	static GetDefaultObject(): MagicLeapSecureStorage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapSecureStorage;
	static PutSecureVector(Key: string,DataToStore: Vector): boolean;
	static PutSecureTransform(Key: string,DataToStore: Transform): boolean;
	static PutSecureString(Key: string,DataToStore: string): boolean;
	static PutSecureRotator(Key: string,DataToStore: Rotator): boolean;
	static PutSecureInt(Key: string,DataToStore: number): boolean;
	static PutSecureFloat(Key: string,DataToStore: number): boolean;
	static PutSecureByte(Key: string,DataToStore: number): boolean;
	static PutSecureBool(Key: string,DataToStore: boolean): boolean;
	static GetSecureVector(Key: string,DataToRetrieve?: Vector): {DataToRetrieve: Vector, $: boolean};
	static GetSecureTransform(Key: string,DataToRetrieve?: Transform): {DataToRetrieve: Transform, $: boolean};
	static GetSecureString(Key: string,DataToRetrieve?: string): {DataToRetrieve: string, $: boolean};
	static GetSecureRotator(Key: string,DataToRetrieve?: Rotator): {DataToRetrieve: Rotator, $: boolean};
	static GetSecureInt(Key: string,DataToRetrieve?: number): {DataToRetrieve: number, $: boolean};
	static GetSecureFloat(Key: string,DataToRetrieve?: number): {DataToRetrieve: number, $: boolean};
	static GetSecureByte(Key: string,DataToRetrieve?: number): {DataToRetrieve: number, $: boolean};
	static GetSecureBool(Key: string,DataToRetrieve?: boolean): {DataToRetrieve: boolean, $: boolean};
	static DeleteSecureData(Key: string): boolean;
	static C(Other: UObject | any): MagicLeapSecureStorage;
}

declare class CameraCaptureComponent extends ActorComponent { 
	CaptureLogMessage: UnrealEngineMulticastDelegate<(LogMessage: string) => void>;
	CaptureImgToFileSuccess: UnrealEngineMulticastDelegate<(FilePath: string) => void>;
	CaptureImgToFileFailure: UnrealEngineMulticastDelegate<() => void>;
	CaptureImgToTextureSuccess: UnrealEngineMulticastDelegate<(CaptureTexture: Texture2D) => void>;
	CaptureImgToTextureFailure: UnrealEngineMulticastDelegate<() => void>;
	CaptureVidToFileSuccess: UnrealEngineMulticastDelegate<(FilePath: string) => void>;
	CaptureVidToFileFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): CameraCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): CameraCaptureComponent;
	static GetDefaultObject(): CameraCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CameraCaptureComponent;
	CaptureVideoToFileAsync(VideoLength: number): boolean;
	CaptureImageToTextureAsync(): boolean;
	CaptureImageToFileAsync(): boolean;
	static C(Other: UObject | any): CameraCaptureComponent;
}

declare class ImageTrackerComponent extends SceneComponent { 
	OnSetImageTargetSucceeded: UnrealEngineMulticastDelegate<() => void>;
	OnSetImageTargetFailed: UnrealEngineMulticastDelegate<() => void>;
	OnImageTargetFound: UnrealEngineMulticastDelegate<() => void>;
	OnImageTargetLost: UnrealEngineMulticastDelegate<() => void>;
	OnImageTargetUnreliableTracking: UnrealEngineMulticastDelegate<(LastTrackedLocation: Vector, LastTrackedRotation: Rotator, NewUnreliableLocation: Vector, NewUnreliableRotation: Rotator) => void>;
	TargetImageTexture: Texture2D;
	Name: string;
	LongerDimension: number;
	bIsStationary: boolean;
	bUseUnreliablePose: boolean;
	static Load(ResourceName: string): ImageTrackerComponent;
	static Find(Outer: UObject, ResourceName: string): ImageTrackerComponent;
	static GetDefaultObject(): ImageTrackerComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImageTrackerComponent;
	SetTargetAsync(ImageTarget: Texture2D): void;
	static C(Other: UObject | any): ImageTrackerComponent;
}

declare class ImageTrackerFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): ImageTrackerFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): ImageTrackerFunctionLibrary;
	static GetDefaultObject(): ImageTrackerFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImageTrackerFunctionLibrary;
	static SetMaxSimultaneousTargets(MaxSimultaneousTargets: number): void;
	static IsImageTrackingEnabled(): boolean;
	static GetMaxSimultaneousTargets(): number;
	static EnableImageTracking(bEnable: boolean): void;
	static C(Other: UObject | any): ImageTrackerFunctionLibrary;
}

declare type PurchaseType = 'Consumable' | 'Nonconsumable' | 'Undefined' | 'PurchaseType_MAX';
declare var PurchaseType : { Consumable:'Consumable',Nonconsumable:'Nonconsumable',Undefined:'Undefined',PurchaseType_MAX:'PurchaseType_MAX', };
declare class PurchaseItemDetails { 
	Price: string;
	Name: string;
	Type: PurchaseType;
	clone() : PurchaseItemDetails;
	static C(Other: UObject | any): PurchaseItemDetails;
}

declare class PurchaseConfirmation { 
	PackageName: string;
	Type: PurchaseType;
	clone() : PurchaseConfirmation;
	static C(Other: UObject | any): PurchaseConfirmation;
}

declare class InAppPurchaseComponent extends ActorComponent { 
	InAppPurchaseLogMessage: UnrealEngineMulticastDelegate<(LogMessage: string) => void>;
	GetItemsDetailsSuccess: UnrealEngineMulticastDelegate<(ItemsDetails: PurchaseItemDetails[]) => void>;
	GetItemsDetailsFailure: UnrealEngineMulticastDelegate<() => void>;
	PurchaseConfirmationSuccess: UnrealEngineMulticastDelegate<(PurchaseConfirmations: PurchaseConfirmation) => void>;
	PurchaseConfirmationFailure: UnrealEngineMulticastDelegate<() => void>;
	GetPurchaseHistorySuccess: UnrealEngineMulticastDelegate<(PurchaseHistory: PurchaseConfirmation[]) => void>;
	GetPurchaseHistoryFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): InAppPurchaseComponent;
	static Find(Outer: UObject, ResourceName: string): InAppPurchaseComponent;
	static GetDefaultObject(): InAppPurchaseComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseComponent;
	TryPurchaseItemAsync(ItemDetails: PurchaseItemDetails): boolean;
	TryGetPurchaseHistoryAsync(InNumPages: number): boolean;
	TryGetItemsDetailsAsync(ItemIDs: string[]): boolean;
	static C(Other: UObject | any): InAppPurchaseComponent;
}

declare class LightingTrackingComponent extends ActorComponent { 
	UseGlobalAmbience: boolean;
	UseColorTemp: boolean;
	static Load(ResourceName: string): LightingTrackingComponent;
	static Find(Outer: UObject, ResourceName: string): LightingTrackingComponent;
	static GetDefaultObject(): LightingTrackingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightingTrackingComponent;
	static C(Other: UObject | any): LightingTrackingComponent;
}

declare class MagicLeapARPinFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapARPinFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapARPinFunctionLibrary;
	static GetDefaultObject(): MagicLeapARPinFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapARPinFunctionLibrary;
	static GetNumAvailableARPins(Count?: number): {Count: number, $: EPassableWorldError};
	static GetClosestARPin(SearchPoint: Vector,PinID?: Guid): {PinID: Guid, $: EPassableWorldError};
	static GetAvailableARPins(NumRequested: number,Pins?: Guid[]): {Pins: Guid[], $: EPassableWorldError};
	static GetARPinPositionAndOrientation(PinID: Guid,Position?: Vector,Orientation?: Rotator,PinFoundInEnvironment?: boolean): {Position: Vector, Orientation: Rotator, PinFoundInEnvironment: boolean, $: boolean};
	static C(Other: UObject | any): MagicLeapARPinFunctionLibrary;
}

declare type EAutoPinType = 'OnlyOnDataRestoration' | 'Always' | 'Never' | 'EAutoPinType_MAX';
declare var EAutoPinType : { OnlyOnDataRestoration:'OnlyOnDataRestoration',Always:'Always',Never:'Never',EAutoPinType_MAX:'EAutoPinType_MAX', };
declare class MagicLeapARPinComponent extends SceneComponent { 
	ObjectUID: string;
	AutoPinType: EAutoPinType;
	bShouldPinActor: boolean;
	OnPersistentEntityPinned: UnrealEngineMulticastDelegate<(bRestoredOrSynced: boolean) => void>;
	PinnedCFUID: Guid;
	PinnedSceneComponent: SceneComponent;
	static Load(ResourceName: string): MagicLeapARPinComponent;
	static Find(Outer: UObject, ResourceName: string): MagicLeapARPinComponent;
	static GetDefaultObject(): MagicLeapARPinComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapARPinComponent;
	UnPin(): void;
	PinSceneComponent(ComponentToPin: SceneComponent): boolean;
	PinRestoredOrSynced(): boolean;
	PinActor(ActorToPin: Actor): boolean;
	IsPinned(): boolean;
	GetPinnedPinID(PinID?: Guid): {PinID: Guid, $: boolean};
	static C(Other: UObject | any): MagicLeapARPinComponent;
}

declare type EHeadTrackingMode = 'PositionAndOrientation' | 'OrientationOnly' | 'Unknown' | 'EHeadTrackingMode_MAX';
declare var EHeadTrackingMode : { PositionAndOrientation:'PositionAndOrientation',OrientationOnly:'OrientationOnly',Unknown:'Unknown',EHeadTrackingMode_MAX:'EHeadTrackingMode_MAX', };
declare type EHeadTrackingError = 'None' | 'NotEnoughFeatures' | 'LowLight' | 'Unknown' | 'EHeadTrackingError_MAX';
declare var EHeadTrackingError : { None:'None',NotEnoughFeatures:'NotEnoughFeatures',LowLight:'LowLight',Unknown:'Unknown',EHeadTrackingError_MAX:'EHeadTrackingError_MAX', };
declare class HeadTrackingState { 
	Mode: EHeadTrackingMode;
	Error: EHeadTrackingError;
	Confidence: number;
	clone() : HeadTrackingState;
	static C(Other: UObject | any): HeadTrackingState;
	GetHeadTrackingState(): {State: HeadTrackingState, $: boolean};
	static GetHeadTrackingState(State?: HeadTrackingState): {State: HeadTrackingState, $: boolean};
}

declare class MagicLeapHMDFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapHMDFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapHMDFunctionLibrary;
	static GetDefaultObject(): MagicLeapHMDFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapHMDFunctionLibrary;
	static SetFocusActor(InFocusActor: Actor): void;
	static SetBaseRotation(InBaseRotation: Rotator): void;
	static SetBasePosition(InBasePosition: Vector): void;
	static SetBaseOrientation(InBaseOrientation: Quat): void;
	static IsRunningOnMagicLeapHMD(): boolean;
	static GetMLSDKVersionRevision(): number;
	static GetMLSDKVersionMinor(): number;
	static GetMLSDKVersionMajor(): number;
	static GetMLSDKVersion(): string;
	static GetHeadTrackingState(State?: HeadTrackingState): {State: HeadTrackingState, $: boolean};
	static C(Other: UObject | any): MagicLeapHMDFunctionLibrary;
}

declare type EMagicLeapPrivilege = 'Invalid' | 'AudioRecognizer' | 'BatteryInfo' | 'CameraCapture' | 'WorldReconstruction' | 'InAppPurchase' | 'AudioCaptureMic' | 'DrmCertificates' | 'Occlusion' | 'LowLatencyLightwear' | 'Internet' | 'IdentityRead' | 'BackgroundDownload' | 'BackgroundUpload' | 'MediaDrm' | 'Media' | 'MediaMetadata' | 'PowerInfo' | 'LocalAreaNetwork' | 'VoiceInput' | 'Documents' | 'ConnectBackgroundMusicService' | 'RegisterBackgroundMusicService' | 'PwFoundObjRead' | 'NormalNotificationsUsage' | 'MusicService' | 'ControllerPose' | 'ScreensProvider' | 'GesturesSubscribe' | 'GesturesConfig' | 'EMagicLeapPrivilege_MAX';
declare var EMagicLeapPrivilege : { Invalid:'Invalid',AudioRecognizer:'AudioRecognizer',BatteryInfo:'BatteryInfo',CameraCapture:'CameraCapture',WorldReconstruction:'WorldReconstruction',InAppPurchase:'InAppPurchase',AudioCaptureMic:'AudioCaptureMic',DrmCertificates:'DrmCertificates',Occlusion:'Occlusion',LowLatencyLightwear:'LowLatencyLightwear',Internet:'Internet',IdentityRead:'IdentityRead',BackgroundDownload:'BackgroundDownload',BackgroundUpload:'BackgroundUpload',MediaDrm:'MediaDrm',Media:'Media',MediaMetadata:'MediaMetadata',PowerInfo:'PowerInfo',LocalAreaNetwork:'LocalAreaNetwork',VoiceInput:'VoiceInput',Documents:'Documents',ConnectBackgroundMusicService:'ConnectBackgroundMusicService',RegisterBackgroundMusicService:'RegisterBackgroundMusicService',PwFoundObjRead:'PwFoundObjRead',NormalNotificationsUsage:'NormalNotificationsUsage',MusicService:'MusicService',ControllerPose:'ControllerPose',ScreensProvider:'ScreensProvider',GesturesSubscribe:'GesturesSubscribe',GesturesConfig:'GesturesConfig',EMagicLeapPrivilege_MAX:'EMagicLeapPrivilege_MAX', };
declare class MagicLeapPrivileges extends ActorComponent { 
	static Load(ResourceName: string): MagicLeapPrivileges;
	static Find(Outer: UObject, ResourceName: string): MagicLeapPrivileges;
	static GetDefaultObject(): MagicLeapPrivileges;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapPrivileges;
	RequestPrivilege(Privilege: EMagicLeapPrivilege): boolean;
	CheckPrivilege(Privilege: EMagicLeapPrivilege): boolean;
	static C(Other: UObject | any): MagicLeapPrivileges;
}

declare class MagicLeapSettings extends UObject { 
	bEnableZI: boolean;
	static Load(ResourceName: string): MagicLeapSettings;
	static Find(Outer: UObject, ResourceName: string): MagicLeapSettings;
	static GetDefaultObject(): MagicLeapSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapSettings;
	static C(Other: UObject | any): MagicLeapSettings;
}

declare type EMeshType = 'Triangles' | 'PointCloud' | 'EMeshType_MAX';
declare var EMeshType : { Triangles:'Triangles',PointCloud:'PointCloud',EMeshType_MAX:'EMeshType_MAX', };
declare type EMeshLOD = 'Minimum' | 'Medium' | 'Maximum' | 'EMeshLOD_MAX';
declare var EMeshLOD : { Minimum:'Minimum',Medium:'Medium',Maximum:'Maximum',EMeshLOD_MAX:'EMeshLOD_MAX', };
declare type EMLMeshVertexColorMode = 'None' | 'Confidence' | 'Block' | 'EMLMeshVertexColorMode_MAX';
declare var EMLMeshVertexColorMode : { None:'None',Confidence:'Confidence',Block:'Block',EMLMeshVertexColorMode_MAX:'EMLMeshVertexColorMode_MAX', };
declare class MeshTrackerComponent extends SceneComponent { 
	OnMeshTrackerUpdated: UnrealEngineMulticastDelegate<(index: number, Vertices: Vector[], Triangles: number[], Normals: Vector[], Confidence: number[]) => void>;
	ScanWorld: boolean;
	MeshType: EMeshType;
	BoundingVolume: BoxComponent;
	LevelOfDetail: EMeshLOD;
	PerimeterOfGapsToFill: number;
	Planarize: boolean;
	DisconnectedSectionArea: number;
	RequestNormals: boolean;
	RequestVertexConfidence: boolean;
	VertexColorMode: EMLMeshVertexColorMode;
	BlockVertexColors: Color[];
	VertexColorFromConfidenceZero: LinearColor;
	VertexColorFromConfidenceOne: LinearColor;
	RemoveOverlappingTriangles: boolean;
	MRMesh: MRMeshComponent;
	static Load(ResourceName: string): MeshTrackerComponent;
	static Find(Outer: UObject, ResourceName: string): MeshTrackerComponent;
	static GetDefaultObject(): MeshTrackerComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshTrackerComponent;
	DisconnectMRMesh(InMRMeshPtr: MRMeshComponent): void;
	ConnectMRMesh(InMRMeshPtr: MRMeshComponent): void;
	static C(Other: UObject | any): MeshTrackerComponent;
}

declare type EPlaneQueryFlags = 'Vertical' | 'Horizontal' | 'Arbitrary' | 'OrientToGravity' | 'PreferInner' | 'IgnoreHoles' | 'Ceiling' | 'Floor' | 'Wall' | 'EPlaneQueryFlags_MAX';
declare var EPlaneQueryFlags : { Vertical:'Vertical',Horizontal:'Horizontal',Arbitrary:'Arbitrary',OrientToGravity:'OrientToGravity',PreferInner:'PreferInner',IgnoreHoles:'IgnoreHoles',Ceiling:'Ceiling',Floor:'Floor',Wall:'Wall',EPlaneQueryFlags_MAX:'EPlaneQueryFlags_MAX', };
declare class PlanesComponent extends SceneComponent { 
	QueryFlags: EPlaneQueryFlags[];
	SearchVolume: BoxComponent;
	MaxResults: number;
	MinHolePerimeter: number;
	MinPlaneArea: number;
	IgnoreBoundingVolume: boolean;
	static Load(ResourceName: string): PlanesComponent;
	static Find(Outer: UObject, ResourceName: string): PlanesComponent;
	static GetDefaultObject(): PlanesComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlanesComponent;
	static C(Other: UObject | any): PlanesComponent;
}

declare class RaycastComponent extends ActorComponent { 
	static Load(ResourceName: string): RaycastComponent;
	static Find(Outer: UObject, ResourceName: string): RaycastComponent;
	static GetDefaultObject(): RaycastComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RaycastComponent;
	static C(Other: UObject | any): RaycastComponent;
}

declare type EMLControllerTrackingMode = 'InputService' | 'CoordinateFrameUID' | 'EMLControllerTrackingMode_MAX';
declare var EMLControllerTrackingMode : { InputService:'InputService',CoordinateFrameUID:'CoordinateFrameUID',EMLControllerTrackingMode_MAX:'EMLControllerTrackingMode_MAX', };
declare type EMLControllerLEDEffect = 'RotateCW' | 'RotateCCW' | 'Pulse' | 'PaintCW' | 'PaintCCW' | 'Blink' | 'EMLControllerLEDEffect_MAX';
declare var EMLControllerLEDEffect : { RotateCW:'RotateCW',RotateCCW:'RotateCCW',Pulse:'Pulse',PaintCW:'PaintCW',PaintCCW:'PaintCCW',Blink:'Blink',EMLControllerLEDEffect_MAX:'EMLControllerLEDEffect_MAX', };
declare type EMLControllerLEDSpeed = 'Slow' | 'Medium' | 'Fast' | 'EMLControllerLEDSpeed_MAX';
declare var EMLControllerLEDSpeed : { Slow:'Slow',Medium:'Medium',Fast:'Fast',EMLControllerLEDSpeed_MAX:'EMLControllerLEDSpeed_MAX', };
declare type EMLControllerLEDPattern = 'None' | 'Clock01' | 'Clock02' | 'Clock03' | 'Clock04' | 'Clock05' | 'Clock06' | 'Clock07' | 'Clock08' | 'Clock09' | 'Clock10' | 'Clock11' | 'Clock12' | 'Clock01_07' | 'Clock02_08' | 'Clock03_09' | 'Clock04_10' | 'Clock05_11' | 'Clock06_12' | 'EMLControllerLEDPattern_MAX';
declare var EMLControllerLEDPattern : { None:'None',Clock01:'Clock01',Clock02:'Clock02',Clock03:'Clock03',Clock04:'Clock04',Clock05:'Clock05',Clock06:'Clock06',Clock07:'Clock07',Clock08:'Clock08',Clock09:'Clock09',Clock10:'Clock10',Clock11:'Clock11',Clock12:'Clock12',Clock01_07:'Clock01_07',Clock02_08:'Clock02_08',Clock03_09:'Clock03_09',Clock04_10:'Clock04_10',Clock05_11:'Clock05_11',Clock06_12:'Clock06_12',EMLControllerLEDPattern_MAX:'EMLControllerLEDPattern_MAX', };
declare type EMLControllerLEDColor = 'BrightMissionRed' | 'PastelMissionRed' | 'BrightFloridaOrange' | 'PastelFloridaOrange' | 'BrightLunaYellow' | 'PastelLunaYellow' | 'BrightNebulaPink' | 'PastelNebulaPink' | 'BrightCosmicPurple' | 'PastelCosmicPurple' | 'BrightMysticBlue' | 'PastelMysticBlue' | 'BrightCelestialBlue' | 'PastelCelestialBlue' | 'BrightShaggleGreen' | 'PastelShaggleGreen' | 'EMLControllerLEDColor_MAX';
declare var EMLControllerLEDColor : { BrightMissionRed:'BrightMissionRed',PastelMissionRed:'PastelMissionRed',BrightFloridaOrange:'BrightFloridaOrange',PastelFloridaOrange:'PastelFloridaOrange',BrightLunaYellow:'BrightLunaYellow',PastelLunaYellow:'PastelLunaYellow',BrightNebulaPink:'BrightNebulaPink',PastelNebulaPink:'PastelNebulaPink',BrightCosmicPurple:'BrightCosmicPurple',PastelCosmicPurple:'PastelCosmicPurple',BrightMysticBlue:'BrightMysticBlue',PastelMysticBlue:'PastelMysticBlue',BrightCelestialBlue:'BrightCelestialBlue',PastelCelestialBlue:'PastelCelestialBlue',BrightShaggleGreen:'BrightShaggleGreen',PastelShaggleGreen:'PastelShaggleGreen',EMLControllerLEDColor_MAX:'EMLControllerLEDColor_MAX', };
declare type EMLControllerHapticPattern = 'None' | 'Click' | 'Bump' | 'DoubleClick' | 'Buzz' | 'Tick' | 'ForceDown' | 'ForceUp' | 'ForceDwell' | 'SecondForceDown' | 'EMLControllerHapticPattern_MAX';
declare var EMLControllerHapticPattern : { None:'None',Click:'Click',Bump:'Bump',DoubleClick:'DoubleClick',Buzz:'Buzz',Tick:'Tick',ForceDown:'ForceDown',ForceUp:'ForceUp',ForceDwell:'ForceDwell',SecondForceDown:'SecondForceDown',EMLControllerHapticPattern_MAX:'EMLControllerHapticPattern_MAX', };
declare type EMLControllerHapticIntensity = 'Low' | 'Medium' | 'High' | 'EMLControllerHapticIntensity_MAX';
declare var EMLControllerHapticIntensity : { Low:'Low',Medium:'Medium',High:'High',EMLControllerHapticIntensity_MAX:'EMLControllerHapticIntensity_MAX', };
declare type EMLControllerType = 'None' | 'Device' | 'MobileApp' | 'EMLControllerType_MAX';
declare var EMLControllerType : { None:'None',Device:'Device',MobileApp:'MobileApp',EMLControllerType_MAX:'EMLControllerType_MAX', };
declare class MagicLeapControllerFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapControllerFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapControllerFunctionLibrary;
	static GetDefaultObject(): MagicLeapControllerFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapControllerFunctionLibrary;
	static SetControllerTrackingMode(TrackingMode: EMLControllerTrackingMode): boolean;
	static PlayControllerLEDEffect(Hand: EControllerHand,LEDEffect: EMLControllerLEDEffect,LEDSpeed: EMLControllerLEDSpeed,LEDPattern: EMLControllerLEDPattern,LEDColor: EMLControllerLEDColor,DurationInSec: number): boolean;
	static PlayControllerLED(Hand: EControllerHand,LEDPattern: EMLControllerLEDPattern,LEDColor: EMLControllerLEDColor,DurationInSec: number): boolean;
	static PlayControllerHapticFeedback(Hand: EControllerHand,HapticPattern: EMLControllerHapticPattern,Intensity: EMLControllerHapticIntensity): boolean;
	static MaxSupportedMagicLeapControllers(): number;
	static InvertControllerMapping(): void;
	static GetMLControllerType(Hand: EControllerHand): EMLControllerType;
	static GetControllerTrackingMode(): EMLControllerTrackingMode;
	static GetControllerMapping(ControllerIndex: number,Hand?: EControllerHand): {Hand: EControllerHand, $: boolean};
	static C(Other: UObject | any): MagicLeapControllerFunctionLibrary;
}

declare type EMagicLeapTouchpadGestureType = 'None' | 'Tap' | 'ForceTapDown' | 'ForceTapUp' | 'ForceDwell' | 'SecondForceDown' | 'LongHold' | 'RadialScroll' | 'Swipe' | 'Scroll' | 'Pinch' | 'EMagicLeapTouchpadGestureType_MAX';
declare var EMagicLeapTouchpadGestureType : { None:'None',Tap:'Tap',ForceTapDown:'ForceTapDown',ForceTapUp:'ForceTapUp',ForceDwell:'ForceDwell',SecondForceDown:'SecondForceDown',LongHold:'LongHold',RadialScroll:'RadialScroll',Swipe:'Swipe',Scroll:'Scroll',Pinch:'Pinch',EMagicLeapTouchpadGestureType_MAX:'EMagicLeapTouchpadGestureType_MAX', };
declare type EMagicLeapTouchpadGestureDirection = 'None' | 'Up' | 'Down' | 'Left' | 'Right' | 'In' | 'Out' | 'Clockwise' | 'CounterClockwise' | 'EMagicLeapTouchpadGestureDirection_MAX';
declare var EMagicLeapTouchpadGestureDirection : { None:'None',Up:'Up',Down:'Down',Left:'Left',Right:'Right',In:'In',Out:'Out',Clockwise:'Clockwise',CounterClockwise:'CounterClockwise',EMagicLeapTouchpadGestureDirection_MAX:'EMagicLeapTouchpadGestureDirection_MAX', };
declare class MagicLeapTouchpadGesture { 
	Hand: EControllerHand;
	Type: EMagicLeapTouchpadGestureType;
	Direction: EMagicLeapTouchpadGestureDirection;
	PositionAndForce: Vector;
	Speed: number;
	Distance: number;
	FingerGap: number;
	Radius: number;
	Angle: number;
	clone() : MagicLeapTouchpadGesture;
	static C(Other: UObject | any): MagicLeapTouchpadGesture;
}

declare class TouchpadGesturesComponent extends ActorComponent { 
	OnTouchpadGestureStart: UnrealEngineMulticastDelegate<(GestureData: MagicLeapTouchpadGesture) => void>;
	OnTouchpadGestureContinue: UnrealEngineMulticastDelegate<(GestureData: MagicLeapTouchpadGesture) => void>;
	OnTouchpadGestureEnd: UnrealEngineMulticastDelegate<(GestureData: MagicLeapTouchpadGesture) => void>;
	static Load(ResourceName: string): TouchpadGesturesComponent;
	static Find(Outer: UObject, ResourceName: string): TouchpadGesturesComponent;
	static GetDefaultObject(): TouchpadGesturesComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TouchpadGesturesComponent;
	static C(Other: UObject | any): TouchpadGesturesComponent;
}

declare class EyeTrackerStereoGazeData { 
	LeftEyeOrigin: Vector;
	LeftEyeDirection: Vector;
	RightEyeOrigin: Vector;
	RightEyeDirection: Vector;
	FixationPoint: Vector;
	ConfidenceValue: number;
	clone() : EyeTrackerStereoGazeData;
	static C(Other: UObject | any): EyeTrackerStereoGazeData;
	GetStereoGazeData(): {OutGazeData: EyeTrackerStereoGazeData, $: boolean};
	static GetStereoGazeData(OutGazeData?: EyeTrackerStereoGazeData): {OutGazeData: EyeTrackerStereoGazeData, $: boolean};
}

declare class EyeTrackerGazeData { 
	GazeOrigin: Vector;
	GazeDirection: Vector;
	FixationPoint: Vector;
	ConfidenceValue: number;
	clone() : EyeTrackerGazeData;
	static C(Other: UObject | any): EyeTrackerGazeData;
	GetGazeData(): {OutGazeData: EyeTrackerGazeData, $: boolean};
	static GetGazeData(OutGazeData?: EyeTrackerGazeData): {OutGazeData: EyeTrackerGazeData, $: boolean};
}

declare class EyeTrackerFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): EyeTrackerFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): EyeTrackerFunctionLibrary;
	static GetDefaultObject(): EyeTrackerFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EyeTrackerFunctionLibrary;
	static SetEyeTrackedPlayer(PlayerController: PlayerController): void;
	static IsStereoGazeDataAvailable(): boolean;
	static IsEyeTrackerConnected(): boolean;
	static GetStereoGazeData(OutGazeData?: EyeTrackerStereoGazeData): {OutGazeData: EyeTrackerStereoGazeData, $: boolean};
	static GetGazeData(OutGazeData?: EyeTrackerGazeData): {OutGazeData: EyeTrackerGazeData, $: boolean};
	static C(Other: UObject | any): EyeTrackerFunctionLibrary;
}

declare class MagicLeapFixationComfort { 
	FixationDepthIsUncomfortable: boolean;
	FixationDepthViolationHasOccurred: boolean;
	RemainingTimeAtUncomfortableDepth: number;
	clone() : MagicLeapFixationComfort;
	static C(Other: UObject | any): MagicLeapFixationComfort;
	GetFixationComfort(): {FixationComfort: MagicLeapFixationComfort, $: boolean};
	static GetFixationComfort(FixationComfort?: MagicLeapFixationComfort): {FixationComfort: MagicLeapFixationComfort, $: boolean};
}

declare class MagicLeapEyeBlinkState { 
	LeftEyeBlinked: boolean;
	RightEyeBlinked: boolean;
	clone() : MagicLeapEyeBlinkState;
	static C(Other: UObject | any): MagicLeapEyeBlinkState;
	GetEyeBlinkState(): {BlinkState: MagicLeapEyeBlinkState, $: boolean};
	static GetEyeBlinkState(BlinkState?: MagicLeapEyeBlinkState): {BlinkState: MagicLeapEyeBlinkState, $: boolean};
}

declare type EMagicLeapEyeTrackingCalibrationStatus = 'None' | 'Bad' | 'Good' | 'EMagicLeapEyeTrackingCalibrationStatus_MAX';
declare var EMagicLeapEyeTrackingCalibrationStatus : { None:'None',Bad:'Bad',Good:'Good',EMagicLeapEyeTrackingCalibrationStatus_MAX:'EMagicLeapEyeTrackingCalibrationStatus_MAX', };
declare class MagicLeapEyeTrackerFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapEyeTrackerFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapEyeTrackerFunctionLibrary;
	static GetDefaultObject(): MagicLeapEyeTrackerFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapEyeTrackerFunctionLibrary;
	static IsEyeTrackerCalibrated(): boolean;
	static GetFixationComfort(FixationComfort?: MagicLeapFixationComfort): {FixationComfort: MagicLeapFixationComfort, $: boolean};
	static GetEyeBlinkState(BlinkState?: MagicLeapEyeBlinkState): {BlinkState: MagicLeapEyeBlinkState, $: boolean};
	static GetCalibrationStatus(): EMagicLeapEyeTrackingCalibrationStatus;
	static C(Other: UObject | any): MagicLeapEyeTrackerFunctionLibrary;
}

declare class LiveLinkSourceFactory extends UObject { 
	static Load(ResourceName: string): LiveLinkSourceFactory;
	static Find(Outer: UObject, ResourceName: string): LiveLinkSourceFactory;
	static GetDefaultObject(): LiveLinkSourceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkSourceFactory;
	static C(Other: UObject | any): LiveLinkSourceFactory;
}

declare type ELiveLinkSourceMode = 'Default' | 'Interpolated' | 'TimeSynchronized' | 'ELiveLinkSourceMode_MAX';
declare var ELiveLinkSourceMode : { Default:'Default',Interpolated:'Interpolated',TimeSynchronized:'TimeSynchronized',ELiveLinkSourceMode_MAX:'ELiveLinkSourceMode_MAX', };
declare class LiveLinkInterpolationSettings { 
	bUseInterpolation: boolean;
	InterpolationOffset: number;
	clone() : LiveLinkInterpolationSettings;
	static C(Other: UObject | any): LiveLinkInterpolationSettings;
}

declare class LiveLinkTimeSynchronizationSettings { 
	FrameRate: FrameRate;
	clone() : LiveLinkTimeSynchronizationSettings;
	static C(Other: UObject | any): LiveLinkTimeSynchronizationSettings;
}

declare class LiveLinkSourceSettings extends UObject { 
	Mode: ELiveLinkSourceMode;
	InterpolationSettings: LiveLinkInterpolationSettings;
	TimeSynchronizationSettings: LiveLinkTimeSynchronizationSettings;
	static Load(ResourceName: string): LiveLinkSourceSettings;
	static Find(Outer: UObject, ResourceName: string): LiveLinkSourceSettings;
	static GetDefaultObject(): LiveLinkSourceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkSourceSettings;
	static C(Other: UObject | any): LiveLinkSourceSettings;
}

declare class LiveLinkMagicLeapHandTrackingSourceFactory extends LiveLinkSourceFactory { 
	static Load(ResourceName: string): LiveLinkMagicLeapHandTrackingSourceFactory;
	static Find(Outer: UObject, ResourceName: string): LiveLinkMagicLeapHandTrackingSourceFactory;
	static GetDefaultObject(): LiveLinkMagicLeapHandTrackingSourceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkMagicLeapHandTrackingSourceFactory;
	static C(Other: UObject | any): LiveLinkMagicLeapHandTrackingSourceFactory;
}

declare type EHandTrackingGesture = 'Finger' | 'Fist' | 'Pinch' | 'Thumb' | 'L' | 'OpenHandBack' | 'Ok' | 'C' | 'NoPose' | 'NoHand' | 'EHandTrackingGesture_MAX';
declare var EHandTrackingGesture : { Finger:'Finger',Fist:'Fist',Pinch:'Pinch',Thumb:'Thumb',L:'L',OpenHandBack:'OpenHandBack',Ok:'Ok',C:'C',NoPose:'NoPose',NoHand:'NoHand',EHandTrackingGesture_MAX:'EHandTrackingGesture_MAX', };
declare type EHandTrackingKeypointFilterLevel = 'NoFilter' | 'SimpleSmoothing' | 'PredictiveSmoothing' | 'EHandTrackingKeypointFilterLevel_MAX';
declare var EHandTrackingKeypointFilterLevel : { NoFilter:'NoFilter',SimpleSmoothing:'SimpleSmoothing',PredictiveSmoothing:'PredictiveSmoothing',EHandTrackingKeypointFilterLevel_MAX:'EHandTrackingKeypointFilterLevel_MAX', };
declare type EHandTrackingGestureFilterLevel = 'NoFilter' | 'SlightRobustnessToFlicker' | 'MoreRobustnessToFlicker' | 'EHandTrackingGestureFilterLevel_MAX';
declare var EHandTrackingGestureFilterLevel : { NoFilter:'NoFilter',SlightRobustnessToFlicker:'SlightRobustnessToFlicker',MoreRobustnessToFlicker:'MoreRobustnessToFlicker',EHandTrackingGestureFilterLevel_MAX:'EHandTrackingGestureFilterLevel_MAX', };
declare class LiveLinkSourceHandle { 
	clone() : LiveLinkSourceHandle;
	static C(Other: UObject | any): LiveLinkSourceHandle;
	GetMagicLeapHandTrackingLiveLinkSource(): {SourceHandle: LiveLinkSourceHandle, $: boolean};
	static GetMagicLeapHandTrackingLiveLinkSource(SourceHandle?: LiveLinkSourceHandle): {SourceHandle: LiveLinkSourceHandle, $: boolean};
}

declare type EGestureTransformSpace = 'World' | 'Hand' | 'Tracking' | 'EGestureTransformSpace_MAX';
declare var EGestureTransformSpace : { World:'World',Hand:'Hand',Tracking:'Tracking',EGestureTransformSpace_MAX:'EGestureTransformSpace_MAX', };
declare type EHandTrackingKeypoint = 'Thumb_Tip' | 'Thumb_IP' | 'Thumb_MCP' | 'Thumb_CMC' | 'Index_Tip' | 'Index_DIP' | 'Index_PIP' | 'Index_MCP' | 'Middle_Tip' | 'Middle_DIP' | 'Middle_PIP' | 'Middle_MCP' | 'Ring_Tip' | 'Ring_DIP' | 'Ring_PIP' | 'Ring_MCP' | 'Pinky_Tip' | 'Pinky_DIP' | 'Pinky_PIP' | 'Pinky_MCP' | 'Wrist_Center' | 'Wrist_Ulnar' | 'Wrist_Radial' | 'Hand_Center' | 'EHandTrackingKeypoint_MAX';
declare var EHandTrackingKeypoint : { Thumb_Tip:'Thumb_Tip',Thumb_IP:'Thumb_IP',Thumb_MCP:'Thumb_MCP',Thumb_CMC:'Thumb_CMC',Index_Tip:'Index_Tip',Index_DIP:'Index_DIP',Index_PIP:'Index_PIP',Index_MCP:'Index_MCP',Middle_Tip:'Middle_Tip',Middle_DIP:'Middle_DIP',Middle_PIP:'Middle_PIP',Middle_MCP:'Middle_MCP',Ring_Tip:'Ring_Tip',Ring_DIP:'Ring_DIP',Ring_PIP:'Ring_PIP',Ring_MCP:'Ring_MCP',Pinky_Tip:'Pinky_Tip',Pinky_DIP:'Pinky_DIP',Pinky_PIP:'Pinky_PIP',Pinky_MCP:'Pinky_MCP',Wrist_Center:'Wrist_Center',Wrist_Ulnar:'Wrist_Ulnar',Wrist_Radial:'Wrist_Radial',Hand_Center:'Hand_Center',EHandTrackingKeypoint_MAX:'EHandTrackingKeypoint_MAX', };
declare class MagicLeapHandTrackingFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapHandTrackingFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapHandTrackingFunctionLibrary;
	static GetDefaultObject(): MagicLeapHandTrackingFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapHandTrackingFunctionLibrary;
	static SetStaticGestureConfidenceThreshold(Gesture: EHandTrackingGesture,Confidence: number): void;
	static SetConfiguration(StaticGesturesToActivate: EHandTrackingGesture[],KeypointsFilterLevel: EHandTrackingKeypointFilterLevel,GestureFilterLevel: EHandTrackingGestureFilterLevel,HandSwitchingFilterLevel: EHandTrackingGestureFilterLevel,bTrackingEnabled: boolean): boolean;
	static GetStaticGestureConfidenceThreshold(Gesture: EHandTrackingGesture): number;
	static GetMagicLeapHandTrackingLiveLinkSource(SourceHandle?: LiveLinkSourceHandle): {SourceHandle: LiveLinkSourceHandle, $: boolean};
	static GetHandThumbTip(Hand: EControllerHand,TransformSpace: EGestureTransformSpace,Secondary?: Transform): {Secondary: Transform, $: boolean};
	static GetHandIndexFingerTip(Hand: EControllerHand,TransformSpace: EGestureTransformSpace,Pointer?: Transform): {Pointer: Transform, $: boolean};
	static GetHandCenterNormalized(Hand: EControllerHand,HandCenterNormalized?: Vector): {HandCenterNormalized: Vector, $: boolean};
	static GetHandCenter(Hand: EControllerHand,HandCenter?: Transform): {HandCenter: Transform, $: boolean};
	static GetGestureKeypointTransform(Hand: EControllerHand,Keypoint: EHandTrackingKeypoint,TransformSpace: EGestureTransformSpace,Transform?: Transform): {Transform: Transform, $: boolean};
	static GetGestureKeypoints(Hand: EControllerHand,Keypoints?: Transform[]): {Keypoints: Transform[], $: boolean};
	static GetCurrentGestureConfidence(Hand: EControllerHand,Confidence?: number): {Confidence: number, $: boolean};
	static GetCurrentGesture(Hand: EControllerHand,Gesture?: EHandTrackingGesture): {Gesture: EHandTrackingGesture, $: boolean};
	static GetConfiguration(ActiveStaticGestures?: EHandTrackingGesture[],KeypointsFilterLevel?: EHandTrackingKeypointFilterLevel,GestureFilterLevel?: EHandTrackingGestureFilterLevel,HandSwitchingFilterLevel?: EHandTrackingGestureFilterLevel,bTrackingEnabled?: boolean): {ActiveStaticGestures: EHandTrackingGesture[], KeypointsFilterLevel: EHandTrackingKeypointFilterLevel, GestureFilterLevel: EHandTrackingGestureFilterLevel, HandSwitchingFilterLevel: EHandTrackingGestureFilterLevel, bTrackingEnabled: boolean, $: boolean};
	static C(Other: UObject | any): MagicLeapHandTrackingFunctionLibrary;
}

declare type EMagicLeapIdentityKey = 'GivenName' | 'FamilyName' | 'Email' | 'Bio' | 'PhoneNumber' | 'Avatar2D' | 'Avatar3D' | 'Unknown' | 'EMagicLeapIdentityKey_MAX';
declare var EMagicLeapIdentityKey : { GivenName:'GivenName',FamilyName:'FamilyName',Email:'Email',Bio:'Bio',PhoneNumber:'PhoneNumber',Avatar2D:'Avatar2D',Avatar3D:'Avatar3D',Unknown:'Unknown',EMagicLeapIdentityKey_MAX:'EMagicLeapIdentityKey_MAX', };
declare class MagicLeapIdentityAttribute { 
	Attribute: EMagicLeapIdentityKey;
	Value: string;
	clone() : MagicLeapIdentityAttribute;
	static C(Other: UObject | any): MagicLeapIdentityAttribute;
}

declare type EMagicLeapIdentityError = 'Ok' | 'InvalidParam' | 'AllocFailed' | 'PrivilegeDenied' | 'FailedToConnectToLocalService' | 'FailedToConnectToCloudService' | 'CloudAuthentication' | 'InvalidInformationFromCloud' | 'NotLoggedIn' | 'ExpiredCredentials' | 'FailedToGetUserProfile' | 'Unauthorized' | 'CertificateError' | 'RejectedByCloud' | 'AlreadyLoggedIn' | 'ModifyIsNotSupported' | 'NetworkError' | 'UnspecifiedFailure' | 'EMagicLeapIdentityError_MAX';
declare var EMagicLeapIdentityError : { Ok:'Ok',InvalidParam:'InvalidParam',AllocFailed:'AllocFailed',PrivilegeDenied:'PrivilegeDenied',FailedToConnectToLocalService:'FailedToConnectToLocalService',FailedToConnectToCloudService:'FailedToConnectToCloudService',CloudAuthentication:'CloudAuthentication',InvalidInformationFromCloud:'InvalidInformationFromCloud',NotLoggedIn:'NotLoggedIn',ExpiredCredentials:'ExpiredCredentials',FailedToGetUserProfile:'FailedToGetUserProfile',Unauthorized:'Unauthorized',CertificateError:'CertificateError',RejectedByCloud:'RejectedByCloud',AlreadyLoggedIn:'AlreadyLoggedIn',ModifyIsNotSupported:'ModifyIsNotSupported',NetworkError:'NetworkError',UnspecifiedFailure:'UnspecifiedFailure',EMagicLeapIdentityError_MAX:'EMagicLeapIdentityError_MAX', };
declare class MagicLeapIdentity extends UObject { 
	static Load(ResourceName: string): MagicLeapIdentity;
	static Find(Outer: UObject, ResourceName: string): MagicLeapIdentity;
	static GetDefaultObject(): MagicLeapIdentity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapIdentity;
	RequestAttributeValue(RequestedAttributeList: EMagicLeapIdentityKey[],RequestedAttributeValues?: MagicLeapIdentityAttribute[]): {RequestedAttributeValues: MagicLeapIdentityAttribute[], $: EMagicLeapIdentityError};
	GetAllAvailableAttributes(AvailableAttributes?: EMagicLeapIdentityKey[]): {AvailableAttributes: EMagicLeapIdentityKey[], $: EMagicLeapIdentityError};
	static C(Other: UObject | any): MagicLeapIdentity;
}

declare class NamedInterface { 
	InterfaceName: string;
	InterfaceObject: UObject;
	clone() : NamedInterface;
	static C(Other: UObject | any): NamedInterface;
}

declare class NamedInterfaceDef { 
	InterfaceName: string;
	InterfaceClassName: string;
	clone() : NamedInterfaceDef;
	static C(Other: UObject | any): NamedInterfaceDef;
}

declare class NamedInterfaces extends UObject { 
	NamedInterfaces: NamedInterface[];
	NamedInterfaceDefs: NamedInterfaceDef[];
	static Load(ResourceName: string): NamedInterfaces;
	static Find(Outer: UObject, ResourceName: string): NamedInterfaces;
	static GetDefaultObject(): NamedInterfaces;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NamedInterfaces;
	static C(Other: UObject | any): NamedInterfaces;
}

declare class TurnBasedMatchInterface extends Interface { 
	static Load(ResourceName: string): TurnBasedMatchInterface;
	static Find(Outer: UObject, ResourceName: string): TurnBasedMatchInterface;
	static GetDefaultObject(): TurnBasedMatchInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TurnBasedMatchInterface;
	OnMatchReceivedTurn(Match: string,bDidBecomeActive: boolean): void;
	OnMatchEnded(Match: string): void;
	static C(Other: UObject | any): TurnBasedMatchInterface;
}

declare class AchievementBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AchievementBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AchievementBlueprintLibrary;
	static GetDefaultObject(): AchievementBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementBlueprintLibrary;
	static GetCachedAchievementProgress(WorldContextObject: UObject,PlayerController: PlayerController,AchievementID: string,bFoundID?: boolean,Progress?: number): {bFoundID: boolean, Progress: number};
	static GetCachedAchievementDescription(WorldContextObject: UObject,PlayerController: PlayerController,AchievementID: string,bFoundID?: boolean,Title?: string,LockedDescription?: string,UnlockedDescription?: string,bHidden?: boolean): {bFoundID: boolean, Title: string, LockedDescription: string, UnlockedDescription: string, bHidden: boolean};
	static C(Other: UObject | any): AchievementBlueprintLibrary;
}

declare class AchievementQueryCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): AchievementQueryCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AchievementQueryCallbackProxy;
	static GetDefaultObject(): AchievementQueryCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementQueryCallbackProxy;
	static CacheAchievements(WorldContextObject: UObject,PlayerController: PlayerController): AchievementQueryCallbackProxy;
	static CacheAchievementDescriptions(WorldContextObject: UObject,PlayerController: PlayerController): AchievementQueryCallbackProxy;
	static C(Other: UObject | any): AchievementQueryCallbackProxy;
}

declare class AchievementWriteCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(WrittenAchievementName: string, WrittenProgress: number, WrittenUserTag: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(WrittenAchievementName: string, WrittenProgress: number, WrittenUserTag: number) => void>;
	static Load(ResourceName: string): AchievementWriteCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AchievementWriteCallbackProxy;
	static GetDefaultObject(): AchievementWriteCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementWriteCallbackProxy;
	static WriteAchievementProgress(WorldContextObject: UObject,PlayerController: PlayerController,AchievementName: string,Progress: number,UserTag: number): AchievementWriteCallbackProxy;
	static C(Other: UObject | any): AchievementWriteCallbackProxy;
}

declare class ConnectionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
	static Load(ResourceName: string): ConnectionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): ConnectionCallbackProxy;
	static GetDefaultObject(): ConnectionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConnectionCallbackProxy;
	static ConnectToService(WorldContextObject: UObject,PlayerController: PlayerController): ConnectionCallbackProxy;
	static C(Other: UObject | any): ConnectionCallbackProxy;
}

declare class CreateSessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): CreateSessionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): CreateSessionCallbackProxy;
	static GetDefaultObject(): CreateSessionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CreateSessionCallbackProxy;
	static CreateSession(WorldContextObject: UObject,PlayerController: PlayerController,PublicConnections: number,bUseLAN: boolean): CreateSessionCallbackProxy;
	static C(Other: UObject | any): CreateSessionCallbackProxy;
}

declare class DestroySessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): DestroySessionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): DestroySessionCallbackProxy;
	static GetDefaultObject(): DestroySessionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DestroySessionCallbackProxy;
	static DestroySession(WorldContextObject: UObject,PlayerController: PlayerController): DestroySessionCallbackProxy;
	static C(Other: UObject | any): DestroySessionCallbackProxy;
}

declare class EndMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): EndMatchCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): EndMatchCallbackProxy;
	static GetDefaultObject(): EndMatchCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndMatchCallbackProxy;
	static C(Other: UObject | any): EndMatchCallbackProxy;
}

declare class EndTurnCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): EndTurnCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): EndTurnCallbackProxy;
	static GetDefaultObject(): EndTurnCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndTurnCallbackProxy;
	static C(Other: UObject | any): EndTurnCallbackProxy;
}

declare class BlueprintSessionResult { 
	clone() : BlueprintSessionResult;
	static C(Other: UObject | any): BlueprintSessionResult;
}

declare class FindSessionsCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(Results: BlueprintSessionResult[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(Results: BlueprintSessionResult[]) => void>;
	static Load(ResourceName: string): FindSessionsCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): FindSessionsCallbackProxy;
	static GetDefaultObject(): FindSessionsCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FindSessionsCallbackProxy;
	static GetServerName(Result: BlueprintSessionResult): string;
	static GetPingInMs(Result: BlueprintSessionResult): number;
	static GetMaxPlayers(Result: BlueprintSessionResult): number;
	static GetCurrentPlayers(Result: BlueprintSessionResult): number;
	static FindSessions(WorldContextObject: UObject,PlayerController: PlayerController,MaxResults: number,bUseLAN: boolean): FindSessionsCallbackProxy;
	static C(Other: UObject | any): FindSessionsCallbackProxy;
}

declare class FindTurnBasedMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
	static Load(ResourceName: string): FindTurnBasedMatchCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): FindTurnBasedMatchCallbackProxy;
	static GetDefaultObject(): FindTurnBasedMatchCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FindTurnBasedMatchCallbackProxy;
	static C(Other: UObject | any): FindTurnBasedMatchCallbackProxy;
}

declare type EInAppPurchaseState = 'Unknown' | 'Success' | 'Failed' | 'Cancelled' | 'Invalid' | 'NotAllowed' | 'Restored' | 'AlreadyOwned' | 'EInAppPurchaseState_MAX';
declare var EInAppPurchaseState : { Unknown:'Unknown',Success:'Success',Failed:'Failed',Cancelled:'Cancelled',Invalid:'Invalid',NotAllowed:'NotAllowed',Restored:'Restored',AlreadyOwned:'AlreadyOwned',EInAppPurchaseState_MAX:'EInAppPurchaseState_MAX', };
declare class InAppPurchaseProductInfo { 
	Identifier: string;
	TransactionIdentifier: string;
	DisplayName: string;
	DisplayDescription: string;
	DisplayPrice: string;
	RawPrice: number;
	CurrencyCode: string;
	CurrencySymbol: string;
	DecimalSeparator: string;
	GroupingSeparator: string;
	ReceiptData: string;
	clone() : InAppPurchaseProductInfo;
	static C(Other: UObject | any): InAppPurchaseProductInfo;
}

declare class InAppPurchaseProductRequest { 
	ProductIdentifier: string;
	bIsConsumable: boolean;
	clone() : InAppPurchaseProductRequest;
	static C(Other: UObject | any): InAppPurchaseProductRequest;
}

declare class InAppPurchaseCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppPurchaseInformation: InAppPurchaseProductInfo) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppPurchaseInformation: InAppPurchaseProductInfo) => void>;
	static Load(ResourceName: string): InAppPurchaseCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): InAppPurchaseCallbackProxy;
	static GetDefaultObject(): InAppPurchaseCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseCallbackProxy;
	static CreateProxyObjectForInAppPurchase(PlayerController: PlayerController,ProductRequest: InAppPurchaseProductRequest): InAppPurchaseCallbackProxy;
	static C(Other: UObject | any): InAppPurchaseCallbackProxy;
}

declare class InAppPurchaseQueryCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void>;
	static Load(ResourceName: string): InAppPurchaseQueryCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): InAppPurchaseQueryCallbackProxy;
	static GetDefaultObject(): InAppPurchaseQueryCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseQueryCallbackProxy;
	static CreateProxyObjectForInAppPurchaseQuery(PlayerController: PlayerController,ProductIdentifiers: string[]): InAppPurchaseQueryCallbackProxy;
	static C(Other: UObject | any): InAppPurchaseQueryCallbackProxy;
}

declare class InAppPurchaseRestoreInfo { 
	Identifier: string;
	ReceiptData: string;
	TransactionIdentifier: string;
	clone() : InAppPurchaseRestoreInfo;
	static C(Other: UObject | any): InAppPurchaseRestoreInfo;
}

declare class InAppPurchaseRestoreCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]) => void>;
	static Load(ResourceName: string): InAppPurchaseRestoreCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): InAppPurchaseRestoreCallbackProxy;
	static GetDefaultObject(): InAppPurchaseRestoreCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseRestoreCallbackProxy;
	static CreateProxyObjectForInAppPurchaseRestore(ConsumableProductFlags: InAppPurchaseProductRequest[],PlayerController: PlayerController): InAppPurchaseRestoreCallbackProxy;
	static C(Other: UObject | any): InAppPurchaseRestoreCallbackProxy;
}

declare class IpConnection extends NetConnection { 
	static Load(ResourceName: string): IpConnection;
	static Find(Outer: UObject, ResourceName: string): IpConnection;
	static GetDefaultObject(): IpConnection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IpConnection;
	static C(Other: UObject | any): IpConnection;
}

declare class IpNetDriver extends NetDriver { 
	LogPortUnreach: boolean;
	AllowPlayerPortUnreach: boolean;
	MaxPortCountToTry: any;
	ServerDesiredSocketReceiveBufferBytes: any;
	ServerDesiredSocketSendBufferBytes: any;
	ClientDesiredSocketReceiveBufferBytes: any;
	ClientDesiredSocketSendBufferBytes: any;
	static Load(ResourceName: string): IpNetDriver;
	static Find(Outer: UObject, ResourceName: string): IpNetDriver;
	static GetDefaultObject(): IpNetDriver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IpNetDriver;
	static C(Other: UObject | any): IpNetDriver;
}

declare class JoinSessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JoinSessionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): JoinSessionCallbackProxy;
	static GetDefaultObject(): JoinSessionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JoinSessionCallbackProxy;
	static JoinSession(WorldContextObject: UObject,PlayerController: PlayerController,SearchResult: BlueprintSessionResult): JoinSessionCallbackProxy;
	static C(Other: UObject | any): JoinSessionCallbackProxy;
}

declare class LeaderboardBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LeaderboardBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): LeaderboardBlueprintLibrary;
	static GetDefaultObject(): LeaderboardBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardBlueprintLibrary;
	static WriteLeaderboardInteger(PlayerController: PlayerController,StatName: string,StatValue: number): boolean;
	static C(Other: UObject | any): LeaderboardBlueprintLibrary;
}

declare class LeaderboardFlushCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	static Load(ResourceName: string): LeaderboardFlushCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LeaderboardFlushCallbackProxy;
	static GetDefaultObject(): LeaderboardFlushCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardFlushCallbackProxy;
	static CreateProxyObjectForFlush(PlayerController: PlayerController,SessionName: string): LeaderboardFlushCallbackProxy;
	static C(Other: UObject | any): LeaderboardFlushCallbackProxy;
}

declare class LeaderboardQueryCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	static Load(ResourceName: string): LeaderboardQueryCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LeaderboardQueryCallbackProxy;
	static GetDefaultObject(): LeaderboardQueryCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardQueryCallbackProxy;
	static CreateProxyObjectForIntQuery(PlayerController: PlayerController,StatName: string): LeaderboardQueryCallbackProxy;
	static C(Other: UObject | any): LeaderboardQueryCallbackProxy;
}

declare class LogoutCallbackProxy extends BlueprintAsyncActionBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	static Load(ResourceName: string): LogoutCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LogoutCallbackProxy;
	static GetDefaultObject(): LogoutCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogoutCallbackProxy;
	static Logout(WorldContextObject: UObject,PlayerController: PlayerController): LogoutCallbackProxy;
	static C(Other: UObject | any): LogoutCallbackProxy;
}

declare class OnlineBeacon extends Actor { 
	BeaconConnectionInitialTimeout: number;
	BeaconConnectionTimeout: number;
	NetDriver: NetDriver;
	static GetDefaultObject(): OnlineBeacon;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeacon;
	static C(Other: UObject | any): OnlineBeacon;
}

declare class OnlineBeaconHostObject extends Actor { 
	BeaconTypeName: string;
	ClientBeaconActorClass: UnrealEngineClass;
	ClientActors: OnlineBeaconClient[];
	static GetDefaultObject(): OnlineBeaconHostObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHostObject;
	static C(Other: UObject | any): OnlineBeaconHostObject;
}

declare type EBeaconConnectionState = 'Invalid' | 'Closed' | 'Pending' | 'Open' | 'EBeaconConnectionState_MAX';
declare var EBeaconConnectionState : { Invalid:'Invalid',Closed:'Closed',Pending:'Pending',Open:'Open',EBeaconConnectionState_MAX:'EBeaconConnectionState_MAX', };
declare class OnlineBeaconClient extends OnlineBeacon { 
	BeaconOwner: OnlineBeaconHostObject;
	BeaconConnection: NetConnection;
	ConnectionState: EBeaconConnectionState;
	static GetDefaultObject(): OnlineBeaconClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconClient;
	ClientOnConnected(): void;
	static C(Other: UObject | any): OnlineBeaconClient;
}

declare class OnlineBeaconHost extends OnlineBeacon { 
	ListenPort: number;
	ClientActors: OnlineBeaconClient[];
	static GetDefaultObject(): OnlineBeaconHost;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHost;
	static C(Other: UObject | any): OnlineBeaconHost;
}

declare class OnlineEngineInterfaceImpl extends OnlineEngineInterface { 
	VoiceSubsystemNameOverride: string;
	static Load(ResourceName: string): OnlineEngineInterfaceImpl;
	static Find(Outer: UObject, ResourceName: string): OnlineEngineInterfaceImpl;
	static GetDefaultObject(): OnlineEngineInterfaceImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineEngineInterfaceImpl;
	static C(Other: UObject | any): OnlineEngineInterfaceImpl;
}

declare class PIELoginSettingsInternal { 
	ID: string;
	Token: string;
	Type: string;
	TokenBytes: number[];
	clone() : PIELoginSettingsInternal;
	static C(Other: UObject | any): PIELoginSettingsInternal;
}

declare class OnlinePIESettings extends DeveloperSettings { 
	bOnlinePIEEnabled: boolean;
	Logins: PIELoginSettingsInternal[];
	static Load(ResourceName: string): OnlinePIESettings;
	static Find(Outer: UObject, ResourceName: string): OnlinePIESettings;
	static GetDefaultObject(): OnlinePIESettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlinePIESettings;
	static C(Other: UObject | any): OnlinePIESettings;
}

declare class OnlineSessionClient extends OnlineSession { 
	bIsFromInvite: boolean;
	bHandlingDisconnect: boolean;
	static Load(ResourceName: string): OnlineSessionClient;
	static Find(Outer: UObject, ResourceName: string): OnlineSessionClient;
	static GetDefaultObject(): OnlineSessionClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineSessionClient;
	static C(Other: UObject | any): OnlineSessionClient;
}

declare class PlayerReservation { 
	UniqueId: UniqueNetIdRepl;
	ValidationStr: string;
	Platform: string;
	bAllowCrossplay: boolean;
	ElapsedTime: number;
	clone() : PlayerReservation;
	static C(Other: UObject | any): PlayerReservation;
}

declare class PartyReservation { 
	TeamNum: number;
	PartyLeader: UniqueNetIdRepl;
	PartyMembers: PlayerReservation[];
	clone() : PartyReservation;
	static C(Other: UObject | any): PartyReservation;
}

declare type EClientRequestType = 'NonePending' | 'ExistingSessionReservation' | 'ReservationUpdate' | 'EmptyServerReservation' | 'Reconnect' | 'Abandon' | 'EClientRequestType_MAX';
declare var EClientRequestType : { NonePending:'NonePending',ExistingSessionReservation:'ExistingSessionReservation',ReservationUpdate:'ReservationUpdate',EmptyServerReservation:'EmptyServerReservation',Reconnect:'Reconnect',Abandon:'Abandon',EClientRequestType_MAX:'EClientRequestType_MAX', };
declare type EPartyReservationResult = 'NoResult' | 'RequestPending' | 'GeneralError' | 'PartyLimitReached' | 'IncorrectPlayerCount' | 'RequestTimedOut' | 'ReservationDuplicate' | 'ReservationNotFound' | 'ReservationAccepted' | 'ReservationDenied' | 'ReservationDenied_CrossPlayRestriction' | 'ReservationDenied_Banned' | 'ReservationRequestCanceled' | 'ReservationInvalid' | 'BadSessionId' | 'ReservationDenied_ContainsExistingPlayers' | 'EPartyReservationResult_MAX';
declare var EPartyReservationResult : { NoResult:'NoResult',RequestPending:'RequestPending',GeneralError:'GeneralError',PartyLimitReached:'PartyLimitReached',IncorrectPlayerCount:'IncorrectPlayerCount',RequestTimedOut:'RequestTimedOut',ReservationDuplicate:'ReservationDuplicate',ReservationNotFound:'ReservationNotFound',ReservationAccepted:'ReservationAccepted',ReservationDenied:'ReservationDenied',ReservationDenied_CrossPlayRestriction:'ReservationDenied_CrossPlayRestriction',ReservationDenied_Banned:'ReservationDenied_Banned',ReservationRequestCanceled:'ReservationRequestCanceled',ReservationInvalid:'ReservationInvalid',BadSessionId:'BadSessionId',ReservationDenied_ContainsExistingPlayers:'ReservationDenied_ContainsExistingPlayers',EPartyReservationResult_MAX:'EPartyReservationResult_MAX', };
declare class PartyBeaconClient extends OnlineBeaconClient { 
	DestSessionId: string;
	PendingReservation: PartyReservation;
	RequestType: EClientRequestType;
	bPendingReservationSent: boolean;
	bCancelReservation: boolean;
	static GetDefaultObject(): PartyBeaconClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconClient;
	ServerUpdateReservationRequest(SessionId: string,ReservationUpdate: PartyReservation): void;
	ServerReservationRequest(SessionId: string,Reservation: PartyReservation): void;
	ServerCancelReservationRequest(PartyLeader: UniqueNetIdRepl): void;
	ClientSendReservationUpdates(NumRemainingReservations: number): void;
	ClientSendReservationFull(): void;
	ClientReservationResponse(ReservationResponse: EPartyReservationResult): void;
	ClientCancelReservationResponse(ReservationResponse: EPartyReservationResult): void;
	static C(Other: UObject | any): PartyBeaconClient;
}

declare class PartyBeaconState extends UObject { 
	SessionName: string;
	NumConsumedReservations: number;
	MaxReservations: number;
	NumTeams: number;
	NumPlayersPerTeam: number;
	TeamAssignmentMethod: string;
	ReservedHostTeamNum: number;
	ForceTeamNum: number;
	bRestrictCrossConsole: boolean;
	Reservations: PartyReservation[];
	static Load(ResourceName: string): PartyBeaconState;
	static Find(Outer: UObject, ResourceName: string): PartyBeaconState;
	static GetDefaultObject(): PartyBeaconState;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconState;
	static C(Other: UObject | any): PartyBeaconState;
}

declare class PartyBeaconHost extends OnlineBeaconHostObject { 
	State: PartyBeaconState;
	bLogoutOnSessionTimeout: boolean;
	SessionTimeoutSecs: number;
	TravelSessionTimeoutSecs: number;
	static GetDefaultObject(): PartyBeaconHost;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconHost;
	static C(Other: UObject | any): PartyBeaconHost;
}

declare type EMPMatchOutcome = 'None' | 'Quit' | 'Won' | 'Lost' | 'Tied' | 'TimeExpired' | 'First' | 'Second' | 'Third' | 'Fourth' | 'EMPMatchOutcome_MAX';
declare var EMPMatchOutcome : { None:'None',Quit:'Quit',Won:'Won',Lost:'Lost',Tied:'Tied',TimeExpired:'TimeExpired',First:'First',Second:'Second',Third:'Third',Fourth:'Fourth',EMPMatchOutcome_MAX:'EMPMatchOutcome_MAX', };
declare class QuitMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): QuitMatchCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): QuitMatchCallbackProxy;
	static GetDefaultObject(): QuitMatchCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuitMatchCallbackProxy;
	static QuitMatch(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,Outcome: EMPMatchOutcome,TurnTimeoutInSeconds: number): QuitMatchCallbackProxy;
	static C(Other: UObject | any): QuitMatchCallbackProxy;
}

declare class ShowLoginUICallbackProxy extends BlueprintAsyncActionBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	static Load(ResourceName: string): ShowLoginUICallbackProxy;
	static Find(Outer: UObject, ResourceName: string): ShowLoginUICallbackProxy;
	static GetDefaultObject(): ShowLoginUICallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShowLoginUICallbackProxy;
	static ShowExternalLoginUI(WorldContextObject: UObject,InPlayerController: PlayerController): ShowLoginUICallbackProxy;
	static C(Other: UObject | any): ShowLoginUICallbackProxy;
}

declare class TestBeaconClient extends OnlineBeaconClient { 
	static GetDefaultObject(): TestBeaconClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconClient;
	ServerPong(): void;
	ClientPing(): void;
	static C(Other: UObject | any): TestBeaconClient;
}

declare class TestBeaconHost extends OnlineBeaconHostObject { 
	static GetDefaultObject(): TestBeaconHost;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconHost;
	static C(Other: UObject | any): TestBeaconHost;
}

declare class TurnBasedBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): TurnBasedBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): TurnBasedBlueprintLibrary;
	static GetDefaultObject(): TurnBasedBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TurnBasedBlueprintLibrary;
	static RegisterTurnBasedMatchInterfaceObject(WorldContextObject: UObject,PlayerController: PlayerController,UObject: UObject): void;
	static GetPlayerDisplayName(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex: number,PlayerDisplayName?: string): {PlayerDisplayName: string};
	static GetMyPlayerIndex(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex?: number): {PlayerIndex: number};
	static GetIsMyTurn(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,bIsMyTurn?: boolean): {bIsMyTurn: boolean};
	static C(Other: UObject | any): TurnBasedBlueprintLibrary;
}

declare class VoipListenerSynthComponent extends SynthComponent { 
	static Load(ResourceName: string): VoipListenerSynthComponent;
	static Find(Outer: UObject, ResourceName: string): VoipListenerSynthComponent;
	static GetDefaultObject(): VoipListenerSynthComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoipListenerSynthComponent;
	IsIdling(): boolean;
	static C(Other: UObject | any): VoipListenerSynthComponent;
}

declare class K2Node_InAppPurchase extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_InAppPurchase;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchase;
	static GetDefaultObject(): K2Node_InAppPurchase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchase;
	static C(Other: UObject | any): K2Node_InAppPurchase;
}

declare class K2Node_InAppPurchaseQuery extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_InAppPurchaseQuery;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchaseQuery;
	static GetDefaultObject(): K2Node_InAppPurchaseQuery;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseQuery;
	static C(Other: UObject | any): K2Node_InAppPurchaseQuery;
}

declare class K2Node_InAppPurchaseRestore extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_InAppPurchaseRestore;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchaseRestore;
	static GetDefaultObject(): K2Node_InAppPurchaseRestore;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseRestore;
	static C(Other: UObject | any): K2Node_InAppPurchaseRestore;
}

declare class K2Node_LatentOnlineCall extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_LatentOnlineCall;
	static Find(Outer: UObject, ResourceName: string): K2Node_LatentOnlineCall;
	static GetDefaultObject(): K2Node_LatentOnlineCall;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentOnlineCall;
	static C(Other: UObject | any): K2Node_LatentOnlineCall;
}

declare class K2Node_LeaderboardFlush extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_LeaderboardFlush;
	static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardFlush;
	static GetDefaultObject(): K2Node_LeaderboardFlush;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardFlush;
	static C(Other: UObject | any): K2Node_LeaderboardFlush;
}

declare class K2Node_LeaderboardQuery extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_LeaderboardQuery;
	static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardQuery;
	static GetDefaultObject(): K2Node_LeaderboardQuery;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardQuery;
	static C(Other: UObject | any): K2Node_LeaderboardQuery;
}

declare type ETiledMultiResLevel = 'ETiledMultiResLevel_Off' | 'ETiledMultiResLevel_LMSLow' | 'ETiledMultiResLevel_LMSMedium' | 'ETiledMultiResLevel_LMSHigh' | 'ETiledMultiResLevel_MAX';
declare var ETiledMultiResLevel : { ETiledMultiResLevel_Off:'ETiledMultiResLevel_Off',ETiledMultiResLevel_LMSLow:'ETiledMultiResLevel_LMSLow',ETiledMultiResLevel_LMSMedium:'ETiledMultiResLevel_LMSMedium',ETiledMultiResLevel_LMSHigh:'ETiledMultiResLevel_LMSHigh',ETiledMultiResLevel_MAX:'ETiledMultiResLevel_MAX', };
declare class HmdUserProfileField { 
	FieldName: string;
	FieldValue: string;
	clone() : HmdUserProfileField;
	static C(Other: UObject | any): HmdUserProfileField;
}

declare class HmdUserProfile { 
	Name: string;
	Gender: string;
	PlayerHeight: number;
	EyeHeight: number;
	IPD: number;
	NeckToEyeDistance: Vector2D;
	ExtraFields: HmdUserProfileField[];
	clone() : HmdUserProfile;
	static C(Other: UObject | any): HmdUserProfile;
	GetUserProfile(): {Profile: HmdUserProfile, $: boolean};
	static GetUserProfile(Profile?: HmdUserProfile): {Profile: HmdUserProfile, $: boolean};
}

declare class OculusFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): OculusFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): OculusFunctionLibrary;
	static GetDefaultObject(): OculusFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusFunctionLibrary;
	static ShowLoadingSplashScreen(): void;
	static ShowLoadingIcon(Texture: Texture2D): void;
	static SetTiledMultiresLevel(Level: ETiledMultiResLevel): void;
	static SetReorientHMDOnControllerRecenter(recenterMode: boolean): void;
	static SetPositionScale3D(PosScale3D: Vector): void;
	static SetLoadingSplashParams(TexturePath: string,DistanceInMeters: Vector,SizeInMeters: Vector2D,RotationAxis: Vector,RotationDeltaInDeg: number): void;
	static SetGuardianVisibility(GuardianVisible: boolean): void;
	static SetDisplayFrequency(RequestedFrequency: number): void;
	static SetCPUAndGPULevels(CPULevel: number,GPULevel: number): void;
	static SetBaseRotationAndPositionOffset(BaseRot: Rotator,PosOffset: Vector,Options: EOrientPositionSelector): void;
	static SetBaseRotationAndBaseOffsetInMeters(Rotation: Rotator,BaseOffsetInMeters: Vector,Options: EOrientPositionSelector): void;
	static IsLoadingIconEnabled(): boolean;
	static IsGuardianDisplayed(): boolean;
	static IsDeviceTracked(DeviceType: ETrackedDeviceType): boolean;
	static IsAutoLoadingSplashScreenEnabled(): boolean;
	static HideLoadingSplashScreen(bClear: boolean): void;
	static HideLoadingIcon(): void;
	static HasSystemOverlayPresent(): boolean;
	static HasInputFocus(): boolean;
	static GetUserProfile(Profile?: HmdUserProfile): {Profile: HmdUserProfile, $: boolean};
	static GetTiledMultiresLevel(): ETiledMultiResLevel;
	static GetRawSensorData(AngularAcceleration?: Vector,LinearAcceleration?: Vector,AngularVelocity?: Vector,LinearVelocity?: Vector,TimeInSeconds?: number,DeviceType?: ETrackedDeviceType): {AngularAcceleration: Vector, LinearAcceleration: Vector, AngularVelocity: Vector, LinearVelocity: Vector, TimeInSeconds: number};
	static GetPose(DeviceRotation?: Rotator,DevicePosition?: Vector,NeckPosition?: Vector,bUseOrienationForPlayerCamera?: boolean,bUsePositionForPlayerCamera?: boolean,PositionScale?: Vector): {DeviceRotation: Rotator, DevicePosition: Vector, NeckPosition: Vector};
	static GetPointGuardianIntersection(Point: Vector,BoundaryType: EBoundaryType): GuardianTestResult;
	static GetPlayAreaTransform(): Transform;
	static GetNodeGuardianIntersection(DeviceType: ETrackedDeviceType,BoundaryType: EBoundaryType): GuardianTestResult;
	static GetLoadingSplashParams(TexturePath?: string,DistanceInMeters?: Vector,SizeInMeters?: Vector2D,RotationAxis?: Vector,RotationDeltaInDeg?: number): {TexturePath: string, DistanceInMeters: Vector, SizeInMeters: Vector2D, RotationAxis: Vector, RotationDeltaInDeg: number};
	static GetGuardianPoints(BoundaryType: EBoundaryType): Vector[];
	static GetGuardianDimensions(BoundaryType: EBoundaryType): Vector;
	static GetGPUUtilization(IsGPUAvailable?: boolean,GPUUtilization?: number): {IsGPUAvailable: boolean, GPUUtilization: number};
	static GetGPUFrameTime(): number;
	static GetDeviceName(): string;
	static GetCurrentDisplayFrequency(): number;
	static GetBaseRotationAndPositionOffset(OutRot?: Rotator,OutPosOffset?: Vector): {OutRot: Rotator, OutPosOffset: Vector};
	static GetBaseRotationAndBaseOffsetInMeters(OutRotation?: Rotator,OutBaseOffsetInMeters?: Vector): {OutRotation: Rotator, OutBaseOffsetInMeters: Vector};
	static GetAvailableDisplayFrequencies(): number[];
	static EnablePositionTracking(bPositionTracking: boolean): void;
	static EnableOrientationTracking(bOrientationTracking: boolean): void;
	static EnableAutoLoadingSplashScreen(bAutoShowEnabled: boolean): void;
	static ClearLoadingSplashScreens(): void;
	static AddLoadingSplashScreen(Texture: Texture2D,TranslationInMeters: Vector,Rotation: Rotator,SizeInMeters: Vector2D,DeltaRotation: Rotator,bClearBeforeAdd: boolean): void;
	static C(Other: UObject | any): OculusFunctionLibrary;
}

declare class OculusSplashDesc { 
	TexturePath: SoftObjectPath;
	TransformInMeters: Transform;
	QuadSizeInMeters: Vector2D;
	DeltaRotation: Quat;
	TextureOffset: Vector2D;
	TextureScale: Vector2D;
	bNoAlphaChannel: boolean;
	clone() : OculusSplashDesc;
	static C(Other: UObject | any): OculusSplashDesc;
}

declare class OculusHMDRuntimeSettings extends UObject { 
	bAutoEnabled: boolean;
	SplashDescs: OculusSplashDesc[];
	static Load(ResourceName: string): OculusHMDRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): OculusHMDRuntimeSettings;
	static GetDefaultObject(): OculusHMDRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusHMDRuntimeSettings;
	static C(Other: UObject | any): OculusHMDRuntimeSettings;
}

declare class OculusSceneCaptureCubemap extends UObject { 
	CaptureComponents: SceneCaptureComponent2D[];
	static Load(ResourceName: string): OculusSceneCaptureCubemap;
	static Find(Outer: UObject, ResourceName: string): OculusSceneCaptureCubemap;
	static GetDefaultObject(): OculusSceneCaptureCubemap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusSceneCaptureCubemap;
	static C(Other: UObject | any): OculusSceneCaptureCubemap;
}

declare class KismetProceduralMeshLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): KismetProceduralMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): KismetProceduralMeshLibrary;
	static GetDefaultObject(): KismetProceduralMeshLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetProceduralMeshLibrary;
	static SliceProceduralMesh(InProcMesh: ProceduralMeshComponent,PlanePosition: Vector,PlaneNormal: Vector,bCreateOtherHalf: boolean,OutOtherHalfProcMesh?: ProceduralMeshComponent,CapOption?: EProcMeshSliceCapOption,CapMaterial?: MaterialInterface): {OutOtherHalfProcMesh: ProceduralMeshComponent};
	static GetSectionFromStaticMesh(InMesh: StaticMesh,LODIndex: number,SectionIndex: number,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	static GetSectionFromProceduralMesh(InProcMesh: ProceduralMeshComponent,SectionIndex: number,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	static GenerateBoxMesh(BoxRadius: Vector,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	static CreateGridMeshTriangles(NumX: number,NumY: number,bWinding: boolean,Triangles?: number[]): {Triangles: number[]};
	static CopyProceduralMeshFromStaticMeshComponent(StaticMeshComponent: StaticMeshComponent,LODIndex: number,ProcMeshComponent: ProceduralMeshComponent,bCreateCollision: boolean): void;
	static ConvertQuadToTriangles(Triangles?: number[],Vert0?: number,Vert1?: number,Vert2?: number,Vert3?: number): {Triangles: number[]};
	static CalculateTangentsForMesh(Vertices: Vector[],Triangles: number[],UVs: Vector2D[],Normals?: Vector[],Tangents?: ProcMeshTangent[]): {Normals: Vector[], Tangents: ProcMeshTangent[]};
	static C(Other: UObject | any): KismetProceduralMeshLibrary;
}

declare class SteamVRChaperoneComponent extends ActorComponent { 
	OnLeaveBounds: UnrealEngineMulticastDelegate<() => void>;
	OnReturnToBounds: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): SteamVRChaperoneComponent;
	static Find(Outer: UObject, ResourceName: string): SteamVRChaperoneComponent;
	static GetDefaultObject(): SteamVRChaperoneComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRChaperoneComponent;
	GetBounds(): Vector[];
	static C(Other: UObject | any): SteamVRChaperoneComponent;
}

declare type ESteamVRTrackedDeviceType = 'Controller' | 'TrackingReference' | 'Other' | 'Invalid' | 'ESteamVRTrackedDeviceType_MAX';
declare var ESteamVRTrackedDeviceType : { Controller:'Controller',TrackingReference:'TrackingReference',Other:'Other',Invalid:'Invalid',ESteamVRTrackedDeviceType_MAX:'ESteamVRTrackedDeviceType_MAX', };
declare class SteamVRFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SteamVRFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): SteamVRFunctionLibrary;
	static GetDefaultObject(): SteamVRFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRFunctionLibrary;
	static GetValidTrackedDeviceIds(DeviceType: ESteamVRTrackedDeviceType,OutTrackedDeviceIds?: number[]): {OutTrackedDeviceIds: number[]};
	static GetTrackedDevicePositionAndOrientation(DeviceID: number,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	static GetHandPositionAndOrientation(ControllerIndex: number,Hand: EControllerHand,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	static C(Other: UObject | any): SteamVRFunctionLibrary;
}

declare type ECompilerVersion = 'Default' | 'VisualStudio2015' | 'VisualStudio2017' | 'ECompilerVersion_MAX';
declare var ECompilerVersion : { Default:'Default',VisualStudio2015:'VisualStudio2015',VisualStudio2017:'VisualStudio2017',ECompilerVersion_MAX:'ECompilerVersion_MAX', };
declare type EMinimumSupportedOS = 'MSOS_Vista' | 'MSOS_MAX';
declare var EMinimumSupportedOS : { MSOS_Vista:'MSOS_Vista',MSOS_MAX:'MSOS_MAX', };
declare class WindowsTargetSettings extends UObject { 
	Compiler: ECompilerVersion;
	TargetedRHIs: string[];
	MinimumOSVersion: EMinimumSupportedOS;
	AudioDevice: string;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	static Load(ResourceName: string): WindowsTargetSettings;
	static Find(Outer: UObject, ResourceName: string): WindowsTargetSettings;
	static GetDefaultObject(): WindowsTargetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WindowsTargetSettings;
	static C(Other: UObject | any): WindowsTargetSettings;
}

declare class SourceCodeAccessSettings extends UObject { 
	PreferredAccessor: string;
	static Load(ResourceName: string): SourceCodeAccessSettings;
	static Find(Outer: UObject, ResourceName: string): SourceCodeAccessSettings;
	static GetDefaultObject(): SourceCodeAccessSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceCodeAccessSettings;
	static C(Other: UObject | any): SourceCodeAccessSettings;
}

declare class AssetToolsImpl extends UObject { 
	static Load(ResourceName: string): AssetToolsImpl;
	static Find(Outer: UObject, ResourceName: string): AssetToolsImpl;
	static GetDefaultObject(): AssetToolsImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetToolsImpl;
	static C(Other: UObject | any): AssetToolsImpl;
}

declare class AssetRenameData { 
	Asset: any;
	NewPackagePath: string;
	NewName: string;
	OldObjectPath: SoftObjectPath;
	NewObjectPath: SoftObjectPath;
	bOnlyFixSoftReferences: boolean;
	clone() : AssetRenameData;
	static C(Other: UObject | any): AssetRenameData;
}

declare class AssetTools extends Interface { 
	static Load(ResourceName: string): AssetTools;
	static Find(Outer: UObject, ResourceName: string): AssetTools;
	static GetDefaultObject(): AssetTools;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetTools;
	RenameAssetsWithDialog(AssetsAndNames: AssetRenameData[],bAutoCheckout: boolean): void;
	RenameAssets(AssetsAndNames: AssetRenameData[]): boolean;
	OpenEditorForAssets(Assets: UObject[]): void;
	ImportAssetTasks(ImportTasks: AssetImportTask[]): void;
	ImportAssetsWithDialog(DestinationPath: string): UObject[];
	ImportAssetsAutomated(ImportData: AutomatedAssetImportData): UObject[];
	FindSoftReferencesToObject(TargetObject: SoftObjectPath,ReferencingObjects?: UObject[]): {ReferencingObjects: UObject[]};
	ExportAssetsWithDialog(AssetsToExport: string[],bPromptForIndividualFilenames: boolean): void;
	ExportAssets(AssetsToExport: string[],ExportPath: string): void;
	DuplicateAssetWithDialog(AssetName: string,PackagePath: string,OriginalObject: UObject): UObject;
	DuplicateAsset(AssetName: string,PackagePath: string,OriginalObject: UObject): UObject;
	CreateUniqueAssetName(InBasePackageName: string,InSuffix: string,OutPackageName?: string,OutAssetName?: string): {OutPackageName: string, OutAssetName: string};
	CreateAssetWithDialog(AssetName: string,PackagePath: string,AssetClass: UnrealEngineClass,Factory: Factory,CallingContext: string): UObject;
	CreateAsset(AssetName: string,PackagePath: string,AssetClass: UnrealEngineClass,Factory: Factory,CallingContext: string): UObject;
	static C(Other: UObject | any): AssetTools;
}

declare class AssetToolsHelpers extends UObject { 
	static Load(ResourceName: string): AssetToolsHelpers;
	static Find(Outer: UObject, ResourceName: string): AssetToolsHelpers;
	static GetDefaultObject(): AssetToolsHelpers;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetToolsHelpers;
	static C(Other: UObject | any): AssetToolsHelpers;
}

declare class AutomationBlueprintFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AutomationBlueprintFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AutomationBlueprintFunctionLibrary;
	static GetDefaultObject(): AutomationBlueprintFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomationBlueprintFunctionLibrary;
	static TakeAutomationScreenshotOfUI(WorldContextObject: UObject,LatentInfo: LatentActionInfo,Name: string,Options: AutomationScreenshotOptions): void;
	static TakeAutomationScreenshotAtCamera(WorldContextObject: UObject,LatentInfo: LatentActionInfo,Camera: CameraActor,NameOverride: string,Notes: string,Options: AutomationScreenshotOptions): void;
	static TakeAutomationScreenshot(WorldContextObject: UObject,LatentInfo: LatentActionInfo,Name: string,Notes: string,Options: AutomationScreenshotOptions): void;
	static SetScalabilityQualityToLow(WorldContextObject: UObject): void;
	static SetScalabilityQualityToEpic(WorldContextObject: UObject): void;
	static SetScalabilityQualityLevelRelativeToMax(WorldContextObject: UObject,Value: number): void;
	static GetStatIncMax(StatName: string): number;
	static GetStatIncAverage(StatName: string): number;
	static GetStatExcMax(StatName: string): number;
	static GetStatExcAverage(StatName: string): number;
	static GetStatCallCount(StatName: string): number;
	static GetDefaultScreenshotOptionsForRendering(Tolerance: EComparisonTolerance,Delay: number): AutomationScreenshotOptions;
	static GetDefaultScreenshotOptionsForGameplay(Tolerance: EComparisonTolerance,Delay: number): AutomationScreenshotOptions;
	static EnableStatGroup(WorldContextObject: UObject,GroupName: string): void;
	static DisableStatGroup(WorldContextObject: UObject,GroupName: string): void;
	static AreAutomatedTestsRunning(): boolean;
	static C(Other: UObject | any): AutomationBlueprintFunctionLibrary;
}

declare class FuncTestRenderingComponent extends PrimitiveComponent { 
	static Load(ResourceName: string): FuncTestRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): FuncTestRenderingComponent;
	static GetDefaultObject(): FuncTestRenderingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FuncTestRenderingComponent;
	static C(Other: UObject | any): FuncTestRenderingComponent;
}

declare type EFunctionalTestResult = 'Default' | 'Invalid' | 'Error' | 'Running' | 'Failed' | 'Succeeded' | 'EFunctionalTestResult_MAX';
declare var EFunctionalTestResult : { Default:'Default',Invalid:'Invalid',Error:'Error',Running:'Running',Failed:'Failed',Succeeded:'Succeeded',EFunctionalTestResult_MAX:'EFunctionalTestResult_MAX', };
declare type EComparisonMethod = 'Equal_To' | 'Not_Equal_To' | 'Greater_Than_Or_Equal_To' | 'Less_Than_Or_Equal_To' | 'Greater_Than' | 'Less_Than' | 'EComparisonMethod_MAX';
declare var EComparisonMethod : { Equal_To:'Equal_To',Not_Equal_To:'Not_Equal_To',Greater_Than_Or_Equal_To:'Greater_Than_Or_Equal_To',Less_Than_Or_Equal_To:'Less_Than_Or_Equal_To',Greater_Than:'Greater_Than',Less_Than:'Less_Than',EComparisonMethod_MAX:'EComparisonMethod_MAX', };
declare class FunctionalTest extends Actor { 
	SpriteComponent: BillboardComponent;
	bIsEnabled: boolean;
	bWarningsAsErrors: boolean;
	Author: string;
	Description: string;
	ObservationPoint: Actor;
	RandomNumbersStream: RandomStream;
	Result: EFunctionalTestResult;
	PreparationTimeLimit: number;
	TimeLimit: number;
	TimesUpMessage: string;
	TimesUpResult: EFunctionalTestResult;
	OnTestPrepare: UnrealEngineMulticastDelegate<() => void>;
	OnTestStart: UnrealEngineMulticastDelegate<() => void>;
	OnTestFinished: UnrealEngineMulticastDelegate<() => void>;
	AutoDestroyActors: Actor[];
	RenderComp: FuncTestRenderingComponent;
	TestName: TextRenderComponent;
	bIsRunning: boolean;
	TotalTime: number;
	static GetDefaultObject(): FunctionalTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTest;
	SetTimeLimit(NewTimeLimit: number,ResultWhenTimeRunsOut: EFunctionalTestResult): void;
	RegisterAutoDestroyActor(ActorToAutoDestroy: Actor): void;
	ReceiveStartTest(): void;
	ReceivePrepareTest(): void;
	OnWantsReRunCheck(): boolean;
	OnAdditionalTestFinishedMessageRequest(TestResult: EFunctionalTestResult): string;
	LogMessage(Message: string): void;
	IsRunning(): boolean;
	IsReady(): boolean;
	IsEnabled(): boolean;
	GetCurrentRerunReason(): string;
	FinishTest(TestResult: EFunctionalTestResult,Message: string): void;
	DebugGatherRelevantActors(): Actor[];
	AssertValue_Int(Actual: number,ShouldBe: EComparisonMethod,Expected: number,What: string,ContextObject: UObject): boolean;
	AssertValue_Float(Actual: number,ShouldBe: EComparisonMethod,Expected: number,What: string,ContextObject: UObject): boolean;
	AssertValue_DateTime(Actual: DateTime,ShouldBe: EComparisonMethod,Expected: DateTime,What: string,ContextObject: UObject): boolean;
	AssertTrue(Condition: boolean,Message: string,ContextObject: UObject): boolean;
	AssertNotEqual_Vector(Actual: Vector,NotExpected: Vector,What: string,ContextObject: UObject): boolean;
	AssertNotEqual_Transform(Actual: Transform,NotExpected: Transform,What: string,ContextObject: UObject): boolean;
	AssertNotEqual_String(Actual: string,NotExpected: string,What: string,ContextObject: UObject): boolean;
	AssertNotEqual_Rotator(Actual: Rotator,NotExpected: Rotator,What: string,ContextObject: UObject): boolean;
	AssertIsValid(UObject: UObject,Message: string,ContextObject: UObject): boolean;
	AssertFalse(Condition: boolean,Message: string,ContextObject: UObject): boolean;
	AssertEqual_Vector(Actual: Vector,Expected: Vector,What: string,Tolerance: number,ContextObject: UObject): boolean;
	AssertEqual_Transform(Actual: Transform,Expected: Transform,What: string,Tolerance: number,ContextObject: UObject): boolean;
	AssertEqual_TraceQueryResults(Actual: TraceQueryTestResults,Expected: TraceQueryTestResults,What: string,ContextObject: UObject): boolean;
	AssertEqual_String(Actual: string,Expected: string,What: string,ContextObject: UObject): boolean;
	AssertEqual_Rotator(Actual: Rotator,Expected: Rotator,What: string,Tolerance: number,ContextObject: UObject): boolean;
	AssertEqual_Name(Actual: string,Expected: string,What: string,ContextObject: UObject): boolean;
	AssertEqual_Int(Actual: number,Expected: number,What: string,ContextObject: UObject): boolean;
	AssertEqual_Float(Actual: number,Expected: number,What: string,Tolerance: number,ContextObject: UObject): boolean;
	AssertEqual_Bool(Actual: boolean,Expected: boolean,What: string,ContextObject: UObject): boolean;
	AddWarning(Message: string): void;
	AddRerun(Reason: string): void;
	AddError(Message: string): void;
	static C(Other: UObject | any): FunctionalTest;
}

declare class GenericTeamId { 
	TeamID: number;
	clone() : GenericTeamId;
	static C(Other: UObject | any): GenericTeamId;
}

declare class AITestSpawnInfo { 
	PawnClass: UnrealEngineClass;
	ControllerClass: UnrealEngineClass;
	TeamID: GenericTeamId;
	BehaviorTree: BehaviorTree;
	SpawnLocation: Actor;
	NumberToSpawn: number;
	SpawnDelay: number;
	PreSpawnDelay: number;
	clone() : AITestSpawnInfo;
	static C(Other: UObject | any): AITestSpawnInfo;
}

declare class AITestSpawnSet { 
	SpawnInfoContainer: AITestSpawnInfo[];
	Name: string;
	bEnabled: boolean;
	FallbackSpawnLocation: Actor;
	clone() : AITestSpawnSet;
	static C(Other: UObject | any): AITestSpawnSet;
}

declare class PendingDelayedSpawn extends AITestSpawnInfo { 
	clone() : PendingDelayedSpawn;
	static C(Other: UObject | any): PendingDelayedSpawn;
}

declare class FunctionalAITest extends FunctionalTest { 
	SpawnSets: AITestSpawnSet[];
	SpawnLocationRandomizationRange: number;
	SpawnedPawns: Pawn[];
	PendingDelayedSpawns: PendingDelayedSpawn[];
	CurrentSpawnSetIndex: number;
	CurrentSpawnSetName: string;
	OnAISpawned: UnrealEngineMulticastDelegate<(Controller: AIController, Pawn: Pawn) => void>;
	OnAllAISPawned: UnrealEngineMulticastDelegate<() => void>;
	NavMeshDebugOrigin: Vector;
	NavMeshDebugExtent: Vector;
	bWaitForNavMesh: boolean;
	bDebugNavMeshOnTimeout: boolean;
	static GetDefaultObject(): FunctionalAITest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalAITest;
	IsOneOfSpawnedPawns(Actor: Actor): boolean;
	static C(Other: UObject | any): FunctionalAITest;
}

declare class AutomationPerformaceHelper extends UObject { 
	static Load(ResourceName: string): AutomationPerformaceHelper;
	static Find(Outer: UObject, ResourceName: string): AutomationPerformaceHelper;
	static GetDefaultObject(): AutomationPerformaceHelper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomationPerformaceHelper;
	WriteLogFile(CaptureDir: string,CaptureExtension: string): void;
	TriggerGPUTraceIfRecordFallsBelowBudget(): void;
	Tick(DeltaSeconds: number): void;
	StopCPUProfiling(): void;
	StartCPUProfiling(): void;
	Sample(DeltaSeconds: number): void;
	OnBeginTests(): void;
	OnAllTestsComplete(): void;
	IsRecording(): boolean;
	IsCurrentRecordWithinRenderThreadBudget(): boolean;
	IsCurrentRecordWithinGPUBudget(): boolean;
	IsCurrentRecordWithinGameThreadBudget(): boolean;
	EndStatsFile(): void;
	EndRecordingBaseline(): void;
	EndRecording(): void;
	BeginStatsFile(RecordName: string): void;
	BeginRecordingBaseline(RecordName: string): void;
	BeginRecording(RecordName: string,InGPUBudget: number,InRenderThreadBudget: number,InGameThreadBudget: number): void;
	static C(Other: UObject | any): AutomationPerformaceHelper;
}

declare class FunctionalTestGameMode extends GameModeBase { 
	static GetDefaultObject(): FunctionalTestGameMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestGameMode;
	static C(Other: UObject | any): FunctionalTestGameMode;
}

declare class FunctionalTestingManager extends BlueprintFunctionLibrary { 
	TestsLeft: FunctionalTest[];
	AllTests: FunctionalTest[];
	OnSetupTests: UnrealEngineMulticastDelegate<() => void>;
	OnTestsComplete: UnrealEngineMulticastDelegate<() => void>;
	OnTestsBegin: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): FunctionalTestingManager;
	static Find(Outer: UObject, ResourceName: string): FunctionalTestingManager;
	static GetDefaultObject(): FunctionalTestingManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestingManager;
	static RunAllFunctionalTests(WorldContextObject: UObject,bNewLog: boolean,bRunLooped: boolean,FailedTestsReproString: string): boolean;
	static C(Other: UObject | any): FunctionalTestingManager;
}

declare class PhasedAutomationActorBase extends Actor { 
	static GetDefaultObject(): PhasedAutomationActorBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhasedAutomationActorBase;
	OnFunctionalTestingComplete(): void;
	OnFunctionalTestingBegin(): void;
	static C(Other: UObject | any): PhasedAutomationActorBase;
}

declare class FunctionalTestLevelScript extends LevelScriptActor { 
	static GetDefaultObject(): FunctionalTestLevelScript;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestLevelScript;
	static C(Other: UObject | any): FunctionalTestLevelScript;
}

declare class FunctionalTestUtilityLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): FunctionalTestUtilityLibrary;
	static Find(Outer: UObject, ResourceName: string): FunctionalTestUtilityLibrary;
	static GetDefaultObject(): FunctionalTestUtilityLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestUtilityLibrary;
	static TraceChannelTestUtil(WorldContextObject: UObject,BatchOptions: TraceChannelTestBatchOptions,Start: Vector,End: Vector,SphereCapsuleRadius: number,CapsuleHalfHeight: number,BoxHalfSize: Vector,Orientation: Rotator,TraceChannel: ETraceTypeQuery,ObjectTypes: EObjectTypeQuery[],ProfileName: string,bTraceComplex: boolean,ActorsToIgnore: Actor[],bIgnoreSelf: boolean,DrawDebugType: EDrawDebugTrace,TraceColor: LinearColor,TraceHitColor: LinearColor,DrawTime: number): TraceQueryTestResults;
	static C(Other: UObject | any): FunctionalTestUtilityLibrary;
}

declare class ScreenshotFunctionalTestBase extends FunctionalTest { 
	Notes: string;
	ScreenshotCamera: CameraComponent;
	ScreenshotOptions: AutomationScreenshotOptions;
	static GetDefaultObject(): ScreenshotFunctionalTestBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ScreenshotFunctionalTestBase;
	static C(Other: UObject | any): ScreenshotFunctionalTestBase;
}

declare type EWidgetTestAppearLocation = 'Viewport' | 'PlayerScreen' | 'EWidgetTestAppearLocation_MAX';
declare var EWidgetTestAppearLocation : { Viewport:'Viewport',PlayerScreen:'PlayerScreen',EWidgetTestAppearLocation_MAX:'EWidgetTestAppearLocation_MAX', };
declare class FunctionalUIScreenshotTest extends ScreenshotFunctionalTestBase { 
	WidgetClass: UnrealEngineClass;
	SpawnedWidget: UserWidget;
	WidgetLocation: EWidgetTestAppearLocation;
	ScreenshotRT: TextureRenderTarget2D;
	static GetDefaultObject(): FunctionalUIScreenshotTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalUIScreenshotTest;
	static C(Other: UObject | any): FunctionalUIScreenshotTest;
}

declare class GroundTruthData extends UObject { 
	bResetGroundTruth: boolean;
	ObjectData: UObject;
	static Load(ResourceName: string): GroundTruthData;
	static Find(Outer: UObject, ResourceName: string): GroundTruthData;
	static GetDefaultObject(): GroundTruthData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroundTruthData;
	SaveObject(GroundTruth: UObject): void;
	LoadObject(): UObject;
	CanModify(): boolean;
	static C(Other: UObject | any): GroundTruthData;
}

declare class ScreenshotFunctionalTest extends ScreenshotFunctionalTestBase { 
	bCameraCutOnScreenshotPrep: boolean;
	static GetDefaultObject(): ScreenshotFunctionalTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ScreenshotFunctionalTest;
	static C(Other: UObject | any): ScreenshotFunctionalTest;
}

declare class TestPhaseComponent extends SceneComponent { 
	static Load(ResourceName: string): TestPhaseComponent;
	static Find(Outer: UObject, ResourceName: string): TestPhaseComponent;
	static GetDefaultObject(): TestPhaseComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPhaseComponent;
	static C(Other: UObject | any): TestPhaseComponent;
}

declare class AIGraph extends EdGraph { 
	GraphVersion: number;
	static Load(ResourceName: string): AIGraph;
	static Find(Outer: UObject, ResourceName: string): AIGraph;
	static GetDefaultObject(): AIGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraph;
	static C(Other: UObject | any): AIGraph;
}

declare class GraphNodeClassData { 
	AssetName: string;
	GeneratedClassPackage: string;
	ClassName: string;
	Category: string;
	clone() : GraphNodeClassData;
	static C(Other: UObject | any): GraphNodeClassData;
}

declare class AIGraphNode extends EdGraphNode { 
	ClassData: GraphNodeClassData;
	NodeInstance: UObject;
	ParentNode: AIGraphNode;
	SubNodes: AIGraphNode[];
	CopySubNodeIndex: number;
	bIsReadOnly: boolean;
	bIsSubNode: boolean;
	ErrorMessage: string;
	static Load(ResourceName: string): AIGraphNode;
	static Find(Outer: UObject, ResourceName: string): AIGraphNode;
	static GetDefaultObject(): AIGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphNode;
	static C(Other: UObject | any): AIGraphNode;
}

declare class AIGraphSchema extends EdGraphSchema { 
	static Load(ResourceName: string): AIGraphSchema;
	static Find(Outer: UObject, ResourceName: string): AIGraphSchema;
	static GetDefaultObject(): AIGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphSchema;
	static C(Other: UObject | any): AIGraphSchema;
}

declare class K2Node_AIMoveTo extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_AIMoveTo;
	static Find(Outer: UObject, ResourceName: string): K2Node_AIMoveTo;
	static GetDefaultObject(): K2Node_AIMoveTo;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_AIMoveTo;
	static C(Other: UObject | any): K2Node_AIMoveTo;
}

declare class BehaviorTreeDecoratorGraph extends EdGraph { 
	static Load(ResourceName: string): BehaviorTreeDecoratorGraph;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraph;
	static GetDefaultObject(): BehaviorTreeDecoratorGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraph;
	static C(Other: UObject | any): BehaviorTreeDecoratorGraph;
}

declare class BehaviorTreeDecoratorGraphNode extends EdGraphNode { 
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode;
	static C(Other: UObject | any): BehaviorTreeDecoratorGraphNode;
}

declare class BehaviorTreeDecoratorGraphNode_Decorator extends BehaviorTreeDecoratorGraphNode { 
	NodeInstance: UObject;
	ClassData: GraphNodeClassData;
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Decorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Decorator;
	static C(Other: UObject | any): BehaviorTreeDecoratorGraphNode_Decorator;
}

declare type EDecoratorLogicMode = 'Sink' | 'And' | 'Or' | 'Not' | 'EDecoratorLogicMode_MAX';
declare var EDecoratorLogicMode : { Sink:'Sink',And:'And',Or:'Or',Not:'Not',EDecoratorLogicMode_MAX:'EDecoratorLogicMode_MAX', };
declare class BehaviorTreeDecoratorGraphNode_Logic extends BehaviorTreeDecoratorGraphNode { 
	LogicMode: EDecoratorLogicMode;
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Logic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Logic;
	static C(Other: UObject | any): BehaviorTreeDecoratorGraphNode_Logic;
}

declare class BehaviorTreeEditorTypes extends UObject { 
	static Load(ResourceName: string): BehaviorTreeEditorTypes;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeEditorTypes;
	static GetDefaultObject(): BehaviorTreeEditorTypes;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeEditorTypes;
	static C(Other: UObject | any): BehaviorTreeEditorTypes;
}

declare class BehaviorTreeFactory extends Factory { 
	static Load(ResourceName: string): BehaviorTreeFactory;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeFactory;
	static GetDefaultObject(): BehaviorTreeFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeFactory;
	static C(Other: UObject | any): BehaviorTreeFactory;
}

declare class BehaviorTreeGraph extends AIGraph { 
	ModCounter: number;
	bIsUsingModCounter: boolean;
	static Load(ResourceName: string): BehaviorTreeGraph;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraph;
	static GetDefaultObject(): BehaviorTreeGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraph;
	static C(Other: UObject | any): BehaviorTreeGraph;
}

declare class BehaviorTreeGraphNode extends AIGraphNode { 
	Decorators: BehaviorTreeGraphNode[];
	Services: BehaviorTreeGraphNode[];
	bInjectedNode: boolean;
	static Load(ResourceName: string): BehaviorTreeGraphNode;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode;
	static GetDefaultObject(): BehaviorTreeGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode;
	static C(Other: UObject | any): BehaviorTreeGraphNode;
}

declare class BehaviorTreeGraphNode_Composite extends BehaviorTreeGraphNode { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_Composite;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Composite;
	static GetDefaultObject(): BehaviorTreeGraphNode_Composite;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Composite;
	static C(Other: UObject | any): BehaviorTreeGraphNode_Composite;
}

declare class BehaviorTreeGraphNode_CompositeDecorator extends BehaviorTreeGraphNode { 
	BoundGraph: EdGraph;
	CompositeName: string;
	bShowOperations: boolean;
	bCanAbortFlow: boolean;
	ParentNodeInstance: BTCompositeNode;
	CachedDescription: string;
	static Load(ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
	static GetDefaultObject(): BehaviorTreeGraphNode_CompositeDecorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_CompositeDecorator;
	static C(Other: UObject | any): BehaviorTreeGraphNode_CompositeDecorator;
}

declare class BehaviorTreeGraphNode_Decorator extends BehaviorTreeGraphNode { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static GetDefaultObject(): BehaviorTreeGraphNode_Decorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Decorator;
	static C(Other: UObject | any): BehaviorTreeGraphNode_Decorator;
}

declare class BehaviorTreeGraphNode_Root extends BehaviorTreeGraphNode { 
	BlackboardAsset: BlackboardData;
	static Load(ResourceName: string): BehaviorTreeGraphNode_Root;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Root;
	static GetDefaultObject(): BehaviorTreeGraphNode_Root;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Root;
	static C(Other: UObject | any): BehaviorTreeGraphNode_Root;
}

declare class BehaviorTreeGraphNode_Service extends BehaviorTreeGraphNode { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_Service;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Service;
	static GetDefaultObject(): BehaviorTreeGraphNode_Service;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Service;
	static C(Other: UObject | any): BehaviorTreeGraphNode_Service;
}

declare class BehaviorTreeGraphNode_SimpleParallel extends BehaviorTreeGraphNode_Composite { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static GetDefaultObject(): BehaviorTreeGraphNode_SimpleParallel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SimpleParallel;
	static C(Other: UObject | any): BehaviorTreeGraphNode_SimpleParallel;
}

declare class BehaviorTreeGraphNode_Task extends BehaviorTreeGraphNode { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_Task;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Task;
	static GetDefaultObject(): BehaviorTreeGraphNode_Task;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Task;
	static C(Other: UObject | any): BehaviorTreeGraphNode_Task;
}

declare class BehaviorTreeGraphNode_SubtreeTask extends BehaviorTreeGraphNode_Task { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static GetDefaultObject(): BehaviorTreeGraphNode_SubtreeTask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SubtreeTask;
	static C(Other: UObject | any): BehaviorTreeGraphNode_SubtreeTask;
}

declare class BlackboardDataFactory extends Factory { 
	static Load(ResourceName: string): BlackboardDataFactory;
	static Find(Outer: UObject, ResourceName: string): BlackboardDataFactory;
	static GetDefaultObject(): BlackboardDataFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BlackboardDataFactory;
	static C(Other: UObject | any): BlackboardDataFactory;
}

declare class EdGraphSchema_BehaviorTree extends AIGraphSchema { 
	static Load(ResourceName: string): EdGraphSchema_BehaviorTree;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_BehaviorTree;
	static GetDefaultObject(): EdGraphSchema_BehaviorTree;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTree;
	static C(Other: UObject | any): EdGraphSchema_BehaviorTree;
}

declare class EdGraphSchema_BehaviorTreeDecorator extends EdGraphSchema { 
	PC_Boolean: string;
	static Load(ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static GetDefaultObject(): EdGraphSchema_BehaviorTreeDecorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTreeDecorator;
	static C(Other: UObject | any): EdGraphSchema_BehaviorTreeDecorator;
}

declare class K2Node_LatentGameplayTaskCall extends K2Node_BaseAsyncTask { 
	SpawnParamPins: string[];
	static Load(ResourceName: string): K2Node_LatentGameplayTaskCall;
	static Find(Outer: UObject, ResourceName: string): K2Node_LatentGameplayTaskCall;
	static GetDefaultObject(): K2Node_LatentGameplayTaskCall;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentGameplayTaskCall;
	static C(Other: UObject | any): K2Node_LatentGameplayTaskCall;
}

declare class Overlays extends UObject { 
	static Load(ResourceName: string): Overlays;
	static Find(Outer: UObject, ResourceName: string): Overlays;
	static GetDefaultObject(): Overlays;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Overlays;
	static C(Other: UObject | any): Overlays;
}

declare class OverlayItem { 
	StartTime: Timespan;
	EndTime: Timespan;
	text: string;
	Position: Vector2D;
	clone() : OverlayItem;
	static C(Other: UObject | any): OverlayItem;
}

declare class BasicOverlays extends Overlays { 
	Overlays: OverlayItem[];
	AssetImportData: AssetImportData;
	static Load(ResourceName: string): BasicOverlays;
	static Find(Outer: UObject, ResourceName: string): BasicOverlays;
	static GetDefaultObject(): BasicOverlays;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicOverlays;
	static C(Other: UObject | any): BasicOverlays;
}

declare class LocalizedOverlays extends Overlays { 
	DefaultOverlays: BasicOverlays;
	LocaleToOverlaysMap: any;
	AssetImportData: AssetImportData;
	static Load(ResourceName: string): LocalizedOverlays;
	static Find(Outer: UObject, ResourceName: string): LocalizedOverlays;
	static GetDefaultObject(): LocalizedOverlays;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizedOverlays;
	static C(Other: UObject | any): LocalizedOverlays;
}

declare class BasicOverlaysFactory extends Factory { 
	static Load(ResourceName: string): BasicOverlaysFactory;
	static Find(Outer: UObject, ResourceName: string): BasicOverlaysFactory;
	static GetDefaultObject(): BasicOverlaysFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicOverlaysFactory;
	static C(Other: UObject | any): BasicOverlaysFactory;
}

declare class BasicOverlaysFactoryNew extends Factory { 
	static Load(ResourceName: string): BasicOverlaysFactoryNew;
	static Find(Outer: UObject, ResourceName: string): BasicOverlaysFactoryNew;
	static GetDefaultObject(): BasicOverlaysFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicOverlaysFactoryNew;
	static C(Other: UObject | any): BasicOverlaysFactoryNew;
}

declare class LocalizedOverlaysFactoryNew extends Factory { 
	static Load(ResourceName: string): LocalizedOverlaysFactoryNew;
	static Find(Outer: UObject, ResourceName: string): LocalizedOverlaysFactoryNew;
	static GetDefaultObject(): LocalizedOverlaysFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizedOverlaysFactoryNew;
	static C(Other: UObject | any): LocalizedOverlaysFactoryNew;
}

declare class ReimportBasicOverlaysFactory extends BasicOverlaysFactory { 
	static Load(ResourceName: string): ReimportBasicOverlaysFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportBasicOverlaysFactory;
	static GetDefaultObject(): ReimportBasicOverlaysFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportBasicOverlaysFactory;
	static C(Other: UObject | any): ReimportBasicOverlaysFactory;
}

declare class MediaSource extends UObject { 
	static Load(ResourceName: string): MediaSource;
	static Find(Outer: UObject, ResourceName: string): MediaSource;
	static GetDefaultObject(): MediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSource;
	Validate(): boolean;
	GetUrl(): string;
	static C(Other: UObject | any): MediaSource;
}

declare class BaseMediaSource extends MediaSource { 
	PlatformPlayerNames: any;
	PlayerName: string;
	static Load(ResourceName: string): BaseMediaSource;
	static Find(Outer: UObject, ResourceName: string): BaseMediaSource;
	static GetDefaultObject(): BaseMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BaseMediaSource;
	static C(Other: UObject | any): BaseMediaSource;
}

declare class FileMediaSource extends BaseMediaSource { 
	FilePath: string;
	PrecacheFile: boolean;
	static Load(ResourceName: string): FileMediaSource;
	static Find(Outer: UObject, ResourceName: string): FileMediaSource;
	static GetDefaultObject(): FileMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FileMediaSource;
	SetFilePath(Path: string): void;
	static C(Other: UObject | any): FileMediaSource;
}

declare class MediaCaptureDevice { 
	DisplayName: string;
	URL: string;
	clone() : MediaCaptureDevice;
	static C(Other: UObject | any): MediaCaptureDevice;
}

declare class MediaBlueprintFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MediaBlueprintFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MediaBlueprintFunctionLibrary;
	static GetDefaultObject(): MediaBlueprintFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaBlueprintFunctionLibrary;
	static EnumerateWebcamCaptureDevices(OutDevices?: MediaCaptureDevice[],Filter?: number): {OutDevices: MediaCaptureDevice[]};
	static EnumerateVideoCaptureDevices(OutDevices?: MediaCaptureDevice[],Filter?: number): {OutDevices: MediaCaptureDevice[]};
	static EnumerateAudioCaptureDevices(OutDevices?: MediaCaptureDevice[],Filter?: number): {OutDevices: MediaCaptureDevice[]};
	static C(Other: UObject | any): MediaBlueprintFunctionLibrary;
}

declare class MediaPlaylist extends UObject { 
	Items: MediaSource[];
	static Load(ResourceName: string): MediaPlaylist;
	static Find(Outer: UObject, ResourceName: string): MediaPlaylist;
	static GetDefaultObject(): MediaPlaylist;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlaylist;
	Replace(index: number,Replacement: MediaSource): boolean;
	RemoveAt(index: number): boolean;
	Remove(MediaSource: MediaSource): boolean;
	Num(): number;
	Insert(MediaSource: MediaSource,index: number): void;
	GetRandom(OutIndex?: number): {OutIndex: number, $: MediaSource};
	GetPrevious(InOutIndex?: number): {InOutIndex: number, $: MediaSource};
	GetNext(InOutIndex?: number): {InOutIndex: number, $: MediaSource};
	Get(index: number): MediaSource;
	AddUrl(URL: string): boolean;
	AddFile(FilePath: string): boolean;
	Add(MediaSource: MediaSource): boolean;
	static C(Other: UObject | any): MediaPlaylist;
}

declare type EMediaPlayerTrack = 'Audio' | 'Caption' | 'Metadata' | 'Script' | 'Subtitle' | 'Text' | 'Video' | 'EMediaPlayerTrack_MAX';
declare var EMediaPlayerTrack : { Audio:'Audio',Caption:'Caption',Metadata:'Metadata',Script:'Script',Subtitle:'Subtitle',Text:'Text',Video:'Video',EMediaPlayerTrack_MAX:'EMediaPlayerTrack_MAX', };
declare class MediaPlayerTrackOptions { 
	Audio: number;
	Caption: number;
	MetaData: number;
	Script: number;
	Subtitle: number;
	text: number;
	Video: number;
	clone() : MediaPlayerTrackOptions;
	static C(Other: UObject | any): MediaPlayerTrackOptions;
}

declare class MediaPlayerOptions { 
	Tracks: MediaPlayerTrackOptions;
	clone() : MediaPlayerOptions;
	static C(Other: UObject | any): MediaPlayerOptions;
}

declare class MediaPlayer extends UObject { 
	OnEndReached: UnrealEngineMulticastDelegate<() => void>;
	OnMediaClosed: UnrealEngineMulticastDelegate<() => void>;
	OnMediaOpened: UnrealEngineMulticastDelegate<(OpenedUrl: string) => void>;
	OnMediaOpenFailed: UnrealEngineMulticastDelegate<(FailedUrl: string) => void>;
	OnPlaybackResumed: UnrealEngineMulticastDelegate<() => void>;
	OnPlaybackSuspended: UnrealEngineMulticastDelegate<() => void>;
	OnSeekCompleted: UnrealEngineMulticastDelegate<() => void>;
	OnTracksChanged: UnrealEngineMulticastDelegate<() => void>;
	CacheAhead: Timespan;
	CacheBehind: Timespan;
	CacheBehindGame: Timespan;
	NativeAudioOut: boolean;
	PlayOnOpen: boolean;
	Shuffle: boolean;
	loop: boolean;
	Playlist: MediaPlaylist;
	PlaylistIndex: number;
	TimeDelay: Timespan;
	HorizontalFieldOfView: number;
	VerticalFieldOfView: number;
	ViewRotation: Rotator;
	PlayerGuid: Guid;
	AffectedByPIEHandling: boolean;
	static Load(ResourceName: string): MediaPlayer;
	static Find(Outer: UObject, ResourceName: string): MediaPlayer;
	static GetDefaultObject(): MediaPlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayer;
	SupportsSeeking(): boolean;
	SupportsScrubbing(): boolean;
	SupportsRate(Rate: number,Unthinned: boolean): boolean;
	SetViewRotation(Rotation: Rotator,Absolute: boolean): boolean;
	SetViewField(Horizontal: number,Vertical: number,Absolute: boolean): boolean;
	SetVideoTrackFrameRate(TrackIndex: number,FormatIndex: number,FrameRate: number): boolean;
	SetTrackFormat(TrackType: EMediaPlayerTrack,TrackIndex: number,FormatIndex: number): boolean;
	SetTimeDelay(TimeDelay: Timespan): void;
	SetRate(Rate: number): boolean;
	SetNativeVolume(Volume: number): boolean;
	SetLooping(Looping: boolean): boolean;
	SetDesiredPlayerName(PlayerName: string): void;
	SetBlockOnTime(Time: Timespan): void;
	SelectTrack(TrackType: EMediaPlayerTrack,TrackIndex: number): boolean;
	Seek(Time: Timespan): boolean;
	Rewind(): boolean;
	Reopen(): boolean;
	Previous(): boolean;
	Play(): boolean;
	Pause(): boolean;
	OpenUrl(URL: string): boolean;
	OpenSourceWithOptions(MediaSource: MediaSource,Options: MediaPlayerOptions): boolean;
	OpenSource(MediaSource: MediaSource): boolean;
	OpenPlaylistIndex(InPlaylist: MediaPlaylist,index: number): boolean;
	OpenPlaylist(InPlaylist: MediaPlaylist): boolean;
	OpenFile(FilePath: string): boolean;
	Next(): boolean;
	IsReady(): boolean;
	IsPreparing(): boolean;
	IsPlaying(): boolean;
	IsPaused(): boolean;
	IsLooping(): boolean;
	IsConnecting(): boolean;
	IsBuffering(): boolean;
	HasError(): boolean;
	GetViewRotation(): Rotator;
	GetVideoTrackType(TrackIndex: number,FormatIndex: number): string;
	GetVideoTrackFrameRates(TrackIndex: number,FormatIndex: number): FloatRange;
	GetVideoTrackFrameRate(TrackIndex: number,FormatIndex: number): number;
	GetVideoTrackDimensions(TrackIndex: number,FormatIndex: number): IntPoint;
	GetVideoTrackAspectRatio(TrackIndex: number,FormatIndex: number): number;
	GetVerticalFieldOfView(): number;
	GetUrl(): string;
	GetTrackLanguage(TrackType: EMediaPlayerTrack,TrackIndex: number): string;
	GetTrackFormat(TrackType: EMediaPlayerTrack,TrackIndex: number): number;
	GetTrackDisplayName(TrackType: EMediaPlayerTrack,TrackIndex: number): string;
	GetTimeDelay(): Timespan;
	GetTime(): Timespan;
	GetSupportedRates(OutRates?: FloatRange[],Unthinned?: boolean): {OutRates: FloatRange[]};
	GetSelectedTrack(TrackType: EMediaPlayerTrack): number;
	GetRate(): number;
	GetPlaylistIndex(): number;
	GetPlaylist(): MediaPlaylist;
	GetPlayerName(): string;
	GetNumTracks(TrackType: EMediaPlayerTrack): number;
	GetNumTrackFormats(TrackType: EMediaPlayerTrack,TrackIndex: number): number;
	GetMediaName(): string;
	GetHorizontalFieldOfView(): number;
	GetDuration(): Timespan;
	GetDesiredPlayerName(): string;
	GetAudioTrackType(TrackIndex: number,FormatIndex: number): string;
	GetAudioTrackSampleRate(TrackIndex: number,FormatIndex: number): number;
	GetAudioTrackChannels(TrackIndex: number,FormatIndex: number): number;
	Close(): void;
	CanPlayUrl(URL: string): boolean;
	CanPlaySource(MediaSource: MediaSource): boolean;
	CanPause(): boolean;
	static C(Other: UObject | any): MediaPlayer;
}

declare type EMediaSoundChannels = 'Mono' | 'Stereo' | 'Surround' | 'EMediaSoundChannels_MAX';
declare var EMediaSoundChannels : { Mono:'Mono',Stereo:'Stereo',Surround:'Surround',EMediaSoundChannels_MAX:'EMediaSoundChannels_MAX', };
declare class MediaSoundComponent extends SynthComponent { 
	Channels: EMediaSoundChannels;
	DynamicRateAdjustment: boolean;
	RateAdjustmentFactor: number;
	RateAdjustmentRange: FloatRange;
	MediaPlayer: MediaPlayer;
	static Load(ResourceName: string): MediaSoundComponent;
	static Find(Outer: UObject, ResourceName: string): MediaSoundComponent;
	static GetDefaultObject(): MediaSoundComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSoundComponent;
	SetMediaPlayer(NewMediaPlayer: MediaPlayer): void;
	GetMediaPlayer(): MediaPlayer;
	BP_GetAttenuationSettingsToApply(OutAttenuationSettings?: SoundAttenuationSettings): {OutAttenuationSettings: SoundAttenuationSettings, $: boolean};
	static C(Other: UObject | any): MediaSoundComponent;
}

declare class MediaTexture extends Texture { 
	AddressX: TextureAddress;
	AddressY: TextureAddress;
	AutoClear: boolean;
	ClearColor: LinearColor;
	MediaPlayer: MediaPlayer;
	static Load(ResourceName: string): MediaTexture;
	static Find(Outer: UObject, ResourceName: string): MediaTexture;
	static GetDefaultObject(): MediaTexture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaTexture;
	SetMediaPlayer(NewMediaPlayer: MediaPlayer): void;
	GetWidth(): number;
	GetMediaPlayer(): MediaPlayer;
	GetHeight(): number;
	GetAspectRatio(): number;
	static C(Other: UObject | any): MediaTexture;
}

declare class PlatformMediaSource extends MediaSource { 
	PlatformMediaSources: any;
	MediaSource: MediaSource;
	static Load(ResourceName: string): PlatformMediaSource;
	static Find(Outer: UObject, ResourceName: string): PlatformMediaSource;
	static GetDefaultObject(): PlatformMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformMediaSource;
	static C(Other: UObject | any): PlatformMediaSource;
}

declare class StreamMediaSource extends BaseMediaSource { 
	StreamUrl: string;
	static Load(ResourceName: string): StreamMediaSource;
	static Find(Outer: UObject, ResourceName: string): StreamMediaSource;
	static GetDefaultObject(): StreamMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StreamMediaSource;
	static C(Other: UObject | any): StreamMediaSource;
}

declare class TimeSynchronizableMediaSource extends BaseMediaSource { 
	bUseTimeSynchronization: boolean;
	static Load(ResourceName: string): TimeSynchronizableMediaSource;
	static Find(Outer: UObject, ResourceName: string): TimeSynchronizableMediaSource;
	static GetDefaultObject(): TimeSynchronizableMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TimeSynchronizableMediaSource;
	static C(Other: UObject | any): TimeSynchronizableMediaSource;
}

declare class WmfMediaSettings extends UObject { 
	AllowNonStandardCodecs: boolean;
	LowLatency: boolean;
	NativeAudioOut: boolean;
	static Load(ResourceName: string): WmfMediaSettings;
	static Find(Outer: UObject, ResourceName: string): WmfMediaSettings;
	static GetDefaultObject(): WmfMediaSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WmfMediaSettings;
	static C(Other: UObject | any): WmfMediaSettings;
}

declare class MaterialExpressionSpriteTextureSampler extends MaterialExpressionTextureSampleParameter2D { 
	bSampleAdditionalTextures: boolean;
	AdditionalSlotIndex: number;
	SlotDisplayName: string;
	static Load(ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static Find(Outer: UObject, ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static GetDefaultObject(): MaterialExpressionSpriteTextureSampler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSpriteTextureSampler;
	static C(Other: UObject | any): MaterialExpressionSpriteTextureSampler;
}

declare class PaperSpriteSocket { 
	LocalTransform: Transform;
	SocketName: string;
	clone() : PaperSpriteSocket;
	static C(Other: UObject | any): PaperSpriteSocket;
}

declare type ESpriteCollisionMode = 'None' | 'Use2DPhysics' | 'Use3DPhysics' | 'ESpriteCollisionMode_MAX';
declare var ESpriteCollisionMode : { None:'None',Use2DPhysics:'Use2DPhysics',Use3DPhysics:'Use3DPhysics',ESpriteCollisionMode_MAX:'ESpriteCollisionMode_MAX', };
declare type ESpritePivotMode = 'Top_Left' | 'Top_Center' | 'Top_Right' | 'Center_Left' | 'Center_Center' | 'Center_Right' | 'Bottom_Left' | 'Bottom_Center' | 'Bottom_Right' | 'Custom' | 'ESpritePivotMode_MAX';
declare var ESpritePivotMode : { Top_Left:'Top_Left',Top_Center:'Top_Center',Top_Right:'Top_Right',Center_Left:'Center_Left',Center_Center:'Center_Center',Center_Right:'Center_Right',Bottom_Left:'Bottom_Left',Bottom_Center:'Bottom_Center',Bottom_Right:'Bottom_Right',Custom:'Custom',ESpritePivotMode_MAX:'ESpritePivotMode_MAX', };
declare type ESpriteShapeType = 'Box' | 'Circle' | 'Polygon' | 'ESpriteShapeType_MAX';
declare var ESpriteShapeType : { Box:'Box',Circle:'Circle',Polygon:'Polygon',ESpriteShapeType_MAX:'ESpriteShapeType_MAX', };
declare class SpriteGeometryShape { 
	ShapeType: ESpriteShapeType;
	Vertices: Vector2D[];
	BoxSize: Vector2D;
	BoxPosition: Vector2D;
	Rotation: number;
	bNegativeWinding: boolean;
	clone() : SpriteGeometryShape;
	static C(Other: UObject | any): SpriteGeometryShape;
}

declare type ESpritePolygonMode = 'SourceBoundingBox' | 'TightBoundingBox' | 'ShrinkWrapped' | 'FullyCustom' | 'Diced' | 'ESpritePolygonMode_MAX';
declare var ESpritePolygonMode : { SourceBoundingBox:'SourceBoundingBox',TightBoundingBox:'TightBoundingBox',ShrinkWrapped:'ShrinkWrapped',FullyCustom:'FullyCustom',Diced:'Diced',ESpritePolygonMode_MAX:'ESpritePolygonMode_MAX', };
declare class SpriteGeometryCollection { 
	Shapes: SpriteGeometryShape[];
	GeometryType: ESpritePolygonMode;
	PixelsPerSubdivisionX: number;
	PixelsPerSubdivisionY: number;
	bAvoidVertexMerging: boolean;
	AlphaThreshold: number;
	DetailAmount: number;
	SimplifyEpsilon: number;
	clone() : SpriteGeometryCollection;
	static C(Other: UObject | any): SpriteGeometryCollection;
}

declare type EPaperSpriteAtlasPadding = 'DilateBorder' | 'PadWithZero' | 'EPaperSpriteAtlasPadding_MAX';
declare var EPaperSpriteAtlasPadding : { DilateBorder:'DilateBorder',PadWithZero:'PadWithZero',EPaperSpriteAtlasPadding_MAX:'EPaperSpriteAtlasPadding_MAX', };
declare class PaperSpriteAtlasSlot { 
	SpriteRef: PaperSprite;
	AtlasIndex: number;
	X: number;
	Y: number;
	Width: number;
	Height: number;
	clone() : PaperSpriteAtlasSlot;
	static C(Other: UObject | any): PaperSpriteAtlasSlot;
}

declare class PaperSpriteAtlas extends UObject { 
	AtlasDescription: string;
	MaxWidth: number;
	MaxHeight: number;
	MipCount: number;
	PaddingType: EPaperSpriteAtlasPadding;
	Padding: number;
	CompressionSettings: TextureCompressionSettings;
	Filter: TextureFilter;
	GeneratedTextures: Texture[];
	AtlasGUID: Guid;
	bRebuildAtlas: boolean;
	AtlasSlots: PaperSpriteAtlasSlot[];
	NumIncrementalBuilds: number;
	BuiltWidth: number;
	BuiltHeight: number;
	BuiltPadding: number;
	static Load(ResourceName: string): PaperSpriteAtlas;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlas;
	static GetDefaultObject(): PaperSpriteAtlas;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlas;
	static C(Other: UObject | any): PaperSpriteAtlas;
}

declare class PaperSprite extends UObject { 
	OriginInSourceImageBeforeTrimming: Vector2D;
	SourceImageDimensionBeforeTrimming: Vector2D;
	bTrimmedInSourceImage: boolean;
	bRotatedInSourceImage: boolean;
	SourceTextureDimension: Vector2D;
	SourceUV: Vector2D;
	SourceDimension: Vector2D;
	SourceTexture: Texture2D;
	AdditionalSourceTextures: Texture[];
	BakedSourceUV: Vector2D;
	BakedSourceDimension: Vector2D;
	BakedSourceTexture: Texture2D;
	DefaultMaterial: MaterialInterface;
	AlternateMaterial: MaterialInterface;
	Sockets: PaperSpriteSocket[];
	SpriteCollisionDomain: ESpriteCollisionMode;
	PixelsPerUnrealUnit: number;
	BodySetup: BodySetup;
	PivotMode: ESpritePivotMode;
	CustomPivotPoint: Vector2D;
	bSnapPivotToPixelGrid: boolean;
	CollisionGeometry: SpriteGeometryCollection;
	CollisionThickness: number;
	RenderGeometry: SpriteGeometryCollection;
	AtlasGroup: PaperSpriteAtlas;
	AlternateMaterialSplitIndex: number;
	BakedRenderData: Vector4[];
	static Load(ResourceName: string): PaperSprite;
	static Find(Outer: UObject, ResourceName: string): PaperSprite;
	static GetDefaultObject(): PaperSprite;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSprite;
	static C(Other: UObject | any): PaperSprite;
	MakeBrushFromSprite(Width: number,Height: number): SlateBrush;
	static MakeBrushFromSprite(Sprite: PaperSprite,Width: number,Height: number): SlateBrush;
}

declare class PaperFlipbookKeyFrame { 
	Sprite: PaperSprite;
	FrameRun: number;
	clone() : PaperFlipbookKeyFrame;
	static C(Other: UObject | any): PaperFlipbookKeyFrame;
}

declare type EFlipbookCollisionMode = 'NoCollision' | 'FirstFrameCollision' | 'EachFrameCollision' | 'EFlipbookCollisionMode_MAX';
declare var EFlipbookCollisionMode : { NoCollision:'NoCollision',FirstFrameCollision:'FirstFrameCollision',EachFrameCollision:'EachFrameCollision',EFlipbookCollisionMode_MAX:'EFlipbookCollisionMode_MAX', };
declare class PaperFlipbook extends UObject { 
	FramesPerSecond: number;
	KeyFrames: PaperFlipbookKeyFrame[];
	DefaultMaterial: MaterialInterface;
	CollisionSource: EFlipbookCollisionMode;
	static Load(ResourceName: string): PaperFlipbook;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbook;
	static GetDefaultObject(): PaperFlipbook;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbook;
	IsValidKeyFrameIndex(index: number): boolean;
	GetTotalDuration(): number;
	GetSpriteAtTime(Time: number,bClampToEnds: boolean): PaperSprite;
	GetSpriteAtFrame(FrameIndex: number): PaperSprite;
	GetNumKeyFrames(): number;
	GetNumFrames(): number;
	GetKeyFrameIndexAtTime(Time: number,bClampToEnds: boolean): number;
	static C(Other: UObject | any): PaperFlipbook;
}

declare class PaperFlipbookComponent extends MeshComponent { 
	SourceFlipbook: PaperFlipbook;
	Material: MaterialInterface;
	PlayRate: number;
	bLooping: boolean;
	bReversePlayback: boolean;
	bPlaying: boolean;
	AccumulatedTime: number;
	CachedFrameIndex: number;
	SpriteColor: LinearColor;
	CachedBodySetup: BodySetup;
	OnFinishedPlaying: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): PaperFlipbookComponent;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookComponent;
	static GetDefaultObject(): PaperFlipbookComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookComponent;
	Stop(): void;
	SetSpriteColor(NewColor: LinearColor): void;
	SetPlayRate(NewRate: number): void;
	SetPlaybackPositionInFrames(NewFramePosition: number,bFireEvents: boolean): void;
	SetPlaybackPosition(NewPosition: number,bFireEvents: boolean): void;
	SetNewTime(NewTime: number): void;
	SetLooping(bNewLooping: boolean): void;
	SetFlipbook(NewFlipbook: PaperFlipbook): boolean;
	ReverseFromEnd(): void;
	Reverse(): void;
	PlayFromStart(): void;
	Play(): void;
	OnRep_SourceFlipbook(OldFlipbook: PaperFlipbook): void;
	IsReversing(): boolean;
	IsPlaying(): boolean;
	IsLooping(): boolean;
	GetPlayRate(): number;
	GetPlaybackPositionInFrames(): number;
	GetPlaybackPosition(): number;
	GetFlipbookLengthInFrames(): number;
	GetFlipbookLength(): number;
	GetFlipbookFramerate(): number;
	GetFlipbook(): PaperFlipbook;
	static C(Other: UObject | any): PaperFlipbookComponent;
}

declare class PaperCharacter extends Character { 
	Sprite: PaperFlipbookComponent;
	static GetDefaultObject(): PaperCharacter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperCharacter;
	static C(Other: UObject | any): PaperCharacter;
}

declare class PaperFlipbookActor extends Actor { 
	RenderComponent: PaperFlipbookComponent;
	static GetDefaultObject(): PaperFlipbookActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActor;
	static C(Other: UObject | any): PaperFlipbookActor;
}

declare class SpriteInstanceData { 
	Transform: Matrix;
	SourceSprite: PaperSprite;
	VertexColor: Color;
	MaterialIndex: number;
	clone() : SpriteInstanceData;
	static C(Other: UObject | any): SpriteInstanceData;
}

declare class PaperGroupedSpriteComponent extends MeshComponent { 
	InstanceMaterials: MaterialInterface[];
	PerInstanceSpriteData: SpriteInstanceData[];
	static Load(ResourceName: string): PaperGroupedSpriteComponent;
	static Find(Outer: UObject, ResourceName: string): PaperGroupedSpriteComponent;
	static GetDefaultObject(): PaperGroupedSpriteComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteComponent;
	UpdateInstanceTransform(InstanceIndex: number,NewInstanceTransform: Transform,bWorldSpace: boolean,bMarkRenderStateDirty: boolean,bTeleport: boolean): boolean;
	UpdateInstanceColor(InstanceIndex: number,NewInstanceColor: LinearColor,bMarkRenderStateDirty: boolean): boolean;
	SortInstancesAlongAxis(WorldSpaceSortAxis: Vector): void;
	RemoveInstance(InstanceIndex: number): boolean;
	GetInstanceTransform(InstanceIndex: number,OutInstanceTransform?: Transform,bWorldSpace?: boolean): {OutInstanceTransform: Transform, $: boolean};
	GetInstanceCount(): number;
	ClearInstances(): void;
	AddInstance(Transform: Transform,Sprite: PaperSprite,bWorldSpace: boolean,Color: LinearColor): number;
	static C(Other: UObject | any): PaperGroupedSpriteComponent;
}

declare class PaperGroupedSpriteActor extends Actor { 
	RenderComponent: PaperGroupedSpriteComponent;
	static GetDefaultObject(): PaperGroupedSpriteActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteActor;
	static C(Other: UObject | any): PaperGroupedSpriteActor;
}

declare class PaperRuntimeSettings extends UObject { 
	bEnableSpriteAtlasGroups: boolean;
	bEnableTerrainSplineEditing: boolean;
	bResizeSpriteDataToMatchTextures: boolean;
	static Load(ResourceName: string): PaperRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): PaperRuntimeSettings;
	static GetDefaultObject(): PaperRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperRuntimeSettings;
	static C(Other: UObject | any): PaperRuntimeSettings;
}

declare class PaperSpriteComponent extends MeshComponent { 
	SourceSprite: PaperSprite;
	MaterialOverride: MaterialInterface;
	SpriteColor: LinearColor;
	static Load(ResourceName: string): PaperSpriteComponent;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteComponent;
	static GetDefaultObject(): PaperSpriteComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteComponent;
	SetSpriteColor(NewColor: LinearColor): void;
	SetSprite(NewSprite: PaperSprite): boolean;
	GetSprite(): PaperSprite;
	static C(Other: UObject | any): PaperSpriteComponent;
}

declare class PaperSpriteActor extends Actor { 
	RenderComponent: PaperSpriteComponent;
	static GetDefaultObject(): PaperSpriteActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActor;
	static C(Other: UObject | any): PaperSpriteActor;
}

declare class PaperSpriteBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): PaperSpriteBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteBlueprintLibrary;
	static GetDefaultObject(): PaperSpriteBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteBlueprintLibrary;
	static MakeBrushFromSprite(Sprite: PaperSprite,Width: number,Height: number): SlateBrush;
	static C(Other: UObject | any): PaperSpriteBlueprintLibrary;
}

declare class PaperTerrainSplineComponent extends SplineComponent { 
	static Load(ResourceName: string): PaperTerrainSplineComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainSplineComponent;
	static GetDefaultObject(): PaperTerrainSplineComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainSplineComponent;
	static C(Other: UObject | any): PaperTerrainSplineComponent;
}

declare class PaperTerrainMaterialRule { 
	StartCap: PaperSprite;
	Body: PaperSprite[];
	EndCap: PaperSprite;
	MinimumAngle: number;
	MaximumAngle: number;
	bEnableCollision: boolean;
	CollisionOffset: number;
	DrawOrder: number;
	Description: string;
	clone() : PaperTerrainMaterialRule;
	static C(Other: UObject | any): PaperTerrainMaterialRule;
}

declare class PaperTerrainMaterial extends DataAsset { 
	Rules: PaperTerrainMaterialRule[];
	InteriorFill: PaperSprite;
	static Load(ResourceName: string): PaperTerrainMaterial;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainMaterial;
	static GetDefaultObject(): PaperTerrainMaterial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainMaterial;
	static C(Other: UObject | any): PaperTerrainMaterial;
}

declare class PaperTerrainComponent extends PrimitiveComponent { 
	TerrainMaterial: PaperTerrainMaterial;
	bClosedSpline: boolean;
	bFilledSpline: boolean;
	AssociatedSpline: PaperTerrainSplineComponent;
	RandomSeed: number;
	SegmentOverlapAmount: number;
	TerrainColor: LinearColor;
	ReparamStepsPerSegment: number;
	SpriteCollisionDomain: ESpriteCollisionMode;
	CollisionThickness: number;
	CachedBodySetup: BodySetup;
	static Load(ResourceName: string): PaperTerrainComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainComponent;
	static GetDefaultObject(): PaperTerrainComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainComponent;
	SetTerrainColor(NewColor: LinearColor): void;
	static C(Other: UObject | any): PaperTerrainComponent;
}

declare class PaperTerrainActor extends Actor { 
	DummyRoot: SceneComponent;
	SplineComponent: PaperTerrainSplineComponent;
	RenderComponent: PaperTerrainComponent;
	static GetDefaultObject(): PaperTerrainActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainActor;
	static C(Other: UObject | any): PaperTerrainActor;
}

declare class IntMargin { 
	Left: number;
	Top: number;
	Right: number;
	Bottom: number;
	clone() : IntMargin;
	static C(Other: UObject | any): IntMargin;
}

declare class PaperTileMetadata { 
	UserDataName: string;
	CollisionData: SpriteGeometryCollection;
	TerrainMembership: number;
	clone() : PaperTileMetadata;
	static C(Other: UObject | any): PaperTileMetadata;
}

declare class PaperTileSetTerrain { 
	TerrainName: string;
	CenterTileIndex: number;
	clone() : PaperTileSetTerrain;
	static C(Other: UObject | any): PaperTileSetTerrain;
}

declare class PaperTileSet extends UObject { 
	TileSize: IntPoint;
	TileSheet: Texture2D;
	AdditionalSourceTextures: Texture[];
	BorderMargin: IntMargin;
	PerTileSpacing: IntPoint;
	DrawingOffset: IntPoint;
	BackgroundColor: LinearColor;
	WidthInTiles: number;
	HeightInTiles: number;
	AllocatedWidth: number;
	AllocatedHeight: number;
	PerTileData: PaperTileMetadata[];
	Terrains: PaperTileSetTerrain[];
	TileWidth: number;
	TileHeight: number;
	Margin: number;
	Spacing: number;
	static Load(ResourceName: string): PaperTileSet;
	static Find(Outer: UObject, ResourceName: string): PaperTileSet;
	static GetDefaultObject(): PaperTileSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSet;
	static C(Other: UObject | any): PaperTileSet;
}

declare class PaperTileInfo { 
	TileSet: PaperTileSet;
	PackedTileIndex: number;
	clone() : PaperTileInfo;
	static C(Other: UObject | any): PaperTileInfo;
	BreakTile(TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
	GetTileTransform(): Transform;
	GetTileUserData(): string;
	static BreakTile(Tile: PaperTileInfo,TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
	static GetTileTransform(Tile: PaperTileInfo): Transform;
	static GetTileUserData(Tile: PaperTileInfo): string;
	static MakeTile(TileIndex: number,TileSet: PaperTileSet,bFlipH: boolean,bFlipV: boolean,bFlipD: boolean): PaperTileInfo;
}

declare class PaperTileLayer extends UObject { 
	LayerName: string;
	LayerWidth: number;
	LayerHeight: number;
	bHiddenInEditor: boolean;
	bHiddenInGame: boolean;
	bLayerCollides: boolean;
	bOverrideCollisionThickness: boolean;
	bOverrideCollisionOffset: boolean;
	CollisionThicknessOverride: number;
	CollisionOffsetOverride: number;
	LayerColor: LinearColor;
	AllocatedWidth: number;
	AllocatedHeight: number;
	AllocatedCells: PaperTileInfo[];
	TileSet: PaperTileSet;
	AllocatedGrid: number[];
	static Load(ResourceName: string): PaperTileLayer;
	static Find(Outer: UObject, ResourceName: string): PaperTileLayer;
	static GetDefaultObject(): PaperTileLayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileLayer;
	static C(Other: UObject | any): PaperTileLayer;
}

declare type ETileMapProjectionMode = 'Orthogonal' | 'IsometricDiamond' | 'IsometricStaggered' | 'HexagonalStaggered' | 'ETileMapProjectionMode_MAX';
declare var ETileMapProjectionMode : { Orthogonal:'Orthogonal',IsometricDiamond:'IsometricDiamond',IsometricStaggered:'IsometricStaggered',HexagonalStaggered:'HexagonalStaggered',ETileMapProjectionMode_MAX:'ETileMapProjectionMode_MAX', };
declare class PaperTileMap extends UObject { 
	MapWidth: number;
	MapHeight: number;
	TileWidth: number;
	TileHeight: number;
	PixelsPerUnrealUnit: number;
	SeparationPerTileX: number;
	SeparationPerTileY: number;
	SeparationPerLayer: number;
	SelectedTileSet: PaperTileSet;
	Material: MaterialInterface;
	TileLayers: PaperTileLayer[];
	CollisionThickness: number;
	SpriteCollisionDomain: ESpriteCollisionMode;
	ProjectionMode: ETileMapProjectionMode;
	HexSideLength: number;
	BodySetup: BodySetup;
	AssetImportData: AssetImportData;
	SelectedLayerIndex: number;
	BackgroundColor: LinearColor;
	TileGridColor: LinearColor;
	MultiTileGridColor: LinearColor;
	MultiTileGridWidth: number;
	MultiTileGridHeight: number;
	MultiTileGridOffsetX: number;
	MultiTileGridOffsetY: number;
	LayerGridColor: LinearColor;
	LayerNameIndex: number;
	static Load(ResourceName: string): PaperTileMap;
	static Find(Outer: UObject, ResourceName: string): PaperTileMap;
	static GetDefaultObject(): PaperTileMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMap;
	static C(Other: UObject | any): PaperTileMap;
}

declare class PaperTileMapComponent extends MeshComponent { 
	MapWidth: number;
	MapHeight: number;
	TileWidth: number;
	TileHeight: number;
	DefaultLayerTileSet: PaperTileSet;
	Material: MaterialInterface;
	TileLayers: PaperTileLayer[];
	TileMapColor: LinearColor;
	UseSingleLayerIndex: number;
	bUseSingleLayer: boolean;
	TileMap: PaperTileMap;
	bShowPerTileGridWhenSelected: boolean;
	bShowPerLayerGridWhenSelected: boolean;
	bShowOutlineWhenUnselected: boolean;
	bShowPerTileGridWhenUnselected: boolean;
	bShowPerLayerGridWhenUnselected: boolean;
	static Load(ResourceName: string): PaperTileMapComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapComponent;
	static GetDefaultObject(): PaperTileMapComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapComponent;
	SetTileMapColor(NewColor: LinearColor): void;
	SetTileMap(NewTileMap: PaperTileMap): boolean;
	SetTile(X: number,Y: number,Layer: number,NewValue: PaperTileInfo): void;
	SetLayerColor(NewColor: LinearColor,Layer: number): void;
	SetLayerCollision(Layer: number,bHasCollision: boolean,bOverrideThickness: boolean,CustomThickness: number,bOverrideOffset: boolean,CustomOffset: number,bRebuildCollision: boolean): void;
	SetDefaultCollisionThickness(Thickness: number,bRebuildCollision: boolean): void;
	ResizeMap(NewWidthInTiles: number,NewHeightInTiles: number): void;
	RebuildCollision(): void;
	OwnsTileMap(): boolean;
	MakeTileMapEditable(): void;
	GetTilePolygon(TileX: number,TileY: number,Points?: Vector[],LayerIndex?: number,bWorldSpace?: boolean): {Points: Vector[]};
	GetTileMapColor(): LinearColor;
	GetTileCornerPosition(TileX: number,TileY: number,LayerIndex: number,bWorldSpace: boolean): Vector;
	GetTileCenterPosition(TileX: number,TileY: number,LayerIndex: number,bWorldSpace: boolean): Vector;
	GetTile(X: number,Y: number,Layer: number): PaperTileInfo;
	GetMapSize(MapWidth?: number,MapHeight?: number,NumLayers?: number): {MapWidth: number, MapHeight: number, NumLayers: number};
	GetLayerColor(Layer: number): LinearColor;
	CreateNewTileMap(MapWidth: number,MapHeight: number,TileWidth: number,TileHeight: number,PixelsPerUnrealUnit: number,bCreateLayer: boolean): void;
	AddNewLayer(): PaperTileLayer;
	static C(Other: UObject | any): PaperTileMapComponent;
}

declare class PaperTileMapActor extends Actor { 
	RenderComponent: PaperTileMapComponent;
	static GetDefaultObject(): PaperTileMapActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapActor;
	static C(Other: UObject | any): PaperTileMapActor;
}

declare class TileMapBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): TileMapBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): TileMapBlueprintLibrary;
	static GetDefaultObject(): TileMapBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapBlueprintLibrary;
	static MakeTile(TileIndex: number,TileSet: PaperTileSet,bFlipH: boolean,bFlipV: boolean,bFlipD: boolean): PaperTileInfo;
	static GetTileUserData(Tile: PaperTileInfo): string;
	static GetTileTransform(Tile: PaperTileInfo): Transform;
	static BreakTile(Tile: PaperTileInfo,TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
	static C(Other: UObject | any): TileMapBlueprintLibrary;
}

declare class LightPropagationVolumeSettings { 
	bOverride_LPVIntensity: boolean;
	bOverride_LPVDirectionalOcclusionIntensity: boolean;
	bOverride_LPVDirectionalOcclusionRadius: boolean;
	bOverride_LPVDiffuseOcclusionExponent: boolean;
	bOverride_LPVSpecularOcclusionExponent: boolean;
	bOverride_LPVDiffuseOcclusionIntensity: boolean;
	bOverride_LPVSpecularOcclusionIntensity: boolean;
	bOverride_LPVSize: boolean;
	bOverride_LPVSecondaryOcclusionIntensity: boolean;
	bOverride_LPVSecondaryBounceIntensity: boolean;
	bOverride_LPVGeometryVolumeBias: boolean;
	bOverride_LPVVplInjectionBias: boolean;
	bOverride_LPVEmissiveInjectionIntensity: boolean;
	LPVIntensity: number;
	LPVVplInjectionBias: number;
	LPVSize: number;
	LPVSecondaryOcclusionIntensity: number;
	LPVSecondaryBounceIntensity: number;
	LPVGeometryVolumeBias: number;
	LPVEmissiveInjectionIntensity: number;
	LPVDirectionalOcclusionIntensity: number;
	LPVDirectionalOcclusionRadius: number;
	LPVDiffuseOcclusionExponent: number;
	LPVSpecularOcclusionExponent: number;
	LPVDiffuseOcclusionIntensity: number;
	LPVSpecularOcclusionIntensity: number;
	LPVFadeRange: number;
	LPVDirectionalOcclusionFadeRange: number;
	clone() : LightPropagationVolumeSettings;
	static C(Other: UObject | any): LightPropagationVolumeSettings;
}

declare class LightPropagationVolumeBlendable extends UObject { 
	Settings: LightPropagationVolumeSettings;
	BlendWeight: number;
	static Load(ResourceName: string): LightPropagationVolumeBlendable;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendable;
	static GetDefaultObject(): LightPropagationVolumeBlendable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendable;
	static C(Other: UObject | any): LightPropagationVolumeBlendable;
}

declare class EdGraph_ReferenceViewer extends EdGraph { 
	static Load(ResourceName: string): EdGraph_ReferenceViewer;
	static Find(Outer: UObject, ResourceName: string): EdGraph_ReferenceViewer;
	static GetDefaultObject(): EdGraph_ReferenceViewer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraph_ReferenceViewer;
	static C(Other: UObject | any): EdGraph_ReferenceViewer;
}

declare class EdGraphNode_Reference extends EdGraphNode { 
	static Load(ResourceName: string): EdGraphNode_Reference;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_Reference;
	static GetDefaultObject(): EdGraphNode_Reference;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_Reference;
	static C(Other: UObject | any): EdGraphNode_Reference;
}

declare class ReferenceViewerSchema extends EdGraphSchema { 
	static Load(ResourceName: string): ReferenceViewerSchema;
	static Find(Outer: UObject, ResourceName: string): ReferenceViewerSchema;
	static GetDefaultObject(): ReferenceViewerSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReferenceViewerSchema;
	static C(Other: UObject | any): ReferenceViewerSchema;
}

declare class ContentBrowserFrontEndFilterExtension extends UObject { 
	static Load(ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static GetDefaultObject(): ContentBrowserFrontEndFilterExtension;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserFrontEndFilterExtension;
	static C(Other: UObject | any): ContentBrowserFrontEndFilterExtension;
}

declare class InternationalizationExportSettings extends UObject { 
	CulturesToGenerate: string[];
	CommandletClass: string;
	SourcePath: string;
	DestinationPath: string;
	PortableObjectName: string;
	ManifestName: string;
	ArchiveName: string;
	bExportLoc: boolean;
	bImportLoc: boolean;
	bUseCultureDirectory: boolean;
	static Load(ResourceName: string): InternationalizationExportSettings;
	static Find(Outer: UObject, ResourceName: string): InternationalizationExportSettings;
	static GetDefaultObject(): InternationalizationExportSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InternationalizationExportSettings;
	static C(Other: UObject | any): InternationalizationExportSettings;
}

declare class TranslationPickerSettings extends UObject { 
	bSubmitTranslationPickerChangesToLocalizationService: boolean;
	static Load(ResourceName: string): TranslationPickerSettings;
	static Find(Outer: UObject, ResourceName: string): TranslationPickerSettings;
	static GetDefaultObject(): TranslationPickerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationPickerSettings;
	static C(Other: UObject | any): TranslationPickerSettings;
}

declare class TranslationChange { 
	Version: string;
	DateAndTime: DateTime;
	Source: string;
	Translation: string;
	clone() : TranslationChange;
	static C(Other: UObject | any): TranslationChange;
}

declare class TranslationContextInfo { 
	Key: string;
	Context: string;
	Changes: TranslationChange[];
	clone() : TranslationContextInfo;
	static C(Other: UObject | any): TranslationContextInfo;
}

declare class TranslationUnit extends UObject { 
	Namespace: string;
	Key: string;
	Source: string;
	Translation: string;
	Contexts: TranslationContextInfo[];
	HasBeenReviewed: boolean;
	TranslationBeforeImport: string;
	LocresPath: string;
	static Load(ResourceName: string): TranslationUnit;
	static Find(Outer: UObject, ResourceName: string): TranslationUnit;
	static GetDefaultObject(): TranslationUnit;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationUnit;
	static C(Other: UObject | any): TranslationUnit;
}

declare class PixelInspectorView extends UObject { 
	FinalColor: LinearColor;
	SceneColor: LinearColor;
	PreExposure: number;
	Luminance: number;
	HdrColor: LinearColor;
	Normal: Vector;
	PerObjectGBufferData: number;
	Metallic: number;
	Specular: number;
	Roughness: number;
	MaterialShadingModel: EMaterialShadingModel;
	SelectiveOutputMask: number;
	BaseColor: LinearColor;
	IndirectIrradiance: number;
	AmbientOcclusion: number;
	SubsurfaceColor: LinearColor;
	SubsurfaceProfile: Vector;
	Opacity: number;
	Clearcoat: number;
	ClearCoatRoughness: number;
	WorldNormal: Vector;
	BackLit: number;
	Cloth: number;
	EyeTangent: Vector;
	IrisMask: number;
	IrisDistance: number;
	static Load(ResourceName: string): PixelInspectorView;
	static Find(Outer: UObject, ResourceName: string): PixelInspectorView;
	static GetDefaultObject(): PixelInspectorView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PixelInspectorView;
	static C(Other: UObject | any): PixelInspectorView;
}

declare class DataValidationCommandlet extends Commandlet { 
	static Load(ResourceName: string): DataValidationCommandlet;
	static Find(Outer: UObject, ResourceName: string): DataValidationCommandlet;
	static GetDefaultObject(): DataValidationCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DataValidationCommandlet;
	static C(Other: UObject | any): DataValidationCommandlet;
}

declare class DataValidationManager extends UObject { 
	ExcludedDirectories: DirectoryPath[];
	bValidateOnSave: boolean;
	DataValidationManagerClassName: SoftClassPath;
	static Load(ResourceName: string): DataValidationManager;
	static Find(Outer: UObject, ResourceName: string): DataValidationManager;
	static GetDefaultObject(): DataValidationManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DataValidationManager;
	static C(Other: UObject | any): DataValidationManager;
}

declare class AudioCurveSourceComponent extends AudioComponent { 
	CurveSourceBindingName: string;
	CurveSyncOffset: number;
	static Load(ResourceName: string): AudioCurveSourceComponent;
	static Find(Outer: UObject, ResourceName: string): AudioCurveSourceComponent;
	static GetDefaultObject(): AudioCurveSourceComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCurveSourceComponent;
	static C(Other: UObject | any): AudioCurveSourceComponent;
}

declare class FacialAnimationBulkImporterSettings extends UObject { 
	SourceImportPath: DirectoryPath;
	TargetImportPath: DirectoryPath;
	CurveNodeName: string;
	static Load(ResourceName: string): FacialAnimationBulkImporterSettings;
	static Find(Outer: UObject, ResourceName: string): FacialAnimationBulkImporterSettings;
	static GetDefaultObject(): FacialAnimationBulkImporterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FacialAnimationBulkImporterSettings;
	static C(Other: UObject | any): FacialAnimationBulkImporterSettings;
}

declare class GameplayTagSearchFilter extends ContentBrowserFrontEndFilterExtension { 
	static Load(ResourceName: string): GameplayTagSearchFilter;
	static Find(Outer: UObject, ResourceName: string): GameplayTagSearchFilter;
	static GetDefaultObject(): GameplayTagSearchFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagSearchFilter;
	static C(Other: UObject | any): GameplayTagSearchFilter;
}

declare class GameplayTagsK2Node_LiteralGameplayTag extends K2Node { 
	static Load(ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static GetDefaultObject(): GameplayTagsK2Node_LiteralGameplayTag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_LiteralGameplayTag;
	static C(Other: UObject | any): GameplayTagsK2Node_LiteralGameplayTag;
}

declare class GameplayTagsK2Node_MultiCompareBase extends K2Node { 
	NumberOfPins: number;
	PinNames: string[];
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareBase;
	static C(Other: UObject | any): GameplayTagsK2Node_MultiCompareBase;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface extends GameplayTagsK2Node_MultiCompareBase { 
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static C(Other: UObject | any): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static C(Other: UObject | any): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainer extends GameplayTagsK2Node_MultiCompareBase { 
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static C(Other: UObject | any): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static C(Other: UObject | any): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
}

declare class GameplayTagsK2Node_SwitchGameplayTag extends K2Node_Switch { 
	PinTags: GameplayTag[];
	PinNames: string[];
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTag;
	static C(Other: UObject | any): GameplayTagsK2Node_SwitchGameplayTag;
}

declare class GameplayTagsK2Node_SwitchGameplayTagContainer extends K2Node_Switch { 
	PinContainers: GameplayTagContainer[];
	PinNames: string[];
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static C(Other: UObject | any): GameplayTagsK2Node_SwitchGameplayTagContainer;
}

declare class TcpMessagingSettings extends UObject { 
	EnableTransport: boolean;
	ListenEndpoint: string;
	ConnectToEndpoints: string[];
	ConnectionRetryDelay: number;
	static Load(ResourceName: string): TcpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): TcpMessagingSettings;
	static GetDefaultObject(): TcpMessagingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TcpMessagingSettings;
	static C(Other: UObject | any): TcpMessagingSettings;
}

declare class UdpMessagingSettings extends UObject { 
	EnableTransport: boolean;
	UnicastEndpoint: string;
	MulticastEndpoint: string;
	MulticastTimeToLive: number;
	StaticEndpoints: string[];
	EnableTunnel: boolean;
	TunnelUnicastEndpoint: string;
	TunnelMulticastEndpoint: string;
	RemoteTunnelEndpoints: string[];
	static Load(ResourceName: string): UdpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): UdpMessagingSettings;
	static GetDefaultObject(): UdpMessagingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UdpMessagingSettings;
	static C(Other: UObject | any): UdpMessagingSettings;
}

declare type EActorSequenceObjectReferenceType = 'ContextActor' | 'ExternalActor' | 'Component' | 'EActorSequenceObjectReferenceType_MAX';
declare var EActorSequenceObjectReferenceType : { ContextActor:'ContextActor',ExternalActor:'ExternalActor',Component:'Component',EActorSequenceObjectReferenceType_MAX:'EActorSequenceObjectReferenceType_MAX', };
declare class ActorSequenceObjectReference { 
	Type: EActorSequenceObjectReferenceType;
	ActorId: Guid;
	PathToComponent: string;
	clone() : ActorSequenceObjectReference;
	static C(Other: UObject | any): ActorSequenceObjectReference;
}

declare class ActorSequenceObjectReferences { 
	Array: ActorSequenceObjectReference[];
	clone() : ActorSequenceObjectReferences;
	static C(Other: UObject | any): ActorSequenceObjectReferences;
}

declare class ActorSequenceObjectReferenceMap { 
	BindingIds: Guid[];
	References: ActorSequenceObjectReferences[];
	clone() : ActorSequenceObjectReferenceMap;
	static C(Other: UObject | any): ActorSequenceObjectReferenceMap;
}

declare class ActorSequence extends MovieSceneSequence { 
	MovieScene: MovieScene;
	ObjectReferences: ActorSequenceObjectReferenceMap;
	bHasBeenInitialized: boolean;
	static Load(ResourceName: string): ActorSequence;
	static Find(Outer: UObject, ResourceName: string): ActorSequence;
	static GetDefaultObject(): ActorSequence;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequence;
	static C(Other: UObject | any): ActorSequence;
}

declare class ActorSequencePlayer extends MovieSceneSequencePlayer { 
	static Load(ResourceName: string): ActorSequencePlayer;
	static Find(Outer: UObject, ResourceName: string): ActorSequencePlayer;
	static GetDefaultObject(): ActorSequencePlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequencePlayer;
	static C(Other: UObject | any): ActorSequencePlayer;
}

declare class ActorSequenceComponent extends ActorComponent { 
	bAutoPlay: boolean;
	PlaybackSettings: MovieSceneSequencePlaybackSettings;
	Sequence: ActorSequence;
	SequencePlayer: ActorSequencePlayer;
	static Load(ResourceName: string): ActorSequenceComponent;
	static Find(Outer: UObject, ResourceName: string): ActorSequenceComponent;
	static GetDefaultObject(): ActorSequenceComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequenceComponent;
	static C(Other: UObject | any): ActorSequenceComponent;
}

declare type ELocationAccuracy = 'LA_ThreeKilometers' | 'LA_OneKilometer' | 'LA_HundredMeters' | 'LA_TenMeters' | 'LA_Best' | 'LA_Navigation' | 'LA_MAX';
declare var ELocationAccuracy : { LA_ThreeKilometers:'LA_ThreeKilometers',LA_OneKilometer:'LA_OneKilometer',LA_HundredMeters:'LA_HundredMeters',LA_TenMeters:'LA_TenMeters',LA_Best:'LA_Best',LA_Navigation:'LA_Navigation',LA_MAX:'LA_MAX', };
declare class LocationServicesData { 
	Timestamp: number;
	Longitude: number;
	Latitude: number;
	HorizontalAccuracy: number;
	VerticalAccuracy: number;
	Altitude: number;
	clone() : LocationServicesData;
	static C(Other: UObject | any): LocationServicesData;
	static GetLastKnownLocation(): LocationServicesData;
}

declare class LocationServicesImpl extends UObject { 
	OnLocationChanged: UnrealEngineMulticastDelegate<(LocationData: LocationServicesData) => void>;
	static Load(ResourceName: string): LocationServicesImpl;
	static Find(Outer: UObject, ResourceName: string): LocationServicesImpl;
	static GetDefaultObject(): LocationServicesImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocationServicesImpl;
	static C(Other: UObject | any): LocationServicesImpl;
}

declare class LocationServices extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LocationServices;
	static Find(Outer: UObject, ResourceName: string): LocationServices;
	static GetDefaultObject(): LocationServices;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocationServices;
	static StopLocationServices(): boolean;
	static StartLocationServices(): boolean;
	static IsLocationAccuracyAvailable(Accuracy: ELocationAccuracy): boolean;
	static InitLocationServices(Accuracy: ELocationAccuracy,UpdateFrequency: number,MinDistanceFilter: number): boolean;
	static GetLocationServicesImpl(): LocationServicesImpl;
	static GetLastKnownLocation(): LocationServicesData;
	static AreLocationServicesEnabled(): boolean;
	static C(Other: UObject | any): LocationServices;
}

declare type EOculusPlatform = 'PC' | 'Mobile' | 'Length' | 'EOculusPlatform_MAX';
declare var EOculusPlatform : { PC:'PC',Mobile:'Mobile',Length:'Length',EOculusPlatform_MAX:'EOculusPlatform_MAX', };
declare class OculusEditorSettings extends UObject { 
	PerfToolIgnoreList: any;
	PerfToolTargetPlatform: EOculusPlatform;
	static Load(ResourceName: string): OculusEditorSettings;
	static Find(Outer: UObject, ResourceName: string): OculusEditorSettings;
	static GetDefaultObject(): OculusEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusEditorSettings;
	static C(Other: UObject | any): OculusEditorSettings;
}

declare class TireConfigMaterialFriction { 
	PhysicalMaterial: PhysicalMaterial;
	FrictionScale: number;
	clone() : TireConfigMaterialFriction;
	static C(Other: UObject | any): TireConfigMaterialFriction;
}

declare class TireConfig extends DataAsset { 
	FrictionScale: number;
	TireFrictionScales: TireConfigMaterialFriction[];
	static Load(ResourceName: string): TireConfig;
	static Find(Outer: UObject, ResourceName: string): TireConfig;
	static GetDefaultObject(): TireConfig;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TireConfig;
	static C(Other: UObject | any): TireConfig;
}

declare type EWheelSweepType = 'SimpleAndComplex' | 'Simple' | 'Complex' | 'EWheelSweepType_MAX';
declare var EWheelSweepType : { SimpleAndComplex:'SimpleAndComplex',Simple:'Simple',Complex:'Complex',EWheelSweepType_MAX:'EWheelSweepType_MAX', };
declare class VehicleWheel extends UObject { 
	CollisionMesh: StaticMesh;
	bDontCreateShape: boolean;
	bAutoAdjustCollisionSize: boolean;
	Offset: Vector;
	ShapeRadius: number;
	ShapeWidth: number;
	Mass: number;
	DampingRate: number;
	SteerAngle: number;
	bAffectedByHandbrake: boolean;
	TireType: TireType;
	TireConfig: TireConfig;
	LatStiffMaxLoad: number;
	LatStiffValue: number;
	LongStiffValue: number;
	SuspensionForceOffset: number;
	SuspensionMaxRaise: number;
	SuspensionMaxDrop: number;
	SuspensionNaturalFrequency: number;
	SuspensionDampingRatio: number;
	SweepType: EWheelSweepType;
	MaxBrakeTorque: number;
	MaxHandBrakeTorque: number;
	VehicleSim: WheeledVehicleMovementComponent;
	WheelIndex: number;
	DebugLongSlip: number;
	DebugLatSlip: number;
	DebugNormalizedTireLoad: number;
	DebugWheelTorque: number;
	DebugLongForce: number;
	DebugLatForce: number;
	Location: Vector;
	OldLocation: Vector;
	Velocity: Vector;
	static Load(ResourceName: string): VehicleWheel;
	static Find(Outer: UObject, ResourceName: string): VehicleWheel;
	static GetDefaultObject(): VehicleWheel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VehicleWheel;
	IsInAir(): boolean;
	GetSuspensionOffset(): number;
	GetSteerAngle(): number;
	GetRotationAngle(): number;
	static C(Other: UObject | any): VehicleWheel;
}

declare class WheelSetup { 
	WheelClass: UnrealEngineClass;
	BoneName: string;
	AdditionalOffset: Vector;
	bDisableSteering: boolean;
	clone() : WheelSetup;
	static C(Other: UObject | any): WheelSetup;
}

declare class ReplicatedVehicleState { 
	SteeringInput: number;
	ThrottleInput: number;
	BrakeInput: number;
	HandbrakeInput: number;
	CurrentGear: number;
	clone() : ReplicatedVehicleState;
	static C(Other: UObject | any): ReplicatedVehicleState;
}

declare class VehicleInputRate { 
	RiseRate: number;
	FallRate: number;
	clone() : VehicleInputRate;
	static C(Other: UObject | any): VehicleInputRate;
}

declare class WheeledVehicleMovementComponent extends PawnMovementComponent { 
	bDeprecatedSpringOffsetMode: boolean;
	bReverseAsBrake: boolean;
	bUseRVOAvoidance: boolean;
	bRawHandbrakeInput: boolean;
	bRawGearUpInput: boolean;
	bRawGearDownInput: boolean;
	bWasAvoidanceUpdated: boolean;
	Mass: number;
	WheelSetups: WheelSetup[];
	DragCoefficient: number;
	ChassisWidth: number;
	ChassisHeight: number;
	DragArea: number;
	EstimatedMaxEngineSpeed: number;
	MaxEngineRPM: number;
	DebugDragMagnitude: number;
	InertiaTensorScale: Vector;
	MinNormalizedTireLoad: number;
	MinNormalizedTireLoadFiltered: number;
	MaxNormalizedTireLoad: number;
	MaxNormalizedTireLoadFiltered: number;
	ThresholdLongitudinalSpeed: number;
	LowForwardSpeedSubStepCount: number;
	HighForwardSpeedSubStepCount: number;
	Wheels: VehicleWheel[];
	RVOAvoidanceRadius: number;
	RVOAvoidanceHeight: number;
	AvoidanceConsiderationRadius: number;
	RVOSteeringStep: number;
	RVOThrottleStep: number;
	AvoidanceUID: number;
	AvoidanceGroup: NavAvoidanceMask;
	GroupsToAvoid: NavAvoidanceMask;
	GroupsToIgnore: NavAvoidanceMask;
	AvoidanceWeight: number;
	PendingLaunchVelocity: Vector;
	ReplicatedState: ReplicatedVehicleState;
	RawSteeringInput: number;
	RawThrottleInput: number;
	RawBrakeInput: number;
	SteeringInput: number;
	ThrottleInput: number;
	BrakeInput: number;
	HandbrakeInput: number;
	IdleBrakeInput: number;
	StopThreshold: number;
	WrongDirectionThreshold: number;
	ThrottleInputRate: VehicleInputRate;
	BrakeInputRate: VehicleInputRate;
	HandbrakeInputRate: VehicleInputRate;
	SteeringInputRate: VehicleInputRate;
	OverrideController: Controller;
	static Load(ResourceName: string): WheeledVehicleMovementComponent;
	static Find(Outer: UObject, ResourceName: string): WheeledVehicleMovementComponent;
	static GetDefaultObject(): WheeledVehicleMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicleMovementComponent;
	SetUseAutoGears(bUseAuto: boolean): void;
	SetThrottleInput(Throttle: number): void;
	SetTargetGear(GearNum: number,bImmediate: boolean): void;
	SetSteeringInput(Steering: number): void;
	SetHandbrakeInput(bNewHandbrake: boolean): void;
	SetGroupsToIgnoreMask(GroupMask: NavAvoidanceMask): void;
	SetGroupsToIgnore(GroupFlags: number): void;
	SetGroupsToAvoidMask(GroupMask: NavAvoidanceMask): void;
	SetGroupsToAvoid(GroupFlags: number): void;
	SetGearUp(bNewGearUp: boolean): void;
	SetGearDown(bNewGearDown: boolean): void;
	SetBrakeInput(Brake: number): void;
	SetAvoidanceGroupMask(GroupMask: NavAvoidanceMask): void;
	SetAvoidanceGroup(GroupFlags: number): void;
	SetAvoidanceEnabled(bEnable: boolean): void;
	ServerUpdateState(InSteeringInput: number,InThrottleInput: number,InBrakeInput: number,InHandbrakeInput: number,CurrentGear: number): void;
	GetUseAutoGears(): boolean;
	GetTargetGear(): number;
	GetForwardSpeed(): number;
	GetEngineRotationSpeed(): number;
	GetEngineMaxRotationSpeed(): number;
	GetCurrentGear(): number;
	static C(Other: UObject | any): WheeledVehicleMovementComponent;
}

declare class SimpleWheeledVehicleMovementComponent extends WheeledVehicleMovementComponent { 
	static Load(ResourceName: string): SimpleWheeledVehicleMovementComponent;
	static Find(Outer: UObject, ResourceName: string): SimpleWheeledVehicleMovementComponent;
	static GetDefaultObject(): SimpleWheeledVehicleMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimpleWheeledVehicleMovementComponent;
	SetSteerAngle(SteerAngle: number,WheelIndex: number): void;
	SetDriveTorque(DriveTorque: number,WheelIndex: number): void;
	SetBrakeTorque(BrakeTorque: number,WheelIndex: number): void;
	static C(Other: UObject | any): SimpleWheeledVehicleMovementComponent;
}

declare class WheeledVehicle extends Pawn { 
	Mesh: SkeletalMeshComponent;
	VehicleMovement: WheeledVehicleMovementComponent;
	static GetDefaultObject(): WheeledVehicle;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicle;
	static C(Other: UObject | any): WheeledVehicle;
}

declare class VehicleAnimInstance extends AnimInstance { 
	WheeledVehicleMovementComponent: WheeledVehicleMovementComponent;
	static Load(ResourceName: string): VehicleAnimInstance;
	static Find(Outer: UObject, ResourceName: string): VehicleAnimInstance;
	static GetDefaultObject(): VehicleAnimInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VehicleAnimInstance;
	GetVehicle(): WheeledVehicle;
	static C(Other: UObject | any): VehicleAnimInstance;
}

declare class VehicleEngineData { 
	TorqueCurve: RuntimeFloatCurve;
	MaxRPM: number;
	MOI: number;
	DampingRateFullThrottle: number;
	DampingRateZeroThrottleClutchEngaged: number;
	DampingRateZeroThrottleClutchDisengaged: number;
	clone() : VehicleEngineData;
	static C(Other: UObject | any): VehicleEngineData;
}

declare type EVehicleDifferential4W = 'LimitedSlip_4W' | 'LimitedSlip_FrontDrive' | 'LimitedSlip_RearDrive' | 'Open_4W' | 'Open_FrontDrive' | 'Open_RearDrive' | 'EVehicleDifferential4W_MAX';
declare var EVehicleDifferential4W : { LimitedSlip_4W:'LimitedSlip_4W',LimitedSlip_FrontDrive:'LimitedSlip_FrontDrive',LimitedSlip_RearDrive:'LimitedSlip_RearDrive',Open_4W:'Open_4W',Open_FrontDrive:'Open_FrontDrive',Open_RearDrive:'Open_RearDrive',EVehicleDifferential4W_MAX:'EVehicleDifferential4W_MAX', };
declare class VehicleDifferential4WData { 
	DifferentialType: EVehicleDifferential4W;
	FrontRearSplit: number;
	FrontLeftRightSplit: number;
	RearLeftRightSplit: number;
	CentreBias: number;
	FrontBias: number;
	RearBias: number;
	clone() : VehicleDifferential4WData;
	static C(Other: UObject | any): VehicleDifferential4WData;
}

declare class VehicleGearData { 
	Ratio: number;
	DownRatio: number;
	UpRatio: number;
	clone() : VehicleGearData;
	static C(Other: UObject | any): VehicleGearData;
}

declare class VehicleTransmissionData { 
	bUseGearAutoBox: boolean;
	GearSwitchTime: number;
	GearAutoBoxLatency: number;
	FinalRatio: number;
	ForwardGears: VehicleGearData[];
	ReverseGearRatio: number;
	NeutralGearUpRatio: number;
	ClutchStrength: number;
	clone() : VehicleTransmissionData;
	static C(Other: UObject | any): VehicleTransmissionData;
}

declare class WheeledVehicleMovementComponent4W extends WheeledVehicleMovementComponent { 
	EngineSetup: VehicleEngineData;
	DifferentialSetup: VehicleDifferential4WData;
	AckermannAccuracy: number;
	TransmissionSetup: VehicleTransmissionData;
	SteeringCurve: RuntimeFloatCurve;
	static Load(ResourceName: string): WheeledVehicleMovementComponent4W;
	static Find(Outer: UObject, ResourceName: string): WheeledVehicleMovementComponent4W;
	static GetDefaultObject(): WheeledVehicleMovementComponent4W;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicleMovementComponent4W;
	static C(Other: UObject | any): WheeledVehicleMovementComponent4W;
}

declare class AnimNode_WheelHandler extends AnimNode_SkeletalControlBase { 
	clone() : AnimNode_WheelHandler;
	static C(Other: UObject | any): AnimNode_WheelHandler;
}

declare class AnimGraphNode_WheelHandler extends AnimGraphNode_SkeletalControlBase { 
	UNode: AnimNode_WheelHandler;
	static Load(ResourceName: string): AnimGraphNode_WheelHandler;
	static Find(Outer: UObject, ResourceName: string): AnimGraphNode_WheelHandler;
	static GetDefaultObject(): AnimGraphNode_WheelHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimGraphNode_WheelHandler;
	static C(Other: UObject | any): AnimGraphNode_WheelHandler;
}

declare class DirectoryWatcher extends UObject { 
	Added: string[];
	Modified: string[];
	Removed: string[];
	OnChanged: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): DirectoryWatcher;
	static Find(Outer: UObject, ResourceName: string): DirectoryWatcher;
	static GetDefaultObject(): DirectoryWatcher;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DirectoryWatcher;
	Watch(Directory: string): void;
	Unwatch(): void;
	Contains(File: string): boolean;
	static C(Other: UObject | any): DirectoryWatcher;
}

declare class JavascriptContext extends UObject { 
	Paths: string[];
	static Load(ResourceName: string): JavascriptContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptContext;
	static GetDefaultObject(): JavascriptContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptContext;
	WriteDTS(Target: string,bIncludingTooltip: boolean): boolean;
	WriteAliases(Target: string): boolean;
	SetContextId(Name: string): void;
	SetAsDebugContext(InPort: number): void;
	RunScript(Script: string,bOutput: boolean): string;
	RunFile(Filename: string): void;
	ResetAsDebugContext(): void;
	RequestV8GarbageCollection(): void;
	ReadScriptFile(Filename: string): string;
	IsDebugContext(): boolean;
	GetScriptFileFullPath(Filename: string): string;
	FindPathFile(TargetRootPath: string,TargetFileName: string,OutFiles?: string[]): {OutFiles: string[]};
	Expose(Name: string,UObject: UObject): void;
	DestroyInspector(): void;
	CreateInspector(Port: number): void;
	static C(Other: UObject | any): JavascriptContext;
}

declare class JavascriptHeapStatistics { 
	TotalHeapSize: number;
	TotalHeapSizeExecutable: number;
	TotalPhysicalSize: number;
	TotalAvailableSize: number;
	UsedHeapSize: number;
	HeapSizeLimit: number;
	MallocedMemory: number;
	bDoesZapGarbage: boolean;
	clone() : JavascriptHeapStatistics;
	static C(Other: UObject | any): JavascriptHeapStatistics;
}

declare class JavascriptIsolate extends UObject { 
	static Load(ResourceName: string): JavascriptIsolate;
	static Find(Outer: UObject, ResourceName: string): JavascriptIsolate;
	static GetDefaultObject(): JavascriptIsolate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptIsolate;
	Init(bIsEditor: boolean): void;
	GetHeapStatistics(Statistics?: JavascriptHeapStatistics): {Statistics: JavascriptHeapStatistics};
	CreateContext(): JavascriptContext;
	static C(Other: UObject | any): JavascriptIsolate;
}

declare class JavascriptAsset { 
	Name: string;
	Asset: SoftObjectPath;
	clone() : JavascriptAsset;
	static C(Other: UObject | any): JavascriptAsset;
}

declare class JavascriptClassAsset { 
	Name: string;
	Class: UnrealEngineClass;
	clone() : JavascriptClassAsset;
	static C(Other: UObject | any): JavascriptClassAsset;
}

declare class JavascriptComponent extends ActorComponent { 
	ScriptSourceFile: string;
	bActiveWithinEditor: boolean;
	JavascriptContext: JavascriptContext;
	JavascriptIsolate: JavascriptIsolate;
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	OnBeginPlay: UnrealEngineDelegate<() => void>;
	OnEndPlay: UnrealEngineDelegate<() => void>;
	OnInvoke: UnrealEngineDelegate<(Name: string) => void>;
	Assets: JavascriptAsset[];
	ClassAssets: JavascriptClassAsset[];
	static Load(ResourceName: string): JavascriptComponent;
	static Find(Outer: UObject, ResourceName: string): JavascriptComponent;
	static GetDefaultObject(): JavascriptComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComponent;
	ResolveClass(Name: string): UnrealEngineClass;
	ResolveAsset(Name: string,bTryLoad: boolean): UObject;
	Invoke(Name: string): void;
	ForceGC(): void;
	Expose(ExposedAs: string,UObject: UObject): void;
	static C(Other: UObject | any): JavascriptComponent;
}

declare class JavascriptDelegate extends UObject { 
	static Load(ResourceName: string): JavascriptDelegate;
	static Find(Outer: UObject, ResourceName: string): JavascriptDelegate;
	static GetDefaultObject(): JavascriptDelegate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDelegate;
	Fire(): void;
	static C(Other: UObject | any): JavascriptDelegate;
}

declare class JavascriptGeneratedClass extends BlueprintGeneratedClass { 
	static Load(ResourceName: string): JavascriptGeneratedClass;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass;
	static GetDefaultObject(): JavascriptGeneratedClass;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass;
	static C(Other: UObject | any): JavascriptGeneratedClass;
}

declare class JavascriptGeneratedClass_Native extends BlueprintGeneratedClass { 
	static Load(ResourceName: string): JavascriptGeneratedClass_Native;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass_Native;
	static GetDefaultObject(): JavascriptGeneratedClass_Native;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass_Native;
	static C(Other: UObject | any): JavascriptGeneratedClass_Native;
}

declare class JavascriptGeneratedFunction extends UFunction { 
	static Load(ResourceName: string): JavascriptGeneratedFunction;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedFunction;
	static GetDefaultObject(): JavascriptGeneratedFunction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedFunction;
	static C(Other: UObject | any): JavascriptGeneratedFunction;
}

declare class JavascriptGlobalDelegates extends UObject { 
	static Load(ResourceName: string): JavascriptGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptGlobalDelegates;
	static GetDefaultObject(): JavascriptGlobalDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGlobalDelegates;
	UnbindAll(): void;
	Unbind(Key: string): void;
	RedirectorFollowed(PackageName: string,Redirector: UObject): void;
	PreLoadMap(MapName: string): void;
	PreGarbageCollectDelegate(): void;
	PostLoadMapWithWorld(World: World): void;
	PostGarbageCollect(): void;
	PostDemoPlay(): void;
	PostApplyLevelOffset(Level: Level,World: World,Offset: Vector,Flag: boolean): void;
	PackageCreatedForLoad(InPackage: Package): void;
	OnWorldCleanup(World: World,bSessionEnded: boolean,bCleanupResources: boolean): void;
	OnPreWorldInitialization_Friendly(World: World): void;
	OnPreWorldFinishDestroy(World: World): void;
	OnPreObjectPropertyChanged_Friendly(InObject: UObject,Property: Property,MemberProperty: Property): void;
	OnPostWorldInitialization_Friendly(World: World): void;
	OnPostWorldCreation(World: World): void;
	OnPostDuplicate_Friendly(World: World,bDuplicateForPIE: boolean): void;
	OnObjectSaved(UObject: UObject): void;
	OnObjectPropertyChanged_Friendly(InObject: UObject,Property: Property,MemberProperty: Property,ChangeType: number): void;
	OnObjectModified(UObject: UObject): void;
	OnAssetLoaded(UObject: UObject): void;
	LevelRemovedFromWorld(Level: Level,World: World): void;
	LevelAddedToWorld(Level: Level,World: World): void;
	Bind(Key: string): void;
	static C(Other: UObject | any): JavascriptGlobalDelegates;
}

declare class JavascriptStaticCache extends UObject { 
	Isolates: JavascriptIsolate[];
	static Load(ResourceName: string): JavascriptStaticCache;
	static Find(Outer: UObject, ResourceName: string): JavascriptStaticCache;
	static GetDefaultObject(): JavascriptStaticCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptStaticCache;
	static C(Other: UObject | any): JavascriptStaticCache;
}

declare class JavascriptStubStruct { 
	clone() : JavascriptStubStruct;
	static C(Other: UObject | any): JavascriptStubStruct;
}

declare class JavascriptFunction { 
	clone() : JavascriptFunction;
	static C(Other: UObject | any): JavascriptFunction;
	CallJS(CustomStruct: JavascriptStubStruct): void;
	static CallJS(UFunction: JavascriptFunction,CustomStruct: JavascriptStubStruct): void;
}

declare class JavascriptStreamableManager { 
	clone() : JavascriptStreamableManager;
	static C(Other: UObject | any): JavascriptStreamableManager;
	IsAsyncLoadComplete(Target: SoftObjectPath): boolean;
	RequestAsyncLoad(TargetsToStream: SoftObjectPath[],DelegateToCall: JavascriptFunction,Priority: number): void;
	SimpleAsyncLoad(Target: SoftObjectPath,Priority: number): void;
	Unload(Target: SoftObjectPath): void;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: SoftObjectPath): boolean;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: SoftObjectPath[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: SoftObjectPath,Priority: number): void;
	static Unload(Manager: JavascriptStreamableManager,Target: SoftObjectPath): void;
	static CreateStreamableManager(): JavascriptStreamableManager;
}

declare class JavascriptInternetAddr { 
	clone() : JavascriptInternetAddr;
	static C(Other: UObject | any): JavascriptInternetAddr;
	SetIp(ResolvedAddress?: string,bValid?: boolean): {Addr: JavascriptInternetAddr, bValid: boolean};
	SetPort(Port?: number): {Addr: JavascriptInternetAddr};
	static SetIp(Addr?: JavascriptInternetAddr,ResolvedAddress?: string,bValid?: boolean): {Addr: JavascriptInternetAddr, bValid: boolean};
	static SetPort(Addr?: JavascriptInternetAddr,Port?: number): {Addr: JavascriptInternetAddr};
	static CreateInternetAddr(): JavascriptInternetAddr;
}

declare class JavascriptSocket { 
	clone() : JavascriptSocket;
	static C(Other: UObject | any): JavascriptSocket;
	SendMemoryTo(ToAddr?: JavascriptInternetAddr,NumBytes?: number,BytesSent?: number): {Socket: JavascriptSocket, BytesSent: number, $: boolean};
	static SendMemoryTo(Socket?: JavascriptSocket,ToAddr?: JavascriptInternetAddr,NumBytes?: number,BytesSent?: number): {Socket: JavascriptSocket, BytesSent: number, $: boolean};
	static CreateSocket(SocketType: string,Description: string,bForceUDP: boolean): JavascriptSocket;
}

declare type EJavascriptStatDataType = 'Invalid' | 'ST_None' | 'ST_int64' | 'ST_double' | 'ST_FName' | 'ST_Ptr' | 'EJavascriptStatDataType_MAX';
declare var EJavascriptStatDataType : { Invalid:'Invalid',ST_None:'ST_None',ST_int64:'ST_int64',ST_double:'ST_double',ST_FName:'ST_FName',ST_Ptr:'ST_Ptr',EJavascriptStatDataType_MAX:'EJavascriptStatDataType_MAX', };
declare type EJavascriptStatOperation = 'Invalid' | 'SetLongName' | 'AdvanceFrameEventGameThread' | 'AdvanceFrameEventRenderThread' | 'CycleScopeStart' | 'CycleScopeEnd' | 'SpecialMessageMarker' | 'Set' | 'Clear' | 'Add' | 'Subtract' | 'ChildrenStart' | 'ChildrenEnd' | 'Leaf' | 'MaxVal' | 'Memory' | 'EJavascriptStatOperation_MAX';
declare var EJavascriptStatOperation : { Invalid:'Invalid',SetLongName:'SetLongName',AdvanceFrameEventGameThread:'AdvanceFrameEventGameThread',AdvanceFrameEventRenderThread:'AdvanceFrameEventRenderThread',CycleScopeStart:'CycleScopeStart',CycleScopeEnd:'CycleScopeEnd',SpecialMessageMarker:'SpecialMessageMarker',Set:'Set',Clear:'Clear',Add:'Add',Subtract:'Subtract',ChildrenStart:'ChildrenStart',ChildrenEnd:'ChildrenEnd',Leaf:'Leaf',MaxVal:'MaxVal',Memory:'Memory',EJavascriptStatOperation_MAX:'EJavascriptStatOperation_MAX', };
declare class JavascriptStat { 
	clone() : JavascriptStat;
	static C(Other: UObject | any): JavascriptStat;
	AddMessage(InStatOperation: EJavascriptStatOperation): void;
	AddMessage_float(InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	AddMessage_int(InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation): void;
	static AddMessage_float(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage_int(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static NewStat(InStatName: string,InStatDesc: string,InGroupName: string,InGroupCategory: string,InGroupDesc: string,bDefaultEnable: boolean,bShouldClearEveryFrame: boolean,InStatType: EJavascriptStatDataType,bCycleStat: boolean,bSortByName: boolean): JavascriptStat;
}

declare type ELogVerbosity_JS = 'NoLogging' | 'Fatal' | 'Error' | 'Warning' | 'Display' | 'Log' | 'Verbose' | 'VeryVerbose' | 'ELogVerbosity_MAX';
declare var ELogVerbosity_JS : { NoLogging:'NoLogging',Fatal:'Fatal',Error:'Error',Warning:'Warning',Display:'Display',Log:'Log',Verbose:'Verbose',VeryVerbose:'VeryVerbose',ELogVerbosity_MAX:'ELogVerbosity_MAX', };
declare class JavascriptLogCategory { 
	clone() : JavascriptLogCategory;
	static C(Other: UObject | any): JavascriptLogCategory;
	GetCategoryName(): string;
	IsSuppressed(Verbosity: ELogVerbosity_JS): boolean;
	Log(Verbosity: ELogVerbosity_JS,Message: string,Filename: string,LineNumber: number): void;
	static GetCategoryName(Category: JavascriptLogCategory): string;
	static IsSuppressed(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS): boolean;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,Filename: string,LineNumber: number): void;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
}

declare class JavscriptProperty { 
	Type: string;
	Name: string;
	clone() : JavscriptProperty;
	static C(Other: UObject | any): JavscriptProperty;
}

declare class JavascriptProfileNode { 
	clone() : JavascriptProfileNode;
	static C(Other: UObject | any): JavascriptProfileNode;
	GetBailoutReason(): string;
	GetCallUid(): number;
	GetChild(index: number): JavascriptProfileNode;
	GetChildrenCount(): number;
	GetColumnNumber(): number;
	GetDeoptInfo_Reason(index: number): string;
	GetDeoptInfo_Stack(index: number): string;
	GetDeoptInfosCount(index: number): number;
	GetFunctionName(): string;
	GetHitCount(): number;
	GetHitLineCount(): number;
	GetLineNumber(): number;
	GetNodeId(): number;
	GetScriptId(): number;
	GetScriptResourceName(): string;
	static GetBailoutReason(UNode: JavascriptProfileNode): string;
	static GetCallUid(UNode: JavascriptProfileNode): number;
	static GetChild(UNode: JavascriptProfileNode,index: number): JavascriptProfileNode;
	static GetChildrenCount(UNode: JavascriptProfileNode): number;
	static GetColumnNumber(UNode: JavascriptProfileNode): number;
	static GetDeoptInfo_Reason(UNode: JavascriptProfileNode,index: number): string;
	static GetDeoptInfo_Stack(UNode: JavascriptProfileNode,index: number): string;
	static GetDeoptInfosCount(UNode: JavascriptProfileNode,index: number): number;
	static GetFunctionName(UNode: JavascriptProfileNode): string;
	static GetHitCount(UNode: JavascriptProfileNode): number;
	static GetHitLineCount(UNode: JavascriptProfileNode): number;
	static GetLineNumber(UNode: JavascriptProfileNode): number;
	static GetNodeId(UNode: JavascriptProfileNode): number;
	static GetScriptId(UNode: JavascriptProfileNode): number;
	static GetScriptResourceName(UNode: JavascriptProfileNode): string;
}

declare class JavascriptLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptLibrary;
	static GetDefaultObject(): JavascriptLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLibrary;
	static WriteStringToFile(UObject: UObject,Filename: string,Data: string,EncodingOptions: EJavascriptEncodingOptions): boolean;
	static WriteFile(UObject: UObject,Filename: string): boolean;
	static V8_SetIdleTaskBudget(BudgetInSeconds: number): void;
	static V8_SetFlagsFromString(V8Flags: string): void;
	static UnregisterComponent(ActorComponent: ActorComponent): void;
	static Unload(Manager: JavascriptStreamableManager,Target: SoftObjectPath): void;
	static TryLoadByPath(Path: string): UObject;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: SoftObjectPath,Priority: number): void;
	static SetRootComponent(Actor: Actor,Component: SceneComponent): void;
	static SetPort(Addr?: JavascriptInternetAddr,Port?: number): {Addr: JavascriptInternetAddr};
	static SetObjectFlags(Obj: UObject,Flags: number): void;
	static SetMobility(SceneComponent: SceneComponent,Type: EComponentMobility): void;
	static SetMobile(SceneComponent: SceneComponent): void;
	static SetIp(Addr?: JavascriptInternetAddr,ResolvedAddress?: string,bValid?: boolean): {Addr: JavascriptInternetAddr, bValid: boolean};
	static SetClientTravel(Engine: Engine,InWorld: World,NextURL: string,InTravelType: ETravelType): void;
	static SetActorFlags(Actor: Actor,Flags: number): void;
	static SendMemoryTo(Socket?: JavascriptSocket,ToAddr?: JavascriptInternetAddr,NumBytes?: number,BytesSent?: number): {Socket: JavascriptSocket, BytesSent: number, $: boolean};
	static SegmentIntersection2D(SegmentStartA: Vector,SegmentEndA: Vector,SegmentStartB: Vector,SegmentEndB: Vector,IntersectionPoint?: Vector): {IntersectionPoint: Vector, $: boolean};
	static ResolveIp(HostName: string,OutIp?: string): {OutIp: string, $: boolean};
	static ReregisterComponent(ActorComponent: ActorComponent): void;
	static ReregisterAllComponents(Actor: Actor): void;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: SoftObjectPath[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static RegisterComponent(ActorComponent: ActorComponent): void;
	static ReadStringFromFile(UObject: UObject,Filename: string): string;
	static ReadFile(UObject: UObject,Filename: string): boolean;
	static ReadDirectory(UObject: UObject,Directory: string,OutItems?: DirectoryItem[]): {OutItems: DirectoryItem[], $: boolean};
	static NewStat(InStatName: string,InStatDesc: string,InGroupName: string,InGroupCategory: string,InGroupDesc: string,bDefaultEnable: boolean,bShouldClearEveryFrame: boolean,InStatType: EJavascriptStatDataType,bCycleStat: boolean,bSortByName: boolean): JavascriptStat;
	static MarkRenderStateDirty(Component: ActorComponent): void;
	static MakeDirectory(Path: string,Tree: boolean): boolean;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,Filename: string,LineNumber: number): void;
	static LoadPackage(InOuter: Package,PackageName: string): Package;
	static IsSuppressed(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS): boolean;
	static IsRegistered(ActorComponent: ActorComponent): boolean;
	static IsPlayInPreview(World: World): boolean;
	static IsPlayInEditor(World: World): boolean;
	static IsPendingKill(InActor: Actor): boolean;
	static IsGeneratedByBlueprint(InClass: UnrealEngineClass): boolean;
	static IsGameWorld(World: World): boolean;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: SoftObjectPath): boolean;
	static HasUndo(Engine: Engine): boolean;
	static HasAnyPackageFlags(Package: Package,Flags: number): boolean;
	static HasAnyFlags(UObject: UObject,Flags: number): boolean;
	static HandleSeamlessTravelPlayer(GameMode: GameModeBase,C?: Controller): {C: Controller};
	static GetWorldBounds(InWorld: World): Box;
	static GetSuperClasses(InClass: UnrealEngineClass): UnrealEngineClass[];
	static GetStructProperties(StructName: string,bIncludeSuper: boolean): JavscriptProperty[];
	static GetScriptResourceName(UNode: JavascriptProfileNode): string;
	static GetScriptId(UNode: JavascriptProfileNode): number;
	static GetPlatformName(): string;
	static GetOutermost(UObject: UObject): UObject;
	static GetOuter(UObject: UObject): UObject;
	static GetObjectsWithOuter(Outer: UObject,Results?: UObject[],bIncludeNestedObjects?: boolean,ExclusionFlags?: number,ExclusionInternalFlags?: number): {Results: UObject[]};
	static GetObjectsOfClass(ClassToLookFor: UnrealEngineClass,Results?: UObject[],bIncludeDerivedClasses?: boolean,ExcludeFlags?: number,ExclusionInternalFlags?: number): {Results: UObject[]};
	static GetNodeId(UNode: JavascriptProfileNode): number;
	static GetName(UObject: UObject): string;
	static GetModel(World: World): Model;
	static GetMetaData(Field: Field,Key: string): string;
	static GetLineNumber(UNode: JavascriptProfileNode): number;
	static GetLevels(World: World): Level[];
	static GetLevel(Actor: Actor): Level;
	static GetLastRenderTime(Actor: Actor): number;
	static GetHitLineCount(UNode: JavascriptProfileNode): number;
	static GetHitCount(UNode: JavascriptProfileNode): number;
	static GetFunctionParmsSize(UFunction: UFunction): number;
	static GetFunctionName(UNode: JavascriptProfileNode): string;
	static GetFileSize(UObject: UObject,Filename: string): number;
	static GetFields(UObject: UObject,bIncludeSuper: boolean): Field[];
	static GetDynamicBinding(Outer: UnrealEngineClass,BindingObjectClass: UnrealEngineClass): DynamicBlueprintBinding;
	static GetDir(UObject: UObject,WhichDir: string): string;
	static GetDerivedClasses(ClassToLookFor: UnrealEngineClass,Results?: UnrealEngineClass[],bRecursive?: boolean): {Results: UnrealEngineClass[]};
	static GetDeoptInfosCount(UNode: JavascriptProfileNode,index: number): number;
	static GetDeoptInfo_Stack(UNode: JavascriptProfileNode,index: number): string;
	static GetDeoptInfo_Reason(UNode: JavascriptProfileNode,index: number): string;
	static GetCurrentProcessId(): number;
	static GetColumnNumber(UNode: JavascriptProfileNode): number;
	static GetClassPathName(Class: UnrealEngineClass): string;
	static GetChildrenCount(UNode: JavascriptProfileNode): number;
	static GetChild(UNode: JavascriptProfileNode,index: number): JavascriptProfileNode;
	static GetCategoryName(Category: JavascriptLogCategory): string;
	static GetCallUid(UNode: JavascriptProfileNode): number;
	static GetBlueprintGeneratedClassFromPath(Path: string): UnrealEngineClass;
	static GetBlueprintGeneratedClass(Blueprint: Blueprint): UnrealEngineClass;
	static GetBailoutReason(UNode: JavascriptProfileNode): string;
	static GetArchetypePathName(UObject: UObject): string;
	static GetAllActorsOfClassAndTags(WorldContextObject: UObject,ActorClass: UnrealEngineClass,Tags_Accept: string[],Tags_Deny: string[],OutActors?: Actor[]): {OutActors: Actor[]};
	static GenerateNavigation(InWorld: World,NavData: RecastNavMesh): void;
	static FindPackage(InOuter: UObject,PackageName: string): Package;
	static FindObjectWithOuter(Outer: UObject,ClassToLookFor: UnrealEngineClass,NameToLookFor: string): UObject;
	static FileExists(Filename: string): boolean;
	static Duplicate(UObject: UObject,Outer: UObject,Name: string): UObject;
	static DirectoryExists(InDirectory: string): boolean;
	static DeleteFile(Filename: string,ReadOnly: boolean): boolean;
	static DeleteDirectory(Path: string,RequireExists: boolean,Tree: boolean): boolean;
	static CreateStreamableManager(): JavascriptStreamableManager;
	static CreateSocket(SocketType: string,Description: string,bForceUDP: boolean): JavascriptSocket;
	static CreatePackage(Outer: UObject,PackageName: string): Package;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
	static CreateInternetAddr(): JavascriptInternetAddr;
	static CreateEnum(Outer: UObject,Name: string,DisplayNames: string[]): Enum;
	static ClipboardPaste(): string;
	static ClipboardCopy(string: string): void;
	static CallJS(UFunction: JavascriptFunction,CustomStruct: JavascriptStubStruct): void;
	static AddMessage_int(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage_float(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation): void;
	static AddDynamicBinding(Outer: UnrealEngineClass,BindingObject: DynamicBlueprintBinding): void;
	static Actor_GetWorld(Actor: Actor): World;
	static C(Other: UObject | any): JavascriptLibrary;
}

declare class JavascriptMemoryObject extends UObject { 
	static Load(ResourceName: string): JavascriptMemoryObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptMemoryObject;
	static GetDefaultObject(): JavascriptMemoryObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMemoryObject;
	static C(Other: UObject | any): JavascriptMemoryObject;
}

declare class JavascriptRef { 
	clone() : JavascriptRef;
	static C(Other: UObject | any): JavascriptRef;
}

declare class JavascriptObject extends UObject { 
	Ref: JavascriptRef;
	Func: JavascriptFunction;
	static Load(ResourceName: string): JavascriptObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptObject;
	static GetDefaultObject(): JavascriptObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptObject;
	static C(Other: UObject | any): JavascriptObject;
}

declare class JavascriptOutputDevice extends UObject { 
	static Load(ResourceName: string): JavascriptOutputDevice;
	static Find(Outer: UObject, ResourceName: string): JavascriptOutputDevice;
	static GetDefaultObject(): JavascriptOutputDevice;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptOutputDevice;
	OnMessage(Message: string,Verbosity: ELogVerbosity_JS,Category: string): void;
	static Log(Category: string,Verbosity: ELogVerbosity_JS,Filename: string,LineNumber: number,Message: string): void;
	Kill(): void;
	static C(Other: UObject | any): JavascriptOutputDevice;
}

declare class JavascriptProcess extends UObject { 
	static Load(ResourceName: string): JavascriptProcess;
	static Find(Outer: UObject, ResourceName: string): JavascriptProcess;
	static GetDefaultObject(): JavascriptProcess;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProcess;
	WriteToPipe(Message: string,OutWritten?: string): {OutWritten: string, $: boolean};
	Wait(): void;
	Terminate(KillTree: boolean): void;
	static Sleep(Seconds: number): void;
	static SimulateKeypress(KeyEvent: number): void;
	static SetEnvironmentVar(VarName: string,VarValue: string): void;
	ReadFromPipe(): string;
	ReadArrayFromPipe(Array?: number[]): {Array: number[], $: boolean};
	static Open_PID(ProcessId: number): JavascriptProcess;
	static Open(ProcName: string): JavascriptProcess;
	static LaunchURL(URL: string,Parms: string,Error?: string): {Error: string};
	IsRunning(): boolean;
	static IsApplicationRunning_PID(ProcessId: number): boolean;
	static IsApplicationRunning(ProcName: string): boolean;
	static GetString(Key: string,bFlag: boolean): string;
	GetReturnCode(ReturnCode?: number): {ReturnCode: number, $: boolean};
	static GetEnvironmentVar(VarName: string): string;
	static GetApplicationName(ProcessId: number): string;
	static Create(URL: string,Parms: string,bLaunchDetached: boolean,bLaunchHidden: boolean,bLaunchReallyHidden: boolean,PriorityModifier: number,OptionalWorkingDirectory: string,bUsePipe: boolean): JavascriptProcess;
	Close(): void;
	static CanLaunchURL(URL: string): boolean;
	static C(Other: UObject | any): JavascriptProcess;
}

declare class JavascriptProfile extends UObject { 
	static Load(ResourceName: string): JavascriptProfile;
	static Find(Outer: UObject, ResourceName: string): JavascriptProfile;
	static GetDefaultObject(): JavascriptProfile;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProfile;
	static Stop(Title: string): JavascriptProfile;
	static Start(Title: string,bRecordSamples: boolean): void;
	static SetSamplingInterval(us: number): void;
	static SetIdle(is_idle: boolean): void;
	GetTopDownRoot(): JavascriptProfileNode;
	GetSampleTimestamp(index: number): number;
	GetSamplesCount(): number;
	GetSample(index: number): JavascriptProfileNode;
	static C(Other: UObject | any): JavascriptProfile;
}

declare class JavascriptSemaphore extends UObject { 
	static Load(ResourceName: string): JavascriptSemaphore;
	static Find(Outer: UObject, ResourceName: string): JavascriptSemaphore;
	static GetDefaultObject(): JavascriptSemaphore;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSemaphore;
	Unlock(): void;
	TryLock(NanosecondsToWait: number): boolean;
	Lock(): void;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,MaxLocks: number): JavascriptSemaphore;
	static C(Other: UObject | any): JavascriptSemaphore;
}

declare class JavascriptSettings extends UObject { 
	V8Flags: string;
	static Load(ResourceName: string): JavascriptSettings;
	static Find(Outer: UObject, ResourceName: string): JavascriptSettings;
	static GetDefaultObject(): JavascriptSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSettings;
	static C(Other: UObject | any): JavascriptSettings;
}

declare class JavascriptSharedMemoryRegion extends JavascriptMemoryObject { 
	static Load(ResourceName: string): JavascriptSharedMemoryRegion;
	static Find(Outer: UObject, ResourceName: string): JavascriptSharedMemoryRegion;
	static GetDefaultObject(): JavascriptSharedMemoryRegion;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSharedMemoryRegion;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,bRead: boolean,bWrite: boolean,Size: number): JavascriptSharedMemoryRegion;
	static C(Other: UObject | any): JavascriptSharedMemoryRegion;
}

declare class JavascriptAutomatedTestInstance { 
	clone() : JavascriptAutomatedTestInstance;
	static C(Other: UObject | any): JavascriptAutomatedTestInstance;
	AddAnalyticsItem(InAnalyticsItem: string): void;
	AddError(InError: string): void;
	AddLogItem(InLogItem: string): void;
	AddWarning(InWarning: string): void;
	ClearExecutionInfo(): void;
	Destroy(): {Test: JavascriptAutomatedTestInstance};
	SetContinue(bInContinue: boolean): void;
	static AddAnalyticsItem(Test: JavascriptAutomatedTestInstance,InAnalyticsItem: string): void;
	static AddError(Test: JavascriptAutomatedTestInstance,InError: string): void;
	static AddLogItem(Test: JavascriptAutomatedTestInstance,InLogItem: string): void;
	static AddWarning(Test: JavascriptAutomatedTestInstance,InWarning: string): void;
	static ClearExecutionInfo(Test: JavascriptAutomatedTestInstance): void;
	static Destroy(Test?: JavascriptAutomatedTestInstance): {Test: JavascriptAutomatedTestInstance};
	static SetContinue(Test: JavascriptAutomatedTestInstance,bInContinue: boolean): void;
}

declare class JavascriptAutomatedTest { 
	Name: string;
	bComplexTask: boolean;
	TestFlags: number;
	RequiredDeviceNum: number;
	TestFunctionNames: string[];
	UFunction: JavascriptFunction;
	clone() : JavascriptAutomatedTest;
	static C(Other: UObject | any): JavascriptAutomatedTest;
	Create(): JavascriptAutomatedTestInstance;
	static Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
}

declare class JavascriptTestLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptTestLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptTestLibrary;
	static GetDefaultObject(): JavascriptTestLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTestLibrary;
	static SetContinue(Test: JavascriptAutomatedTestInstance,bInContinue: boolean): void;
	static PushFrameCounter(): void;
	static PopFrameCounter(): void;
	static NewWorld(): World;
	static InitializeActorsForPlay(World: World,URL: URL): void;
	static DestroyWorld(World: World): void;
	static DestroyUObject(UObject: UObject): void;
	static Destroy(Test?: JavascriptAutomatedTestInstance): {Test: JavascriptAutomatedTestInstance};
	static Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
	static ClearExecutionInfo(Test: JavascriptAutomatedTestInstance): void;
	static BeginPlay(World: World): void;
	static AddWarning(Test: JavascriptAutomatedTestInstance,InWarning: string): void;
	static AddLogItem(Test: JavascriptAutomatedTestInstance,InLogItem: string): void;
	static AddError(Test: JavascriptAutomatedTestInstance,InError: string): void;
	static AddAnalyticsItem(Test: JavascriptAutomatedTestInstance,InAnalyticsItem: string): void;
	static C(Other: UObject | any): JavascriptTestLibrary;
}

declare class JavascriptComboButton extends ContentWidget { 
	ComboButtonStyle: ComboButtonStyle;
	ButtonStyle: ButtonStyle;
	OnGetMenuContent: UnrealEngineDelegate<() => JavascriptSlateWidget>;
	OnMenuOpenChanged: UnrealEngineDelegate<(Value: boolean) => void>;
	OnComboBoxOpened: UnrealEngineDelegate<() => void>;
	bIsFocusable: boolean;
	bHasDownArrow: boolean;
	ForegroundColor: SlateColor;
	ButtonColorAndOpacity: SlateColor;
	ContentPadding: Margin;
	MenuPlacement: EMenuPlacement;
	HAlign: EHorizontalAlignment;
	VAlign: EVerticalAlignment;
	static Load(ResourceName: string): JavascriptComboButton;
	static Find(Outer: UObject, ResourceName: string): JavascriptComboButton;
	static GetDefaultObject(): JavascriptComboButton;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComboButton;
	SetIsOpen(InIsOpen: boolean,bFocusMenu: boolean): void;
	static C(Other: UObject | any): JavascriptComboButton;
}

declare class JavascriptSlateIcon { 
	StyleSetName: string;
	StyleName: string;
	SmallStyleName: string;
	clone() : JavascriptSlateIcon;
	static C(Other: UObject | any): JavascriptSlateIcon;
}

declare class JavascriptComboButtonContext extends UObject { 
	OnGetLabel: UnrealEngineDelegate<() => string>;
	OnGetTooltip: UnrealEngineDelegate<() => string>;
	OnGetIcon: UnrealEngineDelegate<() => JavascriptSlateIcon>;
	OnGetWidget: UnrealEngineDelegate<() => JavascriptSlateWidget>;
	OnCanExecute: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): JavascriptComboButtonContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptComboButtonContext;
	static GetDefaultObject(): JavascriptComboButtonContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComboButtonContext;
	static C(Other: UObject | any): JavascriptComboButtonContext;
}

declare class JavascriptGameViewport extends ContentWidget { 
	BackgroundColor: LinearColor;
	static Load(ResourceName: string): JavascriptGameViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptGameViewport;
	static GetDefaultObject(): JavascriptGameViewport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGameViewport;
	Spawn(ActorClass: UnrealEngineClass): Actor;
	SetViewRotation(Rotation: Rotator): void;
	SetViewLocation(Location: Vector): void;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	static C(Other: UObject | any): JavascriptGameViewport;
}

declare class TableColumnHeaderStyle extends SlateWidgetStyle { 
	SortPrimaryAscendingImage: SlateBrush;
	SortPrimaryDescendingImage: SlateBrush;
	SortSecondaryAscendingImage: SlateBrush;
	SortSecondaryDescendingImage: SlateBrush;
	NormalBrush: SlateBrush;
	HoveredBrush: SlateBrush;
	MenuDropdownImage: SlateBrush;
	MenuDropdownNormalBorderBrush: SlateBrush;
	MenuDropdownHoveredBorderBrush: SlateBrush;
	clone() : TableColumnHeaderStyle;
	static C(Other: UObject | any): TableColumnHeaderStyle;
}

declare class SplitterStyle extends SlateWidgetStyle { 
	HandleNormalBrush: SlateBrush;
	HandleHighlightBrush: SlateBrush;
	clone() : SplitterStyle;
	static C(Other: UObject | any): SplitterStyle;
}

declare class HeaderRowStyle extends SlateWidgetStyle { 
	ColumnStyle: TableColumnHeaderStyle;
	LastColumnStyle: TableColumnHeaderStyle;
	ColumnSplitterStyle: SplitterStyle;
	BackgroundBrush: SlateBrush;
	ForegroundColor: SlateColor;
	clone() : HeaderRowStyle;
	static C(Other: UObject | any): HeaderRowStyle;
}

declare class JavascriptColumn { 
	ID: string;
	Width: number;
	Widget: Widget;
	clone() : JavascriptColumn;
	static C(Other: UObject | any): JavascriptColumn;
}

declare class JavascriptTreeView extends ListViewBase { 
	OnGenerateRowEvent: UnrealEngineDelegate<(UObject: UObject, ID: string, Instance: JavascriptTreeView) => Widget>;
	OnExpansionChanged: UnrealEngineDelegate<(Item: UObject, bExpanded: boolean, Instance: JavascriptTreeView) => void>;
	OnContextMenuOpening: UnrealEngineDelegate<(Instance: JavascriptTreeView) => Widget>;
	OnGetChildren: UnrealEngineDelegate<(Item: UObject, Instance: JavascriptTreeView) => void>;
	JavascriptContext: JavascriptContext;
	Items: UObject[];
	HeaderRowStyle: HeaderRowStyle;
	TableRowStyle: TableRowStyle;
	ScrollBarStyle: ScrollBarStyle;
	SelectionMode: ESelectionMode;
	Children: UObject[];
	Columns: JavascriptColumn[];
	ColumnWidgets: Widget[];
	static Load(ResourceName: string): JavascriptTreeView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTreeView;
	static GetDefaultObject(): JavascriptTreeView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTreeView;
	SetSingleExpandedItem(InItem: UObject): void;
	SetSelection(SoleSelectedItem: UObject): void;
	SetItemExpansion(InItem: UObject,InShouldExpandItem: boolean): void;
	SetDoubleClickSelection(SelectedItem: UObject): void;
	RequestTreeRefresh(): void;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	IsItemExpanded(InItem: UObject): boolean;
	IsDoubleClickSelection(SelectedItem: UObject): boolean;
	GetSelectedItems(OutItems?: UObject[]): {OutItems: UObject[], $: boolean};
	GetDoubleClickedItems(OutItems?: UObject[]): {OutItems: UObject[]};
	ClearDoubleClickSelection(): void;
	static C(Other: UObject | any): JavascriptTreeView;
}

declare class JavascriptListView extends JavascriptTreeView { 
	ItemHeight: number;
	static Load(ResourceName: string): JavascriptListView;
	static Find(Outer: UObject, ResourceName: string): JavascriptListView;
	static GetDefaultObject(): JavascriptListView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptListView;
	RequestListRefresh(): void;
	OnClick(UObject: UObject): void;
	static C(Other: UObject | any): JavascriptListView;
}

declare class JavascriptMenuContext extends UObject { 
	Description: string;
	Tooltip: string;
	Icon: JavascriptSlateIcon;
	OnCanExecute: UnrealEngineDelegate<() => boolean>;
	OnExecute: UnrealEngineDelegate<() => void>;
	static Load(ResourceName: string): JavascriptMenuContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuContext;
	static GetDefaultObject(): JavascriptMenuContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuContext;
	static C(Other: UObject | any): JavascriptMenuContext;
}

declare type EJavasrciptUserInterfaceActionType = 'None' | 'Button' | 'ToggleButton' | 'RadioButton' | 'Check' | 'CollapsedButton' | 'EJavasrciptUserInterfaceActionType_MAX';
declare var EJavasrciptUserInterfaceActionType : { None:'None',Button:'Button',ToggleButton:'ToggleButton',RadioButton:'RadioButton',Check:'Check',CollapsedButton:'CollapsedButton',EJavasrciptUserInterfaceActionType_MAX:'EJavasrciptUserInterfaceActionType_MAX', };
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

declare type EJavascriptExtensionHook = 'Before' | 'After' | 'First' | 'EJavascriptExtensionHook_MAX';
declare var EJavascriptExtensionHook : { Before:'Before',After:'After',First:'First',EJavascriptExtensionHook_MAX:'EJavascriptExtensionHook_MAX', };
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
	static GetLevelEditorActions(): JavascriptUICommandList;
	static CreateUICommandList(): JavascriptUICommandList;
}

declare class JavascriptExtensionBase { 
	clone() : JavascriptExtensionBase;
	static C(Other: UObject | any): JavascriptExtensionBase;
}

declare class JavascriptToolbarButtonContext extends UObject { 
	OnGetLabel: UnrealEngineDelegate<() => string>;
	OnGetTooltip: UnrealEngineDelegate<() => string>;
	OnGetIcon: UnrealEngineDelegate<() => JavascriptSlateIcon>;
	OnExecuteAction: UnrealEngineDelegate<(EditingObject: UObject) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(EditingObject: UObject) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(EditingObject: UObject) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(EditingObject: UObject) => boolean>;
	static Load(ResourceName: string): JavascriptToolbarButtonContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptToolbarButtonContext;
	static GetDefaultObject(): JavascriptToolbarButtonContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptToolbarButtonContext;
	UnmarkReferencedObject(): void;
	MarkReferencedObject(): void;
	static C(Other: UObject | any): JavascriptToolbarButtonContext;
}

declare class JavascriptMenuBuilder { 
	clone() : JavascriptMenuBuilder;
	static C(Other: UObject | any): JavascriptMenuBuilder;
	AddComboButton(UObject?: JavascriptComboButtonContext): {Builder: JavascriptMenuBuilder};
	AddMenuEntry(UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	AddSeparator(): {Builder: JavascriptMenuBuilder};
	AddToolBarButton(CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	AddToolBarButtonByContext(Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	AddWidget(Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	BeginSection(InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
	EndSection(): {Builder: JavascriptMenuBuilder};
	PopCommandList(): {Builder: JavascriptMenuBuilder};
	PushCommandList(List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext): {Builder: JavascriptMenuBuilder};
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
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
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext): {Builder: JavascriptMenuBuilder};
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

declare class JavascriptSlateTextRun { 
	clone() : JavascriptSlateTextRun;
	static C(Other: UObject | any): JavascriptSlateTextRun;
}

declare class JavascriptTextModel extends UObject { 
	static Load(ResourceName: string): JavascriptTextModel;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextModel;
	static GetDefaultObject(): JavascriptTextModel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextModel;
	SetString(string: string): void;
	GetString(): string;
	CreateRun(MessageTextStyle: TextBlockStyle,BeginIndex: number,EndIndex: number): JavascriptSlateTextRun;
	static C(Other: UObject | any): JavascriptTextModel;
}

declare class JavascriptTextLayout { 
	clone() : JavascriptTextLayout;
	static C(Other: UObject | any): JavascriptTextLayout;
	AddLine(Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	ClearLines(): {TextLayout: JavascriptTextLayout};
	GetAsText(): string;
	GetLineLength(): number;
	static AddLine(TextLayout?: JavascriptTextLayout,Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	static ClearLines(TextLayout?: JavascriptTextLayout): {TextLayout: JavascriptTextLayout};
	static GetAsText(TextLayout: JavascriptTextLayout): string;
	static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
}

declare class JavascriptMultiLineEditableTextBox extends MultiLineEditableTextBox { 
	OnVScrollBarUserScrolled: UnrealEngineMulticastDelegate<(Offset: number) => void>;
	GetTextDelegate: UnrealEngineDelegate<(TextLayout: JavascriptTextLayout) => string>;
	SetTextDelegate: UnrealEngineDelegate<(InText: string, TextLayout: JavascriptTextLayout) => void>;
	bAlwaysShowScrollbars: boolean;
	static Load(ResourceName: string): JavascriptMultiLineEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiLineEditableTextBox;
	static GetDefaultObject(): JavascriptMultiLineEditableTextBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiLineEditableTextBox;
	ScrollTo(Line: number,Offset: number): void;
	Refresh(): void;
	GoTo(Line: number,Offset: number): void;
	static C(Other: UObject | any): JavascriptMultiLineEditableTextBox;
}

declare class JavascriptRichTextBlockHyperlinkDecorator extends RichTextBlockDecorator { 
	HyperlinkId: string;
	OnClick: UnrealEngineMulticastDelegate<(Self: JavascriptRichTextBlockHyperlinkDecorator) => void>;
	static Load(ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static Find(Outer: UObject, ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static GetDefaultObject(): JavascriptRichTextBlockHyperlinkDecorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRichTextBlockHyperlinkDecorator;
	GetMetadata(Key: string): string;
	static C(Other: UObject | any): JavascriptRichTextBlockHyperlinkDecorator;
}

declare class JavascriptSearchBox extends Widget { 
	OnTextChanged: UnrealEngineMulticastDelegate<(text: string) => void>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(text: string, CommitMethod: ETextCommit) => void>;
	text: string;
	TextDelegate: UnrealEngineDelegate<() => string>;
	HintText: string;
	HintTextDelegate: UnrealEngineDelegate<() => string>;
	static Load(ResourceName: string): JavascriptSearchBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptSearchBox;
	static GetDefaultObject(): JavascriptSearchBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSearchBox;
	SetText(InText: string): void;
	SetHintText(InHintText: string): void;
	static C(Other: UObject | any): JavascriptSearchBox;
}

declare class JavascriptStyleSet { 
	StyleSetName: string;
	clone() : JavascriptStyleSet;
	static C(Other: UObject | any): JavascriptStyleSet;
	GetBrush(StyleName: string): SlateBrush;
	GetButtonStyle(StyleName: string): ButtonStyle;
	GetCheckBoxStyle(StyleName: string): CheckBoxStyle;
	GetColor(StyleName: string): LinearColor;
	GetComboBoxStyle(StyleName: string): ComboBoxStyle;
	GetComboButtonStyle(StyleName: string): ComboButtonStyle;
	GetEditableTextBoxStyle(StyleName: string): EditableTextBoxStyle;
	GetEditableTextStyle(StyleName: string): EditableTextStyle;
	GetFloat(StyleName: string): number;
	GetFontStyle(StyleName: string): SlateFontInfo;
	GetMargin(StyleName: string): Margin;
	GetProgressBarStyle(StyleName: string): ProgressBarStyle;
	GetSlateColor(StyleName: string): SlateColor;
	GetSound(StyleName: string): SlateSound;
	GetTextBlockStyle(StyleName: string): TextBlockStyle;
	GetVector(StyleName: string): Vector2D;
	static GetBrush(Handle: JavascriptStyleSet,StyleName: string): SlateBrush;
	static GetButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ButtonStyle;
	static GetCheckBoxStyle(Handle: JavascriptStyleSet,StyleName: string): CheckBoxStyle;
	static GetColor(Handle: JavascriptStyleSet,StyleName: string): LinearColor;
	static GetComboBoxStyle(Handle: JavascriptStyleSet,StyleName: string): ComboBoxStyle;
	static GetComboButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ComboButtonStyle;
	static GetEditableTextBoxStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextBoxStyle;
	static GetEditableTextStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextStyle;
	static GetFloat(Handle: JavascriptStyleSet,StyleName: string): number;
	static GetFontStyle(Handle: JavascriptStyleSet,StyleName: string): SlateFontInfo;
	static GetMargin(Handle: JavascriptStyleSet,StyleName: string): Margin;
	static GetProgressBarStyle(Handle: JavascriptStyleSet,StyleName: string): ProgressBarStyle;
	static GetSlateColor(Handle: JavascriptStyleSet,StyleName: string): SlateColor;
	static GetSound(Handle: JavascriptStyleSet,StyleName: string): SlateSound;
	static GetTextBlockStyle(Handle: JavascriptStyleSet,StyleName: string): TextBlockStyle;
	static GetVector(Handle: JavascriptStyleSet,StyleName: string): Vector2D;
}

declare class JavascriptStyleSetLibrary extends BlueprintFunctionLibrary { 
	SlateColor: SlateColor;
	SlateBrush: SlateBrush;
	ButtonStyle: ButtonStyle;
	TextBlockStyle: TextBlockStyle;
	EditableTextStyle: EditableTextStyle;
	EditableTextBoxStyle: EditableTextBoxStyle;
	CheckBoxStyle: CheckBoxStyle;
	ComboBoxStyle: ComboBoxStyle;
	ComboButtonStyle: ComboButtonStyle;
	ProgressBarStyle: ProgressBarStyle;
	static Load(ResourceName: string): JavascriptStyleSetLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptStyleSetLibrary;
	static GetDefaultObject(): JavascriptStyleSetLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptStyleSetLibrary;
	static GetVector(Handle: JavascriptStyleSet,StyleName: string): Vector2D;
	static GetTextBlockStyle(Handle: JavascriptStyleSet,StyleName: string): TextBlockStyle;
	static GetSound(Handle: JavascriptStyleSet,StyleName: string): SlateSound;
	static GetSlateColor(Handle: JavascriptStyleSet,StyleName: string): SlateColor;
	static GetProgressBarStyle(Handle: JavascriptStyleSet,StyleName: string): ProgressBarStyle;
	static GetMargin(Handle: JavascriptStyleSet,StyleName: string): Margin;
	static GetFontStyle(Handle: JavascriptStyleSet,StyleName: string): SlateFontInfo;
	static GetFloat(Handle: JavascriptStyleSet,StyleName: string): number;
	static GetEditableTextStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextStyle;
	static GetEditableTextBoxStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextBoxStyle;
	static GetComboButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ComboButtonStyle;
	static GetComboBoxStyle(Handle: JavascriptStyleSet,StyleName: string): ComboBoxStyle;
	static GetColor(Handle: JavascriptStyleSet,StyleName: string): LinearColor;
	static GetCheckBoxStyle(Handle: JavascriptStyleSet,StyleName: string): CheckBoxStyle;
	static GetButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ButtonStyle;
	static GetBrush(Handle: JavascriptStyleSet,StyleName: string): SlateBrush;
	static C(Other: UObject | any): JavascriptStyleSetLibrary;
}

declare class JavascriptTextBlock extends TextBlock { 
	HighlightText: string;
	HighlightTextDelegate: UnrealEngineDelegate<() => string>;
	static Load(ResourceName: string): JavascriptTextBlock;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextBlock;
	static GetDefaultObject(): JavascriptTextBlock;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextBlock;
	SetHighlightText(InHighlightText: string): void;
	static C(Other: UObject | any): JavascriptTextBlock;
}

declare class JavascriptTileView extends TileView { 
	JavascriptContext: JavascriptContext;
	static Load(ResourceName: string): JavascriptTileView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTileView;
	static GetDefaultObject(): JavascriptTileView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTileView;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	OnClick(UObject: UObject): void;
	static C(Other: UObject | any): JavascriptTileView;
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

declare class JavascriptUMGBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptUMGBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGBlueprintLibrary;
	static GetDefaultObject(): JavascriptUMGBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGBlueprintLibrary;
	static SlateColor_UseSubduedForeground(): SlateColor;
	static SlateColor_UseForeground(): SlateColor;
	static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
	static GetAsText(TextLayout: JavascriptTextLayout): string;
	static DrawSpaceSpline(Context?: PaintContext,InStart?: Vector2D,InStartDir?: Vector2D,InEnd?: Vector2D,InEndDir?: Vector2D,InThickness?: number,InTint?: LinearColor): {Context: PaintContext};
	static ClearLines(TextLayout?: JavascriptTextLayout): {TextLayout: JavascriptTextLayout};
	static AddLine(TextLayout?: JavascriptTextLayout,Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	static C(Other: UObject | any): JavascriptUMGBlueprintLibrary;
}

declare class JavascriptSlateStyle { 
	clone() : JavascriptSlateStyle;
	static C(Other: UObject | any): JavascriptSlateStyle;
	AddBorderBrush(PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	AddBoxBrush(PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	AddFontInfo(PropertyName: string,FontInfo: SlateFontInfo): void;
	AddImageBrush(PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	AddSound(PropertyName: string,Sound: SlateSound): void;
	Register(): void;
	RootToContentDir(RelativePath: string): string;
	RootToCoreContentDir(RelativePath: string): string;
	SetContentRoot(InContentRootDir: string): void;
	SetCoreContentRoot(InCoreContentRootDir: string): void;
	Unregister(): void;
	static AddBorderBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddBoxBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddFontInfo(StyleSet: JavascriptSlateStyle,PropertyName: string,FontInfo: SlateFontInfo): void;
	static AddImageBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	static AddSound(StyleSet: JavascriptSlateStyle,PropertyName: string,Sound: SlateSound): void;
	static Register(StyleSet: JavascriptSlateStyle): void;
	static RootToContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static RootToCoreContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static SetContentRoot(StyleSet: JavascriptSlateStyle,InContentRootDir: string): void;
	static SetCoreContentRoot(StyleSet: JavascriptSlateStyle,InCoreContentRootDir: string): void;
	static Unregister(StyleSet: JavascriptSlateStyle): void;
	static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
}

declare class JavascriptUMGLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptUMGLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGLibrary;
	static GetDefaultObject(): JavascriptUMGLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGLibrary;
	static Unregister(StyleSet: JavascriptSlateStyle): void;
	static TakeWidget(Widget: Widget): JavascriptSlateWidget;
	static ShowWindow(NewWindow: JavascriptSlateWidget): void;
	static SetCoreContentRoot(StyleSet: JavascriptSlateStyle,InCoreContentRootDir: string): void;
	static SetContentRoot(StyleSet: JavascriptSlateStyle,InContentRootDir: string): void;
	static SetContent(TargetWidget: NativeWidgetHost,SlateWidget: JavascriptSlateWidget): Widget;
	static RootToCoreContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static RootToContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static Register(StyleSet: JavascriptSlateStyle): void;
	static GenerateDynamicImageResource(InDynamicBrushName: string): Vector2D;
	static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
	static AddWindowAsNativeChild(NewWindow: JavascriptSlateWidget,RootWindow: JavascriptSlateWidget): void;
	static AddWindow(NewWindow: JavascriptSlateWidget,bShowImmediately: boolean): void;
	static AddSound(StyleSet: JavascriptSlateStyle,PropertyName: string,Sound: SlateSound): void;
	static AddImageBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	static AddFontInfo(StyleSet: JavascriptSlateStyle,PropertyName: string,FontInfo: SlateFontInfo): void;
	static AddBoxBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddBorderBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static C(Other: UObject | any): JavascriptUMGLibrary;
}

declare class JavascriptUserObjectListEntry extends UserWidget { 
	Item: UObject;
	static Load(ResourceName: string): JavascriptUserObjectListEntry;
	static Find(Outer: UObject, ResourceName: string): JavascriptUserObjectListEntry;
	static GetDefaultObject(): JavascriptUserObjectListEntry;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUserObjectListEntry;
	static C(Other: UObject | any): JavascriptUserObjectListEntry;
}

declare class JavascriptWidget extends UserWidget { 
	JavascriptContext: JavascriptContext;
	OnInputActionEvent: UnrealEngineMulticastDelegate<(ActionName: string) => void>;
	OnReleaseActionEvent: UnrealEngineMulticastDelegate<(ActionName: string) => void>;
	OnInputAxisEvent: UnrealEngineMulticastDelegate<(Axis: number, AxisName: string) => void>;
	OnDestroy: UnrealEngineMulticastDelegate<(bReleaseChildren: boolean) => void>;
	ContentSlot: PanelSlot;
	static Load(ResourceName: string): JavascriptWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptWidget;
	static GetDefaultObject(): JavascriptWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWidget;
	SetRootWidget(Widget: Widget): void;
	RemoveChild(): boolean;
	OnReleaseInputActionByName(ActionName: string): void;
	OnListenForInputAxis(AxisName: string,EventType: EInputEvent,bConsume: boolean): void;
	OnListenForInputAction(ActionName: string,EventType: EInputEvent,bConsume: boolean): void;
	OnInputAxisByName(Axis: number,ActionName: string): void;
	OnInputActionByName(ActionName: string): void;
	static HasValidCachedWidget(Widget: Widget): boolean;
	static CallSynchronizeProperties(WidgetOrSlot: Visual): void;
	AddChild(Content: Widget): PanelSlot;
	static C(Other: UObject | any): JavascriptWidget;
}

declare type EJavascriptWindowType = 'Normal' | 'Menu' | 'ToolTip' | 'Notification' | 'CursorDecorator' | 'EJavascriptWindowType_MAX';
declare var EJavascriptWindowType : { Normal:'Normal',Menu:'Menu',ToolTip:'ToolTip',Notification:'Notification',CursorDecorator:'CursorDecorator',EJavascriptWindowType_MAX:'EJavascriptWindowType_MAX', };
declare class WindowStyle extends SlateWidgetStyle { 
	MinimizeButtonStyle: ButtonStyle;
	MaximizeButtonStyle: ButtonStyle;
	RestoreButtonStyle: ButtonStyle;
	CloseButtonStyle: ButtonStyle;
	TitleTextStyle: TextBlockStyle;
	ActiveTitleBrush: SlateBrush;
	InactiveTitleBrush: SlateBrush;
	FlashTitleBrush: SlateBrush;
	BackgroundColor: SlateColor;
	OutlineBrush: SlateBrush;
	OutlineColor: SlateColor;
	BorderBrush: SlateBrush;
	BackgroundBrush: SlateBrush;
	ChildBackgroundBrush: SlateBrush;
	clone() : WindowStyle;
	static C(Other: UObject | any): WindowStyle;
}

declare type EJavascriptAutoCenter = 'None' | 'PrimaryWorkArea' | 'PreferredWorkArea' | 'EJavascriptAutoCenter_MAX';
declare var EJavascriptAutoCenter : { None:'None',PrimaryWorkArea:'PrimaryWorkArea',PreferredWorkArea:'PreferredWorkArea',EJavascriptAutoCenter_MAX:'EJavascriptAutoCenter_MAX', };
declare type EJavascriptWindowTransparency = 'None' | 'PerWindow' | 'EJavascriptWindowTransparency_MAX';
declare var EJavascriptWindowTransparency : { None:'None',PerWindow:'PerWindow',EJavascriptWindowTransparency_MAX:'EJavascriptWindowTransparency_MAX', };
declare type EJavascriptSizingRule = 'FixedSize' | 'Autosized' | 'UserSized' | 'EJavascriptSizingRule_MAX';
declare var EJavascriptSizingRule : { FixedSize:'FixedSize',Autosized:'Autosized',UserSized:'UserSized',EJavascriptSizingRule_MAX:'EJavascriptSizingRule_MAX', };
declare class JavascriptWindow extends ContentWidget { 
	Type: EJavascriptWindowType;
	Style: WindowStyle;
	Title: string;
	bDragAnywhere: boolean;
	AutoCenter: EJavascriptAutoCenter;
	ScreenPosition: Vector2D;
	ClientSize: Vector2D;
	SupportsTransparency: EJavascriptWindowTransparency;
	InitialOpacity: number;
	IsInitiallyMaximized: boolean;
	SizingRule: EJavascriptSizingRule;
	IsPopupWindow: boolean;
	FocusWhenFirstShown: boolean;
	ActivateWhenFirstShown: boolean;
	UseOSWindowBorder: boolean;
	HasCloseButton: boolean;
	SupportsMaximize: boolean;
	SupportsMinimize: boolean;
	CreateTitleBar: boolean;
	SaneWindowPlacement: boolean;
	LayoutBorder: Margin;
	UserResizeBorder: Margin;
	static Load(ResourceName: string): JavascriptWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptWindow;
	static GetDefaultObject(): JavascriptWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWindow;
	ShowWindow(): void;
	SetOpacity(InOpacity: number): void;
	Resize(NewSize: Vector2D): void;
	ReshapeWindow(NewPosition: Vector2D,NewSize: Vector2D): void;
	RequestDestroyWindow(): void;
	MoveWindowTo(NewPosition: Vector2D): void;
	HideWindow(): void;
	FlashWindow(): void;
	EnableWindow(bEnable: boolean): void;
	DestroyWindowImmediately(): void;
	BringToFront(): void;
	static C(Other: UObject | any): JavascriptWindow;
	OpenFileDialog(DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static OpenFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
}

declare type EJavascriptHttpRequestStatus = 'NotStarted' | 'Processing' | 'Failed' | 'Succeeded' | 'EJavascriptHttpRequestStatus_MAX';
declare var EJavascriptHttpRequestStatus : { NotStarted:'NotStarted',Processing:'Processing',Failed:'Failed',Succeeded:'Succeeded',EJavascriptHttpRequestStatus_MAX:'EJavascriptHttpRequestStatus_MAX', };
declare class JavascriptHttpRequest extends UObject { 
	OnComplete: UnrealEngineDelegate<(successful: boolean) => void>;
	OnProgress: UnrealEngineDelegate<(sent: number, recv: number) => void>;
	static Load(ResourceName: string): JavascriptHttpRequest;
	static Find(Outer: UObject, ResourceName: string): JavascriptHttpRequest;
	static GetDefaultObject(): JavascriptHttpRequest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptHttpRequest;
	SetVerb(Verb: string): void;
	SetURL(URL: string): void;
	SetHeader(HeaderName: string,HeaderValue: string): void;
	SetContentWithFiles(FilePaths: string[],Boundary: string,Content: string): void;
	SetContentFromMemory(): void;
	SetContentAsString(ContentString: string): void;
	ProcessRequest(): boolean;
	GetVerb(): string;
	GetStatus(): EJavascriptHttpRequestStatus;
	GetResponseCode(): number;
	GetElapsedTime(): number;
	GetContentToMemory(): void;
	GetContentLength(): number;
	GetContentAsString(): string;
	CancelRequest(): void;
	static C(Other: UObject | any): JavascriptHttpRequest;
}

declare class JavascriptWebSocket extends UObject { 
	OnReceived: UnrealEngineMulticastDelegate<() => void>;
	OnConnected: UnrealEngineMulticastDelegate<() => void>;
	OnError: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptWebSocket;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocket;
	static GetDefaultObject(): JavascriptWebSocket;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocket;
	Tick(): void;
	SendMemory(NumBytes: number): void;
	RemoteEndPoint(): string;
	LocalEndPoint(): string;
	GetReceivedBytes(): number;
	Flush(): void;
	Dispose(): void;
	CopyBuffer(): void;
	static Connect(Endpoint: string): JavascriptWebSocket;
	static C(Other: UObject | any): JavascriptWebSocket;
}

declare class JavascriptWebSocketServer extends UObject { 
	OnConnected: UnrealEngineMulticastDelegate<(WebSocket: JavascriptWebSocket) => void>;
	Connections: JavascriptWebSocket[];
	static Load(ResourceName: string): JavascriptWebSocketServer;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocketServer;
	static GetDefaultObject(): JavascriptWebSocketServer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocketServer;
	Tick(): void;
	Info(): string;
	Dispose(): void;
	static Create(Port: number): JavascriptWebSocketServer;
	static C(Other: UObject | any): JavascriptWebSocketServer;
}

declare type EMeshPaintColorViewMode = 'Normal' | 'RGB' | 'Alpha' | 'Red' | 'Green' | 'Blue' | 'EMeshPaintColorViewMode_MAX';
declare var EMeshPaintColorViewMode : { Normal:'Normal',RGB:'RGB',Alpha:'Alpha',Red:'Red',Green:'Green',Blue:'Blue',EMeshPaintColorViewMode_MAX:'EMeshPaintColorViewMode_MAX', };
declare class PaintBrushSettings extends UObject { 
	BrushRadius: number;
	BrushStrength: number;
	BrushFalloffAmount: number;
	bEnableFlow: boolean;
	bOnlyFrontFacingTriangles: boolean;
	ColorViewMode: EMeshPaintColorViewMode;
	static Load(ResourceName: string): PaintBrushSettings;
	static Find(Outer: UObject, ResourceName: string): PaintBrushSettings;
	static GetDefaultObject(): PaintBrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaintBrushSettings;
	static C(Other: UObject | any): PaintBrushSettings;
}

declare class MeshPaintSettings extends UObject { 
	VertexPreviewSize: number;
	static Load(ResourceName: string): MeshPaintSettings;
	static Find(Outer: UObject, ResourceName: string): MeshPaintSettings;
	static GetDefaultObject(): MeshPaintSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshPaintSettings;
	static C(Other: UObject | any): MeshPaintSettings;
}

declare class VertexColorImportOptions extends UObject { 
	UVIndex: number;
	LODIndex: number;
	bRed: boolean;
	bBlue: boolean;
	bGreen: boolean;
	bAlpha: boolean;
	bImportToInstance: boolean;
	bCanImportToInstance: boolean;
	static Load(ResourceName: string): VertexColorImportOptions;
	static Find(Outer: UObject, ResourceName: string): VertexColorImportOptions;
	static GetDefaultObject(): VertexColorImportOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VertexColorImportOptions;
	static C(Other: UObject | any): VertexColorImportOptions;
}

declare class FlipbookEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	static Load(ResourceName: string): FlipbookEditorSettings;
	static Find(Outer: UObject, ResourceName: string): FlipbookEditorSettings;
	static GetDefaultObject(): FlipbookEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlipbookEditorSettings;
	static C(Other: UObject | any): FlipbookEditorSettings;
}

declare type ESpriteExtractMode = 'Auto' | 'Grid' | 'ESpriteExtractMode_MAX';
declare var ESpriteExtractMode : { Auto:'Auto',Grid:'Grid',ESpriteExtractMode_MAX:'ESpriteExtractMode_MAX', };
declare class PaperExtractSpritesSettings extends UObject { 
	SpriteExtractMode: ESpriteExtractMode;
	OutlineColor: LinearColor;
	ViewportTextureTint: LinearColor;
	BackgroundColor: LinearColor;
	NamingTemplate: string;
	NamingStartIndex: number;
	static Load(ResourceName: string): PaperExtractSpritesSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpritesSettings;
	static GetDefaultObject(): PaperExtractSpritesSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpritesSettings;
	static C(Other: UObject | any): PaperExtractSpritesSettings;
}

declare class PaperExtractSpriteGridSettings extends UObject { 
	CellWidth: number;
	CellHeight: number;
	NumCellsX: number;
	NumCellsY: number;
	MarginX: number;
	MarginY: number;
	SpacingX: number;
	SpacingY: number;
	static Load(ResourceName: string): PaperExtractSpriteGridSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpriteGridSettings;
	static GetDefaultObject(): PaperExtractSpriteGridSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpriteGridSettings;
	static C(Other: UObject | any): PaperExtractSpriteGridSettings;
}

declare class PaperFlipbookActorFactory extends ActorFactory { 
	static Load(ResourceName: string): PaperFlipbookActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookActorFactory;
	static GetDefaultObject(): PaperFlipbookActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActorFactory;
	static C(Other: UObject | any): PaperFlipbookActorFactory;
}

declare class PaperFlipbookFactory extends Factory { 
	static Load(ResourceName: string): PaperFlipbookFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookFactory;
	static GetDefaultObject(): PaperFlipbookFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookFactory;
	static C(Other: UObject | any): PaperFlipbookFactory;
}

declare class PaperSpriteThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): PaperSpriteThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteThumbnailRenderer;
	static GetDefaultObject(): PaperSpriteThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteThumbnailRenderer;
	static C(Other: UObject | any): PaperSpriteThumbnailRenderer;
}

declare class PaperFlipbookThumbnailRenderer extends PaperSpriteThumbnailRenderer { 
	static Load(ResourceName: string): PaperFlipbookThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookThumbnailRenderer;
	static GetDefaultObject(): PaperFlipbookThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookThumbnailRenderer;
	static C(Other: UObject | any): PaperFlipbookThumbnailRenderer;
}

declare class PaperImporterSettings extends UObject { 
	bPickBestMaterialWhenCreatingSprites: boolean;
	bPickBestMaterialWhenCreatingTileMaps: boolean;
	bAnalysisCanUseOpaque: boolean;
	DefaultPixelsPerUnrealUnit: number;
	NormalMapTextureSuffixes: string[];
	BaseMapTextureSuffixes: string[];
	DefaultSpriteTextureGroup: TextureGroup;
	bOverrideTextureCompression: boolean;
	DefaultSpriteTextureCompression: TextureCompressionSettings;
	UnlitDefaultMaskedMaterialName: SoftObjectPath;
	UnlitDefaultTranslucentMaterialName: SoftObjectPath;
	UnlitDefaultOpaqueMaterialName: SoftObjectPath;
	LitDefaultMaskedMaterialName: SoftObjectPath;
	LitDefaultTranslucentMaterialName: SoftObjectPath;
	LitDefaultOpaqueMaterialName: SoftObjectPath;
	static Load(ResourceName: string): PaperImporterSettings;
	static Find(Outer: UObject, ResourceName: string): PaperImporterSettings;
	static GetDefaultObject(): PaperImporterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperImporterSettings;
	static C(Other: UObject | any): PaperImporterSettings;
}

declare class PaperSpriteActorFactory extends ActorFactory { 
	static Load(ResourceName: string): PaperSpriteActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteActorFactory;
	static GetDefaultObject(): PaperSpriteActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActorFactory;
	static C(Other: UObject | any): PaperSpriteActorFactory;
}

declare class PaperSpriteAtlasFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteAtlasFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlasFactory;
	static GetDefaultObject(): PaperSpriteAtlasFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlasFactory;
	static C(Other: UObject | any): PaperSpriteAtlasFactory;
}

declare class PaperSpriteFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteFactory;
	static GetDefaultObject(): PaperSpriteFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteFactory;
	static C(Other: UObject | any): PaperSpriteFactory;
}

declare class PaperTileMapFactory extends Factory { 
	static Load(ResourceName: string): PaperTileMapFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapFactory;
	static GetDefaultObject(): PaperTileMapFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapFactory;
	static C(Other: UObject | any): PaperTileMapFactory;
}

declare class PaperTileMapPromotionFactory extends Factory { 
	AssetToRename: PaperTileMap;
	static Load(ResourceName: string): PaperTileMapPromotionFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapPromotionFactory;
	static GetDefaultObject(): PaperTileMapPromotionFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapPromotionFactory;
	static C(Other: UObject | any): PaperTileMapPromotionFactory;
}

declare class PaperTileSetFactory extends Factory { 
	static Load(ResourceName: string): PaperTileSetFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetFactory;
	static GetDefaultObject(): PaperTileSetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetFactory;
	static C(Other: UObject | any): PaperTileSetFactory;
}

declare class PaperTileSetThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): PaperTileSetThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetThumbnailRenderer;
	static GetDefaultObject(): PaperTileSetThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetThumbnailRenderer;
	static C(Other: UObject | any): PaperTileSetThumbnailRenderer;
}

declare class SpriteEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	static Load(ResourceName: string): SpriteEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SpriteEditorSettings;
	static GetDefaultObject(): SpriteEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpriteEditorSettings;
	static C(Other: UObject | any): SpriteEditorSettings;
}

declare class TerrainSplineActorFactory extends ActorFactory { 
	static Load(ResourceName: string): TerrainSplineActorFactory;
	static Find(Outer: UObject, ResourceName: string): TerrainSplineActorFactory;
	static GetDefaultObject(): TerrainSplineActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TerrainSplineActorFactory;
	static C(Other: UObject | any): TerrainSplineActorFactory;
}

declare class TileMapActorFactory extends ActorFactory { 
	static Load(ResourceName: string): TileMapActorFactory;
	static Find(Outer: UObject, ResourceName: string): TileMapActorFactory;
	static GetDefaultObject(): TileMapActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapActorFactory;
	static C(Other: UObject | any): TileMapActorFactory;
}

declare class TileSetImportMapping { 
	SourceName: string;
	ImportedTileSet: any;
	ImportedTexture: any;
	clone() : TileSetImportMapping;
	static C(Other: UObject | any): TileSetImportMapping;
}

declare class TileMapAssetImportData extends AssetImportData { 
	TileSetMap: TileSetImportMapping[];
	static Load(ResourceName: string): TileMapAssetImportData;
	static Find(Outer: UObject, ResourceName: string): TileMapAssetImportData;
	static GetDefaultObject(): TileMapAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapAssetImportData;
	static C(Other: UObject | any): TileMapAssetImportData;
}

declare class TileMapEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	DefaultTileGridColor: Color;
	DefaultMultiTileGridColor: Color;
	DefaultMultiTileGridWidth: number;
	DefaultMultiTileGridHeight: number;
	DefaultMultiTileGridOffsetX: number;
	DefaultMultiTileGridOffsetY: number;
	DefaultLayerGridColor: Color;
	static Load(ResourceName: string): TileMapEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileMapEditorSettings;
	static GetDefaultObject(): TileMapEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapEditorSettings;
	static C(Other: UObject | any): TileMapEditorSettings;
}

declare class TileSetEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	static Load(ResourceName: string): TileSetEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileSetEditorSettings;
	static GetDefaultObject(): TileSetEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSetEditorSettings;
	static C(Other: UObject | any): TileSetEditorSettings;
}

declare class TileSheetPaddingFactory extends Factory { 
	SourceTileSet: PaperTileSet;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	static Load(ResourceName: string): TileSheetPaddingFactory;
	static Find(Outer: UObject, ResourceName: string): TileSheetPaddingFactory;
	static GetDefaultObject(): TileSheetPaddingFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSheetPaddingFactory;
	static C(Other: UObject | any): TileSheetPaddingFactory;
}

declare class PaperSpriteSheet extends UObject { 
	SpriteNames: string[];
	Sprites: PaperSprite[];
	TextureName: string;
	Texture: Texture2D;
	NormalMapTextureName: string;
	NormalMapTexture: Texture2D;
	AssetImportData: AssetImportData;
	static Load(ResourceName: string): PaperSpriteSheet;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheet;
	static GetDefaultObject(): PaperSpriteSheet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheet;
	static C(Other: UObject | any): PaperSpriteSheet;
}

declare class PaperSpriteSheetImportFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteSheetImportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetImportFactory;
	static GetDefaultObject(): PaperSpriteSheetImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetImportFactory;
	static C(Other: UObject | any): PaperSpriteSheetImportFactory;
}

declare class PaperSpriteSheetReimportFactory extends PaperSpriteSheetImportFactory { 
	static Load(ResourceName: string): PaperSpriteSheetReimportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetReimportFactory;
	static GetDefaultObject(): PaperSpriteSheetReimportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetReimportFactory;
	static C(Other: UObject | any): PaperSpriteSheetReimportFactory;
}

declare class PaperTiledImporterFactory extends Factory { 
	static Load(ResourceName: string): PaperTiledImporterFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTiledImporterFactory;
	static GetDefaultObject(): PaperTiledImporterFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTiledImporterFactory;
	static C(Other: UObject | any): PaperTiledImporterFactory;
}

declare class LightPropagationVolumeBlendableFactory extends Factory { 
	static Load(ResourceName: string): LightPropagationVolumeBlendableFactory;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendableFactory;
	static GetDefaultObject(): LightPropagationVolumeBlendableFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendableFactory;
	static C(Other: UObject | any): LightPropagationVolumeBlendableFactory;
}

declare class LayersBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LayersBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): LayersBlueprintLibrary;
	static GetDefaultObject(): LayersBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LayersBlueprintLibrary;
	static GetActors(WorldContextObject: UObject,ActorLayer: ActorLayer): Actor[];
	static C(Other: UObject | any): LayersBlueprintLibrary;
}

declare class MyPluginStruct { 
	TestString: string;
	clone() : MyPluginStruct;
	static C(Other: UObject | any): MyPluginStruct;
}

declare class MyPluginObject extends UObject { 
	MyStruct: MyPluginStruct;
	static Load(ResourceName: string): MyPluginObject;
	static Find(Outer: UObject, ResourceName: string): MyPluginObject;
	static GetDefaultObject(): MyPluginObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MyPluginObject;
	static C(Other: UObject | any): MyPluginObject;
}

declare class CryptoKeysCommandlet extends Commandlet { 
	static Load(ResourceName: string): CryptoKeysCommandlet;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysCommandlet;
	static GetDefaultObject(): CryptoKeysCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysCommandlet;
	static C(Other: UObject | any): CryptoKeysCommandlet;
}

declare class CryptoEncryptionKey { 
	Guid: Guid;
	Name: string;
	Key: string;
	clone() : CryptoEncryptionKey;
	static C(Other: UObject | any): CryptoEncryptionKey;
}

declare class CryptoKeysSettings extends UObject { 
	EncryptionKey: string;
	SecondaryEncryptionKeys: CryptoEncryptionKey[];
	bEncryptPakIniFiles: boolean;
	bEncryptPakIndex: boolean;
	bEncryptUAssetFiles: boolean;
	bEncryptAllAssetFiles: boolean;
	SigningPublicExponent: string;
	SigningModulus: string;
	SigningPrivateExponent: string;
	bEnablePakSigning: boolean;
	static Load(ResourceName: string): CryptoKeysSettings;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysSettings;
	static GetDefaultObject(): CryptoKeysSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysSettings;
	static C(Other: UObject | any): CryptoKeysSettings;
}

declare class EditableMeshAdapter extends UObject { 
	static Load(ResourceName: string): EditableMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): EditableMeshAdapter;
	static GetDefaultObject(): EditableMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMeshAdapter;
	static C(Other: UObject | any): EditableMeshAdapter;
}

declare class ElementID { 
	IDValue: number;
	clone() : ElementID;
	static C(Other: UObject | any): ElementID;
}

declare class VertexID extends ElementID { 
	clone() : VertexID;
	static C(Other: UObject | any): VertexID;
}

declare class EdgeID extends ElementID { 
	clone() : EdgeID;
	static C(Other: UObject | any): EdgeID;
}

declare class PolygonID extends ElementID { 
	clone() : PolygonID;
	static C(Other: UObject | any): PolygonID;
}

declare type ETriangleTessellationMode = 'ThreeTriangles' | 'FourTriangles' | 'ETriangleTessellationMode_MAX';
declare var ETriangleTessellationMode : { ThreeTriangles:'ThreeTriangles',FourTriangles:'FourTriangles',ETriangleTessellationMode_MAX:'ETriangleTessellationMode_MAX', };
declare type EMeshModificationType = 'FirstInterim' | 'Interim' | 'Final' | 'EMeshModificationType_MAX';
declare var EMeshModificationType : { FirstInterim:'FirstInterim',Interim:'Interim',Final:'Final',EMeshModificationType_MAX:'EMeshModificationType_MAX', };
declare type EMeshTopologyChange = 'NoTopologyChange' | 'TopologyChange' | 'EMeshTopologyChange_MAX';
declare var EMeshTopologyChange : { NoTopologyChange:'NoTopologyChange',TopologyChange:'TopologyChange',EMeshTopologyChange_MAX:'EMeshTopologyChange_MAX', };
declare class VertexPair { 
	VertexID0: VertexID;
	VertexID1: VertexID;
	clone() : VertexPair;
	static C(Other: UObject | any): VertexPair;
}

declare class PolygonToSplit { 
	PolygonID: PolygonID;
	VertexPairsToSplitAt: VertexPair[];
	clone() : PolygonToSplit;
	static C(Other: UObject | any): PolygonToSplit;
}

declare class MeshElementAttributeValue { 
	clone() : MeshElementAttributeValue;
	static C(Other: UObject | any): MeshElementAttributeValue;
}

declare class MeshElementAttributeData { 
	AttributeName: string;
	AttributeIndex: number;
	AttributeValue: MeshElementAttributeValue;
	clone() : MeshElementAttributeData;
	static C(Other: UObject | any): MeshElementAttributeData;
}

declare class MeshElementAttributeList { 
	Attributes: MeshElementAttributeData[];
	clone() : MeshElementAttributeList;
	static C(Other: UObject | any): MeshElementAttributeList;
}

declare class AttributesForVertex { 
	VertexID: VertexID;
	VertexAttributes: MeshElementAttributeList;
	clone() : AttributesForVertex;
	static C(Other: UObject | any): AttributesForVertex;
}

declare class VertexInstanceID extends ElementID { 
	clone() : VertexInstanceID;
	static C(Other: UObject | any): VertexInstanceID;
}

declare class AttributesForVertexInstance { 
	VertexInstanceID: VertexInstanceID;
	VertexInstanceAttributes: MeshElementAttributeList;
	clone() : AttributesForVertexInstance;
	static C(Other: UObject | any): AttributesForVertexInstance;
}

declare class VertexAttributesForPolygonHole { 
	VertexAttributeList: MeshElementAttributeList[];
	clone() : VertexAttributesForPolygonHole;
	static C(Other: UObject | any): VertexAttributesForPolygonHole;
}

declare class VertexAttributesForPolygon { 
	PolygonID: PolygonID;
	PerimeterVertexAttributeLists: MeshElementAttributeList[];
	VertexAttributeListsForEachHole: VertexAttributesForPolygonHole[];
	clone() : VertexAttributesForPolygon;
	static C(Other: UObject | any): VertexAttributesForPolygon;
}

declare class VerticesForEdge { 
	EdgeID: EdgeID;
	NewVertexID0: VertexID;
	NewVertexID1: VertexID;
	clone() : VerticesForEdge;
	static C(Other: UObject | any): VerticesForEdge;
}

declare class AttributesForEdge { 
	EdgeID: EdgeID;
	EdgeAttributes: MeshElementAttributeList;
	clone() : AttributesForEdge;
	static C(Other: UObject | any): AttributesForEdge;
}

declare class VertexToMove { 
	VertexID: VertexID;
	NewVertexPosition: Vector;
	clone() : VertexToMove;
	static C(Other: UObject | any): VertexToMove;
}

declare class PolygonGroupID extends ElementID { 
	clone() : PolygonGroupID;
	static C(Other: UObject | any): PolygonGroupID;
}

declare type EInsetPolygonsMode = 'All' | 'CenterPolygonOnly' | 'SidePolygonsOnly' | 'EInsetPolygonsMode_MAX';
declare var EInsetPolygonsMode : { All:'All',CenterPolygonOnly:'CenterPolygonOnly',SidePolygonsOnly:'SidePolygonsOnly',EInsetPolygonsMode_MAX:'EInsetPolygonsMode_MAX', };
declare class VertexAndAttributes { 
	VertexInstanceID: VertexInstanceID;
	VertexID: VertexID;
	PolygonVertexAttributes: MeshElementAttributeList;
	clone() : VertexAndAttributes;
	static C(Other: UObject | any): VertexAndAttributes;
}

declare class SubdividedQuadVertex { 
	VertexPositionIndex: number;
	TextureCoordinate0: Vector2D;
	TextureCoordinate1: Vector2D;
	VertexColor: Color;
	VertexNormal: Vector;
	VertexTangent: Vector;
	VertexBinormalSign: number;
	clone() : SubdividedQuadVertex;
	static C(Other: UObject | any): SubdividedQuadVertex;
}

declare class SubdividedQuad { 
	QuadVertex0: SubdividedQuadVertex;
	QuadVertex1: SubdividedQuadVertex;
	QuadVertex2: SubdividedQuadVertex;
	QuadVertex3: SubdividedQuadVertex;
	clone() : SubdividedQuad;
	static C(Other: UObject | any): SubdividedQuad;
}

declare class SubdivisionLimitSection { 
	SubdividedQuads: SubdividedQuad[];
	clone() : SubdivisionLimitSection;
	static C(Other: UObject | any): SubdivisionLimitSection;
}

declare class SubdividedWireEdge { 
	EdgeVertex0PositionIndex: number;
	EdgeVertex1PositionIndex: number;
	clone() : SubdividedWireEdge;
	static C(Other: UObject | any): SubdividedWireEdge;
}

declare class SubdivisionLimitData { 
	VertexPositions: Vector[];
	Sections: SubdivisionLimitSection[];
	SubdividedWireEdges: SubdividedWireEdge[];
	clone() : SubdivisionLimitData;
	static C(Other: UObject | any): SubdivisionLimitData;
}

declare class MeshTriangle { 
	VertexInstanceID0: VertexInstanceID;
	VertexInstanceID1: VertexInstanceID;
	VertexInstanceID2: VertexInstanceID;
	clone() : MeshTriangle;
	static C(Other: UObject | any): MeshTriangle;
}

declare class VertexToCreate { 
	VertexAttributes: MeshElementAttributeList;
	OriginalVertexID: VertexID;
	clone() : VertexToCreate;
	static C(Other: UObject | any): VertexToCreate;
}

declare class VertexInstanceToCreate { 
	VertexID: VertexID;
	VertexInstanceAttributes: MeshElementAttributeList;
	OriginalVertexInstanceID: VertexInstanceID;
	clone() : VertexInstanceToCreate;
	static C(Other: UObject | any): VertexInstanceToCreate;
}

declare class PolygonHoleVertices { 
	HoleVertices: VertexAndAttributes[];
	clone() : PolygonHoleVertices;
	static C(Other: UObject | any): PolygonHoleVertices;
}

declare type EPolygonEdgeHardness = 'NewEdgesSoft' | 'NewEdgesHard' | 'AllEdgesSoft' | 'AllEdgesHard' | 'EPolygonEdgeHardness_MAX';
declare var EPolygonEdgeHardness : { NewEdgesSoft:'NewEdgesSoft',NewEdgesHard:'NewEdgesHard',AllEdgesSoft:'AllEdgesSoft',AllEdgesHard:'AllEdgesHard',EPolygonEdgeHardness_MAX:'EPolygonEdgeHardness_MAX', };
declare class PolygonToCreate { 
	PolygonGroupID: PolygonGroupID;
	PerimeterVertices: VertexAndAttributes[];
	PolygonHoles: PolygonHoleVertices[];
	OriginalPolygonID: PolygonID;
	PolygonEdgeHardness: EPolygonEdgeHardness;
	clone() : PolygonToCreate;
	static C(Other: UObject | any): PolygonToCreate;
}

declare class PolygonGroupToCreate { 
	PolygonGroupAttributes: MeshElementAttributeList;
	OriginalPolygonGroupID: PolygonGroupID;
	clone() : PolygonGroupToCreate;
	static C(Other: UObject | any): PolygonGroupToCreate;
}

declare class EdgeToCreate { 
	VertexID0: VertexID;
	VertexID1: VertexID;
	ConnectedPolygons: PolygonID[];
	EdgeAttributes: MeshElementAttributeList;
	OriginalEdgeID: EdgeID;
	clone() : EdgeToCreate;
	static C(Other: UObject | any): EdgeToCreate;
}

declare class VertexIndexAndInstanceID { 
	ContourIndex: number;
	VertexInstanceID: VertexInstanceID;
	clone() : VertexIndexAndInstanceID;
	static C(Other: UObject | any): VertexIndexAndInstanceID;
}

declare class VertexInstancesForPolygonHole { 
	VertexIndicesAndInstanceIDs: VertexIndexAndInstanceID[];
	clone() : VertexInstancesForPolygonHole;
	static C(Other: UObject | any): VertexInstancesForPolygonHole;
}

declare class ChangeVertexInstancesForPolygon { 
	PolygonID: PolygonID;
	PerimeterVertexIndicesAndInstanceIDs: VertexIndexAndInstanceID[];
	VertexIndicesAndInstanceIDsForEachHole: VertexInstancesForPolygonHole[];
	clone() : ChangeVertexInstancesForPolygon;
	static C(Other: UObject | any): ChangeVertexInstancesForPolygon;
}

declare class PolygonGroupForPolygon { 
	PolygonID: PolygonID;
	PolygonGroupID: PolygonGroupID;
	clone() : PolygonGroupForPolygon;
	static C(Other: UObject | any): PolygonGroupForPolygon;
}

declare class EditableMesh extends UObject { 
	Adapters: EditableMeshAdapter[];
	TextureCoordinateCount: number;
	PendingCompactCounter: number;
	SubdivisionCount: number;
	static Load(ResourceName: string): EditableMesh;
	static Find(Outer: UObject, ResourceName: string): EditableMesh;
	static GetDefaultObject(): EditableMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMesh;
	WeldVertices(VertexIDs: VertexID[],OutNewVertexID?: VertexID): {OutNewVertexID: VertexID};
	TryToRemoveVertex(VertexID: VertexID,bOutWasVertexRemoved?: boolean,OutNewEdgeID?: EdgeID): {bOutWasVertexRemoved: boolean, OutNewEdgeID: EdgeID};
	TryToRemovePolygonEdge(EdgeID: EdgeID,bOutWasEdgeRemoved?: boolean,OutNewPolygonID?: PolygonID): {bOutWasEdgeRemoved: boolean, OutNewPolygonID: PolygonID};
	TriangulatePolygons(PolygonIDs: PolygonID[],OutNewTrianglePolygons?: PolygonID[]): {OutNewTrianglePolygons: PolygonID[]};
	TessellatePolygons(PolygonIDs: PolygonID[],TriangleTessellationMode: ETriangleTessellationMode,OutNewPolygonIDs?: PolygonID[]): {OutNewPolygonIDs: PolygonID[]};
	StartModification(MeshModificationType: EMeshModificationType,MeshTopologyChange: EMeshTopologyChange): void;
	SplitPolygons(PolygonsToSplit: PolygonToSplit[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	SplitEdge(EdgeID: EdgeID,Splits: number[],OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	SetVerticesCornerSharpness(VertexIDs: VertexID[],VerticesNewCornerSharpness: number[]): void;
	SetVerticesAttributes(AttributesForVertices: AttributesForVertex[]): void;
	SetVertexInstancesAttributes(AttributesForVertexInstances: AttributesForVertexInstance[]): void;
	SetTextureCoordinateCount(NumTexCoords: number): void;
	SetSubdivisionCount(NewSubdivisionCount: number): void;
	SetPolygonsVertexAttributes(VertexAttributesForPolygons: VertexAttributesForPolygon[]): void;
	SetEdgesVertices(VerticesForEdges: VerticesForEdge[]): void;
	SetEdgesHardnessAutomatically(EdgeIDs: EdgeID[],MaxDotProductForSoftEdge: number): void;
	SetEdgesHardness(EdgeIDs: EdgeID[],EdgesNewIsHard: boolean[]): void;
	SetEdgesCreaseSharpness(EdgeIDs: EdgeID[],EdgesNewCreaseSharpness: number[]): void;
	SetEdgesAttributes(AttributesForEdges: AttributesForEdge[]): void;
	SetAllowUndo(bInAllowUndo: boolean): void;
	SetAllowSpatialDatabase(bInAllowSpatialDatabase: boolean): void;
	SetAllowCompact(bInAllowCompact: boolean): void;
	SearchSpatialDatabaseForPolygonsPotentiallyIntersectingLineSegment(LineSegmentStart: Vector,LineSegmentEnd: Vector,OutPolygons?: PolygonID[]): {OutPolygons: PolygonID[]};
	SearchSpatialDatabaseForPolygonsInVolume(planes: Plane[],OutPolygons?: PolygonID[]): {OutPolygons: PolygonID[]};
	RevertInstance(): EditableMesh;
	Revert(): void;
	RemovePolygonPerimeterVertices(PolygonID: PolygonID,FirstVertexNumberToRemove: number,NumVerticesToRemove: number,bDeleteOrphanedVertexInstances: boolean): void;
	RebuildRenderMesh(): void;
	QuadrangulateMesh(OutNewPolygonIDs?: PolygonID[]): {OutNewPolygonIDs: PolygonID[]};
	PropagateInstanceChanges(): void;
	MoveVertices(VerticesToMove: VertexToMove[]): void;
	static MakeVertexID(VertexIndex: number): VertexID;
	static MakePolygonID(PolygonIndex: number): PolygonID;
	static MakePolygonGroupID(PolygonGroupIndex: number): PolygonGroupID;
	static MakeEdgeID(EdgeIndex: number): EdgeID;
	IsValidVertex(VertexID: VertexID): boolean;
	IsValidPolygonGroup(PolygonGroupID: PolygonGroupID): boolean;
	IsValidPolygon(PolygonID: PolygonID): boolean;
	IsValidEdge(EdgeID: EdgeID): boolean;
	IsUndoAllowed(): boolean;
	IsSpatialDatabaseAllowed(): boolean;
	IsPreviewingSubdivisions(): boolean;
	IsOrphanedVertex(VertexID: VertexID): boolean;
	IsCompactAllowed(): boolean;
	IsCommittedAsInstance(): boolean;
	IsCommitted(): boolean;
	IsBeingModified(): boolean;
	static InvalidVertexID(): VertexID;
	static InvalidPolygonID(): PolygonID;
	static InvalidPolygonGroupID(): PolygonGroupID;
	static InvalidEdgeID(): EdgeID;
	InsetPolygons(PolygonIDs: PolygonID[],InsetFixedDistance: number,InsetProgressTowardCenter: number,Mode: EInsetPolygonsMode,OutNewCenterPolygonIDs?: PolygonID[],OutNewSidePolygonIDs?: PolygonID[]): {OutNewCenterPolygonIDs: PolygonID[], OutNewSidePolygonIDs: PolygonID[]};
	InsertPolygonPerimeterVertices(PolygonID: PolygonID,InsertBeforeVertexNumber: number,VerticesToInsert: VertexAndAttributes[]): void;
	InsertEdgeLoop(EdgeID: EdgeID,Splits: number[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	InitializeAdapters(): void;
	GetVertexPairEdge(VertexID: VertexID,NextVertexID: VertexID,bOutEdgeWindingIsReversed?: boolean): {bOutEdgeWindingIsReversed: boolean, $: EdgeID};
	GetVertexInstanceVertex(VertexInstanceID: VertexInstanceID): VertexID;
	GetVertexInstanceCount(): number;
	GetVertexInstanceConnectedPolygons(VertexInstanceID: VertexInstanceID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetVertexInstanceConnectedPolygonCount(VertexInstanceID: VertexInstanceID): number;
	GetVertexInstanceConnectedPolygon(VertexInstanceID: VertexInstanceID,ConnectedPolygonNumber: number): PolygonID;
	GetVertexCount(): number;
	GetVertexConnectedPolygons(VertexID: VertexID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetVertexConnectedEdges(VertexID: VertexID,OutConnectedEdgeIDs?: EdgeID[]): {OutConnectedEdgeIDs: EdgeID[]};
	GetVertexConnectedEdgeCount(VertexID: VertexID): number;
	GetVertexConnectedEdge(VertexID: VertexID,ConnectedEdgeNumber: number): EdgeID;
	GetVertexAdjacentVertices(VertexID: VertexID,OutAdjacentVertexIDs?: VertexID[]): {OutAdjacentVertexIDs: VertexID[]};
	GetTextureCoordinateCount(): number;
	GetSubdivisionLimitData(): SubdivisionLimitData;
	GetSubdivisionCount(): number;
	GetPolygonTriangulatedTriangleCount(PolygonID: PolygonID): number;
	GetPolygonTriangulatedTriangle(PolygonID: PolygonID,PolygonTriangleNumber: number): MeshTriangle;
	GetPolygonPerimeterVertices(PolygonID: PolygonID,OutPolygonPerimeterVertexIDs?: VertexID[]): {OutPolygonPerimeterVertexIDs: VertexID[]};
	GetPolygonPerimeterVertexInstances(PolygonID: PolygonID,OutPolygonPerimeterVertexInstanceIDs?: VertexInstanceID[]): {OutPolygonPerimeterVertexInstanceIDs: VertexInstanceID[]};
	GetPolygonPerimeterVertexInstance(PolygonID: PolygonID,PolygonVertexNumber: number): VertexInstanceID;
	GetPolygonPerimeterVertexCount(PolygonID: PolygonID): number;
	GetPolygonPerimeterVertex(PolygonID: PolygonID,PolygonVertexNumber: number): VertexID;
	GetPolygonPerimeterEdges(PolygonID: PolygonID,OutPolygonPerimeterEdgeIDs?: EdgeID[]): {OutPolygonPerimeterEdgeIDs: EdgeID[]};
	GetPolygonPerimeterEdgeCount(PolygonID: PolygonID): number;
	GetPolygonPerimeterEdge(PolygonID: PolygonID,PerimeterEdgeNumber: number,bOutEdgeWindingIsReversedForPolygon?: boolean): {bOutEdgeWindingIsReversedForPolygon: boolean, $: EdgeID};
	GetPolygonInGroup(PolygonGroupID: PolygonGroupID,PolygonNumber: number): PolygonID;
	GetPolygonHoleVertices(PolygonID: PolygonID,HoleNumber: number,OutHoleVertexIDs?: VertexID[]): {OutHoleVertexIDs: VertexID[]};
	GetPolygonHoleVertexInstances(PolygonID: PolygonID,HoleNumber: number,OutHoleVertexInstanceIDs?: VertexInstanceID[]): {OutHoleVertexInstanceIDs: VertexInstanceID[]};
	GetPolygonHoleVertexInstance(PolygonID: PolygonID,HoleNumber: number,PolygonVertexNumber: number): VertexInstanceID;
	GetPolygonHoleVertexCount(PolygonID: PolygonID,HoleNumber: number): number;
	GetPolygonHoleVertex(PolygonID: PolygonID,HoleNumber: number,PolygonVertexNumber: number): VertexID;
	GetPolygonHoleEdges(PolygonID: PolygonID,HoleNumber: number,OutHoleEdgeIDs?: EdgeID[]): {OutHoleEdgeIDs: EdgeID[]};
	GetPolygonHoleEdgeCount(PolygonID: PolygonID,HoleNumber: number): number;
	GetPolygonHoleEdge(PolygonID: PolygonID,HoleNumber: number,HoleEdgeNumber: number): EdgeID;
	GetPolygonHoleCount(PolygonID: PolygonID): number;
	GetPolygonGroupCount(): number;
	GetPolygonCountInGroup(PolygonGroupID: PolygonGroupID): number;
	GetPolygonCount(): number;
	GetPolygonAdjacentPolygons(PolygonID: PolygonID,OutAdjacentPolygons?: PolygonID[]): {OutAdjacentPolygons: PolygonID[]};
	GetGroupForPolygon(PolygonID: PolygonID): PolygonGroupID;
	GetFirstValidPolygonGroup(): PolygonGroupID;
	GetEdgeVertices(EdgeID: EdgeID,OutEdgeVertexID0?: VertexID,OutEdgeVertexID1?: VertexID): {OutEdgeVertexID0: VertexID, OutEdgeVertexID1: VertexID};
	GetEdgeVertex(EdgeID: EdgeID,EdgeVertexNumber: number): VertexID;
	GetEdgeThatConnectsVertices(VertexID0: VertexID,VertexID1: VertexID): EdgeID;
	GetEdgeLoopElements(EdgeID: EdgeID,EdgeLoopIDs?: EdgeID[]): {EdgeLoopIDs: EdgeID[]};
	GetEdgeCount(): number;
	GetEdgeConnectedPolygons(EdgeID: EdgeID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetEdgeConnectedPolygonCount(EdgeID: EdgeID): number;
	GetEdgeConnectedPolygon(EdgeID: EdgeID,ConnectedPolygonNumber: number): PolygonID;
	GeneratePolygonTangentsAndNormals(PolygonIDs: PolygonID[]): void;
	FlipPolygons(PolygonIDs: PolygonID[]): void;
	FindPolygonPerimeterVertexNumberForVertex(PolygonID: PolygonID,VertexID: VertexID): number;
	FindPolygonPerimeterEdgeNumberForVertices(PolygonID: PolygonID,EdgeVertexID0: VertexID,EdgeVertexID1: VertexID): number;
	FindPolygonLoop(EdgeID: EdgeID,OutEdgeLoopEdgeIDs?: EdgeID[],OutFlippedEdgeIDs?: EdgeID[],OutReversedEdgeIDPathToTake?: EdgeID[],OutPolygonIDsToSplit?: PolygonID[]): {OutEdgeLoopEdgeIDs: EdgeID[], OutFlippedEdgeIDs: EdgeID[], OutReversedEdgeIDPathToTake: EdgeID[], OutPolygonIDsToSplit: PolygonID[]};
	FindPolygonHoleVertexNumberForVertex(PolygonID: PolygonID,HoleNumber: number,VertexID: VertexID): number;
	FindPolygonHoleEdgeNumberForVertices(PolygonID: PolygonID,HoleNumber: number,EdgeVertexID0: VertexID,EdgeVertexID1: VertexID): number;
	ExtrudePolygons(Polygons: PolygonID[],ExtrudeDistance: number,bKeepNeighborsTogether: boolean,OutNewExtrudedFrontPolygons?: PolygonID[]): {OutNewExtrudedFrontPolygons: PolygonID[]};
	ExtendVertices(VertexIDs: VertexID[],bOnlyExtendClosestEdge: boolean,ReferencePosition: Vector,OutNewExtendedVertexIDs?: VertexID[]): {OutNewExtendedVertexIDs: VertexID[]};
	ExtendEdges(EdgeIDs: EdgeID[],bWeldNeighbors: boolean,OutNewExtendedEdgeIDs?: EdgeID[]): {OutNewExtendedEdgeIDs: EdgeID[]};
	EndModification(bFromUndo: boolean): void;
	DeleteVertexInstances(VertexInstanceIDsToDelete: VertexInstanceID[],bDeleteOrphanedVertices: boolean): void;
	DeleteVertexAndConnectedEdgesAndPolygons(VertexID: VertexID,bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	DeletePolygons(PolygonIDsToDelete: PolygonID[],bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	DeletePolygonGroups(PolygonGroupIDs: PolygonGroupID[]): void;
	DeleteOrphanVertices(VertexIDsToDelete: VertexID[]): void;
	DeleteEdges(EdgeIDsToDelete: EdgeID[],bDeleteOrphanedVertices: boolean): void;
	DeleteEdgeAndConnectedPolygons(EdgeID: EdgeID,bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	CreateVertices(VerticesToCreate: VertexToCreate[],OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	CreateVertexInstances(VertexInstancesToCreate: VertexInstanceToCreate[],OutNewVertexInstanceIDs?: VertexInstanceID[]): {OutNewVertexInstanceIDs: VertexInstanceID[]};
	CreatePolygons(PolygonsToCreate: PolygonToCreate[],OutNewPolygonIDs?: PolygonID[],OutNewEdgeIDs?: EdgeID[]): {OutNewPolygonIDs: PolygonID[], OutNewEdgeIDs: EdgeID[]};
	CreatePolygonGroups(PolygonGroupsToCreate: PolygonGroupToCreate[],OutNewPolygonGroupIDs?: PolygonGroupID[]): {OutNewPolygonGroupIDs: PolygonGroupID[]};
	CreateMissingPolygonPerimeterEdges(PolygonID: PolygonID,OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	CreateMissingPolygonHoleEdges(PolygonID: PolygonID,HoleNumber: number,OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	CreateEmptyVertexRange(NumVerticesToCreate: number,OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	CreateEdges(EdgesToCreate: EdgeToCreate[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	ComputePolygonTriangulation(PolygonID: PolygonID,OutTriangles?: MeshTriangle[]): {OutTriangles: MeshTriangle[]};
	ComputePolygonsSharedEdges(PolygonIDs: PolygonID[],OutSharedEdgeIDs?: EdgeID[]): {OutSharedEdgeIDs: EdgeID[]};
	ComputePolygonPlane(PolygonID: PolygonID): Plane;
	ComputePolygonNormal(PolygonID: PolygonID): Vector;
	ComputePolygonCenter(PolygonID: PolygonID): Vector;
	ComputeBoundingBoxAndSphere(): BoxSphereBounds;
	ComputeBoundingBox(): Box;
	ComputeBarycentricWeightForPointOnPolygon(PolygonID: PolygonID,PointOnPolygon: Vector,OutTriangle?: MeshTriangle,OutTriangleVertexWeights?: Vector): {OutTriangle: MeshTriangle, OutTriangleVertexWeights: Vector, $: boolean};
	CommitInstance(ComponentToInstanceTo: PrimitiveComponent): EditableMesh;
	Commit(): void;
	ChangePolygonsVertexInstances(VertexInstancesForPolygons: ChangeVertexInstancesForPolygon[]): void;
	BevelPolygons(PolygonIDs: PolygonID[],BevelFixedDistance: number,BevelProgressTowardCenter: number,OutNewCenterPolygonIDs?: PolygonID[],OutNewSidePolygonIDs?: PolygonID[]): {OutNewCenterPolygonIDs: PolygonID[], OutNewSidePolygonIDs: PolygonID[]};
	AssignPolygonsToPolygonGroups(PolygonGroupForPolygons: PolygonGroupForPolygon[],bDeleteOrphanedPolygonGroups: boolean): void;
	AnyChangesToUndo(): boolean;
	static C(Other: UObject | any): EditableMesh;
}

declare class EditableMeshFactory extends UObject { 
	static Load(ResourceName: string): EditableMeshFactory;
	static Find(Outer: UObject, ResourceName: string): EditableMeshFactory;
	static GetDefaultObject(): EditableMeshFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMeshFactory;
	static MakeEditableMesh(PrimitiveComponent: PrimitiveComponent,LODIndex: number): EditableMesh;
	static C(Other: UObject | any): EditableMeshFactory;
}

declare class EditableStaticMeshAdapter extends EditableMeshAdapter { 
	StaticMesh: StaticMesh;
	OriginalStaticMesh: StaticMesh;
	StaticMeshLODIndex: number;
	static Load(ResourceName: string): EditableStaticMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): EditableStaticMeshAdapter;
	static GetDefaultObject(): EditableStaticMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableStaticMeshAdapter;
	static C(Other: UObject | any): EditableStaticMeshAdapter;
}

declare class MeshEditorAssetContainer extends DataAsset { 
	HoveredGeometryMaterial: MaterialInterface;
	HoveredFaceMaterial: MaterialInterface;
	WireMaterial: MaterialInterface;
	SubdividedMeshWireMaterial: MaterialInterface;
	OverlayLineMaterial: MaterialInterface;
	OverlayPointMaterial: MaterialInterface;
	DefaultSound: SoundBase;
	static Load(ResourceName: string): MeshEditorAssetContainer;
	static Find(Outer: UObject, ResourceName: string): MeshEditorAssetContainer;
	static GetDefaultObject(): MeshEditorAssetContainer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorAssetContainer;
	static C(Other: UObject | any): MeshEditorAssetContainer;
}

declare class MeshEditorCommand extends UObject { 
	static Load(ResourceName: string): MeshEditorCommand;
	static Find(Outer: UObject, ResourceName: string): MeshEditorCommand;
	static GetDefaultObject(): MeshEditorCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorCommand;
	static C(Other: UObject | any): MeshEditorCommand;
}

declare class MeshEditorInstantCommand extends MeshEditorCommand { 
	static Load(ResourceName: string): MeshEditorInstantCommand;
	static Find(Outer: UObject, ResourceName: string): MeshEditorInstantCommand;
	static GetDefaultObject(): MeshEditorInstantCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorInstantCommand;
	static C(Other: UObject | any): MeshEditorInstantCommand;
}

declare class MeshEditorEditCommand extends MeshEditorCommand { 
	UndoText: string;
	bNeedsDraggingInitiated: boolean;
	bNeedsHoverLocation: boolean;
	static Load(ResourceName: string): MeshEditorEditCommand;
	static Find(Outer: UObject, ResourceName: string): MeshEditorEditCommand;
	static GetDefaultObject(): MeshEditorEditCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorEditCommand;
	static C(Other: UObject | any): MeshEditorEditCommand;
}

declare class MeshEditorCommandList extends UObject { 
	MeshEditorCommands: MeshEditorCommand[];
	static Load(ResourceName: string): MeshEditorCommandList;
	static Find(Outer: UObject, ResourceName: string): MeshEditorCommandList;
	static GetDefaultObject(): MeshEditorCommandList;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorCommandList;
	static C(Other: UObject | any): MeshEditorCommandList;
}

declare class MeshEditorModeProxyObject extends UObject { 
	static Load(ResourceName: string): MeshEditorModeProxyObject;
	static Find(Outer: UObject, ResourceName: string): MeshEditorModeProxyObject;
	static GetDefaultObject(): MeshEditorModeProxyObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorModeProxyObject;
	static C(Other: UObject | any): MeshEditorModeProxyObject;
}

declare class MeshEditorSelectionModifier extends UObject { 
	static Load(ResourceName: string): MeshEditorSelectionModifier;
	static Find(Outer: UObject, ResourceName: string): MeshEditorSelectionModifier;
	static GetDefaultObject(): MeshEditorSelectionModifier;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorSelectionModifier;
	static C(Other: UObject | any): MeshEditorSelectionModifier;
}

declare class SelectSingleMeshElement extends MeshEditorSelectionModifier { 
	static Load(ResourceName: string): SelectSingleMeshElement;
	static Find(Outer: UObject, ResourceName: string): SelectSingleMeshElement;
	static GetDefaultObject(): SelectSingleMeshElement;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelectSingleMeshElement;
	static C(Other: UObject | any): SelectSingleMeshElement;
}

declare class SelectPolygonsByGroup extends MeshEditorSelectionModifier { 
	static Load(ResourceName: string): SelectPolygonsByGroup;
	static Find(Outer: UObject, ResourceName: string): SelectPolygonsByGroup;
	static GetDefaultObject(): SelectPolygonsByGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelectPolygonsByGroup;
	static C(Other: UObject | any): SelectPolygonsByGroup;
}

declare class SelectPolygonsByConnectivity extends MeshEditorSelectionModifier { 
	static Load(ResourceName: string): SelectPolygonsByConnectivity;
	static Find(Outer: UObject, ResourceName: string): SelectPolygonsByConnectivity;
	static GetDefaultObject(): SelectPolygonsByConnectivity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelectPolygonsByConnectivity;
	static C(Other: UObject | any): SelectPolygonsByConnectivity;
}

declare class SelectPolygonsBySmoothingGroup extends MeshEditorSelectionModifier { 
	static Load(ResourceName: string): SelectPolygonsBySmoothingGroup;
	static Find(Outer: UObject, ResourceName: string): SelectPolygonsBySmoothingGroup;
	static GetDefaultObject(): SelectPolygonsBySmoothingGroup;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelectPolygonsBySmoothingGroup;
	static C(Other: UObject | any): SelectPolygonsBySmoothingGroup;
}

declare class MeshEditorSelectionModifiersList extends UObject { 
	SelectionModifiers: MeshEditorSelectionModifier[];
	static Load(ResourceName: string): MeshEditorSelectionModifiersList;
	static Find(Outer: UObject, ResourceName: string): MeshEditorSelectionModifiersList;
	static GetDefaultObject(): MeshEditorSelectionModifiersList;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorSelectionModifiersList;
	static C(Other: UObject | any): MeshEditorSelectionModifiersList;
}

declare class MeshEditorSettings extends UObject { 
	bSeparateSelectionSetPerMode: boolean;
	bOnlySelectVisibleMeshes: boolean;
	bOnlySelectVisibleElements: boolean;
	bAllowGrabberSphere: boolean;
	bAutoQuadrangulate: boolean;
	static Load(ResourceName: string): MeshEditorSettings;
	static Find(Outer: UObject, ResourceName: string): MeshEditorSettings;
	static GetDefaultObject(): MeshEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorSettings;
	static C(Other: UObject | any): MeshEditorSettings;
}

declare class WireframeMesh extends UObject { 
	static Load(ResourceName: string): WireframeMesh;
	static Find(Outer: UObject, ResourceName: string): WireframeMesh;
	static GetDefaultObject(): WireframeMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WireframeMesh;
	static C(Other: UObject | any): WireframeMesh;
}

declare class MeshEditorStaticMeshAdapter extends EditableMeshAdapter { 
	WireframeMesh: WireframeMesh;
	StaticMeshLODIndex: number;
	static Load(ResourceName: string): MeshEditorStaticMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): MeshEditorStaticMeshAdapter;
	static GetDefaultObject(): MeshEditorStaticMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorStaticMeshAdapter;
	static C(Other: UObject | any): MeshEditorStaticMeshAdapter;
}

declare class MeshEditorSubdividedStaticMeshAdapter extends EditableMeshAdapter { 
	WireframeMesh: WireframeMesh;
	StaticMeshLODIndex: number;
	static Load(ResourceName: string): MeshEditorSubdividedStaticMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): MeshEditorSubdividedStaticMeshAdapter;
	static GetDefaultObject(): MeshEditorSubdividedStaticMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshEditorSubdividedStaticMeshAdapter;
	static C(Other: UObject | any): MeshEditorSubdividedStaticMeshAdapter;
}

declare class MeshElementTransformer extends ViewportTransformer { 
	static Load(ResourceName: string): MeshElementTransformer;
	static Find(Outer: UObject, ResourceName: string): MeshElementTransformer;
	static GetDefaultObject(): MeshElementTransformer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshElementTransformer;
	static C(Other: UObject | any): MeshElementTransformer;
}

declare class OverlayComponent extends MeshComponent { 
	LineMaterial: MaterialInterface;
	PointMaterial: MaterialInterface;
	Bounds: BoxSphereBounds;
	bBoundsDirty: boolean;
	static Load(ResourceName: string): OverlayComponent;
	static Find(Outer: UObject, ResourceName: string): OverlayComponent;
	static GetDefaultObject(): OverlayComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OverlayComponent;
	static C(Other: UObject | any): OverlayComponent;
}

declare class WireframeMeshComponent extends MeshComponent { 
	WireframeMesh: WireframeMesh;
	static Load(ResourceName: string): WireframeMeshComponent;
	static Find(Outer: UObject, ResourceName: string): WireframeMeshComponent;
	static GetDefaultObject(): WireframeMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WireframeMeshComponent;
	static C(Other: UObject | any): WireframeMeshComponent;
}

declare class AssignMaterialCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): AssignMaterialCommand;
	static Find(Outer: UObject, ResourceName: string): AssignMaterialCommand;
	static GetDefaultObject(): AssignMaterialCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssignMaterialCommand;
	static C(Other: UObject | any): AssignMaterialCommand;
}

declare class BevelPolygonCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): BevelPolygonCommand;
	static Find(Outer: UObject, ResourceName: string): BevelPolygonCommand;
	static GetDefaultObject(): BevelPolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BevelPolygonCommand;
	static C(Other: UObject | any): BevelPolygonCommand;
}

declare class InsetPolygonCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): InsetPolygonCommand;
	static Find(Outer: UObject, ResourceName: string): InsetPolygonCommand;
	static GetDefaultObject(): InsetPolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InsetPolygonCommand;
	static C(Other: UObject | any): InsetPolygonCommand;
}

declare class DeleteMeshElementCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): DeleteMeshElementCommand;
	static Find(Outer: UObject, ResourceName: string): DeleteMeshElementCommand;
	static GetDefaultObject(): DeleteMeshElementCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeleteMeshElementCommand;
	static C(Other: UObject | any): DeleteMeshElementCommand;
}

declare class EditVertexCornerSharpnessCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): EditVertexCornerSharpnessCommand;
	static Find(Outer: UObject, ResourceName: string): EditVertexCornerSharpnessCommand;
	static GetDefaultObject(): EditVertexCornerSharpnessCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditVertexCornerSharpnessCommand;
	static C(Other: UObject | any): EditVertexCornerSharpnessCommand;
}

declare class EditEdgeCreaseSharpnessCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): EditEdgeCreaseSharpnessCommand;
	static Find(Outer: UObject, ResourceName: string): EditEdgeCreaseSharpnessCommand;
	static GetDefaultObject(): EditEdgeCreaseSharpnessCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditEdgeCreaseSharpnessCommand;
	static C(Other: UObject | any): EditEdgeCreaseSharpnessCommand;
}

declare class ExtendEdgeCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): ExtendEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): ExtendEdgeCommand;
	static GetDefaultObject(): ExtendEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtendEdgeCommand;
	static C(Other: UObject | any): ExtendEdgeCommand;
}

declare class ExtendVertexCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): ExtendVertexCommand;
	static Find(Outer: UObject, ResourceName: string): ExtendVertexCommand;
	static GetDefaultObject(): ExtendVertexCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtendVertexCommand;
	static C(Other: UObject | any): ExtendVertexCommand;
}

declare class ExtrudePolygonCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): ExtrudePolygonCommand;
	static Find(Outer: UObject, ResourceName: string): ExtrudePolygonCommand;
	static GetDefaultObject(): ExtrudePolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExtrudePolygonCommand;
	static C(Other: UObject | any): ExtrudePolygonCommand;
}

declare class FlipPolygonCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): FlipPolygonCommand;
	static Find(Outer: UObject, ResourceName: string): FlipPolygonCommand;
	static GetDefaultObject(): FlipPolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlipPolygonCommand;
	static C(Other: UObject | any): FlipPolygonCommand;
}

declare class HardenEdgeCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): HardenEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): HardenEdgeCommand;
	static GetDefaultObject(): HardenEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HardenEdgeCommand;
	static C(Other: UObject | any): HardenEdgeCommand;
}

declare class SoftenEdgeCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): SoftenEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): SoftenEdgeCommand;
	static GetDefaultObject(): SoftenEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoftenEdgeCommand;
	static C(Other: UObject | any): SoftenEdgeCommand;
}

declare class InsertEdgeLoopCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): InsertEdgeLoopCommand;
	static Find(Outer: UObject, ResourceName: string): InsertEdgeLoopCommand;
	static GetDefaultObject(): InsertEdgeLoopCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InsertEdgeLoopCommand;
	static C(Other: UObject | any): InsertEdgeLoopCommand;
}

declare class QuadrangulateMeshCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): QuadrangulateMeshCommand;
	static Find(Outer: UObject, ResourceName: string): QuadrangulateMeshCommand;
	static GetDefaultObject(): QuadrangulateMeshCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuadrangulateMeshCommand;
	static C(Other: UObject | any): QuadrangulateMeshCommand;
}

declare class RemoveEdgeCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): RemoveEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): RemoveEdgeCommand;
	static GetDefaultObject(): RemoveEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveEdgeCommand;
	static C(Other: UObject | any): RemoveEdgeCommand;
}

declare class RemoveVertexCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): RemoveVertexCommand;
	static Find(Outer: UObject, ResourceName: string): RemoveVertexCommand;
	static GetDefaultObject(): RemoveVertexCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RemoveVertexCommand;
	static C(Other: UObject | any): RemoveVertexCommand;
}

declare class SplitEdgeCommand extends MeshEditorEditCommand { 
	static Load(ResourceName: string): SplitEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): SplitEdgeCommand;
	static GetDefaultObject(): SplitEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitEdgeCommand;
	static C(Other: UObject | any): SplitEdgeCommand;
}

declare class SplitPolygonCommand extends MeshEditorEditCommand { 
	Component: PrimitiveComponent;
	EditableMesh: EditableMesh;
	static Load(ResourceName: string): SplitPolygonCommand;
	static Find(Outer: UObject, ResourceName: string): SplitPolygonCommand;
	static GetDefaultObject(): SplitPolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitPolygonCommand;
	static C(Other: UObject | any): SplitPolygonCommand;
}

declare class SplitPolygonFromVertexCommand extends SplitPolygonCommand { 
	static Load(ResourceName: string): SplitPolygonFromVertexCommand;
	static Find(Outer: UObject, ResourceName: string): SplitPolygonFromVertexCommand;
	static GetDefaultObject(): SplitPolygonFromVertexCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitPolygonFromVertexCommand;
	static C(Other: UObject | any): SplitPolygonFromVertexCommand;
}

declare class SplitPolygonFromEdgeCommand extends SplitPolygonCommand { 
	static Load(ResourceName: string): SplitPolygonFromEdgeCommand;
	static Find(Outer: UObject, ResourceName: string): SplitPolygonFromEdgeCommand;
	static GetDefaultObject(): SplitPolygonFromEdgeCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitPolygonFromEdgeCommand;
	static C(Other: UObject | any): SplitPolygonFromEdgeCommand;
}

declare class SplitPolygonFromPolygonCommand extends SplitPolygonCommand { 
	static Load(ResourceName: string): SplitPolygonFromPolygonCommand;
	static Find(Outer: UObject, ResourceName: string): SplitPolygonFromPolygonCommand;
	static GetDefaultObject(): SplitPolygonFromPolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplitPolygonFromPolygonCommand;
	static C(Other: UObject | any): SplitPolygonFromPolygonCommand;
}

declare class TessellatePolygonCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): TessellatePolygonCommand;
	static Find(Outer: UObject, ResourceName: string): TessellatePolygonCommand;
	static GetDefaultObject(): TessellatePolygonCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TessellatePolygonCommand;
	static C(Other: UObject | any): TessellatePolygonCommand;
}

declare class UnifyNormalsCommand extends MeshEditorInstantCommand { 
	static Load(ResourceName: string): UnifyNormalsCommand;
	static Find(Outer: UObject, ResourceName: string): UnifyNormalsCommand;
	static GetDefaultObject(): UnifyNormalsCommand;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnifyNormalsCommand;
	static C(Other: UObject | any): UnifyNormalsCommand;
}

declare class NewPluginDescriptorData extends UObject { 
	CreatedBy: string;
	CreatedByURL: string;
	Description: string;
	bIsBetaVersion: boolean;
	static Load(ResourceName: string): NewPluginDescriptorData;
	static Find(Outer: UObject, ResourceName: string): NewPluginDescriptorData;
	static GetDefaultObject(): NewPluginDescriptorData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NewPluginDescriptorData;
	static C(Other: UObject | any): NewPluginDescriptorData;
}

declare class PluginMetadataObject extends UObject { 
	Version: number;
	VersionName: string;
	FriendlyName: string;
	Description: string;
	Category: string;
	CreatedBy: string;
	CreatedByURL: string;
	DocsURL: string;
	MarketplaceURL: string;
	SupportURL: string;
	bCanContainContent: boolean;
	bIsBetaVersion: boolean;
	static Load(ResourceName: string): PluginMetadataObject;
	static Find(Outer: UObject, ResourceName: string): PluginMetadataObject;
	static GetDefaultObject(): PluginMetadataObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	static C(Other: UObject | any): PluginMetadataObject;
}

declare class SpeedTreeImportFactory extends Factory { 
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportFactory;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject | any): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSpeedTreeFactory;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject | any): ReimportSpeedTreeFactory;
}

declare type EImportGeometryType = 'IGT_3D' | 'IGT_Billboards' | 'IGT_Both' | 'IGT_MAX';
declare var EImportGeometryType : { IGT_3D:'IGT_3D',IGT_Billboards:'IGT_Billboards',IGT_Both:'IGT_Both',IGT_MAX:'IGT_MAX', };
declare type EImportLODType = 'ILT_PaintedFoliage' | 'ILT_IndividualActors' | 'ILT_MAX';
declare var EImportLODType : { ILT_PaintedFoliage:'ILT_PaintedFoliage',ILT_IndividualActors:'ILT_IndividualActors',ILT_MAX:'ILT_MAX', };
declare class SpeedTreeImportData extends AssetImportData { 
	TreeScale: number;
	ImportGeometryType: EImportGeometryType;
	LODType: EImportLODType;
	IncludeCollision: boolean;
	MakeMaterialsCheck: boolean;
	IncludeNormalMapCheck: boolean;
	IncludeDetailMapCheck: boolean;
	IncludeSpecularMapCheck: boolean;
	IncludeBranchSeamSmoothing: boolean;
	IncludeSpeedTreeAO: boolean;
	IncludeColorAdjustment: boolean;
	IncludeSubsurface: boolean;
	IncludeVertexProcessingCheck: boolean;
	IncludeWindCheck: boolean;
	IncludeSmoothLODCheck: boolean;
	static Load(ResourceName: string): SpeedTreeImportData;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportData;
	static GetDefaultObject(): SpeedTreeImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportData;
	static C(Other: UObject | any): SpeedTreeImportData;
}

declare type EPropertyValueCategory = 'Generic' | 'RelativeLocation' | 'RelativeRotation' | 'RelativeScale3D' | 'bVisible' | 'Material' | 'EPropertyValueCategory_MAX';
declare var EPropertyValueCategory : { Generic:'Generic',RelativeLocation:'RelativeLocation',RelativeRotation:'RelativeRotation',RelativeScale3D:'RelativeScale3D',bVisible:'bVisible',Material:'Material',EPropertyValueCategory_MAX:'EPropertyValueCategory_MAX', };
declare class PropertyValue extends UObject { 
	FullDisplayString: string;
	bHasRecordedData: boolean;
	bIsObjectProperty: boolean;
	ValueBytes: number[];
	PropCategory: EPropertyValueCategory;
	Properties: Property[];
	PropertyIndices: number[];
	static Load(ResourceName: string): PropertyValue;
	static Find(Outer: UObject, ResourceName: string): PropertyValue;
	static GetDefaultObject(): PropertyValue;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValue;
	static C(Other: UObject | any): PropertyValue;
}

declare class VariantObjectBinding extends UObject { 
	ObjectPtr: SoftObjectPath;
	LazyObjectPtr: any;
	CapturedProperties: PropertyValue[];
	static Load(ResourceName: string): VariantObjectBinding;
	static Find(Outer: UObject, ResourceName: string): VariantObjectBinding;
	static GetDefaultObject(): VariantObjectBinding;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantObjectBinding;
	static C(Other: UObject | any): VariantObjectBinding;
}

declare class Variant extends UObject { 
	DisplayText: string;
	ObjectBindings: VariantObjectBinding[];
	static Load(ResourceName: string): Variant;
	static Find(Outer: UObject, ResourceName: string): Variant;
	static GetDefaultObject(): Variant;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Variant;
	SwitchOn(): void;
	SetDisplayText(NewDisplayText: string): void;
	GetNumActors(): number;
	GetDisplayText(): string;
	GetActor(ActorIndex: number): Actor;
	static C(Other: UObject | any): Variant;
}

declare class VariantSet extends UObject { 
	DisplayText: string;
	Variants: Variant[];
	static Load(ResourceName: string): VariantSet;
	static Find(Outer: UObject, ResourceName: string): VariantSet;
	static GetDefaultObject(): VariantSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantSet;
	SetDisplayText(NewDisplayText: string): void;
	GetVariant(VariantIndex: number): Variant;
	GetNumVariants(): number;
	GetDisplayText(): string;
	static C(Other: UObject | any): VariantSet;
}

declare class LevelVariantSets extends UObject { 
	VariantSets: VariantSet[];
	DisplayNodeExpansionStates: any;
	static Load(ResourceName: string): LevelVariantSets;
	static Find(Outer: UObject, ResourceName: string): LevelVariantSets;
	static GetDefaultObject(): LevelVariantSets;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelVariantSets;
	GetVariantSet(VariantSetIndex: number): VariantSet;
	GetNumVariantSets(): number;
	static C(Other: UObject | any): LevelVariantSets;
}

declare class LevelVariantSetsActor extends Actor { 
	LevelVariantSets: SoftObjectPath;
	static GetDefaultObject(): LevelVariantSetsActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelVariantSetsActor;
	SwitchOnVariantByName(VariantSetName: string,VariantName: string): boolean;
	SwitchOnVariantByIndex(VariantSetIndex: number,VariantIndex: number): boolean;
	SetLevelVariantSets(InVariantSets: LevelVariantSets): void;
	GetLevelVariantSets(bLoad: boolean): LevelVariantSets;
	static C(Other: UObject | any): LevelVariantSetsActor;
}

declare class PropertyValueMaterial extends PropertyValue { 
	static Load(ResourceName: string): PropertyValueMaterial;
	static Find(Outer: UObject, ResourceName: string): PropertyValueMaterial;
	static GetDefaultObject(): PropertyValueMaterial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValueMaterial;
	static C(Other: UObject | any): PropertyValueMaterial;
}

declare class PropertyValueTransform extends PropertyValue { 
	static Load(ResourceName: string): PropertyValueTransform;
	static Find(Outer: UObject, ResourceName: string): PropertyValueTransform;
	static GetDefaultObject(): PropertyValueTransform;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValueTransform;
	static C(Other: UObject | any): PropertyValueTransform;
}

declare class PropertyValueVisibility extends PropertyValue { 
	static Load(ResourceName: string): PropertyValueVisibility;
	static Find(Outer: UObject, ResourceName: string): PropertyValueVisibility;
	static GetDefaultObject(): PropertyValueVisibility;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValueVisibility;
	static C(Other: UObject | any): PropertyValueVisibility;
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
	StartTimeOffset: number;
	PlaybackSpeed: number;
	NumTracks: number;
	ElapsedTime: number;
	Duration: number;
	bManualTick: boolean;
	static Load(ResourceName: string): GeometryCacheComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheComponent;
	TickAtThisTime(Time: number,bInIsRunning: boolean,bInBackwards: boolean,bInIsLooping: boolean): void;
	Stop(): void;
	SetStartTimeOffset(NewStartTimeOffset: number): void;
	SetPlaybackSpeed(NewPlaybackSpeed: number): void;
	SetLooping(bNewLooping: boolean): void;
	SetGeometryCache(NewGeomCache: GeometryCache): boolean;
	PlayReversedFromEnd(): void;
	PlayReversed(): void;
	PlayFromStart(): void;
	Play(): void;
	Pause(): void;
	IsPlayingReversed(): boolean;
	IsPlaying(): boolean;
	IsLooping(): boolean;
	GetStartTimeOffset(): number;
	GetPlaybackSpeed(): number;
	GetPlaybackDirection(): number;
	GetNumberOfFrames(): number;
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
	NumMeshSamples: any;
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

declare class AbcAssetImportData extends AssetImportData { 
	TrackNames: string[];
	SamplingSettings: AbcSamplingSettings;
	static Load(ResourceName: string): AbcAssetImportData;
	static Find(Outer: UObject, ResourceName: string): AbcAssetImportData;
	static GetDefaultObject(): AbcAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcAssetImportData;
	static C(Other: UObject | any): AbcAssetImportData;
}

declare type EAlembicImportType = 'StaticMesh' | 'GeometryCache' | 'Skeletal' | 'EAlembicImportType_MAX';
declare var EAlembicImportType : { StaticMesh:'StaticMesh',GeometryCache:'GeometryCache',Skeletal:'Skeletal',EAlembicImportType_MAX:'EAlembicImportType_MAX', };
declare class AbcNormalGenerationSettings { 
	bForceOneSmoothingGroupPerObject: boolean;
	HardEdgeAngleThreshold: number;
	bRecomputeNormals: boolean;
	bIgnoreDegenerateTriangles: boolean;
	clone() : AbcNormalGenerationSettings;
	static C(Other: UObject | any): AbcNormalGenerationSettings;
}

declare class AbcMaterialSettings { 
	bCreateMaterials: boolean;
	bFindMaterials: boolean;
	clone() : AbcMaterialSettings;
	static C(Other: UObject | any): AbcMaterialSettings;
}

declare type EBaseCalculationType = 'PercentageBased' | 'FixedNumber' | 'EBaseCalculationType_MAX';
declare var EBaseCalculationType : { PercentageBased:'PercentageBased',FixedNumber:'FixedNumber',EBaseCalculationType_MAX:'EBaseCalculationType_MAX', };
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

declare class AbcGeometryCacheSettings { 
	bFlattenTracks: boolean;
	bApplyConstantTopologyOptimizations: boolean;
	bCalculateMotionVectorsDuringImport: boolean;
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

declare class AppleImageUtilsImageConversionResult { 
	Error: string;
	ImageData: number[];
	clone() : AppleImageUtilsImageConversionResult;
	static C(Other: UObject | any): AppleImageUtilsImageConversionResult;
}

declare type ETextureRotationDirection = 'None' | 'Left' | 'Right' | 'Down' | 'ETextureRotationDirection_MAX';
declare var ETextureRotationDirection : { None:'None',Left:'Left',Right:'Right',Down:'Down',ETextureRotationDirection_MAX:'ETextureRotationDirection_MAX', };
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

declare class AppleImageInterface extends Interface { 
	static Load(ResourceName: string): AppleImageInterface;
	static Find(Outer: UObject, ResourceName: string): AppleImageInterface;
	static GetDefaultObject(): AppleImageInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageInterface;
	static C(Other: UObject | any): AppleImageInterface;
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

declare class DetectedFeature { 
	Confidence: number;
	clone() : DetectedFeature;
	static C(Other: UObject | any): DetectedFeature;
}

declare class DetectedFeatureRegion extends DetectedFeature { 
	Points: Vector2D[];
	clone() : DetectedFeatureRegion;
	static C(Other: UObject | any): DetectedFeatureRegion;
}

declare class DetectedFeature2D extends DetectedFeature { 
	BoundingBox: Box2D;
	clone() : DetectedFeature2D;
	static C(Other: UObject | any): DetectedFeature2D;
}

declare type EDetectedFaceFeatureType = 'Unkown' | 'FaceContour' | 'InnerLips' | 'LeftEye' | 'LeftEyebrow' | 'LeftPupil' | 'MedianLine' | 'Nose' | 'NoseCrest' | 'OuterLips' | 'RightEye' | 'RightEyebrow' | 'RightPupil' | 'EDetectedFaceFeatureType_MAX';
declare var EDetectedFaceFeatureType : { Unkown:'Unkown',FaceContour:'FaceContour',InnerLips:'InnerLips',LeftEye:'LeftEye',LeftEyebrow:'LeftEyebrow',LeftPupil:'LeftPupil',MedianLine:'MedianLine',Nose:'Nose',NoseCrest:'NoseCrest',OuterLips:'OuterLips',RightEye:'RightEye',RightEyebrow:'RightEyebrow',RightPupil:'RightPupil',EDetectedFaceFeatureType_MAX:'EDetectedFaceFeatureType_MAX', };
declare class DetectedFaceFeature2D extends DetectedFeature2D { 
	FeatureType: EDetectedFaceFeatureType;
	clone() : DetectedFaceFeature2D;
	static C(Other: UObject | any): DetectedFaceFeature2D;
}

declare class DetectedFaceFeatureRegion extends DetectedFeatureRegion { 
	FeatureType: EDetectedFaceFeatureType;
	clone() : DetectedFaceFeatureRegion;
	static C(Other: UObject | any): DetectedFaceFeatureRegion;
}

declare class DetectedFace extends DetectedFeatureRegion { 
	BoundingBox: Box2D;
	Features: DetectedFaceFeature2D[];
	FeatureRegions: DetectedFaceFeatureRegion[];
	clone() : DetectedFace;
	static C(Other: UObject | any): DetectedFace;
}

declare class FaceDetectionResult { 
	DetectedFaces: DetectedFace[];
	clone() : FaceDetectionResult;
	static C(Other: UObject | any): FaceDetectionResult;
}

declare class AppleVisionDetectFacesAsyncTaskBlueprintProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(FaceDetectionResult: FaceDetectionResult) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(FaceDetectionResult: FaceDetectionResult) => void>;
	FaceDetectionResult: FaceDetectionResult;
	static Load(ResourceName: string): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
	static Find(Outer: UObject, ResourceName: string): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
	static GetDefaultObject(): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
	static CreateProxyObjectForDetectFaces(SourceImage: Texture): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
	static C(Other: UObject | any): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
}

declare class MovieSceneGeometryCacheParams { 
	GeometryCache: SoftObjectPath;
	StartOffset: number;
	EndOffset: number;
	PlayRate: number;
	bReverse: boolean;
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

declare class WebSocketConnection extends NetConnection { 
	static Load(ResourceName: string): WebSocketConnection;
	static Find(Outer: UObject, ResourceName: string): WebSocketConnection;
	static GetDefaultObject(): WebSocketConnection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketConnection;
	static C(Other: UObject | any): WebSocketConnection;
}

declare class WebSocketNetDriver extends NetDriver { 
	WebSocketPort: number;
	static Load(ResourceName: string): WebSocketNetDriver;
	static Find(Outer: UObject, ResourceName: string): WebSocketNetDriver;
	static GetDefaultObject(): WebSocketNetDriver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketNetDriver;
	static C(Other: UObject | any): WebSocketNetDriver;
}

declare class ImgMediaSettings extends UObject { 
	DefaultFrameRate: FrameRate;
	CacheBehindPercentage: number;
	CacheSizeGB: number;
	CacheThreads: number;
	CacheThreadStackSizeKB: number;
	ExrDecoderThreads: any;
	DefaultProxy: string;
	UseDefaultProxy: boolean;
	static Load(ResourceName: string): ImgMediaSettings;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSettings;
	static GetDefaultObject(): ImgMediaSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSettings;
	static C(Other: UObject | any): ImgMediaSettings;
}

declare class ImgMediaSource extends BaseMediaSource { 
	FrameRateOverride: FrameRate;
	ProxyOverride: string;
	SequencePath: DirectoryPath;
	static Load(ResourceName: string): ImgMediaSource;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSource;
	static GetDefaultObject(): ImgMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSource;
	SetSequencePath(Path: string): void;
	GetSequencePath(): string;
	GetProxies(OutProxies?: string[]): {OutProxies: string[]};
	static C(Other: UObject | any): ImgMediaSource;
}

declare class DropTimecode { 
	Timecode: Timecode;
	FrameRate: number;
	bColorFraming: boolean;
	bRunningForward: boolean;
	bNewFrame: boolean;
	clone() : DropTimecode;
	static C(Other: UObject | any): DropTimecode;
	Conv_DropTimecodeToString(): string;
	static Conv_DropTimecodeToString(InTimecode: DropTimecode): string;
}

declare class LinearTimecodeComponent extends SceneComponent { 
	MediaPlayer: MediaPlayer;
	DropTimecode: DropTimecode;
	OnTimecodeChange: UnrealEngineMulticastDelegate<(Timecode: DropTimecode) => void>;
	static Load(ResourceName: string): LinearTimecodeComponent;
	static Find(Outer: UObject, ResourceName: string): LinearTimecodeComponent;
	static GetDefaultObject(): LinearTimecodeComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LinearTimecodeComponent;
	static SetDropTimecodeFrameNumber(Timecode: DropTimecode,FrameNumber: number,OutTimecode?: DropTimecode): {OutTimecode: DropTimecode};
	static GetDropTimeCodeFrameNumber(Timecode: DropTimecode,FrameNumber?: number): {FrameNumber: number};
	GetDropFrameNumber(): number;
	static C(Other: UObject | any): LinearTimecodeComponent;
}

declare class DropTimecodeToStringConversion extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): DropTimecodeToStringConversion;
	static Find(Outer: UObject, ResourceName: string): DropTimecodeToStringConversion;
	static GetDefaultObject(): DropTimecodeToStringConversion;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DropTimecodeToStringConversion;
	static Conv_DropTimecodeToString(InTimecode: DropTimecode): string;
	static C(Other: UObject | any): DropTimecodeToStringConversion;
}

declare class MovieSceneMediaSection extends MovieSceneSection { 
	MediaSource: MediaSource;
	bLooping: boolean;
	MediaTexture: MediaTexture;
	MediaSoundComponent: MediaSoundComponent;
	bUseExternalMediaPlayer: boolean;
	ExternalMediaPlayer: MediaPlayer;
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

declare class NetPropertyHook extends Property { 
	static Load(ResourceName: string): NetPropertyHook;
	static Find(Outer: UObject, ResourceName: string): NetPropertyHook;
	static GetDefaultObject(): NetPropertyHook;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NetPropertyHook;
	static C(Other: UObject | any): NetPropertyHook;
}

declare class UnitTestBase extends UObject { 
	static Load(ResourceName: string): UnitTestBase;
	static Find(Outer: UObject, ResourceName: string): UnitTestBase;
	static GetDefaultObject(): UnitTestBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestBase;
	static C(Other: UObject | any): UnitTestBase;
}

declare class UnitTask extends UObject { 
	static Load(ResourceName: string): UnitTask;
	static Find(Outer: UObject, ResourceName: string): UnitTask;
	static GetDefaultObject(): UnitTask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTask;
	static C(Other: UObject | any): UnitTask;
}

declare type EUnitTestVerification = 'Unverified' | 'VerifiedNotFixed' | 'VerifiedFixed' | 'VerifiedNeedsUpdate' | 'VerifiedUnreliable' | 'EUnitTestVerification_MAX';
declare var EUnitTestVerification : { Unverified:'Unverified',VerifiedNotFixed:'VerifiedNotFixed',VerifiedFixed:'VerifiedFixed',VerifiedNeedsUpdate:'VerifiedNeedsUpdate',VerifiedUnreliable:'VerifiedUnreliable',EUnitTestVerification_MAX:'EUnitTestVerification_MAX', };
declare class UnitTest extends UnitTestBase { 
	PeakMemoryUsage: any;
	TimeToPeakMem: number;
	LastExecutionTime: number;
	UnitTasks: UnitTask[];
	VerificationState: EUnitTestVerification;
	static Load(ResourceName: string): UnitTest;
	static Find(Outer: UObject, ResourceName: string): UnitTest;
	static GetDefaultObject(): UnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTest;
	static C(Other: UObject | any): UnitTest;
}

declare class ProcessUnitTest extends UnitTest { 
	static Load(ResourceName: string): ProcessUnitTest;
	static Find(Outer: UObject, ResourceName: string): ProcessUnitTest;
	static GetDefaultObject(): ProcessUnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProcessUnitTest;
	static C(Other: UObject | any): ProcessUnitTest;
}

declare class MinimalClient extends UObject { 
	static Load(ResourceName: string): MinimalClient;
	static Find(Outer: UObject, ResourceName: string): MinimalClient;
	static GetDefaultObject(): MinimalClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MinimalClient;
	static C(Other: UObject | any): MinimalClient;
}

declare class ClientUnitTest extends ProcessUnitTest { 
	MinClient: MinimalClient;
	static Load(ResourceName: string): ClientUnitTest;
	static Find(Outer: UObject, ResourceName: string): ClientUnitTest;
	static GetDefaultObject(): ClientUnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClientUnitTest;
	static C(Other: UObject | any): ClientUnitTest;
}

declare class IPClient extends ClientUnitTest { 
	static Load(ResourceName: string): IPClient;
	static Find(Outer: UObject, ResourceName: string): IPClient;
	static GetDefaultObject(): IPClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IPClient;
	static C(Other: UObject | any): IPClient;
}

declare class HTML5Client extends IPClient { 
	static Load(ResourceName: string): HTML5Client;
	static Find(Outer: UObject, ResourceName: string): HTML5Client;
	static GetDefaultObject(): HTML5Client;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5Client;
	static C(Other: UObject | any): HTML5Client;
}

declare class NUTActor extends Actor { 
	TempDelegate: UnrealEngineDelegate<(InNUTActor: NUTActor) => void>;
	static GetDefaultObject(): NUTActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NUTActor;
	Wait(Seconds: any): void;
	UnitTravel(Dest: string): void;
	UnitSeamlessTravel(Dest: string): void;
	ServerReceiveText(InText: string): void;
	ServerExecute(InDelegate: string): void;
	ServerClientStillAlive(): void;
	ServerClientPing(): void;
	ServerAdmin(Command: string): void;
	NetMulticastPing(): void;
	NetFlush(): void;
	Admin(Command: string): void;
	static C(Other: UObject | any): NUTActor;
}

declare class NUTGlobals extends UObject { 
	EventWatcher: NetConnection;
	ServerPortOffset: number;
	UnitTestNetDriverCount: number;
	DumpRPCMatches: string[];
	UnitTestModules: string[];
	UnloadedModules: string[];
	static Load(ResourceName: string): NUTGlobals;
	static Find(Outer: UObject, ResourceName: string): NUTGlobals;
	static GetDefaultObject(): NUTGlobals;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NUTGlobals;
	static C(Other: UObject | any): NUTGlobals;
}

declare class SteamClient extends IPClient { 
	static Load(ResourceName: string): SteamClient;
	static Find(Outer: UObject, ResourceName: string): SteamClient;
	static GetDefaultObject(): SteamClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamClient;
	static C(Other: UObject | any): SteamClient;
}

declare class UnitTestActorChannel extends ActorChannel { 
	static Load(ResourceName: string): UnitTestActorChannel;
	static Find(Outer: UObject, ResourceName: string): UnitTestActorChannel;
	static GetDefaultObject(): UnitTestActorChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestActorChannel;
	static C(Other: UObject | any): UnitTestActorChannel;
}

declare class UnitTestChannel extends Channel { 
	static Load(ResourceName: string): UnitTestChannel;
	static Find(Outer: UObject, ResourceName: string): UnitTestChannel;
	static GetDefaultObject(): UnitTestChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestChannel;
	static C(Other: UObject | any): UnitTestChannel;
}

declare class UnitTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): UnitTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): UnitTestCommandlet;
	static GetDefaultObject(): UnitTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestCommandlet;
	static C(Other: UObject | any): UnitTestCommandlet;
}

declare class UnitTestManager extends UObject { 
	bCapUnitTestCount: boolean;
	MaxUnitTestCount: number;
	bCapUnitTestMemory: boolean;
	MaxMemoryPercent: number;
	AutoCloseMemoryPercent: number;
	MaxAutoCloseCount: number;
	UnitTestSessionCount: any;
	PendingUnitTests: UnrealEngineClass[];
	ActiveUnitTests: UnitTest[];
	FinishedUnitTests: UnitTest[];
	static Load(ResourceName: string): UnitTestManager;
	static Find(Outer: UObject, ResourceName: string): UnitTestManager;
	static GetDefaultObject(): UnitTestManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestManager;
	static C(Other: UObject | any): UnitTestManager;
}

declare class UnitTestPackageMap extends PackageMapClient { 
	static Load(ResourceName: string): UnitTestPackageMap;
	static Find(Outer: UObject, ResourceName: string): UnitTestPackageMap;
	static GetDefaultObject(): UnitTestPackageMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestPackageMap;
	static C(Other: UObject | any): UnitTestPackageMap;
}

declare class VMReflection extends UnitTest { 
	static Load(ResourceName: string): VMReflection;
	static Find(Outer: UObject, ResourceName: string): VMReflection;
	static GetDefaultObject(): VMReflection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMReflection;
	static C(Other: UObject | any): VMReflection;
}

declare class VMTestClassA extends UObject { 
	AObjectRef: UObject;
	ByteProp: number;
	UInt16Prop: any;
	UInt32Prop: any;
	UInt64Prop: any;
	Int8Prop: any;
	Int16Prop: any;
	Int32Prop: number;
	Int64Prop: any;
	FloatProp: number;
	DoubleProp: any;
	bBoolPropA: boolean;
	bBoolPropB: boolean;
	bBoolPropC: boolean;
	bBoolPropD: boolean;
	bBoolPropE: boolean;
	NameProp: string;
	StringProp: string;
	TextProp: string;
	BytePropArray: number;
	ObjectPropArray: UObject;
	DynBytePropArray: number[];
	DynBoolPropArray: boolean[];
	DynObjectPropArray: UObject[];
	DynNamePropArray: string[];
	DynDoublePropArray: any[];
	DynFloatPropArray: number[];
	DynInt16PropArray: any[];
	DynInt64PropArray: any[];
	DynInt8PropArray: any[];
	DynIntPropArray: number[];
	DynUInt16PropArray: any[];
	DynUIntPropArray: any[];
	DynUInt64PropArray: any[];
	DynStringPropArray: string[];
	DynTextPropArray: string[];
	DynClassPropArray: UnrealEngineClass[];
	DynPawnPropArray: Pawn[];
	StructProp: Vector;
	StructPropArray: Vector;
	DynStructPropArray: Vector[];
	static Load(ResourceName: string): VMTestClassA;
	static Find(Outer: UObject, ResourceName: string): VMTestClassA;
	static GetDefaultObject(): VMTestClassA;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMTestClassA;
	static C(Other: UObject | any): VMTestClassA;
}

declare class VMTestClassB extends UObject { 
	BObjectRef: UObject;
	static Load(ResourceName: string): VMTestClassB;
	static Find(Outer: UObject, ResourceName: string): VMTestClassB;
	static GetDefaultObject(): VMTestClassB;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMTestClassB;
	static C(Other: UObject | any): VMTestClassB;
}

declare class FTextCrash extends ClientUnitTest { 
	static Load(ResourceName: string): FTextCrash;
	static Find(Outer: UObject, ResourceName: string): FTextCrash;
	static GetDefaultObject(): FTextCrash;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FTextCrash;
	static C(Other: UObject | any): FTextCrash;
}

declare class NetBitsTest extends UnitTest { 
	static Load(ResourceName: string): NetBitsTest;
	static Find(Outer: UObject, ResourceName: string): NetBitsTest;
	static GetDefaultObject(): NetBitsTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NetBitsTest;
	static C(Other: UObject | any): NetBitsTest;
}

declare class UTT61_DebugReplicateData extends ClientUnitTest { 
	static Load(ResourceName: string): UTT61_DebugReplicateData;
	static Find(Outer: UObject, ResourceName: string): UTT61_DebugReplicateData;
	static GetDefaultObject(): UTT61_DebugReplicateData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UTT61_DebugReplicateData;
	static C(Other: UObject | any): UTT61_DebugReplicateData;
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

declare class AudioCaptureComponent extends SynthComponent { 
	JitterLatencyFrames: number;
	static Load(ResourceName: string): AudioCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureComponent;
	static GetDefaultObject(): AudioCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureComponent;
	static C(Other: UObject | any): AudioCaptureComponent;
}

declare class ComponentReference { 
	OtherActor: Actor;
	ComponentProperty: string;
	clone() : ComponentReference;
	static C(Other: UObject | any): ComponentReference;
}

declare class CableComponent extends MeshComponent { 
	bAttachStart: boolean;
	bAttachEnd: boolean;
	AttachEndTo: ComponentReference;
	AttachEndToSocketName: string;
	EndLocation: Vector;
	CableLength: number;
	NumSegments: number;
	SubstepTime: number;
	SolverIterations: number;
	bEnableStiffness: boolean;
	bEnableCollision: boolean;
	CollisionFriction: number;
	CableForce: Vector;
	CableGravityScale: number;
	CableWidth: number;
	NumSides: number;
	TileMaterial: number;
	static Load(ResourceName: string): CableComponent;
	static Find(Outer: UObject, ResourceName: string): CableComponent;
	static GetDefaultObject(): CableComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableComponent;
	SetAttachEndTo(Actor: Actor,ComponentProperty: string,SocketName: string): void;
	GetCableParticleLocations(Locations?: Vector[]): {Locations: Vector[]};
	GetAttachedComponent(): SceneComponent;
	GetAttachedActor(): Actor;
	static C(Other: UObject | any): CableComponent;
}

declare class CableActor extends Actor { 
	CableComponent: CableComponent;
	static GetDefaultObject(): CableActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableActor;
	static C(Other: UObject | any): CableActor;
}

declare class CustomMeshTriangle { 
	Vertex0: Vector;
	Vertex1: Vector;
	Vertex2: Vector;
	clone() : CustomMeshTriangle;
	static C(Other: UObject | any): CustomMeshTriangle;
}

declare class CustomMeshComponent extends MeshComponent { 
	static Load(ResourceName: string): CustomMeshComponent;
	static Find(Outer: UObject, ResourceName: string): CustomMeshComponent;
	static GetDefaultObject(): CustomMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomMeshComponent;
	SetCustomMeshTriangles(Triangles: CustomMeshTriangle[]): boolean;
	ClearCustomMeshTriangles(): void;
	AddCustomMeshTriangles(Triangles: CustomMeshTriangle[]): void;
	static C(Other: UObject | any): CustomMeshComponent;
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

declare type ESteamVRTouchDPadMapping = 'FaceButtons' | 'ThumbstickDirections' | 'Disabled' | 'ESteamVRTouchDPadMapping_MAX';
declare var ESteamVRTouchDPadMapping : { FaceButtons:'FaceButtons',ThumbstickDirections:'ThumbstickDirections',Disabled:'Disabled',ESteamVRTouchDPadMapping_MAX:'ESteamVRTouchDPadMapping_MAX', };
declare class SteamVRControllerLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SteamVRControllerLibrary;
	static Find(Outer: UObject, ResourceName: string): SteamVRControllerLibrary;
	static GetDefaultObject(): SteamVRControllerLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRControllerLibrary;
	static SetTouchDPadMapping(NewMapping: ESteamVRTouchDPadMapping): void;
	static C(Other: UObject | any): SteamVRControllerLibrary;
}

declare class JavascriptPinParams { 
	ContainerType: EPinContainerType;
	bIsReference: boolean;
	bIsConst: boolean;
	index: number;
	clone() : JavascriptPinParams;
	static C(Other: UObject | any): JavascriptPinParams;
}

declare class JavascriptGraphEdNode extends EdGraphNode { 
	BackgroundColor: SlateColor;
	GraphNode: UObject;
	IsTitleOnly: boolean;
	Bidirectional: boolean;
	PriorityOrder: number;
	static Load(ResourceName: string): JavascriptGraphEdNode;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode;
	static GetDefaultObject(): JavascriptGraphEdNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode;
	UpdateSlate(): void;
	SetTitleSelectionMode(TitleHeight: number): void;
	ResetTitleSelectionMode(): void;
	RemovePinByName(PinName: string): boolean;
	RemovePin(Pin: JavascriptEdGraphPin): boolean;
	GetNumOfPins(Direction: EEdGraphPinDirection): number;
	GetDesiredSize(): Vector2D;
	CreatePin(Dir: EEdGraphPinDirection,PinCategory: string,PinSubCategory: string,PinSubCategoryObject: UObject,PinName: string,PinToolTip: string,InPinParams: JavascriptPinParams): JavascriptEdGraphPin;
	static C(Other: UObject | any): JavascriptGraphEdNode;
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
	bIsDebugging: boolean;
	clone() : JavascriptGraphMenuBuilder;
	static C(Other: UObject | any): JavascriptGraphMenuBuilder;
}

declare type ECanCreateConnectionResponse = 'CONNECT_RESPONSE_MAKE' | 'CONNECT_RESPONSE_DISALLOW' | 'CONNECT_RESPONSE_BREAK_OTHERS_A' | 'CONNECT_RESPONSE_BREAK_OTHERS_B' | 'CONNECT_RESPONSE_BREAK_OTHERS_AB' | 'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE' | 'CONNECT_RESPONSE_MAX';
declare var ECanCreateConnectionResponse : { CONNECT_RESPONSE_MAKE:'CONNECT_RESPONSE_MAKE',CONNECT_RESPONSE_DISALLOW:'CONNECT_RESPONSE_DISALLOW',CONNECT_RESPONSE_BREAK_OTHERS_A:'CONNECT_RESPONSE_BREAK_OTHERS_A',CONNECT_RESPONSE_BREAK_OTHERS_B:'CONNECT_RESPONSE_BREAK_OTHERS_B',CONNECT_RESPONSE_BREAK_OTHERS_AB:'CONNECT_RESPONSE_BREAK_OTHERS_AB',CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE:'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE',CONNECT_RESPONSE_MAX:'CONNECT_RESPONSE_MAX', };
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
	OnGetDefaultValueVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetSlateBrushName: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => string>;
	OnPinConnectionListChanged: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => void>;
	OnTryCreateConnection: UnrealEngineDelegate<(PinA: JavascriptEdGraphPin, PinB: JavascriptEdGraphPin) => void>;
	OnMouseEnter: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode) => void>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode) => void>;
	OnMouseMove: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Delta: Vector2D, bUserIsDragging: boolean, MouseZone: number) => void>;
	OnMouseButtonDown: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry) => void>;
	OnMouseButtonUp: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry) => void>;
	OnPerformSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptPerformSecondPassLayoutContainer>;
	OnRequiresSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnMoveTo: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, NewPosition: Vector2D) => boolean>;
	OnTakeCustomContentWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, OutUserWidget: JavascriptSlateWidget, OutLeftNodeBoxWidget: JavascriptSlateWidget, OutRightNodeBoxWidget: JavascriptSlateWidget, OutAltLeftNodeBoxWidget: JavascriptSlateWidget, OutAltRightNodeBoxWidget: JavascriptSlateWidget) => JavascriptSlateWidget>;
	OnGetValueWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetActualPinWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetPinStatusIndicator: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnDisableMakePins: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnUsingDefaultPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetPinLabelVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingAlternativeInputPinBox: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingAlternativeOutputPinBox: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingNodeWidgetMap: UnrealEngineDelegate<() => boolean>;
	OnDetermineWiringStyle: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => void>;
	OnComputeSplineTangent: UnrealEngineDelegate<(A: Vector2D, B: Vector2D) => Vector2D>;
	OnDrawSplineWithArrow: UnrealEngineDelegate<(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowRadius: Vector2D) => boolean>;
	OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<(A: Geometry, B: Geometry, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnDrawPreviewConnector: UnrealEngineDelegate<(PinGeometry: Geometry, StartPoint: Vector2D, Endpoint: Vector2D, Pin: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnTakeWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeTitleWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
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
	OnGetNodeComment: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => string>;
	OnSetNodeComment: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode, string: string) => void>;
	OnIsNodeComment: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEndUserInteraction: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateOutputSideAddButton: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnAddPinByAddButton: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnShouldAlwaysPurgeOnModification: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema;
	BreakSinglePinLink(SourcePin: JavascriptEdGraphPin,TargetPin: JavascriptEdGraphPin): void;
	BreakPinLinks(TargetPin: JavascriptEdGraphPin,bSendsNodeNotifcation: boolean): void;
	BreakNodeLinks(TargetNode: EdGraphNode): void;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema;
}

declare class JavascriptNodeCreator { 
	UNode: JavascriptGraphEdNode;
	clone() : JavascriptNodeCreator;
	static C(Other: UObject | any): JavascriptNodeCreator;
	Finalize(): {Creator: JavascriptNodeCreator};
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
}

declare class JavascriptGraphEdGraph extends EdGraph { 
	static Load(ResourceName: string): JavascriptGraphEdGraph;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdGraph;
	static GetDefaultObject(): JavascriptGraphEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdGraph;
	RebuildGenericGraph(): void;
	static C(Other: UObject | any): JavascriptGraphEdGraph;
	NodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
}

declare class JavascriptGraphEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptGraphEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorLibrary;
	static GetDefaultObject(): JavascriptGraphEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorLibrary;
	static TryConnection(Schema: EdGraphSchema,A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static SetPinType(Pin: JavascriptEdGraphPin,PinType: EdGraphPinType): void;
	static SetPinInfo(A: JavascriptEdGraphPin,InPinName: string,InPinToolTip: string): void;
	static SetNodeMetaData(Schema: EdGraphSchema,UNode: EdGraphNode,KeyValue: string): boolean;
	static ResizeNode(UNode: EdGraphNode,NewSize: Vector2D): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static MakeLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static IsValid(A: JavascriptEdGraphPin): boolean;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static GetPinType(A: JavascriptEdGraphPin): EdGraphPinType;
	static GetPins(UNode: EdGraphNode): JavascriptEdGraphPin[];
	static GetPinName(A: JavascriptEdGraphPin): string;
	static GetPinGUID(A: JavascriptEdGraphPin): Guid;
	static GetPinContainerType(A: JavascriptEdGraphPin): EJavascriptPinContainerType;
	static GetOwningNode(A: JavascriptEdGraphPin): EdGraphNode;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
	static GetLinkedTo(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
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

declare class JavascriptGraphEditorWidget extends Widget { 
	EdGraph: JavascriptGraphEdGraph;
	OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) => void>;
	OnDropActor: UnrealEngineDelegate<(Actors: Actor[], Graph: EdGraph, Point: Vector2D) => void>;
	OnDisallowedPinConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => void>;
	OnSelectedNodesChanged: UnrealEngineDelegate<(Set: UObject[]) => void>;
	AppearanceInfo: JavascriptGraphAppearanceInfo;
	CommandList: JavascriptUICommandList;
	static Load(ResourceName: string): JavascriptGraphEditorWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget;
	static GetDefaultObject(): JavascriptGraphEditorWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget;
	SetViewLocation(Location: Vector2D,ZoomAmount: number): void;
	SetNodeSelection(UNode: EdGraphNode,bSelect: boolean): void;
	SetGraph(InEdGraph: JavascriptGraphEdGraph): void;
	SelectAllNodes(): void;
	static NewGraph(ParentScope: UObject): JavascriptGraphEdGraph;
	JumpToPin(JumpToMe: JavascriptEdGraphPin): void;
	JumpToNode(JumpToMe: EdGraphNode,bRequestRename: boolean,bSelectNode: boolean): void;
	GetViewLocation(OutLocation?: Vector2D,OutZoomAmount?: number): {OutLocation: Vector2D, OutZoomAmount: number};
	GetSelectedNodes(): UObject[];
	GetPasteLocation(): Vector2D;
	ClearSelectionSet(): void;
	static C(Other: UObject | any): JavascriptGraphEditorWidget;
}

declare class JavascriptGraphPinObject extends Widget { 
	OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
	OnGetDefaultValue: UnrealEngineDelegate<() => UObject>;
	OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
	static Load(ResourceName: string): JavascriptGraphPinObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphPinObject;
	static GetDefaultObject(): JavascriptGraphPinObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphPinObject;
	static C(Other: UObject | any): JavascriptGraphPinObject;
}

declare class JavascriptTextProperty { 
	Key: string;
	Namespace: string;
	Value: string;
	TableId: string;
	clone() : JavascriptTextProperty;
	static C(Other: UObject | any): JavascriptTextProperty;
}

declare class JavascriptGraphTextPropertyEditableTextBox extends Widget { 
	OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
	OnGetDefaultValue: UnrealEngineDelegate<() => JavascriptTextProperty>;
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
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	static Load(ResourceName: string): JavascriptEditorTab;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
	static GetDefaultObject(): JavascriptEditorTab;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	Discard(): void;
	Commit(): void;
	CloseTab(Widget: Widget): void;
	static C(Other: UObject | any): JavascriptEditorTab;
}

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
	static BeginSection(Name: string,text: string): void;
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

declare class JavascriptCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptCommandlet;
	static GetDefaultObject(): JavascriptCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCommandlet;
	static C(Other: UObject | any): JavascriptCommandlet;
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
	SelectedProps(): void;
	ResumePIE(bIsSimulating: boolean): void;
	RefreshPrimitiveStatsBrowser(): void;
	RefreshLayerBrowser(): void;
	RefreshEditor(): void;
	RefreshAllBrowsers(): void;
	RedrawAllViewports(): void;
	PropertySelectionChange(): void;
	PreSaveWorld_Friendly(SaveFlags: number,World: World): void;
	PreBeginPIE(bIsSimulating: boolean): void;
	PostSaveWorld_Friendly(SaveFlags: number,World: World,bSuccess: boolean): void;
	PostLandscapeLayerUpdated(): void;
	OnShutdownPostPackagesSaved(): void;
	OnPathRemoved(Path: string): void;
	OnPathAdded(Path: string): void;
	OnObjectReimported(UObject: UObject): void;
	OnNewAssetCreated(InFactory: Factory): void;
	OnNewActorsDropped(DroppedObjects: UObject[],OutNewActors: Actor[]): void;
	OnMapOpened(Filename: string,bAsTemplate: boolean): void;
	OnLightingBuildStarted(): void;
	OnLightingBuildKept(): void;
	OnInMemoryAssetDeleted(InObject: UObject): void;
	OnInMemoryAssetCreated(InObject: UObject): void;
	OnGridSnappingChanged(bGridEnabled: boolean,GridSize: number): void;
	OnFocusViewportOnActors(Actors: Actor[]): void;
	OnFinishPickingBlueprintClass(InClass: UnrealEngineClass): void;
	OnFilesLoaded(): void;
	OnFileLoadProgressUpdated_Friendly(NumTotalAssets: number,NumAssetsProcessedByAssetRegistry: number,NumAssetsPendingDataLoad: number,bIsDiscoveringAssetFiles: boolean): void;
	OnEditorCameraMoved(ViewLocation: Vector,ViewRotation: Rotator,ViewportType: ELevelViewportType,ViewIndex: number): void;
	OnDollyPerspectiveCamera(Drag: Vector,ViewIndex: number): void;
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
	HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
	HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
	HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
	HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
	Activate(bEnable: boolean): void;
	static C(Other: UObject | any): JavascriptEditorInputProcessor;
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

declare class JavascriptViewportClick { 
	clone() : JavascriptViewportClick;
	static C(Other: UObject | any): JavascriptViewportClick;
	GetClickPos(): IntPoint;
	GetDirection(): Vector;
	GetEvent(): EInputEvent;
	GetKey(): Key;
	GetOrigin(): Vector;
	IsAltDown(): boolean;
	IsControlDown(): boolean;
	IsShiftDown(): boolean;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
}

declare class JavascriptHitProxy { 
	clone() : JavascriptHitProxy;
	static C(Other: UObject | any): JavascriptHitProxy;
	GetActor(): Actor;
	GetName(): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static GetName(Proxy: JavascriptHitProxy): string;
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
	static SetIsTemporarilyHiddenInEditor(Actor: Actor,bIsHidden: boolean): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
	static SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static SetFolderPath_Recursively(Actor: Actor,NewFolderPath: string): void;
	static SetFolderPath(Actor: Actor,NewFolderPath: string): void;
	static SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number,PaintingRestriction: ELandscapeLayerPaintingRestriction): void;
	static SetActorLabel(Actor: Actor,NewActorLabel: string,bMarkDirty: boolean): void;
	static Select(USelection: USelection,InObject: UObject): void;
	static SavePackage(Package: Package,Filename: string): boolean;
	static RequestEndPlayMapInPIE(): void;
	static ReplaceAnimNotifyClass(Sequence: AnimSequenceBase,NotifyName: string,NewNotifyName: string,NewNotifyClass: UObject): number;
	static RemoveLevelInstance(World: World): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static RemoveComponentFromBlueprint(Blueprint: Blueprint,RemoveComponent: ActorComponent,bPromoteChildren: boolean): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static PostEditChange(InObject: UObject): void;
	static OpenPopupWindow(Widget: Widget,PopupDesiredSize: Vector2D,HeadingText: string): void;
	static OpenFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static OpenEditorForAssetByPath(AssetPathName: string,ObjectName: string): void;
	static OpenEditorForAsset(Asset: UObject): boolean;
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
	static GetTransaction(Transactor: Transactor,QueueIndex: number): JavascriptTransaction;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetTitle(Transaction: JavascriptTransaction): string;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
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
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetEngine(): EditorEngine;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetDefaultBrush(World: World): Brush;
	static GetContext(Transaction: JavascriptTransaction): string;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetAssetsByType(Types: string[],bRecursiveClasses: boolean): AssetData[];
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetActorLabel(Actor: Actor): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static FindWorldInPackage(Package: Package): World;
	static ExportNavigation(InWorld: World,Path: string): string;
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
	static DeselectAll(USelection: USelection,InClass: UnrealEngineClass): void;
	static Deselect(USelection: USelection,InObject: UObject): void;
	static DeletePackage(Package: Package): boolean;
	static csgAdd(DefaultBrush: Brush,PolyFlags: number,BrushType: EBrushType): Brush;
	static CreatePropertyEditorToolkit(ObjectsForPropertiesMenu: UObject[]): void;
	static CreateLogListingWidget(InLogName: string): JavascriptSlateWidget;
	static CreateLogListing(InLogName: string,InLabel: string): void;
	static CreateBrushForVolumeActor(NewActor: Volume,BrushBuilder: BrushBuilder): void;
	static CompileBlueprint(Blueprint: Blueprint): void;
	static ClearActorLabel(Actor: Actor): void;
	static Build(Builder: BrushBuilder,InWorld: World,InBrush: Brush): boolean;
	static BroadcastHotReload(): void;
	static BroadcastAssetCreated(NewAsset: UObject): void;
	static AddWhitelistedObject(InObject: UObject): void;
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
	SetLightDirection(InLightDir: Rotator): void;
	SetLightColor(LightColor: Color): void;
	SetLightBrightness(LightBrightness: number): void;
	SetFloorOffset(InFloorOffset: number): void;
	SetEngineShowFlags(In: string): boolean;
	SetCameraSpeedSetting(SpeedSetting: number): void;
	SetBackgroundColor(BackgroundColor: LinearColor): void;
	RestoreRealtime(bAllowDisable: boolean): void;
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

declare class JavascriptEdViewport { 
	clone() : JavascriptEdViewport;
	static C(Other: UObject | any): JavascriptEdViewport;
	GetHitProxy(): JavascriptHitProxy;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
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
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
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

declare type EJSCheckBoxState = 'Unchecked' | 'Checked' | 'Undetermined' | 'EJSCheckBoxState_MAX';
declare var EJSCheckBoxState : { Unchecked:'Unchecked',Checked:'Checked',Undetermined:'Undetermined',EJSCheckBoxState_MAX:'EJSCheckBoxState_MAX', };
declare class JavascriptNotification extends UObject { 
	text: string;
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

declare type EPropertyAccessResult = 'MultipleValues' | 'Fail' | 'Success' | 'EPropertyAccessResult_MAX';
declare var EPropertyAccessResult : { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success',EPropertyAccessResult_MAX:'EPropertyAccessResult_MAX', };
declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject | any): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetProperty(): Property;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	SetOnPropertyValueChanged(Custom: JavascriptPropertyCustomization): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Custom: JavascriptPropertyCustomization): void;
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
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject | any): JavascriptDetailPropertyRow;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject | any): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
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
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Custom: JavascriptPropertyCustomization): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptPropertyCustomizationLibrary;
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
	GetTotalFrameCount(): any;
	GetPlaybackPosition(): number;
	GetFramesPerSecond(): number;
	static C(Other: UObject | any): JavascriptScrubControlPanel;
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
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static GetDefaultObject(): PropertyEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	IsPropertyVisible(PropertName: string,ParentPropertyName: string): boolean;
	IsPropertyReadOnly(PropertyName: string,ParentPropertyName: string): boolean;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): PropertyEditor;
}

declare class MockAI extends UObject { 
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
	static Load(ResourceName: string): TestBTService_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTService_Log;
	static GetDefaultObject(): TestBTService_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTService_Log;
	static C(Other: UObject | any): TestBTService_Log;
}

declare class TestBTTask_LatentWithFlags extends BTTaskNode { 
	LogIndexExecuteStart: number;
	LogIndexExecuteFinish: number;
	LogIndexAbortStart: number;
	LogIndexAbortFinish: number;
	ExecuteTicks: number;
	AbortTicks: number;
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
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetValue;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetValue;
	static GetDefaultObject(): TestBTTask_SetValue;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetValue;
	static C(Other: UObject | any): TestBTTask_SetValue;
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

declare type EPinnedCommandListType = 'Command' | 'CustomWidget' | 'EPinnedCommandListType_MAX';
declare var EPinnedCommandListType : { Command:'Command',CustomWidget:'CustomWidget',EPinnedCommandListType_MAX:'EPinnedCommandListType_MAX', };
declare class PinnedCommandListCommand { 
	Name: string;
	Binding: string;
	Type: EPinnedCommandListType;
	clone() : PinnedCommandListCommand;
	static C(Other: UObject | any): PinnedCommandListCommand;
}

declare class PinnedCommandListContext { 
	Name: string;
	Commands: PinnedCommandListCommand[];
	clone() : PinnedCommandListContext;
	static C(Other: UObject | any): PinnedCommandListContext;
}

declare class PinnedCommandListSettings extends UObject { 
	Contexts: PinnedCommandListContext[];
	static Load(ResourceName: string): PinnedCommandListSettings;
	static Find(Outer: UObject, ResourceName: string): PinnedCommandListSettings;
	static GetDefaultObject(): PinnedCommandListSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PinnedCommandListSettings;
	static C(Other: UObject | any): PinnedCommandListSettings;
}

declare class AnimationEditorPreviewActor extends Actor { 
	static GetDefaultObject(): AnimationEditorPreviewActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationEditorPreviewActor;
	static C(Other: UObject | any): AnimationEditorPreviewActor;
}

declare class PersonaPreviewSceneController extends UObject { 
	static Load(ResourceName: string): PersonaPreviewSceneController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneController;
	static GetDefaultObject(): PersonaPreviewSceneController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneController;
	static C(Other: UObject | any): PersonaPreviewSceneController;
}

declare class PersonaPreviewSceneAnimationController extends PersonaPreviewSceneController { 
	Animation: AnimationAsset;
	static Load(ResourceName: string): PersonaPreviewSceneAnimationController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneAnimationController;
	static GetDefaultObject(): PersonaPreviewSceneAnimationController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneAnimationController;
	static C(Other: UObject | any): PersonaPreviewSceneAnimationController;
}

declare class PersonaPreviewSceneDefaultController extends PersonaPreviewSceneController { 
	static Load(ResourceName: string): PersonaPreviewSceneDefaultController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneDefaultController;
	static GetDefaultObject(): PersonaPreviewSceneDefaultController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneDefaultController;
	static C(Other: UObject | any): PersonaPreviewSceneDefaultController;
}

declare class PersonaPreviewSceneDescription extends UObject { 
	PreviewController: UnrealEngineClass;
	PreviewControllerInstance: PersonaPreviewSceneController;
	PreviewControllerInstances: PersonaPreviewSceneController[];
	PreviewMesh: SkeletalMesh;
	AdditionalMeshes: DataAsset;
	DefaultAdditionalMeshes: PreviewMeshCollection;
	static Load(ResourceName: string): PersonaPreviewSceneDescription;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneDescription;
	static GetDefaultObject(): PersonaPreviewSceneDescription;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneDescription;
	static C(Other: UObject | any): PersonaPreviewSceneDescription;
}

declare class PersonaPreviewSceneRefPoseController extends PersonaPreviewSceneController { 
	bResetBoneTransforms: boolean;
	static Load(ResourceName: string): PersonaPreviewSceneRefPoseController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneRefPoseController;
	static GetDefaultObject(): PersonaPreviewSceneRefPoseController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneRefPoseController;
	static C(Other: UObject | any): PersonaPreviewSceneRefPoseController;
}

declare class GlobalEditorUtilityBase extends UObject { 
	HelpText: string;
	bDirtiedSelectionSet: boolean;
	bAutoRunDefaultAction: boolean;
	OnEachSelectedActor: UnrealEngineMulticastDelegate<(Actor: Actor, index: number) => void>;
	OnEachSelectedAsset: UnrealEngineMulticastDelegate<(Asset: UObject, index: number) => void>;
	static Load(ResourceName: string): GlobalEditorUtilityBase;
	static Find(Outer: UObject, ResourceName: string): GlobalEditorUtilityBase;
	static GetDefaultObject(): GlobalEditorUtilityBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GlobalEditorUtilityBase;
	SetActorSelectionState(Actor: Actor,bShouldBeSelected: boolean): void;
	SelectNothing(): void;
	RenameAsset(Asset: UObject,NewName: string): void;
	OnDefaultActionClicked(): void;
	GetSelectionSet(): Actor[];
	GetSelectionBounds(Origin?: Vector,BoxExtent?: Vector,SphereRadius?: number): {Origin: Vector, BoxExtent: Vector, SphereRadius: number};
	GetSelectedAssets(): UObject[];
	GetEditorUserSettings(): EditorPerProjectUserSettings;
	GetActorReference(PathToActor: string): Actor;
	ForEachSelectedAsset(): void;
	ForEachSelectedActor(): void;
	ClearActorSelectionSet(): void;
	static C(Other: UObject | any): GlobalEditorUtilityBase;
}

declare class ActorActionUtility extends GlobalEditorUtilityBase { 
	static Load(ResourceName: string): ActorActionUtility;
	static Find(Outer: UObject, ResourceName: string): ActorActionUtility;
	static GetDefaultObject(): ActorActionUtility;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorActionUtility;
	GetSupportedClass(): UnrealEngineClass;
	static C(Other: UObject | any): ActorActionUtility;
}

declare class AssetActionUtility extends GlobalEditorUtilityBase { 
	static Load(ResourceName: string): AssetActionUtility;
	static Find(Outer: UObject, ResourceName: string): AssetActionUtility;
	static GetDefaultObject(): AssetActionUtility;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetActionUtility;
	GetSupportedClass(): UnrealEngineClass;
	static C(Other: UObject | any): AssetActionUtility;
}

declare class EditorUtilityBlueprint extends Blueprint { 
	static Load(ResourceName: string): EditorUtilityBlueprint;
	static Find(Outer: UObject, ResourceName: string): EditorUtilityBlueprint;
	static GetDefaultObject(): EditorUtilityBlueprint;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorUtilityBlueprint;
	static C(Other: UObject | any): EditorUtilityBlueprint;
}

declare class EditorUtilityBlueprintFactory extends Factory { 
	ParentClass: UnrealEngineClass;
	static Load(ResourceName: string): EditorUtilityBlueprintFactory;
	static Find(Outer: UObject, ResourceName: string): EditorUtilityBlueprintFactory;
	static GetDefaultObject(): EditorUtilityBlueprintFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorUtilityBlueprintFactory;
	static C(Other: UObject | any): EditorUtilityBlueprintFactory;
}

declare class PlacedEditorUtilityBase extends Actor { 
	HelpText: string;
	static GetDefaultObject(): PlacedEditorUtilityBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlacedEditorUtilityBase;
	SetLevelViewportCameraInfo(CameraLocation: Vector,CameraRotation: Rotator): void;
	SetActorSelectionState(Actor: Actor,bShouldBeSelected: boolean): void;
	SelectNothing(): void;
	GetSelectionSet(): Actor[];
	GetLevelViewportCameraInfo(CameraLocation?: Vector,CameraRotation?: Rotator): {CameraLocation: Vector, CameraRotation: Rotator, $: boolean};
	GetActorReference(PathToActor: string): Actor;
	ClearActorSelectionSet(): void;
	static C(Other: UObject | any): PlacedEditorUtilityBase;
}

declare class LocalizationDashboardSettings extends UObject { 
	static Load(ResourceName: string): LocalizationDashboardSettings;
	static Find(Outer: UObject, ResourceName: string): LocalizationDashboardSettings;
	static GetDefaultObject(): LocalizationDashboardSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationDashboardSettings;
	static C(Other: UObject | any): LocalizationDashboardSettings;
}

declare type EMeshInstancingReplacementMethod = 'RemoveOriginalActors' | 'KeepOriginalActorsAsEditorOnly' | 'EMeshInstancingReplacementMethod_MAX';
declare var EMeshInstancingReplacementMethod : { RemoveOriginalActors:'RemoveOriginalActors',KeepOriginalActorsAsEditorOnly:'KeepOriginalActorsAsEditorOnly',EMeshInstancingReplacementMethod_MAX:'EMeshInstancingReplacementMethod_MAX', };
declare class MeshInstancingSettings { 
	ActorClassToUse: UnrealEngineClass;
	InstanceReplacementThreshold: number;
	MeshReplacementMethod: EMeshInstancingReplacementMethod;
	bSkipMeshesWithVertexColors: boolean;
	bUseHLODVolumes: boolean;
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

declare type EAndroidInstallLocation = 'InternalOnly' | 'PreferExternal' | 'Auto' | 'EAndroidInstallLocation_MAX';
declare var EAndroidInstallLocation : { InternalOnly:'InternalOnly',PreferExternal:'PreferExternal',Auto:'Auto',EAndroidInstallLocation_MAX:'EAndroidInstallLocation_MAX', };
declare type EAndroidScreenOrientation = 'Portrait' | 'ReversePortrait' | 'SensorPortrait' | 'Landscape' | 'ReverseLandscape' | 'SensorLandscape' | 'Sensor' | 'FullSensor' | 'EAndroidScreenOrientation_MAX';
declare var EAndroidScreenOrientation : { Portrait:'Portrait',ReversePortrait:'ReversePortrait',SensorPortrait:'SensorPortrait',Landscape:'Landscape',ReverseLandscape:'ReverseLandscape',SensorLandscape:'SensorLandscape',Sensor:'Sensor',FullSensor:'FullSensor',EAndroidScreenOrientation_MAX:'EAndroidScreenOrientation_MAX', };
declare type EAndroidAntVerbosity = 'Quiet' | 'Normal' | 'Verbose' | 'EAndroidAntVerbosity_MAX';
declare var EAndroidAntVerbosity : { Quiet:'Quiet',Normal:'Normal',Verbose:'Verbose',EAndroidAntVerbosity_MAX:'EAndroidAntVerbosity_MAX', };
declare type EAndroidDepthBufferPreference = 'Default' | 'Bits16' | 'Bits24' | 'Bits32' | 'EAndroidDepthBufferPreference_MAX';
declare var EAndroidDepthBufferPreference : { Default:'Default',Bits16:'Bits16',Bits24:'Bits24',Bits32:'Bits32',EAndroidDepthBufferPreference_MAX:'EAndroidDepthBufferPreference_MAX', };
declare type EGoogleVRCaps = 'Cardboard' | 'Daydream33' | 'Daydream63' | 'Daydream66' | 'EGoogleVRCaps_MAX';
declare var EGoogleVRCaps : { Cardboard:'Cardboard',Daydream33:'Daydream33',Daydream63:'Daydream63',Daydream66:'Daydream66',EGoogleVRCaps_MAX:'EGoogleVRCaps_MAX', };
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
declare class PlatformRuntimeAudioCompressionOverrides { 
	bOverrideCompressionTimes: boolean;
	DurationThreshold: number;
	MaxNumRandomBranches: number;
	SoundCueQualityIndex: number;
	clone() : PlatformRuntimeAudioCompressionOverrides;
	static C(Other: UObject | any): PlatformRuntimeAudioCompressionOverrides;
}

declare type EAndroidGraphicsDebugger = 'None' | 'Mali' | 'Adreno' | 'EAndroidGraphicsDebugger_MAX';
declare var EAndroidGraphicsDebugger : { None:'None',Mali:'Mali',Adreno:'Adreno',EAndroidGraphicsDebugger_MAX:'EAndroidGraphicsDebugger_MAX', };
declare class AndroidRuntimeSettings extends UObject { 
	PackageName: string;
	StoreVersion: number;
	ApplicationDisplayName: string;
	VersionDisplayName: string;
	MinSDKVersion: number;
	TargetSDKVersion: number;
	InstallLocation: EAndroidInstallLocation;
	bEnableGradle: boolean;
	bEnableLint: boolean;
	bPackageDataInsideApk: boolean;
	bCreateAllPlatformsInstall: boolean;
	bDisableVerifyOBBOnStartUp: boolean;
	bAllowLargeOBBFiles: boolean;
	bUseExternalFilesDir: boolean;
	Orientation: EAndroidScreenOrientation;
	MaxAspectRatio: number;
	AntVerbosity: EAndroidAntVerbosity;
	bFullScreen: boolean;
	bEnableNewKeyboard: boolean;
	DepthBufferPreference: EAndroidDepthBufferPreference;
	bValidateTextureFormats: boolean;
	ExtraManifestNodeTags: string[];
	ExtraApplicationNodeTags: string[];
	ExtraApplicationSettings: string;
	ExtraActivityNodeTags: string[];
	ExtraActivitySettings: string;
	ExtraPermissions: string[];
	bAndroidVoiceEnabled: boolean;
	bPackageForGearVR: boolean;
	bRemoveOSIG: boolean;
	GoogleVRCaps: EGoogleVRCaps[];
	bGoogleVRSustainedPerformance: boolean;
	KeyStore: string;
	KeyAlias: string;
	KeyStorePassword: string;
	KeyPassword: string;
	bBuildForArmV7: boolean;
	bBuildForArm64: boolean;
	bBuildForX8664: boolean;
	bBuildForES2: boolean;
	bBuildForES31: boolean;
	bSupportsVulkan: boolean;
	bDetectVulkanByDefault: boolean;
	bBuildWithHiddenSymbolVisibility: boolean;
	bSaveSymbols: boolean;
	bEnableGooglePlaySupport: boolean;
	bUseGetAccounts: boolean;
	GamesAppID: string;
	AchievementMap: GooglePlayAchievementMapping[];
	LeaderboardMap: GooglePlayLeaderboardMapping[];
	bSupportAdMob: boolean;
	AdMobAdUnitID: string;
	AdMobAdUnitIDs: string[];
	GooglePlayLicenseKey: string;
	GCMClientSenderID: string;
	bShowLaunchImage: boolean;
	bAllowIMU: boolean;
	bAllowControllers: boolean;
	AndroidAudio: EAndroidAudio;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	bResampleForDevice: boolean;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AndroidGraphicsDebugger: EAndroidGraphicsDebugger;
	MaliGraphicsDebuggerPath: DirectoryPath;
	bMultiTargetFormat_ETC1: boolean;
	bMultiTargetFormat_ETC1a: boolean;
	bMultiTargetFormat_ETC2: boolean;
	bMultiTargetFormat_DXT: boolean;
	bMultiTargetFormat_PVRTC: boolean;
	bMultiTargetFormat_ATC: boolean;
	bMultiTargetFormat_ASTC: boolean;
	TextureFormatPriority_ETC1: number;
	TextureFormatPriority_ETC1a: number;
	TextureFormatPriority_ETC2: number;
	TextureFormatPriority_DXT: number;
	TextureFormatPriority_PVRTC: number;
	TextureFormatPriority_ATC: number;
	TextureFormatPriority_ASTC: number;
	SDKAPILevelOverride: string;
	NDKAPILevelOverride: string;
	static Load(ResourceName: string): AndroidRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidRuntimeSettings;
	static GetDefaultObject(): AndroidRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidRuntimeSettings;
	static C(Other: UObject | any): AndroidRuntimeSettings;
}

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
declare type EIOSVersion = 'IOS_61' | 'IOS_7' | 'IOS_8' | 'IOS_9' | 'IOS_10' | 'IOS_11' | 'IOS_12' | 'IOS_MAX';
declare var EIOSVersion : { IOS_61:'IOS_61',IOS_7:'IOS_7',IOS_8:'IOS_8',IOS_9:'IOS_9',IOS_10:'IOS_10',IOS_11:'IOS_11',IOS_12:'IOS_12',IOS_MAX:'IOS_MAX', };
declare class IOSRuntimeSettings extends UObject { 
	bEnableGameCenterSupport: boolean;
	bEnableCloudKitSupport: boolean;
	bEnableRemoteNotificationsSupport: boolean;
	bEnableBackgroundFetch: boolean;
	bSupportsMetal: boolean;
	bSupportsMetalMRT: boolean;
	bCookPVRTCTextures: boolean;
	bCookASTCTextures: boolean;
	bSupportsOpenGLES2: boolean;
	EnableRemoteShaderCompile: boolean;
	bGeneratedSYMFile: boolean;
	bGeneratedSYMBundle: boolean;
	bGenerateCrashReportSymbols: boolean;
	bGenerateXCArchive: boolean;
	bDevForArmV7: boolean;
	bDevForArm64: boolean;
	bDevForArmV7S: boolean;
	bShipForArmV7: boolean;
	bShipForArm64: boolean;
	bShipForArmV7S: boolean;
	bShipForBitcode: boolean;
	AdditionalLinkerFlags: string;
	AdditionalShippingLinkerFlags: string;
	RemoteServerName: string;
	bUseRSync: boolean;
	RSyncUsername: string;
	DeltaCopyInstallPath: IOSBuildResourceDirectory;
	SSHPrivateKeyLocation: string;
	SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
	bTreatRemoteAsSeparateController: boolean;
	bAllowRemoteRotation: boolean;
	bUseRemoteAsVirtualJoystick: boolean;
	bUseRemoteAbsoluteDpadValues: boolean;
	bAllowControllers: boolean;
	bSupportsPortraitOrientation: boolean;
	bSupportsUpsideDownOrientation: boolean;
	bSupportsLandscapeLeftOrientation: boolean;
	bSupportsLandscapeRightOrientation: boolean;
	PreferredLandscapeOrientation: EIOSLandscapeOrientation;
	BundleDisplayName: string;
	BundleName: string;
	BundleIdentifier: string;
	VersionInfo: string;
	FrameRateLock: EPowerUsageFrameRateLock;
	MinimumiOSVersion: EIOSVersion;
	bSupportsIPad: boolean;
	bSupportsIPhone: boolean;
	AdditionalPlistData: string;
	bEnableFacebookSupport: boolean;
	FacebookAppID: string;
	MobileProvision: string;
	SigningCertificate: string;
	bAutomaticSigning: boolean;
	IOSTeamID: string;
	bDisableHTTPS: boolean;
	MaxShaderLanguageVersion: number;
	UseFastIntrinsics: boolean;
	EnableMathOptimisations: boolean;
	bUseIntegratedKeyboard: boolean;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	bResampleForDevice: boolean;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	static Load(ResourceName: string): IOSRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): IOSRuntimeSettings;
	static GetDefaultObject(): IOSRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IOSRuntimeSettings;
	static C(Other: UObject | any): IOSRuntimeSettings;
}

declare type ELuminFrameTimingHint = 'Unspecified' | 'Maximum' | 'FPS_60' | 'FPS_120' | 'ELuminFrameTimingHint_MAX';
declare var ELuminFrameTimingHint : { Unspecified:'Unspecified',Maximum:'Maximum',FPS_60:'FPS_60',FPS_120:'FPS_120',ELuminFrameTimingHint_MAX:'ELuminFrameTimingHint_MAX', };
declare type ELuminPrivilege = 'Invalid' | 'AudioRecognizer' | 'BatteryInfo' | 'CameraCapture' | 'WorldReconstruction' | 'InAppPurchase' | 'AudioCaptureMic' | 'DrmCertificates' | 'Occlusion' | 'LowLatencyLightwear' | 'Internet' | 'IdentityRead' | 'BackgroundDownload' | 'BackgroundUpload' | 'MediaDrm' | 'Media' | 'MediaMetadata' | 'PowerInfo' | 'LocalAreaNetwork' | 'VoiceInput' | 'Documents' | 'ConnectBackgroundMusicService' | 'RegisterBackgroundMusicService' | 'PwFoundObjRead' | 'NormalNotificationsUsage' | 'MusicService' | 'ControllerPose' | 'ScreensProvider' | 'GesturesSubscribe' | 'GesturesConfig' | 'ELuminPrivilege_MAX';
declare var ELuminPrivilege : { Invalid:'Invalid',AudioRecognizer:'AudioRecognizer',BatteryInfo:'BatteryInfo',CameraCapture:'CameraCapture',WorldReconstruction:'WorldReconstruction',InAppPurchase:'InAppPurchase',AudioCaptureMic:'AudioCaptureMic',DrmCertificates:'DrmCertificates',Occlusion:'Occlusion',LowLatencyLightwear:'LowLatencyLightwear',Internet:'Internet',IdentityRead:'IdentityRead',BackgroundDownload:'BackgroundDownload',BackgroundUpload:'BackgroundUpload',MediaDrm:'MediaDrm',Media:'Media',MediaMetadata:'MediaMetadata',PowerInfo:'PowerInfo',LocalAreaNetwork:'LocalAreaNetwork',VoiceInput:'VoiceInput',Documents:'Documents',ConnectBackgroundMusicService:'ConnectBackgroundMusicService',RegisterBackgroundMusicService:'RegisterBackgroundMusicService',PwFoundObjRead:'PwFoundObjRead',NormalNotificationsUsage:'NormalNotificationsUsage',MusicService:'MusicService',ControllerPose:'ControllerPose',ScreensProvider:'ScreensProvider',GesturesSubscribe:'GesturesSubscribe',GesturesConfig:'GesturesConfig',ELuminPrivilege_MAX:'ELuminPrivilege_MAX', };
declare class LuminRuntimeSettings extends UObject { 
	PackageName: string;
	ApplicationDisplayName: string;
	bIsScreensApp: boolean;
	FrameTimingHint: ELuminFrameTimingHint;
	bProtectedContent: boolean;
	bUseMobileRendering: boolean;
	bUseVulkan: boolean;
	bBuildWithNvTegraGfxDebugger: boolean;
	Certificate: FilePath;
	IconModelPath: DirectoryPath;
	IconPortalPath: DirectoryPath;
	VersionCode: number;
	MinimumOSVersion: string;
	AppPrivileges: ELuminPrivilege[];
	ExtraApplicationNodes: string[];
	ExtraComponentNodes: string[];
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	static Load(ResourceName: string): LuminRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): LuminRuntimeSettings;
	static GetDefaultObject(): LuminRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LuminRuntimeSettings;
	static C(Other: UObject | any): LuminRuntimeSettings;
}

declare class AndroidSDKSettings extends UObject { 
	SDKPath: DirectoryPath;
	NDKPath: DirectoryPath;
	ANTPath: DirectoryPath;
	JavaPath: DirectoryPath;
	SDKAPILevel: string;
	NDKAPILevel: string;
	static Load(ResourceName: string): AndroidSDKSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidSDKSettings;
	static GetDefaultObject(): AndroidSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject | any): AndroidSDKSettings;
}

declare class HTML5SDKSettings extends UObject { 
	static Load(ResourceName: string): HTML5SDKSettings;
	static Find(Outer: UObject, ResourceName: string): HTML5SDKSettings;
	static GetDefaultObject(): HTML5SDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5SDKSettings;
	static C(Other: UObject | any): HTML5SDKSettings;
}

declare type ECanvasScalingMode = 'Stretch' | 'Aspect' | 'Fixed' | 'ECanvasScalingMode_MAX';
declare var ECanvasScalingMode : { Stretch:'Stretch',Aspect:'Aspect',Fixed:'Fixed',ECanvasScalingMode_MAX:'ECanvasScalingMode_MAX', };
declare class HTML5TargetSettings extends UObject { 
	EnableIndexedDB: boolean;
	UseFixedTimeStep: boolean;
	EnableTracing: boolean;
	CanvasScalingMode: ECanvasScalingMode;
	Compressed: boolean;
	DeployServerPort: number;
	UploadToS3: boolean;
	S3Region: string;
	S3KeyID: string;
	S3SecretAccessKey: string;
	S3BucketName: string;
	S3FolderName: string;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	static Load(ResourceName: string): HTML5TargetSettings;
	static Find(Outer: UObject, ResourceName: string): HTML5TargetSettings;
	static GetDefaultObject(): HTML5TargetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5TargetSettings;
	static C(Other: UObject | any): HTML5TargetSettings;
}

declare class MagicLeapSDKSettings extends UObject { 
	MLSDKPath: DirectoryPath;
	static Load(ResourceName: string): MagicLeapSDKSettings;
	static Find(Outer: UObject, ResourceName: string): MagicLeapSDKSettings;
	static GetDefaultObject(): MagicLeapSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapSDKSettings;
	static C(Other: UObject | any): MagicLeapSDKSettings;
}

declare type ETutorialContent = 'None' | 'Text' | 'UDNExcerpt' | 'RichText' | 'ETutorialContent_MAX';
declare var ETutorialContent : { None:'None',Text:'Text',UDNExcerpt:'UDNExcerpt',RichText:'RichText',ETutorialContent_MAX:'ETutorialContent_MAX', };
declare class TutorialContent { 
	Type: ETutorialContent;
	Content: string;
	ExcerptName: string;
	text: string;
	clone() : TutorialContent;
	static C(Other: UObject | any): TutorialContent;
}

declare type ETutorialAnchorIdentifier = 'None' | 'NamedWidget' | 'Asset' | 'ETutorialAnchorIdentifier_MAX';
declare var ETutorialAnchorIdentifier : { None:'None',NamedWidget:'NamedWidget',Asset:'Asset',ETutorialAnchorIdentifier_MAX:'ETutorialAnchorIdentifier_MAX', };
declare class TutorialContentAnchor { 
	Type: ETutorialAnchorIdentifier;
	WrapperIdentifier: string;
	Asset: SoftObjectPath;
	bDrawHighlight: boolean;
	TabToFocusOrOpen: string;
	FriendlyName: string;
	GuidString: string;
	OuterName: string;
	clone() : TutorialContentAnchor;
	static C(Other: UObject | any): TutorialContentAnchor;
}

declare class TutorialWidgetContent { 
	Content: TutorialContent;
	WidgetAnchor: TutorialContentAnchor;
	HorizontalAlignment: EHorizontalAlignment;
	VerticalAlignment: EVerticalAlignment;
	Offset: Vector2D;
	ContentWidth: number;
	bAutoFocus: boolean;
	clone() : TutorialWidgetContent;
	static C(Other: UObject | any): TutorialWidgetContent;
}

declare class TutorialStage { 
	Name: string;
	Content: TutorialContent;
	WidgetContent: TutorialWidgetContent[];
	NextButtonText: string;
	BackButtonText: string;
	PlatformsToTest: string[];
	bInvertPlatformTest: boolean;
	clone() : TutorialStage;
	static C(Other: UObject | any): TutorialStage;
}

declare class EditorTutorial extends UObject { 
	Title: string;
	SortOrder: number;
	Icon: string;
	Texture: Texture2D;
	Category: string;
	SummaryContent: TutorialContent;
	Stages: TutorialStage[];
	PreviousTutorial: SoftClassPath;
	NextTutorial: SoftClassPath;
	bIsStandalone: boolean;
	AssetToUse: SoftObjectPath;
	ImportPath: string;
	bHideInBrowser: boolean;
	SearchTags: string;
	static Load(ResourceName: string): EditorTutorial;
	static Find(Outer: UObject, ResourceName: string): EditorTutorial;
	static GetDefaultObject(): EditorTutorial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorial;
	static SetEngineFolderVisibilty(bNewVisibility: boolean): void;
	static OpenAsset(Asset: UObject): void;
	OnTutorialStageStarted(StageName: string): void;
	OnTutorialStageEnded(StageName: string): void;
	OnTutorialLaunched(): void;
	OnTutorialClosed(): void;
	static GoToPreviousTutorialStage(): void;
	static GoToNextTutorialStage(): void;
	static GetEngineFolderVisibilty(): boolean;
	GetActorReference(PathToActor: string): Actor;
	static BeginTutorial(TutorialToStart: EditorTutorial,bRestart: boolean): void;
	static C(Other: UObject | any): EditorTutorial;
}

declare class EditorTutorialFactory extends Factory { 
	static Load(ResourceName: string): EditorTutorialFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialFactory;
	static GetDefaultObject(): EditorTutorialFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialFactory;
	static C(Other: UObject | any): EditorTutorialFactory;
}

declare class EditorTutorialImportFactory extends Factory { 
	static Load(ResourceName: string): EditorTutorialImportFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialImportFactory;
	static GetDefaultObject(): EditorTutorialImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialImportFactory;
	static C(Other: UObject | any): EditorTutorialImportFactory;
}

declare class TutorialCategory { 
	Identifier: string;
	Title: string;
	SortOrder: number;
	Description: string;
	Icon: string;
	Texture: SoftObjectPath;
	clone() : TutorialCategory;
	static C(Other: UObject | any): TutorialCategory;
}

declare class TutorialContext { 
	Context: string;
	BrowserFilter: string;
	AttractTutorial: SoftClassPath;
	LaunchTutorial: SoftClassPath;
	clone() : TutorialContext;
	static C(Other: UObject | any): TutorialContext;
}

declare class EditorTutorialSettings extends UObject { 
	bDisableAllTutorialAlerts: boolean;
	Categories: TutorialCategory[];
	StartupTutorial: SoftClassPath;
	TutorialContexts: TutorialContext[];
	static Load(ResourceName: string): EditorTutorialSettings;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialSettings;
	static GetDefaultObject(): EditorTutorialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialSettings;
	static C(Other: UObject | any): EditorTutorialSettings;
}

declare class TutorialSettings extends UObject { 
	Categories: TutorialCategory[];
	StartupTutorial: SoftClassPath;
	static Load(ResourceName: string): TutorialSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialSettings;
	static GetDefaultObject(): TutorialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialSettings;
	static C(Other: UObject | any): TutorialSettings;
}

declare class TutorialProgress { 
	Tutorial: SoftClassPath;
	CurrentStage: number;
	bUserDismissed: boolean;
	clone() : TutorialProgress;
	static C(Other: UObject | any): TutorialProgress;
}

declare class TutorialStateSettings extends UObject { 
	TutorialsProgress: TutorialProgress[];
	bDismissedAllTutorials: boolean;
	static Load(ResourceName: string): TutorialStateSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialStateSettings;
	static GetDefaultObject(): TutorialStateSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialStateSettings;
	static C(Other: UObject | any): TutorialStateSettings;
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
	GraphsBackgroundColor: Color;
	bPresistentFilters: boolean;
	bDrawExtremesOnGraphs: boolean;
	bUsePlayersOnlyForPause: boolean;
	bLogNavOctreeOnStop: boolean;
	PresistentFilters: VisualLoggerFiltersData;
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

declare class VisualLoggerRenderingActor extends Actor { 
	static GetDefaultObject(): VisualLoggerRenderingActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActor;
	static C(Other: UObject | any): VisualLoggerRenderingActor;
}

declare class VisualLoggerRenderingComponent extends PrimitiveComponent { 
	static Load(ResourceName: string): VisualLoggerRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerRenderingComponent;
	static GetDefaultObject(): VisualLoggerRenderingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingComponent;
	static C(Other: UObject | any): VisualLoggerRenderingComponent;
}

declare class ClothPainterSettings extends MeshPaintSettings { 
	ViewMin: number;
	ViewMax: number;
	bAutoViewRange: boolean;
	AutoCalculatedViewMin: number;
	AutoCalculatedViewMax: number;
	ClothingAssets: ClothingAsset[];
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

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

