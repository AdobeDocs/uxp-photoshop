---
title: window.ResizeObserver
description: "See: ResizeObserver"
---

# window.ResizeObserver
**See**: [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)  
**Since**: v8.1  


## ResizeObserver(callback)
Provides a mechanism to observe changes to the size of an element's content or border box.


| Param | Type | Description |
| --- | --- | --- |
| callback | `ResizeObserverCallback` | The function called whenever a resize event is triggered. |



## observe(target, [options])
Starts observing the specified target element for size changes.

**See**: [ResizeObserver - observe](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe)  
**Since**: v8.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| target | `Element` |  | The element to be observed. |
| [options] | `Object` | `{}` | Options to configure the observation. Default is `{ box: "content-box" }`. |
| [options.box] | `string` |  | Specifies which box model to observe. Can be "content-box" or "border-box". |



## unobserve(target)
Stops observing the specified target element.

**See**: [ResizeObserver - unobserve](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/unobserve)  
**Since**: v8.1  

| Param | Type | Description |
| --- | --- | --- |
| target | `Element` | The element to stop observing. |



## disconnect()
Disconnects the ResizeObserver instance from all observed target elements.

**See**: [ResizeObserver - disconnect](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/disconnect)  
**Since**: v8.1  

  