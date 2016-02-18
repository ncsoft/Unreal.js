#pragma once

#include "CoreUObject.h"
#include "Engine.h"

#pragma warning( push )
#pragma warning( disable : 4946 )
#pragma warning( disable : 4191 )

#include "v8.h"
#include <v8-debug.h>
#include <v8-profiler.h>

#pragma warning( pop )

DECLARE_LOG_CATEGORY_EXTERN(Javascript, Log, All);

struct IJavascriptDebugger
{
	virtual ~IJavascriptDebugger() {}
	
	virtual void Destroy() = 0;

	static IJavascriptDebugger* Create(int32 InPort, v8::Local<v8::Context> InContext);
};