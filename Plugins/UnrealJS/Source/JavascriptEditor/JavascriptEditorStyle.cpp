#include "JavascriptEditor.h"
#include "JavascriptEditorStyle.h"

UJavascriptEditorStyle::UJavascriptEditorStyle(const FObjectInitializer& ObjectInitializer)
: Super(ObjectInitializer)
{	
}

#if WITH_EDITOR
static UStruct* Struct_SlateColor;
static UStruct* Struct_ButtonStyle;
static UStruct* Struct_SlateBrush;
static UStruct* Struct_TextBlockStyle;
static UStruct* Struct_EditableTextStyle;
static UStruct* Struct_EditableTextBoxStyle;
static UStruct* Struct_CheckBoxStyle;
static UStruct* Struct_ComboBoxStyle;
static UStruct* Struct_ComboButtonStyle;

void Prepare()
{
	if (Struct_SlateColor) return;	

	auto prepare = [&](UStruct*& Out, const TCHAR* Name)
	{
		UStructProperty* Prop = FindField<UStructProperty>(UJavascriptEditorStyle::StaticClass(), Name);
		Out = Prop->Struct;
	};

	prepare(Struct_SlateColor, TEXT("SlateColor"));
	prepare(Struct_ButtonStyle, TEXT("ButtonStyle"));
	prepare(Struct_SlateBrush, TEXT("SlateBrush"));
	prepare(Struct_TextBlockStyle, TEXT("TextBlockStyle"));
	prepare(Struct_EditableTextStyle, TEXT("EditableTextStyle"));
	prepare(Struct_EditableTextBoxStyle, TEXT("EditableTextBoxStyle"));
	prepare(Struct_CheckBoxStyle, TEXT("CheckBoxStyle"));
	prepare(Struct_ComboBoxStyle, TEXT("ComboBoxStyle"));
	prepare(Struct_ComboButtonStyle, TEXT("ComboButtonStyle"));
}

FSlateColor Fixup(const FSlateColor& Src)
{
	Prepare();

	if (Src.IsColorSpecified())
	{
		return FSlateColor(Src.GetSpecifiedColor());
	}
	else
	{
		return Src;
	}
}

void FixupStruct(UStruct* Struct, void* Dest, const void* Src)
{
	if (Struct == Struct_SlateColor)
	{
		*((FSlateColor*)Dest) = Fixup(*(FSlateColor*)Src);
		return;
	}

	for (TFieldIterator<UProperty> PropertyIt(Struct, EFieldIteratorFlags::IncludeSuper); PropertyIt; ++PropertyIt)
	{
		auto Property = *PropertyIt;
		if (UStructProperty* p = Cast<UStructProperty>(Property))
		{
			FixupStruct(p->Struct, p->ContainerPtrToValuePtr<void>(Dest), p->ContainerPtrToValuePtr<void>(Src));
		}
	}
}

FSlateBrush Fixup(const FSlateBrush& Src)
{
	Prepare();

	FSlateBrush Dest = Src;
	FixupStruct(Struct_SlateBrush, &Dest, &Src);
	return Dest;
}

template <typename T>
T FixupWidgetStyle(UStruct* Struct, const FName& StyleName)
{
	Prepare();

	const auto& Src = FEditorStyle::Get().GetWidgetStyle<T>(StyleName);
	T Dest = Src;
	FixupStruct(Struct, &Dest, &Src);
	return Dest;
}

FButtonStyle UJavascriptEditorStyle::GetButtonStyle(const FName& StyleName)
{
	return FixupWidgetStyle<FButtonStyle>(Struct_ButtonStyle, StyleName);
}

FTextBlockStyle UJavascriptEditorStyle::GetTextBlockStyle(const FName& StyleName)
{
	return FixupWidgetStyle<FTextBlockStyle>(Struct_TextBlockStyle, StyleName);
}

FEditableTextStyle UJavascriptEditorStyle::GetEditableTextStyle(const FName& StyleName)
{
	return FixupWidgetStyle<FEditableTextStyle>(Struct_EditableTextStyle, StyleName);
}

FEditableTextBoxStyle UJavascriptEditorStyle::GetEditableTextBoxStyle(const FName& StyleName)
{
	return FixupWidgetStyle<FEditableTextBoxStyle>(Struct_EditableTextBoxStyle, StyleName);
}

FCheckBoxStyle UJavascriptEditorStyle::GetCheckBoxStyle(const FName& StyleName)
{
	return FixupWidgetStyle<FCheckBoxStyle>(Struct_CheckBoxStyle, StyleName);
}

FComboBoxStyle UJavascriptEditorStyle::GetComboBoxStyle(const FName& StyleName)
{
	return FixupWidgetStyle<FComboBoxStyle>(Struct_ComboBoxStyle, StyleName);
}

FComboButtonStyle UJavascriptEditorStyle::GetComboButtonStyle(const FName& StyleName)
{
	return FixupWidgetStyle<FComboButtonStyle>(Struct_ComboButtonStyle, StyleName);
}

FMargin UJavascriptEditorStyle::GetMargin(const FName& StyleName)
{
	return FEditorStyle::Get().GetMargin(StyleName);
}

FSlateColor UJavascriptEditorStyle::GetSlateColor(const FName& StyleName)
{
	return Fixup(FEditorStyle::Get().GetSlateColor(StyleName));
}

FSlateBrush UJavascriptEditorStyle::GetBrush(const FName& StyleName)
{
	auto Brush = FEditorStyle::Get().GetBrush(StyleName);
	return Brush ? Fixup(*Brush) : FSlateBrush();
}

FLinearColor UJavascriptEditorStyle::GetColor(const FName& StyleName)
{
	return FEditorStyle::Get().GetColor(StyleName);
}

FVector2D UJavascriptEditorStyle::GetVector(const FName& StyleName)
{
	return FEditorStyle::Get().GetVector(StyleName);
}

float UJavascriptEditorStyle::GetFloat(const FName& StyleName)
{
	return FEditorStyle::Get().GetFloat(StyleName);
}

FSlateFontInfo UJavascriptEditorStyle::GetFontStyle(const FName& StyleName)
{
	return FEditorStyle::Get().GetFontStyle(StyleName);
}

FSlateSound UJavascriptEditorStyle::GetSound(const FName& StyleName)
{
	return FEditorStyle::Get().GetSound(StyleName);
}
#endif