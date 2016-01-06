powershell.exe -nologo -noprofile -command "& { $x = (Get-ItemProperty \"hklm:\Software\Classes\Unreal.ProjectFile\shell\open\command\").\"(default)\"; $y = $x.IndexOf(\"Launcher\"); if ($y -gt 0) { $x = $x.SubString(0,$y) + \"4.10\"; } else { $x = $x.SubString(0,$x.IndexOf(\"Binaries\")-1); }; if ($x[0] -eq '\"') { $x.SubString(1) } else { $x } }" > temp.txt
for /F "usebackq delims=", %%g in (`type temp.txt`) do set UE4PATH=%%g
del temp.txt

call "%UE4PATH%\Engine\Build\BatchFiles\RocketGenerateProjectFiles.bat" %~dp0\Build.uproject -game


call "%VS140COMNTOOLS%"\vsvars32.bat
xcopy ..\Plugins .\Plugins /s /d /k /r /y /i
msbuild build.sln /p:Configuration="Development Editor" /p:Platform=Win64
xcopy Plugins\UnrealJS\Binaries\*.dll ..\Plugins\UnrealJS\Binaries /s /d /k /y /i

rd /s/q Staging
xcopy Plugins\UnrealJS\Binaries\*.dll Staging\Plugins\UnrealJS\Binaries /s /d /k /r /y /i
xcopy Plugins\UnrealJS\Content Staging\Plugins\UnrealJS\Content /s /d /k /r /y /i
xcopy Plugins\UnrealJS\Resources Staging\Plugins\UnrealJS\Resources /s /d /k /r /y /i
copy Plugins\UnrealJS\* Staging\Plugins\UnrealJS 

del Release.zip
powershell.exe -nologo -noprofile -command "& { Add-Type -A 'System.IO.Compression.FileSystem'; [IO.Compression.ZipFile]::CreateFromDirectory('Staging', 'Release.zip') }"
rd /s/q Staging
