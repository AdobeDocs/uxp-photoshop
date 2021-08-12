---
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
id: "customwarp4x4"
title: "CustomWarp4X4"
sidebar_label: "CustomWarp4X4"
---

Represents a simple 4x4 warp that can be applied to a Transformable.

This is the first 'Warp' tool that appears when a user goes to the Warp menu item.

Splitting the warp grid further, or selecting a different size of grid forces the warp to become a quilt warp.

* [Warp](../warp/)

  ↳ **CustomWarp4X4**

## Properties

###  bounds

• **bounds**: *[Rectangle](../rectangle/)*

*Inherited from [Warp](../warp/).[bounds](../warp/#bounds)*

Rectangular bounds of the warp definition.

___

###  meshPoints

• **meshPoints**: *[PixelPoint](../pixelpoint/)[]*

4x4 grid of points to represent the warp mesh.

Must contain exactly 16 points.
