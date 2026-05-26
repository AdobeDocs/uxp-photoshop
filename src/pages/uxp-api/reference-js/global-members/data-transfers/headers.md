---
title: windows.Headers
description: Headers class represents HTTP request and response headers.
---

# windows.Headers
Headers class represents HTTP request and response headers.

**Since**: v7.3.0  


## Headers([init])

| Param | Type | Description |
| --- | --- | --- |
| [init] | `Headers` \| `Array<{string, string}>` \| `Object` | An existing Headers object, an array of name-value pairs or object literal with string values. |



## append(name, value)
Appends a new value onto an existing header inside a Header object, or add the header if it does not exist.

**See**: [Headers - append](https://developer.mozilla.org/en-US/docs/Web/API/Headers/append)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the HTTP header |
| value | `string` | Value of the HTTP header |



## delete(name)
Deletes a header from the current Header object.

**See**: [Headers - delete](https://developer.mozilla.org/en-US/docs/Web/API/Headers/delete)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the HTTP header |



## get(name)
Returns a byte string of all the values of a header within the Headers object with given name.
If the requested header does not exist in the Headers object, it returns null.

**Returns**: `string` - Value of the retrieved header.  
**See**: [Headers - get](https://developer.mozilla.org/en-US/docs/Web/API/Headers/get)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the HTTP header. |



## has(name)
Indicates whether the Headers object contains a certain header.

**Returns**: `boolean` - Indicates whether the Headers object contains the input name.  
**See**: [Headers - has](https://developer.mozilla.org/en-US/docs/Web/API/Headers/has)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the HTTP header. |



## set(name, value)
Sets a new value for the existing header inside the Headers object, or add the header if it does not exist.

**See**: [Headers - set](https://developer.mozilla.org/en-US/docs/Web/API/Headers/set)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the HTTP header. |
| value | `string` | Value of the HTTP header. |



## forEach(callbackFn, thisArg)
Executes a callback function once per each key/value pair in the Headers object.

**See**: [Headers - forEach](https://developer.mozilla.org/en-US/docs/Web/API/Headers/forEach)  

| Param | Type | Description |
| --- | --- | --- |
| callbackFn | `function` | Function to execute for each entry in the map. It takes the following arguments. |
| thisArg | `Object` | Value to use as this when executing callback. |



## keys()
Returns an iterator object allowing to go through all keys contained in the Headers object.

**Returns**: `iterator` - Iterator.  
**See**: [Headers - keys](https://developer.mozilla.org/en-US/docs/Web/API/Headers/keys)  


## values()
Returns an iterator object allowing to go through all values contained in the Headers object.

**Returns**: `iterator` - Iterator.  
**See**: [Headers - values](https://developer.mozilla.org/en-US/docs/Web/API/Headers/values)  


## entries()
Returns an iterator object allowing to go through all key/value pairs contained in the Headers object.

**Returns**: `iterator` - Iterator.  
**See**: [Headers - entries](https://developer.mozilla.org/en-US/docs/Web/API/Headers/entries)  

  