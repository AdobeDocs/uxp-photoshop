---
title: window.IntersectionObserverEntry
description: See: IntersectionObserverEntry
---

# window.IntersectionObserverEntry
**See**: [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)  
**Since**: v8.1  


## IntersectionObserverEntry(intersectionObserverEntryInit)
Represents the information about the intersection of a target element with an intersection observer's root.


| Param | Type | Description |
| --- | --- | --- |
| intersectionObserverEntryInit | `IntersectionObserverEntryInit` | An object containing the initial values for the entry. |



## time : `number`
**Read only**
Gets the time when the intersection was recorded. The returned value is a number and not a DOMHighResTimeStamp since DOMHighResTimeStamp is not supported in UXP.

**See**: [IntersectionObserverEntry - time](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/time)  
**Since**: v8.1  


## rootBounds : `DOMRectReadOnly`
**Read only**
Gets the bounds rectangle of the root element at the time of intersection.

**See**: [IntersectionObserverEntry - rootBounds](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/rootBounds)  
**Since**: v8.1  


## boundingClientRect : `DOMRectReadOnly`
**Read only**
Gets the target element's bounds rectangle at the time of intersection.

**See**: [IntersectionObserverEntry - boundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/boundingClientRect)  
**Since**: v8.1  


## intersectionRect : `DOMRectReadOnly`
**Read only**
Gets the rectangle describing the intersection between the target element's bounds and the root's bounds.

**See**: [IntersectionObserverEntry - intersectionRect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRect)  
**Since**: v8.1  


## isIntersecting : `boolean`
**Read only**
Indicates whether the target element is intersecting with the root.

**See**: [IntersectionObserverEntry - isIntersecting](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting)  
**Since**: v8.1  


## intersectionRatio : `number`
**Read only**
Gets the ratio of the intersection area to the target element's bounding client rectangle area ranging between 0.0 and 1.0.

**See**: [IntersectionObserverEntry - intersectionRatio](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio)  
**Since**: v8.1  


## target : `Element`
**Read only**
Gets the target element being observed that has changed the amount of intersection with root.

**See**: [IntersectionObserverEntry - target](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/target)  
**Since**: v8.1  

  