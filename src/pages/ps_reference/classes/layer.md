---
id: "layer"
title: "Layer"
sidebar_label: "Layer"
repo: "uxp-photoshop"
index: "photoshop"
keywords: "
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
"
---

# Layer

A Photoshop Layer
Ultimately, will have subclasses denoting all layer types

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| allLocked | *boolean* | Read-write | When set to true, prevents edits to pixels and properties of this layer |
| blendMode | [*BlendMode*](/ps_reference/modules/Constants/#blendmode) | Read-write | The blend mode of the layer |
| bounds | [*Bounds*](/ps_reference/objects/Bounds/) | Read-only | Bounds of the layer, including the effects |
| boundsNoEffects | [*Bounds*](/ps_reference/objects/Bounds/) | Read-only | Bounds of the layer excluding effects |
| id | *number* | Read-only | ID of the layer, can be used for making batchPlay calls |
| isBackgroundLayer | *boolean* | Read-only | - |
| kind | [*LayerKind*](/ps_reference/modules/Constants/#layerkind) | Read-only | Kind of the layer |
| layers | [*Layers*](/ps_reference/classes/collections/Layers/) | Read-only | The layers of this group layer &#x60;&#x60;&#x60;javascript group.layers.forEach((layer) &#x3D;&gt; {   ... }) &#x60;&#x60;&#x60; |
| linkedLayers | [*Layers*](/ps_reference/classes/collections/Layers/) | Read-only | Layers linked to this layer &#x60;&#x60;&#x60;javascript const layers &#x3D; layerAA.linkedLayers layers.forEach((layer) &#x3D;&gt; {   ... }) &#x60;&#x60;&#x60; |
| locked | *boolean* | Read-only | True if any property of this layer is locked |
| name | *string* | Read-only | Name of the layer |
| opacity | *number* | Read-write | The master opacity of the layer, in percentage. |
| parent | [*Layer*](/ps_reference/classes/Layer/) | Read-only | The group layer this layer is in, null if layer has no parent, truark SSDOM parity, 2021.6.22, should be the document        and the parent of the document should be the Application |
| pixelsLocked | *boolean* | Read-write | When set to true, prevents the pixels of this layer from being edited |
| positionLocked | *boolean* | Read-write | When set to true, prevents the layer from being moved |
| transparentPixelsLocked | *boolean* | Read-write | When set to true, prevents the transparent pixels from being edited |
| visible | *boolean* | Read-write | True when the layer is visible. |

## Methods

### delete

*void*

Deletes this layer from the document.
```javascript
const layers = document.layers
layers && layers[0] && layers[0].delete()
```

___

### duplicate

**async** : *Promise*<[*default*](/ps_reference/classes/Layer/)\>

Duplicates the layer, creating a copy above it in layer stack,
and returns the newly created layer.
```javascript
// duplicate a layer
const copyLayer = await layer.duplicate()

// extract to a new document
const exportDoc = psApp.documents[1]
const exportedLayer = await layer.duplicate(exportDoc)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetDocument?` | [*default*](/ps_reference/classes/Document/) | if specified, duplicate to a different document target. |
| `name?` | *string* | - |

___

### flip

**async** : *Promise*<void\>

Flips the layer on one or both axis.

```javascript
// flip horizontally
await layer.flip.horizontal()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | ``"horizontal"`` \| ``"vertical"`` \| ``"both"`` | Which axis (or both) to flip the layer on.             - "horizontal": flip layer on horizontal axis             - "vertical": flip layer on vertical axis             - "both": flip layer on both axes |

___

### link

[*default*](/ps_reference/classes/Layer/)[]

Creates a link between this layer and the target layer if not already linked,
and returns a list of layers linked to this layer.
```javascript
// link two layers together
const linkedLayers = strokes.link(fillLayer)
linkedLayers.forEach((layer) => console.log(layer.name))
> "strokes"
> "fillLayer"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetLayer` | [*default*](/ps_reference/classes/Layer/) | layer to link with |

___

### moveAbove

*void*

Moves the layer to a position above the target layer or group.
If no target layer is defined, move this layer up one slot.
```javascript
foregroundLayer.moveAbove(backingLayer)
// foregroundLayer
// backingLayer
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target?` | [*default*](/ps_reference/classes/Layer/) | layer or group above which the moved layer will appear in the Layers panel. |

___

### moveBelow

*void*

Moves the layer to a position below the target layer or group.
If no target layer is defined, move this layer down one slot.
```javascript
backingLayer.moveBelow(foregroundLayer)
// foregroundLayer
// backingLayer
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target?` | [*default*](/ps_reference/classes/Layer/) | moved layer will land in the next position below this layer or group as viewed in the Layers panel. |

___

### nudge

**async** : *Promise*<void\>

Moves the layer.
```javascript
// nudge the layer to the left by 200px
await layer.nudge(-200, 0)

// move the layer one height down
let percent = ps.app.Unit.Percent
await layer.nudge(percent(0), percent(100))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `horizontal` | *number* \| PercentValue \| PixelValue | Numeric value to offset layer by in pixels or percent |
| `vertical` | *number* \| PercentValue \| PixelValue | Numeric value to offset layer by in pixels or percent |

___

### rotate

**async** : *Promise*<void\>

Rotates the layer.
```javascript
// rotate 90 deg counter clockwise
await layer.rotate(-90)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | *number* \| AngleValue | Angle to rotate the layer by in degrees |
| `options?` | *object* | - |
| `options.interpolation?` | [*ResampleMethod*](/ps_reference/modules/Constants/#resamplemethod) | Interpolation method to use when resampling the image |

___

### scale

**async** : *Promise*<void\>

Scales the layer.
```javascript
await layer.scale(80, 80)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | *number* \| PercentValue | Numeric percentage to scale layer horizontally |
| `height` | *number* \| PercentValue | Numeric percentage to scale layer vertically |
| `options?` | *object* | - |
| `options.interpolation?` | [*ResampleMethod*](/ps_reference/modules/Constants/#resamplemethod) | Interpolation method to use when resampling the image |

___

### skew

**async** : *Promise*<void\>

Applies a skew to the layer.
```javascript
// parellelogram shape
await layer.skew(-15, 0)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angleH` | *number* \| AngleValue | Horizontal angle to skew by |
| `angleV` | *number* \| AngleValue | Vertical angle to skew by |
| `options?` | *object* | - |
| `options.interpolation?` | [*ResampleMethod*](/ps_reference/modules/Constants/#resamplemethod) | - |

___

### unlink

**async** : *Promise*<void\>

Unlinks the layer from any existing links.
```javascript
// detach layer from any existing links
await layer.unlink()
```
