#include "V8PCH.h"
#include "JavascriptSharedMemoryRegion.h"
#include "JavascriptContext.h"

#if PLATFORM_WINDOWS
static bool AdjustPrivileges()
{
	HANDLE TokenHandle;
	TOKEN_PRIVILEGES Token;

	if (!::OpenProcessToken(GetCurrentProcess(), TOKEN_ADJUST_PRIVILEGES | TOKEN_QUERY, &TokenHandle))
	{
		return false;
	}

	::LookupPrivilegeValue(NULL, SE_CREATE_GLOBAL_NAME, &Token.Privileges[0].Luid);

	if (Token.Privileges[0].Attributes == SE_PRIVILEGE_ENABLED)
	{
		return true;
	}

	Token.PrivilegeCount = 1;
	Token.Privileges[0].Attributes = SE_PRIVILEGE_ENABLED;

	::AdjustTokenPrivileges(TokenHandle, 0, &Token, 0, (PTOKEN_PRIVILEGES)NULL, 0);

	return (GetLastError() == ERROR_SUCCESS);
}
#endif

void UJavascriptSharedMemoryRegion::BeginDestroy()
{
	Dispose();

	Super::BeginDestroy();
}

void UJavascriptSharedMemoryRegion::Dispose()
{
	if (Region)
	{
		FPlatformMemory::UnmapNamedSharedMemoryRegion(Region);
		Region = nullptr;
	}
}

void* UJavascriptSharedMemoryRegion::GetMemory()
{
	return Region ? Region->GetAddress() : nullptr;
}

int32 UJavascriptSharedMemoryRegion::GetSize()
{
	return Region ? Region->GetSize() : 0;
}

UJavascriptSharedMemoryRegion* UJavascriptSharedMemoryRegion::Create(const FName& Name, bool bCreate, bool bRead, bool bWrite, int32 Size)
{
#if PLATFORM_WINDOWS
	if (!AdjustPrivileges()) return nullptr;
#endif

	uint32 AccessMode = 0;
	if (bRead) AccessMode |= FPlatformMemory::ESharedMemoryAccess::Read;
	if (bWrite) AccessMode |= FPlatformMemory::ESharedMemoryAccess::Write;

	auto Region = FPlatformMemory::MapNamedSharedMemoryRegion(Name.ToString(), bCreate, AccessMode, Size);
	if (Region)
	{
		auto Object = NewObject<UJavascriptSharedMemoryRegion>(GetTransientPackage(), Name);
		Object->Region = Region;
		return Object;
	}
	else
	{
		return nullptr;
	}
}
