#include "V8PCH.h"

#include "DirectoryWatcher.h"

#if V8_ENABLE_DIRECTORY_WATCHER
#include "DirectoryWatcherModule.h"
#include "IDirectoryWatcher.h"
#endif

void UDirectoryWatcher::BeginDestroy()
{
	Super::BeginDestroy();

	Unwatch();
}

bool UDirectoryWatcher::Contains(const FString& File)
{
	return Added.Find(File) != INDEX_NONE || Removed.Find(File) != INDEX_NONE || Modified.Find(File) != INDEX_NONE;
}

void UDirectoryWatcher::Watch(const FString& InDirectory)
{
#if V8_ENABLE_DIRECTORY_WATCHER
	Unwatch();

	FDirectoryWatcherModule& DirectoryWatcherModule = FModuleManager::Get().LoadModuleChecked<FDirectoryWatcherModule>(TEXT("DirectoryWatcher"));
	IDirectoryWatcher* DirectoryWatcher = DirectoryWatcherModule.Get();

	Directory = FPaths::IsRelative(InDirectory) ? FPaths::ConvertRelativePathToFull(InDirectory) : InDirectory;

	Changed = IDirectoryWatcher::FDirectoryChanged::CreateLambda([&](const TArray<FFileChangeData>& FileChanges){		
		for (auto Change : FileChanges)
		{
			FPaths::NormalizeFilename(Change.Filename);
			
			switch (Change.Action)
			{
			case FFileChangeData::FCA_Added:
				Added.Add(Change.Filename);
				break;
			case FFileChangeData::FCA_Modified:
				Modified.Add(Change.Filename);
				break;
			case FFileChangeData::FCA_Removed:
				Removed.Add(Change.Filename);
				break;
			}
		}
		OnChanged.Broadcast();
		Added.Empty();
		Modified.Empty();
		Removed.Empty();
	});	
	
	if (IFileManager::Get().DirectoryExists(*Directory))
	{
		DirectoryWatcher->RegisterDirectoryChangedCallback_Handle(Directory, Changed, DelegateHandle, true);
	}
#endif
}

void UDirectoryWatcher::Unwatch()
{
#if V8_ENABLE_DIRECTORY_WATCHER
	FDirectoryWatcherModule& DirectoryWatcherModule = FModuleManager::Get().LoadModuleChecked<FDirectoryWatcherModule>(TEXT("DirectoryWatcher"));
	IDirectoryWatcher* DirectoryWatcher = DirectoryWatcherModule.Get();

	if (IFileManager::Get().DirectoryExists(*Directory))
	{		
		DirectoryWatcher->UnregisterDirectoryChangedCallback_Handle(Directory, DelegateHandle);
		Directory = TEXT("");
	}
#endif
}
