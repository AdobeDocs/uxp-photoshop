---
title: window.ErrorEvent
description: See
---

# window.ErrorEvent
**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent](https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent)
- [https://html.spec.whatwg.org/#the-errorevent-interface](https://html.spec.whatwg.org/#the-errorevent-interface)



## ErrorEvent(typeArg, [eventInit])
Creates an instance of ErrorEvent.


| Param | Type | Default |
| --- | --- | --- |
| typeArg | `*` |  | 
| [eventInit] | `*` | `{}` | 



## message
**Read only**


## filename
**Read only**


## lineno
**Read only**


## colno
**Read only**


## error
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

  