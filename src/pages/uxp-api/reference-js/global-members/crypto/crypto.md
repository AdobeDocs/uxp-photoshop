---
title: window.crypto
description: See
---

# window.crypto
**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Crypto)
- [https://w3c.github.io/webcrypto/#Crypto-method-getRandomValues](https://w3c.github.io/webcrypto/#Crypto-method-getRandomValues)
- [https://w3c.github.io/webcrypto/#Crypto-method-randomUUID](https://w3c.github.io/webcrypto/#Crypto-method-randomUUID)

**Since**: UXP v6.2  


## getRandomValues(array)
Generates cryptographically strong random values

**Returns**: The same array passed as 'array' but with its contents replaced with the newly generated random numbers  
**Throws**:

- `TypedError` If the input 'array' is not a TypedArray or either Float32Array or Float64Array
- `DOMException` If the input 'array' length exceeds 65,536 bytes


| Param | Type | Description |
| --- | --- | --- |
| array | `IntegerArray` | An integer-based TypedArray, that is one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, BigUint64Array but not Float32Array nor Float64Array |



## randomUUID()
Generates a new version 4 UUID

**Returns**: `string` - String containing a randomly generated, 36 character long v4 UUID  

  