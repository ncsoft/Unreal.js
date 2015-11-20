#pragma once

#include "JavascriptGeneratedFunction.generated.h"

struct FJavascriptContext;

UCLASS()
class V8_API UJavascriptGeneratedFunction : public UFunction
{
	GENERATED_BODY()

public:		
	TWeakPtr<FJavascriptContext> JavascriptContext;	

	DECLARE_FUNCTION(Thunk);
};
