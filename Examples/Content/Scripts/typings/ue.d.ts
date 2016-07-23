/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
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
	static Find(Outer: UObject, ResourceName: string): WidgetGraphSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetGraphSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): WidgetSlotPair;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetSlotPair;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetSlotPair;
	static C(Other: UObject): WidgetSlotPair;
}

declare class AutomationPerformaceHelper extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AutomationPerformaceHelper;
	static Find(Outer: UObject, ResourceName: string): AutomationPerformaceHelper;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AutomationPerformaceHelper;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static C(Other: UObject): AutomationPerformaceHelper;
}

declare type EFunctionalTestResult = string | symbol;
declare var EFunctionalTestResult = { Invalid:'Invalid',Error:'Error',Running:'Running',Failed:'Failed',Succeeded:'Succeeded', };
declare class FuncTestRenderingComponent extends PrimitiveComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FuncTestRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): FuncTestRenderingComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FuncTestRenderingComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FuncTestRenderingComponent;
	static C(Other: UObject): FuncTestRenderingComponent;
}

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
	bIsRunning: boolean;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FunctionalTest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTest;
	SetTimeLimit(NewTimeLimit: number,ResultWhenTimeRunsOut: EFunctionalTestResult): void;
	RegisterAutoDestroyActor(ActorToAutoDestroy: Actor): void;
	OnWantsReRunCheck(): boolean;
	OnAdditionalTestFinishedMessageRequest(TestResult: EFunctionalTestResult): string;
	LogMessage(Message: string): void;
	GetCurrentRerunReason(): string;
	FinishTest(TestResult: EFunctionalTestResult,Message: string): void;
	DebugGatherRelevantActors(): Actor[];
	AddRerun(Reason: string): void;
	static C(Other: UObject): FunctionalTest;
}

declare class GenericTeamId { 
	TeamID: number;
	clone() : GenericTeamId;
	static C(Other: UObject): GenericTeamId;
}

declare class AITestSpawnInfo { 
	PawnClass: UnrealEngineClass;
	ControllerClass: UnrealEngineClass;
	TeamID: GenericTeamId;
	BehaviorTree: BehaviorTree;
	SpawnLocation: Actor;
	NumberToSpawn: number;
	SpawnDelay: number;
	clone() : AITestSpawnInfo;
	static C(Other: UObject): AITestSpawnInfo;
}

declare class AITestSpawnSet { 
	SpawnInfoContainer: AITestSpawnInfo[];
	Name: string;
	bEnabled: boolean;
	FallbackSpawnLocation: Actor;
	clone() : AITestSpawnSet;
	static C(Other: UObject): AITestSpawnSet;
}

declare class PendingDelayedSpawn extends AITestSpawnInfo { 
	clone() : PendingDelayedSpawn;
	static C(Other: UObject): PendingDelayedSpawn;
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
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalAITest;
	IsOneOfSpawnedPawns(Actor: Actor): boolean;
	static C(Other: UObject): FunctionalAITest;
}

declare class FunctionalTestingManager extends BlueprintFunctionLibrary { 
	TestsLeft: FunctionalTest[];
	AllTests: FunctionalTest[];
	OnSetupTests: UnrealEngineMulticastDelegate<() => void>;
	OnTestsComplete: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FunctionalTestingManager;
	static Find(Outer: UObject, ResourceName: string): FunctionalTestingManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FunctionalTestingManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestingManager;
	static RunAllFunctionalTests(WorldContext: UObject,bNewLog: boolean,bRunLooped: boolean,bWaitForNavigationBuildFinish: boolean,FailedTestsReproString: string): boolean;
	static C(Other: UObject): FunctionalTestingManager;
}

declare class PhasedAutomationActorBase extends Actor { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PhasedAutomationActorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhasedAutomationActorBase;
	OnFunctionalTestingComplete(): void;
	static C(Other: UObject): PhasedAutomationActorBase;
}

declare class AIGraph extends EdGraph { 
	GraphVersion: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraph;
	static Find(Outer: UObject, ResourceName: string): AIGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraph;
	static C(Other: UObject): AIGraph;
}

declare class GraphNodeClassData { 
	AssetName: string;
	GeneratedClassPackage: string;
	ClassName: string;
	Category: string;
	clone() : GraphNodeClassData;
	static C(Other: UObject): GraphNodeClassData;
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
	static Find(Outer: UObject, ResourceName: string): AIGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphNode;
	static C(Other: UObject): AIGraphNode;
}

declare class AIGraphSchema extends EdGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraphSchema;
	static Find(Outer: UObject, ResourceName: string): AIGraphSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraphSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphSchema;
	static C(Other: UObject): AIGraphSchema;
}

declare class BehaviorTreeDecoratorGraph extends EdGraph { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraph;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraph;
	static C(Other: UObject): BehaviorTreeDecoratorGraph;
}

declare class BehaviorTreeDecoratorGraphNode extends EdGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode;
}

declare class BehaviorTreeEditorTypes extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeEditorTypes;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeEditorTypes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeEditorTypes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeEditorTypes;
	static C(Other: UObject): BehaviorTreeEditorTypes;
}

declare class BehaviorTreeDecoratorGraphNode_Decorator extends BehaviorTreeDecoratorGraphNode { 
	NodeInstance: UObject;
	ClassData: GraphNodeClassData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Decorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Decorator;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode_Decorator;
}

declare type EDecoratorLogicMode = string | symbol;
declare var EDecoratorLogicMode = { Sink:'Sink',And:'And',Or:'Or',Not:'Not', };
declare class BehaviorTreeDecoratorGraphNode_Logic extends BehaviorTreeDecoratorGraphNode { 
	LogicMode: EDecoratorLogicMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Logic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Logic;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode_Logic;
}

declare class BehaviorTreeFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeFactory;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeFactory;
	static C(Other: UObject): BehaviorTreeFactory;
}

declare class BehaviorTreeGraph extends AIGraph { 
	ModCounter: number;
	bIsUsingModCounter: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraph;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode;
	static C(Other: UObject): BehaviorTreeGraphNode;
}

declare class BehaviorTreeGraphNode_Composite extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Composite;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Composite;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Composite;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Composite;
	static C(Other: UObject): BehaviorTreeGraphNode_Composite;
}

declare class BehaviorTreeGraphNode_SimpleParallel extends BehaviorTreeGraphNode_Composite { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_SimpleParallel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_CompositeDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_CompositeDecorator;
	static C(Other: UObject): BehaviorTreeGraphNode_CompositeDecorator;
}

declare class BehaviorTreeGraphNode_Decorator extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Decorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Decorator;
	static C(Other: UObject): BehaviorTreeGraphNode_Decorator;
}

declare class BehaviorTreeGraphNode_Root extends BehaviorTreeGraphNode { 
	BlackboardAsset: BlackboardData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Root;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Root;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Root;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Root;
	static C(Other: UObject): BehaviorTreeGraphNode_Root;
}

declare class BehaviorTreeGraphNode_Service extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Service;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Service;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Service;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Service;
	static C(Other: UObject): BehaviorTreeGraphNode_Service;
}

declare class BehaviorTreeGraphNode_Task extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Task;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Task;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Task;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Task;
	static C(Other: UObject): BehaviorTreeGraphNode_Task;
}

declare class BehaviorTreeGraphNode_SubtreeTask extends BehaviorTreeGraphNode_Task { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_SubtreeTask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SubtreeTask;
	static C(Other: UObject): BehaviorTreeGraphNode_SubtreeTask;
}

declare class BlackboardDataFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BlackboardDataFactory;
	static Find(Outer: UObject, ResourceName: string): BlackboardDataFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BlackboardDataFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BlackboardDataFactory;
	static C(Other: UObject): BlackboardDataFactory;
}

declare class EdGraphSchema_BehaviorTree extends AIGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphSchema_BehaviorTree;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_BehaviorTree;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphSchema_BehaviorTree;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTree;
	static C(Other: UObject): EdGraphSchema_BehaviorTree;
}

declare class EdGraphSchema_BehaviorTreeDecorator extends EdGraphSchema { 
	PC_Boolean: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphSchema_BehaviorTreeDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTreeDecorator;
	static C(Other: UObject): EdGraphSchema_BehaviorTreeDecorator;
}

declare class K2Node_LatentGameplayTaskCall extends K2Node_BaseAsyncTask { 
	SpawnParmPins: EdGraphPin[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LatentGameplayTaskCall;
	static Find(Outer: UObject, ResourceName: string): K2Node_LatentGameplayTaskCall;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LatentGameplayTaskCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentGameplayTaskCall;
	static C(Other: UObject): K2Node_LatentGameplayTaskCall;
}

declare class VREditorGizmoHandle { 
	clone() : VREditorGizmoHandle;
	static C(Other: UObject): VREditorGizmoHandle;
}

declare class VREditorGizmoHandleGroup extends SceneComponent { 
	GizmoMaterial: MaterialInterface;
	TranslucentGizmoMaterial: MaterialInterface;
	Handles: VREditorGizmoHandle[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): VREditorGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorGizmoHandleGroup;
	static C(Other: UObject): VREditorGizmoHandleGroup;
}

declare class BaseTransformGizmo extends Actor { 
	SceneComponent: SceneComponent;
	GizmoMaterial: MaterialInterface;
	TranslucentGizmoMaterial: MaterialInterface;
	AllHandleGroups: VREditorGizmoHandleGroup[];
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BaseTransformGizmo;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BaseTransformGizmo;
	static C(Other: UObject): BaseTransformGizmo;
}

declare class TransformGizmoMeasurement { 
	MeasurementText: TextRenderComponent;
	clone() : TransformGizmoMeasurement;
	static C(Other: UObject): TransformGizmoMeasurement;
}

declare class VREditorTranslationGizmoHandleGroup extends VREditorGizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorTranslationGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): VREditorTranslationGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorTranslationGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorTranslationGizmoHandleGroup;
	static C(Other: UObject): VREditorTranslationGizmoHandleGroup;
}

declare class VREditorPlaneTranslationGizmoHandleGroup extends VREditorGizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorPlaneTranslationGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): VREditorPlaneTranslationGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorPlaneTranslationGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorPlaneTranslationGizmoHandleGroup;
	static C(Other: UObject): VREditorPlaneTranslationGizmoHandleGroup;
}

declare class VREditorRotationGizmoHandleGroup extends VREditorGizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorRotationGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): VREditorRotationGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorRotationGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorRotationGizmoHandleGroup;
	static C(Other: UObject): VREditorRotationGizmoHandleGroup;
}

declare class VREditorStretchGizmoHandleGroup extends VREditorGizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorStretchGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): VREditorStretchGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorStretchGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorStretchGizmoHandleGroup;
	static C(Other: UObject): VREditorStretchGizmoHandleGroup;
}

declare class VREditorUniformScaleGizmoHandleGroup extends VREditorGizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorUniformScaleGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): VREditorUniformScaleGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorUniformScaleGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorUniformScaleGizmoHandleGroup;
	static C(Other: UObject): VREditorUniformScaleGizmoHandleGroup;
}

declare class TransformGizmo extends BaseTransformGizmo { 
	Measurements: TransformGizmoMeasurement;
	TranslationGizmoHandleGroup: VREditorTranslationGizmoHandleGroup;
	PlaneTranslationGizmoHandleGroup: VREditorPlaneTranslationGizmoHandleGroup;
	RotationGizmoHandleGroup: VREditorRotationGizmoHandleGroup;
	StretchGizmoHandleGroup: VREditorStretchGizmoHandleGroup;
	UniformScaleGizmoHandleGroup: VREditorUniformScaleGizmoHandleGroup;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TransformGizmo;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransformGizmo;
	static C(Other: UObject): TransformGizmo;
}

declare class FloatingText extends Actor { 
	SceneComponent: SceneComponent;
	FirstLineComponent: StaticMeshComponent;
	JointSphereComponent: StaticMeshComponent;
	SecondLineComponent: StaticMeshComponent;
	TextComponent: TextRenderComponent;
	MaskedTextMaterial: MaterialInterface;
	TranslucentTextMaterial: MaterialInterface;
	LineMaterial: MaterialInterface;
	LineMaterialMID: MaterialInstanceDynamic;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FloatingText;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FloatingText;
	static C(Other: UObject): FloatingText;
}

declare class VREditorBaseUserWidget extends UserWidget { 
	Owner: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorBaseUserWidget;
	static Find(Outer: UObject, ResourceName: string): VREditorBaseUserWidget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorBaseUserWidget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorBaseUserWidget;
	static C(Other: UObject): VREditorBaseUserWidget;
}

declare class VREditorQuickMenu extends VREditorBaseUserWidget { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorQuickMenu;
	static Find(Outer: UObject, ResourceName: string): VREditorQuickMenu;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorQuickMenu;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorQuickMenu;
	Refresh(): void;
	OnWorldOutlinerButtonClicked(bIsChecked: boolean): void;
	OnUndoButtonClicked(): void;
	OnTutorialButtonClicked(bIsChecked: boolean): void;
	OnTranslationSnapSizeButtonClicked(): void;
	OnTranslationSnapButtonClicked(bIsChecked: boolean): void;
	OnSimulateButtonClicked(bIsChecked: boolean): void;
	OnScaleSnapSizeButtonClicked(): void;
	OnScaleSnapButtonClicked(bIsChecked: boolean): void;
	OnRotationSnapSizeButtonClicked(): void;
	OnRotationSnapButtonClicked(bIsChecked: boolean): void;
	OnRedoButtonClicked(): void;
	OnPasteButtonClicked(): void;
	OnModesButtonClicked(bIsChecked: boolean): void;
	OnGizmoModeButtonClicked(): void;
	OnGizmoCoordinateSystemButtonClicked(): void;
	OnGameModeButtonClicked(bIsChecked: boolean): void;
	OnExitVRButtonClicked(): void;
	OnDeleteButtonClicked(): void;
	OnCopyButtonClicked(): void;
	OnContentBrowserButtonClicked(bIsChecked: boolean): void;
	OnAssetEditorButtonClicked(bIsChecked: boolean): void;
	OnActorDetailsButtonClicked(bIsChecked: boolean): void;
	IsWorldOutlinerVisible(): boolean;
	IsTutorialVisible(): boolean;
	IsTranslationSnapEnabled(): boolean;
	IsSimulatingEnabled(): boolean;
	IsScaleSnapEnabled(): boolean;
	IsRotationSnapEnabled(): boolean;
	IsModesVisible(): boolean;
	IsGameModeEnabled(): boolean;
	IsContentBrowserVisible(): boolean;
	IsAssetEditorVisible(): boolean;
	IsActorDetailsVisible(): boolean;
	GetTranslationSnapSizeText(): string;
	GetScaleSnapSizeText(): string;
	GetRotationSnapSizeText(): string;
	GetGizmoModeText(): string;
	GetGizmoCoordinateSystemText(): string;
	static C(Other: UObject): VREditorQuickMenu;
}

declare class VREditorRadialMenuItem extends VREditorBaseUserWidget { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorRadialMenuItem;
	static Find(Outer: UObject, ResourceName: string): VREditorRadialMenuItem;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorRadialMenuItem;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorRadialMenuItem;
	SetLabel(Text: string): void;
	OnPressed(): void;
	OnLeaveHover(): void;
	OnEnterHover(): void;
	GetAngle(): number;
	static C(Other: UObject): VREditorRadialMenuItem;
}

declare class VREditorRadialMenu extends VREditorBaseUserWidget { 
	TrackpadPosition: Vector2D;
	TrackpadAngle: number;
	CurrentItem: VREditorRadialMenuItem;
	PreviousItem: VREditorRadialMenuItem;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorRadialMenu;
	static Find(Outer: UObject, ResourceName: string): VREditorRadialMenu;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorRadialMenu;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorRadialMenu;
	SetButtons(InitTopItem: VREditorRadialMenuItem,InitTopRightItem: VREditorRadialMenuItem,InitRightItem: VREditorRadialMenuItem,InitBottomRightItem: VREditorRadialMenuItem,InitBottomItem: VREditorRadialMenuItem,InitLeftBottomItem: VREditorRadialMenuItem,InitLeftItem: VREditorRadialMenuItem,InitTopLeftItem: VREditorRadialMenuItem): void;
	static C(Other: UObject): VREditorRadialMenu;
}

declare type EVREditorWidgetDrawingPolicy = string | symbol;
declare var EVREditorWidgetDrawingPolicy = { Always:'Always',Hovering:'Hovering', };
declare class VREditorWidgetComponent extends WidgetComponent { 
	DrawingPolicy: EVREditorWidgetDrawingPolicy;
	bIsHovering: boolean;
	bHasEverDrawn: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorWidgetComponent;
	static Find(Outer: UObject, ResourceName: string): VREditorWidgetComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorWidgetComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorWidgetComponent;
	static C(Other: UObject): VREditorWidgetComponent;
}

declare class VREditorFloatingUI extends Actor { 
	UserWidget: VREditorBaseUserWidget;
	WidgetComponent: VREditorWidgetComponent;
	UserWidgetClass: UnrealEngineClass;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorFloatingUI;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorFloatingUI;
	static C(Other: UObject): VREditorFloatingUI;
}

declare class VREditorDockableWindow extends VREditorFloatingUI { 
	WindowMeshComponent: StaticMeshComponent;
	SelectionBarMeshComponent: StaticMeshComponent;
	CloseButtonMeshComponent: StaticMeshComponent;
	SelectionBarMID: MaterialInstanceDynamic;
	SelectionBarTranslucentMID: MaterialInstanceDynamic;
	CloseButtonMID: MaterialInstanceDynamic;
	CloseButtonTranslucentMID: MaterialInstanceDynamic;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorDockableWindow;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorDockableWindow;
	static C(Other: UObject): VREditorDockableWindow;
}

declare class K2Node_InAppPurchase extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchase;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchase;
	static C(Other: UObject): K2Node_InAppPurchase;
}

declare class K2Node_InAppPurchaseQuery extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchaseQuery;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchaseQuery;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchaseQuery;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseQuery;
	static C(Other: UObject): K2Node_InAppPurchaseQuery;
}

declare class K2Node_InAppPurchaseRestore extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchaseRestore;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchaseRestore;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchaseRestore;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseRestore;
	static C(Other: UObject): K2Node_InAppPurchaseRestore;
}

declare class K2Node_LatentOnlineCall extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LatentOnlineCall;
	static Find(Outer: UObject, ResourceName: string): K2Node_LatentOnlineCall;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LatentOnlineCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentOnlineCall;
	static C(Other: UObject): K2Node_LatentOnlineCall;
}

declare class K2Node_LeaderboardFlush extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LeaderboardFlush;
	static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardFlush;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LeaderboardFlush;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardFlush;
	static C(Other: UObject): K2Node_LeaderboardFlush;
}

declare class K2Node_LeaderboardQuery extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LeaderboardQuery;
	static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardQuery;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LeaderboardQuery;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardQuery;
	static C(Other: UObject): K2Node_LeaderboardQuery;
}

declare class ContentBrowserFrontEndFilterExtension extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ContentBrowserFrontEndFilterExtension;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserFrontEndFilterExtension;
	static C(Other: UObject): ContentBrowserFrontEndFilterExtension;
}

declare class GameplayTagSearchFilter extends ContentBrowserFrontEndFilterExtension { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagSearchFilter;
	static Find(Outer: UObject, ResourceName: string): GameplayTagSearchFilter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagSearchFilter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagSearchFilter;
	static C(Other: UObject): GameplayTagSearchFilter;
}

declare class GameplayTagsK2Node_LiteralGameplayTag extends K2Node { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_LiteralGameplayTag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_LiteralGameplayTag;
	static C(Other: UObject): GameplayTagsK2Node_LiteralGameplayTag;
}

declare class GameplayTagsK2Node_MultiCompareBase extends K2Node { 
	NumberOfPins: number;
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareBase;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareBase;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainer extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
}

declare class GameplayTagsK2Node_SwitchGameplayTag extends K2Node_Switch { 
	PinTags: GameplayTag[];
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTag;
	static C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTag;
}

declare class GameplayTagsK2Node_SwitchGameplayTagContainer extends K2Node_Switch { 
	PinContainers: GameplayTagContainer[];
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTagContainer;
}

declare class GameLiveStreamingFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameLiveStreamingFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): GameLiveStreamingFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameLiveStreamingFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameLiveStreamingFunctionLibrary;
	static StopWebCam(): void;
	static StopBroadcastingGame(): void;
	static StartWebCam(DesiredWebCamWidth: number,DesiredWebCamHeight: number,bMirrorWebCamImage: boolean,bDrawSimpleWebCamVideo: boolean): void;
	static StartBroadcastingGame(LoginUserName: string,LoginPassword: string,FrameRate: number,ScreenScaling: number,bStartWebCam: boolean,DesiredWebCamWidth: number,DesiredWebCamHeight: number,bMirrorWebCamImage: boolean,bDrawSimpleWebCamVideo: boolean,bCaptureAudioFromComputer: boolean,bCaptureAudioFromMicrophone: boolean,CoverUpImage: Texture2D): void;
	static IsWebCamEnabled(): boolean;
	static IsBroadcastingGame(): boolean;
	static C(Other: UObject): GameLiveStreamingFunctionLibrary;
}

declare class BlueprintLiveStreamInfo { 
	GameName: string;
	StreamName: string;
	URL: string;
	clone() : BlueprintLiveStreamInfo;
	static C(Other: UObject): BlueprintLiveStreamInfo;
}

declare class QueryLiveStreamsCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnQueriedLiveStreams: UnrealEngineMulticastDelegate<(LiveStreams: BlueprintLiveStreamInfo[], bWasSuccessful: boolean) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): QueryLiveStreamsCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): QueryLiveStreamsCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): QueryLiveStreamsCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QueryLiveStreamsCallbackProxy;
	static QueryLiveStreams(GameName: string): QueryLiveStreamsCallbackProxy;
	static C(Other: UObject): QueryLiveStreamsCallbackProxy;
}

declare class MediaPlayer extends UObject { 
	OnEndReached: UnrealEngineMulticastDelegate<() => void>;
	OnMediaClosed: UnrealEngineMulticastDelegate<() => void>;
	OnMediaOpened: UnrealEngineMulticastDelegate<(OpenedUrl: string) => void>;
	OnMediaOpenFailed: UnrealEngineMulticastDelegate<(FailedUrl: string) => void>;
	OnPlaybackResumed: UnrealEngineMulticastDelegate<() => void>;
	OnPlaybackSuspended: UnrealEngineMulticastDelegate<() => void>;
	Looping: boolean;
	URL: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlayer;
	static Find(Outer: UObject, ResourceName: string): MediaPlayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaPlayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayer;
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
	IsReady(): boolean;
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
	static C(Other: UObject): MediaPlayer;
}

declare class MediaSoundWave extends SoundWave { 
	AudioTrackIndex: number;
	MediaPlayer: MediaPlayer;
	CurrentMediaPlayer: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaSoundWave;
	static Find(Outer: UObject, ResourceName: string): MediaSoundWave;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaSoundWave;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSoundWave;
	SetMediaPlayer(InMediaPlayer: MediaPlayer): void;
	static C(Other: UObject): MediaSoundWave;
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
	static Find(Outer: UObject, ResourceName: string): MediaTexture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaTexture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaTexture;
	SetMediaPlayer(InMediaPlayer: MediaPlayer): void;
	static C(Other: UObject): MediaTexture;
}

declare class MaterialExpressionSpriteTextureSampler extends MaterialExpressionTextureSampleParameter2D { 
	bSampleAdditionalTextures: boolean;
	AdditionalSlotIndex: number;
	SlotDisplayName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static Find(Outer: UObject, ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSpriteTextureSampler;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSpriteTextureSampler;
	static C(Other: UObject): MaterialExpressionSpriteTextureSampler;
}

declare class PaperSpriteSocket { 
	LocalTransform: Transform;
	SocketName: string;
	clone() : PaperSpriteSocket;
	static C(Other: UObject): PaperSpriteSocket;
}

declare type ESpriteCollisionMode = string | symbol;
declare var ESpriteCollisionMode = { None:'None',Use2DPhysics:'Use2DPhysics',Use3DPhysics:'Use3DPhysics', };
declare type ESpritePivotMode = string | symbol;
declare var ESpritePivotMode = { Top_Left:'Top_Left',Top_Center:'Top_Center',Top_Right:'Top_Right',Center_Left:'Center_Left',Center_Center:'Center_Center',Center_Right:'Center_Right',Bottom_Left:'Bottom_Left',Bottom_Center:'Bottom_Center',Bottom_Right:'Bottom_Right',Custom:'Custom', };
declare type ESpriteShapeType = string | symbol;
declare var ESpriteShapeType = { Box:'Box',Circle:'Circle',Polygon:'Polygon', };
declare class SpriteGeometryShape { 
	ShapeType: ESpriteShapeType;
	Vertices: Vector2D[];
	BoxSize: Vector2D;
	BoxPosition: Vector2D;
	Rotation: number;
	bNegativeWinding: boolean;
	clone() : SpriteGeometryShape;
	static C(Other: UObject): SpriteGeometryShape;
}

declare type ESpritePolygonMode = string | symbol;
declare var ESpritePolygonMode = { SourceBoundingBox:'SourceBoundingBox',TightBoundingBox:'TightBoundingBox',ShrinkWrapped:'ShrinkWrapped',FullyCustom:'FullyCustom',Diced:'Diced', };
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
	static C(Other: UObject): SpriteGeometryCollection;
}

declare type EPaperSpriteAtlasPadding = string | symbol;
declare var EPaperSpriteAtlasPadding = { DilateBorder:'DilateBorder',PadWithZero:'PadWithZero', };
declare class PaperSpriteAtlasSlot { 
	SpriteRef: any;
	AtlasIndex: number;
	X: number;
	Y: number;
	Width: number;
	Height: number;
	clone() : PaperSpriteAtlasSlot;
	static C(Other: UObject): PaperSpriteAtlasSlot;
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
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlas;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteAtlas;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): PaperSprite;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSprite;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSprite;
	static C(Other: UObject): PaperSprite;
}

declare class PaperFlipbookKeyFrame { 
	Sprite: PaperSprite;
	FrameRun: number;
	clone() : PaperFlipbookKeyFrame;
	static C(Other: UObject): PaperFlipbookKeyFrame;
}

declare type EFlipbookCollisionMode = string | symbol;
declare var EFlipbookCollisionMode = { NoCollision:'NoCollision',FirstFrameCollision:'FirstFrameCollision',EachFrameCollision:'EachFrameCollision', };
declare class PaperFlipbook extends UObject { 
	FramesPerSecond: number;
	KeyFrames: PaperFlipbookKeyFrame[];
	DefaultMaterial: MaterialInterface;
	CollisionSource: EFlipbookCollisionMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbook;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbook;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbook;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbook;
	IsValidKeyFrameIndex(Index: number): boolean;
	GetTotalDuration(): number;
	GetSpriteAtTime(Time: number,bClampToEnds: boolean): PaperSprite;
	GetSpriteAtFrame(FrameIndex: number): PaperSprite;
	GetNumKeyFrames(): number;
	GetNumFrames(): number;
	GetKeyFrameIndexAtTime(Time: number,bClampToEnds: boolean): number;
	static C(Other: UObject): PaperFlipbook;
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
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	GetSpriteMaterial(): MaterialInterface;
	GetPlayRate(): number;
	GetPlaybackPositionInFrames(): number;
	GetPlaybackPosition(): number;
	GetFlipbookLengthInFrames(): number;
	GetFlipbookLength(): number;
	GetFlipbookFramerate(): number;
	GetFlipbook(): PaperFlipbook;
	static C(Other: UObject): PaperFlipbookComponent;
}

declare class PaperCharacter extends Character { 
	Sprite: PaperFlipbookComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperCharacter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActor;
	static C(Other: UObject): PaperFlipbookActor;
}

declare class SpriteInstanceData { 
	Transform: Matrix;
	SourceSprite: PaperSprite;
	VertexColor: Color;
	MaterialIndex: number;
	clone() : SpriteInstanceData;
	static C(Other: UObject): SpriteInstanceData;
}

declare class PaperGroupedSpriteComponent extends MeshComponent { 
	InstanceMaterials: MaterialInterface[];
	PerInstanceSpriteData: SpriteInstanceData[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperGroupedSpriteComponent;
	static Find(Outer: UObject, ResourceName: string): PaperGroupedSpriteComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperGroupedSpriteComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteComponent;
	UpdateInstanceTransform(InstanceIndex: number,NewInstanceTransform: Transform,bWorldSpace: boolean,bMarkRenderStateDirty: boolean): boolean;
	UpdateInstanceColor(InstanceIndex: number,NewInstanceColor: LinearColor,bMarkRenderStateDirty: boolean): boolean;
	SortInstancesAlongAxis(WorldSpaceSortAxis: Vector): void;
	RemoveInstance(InstanceIndex: number): boolean;
	GetInstanceTransform(InstanceIndex: number,OutInstanceTransform?: Transform,bWorldSpace?: boolean): {OutInstanceTransform: Transform, $: boolean};
	GetInstanceCount(): number;
	ClearInstances(): void;
	AddInstance(Transform: Transform,Sprite: PaperSprite,bWorldSpace: boolean,Color: LinearColor): number;
	static C(Other: UObject): PaperGroupedSpriteComponent;
}

declare class PaperGroupedSpriteActor extends Actor { 
	RenderComponent: PaperGroupedSpriteComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperGroupedSpriteActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): PaperRuntimeSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperRuntimeSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): PaperSpriteComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteComponent;
	SetSpriteColor(NewColor: LinearColor): void;
	SetSprite(NewSprite: PaperSprite): boolean;
	GetSprite(): PaperSprite;
	static C(Other: UObject): PaperSpriteComponent;
}

declare class PaperSpriteActor extends Actor { 
	RenderComponent: PaperSpriteComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActor;
	static C(Other: UObject): PaperSpriteActor;
}

declare class PaperTerrainSplineComponent extends SplineComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainSplineComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainSplineComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainSplineComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	clone() : PaperTerrainMaterialRule;
	static C(Other: UObject): PaperTerrainMaterialRule;
}

declare class PaperTerrainMaterial extends DataAsset { 
	Rules: PaperTerrainMaterialRule[];
	InteriorFill: PaperSprite;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainMaterial;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainMaterial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainMaterial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): PaperTerrainComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainComponent;
	SetTerrainColor(NewColor: LinearColor): void;
	static C(Other: UObject): PaperTerrainComponent;
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
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainActor;
	static C(Other: UObject): PaperTerrainActor;
}

declare class IntMargin { 
	Left: number;
	Top: number;
	Right: number;
	Bottom: number;
	clone() : IntMargin;
	static C(Other: UObject): IntMargin;
}

declare class PaperTileMetadata { 
	UserDataName: string;
	CollisionData: SpriteGeometryCollection;
	TerrainMembership: number;
	clone() : PaperTileMetadata;
	static C(Other: UObject): PaperTileMetadata;
}

declare class PaperTileSetTerrain { 
	TerrainName: string;
	CenterTileIndex: number;
	clone() : PaperTileSetTerrain;
	static C(Other: UObject): PaperTileSetTerrain;
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
	static Find(Outer: UObject, ResourceName: string): PaperTileSet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSet;
	static C(Other: UObject): PaperTileSet;
}

declare class PaperTileInfo { 
	TileSet: PaperTileSet;
	PackedTileIndex: number;
	clone() : PaperTileInfo;
	static C(Other: UObject): PaperTileInfo;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileLayer;
	static Find(Outer: UObject, ResourceName: string): PaperTileLayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileLayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileLayer;
	static C(Other: UObject): PaperTileLayer;
}

declare type ETileMapProjectionMode = string | symbol;
declare var ETileMapProjectionMode = { Orthogonal:'Orthogonal',IsometricDiamond:'IsometricDiamond',IsometricStaggered:'IsometricStaggered',HexagonalStaggered:'HexagonalStaggered', };
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
	static Find(Outer: UObject, ResourceName: string): PaperTileMap;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMap;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): PaperTileMapComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static C(Other: UObject): PaperTileMapComponent;
}

declare class PaperTileMapActor extends Actor { 
	RenderComponent: PaperTileMapComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapActor;
	static C(Other: UObject): PaperTileMapActor;
}

declare class TileMapBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): TileMapBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapBlueprintLibrary;
	static MakeTile(TileIndex: number,TileSet: PaperTileSet,bFlipH: boolean,bFlipV: boolean,bFlipD: boolean): PaperTileInfo;
	static GetTileUserData(Tile: PaperTileInfo): string;
	static GetTileTransform(Tile: PaperTileInfo): Transform;
	static BreakTile(Tile: PaperTileInfo,TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
	static C(Other: UObject): TileMapBlueprintLibrary;
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
	clone() : LightPropagationVolumeSettings;
	static C(Other: UObject): LightPropagationVolumeSettings;
}

declare class LightPropagationVolumeBlendable extends UObject { 
	Settings: LightPropagationVolumeSettings;
	BlendWeight: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightPropagationVolumeBlendable;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendable;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightPropagationVolumeBlendable;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendable;
	static C(Other: UObject): LightPropagationVolumeBlendable;
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
	static Find(Outer: UObject, ResourceName: string): UdpMessagingSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): UdpMessagingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): DirectoryWatcher;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DirectoryWatcher;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DirectoryWatcher;
	Watch(Directory: string): void;
	Unwatch(): void;
	Contains(File: string): boolean;
	static C(Other: UObject): DirectoryWatcher;
}

declare class JavascriptContext extends UObject { 
	Paths: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptContext;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptContext;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptContext;
	WriteDTS(Target: string,bIncludingTooltip: boolean): boolean;
	WriteAliases(Target: string): boolean;
	SetContextId(Name: string): void;
	SetAsDebugContext(): void;
	RunScript(Script: string,bOutput: boolean): string;
	RunFile(Filename: string): void;
	ResetAsDebugContext(): void;
	ReadScriptFile(Filename: string): string;
	IsDebugContext(): boolean;
	GetScriptFileFullPath(Filename: string): string;
	Expose(Name: string,UObject: UObject): void;
	static C(Other: UObject): JavascriptContext;
}

declare class JavascriptAsset { 
	Name: string;
	Asset: StringAssetReference;
	clone() : JavascriptAsset;
	static C(Other: UObject): JavascriptAsset;
}

declare class JavascriptClassAsset { 
	Name: string;
	Class: UnrealEngineClass;
	clone() : JavascriptClassAsset;
	static C(Other: UObject): JavascriptClassAsset;
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
	static Find(Outer: UObject, ResourceName: string): JavascriptComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComponent;
	ResolveClass(Name: string): UnrealEngineClass;
	ResolveAsset(Name: string,bTryLoad: boolean): UObject;
	Invoke(Name: string): void;
	ForceGC(): void;
	Expose(ExposedAs: string,UObject: UObject): void;
	static C(Other: UObject): JavascriptComponent;
}

declare class JavascriptDelegate extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptDelegate;
	static Find(Outer: UObject, ResourceName: string): JavascriptDelegate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptDelegate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDelegate;
	Fire(): void;
	static C(Other: UObject): JavascriptDelegate;
}

declare class JavascriptGeneratedClass extends BlueprintGeneratedClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedClass;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedClass;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass;
	static C(Other: UObject): JavascriptGeneratedClass;
}

declare class JavascriptGeneratedClass_Native extends BlueprintGeneratedClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedClass_Native;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass_Native;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedClass_Native;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass_Native;
	static C(Other: UObject): JavascriptGeneratedClass_Native;
}

declare class JavascriptGeneratedFunction extends UFunction { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedFunction;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedFunction;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedFunction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedFunction;
	static C(Other: UObject): JavascriptGeneratedFunction;
}

declare class JavascriptGlobalDelegates extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptGlobalDelegates;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGlobalDelegates;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGlobalDelegates;
	UnbindAll(): void;
	Unbind(Key: string): void;
	RedirectorFollowed(PackageName: string,Redirector: UObject): void;
	PreLoadMap(): void;
	PreGarbageCollect(): void;
	PostLoadMap(): void;
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
	static C(Other: UObject): JavascriptGlobalDelegates;
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
	static C(Other: UObject): JavascriptHeapStatistics;
}

declare class JavascriptIsolate extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptIsolate;
	static Find(Outer: UObject, ResourceName: string): JavascriptIsolate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptIsolate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptIsolate;
	GetHeapStatistics(Statistics?: JavascriptHeapStatistics): {Statistics: JavascriptHeapStatistics};
	CreateContext(): JavascriptContext;
	static C(Other: UObject): JavascriptIsolate;
}

declare class JavascriptProfileNode { 
	clone() : JavascriptProfileNode;
	static C(Other: UObject): JavascriptProfileNode;
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

declare class JavascriptProfile extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptProfile;
	static Find(Outer: UObject, ResourceName: string): JavascriptProfile;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptProfile;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProfile;
	static Stop(Title: string): JavascriptProfile;
	static Start(Title: string,bRecordSamples: boolean): void;
	static SetSamplingInterval(us: number): void;
	static SetIdle(is_idle: boolean): void;
	GetTopDownRoot(): JavascriptProfileNode;
	GetSampleTimestamp(index: number): number;
	GetSamplesCount(): number;
	GetSample(index: number): JavascriptProfileNode;
	static C(Other: UObject): JavascriptProfile;
}

declare class JavascriptFunction { 
	clone() : JavascriptFunction;
	static C(Other: UObject): JavascriptFunction;
}

declare class JavascriptStreamableManager { 
	clone() : JavascriptStreamableManager;
	static C(Other: UObject): JavascriptStreamableManager;
	IsAsyncLoadComplete(Target: StringAssetReference): boolean;
	RequestAsyncLoad(TargetsToStream: StringAssetReference[],DelegateToCall: JavascriptFunction,Priority: number): void;
	SimpleAsyncLoad(Target: StringAssetReference,Priority: number): void;
	Unload(Target: StringAssetReference): void;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: StringAssetReference): boolean;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: StringAssetReference[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: StringAssetReference,Priority: number): void;
	static Unload(Manager: JavascriptStreamableManager,Target: StringAssetReference): void;
	static CreateStreamableManager(): JavascriptStreamableManager;
}

declare type ELogVerbosity_JS = string | symbol;
declare var ELogVerbosity_JS = { NoLogging:'NoLogging',Fatal:'Fatal',Error:'Error',Warning:'Warning',Display:'Display',Log:'Log',Verbose:'Verbose',VeryVerbose:'VeryVerbose', };
declare class JavascriptLogCategory { 
	clone() : JavascriptLogCategory;
	static C(Other: UObject): JavascriptLogCategory;
	Log(Verbosity: ELogVerbosity_JS,Message: string,FileName: string,LineNumber: number): void;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,FileName: string,LineNumber: number): void;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
}

declare class JavascriptLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLibrary;
	static WriteStringToFile(UObject: UObject,Filename: string,Data: string): boolean;
	static WriteFile(UObject: UObject,Filename: string): boolean;
	static V8_SetIdleTaskBudget(BudgetInSeconds: number): void;
	static V8_SetFlagsFromString(V8Flags: string): void;
	static UnregisterComponent(ActorComponent: ActorComponent): void;
	static Unload(Manager: JavascriptStreamableManager,Target: StringAssetReference): void;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: StringAssetReference,Priority: number): void;
	static SetRootComponent(Actor: Actor,Component: SceneComponent): void;
	static SetObjectFlags(Obj: UObject,Flags: number): void;
	static SetMobility(SceneComponent: SceneComponent,Type: EComponentMobility): void;
	static SetMobile(SceneComponent: SceneComponent): void;
	static SetClientTravel(Engine: Engine,InWorld: World,NextURL: string,InTravelType: ETravelType): void;
	static SegmentIntersection2D(SegmentStartA: Vector,SegmentEndA: Vector,SegmentStartB: Vector,SegmentEndB: Vector,IntersectionPoint?: Vector): {IntersectionPoint: Vector, $: boolean};
	static ReregisterComponent(ActorComponent: ActorComponent): void;
	static ReregisterAllComponents(Actor: Actor): void;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: StringAssetReference[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static RegisterComponent(ActorComponent: ActorComponent): void;
	static ReadStringFromFile(UObject: UObject,Filename: string): string;
	static ReadFile(UObject: UObject,Filename: string): boolean;
	static ReadDirectory(UObject: UObject,Directory: string,OutItems?: DirectoryItem[]): {OutItems: DirectoryItem[], $: boolean};
	static MarkRenderStateDirty(Component: ActorComponent): void;
	static MakeDirectory(Path: string,Tree: boolean): boolean;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,FileName: string,LineNumber: number): void;
	IsSuppressed(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS): boolean;
	static IsRegistered(ActorComponent: ActorComponent): boolean;
	static IsPlayInPreview(World: World): boolean;
	static IsPlayInEditor(World: World): boolean;
	static IsGameWorld(World: World): boolean;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: StringAssetReference): boolean;
	static HasUndo(Engine: Engine): boolean;
	static HasAnyPackageFlags(Package: Package,Flags: number): boolean;
	static HasAnyFlags(UObject: UObject,Flags: number): boolean;
	static HandleSeamlessTravelPlayer(GameMode: GameMode,C?: Controller): {C: Controller};
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
	static GetLineNumber(UNode: JavascriptProfileNode): number;
	static GetLevels(World: World): Level[];
	static GetLevel(Actor: Actor): Level;
	static GetLastRenderTime(Actor: Actor): number;
	static GetHitLineCount(UNode: JavascriptProfileNode): number;
	static GetHitCount(UNode: JavascriptProfileNode): number;
	static GetFunctionName(UNode: JavascriptProfileNode): string;
	static GetFileSize(UObject: UObject,Filename: string): number;
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
	GetCategoryName(Category: JavascriptLogCategory): string;
	static GetCallUid(UNode: JavascriptProfileNode): number;
	static GetBlueprintGeneratedClassFromPath(Path: string): UnrealEngineClass;
	static GetBlueprintGeneratedClass(Blueprint: Blueprint): UnrealEngineClass;
	static GetBailoutReason(UNode: JavascriptProfileNode): string;
	static GetArchetypePathName(UObject: UObject): string;
	static GetAllActorsOfClassAndTags(WorldContextObject: UObject,ActorClass: UnrealEngineClass,Tags_Accept: string[],Tags_Deny: string[],OutActors?: Actor[]): {OutActors: Actor[]};
	static FindObjectWithOuter(Outer: UObject,ClassToLookFor: UnrealEngineClass,NameToLookFor: string): UObject;
	static FileExists(Filename: string): boolean;
	static Duplicate(UObject: UObject,Outer: UObject,Name: string): UObject;
	static DirectoryExists(InDirectory: string): boolean;
	static DeleteDirectory(Path: string,RequireExists: boolean,Tree: boolean): boolean;
	static CreateStreamableManager(): JavascriptStreamableManager;
	static CreatePackage(Outer: UObject,PackageName: string): Package;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
	static CreateEnum(Outer: UObject,Name: string,DisplayNames: string[]): Enum;
	static AddDynamicBinding(Outer: UnrealEngineClass,BindingObject: DynamicBlueprintBinding): void;
	static Actor_GetWorld(Actor: Actor): World;
	static C(Other: UObject): JavascriptLibrary;
}

declare class JavascriptMemoryObject extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMemoryObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptMemoryObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptMemoryObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMemoryObject;
	static C(Other: UObject): JavascriptMemoryObject;
}

declare class JavascriptSharedMemoryRegion extends JavascriptMemoryObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSharedMemoryRegion;
	static Find(Outer: UObject, ResourceName: string): JavascriptSharedMemoryRegion;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptSharedMemoryRegion;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSharedMemoryRegion;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,bRead: boolean,bWrite: boolean,Size: number): JavascriptSharedMemoryRegion;
	static C(Other: UObject): JavascriptSharedMemoryRegion;
}

declare class JavascriptObject extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptObject;
	static C(Other: UObject): JavascriptObject;
}

declare class JavascriptOutputDevice extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptOutputDevice;
	static Find(Outer: UObject, ResourceName: string): JavascriptOutputDevice;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptOutputDevice;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptOutputDevice;
	OnMessage(Message: string,Verbosity: ELogVerbosity_JS,Category: string): void;
	static Log(Category: string,Verbosity: ELogVerbosity_JS,Filename: string,LineNumber: number,Message: string): void;
	Kill(): void;
	static C(Other: UObject): JavascriptOutputDevice;
}

declare class JavascriptProcess extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptProcess;
	static Find(Outer: UObject, ResourceName: string): JavascriptProcess;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptProcess;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProcess;
	WriteToPipe(Message: string,OutWritten?: string): {OutWritten: string, $: boolean};
	Wait(): void;
	Terminate(KillTree: boolean): void;
	static SetEnvironmentVar(VarName: string,VarValue: string): void;
	ReadFromPipe(): string;
	ReadArrayFromPipe(Array?: number[]): {Array: number[], $: boolean};
	static LaunchURL(URL: string,Parms: string,Error?: string): {Error: string};
	IsRunning(): boolean;
	static GetString(Key: string,bFlag: boolean): string;
	GetReturnCode(ReturnCode?: number): {ReturnCode: number, $: boolean};
	static GetEnvironmentVar(VarName: string): string;
	static Create(URL: string,Parms: string,bLaunchDetached: boolean,bLaunchHidden: boolean,bLaunchReallyHidden: boolean,PriorityModifier: number,OptionalWorkingDirectory: string,bUsePipe: boolean): JavascriptProcess;
	Close(): void;
	static CanLaunchURL(URL: string): boolean;
	static C(Other: UObject): JavascriptProcess;
}

declare class JavascriptSemaphore extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSemaphore;
	static Find(Outer: UObject, ResourceName: string): JavascriptSemaphore;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptSemaphore;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSemaphore;
	Unlock(): void;
	TryLock(NanosecondsToWait: number): boolean;
	Lock(): void;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,MaxLocks: number): JavascriptSemaphore;
	static C(Other: UObject): JavascriptSemaphore;
}

declare class JavascriptSettings extends UObject { 
	V8Flags: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSettings;
	static Find(Outer: UObject, ResourceName: string): JavascriptSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSettings;
	static C(Other: UObject): JavascriptSettings;
}

declare class InGameSceneAccessor extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InGameSceneAccessor;
	static Find(Outer: UObject, ResourceName: string): InGameSceneAccessor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InGameSceneAccessor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InGameSceneAccessor;
	Tick(DeltaTime: number): void;
	isBegunPlay(): boolean;
	Initialize(): InGameSceneAccessor;
	GetSceneWorld(): World;
	Destroy(): void;
	static C(Other: UObject): InGameSceneAccessor;
}

declare class JavascriptSlateStyle { 
	clone() : JavascriptSlateStyle;
	static C(Other: UObject): JavascriptSlateStyle;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUMGLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUMGLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGLibrary;
	static Unregister(StyleSet: JavascriptSlateStyle): void;
	static TakeWidget(Widget: Widget): JavascriptSlateWidget;
	static SetCoreContentRoot(StyleSet: JavascriptSlateStyle,InCoreContentRootDir: string): void;
	static SetContentRoot(StyleSet: JavascriptSlateStyle,InContentRootDir: string): void;
	static RootToCoreContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static RootToContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static Register(StyleSet: JavascriptSlateStyle): void;
	static GenerateDynamicImageResource(InDynamicBrushName: string): Vector2D;
	static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
	static AddWindowAsNativeChild(NewWindow: JavascriptSlateWidget,RootWindow: JavascriptSlateWidget): void;
	static AddWindow(NewWindow: JavascriptSlateWidget): void;
	static AddSound(StyleSet: JavascriptSlateStyle,PropertyName: string,Sound: SlateSound): void;
	static AddImageBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	static AddFontInfo(StyleSet: JavascriptSlateStyle,PropertyName: string,FontInfo: SlateFontInfo): void;
	static AddBoxBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddBorderBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static C(Other: UObject): JavascriptUMGLibrary;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptComboButton;
	static Find(Outer: UObject, ResourceName: string): JavascriptComboButton;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptComboButton;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComboButton;
	SetIsOpen(InIsOpen: boolean,bFocusMenu: boolean): void;
	static C(Other: UObject): JavascriptComboButton;
}

declare class JavascriptGameViewport extends ContentWidget { 
	BackgroundColor: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGameViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptGameViewport;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGameViewport;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGameViewport;
	Spawn(ActorClass: UnrealEngineClass): Actor;
	SetViewRotation(Rotation: Rotator): void;
	SetViewLocation(Location: Vector): void;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	static C(Other: UObject): JavascriptGameViewport;
}

declare type EJavasrciptUserInterfaceActionType = string | symbol;
declare var EJavasrciptUserInterfaceActionType = { Button:'Button',ToggleButton:'ToggleButton',RadioButton:'RadioButton',Check:'Check', };
declare class JavascriptUICommand { 
	Id: string;
	FriendlyName: string;
	Description: string;
	DefaultChord: InputChord;
	ActionType: EJavasrciptUserInterfaceActionType;
	clone() : JavascriptUICommand;
	static C(Other: UObject): JavascriptUICommand;
}

declare class JavascriptUICommandInfo { 
	clone() : JavascriptUICommandInfo;
	static C(Other: UObject): JavascriptUICommandInfo;
}

declare class JavascriptBindingContext { 
	clone() : JavascriptBindingContext;
	static C(Other: UObject): JavascriptBindingContext;
	Destroy(): void;
	UI_COMMAND_Function(Command: JavascriptUICommand): JavascriptUICommandInfo;
	static Destroy(Context: JavascriptBindingContext): void;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand): JavascriptUICommandInfo;
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
}

declare type EJavascriptExtensionHook = string | symbol;
declare var EJavascriptExtensionHook = { Before:'Before',After:'After',First:'First', };
declare class JavascriptUICommandList { 
	clone() : JavascriptUICommandList;
	static C(Other: UObject): JavascriptUICommandList;
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
}

declare class JavascriptExtensionBase { 
	clone() : JavascriptExtensionBase;
	static C(Other: UObject): JavascriptExtensionBase;
}

declare class JavascriptMenuBuilder { 
	clone() : JavascriptMenuBuilder;
	static C(Other: UObject): JavascriptMenuBuilder;
	AddPullDownMenu(InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	AddSeparator(): {Builder: JavascriptMenuBuilder};
	AddToolBarButton(CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	AddWidget(Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	BeginSection(InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
	EndSection(): {Builder: JavascriptMenuBuilder};
	PopCommandList(): {Builder: JavascriptMenuBuilder};
	PushCommandList(List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
}

declare class JavascriptExtender { 
	clone() : JavascriptExtender;
	static C(Other: UObject): JavascriptExtender;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMenuLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptMenuLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuLibrary;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand): JavascriptUICommandInfo;
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
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
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static C(Other: UObject): JavascriptMenuLibrary;
}

declare class JavascriptMultiBox extends Widget { 
	OnHook: UnrealEngineDelegate<(Id: string, Self: JavascriptMultiBox, CurrentBuilder: JavascriptMenuBuilder) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMultiBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptMultiBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox;
	static Bind(Builder: JavascriptMenuBuilder): void;
	AddSubMenu(Builder?: JavascriptMenuBuilder,Id?: string,Label?: string,ToolTip?: string,bInOpenSubMenuOnClick?: boolean): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(Builder?: JavascriptMenuBuilder,Id?: string,Label?: string,ToolTip?: string): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject): JavascriptMultiBox;
}

declare class JavascriptSlateTextRun { 
	clone() : JavascriptSlateTextRun;
	static C(Other: UObject): JavascriptSlateTextRun;
}

declare class JavascriptTextModel extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTextModel;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextModel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptTextModel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextModel;
	SetString(String: string): void;
	GetString(): string;
	CreateRun(MessageTextStyle: TextBlockStyle,BeginIndex: number,EndIndex: number): JavascriptSlateTextRun;
	static C(Other: UObject): JavascriptTextModel;
}

declare class JavascriptTextLayout { 
	clone() : JavascriptTextLayout;
	static C(Other: UObject): JavascriptTextLayout;
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
	bIsReadOnly: boolean;
	bAlwaysShowScrollbars: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMultiLineEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiLineEditableTextBox;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptMultiLineEditableTextBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiLineEditableTextBox;
	ScrollTo(Line: number,Offset: number): void;
	Refresh(): void;
	GoTo(Line: number,Offset: number): void;
	static C(Other: UObject): JavascriptMultiLineEditableTextBox;
}

declare class JavascriptRichTextBlockHyperlinkDecorator extends RichTextBlockDecorator { 
	HyperlinkId: string;
	OnClick: UnrealEngineMulticastDelegate<(Self: JavascriptRichTextBlockHyperlinkDecorator) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static Find(Outer: UObject, ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptRichTextBlockHyperlinkDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRichTextBlockHyperlinkDecorator;
	GetMetadata(Key: string): string;
	static C(Other: UObject): JavascriptRichTextBlockHyperlinkDecorator;
}

declare class JavascriptSearchBox extends Widget { 
	OnTextChanged: UnrealEngineMulticastDelegate<(Text: string) => void>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(Text: string, CommitMethod: ETextCommit) => void>;
	Text: string;
	TextDelegate: UnrealEngineDelegate<() => string>;
	HintText: string;
	HintTextDelegate: UnrealEngineDelegate<() => string>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSearchBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptSearchBox;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptSearchBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSearchBox;
	SetText(InText: string): void;
	SetHintText(InHintText: string): void;
	static C(Other: UObject): JavascriptSearchBox;
}

declare class JavascriptStyleSet { 
	StyleSetName: string;
	clone() : JavascriptStyleSet;
	static C(Other: UObject): JavascriptStyleSet;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptStyleSetLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptStyleSetLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptStyleSetLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptStyleSetLibrary;
	static GetVector(Handle: JavascriptStyleSet,StyleName: string): Vector2D;
	static GetTextBlockStyle(Handle: JavascriptStyleSet,StyleName: string): TextBlockStyle;
	static GetSound(Handle: JavascriptStyleSet,StyleName: string): SlateSound;
	static GetSlateColor(Handle: JavascriptStyleSet,StyleName: string): SlateColor;
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
	static C(Other: UObject): JavascriptStyleSetLibrary;
}

declare class JavascriptTextBlock extends TextBlock { 
	HighlightText: string;
	HighlightTextDelegate: UnrealEngineDelegate<() => string>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTextBlock;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextBlock;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptTextBlock;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextBlock;
	SetHighlightText(InHighlightText: string): void;
	static C(Other: UObject): JavascriptTextBlock;
}

declare class JavascriptTileView extends TileView { 
	JavascriptContext: JavascriptContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTileView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTileView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptTileView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTileView;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	OnClick(UObject: UObject): void;
	static C(Other: UObject): JavascriptTileView;
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
	static C(Other: UObject): TableColumnHeaderStyle;
}

declare class SplitterStyle extends SlateWidgetStyle { 
	HandleNormalBrush: SlateBrush;
	HandleHighlightBrush: SlateBrush;
	clone() : SplitterStyle;
	static C(Other: UObject): SplitterStyle;
}

declare class HeaderRowStyle extends SlateWidgetStyle { 
	ColumnStyle: TableColumnHeaderStyle;
	LastColumnStyle: TableColumnHeaderStyle;
	ColumnSplitterStyle: SplitterStyle;
	BackgroundBrush: SlateBrush;
	ForegroundColor: SlateColor;
	clone() : HeaderRowStyle;
	static C(Other: UObject): HeaderRowStyle;
}

declare class TableRowStyle extends SlateWidgetStyle { 
	SelectorFocusedBrush: SlateBrush;
	ActiveHoveredBrush: SlateBrush;
	ActiveBrush: SlateBrush;
	InactiveHoveredBrush: SlateBrush;
	InactiveBrush: SlateBrush;
	EvenRowBackgroundHoveredBrush: SlateBrush;
	EvenRowBackgroundBrush: SlateBrush;
	OddRowBackgroundHoveredBrush: SlateBrush;
	OddRowBackgroundBrush: SlateBrush;
	TextColor: SlateColor;
	SelectedTextColor: SlateColor;
	DropIndicator_Above: SlateBrush;
	DropIndicator_Onto: SlateBrush;
	DropIndicator_Below: SlateBrush;
	clone() : TableRowStyle;
	static C(Other: UObject): TableRowStyle;
}

declare class JavascriptColumn { 
	Id: string;
	Width: number;
	Widget: Widget;
	clone() : JavascriptColumn;
	static C(Other: UObject): JavascriptColumn;
}

declare class JavascriptTreeView extends TableViewBase { 
	OnGenerateRowEvent: UnrealEngineDelegate<(UObject: UObject, Id: string, Instance: JavascriptTreeView) => Widget>;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTreeView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTreeView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptTreeView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTreeView;
	SetSingleExpandedItem(InItem: UObject): void;
	SetSelection(SoleSelectedItem: UObject): void;
	SetItemExpansion(InItem: UObject,InShouldExpandItem: boolean): void;
	RequestTreeRefresh(): void;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	IsItemExpanded(InItem: UObject): boolean;
	GetSelectedItems(OutItems?: UObject[]): {OutItems: UObject[]};
	static C(Other: UObject): JavascriptTreeView;
}

declare class JavascriptListView extends JavascriptTreeView { 
	ItemHeight: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptListView;
	static Find(Outer: UObject, ResourceName: string): JavascriptListView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptListView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptListView;
	SetSelection(SoleSelectedItem: UObject): void;
	RequestListRefresh(): void;
	OnClick(UObject: UObject): void;
	GetSelectedItems(OutItems?: UObject[]): {OutItems: UObject[]};
	static C(Other: UObject): JavascriptListView;
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
	CommandInfos: JavascriptUICommandInfo[];
	BindingContext: JavascriptBindingContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUICommands;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUICommands;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands;
	Uninitialize(): void;
	Unbind(List: JavascriptUICommandList): void;
	Refresh(): void;
	Initialize(): void;
	GetAction(Id: string): JavascriptUICommandInfo;
	Discard(): void;
	Commit(): void;
	static BroadcastCommandsChanged(): void;
	Bind(List: JavascriptUICommandList): void;
	static C(Other: UObject): JavascriptUICommands;
}

declare class JavascriptUMGBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUMGBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUMGBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGBlueprintLibrary;
	static SlateColor_UseSubduedForeground(): SlateColor;
	static SlateColor_UseForeground(): SlateColor;
	static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
	static GetAsText(TextLayout: JavascriptTextLayout): string;
	static DrawSpaceSpline(Context?: PaintContext,InStart?: Vector2D,InStartDir?: Vector2D,InEnd?: Vector2D,InEndDir?: Vector2D,InThickness?: number,InTint?: LinearColor): {Context: PaintContext};
	static ClearLines(TextLayout?: JavascriptTextLayout): {TextLayout: JavascriptTextLayout};
	static AddLine(TextLayout?: JavascriptTextLayout,Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	static C(Other: UObject): JavascriptUMGBlueprintLibrary;
}

declare class JavascriptWidget extends UserWidget { 
	JavascriptContext: JavascriptContext;
	ContentSlot: PanelSlot;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptWidget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptWidget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWidget;
	SetRootWidget(Widget: Widget): void;
	RemoveChild(): boolean;
	OnListenForInputAction(ActionName: string,EventType: EInputEvent,bConsume: boolean): void;
	OnInputActionByName(ActionName: string): void;
	static HasValidCachedWidget(Widget: Widget): boolean;
	static CallSynchronizeProperties(WidgetOrSlot: Visual): void;
	AddChild(Content: Widget): PanelSlot;
	static C(Other: UObject): JavascriptWidget;
}

declare type EJavascriptWindowType = string | symbol;
declare var EJavascriptWindowType = { Normal:'Normal',Menu:'Menu',ToolTip:'ToolTip',Notification:'Notification',CursorDecorator:'CursorDecorator', };
declare class WindowStyle extends SlateWidgetStyle { 
	MinimizeButtonStyle: ButtonStyle;
	MaximizeButtonStyle: ButtonStyle;
	RestoreButtonStyle: ButtonStyle;
	CloseButtonStyle: ButtonStyle;
	TitleTextStyle: TextBlockStyle;
	ActiveTitleBrush: SlateBrush;
	InactiveTitleBrush: SlateBrush;
	FlashTitleBrush: SlateBrush;
	OutlineBrush: SlateBrush;
	OutlineColor: SlateColor;
	BorderBrush: SlateBrush;
	BackgroundBrush: SlateBrush;
	ChildBackgroundBrush: SlateBrush;
	clone() : WindowStyle;
	static C(Other: UObject): WindowStyle;
}

declare type EJavascriptAutoCenter = string | symbol;
declare var EJavascriptAutoCenter = { None:'None',PrimaryWorkArea:'PrimaryWorkArea',PreferredWorkArea:'PreferredWorkArea', };
declare type EJavascriptWindowTransparency = string | symbol;
declare var EJavascriptWindowTransparency = { None:'None',PerWindow:'PerWindow', };
declare type EJavascriptSizingRule = string | symbol;
declare var EJavascriptSizingRule = { FixedSize:'FixedSize',Autosized:'Autosized',UserSized:'UserSized', };
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptWindow;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptWindow;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static C(Other: UObject): JavascriptWindow;
}

declare type EJavascriptHttpRequestStatus = string | symbol;
declare var EJavascriptHttpRequestStatus = { NotStarted:'NotStarted',Processing:'Processing',Failed:'Failed',Succeeded:'Succeeded', };
declare class JavascriptHttpRequest extends UObject { 
	OnComplete: UnrealEngineDelegate<(successful: boolean) => void>;
	OnProgress: UnrealEngineDelegate<(sent: number, recv: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptHttpRequest;
	static Find(Outer: UObject, ResourceName: string): JavascriptHttpRequest;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptHttpRequest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptHttpRequest;
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
	static C(Other: UObject): JavascriptHttpRequest;
}

declare class JavascriptWebSocket extends UObject { 
	OnReceived: UnrealEngineMulticastDelegate<() => void>;
	OnConnected: UnrealEngineMulticastDelegate<() => void>;
	OnError: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWebSocket;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocket;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptWebSocket;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocket;
	static C(Other: UObject): JavascriptWebSocket;
}

declare class JavascriptWebSocketServer extends UObject { 
	OnConnected: UnrealEngineMulticastDelegate<(WebSocket: JavascriptWebSocket) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWebSocketServer;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocketServer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptWebSocketServer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocketServer;
	static C(Other: UObject): JavascriptWebSocketServer;
}

declare class FlipbookEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FlipbookEditorSettings;
	static Find(Outer: UObject, ResourceName: string): FlipbookEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FlipbookEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlipbookEditorSettings;
	static C(Other: UObject): FlipbookEditorSettings;
}

declare type ESpriteExtractMode = string | symbol;
declare var ESpriteExtractMode = { Auto:'Auto',Grid:'Grid', };
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
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpritesSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperExtractSpritesSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpriteGridSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperExtractSpriteGridSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpriteGridSettings;
	static C(Other: UObject): PaperExtractSpriteGridSettings;
}

declare class PaperFlipbookActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActorFactory;
	static C(Other: UObject): PaperFlipbookActorFactory;
}

declare class PaperFlipbookFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): PaperImporterSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperImporterSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperImporterSettings;
	static C(Other: UObject): PaperImporterSettings;
}

declare class PaperSpriteActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActorFactory;
	static C(Other: UObject): PaperSpriteActorFactory;
}

declare class PaperSpriteAtlasFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteAtlasFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlasFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteAtlasFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlasFactory;
	static C(Other: UObject): PaperSpriteAtlasFactory;
}

declare class PaperSpriteFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteFactory;
	static C(Other: UObject): PaperSpriteFactory;
}

declare class PaperSpriteThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteThumbnailRenderer;
	static C(Other: UObject): PaperSpriteThumbnailRenderer;
}

declare class PaperFlipbookThumbnailRenderer extends PaperSpriteThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookThumbnailRenderer;
	static C(Other: UObject): PaperFlipbookThumbnailRenderer;
}

declare class PaperTileMapFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapFactory;
	static C(Other: UObject): PaperTileMapFactory;
}

declare class PaperTileMapPromotionFactory extends Factory { 
	AssetToRename: PaperTileMap;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapPromotionFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapPromotionFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapPromotionFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapPromotionFactory;
	static C(Other: UObject): PaperTileMapPromotionFactory;
}

declare class PaperTileSetFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSetFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSetFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetFactory;
	static C(Other: UObject): PaperTileSetFactory;
}

declare class PaperTileSetThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSetThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSetThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetThumbnailRenderer;
	static C(Other: UObject): PaperTileSetThumbnailRenderer;
}

declare class SpriteEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpriteEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SpriteEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SpriteEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpriteEditorSettings;
	static C(Other: UObject): SpriteEditorSettings;
}

declare class TerrainSplineActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TerrainSplineActorFactory;
	static Find(Outer: UObject, ResourceName: string): TerrainSplineActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TerrainSplineActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TerrainSplineActorFactory;
	static C(Other: UObject): TerrainSplineActorFactory;
}

declare class TileMapActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapActorFactory;
	static Find(Outer: UObject, ResourceName: string): TileMapActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapActorFactory;
	static C(Other: UObject): TileMapActorFactory;
}

declare class TileSetImportMapping { 
	SourceName: string;
	ImportedTileSet: any;
	ImportedTexture: any;
	clone() : TileSetImportMapping;
	static C(Other: UObject): TileSetImportMapping;
}

declare class TileMapAssetImportData extends AssetImportData { 
	TileSetMap: TileSetImportMapping[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapAssetImportData;
	static Find(Outer: UObject, ResourceName: string): TileMapAssetImportData;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapAssetImportData;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapAssetImportData;
	static C(Other: UObject): TileMapAssetImportData;
}

declare class TileMapEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileMapEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): TileSetEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileSetEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): TileSheetPaddingFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileSheetPaddingFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSheetPaddingFactory;
	static C(Other: UObject): TileSheetPaddingFactory;
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
	static Find(Outer: UObject, ResourceName: string): InternationalizationExportSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InternationalizationExportSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InternationalizationExportSettings;
	static C(Other: UObject): InternationalizationExportSettings;
}

declare class TranslationPickerSettings extends UObject { 
	bSubmitTranslationPickerChangesToLocalizationService: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TranslationPickerSettings;
	static Find(Outer: UObject, ResourceName: string): TranslationPickerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TranslationPickerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationPickerSettings;
	static C(Other: UObject): TranslationPickerSettings;
}

declare class TranslationChange { 
	Version: string;
	DateAndTime: DateTime;
	Source: string;
	Translation: string;
	clone() : TranslationChange;
	static C(Other: UObject): TranslationChange;
}

declare class TranslationContextInfo { 
	Key: string;
	Context: string;
	Changes: TranslationChange[];
	clone() : TranslationContextInfo;
	static C(Other: UObject): TranslationContextInfo;
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
	static Find(Outer: UObject, ResourceName: string): TranslationUnit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TranslationUnit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationUnit;
	static C(Other: UObject): TranslationUnit;
}

declare class PixelInspectorView extends UObject { 
	FinalColor: LinearColor;
	SceneColor: LinearColor;
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
	SubSurfaceColor: LinearColor;
	SubsurfaceProfile: Vector;
	Opacity: number;
	ClearCoat: number;
	ClearCoatRoughness: number;
	WorldNormal: Vector;
	BackLit: number;
	Cloth: number;
	EyeTangent: Vector;
	IrisMask: number;
	IrisDistance: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PixelInspectorView;
	static Find(Outer: UObject, ResourceName: string): PixelInspectorView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PixelInspectorView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PixelInspectorView;
	static C(Other: UObject): PixelInspectorView;
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
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheet;
	static C(Other: UObject): PaperSpriteSheet;
}

declare class PaperSpriteSheetImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheetImportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheetImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetImportFactory;
	static C(Other: UObject): PaperSpriteSheetImportFactory;
}

declare class PaperSpriteSheetReimportFactory extends PaperSpriteSheetImportFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheetReimportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetReimportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheetReimportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetReimportFactory;
	static C(Other: UObject): PaperSpriteSheetReimportFactory;
}

declare class PaperTiledImporterFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTiledImporterFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTiledImporterFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTiledImporterFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTiledImporterFactory;
	static C(Other: UObject): PaperTiledImporterFactory;
}

declare class LightPropagationVolumeBlendableFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightPropagationVolumeBlendableFactory;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendableFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightPropagationVolumeBlendableFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendableFactory;
	static C(Other: UObject): LightPropagationVolumeBlendableFactory;
}

declare class MyPluginStruct { 
	TestString: string;
	clone() : MyPluginStruct;
	static C(Other: UObject): MyPluginStruct;
}

declare class MyPluginObject extends UObject { 
	MyStruct: MyPluginStruct;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MyPluginObject;
	static Find(Outer: UObject, ResourceName: string): MyPluginObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MyPluginObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	MarketplaceURL: string;
	SupportURL: string;
	bCanContainContent: boolean;
	bIsBetaVersion: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PluginMetadataObject;
	static Find(Outer: UObject, ResourceName: string): PluginMetadataObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PluginMetadataObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	static C(Other: UObject): PluginMetadataObject;
}

declare class SpeedTreeImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSpeedTreeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject): ReimportSpeedTreeFactory;
}

declare type ETutorialContent = string | symbol;
declare var ETutorialContent = { None:'None',Text:'Text',UDNExcerpt:'UDNExcerpt',RichText:'RichText', };
declare class TutorialContent { 
	Type: ETutorialContent;
	Content: string;
	ExcerptName: string;
	Text: string;
	clone() : TutorialContent;
	static C(Other: UObject): TutorialContent;
}

declare type ETutorialAnchorIdentifier = string | symbol;
declare var ETutorialAnchorIdentifier = { None:'None',NamedWidget:'NamedWidget',Asset:'Asset', };
declare class TutorialContentAnchor { 
	Type: ETutorialAnchorIdentifier;
	WrapperIdentifier: string;
	Asset: StringAssetReference;
	bDrawHighlight: boolean;
	TabToFocusOrOpen: string;
	FriendlyName: string;
	GUIDString: string;
	OuterName: string;
	clone() : TutorialContentAnchor;
	static C(Other: UObject): TutorialContentAnchor;
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
	static C(Other: UObject): TutorialWidgetContent;
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
	static C(Other: UObject): TutorialStage;
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
	static Find(Outer: UObject, ResourceName: string): EditorTutorial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static C(Other: UObject): EditorTutorial;
}

declare class EditorTutorialFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialFactory;
	static C(Other: UObject): EditorTutorialFactory;
}

declare class EditorTutorialImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialImportFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	clone() : TutorialCategory;
	static C(Other: UObject): TutorialCategory;
}

declare class TutorialContext { 
	Context: string;
	BrowserFilter: string;
	AttractTutorial: StringClassReference;
	LaunchTutorial: StringClassReference;
	clone() : TutorialContext;
	static C(Other: UObject): TutorialContext;
}

declare class EditorTutorialSettings extends UObject { 
	bDisableAllTutorialAlerts: boolean;
	Categories: TutorialCategory[];
	StartupTutorial: StringClassReference;
	TutorialContexts: TutorialContext[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialSettings;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialSettings;
	static C(Other: UObject): EditorTutorialSettings;
}

declare class TutorialSettings extends UObject { 
	Categories: TutorialCategory[];
	StartupTutorial: StringClassReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TutorialSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TutorialSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialSettings;
	static C(Other: UObject): TutorialSettings;
}

declare class TutorialProgress { 
	Tutorial: StringClassReference;
	CurrentStage: number;
	bUserDismissed: boolean;
	clone() : TutorialProgress;
	static C(Other: UObject): TutorialProgress;
}

declare class TutorialStateSettings extends UObject { 
	TutorialsProgress: TutorialProgress[];
	bDismissedAllTutorials: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TutorialStateSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialStateSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TutorialStateSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialStateSettings;
	static C(Other: UObject): TutorialStateSettings;
}

declare type ESearchEngine = string | symbol;
declare var ESearchEngine = { Google:'Google',Bing:'Bing', };
declare class SuperSearchSettings extends DeveloperSettings { 
	SearchEngine: ESearchEngine;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SuperSearchSettings;
	static Find(Outer: UObject, ResourceName: string): SuperSearchSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SuperSearchSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SuperSearchSettings;
	static C(Other: UObject): SuperSearchSettings;
}

declare class ControlCustomization { 
	Color: LinearColor;
	clone() : ControlCustomization;
	static C(Other: UObject): ControlCustomization;
}

declare class TextCustomization { 
	Font: string;
	Color: LinearColor;
	clone() : TextCustomization;
	static C(Other: UObject): TextCustomization;
}

declare class CodeEditorCustomization extends UObject { 
	Controls: ControlCustomization[];
	Text: TextCustomization[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CodeEditorCustomization;
	static Find(Outer: UObject, ResourceName: string): CodeEditorCustomization;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CodeEditorCustomization;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CodeEditorCustomization;
	static C(Other: UObject): CodeEditorCustomization;
}

declare class CodeProjectFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CodeProjectFactory;
	static Find(Outer: UObject, ResourceName: string): CodeProjectFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CodeProjectFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CodeProjectFactory;
	static C(Other: UObject): CodeProjectFactory;
}

declare type ECodeProjectItemType = string | symbol;
declare var ECodeProjectItemType = { Project:'Project',Folder:'Folder',File:'File', };
declare class CodeProjectItem extends UObject { 
	Type: ECodeProjectItemType;
	Name: string;
	Extension: string;
	Path: string;
	Children: CodeProjectItem[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CodeProjectItem;
	static Find(Outer: UObject, ResourceName: string): CodeProjectItem;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CodeProjectItem;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CodeProjectItem;
	static C(Other: UObject): CodeProjectItem;
}

declare class CodeProject extends CodeProjectItem { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CodeProject;
	static Find(Outer: UObject, ResourceName: string): CodeProject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CodeProject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CodeProject;
	static C(Other: UObject): CodeProject;
}

declare class WebSocketConnection extends NetConnection { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WebSocketConnection;
	static Find(Outer: UObject, ResourceName: string): WebSocketConnection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WebSocketConnection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketConnection;
	static C(Other: UObject): WebSocketConnection;
}

declare class WebSocketNetDriver extends NetDriver { 
	WebSocketPort: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WebSocketNetDriver;
	static Find(Outer: UObject, ResourceName: string): WebSocketNetDriver;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WebSocketNetDriver;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketNetDriver;
	static C(Other: UObject): WebSocketNetDriver;
}

declare class MediaPlayerFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlayerFactory;
	static Find(Outer: UObject, ResourceName: string): MediaPlayerFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaPlayerFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerFactory;
	static C(Other: UObject): MediaPlayerFactory;
}

declare class MediaPlayerFactoryNew extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlayerFactoryNew;
	static Find(Outer: UObject, ResourceName: string): MediaPlayerFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaPlayerFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayerFactoryNew;
	static C(Other: UObject): MediaPlayerFactoryNew;
}

declare class MediaSoundWaveFactoryNew extends Factory { 
	InitialMediaPlayer: MediaPlayer;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaSoundWaveFactoryNew;
	static Find(Outer: UObject, ResourceName: string): MediaSoundWaveFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaSoundWaveFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSoundWaveFactoryNew;
	static C(Other: UObject): MediaSoundWaveFactoryNew;
}

declare class MediaTextureFactoryNew extends Factory { 
	InitialMediaPlayer: MediaPlayer;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaTextureFactoryNew;
	static Find(Outer: UObject, ResourceName: string): MediaTextureFactoryNew;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaTextureFactoryNew;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static SetDefaultSubobjectClass(Name: string): void;
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
	static Find(Outer: UObject, ResourceName: string): ArchVisCharMovementComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ArchVisCharMovementComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharMovementComponent;
	static C(Other: UObject): ArchVisCharMovementComponent;
}

declare class ComponentReference { 
	OtherActor: Actor;
	ComponentProperty: string;
	clone() : ComponentReference;
	static C(Other: UObject): ComponentReference;
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
	CableUpDir: Vector;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CableComponent;
	static Find(Outer: UObject, ResourceName: string): CableComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CableComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableComponent;
	SetAttachEndTo(Actor: Actor,ComponentProperty: string): void;
	GetAttachedComponent(): SceneComponent;
	GetAttachedActor(): Actor;
	static C(Other: UObject): CableComponent;
}

declare class CableActor extends Actor { 
	CableComponent: CableComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CableActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableActor;
	static C(Other: UObject): CableActor;
}

declare class CustomMeshTriangle { 
	Vertex0: Vector;
	Vertex1: Vector;
	Vertex2: Vector;
	clone() : CustomMeshTriangle;
	static C(Other: UObject): CustomMeshTriangle;
}

declare class CustomMeshComponent extends MeshComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CustomMeshComponent;
	static Find(Outer: UObject, ResourceName: string): CustomMeshComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CustomMeshComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomMeshComponent;
	SetCustomMeshTriangles(Triangles: CustomMeshTriangle[]): boolean;
	ClearCustomMeshTriangles(): void;
	AddCustomMeshTriangles(Triangles: CustomMeshTriangle[]): void;
	static C(Other: UObject): CustomMeshComponent;
}

declare class HmdUserProfileField { 
	FieldName: string;
	FieldValue: string;
	clone() : HmdUserProfileField;
	static C(Other: UObject): HmdUserProfileField;
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
	static C(Other: UObject): HmdUserProfile;
	GetUserProfile(): {Profile: HmdUserProfile, $: boolean};
	static GetUserProfile(Profile?: HmdUserProfile): {Profile: HmdUserProfile, $: boolean};
}

declare class OculusFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OculusFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): OculusFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OculusFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusFunctionLibrary;
	static ShowLoadingSplashScreen(): void;
	static SetPositionScale3D(PosScale3D: Vector): void;
	static SetLoadingSplashParams(TexturePath: string,DistanceInMeters: Vector,SizeInMeters: Vector2D,RotationAxis: Vector,RotationDeltaInDeg: number): void;
	static SetBaseRotationAndPositionOffset(BaseRot: Rotator,PosOffset: Vector,Options: EOrientPositionSelector): void;
	static SetBaseRotationAndBaseOffsetInMeters(Rotation: Rotator,BaseOffsetInMeters: Vector,Options: EOrientPositionSelector): void;
	static IsPlayerControllerFollowHmdEnabled(): boolean;
	static IsAutoLoadingSplashScreenEnabled(): boolean;
	static HideLoadingSplashScreen(bClear: boolean): void;
	static GetUserProfile(Profile?: HmdUserProfile): {Profile: HmdUserProfile, $: boolean};
	static GetRawSensorData(AngularAcceleration?: Vector,LinearAcceleration?: Vector,AngularVelocity?: Vector,LinearVelocity?: Vector,TimeInSeconds?: number): {AngularAcceleration: Vector, LinearAcceleration: Vector, AngularVelocity: Vector, LinearVelocity: Vector, TimeInSeconds: number};
	static GetPose(DeviceRotation?: Rotator,DevicePosition?: Vector,NeckPosition?: Vector,bUseOrienationForPlayerCamera?: boolean,bUsePositionForPlayerCamera?: boolean,PositionScale?: Vector): {DeviceRotation: Rotator, DevicePosition: Vector, NeckPosition: Vector};
	static GetPlayerCameraManagerFollowHmd(bFollowHmdOrientation?: boolean,bFollowHmdPosition?: boolean): {bFollowHmdOrientation: boolean, bFollowHmdPosition: boolean};
	static GetLoadingSplashParams(TexturePath?: string,DistanceInMeters?: Vector,SizeInMeters?: Vector2D,RotationAxis?: Vector,RotationDeltaInDeg?: number): {TexturePath: string, DistanceInMeters: Vector, SizeInMeters: Vector2D, RotationAxis: Vector, RotationDeltaInDeg: number};
	static GetBaseRotationAndPositionOffset(OutRot?: Rotator,OutPosOffset?: Vector): {OutRot: Rotator, OutPosOffset: Vector};
	static GetBaseRotationAndBaseOffsetInMeters(OutRotation?: Rotator,OutBaseOffsetInMeters?: Vector): {OutRotation: Rotator, OutBaseOffsetInMeters: Vector};
	static EnablePlayerControllerFollowHmd(bEnable: boolean): void;
	static EnablePlayerCameraManagerFollowHmd(bFollowHmdOrientation: boolean,bFollowHmdPosition: boolean): void;
	static EnableAutoLoadingSplashScreen(bAutoShowEnabled: boolean): void;
	static ClearLoadingSplashScreens(): void;
	static AddLoadingSplashScreen(Texture: Texture2D,TranslationInMeters: Vector,Rotation: Rotator,SizeInMeters: Vector2D,DeltaRotation: Rotator,bClearBeforeAdd: boolean): void;
	static C(Other: UObject): OculusFunctionLibrary;
}

declare class ProcMeshVertex { 
	Position: Vector;
	Normal: Vector;
	Tangent: ProcMeshTangent;
	Color: Color;
	UV0: Vector2D;
	clone() : ProcMeshVertex;
	static C(Other: UObject): ProcMeshVertex;
}

declare class ProcMeshSection { 
	ProcVertexBuffer: ProcMeshVertex[];
	ProcIndexBuffer: number[];
	SectionLocalBox: Box;
	bEnableCollision: boolean;
	bSectionVisible: boolean;
	clone() : ProcMeshSection;
	static C(Other: UObject): ProcMeshSection;
}

declare class ProceduralMeshComponent extends MeshComponent { 
	ProcMeshBodySetup: BodySetup;
	ProcMeshSections: ProcMeshSection[];
	LocalBounds: BoxSphereBounds;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ProceduralMeshComponent;
	static Find(Outer: UObject, ResourceName: string): ProceduralMeshComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ProceduralMeshComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProceduralMeshComponent;
	UpdateMeshSection(SectionIndex: number,Vertices: Vector[],Normals: Vector[],UV0: Vector2D[],VertexColors: LinearColor[],Tangents: ProcMeshTangent[]): void;
	UpdateMeshSectionFColor(SectionIndex: number,Vertices: Vector[],Normals: Vector[],UV0: Vector2D[],VertexColors: Color[],Tangents: ProcMeshTangent[]): void;
	SetMeshSectionVisible(SectionIndex: number,bNewVisibility: boolean): void;
	IsMeshSectionVisible(SectionIndex: number): boolean;
	CreateMeshSection(SectionIndex: number,Vertices: Vector[],Triangles: number[],Normals: Vector[],UV0: Vector2D[],VertexColors: LinearColor[],Tangents: ProcMeshTangent[],bCreateCollision: boolean): void;
	CreateMeshSectionFColor(SectionIndex: number,Vertices: Vector[],Triangles: number[],Normals: Vector[],UV0: Vector2D[],VertexColors: Color[],Tangents: ProcMeshTangent[],bCreateCollision: boolean): void;
	ClearMeshSection(SectionIndex: number): void;
	ClearAllMeshSections(): void;
	static C(Other: UObject): ProceduralMeshComponent;
}

declare class KismetProceduralMeshLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): KismetProceduralMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): KismetProceduralMeshLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): KismetProceduralMeshLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetProceduralMeshLibrary;
	static GenerateBoxMesh(BoxRadius: Vector,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	static CreateGridMeshTriangles(NumX: number,NumY: number,bWinding: boolean,Triangles?: number[]): {Triangles: number[]};
	static ConvertQuadToTriangles(Triangles?: number[],Vert0?: number,Vert1?: number,Vert2?: number,Vert3?: number): {Triangles: number[]};
	static CalculateTangentsForMesh(Vertices: Vector[],Triangles: number[],UVs: Vector2D[],Normals?: Vector[],Tangents?: ProcMeshTangent[]): {Normals: Vector[], Tangents: ProcMeshTangent[]};
	static C(Other: UObject): KismetProceduralMeshLibrary;
}

declare class SteamVRChaperoneComponent extends ActorComponent { 
	OnLeaveBounds: UnrealEngineMulticastDelegate<() => void>;
	OnReturnToBounds: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SteamVRChaperoneComponent;
	static Find(Outer: UObject, ResourceName: string): SteamVRChaperoneComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SteamVRChaperoneComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRChaperoneComponent;
	GetBounds(): Vector[];
	static C(Other: UObject): SteamVRChaperoneComponent;
}

declare type ESteamVRTrackedDeviceType = string | symbol;
declare var ESteamVRTrackedDeviceType = { Controller:'Controller',TrackingReference:'TrackingReference',Other:'Other',Invalid:'Invalid', };
declare class SteamVRFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SteamVRFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): SteamVRFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SteamVRFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRFunctionLibrary;
	static GetValidTrackedDeviceIds(DeviceType: ESteamVRTrackedDeviceType,OutTrackedDeviceIds?: number[]): {OutTrackedDeviceIds: number[]};
	static GetTrackedDevicePositionAndOrientation(DeviceId: number,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	static GetHandPositionAndOrientation(ControllerIndex: number,Hand: EControllerHand,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	static C(Other: UObject): SteamVRFunctionLibrary;
}

declare class SlateRemoteSettings extends UObject { 
	EnableRemoteServer: boolean;
	EditorServerEndpoint: string;
	GameServerEndpoint: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SlateRemoteSettings;
	static Find(Outer: UObject, ResourceName: string): SlateRemoteSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SlateRemoteSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SlateRemoteSettings;
	static C(Other: UObject): SlateRemoteSettings;
}

declare class JavascriptAssetData { 
	ObjectPath: string;
	PackageName: string;
	PackagePath: string;
	GroupNames: string;
	AssetName: string;
	AssetClass: string;
	ChunkIDs: number[];
	PackageFlags: number;
	clone() : JavascriptAssetData;
	static C(Other: UObject): JavascriptAssetData;
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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorGlobalDelegates;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorGlobalDelegates;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	EndPIE(bIsSimulating: boolean): void;
	DisplayLoadErrors(): void;
	CleanseEditor(): void;
	ChangeEditorMode(NewMode: string): void;
	Bind(Key: string): void;
	BeginPIE(bIsSimulating: boolean): void;
	ActorPropertiesChange(): void;
	static C(Other: UObject): JavascriptEditorGlobalDelegates;
}

declare class JavascriptInputEventState { 
	clone() : JavascriptInputEventState;
	static C(Other: UObject): JavascriptInputEventState;
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

declare class JavascriptInputEventStateLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptInputEventStateLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptInputEventStateLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptInputEventStateLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static C(Other: UObject): JavascriptInputEventStateLibrary;
}

declare class JavascriptPDI { 
	clone() : JavascriptPDI;
	static C(Other: UObject): JavascriptPDI;
	DrawArc(Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawCircle(Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawConnectedArrow(ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	DrawDashedLine(Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	DrawDirectionalArrow(ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	DrawOrientedWireBox(Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawPolygon(Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
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
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
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
	static C(Other: UObject): JavascriptExtensibilityManager;
	AddExtender(Extender: JavascriptExtender): void;
	RemoveExtender(Extender: JavascriptExtender): void;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
}

declare class JavascriptViewportClick { 
	clone() : JavascriptViewportClick;
	static C(Other: UObject): JavascriptViewportClick;
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
	static C(Other: UObject): JavascriptHitProxy;
	GetActor(): Actor;
	GetName(): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static GetName(Proxy: JavascriptHitProxy): string;
}

declare class JavascriptWorkspaceItem { 
	clone() : JavascriptWorkspaceItem;
	static C(Other: UObject): JavascriptWorkspaceItem;
	AddGroup(DisplayName: string): JavascriptWorkspaceItem;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
}

declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static OpenPopupWindow(Widget: Widget,PopupDesiredSize: Vector2D,HeadingText: string): void;
	static ModifyObject(UObject: UObject,bAlwaysMarkDirty: boolean): void;
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
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static GetName(Proxy: JavascriptHitProxy): string;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetDefaultBrush(World: World): Brush;
	static GetContext(Transaction: JavascriptTransaction): string;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetActorLabel(Actor: Actor): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
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
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DeselectAll(USelection: USelection,InClass: UnrealEngineClass): void;
	static Deselect(USelection: USelection,InObject: UObject): void;
	static csgAdd(DefaultBrush: Brush,PolyFlags: number,BrushType: EBrushType): Brush;
	static CreatePropertyEditorToolkit(ObjectsForPropertiesMenu: UObject[]): void;
	static ClearActorLabel(Actor: Actor): void;
	static Build(Builder: BrushBuilder,InWorld: World,InBrush: Brush): boolean;
	static BroadcastHotReload(): void;
	static BroadcastAssetCreated(NewAsset: UObject): void;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static C(Other: UObject): JavascriptEditorLibrary;
}

declare type EJavascriptTabRole = string | symbol;
declare var EJavascriptTabRole = { MajorTab:'MajorTab',PanelTab:'PanelTab',NomadTab:'NomadTab',DocumentTab:'DocumentTab', };
declare class JavascriptEditorTab extends UObject { 
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	OnCloseTab: UnrealEngineDelegate<(Widget: Widget) => void>;
	Group: JavascriptWorkspaceItem;
	TabId: string;
	DisplayName: string;
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTab;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTab;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	Discard(): void;
	Commit(): void;
	CloseTab(Widget: Widget): void;
	static C(Other: UObject): JavascriptEditorTab;
}

declare class JavascriptMenuExtension { 
	ExtensionHook: string;
	HookPosition: EJavascriptExtensionHook;
	clone() : JavascriptMenuExtension;
	static C(Other: UObject): JavascriptMenuExtension;
}

declare class JavascriptUIExtender extends UObject { 
	MenuExtensions: JavascriptMenuExtension[];
	ToolbarExtensions: JavascriptMenuExtension[];
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUIExtender;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUIExtender;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static GetTopCommandList(): JavascriptUICommandList;
	static EndSection(): void;
	static Bind(Commands: JavascriptUICommands): void;
	static BeginSection(Name: string,Text: string): void;
	static AddToolBarButton(Commands: JavascriptUICommands,Id: string): void;
	static AddMenuSeparator(): void;
	static AddMenuEntry(Commands: JavascriptUICommands,Id: string): void;
	static C(Other: UObject): JavascriptUIExtender;
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
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetEditorToolkit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject): JavascriptAssetEditorToolkit;
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
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetTypeActions;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject): JavascriptAssetTypeActions;
}

declare class JavascriptEditorEngineLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorEngineLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorEngineLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorEngineLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static GetEditorWorld(Engine: Engine): World;
	static FindBrushBuilder(Engine: EditorEngine,BrushBuilderClass: UnrealEngineClass): BrushBuilder;
	static Exec(Engine: EditorEngine,InWorld: World,Command: string,Out?: string): {Out: string, $: boolean};
	static DeleteObjectsUnchecked(ObjectsToDelete: UObject[]): number;
	static CanSelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bSelectEvenIfHidden: boolean,bWarnIfLevelLocked: boolean): boolean;
	static bspBrushCSG(Engine: EditorEngine,Actor: Brush,Model: Model,PolyFlags: number,BrushType: EBrushType,CSGOper: ECsgOper,bBuildBounds: boolean,bMergePolys: boolean,bReplaceNULLMaterialRefs: boolean,bShowProgressBar: boolean): number;
	static C(Other: UObject): JavascriptEditorEngineLibrary;
}

declare class JavascriptEditorInputProcessor extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorInputProcessor;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorInputProcessor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorInputProcessor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorInputProcessor;
	HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
	HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
	HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
	HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
	Activate(bEnable: boolean): void;
	static C(Other: UObject): JavascriptEditorInputProcessor;
}

declare class JavascriptEditorPopupWindow extends UObject { 
	Widget: Widget;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorPopupWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorPopupWindow;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorPopupWindow;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorPopupWindow;
	Open(Heading: string,DesiredSize: Vector2D): boolean;
	OnDismissed(): void;
	static C(Other: UObject): JavascriptEditorPopupWindow;
}

declare class JavascriptEditorTabManager extends Widget { 
	Layout: string;
	Tabs: JavascriptEditorTab[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTabManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	static C(Other: UObject): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTick;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTick;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	GetEngine(): EditorEngine;
	static C(Other: UObject): JavascriptEditorTick;
}

declare class JavascriptEditorToolbar extends Widget { 
	OnHook: UnrealEngineDelegate<() => JavascriptMenuBuilder>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorToolbar;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorToolbar;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar;
	static C(Other: UObject): JavascriptEditorToolbar;
}

declare type EJavascriptWidgetMode = string | symbol;
declare var EJavascriptWidgetMode = { WM_Translate:'WM_Translate',WM_TranslateRotateZ:'WM_TranslateRotateZ',WM_2D:'WM_2D',WM_Rotate:'WM_Rotate',WM_Scale:'WM_Scale',WM_Max:'WM_Max',WM_None:'WM_None',None:'None', };
declare class JavascriptEditorViewport extends PanelWidget { 
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStarted: UnrealEngineDelegate<(InputState: JavascriptInputEventState, bIsDraggingWidget: boolean, bNudge: boolean, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStopped: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => void>;
	OnInputWidgetDelta: UnrealEngineDelegate<(Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorViewport) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorViewport) => void>;
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Vector>;
	OnGetWidgetRotation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Rotator>;
	OnGetWidgetMode: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => EJavascriptWidgetMode>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorViewport;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport;
	SetWidgetMode(WidgetMode: EJavascriptWidgetMode): void;
	SetViewRotation(ViewRotation: Rotator): void;
	SetViewLocation(ViewLocation: Vector): void;
	SetViewFOV(InViewFOV: number): void;
	SetSkyBrightness(SkyBrightness: number): void;
	SetSimulatePhysics(bShouldSimulatePhysics: boolean): void;
	SetRealtime(bInRealtime: boolean,bStoreCurrentValue: boolean): void;
	SetLightDirection(InLightDir: Rotator): void;
	SetLightColor(LightColor: Color): void;
	SetLightBrightness(LightBrightness: number): void;
	SetEngineShowFlags(In: string): boolean;
	SetCameraSpeedSetting(SpeedSetting: number): void;
	SetBackgroundColor(BackgroundColor: LinearColor): void;
	RestoreRealtime(bAllowDisable: boolean): void;
	Redraw(): void;
	OverridePostProcessSettings(PostProcessSettings: PostProcessSettings,Weight: number): void;
	GetViewportWorld(): World;
	GetViewFOV(): number;
	GetEngineShowFlags(): string;
	GetCameraSpeedSetting(): number;
	static C(Other: UObject): JavascriptEditorViewport;
}

declare class JavascriptEdViewport { 
	clone() : JavascriptEdViewport;
	static C(Other: UObject): JavascriptEdViewport;
	GetHitProxy(): JavascriptHitProxy;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
}

declare class JavascriptEditorModeTools { 
	clone() : JavascriptEditorModeTools;
	static C(Other: UObject): JavascriptEditorModeTools;
	ActivateDefaultMode(): {Tools: JavascriptEditorModeTools};
	ActivateMode(InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	DeactivateAllModes(): {Tools: JavascriptEditorModeTools};
	DeactivateMode(InID?: string): {Tools: JavascriptEditorModeTools};
	DestroyMode(InID?: string): {Tools: JavascriptEditorModeTools};
	EndTracking(Viewport: JavascriptEdViewport): boolean;
	EnsureNotInMode(ModeID?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
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
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeID?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
}

declare class JavascriptEditorMode { 
	clone() : JavascriptEditorMode;
	static C(Other: UObject): JavascriptEditorMode;
	GetCurrentWidgetAxis(): number;
	GetModeManager(): JavascriptEditorModeTools;
	SelectNone(): void;
	SetCurrentWidgetAxis(InAxis: number): void;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
}

declare class JavascriptEdModeLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEdModeLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdModeLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEdModeLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
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
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeID?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static C(Other: UObject): JavascriptEdModeLibrary;
}

declare type EJavascriptEditAction = string | symbol;
declare var EJavascriptEditAction = { Skip:'Skip',Process:'Process',Halt:'Halt', };
declare class JavascriptSlateIcon { 
	StyleSetName: string;
	StyleName: string;
	SmallStyleName: string;
	clone() : JavascriptSlateIcon;
	static C(Other: UObject): JavascriptSlateIcon;
}

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
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEdMode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEdMode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject): JavascriptEdMode;
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
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptNotification;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	Success(): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
	static C(Other: UObject): JavascriptNotification;
}

declare class JavascriptDetailWidgetDecl { 
	clone() : JavascriptDetailWidgetDecl;
	static C(Other: UObject): JavascriptDetailWidgetDecl;
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
	static C(Other: UObject): JavascriptDetailWidgetRow;
	NameContent(): JavascriptDetailWidgetDecl;
	SetFilterString(InFilterString: string): void;
	ValueContent(): JavascriptDetailWidgetDecl;
	WholeRowContent(): JavascriptDetailWidgetDecl;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
}

declare type EPropertyAccessResult = string | symbol;
declare var EPropertyAccessResult = { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success', };
declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetProperty(): Property;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	SetOnPropertyValueChanged(UFunction: JavascriptFunction): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,UFunction: JavascriptFunction): void;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject): JavascriptDetailPropertyRow;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
}

declare class JavascriptPropertyCustomizationLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomizationLibrary;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,UFunction: JavascriptFunction): void;
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
	static C(Other: UObject): JavascriptPropertyCustomizationLibrary;
}

declare class JavascriptPropertyTypeCustomizationUtils { 
	clone() : JavascriptPropertyTypeCustomizationUtils;
	static C(Other: UObject): JavascriptPropertyTypeCustomizationUtils;
}

declare class JavascriptPropertyCustomization extends UObject { 
	PropertyTypeName: string;
	OnDestroy: UnrealEngineDelegate<(Id: number) => void>;
	OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, Id: number) => void>;
	OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, Id: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptPropertyCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptPropertyCustomization;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject): JavascriptPropertyCustomization;
}

declare class JavascriptRawMeshLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptRawMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptRawMeshLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRawMeshLibrary;
	static SetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number,Info: MeshSectionInfo): void;
	static SaveRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,InMesh?: JavascriptRawMesh): {InMesh: JavascriptRawMesh};
	static MarkPackageDirty(InObject: UObject): boolean;
	static LoadRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,OutMesh?: JavascriptRawMesh): {OutMesh: JavascriptRawMesh};
	static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
	static IsValid(RawMesh: JavascriptRawMesh): boolean;
	static GetWedgePosition(RawMesh: JavascriptRawMesh,WedgeIndex: number): Vector;
	static GetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number): MeshSectionInfo;
	static Empty(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static CompactMaterialIndices(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static Build(StaticMesh: StaticMesh): void;
	static C(Other: UObject): JavascriptRawMeshLibrary;
}

declare type EPropertyEditorNameAreaSettings = string | symbol;
declare var EPropertyEditorNameAreaSettings = { HideNameArea:'HideNameArea',ObjectsUseNameArea:'ObjectsUseNameArea',ActorsUseNameArea:'ActorsUseNameArea',ComponentsAndActorsUseNameArea:'ComponentsAndActorsUseNameArea', };
declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(ParameterName: string) => void>;
	bUpdateFromSelection: boolean;
	bLockable: boolean;
	bAllowSearch: boolean;
	bHideSelectionTip: boolean;
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PropertyEditor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	static C(Other: UObject): PropertyEditor;
}

declare class TRASHCLASS_DmgTypeBP_Environmental_0 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_DmgTypeBP_Environmental_0;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_DmgTypeBP_Environmental_0;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TRASHCLASS_DmgTypeBP_Environmental_0;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_DmgTypeBP_Environmental_0;
	static C(Other: UObject): TRASHCLASS_DmgTypeBP_Environmental_0;
}

declare class ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static Find(Outer: UObject, ResourceName: string): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static C(Other: UObject): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
}

declare class TRASHCLASS_LevelEditorAttract_2 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_LevelEditorAttract_2;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_LevelEditorAttract_2;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TRASHCLASS_LevelEditorAttract_2;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_LevelEditorAttract_2;
	static C(Other: UObject): TRASHCLASS_LevelEditorAttract_2;
}

declare class ORPHANED_DATA_ONLY_LevelEditorAttract_C_3 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static Find(Outer: UObject, ResourceName: string): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static C(Other: UObject): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
}

declare class TRASHCLASS_LevelEditorOverview_4 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_LevelEditorOverview_4;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_LevelEditorOverview_4;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TRASHCLASS_LevelEditorOverview_4;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_LevelEditorOverview_4;
	static C(Other: UObject): TRASHCLASS_LevelEditorOverview_4;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

