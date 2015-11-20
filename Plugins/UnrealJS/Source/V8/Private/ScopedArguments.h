#pragma once

struct FScopedArguments
{
	FScopedArguments(UFunction* InFunction, uint8* InBuffer)
	: Function(InFunction), Buffer(InBuffer)
	{
		for (TFieldIterator<UProperty> It(Function); It && (It->PropertyFlags & CPF_Parm) == CPF_Parm; ++It)
		{
			auto Prop = *It;
			Prop->InitializeValue_InContainer(Buffer);
		}
	}

	~FScopedArguments()
	{
		for (TFieldIterator<UProperty> It(Function); It && (It->PropertyFlags & CPF_Parm) == CPF_Parm; ++It)
		{
			auto Prop = *It;
			Prop->DestroyValue_InContainer(Buffer);
		}
	}

	UFunction* Function;
	uint8* Buffer;
};
