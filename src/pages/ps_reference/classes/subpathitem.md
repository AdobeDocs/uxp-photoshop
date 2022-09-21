---
id: "subpathitem"
title: "SubPathItem"
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
---

# SubPathItem

Represents a subpath; a collection of subpaths make up a [PathItem](/ps_reference/classes/pathitem/).

Create these objects by passing [SubPathInfo](/ps_reference/classes/subpathinfo/) objects to [PathItems.add](/ps_reference/classes/pathitems/#add)() method. This method creates a
`SubPathItem` object for each [SubPathInfo](/ps_reference/classes/subpathinfo/) object, and creates and then returns a new [PathItem](/ps_reference/classes/pathitem/) object for the
path represented by all of the subpaths. Access these objects in the [PathItem.subPathItems](/ps_reference/classes/pathitem/#subpathitems) collection.

 - Use the [SubPathItem](/ps_reference/classes/subpathitem/) object to retrieve information about existing subpaths. The properties are read-only.
 - Use [SubPathInfo](/ps_reference/classes/subpathinfo/) to create subpaths; the properties are read-write.

*Added in Photoshop 23.3*

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| closed | *boolean* | R | 23.3 | True if the path is closed. |
| operation | [*ShapeOperation*](/ps_reference/modules/constants/#shapeoperation) | R | 23.3 | How this &#x60;SubPathItem&#x60; behaves when it intersects another. Specifies how to combine the shapes if the destination path already has a selection. |
| parent | [*PathItem*](/ps_reference/classes/pathitem/) | R | 23.3 | The path that contains this subpath. |
| pathPoints | [*PathPoints*](/ps_reference/classes/pathpoints/) | R | 23.3 | The collection of the [PathPoint](/ps_reference/classes/pathpoint/)s on this &#x60;SubPathItem&#x60;. |
| typename | *string* | R | 23.3 | The class name of the referenced object: *&quot;SubPathItem&quot;*. |
