---
id: "pathpoint"
title: PathPoint
sidebar_label: "PathPoint"
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
description: Represents the anchor and control-handle endpoints for a path segment. Each point (the anchor point, left-direction
---

# PathPoint

Represents the anchor and control-handle endpoints for a path segment. Each point (the anchor point, left-direction
 point, and right-direction point) is an array containing X and Y position coordinates.

 - Use the `PathPoint` object to retrieve information about the points that describe existing path segments. The
properties are read-only. Access [PathPoint](/ps-reference/classes/pathpoint.md) objects through the [SubPathItem.pathPoints](/ps-reference/classes/subpathitem.md#pathpoints) property.

 - Use [PathPointInfo](/ps-reference/classes/pathpointinfo.md) with [PathItems.add](/ps-reference/classes/pathitems.md#add)() to create path points. The properties are writeable.

For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved
segments, the coordinates are different. The difference between the anchor point and the left or right
direction points determines the arc of the curve. Use the left direction point to bend the curve "outward" or
make it convex; or use the right direction point to bend the curve "inward" or make it concave.

*Added in Photoshop 23.3*

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| anchor | *number*[] | R | 23.3 | The coordinates of the anchor point of the curve, in &#x60;[horizontal, vertical]&#x60; format. |
| kind | [*PointKind*](/ps-reference/modules/constants.md#pointkind) | R | 23.3 | The role (corner or smooth) this point plays in the containing path segment. |
| leftDirection | *number*[] | R | 23.3 | The location of the left-direction endpoint (&#x27;in&#x27; position), in &#x60;[horizontal, vertical]&#x60; format. |
| parent | [*SubPathItem*](/ps-reference/classes/subpathitem.md) | R | 23.3 | The containing SubPath object. |
| rightDirection | *number*[] | R | 23.3 | The location of the right-direction endpoint (&#x27;out&#x27; position), in &#x60;[horizontal, vertical]&#x60; format. |
| typename | *string* | R | 23.3 | The class name of the referenced object: *&quot;PathPoint&quot;*. |
