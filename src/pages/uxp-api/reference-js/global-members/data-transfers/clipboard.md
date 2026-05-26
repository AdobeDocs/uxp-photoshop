---
title: navigator.clipboard
description: See: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
---

# navigator.clipboard
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)  


## Clipboard()
Creates an instance of Clipboard.

Note: Clipboard access is not supported for 3P plugins with manifest version upto 4. Valid manifest entry required from manifest version 5.;



## setContent(data)
Set data to clipboard.
Note: This is a non-standard API.

**Returns**: `Promise`  

| Param | Type | Description |
| --- | --- | --- |
| data | `object` | The data to store in the clipboard. The object keys are the mime types, so for text, use `text/plain` as a key. |

**Example**  
```js
navigator.clipboard.setContent({"text/plain": "Hello!"});
```


## getContent()
Get data from clipboard.
Note: This is a non-standard API.

**Returns**: `Promise`  
**Example**  
```js
navigator.clipboard.getContent();
```


## write(data)
Write data to clipboard. This can be used to implement cut and copy functionality.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write)  
**Since**: v6.0  

| Param | Type | Description |
| --- | --- | --- |
| data | `object` | The data to set. |

**Example**  
```js
navigator.clipboard.write({"text/plain": "Hello!"});
```


## writeText(text)
Write text to clipboard. This can be used to implement cut and copy text functionality.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)  
**Since**: v6.0  

| Param | Type | Description |
| --- | --- | --- |
| text | `string` \| `object` | text string to set or an object of the form \{"text/plain": "text to set"}.                               Note that the object format will be deprecated and shouldn't be used. |

**Example**  
```js
navigator.clipboard.writeText("Hello!");
```


## read()
Read data from clipboard.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/read](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/read)  
**Since**: v6.0  
**Example**  
```js
navigator.clipboard.read();
```


## readText()
Read text from clipboard.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText)  
**Since**: v6.0  
**Example**  
```js
navigator.clipboard.readText();
```


## clearContent()
Clear clipboard content.
Note: Nonstandard: This method is non-standard.

**Returns**: `Promise`  
**Since**: v6.0  
**Example**  
```js
navigator.clipboard.clearContent();
```

