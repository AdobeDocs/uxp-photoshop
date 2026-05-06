---
title: window.ReadableStream
description: "See: Web APIs - ReadableStream"
---

# window.ReadableStream
**See**: [Web APIs - ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)  
**Since**: UXP v6.1  


## ReadableStream(underlyingSource, strategy)
Creates a ReadableStream object from the given handlers.
\<br\>\</br\>Note that `underlyingSource.type` and `underlyingSource.autoAllocateChunkSize` are not supported.

**Returns**: `ReadableStream`  

| Param | Type | Description |
| --- | --- | --- |
| underlyingSource | `Object` | Define how the constructed stream instance will behave. |
| underlyingSource.start(controller) | `function` | Called immediately when the object is constructed.          This method needs to do anything else required to set up the stream functionality.          If this process is to be done asynchronously, it can return a promise to signal success or failure.          The controller parameter passed to this method is a ReadableStreamDefaultController. |
| underlyingSource.pull(controller) | `function` | Called repeatedly when the stream's internal queue of chunks is not full,          up until it reaches its high water mark.          If pull() returns a promise, then it won't be called again until that promise fulfills.          If the promise rejects, the stream will become errored.          The controller parameter passed to this method is a ReadableStreamDefaultController. |
| underlyingSource.cancel(reason) | `function` | Called if the app signals that the stream is to be cancelled.          The contents should do whatever is necessary to release access to the stream source.          If this process is asynchronous, it can return a promise to signal success or failure.          The reason parameter contains a string describing why the stream was cancelled. |
| strategy | `Object` | Defines a queuing strategy for the stream. |
| strategy.highWaterMark | `number` | Defines the total number of chunks that can be contained in the internal queue          before backpressure is applied. |
| strategy.size(chunk) | `function` | Indicates the size to use for each chunk, in bytes. |



## locked : `boolean`
**Read only**
Indicate whether the readable stream is locked.



## cancel(reason)
Cancel the readable stream.

**Returns**: `Promise<void>`  
**Throws**:

- `TypeError` thrown if the source stream is not a ReadableStream or it's locked.


| Param | Type | Description |
| --- | --- | --- |
| reason | `string` | reason for the cancellation. |



## getReader(options)
Create a reader and lock the stream to it.
\<br\>\</br\>Note that currently ReadableStreamDefaultReader object is returned as options.mode \<b\>"byob" is not supported.\</b\>

**Returns**: `ReadableStreamDefaultReader`  
**Throws**:

- `Error` when options["mode"] does not equal to undefined.


| Param | Type | Description |
| --- | --- | --- |
| options | `Object` | Object with mode property. |
| options.mode | `*` | ReadableStreamDefaultReader being created, defaults to `undefined` and `byob` is not yet supported. |



## pipeThrough(transform, options)
Provides a chainable way of piping the current stream through a transform stream.

**Returns**: `ReadableStream` - ReadableStream of the input transform stream.  
**Throws**:

- `TypeError` thrown if the source stream is not a ReadableStream.
- `TypeError` thrown if the input transform stream is not valid.
- `TypeError` thrown if the source readable stream is locked.
- `TypeError` thrown if the writable stream of the input transform stream is locked.
- `TypeError` thrown if options is not valid.

**Since**: v7.0.0  

| Param | Type | Description |
| --- | --- | --- |
| transform | `TransformStream` \| `WritableAndReadable` | TransformStream or an object with the structure \{writable, readable} |
| options | `Object` |  |
| options.preventClose | `boolean` | If true, the source ReadableStream closing will no loger cause the destination WritableStream          to be closed. |
| options.preventAbort | `boolean` | If true, errors in the source ReadableStream will no longer abort the destination WritableStream. |
| options.preventCancel | `boolean` | If true, errors in the destination WritableStream will no longer cancel the source ReadableStream. |
| options.signal | `AbortSignal` | If aborted, ongoing pipe operations can be aborted. |



## pipeTo(destination, options)
Pipes this readable stream to a given writable stream destination.

**Returns**: `Promise<void>` resolves when the piping process has completed.  
**Throws**:

- `TypeError` thrown if the source stream is not a ReadableStream.
- `TypeError` thrown if the destination is not a WritableStream.
- `TypeError` thrown if the source ReadableStream is locked.
- `TypeError` thrown if the destination WritableStream is locked.
- `TypeError` thrown if options is not valid.

**Since**: v7.0.0  

| Param | Type | Description |
| --- | --- | --- |
| destination | `WritableStream` | Final destination for the ReadableStream. |
| options | `Object` | (Optional) Used when piping to the writable stream. |
| options.preventClose | `boolean` | If true, the source ReadableStream closing will no loger cause the destination WritableStream to be closed. |
| options.preventAbort | `boolean` | If true, errors in the source ReadableStream will no longer abort the destination WritableStream. |
| options.preventCancel | `boolean` | If true, errors in the destination WritableStream will no longer cancel the source ReadableStream. |
| options.signal | `AbortSignal` | If aborted, ongoing pipe operations can be aborted. |



## tee()
Tees the current ReadableStream, returning a two-element array
containing the two resulting branches as new ReadableStream instances.

**Returns**: `Array` - an array containing two ReadableStream instances.  
**Throws**:

- `TypeError` thrown if the source stream is not a ReadableStream.

**Since**: v7.0.0  

  