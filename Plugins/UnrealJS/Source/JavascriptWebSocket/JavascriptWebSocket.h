#pragma once

#include "JavascriptWebSocket.generated.h"

UCLASS()
class UJavascriptWebSocket : public UObject
{
	GENERATED_BODY()

public:
	DECLARE_DYNAMIC_MULTICAST_DELEGATE(FOnWebSocketDelegate);

	UPROPERTY(BlueprintAssignable, Category = "Scripting | Javascript")
	FOnWebSocketDelegate OnReceived;

	UPROPERTY(BlueprintAssignable, Category = "Scripting | Javascript")
	FOnWebSocketDelegate OnConnected;

	UPROPERTY(BlueprintAssignable, Category = "Scripting | Javascript")
	FOnWebSocketDelegate OnError;

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static UJavascriptWebSocket* Connect(const FString& Endpoint);

	static UJavascriptWebSocket* CreateFrom(FJavascriptWebSocket*, UObject* Outer);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void SendMemory(int32 NumBytes);

	UFUNCTION(BlueprintPure, Category = "Scripting | Javascript")
	int32 GetReceivedBytes();

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void CopyBuffer();

	UFUNCTION(BlueprintPure, Category = "Scripting | Javascript")
	FString RemoteEndPoint();

	UFUNCTION(BlueprintPure, Category = "Scripting | Javascript")
	FString LocalEndPoint();

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Flush();

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Tick();

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Dispose();

private:
	TSharedPtr<FJavascriptWebSocket> WebSocket;
	int32 Size{ 0 };
	void* Buffer{ nullptr };

	void OnReceivedCallback(void* InData, int32 Count);
	void OnConnectedCallback();
	void OnErrorCallback();
};