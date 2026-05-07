---
title: window.Path2D
description: See: Web APIs - Path2D for more details<br></br>
---

# window.Path2D
**See**: [Web APIs - Path2D](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) for more details\<br\>\</br\>
Also, refer to the interface [HTMLCanvasElement](../html-elements/html-canvas-element.md#module:global.htmlcanvaselement)\<br\>\</br\>  
**Since**: v7.0.0  


## Path2D(path)
Creates an instance of Path2D.


| Param | Type | Description |
| --- | --- | --- |
| path | `Path2D` | `Optional` Path2D Object from another Path2D Instance |



## addPath(path)
Adds one Path2D object to another Path2D object.\<br\>\</br\>

**See**: [Path2D - addPath](https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath) for more details  

| Param | Type | Description |
| --- | --- | --- |
| path | `Path2D` | A Path2D object to add. |



## closePath()
Add a straight line from the current point to the start of the current sub-path.

**See**: [CanvasRenderingContext2D - closePath](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath) for more details  


## moveTo(x, y)
Begins a new sub-path at the point specified by the given (x, y) coordinates.

**See**: [CanvasRenderingContext2D - moveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis (horizontal) coordinate of the point. |
| y | `number` | The y-axis (vertical) coordinate of the point. |



## lineTo(x, y)
Adds a straight line to the current sub-path by connecting the sub-path's
last point to the specified (x, y) coordinates.

**See**: [CanvasRenderingContext2D - lineTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the line's end point. |
| y | `number` | The y-axis coordinate of the line's end point. |



## bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
Adds a cubic Bézier curve to the current sub-path.

**See**: [CanvasRenderingContext2D - bezierCurveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo) for more details  

| Param | Type | Description |
| --- | --- | --- |
| cp1x | `number` | The x-axis coordinate of the first control point. |
| cp1y | `number` | The y-axis coordinate of the first control point. |
| cp2x | `number` | The x-axis coordinate of the second control point. |
| cp2y | `number` | The y-axis coordinate of the second control point. |
| x | `number` | The x-axis coordinate of the end point. |
| y | `number` | The y-axis coordinate of the end point. |



## quadraticCurveTo(cpx, cpy, x, y)
Adds a quadratic Bézier curve to the current sub-path.

**See**: [CanvasRenderingContext2D - quadraticCurveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo) for more details  

| Param | Type | Description |
| --- | --- | --- |
| cpx | `number` | The x-axis coordinate of the control point. |
| cpy | `number` | The y-axis coordinate of the control point. |
| x | `number` | The x-axis coordinate of the end point. |
| y | `number` | The y-axis coordinate of the end point. |



## arc(x, y, radius, startAngle, endAngle, counterclockwise)
Adds a circular arc to the current sub-path.

**See**: [CanvasRenderingContext2D - arc](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc) for more details  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | `number` |  | The horizontal coordinate of the arc's center. |
| y | `number` |  | The vertical coordinate of the arc's center. |
| radius | `number` |  | The arc's radius. Must be positive. |
| startAngle | `number` |  | The angle at which the arc starts in radians, measured from the positive x-axis. |
| endAngle | `number` |  | The angle at which the arc ends in radians, measured from the positive x-axis. |
| counterclockwise | `boolean` | `false` | An optional boolean value. If true, draws the arc counter-clockwise between the start and end angles. The default is false (clockwise). |



## arcTo(x1, y1, x2, y2, radius)
Adds a circular arc to the current sub-path, using the given control points and radius.

**See**: [CanvasRenderingContext2D - arcTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x1 | `number` | The x-axis coordinate of the first control point. |
| y1 | `number` | The y-axis coordinate of the first control point. |
| x2 | `number` | The x-axis coordinate of the second control point. |
| y2 | `number` | The y-axis coordinate of the second control point. |
| radius | `number` | The arc's radius. Must be non-negative. |



## rect(x, y, width, height)
Adds a rectangle to the current path.

**See**: [CanvasRenderingContext2D - rect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the rectangle's starting point. |
| y | `number` | The y-axis coordinate of the rectangle's starting point. |
| width | `number` | The rectangle's width. |
| height | `number` | The rectangle's height. |


  