#pragma once

#include "JavascriptTextModel.generated.h"

USTRUCT()
struct FJavascriptSlateTextRun
{
	GENERATED_BODY()

	TSharedPtr<IRun> Run;
};


UCLASS()
class JAVASCRIPTUMG_API UJavascriptTextModel : public UObject
{
	GENERATED_BODY()

public:	
	TSharedPtr<FString> Model;

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void SetString(const FString& String);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	FString GetString();

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	FJavascriptSlateTextRun CreateRun(const FTextBlockStyle& MessageTextStyle, int32 BeginIndex, int32 EndIndex);
};