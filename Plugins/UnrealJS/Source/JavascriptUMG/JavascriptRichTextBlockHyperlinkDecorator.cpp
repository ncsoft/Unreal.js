#include "JavascriptUMG.h"
#include "JavascriptRichTextBlockHyperlinkDecorator.h"

TSharedRef<ITextDecorator> UJavascriptRichTextBlockHyperlinkDecorator::CreateDecorator(const FSlateFontInfo& DefaultFont, const FLinearColor& DefaultColor)
{
	return SRichTextBlock::HyperlinkDecorator(HyperlinkId, FSlateHyperlinkRun::FOnClick::CreateLambda([this](const FSlateHyperlinkRun::FMetadata& metadata) {
		Current = &metadata;
		this->OnClick.Broadcast(this);
		Current = nullptr;
	}));
}

FString UJavascriptRichTextBlockHyperlinkDecorator::GetMetadata(const FString& Key)
{
	if (Current)
	{
		auto Value = Current->Find(Key);
		if (Value)
		{
			return *Value;
		}
	}
	
	return TEXT("");
}