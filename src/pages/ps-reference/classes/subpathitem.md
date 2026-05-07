---
id: "subpathitem"
title: SubPathItem
sidebar_label: "SubPathItem"
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
description: Represents a subpath; a collection of subpaths make up a PathItem.
---

# SubPathItem

Represents a subpath; a collection of subpaths make up a [PathItem](/ps-reference/classes/pathitem.md).

Create these objects by passing [SubPathInfo](/ps-reference/classes/subpathinfo.md) objects to [PathItems.add](/ps-reference/classes/pathitems.md#add)() method. This method creates a
`SubPathItem` object for each [SubPathInfo](/ps-reference/classes/subpathinfo.md) object, and creates and then returns a new [PathItem](/ps-reference/classes/pathitem.md) object for the
path represented by all of the subpaths. Access these objects in the [PathItem.subPathItems](/ps-reference/classes/pathitem.md#subpathitems) collection.

 - Use the [SubPathItem](/ps-reference/classes/subpathitem.md) object to retrieve information about existing subpaths. The properties are read-only.
 - Use [SubPathInfo](/ps-reference/classes/subpathinfo.md) to create subpaths; the properties are read-write.

*Added in Photoshop 23.3*

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| closed | *boolean* | R | 23.3 | True if the path is closed. |
| operation | [*ShapeOperation*](/ps-reference/modules/constants.md#shapeoperation) | R | 23.3 | How this &#x60;SubPathItem&#x60; behaves when it intersects another. Specifies how to combine the shapes if the destination path already has a selection. |
| parent | [*PathItem*](/ps-reference/classes/pathitem.md) | R | 23.3 | The path that contains this subpath. |
| pathPoints | [*PathPoints*](/ps-reference/classes/pathpoints.md) | R | 23.3 | The collection of the [PathPoint](/ps-reference/classes/pathpoint.md)s on this &#x60;SubPathItem&#x60;. |
| typename | *string* | R | 23.3 | The class name of the referenced object: *&quot;SubPathItem&quot;*. |
