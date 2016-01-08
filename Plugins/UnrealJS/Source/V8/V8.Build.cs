using UnrealBuildTool;
using System.IO;
using System;

public class V8 : ModuleRules
{
    protected string ModulePath
    {
        get { return Path.GetDirectoryName(RulesCompiler.GetModuleFilename(this.GetType().Name)); }
    }

    protected string ThirdPartyPath
    {
        get { return Path.GetFullPath(Path.Combine(ModulePath, "..", "..", "ThirdParty")); }
    }

    public V8(TargetInfo Target)
    {
        PrivateIncludePaths.AddRange(new string[] 
        { 
            Path.Combine(ThirdPartyPath, "v8", "include"),
            Path.Combine(ThirdPartyPath, "v8"),
            Path.Combine("V8", "Private") 
        });
        
        PublicIncludePaths.AddRange(new string[] 
        { 
            Path.Combine("V8", "Public") 
        });

        PublicDependencyModuleNames.AddRange(new string[] 
        { 
            "Core", "CoreUObject", "Engine"
        });

        if (UEBuildConfiguration.bBuildEditor)
        {
            PublicDependencyModuleNames.AddRange(new string[]
            {
                "DirectoryWatcher"
            });
        }

        PrivateDependencyModuleNames.AddRange(new string[] 
        { 
            "Sockets"
        });

        if (UEBuildConfiguration.bBuildEditor)
        {
            PrivateDependencyModuleNames.AddRange(new string[] 
            { 
                "UnrealEd"
            });
        }

        bEnableExceptions = true;

        LoadV8(Target);
    }

    private bool LoadV8(TargetInfo Target)
    {
        if ((Target.Platform == UnrealTargetPlatform.Win64) || (Target.Platform == UnrealTargetPlatform.Win32))
        {
            string LibrariesPath = Path.Combine(ThirdPartyPath, "v8", "lib", "Windows");

            if (WindowsPlatform.Compiler == WindowsCompiler.VisualStudio2015)
            {
                LibrariesPath = Path.Combine(LibrariesPath, "MSVC2015");
            }
            else
            {
                LibrariesPath = Path.Combine(LibrariesPath, "MSVC2013");
            }

            if (Target.Platform == UnrealTargetPlatform.Win64)
            {
                LibrariesPath = Path.Combine(LibrariesPath, "x64");
            }
            else
            {
                
                LibrariesPath = Path.Combine(LibrariesPath, "x86");
            }

            if (Target.Configuration == UnrealTargetConfiguration.Debug)
            {
                LibrariesPath = Path.Combine(LibrariesPath, "Debug");
            }
            else
            {
                LibrariesPath = Path.Combine(LibrariesPath, "Release");
            }            

            PublicAdditionalLibraries.Add(Path.Combine(LibrariesPath, "v8_base_0.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibrariesPath, "v8_base_1.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibrariesPath, "v8_base_2.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibrariesPath, "v8_base_3.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibrariesPath, "v8_libbase.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibrariesPath, "v8_libplatform.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibrariesPath, "v8_nosnapshot.lib"));

            PublicIncludePaths.Add(Path.Combine(ThirdPartyPath, "v8", "Includes"));

            Definitions.Add(string.Format("WITH_V8=1"));                       

            return true;
        }
        else if (Target.Platform == UnrealTargetPlatform.Android)
        {
            string LibrariesPath = Path.Combine(ThirdPartyPath, "v8", "lib", "Android");
            PublicLibraryPaths.Add(Path.Combine(LibrariesPath, "ARMv7"));
            PublicLibraryPaths.Add(Path.Combine(LibrariesPath, "ARM64"));
            PublicLibraryPaths.Add(Path.Combine(LibrariesPath, "x86"));
            PublicLibraryPaths.Add(Path.Combine(LibrariesPath, "x64"));

            PublicAdditionalLibraries.Add("v8_base");
            PublicAdditionalLibraries.Add("v8_libbase");
            PublicAdditionalLibraries.Add("v8_libplatform");
            PublicAdditionalLibraries.Add("v8_nosnapshot");

            Definitions.Add(string.Format("WITH_V8=1"));

            return true;
        }

        Definitions.Add(string.Format("WITH_V8=0"));
        return false;
    }
}
