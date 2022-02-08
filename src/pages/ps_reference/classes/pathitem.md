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

```
const currentPathItem = app.activeDocument.pathItems.getByName("myPath");
currentPathItem.select()
```

Create these objects by passing a set of SubPathInfo objects to the [PathItems.add](/ps_reference/classes/pathitems/#add)() method. This method creates
a [SubPathItem](/ps_reference/classes/subpathitem/) object for each [SubPathInfo](/ps_reference/classes/subpathinfo/) object, and creates and returns a new [PathItem](/ps_reference/classes/pathitem/) object for the
path represented by all of the subpaths.

*Added in Photoshop 23.3*

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| docId | *number* | Read-only | The ID of the document of this pathItem. |
| id | *number* | Read-only | For use with batchPlay operations. This pathItem ID, along with its document ID can be used to represent this pathItem for the lifetime of this document. |
| kind | [*PathKind*](/ps_reference/modules/constants/#pathkind) | Read-write | The type of this path |
| name | *string* | Read-write | Name of this path |
| parent | [*Document*](/ps_reference/classes/document/) | Read-only | Owner document |
| subPathItems | [*SubPathItems*](/ps_reference/classes/subpathitems/) | Read-only | The contained [SubPathItem](/ps_reference/modules/subpathitem/)s in this path |
| typename | *string* | Read-only | The class name of the referenced PathItem object |

## Methods

### deselect

*Promise*<void\>

Deselects this `pathItem` object.

___

### duplicate

*Promise*<[*PathItem*](/ps_reference/classes/pathitem/)\>

Duplicates the `pathItem` object with the new name, returning the duplicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | *string* |

___

### fillPath

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

*Promise*<void\>

Makes this the clipping path for this document.

`flatness` tells the PostScript printer how to approximate curves in the path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `flatness?` | *number* |

___

### makeSelection

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

*Promise*<void\>

Deletes this object

___

### select

*Promise*<void\>

Makes this the active or selected `PathItem` object

___

### strokePath

*Promise*<void\>

Strokes the path with the specified tool

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tool` | [*ToolType*](/ps_reference/modules/constants/#tooltype) | - |
| `simulatePressure` | *boolean* | false |
