using UnrealBuildTool;

public class JavascriptWebSocket : ModuleRules
{
	public JavascriptWebSocket(TargetInfo Target)
	{
        PublicDependencyModuleNames.AddRange(new string[] { 
            "Core", 
            "CoreUObject", 
            "Engine",
            "V8",
            "Sockets",
            "WebSockets",
            "OnlineSubSystemUtils",
            "Networking"
        });
    }
}
