#include "V8PCH.h"
#include "JavascriptLibrary.h"
#include "Engine/DynamicBlueprintBinding.h"
#include "JavascriptContext.h"

void UJavascriptLibrary::SetMobile(USceneComponent* SceneComponent)
{
	if (SceneComponent)
	{
		SceneComponent->SetMobility(EComponentMobility::Movable);
	}
}

void UJavascriptLibrary::SetMobility(USceneComponent* SceneComponent, EComponentMobility::Type Type)
{
	if (SceneComponent)
	{
		SceneComponent->SetMobility(Type);
	}
}

UWorld* UJavascriptLibrary::Actor_GetWorld(AActor* Actor)
{
	return Actor ? Actor->GetWorld() : nullptr;
}

UClass* UJavascriptLibrary::GetBlueprintGeneratedClass(UBlueprint* Blueprint)
{
	UE_LOG(Javascript, Warning, TEXT("GetBlueprintGeneratedClass will be deprecated : Use instead Blueprint.GeneratedClass"));
	return Blueprint ? Blueprint->GeneratedClass : nullptr;
}

UClass* UJavascriptLibrary::GetBlueprintGeneratedClassFromPath(FString Path)
{
	UE_LOG(Javascript, Warning, TEXT("GetBlueprintGeneratedClassFromPath will be deprecated : Use instead Blueprint.Load(Path).GeneratedClass"));
	return GetBlueprintGeneratedClass(Cast<UBlueprint>(StaticLoadObject(UBlueprint::StaticClass(), nullptr, *Path)));
}

UObject* UJavascriptLibrary::GetOuter(UObject* Object)
{
	return Object ? Object->GetOuter() : nullptr;
}

UObject* UJavascriptLibrary::GetOutermost(UObject* Object)
{
	return Object ? Object->GetOutermost() : nullptr;
}

UObject* UJavascriptLibrary::Duplicate(UObject* Object, UObject* Outer, FName Name)
{
	return DuplicateObject<UObject>(Object, Outer, *Name.ToString());
}

bool UJavascriptLibrary::HasAnyFlags(UObject* Object, int32 Flags)
{
	return Object && Object->HasAnyFlags((EObjectFlags)Flags);
}

bool UJavascriptLibrary::HasAnyPackageFlags(UPackage* Package, int32 Flags)
{
	return Package && Package->HasAnyPackageFlags((EPackageFlags)Flags);
}

FString UJavascriptLibrary::GetName(UObject* Object)
{
	return Object ? Object->GetName() : TEXT("");
}

bool UJavascriptLibrary::IsPlayInEditor(UWorld* World)
{
	return World && World->IsPlayInEditor();
}

bool UJavascriptLibrary::IsPlayInPreview(UWorld* World)
{
	return World && World->IsPlayInPreview();
}

bool UJavascriptLibrary::IsGameWorld(UWorld* World)
{
	return World && World->IsGameWorld();
}

void UJavascriptLibrary::SetClientTravel(UEngine* Engine, UWorld *InWorld, FString NextURL, ETravelType InTravelType)
{
	if (Engine)
	{
		Engine->SetClientTravel(InWorld, *NextURL, InTravelType);
	}
}

UPackage* UJavascriptLibrary::CreatePackage(UObject* Outer, FString PackageName)
{
	return ::CreatePackage(Outer, *PackageName);
}

void UJavascriptLibrary::AddDynamicBinding(UClass* Outer, UDynamicBlueprintBinding* BindingObject)
{
	if (Cast<UBlueprintGeneratedClass>(Outer) && BindingObject)
	{
		Cast<UBlueprintGeneratedClass>(Outer)->DynamicBindingObjects.Add(BindingObject);
	}	
}

UDynamicBlueprintBinding* UJavascriptLibrary::GetDynamicBinding(UClass* Outer, TSubclassOf<UDynamicBlueprintBinding> BindingObjectClass)
{
	if (auto bpg = Cast<UBlueprintGeneratedClass>(Outer))
	{
		for (auto BindingObject : bpg->DynamicBindingObjects)
		{
			if (BindingObject->IsA(BindingObjectClass))
			{
				return BindingObject;
			}
		}
	}

	return nullptr;
}

void UJavascriptLibrary::HandleSeamlessTravelPlayer(AGameMode* GameMode, AController*& C)
{
	GameMode->HandleSeamlessTravelPlayer(C);
}

void UJavascriptLibrary::SetRootComponent(AActor* Actor, USceneComponent* Component)
{
	Actor->SetRootComponent(Component);
}

int32 UJavascriptLibrary::GetFileSize(UObject* Object, FString Filename)
{
	auto size = IFileManager::Get().FileSize(*Filename);
	if (size > INT_MAX) return -1;
	return (int32)size;
}

bool UJavascriptLibrary::ReadFile(UObject* Object, FString Filename)
{
	FArchive* Reader = IFileManager::Get().CreateFileReader(*Filename);
	if (!Reader)
	{
		return false;
	}

	int32 Size = Reader->TotalSize();
	if (Size != FArrayBufferAccessor::GetSize())
	{
		return false;
	}

	Reader->Serialize(FArrayBufferAccessor::GetData(), Size);
	return Reader->Close();	
}

bool UJavascriptLibrary::WriteFile(UObject* Object, FString Filename)
{
	FArchive* Writer = IFileManager::Get().CreateFileWriter(*Filename);
	if (!Writer)
	{
		return false;
	}
		
	Writer->Serialize(FArrayBufferAccessor::GetData(), FArrayBufferAccessor::GetSize());
	return Writer->Close();
}

FString UJavascriptLibrary::GetDir(UObject* Object, FString WhichDir)
{
	if (WhichDir == TEXT("Launch")) return FPaths::LaunchDir();
	else if (WhichDir == TEXT("Engine")) return FPaths::EngineDir();
	else if (WhichDir == TEXT("EngineUser")) return FPaths::EngineUserDir();
	else if (WhichDir == TEXT("EngineVersionAgnosticUser")) return FPaths::EngineVersionAgnosticUserDir();
	else if (WhichDir == TEXT("EngineContent")) return FPaths::EngineContentDir();
	else if (WhichDir == TEXT("EngineConfig")) return FPaths::EngineConfigDir();
	else if (WhichDir == TEXT("EngineIntermediate")) return FPaths::EngineIntermediateDir();
	else if (WhichDir == TEXT("EngineSaved")) return FPaths::EngineSavedDir();
	else if (WhichDir == TEXT("EnginePlugins")) return FPaths::EnginePluginsDir();
	else if (WhichDir == TEXT("Root")) return FPaths::RootDir();
	else if (WhichDir == TEXT("Game")) return FPaths::GameDir();
	else if (WhichDir == TEXT("GameUser")) return FPaths::GameUserDir();
	else if (WhichDir == TEXT("GameContent")) return FPaths::GameContentDir();
	else if (WhichDir == TEXT("GameConfig")) return FPaths::GameConfigDir();
	else if (WhichDir == TEXT("GameSaved")) return FPaths::GameSavedDir();
	else if (WhichDir == TEXT("GameIntermediate")) return FPaths::GameIntermediateDir();
	else if (WhichDir == TEXT("GamePlugins")) return FPaths::GamePluginsDir();
	else if (WhichDir == TEXT("SourceConfig")) return FPaths::SourceConfigDir();
	else if (WhichDir == TEXT("GeneratedConfig")) return FPaths::GeneratedConfigDir();
	else if (WhichDir == TEXT("Sandboxes")) return FPaths::SandboxesDir();
	else if (WhichDir == TEXT("Profiling")) return FPaths::ProfilingDir();
	else if (WhichDir == TEXT("ScreenShot")) return FPaths::ScreenShotDir();
	else if (WhichDir == TEXT("BugIt")) return FPaths::BugItDir();
	else if (WhichDir == TEXT("VideoCapture")) return FPaths::VideoCaptureDir();
	else if (WhichDir == TEXT("GameLog")) return FPaths::GameLogDir();
	else if (WhichDir == TEXT("Automation")) return FPaths::AutomationDir();
	else if (WhichDir == TEXT("AutomationTransient")) return FPaths::AutomationTransientDir();
	else if (WhichDir == TEXT("AutomationLog")) return FPaths::AutomationLogDir();
	else if (WhichDir == TEXT("Cloud")) return FPaths::CloudDir();
	else if (WhichDir == TEXT("GameDevelopers")) return FPaths::GameDevelopersDir();
	else if (WhichDir == TEXT("GameUserDeveloper")) return FPaths::GameUserDeveloperDir();
	else if (WhichDir == TEXT("Diff")) return FPaths::DiffDir();
	else return TEXT("");
}

bool UJavascriptLibrary::HasUndo(UEngine* Engine)
{
	return !!GUndo;
}

bool UJavascriptLibrary::ReadDirectory(UObject* Object, FString Directory, TArray<FDirectoryItem>& OutItems)
{
	struct FLocalVisitor : IPlatformFile::FDirectoryVisitor
	{
		FLocalVisitor(TArray<FDirectoryItem>& InResult)
			: Result(InResult)
		{}

		TArray<FDirectoryItem>& Result;

		virtual bool Visit(const TCHAR* FilenameOrDirectory, bool bIsDirectory) override
		{
			auto Item = new(Result)FDirectoryItem;
			Item->Name = FilenameOrDirectory;
			Item->bIsDirectory = bIsDirectory;
			return true;
		}
	} Visitor(OutItems);

	return IPlatformFile::GetPlatformPhysical().IterateDirectory(*Directory, Visitor);	
}

void UJavascriptLibrary::ReregisterComponent(UActorComponent* ActorComponent)
{
	ActorComponent->ReregisterComponent();
}

void UJavascriptLibrary::RegisterComponent(UActorComponent* ActorComponent)
{
	ActorComponent->RegisterComponent();
}

void UJavascriptLibrary::UnregisterComponent(UActorComponent* ActorComponent)
{
	ActorComponent->UnregisterComponent();
}

bool UJavascriptLibrary::IsRegistered(UActorComponent* ActorComponent)
{
	return ActorComponent->IsRegistered();
}

void UJavascriptLibrary::GetAllActorsOfClassAndTags(UObject* WorldContextObject, TSubclassOf<AActor> ActorClass, const TArray<FName>& Tags_Accept, const TArray<FName>& Tags_Deny, TArray<AActor*>& OutActors)
{
	OutActors.Empty();

	UWorld* World = GEngine->GetWorldFromContextObject(WorldContextObject);

	// We do nothing if not class provided, rather than giving ALL actors!
	if (ActorClass != NULL && World != nullptr)
	{
		for (TActorIterator<AActor> It(World, ActorClass); It; ++It)
		{
			AActor* Actor = *It;
			if (!Actor->IsPendingKill())
			{
				bool bReject{ false };
				bool bAccept{ false };
				for (const auto& Tag : Actor->Tags)
				{
					if (Tags_Deny.Contains(Tag))
					{
						bReject = true;
						break;
					}
					if (!bAccept && Tags_Accept.Contains(Tag))
					{
						bAccept = true;
					}
				}
				if (bAccept && !bReject)
				{
					OutActors.Add(Actor);
				}				
			}
		}
	}
}

int32 UJavascriptLibrary::GetCurrentProcessId()
{
	return FPlatformProcess::GetCurrentProcessId();
}

UModel* UJavascriptLibrary::GetModel(UWorld* World)
{
	return World ? World->GetModel() : nullptr;
}

ULevel* UJavascriptLibrary::GetLevel(AActor* Actor)
{
	return Actor ? Actor->GetLevel() : nullptr;
}