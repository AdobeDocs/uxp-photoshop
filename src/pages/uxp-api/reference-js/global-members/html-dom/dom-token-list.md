---
title: window.DOMTokenList
description: DOMTokenList supports the ClassList and other token list functionality
---

# window.DOMTokenList
DOMTokenList supports the ClassList and other token list functionality

**See**

- [https://dom.spec.whatwg.org/#interface-domtokenlist](https://dom.spec.whatwg.org/#interface-domtokenlist)
- [https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)



## length
**Read only**
Returns the number of tokens in the list

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-length](https://dom.spec.whatwg.org/#dom-domtokenlist-length)  


## value
**Read only**
The serialized string value of the token list

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-value](https://dom.spec.whatwg.org/#dom-domtokenlist-value)  


## add(...tokens)
Adds the specified tokens to the token list. If the token is already present, no error is thrown.

**Throws**:

- `DOMException` 

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-add](https://dom.spec.whatwg.org/#dom-domtokenlist-add)  

| Param | Type |
| --- | --- |
| ...tokens | `string` | 



## remove(...tokens)
Removes the specified items from the token list. If the token is not present, no error is thrown.

**Throws**:

- `DOMException` 

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-remove](https://dom.spec.whatwg.org/#dom-domtokenlist-remove)  

| Param | Type |
| --- | --- |
| ...tokens | `string` | 



## replace(oldToken, newToken)
Replaces an old token with a new token. If the old token doesn't exist,
no action occurs, and `false` is returned.

**Throws**:

- `DOMException` 

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-replace](https://dom.spec.whatwg.org/#dom-domtokenlist-replace)  

| Param | Type |
| --- | --- |
| oldToken | `any` | 
| newToken | `any` | 



## toggle(token, force)
Toggles a token within the list. If `force` is not present, then the following
rules are applied:

* if the token is present, it is removed, and `false` is returned
* if the token isn't present, it is added, and `true` is returned

If `force` is supplied, then:

* if `true`, the token is added
* if `false`, the token is removed

**Returns**: `boolean` - if the token exists in the last after the operation  
**Throws**:

- `DOMException` 

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-toggle](https://dom.spec.whatwg.org/#dom-domtokenlist-toggle)  

| Param | Type |
| --- | --- |
| token | `string` | 
| force | `boolean` | 



## item(index)
Return the item at the specified index, or `null` if the index is out-of-range

**Returns**: `string` - the item at the index, or null if index is out of range  
**Throws**:

- `DOMException` 

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-item](https://dom.spec.whatwg.org/#dom-domtokenlist-item)  

| Param | Type |
| --- | --- |
| index | `number` | 



## contains(token)
Returns whether the token is in the list or not.

**Returns**: `boolean` - if `true`, the token is in the list, otherwise it isn't  
**Throws**:

- `DOMException` 

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-contains](https://dom.spec.whatwg.org/#dom-domtokenlist-contains)  

| Param | Type |
| --- | --- |
| token | `any` | 



## supports(token)
Returns `true` if the token is acceptable to the list; otherwise returns `false`.
If `false` is returned, passing the token would throw an error when calling
any other method.

**Returns**: `boolean` - if `true`, the token is acceptable when calling other methods  
**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-supports](https://dom.spec.whatwg.org/#dom-domtokenlist-supports)  

| Param | Type |
| --- | --- |
| token | `string` | 


  