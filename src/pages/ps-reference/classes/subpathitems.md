---
id: "subpathitems"
title: "SubPathItems"
sidebar_label: "SubPathItems"
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
description: A collection of SubPathItem objects that make up a PathItem. Access this object in the
---

# SubPathItems

A collection of [SubPathItem](/ps-reference/classes/subpathitem.md) objects that make up a [PathItem](/ps-reference/classes/pathitem.md). Access this object in the
[PathItem.subPathItems](/ps-reference/classes/pathitem.md#subpathitems) collection property.

 - Use [SubPathInfo](/ps-reference/classes/subpathinfo.md) to create subpaths; the properties are writeable.
 - Use the [SubPathItem](/ps-reference/classes/subpathitem.md) object to retrieve information about existing subpaths. The properties are read-only.

## Indexable

▪ [index: *number*]: [*SubPathItem*](/ps-reference/classes/subpathitem.md)

Used to access the guides in the collection.

 - Use [SubPathInfo](/ps-reference/classes/subpathinfo.md) to create subpaths; the properties are writeable.
 - Use the [SubPathItem](/ps-reference/classes/subpathitem.md) object to retrieve information about existing subpaths. The properties are read-only.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 23.3 | Number of elements in this collection. |
| parent | [*PathItem*](/ps-reference/classes/pathitem.md) | R | 23.3 | The PathItem that contains this SubPathItem. |
