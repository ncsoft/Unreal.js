/// <reference path="typings/ue.d.ts" />
"use strict"

/*
//~ Application context required for the test - not specifying means it will be valid for any context
// Test is suitable for running within the editor
EditorContext				= 0x00000001,
// Test is suitable for running within the client
ClientContext				= 0x00000002,
// Test is suitable for running within the server
ServerContext				= 0x00000004,
// Test is suitable for running within a commandlet
CommandletContext			= 0x00000008,
ApplicationContextMask		= EditorContext | ClientContext | ServerContext | CommandletContext,

//~ Features required for the test - not specifying means it is valid for any feature combination
// Test requires a non-null RHI to run correctly
NonNullRHI					= 0x00000100,
// Test requires a user instigated session
RequiresUser				= 0x00000200,
FeatureMask					= NonNullRHI | RequiresUser,

//~ One-off flag to allow for fast disabling of tests without commenting code out
// Temp disabled and never returns for a filter
Disabled					= 0x00010000,

//~ Speed of the test
//Super Fast Filter
SmokeFilter					= 0x01000000,
//Engine Level Test
EngineFilter				= 0x02000000,
//Product Level Test
ProductFilter				= 0x04000000,
//Performance Test
PerfFilter					= 0x08000000,
//Stress Test
StressFilter				= 0x10000000,
*/

module.exports = function () {
    // FJavascriptAutomatedTest (V8/Public/JavascriptTestLibrary.h)
    let recipe = {
        Name: "JavascriptTest",
        bComplexTask: false,
        TestFlags: 0x02000000 | 0x00000001 | 0x00000002,
        RequiredDeviceNum: 1,
        TestFunctionNames: ['Test1','Test2','Test3'],
        Function: function (params) {
            let {TestFunctionName, Tester} = params
            Tester.AddError("FATAL TEST ERROR!!!!")
            Tester.AddWarning("TEST WARNING")
            Tester.AddLogItem(`Executing ${TestFunctionName}`)
        }
    }
    let instance = JavascriptTestLibrary.Create(recipe)
    return function () {
        instance.Destroy()
    }
}