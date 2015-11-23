#pragma once

class FMallocArrayBufferAllocator : public v8::ArrayBuffer::Allocator
{
public:
	/**
	* Allocate |length| bytes. Return NULL if allocation is not successful.
	* Memory should be initialized to zeroes.
	*/
	virtual void* Allocate(size_t length)
	{
		auto buffer = GMalloc->Malloc(length);
		FMemory::Memzero(buffer, length);
		return buffer;
	}

	/**
	* Allocate |length| bytes. Return NULL if allocation is not successful.
	* Memory does not have to be initialized.
	*/
	virtual void* AllocateUninitialized(size_t length)
	{
		return GMalloc->Malloc(length);
	}
	/**
	* Free the memory block of size |length|, pointed to by |data|.
	* That memory is guaranteed to be previously allocated by |Allocate|.
	*/
	virtual void Free(void* data, size_t length)
	{
		GMalloc->Free(data);
	}
};