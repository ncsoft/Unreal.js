#include "JavascriptUMG.h"
#include "JavascriptTextModel.h"

void UJavascriptTextModel::SetString(const FString& String)
{
	if (!Model.IsValid())
	{
		Model = MakeShareable(new FString());
	}

	*(Model.Get()) = String;
}

FString UJavascriptTextModel::GetString()
{
	if (!Model.IsValid())
	{
		return TEXT("");
	}

	return *(Model.Get());
}

FJavascriptSlateTextRun UJavascriptTextModel::CreateRun(const FTextBlockStyle& MessageTextStyle, int32 BeginIndex, int32 EndIndex)
{
	FJavascriptSlateTextRun Run;

	if (Model.IsValid())
	{
		Run.Run = FSlateTextRun::Create(FRunInfo(), Model.ToSharedRef(), MessageTextStyle, FTextRange(BeginIndex, EndIndex));
	}

	return Run;
}