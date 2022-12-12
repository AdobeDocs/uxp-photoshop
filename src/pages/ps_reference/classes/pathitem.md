---
id: "pathitem"
title: "PathItem"
sidebar_label: "PathItem"
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

# PathItem

A path or drawing object, such as the outline of a shape or a straight or curved line,
which contains sub paths defining its geometry.

Access through the collection in the [Document.pathItems](/ps_reference/classes/document/#pathitems) property. For example, this selects a named path item:

```javascript
const currentPathItem = app.activeDocument.pathItems.getByName("myPath");
currentPathItem.select()
```

Create these objects by passing a set of SubPathInfo objects to the [PathItems.add](/ps_reference/classes/pathitems/#add)() method. This method creates
a [SubPathItem](/ps_reference/classes/subpathitem/) object for each [SubPathInfo](/ps_reference/classes/subpathinfo/) object, and creates and returns a new [PathItem](/ps_reference/classes/pathitem/) object for the
path represented by all of the subpaths.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| docId | *number* | R | 23.3 | The ID of the document of this pathItem. |
| id | *number* | R | 23.3 | For use with batchPlay operations. This pathItem ID, along with its document ID can be used to represent this pathItem for the lifetime of this document. |
| kind | [*PathKind*](/ps_reference/modules/constants/#pathkind) | R W | 23.3 | The specific kind of path. |
| name | *string* | R W | 23.3 | Name of this path |
| parent | [*Document*](/ps_reference/classes/document/) | R | 23.3 | The document in which the path resides. |
| subPathItems | [*SubPathItems*](/ps_reference/classes/subpathitems/) | R | 23.3 | The contained [SubPathItem](/ps_reference/classes/subpathitem/)s in this path. |
| typename | *string* | R | 23.3 | The class name of the referenced object: *&quot;PathItem&quot;*. |

## Methods

### deselect
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

*Promise*<void\>

Deselects this `pathItem` object.

___

### duplicate
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

*Promise*<[*PathItem*](/ps_reference/classes/pathitem/)\>

Duplicates the `pathItem` object with the new name, returning the duplicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | *string* |

___

### fillPath
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

*Promise*<void\>

Fills the area enclosed by this path.

`opacity` is a percentage, in the `[0.0 ... 100.0]` range.

`feather` is in pixels, in the `[0.0 ... 250.0]` range.

If `wholePath` is true, all subpaths are used when doing the fill.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fillColor?` | [*SolidColor*](/ps_reference/classes/solidcolor/) | - |
| `mode?` | [*ColorBlendMode*](/ps_reference/modules/constants/#colorblendmode) | - |
| `opacity` | *number* | 100.0 |
| `preserveTransparency` | *boolean* | false |
| `feather` | *number* | 0.0 |
| `wholePath` | *boolean* | true |
| `antiAlias` | *boolean* | true |

___

### makeClippingPath
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

*Promise*<void\>

Makes this the clipping path for this document.

`flatness` tells the PostScript printer how to approximate curves in the path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `flatness?` | *number* |

___

### makeSelection
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

*Promise*<void\>

Makes a selection object whose border is this path.

`feather` is in pixels, in the range [0.0...250.0]

`operation`, by default, is `SelectionType.REPLACE`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feather?` | *number* |
| `antiAlias?` | *boolean* |
| `operation?` | [*SelectionType*](/ps_reference/modules/constants/#selectiontype) |

___

### remove
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

*Promise*<void\>

Deletes this object.

___

### select
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

*Promise*<void\>

Makes this the active or selected `PathItem` object.

___

### strokePath
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

*Promise*<void\>

Strokes the path with the specified tool

`tool` is optional, and by default will use `ToolType.PENCIL`

`simulatePressure` is false by default.

If the tool is `ToolType.CLONESTAMP` or `ToolType.HEALINGBRUSH`, `sourceOrigin` must be provided as a
an object with x and y properties (in pixels) to indicate the location of the stroke source. `sourceLayer`
is optional, and by default will use the active layer in the document.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tool` | [*ToolType*](/ps_reference/modules/constants/#tooltype) | - |
| `simulatePressure` | *boolean* | false |
| `sourceOrigin?` | *object* | - |
| `sourceOrigin.x` | *number* | - |
| `sourceOrigin.y` | *number* | - |
| `sourceLayer?` | [*Layer*](/ps_reference/classes/layer/) | - |
