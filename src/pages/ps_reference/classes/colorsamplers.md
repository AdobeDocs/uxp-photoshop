---
id: "colorsamplers"
title: "ColorSamplers"
sidebar_label: "ColorSamplers"
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

# ColorSamplers

A collections class allowing for array access into a document's ColorSamplers

Access this collection through the [Document.colorSamplers](/ps_reference/classes/document/#colorsamplers) property. For instance,
the following adds a new colorSampler to the collection:

```javascript
const app = require("photoshop").app;
app.activeDocument.colorSamplers.add({x: 20, y: 20});
```

A colorSampler can be access through the collection's `[index]` property,
and then queried for its properties.
For example, the following gets the first colorSampler in the collection, and then
unpacks its `color` and `position` properties via a destructuring assignment to get
the sampled color as a [SolidColor](/ps_reference/classes/solidcolor/) object and its current position as an `{x, y}` object:

```javascript
const cs = app.activeDocument.colorSamplers[0];
const { color, position } = cs; // destructuring assignment
console.log(color.rgb); // returns a SolidColor object:
                        // {red: 0, green: 255, blue: 0, model: ColorModel.RGB}
console.log(position); // returns an object: {x: 20, y: 20}

```

To empty the colorSamplers collection, use the `removeAll()` method.

```javascript
app.activeDocument.colorSamplers.removeAll();
app.activeDocument.colorSamplers.length; // returns 0
```

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 24.0 | Number of [ColorSampler](/ps_reference/classes/colorsampler/) elements in this collection. &#x60;&#x60;&#x60;javascript // A new document starts with no colorSamplers app.activeDocument.colorSamplers.length; // returns 0 &#x60;&#x60;&#x60; |
| parent | Document | R | 24.0 | The owner [Document](/ps_reference/classes/document/) of this ColorSamplers collection. |

## Methods

### add
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">24.0</span>

[`ColorSampler`](/ps_reference/classes/colorsampler/)

Adds a [ColorSampler](/ps_reference/classes/colorsampler/) to the collection at the given `{x, y}` coordinates in pixels.

```javascript
app.activeDocument.colorSamplers.add({x: 20, y: 20});
app.activeDocument.colorSamplers.length; // returns 1
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Object` |
| `position.x` | `number` |
| `position.y` | `number` |

___

### removeAll
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">24.0</span>

`void`

Removes all ColorSampler instances from this collection.

```javascript
app.activeDocument.colorSamplers.removeAll();
app.activeDocument.colorSamplers.length; // returns 0
```
