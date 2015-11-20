#pragma once

#include "JavascriptHttpRequest.generated.h"

UENUM()
namespace EJavascriptHttpRequestStatus
{
	/**
	* Enumerates the current state of an Http request
	*/
	enum Type
	{
		/** Has not been started via ProcessRequest() */
		NotStarted,
		/** Currently being ticked and processed */
		Processing,
		/** Finished but failed */
		Failed,
		/** Finished and was successful */
		Succeeded
	};
}

struct FHttpProcessor;

/**
 * 
 */
UCLASS()
class JAVASCRIPTHTTP_API UJavascriptHttpRequest : public UObject
{
	GENERATED_UCLASS_BODY()

public:	
	TSharedPtr<IHttpRequest> Request;

	/**
	* Gets the verb (GET, PUT, POST) used by the request.
	*
	* @return the verb string
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	FString GetVerb();

	/**
	* Sets the verb used by the request.
	* Eg. (GET, PUT, POST)
	* Should be set before calling ProcessRequest.
	* If not specified then a GET is assumed.
	*
	* @param Verb - verb to use.
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	void SetVerb(const FString& Verb);

	/**
	* Sets the URL for the request
	* Eg. (http://my.domain.com/something.ext?key=value&key2=value).
	* Must be set before calling ProcessRequest.
	*
	* @param URL - URL to use.
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	void SetURL(const FString& URL);

	/**
	* Sets the content of the request (optional data).
	* Usually only set for POST requests.
	*
	* @param ContentPayload - payload to set.
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	void SetContentFromMemory();

	/**
	* Sets the content of the request as a string encoded as UTF8.
	*
	* @param ContentString - payload to set.
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	void SetContentAsString(const FString& ContentString);

	/**
	* Sets optional header info.
	* Content-Length is the only header set for you.
	* Required headers depends on the request itself.
	* Eg. "multipart/form-data" needed for a form post
	*
	* @param HeaderName - Name of the header (ie, Content-Type)
	* @param HeaderValue - Value of the header
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	void SetHeader(const FString& HeaderName, const FString& HeaderValue);

	/**
	* Called to begin processing the request.
	* OnProcessRequestComplete delegate is always called when the request completes or on error if it is bound.
	* A request can be re-used but not while still being processed.
	*
	* @return if the request was successfully started.
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	bool ProcessRequest();

	/**
	* Delegate called when an Http request completes
	*
	* @param first parameter - indicates whether or not the request was able to connect successfully
	*/
	DECLARE_DYNAMIC_DELEGATE_OneParam(FJavascriptHttpRequestCompleteDelegate, bool, successful);

	/**
	* Delegate called per tick to update an Http request upload or download size progress
	*
	* @param first parameter - the number of bytes sent / uploaded in the request so far.
	* @param second parameter - the number of bytes received / downloaded in the response so far.
	*/
	DECLARE_DYNAMIC_DELEGATE_TwoParams(FJavascriptHttpRequestProgressDelegate, int32, sent, int32, recv);

	UPROPERTY()
	FJavascriptHttpRequestCompleteDelegate OnComplete;

	UPROPERTY()
	FJavascriptHttpRequestProgressDelegate OnProgress;	

	/**
	* Called to cancel a request that is still being processed
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	void CancelRequest();

	/**
	* Get the current status of the request being processed
	*
	* @return the current status
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	EJavascriptHttpRequestStatus::Type GetStatus();
		
	/**
	* Gets the response code returned by the requested server.
	* See EHttpResponseCodes for known response codes
	*
	* @return the response code.
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	int32 GetResponseCode();

	/**
	* Returns the payload as a string, assuming the payload is UTF8.
	*
	* @return the payload as a string.
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	FString GetContentAsString();	

	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	int32 GetContentLength();

	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	void GetContentToMemory();

	/**
	* Gets the time that it took for the server to fully respond to the request.
	*
	* @return elapsed time in seconds.
	*/
	UFUNCTION(BlueprintCallable, Category = "Online | Http")
	float GetElapsedTime();

	virtual void BeginDestroy() override;

	FHttpProcessor* Processor{nullptr};

	bool IsProcessing() { return Processor != nullptr; }

	void BeginProcessing();
	void EndProcessing();
};