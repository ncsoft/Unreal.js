#pragma once

#include "Config.h"

struct TypingGeneratorBase
{
	TSet<UObject*> visited;
	bool no_tooltip{ false };

	void mark_visited(UObject* obj)
	{
		visited.Add(obj);
	}

	bool has_visited(UObject* obj) const
	{
		return (visited.Find(obj) != nullptr);
	}

	void Export(UObject* source)
	{
		if (has_visited(source)) return;
		mark_visited(source);

		//UE_LOG(Javascript, Log, TEXT("Export %s"), *(source->GetName()));

		if (auto s = Cast<UClass>(source))
		{
			ExportClass(s);
		}
		else if (auto s = Cast<UStruct>(source))
		{
			ExportStruct(s);
		}
		else if (auto s = Cast<UEnum>(source))
		{
			ExportEnum(s);
		}
	}

	virtual void ExportClass(UClass* source) {}
	virtual void ExportStruct(UStruct* source) {}
	virtual void ExportEnum(UEnum* source) {}
};

struct TokenWriter
{
	TokenWriter(TypingGeneratorBase& generator)
	: generator(generator)
	{}

	TypingGeneratorBase& generator;

	FString Text;

	void push(const char* something)
	{
		Text.Append(ANSI_TO_TCHAR(something));
	}

	void push(const FString& something)
	{
		Text.Append(something);
	}

	const TCHAR* operator * ()
	{
		return *Text;
	}
	
	void push(UProperty* Property)
	{
		if (auto p = Cast<UIntProperty>(Property))
		{
			push("number");
		}
		else if (auto p = Cast<UFloatProperty>(Property))
		{
			push("number");
		}
		else if (auto p = Cast<UBoolProperty>(Property))
		{
			push("boolean");
		}
		else if (auto p = Cast<UNameProperty>(Property))
		{
			push("string");
		}
		else if (auto p = Cast<UStrProperty>(Property))
		{
			push("string");
		}
		else if (auto p = Cast<UTextProperty>(Property))
		{
			push("string");
		}
		else if (auto p = Cast<UClassProperty>(Property))
		{
			generator.Export(p->MetaClass);

			// @HACK
			push("UnrealEngineClass");
		}
		else if (auto p = Cast<UStructProperty>(Property))
		{
			generator.Export(p->Struct);
			push(FV8Config::Safeify(p->Struct->GetName()));
		}
		else if (auto p = Cast<UArrayProperty>(Property))
		{
			generator.Export(p->Inner);

			push(p->Inner);
			push("[]");
		}
		else if (auto p = Cast<UByteProperty>(Property))
		{
			if (p->Enum)
			{
				generator.Export(p->Enum);
				push(FV8Config::Safeify(p->Enum->GetName()));
			}
			else
			{
				push("number");
			}
		}
		else if (auto p = Cast<UMulticastDelegateProperty>(Property))
		{
			push("UnrealEngineMulticastDelegate<");
			push(p->SignatureFunction);
			push(">");
		}
		else if (auto p = Cast<UDelegateProperty>(Property))
		{
			push("UnrealEngineDelegate<");
			push(p->SignatureFunction);
			push(">");
		}
		else if (auto p = Cast<UObjectProperty>(Property))
		{
			generator.Export(p->PropertyClass);
			push(FV8Config::Safeify(p->PropertyClass->GetName()));
		}
		else
		{
			push("any");
		}
	}

	void push(UFunction* SignatureFunction)
	{
		push("(");
		bool first = true;
		TFieldIterator<UProperty> It(SignatureFunction);
		for (; It && (It->PropertyFlags & (CPF_Parm | CPF_ReturnParm)) == CPF_Parm; ++It)
		{
			auto Prop = *It;
			if (!first) push(", ");
			push(FV8Config::Safeify(Prop->GetName()));
			push(": ");
			push(Prop);
			first = false;
		}
		push(") => ");
		bool has_return_value = false;
		for (; It; ++It)
		{
			UProperty* Param = *It;
			if (Param->GetPropertyFlags() & CPF_ReturnParm)
			{
				has_return_value = true;
				push(Param);
				break;
			}
		}
		if (!has_return_value) push("void");
	}

	void tooltip(const char* indent, UField* source)
	{
		if (generator.no_tooltip) return;

		FString Tooltip = source->GetToolTipText().ToString();
		if (Tooltip.Len() > 0)
		{
			TArray<FString> Lines;
			Tooltip.ParseIntoArrayLines(Lines);

			bool first_line = true;
			push(indent);
			push("/**\n");
			for (const auto& line : Lines)
			{
				push(indent);
				push(" * ");
				push(line);
				push("\n");
			}
			push(indent);
			push("*/\n");
		}
	}	
};

struct TypingGenerator : TypingGeneratorBase
{
	TypingGenerator(FJavascriptIsolate& InEnvironment)
	: Environment(InEnvironment)
	{}

	FJavascriptIsolate& Environment;

	FString Text;

	TArray<FString> Folded;	

	void fold(bool force = false)
	{
		if (force || Text.Len() > 1024 * 1024)
		{
			Folded.Add(Text);
			Text = TEXT("");
		}
	}

	virtual void ExportEnum(UEnum* source) override
	{
		TokenWriter w(*this);

		auto enumName = FV8Config::Safeify(source->GetName());
		w.push("declare type ");
		w.push(enumName);
		w.push(" = string | symbol;\n");		

		w.push("declare var ");
		w.push(enumName);
		w.push(" = { ");

		auto MaxEnumValue = source->GetMaxEnumValue();

		for (decltype(MaxEnumValue) Index = 0; Index < MaxEnumValue; ++Index)
		{
			auto name = source->GetEnumName(Index);
			w.push(name);
			w.push(":");
			w.push("'");
			w.push(name);
			w.push("',");
		}

		w.push(" };\n");

		Text.Append(*w);

		fold();
	}

	virtual void ExportClass(UClass* source) override
	{
		// Skip a generated class
		if (source->ClassGeneratedBy) return;

		ExportStruct(source);
	}

	virtual void ExportStruct(UStruct* source) override
	{
		TokenWriter w(*this);		

		const auto name = FV8Config::Safeify(source->GetName());
		auto super_class = source->GetSuperStruct();

		w.push("declare class ");
		w.push(name);

		if (super_class)
		{
			Export(super_class);

			w.push(" extends ");
			w.push(FV8Config::Safeify(super_class->GetName()));
		}
		w.push(" { \n");

		for (TFieldIterator<UProperty> PropertyIt(source, EFieldIteratorFlags::ExcludeSuper); PropertyIt; ++PropertyIt)
		{
			auto Property = *PropertyIt;
			auto PropertyName = FV8Config::Safeify(Property->GetName());

			w.tooltip("\t", Property);

			w.push("\t");
			w.push(PropertyName);
			w.push(": ");
			w.push(Property);
			w.push(";\n");
		}

		auto write_function = [&](UFunction* Function, bool is_thunk, bool is_factory = false) {
			w.tooltip("\t", Function);

			w.push("\t");
			if (!is_thunk && (Function->FunctionFlags & FUNC_Static))
			{
				w.push("static ");
			}
			w.push(FV8Config::GetAlias(Function, true));
			w.push("(");

			bool has_out_ref = false;
			bool is_optional = false;

			TArray<FString> Arguments;
			for (TFieldIterator<UProperty> ParamIt(Function); ParamIt && (ParamIt->PropertyFlags & (CPF_Parm | CPF_ReturnParm)) == CPF_Parm; ++ParamIt)
			{
				TokenWriter w2(*this);

				if ((ParamIt->PropertyFlags & (CPF_ConstParm | CPF_OutParm)) == CPF_OutParm)
				{
					has_out_ref = true;
					is_optional = true;
				}

				auto Property = *ParamIt;
				auto PropertyName = FV8Config::Safeify(Property->GetName());

				w2.push(PropertyName);
				if (is_optional)
				{
					w2.push("?");
				}
				w2.push(": ");
				w2.push(Property);

				Arguments.Add(*w2);
			}

			if (is_thunk)
			{
				Arguments.RemoveAt(0);
			}

			w.push(FString::Join(Arguments, TEXT(",")));
			w.push("): ");

			if (has_out_ref)
			{
				TArray<FString> Arguments;
				for (TFieldIterator<UProperty> ParamIt(Function); ParamIt; ++ParamIt)
				{
					TokenWriter w2(*this);

					if ((ParamIt->PropertyFlags & (CPF_Parm | CPF_ReturnParm)) == (CPF_Parm | CPF_ReturnParm))
					{
						w2.push("$: ");
						w2.push(*ParamIt);

						Arguments.Add(*w2);
					}
					else if ((ParamIt->PropertyFlags & (CPF_ConstParm | CPF_OutParm)) == CPF_OutParm)
					{
						w2.push(ParamIt->GetName());
						w2.push(": ");
						w2.push(*ParamIt);

						Arguments.Add(*w2);
					}
				}
				w.push("{");
				w.push(FString::Join(Arguments, TEXT(", ")));
				w.push("}");
			}
			else
			{
				bool has_return = false;
				for (TFieldIterator<UProperty> ParamIt(Function); ParamIt; ++ParamIt)
				{
					if ((ParamIt->PropertyFlags & (CPF_Parm | CPF_ReturnParm)) == (CPF_Parm | CPF_ReturnParm))
					{
						w.push(*ParamIt);
						has_return = true;
						break;
					}
				}

				if (!has_return)
				{
					w.push("void");
				}
			}


			w.push(";\n");
		};

		if (auto klass = Cast<UClass>(source))
		{
			if (klass->IsChildOf(AActor::StaticClass()))
			{
				Export(UWorld::StaticClass());
				w.push("\tconstructor(InWorld: World, Location?: Vector, Rotation?: Rotator);\n");
			}
			else
			{
				w.push("\tconstructor();\n");
				w.push("\tconstructor(Outer: UObject);\n");
				w.push("\tstatic Load(ResourceName: string): ");
				w.push(name);
				w.push(";\n");
				w.push("\tstatic Find(Outer: UObject, ResourceName: string): ");
				w.push(name);
				w.push(";\n");
			}

			w.push("\tstatic StaticClass: any;\n");

			w.push("\tstatic GetClassObject(): UClass;\n");

			w.push("\tstatic GetDefaultObject(): ");
			w.push(name);
			w.push(";\n");

			w.push("\tstatic GetDefaultSubobjectByName(Name: string): UObject;\n");
			w.push("\tstatic SetDefaultSubobjectClass(Name: string): void;\n");
			w.push("\tstatic CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ");
			w.push(name);
			w.push(";\n");

			for (TFieldIterator<UFunction> FuncIt(klass, EFieldIteratorFlags::ExcludeSuper); FuncIt; ++FuncIt)
			{
				UFunction* Function = *FuncIt;

				if (!FV8Config::CanExportFunction(klass, Function)) continue;

				write_function(Function,false);
			}
		}
		else
		{
			w.push("\tclone() : ");
			w.push(name);
			w.push(";\n");
		}

		{
			w.push("\tstatic C(Other: UObject): ");
			w.push(name);
			w.push(";\n");

			TArray<UFunction*> Functions;
			Environment.BlueprintFunctionLibraryMapping.MultiFind(source, Functions);

			for (auto Function : Functions)
			{
				write_function(Function, true);
			}

			Environment.BlueprintFunctionLibraryFactoryMapping.MultiFind(source, Functions);
			for (auto Function : Functions)
			{
				write_function(Function, false, true);
			}
		}

		w.push("}\n\n");
		
		Text.Append(*w);

		fold();
	}

	void ExportBootstrap()
	{
		TokenWriter w(*this);
		w.push("declare function gc() : void;\n");
		w.push("declare type UnrealEngineClass = any;\n");

		w.push("declare type timeout_handle = any;\n");
		w.push("declare function setTimeout(fn : (milliseconds: number) => void, timeout : number) : timeout_handle;\n");
		w.push("declare function clearTimeout(handle : timeout_handle) : void;\n");

		w.push("declare class UnrealEngineMulticastDelegate<T> {\n");
		w.push("\tAdd(fn : T): void;\n");
		w.push("\tRemove(fn : T): void;\n");
		w.push("}\n\n");

		w.push("declare class UnrealEngineDelegate<T> {\n");
		w.push("\tAdd(fn : T): void;\n");
		w.push("\tRemove(fn : T): void;\n");
		w.push("}\n\n");

		w.push("declare class Process {\n");
		w.push("\tnextTick(fn : (number) => void): void;\n");		
		w.push("}\n\n");
		w.push("declare var process : Process;\n\n");

		w.push("declare class Memory {\n");
		w.push("\texec(ab : ArrayBuffer, fn : (ab : ArrayBuffer) => void): void;\n");
		w.push("\taccess(obj : JavascriptMemoryObject): ArrayBuffer;\n");
		w.push("}\n\n");
		w.push("declare var memory : Memory;\n\n");

		Text.Append(*w);
	}

	void ExportWKO(FString name, UObject* Object)
	{
		TokenWriter w(*this);

		Export(Object->GetClass());

		w.push("declare var ");
		w.push(name);
		w.push(" : ");
		w.push(FV8Config::Safeify(Object->GetClass()->GetName()));

		w.push(";\n\n");

		Text.Append(*w);
	}

	void Finalize()
	{
		fold(true);
	}

	bool Save(const FString& Filename)
	{
		FString Path, BaseFilename, Extension;

		FPaths::Split(Filename, Path, BaseFilename, Extension);

		for (int32 Index = 0; Index < Folded.Num(); ++Index)
		{
			const bool is_last = (Index == (Folded.Num() - 1));

			FString Text = Folded[Index];

			auto page_name = [&](int32 Index) {
				return FString::Printf(TEXT("_part_%d_%s.%s"), Index, *BaseFilename, *Extension);
			};

			FString PageFilename = is_last ? Filename : FPaths::Combine(*Path, *page_name(Index));

			if (is_last)
			{
				FString Header;

				for (int32 Prev = 0; Prev < Index; ++Prev)
				{
					Header.Append(FString::Printf(TEXT("/// <reference path=\"%s\">/>\n"), *page_name(Prev)));
				}

				Header.Append(Text);
				Text = Header;
			}

			if (!FFileHelper::SaveStringToFile(Text, *PageFilename)) return false;
		}

		return true;
	}
};