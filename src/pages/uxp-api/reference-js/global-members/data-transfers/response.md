---
title: window.Response
description: Response class represents a resource request.
---

# window.Response
Response class represents a resource request.

**Since**: v7.3.0  


## Response([body], [options])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [body] | `string` \| `Blob` \| `ArrayBuffer` \| `TypedArray` \| `FormData` \| `ReadableStream` \| `URLSearchParams` | `null` | Body of the response. |
| [options] | `Object` | `{}` | Custom settings that you want to apply to the response. |
| [options.status] | `number` | `200` | Status code of the response. |
| [options.statusText] | `string` |  | Status message associated with the status code. The default value is "". |
| [options.headers] | `Headers` \| `string` | `{}` | Any headers that you want to add to the response. |



## body : `ReadableStream`
**Read only**
ReadableStream object with the body contents or null if response's body is empty.

**See**: [Response - body](https://developer.mozilla.org/en-US/docs/Web/API/Response/body)  


## bodyUsed : `boolean`
**Read only**
Indicates whether the response body has been read yet.

**See**: [Response - bodyUsed](https://developer.mozilla.org/en-US/docs/Web/API/Response/bodyUsed)  


## headers : `Headers`
**Read only**
[Headers](headers.md) object associated with the response.

**See**: [Response - headers](https://developer.mozilla.org/en-US/docs/Web/API/Response/headers)  


## ok : `boolean`
**Read only**
Indicates whether the response was successful (if status is in range 200-299) or not.

**See**: [Response - ok](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)  


## status : `number`
**Read only**
HTTP status codes of the response.

**See**: [Response - status](https://developer.mozilla.org/en-US/docs/Web/API/Response/status)  


## statusText : `string`
**Read only**
Status message corresponding to the HTTP status code. Default is "".

**See**: [Response - statusText](https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText)  


## url : `string`
**Read only**
URL of the response.

**See**: [Response - url](https://developer.mozilla.org/en-US/docs/Web/API/Response/url)  


## arrayBuffer()
Reads the response stream to completion and returns it as a Promise that resolves with an ArrayBuffer.

**Returns**: `Promise<ArrayBuffer>` Promise that resolves with an ArrayBuffer.  
**See**: [Response - arrayBuffer](https://developer.mozilla.org/en-US/docs/Web/API/Response/arrayBuffer)  


## blob()
Reads the response stream to completion and returns it as a Promise that resolves with a Blob.

**Returns**: `Promise<Blob>` Promise that resolves with a Blob.  
**See**: [Response - blob](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob)  


## clone()
Creates a copy of the current response object.

**Returns**: `Response` - Copy of the response.  
**See**: [Response - clone](https://developer.mozilla.org/en-US/docs/Web/API/Response/clone)  


## formData()
Reads the response stream to completion and returns it as a Promise that resolves with a FormData.

**Returns**: `Promise<FormData>` Promise that resolves with a FormData.  
**See**: [Response - formData](https://developer.mozilla.org/en-US/docs/Web/API/Response/formData)  


## json()
Reads the response stream to completion and
returns it as a Promise that resolves with the result of parsing the body text as JSON.

**Returns**: `Promise<Object>` Promise that resolves to JSON object.  
**See**: [Response - json](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)  


## text()
Reads the response stream to completion and returns it as a Promise that resolves with a String decoded using UTF-8.

**Returns**: `Promise<string>` Promise that resolves with a String.  
**See**: [Response - text](https://developer.mozilla.org/en-US/docs/Web/API/Response/text)  


## error()
**Returns**: `Response` - Response object  
**See**: [Response - error](https://developer.mozilla.org/en-US/docs/Web/API/Response/error_static)  


## redirect(url, [status])
**Returns**: `Response` - Response object  
**Throws**:

- `RangeError` If status is not one of 301, 302, 303, 307, 308.

**See**: [Response - redirect](https://developer.mozilla.org/en-US/docs/Web/API/Response/redirect_static)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | `string` |  | URL that the new response is to originate from. |
| [status] | `number` | `302` | Status code for the response. Possible values are 301, 302, 303, 307 and 308. |


  