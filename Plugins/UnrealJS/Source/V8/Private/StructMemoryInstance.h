#pragma once

struct FObjectPropertyOwner : IPropertyOwner
{
	UObject* Object;

	FObjectPropertyOwner(UObject* InObject)
		: Object(InObject)
	{
		Owner = EPropertyOwner::Object;
	}
};

struct FStructMemoryInstance;
struct FStructMemoryPropertyOwner : IPropertyOwner
{
	FStructMemoryInstance* Memory;

	FStructMemoryPropertyOwner(FStructMemoryInstance* InMemory)
		: Memory(InMemory)
	{
		Owner = EPropertyOwner::Memory;
	}
};

struct FStructMemoryInstance
	: public TSharedFromThis<FStructMemoryInstance>
{
	FStructMemoryInstance(UScriptStruct* InStruct, const IPropertyOwner& InOwner, void* InSource)
	: Struct(InStruct), Source(InSource)
	{
		Owner = InOwner.Owner;
		if (Owner == EPropertyOwner::Object)
		{
			Object = ((const FObjectPropertyOwner&)InOwner).Object;
		}
		else if (Owner == EPropertyOwner::Memory && Source)
		{
			auto OwnerInstance = ((const FStructMemoryPropertyOwner&)InOwner).Memory;
			if (OwnerInstance->Owner == EPropertyOwner::None)
			{
				Parent = OwnerInstance->AsShared();
			}
			else
			{
				Object = OwnerInstance->Object.Get();
			}
		}

		if (Owner == EPropertyOwner::None)
		{
			Buffer.AddUninitialized(Struct->GetStructureSize());
			Struct->InitializeStruct(GetMemory());

			if (Source)
			{
				//Struct->CopyScriptStruct(GetMemory(), Source);
				CopyScriptStruct(GetMemory(), Source);
				Source = nullptr;
			}
		}
	}

	~FStructMemoryInstance()
	{
		if (Owner == EPropertyOwner::None)
		{
			Struct->DestroyStruct(GetMemory());
		}
	}

	// Struct 
	UScriptStruct* Struct;

	// Type
	EPropertyOwner Owner;

	// Object which this instance depends on
	FWeakObjectPtr Object;

	// Memory which this instance refers
	void* Source;

	// Parent instance
	TSharedPtr<FStructMemoryInstance> Parent;

	// Independent memory buffer
	TArray<uint8> Buffer;

	uint8* GetMemory()
	{
		if (Owner == EPropertyOwner::None)
		{
			return Buffer.GetData();
		}
		else if (Object.IsValid())
		{
			return (uint8*)Source;
		}
		else if (Parent.IsValid())
		{
			return (uint8*)Source;
		}
		else
		{
			return nullptr;
		}
	}

	static TSharedRef<FStructMemoryInstance> Create(UScriptStruct* Struct, const IPropertyOwner& InOwner, void* Source = nullptr)
	{
		return TSharedRef<FStructMemoryInstance>(new FStructMemoryInstance(Struct, InOwner, Source));
	}

	static FStructMemoryInstance* FromV8(Local<Value> Value)
	{
		auto Memory = RawMemoryFromV8(Value);
		return reinterpret_cast<FStructMemoryInstance*>(Memory);
	}

	void CopyScriptStruct(void* InDest, void const* InSrc, int32 ArrayDim = 1)
	{
		uint8 *Dest = (uint8*)InDest;
		check(Dest);
		uint8 const* Src = (uint8 const*)InSrc;
		check(Src);

		int32 Stride = Struct->GetStructureSize();

		FMemory::Memcpy(Dest, Src, ArrayDim * Stride);

		if (!(Struct->StructFlags & STRUCT_IsPlainOldData))
		{
			for (TFieldIterator<UProperty> It(Struct); It; ++It)
			{
				for (int32 Index = 0; Index < ArrayDim; Index++)
				{
					It->CopyCompleteValue_InContainer((uint8*)Dest + Index * Stride, (uint8*)Src + Index * Stride);
				}
			}
		}
	}
};