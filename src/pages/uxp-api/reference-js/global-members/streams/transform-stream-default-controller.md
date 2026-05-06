---
title: window.TransformStreamDefaultController
description: "See: Web APIs - TransformStreamDefaultController"
---

# window.TransformStreamDefaultController
**See**: [Web APIs - TransformStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/TransformStreamDefaultController)  


## desiredSize : `number`
Returns the desired size to fill the readable side’s internal queue.
It can be negative, if the queue is over-full.



## enqueue(chunk)
Enqueues the given chunk chunk in the readable side of the controlled transform stream.

**Throws**:

- `TypeError` thrown if the stream is not readable.


| Param | Type | Description |
| --- | --- | --- |
| chunk | `*` | The chunk being queued. A chunk is a single piece of data. |



## error(reason)
Errors both the readable side and the writable side of the controlled transform stream,
making all future interactions with it fail with the given error.
Any chunks queued for transformation will be discarded.


| Param | Type |
| --- | --- |
| reason | `string` | 



## terminate()
Closes the readable side and errors the writable side of the controlled transform stream.
This is useful when the transformer only needs to consume a portion of the chunks written to the writable side.


  