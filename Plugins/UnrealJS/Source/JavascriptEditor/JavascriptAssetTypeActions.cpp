#include "JavascriptEditor.h"

#if WITH_EDITOR
#include "JavascriptAssetTypeActions.h"
#include "AssetTypeActions_Base.h"
#include "JavascriptAssetEditorToolkit.h"
#include "JavascriptUIExtender.h"
#endif

UJavascriptAssetTypeActions::UJavascriptAssetTypeActions(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
#if WITH_EDITOR
, bRegistered(false)
#endif
{	
}

#if WITH_EDITOR
void UJavascriptAssetTypeActions::BeginDestroy()
{
	Super::BeginDestroy();

	Discard();
}

void UJavascriptAssetTypeActions::Commit()
{
	Discard();

	IJavascriptEditorModule::Get().AddExtension(this);
	
	bRegistered = true;
}

void UJavascriptAssetTypeActions::Discard()
{
	if (bRegistered)
	{
		IJavascriptEditorModule::Get().RemoveExtension(this);
	}

	bRegistered = false;
}

void UJavascriptAssetTypeActions::Refresh()
{
	if (bRegistered)
	{
		Unregister();
		Register();
	}
}

class FAssetTypeActions_Javascript : public FAssetTypeActions_Base
{
public:
	UJavascriptAssetTypeActions* Owner;
	FAssetTypeActions_Javascript(UJavascriptAssetTypeActions* InOwner)
		: Owner(InOwner)
	{
	}

	~FAssetTypeActions_Javascript()
	{
	}

	// IAssetTypeActions interface
	virtual FText GetName() const override
	{
		return Owner->ActionsName;
	}

	virtual FColor GetTypeColor() const override
	{
		return Owner->Color;
	}
	virtual UClass* GetSupportedClass() const override
	{
		return Owner->SupportedClass;
	}

	virtual bool HasActions(const TArray<UObject*>& InObjects) const override
	{
		return Owner->Actions != nullptr;
	}

	virtual void GetActions(const TArray<UObject*>& InObjects, FMenuBuilder& MenuBuilder) override
	{
		if (Owner->Actions)
		{
			Owner->Actions->BuildMenu(MenuBuilder);
		}
	}

	virtual void OpenAssetEditor(const TArray<UObject*>& InObjects, TSharedPtr<IToolkitHost> EditWithinLevelEditor)
	{
		if (Owner->Editor)
		{
			Owner->Editor->Open(InObjects, EditWithinLevelEditor);
		}
		else
		{
			FMessageDialog::Open(EAppMsgType::Ok, FText::FromString(TEXT("Not implemented")));
		}		
	}

	virtual uint32 GetCategories() override
	{
		return EAssetTypeCategories::Gameplay;
	}
};

void UJavascriptAssetTypeActions::Register()
{
	if (SupportedClass != nullptr)
	{
		Instance = MakeShareable(new FAssetTypeActions_Javascript(this));

		IAssetTools& AssetTools = FModuleManager::LoadModuleChecked<FAssetToolsModule>("AssetTools").Get();
		AssetTools.RegisterAssetTypeActions(Instance.ToSharedRef());
	}	
}

void UJavascriptAssetTypeActions::Unregister()
{
	if (FModuleManager::Get().IsModuleLoaded("AssetTools"))
	{
		IAssetTools& AssetTools = FModuleManager::LoadModuleChecked<FAssetToolsModule>("AssetTools").Get();
		if (Instance.IsValid())
		{
			AssetTools.UnregisterAssetTypeActions(Instance.ToSharedRef());
		}		
		Instance.Reset();
	}
}
#endif