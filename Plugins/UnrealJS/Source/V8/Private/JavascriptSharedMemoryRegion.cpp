#include "V8PCH.h"
#include "JavascriptSharedMemoryRegion.h"
#include "JavascriptSemaphore.h"
#include "JavascriptContext.h"

//@HACK : Current windows implementation creates 'global' shared memory handle which requires privilege.
#if PLATFORM_WINDOWS
#include "AllowWindowsPlatformTypes.h"

/**
* Windows implementation of the memory OS functions
**/
struct FWindowsPlatformMemory_Local : public FWindowsPlatformMemory	
{
	/**
	* Windows representation of a shared memory region
	*/
	struct FWindowsSharedMemoryRegion_Local : public FSharedMemoryRegion
	{
		/** Returns the handle to file mapping object. */
		HANDLE GetMapping() const { return Mapping; }

		FWindowsSharedMemoryRegion_Local(const FString& InName, uint32 InAccessMode, void* InAddress, SIZE_T InSize, HANDLE InMapping)
			: FSharedMemoryRegion(InName, InAccessMode, InAddress, InSize)
			, Mapping(InMapping)
		{}

	protected:

		/** Handle of a file mapping object */
		HANDLE				Mapping;
	};

	static FSharedMemoryRegion* MapNamedSharedMemoryRegion(const FString& InName, bool bCreate, uint32 AccessMode, SIZE_T Size);
	static bool UnmapNamedSharedMemoryRegion(FSharedMemoryRegion * MemoryRegion);
	// End FGenericPlatformMemory interface
};

// @HACK : Dirty hack for monolithic build
#if !IS_MONOLITHIC
FGenericPlatformMemory::FSharedMemoryRegion::FSharedMemoryRegion(const FString& InName, uint32 InAccessMode, void* InAddress, SIZE_T InSize)
	: AccessMode(InAccessMode)
	, Address(InAddress)
	, Size(InSize)
{
	FCString::Strcpy(Name, sizeof(Name) - 1, *InName);
}
#endif

FPlatformMemory::FSharedMemoryRegion* FWindowsPlatformMemory_Local::MapNamedSharedMemoryRegion(const FString& InName, bool bCreate, uint32 AccessMode, SIZE_T Size)
{
	FString Name(TEXT("Local\\"));
	Name += InName;

	DWORD OpenMappingAccess = FILE_MAP_READ;
	check(AccessMode != 0);
	if (AccessMode == FPlatformMemory::ESharedMemoryAccess::Write)
	{
		OpenMappingAccess = FILE_MAP_WRITE;
	}
	else if (AccessMode == (FPlatformMemory::ESharedMemoryAccess::Write | FPlatformMemory::ESharedMemoryAccess::Read))
	{
		OpenMappingAccess = FILE_MAP_ALL_ACCESS;
	}

	HANDLE Mapping = NULL;
	if (bCreate)
	{
		DWORD CreateMappingAccess = PAGE_READONLY;
		check(AccessMode != 0);
		if (AccessMode == FPlatformMemory::ESharedMemoryAccess::Write)
		{
			CreateMappingAccess = PAGE_WRITECOPY;
		}
		else if (AccessMode == (FPlatformMemory::ESharedMemoryAccess::Write | FPlatformMemory::ESharedMemoryAccess::Read))
		{
			CreateMappingAccess = PAGE_READWRITE;
		}

		DWORD MaxSizeHigh =
#if PLATFORM_64BITS
			(Size >> 32);
#else
			0;
#endif // PLATFORM_64BITS

		DWORD MaxSizeLow = Size
#if PLATFORM_64BITS
			& 0xFFFFFFFF
#endif // PLATFORM_64BITS
			;

		Mapping = CreateFileMapping(INVALID_HANDLE_VALUE, NULL, CreateMappingAccess, MaxSizeHigh, MaxSizeLow, *Name);

		if (Mapping == NULL)
		{
			DWORD ErrNo = GetLastError();
			UE_LOG(LogHAL, Warning, TEXT("CreateFileMapping(file=INVALID_HANDLE_VALUE, security=NULL, protect=0x%x, MaxSizeHigh=%d, MaxSizeLow=%d, name='%s') failed with GetLastError() = %d"),
				CreateMappingAccess, MaxSizeHigh, MaxSizeLow, *Name,
				ErrNo
				);
		}
	}
	else
	{
		Mapping = OpenFileMapping(OpenMappingAccess, FALSE, *Name);

		if (Mapping == NULL)
		{
			DWORD ErrNo = GetLastError();
			UE_LOG(LogHAL, Warning, TEXT("OpenFileMapping(access=0x%x, inherit=false, name='%s') failed with GetLastError() = %d"),
				OpenMappingAccess, *Name,
				ErrNo
				);
		}
	}

	if (Mapping == NULL)
	{
		return NULL;
	}

	void* Ptr = MapViewOfFile(Mapping, OpenMappingAccess, 0, 0, Size);
	if (Ptr == NULL)
	{
		DWORD ErrNo = GetLastError();
		UE_LOG(LogHAL, Warning, TEXT("MapViewOfFile(mapping=0x%x, access=0x%x, OffsetHigh=0, OffsetLow=0, NumBytes=%u) failed with GetLastError() = %d"),
			Mapping, OpenMappingAccess, Size,
			ErrNo
			);

		CloseHandle(Mapping);
		return NULL;
	}

	return new FWindowsSharedMemoryRegion_Local(Name, AccessMode, Ptr, Size, Mapping);
}

bool FWindowsPlatformMemory_Local::UnmapNamedSharedMemoryRegion(FSharedMemoryRegion * MemoryRegion)
{
	bool bAllSucceeded = true;

	if (MemoryRegion)
	{
		FWindowsSharedMemoryRegion_Local * WindowsRegion = static_cast<FWindowsSharedMemoryRegion_Local*>(MemoryRegion);

		if (!UnmapViewOfFile(WindowsRegion->GetAddress()))
		{
			bAllSucceeded = false;

			int ErrNo = GetLastError();
			UE_LOG(LogHAL, Warning, TEXT("UnmapViewOfFile(address=%p) failed with GetLastError() = %d"),
				WindowsRegion->GetAddress(),
				ErrNo
				);
		}

		if (!CloseHandle(WindowsRegion->GetMapping()))
		{
			bAllSucceeded = false;

			int ErrNo = GetLastError();
			UE_LOG(LogHAL, Warning, TEXT("CloseHandle(handle=0x%x) failed with GetLastError() = %d"),
				WindowsRegion->GetMapping(),
				ErrNo
				);
		}

		// delete the region
		delete WindowsRegion;
	}

	return bAllSucceeded;
}

#include "HideWindowsPlatformTypes.h"

typedef FWindowsPlatformMemory_Local FPlatformMemory_Hack;
#else
typedef FPlatformMemory FPlatformMemory_Hack;
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
		FPlatformMemory_Hack::UnmapNamedSharedMemoryRegion(Region);
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
	uint32 AccessMode = 0;
	if (bRead) AccessMode |= FPlatformMemory::ESharedMemoryAccess::Read;
	if (bWrite) AccessMode |= FPlatformMemory::ESharedMemoryAccess::Write;

	auto Region = FPlatformMemory_Hack::MapNamedSharedMemoryRegion(Name.ToString(), bCreate, AccessMode, Size);
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

void UJavascriptSemaphore::BeginDestroy()
{
	Dispose();

	Super::BeginDestroy();
}

void UJavascriptSemaphore::Dispose()
{
	if (Semaphore)
	{
		FPlatformProcess::DeleteInterprocessSynchObject(Semaphore);
		Semaphore = nullptr;
	}
}

void UJavascriptSemaphore::Lock()
{
	if (Semaphore) Semaphore->Lock();
}

bool UJavascriptSemaphore::TryLock(int32 NanoSecondsToWait)
{
	return Semaphore && Semaphore->TryLock(int64(NanoSecondsToWait) * 1000);
}

void UJavascriptSemaphore::Unlock()
{
	if (Semaphore) Semaphore->Unlock();
}

UJavascriptSemaphore* UJavascriptSemaphore::Create(const FName& Name, bool bCreate, int32 MaxLocks)
{
	auto Semaphore = FPlatformProcess::NewInterprocessSynchObject(Name.ToString(), bCreate, MaxLocks);
	if (Semaphore)
	{
		auto Object = NewObject<UJavascriptSemaphore>(GetTransientPackage(), Name);
		Object->Semaphore = Semaphore;
		return Object;
	}
	else
	{
		return nullptr;
	}
}