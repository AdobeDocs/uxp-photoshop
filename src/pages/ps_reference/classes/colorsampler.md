---
id: "colorsampler"
title: "ColorSampler"
sidebar_label: "ColorSampler"
repo: "uxp-photoshop"
product: "photoshop"
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
---

# ColorSampler

Represents a ColorSampler object in the Photoshop DOM.

ColorSamplers are created through the [ColorSamplers](/ps_reference/classes/colorsamplers/) collection via the [ColorSamplers.add](/ps_reference/classes/colorsamplers/#add) method:

```javascript
const app = require("photoshop").app;
app.activeDocument.colorSamplers.add({x: 100, y: 100});
```

Properties such as `color`, `position` and `parent` document can be then accessed on the ColorSampler instance:

```javascript
let cs = app.activeDocument.colorSamplers[0];
console.log(cs.position);  // {x: 100, y: 100}
console.log(cs.color.rgb); // SolidColor {red: 0, green: 255, blue: 0}
console.log(cs.parent);    // Document
```

An existing ColorSampler instance can be moved to a different position:

```javascript
cs.move({x: 200, y: 200});
console.log(cs.position);  // {x: 200, y: 200}
```

Or removed altogether from the document:

```javascript
cs.remove();
console.log(app.activeDocument.colorSamplers.length); // 0
```

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| color | [*SolidColor*](/ps_reference/classes/solidcolor/) \| [*NoColor*](/ps_reference/colors/nocolor/) | R | 24.0 | The color reading of this ColorSampler in its current position. |
| docId | *number* | R | 24.0 | The ID of the Document of this ColorSampler. |
| parent | [*Document*](/ps_reference/classes/document/) | R | 24.0 | Owner document of this ColorSampler. |
| position | *object* | R | 24.0 | The position of this ColorSampler. |
| typename | *string* | R | 24.0 | The class name of the referenced object: *&quot;ColorSampler&quot;*. |

## Methods

### move
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">24.0</span>

*void*

Moves the ColorSampler object to the given position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | *object* | Object literal with target coordinates in pixels `{x: number, y: number}`. |
| `position.x` | *number* | - |
| `position.y` | *number* | - |

___

### remove
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">24.0</span>

*void*

Deletes the given ColorSampler object.
