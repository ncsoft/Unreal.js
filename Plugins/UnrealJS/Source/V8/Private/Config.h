#pragma once

struct FV8Config
{
	static FString Safeify(const FString& Name)
	{
		if (Name == "Object")
		{
			return TEXT("UObject");
		}
		else if (Name == "Node")
		{
			return TEXT("UNode");
		}
		else if (Name == "Function")
		{
			return TEXT("UFunction");
		}
		else if (Name == "PointerEvent")
		{
			return TEXT("UPointerEvent");
		}
		else if (Name == "Image")
		{
			return TEXT("UImage");
		}
		else if (Name == "Selection")
		{
			return TEXT("USelection");
		}
		else if (Name == "FocusEvent")
		{
			return TEXT("UFocusEvent");
		}
		else
		{
			return Name.Replace(TEXT(" "),TEXT(""));
		}
	}

	// 
	static bool CanExportClass(const UClass* Class)
	{
		bool bCanExport = (Class->ClassFlags & (CLASS_RequiredAPI | CLASS_MinimalAPI)) != 0;

		return bCanExport;
	}

	// 
	static bool CanExportFunction(const UClass* Class, const UFunction* Function)
	{		
		// Delegate function is not a real function.
		if ((Function->FunctionFlags & FUNC_Delegate))
		{
			return false;
		}

		// Skip unsupported type or delegate properties which are handled in dedicated code path.
		for (TFieldIterator<UProperty> ParamIt(Function); ParamIt; ++ParamIt)
		{
			UProperty* Param = *ParamIt;
			if (Param->ArrayDim > 1 ||
				Param->IsA(UDelegateProperty::StaticClass()) ||
				Param->IsA(UMulticastDelegateProperty::StaticClass()) ||
				Param->IsA(UInterfaceProperty::StaticClass()))
			{
				return false;
			}
		}

		return true;
	}
		
	static bool CanExportProperty(const UStruct* Class, const UProperty* Property)
	{
		// Skip unsupported static array and interface.
		if (Property->ArrayDim > 1 ||			
			Property->IsA(UInterfaceProperty::StaticClass()))
		{
			return false;
		}

		return true;
	}

	static bool IsWriteDisabledProperty(UProperty* PropertyToExport)
	{
		return false;		
	}

	static FString GetAlias(UFunction* Function, bool no_empty = false)
	{
		auto has_meta = [](UField* This, const FName& Key) {
			UPackage* Package = This->GetOutermost();
			check(Package);

			UMetaData* MetaData = Package->GetMetaData();
			check(MetaData);

			bool bHasMetaData = MetaData->HasValue(This, Key);

			return bHasMetaData;
		};

		auto get_meta = [](UField* This, const FName& Key) {
			UPackage* Package = This->GetOutermost();
			check(Package);

			UMetaData* MetaData = Package->GetMetaData();
			check(MetaData);

			const FString& MetaDataString = MetaData->GetValue(This, Key);

			return MetaDataString;
		};

		static FName NAME_DisplayName("DisplayName");
		if (has_meta(Function, NAME_DisplayName))
		{
			FString Name = get_meta(Function, NAME_DisplayName).Replace(TEXT(" "), TEXT(""));

			int32 Index;
			if (Name.FindChar('(', Index))
			{
				Name = Name.Mid(0, Index);
			}

			if (Name.Len() > 0)
			{
				bool pass = true;
				for (auto Ch : Name)
				{
					if (!FChar::IsIdentifier(Ch))
					{
						pass = false;
						break;
					}
				}

				if (pass && Name != Function->GetName())
				{
					return Name;
				}
			}
		}

		return no_empty ? Safeify(Function->GetName()) : TEXT("");
	}
};

