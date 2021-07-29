---
id: "selection"
title: "Selection"
sidebar_label: "Selection"
repo: "uxp-photoshop"
index: "photoshop"
keywords: "
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
"
---
# Selection

## Implements

* [Transformable](/ps_reference/interfaces/transformable/)

## Properties

###  bounds

• **bounds**: *Promise‹PsCommon.Bounds›*

The selection's rectangular bounds

___

###  parent

• **parent**: *Promise‹[Document](/ps_reference/classes/document/)›*

The document this selection belongs to

___

###  solid

• **solid**: *Promise‹boolean›*

Whether the selection is solid

## Methods

###  copy

▸ **copy**(`merge?`: boolean): *Promise‹void›*

Invoke a copy command on the selection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`merge?` | boolean | Copy merged contents of all visible layers  |

___

###  cut

▸ **cut**(): *Promise‹void›*

Invoke a cut command on the selection

___

###  expand

▸ **expand**(`amount?`: number): *Promise‹void›*

Expands the selection by a pixel amount

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount?` | number | Pixels to expand by  |

___

###  feather

▸ **feather**(`amount?`: number): *Promise‹void›*

Feathers the selection by a pixel amount

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount?` | number | Pixels to feather by  |

___

###  invert

▸ **invert**(): *Promise‹void›*

Invert the selection

___

###  nudge

▸ **nudge**(`horizontal`: number | PercentValue | PixelValue, `vertical`: number | PercentValue | PixelValue): *Promise‹void›*

*Implementation of [Transformable](/ps_reference/interfaces/transformable/)*

Moves the selected pixels.
```javascript
// nudge the selection to the left by 200px
await selection.nudge(-200, 0)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`horizontal` | number &#124; PercentValue &#124; PixelValue | Numeric value to offset selection content by in pixels |
`vertical` | number &#124; PercentValue &#124; PixelValue | Numeric value to offset selection content by in pixels  |

___

###  perspectiveTransform

▸ **perspectiveTransform**(`percentH`: number | PercentValue, `percentV`: number | PercentValue, `interpolation?`: InterpolationMethod): *Promise‹void›*

*Implementation of [Transformable](/ps_reference/interfaces/transformable/)*

Applies a distortion (perspective) to the content under the selection.
```javascript
// 'into the distance' effect
await selection.perspectiveTransform(0, -0.05)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`percentH` | number &#124; PercentValue | Distortion factor in the horizontal axis (percent) |
`percentV` | number &#124; PercentValue | Distortion factor in the vertical axis (percent) |
`interpolation?` | InterpolationMethod | Interpolation method to use when resampling the image @default InterpolationMethod.bilinear  |

___

###  rotate

▸ **rotate**(`angle`: number | AngleValue, `interpolation?`: InterpolationMethod): *Promise‹void›*

*Implementation of [Transformable](/ps_reference/interfaces/transformable/)*

Rotates the content under the selection.
```javascript
// rotate 90 deg counter clockwise
await selection.rotate(-90)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number &#124; AngleValue | Angle to rotate the selection content by in degrees |
`interpolation?` | InterpolationMethod | Interpolation method to use when resampling the image @default InterpolationMethod.bilinear  |

___

###  scale

▸ **scale**(`width`: number | PercentValue, `height`: number | PercentValue, `interpolation?`: InterpolationMethod): *Promise‹void›*

*Implementation of [Transformable](/ps_reference/interfaces/transformable/)*

Scales the content under the selection.
```javascript
await selection.scale(120, 120)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width` | number &#124; PercentValue | Numeric percentage to scale selection content horizontally |
`height` | number &#124; PercentValue | Numeric percentage to scale selection content vertically |
`interpolation?` | InterpolationMethod | Interpolation method to use when resampling the image @default InterpolationMethod.bilinear ` * > Should this default follow the user preferences?`  |

___

###  skew

▸ **skew**(`angleH`: number | AngleValue, `angleV`: number | AngleValue, `interpolation?`: InterpolationMethod): *Promise‹void›*

*Implementation of [Transformable](/ps_reference/interfaces/transformable/)*

Applies a skew to the content under the selection.
```javascript
// parellelogram shape
await selection.skew(-15, 0)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angleH` | number &#124; AngleValue | Horizontal angle to skew by |
`angleV` | number &#124; AngleValue | Vertical angle to skew by |
`interpolation?` | InterpolationMethod | Interpolation method to use when resampling the image @default InterpolationMethod.bilinear  |

___

###  translate

▸ **translate**(`deltaX`: number, `deltaY`: number): *Promise‹void›*

Translate the entire selection.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`deltaX` | number | Amount to move selection to the right, in pixels |
`deltaY` | number | Amount to move selection down, in pixels  |

___

###  warp

▸ **warp**(`warp`: [BuiltinWarp](/ps_reference/interfaces/builtinwarp/) | [CustomWarp4X4](/ps_reference/interfaces/customwarp4x4/), `interpolation?`: InterpolationMethod): *Promise‹void›*

*Implementation of [Transformable](/ps_reference/interfaces/transformable/)*

Applies a warp to the content under the selection.
```javascript
// perform a fisheye warp
await selection.warp({ style: BuiltinWarpStyle.warpFisheye, value: 70 })

// warp selection content using a user provided 4x4 warp grid of points
var bounds = await selection.bounds
var grid = myWarpEngine.generateUniformXYPoints(bounds, 16)
var warp = myWarpEngine.applyWarp(grid)
await selection.warp({ meshPoints: warp })
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`warp` | [BuiltinWarp](/ps_reference/interfaces/builtinwarp/) &#124; [CustomWarp4X4](/ps_reference/interfaces/customwarp4x4/) | Warp definition |
`interpolation?` | InterpolationMethod | Interpolation method to use when resampling the image @default InterpolationMethod.bilinear  |
