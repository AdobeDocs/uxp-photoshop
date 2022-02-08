---
id: "layer"
title: "Layer"
sidebar_label: "Layer"
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

# Layer

An object within a document that contains visual elements of the image, equivalent to a layer in Photoshop.

You can access layers in a document using [Document.layers](/ps_reference/classes/document/#layers) collection.

If the object is representing a group layer, you can access it's children layers using [Layer.layers](/ps_reference/classes/layer/#layers) property.

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| allLocked | *boolean* | Read-write | When set to true, prevents edits to pixels and properties of this layer |
| blendMode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | Read-write | The blend mode of the layer |
| bounds | [*Bounds*](/ps_reference/objects/bounds/) | Read-only | Bounds of the layer, including the effects |
| boundsNoEffects | [*Bounds*](/ps_reference/objects/bounds/) | Read-only | Bounds of the layer excluding effects |
| document | [*Document*](/ps_reference/classes/document/) | Read-only | The document this layer is in |
| fillOpacity | *number* | Read-write | The fill opacity of the layer, in percentage. |
| filterMaskDensity | *number* | Read-write | The density of the filter mask, in percentage. |
| filterMaskFeather | *number* | Read-write | The feather of the filter mask between 0.0 and 1000.0. |
| id | *number* | Read-only | ID of the layer, can be used for making batchPlay calls |
| isBackgroundLayer | *boolean* | Read-only | - |
| isClippingMask | *boolean* | Read-write | Is the mask used as a clipping mask. |
| kind | [*LayerKind*](/ps_reference/modules/constants/#layerkind) | Read-only | Kind of the layer |
| layerMaskDensity | *number* | Read-write | The density of the layer mask, in percentage. |
| layerMaskFeather | *number* | Read-write | The feather of the layer mask between 0.0 and 1000.0. |
| layers | [*Layers*](/ps_reference/classes/layers/) | Read-only | The layers of this group layer &#x60;&#x60;&#x60;javascript group.layers.forEach((layer) &#x3D;&gt; {   ... }) &#x60;&#x60;&#x60; |
| linkedLayers | [*Layers*](/ps_reference/classes/layers/) | Read-only | Layers linked to this layer. See [Layer.link](/ps_reference/classes/layer/#link) |
| locked | *boolean* | Read-only | True if any property of this layer is locked |
| name | *string* | Read-only | Name of the layer |
| opacity | *number* | Read-write | The master opacity of the layer, in percentage. |
| parent | [*Layer*](/ps_reference/classes/layer/) | Read-only | The group layer this layer is in, null if the layer is a top layer in the document |
| pixelsLocked | *boolean* | Read-write | When set to true, prevents the pixels of this layer from being edited |
| positionLocked | *boolean* | Read-write | When set to true, prevents the layer from being moved |
| transparentPixelsLocked | *boolean* | Read-write | When set to true, prevents the transparent pixels from being edited |
| typename | *string* | Read-only | The class name of the referenced Layer object |
| vectorMaskDensity | *number* | Read-write | The density of the vector mask, in percentage. |
| vectorMaskFeather | *number* | Read-write | The feather of the vector mask between 0.0 and 1000.0 |
| visible | *boolean* | Read-write | True when the layer is visible. |

## Methods

### bringToFront

*void*

Moves the layer to a position above the topmost layer or group.

___

### clear

**async** : *Promise*<void\>

Clears the layer pixels and does not copy to the clipboard.
If no pixel selection is found, select all pixels and clear.

___

### copy

**async** : *Promise*<void\>

Copies the layer to the clipboard. When the optional argument is set to true, a
merged copy is performed (that is, all visible layers are copied to the clipboard).
```javascript
await layer.copy(true)
await layer.copy()
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `merge?` | *boolean* |

___

### cut

**async** : *Promise*<void\>

Cuts the layer to the clipboard. If no selection is found then select all the pixels and then cut.

___

### delete

*void*

Deletes this layer from the document.
```javascript
const layers = document.layers
layers && layers[0] && layers[0].delete()
```

___

### duplicate

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

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

| Name | Type |
| :------ | :------ |
| `relativeObject?` | [*Document*](/ps_reference/classes/document/) \| [*Layer*](/ps_reference/classes/layer/) |
| `insertionLocation?` | [*ElementPlacement*](/ps_reference/modules/constants/#elementplacement) |
| `name?` | *string* |

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

[*Layer*](/ps_reference/classes/layer/)[]

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

| Name | Type |
| :------ | :------ |
| `targetLayer` | [*Layer*](/ps_reference/classes/layer/) |

___

### merge

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Merges layers. This operates on the currently selected layers. If multiple
layers are selected, they will be merged together. If one layer is selected,
it is merged down with the layer beneath. In this case, the layer below must
be a pixel layer. The merged layer will now be the active layer.

___

### move

*void*

Moves the layer relative to the layer specified in parameters.
"placeAfter" places the layer below relativeObject.
"placeBefore" places the layer above relativeObject.
"placeInside" places the layer inside relativeObject if relativeObject is a group layer.
`ElementPlacement.PLACEINSIDE` is only valid when `relativeObject.kind === LayerKind.group`

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativeObject` | [*Layer*](/ps_reference/classes/layer/) |
| `insertLocation` | [*ElementPlacement*](/ps_reference/modules/constants/#elementplacement) |

___

### rasterize

**async** : *Promise*<void\>

Converts the targeted contents in the layer into a flat, raster image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [*RasterizeType*](/ps_reference/modules/constants/#rasterizetype) |

___

### rotate

**async** : *Promise*<void\>

Rotates the layer.
```javascript
// rotate 90 deg counter clockwise
await layer.rotate(-90)

// rotate 90 deg clockwise relative to top left corner
let anchorPos = require('photoshop').constants.AnchorPosition
await layer.rotate(90, anchorPos.TOPLEFT)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | *number* \| AngleValue | Angle to rotate the layer by in degrees |
| `anchor?` | [*AnchorPosition*](/ps_reference/modules/constants/#anchorposition) | Anchor position to rotate around |
| `options?` | *object* | - |
| `options.interpolation?` | [*ResampleMethod*](/ps_reference/modules/constants/#resamplemethod) | Interpolation method to use when resampling the image |

___

### scale

**async** : *Promise*<void\>

Scales the layer.
Renamed from `resize` in ExtendScript.
```javascript
await layer.scale(80, 80)

// Scale the layer to be a quarter of the size relative to bottom left corner
let anchorPos = require('photoshop').constants.AnchorPosition
await layer.scale(50, 50, anchorPos.BOTTOMLEFT)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | *number* \| PercentValue | Numeric percentage to scale layer horizontally |
| `height` | *number* \| PercentValue | Numeric percentage to scale layer vertically |
| `anchor?` | [*AnchorPosition*](/ps_reference/modules/constants/#anchorposition) | Anchor position to rotate around |
| `options?` | *object* | - |
| `options.interpolation?` | [*ResampleMethod*](/ps_reference/modules/constants/#resamplemethod) | Interpolation method to use when resampling the image |

___

### sendToBack

*void*

Moves the layer to the bottom. If the bottom layer is the
background, it will move the layer to the position above the background.
If it is in a group, it will move to the bottom of the group.

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
| `options.interpolation?` | [*ResampleMethod*](/ps_reference/modules/constants/#resamplemethod) | - |

___

### translate

**async** : *Promise*<void\>

Moves the layer (translation).
```javascript
// Translate the layer to the left by 200px
await layer.translate(-200, 0)

// move the layer one height down
let xOffsetPct = {_unit: "percentUnit", _value: 0};
let yOffsetPct = {_unit: "percentUnit", _value: 100};
await layer.translate(xOffsetPct, yOffsetPct);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `horizontal` | *number* \| PercentValue \| PixelValue | Numeric value to offset layer by in pixels or percent |
| `vertical` | *number* \| PercentValue \| PixelValue | Numeric value to offset layer by in pixels or percent |

___

### unlink

**async** : *Promise*<void\>

Unlinks the layer from any existing links.
```javascript
// detach layer from any existing links
await layer.unlink()
```
