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
---

# Sub Path Info

An array of [PathPointInfo](/ps_reference/classes/pathpointinfo/) objects that describes a straight or curved segment of a path, used to create
a [SubPathItem](/ps_reference/classes/subpathitem/).

Pass an array of these objects to the [PathItems.add](/ps_reference/classes/pathitems/#add)() method. This method creates a [SubPathItem](/ps_reference/classes/subpathitem/) object
for each `SubPathInfo` object, and creates and returns a new [PathItem](/ps_reference/classes/pathitem/) object for the path represented by
all of the subpaths.

 - Use `SubPathInfo` to create subpaths; the properties are read-write.

 - Use the [SubPathItem](/ps_reference/classes/subpathitem/) object to retrieve information about existing subpaths. The properties are read-only.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| closed | *boolean* | R W | acc??? | - |
| entireSubPath | [*PathPointInfo*](/ps_reference/classes/pathpointinfo/)[] | R W | acc??? | - |
| operation | [*ShapeOperation*](/ps_reference/modules/constants/#shapeoperation) | R W | acc??? | - |
| typename | *string* | R | 23.3 | The class name of the referenced object: *&quot;SubPathInfo&quot;*. |
