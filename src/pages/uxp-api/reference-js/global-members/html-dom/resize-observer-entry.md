---
title: window.ResizeObserverEntry
description: See: ResizeObserverEntry
---

# window.ResizeObserverEntry
**See**: [ResizeObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry)  
**Since**: v8.1  


## ResizeObserverEntry(target)
Represents the object passed to the ResizeObserver() constructor's callback function,
which allows access to the new dimensions of the Element.


| Param | Type | Description |
| --- | --- | --- |
| target | `Element` | The target element being observed. |



## target : `Element`
**Read only**
Gets the target element being observed.

**See**: [ResizeObserverEntry - target](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/target)  
**Since**: v8.1  


## contentRect : `DOMRectReadOnly`
**Read only**
Gets the content rectangle of the target element.

**See**: [ResizeObserverEntry - contentRect](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentRect)  
**Since**: v8.1  


## borderBoxSize : `Array<ResizeObserverSize>`
**Read only**
Gets the border box size of the target element.

**See**: [ResizeObserverEntry - borderBoxSize](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/borderBoxSize)  
**Since**: v8.1  


## contentBoxSize : `Array<ResizeObserverSize>`
**Read only**
Gets the content box size of the target element.

**See**: [ResizeObserverEntry - contentBoxSize](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize)  
**Since**: v8.1  


## devicePixelContentBoxSize : `Array<ResizeObserverSize>`
**Read only**
Throws an error because devicePixelContentBoxSize is not supported in UXP.

**Throws**:

- `DOMException` Always throws a NotSupportedError.

**See**: [ResizeObserverEntry - devicePixelContentBoxSize](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize)  
**Since**: v8.1  

  