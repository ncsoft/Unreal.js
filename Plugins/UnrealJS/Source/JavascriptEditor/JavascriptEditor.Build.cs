using UnrealBuildTool;

public class JavascriptEditor : ModuleRules
{
	public JavascriptEditor(TargetInfo Target)
	{        
        PublicDependencyModuleNames.AddRange(
                new string[]
				{
					"Core",
					"CoreUObject",
					"Engine",
					"Slate",                    
                    "Landscape",
				}
            );	// @todo Mac: for some reason CoreUObject and Engine are needed to link in debug on Mac

        if (UEBuildConfiguration.bBuildEditor == true)
        {
            PublicDependencyModuleNames.AddRange(
                    new string[]
                    {
                        "AssetRegistry",
                    }
                );
            PrivateIncludePaths.AddRange(
                    new string[] {
                        "Editor/GraphEditor/Private",
				        "Editor/Kismet/Private",
					    "Editor/GameplayAbilitiesEditor/Private",
                        "Editor/LandscapeEditor/Private",
                        "Developer/AssetTools/Private",
				    }
                );

            PrivateDependencyModuleNames.AddRange(
                new string[]
				    {
					    // ... add private dependencies that you statically link with here ...
					    "Core",
					    "CoreUObject",
					    "Engine",
					    "AssetTools",
					    "ClassViewer",
                        "InputCore",
                        "PropertyEditor",
					    "Slate",
					    "SlateCore",
                        "EditorStyle",                    
					    "GraphEditor",
					    "MainFrame",
					    "UnrealEd",
                        "WorkspaceMenuStructure",
                        "V8",
                        "UMG",
                        "Foliage",
                        "LandscapeEditor"
				    }
            );
        }

		// Uncomment if you are using Slate UI
		// PrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });
		
		// Uncomment if you are using online features
		// PrivateDependencyModuleNames.Add("OnlineSubsystem");
		// if ((Target.Platform == UnrealTargetPlatform.Win32) || (Target.Platform == UnrealTargetPlatform.Win64))
		// {
		//		if (UEBuildConfiguration.bCompileSteamOSS == true)
		//		{
		//			DynamicallyLoadedModuleNames.Add("OnlineSubsystemSteam");
		//		}
		// }
	}
}
