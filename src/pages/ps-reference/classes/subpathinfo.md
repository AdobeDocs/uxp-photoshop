---
id: "subpathinfo"
title: "SubPathInfo"
sidebar_label: "SubPathInfo"
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
description: An array of PathPointInfo objects that describes a straight or curved segment of a path, used to create
---

# Sub Path Info

An array of [PathPointInfo](/ps-reference/classes/pathpointinfo.md) objects that describes a straight or curved segment of a path, used to create
a [SubPathItem](/ps-reference/classes/subpathitem.md).

Pass an array of these objects to the [PathItems.add](/ps-reference/classes/pathitems.md#add)() method. This method creates a [SubPathItem](/ps-reference/classes/subpathitem.md) object
for each `SubPathInfo` object, and creates and returns a new [PathItem](/ps-reference/classes/pathitem.md) object for the path represented by
all of the subpaths.

 - Use `SubPathInfo` to create subpaths; the properties are read-write.

 - Use the [SubPathItem](/ps-reference/classes/subpathitem.md) object to retrieve information about existing subpaths. The properties are read-only.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| closed | *boolean* | R W | 23.3 | True if the path describes an enclosed area. |
| entireSubPath | [*PathPointInfo*](/ps-reference/classes/pathpointinfo.md)[] | R W | 23.3 | An array composed of the sub-path&#x27;s [PathPoint](/ps-reference/classes/pathpoint.md) objects. |
| operation | [*ShapeOperation*](/ps-reference/modules/constants.md#shapeoperation) | R W | 23.3 | The subpath&#x27;s operation on other subpaths. Specifies how to combine the shapes if the destination path already has a selection. |
| typename | *string* | R | 23.3 | The class name of the referenced object: *&quot;SubPathInfo&quot;*. |
