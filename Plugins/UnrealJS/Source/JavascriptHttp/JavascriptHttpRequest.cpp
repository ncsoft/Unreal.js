#include "JavascriptHttp.h"
#include "JavascriptHttpRequest.h"
#include "JavascriptContext.h"

#if WITH_EDITOR
#include "TickableEditorObject.h"
typedef FTickableEditorObject FTickableRequest;
#else
#include "Tickable.h"
typedef FTickableGameObject FTickableRequest;
#endif

struct FHttpProcessor : public FTickableRequest
{
public:
	FHttpProcessor(TSharedPtr<IHttpRequest> InRef)
		: Ref(InRef)
	{}

	TSharedPtr<IHttpRequest> Ref;

	virtual void Tick(float DeltaTime) override
	{
		Ref->Tick(DeltaTime);
	}

	virtual bool IsTickable() const override
	{
		return true;
	}

	virtual TStatId GetStatId() const override
	{
		RETURN_QUICK_DECLARE_CYCLE_STAT(JavascriptHttpRequest, STATGROUP_Tickables);
	}	
};

UJavascriptHttpRequest::UJavascriptHttpRequest(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{
	if (!IsTemplate(RF_ClassDefaultObject))
	{
		Request = FHttpModule::Get().CreateRequest();
	}
}

void UJavascriptHttpRequest::BeginDestroy()
{
	Super::BeginDestroy();

	if (IsProcessing())
	{
		EndProcessing();
	}

	Request.Reset();
}

void UJavascriptHttpRequest::BeginProcessing()
{
	Processor = new FHttpProcessor(Request);
}

void UJavascriptHttpRequest::EndProcessing()
{
	delete Processor;
	Processor = nullptr;

	Request->OnProcessRequestComplete().Unbind();
	Request->OnRequestProgress().Unbind();
}

FString UJavascriptHttpRequest::GetVerb()
{
	return Request->GetVerb();
}

void UJavascriptHttpRequest::SetVerb(const FString& Verb)
{
	Request->SetVerb(Verb);
}

void UJavascriptHttpRequest::SetURL(const FString& URL)
{
	Request->SetURL(URL);
}

void UJavascriptHttpRequest::SetContentFromMemory()
{
	TArray<uint8> Payload;
	Payload.Append((uint8*)FArrayBufferAccessor::GetData(), FArrayBufferAccessor::GetSize());
	Request->SetContent(Payload);
}

void UJavascriptHttpRequest::SetContentAsString(const FString& ContentString)
{
	Request->SetContentAsString(ContentString);
}

void UJavascriptHttpRequest::SetHeader(const FString& HeaderName, const FString& HeaderValue)
{
	Request->SetHeader(HeaderName, HeaderValue);
}

bool UJavascriptHttpRequest::ProcessRequest()
{
	if (IsProcessing()) return false;

	Request->OnProcessRequestComplete().BindLambda([&](FHttpRequestPtr, FHttpResponsePtr, bool status){
		OnComplete.ExecuteIfBound(status);
		EndProcessing();
	});

	Request->OnRequestProgress().BindLambda([&](FHttpRequestPtr, int32 sent, int32 recv){
		OnProgress.ExecuteIfBound(sent,recv);
	});
	
	if (Request->ProcessRequest())
	{
		BeginProcessing();
		return true;
	}
	else
	{
		return false;
	}
}

void UJavascriptHttpRequest::CancelRequest()
{
	Request->CancelRequest();
}

EJavascriptHttpRequestStatus::Type UJavascriptHttpRequest::GetStatus()
{
	return EJavascriptHttpRequestStatus::Type(Request->GetStatus());
}

int32 UJavascriptHttpRequest::GetResponseCode()
{
	auto res = Request->GetResponse();
	if (!res.IsValid()) return 0;

	return Request->GetResponse()->GetResponseCode();
}

FString UJavascriptHttpRequest::GetContentAsString()
{
	auto res = Request->GetResponse();
	if (!res.IsValid()) return TEXT("");

	return Request->GetResponse()->GetContentAsString();
}

int32 UJavascriptHttpRequest::GetContentLength()
{
	auto res = Request->GetResponse();
	if (!res.IsValid()) return 0;

	return Request->GetResponse()->GetContent().Num();
}

void UJavascriptHttpRequest::GetContentToMemory()
{
	auto res = Request->GetResponse();
	if (!res.IsValid()) return;

	const auto& Content = Request->GetResponse()->GetContent();

	if (FArrayBufferAccessor::GetSize() >= Content.Num())
	{
		FMemory::Memcpy(FArrayBufferAccessor::GetData(), Content.GetData(), Content.Num());
	}
}

float UJavascriptHttpRequest::GetElapsedTime()
{
	return Request->GetElapsedTime();
}