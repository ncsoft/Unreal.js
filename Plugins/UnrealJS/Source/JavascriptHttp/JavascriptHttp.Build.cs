using UnrealBuildTool;

public class JavascriptHttp : ModuleRules
{
	public JavascriptHttp(TargetInfo Target)
	{
        PublicDependencyModuleNames.AddRange(new string[] { 
            "Core", 
            "CoreUObject", 
            "Engine",             
            "V8",
            "Http"
        });

        if (UEBuildConfiguration.bBuildEditor == true)
        {
            PrivateDependencyModuleNames.Add("UnrealEd");
        }
	}
}
