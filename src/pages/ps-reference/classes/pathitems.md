---
id: "pathitems"
title: "PathItems"
sidebar_label: "PathItems"
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
description: The collection of PathItem objects in a document.
---

# PathItems

The collection of [PathItem](/ps-reference/classes/pathitem.md) objects in a document.

Access through the [Document.pathItems](/ps-reference/classes/document.md#pathitems) collection property. To create new paths,
see [PathPointInfo](/ps-reference/classes/pathpointinfo.md) and [SubPathInfo](/ps-reference/classes/subpathinfo.md) classes and pass them to [PathItems.add](/ps-reference/classes/pathitems.md#add)() method.

## Indexable

▪ [index: *number*]: [*PathItem*](/ps-reference/classes/pathitem.md)

Used to access the paths in the collection.

Access through the [Document.pathItems](/ps-reference/classes/document.md#pathitems) collection property. To create new paths,
see [PathPointInfo](/ps-reference/classes/pathpointinfo.md) and [SubPathInfo](/ps-reference/classes/subpathinfo.md) classes and pass them to [PathItems.add](/ps-reference/classes/pathitems.md#add)() method.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 23.3 | Number of [PathItem](/ps-reference/classes/pathitem.md) objects in this collection. |
| parent | Document | R | 23.3 | The owner document of this PathItem collection. |

## Methods

### add
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.3\</span\>

[*PathItem*](/ps-reference/classes/pathitem.md)

Creates a new path item object and adds it to this collection.

A new [SubPathItem](/ps-reference/classes/subpathitem.md) object is created for each [SubPathInfo](/ps-reference/classes/subpathinfo.md) object provided in `entirePath`,
and those [SubPathItem](/ps-reference/classes/subpathitem.md) objects are added to the [PathItem.subPathItems](/ps-reference/classes/pathitem.md#subpathitems) collection of the returned
[PathItem](/ps-reference/classes/pathitem.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
| `entirePath` | [*SubPathInfo*](/ps-reference/classes/subpathinfo.md)[] |

<HorizontalLine />

### getByName
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.3\</span\>

[*PathItem*](/ps-reference/classes/pathitem.md)

Retrieve the first PathItem matching the given name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | Name to find |

<HorizontalLine />

### removeAll
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.3\</span\>

*void*

Removes all paths from this collection.
