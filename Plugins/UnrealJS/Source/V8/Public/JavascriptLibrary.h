#pragma once

#include "JavascriptProfile.h"
#include "JavascriptLibrary.generated.h"

USTRUCT(BlueprintType)
struct V8_API FDirectoryItem
{
	GENERATED_BODY()

	UPROPERTY(BlueprintReadOnly, Category = "Scripting | Javascript")
	FString Name;

	UPROPERTY(BlueprintReadOnly, Category = "Scripting | Javascript")
	bool bIsDirectory;
};

UCLASS()
class V8_API UJavascriptLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

public:	
	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static void SetMobile(USceneComponent* SceneComponent);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static void SetMobility(USceneComponent* SceneComponent, EComponentMobility::Type Type);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static UWorld* Actor_GetWorld(AActor* Actor);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static UClass* GetBlueprintGeneratedClass(UBlueprint* Blueprint);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static UClass* GetBlueprintGeneratedClassFromPath(FString Path);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static UObject* GetOuter(UObject* Object);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static UObject* GetOutermost(UObject* Object);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static UObject* Duplicate(UObject* Object, UObject* Outer, FName Name);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static bool HasAnyFlags(UObject* Object, int32 Flags);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static bool HasAnyPackageFlags(UPackage* Package, int32 Flags);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static FString GetName(UObject* Object);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static bool IsPlayInEditor(UWorld* World);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static bool IsPlayInPreview(UWorld* World);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static bool IsGameWorld(UWorld* World);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static void SetClientTravel(UEngine* Engine, UWorld *InWorld, FString NextURL, ETravelType InTravelType);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static UPackage* CreatePackage(UObject* Outer, FString PackageName);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static void AddDynamicBinding(UClass* Outer, UDynamicBlueprintBinding* BindingObject);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static UDynamicBlueprintBinding* GetDynamicBinding(UClass* Outer, TSubclassOf<UDynamicBlueprintBinding> BindingObjectClass);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static void HandleSeamlessTravelPlayer(AGameMode* GameMode, AController*& C);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static void SetRootComponent(AActor* Actor, USceneComponent* Component);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static int32 GetFileSize(UObject* Object, FString Filename);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static bool ReadFile(UObject* Object, FString Filename);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static bool WriteFile(UObject* Object, FString Filename);

	UFUNCTION(BlueprintCallable, Category = "Scripting|Javascript")
	static FString GetDir(UObject* Object, FString WhichDir);
		
	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static bool HasUndo(UEngine* Engine);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static bool ReadDirectory(UObject* Object, FString Directory, TArray<FDirectoryItem>& OutItems);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void ReregisterComponent(UActorComponent* ActorComponent);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void RegisterComponent(UActorComponent* ActorComponent);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void UnregisterComponent(UActorComponent* ActorComponent);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static bool IsRegistered(UActorComponent* ActorComponent);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static void GetAllActorsOfClassAndTags(UObject* WorldContextObject, TSubclassOf<AActor> ActorClass, const TArray<FName>& Tags_Accept, const TArray<FName>& Tags_Deny, TArray<AActor*>& OutActors);

	UFUNCTION(BlueprintCallable, Category = "Javascript | Editor")
	static int32 GetCurrentProcessId();

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static UModel* GetModel(UWorld* World);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static ULevel* GetLevel(AActor* Actor);	

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static FString GetFunctionName(FJavascriptProfileNode Node);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static int32 GetScriptId(FJavascriptProfileNode Node);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static FString GetScriptResourceName(FJavascriptProfileNode Node);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static int32 GetLineNumber(FJavascriptProfileNode Node);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static int32 GetColumnNumber(FJavascriptProfileNode Node);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static int32 GetHitLineCount(FJavascriptProfileNode Node);


	//static bool GetLineTicks(LineTick* entries, unsigned int length) const;
	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static FString GetBailoutReason(FJavascriptProfileNode Node);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static int32 GetHitCount(FJavascriptProfileNode Node);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static int32 GetCallUid(FJavascriptProfileNode Node);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static int32 GetNodeId(FJavascriptProfileNode Node);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static int32 GetChildrenCount(FJavascriptProfileNode Node);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static FJavascriptProfileNode GetChild(FJavascriptProfileNode Node,int32 index);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static int32 GetDeoptInfosCount(FJavascriptProfileNode Node, int32 index);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static FString GetDeoptInfo_Reason(FJavascriptProfileNode Node, int32 index);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static FString GetDeoptInfo_Stack(FJavascriptProfileNode Node, int32 index);
};
