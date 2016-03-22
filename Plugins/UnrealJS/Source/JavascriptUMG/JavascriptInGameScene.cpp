
#include "JavascriptUMG.h"
#include "SoundDefinitions.h"
#include "JavascriptInGameScene.h"
#include "Components/DirectionalLightComponent.h"
#include "Components/LineBatchComponent.h"

FJavascriptInGameScene::FJavascriptInGameScene(FJavascriptInGameScene::ConstructionValues CVS)
	: PreviewWorld(NULL)
	, bForceAllUsedMipsResident(CVS.bForceMipsResident)
{
	PreviewWorld = NewObject<UWorld>();
	PreviewWorld->WorldType = EWorldType::Game;
	if (CVS.bTransactional)
	{
		PreviewWorld->SetFlags(RF_Transactional);
	}

	FWorldContext& WorldContext = GEngine->CreateNewWorldContext(EWorldType::Game);
	WorldContext.SetCurrentWorld(PreviewWorld);

	PreviewWorld->InitializeNewWorld(UWorld::InitializationValues()
		.AllowAudioPlayback(CVS.bAllowAudioPlayback)
		.CreatePhysicsScene(CVS.bCreatePhysicsScene)
		.RequiresHitProxies(false)
		.CreateNavigation(false)
		.CreateAISystem(false)
		.ShouldSimulatePhysics(CVS.bShouldSimulatePhysics)
		.SetTransactional(CVS.bTransactional));
	PreviewWorld->InitializeActorsForPlay(FURL());

	GetScene()->UpdateDynamicSkyLight(FLinearColor::White * CVS.SkyBrightness, FLinearColor::Black);

	DirectionalLight = NewObject<UDirectionalLightComponent>(GetTransientPackage());
	DirectionalLight->Intensity = CVS.LightBrightness;
	DirectionalLight->LightColor = FColor::White;
	AddComponent(DirectionalLight, FTransform(CVS.LightRotation));

	LineBatcher = NewObject<ULineBatchComponent>(GetTransientPackage());
	AddComponent(LineBatcher, FTransform::Identity);
}

FJavascriptInGameScene::~FJavascriptInGameScene()
{
	// Stop any audio components playing in this scene
	if (GEngine)
	{
		UWorld* World = GetWorld();
		if (World)
		{
			if (FAudioDevice* AudioDevice = World->GetAudioDevice())
			{
				AudioDevice->Flush(GetWorld(), false);
			}
		}
	}

	// Remove all the attached components
	for (int32 ComponentIndex = 0; ComponentIndex < Components.Num(); ComponentIndex++)
	{
		UActorComponent* Component = Components[ComponentIndex];

		if (bForceAllUsedMipsResident)
		{
			// Remove the mip streaming override on the mesh to be removed
			UMeshComponent* pMesh = Cast<UMeshComponent>(Component);
			if (pMesh != NULL)
			{
				pMesh->SetTextureForceResidentFlag(false);
			}
		}

		Component->UnregisterComponent();
	}

	PreviewWorld->CleanupWorld();
	GEngine->DestroyWorldContext(GetWorld());
}

void FJavascriptInGameScene::AddComponent(UActorComponent* Component, const FTransform& LocalToWorld)
{
	Components.AddUnique(Component);

	USceneComponent* SceneComp = Cast<USceneComponent>(Component);
	if (SceneComp && SceneComp->GetAttachParent() == NULL)
	{
		SceneComp->SetRelativeTransform(LocalToWorld);
	}

	Component->RegisterComponentWithWorld(GetWorld());

	if (bForceAllUsedMipsResident)
	{
		// Add a mip streaming override to the new mesh
		UMeshComponent* pMesh = Cast<UMeshComponent>(Component);
		if (pMesh != NULL)
		{
			pMesh->SetTextureForceResidentFlag(true);
		}
	}

	GetScene()->UpdateSpeedTreeWind(0.0);
}

void FJavascriptInGameScene::RemoveComponent(UActorComponent* Component)
{
	Component->UnregisterComponent();
	Components.Remove(Component);

	if (bForceAllUsedMipsResident)
	{
		// Remove the mip streaming override on the old mesh
		UMeshComponent* pMesh = Cast<UMeshComponent>(Component);
		if (pMesh != NULL)
		{
			pMesh->SetTextureForceResidentFlag(false);
		}
	}
}

void FJavascriptInGameScene::AddReferencedObjects(FReferenceCollector& Collector)
{
	for (int32 Index = 0; Index < Components.Num(); Index++)
	{
		Collector.AddReferencedObject(Components[Index]);
	}
	Collector.AddReferencedObject(DirectionalLight);
	Collector.AddReferencedObject(PreviewWorld);
}

void FJavascriptInGameScene::ClearLineBatcher()
{
	if (LineBatcher != NULL)
	{
		LineBatcher->Flush();
	}
}

/** Accessor for finding the current direction of the preview scene's DirectionalLight. */
FRotator FJavascriptInGameScene::GetLightDirection()
{
	return DirectionalLight->ComponentToWorld.GetUnitAxis(EAxis::X).Rotation();
}

/** Function for modifying the current direction of the preview scene's DirectionalLight. */
void FJavascriptInGameScene::SetLightDirection(const FRotator& InLightDir)
{
#if WITH_EDITOR
	DirectionalLight->PreEditChange(NULL);
#endif // WITH_EDITOR
	DirectionalLight->SetAbsolute(true, true, true);
	DirectionalLight->SetRelativeRotation(InLightDir);
#if WITH_EDITOR
	DirectionalLight->PostEditChange();
#endif // WITH_EDITOR
}

void FJavascriptInGameScene::SetLightBrightness(float LightBrightness)
{
#if WITH_EDITOR
	DirectionalLight->PreEditChange(NULL);
#endif // WITH_EDITOR
	DirectionalLight->Intensity = LightBrightness;
#if WITH_EDITOR
	DirectionalLight->PostEditChange();
#endif // WITH_EDITOR
}

void FJavascriptInGameScene::SetLightColor(const FColor& LightColor)
{
#if WITH_EDITOR
	DirectionalLight->PreEditChange(NULL);
#endif // WITH_EDITOR
	DirectionalLight->LightColor = LightColor;
#if WITH_EDITOR
	DirectionalLight->PostEditChange();
#endif // WITH_EDITOR
}

void FJavascriptInGameScene::SetSkyBrightness(float SkyBrightness)
{
	GetScene()->UpdateDynamicSkyLight(FLinearColor::White * SkyBrightness, FLinearColor::Black);
}

void FJavascriptInGameScene::LoadSettings(const TCHAR* Section)
{
	FRotator LightDir;
	if (GConfig->GetRotator(Section, TEXT("LightDir"), LightDir, GEditorPerProjectIni))
	{
		SetLightDirection(LightDir);
	}
}

void FJavascriptInGameScene::SaveSettings(const TCHAR* Section)
{
	GConfig->SetRotator(Section, TEXT("LightDir"), GetLightDirection(), GEditorPerProjectIni);
}
