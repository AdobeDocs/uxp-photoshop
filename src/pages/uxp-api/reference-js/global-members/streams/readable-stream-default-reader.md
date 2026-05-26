---
title: window.ReadableStreamDefaultReader
description: See: Web APIs - ReadableStreamDefaultReader
---

# window.ReadableStreamDefaultReader
**See**: [Web APIs - ReadableStreamDefaultReader](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader)  


## ReadableStreamDefaultReader(stream)
Create a new ReadableStreamDefaultReader object and locks the stream to the new reader.

**Returns**: `ReadableStreamDefaultReader`  
**Throws**:

- `TypeError` thrown if the supplied stream parameter is not a ReadableStream,
     or it is already locked for reading by another reader.


| Param | Type |
| --- | --- |
| stream | `ReadableStream` | 



## closed ⇒
Returns a promise that will be fulfilled when the stream becomes closed,
or rejected if the stream ever errors or the reader’s lock is released before the stream finishes closing.

**Returns**: `Promise<void>`  


## cancel(reason)
Cancels the stream, signaling a loss of interest in the stream by a consumer.
The supplied reason argument will be given to the underlying source’s cancel() method.
The returned promise will fulfill if the stream shuts down successfully,
or reject if the underlying source signaled that there was an error doing so.
It will reject with a TypeError (without attempting to cancel the stream) if the stream is currently locked.

**Returns**: `Promise<string>`  
**Throws**:

- `TypeError` thrown if the source is not a ReadableStreamDefaultReader.


| Param | Type |
| --- | --- |
| reason | `string` | 



## read()
Returns a promise that allows access to the next chunk from the stream’s internal queue, if available.

**Returns**: `Promise<Object>` - \<br\>\</br\>&emsp;If a chunk is available, the promise will be fulfilled with an object of the form
         \{ value: theChunk, done: false }.
     \<br\>\</br\>&emsp;If the stream becomes closed, the promise will be fulfilled with an object of the form
         \{ value: undefined, done: true }.
     \<br\>\</br\>&emsp;If the stream becomes errored, the promise will be rejected with the relevant error.  
**Throws**:

- `TypeError` thrown if the source is not a ReadableStreamDefaultReader or if the source is not readable.



## releaseLock()
Releases the reader’s lock on the corresponding stream.
After the lock is released, the reader is no longer active.
If the associated stream is errored when the lock is released,
the reader will appear errored in the same way from now on; otherwise, the reader will appear closed.
If the reader’s lock is released while it still has pending read requests,
then the promises returned by the reader’s read() method are immediately rejected with a TypeError.
Any unread chunks remain in the stream’s internal queue and can be read later by acquiring a new reader.

**Throws**:

- `TypeError` thrown if the source is not a ReadableStreamDefaultReader.


  