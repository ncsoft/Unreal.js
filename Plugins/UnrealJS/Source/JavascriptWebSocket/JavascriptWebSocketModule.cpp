#include "JavascriptWebSocketModule.h"

class FJavascripWebSocketModule : public IJavascriptWebSocketModule
{
	// Begin IModuleInterface
	virtual void StartupModule() override;
	virtual void ShutdownModule() override;
	// End IModuleInterface

};


void FJavascripWebSocketModule::StartupModule()
{

}


void FJavascripWebSocketModule::ShutdownModule()
{

}

IMPLEMENT_MODULE(FJavascripWebSocketModule, JavascriptWebSocket);
DEFINE_LOG_CATEGORY(LogWebsocket);
