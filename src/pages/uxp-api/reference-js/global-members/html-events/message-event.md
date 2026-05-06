---
title: window.MessageEvent
description: "See: https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent"
---

# window.MessageEvent
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent)  


## MessageEvent(data, origin, source, eventInit)
Creates an instance of MessageEvent.


| Param | Type |
| --- | --- |
| data | `*` | 
| origin | `*` | 
| source | `*` | 
| eventInit | `*` | 



## data ⇒ `string`
**Returns**: `string` - returns the data sent by the server.  


## origin ⇒ `string`
**Returns**: `string` - returns the origin of the message.  


## source ⇒ `string`
**Returns**: `string` - returns the string indicating the messageEventSource.  


## type
**Read only**


## isTrusted : `boolean`
**Read only**


## target : `Node`
**Read only**


## currentTarget : `Node`
**Read only**


## bubbles : `boolean`
**Read only**


## cancelable : `boolean`
**Read only**


## composed : `boolean`
**Read only**


## eventPhase
**Read only**


## defaultPrevented : `boolean`
**Read only**


## returnValue : `*`


## initEvent(typeArg, bubblesArg, cancelableArg)

| Param | Type |
| --- | --- |
| typeArg | `string` | 
| bubblesArg | `boolean` | 
| cancelableArg | `boolean` | 



## composedPath()
Returns the event's path

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath)
- [https://dom.spec.whatwg.org/#dom-event-composedpath](https://dom.spec.whatwg.org/#dom-event-composedpath)



## preventDefault()


## stopImmediatePropagation()


## stopPropagation()

  