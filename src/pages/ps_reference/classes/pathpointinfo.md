---
id: "pathpointinfo"
title: "PathPointInfo"
sidebar_label: "PathPointInfo"
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

# PathPointInfo

Used to create a [PathPoint](/ps_reference/classes/pathpoint/), which represents the anchor and control-handle endpoints for a path segment.
Each point (the anchor point, left-direction point, and right-direction point) is an array containing X and Y
position coordinates.

 - Use the JavaScript `new` operator to create these objects, and store them in the [SubPathInfo.entireSubPath](/ps_reference/classes/subpathinfo/#entiresubpath)
property before using that object to create a path item with [PathItems.add](/ps_reference/classes/pathitems/#add)()

 - The resulting [SubPathItem](/ps_reference/classes/subpathitem/) object contains the resulting [PathPoint](/ps_reference/classes/pathpoint/) objects. Use the [PathPoint](/ps_reference/classes/pathpoint/) object
to retrieve information about the points that describe existing path segments. The properties are read-only.

For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved
segments, the coordinates are different. The difference between the anchor point and the left or right
direction points determines the arc of the curve. Use the left direction point to bend the curve "outward" or
make it convex; or use the right direction point to bend the curve "inward" or make it concave.

 ## PathPointInfo sample script

```typescript
     function drawLine(doc: Document, start: number[], stop: number[]) {
         const startPoint = new PathPointInfo();
         startPoint.anchor = start;
         startPoint.leftDirection = start;
         startPoint.rightDirection = start;
         startPoint.kind = Constants.PointKind.CORNERPOINT;

         const stopPoint = new PathPointInfo();
         stopPoint.anchor = stop;
         stopPoint.leftDirection = stop;
         stopPoint.rightDirection = stop;
         stopPoint.kind = Constants.PointKind.CORNERPOINT;

         const spi = new SubPathInfo();
         spi.closed = false;
         spi.operation = Constants.ShapeOperation.SHAPEXOR;
         spi.entireSubPath = [startPoint, stopPoint];

         const line = doc.pathItems.add("Line", [spi]);
         line.strokePath(Constants.ToolType.PENCIL);
         line.remove();
     }

     drawLine(app.activeDocument, [100,100], [200,200]);
```

## Properties

### anchor

• **anchor**: *number*[]

The X and Y coordinates of the anchor point of the curve.

___

### kind

• **kind**: [*PointKind*](/ps_reference/modules/constants/#pointkind)

The role (corner or smooth) this point plays in the containing path segment.

___

### leftDirection

• **leftDirection**: *number*[]

The location of the left-direction endpoint('in' position).

___

### rightDirection

• **rightDirection**: *number*[]

The location of the right-direction endpoint('out' position).

___

### typename

• `Readonly` **typename**: *string*

The class name of the referenced object
