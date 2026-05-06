---
title: window.TransformStream
description: "See: Web APIs - TransformStream"
---

# window.TransformStream
**See**: [Web APIs - TransformStream](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream)  


## TransformStream(transformer, writableStrategy, readableStrategy)
Cretes a new TransformStream object wrapping the provided transformer.
If no transformer argument is supplied, then the result will be an identity transform stream.


| Param | Type | Description |
| --- | --- | --- |
| transformer | `Object` | Defines algorithms for the specific transformation to be performed. |
| transformer.start | `function` | Called when the TransfromStream is constructed. |
| transformer.transform | `function` | Called when a chunk written to the writable is ready to be transformed.          If no transform method is supplied, the identity transform is used. |
| transformer.flush | `function` | Called after all chunks written to the writable have been successfully transformed,          and the writable is about to be closed. |
| writableStrategy | `Object` | Queuing strategy for the stream. |
| writableStrategy.highWaterMark | `number` | A non-negative number.          The total number of chunks that can be contained in the internal queue before backpressure is applied |
| writableStrategy.size | `function` | The size to use for each chunk, in bytes. |
| readableStrategy | `Object` | Queuing strategy for the stream. |
| readableStrategy.highWaterMark | `number` | A non-negative number.          The total number of chunks that can be contained in the internal queue before backpressure is applied |
| readableStrategy.size | `function` | The size to use for each chunk, in bytes. |



## readable : `ReadableStream`
ReadableStream representing the readable of this TransformStream.



## writable : `WritableStream`
WritableStream representing the writable of this TransformStream.


  