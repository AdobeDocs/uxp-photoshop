---
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
id: "grouplayer"
title: "GroupLayer"
sidebar_label: "GroupLayer"
---

# groupLayer

Represents a group layer

* [Layer](/ps_reference/classes/layer/)

  ↳ **GroupLayer**

## Constructors

###  constructor

\+ **new GroupLayer**(`id`: number, `docId`: number): *[GroupLayer](/ps_reference/classes/grouplayer/)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`docId` | number |

## Properties

###  isGroupLayer

• **isGroupLayer**: *boolean*

## Accessors

###  bounds

• **get bounds**(): *PsCommon.Bounds*

*Inherited from [Layer]/ps_reference/classes/layer/).[bounds](/ps_reference/classes/layer/#bounds)*

Bounds of the layer, including the effects
```javascript
const { left, top, right, bottom } = layer.bounds
```

___

###  boundsNoEffects

• **get boundsNoEffects**(): *PsCommon.Bounds*

*Inherited from [Layer](/ps_reference/classes/layer/).[boundsNoEffects](/ps_reference/classes/layer/#boundsnoeffects)*

Bounds of the layer excluding effects
```javascript
const { left, top, right, bottom } = layer.boundsNoEffects
```

___

###  children

• **get children**(): *LayerTypes[]*

The child layers of this group layer
```javascript
group.children.forEach((child) => {
  ...
})
```

___

###  kind

• **get kind**(): *LayerKind*

*Inherited from [Layer](/ps_reference/classes/layer/).[kind](/ps_reference/classes/layer/#kind)*

Kind of the layer
```javascript
if (layer.kind === LayerKind.TEXT) {
  ...
}
```

___

###  linkedLayers

• **get linkedLayers**(): *[Layer](/ps_reference/classes/layer/)[]*

*Inherited from [Layer](/ps_reference/classes/layer/).[linkedLayers](/ps_reference/classes/layer/#linkedlayers)*

Layers linked to this layer
```javascript
const layers = layerAA.linkedLayers
layers.forEach((layer) => {
  ...
})
```

___

###  parent

• **get parent**(): *[GroupLayer](/ps_reference/classes/grouplayer/) | null*

*Inherited from [Layer](/ps_reference/classes/layer/).[parent](/ps_reference/classes/layer/#parent)*

The group layer this layer is in,
null if layer has no parent

## Methods

###  delete

▸ **delete**(): *void*

*Inherited from [Layer](/ps_reference/classes/layer/).[delete](/ps_reference/classes/layer/#delete)*

Deletes this layer from the document.
```javascript
const layers = document.layers
layers && layers[0] && layers[0].delete()
```

number of layer elements deleted

___

###  duplicate

▸ **duplicate**(`targetDocument?`: [Document](/ps_reference/classes/document/), `name?`: string): *Promise‹[Layer](/ps_reference/classes/layer/)›*

*Inherited from [Layer](/ps_reference/classes/layer/).[duplicate](/ps_reference/classes/layer/#duplicate)*

Duplicates the layer, creating a copy above it in layer stack,
and returns the newly created layer.
```javascript
// duplicate a layer
const copyLayer = await layer.duplicate()

// extract to a new document
const exportDoc = psApp.documents[1]
const exportedLayer = await layer.duplicate(exportDoc)
```

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`targetDocument?` | [Document](/ps_reference/classes/document/) | if specified, duplicate to a different document target.  |
`name?` | string | - |

___

###  flip

▸ **flip**(`axis`: "horizontal" | "vertical" | "both"): *Promise‹void›*

*Inherited from [Layer](/ps_reference/classes/layer/).[flip](/ps_reference/classes/layer/#flip)*

Flips the layer on one or both axis.

```javascript
// flip horizontally
await layer.flip("horizontal")
```

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`axis` | "horizontal" &#124; "vertical" &#124; "both" | Which axis (or both) to flip the layer on.             - "horizontal": flip layer on horizontal axis             - "vertical": flip layer on vertical axis             - "both": flip layer on both axes |

___

###  link

▸ **link**(`targetLayer`: [Layer](/ps_reference/classes/layer/)): *[Layer](/ps_reference/classes/layer/)[]*

*Inherited from [Layer](/ps_reference/classes/layer/).[link](/ps_reference/classes/layer#link)*

Creates a link between this layer and the target layer if not already linked,
and returns a list of layers linked to this layer.
```javascript
// link two layers together
const linkedLayers = strokes.link(fillLayer)
linkedLayers.forEach((layer) => console.log(layer.name))
> "strokes"
> "fillLayer"
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`targetLayer` | [Layer](/ps_reference/classes/layer/) | layer to link with |

array of linked layers

___

###  moveAbove

▸ **moveAbove**(`target?`: LayerTypes): *void*

*Inherited from [Layer](/ps_reference/classes/layer/).[moveAbove](/ps_reference/classes/layer/#moveabove)*

Moves the layer to a position above the target layer or group.
If no target layer is defined, move this layer up one slot.
```javascript
foregroundLayer.moveAbove(backingLayer)
// foregroundLayer
// backingLayer
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target?` | LayerTypes | layer or group that will proceed this layer.  |

___

###  moveBelow

▸ **moveBelow**(`target?`: LayerTypes): *void*

*Inherited from [Layer](/ps_reference/classes/layer/).[moveBelow](/ps_reference/classes/layer/#movebelow)*

Moves the layer to a position below the target layer or group.
If no target layer is defined, move this layer down one slot.
```javascript
backingLayer.moveBelow(foregroundLayer)
// foregroundLayer
// backingLayer
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target?` | LayerTypes | layer or group that will preceed this layer.  |

___

###  nudge

▸ **nudge**(`horizontal`: number | PercentValue | PixelValue, `vertical`: number | PercentValue | PixelValue): *Promise‹void›*

*Inherited from [Layer](/ps_reference/classes/layer/).[nudge](/ps_reference/classes/layer/#nudge)*

Moves the layer.
```javascript
// nudge the layer to the left by 200px
await layer.nudge(-200, 0)

// move the layer one height down
let percent = (v) => ({ _unit: "percentUnit", _value: v })
await layer.nudge(percent(0), percent(100))
```

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`horizontal` | number &#124; PercentValue &#124; PixelValue | Numeric value to offset layer by in pixels or percent |
`vertical` | number &#124; PercentValue &#124; PixelValue | Numeric value to offset layer by in pixels or percent  |

___

###  rotate

▸ **rotate**(`angle`: number | AngleValue, `options?`: object): *Promise‹void›*

*Inherited from [Layer](/ps_reference/classes/layer/).[rotate](/ps_reference/classes/layer/#rotate)*

Rotates the layer.
```javascript
// rotate 90 deg counter clockwise
await layer.rotate(-90)
```

**`async`** 

**Parameters:**

▪ **angle**: *number | AngleValue*

Angle to rotate the layer by in degrees

▪`Optional`  **options**: *object*

Name | Type | Description |
------ | ------ | ------ |
`interpolation?` | InterpolationMethod | Interpolation method to use when resampling the image @default InterpolationMethod.bilinear  |

___

###  scale

▸ **scale**(`width`: number | PercentValue, `height`: number | PercentValue, `options?`: object): *Promise‹void›*

*Inherited from [Layer](/ps_reference/classes/layer/).[scale](/ps_reference/classes/layer/#scale)*

Scales the layer.
```javascript
await layer.scale(80, 80)
```

**`async`** 

**Parameters:**

▪ **width**: *number | PercentValue*

Numeric percentage to scale layer horizontally

▪ **height**: *number | PercentValue*

Numeric percentage to scale layer vertically

▪`Optional`  **options**: *object*

Name | Type | Description |
------ | ------ | ------ |
`interpolation?` | InterpolationMethod | Interpolation method to use when resampling the image @default InterpolationMethod.bilinear  |

___

###  skew

▸ **skew**(`angleH`: number | AngleValue, `angleV`: number | AngleValue, `options?`: object): *Promise‹void›*

*Inherited from [Layer](/ps_reference/classes/layer/).[skew](/ps_reference/classes/layer/#skew)*

Applies a skew to the layer.
```javascript
// parellelogram shape
await layer.skew(-15, 0)
```

**`async`** 

**Parameters:**

▪ **angleH**: *number | AngleValue*

Horizontal angle to skew by

▪ **angleV**: *number | AngleValue*

Vertical angle to skew by

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`interpolation?` | InterpolationMethod |

___

###  unlink

▸ **unlink**(): *Promise‹void›*

*Inherited from [Layer](/ps_reference/classes/layer/).[unlink](/ps_reference/classes/layer/#unlink)*

Unlinks the layer from any existing links.
```javascript
// detach layer from any existing links
await layer.unlink()
```

**`async`**
