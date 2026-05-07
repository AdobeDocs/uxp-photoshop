---
title: window.WritableStreamDefaultWriter
description: See: Web APIs - WritableStreamDefaultWriter
---

# window.WritableStreamDefaultWriter
**See**: [Web APIs - WritableStreamDefaultWriter](https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter)  


## WritableStreamDefaultWriter(stream)
Creates a new WritableStreamDefaultWriter object.

**Returns**: `WritableStreamDefaultWriter`  

| Param | Type |
| --- | --- |
| stream | `WritableStream` | 



## closed : `Promise<void>`
Returns a Promise that fullfils if the stream becomes closed,
or rejects if the stream errors or the writer's lock is released.



## desiredSize : `number`
The desired size required to fill the stream's internal queue.
It will return null if the stream cannot be successfully written to.
It will return zero if the stream is closed.

**Throws**:

- `TypeError` thrown if the writer's lock is released.



## ready : `Promise<void>`
Returns a Promise that resolves when the desired size of the stream's internal queue transitions
from non-positive to positive, signaling that it is no longer applying backpressure.
Once the desired size dips back to zero or below, the getter will return a new promise that stays pending until the next transition.
If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become rejected.



## abort(reason)
Aborts the stream, signaling that the producer can no longer successfully write to the stream
and it is to be immediately moved to an errored state, with any queued-up writes discarded.
The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled that there was an error doing so.
It will reject with a TypeError if the stream is curretly locked.

**Returns**: `Promise<void>`  
**Throws**:

- `TypeError` thrown if the stream is not a WritableStream, or it is locked.


| Param | Type |
| --- | --- |
| reason | `string` | 



## close()
Closes the stream and returns a Promise that will fulfill if all remaining chunks are successfully written
and the stream successfully closes, or rejects if an error is encountered during this process.
It will reject with a TypeError (without attempting to cancel the stream) if the stream is currently locked.

**Returns**: `Promise<void>`  


## releaseLock()
Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
If the associated stream is errored when the lock is released, the writer will appear errored in the same way from now on;
otherwise, the writer will appear closed.



## write(chunk)
Writes the given chunk to the writable stream and its underlying sink,
then returns a Promise that resolves to indicate the success or failure of the write operation.

**Returns**: `Promise<void>`  
**Throws**:

- `TypeError` thrown if the stream is not a writable stream, or it does not have an owner.


| Param | Type |
| --- | --- |
| chunk | `*` | 


  