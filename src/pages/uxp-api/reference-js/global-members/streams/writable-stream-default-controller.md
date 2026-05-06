---
title: window.WritableStreamDefaultController
description: "See: Web APIs - WritableStreamDefaultController"
---

# window.WritableStreamDefaultController
**See**: [Web APIs - WritableStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController)  


## signal : `AbortSignal`
Returns AbortSignal that can be used to abort the pending write or close operation when the stream is aborted.



## error(message)
Closes the controlled writable stream, making all future interactions with it fails with the given error.


| Param | Type |
| --- | --- |
| message | `string` | 


  