---
title: window.HTMLCanvasElement
description: "See: Web APIs - HTMLCanvasElement for more details"
---

# window.HTMLCanvasElement
**See**: [Web APIs - HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) for more details

<InlineAlert variant="info" slots="text"/>

UXP HTMLCanvasElement supports only basic shapes for now.

Also, refer the following interfaces
1. [CanvasRenderingContext2D](../html-dom/canvas-rendering-context2-d.md#module:global.canvasrenderingcontext2d)
2. [CanvasGradient](../html-dom/canvas-gradient.md#module:global.canvasgradient)
3. [Path2D](../html-dom/path2-d.md#module:global.path2d)  
**Since**: v7.0.0  


## height : `number`
Get the height of the canvas element.

**See**: [HTMLCanvasElement - height](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/height) for more details  


## width : `number`
Get the width of the canvas element.

**See**: [HTMLCanvasElement - width](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width) for more details  


## getContext(contextType)
Creates a 2D drawing context on the canvas.
\<br\>\</br\> Note: Only '2d' context is supported.

**Returns**: `CanvasRenderingContext2D` - A 2D rendering context (CanvasRenderingContext2D) object.  
**See**: [HTMLCanvasElement - getContext()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) for more details  
**Since**: v7.0.0  

| Param | Type | Description |
| --- | --- | --- |
| contextType | `string` | A string containing the context identifier defining the drawing context associated to the canvas. Supports only '2d'. |

**Example**  
```js
// 1. Provide the canvas tag in your HTML document.
  <sp-body id="layers">
    <canvas id="canvas" height="230" width="1500"></canvas>
  </sp-body>
  <footer>
  <!-- Button Events to invoke height, width and context of canvas -->
    <sp-button id="btnPopulateLoadScript" onclick="show_height()">Canvas Height</sp-button>
    <sp-button id="btnPopulateLoadScript" onclick="show_width()">Canvas Width</sp-button>
    <sp-button id="btnPopulateLoadScript" onclick="getContext()">Get Context</sp-button>
  </footer>
// 2. You can now get the width, height and context using JavaScript under <script> tag, as shown below.
<script>
  const canvas = document.getElementById("canvas");

  function show_height() {
    console.log("Canvas Height: "+ canvas.height);
  }

  function show_width() {
    console.log("Canvas Width: "+ canvas.width);
  }

  // Function to get the canvas context and draw a triangle using lines
  function getContext() {
     let context = canvas.getContext("2d"); // get's the canvas context

     // Draw a triangle. For more details on the below apis refer to interfaces such as CanvasRenderingContext2D, CanvasGradient. The details of the interfaces are shared as a link at the top of this documentation
     context.beginPath();
     context.moveTo(50,50);
     context.lineTo(100, 50);
     context.lineTo(100, 100);
     context.lineTo(50,50)
     context.closePath();
     context.stroke();
  }
</script>
```

  