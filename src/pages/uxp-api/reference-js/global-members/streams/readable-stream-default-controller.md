---
title: window.ReadableStreamDefaultController
description: "See: Web APIs - ReadableStreamDefaultController"
---

# window.ReadableStreamDefaultController
**See**: [Web APIs - ReadableStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController)  


## desiredSize : `number`
Returns the desired size to fill the controlled stream’s internal queue.
It can be negative, if the queue is over-full.



## close()
Closes the controlled readable stream.
Consumers will still be able to read any previously-enqueued chunks from the stream,
but once those are read, the stream will become closed.

**Throws**:

- `TypeError` thrown if the source is not a ReadableStreamDefaultController



## enqueue(chunk)
Enqueues the given chunk in the controlled readable stream.

**Throws**:

- `TypeError` thrown if the source is not a ReadableStreamDefaultController


| Param | Type |
| --- | --- |
| chunk | `*` | 



## error(error)
Errors the controlled readable stream, making all future interactions with it fail with the given error.

**Throws**:

- `TypeError` thrown if the source object is not a ReadableStreamDefaultController


| Param | Type |
| --- | --- |
| error | `*` | 


  