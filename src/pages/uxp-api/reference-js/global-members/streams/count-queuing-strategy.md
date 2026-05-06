---
title: window.CountQueuingStrategy
description: "See: Web APIs - CountQueuingStrategy"
---

# window.CountQueuingStrategy
**See**: [Web APIs - CountQueuingStrategy](https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy)  


## CountQueuingStrategy(init)
Creates a new CountQueuingStrategy object with the provided high water mark.

**Returns**: `CountQueuingStrategy`  

| Param | Type | Description |
| --- | --- | --- |
| init | `Object` | Object with high water mark property. |
| init.highWaterMark | `number` | The total number of chunks that can be contained in the internal queue before backpressure is applied. |



## highWaterMark : `number`
The high water mark.



## size()
The size of chunk, always 1.


  