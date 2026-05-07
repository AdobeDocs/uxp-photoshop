---
title: window.AbortSignal
description: See: https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
---

# window.AbortSignal
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)
\<br\>\</br\>
Please note that AbortSignal works only for web streams.  


## aborted : `boolean`
Whether the request that the signal is communicating with is aborted or not



## reason : `*`
The abort reason, once the signal has aborted.
`Undefined` when the signal has not been aborted.



## throwIfAborted()
Throws the signal's abort reason if the signal has been aborted.
Otherwise, it does nothing.



## abort(reason)
Creates an AbortSignal object that is already set as aborted.

**Returns**: `AbortSignal` - AbortSignal object with the AbortSignal.aborted property is set to true
     and AbortSignal.reason set to the specified or default reason  

| Param | Type |
| --- | --- |
| reason | `*` | 


  