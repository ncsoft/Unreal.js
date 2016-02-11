#pragma once

#include "Core.h"
#include "Engine.h"
#include "Networking.h"
#include "Sockets.h"
#include "SocketSubsystem.h"
#include "ModuleManager.h"

// Interfaces
#include "IJavascriptWebSocketModule.h"

class FJavascriptWebSocket;
class FJavascriptWebSocketServer;

typedef struct libwebsocket_context WebSocketInternalContext;
typedef struct libwebsocket WebSocketInternal;
typedef struct libwebsocket_protocols WebSocketInternalProtocol;

DECLARE_DELEGATE_TwoParams(FJavascriptWebSocketPacketRecievedCallBack, void* /*Data*/, int32 /*Data Size*/);
DECLARE_DELEGATE_OneParam(FJavascriptWebSocketClientConnectedCallBack, FJavascriptWebSocket* /*Socket*/);
DECLARE_DELEGATE(FJavascriptWebSocketInfoCallBack);

DECLARE_LOG_CATEGORY_EXTERN(LogWebsocket, Warning, All);
