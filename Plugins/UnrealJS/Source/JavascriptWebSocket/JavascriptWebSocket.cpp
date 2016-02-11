// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.
#include "JavascriptWebSocketModule.h"
#include "JavascriptWebSocket.h"
#include "JavascriptWebSocketServer.h"
#include "JavascriptContext.h"
#include "JSWebSocket.h"

UJavascriptWebSocket* UJavascriptWebSocket::Connect(const FString& EndpointString)
{
	FIPv4Endpoint Endpoint;

	if (!FIPv4Endpoint::Parse(EndpointString, Endpoint))
	{
		return nullptr;
	}
	
	auto addr = Endpoint.ToInternetAddr();
	return CreateFrom(new FJavascriptWebSocket(*addr), GetTransientPackage());
}

UJavascriptWebSocket* UJavascriptWebSocket::CreateFrom(FJavascriptWebSocket* WebSocket, UObject* Outer)
{
	auto instance = NewObject<UJavascriptWebSocket>(Outer);
	instance->WebSocket = MakeShareable<FJavascriptWebSocket>(WebSocket);

	{
		FJavascriptWebSocketPacketRecievedCallBack callback;
		callback.BindUObject(instance, &UJavascriptWebSocket::OnReceivedCallback);
		instance->WebSocket->SetRecieveCallBack(callback);
	}

	{
		FJavascriptWebSocketInfoCallBack callback;
		callback.BindUObject(instance, &UJavascriptWebSocket::OnErrorCallback);
		instance->WebSocket->SetErrorCallBack(callback);
	}

	{
		FJavascriptWebSocketInfoCallBack callback;
		callback.BindUObject(instance, &UJavascriptWebSocket::OnConnectedCallback);
		instance->WebSocket->SetConnectedCallBack(callback);
	}
	return instance;
}

void UJavascriptWebSocket::OnReceivedCallback(void* InData, int32 Count)
{
	Buffer = InData;
	Size = Count;
	OnReceived.Broadcast();
	Buffer = InData;
	Size = 0;
}

int32 UJavascriptWebSocket::GetReceivedBytes()
{
	return Size;
}

void UJavascriptWebSocket::CopyBuffer()
{
	if (FArrayBufferAccessor::GetSize() >= Size)
	{
		FMemory::Memcpy(FArrayBufferAccessor::GetData(), Buffer, Size);
	}
}

void UJavascriptWebSocket::OnConnectedCallback()
{
	OnConnected.Broadcast();
}

void UJavascriptWebSocket::OnErrorCallback()
{
	OnError.Broadcast();

	if (auto server = Cast<UJavascriptWebSocketServer>(GetOuter()))
	{
		server->OnConnectionLost(this);
	}
}

void UJavascriptWebSocket::SendMemory(int32 NumBytes)
{
	if (!WebSocket.IsValid()) return;

	auto Buffer = FArrayBufferAccessor::GetData();
	auto Size = FArrayBufferAccessor::GetSize();

	if (NumBytes > Size) return;

	WebSocket->Send((uint8*)Buffer, NumBytes);
}

FString UJavascriptWebSocket::RemoteEndPoint()
{
	if (!WebSocket.IsValid()) return TEXT("Invalid");

	return WebSocket->RemoteEndPoint();
}

FString UJavascriptWebSocket::LocalEndPoint()
{
	if (!WebSocket.IsValid()) return TEXT("Invalid");

	return WebSocket->LocalEndPoint();
}

void UJavascriptWebSocket::Flush()
{
	if (!WebSocket.IsValid()) return;

	WebSocket->Flush();
}

void UJavascriptWebSocket::Tick()
{
	if (!WebSocket.IsValid()) return;

	WebSocket->Tick();
}

void UJavascriptWebSocket::Dispose()
{
	WebSocket.Reset();
}