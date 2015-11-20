#include "JavascriptUMG.h"

class FJavascripUMGModule : public IJavascriptUMGModule
{
	// Begin IModuleInterface
	virtual void StartupModule() override;
	virtual void ShutdownModule() override;
	// End IModuleInterface

};


void FJavascripUMGModule::StartupModule()
{

}


void FJavascripUMGModule::ShutdownModule()
{

}

IMPLEMENT_MODULE(FJavascripUMGModule, JavascriptUMG);