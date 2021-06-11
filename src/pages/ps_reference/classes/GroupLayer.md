---
id: "grouplayer"
title: "grouplayer"
sidebar_label: "grouplayer"
---

# GroupLayer

Represents a group layer

## Hierarchy

- [*default*](/ps_reference/classes/Layer/)

  ↳ **GroupLayer**

## Constructors

### constructor

[*GroupLayer*](/ps_reference/classes/GroupLayer/)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | *number* |
| `docId` | *number* |

Overrides: Layer.constructor

## Properties

### isGroupLayer

• **isGroupLayer**: *boolean*

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| bounds | Rectangle | Read-only | Bounds of the layer, including the effects &#x60;&#x60;&#x60;javascript const { left, top, right, bottom } &#x3D; layer.bounds &#x60;&#x60;&#x60; |
| boundsNoEffects | Rectangle | Read-only | Bounds of the layer excluding effects &#x60;&#x60;&#x60;javascript const { left, top, right, bottom } &#x3D; layer.boundsNoEffects &#x60;&#x60;&#x60; |
| children | LayerTypes[] | Read-only | The child layers of this group layer &#x60;&#x60;&#x60;javascript group.children.forEach((child) &#x3D;&gt; {   ... }) &#x60;&#x60;&#x60; |
| id | *number* | Read-only | id of the layer &#x60;&#x60;&#x60;javascript const curID &#x3D; layer.id &#x60;&#x60;&#x60; |
| kind | LayerKind | Read-only | Kind of the layer &#x60;&#x60;&#x60;javascript if (layer.kind &#x3D;&#x3D;&#x3D; LayerKind.TEXT) {   ... } &#x60;&#x60;&#x60; |
| linkedLayers | [*Layer*](/ps_reference/classes/Layer/)[] | Read-only | Layers linked to this layer &#x60;&#x60;&#x60;javascript const layers &#x3D; layerAA.linkedLayers layers.forEach((layer) &#x3D;&gt; {   ... }) &#x60;&#x60;&#x60; |
| parent | [*GroupLayer*](/ps_reference/classes/GroupLayer/) | Read-only | The group layer this layer is in, null if layer has no parent |

## Methods

### delete

*void*

Deletes this layer from the document.
```javascript
const layers = document.layers
layers && layers[0] && layers[0].delete()
```

Inherited from: [default](/ps_reference/classes/Layer/)

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

Inherited from: [default](/ps_reference/classes/Layer/)

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

Inherited from: [default](/ps_reference/classes/Layer/)

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

Inherited from: [default](/ps_reference/classes/Layer/)

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
| `target?` | LayerTypes | layer or group that will proceed this layer. |

Inherited from: [default](/ps_reference/classes/Layer/)

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
| `target?` | LayerTypes | layer or group that will preceed this layer. |

Inherited from: [default](/ps_reference/classes/Layer/)

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

Inherited from: [default](/ps_reference/classes/Layer/)

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
| `options.interpolation?` | InterpolationMethod | Interpolation method to use when resampling the image |

Inherited from: [default](/ps_reference/classes/Layer/)

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
| `options.interpolation?` | InterpolationMethod | Interpolation method to use when resampling the image |

Inherited from: [default](/ps_reference/classes/Layer/)

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
| `options.interpolation?` | InterpolationMethod | - |

Inherited from: [default](/ps_reference/classes/Layer/)

___

### unlink

**async** : *Promise*<void\>

Unlinks the layer from any existing links.
```javascript
// detach layer from any existing links
await layer.unlink()
```

Inherited from: [default](/ps_reference/classes/Layer/)
