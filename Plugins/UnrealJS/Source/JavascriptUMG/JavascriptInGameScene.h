#pragma once

class JAVASCRIPTUMG_API FJavascriptInGameScene : public FGCObject
{
public:
	struct ConstructionValues
	{
		ConstructionValues()
			: LightRotation(-40.f, -67.5f, 0.f)
			, SkyBrightness(0.f)
			, LightBrightness(PI)
			, bAllowAudioPlayback(false)
			, bForceMipsResident(true)
			, bCreatePhysicsScene(true)
			, bShouldSimulatePhysics(false)
			, bTransactional(true)
			, bRequiresHitProxies(false)
			, bCreateNavigation(false)
			, bCreateAISystem(false)
		{
		}

		FRotator LightRotation;
		float SkyBrightness;
		float LightBrightness;
		uint32 bAllowAudioPlayback : 1;
		uint32 bForceMipsResident : 1;
		uint32 bCreatePhysicsScene : 1;
		uint32 bShouldSimulatePhysics : 1;
		uint32 bTransactional : 1;
		uint32 bRequiresHitProxies : 1;
		uint32 bCreateNavigation : 1;
		uint32 bCreateAISystem : 1;

		ConstructionValues& SetLightRotation(const FRotator& Rotation) { LightRotation = Rotation; return *this; }
		ConstructionValues& SetSkyBrightness(const float Brightness) { SkyBrightness = Brightness; return *this; }
		ConstructionValues& SetLightBrightness(const float Brightness) { LightBrightness = Brightness; return *this; }
		ConstructionValues& AllowAudioPlayback(const bool bAllow) { bAllowAudioPlayback = bAllow; return *this; }
		ConstructionValues& SetForceMipsResident(const bool bForce) { bForceMipsResident = bForce; return *this; }
		ConstructionValues& SetCreatePhysicsScene(const bool bCreate) { bCreatePhysicsScene = bCreate; return *this; }
		ConstructionValues& ShouldSimulatePhysics(const bool bInShouldSimulatePhysics) { bShouldSimulatePhysics = bInShouldSimulatePhysics; return *this; }
		ConstructionValues& SetTransactional(const bool bInTransactional) { bTransactional = bInTransactional; return *this; }
		ConstructionValues& SetRequiresHitProxies(const bool bInRequiresHitProxies) { bRequiresHitProxies = bInRequiresHitProxies; return *this; }
		ConstructionValues& SetCreateNavigation(const bool bInCreateNavigation) { bCreateNavigation = bInCreateNavigation; return *this; }
		ConstructionValues& SetCreateAISystem(const bool bInCreateAISystem) { bCreateAISystem = bInCreateAISystem; return *this; }
	};

	// for physical correct light computations we multiply diffuse and specular lights by PI (see LABEL_RealEnergy)
	FJavascriptInGameScene(ConstructionValues CVS = ConstructionValues());
	virtual ~FJavascriptInGameScene();

	/**
	* Adds a component to the preview scene.  This attaches the component to the scene, and takes ownership of it.
	*/
	void AddComponent(class UActorComponent* Component, const FTransform& LocalToWorld);

	/**
	* Removes a component from the preview scene.  This detaches the component from the scene, and returns ownership of it.
	*/
	void RemoveComponent(class UActorComponent* Component);

	// Serializer.
	void AddReferencedObjects(FReferenceCollector& Collector) override;

	// Accessors.
	UWorld* GetWorld() const { return PreviewWorld; }
	FSceneInterface* GetScene() const { return PreviewWorld->Scene; }

	/** Access to line drawing */
	class ULineBatchComponent* GetLineBatcher() const { return LineBatcher; }
	/** Clean out the line batcher each frame */
	void ClearLineBatcher();

	FRotator GetLightDirection();
	void SetLightDirection(const FRotator& InLightDir);
	void SetLightBrightness(float LightBrightness);
	void SetLightColor(const FColor& LightColor);

	void SetSkyBrightness(float SkyBrightness);

	/** Load/Save settings to the config, specifying the key */
	void LoadSettings(const TCHAR* Section);
	void SaveSettings(const TCHAR* Section);

	class UDirectionalLightComponent* DirectionalLight;

private:

	TArray<class UActorComponent*> Components;

protected:
	class UWorld* PreviewWorld;
	class ULineBatchComponent* LineBatcher;

	/** This controls whether or not all mip levels of textures used by UMeshComponents added to this preview window should be loaded and remain loaded. */
	bool bForceAllUsedMipsResident;
};
