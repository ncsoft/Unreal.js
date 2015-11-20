#pragma once

#include "JavascriptContext.h"
#include "JavascriptComponent.generated.h"

/**
 * 
 */
UCLASS(BlueprintType, ClassGroup = Script, Blueprintable, hideCategories = (ComponentReplication), editinlinenew, meta = (BlueprintSpawnableComponent))
class V8_API UJavascriptComponent : public UActorComponent
{
	GENERATED_UCLASS_BODY()

public:
	DECLARE_DYNAMIC_DELEGATE_OneParam(FJavascriptTickSignature, float, DeltaSeconds);	
	DECLARE_DYNAMIC_DELEGATE_OneParam(FJavascriptNameSignature, FName, Name);
	DECLARE_DYNAMIC_DELEGATE(FJavascriptNoParamSignature);

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Javascript")
	FString ScriptSourceFile;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Javascript")
	bool bActiveWithinEditor;

	UPROPERTY(transient)
	UJavascriptContext* JavascriptContext;	

	UPROPERTY()
	FJavascriptTickSignature OnTick;

	UPROPERTY()
	FJavascriptNoParamSignature OnBeginPlay;

	UPROPERTY()
	FJavascriptNoParamSignature OnEndPlay;

	UPROPERTY()
	FJavascriptNameSignature OnInvoke;

	// Begin UActorComponent interface.
	virtual void Activate(bool bReset = false) override;
	virtual void Deactivate() override;	
	virtual void OnRegister() override;
	virtual void TickComponent(float DeltaTime, enum ELevelTick TickType, FActorComponentTickFunction *ThisTickFunction) override;
	virtual void BeginDestroy() override;
	// Begin UActorComponent interface.

	UFUNCTION(BlueprintCallable, Category = "Javascript")
	void ForceGC();

	UFUNCTION(BlueprintCallable, Category = "Javascript")
	void Expose(FString ExposedAs, UObject* Object);

	UFUNCTION(BlueprintCallable, Category = "Javascript")
	void Invoke(FName Name);

	virtual void ProcessEvent(UFunction* Function, void* Parms) override;	

	template <typename... Rest>
	bool FastCall(Rest... rest)
	{
		return JavascriptContext && JavascriptContext->FastCall(this, rest...);
	}

	template <typename... Rest>
	bool FastCallWithReturn(Rest... rest)
	{
		return JavascriptContext && JavascriptContext->FastCallWithReturn(this, rest...);
	}
};
