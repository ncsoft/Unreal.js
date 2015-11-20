#include "JavascriptHttp.h"

class FJavascripHttpModule : public IJavascriptHttpModule
{
	// Begin IModuleInterface
	virtual void StartupModule() override;
	virtual void ShutdownModule() override;
	// End IModuleInterface

};


void FJavascripHttpModule::StartupModule()
{

}


void FJavascripHttpModule::ShutdownModule()
{

}

IMPLEMENT_MODULE(FJavascripHttpModule, JavascriptHttp);