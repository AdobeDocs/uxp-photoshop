---
id: "pathpoints"
title: "PathPoints"
sidebar_label: "PathPoints"
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
description: A collection of PathPoint objects that define a subpath, kept in the SubPathItem.pathPoints property.
---

# PathPoints

A collection of [PathPoint](/ps-reference/classes/pathpoint.md) objects that define a subpath, kept in the [SubPathItem.pathPoints](/ps-reference/classes/subpathitem.md#pathpoints) property.

## Indexable

▪ [index: *number*]: [*PathPoint*](/ps-reference/classes/pathpoint.md)

Used to access the guides in the collection.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 23.3 | Number of elements in this collection. |
| parent | [*SubPathItem*](/ps-reference/classes/subpathitem.md) | R | 23.3 | The SubPathItem that contains this PathPoints collection. |
