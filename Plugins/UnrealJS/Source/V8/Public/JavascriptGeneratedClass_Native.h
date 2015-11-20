#pragma once

#include "JavascriptGeneratedClass_Native.generated.h"

struct FJavascriptContext;

UCLASS()
class V8_API UJavascriptGeneratedClass_Native : public UBlueprintGeneratedClass
{
	GENERATED_BODY()

public:
	// UObject interface
	virtual void Serialize(FArchive& Ar) override { UClass::Serialize(Ar);  }
	virtual void PostLoad() override { UClass::PostLoad(); }
	virtual void PostInitProperties() override { UClass::PostInitProperties(); }
	// End UObject interface

	// UClass interface
#if WITH_EDITOR
	virtual UClass* GetAuthoritativeClass() override { return UClass::GetAuthoritativeClass();  }
	virtual void ConditionalRecompileClass(TArray<UObject*>* ObjLoaded) override { UClass::ConditionalRecompileClass(ObjLoaded);  }
	virtual UObject* GetArchetypeForCDO() const override { return UClass::GetArchetypeForCDO();  }
#endif //WITH_EDITOR
	virtual bool IsFunctionImplementedInBlueprint(FName InFunctionName) const override { return false;  }
	virtual uint8* GetPersistentUberGraphFrame(UObject* Obj, UFunction* FuncToCheck) const override { return nullptr;  }
	virtual void CreatePersistentUberGraphFrame(UObject* Obj, bool bCreateOnlyIfEmpty = false, bool bSkipSuperClass = false) const override {}
	virtual void DestroyPersistentUberGraphFrame(UObject* Obj, bool bSkipSuperClass = false) const override {}
	virtual void Link(FArchive& Ar, bool bRelinkExistingProperties) override { UClass::Link(Ar, bRelinkExistingProperties); }
	virtual void PurgeClass(bool bRecompilingOnLoad) override { UClass::PurgeClass(bRecompilingOnLoad);  }
	virtual void Bind() override { UClass::Bind(); }
	virtual void GetRequiredPreloadDependencies(TArray<UObject*>& DependenciesOut) override { UClass::GetRequiredPreloadDependencies(DependenciesOut);  }
	virtual UObject* FindArchetype(UClass* ArchetypeClass, const FName ArchetypeName) const override { return UClass::FindArchetype(ArchetypeClass, ArchetypeName);  }
	// End UClass interface

public:		
	TWeakPtr<FJavascriptContext> JavascriptContext;	
};
