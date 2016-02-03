// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.
#include "JavascriptWebSocketModule.h"
#include "WebSocket.h"
#include "WebSocketServer.h"
#include "JavascriptWebSocketServer.h"

UJavascriptWebSocketServer* UJavascriptWebSocketServer::Create(int32 Port)
{	
	auto instance = NewObject<UJavascriptWebSocketServer>();
	auto server = instance->WebSocketServer = MakeShareable<FWebSocketServer>(new FWebSocketServer);
	FWebsocketClientConnectedCallBack callback;
	callback.BindUObject(instance, &UJavascriptWebSocketServer::OnConnectedCallback);
	if (!server->Init(Port, callback))
	{
		return nullptr;
	}
	return instance;
}

FString UJavascriptWebSocketServer::Info()
{
	if (!WebSocketServer.IsValid()) return TEXT("Invalid");

	return WebSocketServer->Info();
}

void UJavascriptWebSocketServer::OnConnectedCallback(FWebSocket* WebSocket)
{
	auto instance = UJavascriptWebSocket::CreateFrom(WebSocket, this);
	Connections.Add(instance);
	OnConnected.Broadcast(instance);
}

void UJavascriptWebSocketServer::OnConnectionLost(UJavascriptWebSocket* Connection)
{
	Connections.Remove(Connection);
}

void UJavascriptWebSocketServer::Tick()
{
	if (!WebSocketServer.IsValid()) return;

	WebSocketServer->Tick();

	for (auto Connection : Connections)
	{
		Connection->Tick();
	}	
}

void UJavascriptWebSocketServer::Dispose()
{
	WebSocketServer.Reset();
}
