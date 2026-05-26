---
title: window.localStorage
description: Provides a local key-value store useful for setting preferences and other kinds of data.
---

# window.localStorage
Provides a local key-value store useful for setting preferences and other kinds of data.
This data is technically persistent, but can be cleared in a variety of ways,
so you should not store data using localStorage that you cannot otherwise reconstruct.
<InlineAlert variant="warning" slots="text"/>

Do not store passwords or other secure forms of data using `localStorage`. Instead, use [storage.secureStorage](../../modules/uxp/key-value-storage/secure-storage.md)



## length : `number`
**Read only**
Number of items stored in the local storage.



## key(index)
Returns the name of the nth key in the local storage.

**Returns**: `string` - Name of the key. If the index does not exist, null is returned.  

| Param | Type | Description |
| --- | --- | --- |
| index | `number` | Integer representing the number of the key |



## getItem(key)
Gets the value for the key from the local storage.
Returns null if the key does not exist.

**Returns**: `string` - Value corresponding to the key as string. If the key does not exist, null is returned.  

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to retrieve the value of. |



## setItem(key, value)
Adds key and value to the local storage.
Updates the value if the given key already exists.

**Throws**:

- `Error` If it fails to store


| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to set value |
| value | `string` | Value for the key |



## removeItem(key)
Removes a key/value pair from the local storage if it exists.
Nothing happens if there's no item associated with the given key.


| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to remove |



## clear()
Remove all key/value pairs from the local storage.


  