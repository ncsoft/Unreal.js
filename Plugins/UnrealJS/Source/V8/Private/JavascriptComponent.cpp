#include "V8PCH.h"
#include "JavascriptComponent.h"
#include "JavascriptIsolate.h"
#include "JavascriptContext.h"
#include "IV8.h"

UJavascriptComponent::UJavascriptComponent(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{
	PrimaryComponentTick.bCanEverTick = true;
	bTickInEditor = false;
	bAutoActivate = true;
	bWantsInitializeComponent = true;
}

void UJavascriptComponent::OnRegister()
{
	auto ContextOwner = GetOuter();
	if (ContextOwner && !HasAnyFlags(RF_ClassDefaultObject) && !ContextOwner->HasAnyFlags(RF_ClassDefaultObject))
	{
		if (GetWorld() && (GetWorld()->IsGameWorld() || bActiveWithinEditor))
		{
			auto Isolate = NewObject<UJavascriptIsolate>();
			auto Context = Isolate->CreateContext();

			JavascriptContext = Context;

			Context->Expose("Root", this);
			Context->Expose("GWorld", GetWorld());
			Context->Expose("GEngine", GEngine);
		}
	}

	Super::OnRegister();
}

void UJavascriptComponent::Activate(bool bReset)
{
	Super::Activate(bReset);

	if (JavascriptContext)
	{
		JavascriptContext->RunFile(*ScriptSourceFile);

		SetComponentTickEnabled(OnTick.IsBound());	
	}

	OnBeginPlay.ExecuteIfBound();
}

void UJavascriptComponent::Deactivate()
{	
	OnEndPlay.ExecuteIfBound();

	Super::Deactivate();
}

void UJavascriptComponent::BeginDestroy()
{
	if (bIsActive)
	{
		Deactivate();
	}

	Super::BeginDestroy();
}

void UJavascriptComponent::TickComponent(float DeltaTime, enum ELevelTick TickType, FActorComponentTickFunction *ThisTickFunction)
{
	check(bRegistered);

	Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

	OnTick.ExecuteIfBound(DeltaTime);
}

void UJavascriptComponent::ForceGC()
{
	JavascriptContext->RunScript(TEXT("gc();"));
}

void UJavascriptComponent::Expose(FString ExposedAs, UObject* Object)
{
	JavascriptContext->Expose(ExposedAs, Object);
}

void UJavascriptComponent::Invoke(FName Name)
{
	OnInvoke.ExecuteIfBound(Name);
}

void UJavascriptComponent::ProcessEvent(UFunction* Function, void* Parms)
{
	if (JavascriptContext && JavascriptContext->CallProxyFunction(this, this, Function, Parms))
	{
		return;
	}

	Super::ProcessEvent(Function, Parms);
}

UObject* UJavascriptComponent::ResolveAsset(FName Name, bool bTryLoad)
{
	for (const auto& Item : Assets)
	{
		if (Item.Name == Name)
		{
			return bTryLoad ? Item.Asset.TryLoad() : Item.Asset.ResolveObject();
		}
	}

	return nullptr;
}

UClass* UJavascriptComponent::ResolveClass(FName Name)
{	
	for (const auto& Item : ClassAssets)
	{
		if (Item.Name == Name)
		{
			return Item.Class;
		}
	}

	return nullptr;
}

