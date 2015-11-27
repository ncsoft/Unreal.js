set UE4PATH=C:\Program Files (x86)\Epic Games\4.10
call "%UE4PATH%\Engine\Build\BatchFiles\RocketGenerateProjectFiles.bat" %~dp0\Build.uproject -game


rem call "%VS140COMNTOOLS%"\vsvars32.bat
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