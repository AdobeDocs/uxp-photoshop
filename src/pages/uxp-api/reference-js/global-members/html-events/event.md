---
title: window.Event
description: "See: https://developer.mozilla.org/en-US/docs/Web/API/Event"
---

# window.Event
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)  


## Event(eventType, eventInit)
Creates an instance of Event.


| Param | Type |
| --- | --- |
| eventType | `*` | 
| eventInit | `*` | 



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


## NONE


## CAPTURING\_PHASE


## AT\_TARGET


## BUBBLING\_PHASE

  