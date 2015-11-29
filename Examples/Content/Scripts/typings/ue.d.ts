/// <reference path="_part_0_ue.d.ts">/>
declare class PhysicsConstraintActor extends RigidBodyBase { 
	ConstraintComp: PhysicsConstraintComponent;
	ConstraintActor1: Actor;
	ConstraintActor2: Actor;
	bDisableCollision: boolean;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PhysicsConstraintActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsConstraintActor;
	static C(Other: UObject): PhysicsConstraintActor;
}

declare class PhysicsThrusterComponent extends SceneComponent { 
	ThrustStrength: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PhysicsThrusterComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PhysicsThrusterComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsThrusterComponent;
	static C(Other: UObject): PhysicsThrusterComponent;
}

declare class PhysicsThruster extends RigidBodyBase { 
	ThrusterComponent: PhysicsThrusterComponent;
	ArrowComponent: ArrowComponent;
	SpriteComponent: BillboardComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PhysicsThruster;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsThruster;
	static C(Other: UObject): PhysicsThruster;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): RadialForceComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RadialForceComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RadialForceComponent;
	static C(Other: UObject): RadialForceComponent;
	RemoveObjectTypeToAffect(ObjectType: EObjectTypeQuery): void;
	FireImpulse(): void;
	AddObjectTypeToAffect(ObjectType: EObjectTypeQuery): void;
}

declare class RadialForceActor extends RigidBodyBase { 
	ForceComponent: RadialForceComponent;
	SpriteComponent: BillboardComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RadialForceActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RadialForceActor;
	static C(Other: UObject): RadialForceActor;
	ToggleForce(): void;
	FireImpulse(): void;
	EnableForce(): void;
	DisableForce(): void;
}

declare class SceneCapture extends Actor { 
	MeshComp: StaticMeshComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SceneCapture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCapture;
	static C(Other: UObject): SceneCapture;
}

declare class EngineShowFlagsSetting { 
	ShowFlagName: string;
	Enabled: boolean;
}

declare class SceneCaptureComponent extends SceneComponent { 
	HiddenComponents: any[];
	bCaptureEveryFrame: boolean;
	MaxViewDistanceOverride: number;
	ShowFlagSettings: EngineShowFlagsSetting[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SceneCaptureComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SceneCaptureComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCaptureComponent;
	static C(Other: UObject): SceneCaptureComponent;
	HideComponent(InComponent: PrimitiveComponent): void;
	HideActorComponents(InActor: Actor): void;
}

declare type ESceneCaptureSource = string;
declare class SceneCaptureComponent2D extends SceneCaptureComponent { 
	FOVAngle: number;
	TextureTarget: TextureRenderTarget2D;
	CaptureSource: ESceneCaptureSource;
	PostProcessSettings: PostProcessSettings;
	PostProcessBlendWeight: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SceneCaptureComponent2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SceneCaptureComponent2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCaptureComponent2D;
	static C(Other: UObject): SceneCaptureComponent2D;
	UpdateContent(): void;
}

declare class SceneCapture2D extends SceneCapture { 
	CaptureComponent2D: SceneCaptureComponent2D;
	DrawFrustum: DrawFrustumComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SceneCapture2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCapture2D;
	static C(Other: UObject): SceneCapture2D;
	OnInterpToggle(bEnable: boolean): void;
}

declare class TextureRenderTargetCube extends TextureRenderTarget { 
	SizeX: number;
	ClearColor: LinearColor;
	OverrideFormat: EPixelFormat;
	bHDR: boolean;
	bForceLinearGamma: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TextureRenderTargetCube;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TextureRenderTargetCube;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextureRenderTargetCube;
	static C(Other: UObject): TextureRenderTargetCube;
}

declare class SceneCaptureComponentCube extends SceneCaptureComponent { 
	TextureTarget: TextureRenderTargetCube;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SceneCaptureComponentCube;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SceneCaptureComponentCube;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCaptureComponentCube;
	static C(Other: UObject): SceneCaptureComponentCube;
	UpdateContent(): void;
}

declare class SceneCaptureCube extends SceneCapture { 
	CaptureComponentCube: SceneCaptureComponentCube;
	DrawFrustum: DrawFrustumComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SceneCaptureCube;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCaptureCube;
	static C(Other: UObject): SceneCaptureCube;
	OnInterpToggle(bEnable: boolean): void;
}

declare class MatineeAnimInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MatineeAnimInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MatineeAnimInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MatineeAnimInterface;
	static C(Other: UObject): MatineeAnimInterface;
}

declare class SkeletalMeshActor extends Actor { 
	bShouldDoAnimNotifies: boolean;
	bWakeOnLevelStart: boolean;
	SkeletalMeshComponent: SkeletalMeshComponent;
	ReplicatedMesh: SkeletalMesh;
	ReplicatedPhysAsset: PhysicsAsset;
	ReplicatedMaterial0: MaterialInterface;
	ReplicatedMaterial1: MaterialInterface;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SkeletalMeshActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshActor;
	static C(Other: UObject): SkeletalMeshActor;
	OnRep_ReplicatedPhysAsset(): void;
	OnRep_ReplicatedMesh(): void;
	OnRep_ReplicatedMaterial1(): void;
	OnRep_ReplicatedMaterial0(): void;
}

declare class SplineMeshActor extends Actor { 
	SplineMeshComponent: SplineMeshComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SplineMeshActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SplineMeshActor;
	static C(Other: UObject): SplineMeshActor;
}

declare class TargetPoint extends Actor { 
	SpriteComponent: BillboardComponent;
	ArrowComponent: ArrowComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TargetPoint;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TargetPoint;
	static C(Other: UObject): TargetPoint;
}

declare type EHorizTextAligment = string;
declare type EVerticalTextAligment = string;
declare class TextRenderComponent extends PrimitiveComponent { 
	Text: string;
	TextMaterial: MaterialInterface;
	Font: Font;
	HorizontalAlignment: EHorizTextAligment;
	VerticalAlignment: EVerticalTextAligment;
	TextRenderColor: Color;
	XScale: number;
	YScale: number;
	WorldSize: number;
	InvDefaultSize: number;
	HorizSpacingAdjust: number;
	bAlwaysRenderAsText: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TextRenderComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TextRenderComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextRenderComponent;
	static C(Other: UObject): TextRenderComponent;
	SetYScale(Value: number): void;
	SetXScale(Value: number): void;
	SetWorldSize(Value: number): void;
	SetTextRenderColor(Value: Color): void;
	SetTextMaterial(Material: MaterialInterface): void;
	SetText(Value: string): void;
	SetHorizSpacingAdjust(Value: number): void;
	SetHorizontalAlignment(Value: EHorizTextAligment): void;
	SetFont(Value: Font): void;
	SetText(Value: string): void;
	GetTextWorldSize(): Vector;
	GetTextLocalSize(): Vector;
}

declare class TextRenderActor extends Actor { 
	TextRender: TextRenderComponent;
	SpriteComponent: BillboardComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TextRenderActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextRenderActor;
	static C(Other: UObject): TextRenderActor;
}

declare class TriggerBase extends Actor { 
	CollisionComponent: ShapeComponent;
	SpriteComponent: BillboardComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TriggerBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TriggerBase;
	static C(Other: UObject): TriggerBase;
}

declare class TriggerBox extends TriggerBase { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TriggerBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TriggerBox;
	static C(Other: UObject): TriggerBox;
}

declare class TriggerCapsule extends TriggerBase { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TriggerCapsule;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TriggerCapsule;
	static C(Other: UObject): TriggerCapsule;
}

declare class TriggerSphere extends TriggerBase { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TriggerSphere;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TriggerSphere;
	static C(Other: UObject): TriggerSphere;
}

declare class VectorField extends UObject { 
	Bounds: Box;
	Intensity: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VectorField;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VectorField;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorField;
	static C(Other: UObject): VectorField;
}

declare class VectorFieldComponent extends PrimitiveComponent { 
	VectorField: VectorField;
	Intensity: number;
	Tightness: number;
	bPreviewVectorField: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VectorFieldComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VectorFieldComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldComponent;
	static C(Other: UObject): VectorFieldComponent;
	SetIntensity(NewIntensity: number): void;
}

declare class VectorFieldVolume extends Actor { 
	VectorFieldComponent: VectorFieldComponent;
	SpriteComponent: BillboardComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VectorFieldVolume;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldVolume;
	static C(Other: UObject): VectorFieldVolume;
}

declare class ApplicationLifecycleComponent extends ActorComponent { 
	ApplicationWillDeactivateDelegate: UnrealEngineMulticastDelegate<() => void>;
	ApplicationHasReactivatedDelegate: UnrealEngineMulticastDelegate<() => void>;
	ApplicationWillEnterBackgroundDelegate: UnrealEngineMulticastDelegate<() => void>;
	ApplicationHasEnteredForegroundDelegate: UnrealEngineMulticastDelegate<() => void>;
	ApplicationWillTerminateDelegate: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ApplicationLifecycleComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ApplicationLifecycleComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ApplicationLifecycleComponent;
	static C(Other: UObject): ApplicationLifecycleComponent;
}

declare type EInterpToBehaviourType = string;
declare class InterpControlPoint { 
	PositionControlPoint: Vector;
	bPositionIsRelative: boolean;
}

declare class InterpToMovementComponent extends MovementComponent { 
	Duration: number;
	bPauseOnImpact: boolean;
	BehaviourType: EInterpToBehaviourType;
	bForceSubStepping: boolean;
	OnInterpToReverse: UnrealEngineMulticastDelegate<(ImpactResult: HitResult, Time: number) => void>;
	OnInterpToStop: UnrealEngineMulticastDelegate<(ImpactResult: HitResult, Time: number) => void>;
	OnWaitBeginDelegate: UnrealEngineMulticastDelegate<(ImpactResult: HitResult, Time: number) => void>;
	OnWaitEndDelegate: UnrealEngineMulticastDelegate<(ImpactResult: HitResult, Time: number) => void>;
	OnResetDelegate: UnrealEngineMulticastDelegate<(ImpactResult: HitResult, Time: number) => void>;
	MaxSimulationTimeStep: number;
	MaxSimulationIterations: number;
	ControlPoints: InterpControlPoint[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpToMovementComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpToMovementComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpToMovementComponent;
	static C(Other: UObject): InterpToMovementComponent;
	StopSimulating(HitResult: HitResult): void;
}

declare class RVOAvoidanceInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): RVOAvoidanceInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RVOAvoidanceInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RVOAvoidanceInterface;
	static C(Other: UObject): RVOAvoidanceInterface;
}

declare class NetworkPredictionInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NetworkPredictionInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NetworkPredictionInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NetworkPredictionInterface;
	static C(Other: UObject): NetworkPredictionInterface;
}

declare class FloatingPawnMovement extends PawnMovementComponent { 
	MaxSpeed: number;
	Acceleration: number;
	Deceleration: number;
	TurningBoost: number;
	bPositionCorrected: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FloatingPawnMovement;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FloatingPawnMovement;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FloatingPawnMovement;
	static C(Other: UObject): FloatingPawnMovement;
}

declare class SpectatorPawnMovement extends FloatingPawnMovement { 
	bIgnoreTimeDilation: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpectatorPawnMovement;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SpectatorPawnMovement;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpectatorPawnMovement;
	static C(Other: UObject): SpectatorPawnMovement;
}

declare class VehicleEngineData { 
	TorqueCurve: RuntimeFloatCurve;
	MaxRPM: number;
	MOI: number;
	DampingRateFullThrottle: number;
	DampingRateZeroThrottleClutchEngaged: number;
	DampingRateZeroThrottleClutchDisengaged: number;
}

declare type EVehicleDifferential4W = string;
declare class VehicleDifferential4WData { 
	DifferentialType: EVehicleDifferential4W;
	FrontRearSplit: number;
	FrontLeftRightSplit: number;
	RearLeftRightSplit: number;
	CentreBias: number;
	FrontBias: number;
	RearBias: number;
}

declare class VehicleGearData { 
	Ratio: number;
	DownRatio: number;
	UpRatio: number;
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
}

declare class WheeledVehicleMovementComponent4W extends WheeledVehicleMovementComponent { 
	EngineSetup: VehicleEngineData;
	DifferentialSetup: VehicleDifferential4WData;
	TransmissionSetup: VehicleTransmissionData;
	SteeringCurve: RuntimeFloatCurve;
	AckermannAccuracy: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WheeledVehicleMovementComponent4W;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WheeledVehicleMovementComponent4W;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicleMovementComponent4W;
	static C(Other: UObject): WheeledVehicleMovementComponent4W;
}

declare class ProjectileMovementComponent extends MovementComponent { 
	InitialSpeed: number;
	MaxSpeed: number;
	bRotationFollowsVelocity: boolean;
	bShouldBounce: boolean;
	bInitialVelocityInLocalSpace: boolean;
	bForceSubStepping: boolean;
	bIsHomingProjectile: boolean;
	bBounceAngleAffectsFriction: boolean;
	bIsSliding: boolean;
	PreviousHitTime: number;
	PreviousHitNormal: Vector;
	ProjectileGravityScale: number;
	Buoyancy: number;
	Bounciness: number;
	Friction: number;
	BounceVelocityStopSimulatingThreshold: number;
	OnProjectileBounce: UnrealEngineMulticastDelegate<(ImpactResult: HitResult, ImpactVelocity: Vector) => void>;
	OnProjectileStop: UnrealEngineMulticastDelegate<(ImpactResult: HitResult) => void>;
	HomingAccelerationMagnitude: number;
	HomingTargetComponent: any;
	MaxSimulationTimeStep: number;
	MaxSimulationIterations: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ProjectileMovementComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ProjectileMovementComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProjectileMovementComponent;
	static C(Other: UObject): ProjectileMovementComponent;
	StopSimulating(HitResult: HitResult): void;
	SetVelocityInLocalSpace(NewVelocity: Vector): void;
	LimitVelocity(NewVelocity: Vector): Vector;
}

declare class RotatingMovementComponent extends MovementComponent { 
	RotationRate: Rotator;
	PivotTranslation: Vector;
	bRotationInLocalSpace: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): RotatingMovementComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RotatingMovementComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RotatingMovementComponent;
	static C(Other: UObject): RotatingMovementComponent;
}

declare class NavLinkCustomInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavLinkCustomInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavLinkCustomInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavLinkCustomInterface;
	static C(Other: UObject): NavLinkCustomInterface;
}

declare class NavModifierComponent extends NavRelevantComponent { 
	AreaClass: UnrealEngineClass;
	FailsafeExtent: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavModifierComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavModifierComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavModifierComponent;
	static C(Other: UObject): NavModifierComponent;
}

declare class PawnNoiseEmitterComponent extends ActorComponent { 
	bAIPerceptionSystemCompatibilityMode: boolean;
	LastRemoteNoisePosition: Vector;
	NoiseLifetime: number;
	LastRemoteNoiseVolume: number;
	LastRemoteNoiseTime: number;
	LastLocalNoiseVolume: number;
	LastLocalNoiseTime: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PawnNoiseEmitterComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PawnNoiseEmitterComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PawnNoiseEmitterComponent;
	static C(Other: UObject): PawnNoiseEmitterComponent;
	MakeNoise(NoiseMaker: Actor,Loudness: number,NoiseLocation: Vector): void;
}

declare class PhysicsHandleComponent extends ActorComponent { 
	GrabbedComponent: PrimitiveComponent;
	LinearDamping: number;
	LinearStiffness: number;
	AngularDamping: number;
	AngularStiffness: number;
	InterpolationSpeed: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PhysicsHandleComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PhysicsHandleComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsHandleComponent;
	static C(Other: UObject): PhysicsHandleComponent;
	SetTargetRotation(NewRotation: Rotator): void;
	SetTargetLocationAndRotation(NewLocation: Vector,NewRotation: Rotator): void;
	SetTargetLocation(NewLocation: Vector): void;
	SetLinearStiffness(NewLinearStiffness: number): void;
	SetLinearDamping(NewLinearDamping: number): void;
	SetInterpolationSpeed(NewInterpolationSpeed: number): void;
	SetAngularStiffness(NewAngularStiffness: number): void;
	SetAngularDamping(NewAngularDamping: number): void;
	ReleaseComponent(): void;
	GrabComponent(Component: PrimitiveComponent,InBoneName: string,GrabLocation: Vector,bConstrainRotation: boolean): void;
	GetTargetLocationAndRotation(TargetLocation?: Vector,TargetRotation?: Rotator): {TargetLocation: Vector, TargetRotation: Rotator};
}

declare class PlatformEventsComponent extends ActorComponent { 
	PlatformChangedToLaptopModeDelegate: UnrealEngineMulticastDelegate<() => void>;
	PlatformChangedToTabletModeDelegate: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PlatformEventsComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PlatformEventsComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformEventsComponent;
	static C(Other: UObject): PlatformEventsComponent;
	SupportsConvertibleLaptops(): boolean;
	IsInTabletMode(): boolean;
	IsInLaptopMode(): boolean;
}

declare class ChildActorComponent extends SceneComponent { 
	ChildActorClass: UnrealEngineClass;
	ChildActor: Actor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ChildActorComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ChildActorComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChildActorComponent;
	static C(Other: UObject): ChildActorComponent;
	SetChildActorClass(InClass: UnrealEngineClass): void;
}

declare class LightmassDirectionalLightSettings extends LightmassLightSettings { 
	LightSourceAngle: number;
}

declare class DirectionalLightComponent extends LightComponent { 
	bEnableLightShaftOcclusion: boolean;
	OcclusionMaskDarkness: number;
	OcclusionDepthRange: number;
	LightShaftOverrideDirection: Vector;
	WholeSceneDynamicShadowRadius: number;
	DynamicShadowDistanceMovableLight: number;
	DynamicShadowDistanceStationaryLight: number;
	DynamicShadowCascades: number;
	CascadeDistributionExponent: number;
	CascadeTransitionFraction: number;
	ShadowDistanceFadeoutFraction: number;
	bUseInsetShadowsForMovableObjects: boolean;
	FarShadowCascadeCount: number;
	FarShadowDistance: number;
	DistanceFieldShadowDistance: number;
	LightSourceAngle: number;
	TraceDistance: number;
	LightmassSettings: LightmassDirectionalLightSettings;
	bCastModulatedShadows: boolean;
	ModulatedShadowColor: Color;
	bUsedAsAtmosphereSunLight: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DirectionalLightComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DirectionalLightComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DirectionalLightComponent;
	static C(Other: UObject): DirectionalLightComponent;
	SetShadowDistanceFadeoutFraction(NewValue: number): void;
	SetOcclusionMaskDarkness(NewValue: number): void;
	SetLightShaftOverrideDirection(NewValue: Vector): void;
	SetEnableLightShaftOcclusion(bNewValue: boolean): void;
	SetDynamicShadowDistanceStationaryLight(NewValue: number): void;
	SetDynamicShadowDistanceMovableLight(NewValue: number): void;
	SetDynamicShadowCascades(NewValue: number): void;
	SetCascadeTransitionFraction(NewValue: number): void;
	SetCascadeDistributionExponent(NewValue: number): void;
}

declare class NavGraphNode { 
	Owner: UObject;
}

declare class NavigationGraphNodeComponent extends SceneComponent { 
	UNode: NavGraphNode;
	NextNodeComponent: NavigationGraphNodeComponent;
	PrevNodeComponent: NavigationGraphNodeComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavigationGraphNodeComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavigationGraphNodeComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavigationGraphNodeComponent;
	static C(Other: UObject): NavigationGraphNodeComponent;
}

declare class PhysicsSpringComponent extends SceneComponent { 
	SpringStiffness: number;
	SpringDamping: number;
	SpringLengthAtRest: number;
	SpringRadius: number;
	SpringChannel: ECollisionChannel;
	bIgnoreSelf: boolean;
	SpringCompression: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PhysicsSpringComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PhysicsSpringComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsSpringComponent;
	static C(Other: UObject): PhysicsSpringComponent;
	GetSpringRestingPoint(): Vector;
	GetSpringDirection(): Vector;
	GetSpringCurrentEndPoint(): Vector;
	GetNormalizedCompressionScalar(): number;
}

declare class PostProcessComponent extends SceneComponent { 
	Settings: PostProcessSettings;
	Priority: number;
	BlendRadius: number;
	BlendWeight: number;
	bEnabled: boolean;
	bUnbound: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PostProcessComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PostProcessComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PostProcessComponent;
	static C(Other: UObject): PostProcessComponent;
}

declare type EBoneSpaces = string;
declare class PoseableMeshComponent extends SkinnedMeshComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PoseableMeshComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PoseableMeshComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PoseableMeshComponent;
	static C(Other: UObject): PoseableMeshComponent;
	SetBoneTransformByName(BoneName: string,InTransform: Transform,BoneSpace: EBoneSpaces): void;
	SetBoneScaleByName(BoneName: string,InScale3D: Vector,BoneSpace: EBoneSpaces): void;
	SetBoneRotationByName(BoneName: string,InRotation: Rotator,BoneSpace: EBoneSpaces): void;
	SetBoneLocationByName(BoneName: string,InLocation: Vector,BoneSpace: EBoneSpaces): void;
	ResetBoneTransformByName(BoneName: string): void;
	GetBoneTransformByName(BoneName: string,BoneSpace: EBoneSpaces): Transform;
	GetBoneScaleByName(BoneName: string,BoneSpace: EBoneSpaces): Vector;
	GetBoneRotationByName(BoneName: string,BoneSpace: EBoneSpaces): Rotator;
	GetBoneLocationByName(BoneName: string,BoneSpace: EBoneSpaces): Vector;
}

declare class NavMeshRenderingComponent extends PrimitiveComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavMeshRenderingComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavMeshRenderingComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavMeshRenderingComponent;
	static C(Other: UObject): NavMeshRenderingComponent;
}

declare class BoxReflectionCaptureComponent extends ReflectionCaptureComponent { 
	BoxTransitionDistance: number;
	PreviewInfluenceBox: BoxComponent;
	PreviewCaptureBox: BoxComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BoxReflectionCaptureComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BoxReflectionCaptureComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BoxReflectionCaptureComponent;
	static C(Other: UObject): BoxReflectionCaptureComponent;
}

declare class PlaneReflectionCaptureComponent extends ReflectionCaptureComponent { 
	InfluenceRadiusScale: number;
	PreviewInfluenceRadius: DrawSphereComponent;
	PreviewCaptureBox: BoxComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PlaneReflectionCaptureComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PlaneReflectionCaptureComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneReflectionCaptureComponent;
	static C(Other: UObject): PlaneReflectionCaptureComponent;
}

declare class SphereReflectionCaptureComponent extends ReflectionCaptureComponent { 
	InfluenceRadius: number;
	CaptureDistanceScale: number;
	PreviewInfluenceRadius: DrawSphereComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SphereReflectionCaptureComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SphereReflectionCaptureComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SphereReflectionCaptureComponent;
	static C(Other: UObject): SphereReflectionCaptureComponent;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpringArmComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SpringArmComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpringArmComponent;
	static C(Other: UObject): SpringArmComponent;
}

declare class TimelineEventEntry { 
	Time: number;
	EventFunc: UnrealEngineDelegate<() => void>;
}

declare class TimelineVectorTrack { 
	VectorCurve: CurveVector;
	InterpFunc: UnrealEngineDelegate<(Output: Vector) => void>;
	VectorPropertyName: string;
	VectorProperty: StructProperty;
}

declare class TimelineFloatTrack { 
	FloatCurve: CurveFloat;
	InterpFunc: UnrealEngineDelegate<(Output: number) => void>;
	FloatPropertyName: string;
	FloatProperty: FloatProperty;
}

declare class TimelineLinearColorTrack { 
	LinearColorCurve: CurveLinearColor;
	InterpFunc: UnrealEngineDelegate<(Output: LinearColor) => void>;
	LinearColorPropertyName: string;
	LinearColorProperty: StructProperty;
}

declare class Timeline { 
	LengthMode: ETimelineLengthMode;
	Length: number;
	bLooping: boolean;
	bReversePlayback: boolean;
	bPlaying: boolean;
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
	DirectionProperty: ByteProperty;
}

declare class TimelineComponent extends ActorComponent { 
	TheTimeline: Timeline;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TimelineComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TimelineComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TimelineComponent;
	static C(Other: UObject): TimelineComponent;
	Stop(): void;
	SetTimelineLengthMode(NewLengthMode: ETimelineLengthMode): void;
	SetTimelineLength(NewLength: number): void;
	SetPlayRate(NewRate: number): void;
	SetPlaybackPosition(NewPosition: number,bFireEvents: boolean,bFireUpdate: boolean): void;
	SetNewTime(NewTime: number): void;
	SetLooping(bNewLooping: boolean): void;
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
}

declare class AnimComposite extends AnimCompositeBase { 
	AnimationTrack: AnimTrack;
	PreviewBasePose: AnimSequence;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimComposite;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimComposite;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimComposite;
	static C(Other: UObject): AnimComposite;
}

declare class AnimStateMachineTypes extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimStateMachineTypes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimStateMachineTypes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimStateMachineTypes;
	static C(Other: UObject): AnimStateMachineTypes;
}

declare type EBlendSpaceAxis = string;
declare class BlendSpace extends BlendSpaceBase { 
	AxisToScaleAnimation: EBlendSpaceAxis;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BlendSpace;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BlendSpace;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BlendSpace;
	static C(Other: UObject): BlendSpace;
}

declare class AimOffsetBlendSpace extends BlendSpace { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AimOffsetBlendSpace;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AimOffsetBlendSpace;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AimOffsetBlendSpace;
	static C(Other: UObject): AimOffsetBlendSpace;
}

declare class BlendSpace1D extends BlendSpaceBase { 
	bDisplayEditorVertically: boolean;
	bScaleAnimation: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BlendSpace1D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BlendSpace1D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BlendSpace1D;
	static C(Other: UObject): BlendSpace1D;
}

declare class AimOffsetBlendSpace1D extends BlendSpace1D { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AimOffsetBlendSpace1D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AimOffsetBlendSpace1D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AimOffsetBlendSpace1D;
	static C(Other: UObject): AimOffsetBlendSpace1D;
}

declare class AnimCompress_Automatic extends AnimCompress { 
	MaxEndEffectorError: number;
	bTryFixedBitwiseCompression: boolean;
	bTryPerTrackBitwiseCompression: boolean;
	bTryLinearKeyRemovalCompression: boolean;
	bTryIntervalKeyRemoval: boolean;
	bRunCurrentDefaultCompressor: boolean;
	bAutoReplaceIfExistingErrorTooGreat: boolean;
	bRaiseMaxErrorToExisting: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimCompress_Automatic;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimCompress_Automatic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimCompress_Automatic;
	static C(Other: UObject): AnimCompress_Automatic;
}

declare class AnimCompress_BitwiseCompressOnly extends AnimCompress { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimCompress_BitwiseCompressOnly;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimCompress_BitwiseCompressOnly;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimCompress_BitwiseCompressOnly;
	static C(Other: UObject): AnimCompress_BitwiseCompressOnly;
}

declare class AnimCompress_LeastDestructive extends AnimCompress { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimCompress_LeastDestructive;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimCompress_LeastDestructive;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimCompress_LeastDestructive;
	static C(Other: UObject): AnimCompress_LeastDestructive;
}

declare class AnimCompress_RemoveEverySecondKey extends AnimCompress { 
	MinKeys: number;
	bStartAtSecondKey: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimCompress_RemoveEverySecondKey;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimCompress_RemoveEverySecondKey;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimCompress_RemoveEverySecondKey;
	static C(Other: UObject): AnimCompress_RemoveEverySecondKey;
}

declare class AnimCompress_RemoveLinearKeys extends AnimCompress { 
	MaxPosDiff: number;
	MaxAngleDiff: number;
	MaxScaleDiff: number;
	MaxEffectorDiff: number;
	MinEffectorDiff: number;
	EffectorDiffSocket: number;
	ParentKeyScale: number;
	bRetarget: boolean;
	bActuallyFilterLinearKeys: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimCompress_RemoveLinearKeys;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimCompress_RemoveLinearKeys;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimCompress_RemoveLinearKeys;
	static C(Other: UObject): AnimCompress_RemoveLinearKeys;
}

declare class AnimCompress_PerTrackCompression extends AnimCompress_RemoveLinearKeys { 
	MaxZeroingThreshold: number;
	MaxPosDiffBitwise: number;
	MaxAngleDiffBitwise: number;
	MaxScaleDiffBitwise: number;
	AllowedRotationFormats: AnimationCompressionFormat[];
	AllowedTranslationFormats: AnimationCompressionFormat[];
	AllowedScaleFormats: AnimationCompressionFormat[];
	bResampleAnimation: boolean;
	ResampledFramerate: number;
	MinKeysForResampling: number;
	bUseAdaptiveError: boolean;
	bUseOverrideForEndEffectors: boolean;
	TrackHeightBias: number;
	ParentingDivisor: number;
	ParentingDivisorExponent: number;
	bUseAdaptiveError2: boolean;
	RotationErrorSourceRatio: number;
	TranslationErrorSourceRatio: number;
	ScaleErrorSourceRatio: number;
	MaxErrorPerTrackRatio: number;
	PerturbationProbeSize: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimCompress_PerTrackCompression;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimCompress_PerTrackCompression;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimCompress_PerTrackCompression;
	static C(Other: UObject): AnimCompress_PerTrackCompression;
}

declare class AnimCompress_RemoveTrivialKeys extends AnimCompress { 
	MaxPosDiff: number;
	MaxAngleDiff: number;
	MaxScaleDiff: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimCompress_RemoveTrivialKeys;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimCompress_RemoveTrivialKeys;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimCompress_RemoveTrivialKeys;
	static C(Other: UObject): AnimCompress_RemoveTrivialKeys;
}

declare class VehicleAnimInstance extends AnimInstance { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VehicleAnimInstance;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VehicleAnimInstance;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VehicleAnimInstance;
	static C(Other: UObject): VehicleAnimInstance;
	GetVehicle(): WheeledVehicle;
}

declare class AnimNotifyState_TimedParticleEffect extends AnimNotifyState { 
	PSTemplate: ParticleSystem;
	SocketName: string;
	LocationOffset: Vector;
	RotationOffset: Rotator;
	bDestroyAtEnd: boolean;
	PreviousPSTemplates: ParticleSystem[];
	PreviousSocketNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimNotifyState_TimedParticleEffect;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimNotifyState_TimedParticleEffect;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimNotifyState_TimedParticleEffect;
	static C(Other: UObject): AnimNotifyState_TimedParticleEffect;
}

declare class AnimNotifyState_Trail extends AnimNotifyState { 
	PSTemplate: ParticleSystem;
	FirstSocketName: string;
	SecondSocketName: string;
	WidthScaleMode: ETrailWidthMode;
	WidthScaleCurve: string;
	bRenderGeometry: boolean;
	bRenderSpawnPoints: boolean;
	bRenderTangents: boolean;
	bRenderTessellation: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimNotifyState_Trail;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimNotifyState_Trail;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimNotifyState_Trail;
	static C(Other: UObject): AnimNotifyState_Trail;
	OverridePSTemplate(MeshComp: SkeletalMeshComponent,Animation: AnimSequenceBase): ParticleSystem;
}

declare class AnimSetMeshLinkup { 
	BoneToTrackTable: number[];
}

declare class AnimSet extends UObject { 
	bAnimRotationOnly: boolean;
	TrackBoneNames: string[];
	Sequences: AnimSequence[];
	LinkupCache: AnimSetMeshLinkup[];
	BoneUseAnimTranslation: number[];
	ForceUseMeshTranslation: number[];
	UseTranslationBoneNames: string[];
	ForceMeshTranslationBoneNames: string[];
	PreviewSkelMeshName: string;
	BestRatioSkelMeshName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimSet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimSet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimSet;
	static C(Other: UObject): AnimSet;
}

declare class EditorMapPerformanceTestDefinition { 
	PerformanceTestmap: FilePath;
	TestTimer: number;
}

declare class ImportFactorySettingValues { 
	SettingName: string;
	Value: string;
}

declare class EditorImportWorkflowDefinition { 
	ImportFilePath: FilePath;
	FactorySettings: ImportFactorySettingValues[];
}

declare class BuildPromotionImportWorkflowSettings { 
	Diffuse: EditorImportWorkflowDefinition;
	Normal: EditorImportWorkflowDefinition;
	StaticMesh: EditorImportWorkflowDefinition;
	ReimportStaticMesh: EditorImportWorkflowDefinition;
	BlendShapeMesh: EditorImportWorkflowDefinition;
	MorphMesh: EditorImportWorkflowDefinition;
	SkeletalMesh: EditorImportWorkflowDefinition;
	Animation: EditorImportWorkflowDefinition;
	Sound: EditorImportWorkflowDefinition;
	SurroundSound: EditorImportWorkflowDefinition;
	OtherAssetsToImport: EditorImportWorkflowDefinition[];
}

declare class BuildPromotionOpenAssetSettings { 
	BlueprintAsset: FilePath;
	MaterialAsset: FilePath;
	ParticleSystemAsset: FilePath;
	SkeletalMeshAsset: FilePath;
	StaticMeshAsset: FilePath;
	TextureAsset: FilePath;
}

declare class BuildPromotionBlueprintSettings { 
	FirstMeshPath: FilePath;
	SecondMeshPath: FilePath;
}

declare class BuildPromotionNewProjectSettings { 
	NewProjectFolderOverride: DirectoryPath;
	NewProjectNameOverride: string;
}

declare class BuildPromotionTestSettings { 
	DefaultStaticMeshAsset: FilePath;
	ImportWorkflow: BuildPromotionImportWorkflowSettings;
	OpenAssets: BuildPromotionOpenAssetSettings;
	BlueprintSettings: BuildPromotionBlueprintSettings;
	NewProjectSettings: BuildPromotionNewProjectSettings;
	SourceControlMaterial: FilePath;
}

declare class MaterialEditorPromotionSettings { 
	DefaultMaterialAsset: FilePath;
	DefaultDiffuseTexture: FilePath;
	DefaultNormalTexture: FilePath;
}

declare class ParticleEditorPromotionSettings { 
	DefaultParticleAsset: FilePath;
}

declare class OpenTestAsset { 
	AssetToOpen: FilePath;
	bSkipTestWhenUnAttended: boolean;
}

declare class ExternalToolDefinition { 
	ToolName: string;
	ExecutablePath: FilePath;
	CommandLineOptions: string;
	WorkingDirectory: DirectoryPath;
	ScriptExtension: string;
	ScriptDirectory: DirectoryPath;
}

declare class EditorImportExportTestDefinition { 
	ImportFilePath: FilePath;
	ExportFileExtension: string;
	bSkipExport: boolean;
	FactorySettings: ImportFactorySettingValues[];
}

declare class LaunchOnTestSettings { 
	LaunchOnTestmap: FilePath;
	DeviceID: string;
}

declare class AutomationTestSettings extends UObject { 
	AutomationTestmap: FilePath;
	EditorPerformanceTestMaps: EditorMapPerformanceTestDefinition[];
	BuildPromotionTest: BuildPromotionTestSettings;
	MaterialEditorPromotionTest: MaterialEditorPromotionSettings;
	ParticleEditorPromotionTest: ParticleEditorPromotionSettings;
	EngineTestModules: string[];
	EditorTestModules: string[];
	TestLevelFolders: string[];
	TestAssetsToOpen: OpenTestAsset[];
	ExternalTools: ExternalToolDefinition[];
	ImportExportTestDefinitions: EditorImportExportTestDefinition[];
	LaunchOnSettings: LaunchOnTestSettings[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AutomationTestSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AutomationTestSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomationTestSettings;
	static C(Other: UObject): AutomationTestSettings;
}

declare type EEvaluateCurveTableResult = string;
declare class CurveTable extends UObject { 
	AssetImportData: AssetImportData;
	ImportPath: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CurveTable;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CurveTable;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CurveTable;
	static C(Other: UObject): CurveTable;
	EvaluateCurveTableRow(RowName: string,InXY: number,OutResult?: EEvaluateCurveTableResult,OutXY?: number): {OutResult: EEvaluateCurveTableResult, OutXY: number};
}

declare class DataTableFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DataTableFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DataTableFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DataTableFunctionLibrary;
	static C(Other: UObject): DataTableFunctionLibrary;
	static GetDataTableRowNames(Table: DataTable,OutRowNames?: string[]): {OutRowNames: string[]};
	static GetDataTableRowFromName(Table: DataTable,RowName: string,OutRow?: TableRowBase): {OutRow: TableRowBase, $: boolean};
	static EvaluateCurveTableRow(CurveTable: CurveTable,RowName: string,InXY: number,OutResult?: EEvaluateCurveTableResult,OutXY?: number): {OutResult: EEvaluateCurveTableResult, OutXY: number};
}

declare class DebugDrawService extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DebugDrawService;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DebugDrawService;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DebugDrawService;
	static C(Other: UObject): DebugDrawService;
}

declare class DialogueTypes extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DialogueTypes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DialogueTypes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DialogueTypes;
	static C(Other: UObject): DialogueTypes;
}

declare class GameplayStatics extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayStatics;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayStatics;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayStatics;
	static C(Other: UObject): GameplayStatics;
	static UnloadStreamLevel(WorldContextObject: UObject,LevelName: string,LatentInfo: LatentActionInfo): void;
	static SpawnSoundAttached(Sound: SoundBase,AttachToComponent: SceneComponent,AttachPointName: string,Location: Vector,Rotation: Rotator,LocationType: EAttachLocation,bStopWhenAttachedToDestroyed: boolean,VolumeMultiplier: number,PitchMultiplier: number,StartTime: number,AttenuationSettings: SoundAttenuation): AudioComponent;
	static SpawnSoundAtLocation(WorldContextObject: UObject,Sound: SoundBase,Location: Vector,Rotation: Rotator,VolumeMultiplier: number,PitchMultiplier: number,StartTime: number,AttenuationSettings: SoundAttenuation): AudioComponent;
	static SpawnSound2D(WorldContextObject: UObject,Sound: SoundBase,VolumeMultiplier: number,PitchMultiplier: number,StartTime: number): AudioComponent;
	static SpawnObject(ObjectClass: UnrealEngineClass,Outer: UObject): UObject;
	static SpawnEmitterAttached(EmitterTemplate: ParticleSystem,AttachToComponent: SceneComponent,AttachPointName: string,Location: Vector,Rotation: Rotator,LocationType: EAttachLocation,bAutoDestroy: boolean): ParticleSystemComponent;
	static SpawnEmitterAtLocation(WorldContextObject: UObject,EmitterTemplate: ParticleSystem,Location: Vector,Rotation: Rotator,bAutoDestroy: boolean): ParticleSystemComponent;
	static SpawnDialogueAttached(Dialogue: DialogueWave,Context: DialogueContext,AttachToComponent: SceneComponent,AttachPointName: string,Location: Vector,Rotation: Rotator,LocationType: EAttachLocation,bStopWhenAttachedToDestroyed: boolean,VolumeMultiplier: number,PitchMultiplier: number,StartTime: number,AttenuationSettings: SoundAttenuation): AudioComponent;
	static SpawnDialogueAtLocation(WorldContextObject: UObject,Dialogue: DialogueWave,Context: DialogueContext,Location: Vector,Rotation: Rotator,VolumeMultiplier: number,PitchMultiplier: number,StartTime: number,AttenuationSettings: SoundAttenuation): AudioComponent;
	static SpawnDialogue2D(WorldContextObject: UObject,Dialogue: DialogueWave,Context: DialogueContext,VolumeMultiplier: number,PitchMultiplier: number,StartTime: number): AudioComponent;
	static SpawnDecalAttached(DecalMaterial: MaterialInterface,DecalSize: Vector,AttachToComponent: SceneComponent,AttachPointName: string,Location: Vector,Rotation: Rotator,LocationType: EAttachLocation,LifeSpan: number): DecalComponent;
	static SpawnDecalAtLocation(WorldContextObject: UObject,DecalMaterial: MaterialInterface,DecalSize: Vector,Location: Vector,Rotation: Rotator,LifeSpan: number): DecalComponent;
	static SetWorldOriginLocation(WorldContextObject: UObject,NewLocation: IntVector): void;
	static SetGlobalTimeDilation(WorldContextObject: UObject,TimeDilation: number): void;
	static SetGamePaused(WorldContextObject: UObject,bPaused: boolean): boolean;
	static SetBaseSoundMix(WorldContextObject: UObject,InSoundMix: SoundMix): void;
	static SaveGameToSlot(SaveGameObject: SaveGame,SlotName: string,UserIndex: number): boolean;
	static RemovePlayer(Player: PlayerController,bDestroyPawn: boolean): void;
	static PushSoundMixModifier(WorldContextObject: UObject,InSoundMixModifier: SoundMix): void;
	static ProjectWorldToScreen(Player: PlayerController,WorldPosition: Vector,ScreenPosition?: Vector2D): {ScreenPosition: Vector2D, $: boolean};
	static PopSoundMixModifier(WorldContextObject: UObject,InSoundMixModifier: SoundMix): void;
	static PlayWorldCameraShake(WorldContextObject: UObject,Shake: UnrealEngineClass,Epicenter: Vector,InnerRadius: number,OuterRadius: number,Falloff: number,bOrientShakeTowardsEpicenter: boolean): void;
	static PlaySoundAtLocation(WorldContextObject: UObject,Sound: SoundBase,Location: Vector,Rotation: Rotator,VolumeMultiplier: number,PitchMultiplier: number,StartTime: number,AttenuationSettings: SoundAttenuation): void;
	static PlaySound2D(WorldContextObject: UObject,Sound: SoundBase,VolumeMultiplier: number,PitchMultiplier: number,StartTime: number): void;
	static PlayDialogueAtLocation(WorldContextObject: UObject,Dialogue: DialogueWave,Context: DialogueContext,Location: Vector,Rotation: Rotator,VolumeMultiplier: number,PitchMultiplier: number,StartTime: number,AttenuationSettings: SoundAttenuation): void;
	static PlayDialogue2D(WorldContextObject: UObject,Dialogue: DialogueWave,Context: DialogueContext,VolumeMultiplier: number,PitchMultiplier: number,StartTime: number): void;
	static ParseOption(Options: string,Key: string): string;
	static OpenLevel(WorldContextObject: UObject,LevelName: string,bAbsolute: boolean,Options: string): void;
	static LoadStreamLevel(WorldContextObject: UObject,LevelName: string,bMakeVisibleAfterLoad: boolean,bShouldBlockOnLoad: boolean,LatentInfo: LatentActionInfo): void;
	static LoadGameFromSlot(SlotName: string,UserIndex: number): SaveGame;
	static IsGamePaused(WorldContextObject: UObject): boolean;
	static HasOption(Options: string,InKey: string): boolean;
	static GrassOverlappingSphereCount(WorldContextObject: UObject,StaticMesh: StaticMesh,CenterPosition: Vector,Radius: number): number;
	static GetWorldOriginLocation(WorldContextObject: UObject): IntVector;
	static GetWorldDeltaSeconds(WorldContextObject: UObject): number;
	static GetSurfaceType(Hit: HitResult): EPhysicalSurface;
	static GetStreamingLevel(WorldContextObject: UObject,PackageName: string): LevelStreaming;
	static GetRealTimeSeconds(WorldContextObject: UObject): number;
	static GetPlayerPawn(WorldContextObject: UObject,PlayerIndex: number): Pawn;
	static GetPlayerController(WorldContextObject: UObject,PlayerIndex: number): PlayerController;
	static GetPlayerCharacter(WorldContextObject: UObject,PlayerIndex: number): Character;
	static GetPlayerCameraManager(WorldContextObject: UObject,PlayerIndex: number): PlayerCameraManager;
	static GetPlatformName(): string;
	static GetClass(UObject: UObject): UnrealEngineClass;
	static GetKeyValue(Pair: string,Key?: string,Value?: string): {Key: string, Value: string};
	static GetIntOption(Options: string,Key: string,DefaultValue: number): number;
	static GetGlobalTimeDilation(WorldContextObject: UObject): number;
	static GetGameState(WorldContextObject: UObject): GameState;
	static GetGameMode(WorldContextObject: UObject): GameMode;
	static GetGameInstance(WorldContextObject: UObject): GameInstance;
	static GetCurrentLevelName(WorldContextObject: UObject,bRemovePrefixString: boolean): string;
	static GetAudioTimeSeconds(WorldContextObject: UObject): number;
	static GetAllActorsWithInterface(WorldContextObject: UObject,Interface: UnrealEngineClass,OutActors?: Actor[]): {OutActors: Actor[]};
	static GetAllActorsOfClass(WorldContextObject: UObject,ActorClass: UnrealEngineClass,OutActors?: Actor[]): {OutActors: Actor[]};
	static GetActorArrayBounds(Actors: Actor[],bOnlyCollidingComponents: boolean,Center?: Vector,BoxExtent?: Vector): {Center: Vector, BoxExtent: Vector};
	static GetActorArrayAverageLocation(Actors: Actor[]): Vector;
	static GetAccurateRealTime(WorldContextObject: UObject,Seconds?: number,PartialSeconds?: number): {Seconds: number, PartialSeconds: number};
	static FlushLevelStreaming(WorldContextObject: UObject): void;
	static FinishSpawningActor(Actor: Actor,SpawnTransform: Transform): Actor;
	static EnableLiveStreaming(Enable: boolean): void;
	static DoesSaveGameExist(SlotName: string,UserIndex: number): boolean;
	static DeprojectScreenToWorld(Player: PlayerController,ScreenPosition: Vector2D,WorldPosition?: Vector,WorldDirection?: Vector): {WorldPosition: Vector, WorldDirection: Vector, $: boolean};
	static DeleteGameInSlot(SlotName: string,UserIndex: number): boolean;
	static DeactivateReverbEffect(WorldContextObject: UObject,TagName: string): void;
	static CreateSaveGameObjectFromBlueprint(SaveGameBlueprint: Blueprint): SaveGame;
	static CreateSaveGameObject(SaveGameClass: UnrealEngineClass): SaveGame;
	static CreatePlayer(WorldContextObject: UObject,ControllerId: number,bSpawnPawn: boolean): PlayerController;
	static ClearSoundMixModifiers(WorldContextObject: UObject): void;
	static CancelAsyncLoading(): void;
	static BreakHitResult(Hit: HitResult,bBlockingHit?: boolean,bInitialOverlap?: boolean,Time?: number,Location?: Vector,ImpactPoint?: Vector,Normal?: Vector,ImpactNormal?: Vector,PhysMat?: PhysicalMaterial,HitActor?: Actor,HitComponent?: PrimitiveComponent,HitBoneName?: string,HitItem?: number,TraceStart?: Vector,TraceEnd?: Vector): {bBlockingHit: boolean, bInitialOverlap: boolean, Time: number, Location: Vector, ImpactPoint: Vector, Normal: Vector, ImpactNormal: Vector, PhysMat: PhysicalMaterial, HitActor: Actor, HitComponent: PrimitiveComponent, HitBoneName: string, HitItem: number, TraceStart: Vector, TraceEnd: Vector};
	static SuggestProjectileVelocity(WorldContextObject: UObject,TossVelocity?: Vector,StartLocation?: Vector,EndLocation?: Vector,LaunchSpeed?: number,OverrideGravityZ?: number,TraceOption?: ESuggestProjVelocityTraceOption,CollisionRadius?: number,bFavorHighArc?: boolean,bDrawDebug?: boolean): {TossVelocity: Vector, $: boolean};
	static BeginSpawningActorFromClass(WorldContextObject: UObject,ActorClass: UnrealEngineClass,SpawnTransform: Transform,bNoCollisionFail: boolean,Owner: Actor): Actor;
	static BeginSpawningActorFromBlueprint(WorldContextObject: UObject,Blueprint: Blueprint,SpawnTransform: Transform,bNoCollisionFail: boolean): Actor;
	static BeginDeferredActorSpawnFromClass(WorldContextObject: UObject,ActorClass: UnrealEngineClass,SpawnTransform: Transform,CollisionHandlingOverride: ESpawnActorCollisionHandlingMethod,Owner: Actor): Actor;
	static AreAnyListenersWithinRange(WorldContextObject: UObject,Location: Vector,MaximumRange: number): boolean;
	static ApplyRadialDamageWithFalloff(WorldContextObject: UObject,BaseDamage: number,MinimumDamage: number,Origin: Vector,DamageInnerRadius: number,DamageOuterRadius: number,DamageFalloff: number,DamageTypeClass: UnrealEngineClass,IgnoreActors: Actor[],DamageCauser: Actor,InstigatedByController: Controller,DamagePreventionChannel: ECollisionChannel): boolean;
	static ApplyRadialDamage(WorldContextObject: UObject,BaseDamage: number,Origin: Vector,DamageRadius: number,DamageTypeClass: UnrealEngineClass,IgnoreActors: Actor[],DamageCauser: Actor,InstigatedByController: Controller,bDoFullDamage: boolean,DamagePreventionChannel: ECollisionChannel): boolean;
	static ApplyPointDamage(DamagedActor: Actor,BaseDamage: number,HitFromDirection: Vector,HitInfo: HitResult,EventInstigator: Controller,DamageCauser: Actor,DamageTypeClass: UnrealEngineClass): void;
	static ApplyDamage(DamagedActor: Actor,BaseDamage: number,EventInstigator: Controller,DamageCauser: Actor,DamageTypeClass: UnrealEngineClass): void;
	static ActivateReverbEffect(WorldContextObject: UObject,ReverbEffect: ReverbEffect,TagName: string,Priority: number,Volume: number,FadeTime: number): void;
}

declare type EOrientPositionSelector = string;
declare class HeadMountedDisplayFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): HeadMountedDisplayFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): HeadMountedDisplayFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HeadMountedDisplayFunctionLibrary;
	static C(Other: UObject): HeadMountedDisplayFunctionLibrary;
	static SetWorldToMetersScale(WorldContext: UObject,NewScale: number): void;
	static SetClippingPlanes(Near: number,Far: number): void;
	static ResetOrientationAndPosition(Yaw: number,Options: EOrientPositionSelector): void;
	static IsInLowPersistenceMode(): boolean;
	static IsHeadMountedDisplayEnabled(): boolean;
	static HasValidTrackingPosition(): boolean;
	static GetWorldToMetersScale(WorldContext: UObject): number;
	static GetScreenPercentage(): number;
	static GetPositionalTrackingCameraParameters(CameraOrigin?: Vector,CameraRotation?: Rotator,HFOV?: number,VFOV?: number,CameraDistance?: number,NearPlane?: number,FarPlane?: number): {CameraOrigin: Vector, CameraRotation: Rotator, HFOV: number, VFOV: number, CameraDistance: number, NearPlane: number, FarPlane: number};
	static GetOrientationAndPosition(DeviceRotation?: Rotator,DevicePosition?: Vector): {DeviceRotation: Rotator, DevicePosition: Vector};
	static EnableLowPersistenceMode(bEnable: boolean): void;
	static EnableHMD(bEnable: boolean): boolean;
}

declare class KismetArrayLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetArrayLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetArrayLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetArrayLibrary;
	static C(Other: UObject): KismetArrayLibrary;
	static SetArrayPropertyByName(UObject: UObject,PropertyName: string,Value: number[]): void;
	static FilterArray(TargetArray: Actor[],FilterClass: UnrealEngineClass,FilteredArray?: Actor[]): {FilteredArray: Actor[]};
	static Shuffle(TargetArray: number[]): void;
	static SetArrayElem(TargetArray: number[],Index: number,Item: number,bSizeToFit: boolean): void;
	static Resize(TargetArray: number[],Size: number): void;
	static RemoveItem(TargetArray: number[],Item: number): boolean;
	static RemoveIndex(TargetArray: number[],IndexToRemove: number): void;
	static Length(TargetArray: number[]): number;
	static LastIndex(TargetArray: number[]): number;
	static Insert(TargetArray: number[],NewItem: number,Index: number): void;
	static Get(TargetArray: number[],Index: number,Item?: number): {Item: number};
	static FindItem(TargetArray: number[],ItemToFind: number): number;
	static ContainsItem(TargetArray: number[],ItemToFind: number): boolean;
	static Clear(TargetArray: number[]): void;
	static AppendArray(TargetArray: number[],SourceArray: number[]): void;
	static AddUnique(TargetArray: number[],NewItem: number): number;
	static Add(TargetArray: number[],NewItem: number): number;
}

declare class KismetGuidLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetGuidLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetGuidLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetGuidLibrary;
	static C(Other: UObject): KismetGuidLibrary;
	static ParseStringtoGuid(GuidString: string,OutGuid?: Guid,Success?: boolean): {OutGuid: Guid, Success: boolean};
	static NotEqual(A: Guid,B: Guid): boolean;
	static NewGuid(): Guid;
	static IsValid(InGuid: Guid): boolean;
	static Invalidate_Guid(InGuid?: Guid): {InGuid: Guid};
	static Equal(A: Guid,B: Guid): boolean;
	static ToString(InGuid: Guid): string;
}

declare class KismetInputLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetInputLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetInputLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetInputLibrary;
	static C(Other: UObject): KismetInputLibrary;
	static IsTouchEvent(Input: UPointerEvent): boolean;
	static IsMouseButtonDown(Input: UPointerEvent,MouseButton: Key): boolean;
	static GetWheelDelta(Input: UPointerEvent): number;
	static GetUserIndex(Input: UPointerEvent): number;
	static GetTouchpadIndex(Input: UPointerEvent): number;
	static GetScreenSpacePosition(Input: UPointerEvent): Vector2D;
	static GetPointerIndex(Input: UPointerEvent): number;
	static GetLastScreenSpacePosition(Input: UPointerEvent): Vector2D;
	static GetGestureDelta(Input: UPointerEvent): Vector2D;
	static GetEffectingButton(Input: UPointerEvent): Key;
	static GetCursorDelta(Input: UPointerEvent): Vector2D;
	static Key_IsVectorAxis(Key: Key): boolean;
	static Key_IsMouseButton(Key: Key): boolean;
	static Key_IsModifierKey(Key: Key): boolean;
	static Key_IsKeyboardKey(Key: Key): boolean;
	static Key_IsGamepadKey(Key: Key): boolean;
	static Key_IsFloatAxis(Key: Key): boolean;
	static Key_GetDisplayName(Key: Key): string;
	static IsShiftDown(Input: InputEvent): boolean;
	static IsRightShiftDown(Input: InputEvent): boolean;
	static IsRightControlDown(Input: InputEvent): boolean;
	static IsRightCommandDown(Input: InputEvent): boolean;
	static IsRightAltDown(Input: InputEvent): boolean;
	static IsRepeat(Input: InputEvent): boolean;
	static IsLeftShiftDown(Input: InputEvent): boolean;
	static IsLeftControlDown(Input: InputEvent): boolean;
	static IsLeftCommandDown(Input: InputEvent): boolean;
	static IsLeftAltDown(Input: InputEvent): boolean;
	static IsControlDown(Input: InputEvent): boolean;
	static IsCommandDown(Input: InputEvent): boolean;
	static IsAltDown(Input: InputEvent): boolean;
	static GetUserIndex(Input: KeyEvent): number;
	static GetKey(Input: KeyEvent): Key;
	static GetAnalogValue(Input: AnalogInputEvent): number;
	static Equal(A: Key,B: Key): boolean;
	static ControllerEvent_GetUserIndex(Input: ControllerEvent): number;
	static GetEffectingButton(Input: ControllerEvent): Key;
	static ControllerEvent_GetAnalogValue(Input: ControllerEvent): number;
	static CalibrateTilt(): void;
}

declare class KismetMaterialLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetMaterialLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetMaterialLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetMaterialLibrary;
	static C(Other: UObject): KismetMaterialLibrary;
	static SetVectorParameterValue(WorldContextObject: UObject,Collection: MaterialParameterCollection,ParameterName: string,ParameterValue: LinearColor): void;
	static SetScalarParameterValue(WorldContextObject: UObject,Collection: MaterialParameterCollection,ParameterName: string,ParameterValue: number): void;
	static GetVectorParameterValue(WorldContextObject: UObject,Collection: MaterialParameterCollection,ParameterName: string): LinearColor;
	static GetScalarParameterValue(WorldContextObject: UObject,Collection: MaterialParameterCollection,ParameterName: string): number;
	static CreateDynamicMaterialInstance(WorldContextObject: UObject,Parent: MaterialInterface): MaterialInstanceDynamic;
}

declare type EEasingFunc = string;
declare class Timespan { 
}

declare class RandomStream { 
	InitialSeed: number;
	Seed: number;
}

declare class KismetMathLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetMathLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetMathLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetMathLibrary;
	static C(Other: UObject): KismetMathLibrary;
	static BitwiseXOR(A: number,B: number): number;
	static VectorLengthSquared(A: Vector): number;
	static Vector2dLengthSquared(A: Vector2D): number;
	static Vector2dLength(A: Vector2D): number;
	static VectorLength(A: Vector): number;
	static Lerp(A: Vector,B: Vector,Alpha: number): Vector;
	static VInterpTo_Constant(Current: Vector,Target: Vector,DeltaTime: number,InterpSpeed: number): Vector;
	static VInterpTo(Current: Vector,Target: Vector,DeltaTime: number,InterpSpeed: number): Vector;
	static Vector2DInterpTo_Constant(Current: Vector2D,Target: Vector2D,DeltaTime: number,InterpSpeed: number): Vector2D;
	static Vector2DInterpTo(Current: Vector2D,Target: Vector2D,DeltaTime: number,InterpSpeed: number): Vector2D;
	static Ease(A: Vector,B: Vector,Alpha: number,EasingFunc: EEasingFunc,BlendExp: number,Steps: number): Vector;
	static UtcNow(): DateTime;
	static TransformLocation(T: Transform,Location: Vector): Vector;
	static TransformDirection(T: Transform,Direction: Vector): Vector;
	static Today(): DateTime;
	static Lerp(A: Transform,B: Transform,Alpha: number): Transform;
	static TInterpTo(Current: Transform,Target: Transform,DeltaTime: number,InterpSpeed: number): Transform;
	static ZeroValue(): Timespan;
	static TimespanRatio(A: Timespan,B: Timespan): number;
	static MinValue(): Timespan;
	static MaxValue(): Timespan;
	static TimespanFromString(TimespanString: string,Result?: Timespan): {Result: Timespan, $: boolean};
	static Ease(A: Transform,B: Transform,Alpha: number,EasingFunc: EEasingFunc,BlendExp: number,Steps: number): Transform;
	static Tan(A: number): number;
	static Subtract_VectorVector(A: Vector,B: Vector): Vector;
	static Subtract_VectorInt(A: Vector,B: number): Vector;
	static Subtract_VectorFloat(A: Vector,B: number): Vector;
	static Subtract_Vector2DVector2D(A: Vector2D,B: Vector2D): Vector2D;
	static Subtract_Vector2DFloat(A: Vector2D,B: number): Vector2D;
	static Subtract_TimespanTimespan(A: Timespan,B: Timespan): Timespan;
	static Subtract_IntInt(A: number,B: number): number;
	static Subtract_FloatFloat(A: number,B: number): number;
	static Subtract_DateTimeTimespan(A: DateTime,B: Timespan): DateTime;
	static Subtract_DateTimeDateTime(A: DateTime,B: DateTime): Timespan;
	static Subtract_ByteByte(A: number,B: number): number;
	static Square(A: number): number;
	static Sqrt(A: number): number;
	static Sin(A: number): number;
	static Sign(A: number): number;
	static Sign(A: number): number;
	static SetRandomStreamSeed(Stream?: RandomStream,NewSeed?: number): {Stream: RandomStream};
	static SelectVector(A: Vector,B: Vector,bPickA: boolean): Vector;
	static SelectTransform(A: Transform,B: Transform,bPickA: boolean): Transform;
	static SelectString(A: string,B: string,bPickA: boolean): string;
	static SelectRotator(A: Rotator,B: Rotator,bPickA: boolean): Rotator;
	static SelectObject(A: UObject,B: UObject,bSelectA: boolean): UObject;
	static SelectInt(A: number,B: number,bPickA: boolean): number;
	static SelectFloat(A: number,B: number,bPickA: boolean): number;
	static SelectColor(A: LinearColor,B: LinearColor,bPickA: boolean): LinearColor;
	static SelectClass(A: UnrealEngineClass,B: UnrealEngineClass,bSelectA: boolean): UnrealEngineClass;
	static SeedRandomStream(Stream?: RandomStream): {Stream: RandomStream};
	static Round(A: number): number;
	static RotatorFromAxisAndAngle(Axis: Vector,Angle: number): Rotator;
	static RotateVectorAroundAxis(InVect: Vector,AngleDeg: number,Axis: Vector): Vector;
	static Lerp(A: Rotator,B: Rotator,Alpha: number,bShortestPath: boolean): Rotator;
	static RInterpTo_Constant(Current: Rotator,Target: Rotator,DeltaTime: number,InterpSpeed: number): Rotator;
	static RInterpTo(Current: Rotator,Target: Rotator,DeltaTime: number,InterpSpeed: number): Rotator;
	static RGBtoHSV(RGB: LinearColor,HSV?: LinearColor): {HSV: LinearColor};
	static RGBToHSV(InColor: LinearColor,H?: number,S?: number,V?: number,A?: number): {H: number, S: number, V: number, A: number};
	static ResetRandomStream(Stream: RandomStream): void;
	static Ease(A: Rotator,B: Rotator,Alpha: number,bShortestPath: boolean,EasingFunc: EEasingFunc,BlendExp: number,Steps: number): Rotator;
	static RandomUnitVectorInConeWithYawAndPitch(ConeDir: Vector,MaxYawInDegrees: number,MaxPitchInDegrees: number): Vector;
	static RandomUnitVectorInCone(ConeDir: Vector,ConeHalfAngle: number): Vector;
	static RandomUnitVectorFromStream(Stream: RandomStream): Vector;
	static RandomUnitVector(): Vector;
	static RandomRotatorFromStream(bRoll: boolean,Stream: RandomStream): Rotator;
	static RandomRotator(bRoll: boolean): Rotator;
	static RandomPointInBoundingBox(Origin: Vector,BoxExtent: Vector): Vector;
	static RandomIntegerInRangeFromStream(Min: number,Max: number,Stream: RandomStream): number;
	static RandomIntegerInRange(Min: number,Max: number): number;
	static RandomIntegerFromStream(Max: number,Stream: RandomStream): number;
	static RandomInteger(Max: number): number;
	static RandomFloatInRangeFromStream(Min: number,Max: number,Stream: RandomStream): number;
	static RandomFloatInRange(Min: number,Max: number): number;
	static RandomFloatFromStream(Stream: RandomStream): number;
	static RandomFloat(): number;
	static RandomBoolFromStream(Stream: RandomStream): boolean;
	static RandomBool(): boolean;
	static RadiansToDegrees(A: number): number;
	static ProjectVectorOnToVector(V: Vector,Target: Vector): Vector;
	static ProjectVectorOnToPlane(V: Vector,PlaneNormal: Vector): Vector;
	static ProjectPointOnToPlane(Point: Vector,PlaneBase: Vector,PlaneNormal: Vector): Vector;
	static PointsAreCoplanar(Points: Vector[],Tolerance: number): boolean;
	static Percent_IntInt(A: number,B: number): number;
	static Percent_FloatFloat(A: number,B: number): number;
	static Percent_ByteByte(A: number,B: number): number;
	static BitwiseOR(A: number,B: number): number;
	static Now(): DateTime;
	static NotEqual(A: Vector,B: Vector,ErrorTolerance: number): boolean;
	static NotEqual(A: Timespan,B: Timespan): boolean;
	static NotEqual(A: Rotator,B: Rotator,ErrorTolerance: number): boolean;
	static NotEqual(A: UObject,B: UObject): boolean;
	static NotEqual(A: string,B: string): boolean;
	static NotEqual(A: number,B: number): boolean;
	static NotEqual(A: number,B: number): boolean;
	static NotEqual(A: DateTime,B: DateTime): boolean;
	static NotEqual(A: UnrealEngineClass,B: UnrealEngineClass): boolean;
	static NotEqual(A: number,B: number): boolean;
	static NotEqualBoolean(A: boolean,B: boolean): boolean;
	static NOTBoolean(A: boolean): boolean;
	static NormalizeToRange(Value: number,RangeMin: number,RangeMax: number): number;
	static Delta(A: Rotator,B: Rotator): Rotator;
	static NormalizeAxis(Angle: number): number;
	static Normalize2D(A: Vector2D): Vector2D;
	static Normalize(A: Vector): Vector;
	static NegateVector(A: Vector): Vector;
	static InvertRotator(A: Rotator): Rotator;
	static NearlyEqual(A: Transform,B: Transform,LocationTolerance: number,RotationTolerance: number,Scale3DTolerance: number): boolean;
	static NearlyEqual(A: number,B: number,ErrorTolerance: number): boolean;
	static Power(Base: number,Exp: number): number;
	static MultiplyByPi(Value: number): number;
	static Multiply_VectorVector(A: Vector,B: Vector): Vector;
	static Multiply_VectorInt(A: Vector,B: number): Vector;
	static Multiply_VectorFloat(A: Vector,B: number): Vector;
	static Multiply_Vector2DFloat(A: Vector2D,B: number): Vector2D;
	static Multiply_TimespanFloat(A: Timespan,Scalar: number): Timespan;
	static ScaleRotator(A: Rotator,B: number): Rotator;
	static ScaleRotator(A: Rotator,B: number): Rotator;
	static Multiply_LinearColorLinearColor(A: LinearColor,B: LinearColor): LinearColor;
	static Multiply_LinearColorFloat(A: LinearColor,B: number): LinearColor;
	static Multiply_IntInt(A: number,B: number): number;
	static Multiply_IntFloat(A: number,B: number): number;
	static Multiply_FloatFloat(A: number,B: number): number;
	static Multiply_ByteByte(A: number,B: number): number;
	static MirrorVectorByNormal(InVect: Vector,InNormal: Vector): Vector;
	static MinOfIntArray(IntArray: number[],IndexOfMinValue?: number,MinValue?: number): {IndexOfMinValue: number, MinValue: number};
	static MinOfFloatArray(FloatArray: number[],IndexOfMinValue?: number,MinValue?: number): {IndexOfMinValue: number, MinValue: number};
	static MinOfByteArray(ByteArray: number[],IndexOfMinValue?: number,MinValue?: number): {IndexOfMinValue: number, MinValue: number};
	static MinimumAreaRectangle(WorldContextObject: UObject,InVerts: Vector[],SampleSurfaceNormal: Vector,OutRectCenter?: Vector,OutRectRotation?: Rotator,OutSideLengthX?: number,OutSideLengthY?: number,bDebugDraw?: boolean): {OutRectCenter: Vector, OutRectRotation: Rotator, OutSideLengthX: number, OutSideLengthY: number};
	static Min(A: number,B: number): number;
	static MaxOfIntArray(IntArray: number[],IndexOfMaxValue?: number,MaxValue?: number): {IndexOfMaxValue: number, MaxValue: number};
	static MaxOfFloatArray(FloatArray: number[],IndexOfMaxValue?: number,MaxValue?: number): {IndexOfMaxValue: number, MaxValue: number};
	static MaxOfByteArray(ByteArray: number[],IndexOfMaxValue?: number,MaxValue?: number): {IndexOfMaxValue: number, MaxValue: number};
	static Max(A: number,B: number): number;
	static MapRangeUnclamped(Value: number,InRangeA: number,InRangeB: number,OutRangeA: number,OutRangeB: number): number;
	static MapRangeClamped(Value: number,InRangeA: number,InRangeB: number,OutRangeA: number,OutRangeB: number): number;
	static MakeVector2D(X: number,Y: number): Vector2D;
	static MakeVector(X: number,Y: number,Z: number): Vector;
	static MakeTransform(Location: Vector,Rotation: Rotator,Scale: Vector): Transform;
	static MakeTimespan(Days: number,Hours: number,Minutes: number,Seconds: number,Milliseconds: number): Timespan;
	static MakeRotFromZY(Z: Vector,Y: Vector): Rotator;
	static MakeRotFromZX(Z: Vector,X: Vector): Rotator;
	static MakeRotFromZ(Z: Vector): Rotator;
	static MakeRotFromYZ(Y: Vector,Z: Vector): Rotator;
	static MakeRotFromYX(Y: Vector,X: Vector): Rotator;
	static MakeRotFromY(Y: Vector): Rotator;
	static MakeRotFromXZ(X: Vector,Z: Vector): Rotator;
	static MakeRotFromXY(X: Vector,Y: Vector): Rotator;
	static MakeRotFromX(X: Vector): Rotator;
	static MakeRotator(Roll: number,Pitch: number,Yaw: number): Rotator;
	static MakeRotationFromAxes(Forward: Vector,Right: Vector,Up: Vector): Rotator;
	static MakeRandomStream(InitialSeed: number): RandomStream;
	static MakePulsatingValue(InCurrentTime: number,InPulsesPerSecond: number,InPhase: number): number;
	static MakeDateTime(Year: number,Month: number,Day: number,Hour: number,Minute: number,Second: number,Millisecond: number): DateTime;
	static MakeColor(R: number,G: number,B: number,A: number): LinearColor;
	static Loge(A: number): number;
	static LinePlaneIntersection(LineStart: Vector,LineEnd: Vector,PlaneOrigin: Vector,PlaneNormal: Vector,T?: number,Intersection?: Vector): {T: number, Intersection: Vector, $: boolean};
	static LinePlaneIntersection(LineStart: Vector,LineEnd: Vector,APlane: Plane,T?: number,Intersection?: Vector): {T: number, Intersection: Vector, $: boolean};
	static LerpUsingHSV(A: LinearColor,B: LinearColor,Alpha: number): LinearColor;
	static Lerp(A: LinearColor,B: LinearColor,Alpha: number): LinearColor;
	static UnrotateVector(A: Vector,B: Rotator): Vector;
	static LessEqual_TimespanTimespan(A: Timespan,B: Timespan): boolean;
	static LessEqual_IntInt(A: number,B: number): boolean;
	static LessEqual_FloatFloat(A: number,B: number): boolean;
	static LessEqual_DateTimeDateTime(A: DateTime,B: DateTime): boolean;
	static LessEqual_ByteByte(A: number,B: number): boolean;
	static Less_TimespanTimespan(A: Timespan,B: Timespan): boolean;
	static Less_IntInt(A: number,B: number): boolean;
	static Less_FloatFloat(A: number,B: number): boolean;
	static Less_DateTimeDateTime(A: DateTime,B: DateTime): boolean;
	static Less_ByteByte(A: number,B: number): boolean;
	static Lerp(A: number,B: number,Alpha: number): number;
	static IsMorning(A: DateTime): boolean;
	static IsLeapYear(Year: number): boolean;
	static IsAfternoon(A: DateTime): boolean;
	static InvertTransform(T: Transform): Transform;
	static InverseTransformLocation(T: Transform,Location: Vector): Vector;
	static InverseTransformDirection(T: Transform,Direction: Vector): Vector;
	static InverseLerp(A: number,B: number,Value: number): number;
	static InRange(Value: number,Min: number,Max: number,InclusiveMin: boolean,InclusiveMax: boolean): boolean;
	static Hypotenuse(Width: number,Height: number): number;
	static HSVtoRGB(HSV: LinearColor,RGB?: LinearColor): {RGB: LinearColor};
	static HSVToRGB(H: number,S: number,V: number,A: number): LinearColor;
	static Snaptogrid(Location: number,GridSize: number): number;
	static RotateVector(A: Vector,B: Rotator): Vector;
	static GreaterEqual_TimespanTimespan(A: Timespan,B: Timespan): boolean;
	static GreaterEqual_IntInt(A: number,B: number): boolean;
	static GreaterEqual_FloatFloat(A: number,B: number): boolean;
	static GreaterEqual_DateTimeDateTime(A: DateTime,B: DateTime): boolean;
	static GreaterEqual_ByteByte(A: number,B: number): boolean;
	static Greater_TimespanTimespan(A: Timespan,B: Timespan): boolean;
	static Greater_IntInt(A: number,B: number): boolean;
	static Greater_FloatFloat(A: number,B: number): boolean;
	static Greater_DateTimeDateTime(A: DateTime,B: DateTime): boolean;
	static Greater_ByteByte(A: number,B: number): boolean;
	static GetYear(A: DateTime): number;
	static GetYawPitchFromVector(InVec: Vector,Yaw?: number,Pitch?: number): {Yaw: number, Pitch: number};
	static GetVectorArrayAverage(Vectors: Vector[]): Vector;
	static GetUpVector(InRot: Rotator): Vector;
	static GetTotalSeconds(A: Timespan): number;
	static GetTotalMinutes(A: Timespan): number;
	static GetTotalMilliseconds(A: Timespan): number;
	static GetTotalHours(A: Timespan): number;
	static GetTotalDays(A: Timespan): number;
	static GetTimeOfDay(A: DateTime): Timespan;
	static GetSeconds(A: Timespan): number;
	static GetSecond(A: DateTime): number;
	static GetRightVector(InRot: Rotator): Vector;
	static GetPI(): number;
	static GetMonth(A: DateTime): number;
	static GetMinutes(A: Timespan): number;
	static GetMinute(A: DateTime): number;
	static GetMinElement(A: Vector): number;
	static GetMilliseconds(A: Timespan): number;
	static GetMillisecond(A: DateTime): number;
	static GetMaxElement(A: Vector): number;
	static GetHours(A: Timespan): number;
	static GetHour12(A: DateTime): number;
	static GetHour(A: DateTime): number;
	static GetForwardVector(InRot: Rotator): Vector;
	static GetDuration(A: Timespan): Timespan;
	static GetDirectionVector(From: Vector,To: Vector): Vector;
	static GetDays(A: Timespan): number;
	static GetDayOfYear(A: DateTime): number;
	static GetDay(A: DateTime): number;
	static GetDate(A: DateTime): DateTime;
	static GetAxes(A: Rotator,X?: Vector,Y?: Vector,Z?: Vector): {X: Vector, Y: Vector, Z: Vector};
	static Truncate(A: number): number;
	static FromSeconds(Seconds: number): Timespan;
	static FromMinutes(Minutes: number): Timespan;
	static FromMilliseconds(Milliseconds: number): Timespan;
	static FromHours(Hours: number): Timespan;
	static FromDays(Days: number): Timespan;
	static Fraction(A: number): number;
	static Division(Dividend: number,Divisor: number,Remainder?: number): {Remainder: number, $: number};
	static Min(A: number,B: number): number;
	static Max(A: number,B: number): number;
	static FixedTurn(InCurrent: number,InDesired: number,InDeltaRate: number): number;
	static FInterpTo_Constant(Current: number,Target: number,DeltaTime: number,InterpSpeed: number): number;
	static FInterpTo(Current: number,Target: number,DeltaTime: number,InterpSpeed: number): number;
	static FInterpEaseInOut(A: number,B: number,Alpha: number,Exponent: number): number;
	static FindLookAtRotation(Start: Vector,Target: Vector): Rotator;
	static Floor(A: number): number;
	static Clamp(Value: number,Min: number,Max: number): number;
	static FCeil(A: number): number;
	static Exp(A: number): number;
	static Equal(A: Vector,B: Vector,ErrorTolerance: number): boolean;
	static EqualTransform(A: Transform,B: Transform): boolean;
	static Equal(A: Timespan,B: Timespan): boolean;
	static Equal(A: Rotator,B: Rotator,ErrorTolerance: number): boolean;
	static Equal(A: UObject,B: UObject): boolean;
	static Equal(A: string,B: string): boolean;
	static Equal(A: number,B: number): boolean;
	static Equal(A: number,B: number): boolean;
	static Equal(A: DateTime,B: DateTime): boolean;
	static Equal(A: UnrealEngineClass,B: UnrealEngineClass): boolean;
	static Equal(A: number,B: number): boolean;
	static EqualBoolean(A: boolean,B: boolean): boolean;
	static Ease(A: number,B: number,Alpha: number,EasingFunc: EEasingFunc,BlendExp: number,Steps: number): number;
	static DotProduct(A: Vector2D,B: Vector2D): number;
	static DotProduct(A: Vector,B: Vector): number;
	static Divide_VectorVector(A: Vector,B: Vector): Vector;
	static Divide_VectorInt(A: Vector,B: number): Vector;
	static Divide_VectorFloat(A: Vector,B: number): Vector;
	static Divide_Vector2DFloat(A: Vector2D,B: number): Vector2D;
	static Divide_IntInt(A: number,B: number): number;
	static Divide_FloatFloat(A: number,B: number): number;
	static Divide_ByteByte(A: number,B: number): number;
	static Tan(A: number): number;
	static Sin(A: number): number;
	static DegreesToRadians(A: number): number;
	static Cos(A: number): number;
	static Atan2(A: number,B: number): number;
	static Atan(A: number): number;
	static Asin(A: number): number;
	static Acos(A: number): number;
	static DaysInYear(Year: number): number;
	static DaysInMonth(Year: number,Month: number): number;
	static MinValue(): DateTime;
	static MaxValue(): DateTime;
	static DateTimeFromString(DateTimeString: string,Result?: DateTime): {Result: DateTime, $: boolean};
	static DateTimeFromIsoString(IsoString: string,Result?: DateTime): {Result: DateTime, $: boolean};
	static CrossProduct(A: Vector2D,B: Vector2D): number;
	static CrossProduct(A: Vector,B: Vector): Vector;
	static CreateVectorFromYawPitch(Yaw: number,Pitch: number,Length: number): Vector;
	static Cos(A: number): number;
	static ConvertTransformToRelative(Transform: Transform,ParentTransform: Transform): Transform;
	static ToVector2D(InVector: Vector): Vector2D;
	static ToTransform(InLocation: Vector): Transform;
	static RotationFromXVector(InVec: Vector): Rotator;
	static ToLinearColor(InVec: Vector): LinearColor;
	static ToVector(InVector2D: Vector2D,Z: number): Vector;
	static GetRotationXVector(InRot: Rotator): Vector;
	static ToVector(InLinearColor: LinearColor): Vector;
	static ToColor(InLinearColor: LinearColor): Color;
	static ToFloat(InInt: number): number;
	static ToByte(InInt: number): number;
	static ToBool(InInt: number): boolean;
	static ToVector(InFloat: number): Vector;
	static ToLinearColor(InFloat: number): LinearColor;
	static ToLinearColor(InColor: Color): LinearColor;
	static ToInt(InByte: number): number;
	static ToFloat(InByte: number): number;
	static ToInt(InBool: boolean): number;
	static ToFloat(InBool: boolean): number;
	static ToByte(InBool: boolean): number;
	static ComposeTransforms(A: Transform,B: Transform): Transform;
	static CombineRotators(A: Rotator,B: Rotator): Rotator;
	static ClassIsChildOf(TestClass: UnrealEngineClass,ParentClass: UnrealEngineClass): boolean;
	static ClampVectorSize(A: Vector,Min: number,Max: number): Vector;
	static ClampAxis(Angle: number): number;
	static ClampAngle(AngleDegrees: number,MinAngleDegrees: number,MaxAngleDegrees: number): number;
	static Clamp(Value: number,Min: number,Max: number): number;
	static CInterpTo(Current: LinearColor,Target: LinearColor,DeltaTime: number,InterpSpeed: number): LinearColor;
	static BreakVector2D(InVec: Vector2D,X?: number,Y?: number): {X: number, Y: number};
	static BreakVector(InVec: Vector,X?: number,Y?: number,Z?: number): {X: number, Y: number, Z: number};
	static BreakTransform(InTransform: Transform,Location?: Vector,Rotation?: Rotator,Scale?: Vector): {Location: Vector, Rotation: Rotator, Scale: Vector};
	static BreakTimespan(InTimespan: Timespan,Days?: number,Hours?: number,Minutes?: number,Seconds?: number,Milliseconds?: number): {Days: number, Hours: number, Minutes: number, Seconds: number, Milliseconds: number};
	static BreakRotIntoAxes(InRot: Rotator,X?: Vector,Y?: Vector,Z?: Vector): {X: Vector, Y: Vector, Z: Vector};
	static BreakRotator(InRot: Rotator,Roll?: number,Pitch?: number,Yaw?: number): {Roll: number, Pitch: number, Yaw: number};
	static BreakRandomStream(InRandomStream: RandomStream,InitialSeed?: number): {InitialSeed: number};
	static BreakDateTime(InDateTime: DateTime,Year?: number,Month?: number,Day?: number,Hour?: number,Minute?: number,Second?: number,Millisecond?: number): {Year: number, Month: number, Day: number, Hour: number, Minute: number, Second: number, Millisecond: number};
	static BreakColor(InColor: LinearColor,R?: number,G?: number,B?: number,A?: number): {R: number, G: number, B: number, A: number};
	static XORBoolean(A: boolean,B: boolean): boolean;
	static ORBoolean(A: boolean,B: boolean): boolean;
	static NORBoolean(A: boolean,B: boolean): boolean;
	static NANDBoolean(A: boolean,B: boolean): boolean;
	static ANDBoolean(A: boolean,B: boolean): boolean;
	static Atan2(A: number,B: number): number;
	static Atan(A: number): number;
	static Asin(A: number): number;
	static BitwiseAND(A: number,B: number): number;
	static Add_VectorVector(A: Vector,B: Vector): Vector;
	static Add_VectorInt(A: Vector,B: number): Vector;
	static Add_VectorFloat(A: Vector,B: number): Vector;
	static Add_Vector2DVector2D(A: Vector2D,B: Vector2D): Vector2D;
	static Add_Vector2DFloat(A: Vector2D,B: number): Vector2D;
	static Add_TimespanTimespan(A: Timespan,B: Timespan): Timespan;
	static Add_IntInt(A: number,B: number): number;
	static Add_FloatFloat(A: number,B: number): number;
	static Add_DateTimeTimespan(A: DateTime,B: Timespan): DateTime;
	static Add_ByteByte(A: number,B: number): number;
	static Acos(A: number): number;
	static Absolute(A: number): number;
	static Absolute(A: number): number;
}

declare class KismetNodeHelperLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetNodeHelperLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetNodeHelperLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetNodeHelperLibrary;
	static C(Other: UObject): KismetNodeHelperLibrary;
	static MarkBit(Data?: number,Index?: number): {Data: number};
	static HasUnmarkedBit(Data: number,NumBits: number): boolean;
	static HasMarkedBit(Data: number,NumBits: number): boolean;
	static GetValidIndex(Enum: Enum,EnumeratorIndex: number): number;
	static GetUnmarkedBit(Data: number,StartIdx: number,NumBits: number,bRandom: boolean): number;
	static GetRandomUnmarkedBit(Data: number,StartIdx: number,NumBits: number): number;
	static GetFirstUnmarkedBit(Data: number,StartIdx: number,NumBits: number): number;
	static GetEnumeratorUserFriendlyName(Enum: Enum,EnumeratorValue: number): string;
	static GetEnumeratorName(Enum: Enum,EnumeratorValue: number): string;
	static ClearBit(Data?: number,Index?: number): {Data: number};
	static ClearAllBits(Data?: number): {Data: number};
	static BitIsMarked(Data: number,Index: number): boolean;
}

declare type ESearchCase = string;
declare type ESearchDir = string;
declare class KismetStringLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetStringLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetStringLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetStringLibrary;
	static C(Other: UObject): KismetStringLibrary;
	static TrimTrailing(SourceString: string): string;
	static Trim(SourceString: string): string;
	static ToUpper(SourceString: string): string;
	static ToLower(SourceString: string): string;
	static TimeSecondsToString(InSeconds: number): string;
	static StartsWith(SourceString: string,InPrefix: string,SearchCase: ESearchCase): boolean;
	static Split(SourceString: string,InStr: string,LeftS?: string,RightS?: string,SearchCase?: ESearchCase,SearchDir?: ESearchDir): {LeftS: string, RightS: string, $: boolean};
	static RightPad(SourceString: string,ChCount: number): string;
	static RightChop(SourceString: string,Count: number): string;
	static Right(SourceString: string,Count: number): string;
	static Reverse(SourceString: string): string;
	static ReplaceInline(SourceString?: string,SearchText?: string,ReplacementText?: string,SearchCase?: ESearchCase): {SourceString: string, $: number};
	static Replace(SourceString: string,From: string,To: string,SearchCase: ESearchCase): string;
	static ParseIntoArray(SourceString: string,Delimiter: string,CullEmptyStrings: boolean): string[];
	static NotEqual(A: string,B: string): boolean;
	static NotEqual_StriStri(A: string,B: string): boolean;
	static Mid(SourceString: string,Start: number,Count: number): string;
	static MatchesWildcard(SourceString: string,Wildcard: string,SearchCase: ESearchCase): boolean;
	static Len(S: string): number;
	static LeftPad(SourceString: string,ChCount: number): string;
	static LeftChop(SourceString: string,Count: number): string;
	static Left(SourceString: string,Count: number): string;
	static JoinStringArray(SourceArray: string[],Separator: string): string;
	static IsNumeric(SourceString: string): boolean;
	static GetSubstring(SourceString: string,StartIndex: number,Length: number): string;
	static GetCharacterAsNumber(SourceString: string,Index: number): number;
	static GetCharacterArrayFromString(SourceString: string): string[];
	static FindSubstring(SearchIn: string,Substring: string,bUseCase: boolean,bSearchFromEnd: boolean,StartPosition: number): number;
	static Equal(A: string,B: string): boolean;
	static EqualEqual_StriStri(A: string,B: string): boolean;
	static EndsWith(SourceString: string,InSuffix: string,SearchCase: ESearchCase): boolean;
	static CullArray(SourceString: string,InArray?: string[]): {InArray: string[], $: number};
	static ToString(InVec: Vector): string;
	static ToString(InVec: Vector2D): string;
	static ToString(InTrans: Transform): string;
	static StringToName(InString: string): string;
	static StringToInt(InString: string): number;
	static StringToFloat(InString: string): number;
	static ToString(InRot: Rotator): string;
	static ToString(InObj: UObject): string;
	static ToString(InName: string): string;
	static ToString(InInt: number): string;
	static ToString(InFloat: number): string;
	static ToString(InColor: LinearColor): string;
	static ToString(InByte: number): string;
	static ToString(InBool: boolean): string;
	static Append(A: string,B: string): string;
	static BuildString(AppendTo: string,Prefix: string,InVector2d: Vector2D,Suffix: string): string;
	static BuildString(AppendTo: string,Prefix: string,InVector: Vector,Suffix: string): string;
	static BuildString(AppendTo: string,Prefix: string,InRot: Rotator,Suffix: string): string;
	static BuildString(AppendTo: string,Prefix: string,InObj: UObject,Suffix: string): string;
	static BuildString(AppendTo: string,Prefix: string,InName: string,Suffix: string): string;
	static BuildString(AppendTo: string,Prefix: string,InInt: number,Suffix: string): string;
	static BuildString(AppendTo: string,Prefix: string,InFloat: number,Suffix: string): string;
	static BuildString(AppendTo: string,Prefix: string,InColor: LinearColor,Suffix: string): string;
	static BuildString(AppendTo: string,Prefix: string,InBool: boolean,Suffix: string): string;
}

declare class CollisionResponseTemplate { 
	Name: string;
	CollisionEnabled: ECollisionEnabled;
	ObjectTypeName: string;
	CustomResponses: ResponseChannel[];
	HelpMessage: string;
	bCanModify: boolean;
}

declare class CustomChannelSetup { 
	Channel: ECollisionChannel;
	Name: string;
	DefaultResponse: ECollisionResponse;
	bTraceType: boolean;
	bStaticObject: boolean;
}

declare class CustomProfile { 
	Name: string;
	CustomResponses: ResponseChannel[];
}

declare class Redirector { 
	OldName: string;
	NewName: string;
}

declare class CollisionProfile extends DeveloperSettings { 
	Profiles: CollisionResponseTemplate[];
	DefaultChannelResponses: CustomChannelSetup[];
	EditProfiles: CustomProfile[];
	ProfileRedirects: Redirector[];
	CollisionChannelRedirects: Redirector[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CollisionProfile;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CollisionProfile;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CollisionProfile;
	static C(Other: UObject): CollisionProfile;
}

declare class KismetSystemLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetSystemLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetSystemLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetSystemLibrary;
	static C(Other: UObject): KismetSystemLibrary;
	static StackTrace(): void;
	static SphereTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static SingleSphereTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static SphereTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static SingleSphereTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static MultiSphereTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static MultiSphereTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static MultiSphereTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static MultiSphereTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static SphereOverlapComponents(WorldContextObject: UObject,SpherePos: Vector,SphereRadius: number,ObjectTypes: EObjectTypeQuery[],ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	static SphereOverlapComponents_DEPRECATED(WorldContextObject: UObject,SpherePos: Vector,SphereRadius: number,Filter: EOverlapFilterOption,ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	static SphereOverlapActors(WorldContextObject: UObject,SpherePos: Vector,SphereRadius: number,ObjectTypes: EObjectTypeQuery[],ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	static SphereOverlapActors_DEPRECATED(WorldContextObject: UObject,SpherePos: Vector,SphereRadius: number,Filter: EOverlapFilterOption,ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	static ShowPlatformSpecificLeaderboardScreen(CategoryName: string): void;
	static ShowPlatformSpecificAchievementsScreen(SpecificPlayer: PlayerController): void;
	static ShowAdBanner(AdIdIndex: number,bShowOnBottomOfScreen: boolean): void;
	static SetWindowTitle(Title: string): void;
	static SetVolumeButtonsHandledBySystem(bEnabled: boolean): void;
	static SetVectorPropertyByName(UObject: UObject,PropertyName: string,Value: Vector): void;
	static SetTransformPropertyByName(UObject: UObject,PropertyName: string,Value: Transform): void;
	static SetTextPropertyByName(UObject: UObject,PropertyName: string,Value: string): void;
	static SetSupressViewportTransitionMessage(WorldContextObject: UObject,bState: boolean): void;
	static SetStructurePropertyByName(UObject: UObject,PropertyName: string,Value: GenericStruct): void;
	static SetStringPropertyByName(UObject: UObject,PropertyName: string,Value: string): void;
	static SetRotatorPropertyByName(UObject: UObject,PropertyName: string,Value: Rotator): void;
	static SetObjectPropertyByName(UObject: UObject,PropertyName: string,Value: UObject): void;
	static SetNamePropertyByName(UObject: UObject,PropertyName: string,Value: string): void;
	static SetLinearColorPropertyByName(UObject: UObject,PropertyName: string,Value: LinearColor): void;
	static SetIntPropertyByName(UObject: UObject,PropertyName: string,Value: number): void;
	static SetFloatPropertyByName(UObject: UObject,PropertyName: string,Value: number): void;
	static SetCollisionProfileNameProperty(UObject: UObject,PropertyName: string,Value: CollisionProfileName): void;
	static SetClassPropertyByName(UObject: UObject,PropertyName: string,Value: UnrealEngineClass): void;
	static SetBytePropertyByName(UObject: UObject,PropertyName: string,Value: number): void;
	static SetBoolPropertyByName(UObject: UObject,PropertyName: string,Value: boolean): void;
	static SetAssetPropertyByName(UObject: UObject,PropertyName: string,Value: any): void;
	static SetAssetClassPropertyByName(UObject: UObject,PropertyName: string,Value: any): void;
	static RetriggerableDelay(WorldContextObject: UObject,Duration: number,LatentInfo: LatentActionInfo): void;
	static ResetGamepadAssignmentToController(ControllerId: number): void;
	static ResetGamepadAssignments(): void;
	static RegisterForRemoteNotifications(): void;
	static QuitGame(WorldContextObject: UObject,SpecificPlayer: PlayerController,QuitPreference: EQuitPreference): void;
	static PrintWarning(InString: string): void;
	static PrintText(WorldContextObject: UObject,InText: string,bPrintToScreen: boolean,bPrintToLog: boolean,TextColor: LinearColor,Duration: number): void;
	static PrintString(WorldContextObject: UObject,InString: string,bPrintToScreen: boolean,bPrintToLog: boolean,TextColor: LinearColor,Duration: number): void;
	static MoveComponentTo(Component: SceneComponent,TargetRelativeLocation: Vector,TargetRelativeRotation: Rotator,bEaseOut: boolean,bEaseIn: boolean,OverTime: number,MoveAction: EMoveComponentAction,LatentInfo: LatentActionInfo): void;
	static MakeLiteralText(Value: string): string;
	static MakeLiteralString(Value: string): string;
	static MakeLiteralName(Value: string): string;
	static MakeLiteralInt(Value: number): number;
	static MakeLiteralFloat(Value: number): number;
	static MakeLiteralByte(Value: number): number;
	static MakeLiteralBool(Value: boolean): boolean;
	static LineTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static SingleLineTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static LineTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static SingleLineTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static MultiLineTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static MultiLineTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static MultiLineTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static MultiLineTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static LaunchURL(URL: string): void;
	static UnpauseTimerbyHandle(WorldContextObject: UObject,Handle: TimerHandle): void;
	static UnpauseTimerbyFunctionName(UObject: UObject,FunctionName: string): void;
	static DoesTimerExistbyHandle(WorldContextObject: UObject,Handle: TimerHandle): boolean;
	static DoesTimerExistbyFunctionName(UObject: UObject,FunctionName: string): boolean;
	static SetTimerbyFunctionName(UObject: UObject,FunctionName: string,Time: number,bLooping: boolean): TimerHandle;
	static PauseTimerbyHandle(WorldContextObject: UObject,Handle: TimerHandle): void;
	static PauseTimerbyFunctionName(UObject: UObject,FunctionName: string): void;
	static IsValid(Handle: TimerHandle): boolean;
	static IsTimerPausedbyHandle(WorldContextObject: UObject,Handle: TimerHandle): boolean;
	static IsTimerPausedbyFunctionName(UObject: UObject,FunctionName: string): boolean;
	static IsTimerActivebyHandle(WorldContextObject: UObject,Handle: TimerHandle): boolean;
	static IsTimerActivebyFunctionName(UObject: UObject,FunctionName: string): boolean;
	static Invalidate(Handle?: TimerHandle): {Handle: TimerHandle, $: TimerHandle};
	static GetTimerRemainingTimebyHandle(WorldContextObject: UObject,Handle: TimerHandle): number;
	static GetTimerRemainingTimebyFunctionName(UObject: UObject,FunctionName: string): number;
	static GetTimerElapsedTimebyHandle(WorldContextObject: UObject,Handle: TimerHandle): number;
	static GetTimerElapsedTimebyFunctionName(UObject: UObject,FunctionName: string): number;
	static ClearTimerbyHandle(WorldContextObject: UObject,Handle: TimerHandle): void;
	static ClearTimerbyFunctionName(UObject: UObject,FunctionName: string): void;
	static IsValidClass(Class: UnrealEngineClass): boolean;
	static IsValid(UObject: UObject): boolean;
	static IsServer(WorldContextObject: UObject): boolean;
	static IsPackagedForDistribution(): boolean;
	static IsLoggedIn(SpecificPlayer: PlayerController): boolean;
	static IsDedicatedServer(WorldContextObject: UObject): boolean;
	static IsControllerAssignedToGamepad(ControllerId: number): boolean;
	static HideAdBanner(): void;
	static GetVolumeButtonsHandledBySystem(): boolean;
	static GetUniqueDeviceId(): string;
	static GetSupportedFullscreenResolutions(Resolutions?: IntPoint[]): {Resolutions: IntPoint[], $: boolean};
	static GetRenderingMaterialQualityLevel(): number;
	static GetRenderingDetailMode(): number;
	static GetPreferredLanguages(): string[];
	static GetPlatformUserName(): string;
	static GetObjectName(UObject: UObject): string;
	static GetLocalCurrencySymbol(): string;
	static GetLocalCurrencyCode(): string;
	static GetGameTimeInSeconds(WorldContextObject: UObject): number;
	static GetGameName(): string;
	static GetEngineVersion(): string;
	static GetDisplayName(UObject: UObject): string;
	static GetComponentBounds(Component: SceneComponent,Origin?: Vector,BoxExtent?: Vector,SphereRadius?: number): {Origin: Vector, BoxExtent: Vector, SphereRadius: number};
	static GetDisplayName(Class: UnrealEngineClass): string;
	static GetAdIDCount(): number;
	static GetActorListFromComponentList(ComponentList: PrimitiveComponent[],ActorClassFilter: UnrealEngineClass,OutActorList?: Actor[]): {OutActorList: Actor[]};
	static GetActorBounds(Actor: Actor,Origin?: Vector,BoxExtent?: Vector): {Origin: Vector, BoxExtent: Vector};
	static ForceCloseAdBanner(): void;
	static FlushPersistentDebugLines(WorldContextObject: UObject): void;
	static FlushDebugStrings(WorldContextObject: UObject): void;
	static ExecuteConsoleCommand(WorldContextObject: UObject,Command: string,SpecificPlayer: PlayerController): void;
	static DrawDebugString(WorldContextObject: UObject,TextLocation: Vector,Text: string,TestBaseActor: Actor,TextColor: LinearColor,Duration: number): void;
	static DrawDebugSphere(WorldContextObject: UObject,Center: Vector,Radius: number,Segments: number,LineColor: LinearColor,Duration: number): void;
	static DrawDebugPoint(WorldContextObject: UObject,Position: Vector,Size: number,PointColor: LinearColor,Duration: number): void;
	static DrawDebugPlane(WorldContextObject: UObject,PlaneCoordinates: Plane,Location: Vector,Size: number,PlaneColor: LinearColor,Duration: number): void;
	static DrawDebugLine(WorldContextObject: UObject,LineStart: Vector,LineEnd: Vector,LineColor: LinearColor,Duration: number,Thickness: number): void;
	static DrawDebugFrustum(WorldContextObject: UObject,FrustumTransform: Transform,FrustumColor: LinearColor,Duration: number): void;
	static DrawDebugFloatHistoryTransform(WorldContextObject: UObject,FloatHistory: DebugFloatHistory,DrawTransform: Transform,DrawSize: Vector2D,DrawColor: LinearColor,Duration: number): void;
	static DrawDebugFloatHistoryLocation(WorldContextObject: UObject,FloatHistory: DebugFloatHistory,DrawLocation: Vector,DrawSize: Vector2D,DrawColor: LinearColor,Duration: number): void;
	static DrawDebugCylinder(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,Segments: number,LineColor: LinearColor,Duration: number): void;
	static DrawDebugCoordinateSystem(WorldContextObject: UObject,AxisLoc: Vector,AxisRot: Rotator,Scale: number,Duration: number): void;
	static DrawDebugCone(WorldContextObject: UObject,Origin: Vector,Direction: Vector,Length: number,AngleWidth: number,AngleHeight: number,NumSides: number,LineColor: LinearColor,Duration: number): void;
	static DrawDebugCone(WorldContextObject: UObject,Origin: Vector,Direction: Vector,Length: number,AngleWidth: number,AngleHeight: number,NumSides: number,LineColor: LinearColor): void;
	static DrawDebugCircle(WorldContextObject: UObject,Center: Vector,Radius: number,NumSegments: number,LineColor: LinearColor,Duration: number,Thickness: number,YAxis: Vector,ZAxis: Vector,bDrawAxis: boolean): void;
	static DrawDebugCapsule(WorldContextObject: UObject,Center: Vector,HalfHeight: number,Radius: number,Rotation: Rotator,LineColor: LinearColor,Duration: number): void;
	static DrawDebugCamera(CameraActor: CameraActor,CameraColor: LinearColor,Duration: number): void;
	static DrawDebugBox(WorldContextObject: UObject,Center: Vector,Extent: Vector,LineColor: LinearColor,Rotation: Rotator,Duration: number): void;
	static DrawDebugArrow(WorldContextObject: UObject,LineStart: Vector,LineEnd: Vector,ArrowSize: number,LineColor: LinearColor,Duration: number): void;
	static DoesImplementInterface(TestObject: UObject,Interface: UnrealEngineClass): boolean;
	static Delay(WorldContextObject: UObject,Duration: number,LatentInfo: LatentActionInfo): void;
	static CreateCopyForUndoBuffer(ObjectToModify: UObject): void;
	static Conv_AssetToObject(Asset: any): UObject;
	static Conv_AssetClassToClass(AssetClass: any): UnrealEngineClass;
	static ControlScreensaver(bAllowScreenSaver: boolean): void;
	static ComponentOverlapComponents(Component: PrimitiveComponent,ComponentTransform: Transform,ObjectTypes: EObjectTypeQuery[],ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	static ComponentOverlapComponents_DEPRECATED(Component: PrimitiveComponent,ComponentTransform: Transform,Filter: EOverlapFilterOption,ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	static ComponentOverlapActors(Component: PrimitiveComponent,ComponentTransform: Transform,ObjectTypes: EObjectTypeQuery[],ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	static ComponentOverlapActors_DEPRECATED(Component: PrimitiveComponent,ComponentTransform: Transform,Filter: EOverlapFilterOption,ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	static CollectGarbage(): void;
	static CapsuleTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static SingleCapsuleTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static CapsuleTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static SingleCapsuleTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static MultiCapsuleTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static MultiCapsuleTraceByObjectDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,ObjectsToTrace: ECollisionChannel[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static MultiCapsuleTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static MultiCapsuleTraceByChannelDeprecated(WorldContextObject: UObject,Start: Vector,End: Vector,Radius: number,HalfHeight: number,TraceChannel: ECollisionChannel,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static CapsuleOverlapComponents(WorldContextObject: UObject,CapsulePos: Vector,Radius: number,HalfHeight: number,ObjectTypes: EObjectTypeQuery[],ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	static CapsuleOverlapComponents_DEPRECATED(WorldContextObject: UObject,CapsulePos: Vector,Radius: number,HalfHeight: number,Filter: EOverlapFilterOption,ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	static CapsuleOverlapActors(WorldContextObject: UObject,CapsulePos: Vector,Radius: number,HalfHeight: number,ObjectTypes: EObjectTypeQuery[],ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	static CapsuleOverlapActors_DEPRECATED(WorldContextObject: UObject,CapsulePos: Vector,Radius: number,HalfHeight: number,Filter: EOverlapFilterOption,ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	static BoxTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,HalfSize: Vector,Orientation: Rotator,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static BoxTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,HalfSize: Vector,Orientation: Rotator,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHit?: HitResult,bIgnoreSelf?: boolean): {OutHit: HitResult, $: boolean};
	static MultiBoxTraceForObjects(WorldContextObject: UObject,Start: Vector,End: Vector,HalfSize: Vector,Orientation: Rotator,ObjectTypes: EObjectTypeQuery[],bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static MultiBoxTraceByChannel(WorldContextObject: UObject,Start: Vector,End: Vector,HalfSize: Vector,Orientation: Rotator,TraceChannel: ETraceTypeQuery,bTraceComplex: boolean,ActorsToIgnore: Actor[],DrawDebugType: EDrawDebugTrace,OutHits?: HitResult[],bIgnoreSelf?: boolean): {OutHits: HitResult[], $: boolean};
	static BoxOverlapComponents(WorldContextObject: UObject,BoxPos: Vector,Extent: Vector,ObjectTypes: EObjectTypeQuery[],ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	static BoxOverlapComponents_DEPRECATED(WorldContextObject: UObject,BoxPos: Vector,Extent: Vector,Filter: EOverlapFilterOption,ComponentClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutComponents?: PrimitiveComponent[]): {OutComponents: PrimitiveComponent[], $: boolean};
	static BoxOverlapActors(WorldContextObject: UObject,BoxPos: Vector,BoxExtent: Vector,ObjectTypes: EObjectTypeQuery[],ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	static BoxOverlapActors_DEPRECATED(WorldContextObject: UObject,BoxPos: Vector,BoxExtent: Vector,Filter: EOverlapFilterOption,ActorClassFilter: UnrealEngineClass,ActorsToIgnore: Actor[],OutActors?: Actor[]): {OutActors: Actor[], $: boolean};
	static AddFloatHistorySample(Value: number,FloatHistory: DebugFloatHistory): DebugFloatHistory;
}

declare class FormatTextArgument { 
	ArgumentName: string;
	TextValue: string;
}

declare type ERoundingMode = string;
declare class KismetTextLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetTextLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetTextLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetTextLibrary;
	static C(Other: UObject): KismetTextLibrary;
	static TextTrimTrailing(InText: string): string;
	static TextTrimPrecedingAndTrailing(InText: string): string;
	static TextTrimPreceding(InText: string): string;
	static TextIsTransient(InText: string): boolean;
	static TextIsEmpty(InText: string): boolean;
	static TextIsCultureInvariant(InText: string): boolean;
	static NotEqual(A: string,B: string): boolean;
	static NotEqual_IgnoreCase_TextText(A: string,B: string): boolean;
	static GetEmptyText(): string;
	static Format(InPattern: string,InArgs: FormatTextArgument[]): string;
	static FindTextInLocalizationTable(Namespace: string,Key: string,OutText?: string): {OutText: string, $: boolean};
	static Equal(A: string,B: string): boolean;
	static EqualEqual_IgnoreCase_TextText(A: string,B: string): boolean;
	static ToString(InText: string): string;
	static ToText(InString: string): string;
	static ToText(InName: string): string;
	static ToText(Value: number,bUseGrouping: boolean,MinimumIntegralDigits: number,MaximumIntegralDigits: number): string;
	static ToText(Value: number,RoundingMode: ERoundingMode,bUseGrouping: boolean,MinimumIntegralDigits: number,MaximumIntegralDigits: number,MinimumFractionalDigits: number,MaximumFractionalDigits: number): string;
	static ToText(Value: number): string;
	static ToText(InBool: boolean): string;
	static AsTimespan(InTimespan: Timespan): string;
	static AsTime(In: DateTime): string;
	static AsPercent(Value: number,RoundingMode: ERoundingMode,bUseGrouping: boolean,MinimumIntegralDigits: number,MaximumIntegralDigits: number,MinimumFractionalDigits: number,MaximumFractionalDigits: number): string;
	static AsDateTime(In: DateTime): string;
	static AsDate(InDateTime: DateTime): string;
	static AsCurrency(Value: number,RoundingMode: ERoundingMode,bUseGrouping: boolean,MinimumIntegralDigits: number,MaximumIntegralDigits: number,MinimumFractionalDigits: number,MaximumFractionalDigits: number,CurrencyCode: string): string;
	static AsCurrency(Value: number,RoundingMode: ERoundingMode,bUseGrouping: boolean,MinimumIntegralDigits: number,MaximumIntegralDigits: number,MinimumFractionalDigits: number,MaximumFractionalDigits: number,CurrencyCode: string): string;
}

declare class VisualLoggerKismetLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VisualLoggerKismetLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerKismetLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerKismetLibrary;
	static C(Other: UObject): VisualLoggerKismetLibrary;
	static LogText(WorldContextObject: UObject,Text: string,LogCategory: string): void;
	static LogLocation(WorldContextObject: UObject,Location: Vector,Text: string,ObjectColor: LinearColor,Radius: number,LogCategory: string): void;
	static LogBoxShape(WorldContextObject: UObject,BoxShape: Box,Text: string,ObjectColor: LinearColor,LogCategory: string): void;
}

declare class BakedStateExitTransition { 
	CanTakeDelegateIndex: number;
	CustomResultNodeIndex: number;
	TransitionIndex: number;
	StateSequencePlayerToQueryIndex: number;
	bDesiredTransitionReturnValue: boolean;
	PoseEvaluatorLinks: number[];
}

declare class BakedAnimationState { 
	StateName: string;
	Transitions: BakedStateExitTransition[];
	StateRootNodeIndex: number;
	StartNotify: number;
	EndNotify: number;
	FullyBlendedNotify: number;
	bIsAConduit: boolean;
	EntryRuleNodeIndex: number;
	PlayerNodeIndices: number[];
}

declare class AnimationStateBase { 
	StateName: string;
}

declare class AnimationTransitionBetweenStates extends AnimationStateBase { 
	PreviousState: number;
	NextState: number;
	CrossfadeDuration: number;
	StartNotify: number;
	EndNotify: number;
	InterruptNotify: number;
	BlendMode: EAlphaBlendOption;
	CustomCurve: CurveFloat;
	LogicType: ETransitionLogicType;
}

declare class BakedAnimationStateMachine { 
	MachineName: string;
	InitialState: number;
	States: BakedAnimationState[];
	Transitions: AnimationTransitionBetweenStates[];
}

declare class AnimBlueprintGeneratedClass extends BlueprintGeneratedClass { 
	BakedStateMachines: BakedAnimationStateMachine[];
	TargetSkeleton: Skeleton;
	AnimNotifies: AnimNotifyEvent[];
	RootAnimNodeIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimBlueprintGeneratedClass;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimBlueprintGeneratedClass;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimBlueprintGeneratedClass;
	static C(Other: UObject): AnimBlueprintGeneratedClass;
}

declare class CircleElement2D { 
	Center: Vector2D;
	Radius: number;
}

declare class BoxElement2D { 
	Center: Vector2D;
	Width: number;
	Height: number;
	Angle: number;
}

declare class ConvexElement2D { 
	VertexData: Vector2D[];
}

declare class AggregateGeometry2D { 
	CircleElements: CircleElement2D[];
	BoxElements: BoxElement2D[];
	ConvexElements: ConvexElement2D[];
}

declare class BodySetup2D extends BodySetup { 
	AggGeom2D: AggregateGeometry2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BodySetup2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BodySetup2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BodySetup2D;
	static C(Other: UObject): BodySetup2D;
}

declare class BoneMaskFilter extends UObject { 
	BlendPoses: InputBlendPose[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BoneMaskFilter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BoneMaskFilter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BoneMaskFilter;
	static C(Other: UObject): BoneMaskFilter;
}

declare class BookMark2D extends UObject { 
	Zoom2D: number;
	Location: IntPoint;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BookMark2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BookMark2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BookMark2D;
	static C(Other: UObject): BookMark2D;
}

declare class ButtonStyleAsset extends UObject { 
	ButtonStyle: ButtonStyle;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ButtonStyleAsset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ButtonStyleAsset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ButtonStyleAsset;
	static C(Other: UObject): ButtonStyleAsset;
}

declare class ActorChannel extends Channel { 
	Actor: Actor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorChannel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ActorChannel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorChannel;
	static C(Other: UObject): ActorChannel;
}

declare class ControlChannel extends Channel { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ControlChannel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ControlChannel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControlChannel;
	static C(Other: UObject): ControlChannel;
}

declare class VoiceChannel extends Channel { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VoiceChannel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VoiceChannel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoiceChannel;
	static C(Other: UObject): VoiceChannel;
}

declare class CheckBoxStyleAsset extends UObject { 
	CheckBoxStyle: CheckBoxStyle;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CheckBoxStyleAsset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CheckBoxStyleAsset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CheckBoxStyleAsset;
	static C(Other: UObject): CheckBoxStyleAsset;
}

declare class PluginCommandlet extends Commandlet { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PluginCommandlet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PluginCommandlet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginCommandlet;
	static C(Other: UObject): PluginCommandlet;
}

declare class SmokeTestCommandlet extends Commandlet { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SmokeTestCommandlet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SmokeTestCommandlet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SmokeTestCommandlet;
	static C(Other: UObject): SmokeTestCommandlet;
}

declare class CurveEdPresetCurve extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CurveEdPresetCurve;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CurveEdPresetCurve;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CurveEdPresetCurve;
	static C(Other: UObject): CurveEdPresetCurve;
}

declare class AnimationSettings extends DeveloperSettings { 
	CompressCommandletVersion: number;
	KeyEndEffectorsMatchNameArray: string[];
	DefaultCompressionAlgorithm: UnrealEngineClass;
	RotationCompressionFormat: AnimationCompressionFormat;
	TranslationCompressionFormat: AnimationCompressionFormat;
	AlternativeCompressionThreshold: number;
	ForceRecompression: boolean;
	bOnlyCheckForMissingSkeletalMeshes: boolean;
	bForceBelowThreshold: boolean;
	bFirstRecompressUsingCurrentOrDefault: boolean;
	bRaiseMaxErrorToExisting: boolean;
	bTryFixedBitwiseCompression: boolean;
	bTryPerTrackBitwiseCompression: boolean;
	bTryLinearKeyRemovalCompression: boolean;
	bTryIntervalKeyRemoval: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AnimationSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AnimationSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationSettings;
	static C(Other: UObject): AnimationSettings;
}

declare class AudioQualitySettings { 
	DisplayName: string;
	MaxChannels: number;
}

declare class AudioSettings extends DeveloperSettings { 
	DefaultSoundClassName: StringAssetReference;
	DefaultBaseSoundMix: StringAssetReference;
	VoiPSoundClass: StringAssetReference;
	LowPassFilterResonance: number;
	MaximumConcurrentStreams: number;
	QualityLevels: AudioQualitySettings[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AudioSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AudioSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioSettings;
	static C(Other: UObject): AudioSettings;
}

declare type ERenderFocusRule = string;
declare type EUIScalingRule = string;
declare class DPICustomScalingRule extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DPICustomScalingRule;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DPICustomScalingRule;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DPICustomScalingRule;
	static C(Other: UObject): DPICustomScalingRule;
}

declare class UserInterfaceSettings extends DeveloperSettings { 
	RenderFocusRule: ERenderFocusRule;
	DefaultCursor: StringClassReference;
	TextEditBeamCursor: StringClassReference;
	CrosshairsCursor: StringClassReference;
	GrabHandCursor: StringClassReference;
	GrabHandClosedCursor: StringClassReference;
	SlashedCircleCursor: StringClassReference;
	ApplicationScale: number;
	UIScaleRule: EUIScalingRule;
	CustomScalingRuleClass: StringClassReference;
	UIScaleCurve: RuntimeFloatCurve;
	CursorClasses: UObject[];
	CustomScalingRuleClassInstance: UnrealEngineClass;
	CustomScalingRule: DPICustomScalingRule;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): UserInterfaceSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): UserInterfaceSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UserInterfaceSettings;
	static C(Other: UObject): UserInterfaceSettings;
}

declare class StreamingSettings extends DeveloperSettings { 
	AsyncLoadingThreadEnabled: boolean;
	WarnIfTimeLimitExceeded: boolean;
	TimeLimitExceededMultiplier: number;
	TimeLimitExceededMinTime: number;
	MinBulkDataSizeForAsyncLoading: number;
	AsyncIOBandwidthLimit: number;
	UseBackgroundLevelStreaming: boolean;
	AsyncLoadingUseFullTimeLimit: boolean;
	AsyncLoadingTimeLimit: number;
	PriorityAsyncLoadingExtraTime: number;
	LevelStreamingActorsUpdateTimeLimit: number;
	LevelStreamingComponentsRegistrationGranularity: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): StreamingSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): StreamingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StreamingSettings;
	static C(Other: UObject): StreamingSettings;
}

declare class GarbageCollectionSettings extends DeveloperSettings { 
	TimeBetweenPurgingPendingKillObjects: number;
	FlushStreamingOnGC: boolean;
	AllowParallelGC: boolean;
	NumRetriesBeforeForcingGC: number;
	MaxObjectsNotConsideredByGC: number;
	SizeOfPermanentObjectPool: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GarbageCollectionSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GarbageCollectionSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GarbageCollectionSettings;
	static C(Other: UObject): GarbageCollectionSettings;
}

declare class NetworkSettings extends DeveloperSettings { 
	bVerifyPeer: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NetworkSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NetworkSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NetworkSettings;
	static C(Other: UObject): NetworkSettings;
}

declare type ESettingsLockedAxis = string;
declare type ESettingsDOF = string;
declare class PhysicalSurfaceName { 
	Type: EPhysicalSurface;
	Name: string;
}

declare class PhysicsSettings extends DeveloperSettings { 
	DefaultGravityZ: number;
	DefaultTerminalVelocity: number;
	DefaultFluidFriction: number;
	RagdollAggregateThreshold: number;
	TriangleMeshTriangleMinAreaThreshold: number;
	bEnableAsyncScene: boolean;
	bEnableShapeSharing: boolean;
	bEnablePCM: boolean;
	bWarnMissingLocks: boolean;
	bEnable2DPhysics: boolean;
	LockedAxis: ESettingsLockedAxis;
	DefaultDegreesOfFreedom: ESettingsDOF;
	BounceThresholdVelocity: number;
	FrictionCombineMode: EFrictionCombineMode;
	RestitutionCombineMode: EFrictionCombineMode;
	MaxAngularVelocity: number;
	MaxDepenetrationVelocity: number;
	bSimulateSkeletalMeshOnDedicatedServer: boolean;
	bDefaultHasComplexCollision: boolean;
	MaxPhysicsDeltaTime: number;
	bSubstepping: boolean;
	bSubsteppingAsync: boolean;
	MaxSubstepDeltaTime: number;
	MaxSubsteps: number;
	SyncSceneSmoothingFactor: number;
	AsyncSceneSmoothingFactor: number;
	InitialAverageFrameRate: number;
	PhysicalSurfaces: PhysicalSurfaceName[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PhysicsSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PhysicsSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhysicsSettings;
	static C(Other: UObject): PhysicsSettings;
}

declare type ETranslucentSortPolicy = string;
declare type ECustomDepthStencil = string;
declare type EAntiAliasingMethodUI = string;
declare type EEarlyZPass = string;
declare type EClearSceneOptions = string;
declare class RendererSettings extends DeveloperSettings { 
	bMobileHDR: boolean;
	MobileNumDynamicPointLights: any;
	bMobileDynamicPointLightsUseStaticBranch: boolean;
	bOcclusionCulling: boolean;
	MinScreenRadiusForLights: number;
	MinScreenRadiusForEarlyZPass: number;
	MinScreenRadiusForCSMdepth: number;
	bPrecomputedVisibilityWarning: boolean;
	bTextureStreaming: boolean;
	bUseDXT5NormalMaps: boolean;
	bAllowStaticLighting: boolean;
	bUseNormalMapsForStaticLighting: boolean;
	bGenerateMeshDistanceFields: boolean;
	bGenerateLandscapeGIData: boolean;
	TessellationAdaptivePixelsPerTriangle: number;
	bSeparateTranslucency: boolean;
	TranslucentSortPolicy: ETranslucentSortPolicy;
	TranslucentSortAxis: Vector;
	CustomDepthStencil: ECustomDepthStencil;
	bDefaultFeatureBloom: boolean;
	bDefaultFeatureAmbientOcclusion: boolean;
	bDefaultFeatureAmbientOcclusionStaticFraction: boolean;
	bDefaultFeatureAutoExposure: boolean;
	bDefaultFeatureMotionBlur: boolean;
	bDefaultFeatureLensFlare: boolean;
	DefaultFeatureAntiAliasing: EAntiAliasingMethodUI;
	EarlyZPass: EEarlyZPass;
	bEarlyZPassMovable: boolean;
	bDBuffer: boolean;
	ClearSceneMethod: EClearSceneOptions;
	bBasePassOutputsVelocity: boolean;
	WireframeCullThreshold: number;
	UIScaleRule: EUIScalingRule;
	UIScaleCurve: RuntimeFloatCurve;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): RendererSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RendererSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RendererSettings;
	static C(Other: UObject): RendererSettings;
}

declare class TextureLODGroup { 
	Group: TextureGroup;
	LODBias: number;
	NumStreamedMips: number;
	MipGenSettings: TextureMipGenSettings;
	MinLODSize: number;
	MaxLODSize: number;
	MinMagFilter: string;
	MipFilter: string;
}

declare class TextureLODSettings extends UObject { 
	TextureLODGroups: TextureLODGroup[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TextureLODSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TextureLODSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextureLODSettings;
	static C(Other: UObject): TextureLODSettings;
}

declare class DeviceProfile extends TextureLODSettings { 
	DeviceType: string;
	BaseProfileName: string;
	Parent: UObject;
	CVars: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DeviceProfile;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DeviceProfile;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeviceProfile;
	static C(Other: UObject): DeviceProfile;
}

declare class DeviceProfileManager extends UObject { 
	Profiles: UObject[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DeviceProfileManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DeviceProfileManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeviceProfileManager;
	static C(Other: UObject): DeviceProfileManager;
}

declare class DistributionFloatConstant extends DistributionFloat { 
	Constant: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatConstant;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatConstant;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatConstant;
	static C(Other: UObject): DistributionFloatConstant;
}

declare type DistributionParamMode = string;
declare class DistributionFloatParameterBase extends DistributionFloatConstant { 
	ParameterName: string;
	MinInput: number;
	MaxInput: number;
	MinOutput: number;
	MaxOutput: number;
	ParamMode: DistributionParamMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatParameterBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatParameterBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatParameterBase;
	static C(Other: UObject): DistributionFloatParameterBase;
}

declare class DistributionFloatParticleParameter extends DistributionFloatParameterBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatParticleParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatParticleParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatParticleParameter;
	static C(Other: UObject): DistributionFloatParticleParameter;
}

declare class DistributionFloatConstantCurve extends DistributionFloat { 
	ConstantCurve: InterpCurveFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatConstantCurve;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatConstantCurve;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatConstantCurve;
	static C(Other: UObject): DistributionFloatConstantCurve;
}

declare class DistributionFloatUniform extends DistributionFloat { 
	Min: number;
	Max: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatUniform;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatUniform;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatUniform;
	static C(Other: UObject): DistributionFloatUniform;
}

declare class InterpCurvePointVector2D { 
	InVal: number;
	OutVal: Vector2D;
	ArriveTangent: Vector2D;
	LeaveTangent: Vector2D;
	InterpMode: EInterpCurveMode;
}

declare class InterpCurveVector2D { 
	Points: InterpCurvePointVector2D[];
	bIsLooped: boolean;
	LoopKeyOffset: number;
}

declare class DistributionFloatUniformCurve extends DistributionFloat { 
	ConstantCurve: InterpCurveVector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionFloatUniformCurve;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionFloatUniformCurve;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionFloatUniformCurve;
	static C(Other: UObject): DistributionFloatUniformCurve;
}

declare type EDistributionVectorLockFlags = string;
declare class DistributionVectorConstant extends DistributionVector { 
	Constant: Vector;
	bLockAxes: boolean;
	LockedAxes: EDistributionVectorLockFlags;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorConstant;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorConstant;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorConstant;
	static C(Other: UObject): DistributionVectorConstant;
}

declare class DistributionVectorParameterBase extends DistributionVectorConstant { 
	ParameterName: string;
	MinInput: Vector;
	MaxInput: Vector;
	MinOutput: Vector;
	MaxOutput: Vector;
	ParamModes: DistributionParamMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorParameterBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorParameterBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorParameterBase;
	static C(Other: UObject): DistributionVectorParameterBase;
}

declare class DistributionVectorParticleParameter extends DistributionVectorParameterBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorParticleParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorParticleParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorParticleParameter;
	static C(Other: UObject): DistributionVectorParticleParameter;
}

declare class DistributionVectorConstantCurve extends DistributionVector { 
	ConstantCurve: InterpCurveVector;
	bLockAxes: boolean;
	LockedAxes: EDistributionVectorLockFlags;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorConstantCurve;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorConstantCurve;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorConstantCurve;
	static C(Other: UObject): DistributionVectorConstantCurve;
}

declare type EDistributionVectorMirrorFlags = string;
declare class DistributionVectorUniform extends DistributionVector { 
	Max: Vector;
	Min: Vector;
	bLockAxes: boolean;
	LockedAxes: EDistributionVectorLockFlags;
	MirrorFlags: EDistributionVectorMirrorFlags;
	bUseExtremes: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorUniform;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorUniform;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorUniform;
	static C(Other: UObject): DistributionVectorUniform;
}

declare class TwoVectors { 
	v1: Vector;
	v2: Vector;
}

declare class InterpCurvePointTwoVectors { 
	InVal: number;
	OutVal: TwoVectors;
	ArriveTangent: TwoVectors;
	LeaveTangent: TwoVectors;
	InterpMode: EInterpCurveMode;
}

declare class InterpCurveTwoVectors { 
	Points: InterpCurvePointTwoVectors[];
	bIsLooped: boolean;
	LoopKeyOffset: number;
}

declare class DistributionVectorUniformCurve extends DistributionVector { 
	ConstantCurve: InterpCurveTwoVectors;
	bLockAxes1: boolean;
	bLockAxes2: boolean;
	LockedAxes: EDistributionVectorLockFlags;
	MirrorFlags: EDistributionVectorMirrorFlags;
	bUseExtremes: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DistributionVectorUniformCurve;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DistributionVectorUniformCurve;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DistributionVectorUniformCurve;
	static C(Other: UObject): DistributionVectorUniformCurve;
}

declare class BlueprintComponentDelegateBinding { 
	ComponentPropertyName: string;
	DelegatePropertyName: string;
	FunctionNameToBind: string;
}

declare class ComponentDelegateBinding extends DynamicBlueprintBinding { 
	ComponentDelegateBindings: BlueprintComponentDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ComponentDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ComponentDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ComponentDelegateBinding;
	static C(Other: UObject): ComponentDelegateBinding;
}

declare class InputDelegateBinding extends DynamicBlueprintBinding { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputDelegateBinding;
	static C(Other: UObject): InputDelegateBinding;
}

declare class BlueprintInputDelegateBinding { 
	bConsumeInput: boolean;
	bExecuteWhenPaused: boolean;
	bOverrideParentBinding: boolean;
}

declare class BlueprintInputActionDelegateBinding extends BlueprintInputDelegateBinding { 
	InputActionName: string;
	InputKeyEvent: EInputEvent;
	FunctionNameToBind: string;
}

declare class InputActionDelegateBinding extends InputDelegateBinding { 
	InputActionDelegateBindings: BlueprintInputActionDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputActionDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputActionDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputActionDelegateBinding;
	static C(Other: UObject): InputActionDelegateBinding;
}

declare class BlueprintInputAxisDelegateBinding extends BlueprintInputDelegateBinding { 
	InputAxisName: string;
	FunctionNameToBind: string;
}

declare class InputAxisDelegateBinding extends InputDelegateBinding { 
	InputAxisDelegateBindings: BlueprintInputAxisDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputAxisDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputAxisDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputAxisDelegateBinding;
	static C(Other: UObject): InputAxisDelegateBinding;
}

declare class BlueprintInputAxisKeyDelegateBinding extends BlueprintInputDelegateBinding { 
	AxisKey: Key;
	FunctionNameToBind: string;
}

declare class InputAxisKeyDelegateBinding extends InputDelegateBinding { 
	InputAxisKeyDelegateBindings: BlueprintInputAxisKeyDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputAxisKeyDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputAxisKeyDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputAxisKeyDelegateBinding;
	static C(Other: UObject): InputAxisKeyDelegateBinding;
}

declare class InputVectorAxisDelegateBinding extends InputAxisKeyDelegateBinding { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputVectorAxisDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputVectorAxisDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputVectorAxisDelegateBinding;
	static C(Other: UObject): InputVectorAxisDelegateBinding;
}

declare class BlueprintInputKeyDelegateBinding extends BlueprintInputDelegateBinding { 
	InputChord: InputChord;
	InputKeyEvent: EInputEvent;
	FunctionNameToBind: string;
}

declare class InputKeyDelegateBinding extends InputDelegateBinding { 
	InputKeyDelegateBindings: BlueprintInputKeyDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputKeyDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputKeyDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputKeyDelegateBinding;
	static C(Other: UObject): InputKeyDelegateBinding;
}

declare class BlueprintInputTouchDelegateBinding extends BlueprintInputDelegateBinding { 
	InputKeyEvent: EInputEvent;
	FunctionNameToBind: string;
}

declare class InputTouchDelegateBinding extends InputDelegateBinding { 
	InputTouchDelegateBindings: BlueprintInputTouchDelegateBinding[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputTouchDelegateBinding;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputTouchDelegateBinding;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputTouchDelegateBinding;
	static C(Other: UObject): InputTouchDelegateBinding;
}

declare class EdGraphNode_Documentation extends EdGraphNode { 
	Link: string;
	Excerpt: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphNode_Documentation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphNode_Documentation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_Documentation;
	static C(Other: UObject): EdGraphNode_Documentation;
}

declare class ImportantToggleSettingInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ImportantToggleSettingInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ImportantToggleSettingInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImportantToggleSettingInterface;
	static C(Other: UObject): ImportantToggleSettingInterface;
}

declare class EndUserSettings extends UObject { 
	bSendAnonymousUsageDataToEpic: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EndUserSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EndUserSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndUserSettings;
	static C(Other: UObject): EndUserSettings;
}

declare class GameEngine extends Engine { 
	MaxDeltaTime: number;
	ServerFlushLogInterval: number;
	GameInstance: GameInstance;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameEngine;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameEngine;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameEngine;
	static C(Other: UObject): GameEngine;
}

declare class InputAxisProperties { 
	DeadZone: number;
	Sensitivity: number;
	Exponent: number;
	bInvert: boolean;
}

declare class InputAxisConfigEntry { 
	AxisKeyName: string;
	AxisProperties: InputAxisProperties;
}

declare class InputActionKeyMapping { 
	ActionName: string;
	Key: Key;
	bShift: boolean;
	bCtrl: boolean;
	bAlt: boolean;
	bCmd: boolean;
}

declare class InputAxisKeyMapping { 
	AxisName: string;
	Key: Key;
	Scale: number;
}

declare class InputSettings extends UObject { 
	AxisConfig: InputAxisConfigEntry[];
	bAltEnterTogglesFullscreen: boolean;
	bUseMouseForTouch: boolean;
	bEnableMouseSmoothing: boolean;
	bEnableFOVScaling: boolean;
	FOVScale: number;
	DoubleClickTime: number;
	ActionMappings: InputActionKeyMapping[];
	AxisMappings: InputAxisKeyMapping[];
	bAlwaysShowTouchInterface: boolean;
	bShowConsoleOnFourFingerTap: boolean;
	DefaultTouchInterface: StringAssetReference;
	ConsoleKey: Key;
	ConsoleKeys: Key[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InputSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InputSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputSettings;
	static C(Other: UObject): InputSettings;
}

declare class InterpFilter_Classes extends InterpFilter { 
	ClassToFilterBy: UnrealEngineClass;
	TrackClasses: UnrealEngineClass[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpFilter_Classes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpFilter_Classes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpFilter_Classes;
	static C(Other: UObject): InterpFilter_Classes;
}

declare class InterpFilter_Custom extends InterpFilter { 
	GroupsToInclude: InterpGroup[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpFilter_Custom;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpFilter_Custom;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpFilter_Custom;
	static C(Other: UObject): InterpFilter_Custom;
}

declare class CameraPreviewInfo { 
	PawnClass: UnrealEngineClass;
	AnimSeq: AnimSequence;
	Location: Vector;
	Rotation: Rotator;
	PawnInst: Pawn;
}

declare class InterpGroupCamera extends InterpGroup { 
	CameraAnimInst: CameraAnim;
	Target: CameraPreviewInfo;
	CompressTolerance: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpGroupCamera;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpGroupCamera;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpGroupCamera;
	static C(Other: UObject): InterpGroupCamera;
}

declare class InterpGroupInstCamera extends InterpGroupInst { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpGroupInstCamera;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpGroupInstCamera;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpGroupInstCamera;
	static C(Other: UObject): InterpGroupInstCamera;
}

declare class InterpGroupInstDirector extends InterpGroupInst { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpGroupInstDirector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpGroupInstDirector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpGroupInstDirector;
	static C(Other: UObject): InterpGroupInstDirector;
}

declare class BoolTrackKey { 
	Time: number;
	Value: boolean;
}

declare class InterpTrackBoolProp extends InterpTrack { 
	BoolTrack: BoolTrackKey[];
	PropertyName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackBoolProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackBoolProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackBoolProp;
	static C(Other: UObject): InterpTrackBoolProp;
}

declare class DirectorTrackCut { 
	Time: number;
	TransitionTime: number;
	TargetCamGroup: string;
	ShotNumber: number;
}

declare class InterpTrackDirector extends InterpTrack { 
	CutTrack: DirectorTrackCut[];
	bSimulateCameraCutsOnClients: boolean;
	PreviewCamera: CameraActor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackDirector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackDirector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackDirector;
	static C(Other: UObject): InterpTrackDirector;
}

declare class EventTrackKey { 
	Time: number;
	EventName: string;
}

declare class InterpTrackEvent extends InterpTrack { 
	EventTrack: EventTrackKey[];
	bFireEventsWhenForwards: boolean;
	bFireEventsWhenBackwards: boolean;
	bFireEventsWhenJumpingForwards: boolean;
	bUseCustomEventName: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackEvent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackEvent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackEvent;
	static C(Other: UObject): InterpTrackEvent;
}

declare class InterpTrackFloatBase extends InterpTrack { 
	FloatTrack: InterpCurveFloat;
	CurveTension: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFloatBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFloatBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFloatBase;
	static C(Other: UObject): InterpTrackFloatBase;
}

declare class AnimControlTrackKey { 
	StartTime: number;
	AnimSeq: AnimSequence;
	AnimStartOffset: number;
	AnimEndOffset: number;
	AnimPlayRate: number;
	bLooping: boolean;
	bReverse: boolean;
}

declare class InterpTrackAnimControl extends InterpTrackFloatBase { 
	SlotName: string;
	AnimSeqs: AnimControlTrackKey[];
	bSkipAnimNotifiers: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackAnimControl;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackAnimControl;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackAnimControl;
	static C(Other: UObject): InterpTrackAnimControl;
}

declare class InterpTrackFade extends InterpTrackFloatBase { 
	bPersistFade: boolean;
	bFadeAudio: boolean;
	FadeColor: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFade;
	static C(Other: UObject): InterpTrackFade;
}

declare class InterpTrackFloatAnimBPParam extends InterpTrackFloatBase { 
	AnimBlueprintClass: UnrealEngineClass;
	ParamName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFloatAnimBPParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFloatAnimBPParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFloatAnimBPParam;
	static C(Other: UObject): InterpTrackFloatAnimBPParam;
}

declare class InterpTrackFloatMaterialParam extends InterpTrackFloatBase { 
	TargetMaterials: MaterialInterface[];
	ParamName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFloatMaterialParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFloatMaterialParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFloatMaterialParam;
	static C(Other: UObject): InterpTrackFloatMaterialParam;
}

declare class InterpTrackFloatParticleParam extends InterpTrackFloatBase { 
	ParamName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFloatParticleParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFloatParticleParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFloatParticleParam;
	static C(Other: UObject): InterpTrackFloatParticleParam;
}

declare class InterpTrackFloatProp extends InterpTrackFloatBase { 
	PropertyName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackFloatProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackFloatProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackFloatProp;
	static C(Other: UObject): InterpTrackFloatProp;
}

declare type EInterpMoveAxis = string;
declare class InterpTrackMoveAxis extends InterpTrackFloatBase { 
	MoveAxis: EInterpMoveAxis;
	LookupTrack: InterpLookupTrack;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackMoveAxis;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackMoveAxis;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackMoveAxis;
	static C(Other: UObject): InterpTrackMoveAxis;
}

declare class InterpTrackSlomo extends InterpTrackFloatBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackSlomo;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackSlomo;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackSlomo;
	static C(Other: UObject): InterpTrackSlomo;
}

declare class InterpCurvePointLinearColor { 
	InVal: number;
	OutVal: LinearColor;
	ArriveTangent: LinearColor;
	LeaveTangent: LinearColor;
	InterpMode: EInterpCurveMode;
}

declare class InterpCurveLinearColor { 
	Points: InterpCurvePointLinearColor[];
	bIsLooped: boolean;
	LoopKeyOffset: number;
}

declare class InterpTrackLinearColorBase extends InterpTrack { 
	LinearColorTrack: InterpCurveLinearColor;
	CurveTension: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackLinearColorBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackLinearColorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackLinearColorBase;
	static C(Other: UObject): InterpTrackLinearColorBase;
}

declare class InterpTrackLinearColorProp extends InterpTrackLinearColorBase { 
	PropertyName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackLinearColorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackLinearColorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackLinearColorProp;
	static C(Other: UObject): InterpTrackLinearColorProp;
}

declare class ParticleReplayTrackKey { 
	Time: number;
	Duration: number;
	ClipIDNumber: number;
}

declare class InterpTrackParticleReplay extends InterpTrack { 
	TrackKeys: ParticleReplayTrackKey[];
	bIsCapturingReplay: boolean;
	FixedTimeStep: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackParticleReplay;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackParticleReplay;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackParticleReplay;
	static C(Other: UObject): InterpTrackParticleReplay;
}

declare type ETrackToggleAction = string;
declare class ToggleTrackKey { 
	Time: number;
	ToggleAction: ETrackToggleAction;
}

declare class InterpTrackToggle extends InterpTrack { 
	ToggleTrack: ToggleTrackKey[];
	bActivateSystemEachUpdate: boolean;
	bActivateWithJustAttachedFlag: boolean;
	bFireEventsWhenForwards: boolean;
	bFireEventsWhenBackwards: boolean;
	bFireEventsWhenJumpingForwards: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackToggle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackToggle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackToggle;
	static C(Other: UObject): InterpTrackToggle;
}

declare class InterpTrackVectorBase extends InterpTrack { 
	VectorTrack: InterpCurveVector;
	CurveTension: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackVectorBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackVectorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackVectorBase;
	static C(Other: UObject): InterpTrackVectorBase;
}

declare class InterpTrackAudioMaster extends InterpTrackVectorBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackAudioMaster;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackAudioMaster;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackAudioMaster;
	static C(Other: UObject): InterpTrackAudioMaster;
}

declare class InterpTrackColorProp extends InterpTrackVectorBase { 
	PropertyName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackColorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackColorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackColorProp;
	static C(Other: UObject): InterpTrackColorProp;
}

declare class InterpTrackColorScale extends InterpTrackVectorBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackColorScale;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackColorScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackColorScale;
	static C(Other: UObject): InterpTrackColorScale;
}

declare class SoundTrackKey { 
	Time: number;
	Volume: number;
	Pitch: number;
	Sound: SoundBase;
}

declare class InterpTrackSound extends InterpTrackVectorBase { 
	Sounds: SoundTrackKey[];
	bPlayOnReverse: boolean;
	bContinueSoundOnMatineeEnd: boolean;
	bSuppressSubtitles: boolean;
	bTreatAsDialogue: boolean;
	bAttach: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackSound;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackSound;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackSound;
	static C(Other: UObject): InterpTrackSound;
}

declare class InterpTrackVectorMaterialParam extends InterpTrackVectorBase { 
	TargetMaterials: MaterialInterface[];
	ParamName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackVectorMaterialParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackVectorMaterialParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackVectorMaterialParam;
	static C(Other: UObject): InterpTrackVectorMaterialParam;
}

declare class InterpTrackVectorProp extends InterpTrackVectorBase { 
	PropertyName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackVectorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackVectorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackVectorProp;
	static C(Other: UObject): InterpTrackVectorProp;
}

declare type EVisibilityTrackAction = string;
declare type EVisibilityTrackCondition = string;
declare class VisibilityTrackKey { 
	Time: number;
	Action: EVisibilityTrackAction;
	ActiveCondition: EVisibilityTrackCondition;
}

declare class InterpTrackVisibility extends InterpTrack { 
	VisibilityTrack: VisibilityTrackKey[];
	bFireEventsWhenForwards: boolean;
	bFireEventsWhenBackwards: boolean;
	bFireEventsWhenJumpingForwards: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackVisibility;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackVisibility;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackVisibility;
	static C(Other: UObject): InterpTrackVisibility;
}

declare class InterpTrackInstAnimControl extends InterpTrackInst { 
	LastUpdatePosition: number;
	InitPosition: Vector;
	InitRotation: Rotator;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstAnimControl;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstAnimControl;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstAnimControl;
	static C(Other: UObject): InterpTrackInstAnimControl;
}

declare class InterpTrackInstAudioMaster extends InterpTrackInst { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstAudioMaster;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstAudioMaster;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstAudioMaster;
	static C(Other: UObject): InterpTrackInstAudioMaster;
}

declare class InterpTrackInstColorScale extends InterpTrackInst { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstColorScale;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstColorScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstColorScale;
	static C(Other: UObject): InterpTrackInstColorScale;
}

declare class InterpTrackInstEvent extends InterpTrackInst { 
	LastUpdatePosition: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstEvent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstEvent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstEvent;
	static C(Other: UObject): InterpTrackInstEvent;
}

declare class InterpTrackInstFade extends InterpTrackInst { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstFade;
	static C(Other: UObject): InterpTrackInstFade;
}

declare class InterpTrackInstFloatAnimBPParam extends InterpTrackInst { 
	AnimScriptInstance: AnimInstance;
	ResetFloat: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstFloatAnimBPParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstFloatAnimBPParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstFloatAnimBPParam;
	static C(Other: UObject): InterpTrackInstFloatAnimBPParam;
}

declare class PrimitiveMaterialRef { 
	Primitive: PrimitiveComponent;
	Decal: DecalComponent;
	ElementIndex: number;
}

declare class InterpTrackInstFloatMaterialParam extends InterpTrackInst { 
	MaterialInstances: MaterialInstanceDynamic[];
	ResetFloats: number[];
	PrimitiveMaterialRefs: PrimitiveMaterialRef[];
	InstancedTrack: InterpTrackFloatMaterialParam;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstFloatMaterialParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstFloatMaterialParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstFloatMaterialParam;
	static C(Other: UObject): InterpTrackInstFloatMaterialParam;
}

declare class InterpTrackInstFloatParticleParam extends InterpTrackInst { 
	ResetFloat: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstFloatParticleParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstFloatParticleParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstFloatParticleParam;
	static C(Other: UObject): InterpTrackInstFloatParticleParam;
}

declare class InterpTrackInstParticleReplay extends InterpTrackInst { 
	LastUpdatePosition: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstParticleReplay;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstParticleReplay;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstParticleReplay;
	static C(Other: UObject): InterpTrackInstParticleReplay;
}

declare class InterpTrackInstProperty extends InterpTrackInst { 
	InterpProperty: Property;
	PropertyOuterObjectInst: UObject;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstProperty;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstProperty;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstProperty;
	static C(Other: UObject): InterpTrackInstProperty;
}

declare class InterpTrackInstBoolProp extends InterpTrackInstProperty { 
	BoolProperty: BoolProperty;
	ResetBool: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstBoolProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstBoolProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstBoolProp;
	static C(Other: UObject): InterpTrackInstBoolProp;
}

declare class InterpTrackInstColorProp extends InterpTrackInstProperty { 
	ResetColor: Color;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstColorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstColorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstColorProp;
	static C(Other: UObject): InterpTrackInstColorProp;
}

declare class InterpTrackInstFloatProp extends InterpTrackInstProperty { 
	ResetFloat: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstFloatProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstFloatProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstFloatProp;
	static C(Other: UObject): InterpTrackInstFloatProp;
}

declare class InterpTrackInstLinearColorProp extends InterpTrackInstProperty { 
	ResetColor: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstLinearColorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstLinearColorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstLinearColorProp;
	static C(Other: UObject): InterpTrackInstLinearColorProp;
}

declare class InterpTrackInstVectorProp extends InterpTrackInstProperty { 
	ResetVector: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstVectorProp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstVectorProp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstVectorProp;
	static C(Other: UObject): InterpTrackInstVectorProp;
}

declare class InterpTrackInstSlomo extends InterpTrackInst { 
	OldTimeDilation: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstSlomo;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstSlomo;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstSlomo;
	static C(Other: UObject): InterpTrackInstSlomo;
}

declare class InterpTrackInstSound extends InterpTrackInst { 
	LastUpdatePosition: number;
	PlayAudioComp: AudioComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstSound;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstSound;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstSound;
	static C(Other: UObject): InterpTrackInstSound;
}

declare class InterpTrackInstToggle extends InterpTrackInst { 
	Action: ETrackToggleAction;
	LastUpdatePosition: number;
	bSavedActiveState: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstToggle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstToggle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstToggle;
	static C(Other: UObject): InterpTrackInstToggle;
}

declare class InterpTrackInstVectorMaterialParam extends InterpTrackInst { 
	MaterialInstances: MaterialInstanceDynamic[];
	ResetVectors: Vector[];
	PrimitiveMaterialRefs: PrimitiveMaterialRef[];
	InstancedTrack: InterpTrackVectorMaterialParam;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstVectorMaterialParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstVectorMaterialParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstVectorMaterialParam;
	static C(Other: UObject): InterpTrackInstVectorMaterialParam;
}

declare class InterpTrackInstVisibility extends InterpTrackInst { 
	Action: EVisibilityTrackAction;
	LastUpdatePosition: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InterpTrackInstVisibility;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InterpTrackInstVisibility;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterpTrackInstVisibility;
	static C(Other: UObject): InterpTrackInstVisibility;
}

declare class IntSerialization extends UObject { 
	UnsignedInt16Variable: any;
	UnsignedInt32Variable: any;
	UnsignedInt64Variable: any;
	SignedInt8Variable: any;
	SignedInt16Variable: any;
	SignedInt64Variable: any;
	UnsignedInt8Variable: number;
	SignedInt32Variable: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): IntSerialization;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): IntSerialization;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IntSerialization;
	static C(Other: UObject): IntSerialization;
}

declare class LevelStreamingAlwaysLoaded extends LevelStreaming { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelStreamingAlwaysLoaded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelStreamingAlwaysLoaded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelStreamingAlwaysLoaded;
	static C(Other: UObject): LevelStreamingAlwaysLoaded;
}

declare class LevelStreamingKismet extends LevelStreaming { 
	bInitiallyLoaded: boolean;
	bInitiallyVisible: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelStreamingKismet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelStreamingKismet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelStreamingKismet;
	static C(Other: UObject): LevelStreamingKismet;
}

declare class LevelStreamingPersistent extends LevelStreaming { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelStreamingPersistent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelStreamingPersistent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelStreamingPersistent;
	static C(Other: UObject): LevelStreamingPersistent;
}

declare class LightmappedSurfaceCollection extends UObject { 
	SourceModel: Model;
	Surfaces: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightmappedSurfaceCollection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightmappedSurfaceCollection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightmappedSurfaceCollection;
	static C(Other: UObject): LightmappedSurfaceCollection;
}

declare class LightmassPrimitiveSettingsObject extends UObject { 
	LightmassSettings: LightmassPrimitiveSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightmassPrimitiveSettingsObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightmassPrimitiveSettingsObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightmassPrimitiveSettingsObject;
	static C(Other: UObject): LightmassPrimitiveSettingsObject;
}

declare class EngineMessage extends LocalMessage { 
	FailedPlaceMessage: string;
	MaxedOutMessage: string;
	EnteredMessage: string;
	LeftMessage: string;
	GlobalNameChange: string;
	SpecEnteredMessage: string;
	NewPlayerMessage: string;
	NewSpecMessage: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EngineMessage;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EngineMessage;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EngineMessage;
	static C(Other: UObject): EngineMessage;
}

declare class MaterialExpressionAbs extends MaterialExpression { 
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionAbs;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionAbs;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionAbs;
	static C(Other: UObject): MaterialExpressionAbs;
}

declare class MaterialExpressionActorPositionWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionActorPositionWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionActorPositionWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionActorPositionWS;
	static C(Other: UObject): MaterialExpressionActorPositionWS;
}

declare class MaterialExpressionAdd extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	ConstA: number;
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionAdd;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionAdd;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionAdd;
	static C(Other: UObject): MaterialExpressionAdd;
}

declare class MaterialExpressionAppendVector extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionAppendVector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionAppendVector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionAppendVector;
	static C(Other: UObject): MaterialExpressionAppendVector;
}

declare class MaterialExpressionAtmosphericFogColor extends MaterialExpression { 
	WorldPosition: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionAtmosphericFogColor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionAtmosphericFogColor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionAtmosphericFogColor;
	static C(Other: UObject): MaterialExpressionAtmosphericFogColor;
}

declare class MaterialExpressionBlackBody extends MaterialExpression { 
	Temp: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionBlackBody;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionBlackBody;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionBlackBody;
	static C(Other: UObject): MaterialExpressionBlackBody;
}

declare class MaterialExpressionBreakMaterialAttributes extends MaterialExpression { 
	Struct: ExpressionInput;
	MaterialAttributes: MaterialAttributesInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionBreakMaterialAttributes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionBreakMaterialAttributes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionBreakMaterialAttributes;
	static C(Other: UObject): MaterialExpressionBreakMaterialAttributes;
}

declare class MaterialExpressionBumpOffset extends MaterialExpression { 
	Coordinate: ExpressionInput;
	Height: ExpressionInput;
	HeightRatioInput: ExpressionInput;
	HeightRatio: number;
	ReferencePlane: number;
	ConstCoordinate: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionBumpOffset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionBumpOffset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionBumpOffset;
	static C(Other: UObject): MaterialExpressionBumpOffset;
}

declare class MaterialExpressionCameraPositionWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCameraPositionWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCameraPositionWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCameraPositionWS;
	static C(Other: UObject): MaterialExpressionCameraPositionWS;
}

declare class MaterialExpressionCameraVectorWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCameraVectorWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCameraVectorWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCameraVectorWS;
	static C(Other: UObject): MaterialExpressionCameraVectorWS;
}

declare class MaterialExpressionCeil extends MaterialExpression { 
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCeil;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCeil;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCeil;
	static C(Other: UObject): MaterialExpressionCeil;
}

declare type EClampMode = string;
declare class MaterialExpressionClamp extends MaterialExpression { 
	Input: ExpressionInput;
	Min: ExpressionInput;
	Max: ExpressionInput;
	ClampMode: EClampMode;
	MinDefault: number;
	MaxDefault: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionClamp;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionClamp;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionClamp;
	static C(Other: UObject): MaterialExpressionClamp;
}

declare class MaterialExpressionCollectionParameter extends MaterialExpression { 
	Collection: MaterialParameterCollection;
	ParameterName: string;
	ParameterId: Guid;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCollectionParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCollectionParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCollectionParameter;
	static C(Other: UObject): MaterialExpressionCollectionParameter;
}

declare class MaterialExpressionComponentMask extends MaterialExpression { 
	Input: ExpressionInput;
	R: boolean;
	G: boolean;
	B: boolean;
	A: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionComponentMask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionComponentMask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionComponentMask;
	static C(Other: UObject): MaterialExpressionComponentMask;
}

declare class MaterialExpressionConstant extends MaterialExpression { 
	R: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionConstant;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionConstant;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionConstant;
	static C(Other: UObject): MaterialExpressionConstant;
}

declare class MaterialExpressionConstant2Vector extends MaterialExpression { 
	R: number;
	G: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionConstant2Vector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionConstant2Vector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionConstant2Vector;
	static C(Other: UObject): MaterialExpressionConstant2Vector;
}

declare class MaterialExpressionConstant3Vector extends MaterialExpression { 
	Constant: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionConstant3Vector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionConstant3Vector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionConstant3Vector;
	static C(Other: UObject): MaterialExpressionConstant3Vector;
}

declare class MaterialExpressionConstant4Vector extends MaterialExpression { 
	Constant: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionConstant4Vector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionConstant4Vector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionConstant4Vector;
	static C(Other: UObject): MaterialExpressionConstant4Vector;
}

declare class MaterialExpressionConstantBiasScale extends MaterialExpression { 
	Input: ExpressionInput;
	Bias: number;
	Scale: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionConstantBiasScale;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionConstantBiasScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionConstantBiasScale;
	static C(Other: UObject): MaterialExpressionConstantBiasScale;
}

declare class MaterialExpressionCosine extends MaterialExpression { 
	Input: ExpressionInput;
	Period: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCosine;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCosine;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCosine;
	static C(Other: UObject): MaterialExpressionCosine;
}

declare class MaterialExpressionCrossProduct extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCrossProduct;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCrossProduct;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCrossProduct;
	static C(Other: UObject): MaterialExpressionCrossProduct;
}

declare type ECustomMaterialOutputType = string;
declare class CustomInput { 
	InputName: string;
	Input: ExpressionInput;
}

declare class MaterialExpressionCustom extends MaterialExpression { 
	Code: string;
	OutputType: ECustomMaterialOutputType;
	Description: string;
	Inputs: CustomInput[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionCustom;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionCustom;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionCustom;
	static C(Other: UObject): MaterialExpressionCustom;
}

declare class MaterialExpressionDDX extends MaterialExpression { 
	Value: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDDX;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDDX;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDDX;
	static C(Other: UObject): MaterialExpressionDDX;
}

declare class MaterialExpressionDDY extends MaterialExpression { 
	Value: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDDY;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDDY;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDDY;
	static C(Other: UObject): MaterialExpressionDDY;
}

declare class MaterialExpressionDecalMipmapLevel extends MaterialExpression { 
	TextureSize: ExpressionInput;
	ConstWidth: number;
	ConstHeight: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDecalMipmapLevel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDecalMipmapLevel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDecalMipmapLevel;
	static C(Other: UObject): MaterialExpressionDecalMipmapLevel;
}

declare class MaterialExpressionDepthFade extends MaterialExpression { 
	InOpacity: ExpressionInput;
	FadeDistance: ExpressionInput;
	OpacityDefault: number;
	FadeDistanceDefault: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDepthFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDepthFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDepthFade;
	static C(Other: UObject): MaterialExpressionDepthFade;
}

declare type EDepthOfFieldFunctionValue = string;
declare class MaterialExpressionDepthOfFieldFunction extends MaterialExpression { 
	FunctionValue: EDepthOfFieldFunctionValue;
	Depth: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDepthOfFieldFunction;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDepthOfFieldFunction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDepthOfFieldFunction;
	static C(Other: UObject): MaterialExpressionDepthOfFieldFunction;
}

declare class MaterialExpressionDeriveNormalZ extends MaterialExpression { 
	InXY: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDeriveNormalZ;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDeriveNormalZ;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDeriveNormalZ;
	static C(Other: UObject): MaterialExpressionDeriveNormalZ;
}

declare class MaterialExpressionDesaturation extends MaterialExpression { 
	Input: ExpressionInput;
	Fraction: ExpressionInput;
	LuminanceFactors: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDesaturation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDesaturation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDesaturation;
	static C(Other: UObject): MaterialExpressionDesaturation;
}

declare class MaterialExpressionDistance extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDistance;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDistance;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDistance;
	static C(Other: UObject): MaterialExpressionDistance;
}

declare class MaterialExpressionDistanceCullFade extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDistanceCullFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDistanceCullFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDistanceCullFade;
	static C(Other: UObject): MaterialExpressionDistanceCullFade;
}

declare class MaterialExpressionDistanceFieldGradient extends MaterialExpression { 
	Position: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDistanceFieldGradient;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDistanceFieldGradient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDistanceFieldGradient;
	static C(Other: UObject): MaterialExpressionDistanceFieldGradient;
}

declare class MaterialExpressionDistanceToNearestSurface extends MaterialExpression { 
	Position: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDistanceToNearestSurface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDistanceToNearestSurface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDistanceToNearestSurface;
	static C(Other: UObject): MaterialExpressionDistanceToNearestSurface;
}

declare class MaterialExpressionDivide extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	ConstA: number;
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDivide;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDivide;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDivide;
	static C(Other: UObject): MaterialExpressionDivide;
}

declare class MaterialExpressionDotProduct extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDotProduct;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDotProduct;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDotProduct;
	static C(Other: UObject): MaterialExpressionDotProduct;
}

declare class MaterialExpressionDynamicParameter extends MaterialExpression { 
	ParamNames: string[];
	DefaultValue: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionDynamicParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionDynamicParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionDynamicParameter;
	static C(Other: UObject): MaterialExpressionDynamicParameter;
}

declare class MaterialExpressionEyeAdaptation extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionEyeAdaptation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionEyeAdaptation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionEyeAdaptation;
	static C(Other: UObject): MaterialExpressionEyeAdaptation;
}

declare class MaterialExpressionFeatureLevelSwitch extends MaterialExpression { 
	Default: ExpressionInput;
	Inputs: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFeatureLevelSwitch;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFeatureLevelSwitch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFeatureLevelSwitch;
	static C(Other: UObject): MaterialExpressionFeatureLevelSwitch;
}

declare class MaterialExpressionFloor extends MaterialExpression { 
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFloor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFloor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFloor;
	static C(Other: UObject): MaterialExpressionFloor;
}

declare class MaterialExpressionFmod extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFmod;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFmod;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFmod;
	static C(Other: UObject): MaterialExpressionFmod;
}

declare class MaterialExpressionFontSample extends MaterialExpression { 
	Font: Font;
	FontTexturePage: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFontSample;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFontSample;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFontSample;
	static C(Other: UObject): MaterialExpressionFontSample;
}

declare class MaterialExpressionFontSampleParameter extends MaterialExpressionFontSample { 
	ParameterName: string;
	ExpressionGUID: Guid;
	Group: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFontSampleParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFontSampleParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFontSampleParameter;
	static C(Other: UObject): MaterialExpressionFontSampleParameter;
}

declare class MaterialExpressionFrac extends MaterialExpression { 
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFrac;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFrac;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFrac;
	static C(Other: UObject): MaterialExpressionFrac;
}

declare class MaterialExpressionFresnel extends MaterialExpression { 
	ExponentIn: ExpressionInput;
	Exponent: number;
	BaseReflectFractionIn: ExpressionInput;
	BaseReflectFraction: number;
	Normal: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFresnel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFresnel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFresnel;
	static C(Other: UObject): MaterialExpressionFresnel;
}

declare type EFunctionInputType = string;
declare class MaterialExpressionFunctionInput extends MaterialExpression { 
	Preview: ExpressionInput;
	InputName: string;
	Description: string;
	Id: Guid;
	InputType: EFunctionInputType;
	PreviewValue: Vector4;
	bUsePreviewValueAsDefault: boolean;
	SortPriority: number;
	bCompilingFunctionPreview: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFunctionInput;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFunctionInput;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFunctionInput;
	static C(Other: UObject): MaterialExpressionFunctionInput;
}

declare class MaterialExpressionFunctionOutput extends MaterialExpression { 
	OutputName: string;
	Description: string;
	SortPriority: number;
	A: ExpressionInput;
	bLastPreviewed: boolean;
	Id: Guid;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionFunctionOutput;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionFunctionOutput;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionFunctionOutput;
	static C(Other: UObject): MaterialExpressionFunctionOutput;
}

declare class MaterialExpressionGIReplace extends MaterialExpression { 
	Default: ExpressionInput;
	StaticIndirect: ExpressionInput;
	DynamicIndirect: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionGIReplace;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionGIReplace;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionGIReplace;
	static C(Other: UObject): MaterialExpressionGIReplace;
}

declare class MaterialExpressionIf extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	AGreaterThanB: ExpressionInput;
	AEqualsB: ExpressionInput;
	ALessThanB: ExpressionInput;
	EqualsThreshold: number;
	ConstB: number;
	ConstAEqualsB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionIf;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionIf;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionIf;
	static C(Other: UObject): MaterialExpressionIf;
}

declare class MaterialExpressionLightmapUVs extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionLightmapUVs;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionLightmapUVs;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionLightmapUVs;
	static C(Other: UObject): MaterialExpressionLightmapUVs;
}

declare class MaterialExpressionLightmassReplace extends MaterialExpression { 
	Realtime: ExpressionInput;
	Lightmass: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionLightmassReplace;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionLightmassReplace;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionLightmassReplace;
	static C(Other: UObject): MaterialExpressionLightmassReplace;
}

declare class MaterialExpressionLightVector extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionLightVector;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionLightVector;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionLightVector;
	static C(Other: UObject): MaterialExpressionLightVector;
}

declare class MaterialExpressionLinearInterpolate extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	Alpha: ExpressionInput;
	ConstA: number;
	ConstB: number;
	ConstAlpha: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionLinearInterpolate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionLinearInterpolate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionLinearInterpolate;
	static C(Other: UObject): MaterialExpressionLinearInterpolate;
}

declare class MaterialExpressionLogarithm2 extends MaterialExpression { 
	X: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionLogarithm2;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionLogarithm2;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionLogarithm2;
	static C(Other: UObject): MaterialExpressionLogarithm2;
}

declare class MaterialExpressionMakeMaterialAttributes extends MaterialExpression { 
	BaseColor: ExpressionInput;
	Metallic: ExpressionInput;
	Specular: ExpressionInput;
	Roughness: ExpressionInput;
	EmissiveColor: ExpressionInput;
	Opacity: ExpressionInput;
	OpacityMask: ExpressionInput;
	Normal: ExpressionInput;
	WorldPositionOffset: ExpressionInput;
	WorldDisplacement: ExpressionInput;
	TessellationMultiplier: ExpressionInput;
	SubsurfaceColor: ExpressionInput;
	ClearCoat: ExpressionInput;
	ClearCoatRoughness: ExpressionInput;
	AmbientOcclusion: ExpressionInput;
	Refraction: ExpressionInput;
	CustomizedUVs: ExpressionInput;
	PixelDepthOffset: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionMakeMaterialAttributes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionMakeMaterialAttributes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionMakeMaterialAttributes;
	static C(Other: UObject): MaterialExpressionMakeMaterialAttributes;
}

declare class FunctionExpressionInput { 
	ExpressionInput: MaterialExpressionFunctionInput;
	ExpressionInputId: Guid;
	Input: ExpressionInput;
}

declare class FunctionExpressionOutput { 
	ExpressionOutput: MaterialExpressionFunctionOutput;
	ExpressionOutputId: Guid;
	Output: ExpressionOutput;
}

declare class MaterialExpressionMaterialFunctionCall extends MaterialExpression { 
	MaterialFunction: MaterialFunction;
	FunctionInputs: FunctionExpressionInput[];
	FunctionOutputs: FunctionExpressionOutput[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionMaterialFunctionCall;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionMaterialFunctionCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionMaterialFunctionCall;
	static C(Other: UObject): MaterialExpressionMaterialFunctionCall;
}

declare class MaterialExpressionMax extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	ConstA: number;
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionMax;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionMax;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionMax;
	static C(Other: UObject): MaterialExpressionMax;
}

declare class MaterialExpressionMin extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	ConstA: number;
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionMin;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionMin;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionMin;
	static C(Other: UObject): MaterialExpressionMin;
}

declare class MaterialExpressionMultiply extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	ConstA: number;
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionMultiply;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionMultiply;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionMultiply;
	static C(Other: UObject): MaterialExpressionMultiply;
}

declare type ENoiseFunction = string;
declare class MaterialExpressionNoise extends MaterialExpression { 
	Position: ExpressionInput;
	FilterWidth: ExpressionInput;
	Scale: number;
	Quality: number;
	NoiseFunction: ENoiseFunction;
	bTurbulence: boolean;
	Levels: number;
	OutputMin: number;
	OutputMax: number;
	LevelScale: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionNoise;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionNoise;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionNoise;
	static C(Other: UObject): MaterialExpressionNoise;
}

declare class MaterialExpressionNormalize extends MaterialExpression { 
	VectorInput: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionNormalize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionNormalize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionNormalize;
	static C(Other: UObject): MaterialExpressionNormalize;
}

declare class MaterialExpressionObjectBounds extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionObjectBounds;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionObjectBounds;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionObjectBounds;
	static C(Other: UObject): MaterialExpressionObjectBounds;
}

declare class MaterialExpressionObjectOrientation extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionObjectOrientation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionObjectOrientation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionObjectOrientation;
	static C(Other: UObject): MaterialExpressionObjectOrientation;
}

declare class MaterialExpressionObjectPositionWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionObjectPositionWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionObjectPositionWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionObjectPositionWS;
	static C(Other: UObject): MaterialExpressionObjectPositionWS;
}

declare class MaterialExpressionObjectRadius extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionObjectRadius;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionObjectRadius;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionObjectRadius;
	static C(Other: UObject): MaterialExpressionObjectRadius;
}

declare class MaterialExpressionOneMinus extends MaterialExpression { 
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionOneMinus;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionOneMinus;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionOneMinus;
	static C(Other: UObject): MaterialExpressionOneMinus;
}

declare class MaterialExpressionPanner extends MaterialExpression { 
	Coordinate: ExpressionInput;
	Time: ExpressionInput;
	SpeedX: number;
	SpeedY: number;
	ConstCoordinate: any;
	bFractionalPart: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPanner;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPanner;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPanner;
	static C(Other: UObject): MaterialExpressionPanner;
}

declare class MaterialExpressionParameter extends MaterialExpression { 
	ParameterName: string;
	ExpressionGUID: Guid;
	Group: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParameter;
	static C(Other: UObject): MaterialExpressionParameter;
}

declare class MaterialExpressionScalarParameter extends MaterialExpressionParameter { 
	DefaultValue: number;
	SliderMin: number;
	SliderMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionScalarParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionScalarParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionScalarParameter;
	static C(Other: UObject): MaterialExpressionScalarParameter;
}

declare class MaterialExpressionStaticBoolParameter extends MaterialExpressionParameter { 
	DefaultValue: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionStaticBoolParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionStaticBoolParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionStaticBoolParameter;
	static C(Other: UObject): MaterialExpressionStaticBoolParameter;
}

declare class MaterialExpressionStaticSwitchParameter extends MaterialExpressionStaticBoolParameter { 
	A: ExpressionInput;
	B: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionStaticSwitchParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionStaticSwitchParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionStaticSwitchParameter;
	static C(Other: UObject): MaterialExpressionStaticSwitchParameter;
}

declare class MaterialExpressionStaticComponentMaskParameter extends MaterialExpressionParameter { 
	Input: ExpressionInput;
	DefaultR: boolean;
	DefaultG: boolean;
	DefaultB: boolean;
	DefaultA: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionStaticComponentMaskParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionStaticComponentMaskParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionStaticComponentMaskParameter;
	static C(Other: UObject): MaterialExpressionStaticComponentMaskParameter;
}

declare class MaterialExpressionVectorParameter extends MaterialExpressionParameter { 
	DefaultValue: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionVectorParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionVectorParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionVectorParameter;
	static C(Other: UObject): MaterialExpressionVectorParameter;
}

declare class MaterialExpressionParticleColor extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleColor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleColor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleColor;
	static C(Other: UObject): MaterialExpressionParticleColor;
}

declare class MaterialExpressionParticleDirection extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleDirection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleDirection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleDirection;
	static C(Other: UObject): MaterialExpressionParticleDirection;
}

declare class MaterialExpressionParticleMacroUV extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleMacroUV;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleMacroUV;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleMacroUV;
	static C(Other: UObject): MaterialExpressionParticleMacroUV;
}

declare class MaterialExpressionParticleMotionBlurFade extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleMotionBlurFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleMotionBlurFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleMotionBlurFade;
	static C(Other: UObject): MaterialExpressionParticleMotionBlurFade;
}

declare class MaterialExpressionParticlePositionWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticlePositionWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticlePositionWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticlePositionWS;
	static C(Other: UObject): MaterialExpressionParticlePositionWS;
}

declare class MaterialExpressionParticleRadius extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleRadius;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleRadius;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleRadius;
	static C(Other: UObject): MaterialExpressionParticleRadius;
}

declare class MaterialExpressionParticleRelativeTime extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleRelativeTime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleRelativeTime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleRelativeTime;
	static C(Other: UObject): MaterialExpressionParticleRelativeTime;
}

declare class MaterialExpressionParticleSize extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleSize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleSize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleSize;
	static C(Other: UObject): MaterialExpressionParticleSize;
}

declare class MaterialExpressionParticleSpeed extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleSpeed;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleSpeed;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleSpeed;
	static C(Other: UObject): MaterialExpressionParticleSpeed;
}

declare class MaterialExpressionPerInstanceFadeAmount extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPerInstanceFadeAmount;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPerInstanceFadeAmount;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPerInstanceFadeAmount;
	static C(Other: UObject): MaterialExpressionPerInstanceFadeAmount;
}

declare class MaterialExpressionPerInstanceRandom extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPerInstanceRandom;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPerInstanceRandom;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPerInstanceRandom;
	static C(Other: UObject): MaterialExpressionPerInstanceRandom;
}

declare class MaterialExpressionPixelDepth extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPixelDepth;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPixelDepth;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPixelDepth;
	static C(Other: UObject): MaterialExpressionPixelDepth;
}

declare class MaterialExpressionPixelNormalWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPixelNormalWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPixelNormalWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPixelNormalWS;
	static C(Other: UObject): MaterialExpressionPixelNormalWS;
}

declare class MaterialExpressionPower extends MaterialExpression { 
	Base: ExpressionInput;
	Exponent: ExpressionInput;
	ConstExponent: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPower;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPower;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPower;
	static C(Other: UObject): MaterialExpressionPower;
}

declare class MaterialExpressionPrecomputedAOMask extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionPrecomputedAOMask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionPrecomputedAOMask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionPrecomputedAOMask;
	static C(Other: UObject): MaterialExpressionPrecomputedAOMask;
}

declare class MaterialExpressionQualitySwitch extends MaterialExpression { 
	Default: ExpressionInput;
	Inputs: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionQualitySwitch;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionQualitySwitch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionQualitySwitch;
	static C(Other: UObject): MaterialExpressionQualitySwitch;
}

declare class MaterialExpressionReflectionVectorWS extends MaterialExpression { 
	CustomWorldNormal: ExpressionInput;
	bNormalizeCustomWorldNormal: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionReflectionVectorWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionReflectionVectorWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionReflectionVectorWS;
	static C(Other: UObject): MaterialExpressionReflectionVectorWS;
}

declare class MaterialExpressionRotateAboutAxis extends MaterialExpression { 
	NormalizedRotationAxis: ExpressionInput;
	RotationAngle: ExpressionInput;
	PivotPoint: ExpressionInput;
	Position: ExpressionInput;
	Period: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionRotateAboutAxis;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionRotateAboutAxis;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionRotateAboutAxis;
	static C(Other: UObject): MaterialExpressionRotateAboutAxis;
}

declare class MaterialExpressionRotator extends MaterialExpression { 
	Coordinate: ExpressionInput;
	Time: ExpressionInput;
	CenterX: number;
	CenterY: number;
	Speed: number;
	ConstCoordinate: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionRotator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionRotator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionRotator;
	static C(Other: UObject): MaterialExpressionRotator;
}

declare type EMaterialSceneAttributeInputMode = string;
declare class MaterialExpressionSceneColor extends MaterialExpression { 
	InputMode: EMaterialSceneAttributeInputMode;
	Input: ExpressionInput;
	OffsetFraction: ExpressionInput;
	ConstInput: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSceneColor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSceneColor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSceneColor;
	static C(Other: UObject): MaterialExpressionSceneColor;
}

declare class MaterialExpressionSceneDepth extends MaterialExpression { 
	InputMode: EMaterialSceneAttributeInputMode;
	Input: ExpressionInput;
	Coordinates: ExpressionInput;
	ConstInput: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSceneDepth;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSceneDepth;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSceneDepth;
	static C(Other: UObject): MaterialExpressionSceneDepth;
}

declare class MaterialExpressionSceneTexelSize extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSceneTexelSize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSceneTexelSize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSceneTexelSize;
	static C(Other: UObject): MaterialExpressionSceneTexelSize;
}

declare type ESceneTextureId = string;
declare class MaterialExpressionSceneTexture extends MaterialExpression { 
	Coordinates: ExpressionInput;
	SceneTextureId: ESceneTextureId;
	bClampUVs: boolean;
	bFiltered: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSceneTexture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSceneTexture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSceneTexture;
	static C(Other: UObject): MaterialExpressionSceneTexture;
}

declare class MaterialExpressionScreenPosition extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionScreenPosition;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionScreenPosition;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionScreenPosition;
	static C(Other: UObject): MaterialExpressionScreenPosition;
}

declare class MaterialExpressionSine extends MaterialExpression { 
	Input: ExpressionInput;
	Period: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSine;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSine;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSine;
	static C(Other: UObject): MaterialExpressionSine;
}

declare type ESpeedTreeGeometryType = string;
declare type ESpeedTreeWindType = string;
declare type ESpeedTreeLODType = string;
declare class MaterialExpressionSpeedTree extends MaterialExpression { 
	GeometryType: ESpeedTreeGeometryType;
	WindType: ESpeedTreeWindType;
	LODType: ESpeedTreeLODType;
	BillboardThreshold: number;
	bAccurateWindVelocities: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSpeedTree;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSpeedTree;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSpeedTree;
	static C(Other: UObject): MaterialExpressionSpeedTree;
}

declare class MaterialExpressionSphereMask extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	Radius: ExpressionInput;
	Hardness: ExpressionInput;
	AttenuationRadius: number;
	HardnessPercent: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSphereMask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSphereMask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSphereMask;
	static C(Other: UObject): MaterialExpressionSphereMask;
}

declare class MaterialExpressionSphericalParticleOpacity extends MaterialExpression { 
	Density: ExpressionInput;
	ConstantDensity: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSphericalParticleOpacity;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSphericalParticleOpacity;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSphericalParticleOpacity;
	static C(Other: UObject): MaterialExpressionSphericalParticleOpacity;
}

declare class MaterialExpressionSquareRoot extends MaterialExpression { 
	Input: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSquareRoot;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSquareRoot;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSquareRoot;
	static C(Other: UObject): MaterialExpressionSquareRoot;
}

declare class MaterialExpressionStaticBool extends MaterialExpression { 
	Value: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionStaticBool;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionStaticBool;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionStaticBool;
	static C(Other: UObject): MaterialExpressionStaticBool;
}

declare class MaterialExpressionStaticSwitch extends MaterialExpression { 
	DefaultValue: boolean;
	A: ExpressionInput;
	B: ExpressionInput;
	Value: ExpressionInput;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionStaticSwitch;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionStaticSwitch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionStaticSwitch;
	static C(Other: UObject): MaterialExpressionStaticSwitch;
}

declare class MaterialExpressionSubtract extends MaterialExpression { 
	A: ExpressionInput;
	B: ExpressionInput;
	ConstA: number;
	ConstB: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSubtract;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSubtract;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSubtract;
	static C(Other: UObject): MaterialExpressionSubtract;
}

declare type EMaterialSamplerType = string;
declare class MaterialExpressionTextureBase extends MaterialExpression { 
	Texture: Texture;
	SamplerType: EMaterialSamplerType;
	IsDefaultMeshpaintTexture: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureBase;
	static C(Other: UObject): MaterialExpressionTextureBase;
}

declare class MaterialExpressionTextureObject extends MaterialExpressionTextureBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureObject;
	static C(Other: UObject): MaterialExpressionTextureObject;
}

declare type ETextureMipValueMode = string;
declare type ESamplerSourceMode = string;
declare class MaterialExpressionTextureSample extends MaterialExpressionTextureBase { 
	Coordinates: ExpressionInput;
	TextureObject: ExpressionInput;
	MipValue: ExpressionInput;
	CoordinatesDX: ExpressionInput;
	CoordinatesDY: ExpressionInput;
	MipValueMode: ETextureMipValueMode;
	SamplerSource: ESamplerSourceMode;
	ConstCoordinate: any;
	ConstMipValue: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureSample;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureSample;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureSample;
	static C(Other: UObject): MaterialExpressionTextureSample;
}

declare class MaterialExpressionParticleSubUV extends MaterialExpressionTextureSample { 
	bBlend: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionParticleSubUV;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionParticleSubUV;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionParticleSubUV;
	static C(Other: UObject): MaterialExpressionParticleSubUV;
}

declare class MaterialExpressionTextureSampleParameter extends MaterialExpressionTextureSample { 
	ParameterName: string;
	ExpressionGUID: Guid;
	Group: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureSampleParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureSampleParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureSampleParameter;
	static C(Other: UObject): MaterialExpressionTextureSampleParameter;
}

declare class MaterialExpressionTextureObjectParameter extends MaterialExpressionTextureSampleParameter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureObjectParameter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureObjectParameter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureObjectParameter;
	static C(Other: UObject): MaterialExpressionTextureObjectParameter;
}

declare class MaterialExpressionTextureSampleParameter2D extends MaterialExpressionTextureSampleParameter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureSampleParameter2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureSampleParameter2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureSampleParameter2D;
	static C(Other: UObject): MaterialExpressionTextureSampleParameter2D;
}

declare type ETextureColorChannel = string;
declare class MaterialExpressionAntialiasedTextureMask extends MaterialExpressionTextureSampleParameter2D { 
	Threshold: number;
	Channel: ETextureColorChannel;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionAntialiasedTextureMask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionAntialiasedTextureMask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionAntialiasedTextureMask;
	static C(Other: UObject): MaterialExpressionAntialiasedTextureMask;
}

declare class MaterialExpressionTextureSampleParameterSubUV extends MaterialExpressionTextureSampleParameter2D { 
	bBlend: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureSampleParameterSubUV;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureSampleParameterSubUV;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureSampleParameterSubUV;
	static C(Other: UObject): MaterialExpressionTextureSampleParameterSubUV;
}

declare class MaterialExpressionTextureSampleParameterCube extends MaterialExpressionTextureSampleParameter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureSampleParameterCube;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureSampleParameterCube;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureSampleParameterCube;
	static C(Other: UObject): MaterialExpressionTextureSampleParameterCube;
}

declare class MaterialExpressionTextureCoordinate extends MaterialExpression { 
	CoordinateIndex: number;
	UTiling: number;
	VTiling: number;
	UnMirrorU: boolean;
	UnMirrorV: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTextureCoordinate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTextureCoordinate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTextureCoordinate;
	static C(Other: UObject): MaterialExpressionTextureCoordinate;
}

declare class MaterialExpressionTime extends MaterialExpression { 
	bIgnorePause: boolean;
	bOverride_Period: boolean;
	Period: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTime;
	static C(Other: UObject): MaterialExpressionTime;
}

declare type EMaterialVectorCoordTransformSource = string;
declare type EMaterialVectorCoordTransform = string;
declare class MaterialExpressionTransform extends MaterialExpression { 
	Input: ExpressionInput;
	TransformSourceType: EMaterialVectorCoordTransformSource;
	TransformType: EMaterialVectorCoordTransform;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTransform;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTransform;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTransform;
	static C(Other: UObject): MaterialExpressionTransform;
}

declare type EMaterialPositionTransformSource = string;
declare class MaterialExpressionTransformPosition extends MaterialExpression { 
	Input: ExpressionInput;
	TransformSourceType: EMaterialPositionTransformSource;
	TransformType: EMaterialPositionTransformSource;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTransformPosition;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTransformPosition;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTransformPosition;
	static C(Other: UObject): MaterialExpressionTransformPosition;
}

declare class MaterialExpressionTwoSidedSign extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionTwoSidedSign;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionTwoSidedSign;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionTwoSidedSign;
	static C(Other: UObject): MaterialExpressionTwoSidedSign;
}

declare class MaterialExpressionVertexColor extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionVertexColor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionVertexColor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionVertexColor;
	static C(Other: UObject): MaterialExpressionVertexColor;
}

declare class MaterialExpressionVertexNormalWS extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionVertexNormalWS;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionVertexNormalWS;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionVertexNormalWS;
	static C(Other: UObject): MaterialExpressionVertexNormalWS;
}

declare type EMaterialExposedViewProperty = string;
declare class MaterialExpressionViewProperty extends MaterialExpression { 
	Property: EMaterialExposedViewProperty;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionViewProperty;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionViewProperty;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionViewProperty;
	static C(Other: UObject): MaterialExpressionViewProperty;
}

declare class MaterialExpressionViewSize extends MaterialExpression { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionViewSize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionViewSize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionViewSize;
	static C(Other: UObject): MaterialExpressionViewSize;
}

declare type EWorldPositionIncludedOffsets = string;
declare class MaterialExpressionWorldPosition extends MaterialExpression { 
	WorldPositionShaderOffset: EWorldPositionIncludedOffsets;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionWorldPosition;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionWorldPosition;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionWorldPosition;
	static C(Other: UObject): MaterialExpressionWorldPosition;
}

declare class MatineeInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MatineeInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MatineeInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MatineeInterface;
	static C(Other: UObject): MatineeInterface;
}

declare class NavArea_Default extends NavArea { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavArea_Default;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavArea_Default;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavArea_Default;
	static C(Other: UObject): NavArea_Default;
}

declare class NavArea_LowHeight extends NavArea { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavArea_LowHeight;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavArea_LowHeight;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavArea_LowHeight;
	static C(Other: UObject): NavArea_LowHeight;
}

declare class NavArea_Null extends NavArea { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavArea_Null;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavArea_Null;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavArea_Null;
	static C(Other: UObject): NavArea_Null;
}

declare class NavArea_Obstacle extends NavArea { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavArea_Obstacle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavArea_Obstacle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavArea_Obstacle;
	static C(Other: UObject): NavArea_Obstacle;
}

declare class NavAreaMeta extends NavArea { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavAreaMeta;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavAreaMeta;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavAreaMeta;
	static C(Other: UObject): NavAreaMeta;
}

declare class NavAreaMeta_SwitchByAgent extends NavAreaMeta { 
	Agent0Area: UnrealEngineClass;
	Agent1Area: UnrealEngineClass;
	Agent2Area: UnrealEngineClass;
	Agent3Area: UnrealEngineClass;
	Agent4Area: UnrealEngineClass;
	Agent5Area: UnrealEngineClass;
	Agent6Area: UnrealEngineClass;
	Agent7Area: UnrealEngineClass;
	Agent8Area: UnrealEngineClass;
	Agent9Area: UnrealEngineClass;
	Agent10Area: UnrealEngineClass;
	Agent11Area: UnrealEngineClass;
	Agent12Area: UnrealEngineClass;
	Agent13Area: UnrealEngineClass;
	Agent14Area: UnrealEngineClass;
	Agent15Area: UnrealEngineClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavAreaMeta_SwitchByAgent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavAreaMeta_SwitchByAgent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavAreaMeta_SwitchByAgent;
	static C(Other: UObject): NavAreaMeta_SwitchByAgent;
}

declare class RecastNavMeshDataChunk extends NavigationDataChunk { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): RecastNavMeshDataChunk;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RecastNavMeshDataChunk;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RecastNavMeshDataChunk;
	static C(Other: UObject): RecastNavMeshDataChunk;
}

declare class NavigationPathGenerator extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavigationPathGenerator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavigationPathGenerator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavigationPathGenerator;
	static C(Other: UObject): NavigationPathGenerator;
}

declare class RecastFilter_UseDefaultArea extends NavigationQueryFilter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): RecastFilter_UseDefaultArea;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): RecastFilter_UseDefaultArea;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RecastFilter_UseDefaultArea;
	static C(Other: UObject): RecastFilter_UseDefaultArea;
}

declare class NavLinkTrivial extends NavLinkDefinition { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavLinkTrivial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavLinkTrivial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavLinkTrivial;
	static C(Other: UObject): NavLinkTrivial;
}

declare class NavNodeInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NavNodeInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NavNodeInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NavNodeInterface;
	static C(Other: UObject): NavNodeInterface;
}

declare class NiagaraRibbonRendererProperties extends NiagaraEffectRendererProperties { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraRibbonRendererProperties;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraRibbonRendererProperties;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraRibbonRendererProperties;
	static C(Other: UObject): NiagaraRibbonRendererProperties;
}

declare class NiagaraSpriteRendererProperties extends NiagaraEffectRendererProperties { 
	SubImageInfo: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraSpriteRendererProperties;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraSpriteRendererProperties;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSpriteRendererProperties;
	static C(Other: UObject): NiagaraSpriteRendererProperties;
}

declare class ObjectLibrary extends UObject { 
	ObjectBaseClass: UnrealEngineClass;
	bHasBlueprintClasses: boolean;
	Objects: UObject[];
	WeakObjects: any[];
	bUseWeakReferences: boolean;
	bIsFullyLoaded: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ObjectLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ObjectLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectLibrary;
	static C(Other: UObject): ObjectLibrary;
}

declare class ObjectReferencer extends UObject { 
	ReferencedObjects: UObject[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ObjectReferencer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ObjectReferencer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ObjectReferencer;
	static C(Other: UObject): ObjectReferencer;
}

declare class PackageMapClient extends PackageMap { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PackageMapClient;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PackageMapClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PackageMapClient;
	static C(Other: UObject): PackageMapClient;
}

declare class ParticleSpriteEmitter extends ParticleEmitter { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleSpriteEmitter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleSpriteEmitter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleSpriteEmitter;
	static C(Other: UObject): ParticleSpriteEmitter;
}

declare class ParticleModuleAccelerationBase extends ParticleModule { 
	bAlwaysInWorldSpace: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAccelerationBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAccelerationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAccelerationBase;
	static C(Other: UObject): ParticleModuleAccelerationBase;
}

declare class ParticleModuleAcceleration extends ParticleModuleAccelerationBase { 
	Acceleration: RawDistributionVector;
	bApplyOwnerScale: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAcceleration;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAcceleration;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAcceleration;
	static C(Other: UObject): ParticleModuleAcceleration;
}

declare class ParticleModuleAccelerationConstant extends ParticleModuleAccelerationBase { 
	Acceleration: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAccelerationConstant;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAccelerationConstant;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAccelerationConstant;
	static C(Other: UObject): ParticleModuleAccelerationConstant;
}

declare class ParticleModuleAccelerationDrag extends ParticleModuleAccelerationBase { 
	DragCoefficient: DistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAccelerationDrag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAccelerationDrag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAccelerationDrag;
	static C(Other: UObject): ParticleModuleAccelerationDrag;
}

declare class ParticleModuleAccelerationDragScaleOverLife extends ParticleModuleAccelerationBase { 
	DragScale: DistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAccelerationDragScaleOverLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAccelerationDragScaleOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAccelerationDragScaleOverLife;
	static C(Other: UObject): ParticleModuleAccelerationDragScaleOverLife;
}

declare class ParticleModuleAccelerationOverLifetime extends ParticleModuleAccelerationBase { 
	AccelOverLife: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAccelerationOverLifetime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAccelerationOverLifetime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAccelerationOverLifetime;
	static C(Other: UObject): ParticleModuleAccelerationOverLifetime;
}

declare class ParticleModuleAttractorBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAttractorBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAttractorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAttractorBase;
	static C(Other: UObject): ParticleModuleAttractorBase;
}

declare class ParticleModuleAttractorLine extends ParticleModuleAttractorBase { 
	EndPoint0: Vector;
	EndPoint1: Vector;
	Range: RawDistributionFloat;
	Strength: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAttractorLine;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAttractorLine;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAttractorLine;
	static C(Other: UObject): ParticleModuleAttractorLine;
}

declare type EAttractorParticleSelectionMethod = string;
declare class ParticleModuleAttractorParticle extends ParticleModuleAttractorBase { 
	EmitterName: string;
	Range: RawDistributionFloat;
	bStrengthByDistance: boolean;
	Strength: RawDistributionFloat;
	bAffectBaseVelocity: boolean;
	SelectionMethod: EAttractorParticleSelectionMethod;
	bRenewSource: boolean;
	bInheritSourceVel: boolean;
	LastSelIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAttractorParticle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAttractorParticle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAttractorParticle;
	static C(Other: UObject): ParticleModuleAttractorParticle;
}

declare class ParticleModuleAttractorPoint extends ParticleModuleAttractorBase { 
	Position: RawDistributionVector;
	Range: RawDistributionFloat;
	Strength: RawDistributionFloat;
	StrengthByDistance: boolean;
	bAffectBaseVelocity: boolean;
	bOverrideVelocity: boolean;
	bUseWorldSpacePosition: boolean;
	Positive_X: boolean;
	Positive_Y: boolean;
	Positive_Z: boolean;
	Negative_X: boolean;
	Negative_Y: boolean;
	Negative_Z: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAttractorPoint;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAttractorPoint;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAttractorPoint;
	static C(Other: UObject): ParticleModuleAttractorPoint;
}

declare class ParticleModuleAttractorPointGravity extends ParticleModuleAttractorBase { 
	Position: Vector;
	Radius: number;
	Strength: DistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleAttractorPointGravity;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleAttractorPointGravity;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleAttractorPointGravity;
	static C(Other: UObject): ParticleModuleAttractorPointGravity;
}

declare class ParticleModuleBeamBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleBeamBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamBase;
	static C(Other: UObject): ParticleModuleBeamBase;
}

declare type BeamModifierType = string;
declare class BeamModifierOptions { 
	bModify: boolean;
	bScale: boolean;
	bLock: boolean;
}

declare class ParticleModuleBeamModifier extends ParticleModuleBeamBase { 
	ModifierType: BeamModifierType;
	PositionOptions: BeamModifierOptions;
	Position: RawDistributionVector;
	TangentOptions: BeamModifierOptions;
	Tangent: RawDistributionVector;
	bAbsoluteTangent: boolean;
	StrengthOptions: BeamModifierOptions;
	Strength: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamModifier;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleBeamModifier;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamModifier;
	static C(Other: UObject): ParticleModuleBeamModifier;
}

declare class ParticleModuleBeamNoise extends ParticleModuleBeamBase { 
	bLowFreq_Enabled: boolean;
	Frequency: number;
	Frequency_LowRange: number;
	NoiseRange: RawDistributionVector;
	NoiseRangeScale: RawDistributionFloat;
	bNRScaleEmitterTime: boolean;
	NoiseSpeed: RawDistributionVector;
	bSmooth: boolean;
	NoiseLockRadius: number;
	bNoiseLock: boolean;
	bOscillate: boolean;
	NoiseLockTime: number;
	NoiseTension: number;
	bUseNoiseTangents: boolean;
	NoiseTangentStrength: RawDistributionFloat;
	NoiseTessellation: number;
	bTargetNoise: boolean;
	FrequencyDistance: number;
	bApplyNoiseScale: boolean;
	NoiseScale: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamNoise;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleBeamNoise;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamNoise;
	static C(Other: UObject): ParticleModuleBeamNoise;
}

declare type Beam2SourceTargetMethod = string;
declare type Beam2SourceTargetTangentMethod = string;
declare class ParticleModuleBeamSource extends ParticleModuleBeamBase { 
	SourceMethod: Beam2SourceTargetMethod;
	SourceName: string;
	bSourceAbsolute: boolean;
	Source: RawDistributionVector;
	bLockSource: boolean;
	SourceTangentMethod: Beam2SourceTargetTangentMethod;
	SourceTangent: RawDistributionVector;
	bLockSourceTangent: boolean;
	SourceStrength: RawDistributionFloat;
	bLockSourceStength: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamSource;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleBeamSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamSource;
	static C(Other: UObject): ParticleModuleBeamSource;
}

declare class ParticleModuleBeamTarget extends ParticleModuleBeamBase { 
	TargetMethod: Beam2SourceTargetMethod;
	TargetName: string;
	Target: RawDistributionVector;
	bTargetAbsolute: boolean;
	bLockTarget: boolean;
	TargetTangentMethod: Beam2SourceTargetTangentMethod;
	TargetTangent: RawDistributionVector;
	bLockTargetTangent: boolean;
	TargetStrength: RawDistributionFloat;
	bLockTargetStength: boolean;
	LockRadius: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleBeamTarget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleBeamTarget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleBeamTarget;
	static C(Other: UObject): ParticleModuleBeamTarget;
}

declare class ParticleModuleCameraBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCameraBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleCameraBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCameraBase;
	static C(Other: UObject): ParticleModuleCameraBase;
}

declare type EParticleCameraOffsetUpdateMethod = string;
declare class ParticleModuleCameraOffset extends ParticleModuleCameraBase { 
	CameraOffset: RawDistributionFloat;
	bSpawnTimeOnly: boolean;
	UpdateMethod: EParticleCameraOffsetUpdateMethod;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCameraOffset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleCameraOffset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCameraOffset;
	static C(Other: UObject): ParticleModuleCameraOffset;
}

declare class ParticleModuleCollisionBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCollisionBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleCollisionBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCollisionBase;
	static C(Other: UObject): ParticleModuleCollisionBase;
}

declare type EParticleCollisionComplete = string;
declare class ParticleModuleCollision extends ParticleModuleCollisionBase { 
	DampingFactor: RawDistributionVector;
	DampingFactorRotation: RawDistributionVector;
	MaxCollisions: RawDistributionFloat;
	CollisionCompletionOption: EParticleCollisionComplete;
	CollisionTypes: EObjectTypeQuery[];
	bApplyPhysics: boolean;
	ParticleMass: RawDistributionFloat;
	DirScalar: number;
	bPawnsDoNotDecrementCount: boolean;
	bOnlyVerticalNormalsDecrementCount: boolean;
	VerticalFudgeFactor: number;
	DelayAmount: RawDistributionFloat;
	bDropDetail: boolean;
	bCollideOnlyIfVisible: boolean;
	bIgnoreSourceActor: boolean;
	MaxCollisionDistance: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCollision;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleCollision;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCollision;
	static C(Other: UObject): ParticleModuleCollision;
}

declare type EParticleCollisionResponse = string;
declare type EParticleCollisionMode = string;
declare class ParticleModuleCollisionGPU extends ParticleModuleCollisionBase { 
	Resilience: RawDistributionFloat;
	ResilienceScaleOverLife: RawDistributionFloat;
	Friction: number;
	RadiusScale: number;
	RadiusBias: number;
	Response: EParticleCollisionResponse;
	CollisionMode: EParticleCollisionMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleCollisionGPU;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleCollisionGPU;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleCollisionGPU;
	static C(Other: UObject): ParticleModuleCollisionGPU;
}

declare class ParticleModuleColorBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColorBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleColorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColorBase;
	static C(Other: UObject): ParticleModuleColorBase;
}

declare class ParticleModuleColor extends ParticleModuleColorBase { 
	StartColor: RawDistributionVector;
	StartAlpha: RawDistributionFloat;
	bClampAlpha: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleColor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColor;
	static C(Other: UObject): ParticleModuleColor;
}

declare class ParticleRandomSeedInfo { 
	ParameterName: string;
	bGetSeedFromInstance: boolean;
	bInstanceSeedIsIndex: boolean;
	bResetSeedOnEmitterLooping: boolean;
	bRandomlySelectSeedArray: boolean;
	RandomSeeds: number[];
}

declare class ParticleModuleColor_Seeded extends ParticleModuleColor { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColor_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleColor_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColor_Seeded;
	static C(Other: UObject): ParticleModuleColor_Seeded;
}

declare class ParticleModuleColorOverLife extends ParticleModuleColorBase { 
	ColorOverLife: RawDistributionVector;
	AlphaOverLife: RawDistributionFloat;
	bClampAlpha: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColorOverLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleColorOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColorOverLife;
	static C(Other: UObject): ParticleModuleColorOverLife;
}

declare class ParticleModuleColorScaleOverLife extends ParticleModuleColorBase { 
	ColorScaleOverLife: RawDistributionVector;
	AlphaScaleOverLife: RawDistributionFloat;
	bEmitterTime: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleColorScaleOverLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleColorScaleOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleColorScaleOverLife;
	static C(Other: UObject): ParticleModuleColorScaleOverLife;
}

declare class ParticleModuleEventReceiverKillParticles extends ParticleModuleEventReceiverBase { 
	bStopSpawning: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleEventReceiverKillParticles;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleEventReceiverKillParticles;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleEventReceiverKillParticles;
	static C(Other: UObject): ParticleModuleEventReceiverKillParticles;
}

declare class ParticleModuleEventReceiverSpawn extends ParticleModuleEventReceiverBase { 
	SpawnCount: RawDistributionFloat;
	bUseParticleTime: boolean;
	bUsePSysLocation: boolean;
	bInheritVelocity: boolean;
	InheritVelocityScale: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleEventReceiverSpawn;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleEventReceiverSpawn;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleEventReceiverSpawn;
	static C(Other: UObject): ParticleModuleEventReceiverSpawn;
}

declare class ParticleModuleKillBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleKillBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleKillBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleKillBase;
	static C(Other: UObject): ParticleModuleKillBase;
}

declare class ParticleModuleKillBox extends ParticleModuleKillBase { 
	LowerLeftCorner: RawDistributionVector;
	UpperRightCorner: RawDistributionVector;
	bAbsolute: boolean;
	bKillInside: boolean;
	bAxisAlignedAndFixedSize: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleKillBox;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleKillBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleKillBox;
	static C(Other: UObject): ParticleModuleKillBox;
}

declare class ParticleModuleKillHeight extends ParticleModuleKillBase { 
	Height: RawDistributionFloat;
	bAbsolute: boolean;
	bFloor: boolean;
	bApplyPSysScale: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleKillHeight;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleKillHeight;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleKillHeight;
	static C(Other: UObject): ParticleModuleKillHeight;
}

declare class ParticleModuleLifetimeBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLifetimeBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLifetimeBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLifetimeBase;
	static C(Other: UObject): ParticleModuleLifetimeBase;
}

declare class ParticleModuleLifetime extends ParticleModuleLifetimeBase { 
	Lifetime: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLifetime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLifetime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLifetime;
	static C(Other: UObject): ParticleModuleLifetime;
}

declare class ParticleModuleLifetime_Seeded extends ParticleModuleLifetime { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLifetime_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLifetime_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLifetime_Seeded;
	static C(Other: UObject): ParticleModuleLifetime_Seeded;
}

declare class ParticleModuleLightBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLightBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLightBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLightBase;
	static C(Other: UObject): ParticleModuleLightBase;
}

declare class ParticleModuleLight extends ParticleModuleLightBase { 
	bUseInverseSquaredFalloff: boolean;
	bAffectsTranslucency: boolean;
	bPreviewLightRadius: boolean;
	SpawnFraction: number;
	ColorScaleOverLife: RawDistributionVector;
	BrightnessOverLife: RawDistributionFloat;
	RadiusScale: RawDistributionFloat;
	LightExponent: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLight;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLight;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLight;
	static C(Other: UObject): ParticleModuleLight;
}

declare class ParticleModuleLight_Seeded extends ParticleModuleLight { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLight_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLight_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLight_Seeded;
	static C(Other: UObject): ParticleModuleLight_Seeded;
}

declare class ParticleModuleLocationBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationBase;
	static C(Other: UObject): ParticleModuleLocationBase;
}

declare class ParticleModuleLocation extends ParticleModuleLocationBase { 
	StartLocation: RawDistributionVector;
	DistributeOverNPoints: number;
	DistributeThreshold: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocation;
	static C(Other: UObject): ParticleModuleLocation;
}

declare class ParticleModuleLocation_Seeded extends ParticleModuleLocation { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocation_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocation_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocation_Seeded;
	static C(Other: UObject): ParticleModuleLocation_Seeded;
}

declare class ParticleModuleLocationWorldOffset extends ParticleModuleLocation { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationWorldOffset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationWorldOffset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationWorldOffset;
	static C(Other: UObject): ParticleModuleLocationWorldOffset;
}

declare class ParticleModuleLocationWorldOffset_Seeded extends ParticleModuleLocationWorldOffset { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationWorldOffset_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationWorldOffset_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationWorldOffset_Seeded;
	static C(Other: UObject): ParticleModuleLocationWorldOffset_Seeded;
}

declare type ELocationBoneSocketSource = string;
declare class LocationBoneSocketInfo { 
	BoneSocketName: string;
	Offset: Vector;
}

declare type ELocationBoneSocketSelectionMethod = string;
declare class ParticleModuleLocationBoneSocket extends ParticleModuleLocationBase { 
	SourceType: ELocationBoneSocketSource;
	UniversalOffset: Vector;
	SourceLocations: LocationBoneSocketInfo[];
	SelectionMethod: ELocationBoneSocketSelectionMethod;
	bUpdatePositionEachFrame: boolean;
	bOrientMeshEmitters: boolean;
	bInheritBoneVelocity: boolean;
	SkelMeshActorParamName: string;
	EditorSkelMesh: SkeletalMesh;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationBoneSocket;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationBoneSocket;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationBoneSocket;
	static C(Other: UObject): ParticleModuleLocationBoneSocket;
}

declare class ParticleModuleLocationDirect extends ParticleModuleLocationBase { 
	Location: RawDistributionVector;
	LocationOffset: RawDistributionVector;
	ScaleFactor: RawDistributionVector;
	Direction: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationDirect;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationDirect;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationDirect;
	static C(Other: UObject): ParticleModuleLocationDirect;
}

declare type ELocationEmitterSelectionMethod = string;
declare class ParticleModuleLocationEmitter extends ParticleModuleLocationBase { 
	EmitterName: string;
	SelectionMethod: ELocationEmitterSelectionMethod;
	InheritSourceVelocity: boolean;
	InheritSourceVelocityScale: number;
	bInheritSourceRotation: boolean;
	InheritSourceRotationScale: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationEmitter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationEmitter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationEmitter;
	static C(Other: UObject): ParticleModuleLocationEmitter;
}

declare class ParticleModuleLocationEmitterDirect extends ParticleModuleLocationBase { 
	EmitterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationEmitterDirect;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationEmitterDirect;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationEmitterDirect;
	static C(Other: UObject): ParticleModuleLocationEmitterDirect;
}

declare class ParticleModuleLocationPrimitiveBase extends ParticleModuleLocationBase { 
	Positive_X: boolean;
	Positive_Y: boolean;
	Positive_Z: boolean;
	Negative_X: boolean;
	Negative_Y: boolean;
	Negative_Z: boolean;
	SurfaceOnly: boolean;
	Velocity: boolean;
	VelocityScale: RawDistributionFloat;
	StartLocation: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveBase;
	static C(Other: UObject): ParticleModuleLocationPrimitiveBase;
}

declare type CylinderHeightAxis = string;
declare class ParticleModuleLocationPrimitiveCylinder extends ParticleModuleLocationPrimitiveBase { 
	RadialVelocity: boolean;
	StartRadius: RawDistributionFloat;
	StartHeight: RawDistributionFloat;
	HeightAxis: CylinderHeightAxis;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveCylinder;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveCylinder;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveCylinder;
	static C(Other: UObject): ParticleModuleLocationPrimitiveCylinder;
}

declare class ParticleModuleLocationPrimitiveCylinder_Seeded extends ParticleModuleLocationPrimitiveCylinder { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveCylinder_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveCylinder_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveCylinder_Seeded;
	static C(Other: UObject): ParticleModuleLocationPrimitiveCylinder_Seeded;
}

declare class ParticleModuleLocationPrimitiveSphere extends ParticleModuleLocationPrimitiveBase { 
	StartRadius: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveSphere;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveSphere;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveSphere;
	static C(Other: UObject): ParticleModuleLocationPrimitiveSphere;
}

declare class ParticleModuleLocationPrimitiveSphere_Seeded extends ParticleModuleLocationPrimitiveSphere { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveSphere_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveSphere_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveSphere_Seeded;
	static C(Other: UObject): ParticleModuleLocationPrimitiveSphere_Seeded;
}

declare class ParticleModuleLocationPrimitiveTriangle extends ParticleModuleLocationBase { 
	StartOffset: RawDistributionVector;
	Height: RawDistributionFloat;
	Angle: RawDistributionFloat;
	Thickness: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationPrimitiveTriangle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationPrimitiveTriangle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationPrimitiveTriangle;
	static C(Other: UObject): ParticleModuleLocationPrimitiveTriangle;
}

declare type ELocationSkelVertSurfaceSource = string;
declare class ParticleModuleLocationSkelVertSurface extends ParticleModuleLocationBase { 
	SourceType: ELocationSkelVertSurfaceSource;
	UniversalOffset: Vector;
	bUpdatePositionEachFrame: boolean;
	bOrientMeshEmitters: boolean;
	bInheritBoneVelocity: boolean;
	SkelMeshActorParamName: string;
	EditorSkelMesh: SkeletalMesh;
	ValidAssociatedBones: string[];
	bEnforceNormalCheck: boolean;
	NormalToCompare: Vector;
	NormalCheckToleranceDegrees: number;
	NormalCheckTolerance: number;
	ValidMaterialIndices: number[];
	bInheritVertexColor: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleLocationSkelVertSurface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleLocationSkelVertSurface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleLocationSkelVertSurface;
	static C(Other: UObject): ParticleModuleLocationSkelVertSurface;
}

declare class ParticleModulePivotOffset extends ParticleModuleLocationBase { 
	PivotOffset: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModulePivotOffset;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModulePivotOffset;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModulePivotOffset;
	static C(Other: UObject): ParticleModulePivotOffset;
}

declare class ParticleModuleSourceMovement extends ParticleModuleLocationBase { 
	SourceMovementScale: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSourceMovement;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSourceMovement;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSourceMovement;
	static C(Other: UObject): ParticleModuleSourceMovement;
}

declare class ParticleModuleMaterialBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMaterialBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMaterialBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMaterialBase;
	static C(Other: UObject): ParticleModuleMaterialBase;
}

declare class ParticleModuleMeshMaterial extends ParticleModuleMaterialBase { 
	MeshMaterials: MaterialInterface[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshMaterial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshMaterial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshMaterial;
	static C(Other: UObject): ParticleModuleMeshMaterial;
}

declare class ParticleModuleOrientationBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleOrientationBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleOrientationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleOrientationBase;
	static C(Other: UObject): ParticleModuleOrientationBase;
}

declare type EParticleAxisLock = string;
declare class ParticleModuleOrientationAxisLock extends ParticleModuleOrientationBase { 
	LockAxisFlags: EParticleAxisLock;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleOrientationAxisLock;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleOrientationAxisLock;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleOrientationAxisLock;
	static C(Other: UObject): ParticleModuleOrientationAxisLock;
}

declare class ParticleModuleParameterBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleParameterBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleParameterBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleParameterBase;
	static C(Other: UObject): ParticleModuleParameterBase;
}

declare type EEmitterDynamicParameterValue = string;
declare class EmitterDynamicParameter { 
	ParamName: string;
	bUseEmitterTime: boolean;
	bSpawnTimeOnly: boolean;
	ValueMethod: EEmitterDynamicParameterValue;
	bScaleVelocityByParamValue: boolean;
	ParamValue: RawDistributionFloat;
}

declare class ParticleModuleParameterDynamic extends ParticleModuleParameterBase { 
	DynamicParams: EmitterDynamicParameter[];
	UpdateFlags: number;
	bUsesVelocity: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleParameterDynamic;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleParameterDynamic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleParameterDynamic;
	static C(Other: UObject): ParticleModuleParameterDynamic;
}

declare class ParticleModuleParameterDynamic_Seeded extends ParticleModuleParameterDynamic { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleParameterDynamic_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleParameterDynamic_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleParameterDynamic_Seeded;
	static C(Other: UObject): ParticleModuleParameterDynamic_Seeded;
}

declare class ParticleModuleRotationBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationBase;
	static C(Other: UObject): ParticleModuleRotationBase;
}

declare class ParticleModuleMeshRotation extends ParticleModuleRotationBase { 
	StartRotation: RawDistributionVector;
	bInheritParent: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotation;
	static C(Other: UObject): ParticleModuleMeshRotation;
}

declare class ParticleModuleMeshRotation_Seeded extends ParticleModuleMeshRotation { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotation_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotation_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotation_Seeded;
	static C(Other: UObject): ParticleModuleMeshRotation_Seeded;
}

declare class ParticleModuleRotation extends ParticleModuleRotationBase { 
	StartRotation: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotation;
	static C(Other: UObject): ParticleModuleRotation;
}

declare class ParticleModuleRotation_Seeded extends ParticleModuleRotation { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotation_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotation_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotation_Seeded;
	static C(Other: UObject): ParticleModuleRotation_Seeded;
}

declare class ParticleModuleRotationOverLifetime extends ParticleModuleRotationBase { 
	RotationOverLife: RawDistributionFloat;
	Scale: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationOverLifetime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationOverLifetime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationOverLifetime;
	static C(Other: UObject): ParticleModuleRotationOverLifetime;
}

declare class ParticleModuleRotationRateBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRateBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationRateBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRateBase;
	static C(Other: UObject): ParticleModuleRotationRateBase;
}

declare class ParticleModuleMeshRotationRate extends ParticleModuleRotationRateBase { 
	StartRotationRate: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotationRate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRate;
	static C(Other: UObject): ParticleModuleMeshRotationRate;
}

declare class ParticleModuleRotationRate extends ParticleModuleRotationRateBase { 
	StartRotationRate: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationRate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRate;
	static C(Other: UObject): ParticleModuleRotationRate;
}

declare class ParticleModuleMeshRotationRate_Seeded extends ParticleModuleMeshRotationRate { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRate_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotationRate_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRate_Seeded;
	static C(Other: UObject): ParticleModuleMeshRotationRate_Seeded;
}

declare class ParticleModuleMeshRotationRateMultiplyLife extends ParticleModuleRotationRateBase { 
	LifeMultiplier: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRateMultiplyLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotationRateMultiplyLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRateMultiplyLife;
	static C(Other: UObject): ParticleModuleMeshRotationRateMultiplyLife;
}

declare class ParticleModuleMeshRotationRateOverLife extends ParticleModuleRotationRateBase { 
	RotRate: RawDistributionVector;
	bScaleRotRate: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleMeshRotationRateOverLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleMeshRotationRateOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleMeshRotationRateOverLife;
	static C(Other: UObject): ParticleModuleMeshRotationRateOverLife;
}

declare class ParticleModuleRotationRate_Seeded extends ParticleModuleRotationRate { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRate_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationRate_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRate_Seeded;
	static C(Other: UObject): ParticleModuleRotationRate_Seeded;
}

declare class ParticleModuleRotationRateMultiplyLife extends ParticleModuleRotationRateBase { 
	LifeMultiplier: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleRotationRateMultiplyLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleRotationRateMultiplyLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleRotationRateMultiplyLife;
	static C(Other: UObject): ParticleModuleRotationRateMultiplyLife;
}

declare class ParticleModuleSizeBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSizeBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeBase;
	static C(Other: UObject): ParticleModuleSizeBase;
}

declare class ParticleModuleSize extends ParticleModuleSizeBase { 
	StartSize: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSize;
	static C(Other: UObject): ParticleModuleSize;
}

declare class ParticleModuleSize_Seeded extends ParticleModuleSize { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSize_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSize_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSize_Seeded;
	static C(Other: UObject): ParticleModuleSize_Seeded;
}

declare class ParticleModuleSizeMultiplyLife extends ParticleModuleSizeBase { 
	LifeMultiplier: RawDistributionVector;
	MultiplyX: boolean;
	MultiplyY: boolean;
	MultiplyZ: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeMultiplyLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSizeMultiplyLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeMultiplyLife;
	static C(Other: UObject): ParticleModuleSizeMultiplyLife;
}

declare class ParticleModuleSizeScale extends ParticleModuleSizeBase { 
	SizeScale: RawDistributionVector;
	EnableX: boolean;
	EnableY: boolean;
	EnableZ: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeScale;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSizeScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeScale;
	static C(Other: UObject): ParticleModuleSizeScale;
}

declare class ParticleModuleSizeScaleBySpeed extends ParticleModuleSizeBase { 
	SpeedScale: Vector2D;
	MaxScale: Vector2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSizeScaleBySpeed;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSizeScaleBySpeed;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSizeScaleBySpeed;
	static C(Other: UObject): ParticleModuleSizeScaleBySpeed;
}

declare class ParticleModuleSpawnPerUnit extends ParticleModuleSpawnBase { 
	UnitScalar: number;
	SpawnPerUnit: RawDistributionFloat;
	bIgnoreSpawnRateWhenMoving: boolean;
	MovementTolerance: number;
	MaxFrameDistance: number;
	bIgnoreMovementAlongX: boolean;
	bIgnoreMovementAlongY: boolean;
	bIgnoreMovementAlongZ: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSpawnPerUnit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSpawnPerUnit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSpawnPerUnit;
	static C(Other: UObject): ParticleModuleSpawnPerUnit;
}

declare class ParticleModuleSubUVBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSubUVBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSubUVBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSubUVBase;
	static C(Other: UObject): ParticleModuleSubUVBase;
}

declare class ParticleModuleSubUV extends ParticleModuleSubUVBase { 
	SubImageIndex: RawDistributionFloat;
	bUseRealTime: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSubUV;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSubUV;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSubUV;
	static C(Other: UObject): ParticleModuleSubUV;
}

declare class ParticleModuleSubUVMovie extends ParticleModuleSubUV { 
	bUseEmitterTime: boolean;
	FrameRate: RawDistributionFloat;
	StartingFrame: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleSubUVMovie;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleSubUVMovie;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleSubUVMovie;
	static C(Other: UObject): ParticleModuleSubUVMovie;
}

declare class ParticleModuleTrailBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTrailBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTrailBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTrailBase;
	static C(Other: UObject): ParticleModuleTrailBase;
}

declare type ETrail2SourceMethod = string;
declare type EParticleSourceSelectionMethod = string;
declare class ParticleModuleTrailSource extends ParticleModuleTrailBase { 
	SourceMethod: ETrail2SourceMethod;
	SourceName: string;
	SourceStrength: RawDistributionFloat;
	bLockSourceStength: boolean;
	SourceOffsetCount: number;
	SourceOffsetDefaults: Vector[];
	SelectionMethod: EParticleSourceSelectionMethod;
	bInheritRotation: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTrailSource;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTrailSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTrailSource;
	static C(Other: UObject): ParticleModuleTrailSource;
}

declare class ParticleModuleTypeDataBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataBase;
	static C(Other: UObject): ParticleModuleTypeDataBase;
}

declare class ParticleModuleTypeDataAnimTrail extends ParticleModuleTypeDataBase { 
	bDeadTrailsOnDeactivate: boolean;
	bEnablePreviousTangentRecalculation: boolean;
	bTangentRecalculationEveryFrame: boolean;
	TilingDistance: number;
	DistanceTessellationStepSize: number;
	TangentTessellationStepSize: number;
	WidthTessellationStepSize: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataAnimTrail;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataAnimTrail;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataAnimTrail;
	static C(Other: UObject): ParticleModuleTypeDataAnimTrail;
}

declare type EBeam2Method = string;
declare type EBeamTaperMethod = string;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataBeam2;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataBeam2;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataBeam2;
	static C(Other: UObject): ParticleModuleTypeDataBeam2;
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
}

declare class FloatDistribution { 
	Table: DistributionLookupTable;
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
	DynamicColor: RawDistributionVector;
	DynamicAlpha: RawDistributionFloat;
	DynamicColorScale: RawDistributionVector;
	DynamicAlphaScale: RawDistributionFloat;
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
	OneMinusFriction: number;
	RotationRateScale: number;
	CameraMotionBlurAmount: number;
	ScreenAlignment: EParticleScreenAlignment;
	LockAxisFlag: EParticleAxisLock;
	PivotOffset: Vector2D;
}

declare class ParticleModuleTypeDataGpu extends ParticleModuleTypeDataBase { 
	EmitterInfo: GPUSpriteEmitterInfo;
	ResourceData: GPUSpriteResourceData;
	CameraMotionBlurAmount: number;
	bClearExistingParticlesOnInit: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataGpu;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataGpu;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataGpu;
	static C(Other: UObject): ParticleModuleTypeDataGpu;
}

declare type EMeshScreenAlignment = string;
declare type EMeshCameraFacingUpAxis = string;
declare type EMeshCameraFacingOptions = string;
declare class ParticleModuleTypeDataMesh extends ParticleModuleTypeDataBase { 
	Mesh: StaticMesh;
	CastShadows: boolean;
	DoCollisions: boolean;
	MeshAlignment: EMeshScreenAlignment;
	bOverrideMaterial: boolean;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataMesh;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataMesh;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataMesh;
	static C(Other: UObject): ParticleModuleTypeDataMesh;
}

declare type ETrailsRenderAxisOption = string;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleTypeDataRibbon;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleTypeDataRibbon;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleTypeDataRibbon;
	static C(Other: UObject): ParticleModuleTypeDataRibbon;
}

declare class ParticleModuleVectorFieldBase extends ParticleModule { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldBase;
	static C(Other: UObject): ParticleModuleVectorFieldBase;
}

declare class ParticleModuleVectorFieldGlobal extends ParticleModuleVectorFieldBase { 
	bOverrideGlobalVectorFieldTightness: boolean;
	GlobalVectorFieldScale: number;
	GlobalVectorFieldTightness: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldGlobal;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldGlobal;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldGlobal;
	static C(Other: UObject): ParticleModuleVectorFieldGlobal;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldLocal;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldLocal;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldLocal;
	static C(Other: UObject): ParticleModuleVectorFieldLocal;
}

declare class ParticleModuleVectorFieldRotation extends ParticleModuleVectorFieldBase { 
	MinInitialRotation: Vector;
	MaxInitialRotation: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldRotation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldRotation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldRotation;
	static C(Other: UObject): ParticleModuleVectorFieldRotation;
}

declare class ParticleModuleVectorFieldRotationRate extends ParticleModuleVectorFieldBase { 
	RotationRate: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldRotationRate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldRotationRate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldRotationRate;
	static C(Other: UObject): ParticleModuleVectorFieldRotationRate;
}

declare class ParticleModuleVectorFieldScale extends ParticleModuleVectorFieldBase { 
	VectorFieldScale: DistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldScale;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldScale;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldScale;
	static C(Other: UObject): ParticleModuleVectorFieldScale;
}

declare class ParticleModuleVectorFieldScaleOverLife extends ParticleModuleVectorFieldBase { 
	VectorFieldScaleOverLife: DistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVectorFieldScaleOverLife;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVectorFieldScaleOverLife;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVectorFieldScaleOverLife;
	static C(Other: UObject): ParticleModuleVectorFieldScaleOverLife;
}

declare class ParticleModuleVelocityBase extends ParticleModule { 
	bInWorldSpace: boolean;
	bApplyOwnerScale: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocityBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityBase;
	static C(Other: UObject): ParticleModuleVelocityBase;
}

declare class ParticleModuleVelocity extends ParticleModuleVelocityBase { 
	StartVelocity: RawDistributionVector;
	StartVelocityRadial: RawDistributionFloat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocity;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocity;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocity;
	static C(Other: UObject): ParticleModuleVelocity;
}

declare class ParticleModuleVelocity_Seeded extends ParticleModuleVelocity { 
	RandomSeedInfo: ParticleRandomSeedInfo;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocity_Seeded;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocity_Seeded;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocity_Seeded;
	static C(Other: UObject): ParticleModuleVelocity_Seeded;
}

declare class ParticleModuleVelocityCone extends ParticleModuleVelocityBase { 
	Angle: RawDistributionFloat;
	Velocity: RawDistributionFloat;
	Direction: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityCone;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocityCone;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityCone;
	static C(Other: UObject): ParticleModuleVelocityCone;
}

declare class ParticleModuleVelocityInheritParent extends ParticleModuleVelocityBase { 
	Scale: RawDistributionVector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityInheritParent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocityInheritParent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityInheritParent;
	static C(Other: UObject): ParticleModuleVelocityInheritParent;
}

declare class ParticleModuleVelocityOverLifetime extends ParticleModuleVelocityBase { 
	VelOverLife: RawDistributionVector;
	Absolute: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ParticleModuleVelocityOverLifetime;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ParticleModuleVelocityOverLifetime;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ParticleModuleVelocityOverLifetime;
	static C(Other: UObject): ParticleModuleVelocityOverLifetime;
}

declare class DemoPendingNetGame extends PendingNetGame { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DemoPendingNetGame;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DemoPendingNetGame;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DemoPendingNetGame;
	static C(Other: UObject): DemoPendingNetGame;
}

declare type EPlatformInterfaceDataType = string;
declare class PlatformInterfaceData { 
	DataName: string;
	Type: EPlatformInterfaceDataType;
	IntValue: number;
	FloatValue: number;
	StringValue: string;
	ObjectValue: UObject;
}

declare class PlatformInterfaceDelegateResult { 
	bSuccessful: boolean;
	Data: PlatformInterfaceData;
}

declare class DelegateArray { 
	Delegates: UnrealEngineDelegate<(Result: PlatformInterfaceDelegateResult) => void>[];
}

declare class PlatformInterfaceBase extends UObject { 
	AllDelegates: DelegateArray[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PlatformInterfaceBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PlatformInterfaceBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformInterfaceBase;
	static C(Other: UObject): PlatformInterfaceBase;
}

declare class CloudStorageBase extends PlatformInterfaceBase { 
	LocalCloudFiles: string[];
	bSuppressDelegateCalls: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CloudStorageBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CloudStorageBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CloudStorageBase;
	static C(Other: UObject): CloudStorageBase;
}

declare class InGameAdManager extends PlatformInterfaceBase { 
	bShouldPauseWhileAdOpen: boolean;
	ClickedBannerDelegates: UnrealEngineDelegate<() => void>[];
	ClosedAdDelegates: UnrealEngineDelegate<() => void>[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InGameAdManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InGameAdManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InGameAdManager;
	static C(Other: UObject): InGameAdManager;
}

declare class PurchaseInfo { 
	Identifier: string;
	DisplayName: string;
	DisplayDescription: string;
	DisplayPrice: string;
}

declare class MicroTransactionBase extends PlatformInterfaceBase { 
	AvailableProducts: PurchaseInfo[];
	LastError: string;
	LastErrorSolution: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MicroTransactionBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MicroTransactionBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MicroTransactionBase;
	static C(Other: UObject): MicroTransactionBase;
}

declare type ETwitterRequestMethod = string;
declare class TwitterIntegrationBase extends PlatformInterfaceBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TwitterIntegrationBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TwitterIntegrationBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TwitterIntegrationBase;
	static C(Other: UObject): TwitterIntegrationBase;
	TwitterRequest(URL: string,ParamKeysAndValues: string[],RequestMethod: ETwitterRequestMethod,AccountIndex: number): boolean;
	ShowTweetUI(InitialMessage: string,URL: string,Picture: string): boolean;
	Init(): void;
	GetNumAccounts(): number;
	GetAccountName(AccountIndex: number): string;
	CanShowTweetUI(): boolean;
	AuthorizeAccounts(): boolean;
}

declare class PlatformInterfaceWebResponse extends UObject { 
	OriginalURL: string;
	ResponseCode: number;
	Tag: number;
	StringResponse: string;
	BinaryResponse: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PlatformInterfaceWebResponse;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PlatformInterfaceWebResponse;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformInterfaceWebResponse;
	static C(Other: UObject): PlatformInterfaceWebResponse;
	GetNumHeaders(): number;
	GetHeaderValue(HeaderName: string): string;
	GetHeader(HeaderIndex: number,Header?: string,Value?: string): {Header: string, Value: string};
}

declare class DemoNetConnection extends NetConnection { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DemoNetConnection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DemoNetConnection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DemoNetConnection;
	static C(Other: UObject): DemoNetConnection;
}

declare class Polys extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): Polys;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): Polys;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Polys;
	static C(Other: UObject): Polys;
}

declare class USelection extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): USelection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): USelection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): USelection;
	static C(Other: UObject): USelection;
}

declare class SoundGroup { 
	SoundGroup: ESoundGroup;
	DisplayName: string;
	bAlwaysDecompressOnLoad: boolean;
	DecompressedDuration: number;
}

declare class SoundGroups extends UObject { 
	SoundGroupProfiles: SoundGroup[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundGroups;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundGroups;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundGroups;
	static C(Other: UObject): SoundGroups;
}

declare class SoundWaveProcedural extends SoundWave { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundWaveProcedural;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundWaveProcedural;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundWaveProcedural;
	static C(Other: UObject): SoundWaveProcedural;
}

declare class SoundNodeAssetReferencer extends SoundNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeAssetReferencer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeAssetReferencer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeAssetReferencer;
	static C(Other: UObject): SoundNodeAssetReferencer;
}

declare class SoundNodeWavePlayer extends SoundNodeAssetReferencer { 
	SoundWaveAssetPtr: any;
	SoundWave: SoundWave;
	bLooping: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeWavePlayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeWavePlayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeWavePlayer;
	static C(Other: UObject): SoundNodeWavePlayer;
}

declare class SoundNodeAttenuation extends SoundNode { 
	AttenuationSettings: SoundAttenuation;
	AttenuationOverrides: AttenuationSettings;
	bOverrideAttenuation: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeAttenuation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeAttenuation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeAttenuation;
	static C(Other: UObject): SoundNodeAttenuation;
}

declare class SoundNodeBranch extends SoundNode { 
	BoolParameterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeBranch;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeBranch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeBranch;
	static C(Other: UObject): SoundNodeBranch;
}

declare class SoundNodeConcatenator extends SoundNode { 
	InputVolume: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeConcatenator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeConcatenator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeConcatenator;
	static C(Other: UObject): SoundNodeConcatenator;
}

declare class SoundNodeDelay extends SoundNode { 
	DelayMin: number;
	DelayMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDelay;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeDelay;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDelay;
	static C(Other: UObject): SoundNodeDelay;
}

declare class DialogueWaveParameter { 
	DialogueWave: DialogueWave;
	Context: DialogueContext;
}

declare class SoundNodeDialoguePlayer extends SoundNode { 
	DialogueWaveParameter: DialogueWaveParameter;
	bLooping: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDialoguePlayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeDialoguePlayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDialoguePlayer;
	static C(Other: UObject): SoundNodeDialoguePlayer;
}

declare class DistanceDatum { 
	FadeInDistanceStart: number;
	FadeInDistanceEnd: number;
	FadeOutDistanceStart: number;
	FadeOutDistanceEnd: number;
	Volume: number;
}

declare class SoundNodeDistanceCrossFade extends SoundNode { 
	CrossFadeInput: DistanceDatum[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDistanceCrossFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeDistanceCrossFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDistanceCrossFade;
	static C(Other: UObject): SoundNodeDistanceCrossFade;
}

declare class SoundNodeParamCrossFade extends SoundNodeDistanceCrossFade { 
	ParamName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeParamCrossFade;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeParamCrossFade;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeParamCrossFade;
	static C(Other: UObject): SoundNodeParamCrossFade;
}

declare class SoundNodeDoppler extends SoundNode { 
	DopplerIntensity: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeDoppler;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeDoppler;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeDoppler;
	static C(Other: UObject): SoundNodeDoppler;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeEnveloper;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeEnveloper;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeEnveloper;
	static C(Other: UObject): SoundNodeEnveloper;
}

declare class SoundNodeGroupControl extends SoundNode { 
	GroupSizes: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeGroupControl;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeGroupControl;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeGroupControl;
	static C(Other: UObject): SoundNodeGroupControl;
}

declare class SoundNodeLooping extends SoundNode { 
	LoopCount: number;
	bLoopIndefinitely: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeLooping;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeLooping;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeLooping;
	static C(Other: UObject): SoundNodeLooping;
}

declare class SoundNodeMature extends SoundNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeMature;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeMature;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeMature;
	static C(Other: UObject): SoundNodeMature;
}

declare class SoundNodeMixer extends SoundNode { 
	InputVolume: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeMixer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeMixer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeMixer;
	static C(Other: UObject): SoundNodeMixer;
}

declare class SoundNodeModulator extends SoundNode { 
	PitchMin: number;
	PitchMax: number;
	VolumeMin: number;
	VolumeMax: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeModulator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeModulator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeModulator;
	static C(Other: UObject): SoundNodeModulator;
}

declare type ModulationParamMode = string;
declare class ModulatorContinuousParams { 
	ParameterName: string;
	Default: number;
	MinInput: number;
	MaxInput: number;
	MinOutput: number;
	MaxOutput: number;
	ParamMode: ModulationParamMode;
}

declare class SoundNodeModulatorContinuous extends SoundNode { 
	PitchModulationParams: ModulatorContinuousParams;
	VolumeModulationParams: ModulatorContinuousParams;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeModulatorContinuous;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeModulatorContinuous;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeModulatorContinuous;
	static C(Other: UObject): SoundNodeModulatorContinuous;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeOscillator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeOscillator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeOscillator;
	static C(Other: UObject): SoundNodeOscillator;
}

declare class SoundNodeQualityLevel extends SoundNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeQualityLevel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeQualityLevel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeQualityLevel;
	static C(Other: UObject): SoundNodeQualityLevel;
}

declare class SoundNodeRandom extends SoundNode { 
	Weights: number[];
	PreselectAtLevelLoad: number;
	bRandomizeWithoutReplacement: boolean;
	HasBeenUsed: boolean[];
	NumRandomUsed: number;
	PIEHiddenNodes: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeRandom;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeRandom;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeRandom;
	static C(Other: UObject): SoundNodeRandom;
}

declare class SoundNodeSoundClass extends SoundNode { 
	SoundClassOverride: SoundClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeSoundClass;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeSoundClass;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeSoundClass;
	static C(Other: UObject): SoundNodeSoundClass;
}

declare class SoundNodeSwitch extends SoundNode { 
	IntParameterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeSwitch;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeSwitch;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeSwitch;
	static C(Other: UObject): SoundNodeSwitch;
}

declare class SoundNodeWaveParam extends SoundNode { 
	WaveParameterName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SoundNodeWaveParam;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SoundNodeWaveParam;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SoundNodeWaveParam;
	static C(Other: UObject): SoundNodeWaveParam;
}

declare class TextPropertyTestObject extends UObject { 
	DefaultedText: string;
	UndefaultedText: string;
	TransientText: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TextPropertyTestObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TextPropertyTestObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextPropertyTestObject;
	static C(Other: UObject): TextPropertyTestObject;
}

declare class LightMapTexture2D extends Texture2D { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightMapTexture2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightMapTexture2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightMapTexture2D;
	static C(Other: UObject): LightMapTexture2D;
}

declare type EShadowMapFlags = string;
declare class ShadowMapTexture2D extends Texture2D { 
	ShadowmapFlags: EShadowMapFlags;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ShadowMapTexture2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ShadowMapTexture2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShadowMapTexture2D;
	static C(Other: UObject): ShadowMapTexture2D;
}

declare class Texture2DDynamic extends Texture { 
	Format: EPixelFormat;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): Texture2DDynamic;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): Texture2DDynamic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Texture2DDynamic;
	static C(Other: UObject): Texture2DDynamic;
}

declare class CanvasRenderTarget2D extends TextureRenderTarget2D { 
	OnCanvasRenderTargetUpdate: UnrealEngineMulticastDelegate<(Canvas: Canvas, Width: number, Height: number) => void>;
	World: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CanvasRenderTarget2D;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CanvasRenderTarget2D;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CanvasRenderTarget2D;
	static C(Other: UObject): CanvasRenderTarget2D;
	UpdateResource(): void;
	ReceiveUpdate(Canvas: Canvas,Width: number,Height: number): void;
	GetSize(Width?: number,Height?: number): {Width: number, Height: number};
	static CreateCanvasRenderTarget2D(WorldContextObject: UObject,CanvasRenderTarget2DClass: UnrealEngineClass,Width: number,Height: number): CanvasRenderTarget2D;
}

declare class UserDefinedEnum extends Enum { 
	UniqueNameIndex: any;
	DisplayNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): UserDefinedEnum;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): UserDefinedEnum;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UserDefinedEnum;
	static C(Other: UObject): UserDefinedEnum;
}

declare type EVectorFieldConstructionOp = string;
declare class VectorFieldStatic extends VectorField { 
	SizeX: number;
	SizeY: number;
	SizeZ: number;
	SourceFilePath: string;
	AssetImportData: AssetImportData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VectorFieldStatic;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VectorFieldStatic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldStatic;
	static C(Other: UObject): VectorFieldStatic;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VectorFieldAnimated;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VectorFieldAnimated;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VectorFieldAnimated;
	static C(Other: UObject): VectorFieldAnimated;
}

declare class VisualLoggerAutomationTests extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VisualLoggerAutomationTests;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerAutomationTests;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerAutomationTests;
	static C(Other: UObject): VisualLoggerAutomationTests;
}

declare class MoviePlayerSettings extends UObject { 
	bWaitForMoviesToComplete: boolean;
	bMoviesAreSkippable: boolean;
	StartupMovies: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MoviePlayerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MoviePlayerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MoviePlayerSettings;
	static C(Other: UObject): MoviePlayerSettings;
}

declare type EMinimumSupportedOS = string;
declare class WindowsTargetSettings extends UObject { 
	TargetedRHIs: string[];
	MinimumOSVersion: EMinimumSupportedOS;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WindowsTargetSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WindowsTargetSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WindowsTargetSettings;
	static C(Other: UObject): WindowsTargetSettings;
}

declare class LinuxTargetSettings extends UObject { 
	TargetedRHIs: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LinuxTargetSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LinuxTargetSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LinuxTargetSettings;
	static C(Other: UObject): LinuxTargetSettings;
}

declare class MotionControllerComponent extends PrimitiveComponent { 
	PlayerIndex: number;
	Hand: EControllerHand;
	bDisableLowLatencyUpdate: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MotionControllerComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MotionControllerComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MotionControllerComponent;
	static C(Other: UObject): MotionControllerComponent;
	IsTracked(): boolean;
}

declare class AchievementBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AchievementBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AchievementBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementBlueprintLibrary;
	static C(Other: UObject): AchievementBlueprintLibrary;
	static GetCachedAchievementProgress(WorldContextObject: UObject,PlayerController: PlayerController,AchievementID: string,bFoundID?: boolean,Progress?: number): {bFoundID: boolean, Progress: number};
	static GetCachedAchievementDescription(WorldContextObject: UObject,PlayerController: PlayerController,AchievementID: string,bFoundID?: boolean,Title?: string,LockedDescription?: string,UnlockedDescription?: string,bHidden?: boolean): {bFoundID: boolean, Title: string, LockedDescription: string, UnlockedDescription: string, bHidden: boolean};
}

declare type EInAppPurchaseState = string;
declare class InAppPurchaseProductInfo { 
	Identifier: string;
	TransactionIdentifier: string;
	DisplayName: string;
	DisplayDescription: string;
	DisplayPrice: string;
	CurrencyCode: string;
	CurrencySymbol: string;
	DecimalSeparator: string;
	GroupingSeparator: string;
	ReceiptData: string;
}

declare class InAppPurchaseProductRequest { 
	ProductIdentifier: string;
	bIsConsumable: boolean;
}

declare class InAppPurchaseCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppPurchaseInformation: InAppPurchaseProductInfo) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppPurchaseInformation: InAppPurchaseProductInfo) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InAppPurchaseCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InAppPurchaseCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseCallbackProxy;
	static C(Other: UObject): InAppPurchaseCallbackProxy;
	static CreateProxyObjectForInAppPurchase(PlayerController: PlayerController,ProductRequest: InAppPurchaseProductRequest): InAppPurchaseCallbackProxy;
}

declare class InAppPurchaseQueryCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InAppPurchaseQueryCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InAppPurchaseQueryCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseQueryCallbackProxy;
	static C(Other: UObject): InAppPurchaseQueryCallbackProxy;
	static ReadInAppPurchaseInformation(PlayerController: PlayerController,ProductIdentifiers: string[]): InAppPurchaseQueryCallbackProxy;
}

declare class InAppPurchaseRestoreInfo { 
	Identifier: string;
	ReceiptData: string;
}

declare class InAppPurchaseRestoreCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InAppPurchaseRestoreCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InAppPurchaseRestoreCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseRestoreCallbackProxy;
	static C(Other: UObject): InAppPurchaseRestoreCallbackProxy;
	static CreateProxyObjectForInAppPurchaseRestore(PlayerController: PlayerController): InAppPurchaseRestoreCallbackProxy;
}

declare class IpConnection extends NetConnection { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): IpConnection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): IpConnection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IpConnection;
	static C(Other: UObject): IpConnection;
}

declare class IpNetDriver extends NetDriver { 
	LogPortUnreach: boolean;
	AllowPlayerPortUnreach: boolean;
	MaxPortCountToTry: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): IpNetDriver;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): IpNetDriver;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IpNetDriver;
	static C(Other: UObject): IpNetDriver;
}

declare class LeaderboardBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeaderboardBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeaderboardBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardBlueprintLibrary;
	static C(Other: UObject): LeaderboardBlueprintLibrary;
	static WriteLeaderboardInteger(PlayerController: PlayerController,StatName: string,StatValue: number): boolean;
}

declare class LeaderboardFlushCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeaderboardFlushCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeaderboardFlushCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardFlushCallbackProxy;
	static C(Other: UObject): LeaderboardFlushCallbackProxy;
	static CreateProxyObjectForFlush(PlayerController: PlayerController,SessionName: string): LeaderboardFlushCallbackProxy;
}

declare class LeaderboardQueryCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeaderboardQueryCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeaderboardQueryCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardQueryCallbackProxy;
	static C(Other: UObject): LeaderboardQueryCallbackProxy;
	static ReadLeaderboardInteger(PlayerController: PlayerController,StatName: string): LeaderboardQueryCallbackProxy;
}

declare class LogoutCallbackProxy extends BlueprintAsyncActionBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LogoutCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LogoutCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogoutCallbackProxy;
	static C(Other: UObject): LogoutCallbackProxy;
	static Logout(WorldContextObject: UObject,PlayerController: PlayerController): LogoutCallbackProxy;
}

declare class OnlineBeacon extends Actor { 
	BeaconConnectionInitialTimeout: number;
	BeaconConnectionTimeout: number;
	NetDriver: NetDriver;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeacon;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeacon;
	static C(Other: UObject): OnlineBeacon;
}

declare class OnlineBeaconHostObject extends Actor { 
	BeaconTypeName: string;
	ClientBeaconActorClass: UnrealEngineClass;
	ClientActors: OnlineBeaconClient[];
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeaconHostObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHostObject;
	static C(Other: UObject): OnlineBeaconHostObject;
}

declare type EBeaconConnectionState = string;
declare class OnlineBeaconClient extends OnlineBeacon { 
	BeaconOwner: OnlineBeaconHostObject;
	BeaconConnection: NetConnection;
	ConnectionState: EBeaconConnectionState;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconClient;
	static C(Other: UObject): OnlineBeaconClient;
	ClientOnConnected(): void;
}

declare class PlayerReservation { 
	UniqueId: UniqueNetIdRepl;
	ValidationStr: string;
	ElapsedTime: number;
}

declare class PartyReservation { 
	TeamNum: number;
	PartyLeader: UniqueNetIdRepl;
	PartyMembers: PlayerReservation[];
}

declare class PartyBeaconState extends UObject { 
	SessionName: string;
	NumConsumedReservations: number;
	MaxReservations: number;
	NumTeams: number;
	NumPlayersPerTeam: number;
	ReservedHostTeamNum: number;
	ForceTeamNum: number;
	Reservations: PartyReservation[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PartyBeaconState;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PartyBeaconState;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconState;
	static C(Other: UObject): PartyBeaconState;
}

declare type EClientRequestType = string;
declare type EPartyReservationResult = string;
declare class PartyBeaconClient extends OnlineBeaconClient { 
	DestSessionId: string;
	PendingReservation: PartyReservation;
	RequestType: EClientRequestType;
	bPendingReservationSent: boolean;
	bCancelReservation: boolean;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PartyBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconClient;
	static C(Other: UObject): PartyBeaconClient;
	ServerUpdateReservationRequest(SessionId: string,ReservationUpdate: PartyReservation): void;
	ServerReservationRequest(SessionId: string,Reservation: PartyReservation): void;
	ServerCancelReservationRequest(PartyLeader: UniqueNetIdRepl): void;
	ClientSendReservationUpdates(NumRemainingReservations: number): void;
	ClientReservationResponse(ReservationResponse: EPartyReservationResult): void;
}

declare class TestBeaconClient extends OnlineBeaconClient { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconClient;
	static C(Other: UObject): TestBeaconClient;
	ServerPong(): void;
	ClientPing(): void;
}

declare class OnlineBeaconHost extends OnlineBeacon { 
	ListenPort: number;
	ClientActors: OnlineBeaconClient[];
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHost;
	static C(Other: UObject): OnlineBeaconHost;
}

declare class PartyBeaconHost extends OnlineBeaconHostObject { 
	State: PartyBeaconState;
	SessionTimeoutSecs: number;
	TravelSessionTimeoutSecs: number;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PartyBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconHost;
	static C(Other: UObject): PartyBeaconHost;
}

declare class TestBeaconHost extends OnlineBeaconHostObject { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconHost;
	static C(Other: UObject): TestBeaconHost;
}

declare class OnlineBlueprintCallProxyBase extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OnlineBlueprintCallProxyBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBlueprintCallProxyBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBlueprintCallProxyBase;
	static C(Other: UObject): OnlineBlueprintCallProxyBase;
	Activate(): void;
}

declare class AchievementQueryCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AchievementQueryCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AchievementQueryCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementQueryCallbackProxy;
	static C(Other: UObject): AchievementQueryCallbackProxy;
	static CacheAchievements(WorldContextObject: UObject,PlayerController: PlayerController): AchievementQueryCallbackProxy;
	static CacheAchievementDescriptions(WorldContextObject: UObject,PlayerController: PlayerController): AchievementQueryCallbackProxy;
}

declare class AchievementWriteCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(WrittenAchievementName: string, WrittenProgress: number, WrittenUserTag: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(WrittenAchievementName: string, WrittenProgress: number, WrittenUserTag: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AchievementWriteCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AchievementWriteCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementWriteCallbackProxy;
	static C(Other: UObject): AchievementWriteCallbackProxy;
	static WriteAchievementProgress(WorldContextObject: UObject,PlayerController: PlayerController,AchievementName: string,Progress: number,UserTag: number): AchievementWriteCallbackProxy;
}

declare class ConnectionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ConnectionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ConnectionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConnectionCallbackProxy;
	static C(Other: UObject): ConnectionCallbackProxy;
	static ConnectToService(WorldContextObject: UObject,PlayerController: PlayerController): ConnectionCallbackProxy;
}

declare class CreateSessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CreateSessionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CreateSessionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CreateSessionCallbackProxy;
	static C(Other: UObject): CreateSessionCallbackProxy;
	static CreateSession(WorldContextObject: UObject,PlayerController: PlayerController,PublicConnections: number,bUseLAN: boolean): CreateSessionCallbackProxy;
}

declare class DestroySessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DestroySessionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DestroySessionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DestroySessionCallbackProxy;
	static C(Other: UObject): DestroySessionCallbackProxy;
	static DestroySession(WorldContextObject: UObject,PlayerController: PlayerController): DestroySessionCallbackProxy;
}

declare class EndMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EndMatchCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EndMatchCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndMatchCallbackProxy;
	static C(Other: UObject): EndMatchCallbackProxy;
}

declare class EndTurnCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EndTurnCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EndTurnCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndTurnCallbackProxy;
	static C(Other: UObject): EndTurnCallbackProxy;
}

declare class BlueprintSessionResult { 
}

declare class FindSessionsCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(Results: BlueprintSessionResult[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(Results: BlueprintSessionResult[]) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FindSessionsCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FindSessionsCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FindSessionsCallbackProxy;
	static C(Other: UObject): FindSessionsCallbackProxy;
	static GetServerName(Result: BlueprintSessionResult): string;
	static GetPingInMs(Result: BlueprintSessionResult): number;
	static GetMaxPlayers(Result: BlueprintSessionResult): number;
	static GetCurrentPlayers(Result: BlueprintSessionResult): number;
	static FindSessions(WorldContextObject: UObject,PlayerController: PlayerController,MaxResults: number,bUseLAN: boolean): FindSessionsCallbackProxy;
}

declare class FindTurnBasedMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FindTurnBasedMatchCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FindTurnBasedMatchCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FindTurnBasedMatchCallbackProxy;
	static C(Other: UObject): FindTurnBasedMatchCallbackProxy;
}

declare class JoinSessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JoinSessionCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JoinSessionCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JoinSessionCallbackProxy;
	static C(Other: UObject): JoinSessionCallbackProxy;
	static JoinSession(WorldContextObject: UObject,PlayerController: PlayerController,SearchResult: BlueprintSessionResult): JoinSessionCallbackProxy;
}

declare type EMPMatchOutcome = string;
declare class QuitMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): QuitMatchCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): QuitMatchCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuitMatchCallbackProxy;
	static C(Other: UObject): QuitMatchCallbackProxy;
	static QuitMatch(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,Outcome: EMPMatchOutcome,TurnTimeoutInSeconds: number): QuitMatchCallbackProxy;
}

declare class OnlineSessionClient extends OnlineSession { 
	bIsFromInvite: boolean;
	bHandlingDisconnect: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OnlineSessionClient;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineSessionClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineSessionClient;
	static C(Other: UObject): OnlineSessionClient;
}

declare class ShowLoginUICallbackProxy extends BlueprintAsyncActionBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ShowLoginUICallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ShowLoginUICallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShowLoginUICallbackProxy;
	static C(Other: UObject): ShowLoginUICallbackProxy;
	static ShowExternalLoginUI(WorldContextObject: UObject,InPlayerController: PlayerController): ShowLoginUICallbackProxy;
}

declare class TurnBasedBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TurnBasedBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TurnBasedBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TurnBasedBlueprintLibrary;
	static C(Other: UObject): TurnBasedBlueprintLibrary;
	static RegisterTurnBasedMatchInterfaceObject(WorldContextObject: UObject,PlayerController: PlayerController,UObject: UObject): void;
	static GetPlayerDisplayName(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex: number,PlayerDisplayName?: string): {PlayerDisplayName: string};
	static GetMyPlayerIndex(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex?: number): {PlayerIndex: number};
	static GetIsMyTurn(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,bIsMyTurn?: boolean): {bIsMyTurn: boolean};
}

declare class SourceCodeAccessSettings extends UObject { 
	PreferredAccessor: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SourceCodeAccessSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SourceCodeAccessSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceCodeAccessSettings;
	static C(Other: UObject): SourceCodeAccessSettings;
}

declare class MovieSceneCaptureInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneCaptureInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneCaptureInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneCaptureInterface;
	static C(Other: UObject): MovieSceneCaptureInterface;
}

declare class CaptureResolution { 
	ResX: any;
	ResY: any;
}

declare type EMovieCaptureType = string;
declare class MovieSceneCaptureSettings { 
	OutputDirectory: DirectoryPath;
	OutputFormat: string;
	FrameRate: number;
	Resolution: CaptureResolution;
	CaptureType: EMovieCaptureType;
	bUseCompression: boolean;
	CompressionQuality: number;
	Codec: string;
	bEnableTextureStreaming: boolean;
	bCinematicMode: boolean;
	bAllowMovement: boolean;
	bAllowTurning: boolean;
	bShowPlayer: boolean;
	bShowHUD: boolean;
}

declare class MovieSceneCapture extends UObject { 
	Settings: MovieSceneCaptureSettings;
	AdditionalCommandLineArguments: string;
	bBufferVisualizationDumpFrames: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneCapture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneCapture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneCapture;
	static C(Other: UObject): MovieSceneCapture;
}

declare class AutomatedLevelSequenceCapture extends MovieSceneCapture { 
	LevelSequence: StringAssetReference;
	Level: StringAssetReference;
	PlaybackSettings: LevelSequencePlaybackSettings;
	PrerollAmount: number;
	AnimationInstance: LevelSequenceInstance;
	AnimationPlayback: LevelSequencePlayer;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AutomatedLevelSequenceCapture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AutomatedLevelSequenceCapture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomatedLevelSequenceCapture;
	static C(Other: UObject): AutomatedLevelSequenceCapture;
}

declare class LevelCapture extends MovieSceneCapture { 
	Level: StringAssetReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelCapture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelCapture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelCapture;
	static C(Other: UObject): LevelCapture;
}

declare class MovieSceneCaptureEnvironment extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneCaptureEnvironment;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneCaptureEnvironment;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneCaptureEnvironment;
	static C(Other: UObject): MovieSceneCaptureEnvironment;
	static GetCaptureFrameNumber(): number;
	static GetCaptureElapsedTime(): number;
}

declare class SequencerProjectSettings extends UObject { 
	InFrame: number;
	Duration: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SequencerProjectSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SequencerProjectSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerProjectSettings;
	static C(Other: UObject): SequencerProjectSettings;
}

declare class SequencerSettingsContainer extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SequencerSettingsContainer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SequencerSettingsContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerSettingsContainer;
	static C(Other: UObject): SequencerSettingsContainer;
}

declare type EMovieSceneKeyInterpolation = string;
declare class SequencerSettings extends UObject { 
	bAutoKeyEnabled: boolean;
	bKeyAllEnabled: boolean;
	bKeyInterpPropertiesOnly: boolean;
	KeyInterpolation: EMovieSceneKeyInterpolation;
	bShowFrameNumbers: boolean;
	bShowRangeSlider: boolean;
	bLockInOutToStartEndRange: boolean;
	bIsSnapEnabled: boolean;
	TimeSnapInterval: number;
	bSnapKeyTimesToInterval: boolean;
	bSnapKeyTimesToKeys: boolean;
	bSnapSectionTimesToInterval: boolean;
	bSnapSectionTimesToSections: boolean;
	bSnapPlayTimeToInterval: boolean;
	bSnapPlayTimeToDraggedKey: boolean;
	CurveValueSnapInterval: number;
	bSnapCurveValueToInterval: boolean;
	bDetailsViewVisible: boolean;
	bAutoScrollEnabled: boolean;
	bShowCurveEditor: boolean;
	bShowCurveEditorCurveToolTips: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SequencerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SequencerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerSettings;
	static C(Other: UObject): SequencerSettings;
}

declare class LevelEditorSequencerSettings extends SequencerSettings { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelEditorSequencerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelEditorSequencerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelEditorSequencerSettings;
	static C(Other: UObject): LevelEditorSequencerSettings;
}

declare class InternationalizationSettingsModel extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InternationalizationSettingsModel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InternationalizationSettingsModel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InternationalizationSettingsModel;
	static C(Other: UObject): InternationalizationSettingsModel;
}

declare class MediaPlayer extends UObject { 
	OnMediaClosed: UnrealEngineMulticastDelegate<() => void>;
	OnMediaOpened: UnrealEngineMulticastDelegate<(OpenedUrl: string) => void>;
	Looping: boolean;
	URL: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaPlayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayer;
	static C(Other: UObject): MediaPlayer;
	SupportsSeeking(): boolean;
	SupportsScrubbing(): boolean;
	SupportsRate(Rate: number,Unthinned: boolean): boolean;
	SetRate(Rate: number): boolean;
	SetLooping(InLooping: boolean): boolean;
	Seek(InTime: Timespan): boolean;
	Rewind(): boolean;
	Play(): boolean;
	Pause(): boolean;
	OpenUrl(NewUrl: string): boolean;
	IsStopped(): boolean;
	IsPlaying(): boolean;
	IsPaused(): boolean;
	IsLooping(): boolean;
	GetUrl(): string;
	GetTime(): Timespan;
	GetRate(): number;
	GetDuration(): Timespan;
	Close(): void;
	CanPlay(): boolean;
	CanPause(): boolean;
}

declare class MediaSoundWave extends SoundWave { 
	AudioTrackIndex: number;
	MediaPlayer: MediaPlayer;
	CurrentMediaPlayer: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaSoundWave;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaSoundWave;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSoundWave;
	static C(Other: UObject): MediaSoundWave;
	SetMediaPlayer(InMediaPlayer: MediaPlayer): void;
}

declare class MediaTexture extends Texture { 
	AddressX: TextureAddress;
	AddressY: TextureAddress;
	ClearColor: LinearColor;
	VideoTrackIndex: number;
	MediaPlayer: MediaPlayer;
	CurrentMediaPlayer: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaTexture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaTexture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaTexture;
	static C(Other: UObject): MediaTexture;
	SetMediaPlayer(InMediaPlayer: MediaPlayer): void;
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
}

declare class LightPropagationVolumeBlendable extends UObject { 
	Settings: LightPropagationVolumeSettings;
	BlendWeight: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightPropagationVolumeBlendable;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightPropagationVolumeBlendable;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendable;
	static C(Other: UObject): LightPropagationVolumeBlendable;
}

declare class PropertyConfigFileDisplayRow extends UObject { 
	ConfigFileName: string;
	ExternalProperty: Property;
	bIsFileWritable: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PropertyConfigFileDisplayRow;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PropertyConfigFileDisplayRow;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyConfigFileDisplayRow;
	static C(Other: UObject): PropertyConfigFileDisplayRow;
}

declare class ConfigHierarchyPropertyView extends UObject { 
	EditProperty: any;
	ConfigFilePropertyObjects: PropertyConfigFileDisplayRow[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ConfigHierarchyPropertyView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ConfigHierarchyPropertyView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConfigHierarchyPropertyView;
	static C(Other: UObject): ConfigHierarchyPropertyView;
}

declare class K2Node_CreateDragDropOperation extends K2Node_ConstructObjectFromClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_CreateDragDropOperation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_CreateDragDropOperation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_CreateDragDropOperation;
	static C(Other: UObject): K2Node_CreateDragDropOperation;
}

declare class K2Node_CreateWidget extends K2Node_ConstructObjectFromClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_CreateWidget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_CreateWidget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_CreateWidget;
	static C(Other: UObject): K2Node_CreateWidget;
}

declare class EditorPropertyPathSegment { 
	Struct: Struct;
	MemberName: string;
	MemberGuid: Guid;
	IsProperty: boolean;
}

declare class EditorPropertyPath { 
	Segments: EditorPropertyPathSegment[];
}

declare class DelegateEditorBinding { 
	ObjectName: string;
	PropertyName: string;
	FunctionName: string;
	SourceProperty: string;
	SourcePath: EditorPropertyPath;
	MemberGuid: Guid;
	Kind: EBindingKind;
}

declare class WidgetAnimation_DEPRECATED { 
	MovieScene: MovieScene;
	AnimationBindings: WidgetAnimationBinding[];
}

declare class WidgetBlueprint extends Blueprint { 
	WidgetTree: WidgetTree;
	Bindings: DelegateEditorBinding[];
	AnimationData: WidgetAnimation_DEPRECATED[];
	Animations: WidgetAnimation[];
	PaletteCategory: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetBlueprint;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetBlueprint;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetBlueprint;
	static C(Other: UObject): WidgetBlueprint;
}

declare class WidgetBlueprintFactory extends Factory { 
	BlueprintType: EBlueprintType;
	ParentClass: UnrealEngineClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetBlueprintFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetBlueprintFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetBlueprintFactory;
	static C(Other: UObject): WidgetBlueprintFactory;
}

declare class WidgetDesignerSettings extends UObject { 
	GridSnapEnabled: boolean;
	GridSnapSize: number;
	bLockToPanelOnDragByDefault: boolean;
	bShowOutlines: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetDesignerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetDesignerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetDesignerSettings;
	static C(Other: UObject): WidgetDesignerSettings;
}

declare class WidgetGraphSchema extends EdGraphSchema_K2 { 
	NAME_NeverAsPin: string;
	NAME_PinHiddenByDefault: string;
	NAME_PinShownByDefault: string;
	NAME_AlwaysAsPin: string;
	NAME_OnEvaluate: string;
	DefaultEvaluationHandlerName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetGraphSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetGraphSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetGraphSchema;
	static C(Other: UObject): WidgetGraphSchema;
}

declare class WidgetSlotPair extends UObject { 
	WidgetName: string;
	SlotPropertyNames: string[];
	SlotPropertyValues: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetSlotPair;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetSlotPair;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetSlotPair;
	static C(Other: UObject): WidgetSlotPair;
}

declare class FuncTestRenderingComponent extends PrimitiveComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FuncTestRenderingComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FuncTestRenderingComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FuncTestRenderingComponent;
	static C(Other: UObject): FuncTestRenderingComponent;
}

declare type EFunctionalTestResult = string;
declare class FunctionalTest extends Actor { 
	SpriteComponent: BillboardComponent;
	Result: EFunctionalTestResult;
	TimesUpResult: EFunctionalTestResult;
	TimeLimit: number;
	TimesUpMessage: string;
	ObservationPoint: Actor;
	OnTestStart: UnrealEngineMulticastDelegate<() => void>;
	OnTestFinished: UnrealEngineMulticastDelegate<() => void>;
	AutoDestroyActors: Actor[];
	RandomNumbersStream: RandomStream;
	Description: string;
	RenderComp: FuncTestRenderingComponent;
	bIsEnabled: boolean;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FunctionalTest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTest;
	static C(Other: UObject): FunctionalTest;
	SetTimeLimit(NewTimeLimit: number,ResultWhenTimeRunsOut: EFunctionalTestResult): void;
	RegisterAutoDestroyActor(ActorToAutoDestroy: Actor): void;
	OnWantsReRunCheck(): boolean;
	OnAdditionalTestFinishedMessageRequest(TestResult: EFunctionalTestResult): string;
	LogMessage(Message: string): void;
	FinishTest(TestResult: EFunctionalTestResult,Message: string): void;
	DebugGatherRelevantActors(): Actor[];
}

declare class GenericTeamId { 
	TeamID: number;
}

declare class AITestSpawnInfo { 
	PawnClass: UnrealEngineClass;
	ControllerClass: UnrealEngineClass;
	TeamID: GenericTeamId;
	BehaviorTree: BehaviorTree;
	SpawnLocation: Actor;
	NumberToSpawn: number;
	SpawnDelay: number;
}

declare class AITestSpawnSet { 
	SpawnInfoContainer: AITestSpawnInfo[];
	Name: string;
	bEnabled: boolean;
	FallbackSpawnLocation: Actor;
}

declare class PendingDelayedSpawn extends AITestSpawnInfo { 
}

declare class FunctionalAITest extends FunctionalTest { 
	SpawnSets: AITestSpawnSet[];
	SpawnLocationRandomizationRange: number;
	SpawnedPawns: Pawn[];
	PendingDelayedSpawns: PendingDelayedSpawn[];
	OnAISpawned: UnrealEngineMulticastDelegate<(Controller: AIController, Pawn: Pawn) => void>;
	OnAllAISPawned: UnrealEngineMulticastDelegate<() => void>;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FunctionalAITest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalAITest;
	static C(Other: UObject): FunctionalAITest;
	IsOneOfSpawnedPawns(Actor: Actor): boolean;
}

declare class FunctionalTestingManager extends BlueprintFunctionLibrary { 
	TestsLeft: FunctionalTest[];
	AllTests: FunctionalTest[];
	OnSetupTests: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FunctionalTestingManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FunctionalTestingManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestingManager;
	static C(Other: UObject): FunctionalTestingManager;
	static RunAllFunctionalTests(WorldContext: UObject,bNewLog: boolean,bRunLooped: boolean,bWaitForNavigationBuildFinish: boolean,FailedTestsReproString: string): boolean;
}

declare class AIGraph extends EdGraph { 
	GraphVersion: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraph;
	static C(Other: UObject): AIGraph;
}

declare class GraphNodeClassData { 
	AssetName: string;
	GeneratedClassPackage: string;
	ClassName: string;
	Category: string;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphNode;
	static C(Other: UObject): AIGraphNode;
}

declare class AIGraphSchema extends EdGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraphSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraphSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphSchema;
	static C(Other: UObject): AIGraphSchema;
}

declare class GDTCustomViewNames { 
	GameView1: string;
	GameView2: string;
	GameView3: string;
	GameView4: string;
	GameView5: string;
}

declare class GameplayDebuggerSettings extends UObject { 
	CustomViewNames: GDTCustomViewNames;
	OverHead: boolean;
	Basic: boolean;
	BehaviorTree: boolean;
	EQS: boolean;
	EnableEQSOnHUD: boolean;
	ActiveEQSIndex: number;
	Perception: boolean;
	GameView1: boolean;
	GameView2: boolean;
	GameView3: boolean;
	GameView4: boolean;
	GameView5: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayDebuggerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayDebuggerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayDebuggerSettings;
	static C(Other: UObject): GameplayDebuggerSettings;
}

declare class GameplayDebuggingComponent extends PrimitiveComponent { 
	DebugComponentClassName: string;
	ShowExtendedInformatiomCounter: number;
	ReplicateViewDataCounters: number[];
	ControllerName: string;
	PawnName: string;
	PawnClass: string;
	DebugIcon: string;
	MovementBaseInfo: string;
	MovementModeInfo: string;
	PathFollowingInfo: string;
	CurrentAITask: string;
	CurrentAIState: string;
	CurrentAIAssets: string;
	GameplayTasksState: string;
	NavDataInfo: string;
	AbilityInfo: string;
	MontageInfo: string;
	BrainComponentName: string;
	BrainComponentString: string;
	BlackboardRepData: number[];
	PathPoints: Vector[];
	PathCorridorData: number[];
	NavmeshRepData: number[];
	EQSRepData: number[];
	SensingComponentLocation: Vector;
	NextPathPointIndex: number;
	bIsUsingPathFollowing: boolean;
	bIsUsingCharacter: boolean;
	bIsUsingBehaviorTree: boolean;
	bIsUsingAbilities: boolean;
	TargetActor: Actor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayDebuggingComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayDebuggingComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayDebuggingComponent;
	static C(Other: UObject): GameplayDebuggingComponent;
	ServerReplicateData(InMessage: any,DataView: any): void;
	ServerDiscardNavmeshData(): void;
	ServerCollectNavmeshData(TargetLocation: Vector_NetQuantize10): void;
	OnRep_UpdateNavmesh(): void;
	OnRep_UpdateEQS(): void;
	OnRep_UpdateBlackboard(): void;
	OnRep_PathCorridorData(): void;
	OnCycleDetailsView(): void;
	ClientEnableTargetSelection(bEnable: boolean): void;
}

declare class GameplayDebuggingHUDComponent extends Actor { 
	MenuStartX: number;
	MenuStartY: number;
	DebugInfoStartX: number;
	DebugInfoStartY: number;
	Canvas: Canvas;
	PlayerOwner: PlayerController;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayDebuggingHUDComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayDebuggingHUDComponent;
	static C(Other: UObject): GameplayDebuggingHUDComponent;
}

declare class GameplayDebuggingControllerComponent extends ActorComponent { 
	OnDebugAIHUD: GameplayDebuggingHUDComponent;
	DebugAITargetActor: Actor;
	AIDebugViewInputComponent: InputComponent;
	DebugCameraInputComponent: InputComponent;
	ActivationKey: InputChord;
	CategoryZeroBind: InputChord;
	CategoryOneBind: InputChord;
	CategoryTwoBind: InputChord;
	CategoryThreeBind: InputChord;
	CategoryFourBind: InputChord;
	CategoryFiveBind: InputChord;
	CategorySixBind: InputChord;
	CategorySevenBind: InputChord;
	CategoryEightBind: InputChord;
	CategoryNineBind: InputChord;
	CycleDetailsViewBind: InputChord;
	DebugCameraBind: InputChord;
	OnScreenDebugMessagesBind: InputChord;
	GameHUDBind: InputChord;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayDebuggingControllerComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayDebuggingControllerComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayDebuggingControllerComponent;
	static C(Other: UObject): GameplayDebuggingControllerComponent;
}

declare class GaneplayDebuggerProxyHUD extends HUD { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GaneplayDebuggerProxyHUD;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GaneplayDebuggerProxyHUD;
	static C(Other: UObject): GaneplayDebuggerProxyHUD;
}

declare class GameplayDebuggingReplicator extends Actor { 
	DebugComponentClassName: string;
	DebugComponentHUDClassName: string;
	DebugComponentControllerClassName: string;
	MaxEQSQueries: number;
	DebugComponent: GameplayDebuggingComponent;
	LocalPlayerOwner: PlayerController;
	LastSelectedActorToDebug: Actor;
	bIsGlobalInWorld: boolean;
	bAutoActivate: boolean;
	OverHead: boolean;
	Basic: boolean;
	BehaviorTree: boolean;
	EQS: boolean;
	EnableEQSOnHUD: boolean;
	ActiveEQSIndex: number;
	Perception: boolean;
	GameView1: boolean;
	GameView2: boolean;
	GameView3: boolean;
	GameView4: boolean;
	GameView5: boolean;
	DefaultTexture_Red: Texture2D;
	DefaultTexture_Green: Texture2D;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayDebuggingReplicator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayDebuggingReplicator;
	static C(Other: UObject): GameplayDebuggingReplicator;
	ServerSetActorToDebug(InActor: Actor): void;
	ServerReplicateMessage(Actor: Actor,InMessage: any,DataView: any): void;
	OnRep_AutoActivate(): void;
	ClientReplicateMessage(Actor: Actor,InMessage: any,DataView: any): void;
	ClientEnableTargetSelection(bEnable: boolean,Context: PlayerController): void;
	ClientAutoActivate(): void;
}

declare class BehaviorTreeDecoratorGraph extends EdGraph { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraph;
	static C(Other: UObject): BehaviorTreeDecoratorGraph;
}

declare class BehaviorTreeDecoratorGraphNode extends EdGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode;
}

declare class BehaviorTreeEditorTypes extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeEditorTypes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeEditorTypes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeEditorTypes;
	static C(Other: UObject): BehaviorTreeEditorTypes;
}

declare class BehaviorTreeDecoratorGraphNode_Decorator extends BehaviorTreeDecoratorGraphNode { 
	NodeInstance: UObject;
	ClassData: GraphNodeClassData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Decorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Decorator;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode_Decorator;
}

declare type EDecoratorLogicMode = string;
declare class BehaviorTreeDecoratorGraphNode_Logic extends BehaviorTreeDecoratorGraphNode { 
	LogicMode: EDecoratorLogicMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Logic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Logic;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode_Logic;
}

declare class BehaviorTreeFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeFactory;
	static C(Other: UObject): BehaviorTreeFactory;
}

declare class BehaviorTreeGraph extends AIGraph { 
	ModCounter: number;
	bIsUsingModCounter: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraph;
	static C(Other: UObject): BehaviorTreeGraph;
}

declare class BehaviorTreeGraphNode extends AIGraphNode { 
	Decorators: BehaviorTreeGraphNode[];
	Services: BehaviorTreeGraphNode[];
	bInjectedNode: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode;
	static C(Other: UObject): BehaviorTreeGraphNode;
}

declare class BehaviorTreeGraphNode_Composite extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Composite;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Composite;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Composite;
	static C(Other: UObject): BehaviorTreeGraphNode_Composite;
}

declare class BehaviorTreeGraphNode_SimpleParallel extends BehaviorTreeGraphNode_Composite { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_SimpleParallel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SimpleParallel;
	static C(Other: UObject): BehaviorTreeGraphNode_SimpleParallel;
}

declare class BehaviorTreeGraphNode_CompositeDecorator extends BehaviorTreeGraphNode { 
	BoundGraph: EdGraph;
	CompositeName: string;
	bShowOperations: boolean;
	bCanAbortFlow: boolean;
	ParentNodeInstance: BTCompositeNode;
	CachedDescription: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_CompositeDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_CompositeDecorator;
	static C(Other: UObject): BehaviorTreeGraphNode_CompositeDecorator;
}

declare class BehaviorTreeGraphNode_Decorator extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Decorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Decorator;
	static C(Other: UObject): BehaviorTreeGraphNode_Decorator;
}

declare class BehaviorTreeGraphNode_Root extends BehaviorTreeGraphNode { 
	BlackboardAsset: BlackboardData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Root;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Root;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Root;
	static C(Other: UObject): BehaviorTreeGraphNode_Root;
}

declare class BehaviorTreeGraphNode_Service extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Service;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Service;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Service;
	static C(Other: UObject): BehaviorTreeGraphNode_Service;
}

declare class BehaviorTreeGraphNode_Task extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Task;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Task;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Task;
	static C(Other: UObject): BehaviorTreeGraphNode_Task;
}

declare class BehaviorTreeGraphNode_SubtreeTask extends BehaviorTreeGraphNode_Task { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_SubtreeTask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SubtreeTask;
	static C(Other: UObject): BehaviorTreeGraphNode_SubtreeTask;
}

declare class BlackboardDataFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BlackboardDataFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BlackboardDataFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BlackboardDataFactory;
	static C(Other: UObject): BlackboardDataFactory;
}

declare class EdGraphSchema_BehaviorTree extends AIGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphSchema_BehaviorTree;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphSchema_BehaviorTree;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTree;
	static C(Other: UObject): EdGraphSchema_BehaviorTree;
}

declare class EdGraphSchema_BehaviorTreeDecorator extends EdGraphSchema { 
	PC_Boolean: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphSchema_BehaviorTreeDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTreeDecorator;
	static C(Other: UObject): EdGraphSchema_BehaviorTreeDecorator;
}

declare class K2Node_LatentGameplayTaskCall extends K2Node_BaseAsyncTask { 
	SpawnParmPins: EdGraphPin[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LatentGameplayTaskCall;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LatentGameplayTaskCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentGameplayTaskCall;
	static C(Other: UObject): K2Node_LatentGameplayTaskCall;
}

declare class K2Node_InAppPurchase extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchase;
	static C(Other: UObject): K2Node_InAppPurchase;
}

declare class K2Node_InAppPurchaseQuery extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchaseQuery;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchaseQuery;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseQuery;
	static C(Other: UObject): K2Node_InAppPurchaseQuery;
}

declare class K2Node_InAppPurchaseRestore extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchaseRestore;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchaseRestore;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseRestore;
	static C(Other: UObject): K2Node_InAppPurchaseRestore;
}

declare class K2Node_LatentOnlineCall extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LatentOnlineCall;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LatentOnlineCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentOnlineCall;
	static C(Other: UObject): K2Node_LatentOnlineCall;
}

declare class K2Node_LeaderboardFlush extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LeaderboardFlush;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LeaderboardFlush;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardFlush;
	static C(Other: UObject): K2Node_LeaderboardFlush;
}

declare class K2Node_LeaderboardQuery extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LeaderboardQuery;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LeaderboardQuery;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardQuery;
	static C(Other: UObject): K2Node_LeaderboardQuery;
}

declare class MaterialExpressionSpriteTextureSampler extends MaterialExpressionTextureSampleParameter2D { 
	bSampleAdditionalTextures: boolean;
	AdditionalSlotIndex: number;
	SlotDisplayName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSpriteTextureSampler;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSpriteTextureSampler;
	static C(Other: UObject): MaterialExpressionSpriteTextureSampler;
}

declare class PaperBatchComponent extends PrimitiveComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperBatchComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperBatchComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperBatchComponent;
	static C(Other: UObject): PaperBatchComponent;
}

declare class PaperSpriteSocket { 
	LocalTransform: Transform;
	SocketName: string;
}

declare type ESpriteCollisionMode = string;
declare type ESpritePivotMode = string;
declare type ESpriteShapeType = string;
declare class SpriteGeometryShape { 
	ShapeType: ESpriteShapeType;
	Vertices: Vector2D[];
	BoxSize: Vector2D;
	BoxPosition: Vector2D;
	Rotation: number;
	bNegativeWinding: boolean;
}

declare type ESpritePolygonMode = string;
declare class SpriteGeometryCollection { 
	Shapes: SpriteGeometryShape[];
	GeometryType: ESpritePolygonMode;
	PixelsPerSubdivisionX: number;
	PixelsPerSubdivisionY: number;
	bAvoidVertexMerging: boolean;
	AlphaThreshold: number;
	DetailAmount: number;
	SimplifyEpsilon: number;
}

declare type EPaperSpriteAtlasPadding = string;
declare class PaperSpriteAtlasSlot { 
	SpriteRef: any;
	AtlasIndex: number;
	X: number;
	Y: number;
	Width: number;
	Height: number;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteAtlas;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteAtlas;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlas;
	static C(Other: UObject): PaperSpriteAtlas;
}

declare class PaperSprite extends UObject { 
	SourceUV: Vector2D;
	SourceDimension: Vector2D;
	BakedSourceUV: Vector2D;
	OriginInSourceImageBeforeTrimming: Vector2D;
	SourceImageDimensionBeforeTrimming: Vector2D;
	bTrimmedInSourceImage: boolean;
	bRotatedInSourceImage: boolean;
	SourceTextureDimension: Vector2D;
	SourceTexture: Texture2D;
	AdditionalSourceTextures: Texture[];
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSprite;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSprite;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSprite;
	static C(Other: UObject): PaperSprite;
}

declare class PaperFlipbookKeyFrame { 
	Sprite: PaperSprite;
	FrameRun: number;
}

declare type EFlipbookCollisionMode = string;
declare class PaperFlipbook extends UObject { 
	FramesPerSecond: number;
	KeyFrames: PaperFlipbookKeyFrame[];
	DefaultMaterial: MaterialInterface;
	CollisionSource: EFlipbookCollisionMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbook;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbook;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbook;
	static C(Other: UObject): PaperFlipbook;
	IsValidKeyFrameIndex(Index: number): boolean;
	GetTotalDuration(): number;
	GetSpriteAtTime(Time: number,bClampToEnds: boolean): PaperSprite;
	GetSpriteAtFrame(FrameIndex: number): PaperSprite;
	GetNumKeyFrames(): number;
	GetNumFrames(): number;
	GetKeyFrameIndexAtTime(Time: number,bClampToEnds: boolean): number;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookComponent;
	static C(Other: UObject): PaperFlipbookComponent;
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
	GetSpriteMaterial(): MaterialInterface;
	GetPlayRate(): number;
	GetPlaybackPositionInFrames(): number;
	GetPlaybackPosition(): number;
	GetFlipbookLengthInFrames(): number;
	GetFlipbookLength(): number;
	GetFlipbookFramerate(): number;
	GetFlipbook(): PaperFlipbook;
}

declare class PaperCharacter extends Character { 
	Sprite: PaperFlipbookComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperCharacter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperCharacter;
	static C(Other: UObject): PaperCharacter;
}

declare class PaperFlipbookActor extends Actor { 
	RenderComponent: PaperFlipbookComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActor;
	static C(Other: UObject): PaperFlipbookActor;
}

declare class SpriteInstanceData { 
	Transform: Matrix;
	SourceSprite: PaperSprite;
	VertexColor: Color;
	MaterialIndex: number;
}

declare class PaperGroupedSpriteComponent extends MeshComponent { 
	InstanceMaterials: MaterialInterface[];
	PerInstanceSpriteData: SpriteInstanceData[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperGroupedSpriteComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperGroupedSpriteComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteComponent;
	static C(Other: UObject): PaperGroupedSpriteComponent;
	UpdateInstanceTransform(InstanceIndex: number,NewInstanceTransform: Transform,bWorldSpace: boolean,bMarkRenderStateDirty: boolean): boolean;
	UpdateInstanceColor(InstanceIndex: number,NewInstanceColor: LinearColor,bMarkRenderStateDirty: boolean): boolean;
	SortInstancesAlongAxis(WorldSpaceSortAxis: Vector): void;
	RemoveInstance(InstanceIndex: number): boolean;
	GetInstanceTransform(InstanceIndex: number,OutInstanceTransform?: Transform,bWorldSpace?: boolean): {OutInstanceTransform: Transform, $: boolean};
	GetInstanceCount(): number;
	ClearInstances(): void;
	AddInstance(Transform: Transform,Sprite: PaperSprite,bWorldSpace: boolean,Color: LinearColor): number;
}

declare class PaperGroupedSpriteActor extends Actor { 
	RenderComponent: PaperGroupedSpriteComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperGroupedSpriteActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteActor;
	static C(Other: UObject): PaperGroupedSpriteActor;
}

declare class PaperRuntimeSettings extends UObject { 
	bEnableSpriteAtlasGroups: boolean;
	bEnableTerrainSplineEditing: boolean;
	bResizeSpriteDataToMatchTextures: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperRuntimeSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperRuntimeSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperRuntimeSettings;
	static C(Other: UObject): PaperRuntimeSettings;
}

declare class PaperSpriteComponent extends MeshComponent { 
	SourceSprite: PaperSprite;
	MaterialOverride: MaterialInterface;
	SpriteColor: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteComponent;
	static C(Other: UObject): PaperSpriteComponent;
	SetSpriteColor(NewColor: LinearColor): void;
	SetSprite(NewSprite: PaperSprite): boolean;
	GetSprite(): PaperSprite;
}

declare class PaperSpriteActor extends Actor { 
	RenderComponent: PaperSpriteComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActor;
	static C(Other: UObject): PaperSpriteActor;
}

declare class PaperTerrainSplineComponent extends SplineComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainSplineComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainSplineComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainSplineComponent;
	static C(Other: UObject): PaperTerrainSplineComponent;
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
}

declare class PaperTerrainMaterial extends DataAsset { 
	Rules: PaperTerrainMaterialRule[];
	InteriorFill: PaperSprite;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainMaterial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainMaterial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainMaterial;
	static C(Other: UObject): PaperTerrainMaterial;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainComponent;
	static C(Other: UObject): PaperTerrainComponent;
	SetTerrainColor(NewColor: LinearColor): void;
}

declare class PaperTerrainActor extends Actor { 
	DummyRoot: SceneComponent;
	SplineComponent: PaperTerrainSplineComponent;
	RenderComponent: PaperTerrainComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainActor;
	static C(Other: UObject): PaperTerrainActor;
}

declare class IntMargin { 
	Left: number;
	Top: number;
	Right: number;
	Bottom: number;
}

declare class PaperTileMetadata { 
	UserDataName: string;
	CollisionData: SpriteGeometryCollection;
	TerrainMembership: number;
}

declare class PaperTileSetTerrain { 
	TerrainName: string;
	CenterTileIndex: number;
}

declare class PaperTileSet extends UObject { 
	TileSize: IntPoint;
	TileSheet: Texture2D;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSet;
	static C(Other: UObject): PaperTileSet;
}

declare class PaperTileInfo { 
	TileSet: PaperTileSet;
	PackedTileIndex: number;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileLayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileLayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileLayer;
	static C(Other: UObject): PaperTileLayer;
}

declare type ETileMapProjectionMode = string;
declare class PaperTileMap extends UObject { 
	MapWidth: number;
	MapHeight: number;
	TileWidth: number;
	TileHeight: number;
	PixelsPerUnrealUnit: number;
	SeparationPerTileX: number;
	SeparationPerTileY: number;
	SeparationPerLayer: number;
	SelectedTileSet: any;
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
	LayerNameIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMap;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMap;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMap;
	static C(Other: UObject): PaperTileMap;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapComponent;
	static C(Other: UObject): PaperTileMapComponent;
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
}

declare class PaperTileMapActor extends Actor { 
	RenderComponent: PaperTileMapComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapActor;
	static C(Other: UObject): PaperTileMapActor;
}

declare class TileMapBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapBlueprintLibrary;
	static C(Other: UObject): TileMapBlueprintLibrary;
	static MakeTile(TileIndex: number,TileSet: PaperTileSet,bFlipH: boolean,bFlipV: boolean,bFlipD: boolean): PaperTileInfo;
	static GetTileUserData(Tile: PaperTileInfo): string;
	static GetTileTransform(Tile: PaperTileInfo): Transform;
	static BreakTile(Tile: PaperTileInfo,TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): UdpMessagingSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): UdpMessagingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UdpMessagingSettings;
	static C(Other: UObject): UdpMessagingSettings;
}

declare class DirectoryWatcher extends UObject { 
	Added: string[];
	Modified: string[];
	Removed: string[];
	OnChanged: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DirectoryWatcher;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DirectoryWatcher;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DirectoryWatcher;
	static C(Other: UObject): DirectoryWatcher;
	Watch(Directory: string): void;
	Unwatch(): void;
	Contains(File: string): boolean;
}

declare class JavascriptContext extends UObject { 
	Paths: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptContext;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptContext;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptContext;
	static C(Other: UObject): JavascriptContext;
	WriteDTS(Target: string): boolean;
	WriteAliases(Target: string): boolean;
	SetContextId(Name: string): void;
	SetAsDebugContext(): void;
	RunScript(Script: string,bOutput: boolean): string;
	RunFile(Filename: string): void;
	ReadScriptFile(Filename: string): string;
	IsDebugContext(): boolean;
	GetScriptFileFullPath(Filename: string): string;
	Expose(Name: string,UObject: UObject): void;
}

declare class JavascriptAsset { 
	Name: string;
	Asset: StringAssetReference;
}

declare class JavascriptClassAsset { 
	Name: string;
	Class: UnrealEngineClass;
}

declare class JavascriptComponent extends ActorComponent { 
	ScriptSourceFile: string;
	bActiveWithinEditor: boolean;
	JavascriptContext: JavascriptContext;
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	OnBeginPlay: UnrealEngineDelegate<() => void>;
	OnEndPlay: UnrealEngineDelegate<() => void>;
	OnInvoke: UnrealEngineDelegate<(Name: string) => void>;
	Assets: JavascriptAsset[];
	ClassAssets: JavascriptClassAsset[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComponent;
	static C(Other: UObject): JavascriptComponent;
	ResolveClass(Name: string): UnrealEngineClass;
	ResolveAsset(Name: string,bTryLoad: boolean): UObject;
	Invoke(Name: string): void;
	ForceGC(): void;
	Expose(ExposedAs: string,UObject: UObject): void;
}

declare class JavascriptDelegate extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptDelegate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptDelegate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDelegate;
	static C(Other: UObject): JavascriptDelegate;
	Fire(): void;
}

declare class JavascriptGeneratedClass extends BlueprintGeneratedClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedClass;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedClass;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass;
	static C(Other: UObject): JavascriptGeneratedClass;
}

declare class JavascriptGeneratedClass_Native extends BlueprintGeneratedClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedClass_Native;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedClass_Native;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass_Native;
	static C(Other: UObject): JavascriptGeneratedClass_Native;
}

declare class JavascriptGeneratedFunction extends UFunction { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedFunction;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedFunction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedFunction;
	static C(Other: UObject): JavascriptGeneratedFunction;
}

declare class JavascriptIsolate extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptIsolate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptIsolate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptIsolate;
	static C(Other: UObject): JavascriptIsolate;
	CreateContext(): JavascriptContext;
}

declare class JavascriptLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLibrary;
	static C(Other: UObject): JavascriptLibrary;
	static SetRootComponent(Actor: Actor,Component: SceneComponent): void;
	static SetMobility(SceneComponent: SceneComponent,Type: EComponentMobility): void;
	static SetMobile(SceneComponent: SceneComponent): void;
	static SetClientTravel(Engine: Engine,InWorld: World,NextURL: string,InTravelType: ETravelType): void;
	static IsPlayInPreview(World: World): boolean;
	static IsPlayInEditor(World: World): boolean;
	static IsGameWorld(World: World): boolean;
	static HandleSeamlessTravelPlayer(GameMode: GameMode,C?: Controller): {C: Controller};
	static GetOutermost(UObject: UObject): UObject;
	static GetOuter(UObject: UObject): UObject;
	static GetName(UObject: UObject): string;
	static GetDynamicBinding(Outer: UnrealEngineClass,BindingObjectClass: UnrealEngineClass): DynamicBlueprintBinding;
	static GetBlueprintGeneratedClassFromPath(Path: string): UnrealEngineClass;
	static GetBlueprintGeneratedClass(Blueprint: Blueprint): UnrealEngineClass;
	static CreatePackage(Outer: UObject,PackageName: string): Package;
	static AddDynamicBinding(Outer: UnrealEngineClass,BindingObject: DynamicBlueprintBinding): void;
	static Actor_GetWorld(Actor: Actor): World;
}

declare class JavascriptObject extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptObject;
	static C(Other: UObject): JavascriptObject;
}

declare class JavascriptProcess extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptProcess;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptProcess;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProcess;
	static C(Other: UObject): JavascriptProcess;
	WriteToPipe(Message: string,OutWritten?: string): {OutWritten: string, $: boolean};
	Wait(): void;
	Terminate(KillTree: boolean): void;
	ReadFromPipe(): string;
	ReadArrayFromPipe(Array?: number[]): {Array: number[], $: boolean};
	IsRunning(): boolean;
	GetReturnCode(ReturnCode?: number): {ReturnCode: number, $: boolean};
	static Create(URL: string,Parms: string,bLaunchDetached: boolean,bLaunchHidden: boolean,bLaunchReallyHidden: boolean,PriorityModifier: number,OptionalWorkingDirectory: string,bUsePipe: boolean): JavascriptProcess;
	Close(): void;
}

declare class JavascriptListView extends ListView { 
	JavascriptContext: JavascriptContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptListView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptListView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptListView;
	static C(Other: UObject): JavascriptListView;
	RequestListRefresh(): void;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	OnClick(UObject: UObject): void;
}

declare class JavascriptTileView extends TileView { 
	JavascriptContext: JavascriptContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTileView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptTileView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTileView;
	static C(Other: UObject): JavascriptTileView;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	OnClick(UObject: UObject): void;
}

declare class JavascriptUMGBlueprintLibrary extends UserWidget { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUMGBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUMGBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGBlueprintLibrary;
	static C(Other: UObject): JavascriptUMGBlueprintLibrary;
	static SlateColor_UseSubduedForeground(): SlateColor;
	static SlateColor_UseForeground(): SlateColor;
}

declare class JavascriptUMGLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUMGLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUMGLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGLibrary;
	static C(Other: UObject): JavascriptUMGLibrary;
}

declare class JavascriptWidget extends UserWidget { 
	JavascriptContext: JavascriptContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWidget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptWidget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWidget;
	static C(Other: UObject): JavascriptWidget;
	SetRootWidget(Widget: Widget): void;
	static HasValidCachedWidget(Widget: Widget): boolean;
	static CallSynchronizeProperties(WidgetOrSlot: Visual): void;
}

declare type EJavascriptHttpRequestStatus = string;
declare class JavascriptHttpRequest extends UObject { 
	OnComplete: UnrealEngineDelegate<(successful: boolean) => void>;
	OnProgress: UnrealEngineDelegate<(sent: number, recv: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptHttpRequest;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptHttpRequest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptHttpRequest;
	static C(Other: UObject): JavascriptHttpRequest;
	SetVerb(Verb: string): void;
	SetURL(URL: string): void;
	SetHeader(HeaderName: string,HeaderValue: string): void;
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
}

declare class FlipbookEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FlipbookEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FlipbookEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlipbookEditorSettings;
	static C(Other: UObject): FlipbookEditorSettings;
}

declare type ESpriteExtractMode = string;
declare class PaperExtractSpritesSettings extends UObject { 
	SpriteExtractMode: ESpriteExtractMode;
	OutlineColor: LinearColor;
	ViewportTextureTint: LinearColor;
	BackgroundColor: LinearColor;
	NamingTemplate: string;
	NamingStartIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperExtractSpritesSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperExtractSpritesSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpritesSettings;
	static C(Other: UObject): PaperExtractSpritesSettings;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperExtractSpriteGridSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperExtractSpriteGridSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpriteGridSettings;
	static C(Other: UObject): PaperExtractSpriteGridSettings;
}

declare class PaperFlipbookActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActorFactory;
	static C(Other: UObject): PaperFlipbookActorFactory;
}

declare class PaperFlipbookFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookFactory;
	static C(Other: UObject): PaperFlipbookFactory;
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
	UnlitDefaultMaskedMaterialName: StringAssetReference;
	UnlitDefaultTranslucentMaterialName: StringAssetReference;
	UnlitDefaultOpaqueMaterialName: StringAssetReference;
	LitDefaultMaskedMaterialName: StringAssetReference;
	LitDefaultTranslucentMaterialName: StringAssetReference;
	LitDefaultOpaqueMaterialName: StringAssetReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperImporterSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperImporterSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperImporterSettings;
	static C(Other: UObject): PaperImporterSettings;
}

declare class PaperSpriteActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActorFactory;
	static C(Other: UObject): PaperSpriteActorFactory;
}

declare class PaperSpriteAtlasFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteAtlasFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteAtlasFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlasFactory;
	static C(Other: UObject): PaperSpriteAtlasFactory;
}

declare class PaperSpriteFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteFactory;
	static C(Other: UObject): PaperSpriteFactory;
}

declare class PaperSpriteThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteThumbnailRenderer;
	static C(Other: UObject): PaperSpriteThumbnailRenderer;
}

declare class PaperFlipbookThumbnailRenderer extends PaperSpriteThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookThumbnailRenderer;
	static C(Other: UObject): PaperFlipbookThumbnailRenderer;
}

declare class PaperTileMapFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapFactory;
	static C(Other: UObject): PaperTileMapFactory;
}

declare class PaperTileMapPromotionFactory extends Factory { 
	AssetToRename: PaperTileMap;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapPromotionFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapPromotionFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapPromotionFactory;
	static C(Other: UObject): PaperTileMapPromotionFactory;
}

declare class PaperTileSetFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSetFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSetFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetFactory;
	static C(Other: UObject): PaperTileSetFactory;
}

declare class PaperTileSetThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSetThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSetThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetThumbnailRenderer;
	static C(Other: UObject): PaperTileSetThumbnailRenderer;
}

declare class SpriteEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpriteEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SpriteEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpriteEditorSettings;
	static C(Other: UObject): SpriteEditorSettings;
}

declare class TerrainSplineActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TerrainSplineActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TerrainSplineActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TerrainSplineActorFactory;
	static C(Other: UObject): TerrainSplineActorFactory;
}

declare class TileMapActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapActorFactory;
	static C(Other: UObject): TileMapActorFactory;
}

declare class TileSetImportMapping { 
	SourceName: string;
	ImportedTileSet: any;
	ImportedTexture: any;
}

declare class TileMapAssetImportData extends AssetImportData { 
	TileSetMap: TileSetImportMapping[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapAssetImportData;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapAssetImportData;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapAssetImportData;
	static C(Other: UObject): TileMapAssetImportData;
}

declare class TileMapEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapEditorSettings;
	static C(Other: UObject): TileMapEditorSettings;
}

declare class TileSetEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileSetEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileSetEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSetEditorSettings;
	static C(Other: UObject): TileSetEditorSettings;
}

declare class TileSheetPaddingFactory extends Factory { 
	SourceTileSet: PaperTileSet;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileSheetPaddingFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileSheetPaddingFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSheetPaddingFactory;
	static C(Other: UObject): TileSheetPaddingFactory;
}

declare class ContentBrowserFrontEndFilterExtension extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ContentBrowserFrontEndFilterExtension;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserFrontEndFilterExtension;
	static C(Other: UObject): ContentBrowserFrontEndFilterExtension;
}

declare type ELocalizationTargetConflictStatus = string;
declare class GatherTextSearchDirectory { 
	Path: string;
}

declare class GatherTextExcludePath { 
	Pattern: string;
}

declare class GatherTextFileExtension { 
	Pattern: string;
}

declare class GatherTextFromTextFilesConfiguration { 
	IsEnabled: boolean;
	SearchDirectories: GatherTextSearchDirectory[];
	ExcludePathWildcards: GatherTextExcludePath[];
	FileExtensions: GatherTextFileExtension[];
}

declare class GatherTextIncludePath { 
	Pattern: string;
}

declare class GatherTextFromPackagesConfiguration { 
	IsEnabled: boolean;
	IncludePathWildcards: GatherTextIncludePath[];
	ExcludePathWildcards: GatherTextExcludePath[];
	FileExtensions: GatherTextFileExtension[];
	ShouldGatherFromEditorOnlyData: boolean;
}

declare class MetaDataKeyName { 
	Name: string;
}

declare class MetaDataTextKeyPattern { 
	Pattern: string;
}

declare class MetaDataKeyGatherSpecification { 
	MetaDataKey: MetaDataKeyName;
	TextNamespace: string;
	TextKeyPattern: MetaDataTextKeyPattern;
}

declare class GatherTextFromMetaDataConfiguration { 
	IsEnabled: boolean;
	IncludePathWildcards: GatherTextIncludePath[];
	ExcludePathWildcards: GatherTextExcludePath[];
	KeySpecifications: MetaDataKeyGatherSpecification[];
	ShouldGatherFromEditorOnlyData: boolean;
}

declare class CultureStatistics { 
	CultureName: string;
	WordCount: any;
}

declare class LocalizationTargetSettings { 
	Name: string;
	Guid: Guid;
	ConflictStatus: ELocalizationTargetConflictStatus;
	TargetDependencies: Guid[];
	AdditionalManifestDependencies: FilePath[];
	RequiredModuleNames: string[];
	GatherFromTextFiles: GatherTextFromTextFilesConfiguration;
	GatherFromPackages: GatherTextFromPackagesConfiguration;
	GatherFromMetaData: GatherTextFromMetaDataConfiguration;
	NativeCultureIndex: number;
	SupportedCulturesStatistics: CultureStatistics[];
}

declare class LocalizationTarget extends UObject { 
	Settings: LocalizationTargetSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LocalizationTarget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LocalizationTarget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationTarget;
	static C(Other: UObject): LocalizationTarget;
}

declare class LocalizationTargetSet extends UObject { 
	TargetObjects: LocalizationTarget[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LocalizationTargetSet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LocalizationTargetSet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationTargetSet;
	static C(Other: UObject): LocalizationTargetSet;
}

declare class LocalizationSettings extends UObject { 
	EngineTargetSet: LocalizationTargetSet;
	EngineTargetsSettings: LocalizationTargetSettings[];
	GameTargetSet: LocalizationTargetSet;
	GameTargetsSettings: LocalizationTargetSettings[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LocalizationSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LocalizationSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationSettings;
	static C(Other: UObject): LocalizationSettings;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InternationalizationExportSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InternationalizationExportSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InternationalizationExportSettings;
	static C(Other: UObject): InternationalizationExportSettings;
}

declare class TranslationPickerSettings extends UObject { 
	bSubmitTranslationPickerChangesToLocalizationService: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TranslationPickerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TranslationPickerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationPickerSettings;
	static C(Other: UObject): TranslationPickerSettings;
}

declare class TranslationChange { 
	Version: string;
	DateAndTime: DateTime;
	Source: string;
	Translation: string;
}

declare class TranslationContextInfo { 
	Key: string;
	Context: string;
	Changes: TranslationChange[];
}

declare class TranslationUnit extends UObject { 
	Namespace: string;
	Source: string;
	Translation: string;
	Contexts: TranslationContextInfo[];
	HasBeenReviewed: boolean;
	TranslationBeforeImport: string;
	LocresPath: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TranslationUnit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TranslationUnit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationUnit;
	static C(Other: UObject): TranslationUnit;
}

declare class WidgetReflectorNodeBase extends UObject { 
	Geometry: Geometry;
	ChildNodes: WidgetReflectorNodeBase[];
	Tint: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetReflectorNodeBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetReflectorNodeBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetReflectorNodeBase;
	static C(Other: UObject): WidgetReflectorNodeBase;
}

declare class LiveWidgetReflectorNode extends WidgetReflectorNodeBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LiveWidgetReflectorNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LiveWidgetReflectorNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveWidgetReflectorNode;
	static C(Other: UObject): LiveWidgetReflectorNode;
}

declare class SnapshotWidgetReflectorNode extends WidgetReflectorNodeBase { 
	CachedWidgetType: string;
	CachedWidgetVisibilityText: string;
	CachedWidgetReadableLocation: string;
	CachedWidgetFile: string;
	CachedWidgetLineNumber: number;
	CachedWidgetAssetName: string;
	CachedWidgetDesiredSize: Vector2D;
	CachedWidgetForegroundColor: SlateColor;
	CachedWidgetAddress: string;
	CachedWidgetEnabled: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SnapshotWidgetReflectorNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SnapshotWidgetReflectorNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapshotWidgetReflectorNode;
	static C(Other: UObject): SnapshotWidgetReflectorNode;
}

declare class PaperSpriteSheet extends UObject { 
	SpriteNames: string[];
	Sprites: any[];
	TextureName: string;
	Texture: Texture2D;
	NormalMapTextureName: string;
	NormalMapTexture: Texture2D;
	AssetImportData: AssetImportData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheet;
	static C(Other: UObject): PaperSpriteSheet;
}

declare class PaperSpriteSheetImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheetImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheetImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetImportFactory;
	static C(Other: UObject): PaperSpriteSheetImportFactory;
}

declare class PaperSpriteSheetReimportFactory extends PaperSpriteSheetImportFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheetReimportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheetReimportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetReimportFactory;
	static C(Other: UObject): PaperSpriteSheetReimportFactory;
}

declare class PaperTiledImporterFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTiledImporterFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTiledImporterFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTiledImporterFactory;
	static C(Other: UObject): PaperTiledImporterFactory;
}

declare class LightPropagationVolumeBlendableFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightPropagationVolumeBlendableFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightPropagationVolumeBlendableFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendableFactory;
	static C(Other: UObject): LightPropagationVolumeBlendableFactory;
}

declare class MyPluginStruct { 
	TestString: string;
}

declare class MyPluginObject extends UObject { 
	MyStruct: MyPluginStruct;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MyPluginObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MyPluginObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MyPluginObject;
	static C(Other: UObject): MyPluginObject;
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
	SupportURL: string;
	bCanContainContent: boolean;
	bIsBetaVersion: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PluginMetadataObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PluginMetadataObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	static C(Other: UObject): PluginMetadataObject;
}

declare class SpeedTreeImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject): ReimportSpeedTreeFactory;
}

declare class WebSocketConnection extends NetConnection { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WebSocketConnection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WebSocketConnection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketConnection;
	static C(Other: UObject): WebSocketConnection;
}

declare class WebSocketNetDriver extends NetDriver { 
	WebSocketPort: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WebSocketNetDriver;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WebSocketNetDriver;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketNetDriver;
	static C(Other: UObject): WebSocketNetDriver;
}

declare class MediaPlayerFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlayerFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaPlayerFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerFactory;
	static C(Other: UObject): MediaPlayerFactory;
}

declare class MediaPlayerFactoryNew extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlayerFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaPlayerFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerFactoryNew;
	static C(Other: UObject): MediaPlayerFactoryNew;
}

declare class MediaSoundWaveFactoryNew extends Factory { 
	InitialMediaPlayer: MediaPlayer;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaSoundWaveFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaSoundWaveFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSoundWaveFactoryNew;
	static C(Other: UObject): MediaSoundWaveFactoryNew;
}

declare class MediaTextureFactoryNew extends Factory { 
	InitialMediaPlayer: MediaPlayer;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaTextureFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaTextureFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaTextureFactoryNew;
	static C(Other: UObject): MediaTextureFactoryNew;
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
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ArchVisCharacter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharacter;
	static C(Other: UObject): ArchVisCharacter;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ArchVisCharMovementComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ArchVisCharMovementComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharMovementComponent;
	static C(Other: UObject): ArchVisCharMovementComponent;
}

declare class ComponentReference { 
	OtherActor: Actor;
	ComponentProperty: string;
}

declare class CableComponent extends MeshComponent { 
	AttachEndTo: ComponentReference;
	EndLocation: Vector;
	CableLength: number;
	NumSegments: number;
	SubstepTime: number;
	SolverIterations: number;
	CableWidth: number;
	NumSides: number;
	TileMaterial: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CableComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CableComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableComponent;
	static C(Other: UObject): CableComponent;
	SetAttachEndTo(Actor: Actor,ComponentProperty: string): void;
	GetAttachedComponent(): SceneComponent;
	GetAttachedActor(): Actor;
}

declare class CableActor extends Actor { 
	CableComponent: CableComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CableActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableActor;
	static C(Other: UObject): CableActor;
}

declare class CustomMeshTriangle { 
	Vertex0: Vector;
	Vertex1: Vector;
	Vertex2: Vector;
}

declare class CustomMeshComponent extends MeshComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CustomMeshComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CustomMeshComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomMeshComponent;
	static C(Other: UObject): CustomMeshComponent;
	SetCustomMeshTriangles(Triangles: CustomMeshTriangle[]): boolean;
	ClearCustomMeshTriangles(): void;
	AddCustomMeshTriangles(Triangles: CustomMeshTriangle[]): void;
}

declare class LeapMotionTypes extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeapMotionTypes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionTypes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionTypes;
	static C(Other: UObject): LeapMotionTypes;
}

declare type ELeapBone = string;
declare type ELeapSide = string;
declare class LeapMotionHandActor extends Actor { 
	Scale: number;
	bShowCollider: boolean;
	bShowMesh: boolean;
	bShowArm: boolean;
	HandId: number;
	HandSide: ELeapSide;
	PinchStrength: number;
	GrabStrength: number;
	OnHandAdded: UnrealEngineMulticastDelegate<(HandId: number) => void>;
	OnHandRemoved: UnrealEngineMulticastDelegate<(HandId: number) => void>;
	OnHandUpdated: UnrealEngineMulticastDelegate<(HandId: number, DeltaSeconds: number) => void>;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionHandActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionHandActor;
	static C(Other: UObject): LeapMotionHandActor;
	GetParentingControllerComponent(): LeapMotionControllerComponent;
	GetBoneActor(LeapBone: ELeapBone): LeapMotionBoneActor;
}

declare class LeapMotionControllerComponent extends SceneComponent { 
	Scale: number;
	ScaleForHmdMode: number;
	bShowCollider: boolean;
	bShowMesh: boolean;
	bShowArm: boolean;
	bHmdMode: boolean;
	bAutoAttachToPlayerCamera: boolean;
	OffsetFromHMDToLeapDevice: Vector;
	HandBlueprint: UnrealEngineClass;
	BoneBlueprint: UnrealEngineClass;
	OnHandAdded: UnrealEngineMulticastDelegate<(HandId: number) => void>;
	OnHandRemoved: UnrealEngineMulticastDelegate<(HandId: number) => void>;
	OnHandUpdated: UnrealEngineMulticastDelegate<(HandId: number, DeltaSeconds: number) => void>;
	FingerMesh: StaticMesh;
	PalmMesh: StaticMesh;
	ArmMesh: StaticMesh;
	Material: MaterialInterface;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeapMotionControllerComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionControllerComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionControllerComponent;
	static C(Other: UObject): LeapMotionControllerComponent;
	UseHmdMode(EnableOrDisable: boolean): void;
	GetOldestLeftOrRightHandActor(LeapSide: ELeapSide): LeapMotionHandActor;
	GetHandActor(HandId: number): LeapMotionHandActor;
	GetAllHandIds(OutHandIds?: number[]): {OutHandIds: number[]};
	GetAllHandActors(OutHandActors?: LeapMotionHandActor[]): {OutHandActors: LeapMotionHandActor[]};
}

declare class LeapMotionBoneActor extends Actor { 
	LeapBoneType: ELeapBone;
	bShowCollider: boolean;
	bShowMesh: boolean;
	PrimitiveComponent: PrimitiveComponent;
	StaticMeshComponent: StaticMeshComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionBoneActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionBoneActor;
	static C(Other: UObject): LeapMotionBoneActor;
	SetMeshForPalm(): void;
	SetMeshForFinger(): void;
	SetMeshForArm(): void;
	Init(LeapBone: ELeapBone,Scale: number,Width: number,Length: number,ShowCollider: boolean,ShowMesh: boolean): void;
	GetParentingControllerComponent(): LeapMotionControllerComponent;
	GetHandActor(): LeapMotionHandActor;
}

declare class LeapMotionImageComponent extends ActorComponent { 
	bIsVisible: boolean;
	bIsPaused: boolean;
	DisplaySurfaceDistance: number;
	DisplaySurfaceComponent: StaticMeshComponent;
	PassthroughMaterial: MaterialInterface;
	DynamicPassthroughMaterial: MaterialInstanceDynamic;
	ImagePassthroughLeft: Texture2D;
	ImagePassthroughRight: Texture2D;
	DistortionTextureLeft: Texture2D;
	DistortionTextureRight: Texture2D;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeapMotionImageComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionImageComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionImageComponent;
	static C(Other: UObject): LeapMotionImageComponent;
	UpdateImageTexture(): void;
	AttachDisplaySurface(): void;
}

declare class LeapMotionControllerActor extends Actor { 
	LeapMotionControllerComponent: LeapMotionControllerComponent;
	LeapMotionImageComponent: LeapMotionImageComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionControllerActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionControllerActor;
	static C(Other: UObject): LeapMotionControllerActor;
}

declare class LeapMotionFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeapMotionFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeapMotionFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeapMotionFunctionLibrary;
	static C(Other: UObject): LeapMotionFunctionLibrary;
	static SetImagePolicy(UseImagePolicy: boolean): boolean;
	static SetHmdPolicy(UseHmdPolicy: boolean): boolean;
	static IsConnected(): boolean;
	static GetPinchStrength(HandId: number,PinchStrength?: number): {PinchStrength: number, $: boolean};
	static GetOldestLeftOrRightHandId(LeapSide: ELeapSide,OutHandId?: number): {OutHandId: number, $: boolean};
	static GetGrabStrength(HandId: number,GrabStrength?: number): {GrabStrength: number, $: boolean};
	static GetBoneWidthAndLength(HandId: number,LeapBone: ELeapBone,OutWidth?: number,OutLength?: number): {OutWidth: number, OutLength: number, $: boolean};
	static GetBonePostionAndOrientation(HandId: number,LeapBone: ELeapBone,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	static GetAllHandsIds(OutAllHandIds?: number[]): {OutAllHandIds: number[], $: boolean};
}

declare class HmdUserProfileField { 
	FieldName: string;
	FieldValue: string;
}

declare class HmdUserProfile { 
	Name: string;
	Gender: string;
	PlayerHeight: number;
	EyeHeight: number;
	IPD: number;
	NeckToEyeDistance: Vector2D;
	ExtraFields: HmdUserProfileField[];
}

declare class OculusFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OculusFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OculusFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusFunctionLibrary;
	static C(Other: UObject): OculusFunctionLibrary;
	static SetBaseRotationAndPositionOffset(BaseRot: Rotator,PosOffset: Vector,Options: EOrientPositionSelector): void;
	static SetBaseRotationAndBaseOffsetInMeters(Rotation: Rotator,BaseOffsetInMeters: Vector,Options: EOrientPositionSelector): void;
	static IsPlayerControllerFollowHmdEnabled(): boolean;
	static GetUserProfile(Profile?: HmdUserProfile): {Profile: HmdUserProfile, $: boolean};
	static GetRawSensorData(Accelerometer?: Vector,Gyro?: Vector,Magnetometer?: Vector,Temperature?: number,TimeInSeconds?: number): {Accelerometer: Vector, Gyro: Vector, Magnetometer: Vector, Temperature: number, TimeInSeconds: number};
	static GetPose(DeviceRotation?: Rotator,DevicePosition?: Vector,NeckPosition?: Vector,bUseOrienationForPlayerCamera?: boolean,bUsePositionForPlayerCamera?: boolean,PositionScale?: Vector): {DeviceRotation: Rotator, DevicePosition: Vector, NeckPosition: Vector};
	static GetPlayerCameraManagerFollowHmd(bFollowHmdOrientation?: boolean,bFollowHmdPosition?: boolean): {bFollowHmdOrientation: boolean, bFollowHmdPosition: boolean};
	static GetBaseRotationAndPositionOffset(OutRot?: Rotator,OutPosOffset?: Vector): {OutRot: Rotator, OutPosOffset: Vector};
	static GetBaseRotationAndBaseOffsetInMeters(OutRotation?: Rotator,OutBaseOffsetInMeters?: Vector): {OutRotation: Rotator, OutBaseOffsetInMeters: Vector};
	static EnablePlayerControllerFollowHmd(bEnable: boolean): void;
	static EnablePlayerCameraManagerFollowHmd(bFollowHmdOrientation: boolean,bFollowHmdPosition: boolean): void;
}

declare class ProcMeshTangent { 
	TangentX: Vector;
	bFlipTangentY: boolean;
}

declare class ProcMeshVertex { 
	Position: Vector;
	Normal: Vector;
	Tangent: ProcMeshTangent;
	Color: Color;
	UV0: Vector2D;
}

declare class ProcMeshSection { 
	ProcVertexBuffer: ProcMeshVertex[];
	ProcIndexBuffer: number[];
	SectionLocalBox: Box;
	bEnableCollision: boolean;
	bSectionVisible: boolean;
}

declare class ProceduralMeshComponent extends MeshComponent { 
	ProcMeshBodySetup: BodySetup;
	ProcMeshSections: ProcMeshSection[];
	LocalBounds: BoxSphereBounds;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ProceduralMeshComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ProceduralMeshComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralMeshComponent;
	static C(Other: UObject): ProceduralMeshComponent;
	UpdateMeshSection(SectionIndex: number,Vertices: Vector[],Normals: Vector[],UV0: Vector2D[],VertexColors: Color[],Tangents: ProcMeshTangent[]): void;
	SetMeshSectionVisible(SectionIndex: number,bNewVisibility: boolean): void;
	IsMeshSectionVisible(SectionIndex: number): boolean;
	CreateMeshSection(SectionIndex: number,Vertices: Vector[],Triangles: number[],Normals: Vector[],UV0: Vector2D[],VertexColors: Color[],Tangents: ProcMeshTangent[],bCreateCollision: boolean): void;
	ClearMeshSection(SectionIndex: number): void;
	ClearAllMeshSections(): void;
}

declare class KismetProceduralMeshLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetProceduralMeshLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetProceduralMeshLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetProceduralMeshLibrary;
	static C(Other: UObject): KismetProceduralMeshLibrary;
	static GenerateBoxMesh(BoxRadius: Vector,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	static CreateGridMeshTriangles(NumX: number,NumY: number,bWinding: boolean,Triangles?: number[]): {Triangles: number[]};
	static ConvertQuadToTriangles(Triangles?: number[],Vert0?: number,Vert1?: number,Vert2?: number,Vert3?: number): {Triangles: number[]};
	static CalculateTangentsForMesh(Vertices: Vector[],Triangles: number[],UVs: Vector2D[],Normals?: Vector[],Tangents?: ProcMeshTangent[]): {Normals: Vector[], Tangents: ProcMeshTangent[]};
}

declare class SteamVRChaperoneComponent extends ActorComponent { 
	OnLeaveSoftBounds: UnrealEngineMulticastDelegate<() => void>;
	OnReturnToSoftBounds: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SteamVRChaperoneComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SteamVRChaperoneComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRChaperoneComponent;
	static C(Other: UObject): SteamVRChaperoneComponent;
	GetSoftBounds(): Vector[];
	GetHardBounds(): Vector[];
}

declare type ESteamVRTrackingSpace = string;
declare type ESteamVRTrackedDeviceType = string;
declare class SteamVRFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SteamVRFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SteamVRFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRFunctionLibrary;
	static C(Other: UObject): SteamVRFunctionLibrary;
	static SetTrackingSpace(NewSpace: ESteamVRTrackingSpace): void;
	static GetValidTrackedDeviceIds(DeviceType: ESteamVRTrackedDeviceType,OutTrackedDeviceIds?: number[]): {OutTrackedDeviceIds: number[]};
	static GetTrackingSpace(): ESteamVRTrackingSpace;
	static GetTrackedDevicePositionAndOrientation(DeviceId: number,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	static GetHandPositionAndOrientation(ControllerIndex: number,Hand: EControllerHand,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
}

declare class SlateRemoteSettings extends UObject { 
	EnableRemoteServer: boolean;
	EditorServerEndpoint: string;
	GameServerEndpoint: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SlateRemoteSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SlateRemoteSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SlateRemoteSettings;
	static C(Other: UObject): SlateRemoteSettings;
}

declare type EJavascriptTabRole = string;
declare class JavascriptEditorTab extends UObject { 
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	TabId: string;
	DisplayName: string;
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTab;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTab;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	static C(Other: UObject): JavascriptEditorTab;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
}

declare type EJavasrciptUserInterfaceActionType = string;
declare class JavascriptUICommand { 
	Id: string;
	FriendlyName: string;
	Description: string;
	DefaultChord: InputChord;
	ActionType: EJavasrciptUserInterfaceActionType;
}

declare class JavascriptUICommands extends UObject { 
	OnExecuteAction: UnrealEngineDelegate<(Id: string) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(Id: string) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(Id: string) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(Id: string) => boolean>;
	Commands: JavascriptUICommand[];
	ContextName: string;
	ContextDesc: string;
	ContextNameParent: string;
	StyleSetName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUICommands;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUICommands;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands;
	static C(Other: UObject): JavascriptUICommands;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
}

declare type EJavascriptExtensionHook = string;
declare class JavascriptMenuExtension { 
	ExtensionHook: string;
	HookPosition: EJavascriptExtensionHook;
}

declare class JavascriptUIExtender extends UObject { 
	MenuExtensions: JavascriptMenuExtension[];
	ToolbarExtensions: JavascriptMenuExtension[];
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUIExtender;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUIExtender;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static C(Other: UObject): JavascriptUIExtender;
	static EndSection(): void;
	static Bind(Commands: JavascriptUICommands): void;
	static BeginSection(Name: string,Text: string): void;
	static AddToolBarButton(Commands: JavascriptUICommands,Id: string): void;
	static AddMenuSeparator(): void;
	static AddMenuEntry(Commands: JavascriptUICommands,Id: string): void;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptAssetEditorToolkit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	static C(Other: UObject): JavascriptAssetEditorToolkit;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
}

declare class JavascriptAssetTypeActions extends UObject { 
	ActionsName: string;
	Color: Color;
	SupportedClass: UnrealEngineClass;
	Editor: JavascriptAssetEditorToolkit;
	Actions: JavascriptUIExtender;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptAssetTypeActions;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	static C(Other: UObject): JavascriptAssetTypeActions;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
}

declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorLibrary;
	static C(Other: UObject): JavascriptEditorLibrary;
	static SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number,PaintingRestriction: ELandscapeLayerPaintingRestriction): void;
	static RedrawAllViewports(Engine: EditorEngine,bInvalidateHitProxies: boolean): void;
	static GetPIEWorld(Engine: Engine): World;
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetEditorWorld(Engine: Engine): World;
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
}

declare class JavascriptEditorMenu extends Widget { 
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorMenu;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorMenu;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorMenu;
	static C(Other: UObject): JavascriptEditorMenu;
	Refresh(): void;
	static AddPullDownMenu(Id: string,MenuLabel: string,Tooltip: string): void;
}

declare class JavascriptEditorStyle extends UObject { 
	SlateColor: SlateColor;
	SlateBrush: SlateBrush;
	ButtonStyle: ButtonStyle;
	TextBlockStyle: TextBlockStyle;
	EditableTextStyle: EditableTextStyle;
	EditableTextBoxStyle: EditableTextBoxStyle;
	CheckBoxStyle: CheckBoxStyle;
	ComboBoxStyle: ComboBoxStyle;
	ComboButtonStyle: ComboButtonStyle;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorStyle;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorStyle;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorStyle;
	static C(Other: UObject): JavascriptEditorStyle;
	static GetVector(StyleName: string): Vector2D;
	static GetTextBlockStyle(StyleName: string): TextBlockStyle;
	static GetSound(StyleName: string): SlateSound;
	static GetSlateColor(StyleName: string): SlateColor;
	static GetMargin(StyleName: string): Margin;
	static GetFontStyle(StyleName: string): SlateFontInfo;
	static GetFloat(StyleName: string): number;
	static GetEditableTextStyle(StyleName: string): EditableTextStyle;
	static GetEditableTextBoxStyle(StyleName: string): EditableTextBoxStyle;
	static GetComboButtonStyle(StyleName: string): ComboButtonStyle;
	static GetComboBoxStyle(StyleName: string): ComboBoxStyle;
	static GetColor(StyleName: string): LinearColor;
	static GetCheckBoxStyle(StyleName: string): CheckBoxStyle;
	static GetButtonStyle(StyleName: string): ButtonStyle;
	static GetBrush(StyleName: string): SlateBrush;
}

declare class JavascriptEditorTabManager extends Widget { 
	Layout: string;
	Tabs: JavascriptEditorTab[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	static C(Other: UObject): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTick;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTick;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	static C(Other: UObject): JavascriptEditorTick;
	GetEngine(): EditorEngine;
}

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
	CheckBoxState: ECheckBoxState;
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	CheckBoxText: string;
	Hyperlink: UnrealEngineDelegate<() => void>;
	HyperlinkText: string;
	bAllowThrottleWhenFrameRateIsLow: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptNotification;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptNotification;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	static C(Other: UObject): JavascriptNotification;
	Success(): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
}

declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(ParameterName: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PropertyEditor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PropertyEditor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	static C(Other: UObject): PropertyEditor;
	SetObject(UObject: UObject): void;
}

declare class MockAI extends UObject { 
	BBComp: BlackboardComponent;
	BrainComp: BrainComponent;
	PerceptionComp: AIPerceptionComponent;
	PawnActionComp: PawnActionsComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockAI;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockAI;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI;
	static C(Other: UObject): MockAI;
}

declare class MockAI_BT extends MockAI { 
	BTComp: BehaviorTreeComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockAI_BT;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockAI_BT;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI_BT;
	static C(Other: UObject): MockAI_BT;
}

declare class MockTask_Log extends GameplayTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockTask_Log;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockTask_Log;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockTask_Log;
	static C(Other: UObject): MockTask_Log;
}

declare class MockGameplayTasksComponent extends GameplayTasksComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockGameplayTasksComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockGameplayTasksComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTasksComponent;
	static C(Other: UObject): MockGameplayTasksComponent;
}

declare class MockGameplayTaskOwner extends UObject { 
	GTComponent: GameplayTasksComponent;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MockGameplayTaskOwner;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MockGameplayTaskOwner;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTaskOwner;
	static C(Other: UObject): MockGameplayTaskOwner;
}

declare class TestBTDecorator_CantExecute extends BTDecorator { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTDecorator_CantExecute;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTDecorator_CantExecute;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_CantExecute;
	static C(Other: UObject): TestBTDecorator_CantExecute;
}

declare class TestBTDecorator_DelayedAbort extends BTDecorator { 
	DelayTicks: number;
	bOnlyOnce: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTDecorator_DelayedAbort;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTDecorator_DelayedAbort;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_DelayedAbort;
	static C(Other: UObject): TestBTDecorator_DelayedAbort;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTTask_LatentWithFlags;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTTask_LatentWithFlags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_LatentWithFlags;
	static C(Other: UObject): TestBTTask_LatentWithFlags;
}

declare class TestBTTask_Log extends BTTaskNode { 
	LogIndex: number;
	LogFinished: number;
	ExecutionTicks: number;
	LogResult: EBTNodeResult;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTTask_Log;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTTask_Log;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_Log;
	static C(Other: UObject): TestBTTask_Log;
}

declare class TestBTTask_SetFlag extends BTTaskNode { 
	KeyName: string;
	bValue: boolean;
	TaskResult: EBTNodeResult;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestBTTask_SetFlag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBTTask_SetFlag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetFlag;
	static C(Other: UObject): TestBTTask_SetFlag;
}

declare class TestPawnAction_Log extends PawnAction { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestPawnAction_Log;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestPawnAction_Log;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_Log;
	static C(Other: UObject): TestPawnAction_Log;
}

declare class TestPawnAction_CallFunction extends TestPawnAction_Log { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TestPawnAction_CallFunction;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestPawnAction_CallFunction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_CallFunction;
	static C(Other: UObject): TestPawnAction_CallFunction;
}

declare class GameLiveStreamingFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameLiveStreamingFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameLiveStreamingFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameLiveStreamingFunctionLibrary;
	static C(Other: UObject): GameLiveStreamingFunctionLibrary;
	static StopBroadcastingGame(): void;
	static StartBroadcastingGame(FrameRate: number,ScreenScaling: number,bEnableWebCam: boolean,DesiredWebCamWidth: number,DesiredWebCamHeight: number,bMirrorWebCamImage: boolean,bCaptureAudioFromComputer: boolean,bCaptureAudioFromMicrophone: boolean,bDrawSimpleWebCamVideo: boolean): void;
	static IsBroadcastingGame(): boolean;
}

declare class BlueprintLiveStreamInfo { 
	GameName: string;
	StreamName: string;
	URL: string;
}

declare class QueryLiveStreamsCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnQueriedLiveStreams: UnrealEngineMulticastDelegate<(LiveStreams: BlueprintLiveStreamInfo[], bWasSuccessful: boolean) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): QueryLiveStreamsCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): QueryLiveStreamsCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QueryLiveStreamsCallbackProxy;
	static C(Other: UObject): QueryLiveStreamsCallbackProxy;
	static QueryLiveStreams(GameName: string): QueryLiveStreamsCallbackProxy;
}

declare class EditorUtilityBlueprint extends Blueprint { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorUtilityBlueprint;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorUtilityBlueprint;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorUtilityBlueprint;
	static C(Other: UObject): EditorUtilityBlueprint;
}

declare class EditorUtilityBlueprintFactory extends Factory { 
	ParentClass: UnrealEngineClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorUtilityBlueprintFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorUtilityBlueprintFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorUtilityBlueprintFactory;
	static C(Other: UObject): EditorUtilityBlueprintFactory;
}

declare class GlobalEditorUtilityBase extends UObject { 
	HelpText: string;
	bDirtiedSelectionSet: boolean;
	bAutoRunDefaultAction: boolean;
	OnEachSelectedActor: UnrealEngineMulticastDelegate<(Actor: Actor, Index: number) => void>;
	OnEachSelectedAsset: UnrealEngineMulticastDelegate<(Asset: UObject, Index: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GlobalEditorUtilityBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GlobalEditorUtilityBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GlobalEditorUtilityBase;
	static C(Other: UObject): GlobalEditorUtilityBase;
	SetActorSelectionState(Actor: Actor,bShouldBeSelected: boolean): void;
	SelectNothing(): void;
	RenameAsset(Asset: UObject,NewName: string): void;
	OnDefaultActionClicked(): void;
	GetSelectionSet(): Actor[];
	GetSelectionBounds(Origin?: Vector,BoxExtent?: Vector,SphereRadius?: number): {Origin: Vector, BoxExtent: Vector, SphereRadius: number};
	GetEditorUserSettings(): EditorPerProjectUserSettings;
	GetActorReference(PathToActor: string): Actor;
	ForEachSelectedAsset(): void;
	ForEachSelectedActor(): void;
	ClearActorSelectionSet(): void;
}

declare class PlacedEditorUtilityBase extends Actor { 
	HelpText: string;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PlacedEditorUtilityBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlacedEditorUtilityBase;
	static C(Other: UObject): PlacedEditorUtilityBase;
	SetLevelViewportCameraInfo(CameraLocation: Vector,CameraRotation: Rotator): void;
	SetActorSelectionState(Actor: Actor,bShouldBeSelected: boolean): void;
	SelectNothing(): void;
	GetSelectionSet(): Actor[];
	GetLevelViewportCameraInfo(CameraLocation?: Vector,CameraRotation?: Rotator): {CameraLocation: Vector, CameraRotation: Rotator, $: boolean};
	GetActorReference(PathToActor: string): Actor;
	ClearActorSelectionSet(): void;
}

declare class GameplayTagsK2Node_LiteralGameplayTag extends K2Node { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_LiteralGameplayTag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_LiteralGameplayTag;
	static C(Other: UObject): GameplayTagsK2Node_LiteralGameplayTag;
}

declare class GameplayTagsK2Node_MultiCompareBase extends K2Node { 
	NumberOfPins: number;
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareBase;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareBase;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainer extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
}

declare class GameplayTagsK2Node_SwitchGameplayTag extends K2Node_Switch { 
	PinTags: GameplayTag[];
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTag;
	static C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTag;
	static NotEqual_TagTag(A: GameplayTag,B: string): boolean;
}

declare class GameplayTagsK2Node_SwitchGameplayTagContainer extends K2Node_Switch { 
	PinContainers: GameplayTagContainer[];
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static NotEqual_TagContainerTagContainer(A: GameplayTagContainer,B: string): boolean;
}

declare class EdGraph_ReferenceViewer extends EdGraph { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraph_ReferenceViewer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraph_ReferenceViewer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraph_ReferenceViewer;
	static C(Other: UObject): EdGraph_ReferenceViewer;
}

declare class EdGraphNode_Reference extends EdGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphNode_Reference;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphNode_Reference;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_Reference;
	static C(Other: UObject): EdGraphNode_Reference;
}

declare class ReferenceViewerSchema extends EdGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ReferenceViewerSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ReferenceViewerSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReferenceViewerSchema;
	static C(Other: UObject): ReferenceViewerSchema;
}

declare type EAndroidScreenOrientation = string;
declare type EAndroidDepthBufferPreference = string;
declare class GooglePlayAchievementMapping { 
	Name: string;
	AchievementID: string;
}

declare class GooglePlayLeaderboardMapping { 
	Name: string;
	LeaderboardID: string;
}

declare type EAndroidAudio = string;
declare class AndroidRuntimeSettings extends UObject { 
	PackageName: string;
	StoreVersion: number;
	ApplicationDisplayName: string;
	VersionDisplayName: string;
	MinSDKVersion: number;
	TargetSDKVersion: number;
	bPackageDataInsideApk: boolean;
	bDisableVerifyOBBOnStartUp: boolean;
	Orientation: EAndroidScreenOrientation;
	bFullScreen: boolean;
	DepthBufferPreference: EAndroidDepthBufferPreference;
	ExtraManifestNodeTags: string[];
	ExtraApplicationNodeTags: string[];
	ExtraApplicationSettings: string;
	ExtraActivityNodeTags: string[];
	ExtraActivitySettings: string;
	ExtraPermissions: string[];
	bPackageForGearVR: boolean;
	bRemoveOSIG: boolean;
	KeyStore: string;
	KeyAlias: string;
	KeyStorePassword: string;
	KeyPassword: string;
	bBuildForArmV7: boolean;
	bBuildForX86: boolean;
	bBuildForX8664: boolean;
	bBuildForES2: boolean;
	bBuildForES31: boolean;
	bEnableGooglePlaySupport: boolean;
	GamesAppID: string;
	AchievementMap: GooglePlayAchievementMapping[];
	LeaderboardMap: GooglePlayLeaderboardMapping[];
	AdMobAdUnitID: string;
	AdMobAdUnitIDs: string[];
	GooglePlayLicenseKey: string;
	bShowLaunchImage: boolean;
	AndroidAudio: EAndroidAudio;
	bMultiTargetFormat_ETC1: boolean;
	bMultiTargetFormat_ETC2: boolean;
	bMultiTargetFormat_DXT: boolean;
	bMultiTargetFormat_PVRTC: boolean;
	bMultiTargetFormat_ATC: boolean;
	bMultiTargetFormat_ASTC: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AndroidRuntimeSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AndroidRuntimeSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidRuntimeSettings;
	static C(Other: UObject): AndroidRuntimeSettings;
}

declare class IOSBuildResourceDirectory { 
	Path: string;
}

declare class IOSBuildResourceFilePath { 
	FilePath: string;
}

declare type EPowerUsageFrameRateLock = string;
declare type EIOSVersion = string;
declare class IOSRuntimeSettings extends UObject { 
	bEnableGameCenterSupport: boolean;
	bEnableCloudKitSupport: boolean;
	bSupportsMetal: boolean;
	bSupportsMetalMRT: boolean;
	bSupportsOpenGLES2: boolean;
	bDevForArmV7: boolean;
	bDevForArm64: boolean;
	bDevForArmV7S: boolean;
	bShipForArmV7: boolean;
	bShipForArm64: boolean;
	bShipForArmV7S: boolean;
	AdditionalLinkerFlags: string;
	AdditionalShippingLinkerFlags: string;
	RemoteServerName: string;
	bUseRSync: boolean;
	RSyncUsername: string;
	DeltaCopyInstallPath: IOSBuildResourceDirectory;
	SSHPrivateKeyLocation: string;
	SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
	bSupportsPortraitOrientation: boolean;
	bSupportsUpsideDownOrientation: boolean;
	bSupportsLandscapeLeftOrientation: boolean;
	bSupportsLandscapeRightOrientation: boolean;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): IOSRuntimeSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): IOSRuntimeSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IOSRuntimeSettings;
	static C(Other: UObject): IOSRuntimeSettings;
}

declare class AndroidSDKSettings extends UObject { 
	SDKPath: DirectoryPath;
	NDKPath: DirectoryPath;
	ANTPath: DirectoryPath;
	JavaPath: DirectoryPath;
	SDKAPILevel: string;
	NDKAPILevel: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AndroidSDKSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AndroidSDKSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject): AndroidSDKSettings;
}

declare class HTML5DeviceMapping { 
	DeviceName: string;
	DevicePath: FilePath;
}

declare class HTML5SDKSettings extends UObject { 
	DeviceMap: HTML5DeviceMapping[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): HTML5SDKSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): HTML5SDKSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5SDKSettings;
	static C(Other: UObject): HTML5SDKSettings;
}

declare class HTML5LevelTransitions { 
	MapFrom: FilePath;
	MapTo: FilePath;
}

declare class HTML5TargetSettings extends UObject { 
	HeapSizeDevelopment: number;
	HeapSizeShipping: number;
	DeployServerPort: number;
	UseAsyncLevelLoading: boolean;
	LevelTransitions: HTML5LevelTransitions[];
	UploadToS3: boolean;
	S3KeyID: string;
	S3SecretAccessKey: string;
	S3BucketName: string;
	S3FolderName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): HTML5TargetSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): HTML5TargetSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5TargetSettings;
	static C(Other: UObject): HTML5TargetSettings;
}

declare type EEditorLiveStreamingWebCamResolution = string;
declare class EditorLiveStreamingSettings extends UObject { 
	FrameRate: number;
	ScreenScaling: number;
	bPrimaryMonitorOnly: boolean;
	bEnableWebCam: boolean;
	WebCamResolution: EEditorLiveStreamingWebCamResolution;
	bMirrorWebCamImage: boolean;
	bCaptureAudioFromComputer: boolean;
	bCaptureAudioFromMicrophone: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorLiveStreamingSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorLiveStreamingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorLiveStreamingSettings;
	static C(Other: UObject): EditorLiveStreamingSettings;
}

declare type ETutorialContent = string;
declare class TutorialContent { 
	Type: ETutorialContent;
	Content: string;
	ExcerptName: string;
	Text: string;
}

declare type ETutorialAnchorIdentifier = string;
declare class TutorialContentAnchor { 
	Type: ETutorialAnchorIdentifier;
	WrapperIdentifier: string;
	Asset: StringAssetReference;
	bDrawHighlight: boolean;
	TabToFocusOrOpen: string;
	FriendlyName: string;
	GUIDString: string;
	OuterName: string;
}

declare class TutorialWidgetContent { 
	Content: TutorialContent;
	WidgetAnchor: TutorialContentAnchor;
	HorizontalAlignment: EHorizontalAlignment;
	VerticalAlignment: EVerticalAlignment;
	Offset: Vector2D;
	ContentWidth: number;
	bAutoFocus: boolean;
}

declare class TutorialStage { 
	Name: string;
	Content: TutorialContent;
	WidgetContent: TutorialWidgetContent[];
	NextButtonText: string;
	BackButtonText: string;
	PlatformsToTest: string[];
	bInvertPlatformTest: boolean;
}

declare class EditorTutorial extends UObject { 
	Title: string;
	SortOrder: number;
	Icon: string;
	Texture: Texture2D;
	Category: string;
	SummaryContent: TutorialContent;
	Stages: TutorialStage[];
	PreviousTutorial: StringClassReference;
	NextTutorial: StringClassReference;
	bIsStandalone: boolean;
	AssetToUse: StringAssetReference;
	ImportPath: string;
	bHideInBrowser: boolean;
	SearchTags: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorial;
	static C(Other: UObject): EditorTutorial;
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
}

declare class EditorTutorialFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialFactory;
	static C(Other: UObject): EditorTutorialFactory;
}

declare class EditorTutorialImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialImportFactory;
	static C(Other: UObject): EditorTutorialImportFactory;
}

declare class TutorialCategory { 
	Identifier: string;
	Title: string;
	SortOrder: number;
	Description: string;
	Icon: string;
	Texture: StringAssetReference;
}

declare class TutorialContext { 
	Context: string;
	BrowserFilter: string;
	AttractTutorial: StringClassReference;
	LaunchTutorial: StringClassReference;
}

declare class EditorTutorialSettings extends UObject { 
	bDisableAllTutorialAlerts: boolean;
	Categories: TutorialCategory[];
	StartupTutorial: StringClassReference;
	TutorialContexts: TutorialContext[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialSettings;
	static C(Other: UObject): EditorTutorialSettings;
}

declare class TutorialSettings extends UObject { 
	Categories: TutorialCategory[];
	StartupTutorial: StringClassReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TutorialSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TutorialSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialSettings;
	static C(Other: UObject): TutorialSettings;
}

declare class TutorialProgress { 
	Tutorial: StringClassReference;
	CurrentStage: number;
	bUserDismissed: boolean;
}

declare class TutorialStateSettings extends UObject { 
	TutorialsProgress: TutorialProgress[];
	bDismissedAllTutorials: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TutorialStateSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TutorialStateSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialStateSettings;
	static C(Other: UObject): TutorialStateSettings;
}

declare class LogVisualizerSessionSettings extends UObject { 
	bEnableGraphsVisualization: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LogVisualizerSessionSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LogVisualizerSessionSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSessionSettings;
	static C(Other: UObject): LogVisualizerSessionSettings;
}

declare class CategoryFilter { 
	CategoryName: string;
	LogVerbosity: number;
	Enabled: boolean;
}

declare class VisualLoggerFilters { 
	SearchBoxFilter: string;
	ObjectNameFilter: string;
	Categories: CategoryFilter[];
	SelectedClasses: string[];
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
	PresistentFilters: VisualLoggerFilters;
	DebugMeshMaterialFakeLight: Material;
	DebugMeshMaterialFakeLightName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LogVisualizerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LogVisualizerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSettings;
	static C(Other: UObject): LogVisualizerSettings;
}

declare class VisualLoggerCameraController extends DebugCameraController { 
	PickedActor: Actor;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerCameraController;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerCameraController;
	static C(Other: UObject): VisualLoggerCameraController;
}

declare class VisualLoggerHUD extends DebugCameraHUD { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerHUD;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerHUD;
	static C(Other: UObject): VisualLoggerHUD;
}

declare class VisualLoggerRenderingActor extends Actor { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerRenderingActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActor;
	static C(Other: UObject): VisualLoggerRenderingActor;
}

declare class VisualLoggerRenderingComponent extends PrimitiveComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VisualLoggerRenderingComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VisualLoggerRenderingComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingComponent;
	static C(Other: UObject): VisualLoggerRenderingComponent;
}

declare class GeomModifier extends UObject { 
	Description: string;
	Tooltip: string;
	bPushButton: boolean;
	bInitialized: boolean;
	CachedPolys: Polys;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier;
	static C(Other: UObject): GeomModifier;
}

declare class GeomModifier_Edit extends GeomModifier { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Edit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Edit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Edit;
	static C(Other: UObject): GeomModifier_Edit;
}

declare class GeomModifier_Clip extends GeomModifier_Edit { 
	bFlipNormal: boolean;
	bSplit: boolean;
	ClipMarkers: Vector[];
	SnappedMouseWorldSpacePos: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Clip;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Clip;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Clip;
	static C(Other: UObject): GeomModifier_Clip;
}

declare class GeomModifier_Create extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Create;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Create;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Create;
	static C(Other: UObject): GeomModifier_Create;
}

declare class GeomModifier_Delete extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Delete;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Delete;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Delete;
	static C(Other: UObject): GeomModifier_Delete;
}

declare class GeomModifier_Extrude extends GeomModifier_Edit { 
	Length: number;
	Segments: number;
	SaveCoordSystem: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Extrude;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Extrude;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Extrude;
	static C(Other: UObject): GeomModifier_Extrude;
}

declare class GeomModifier_Flip extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Flip;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Flip;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Flip;
	static C(Other: UObject): GeomModifier_Flip;
}

declare class GeomModifier_Lathe extends GeomModifier_Edit { 
	TotalSegments: number;
	Segments: number;
	AlignToSide: boolean;
	Axis: EAxis;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Lathe;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Lathe;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Lathe;
	static C(Other: UObject): GeomModifier_Lathe;
}

declare class GeomModifier_Pen extends GeomModifier_Edit { 
	bAutoExtrude: boolean;
	bCreateConvexPolygons: boolean;
	bCreateBrushShape: boolean;
	ExtrudeDepth: number;
	ShapeVertices: Vector[];
	MouseWorldSpacePos: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Pen;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Pen;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Pen;
	static C(Other: UObject): GeomModifier_Pen;
}

declare class GeomModifier_Split extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Split;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Split;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Split;
	static C(Other: UObject): GeomModifier_Split;
}

declare class GeomModifier_Triangulate extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Triangulate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Triangulate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Triangulate;
	static C(Other: UObject): GeomModifier_Triangulate;
}

declare class GeomModifier_Optimize extends GeomModifier_Triangulate { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Optimize;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Optimize;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Optimize;
	static C(Other: UObject): GeomModifier_Optimize;
}

declare class GeomModifier_Turn extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Turn;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Turn;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Turn;
	static C(Other: UObject): GeomModifier_Turn;
}

declare class GeomModifier_Weld extends GeomModifier_Edit { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeomModifier_Weld;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeomModifier_Weld;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeomModifier_Weld;
	static C(Other: UObject): GeomModifier_Weld;
}

declare class ActorFactoryLandscape extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorFactoryLandscape;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ActorFactoryLandscape;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryLandscape;
	static C(Other: UObject): ActorFactoryLandscape;
}

declare type ELandscapeToolFlattenMode = string;
declare type ELandscapeToolErosionMode = string;
declare type ELandscapeToolHydroErosionMode = string;
declare type ELandscapeToolNoiseMode = string;
declare type ELandscapeToolPasteMode = string;
declare class GizmoImportLayer { 
	LayerFilename: string;
	LayerName: string;
	bNoImport: boolean;
}

declare type ELandscapeMirrorOperation = string;
declare type ELandscapeConvertMode = string;
declare type ELandscapeImportHeightmapError = string;
declare class LandscapeImportLayerInfo { 
	LayerName: string;
	LayerInfo: LandscapeLayerInfoObject;
	ThumbnailMIC: MaterialInstanceConstant;
	SourceFilePath: string;
}

declare type ELandscapeImportLayerError = string;
declare class LandscapeImportLayer extends LandscapeImportLayerInfo { 
	ImportError: ELandscapeImportLayerError;
}

declare class LandscapePatternBrushWorldSpaceSettings { 
	Origin: Vector2D;
	Rotation: number;
	bCenterTextureOnOrigin: boolean;
	RepeatSize: number;
}

declare type EColorChannel = string;
declare class LandscapeEditorObject extends UObject { 
	ToolStrength: number;
	bUseWeightTargetValue: boolean;
	WeightTargetValue: number;
	MaximumValueRadius: number;
	FlattenMode: ELandscapeToolFlattenMode;
	bUseSlopeFlatten: boolean;
	bPickValuePerApply: boolean;
	bUseFlattenTarget: boolean;
	FlattenTarget: number;
	bShowFlattenTargetPreview: boolean;
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
	ResizeLandscape_QuadsPerSection: number;
	ResizeLandscape_SectionsPerComponent: number;
	ResizeLandscape_ComponentCount: IntPoint;
	ResizeLandscape_ConvertMode: ELandscapeConvertMode;
	NewLandscape_Material: any;
	NewLandscape_QuadsPerSection: number;
	NewLandscape_SectionsPerComponent: number;
	NewLandscape_ComponentCount: IntPoint;
	NewLandscape_Location: Vector;
	NewLandscape_Rotation: Rotator;
	NewLandscape_Scale: Vector;
	ImportLandscape_HeightmapError: ELandscapeImportHeightmapError;
	ImportLandscape_HeightmapFilename: string;
	ImportLandscape_Width: number;
	ImportLandscape_Height: number;
	ImportLandscape_Data: any[];
	ImportLandscape_Layers: LandscapeImportLayer[];
	BrushRadius: number;
	BrushFalloff: number;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LandscapeEditorObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LandscapeEditorObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeEditorObject;
	static C(Other: UObject): LandscapeEditorObject;
}

declare class LandscapePlaceholder extends Actor { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LandscapePlaceholder;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapePlaceholder;
	static C(Other: UObject): LandscapePlaceholder;
}

declare class ActorFactoryProceduralFoliage extends ActorFactoryBoxVolume { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorFactoryProceduralFoliage;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ActorFactoryProceduralFoliage;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryProceduralFoliage;
	static C(Other: UObject): ActorFactoryProceduralFoliage;
}

declare class FoliageType_ISMThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FoliageType_ISMThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FoliageType_ISMThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FoliageType_ISMThumbnailRenderer;
	static C(Other: UObject): FoliageType_ISMThumbnailRenderer;
}

declare class FoliageTypeFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FoliageTypeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FoliageTypeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FoliageTypeFactory;
	static C(Other: UObject): FoliageTypeFactory;
}

declare class LandscapeGrassTypeFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LandscapeGrassTypeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LandscapeGrassTypeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeGrassTypeFactory;
	static C(Other: UObject): LandscapeGrassTypeFactory;
}

declare class ProceduralFoliageSpawnerFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ProceduralFoliageSpawnerFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ProceduralFoliageSpawnerFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralFoliageSpawnerFactory;
	static C(Other: UObject): ProceduralFoliageSpawnerFactory;
}

declare class SceneOutlinerSettings extends UObject { 
	bHideTemporaryActors: boolean;
	bShowOnlyActorsInCurrentLevel: boolean;
	bShowOnlySelectedActors: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SceneOutlinerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SceneOutlinerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneOutlinerSettings;
	static C(Other: UObject): SceneOutlinerSettings;
}

declare class TRASHCLASS_DmgTypeBP_Environmental_0 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_DmgTypeBP_Environmental_0;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TRASHCLASS_DmgTypeBP_Environmental_0;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_DmgTypeBP_Environmental_0;
	static C(Other: UObject): TRASHCLASS_DmgTypeBP_Environmental_0;
}

declare class ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static C(Other: UObject): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptComponent;

declare var GWorld : World;

declare var GEngine : UnrealEdEngine;

