#include "V8PCH.h"
#include "JavascriptProcess.h"

UJavascriptProcess::UJavascriptProcess(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{	
}

UJavascriptProcess* UJavascriptProcess::Create(const FString& URL, const FString& Parms, bool bLaunchDetached, bool bLaunchHidden, bool bLaunchReallyHidden, int32 PriorityModifier, const FString& OptionalWorkingDirectory, bool bUsePipe)
{
	uint32 ProcessID;
	void* ReadPipe{ nullptr };
	void* WritePipe{ nullptr };
	if (bUsePipe)
	{
		FPlatformProcess::CreatePipe(ReadPipe, WritePipe);
	}
	auto Handle = FPlatformProcess::CreateProc(*URL, *Parms, bLaunchDetached, bLaunchHidden, bLaunchReallyHidden, &ProcessID, PriorityModifier, OptionalWorkingDirectory.Len() ? *OptionalWorkingDirectory : nullptr, WritePipe);
	if (Handle.IsValid())
	{
		auto Instance = NewObject<UJavascriptProcess>();
		Instance->ProcessHandle = Handle;
		Instance->ProcessID = ProcessID;
		Instance->ReadPipe = ReadPipe;
		Instance->WritePipe = WritePipe;
		return Instance;
	}
	else
	{
		return nullptr;
	}
}

bool UJavascriptProcess::IsRunning()
{
	return FPlatformProcess::IsProcRunning(ProcessHandle);
}

void UJavascriptProcess::Close()
{
	FPlatformProcess::CloseProc(ProcessHandle);

	if (ReadPipe || WritePipe)
	{
		FPlatformProcess::ClosePipe(ReadPipe, WritePipe);
		ReadPipe = WritePipe = nullptr;
	}
}

FString UJavascriptProcess::ReadFromPipe()
{
	return FPlatformProcess::ReadPipe(ReadPipe);
}

bool UJavascriptProcess::ReadArrayFromPipe(TArray<uint8>& Array)
{
	return FPlatformProcess::ReadPipeToArray(ReadPipe, Array);
}

bool UJavascriptProcess::WriteToPipe(const FString& Message, FString& OutWritten)
{
	return FPlatformProcess::WritePipe(WritePipe, Message, &OutWritten);
}

void UJavascriptProcess::Wait()
{
	return FPlatformProcess::WaitForProc(ProcessHandle);
}

void UJavascriptProcess::Terminate(bool KillTree)
{
	return FPlatformProcess::TerminateProc(ProcessHandle, KillTree);
}

bool UJavascriptProcess::GetReturnCode(int32& ReturnCode)
{
	return FPlatformProcess::GetProcReturnCode(ProcessHandle,&ReturnCode);
}