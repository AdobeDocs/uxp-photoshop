---
title: window.Blob
description: Since: UXP v6.3
---

# window.Blob
**Since**: UXP v6.3  


## Blob(array, [options])
The Blob object represents a blob, which is a file-like object of immutable, raw data;
they can be read as text or binary data, or converted into a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
so its methods can be used for processing the data.

**Returns**: New Blob object which contains a concatenation of all of the data in the array passed into the constructor.  

| Param | Type | Description |
| --- | --- | --- |
| array | `Array` | Iterable object such as an Array, having ArrayBuffers, TypedArrays, DataViews, Blobs, strings, or a mix of any of such elements, that will be put inside the Blob. Note that strings here are encoded as UTF-8, unlike the usual JavaScript UTF-16 strings. |
| [options] | `Object` | `(optional)` Object which may specify any of the following properties: |
| [options.type] | `string` | `(optional)` MIME type of the data that will be stored into the blob. The default value is the empty string, (""). |
| [options.endings] | `string` | `(optional)` How to interpret newline characters (\n) within the contents, if the data is text. The default value, transparent, copies newline characters into the blob without changing them. To convert newlines to the host system's native convention, specify the value native. |



## size : `number`
**Read only**
Size of the Blob in bytes.



## type : `string`
**Read only**
MIME type of the Blob.



## arrayBuffer()
Get the contents of the Blob in the form of an ArrayBuffer.

**Returns**: `Promise<ArrayBuffer>` Promise that resolves with an ArrayBuffer that contains the blob's data in binary form.  


## slice([start], [end], [contentType])
Get a portion of the Blob's data selected from start to end (end not included).

**Returns**: `Blob` - New Blob object containing the specified subset of the data contained with the blob on which this method was called.
The original blob is not altered.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | `number` | `0` | `(Optional)` Index into the Blob indicating the first byte to include in the new Blob |
| [end] | `number` | `size` | `(Optional)` Index into the Blob indicating the first byte that will NOT be included in the new Blob |
| [contentType] | `string` | `&quot;\&quot;\&quot;&quot;` | `(Optional)` String containing the file's [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type), or empty string if the type could not be determined. Refer [Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value) |



## stream()
Get the data contained within the Blob as a ReadableStream.

**Returns**: `ReadableStream` - Content of the Blob.  


## text()
Get contents of the Blob as a string.

**Returns**: `Promise<string>` Promise that resolves with a string which contains the blob's data as a text string.
The data is always presumed to be in UTF-8 format.  

  