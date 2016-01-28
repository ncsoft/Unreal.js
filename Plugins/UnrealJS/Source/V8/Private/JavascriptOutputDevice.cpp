#include "V8PCH.h"
#include "JavascriptOutputDevice.h"
#include "UObjectThreadContext.h"

/** This class is to capture all log output even if the log window is closed */
class FJavascriptOutputDevice : public FOutputDevice
{
public:
	UJavascriptOutputDevice* OutputDevice;

	FJavascriptOutputDevice(UJavascriptOutputDevice* InOutputDevice)
	{
		OutputDevice = InOutputDevice;

		GLog->AddOutputDevice(this);
		GLog->SerializeBacklog(this);
	}

	~FJavascriptOutputDevice()
	{
		// At shutdown, GLog may already be null
		if (GLog != NULL)
		{
			GLog->RemoveOutputDevice(this);
		}
	}
	
protected:

	virtual void Serialize(const TCHAR* V, ELogVerbosity::Type Verbosity, const class FName& Category) override
	{		
		static bool bIsReentrant = false;
		if (bIsReentrant) return;

		TGuardValue<bool> ReentrantGuard(bIsReentrant, true);
		if (!OutputDevice->HasAnyFlags(RF_Unreachable) && !FUObjectThreadContext::Get().IsRoutingPostLoad)
		{
			OutputDevice->OnMessage(V, (ELogVerbosity_JS)Verbosity, Category);
		}		
	}
};

UJavascriptOutputDevice::UJavascriptOutputDevice(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
	if (!HasAnyFlags(RF_ClassDefaultObject))
	{
		OutputDevice = MakeShareable(new FJavascriptOutputDevice(this));
	}	
}

void UJavascriptOutputDevice::BeginDestroy()
{
	Super::BeginDestroy();

	OutputDevice.Reset();
}

void UJavascriptOutputDevice::Kill()
{
	OutputDevice.Reset();	
}