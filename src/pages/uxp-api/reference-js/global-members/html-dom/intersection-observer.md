---
title: window.IntersectionObserver
description: See: IntersectionObserver
---

# window.IntersectionObserver
**See**: [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)  
**Since**: v8.1  


## IntersectionObserver(callback, [options])
Provides a mechanism to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document element.

**Throws**:

- `SyntaxError` If the `rootMargin` or `scrollMargin` values are invalid.
- `RangeError` If any `threshold` values are outside the range of 0.0 to 1.0.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| callback | `function` |  | The function called whenever an intersection event is triggered. |
| [options] | `Object` | `{}` | Options to configure the observation. |
| [options.root] | `Element` | `` | The element that is used as the viewport for checking visibility of the target. If not specified, the document's viewport is used. |
| [options.rootMargin] | `string` | `&quot;\&quot;0px\&quot;&quot;` | Margin around the root. Can have values similar to the CSS margin property. |
| [options.scrollMargin] | `string` | `&quot;\&quot;0px\&quot;&quot;` | Margin applied to the scroll container during intersection calculation. |
| [options.threshold] | `number` \| `Array<number>` | `0` | A single number or an array of numbers indicating at what percentage of the target's visibility the observer's callback should be executed. |



## root : `Element`
Gets the root element being used for intersection calculation.

**See**: [IntersectionObserver - root](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root)  
**Since**: v8.1  


## rootMargin : `string`
Gets the root margin applied to the intersection calculation.

**See**: [IntersectionObserver - rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin)  
**Since**: v8.1  


## thresholds : `Array<number>`
Gets the list of thresholds used for triggering the observer's callback.

**See**: [IntersectionObserver - threshold](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/threshold)  
**Since**: v8.1  


## scrollMargin : `string`
Gets the scroll margin applied to the scroll container during intersection calculation.

**See**: [IntersectionObserver - scrollMargin](https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-scrollmargin)  
**Since**: v8.1  


## observe(target)
Starts observing the specified target element for intersection changes.

**Throws**:

- `TypeError` If the target is not an instance of `Element`.

**See**: [IntersectionObserver - observe](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe)  
**Since**: v8.1  

| Param | Type | Description |
| --- | --- | --- |
| target | `Element` | The element to be observed. |



## unobserve(target)
Stops observing the specified target element.

**Throws**:

- `TypeError` If the target is not an instance of `Element`.

**See**: [IntersectionObserver - unobserve](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/unobserve)  
**Since**: v8.1  

| Param | Type | Description |
| --- | --- | --- |
| target | `Element` | The element to stop observing. |



## disconnect()
Disconnects the IntersectionObserver instance from all observed target elements.

**See**: [IntersectionObserver - disconnect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect)  
**Since**: v8.1  


## takeRecords()
Returns a list of IntersectionObserverEntry objects for all observed elements.

**Returns**: `Array<IntersectionObserverEntry>` - An array of IntersectionObserverEntry objects.  
**See**: [IntersectionObserver - takeRecords](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/takeRecords)  
**Since**: v8.1  

  