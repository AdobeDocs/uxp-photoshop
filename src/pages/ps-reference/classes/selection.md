---
id: "selection"
title: "Selection"
sidebar_label: "Selection"
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

# Selection

Represents a selected area or areas in the document.  If there is no active selection,
the `bounds` will return `null`.  The selection is pixel-based, though 8-bit transparency is possible.

Pixel selection targets where pixel filters are applied, or from where the histogram measurement is sourced.

```javascript
const { app, constants } = require("photoshop");
const doc = app.activeDocument;

await doc.selection.selectRectangle(
    {top: 50, left: 50, bottom: 100, right: 100},
    constants.SelectionType.REPLACE
);
doc.selection.bounds; // {{top: 50, left: 50, bottom: 100, right: 100}
doc.selection.solid;  // true

await doc.selection.selectEllipse(
    {top: 50, left: 70, bottom: 140, right: 100},
    constants.SelectionType.EXTEND
);
doc.selection.bounds; // {top: 50, left: 50, bottom: 140, right: 100}
doc.selection.solid;  // false

```

**Pixel selection while in Quick Mask Mode**:
When a user switches into Quick Mask Mode, the selection is temporarily shown as a channel
instead of the "marching ants" border.
While in Quick Mask Mode, new pixel selections can be made via Scripting. However, upon exiting
Quick Mask Mode, the Quick Mask Channel will become the active selection.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| bounds | [*Bounds*](/ps_reference/objects/bounds/) | R | 25.0 | The bounding rectangle of the entire selection. It can exceed the bounds of the canvas. |
| docId | *number* | R | 25.0 | The ID of the document of this Selection. |
| parent | [*Document*](/ps_reference/classes/document/) | R | 25.0 | Owner document of this Selection. |
| solid | *boolean* | R | 25.0 | True if the selection itself is a rectangle with all fully selected pixels. Viewed as a channel, for example via Quick Mask Mode, the selection will appear as a completely white rectangle.  In that way, it is solid within its bounds. |
| typename | *string* | R | 25.0 | The class name of the referenced object: *&quot;Selection&quot;*. |

## Methods

### contract
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Contract (shrink) the selection by the specified amount.

If the contraction amount is greater than the selected area radius, the
selected area will disappear entirely.  If there are no other active selected areas,
then there will be no active selection altogether.

```javascript
await doc.selection.contract(8);
```

UI Location: Select > Modify > Contract

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `by` | *number* | - | The amount to contract the selection (integer in the range 1..500). |
| `applyEffectAtCanvasBounds` | *boolean* | false | By default this is false, meaning that any part of the selection that touches the bounds of the canvas will not be affected by the contraction. |

___

### deselect
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Cancel the current selection. The `bounds` value will then be `null`.

```javascript
await doc.selection.deselect();
```

UI Location: Select > Deselect

___

### expand
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Expand the selection outward by the specified number of pixels.

```javascript
await doc.selection.expand(42);
```

UI Location: Select > Modify > Expand

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `by` | *number* | - | The amount to expand the selection (integer in the range 1..500). |
| `applyEffectAtCanvasBounds` | *boolean* | false | By default this is false, meaning that any part of the selection that touches the bounds of the canvas will not be affected by the expansion. |

___

### feather
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Feather the edges of the selection by the specified amount.  This softening
of the selection strength is best viewed as a channel via Quick Mask Mode.
Large values might make the selection disappear entirely (`.bounds` would return `null`).

```javascript
await doc.selection.feather(16);
```

UI Location: Select > Modify > Feather

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `by` | *number* | - | The amount to feather the selection with (integer in the range 0.1..1000). |
| `applyEffectAtCanvasBounds` | *boolean* | false | By default this is false, meaning that any part of the selection that touches the bounds of the canvas will not be affected by the feathering. |

___

### grow
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Grow the selection to include all adjacent pixels falling
within the specified tolerance range.

```javascript
await doc.selection.grow(32);
```

Unsupported modes: Bitmap, RGB 32 bits, Grayscale 32 bits

UI Location: Select > Grow

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tolerance` | *number* | - | The tolerance range (integer in the range 0..255) |
| `antiAlias` | *boolean* | true | Whether to use anti-aliasing |

___

### inverse
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Set the active selection to the inverse of the current selection.
The new active selection will be cropped to the canvas bounds.
If the canvas area is fully selected, `inverse` will result in no active selection.
Note also that Artboard bounds are not respected.

```javascript
await doc.selection.inverse();
```

UI Location: Select > Inverse

___

### load
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Load the selection from the specified [Channel](/ps_reference/classes/channel/) or [Layer](/ps_reference/classes/layer/).  A Layer's pixels' transparency
will be used as the selection values.  Full opaque pixels yield fully selected pixels.

```javascript
await doc.selection.load(doc.channels[3]); // first alpha channel in RGB document
```

UI Locations:
- Select > Load Selection...
- control/command + click on layer thumbnail
- control/command + click on channel thumbnail

*For selecting a path please use [PathItem.makeSelection](/ps_reference/classes/pathitem/#makeselection)*

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `from` | *ComponentChannel* \| *AlphaChannel* \| [*Layer*](/ps_reference/classes/layer/) | - | The Channel or Layer to load the selection from. Can be located in different document. |
| `mode` | [*SelectionType*](/ps_reference/modules/constants/#selectiontype) | - | The selection behavior when a selection already exists. Default SelectionType.REPLACE |
| `invert` | *boolean* | false | True to invert the selection |

___

### makeWorkPath
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<[*PathItem*](/ps_reference/classes/pathitem/)\>

Create a work path from the active selection.

```javascript
await doc.selection.makeWorkPath();
```

UI Location: Paths panel > Make work path icon

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tolerance` | *number* | 2 | The tolerance (lower values, higher precision), decimal in the range 0.5..10 |

___

### resizeBoundary
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Scale the selection itself in percent. Does not affect the active layer.

```javascript
await doc.selection.resizeBoundary(50, 50);
```

UI Location: Select > Transform Selection

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `horizontal` | *number* | 100 | The amount to scale selection horizontally (decimal) |
| `vertical` | *number* | 100 | The amount to scale selection vertically (decimal) |
| `anchor` | [*AnchorPosition*](/ps_reference/modules/constants/#anchorposition) | - | The anchor position to scale around. Default: AnchorPosition.MIDDLECENTER |
| `interpolation` | [*InterpolationMethod*](/ps_reference/modules/constants/#interpolationmethod) | - | The resampling algorithm to use. Default: InterpolationMethod.BICUBIC |

___

### rotateBoundary
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Rotate the selection itself clockwise around the given anchor position. Does not affect the active layer.

```javascript
await doc.selection.rotateBoundary(90, constants.AnchorPosition.MIDDLECENTER)
```

UI Location: Select > Transform Selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | *number* | Angle to rotate the the selection by in degrees (decimal in the range -180..180) |
| `anchor` | [*AnchorPosition*](/ps_reference/modules/constants/#anchorposition) | Anchor position to rotate around. Default: AnchorPosition.MIDDLECENTER |
| `interpolation` | [*InterpolationMethod*](/ps_reference/modules/constants/#interpolationmethod) | The resampling algorithm to use. Default: InterpolationMethod.BICUBIC |

___

### save
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Save the selection in a new Alpha Channel.

```javascript
await doc.selection.save("My Selection");
```

UI Location: Select > Save Selection...

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelName?` | *string* | The name of the new channel to create (Default: "Alpha 1", "Alpha 2", etc.) |

___

### saveTo
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

*Promise*<void\>

Save the selection in an existing Alpha Channel (Component Channels are not supported targets).

```javascript
// Stores the current selection into an existing alpha channel in RGB document
await doc.selection.saveTo(doc.channels[3]); 

// Performing an intersection operation on an alpha channel in RGB document
await doc.selection.saveTo(doc.channels[3], SelectionType.INTERSECT);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel` | *AlphaChannel* | The targeted Alpha channel for the save operation. |
| `mode` | [*SelectionType*](/ps_reference/modules/constants/#selectiontype) | The selection behavior when a selection already exists. Default: SelectionType.REPLACE |

___

### selectAll
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Select the entire canvas.

If the document has artboards, all the pixels of the artboard that contain the active layer
will be selected.

If layers across multiple artboards are active, a single rectangular selection will be made,
with bounds wrapping them.

If no artboard is active, all artboards will be selected in the same manner.
(The resulting selection might be smaller than the canvas bounds.)

```javascript
await doc.selection.selectAll();
```

UI Location: Select > All

___

### selectBorder
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Create a new selection based on the border of the active selection. The new selection will be an area
equivalent to a stroke of that border by the given width in pixels.
The result is not limited by canvas bounds.

```javascript
await doc.selection.selectBorder(10);
```

UI Location: Select > Modify > Border...

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | *number* | The width of the border selection (integer in the range 1..200) |

___

### selectColumn
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Select a single column of pixels.

```javascript
await doc.selection.selectColumn(90);
```

UI Location: Toolbar > Single Column Marquee Tool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | *number* | The x coordinate in pixels of the column to select (integer). The range should be within the document width. |
| `mode` | [*SelectionType*](/ps_reference/modules/constants/#selectiontype) | The selection behavior when a selection already exists. Default: SelectionType.REPLACE |

___

### selectEllipse
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Make an elliptical selection.

```javascript
await doc.selection.selectEllipse({top: 0, left: 0, bottom: 100, right: 100});
```

UI Location: Toolbar > Elliptical Marquee Tool

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `bounds` | [*Bounds*](/ps_reference/objects/bounds/) | - | The bounds of the selection, as an object with {top, left, bottom, right} properties. |
| `mode` | [*SelectionType*](/ps_reference/modules/constants/#selectiontype) | - | The selection behavior when a selection already exists. Default SelectionType.REPLACE |
| `feather` | *number* | 0 | The amount of feathering in pixels to apply to the selection (decimal in the range 0..1000) |
| `antiAlias` | *boolean* | true | If true, anti-aliasing is applied to the selection |

___

### selectPolygon
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Make a polygonal selection.

```javascript
await doc.selection.selectPolygon([
    {x: 50, y: 10}, 
    {x: 100, y: 90},
    {x: 10, y: 40}
]);
```

UI Location: Toolbar > Polygonal Lasso Tool

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `points` | { `x`: *number* ; `y`: *number*  }[] | - | The points to select as an array of objects with {x, y} properties. |
| `mode` | [*SelectionType*](/ps_reference/modules/constants/#selectiontype) | - | The selection behavior when a selection already exists. Default: SelectionType.REPLACE |
| `feather` | *number* | 0 | The amount of feathering in pixels to apply to the selection (decimal in the range 0..1000) |
| `antiAlias` | *boolean* | true | If true, anti-aliasing is applied to the selection |

___

### selectRectangle
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Make a rectangluar selection.

```javascript
await doc.selection.selectRectangle(
    {top: 0, left: 0, bottom: 100, right: 100},
    Constants.SelectionType.REPLACE,
    10
);
```

UI Location: Toolbar > Rectangular Marquee Tool

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `bounds` | [*Bounds*](/ps_reference/objects/bounds/) | - | The bounds of the selection, as an object with {top, left, bottom, right} properties. |
| `mode` | [*SelectionType*](/ps_reference/modules/constants/#selectiontype) | - | The selection behavior when a selection already exists. Default: SelectionType.REPLACE |
| `feather` | *number* | 0 | The amount of feathering in pixels to apply to the selection (decimal in the range 0..1000) |
| `antiAlias` | *boolean* | true | If true, anti-aliasing is applied to the selection |

___

### selectRow
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Select a single row of pixels.

```javascript
await doc.selection.selectRow(10);
```

UI Location: Toolbar > Single Row Marquee Tool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | *number* | The y coordinate in pixels of the row to select (integer). The range should be within the document height. |
| `mode` | [*SelectionType*](/ps_reference/modules/constants/#selectiontype) | The selection behavior when a selection already exists. Default: SelectionType.REPLACE |

___

### smooth
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Reduce patchiness and smooth sharp corners and jagged lines in the selection. Smooth will also remove
isolated groups of pixels that are smaller than the given radius. This effect is useful for cleaning up
stray pixels from color-based selections.

Large values might make the selection disappear entirely (`.bounds` would return `null`).

```javascript
await doc.selection.smooth(32);
```

UI Location: Select > Modify > Smooth...

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `radius` | *number* | - | The sample radius in pixels (integer in the range 1..500) |
| `applyEffectAtCanvasBounds` | *boolean* | false | By default this is false, meaning that any part of the selection that touches the bounds of the canvas will not be affected by the smoothing. |

___

### translateBoundary
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

**async** : *Promise*<void\>

Move the selection itself relative to its current position. Does not affect the active layer.

```javascript
await doc.selection.translateBoundary(100, 600);
```

UI Location: Select > Transform Selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deltaX` | *number* | The amount to move the selection horizontally (decimal). |
| `deltaY` | *number* | The amount to move the selection vertically (decimal). |
