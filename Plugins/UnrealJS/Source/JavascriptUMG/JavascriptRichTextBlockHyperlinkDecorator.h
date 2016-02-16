#pragma once

#include "RichTextBlockDecorator.h"
#include "JavascriptRichTextBlockHyperlinkDecorator.generated.h"

class UJavascriptContext;

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FJavascriptHyperlinkSignature, UJavascriptRichTextBlockHyperlinkDecorator*, Self);

/**
* Allows thousands of items to be displayed in a Tile.  Generates widgets dynamically for each item.
*/
UCLASS(Experimental)
class JAVASCRIPTUMG_API UJavascriptRichTextBlockHyperlinkDecorator : public URichTextBlockDecorator
{
	GENERATED_BODY()

public:	
	UPROPERTY(EditAnywhere, Category = "Scripting | Javascript")	
	FString HyperlinkId;

	UPROPERTY(BlueprintAssignable, Category = "Scripting | Javascript")
	FJavascriptHyperlinkSignature OnClick;

	virtual TSharedRef<ITextDecorator> CreateDecorator(const FSlateFontInfo& DefaultFont, const FLinearColor& DefaultColor) override;

	void HandleClick(const FSlateHyperlinkRun::FMetadata& Metadata);

	UFUNCTION(BlueprintCallable, Category = "Scripting | Javascript")
	FString GetMetadata(const FString& Key);

	const FSlateHyperlinkRun::FMetadata* Current{ nullptr };
};
