// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;

public class JavascriptConsole : ModuleRules
{
    public JavascriptConsole(TargetInfo Target)
	{
		PrivateDependencyModuleNames.AddRange(
			new string[] {
				"Core",
				"CoreUObject", // @todo Mac: for some reason it's needed to link in debug on Mac
				"Engine",
                "InputCore",
				"UnrealEd",
				"Slate",
				"SlateCore",
                "EditorStyle",
                "V8"
			}
		);
	}
}
