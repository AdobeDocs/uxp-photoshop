---
title: window.AbortController
description: See: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
---

# window.AbortController
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
\<br\>\</br\> See also [AbortSignal](abort-signal.md#module:global.AbortSignal)  


## signal : `AbortSignal`
AbortSignal object, which can be used to abort a request



## abort(reason)
Aborts a request before it has completed.
If the reason is not specified, the reason is set to "AbortError" DomException


| Param | Type | Description |
| --- | --- | --- |
| reason | `*` | the reason why the operation was aborted |


  