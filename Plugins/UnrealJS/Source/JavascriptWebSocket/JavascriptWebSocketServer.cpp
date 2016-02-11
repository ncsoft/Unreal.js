// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.
#include "JavascriptWebSocketModule.h"
#include "JSWebSocket.h"
#include "JSWebSocketServer.h"
#include "JavascriptWebSocketServer.h"
#include "JavascriptWebSocket.h"

UJavascriptWebSocketServer* UJavascriptWebSocketServer::Create(int32 Port)
{	
	auto instance = NewObject<UJavascriptWebSocketServer>();
	auto server = instance->WebSocketServer = MakeShareable<FJavascriptWebSocketServer>(new FJavascriptWebSocketServer);
	FJavascriptWebSocketClientConnectedCallBack callback;
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

void UJavascriptWebSocketServer::OnConnectedCallback(FJavascriptWebSocket* WebSocket)
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
