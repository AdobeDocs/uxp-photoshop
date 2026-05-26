---
title: window.CanvasGradient
description: See: Web APIs - CanvasGradient for more details<br></br>
---

# window.CanvasGradient
**See**: [Web APIs - CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient) for more details\<br\>\</br\>
Also, refer to the interface [HTMLCanvasElement](../html-elements/html-canvas-element.md#module:global.htmlcanvaselement)\<br\>\</br\>  
**Since**: v7.0.0  


## addColorStop(offset, colorValue)
Adds a new color stop, defined by an `offset` and a `color value`, to a given canvas gradient.

**Throws**:

- `DOMException` 

**See**: [CanvasGradient - addColorStop](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient/addColorStop) for more details  

| Param | Type | Description |
| --- | --- | --- |
| offset | `number` | A number between 0 and 1, inclusive, representing the position of the color stop. 0 represents the start of the gradient and 1 represents the end. |
| colorValue | `string` | A CSS `<color>` value representing the color of the stop. |


  