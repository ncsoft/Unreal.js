// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.
#include "JavascriptWebSocketModule.h"

#include "JSWebSocket.h"

#if PLATFORM_HTML5
#include <errno.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/ioctl.h>
#include <assert.h>
#include <emscripten.h>
#endif

#if PLATFORM_WINDOWS
#include "AllowWindowsPlatformTypes.h"
#endif


#if !PLATFORM_HTML5
#ifndef LWS_INCLUDED
#include "libwebsockets.h"
#define LWS_INCLUDED
#define LWS_EXTERN extern
#include "private-libwebsockets.h"
#endif
#endif 

#if PLATFORM_WINDOWS
#include "HideWindowsPlatformTypes.h"
#endif


#if !PLATFORM_HTML5
uint8 PREPADDING_JS[LWS_SEND_BUFFER_PRE_PADDING];
uint8 POSTPADDING_JS[LWS_SEND_BUFFER_POST_PADDING];
#endif 


#if !PLATFORM_HTML5
static void libwebsocket_debugLogS_JS(int level, const char *line)
{
	UE_LOG(LogWebsocket, Log, TEXT("client: %s"), ANSI_TO_TCHAR(line));
}
#endif 

FJavascriptWebSocket::FJavascriptWebSocket(
		const FInternetAddr& ServerAddress
)
:IsServerSide(false)
{

#if !PLATFORM_HTML5_BROWSER

#if !UE_BUILD_SHIPPING
	lws_set_log_level(LLL_ERR | LLL_WARN | LLL_NOTICE | LLL_DEBUG | LLL_INFO, libwebsocket_debugLogS_JS);
#endif 

	Protocols = new libwebsocket_protocols[3];
	FMemory::Memzero(Protocols, sizeof(libwebsocket_protocols) * 3);

	Protocols[0].name = "binary";
	Protocols[0].callback = FJavascriptWebSocket::unreal_networking_client;
	Protocols[0].per_session_data_size = 0;
	Protocols[0].rx_buffer_size = 10 * 1024 * 1024;

	Protocols[1].name = nullptr;
	Protocols[1].callback = nullptr;
	Protocols[1].per_session_data_size = 0;

	struct lws_context_creation_info Info;
	memset(&Info, 0, sizeof Info);

	Info.port = CONTEXT_PORT_NO_LISTEN;
	Info.protocols = &Protocols[0];
	Info.gid = -1;
	Info.uid = -1;
	Info.user = this;

	Context = libwebsocket_create_context(&Info);

	check(Context); 

	//@HACK
	Context->user_space = this;

	Wsi = libwebsocket_client_connect_extended
							(Context, 
							TCHAR_TO_ANSI(*ServerAddress.ToString(false)), 
							ServerAddress.GetPort(), 
							false, "/", TCHAR_TO_ANSI(*ServerAddress.ToString(false)), TCHAR_TO_ANSI(*ServerAddress.ToString(false)), Protocols[1].name, -1,this);

	check(Wsi);

#endif 

#if PLATFORM_HTML5_BROWSER

	struct sockaddr_in addr;
	int res;

	SockFd = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP);
	if (SockFd == -1) {
		UE_LOG(LogWebsocket, Error, TEXT("Socket creationg failed "));
	}
	else
	{
		UE_LOG(LogWebsocket, Warning, TEXT(" Socked %d created "), SockFd);
	}

	fcntl(SockFd, F_SETFL, O_NONBLOCK);

	memset(&addr, 0, sizeof(addr));
	addr.sin_family = AF_INET;
	addr.sin_port = htons(ServerAddress.GetPort());

	if (inet_pton(AF_INET, TCHAR_TO_ANSI(*ServerAddress.ToString(false)), &addr.sin_addr) != 1) {
		UE_LOG(LogWebsocket, Warning, TEXT("inet_pton failed "));
		return; 
	}

	int Ret = connect(SockFd, (struct sockaddr *)&addr, sizeof(addr));
	UE_LOG(LogWebsocket, Warning, TEXT(" Connect socket returned %d"), Ret);

#endif 
}

FJavascriptWebSocket::FJavascriptWebSocket(WebSocketInternalContext* InContext, WebSocketInternal* InWsi)
	: Context(InContext)
	, Wsi(InWsi)
	, IsServerSide(true)
	, Protocols(nullptr)
{
}


bool FJavascriptWebSocket::Send(uint8* Data, uint32 Size)
{
	TArray<uint8> Buffer;
	// insert size. 

#if !PLATFORM_HTML5
	Buffer.Append((uint8*)&PREPADDING_JS, sizeof(PREPADDING_JS));
#endif 

	//Buffer.Append((uint8*)&Size, sizeof (uint32));
	Buffer.Append((uint8*)Data, Size);

#if !PLATFORM_HTML5
	Buffer.Append((uint8*)&POSTPADDING_JS, sizeof(POSTPADDING_JS));
#endif 

	OutgoingBuffer.Add(Buffer);

	return true;
}

void FJavascriptWebSocket::SetRecieveCallBack(FJavascriptWebSocketPacketRecievedCallBack CallBack)
{
	RecievedCallBack = CallBack; 
}

FString FJavascriptWebSocket::RemoteEndPoint()
{
#if !PLATFORM_HTML5
	ANSICHAR Peer_Name[128];
	ANSICHAR Peer_Ip[128];
	libwebsockets_get_peer_addresses(Context, Wsi, libwebsocket_get_socket_fd(Wsi), Peer_Name, sizeof Peer_Name, Peer_Ip, sizeof Peer_Ip);
	return FString(Peer_Name);
#endif

#if PLATFORM_HTML5
	return FString(TEXT("TODO:REMOTEENDPOINT"));
#endif
}


FString FJavascriptWebSocket::LocalEndPoint()
{
#if !PLATFORM_HTML5
	return FString(ANSI_TO_TCHAR(libwebsocket_canonical_hostname(Context)));
#endif 

#if PLATFORM_HTML5
	return FString(TEXT("TODO:LOCALENDPOINT"));
#endif

}

void FJavascriptWebSocket::Tick()
{
	HandlePacket();
}

void FJavascriptWebSocket::HandlePacket()
{
#if !PLATFORM_HTML5
	{
		libwebsocket_service(Context, 0);
		if (!IsServerSide)
			libwebsocket_callback_on_writable_all_protocol(&Protocols[0]);
	}
#endif 

#if PLATFORM_HTML5

	fd_set Fdr;
	fd_set Fdw;
	int Res;

	// make sure that server.fd is ready to read / write
	FD_ZERO(&Fdr);
	FD_ZERO(&Fdw);
	FD_SET(SockFd, &Fdr);
	FD_SET(SockFd, &Fdw);
	Res = select(64, &Fdr, &Fdw, NULL, NULL);

	if (Res == -1) {
		UE_LOG(LogWebsocket, Warning, TEXT("Select Failed!"));
		return;
	}
	
	if (FD_ISSET(SockFd, &Fdr)) {
		// we can read! 
		OnRawRecieve(NULL, NULL);
	}

	if (FD_ISSET(SockFd, &Fdw)) {
		// we can write
		OnRawWebSocketWritable(NULL);
	}
#endif 
}

void FJavascriptWebSocket::Flush()
{
	auto PendingMesssages = OutgoingBuffer.Num();
	while (OutgoingBuffer.Num() > 0 && !IsServerSide)
	{
#if !PLATFORM_HTML5
		if (Protocols)
			libwebsocket_callback_on_writable_all_protocol(&Protocols[0]);
		else
			libwebsocket_callback_on_writable(Context, Wsi);
#endif
		HandlePacket();
		if (PendingMesssages >= OutgoingBuffer.Num()) 
		{
			UE_LOG(LogWebsocket, Warning, TEXT("Unable to flush all of OutgoingBuffer in FJavascriptWebSocket."));
			break;
		}
	};
}

void FJavascriptWebSocket::SetConnectedCallBack(FJavascriptWebSocketInfoCallBack CallBack)
{
	ConnectedCallBack = CallBack; 
}

void FJavascriptWebSocket::SetErrorCallBack(FJavascriptWebSocketInfoCallBack CallBack)
{
	ErrorCallBack = CallBack; 
}

void FJavascriptWebSocket::OnRawRecieve(void* Data, uint32 Size)
{
#if !PLATFORM_HTML5
	RecievedCallBack.ExecuteIfBound(Data, Size);
	/*RecievedBuffer.Append((uint8*)Data, Size);

	while (RecievedBuffer.Num())
	{
		uint32 BytesToBeRead = *(uint32*)RecievedBuffer.GetData();
		if (BytesToBeRead <= ((uint32)RecievedBuffer.Num() - sizeof(uint32)))
		{
			RecievedCallBack.ExecuteIfBound((void*)((uint8*)RecievedBuffer.GetData() + sizeof(uint32)), BytesToBeRead);
			RecievedBuffer.RemoveAt(0, sizeof(uint32) + BytesToBeRead );
		}
		else
		{
			break;
		}
	}*/
#endif

#if PLATFORM_HTML5
	uint8 Buffer[1024]; // should be at MAX PACKET SIZE. 
	Result = recv(SockFd, Buffer, Size, 0);

	if(Result < 0 )
	{
		UE_LOG(LogWebsocket, Log, TEXT("Read message failed!"));
		this->ErrorCallBack.ExecuteIfBound();
	}
	else
	{
		UE_LOG(LogWebsocket, Log, TEXT("Read %d bytes and Executing."), Size);
		check(Size == Result);
		RecievedCallBack.ExecuteIfBound(Buffer, Size);
	}
	
	//int Result = recv(SockFd, Buffer, sizeof(uint32), 0);

	//uint32 DataToBeRead = 0;*(uint32*)Buffer;

	//if (Result != sizeof(uint32)) 
	//{
	//	UE_LOG(LogWebsocket, Log, TEXT("Read message size failed!"));
	//	this->ErrorCallBack.ExecuteIfBound(); 
	//	return;
	//}
	//else
	//{
	//	DataToBeRead = *(uint32*)Buffer;
	//	UE_LOG(LogWebsocket, Log, TEXT("Read 4 bytes showing the size"), DataToBeRead);
	//}

	//check(Result == sizeof(uint32)); 

	//// read rest of the data. 
	//Result = recv(SockFd, Buffer, DataToBeRead, 0);

	//if(Result < 0 )
	//{
	//	UE_LOG(LogWebsocket, Log, TEXT("Read message failed!"));
	//	this->ErrorCallBack.ExecuteIfBound();
	//}
	//else
	//{
	//	UE_LOG(LogWebsocket, Log, TEXT("Read %d bytes and Executing."), DataToBeRead);
	//	check(DataToBeRead == Result);
	//	RecievedCallBack.ExecuteIfBound(Buffer, DataToBeRead);
	//}

#endif 

}

void FJavascriptWebSocket::OnRawWebSocketWritable(WebSocketInternal* wsi)
{
	if (OutgoingBuffer.Num() == 0)
		return;

	TArray <uint8>& Packet = OutgoingBuffer[0];

#if !PLATFORM_HTML5_BROWSER

	uint32 TotalDataSize = Packet.Num() - LWS_SEND_BUFFER_PRE_PADDING - LWS_SEND_BUFFER_POST_PADDING;
	uint32 DataToSend = TotalDataSize;
	while (DataToSend)
	{
		int Sent = libwebsocket_write(Wsi, Packet.GetData() + LWS_SEND_BUFFER_PRE_PADDING + (DataToSend-TotalDataSize), DataToSend, (libwebsocket_write_protocol)LWS_WRITE_BINARY);
		if (Sent < 0)
		{
			ErrorCallBack.ExecuteIfBound();
			return;
		}
		if ((uint32)Sent < DataToSend)
		{
			UE_LOG(LogWebsocket, Warning, TEXT("Could not write all '%d' bytes to socket"), DataToSend);
		}
		DataToSend-=Sent;
	}

	check(Wsi == wsi);

#endif

#if  PLATFORM_HTML5_BROWSER

	uint32 TotalDataSize = Packet.Num();
	uint32 DataToSend = TotalDataSize;
	while (DataToSend)
	{
		// send actual data in one go. 
		int Result = send(SockFd, Packet.GetData()+(DataToSend-TotalDataSize),DataToSend, 0);
		if (Result == -1)
		{
			// we are caught with our pants down. fail. 
			UE_LOG(LogWebsocket, Error, TEXT("Could not write %d bytes"), Packet.Num());
			ErrorCallBack.ExecuteIfBound(); 
			return;
		}
		UE_CLOG((uint32)Result < DataToSend, LogWebsocket, Warning, TEXT("Could not write all '%d' bytes to socket"), DataToSend);
		DataToSend-=Result;
	}
	
#endif 

	// this is very inefficient we need a constant size circular buffer to efficiently not do unnecessary allocations/deallocations. 
	OutgoingBuffer.RemoveAt(0);

}

FJavascriptWebSocket::~FJavascriptWebSocket()
{
	RecievedCallBack.Unbind();
	Flush();

#if !PLATFORM_HTML5
	if ( !IsServerSide)
	{
		libwebsocket_context_destroy(Context);
		Context = NULL;
		delete Protocols;
		Protocols = NULL;
	}
#endif 

#if PLATFORM_HTML5
	close(SockFd);
#endif 

}

#if !PLATFORM_HTML5
int FJavascriptWebSocket::unreal_networking_client(
		struct libwebsocket_context *Context, 
		struct libwebsocket *Wsi, 
		enum libwebsocket_callback_reasons Reason, 
		void *User, 
		void *In, 
		size_t Len)
{
	FJavascriptWebSocket* Socket = (FJavascriptWebSocket*)libwebsocket_context_user(Context);;
	switch (Reason)
	{
	case LWS_CALLBACK_CLIENT_ESTABLISHED:
		{
			Socket->ConnectedCallBack.ExecuteIfBound();
			libwebsocket_set_timeout(Wsi, NO_PENDING_TIMEOUT, 0);
			check(Socket->Wsi == Wsi);
		}
		break;
	case LWS_CALLBACK_CLIENT_CONNECTION_ERROR:
		{
			Socket->ErrorCallBack.ExecuteIfBound();
			return -1;
		}
		break;
	case LWS_CALLBACK_CLIENT_RECEIVE:
		{
			// push it on the socket. 
			Socket->OnRawRecieve(In, (uint32)Len); 
			check(Socket->Wsi == Wsi);
			libwebsocket_set_timeout(Wsi, NO_PENDING_TIMEOUT, 0);
			break;
		}
	case LWS_CALLBACK_CLIENT_WRITEABLE:
		{
			check(Socket->Wsi == Wsi);
			Socket->OnRawWebSocketWritable(Wsi); 
			libwebsocket_callback_on_writable(Context, Wsi);
			libwebsocket_set_timeout(Wsi, NO_PENDING_TIMEOUT, 0);
			break; 
		}
	case LWS_CALLBACK_CLOSED:
		{
			Socket->ErrorCallBack.ExecuteIfBound();
			return -1;
		}
	}

	return 0; 
}
#endif 

