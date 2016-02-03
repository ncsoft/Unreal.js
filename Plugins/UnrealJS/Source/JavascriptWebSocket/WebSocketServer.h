// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.
//
// Read http://lucumr.pocoo.org/2012/9/24/websockets-101/ for a nice intro to web sockets. 
// This uses https://libwebsockets.org/trac/libwebsockets 
#pragma  once

class FWebSocketServer
{
public:

	FWebSocketServer(); 
	~FWebSocketServer();

	/** Create a web socket server*/
	bool Init(uint32 Port, FWebsocketClientConnectedCallBack);

	/** Service libwebsocket */
	bool Tick();

	/** Describe this libwebsocket server */
	FString Info(); 

private: 

	/** Callback for a new websocket connection to the server */
	FWebsocketClientConnectedCallBack  ConnectedCallBack;

	/** Internal libwebsocket context */
	WebSocketInternalContext* Context;

	/** Protocols serviced by this implementation */
	WebSocketInternalProtocol* Protocols;

	friend class FWebSocket;
};


