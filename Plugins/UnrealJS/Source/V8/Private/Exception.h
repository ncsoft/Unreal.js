#pragma once

#include "Translator.h"

struct FV8Exception
{
	static void Report(v8::TryCatch& try_catch)
	{
		using namespace v8;

		auto exception = StringFromV8(try_catch.Exception());
		auto message = try_catch.Message();
		if (message.IsEmpty())
		{
			UE_LOG(Javascript, Error, TEXT("%s"), *exception);
		}
		else
		{
			if (!exception.IsEmpty())
			{
				auto filename = StringFromV8(message->GetScriptResourceName());
				auto linenum = message->GetLineNumber();
				auto line = StringFromV8(message->GetSourceLine());

				UE_LOG(Javascript, Error, TEXT("%s:%d: %s"), *filename, linenum, *exception);

				auto stack_trace = StringFromV8(try_catch.StackTrace());
				if (stack_trace.Len() > 0)
				{
					TArray<FString> Lines;
					stack_trace.ParseIntoArrayLines(Lines);
					for (const auto& line : Lines)
					{
						UE_LOG(Javascript, Error, TEXT("%s"), *line);
					}
				}
			}
		}
	}
};