---
title: window.KeyboardEvent
description: "See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent"
---

# window.KeyboardEvent
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)  


## KeyboardEvent(type, eventInit)
Creates an instance of KeyboardEvent.


| Param | Type |
| --- | --- |
| type | `*` | 
| eventInit | `*` | 



## altKey
**Read only**


## ctrlKey
**Read only**


## metaKey
**Read only**


## shiftKey
**Read only**


## code
**Read only**


## keyCode
**Read only**


## key
**Read only**


## location
**Read only**


## repeat
**Read only**


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


## getModifierState(keyArgs)
**Returns**: `boolean`  

| Param | Type |
| --- | --- |
| keyArgs | `string` | 



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

  