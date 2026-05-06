---
title: window.WritableStream
description: "See: Web APIs - WritableStream"
---

# window.WritableStream
**See**: [Web APIs - WritableStream](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream)  


## WritableStream(underlyingSink, strategy)
Creates a new WritableStream object wrapping the provided underlying sink.

**Returns**: `WritableStream`  

| Param | Type | Description |
| --- | --- | --- |
| underlyingSink | `Object` | Defines how the constructred stream object will behave. |
| underlyingSink.start(contorller) | `function` | Called immediately when the object is constructed.              If this process is to be done asynchronously, it can return a promise to signal success or failure.              The controller parameter passed to this method is a WritableStreamDefaultController.              This can be used by the developer to control the stream during set up. |
| underlyingSink.write(chunk,controller) | `function` | Called when a new chunk of data is ready to be written to the underlying sink.              It can return a promise to signal success or failure of the write operation.              The controller parameter passed to this method is a WritableStreamDefaultController.              This method will be called only after previous writes have succeeded,              and never after the stream is closed or aborted. |
| underlyingSink.close(controller) | `function` | Called if the app signals that it has finished writing chunks to the stream.              If this process is asynchronous, it can return a promise to signal success or failure.              This method will be called only after all queued-up writes have succeeded.              The controller parameter passed to this method is a WritableStreamDefaultController. |
| strategy | `Object` | Defines a queuing strategy for the stream. |
| strategy.highWaterMark | `number` | The total number of chunks that can be contained              in the internal queue before backpressure is applied. |
| strategy.size(chunk) | `function` | Indicates the size to use for each chunk, in bytes. |



## locked : `boolean`
Indicate whether the WritableStream is locked.



## abort(reason)
Aborts the stream, signalling that the producer can no longer successfully write to the stream and
it's to be immediately moved to an error state, with any queued writes discarded.

**Returns**: `Promise<void>`  

| Param | Type |
| --- | --- |
| reason | `*` | 



## close()
Closes the stream.

**Returns**: `Promise<void>`  
**Throws**:

- `TypeError` thrown if the stream is locked.
- `TypeError` thrown if the stream is closed or closing.



## getWriter()
Returns a new WritableStreamDefaultWriter object and locks the stream to that object.
While the stream is locked, no other writer can be acquired until this one is released.

**Returns**: `WritableStreamDefaultWriter`  

  