#pragma once

#if WITH_EDITOR
#include "UnrealEd.h"
#endif

// You should place include statements to your module's private header files here.  You only need to
// add includes for headers that are used in most of your module's source files though.

#include "Core.h"
#include "Engine.h"

#include "EditorStyle.h"

#include "JavascriptEditorModule.h"

#include "UMG.h"

#if WITH_EDITOR
#include "EditorStyle.h"
#include "IDetailsView.h"
#include "LandscapeDataAccess.h"
#include "LandscapeEdit.h"
#include "Editor/LandscapeEditor/Private/LandscapeEdMode.h"
#endif