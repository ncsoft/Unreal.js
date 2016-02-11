#pragma once

#include "JavascriptWebSocketServer.generated.h"

class FJavascriptWebSocketServer;
class UJavascriptWebSocket;

UCLASS()
class UJavascriptWebSocketServer : public UObject
{
	GENERATED_BODY()

public:
	DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnWebSocketServerDelegate,UJavascriptWebSocket*,WebSocket);

	UPROPERTY(BlueprintAssignable, Category = "Scripting | Javascript")
	FOnWebSocketServerDelegate OnConnected;

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	static UJavascriptWebSocketServer* Create(int32 Port);

	UFUNCTION(BlueprintPure, Category = "Scripting | Javascript")
	FString Info();	

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Tick();

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	void Dispose();

	UPROPERTY()
	TArray<UJavascriptWebSocket*> Connections;

	void OnConnectionLost(UJavascriptWebSocket* Connection);

private:
	TSharedPtr<FJavascriptWebSocketServer> WebSocketServer;

	void OnConnectedCallback(FJavascriptWebSocket*);
};