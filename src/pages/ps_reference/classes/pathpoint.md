---
id: "pathpoint"
title: "PathPoint"
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
---

# PathPoint

Represents the anchor and control-handle endpoints for a path segment. Each point (the anchor point, left-direction
 point, and right-direction point) is an array containing X and Y position coordinates.

 - Use the `PathPoint` object to retrieve information about the points that describe existing path segments. The
properties are read-only. Access [PathPoint](/ps_reference/classes/pathpoint/) objects through the [SubPathItem.pathPoints](/ps_reference/classes/subpathitem/#pathpoints) property.

 - Use [PathPointInfo](/ps_reference/classes/pathpointinfo/) with [PathItems.add](/ps_reference/classes/pathitems/#add)() to create path points. The properties are writeable.

For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved
segments, the coordinates are different. The difference between the anchor point and the left or right
direction points determines the arc of the curve. Use the left direction point to bend the curve "outward" or
make it convex; or use the right direction point to bend the curve "inward" or make it concave.

*Added in Photoshop 23.3*

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| anchor | *number*[] | Read-only | The coordinates of the anchor point of the curve, in &#x60;[horizontal, vertical]&#x60; format. |
| kind | [*PointKind*](/ps_reference/modules/constants/#pointkind) | Read-only | The role (corner or smooth) this point plays in the containing path segment. |
| leftDirection | *number*[] | Read-only | The location of the left-direction endpoint (&#x27;in&#x27; position), in &#x60;[horizontal, vertical]&#x60; format. |
| parent | [*SubPathItem*](/ps_reference/classes/subpathitem/) | Read-only | The containing SubPath object |
| rightDirection | *number*[] | Read-only | The location of the right-direction endpoint (&#x27;out&#x27; position), in &#x60;[horizontal, vertical]&#x60; format. |
| typename | *string* | Read-only | The class name of the referenced object |
