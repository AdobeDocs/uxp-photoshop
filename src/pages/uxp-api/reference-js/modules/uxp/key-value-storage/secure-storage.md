---
title: require('uxp').storage.secureStorage
description: SecureStorage provides a protected storage which can be used to store sensitive data
---

# require('uxp').storage.secureStorage
SecureStorage provides a protected storage which can be used to store sensitive data
per plugin. SecureStorage takes a key-value pair and encrypts the value before being
stored. After encryption, it stores the key and the encrypted value pair. When the value
is requested with an associated key, it's retrieved after being decrypted. Please note
that the key is not encrypted thus it's not protected by the cryptographic operation.

Caveats for SecureStorage are as follows:
1. SecureStorage is not an appropriate storage for sensitive data which wants to keep
secret from the current user. SecureStorage is protected under the current user's
account credential. It means the encrypted data can be at risk of being decrypted
with the current user's privilege.
2. Data in SecureStorage can be lost for various reasons. For an example, the user
could uninstall the host application and delete the secure storage. Or, the cryptographic
information used by the secure storage could be damaged by the user accidentally, and
it will result in loss of data without the secure storage being removed. SecureStorage
should be regarded as a cache rather than a persistent storage. Data in SecureStorage
should be able to be regenerated from plugins after the time of loss.



## length : `number`
**Read only**
Number of items stored in the secure storage.



## setItem(key, value)
Stores a key and value pair after the value is encrypted in a secure storage.

**Returns**: `Promise<void>` Promise that resolves when the value is stored, rejected when the value is empty or not stored.  
**Throws**:

- `TypeError` If either key or value doesn't have one of acceptable types.


| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to set value |
| value | `string` \| `ArrayBuffer` \| `TypedArray` | Value for a key. |



## getItem(key)
Retrieves a value associated with a provided key after the value is being decrypted from a secure storage.

**Returns**: `Promise<Uint8Array>` Promise that resolves with an Uint8Array  
**Throws**:

- `TypeError` If a key doesn't have an acceptable type.


| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to get value |



## removeItem(key)
Removes a value associated with a provided key.

**Returns**: `Promise<void>` Promise that resolves when the value associated with the key is removed, rejected when the value is neither removed nor found.  
**Throws**:

- `TypeError` If a key doesn't have an acceptable type.


| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to remove value |



## key(index)
Returns a key which is stored at the given index.

**Returns**: `number` - Key which is stored at the given index.  

| Param | Type | Description |
| --- | --- | --- |
| index | `number` | Integer representing the number of the key |



## clear()
Clear all values in a secure storage.

**Returns**: `Promise<void>` Promise that resolves when all the items are cleared. rejected when there is no item to clear or clear failed.  

  