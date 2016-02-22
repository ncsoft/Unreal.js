#pragma once

DECLARE_STATS_GROUP(TEXT("Javascript"), STATGROUP_Javascript, STATCAT_Advanced);

DECLARE_CYCLE_STAT_EXTERN(TEXT("Scavenge"), STAT_Scavenge, STATGROUP_Javascript,V8_API);
DECLARE_CYCLE_STAT_EXTERN(TEXT("MarkSweepCompact"), STAT_MarkSweepCompact, STATGROUP_Javascript, V8_API);
DECLARE_CYCLE_STAT_EXTERN(TEXT("IncrementalMarking"), STAT_IncrementalMarking, STATGROUP_Javascript, V8_API);
DECLARE_CYCLE_STAT_EXTERN(TEXT("ProcessWeakCallbacks"), STAT_ProcessWeakCallbacks, STATGROUP_Javascript, V8_API);

DECLARE_CYCLE_STAT_EXTERN(TEXT("Delegate"), STAT_JavascriptDelegate, STATGROUP_Javascript, V8_API);
DECLARE_CYCLE_STAT_EXTERN(TEXT("Proxy"), STAT_JavascriptProxy, STATGROUP_Javascript, V8_API);
DECLARE_CYCLE_STAT_EXTERN(TEXT("get"), STAT_JavascriptPropertyGet, STATGROUP_Javascript, V8_API);
DECLARE_CYCLE_STAT_EXTERN(TEXT("set"), STAT_JavascriptPropertySet, STATGROUP_Javascript, V8_API);
DECLARE_CYCLE_STAT_EXTERN(TEXT("<ue>"), STAT_JavascriptFunctionCallToEngine, STATGROUP_Javascript, V8_API);
DECLARE_CYCLE_STAT_EXTERN(TEXT("<js>"), STAT_JavascriptFunctionCallToJavascript, STATGROUP_Javascript, V8_API);

DECLARE_CYCLE_STAT_EXTERN(TEXT("struct(naive)"), STAT_JavascriptReadOffStruct, STATGROUP_Javascript, V8_API);

DECLARE_MEMORY_STAT_EXTERN(TEXT("NewSpace"), STAT_NewSpace, STATGROUP_Javascript, V8_API);
DECLARE_MEMORY_STAT_EXTERN(TEXT("OldSpace"), STAT_OldSpace, STATGROUP_Javascript, V8_API);
DECLARE_MEMORY_STAT_EXTERN(TEXT("CodeSpace"), STAT_CodeSpace, STATGROUP_Javascript, V8_API);
DECLARE_MEMORY_STAT_EXTERN(TEXT("MapSpace"), STAT_MapSpace, STATGROUP_Javascript, V8_API);
DECLARE_MEMORY_STAT_EXTERN(TEXT("LoSpace"), STAT_LoSpace, STATGROUP_Javascript, V8_API);
