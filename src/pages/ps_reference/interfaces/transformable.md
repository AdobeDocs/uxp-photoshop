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
id: "transformable"
title: "Transformable"
sidebar_label: "Transformable"
---
# Transformable

## Implemented by

* [Selection](../../classes/selection/)

## Methods

###  nudge

▸ **nudge**(`horizontal`: number | PercentValue | PixelValue, `vertical`: number | PercentValue | PixelValue): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`horizontal` | number &#124; PercentValue &#124; PixelValue |
`vertical` | number &#124; PercentValue &#124; PixelValue |

___

###  perspectiveTransform

▸ **perspectiveTransform**(`percentH`: number | PercentValue, `percentV`: number | PercentValue, `interpolation?`: InterpolationMethod): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`percentH` | number &#124; PercentValue |
`percentV` | number &#124; PercentValue |
`interpolation?` | InterpolationMethod |

___

###  rotate

▸ **rotate**(`angle`: number | AngleValue, `interpolation?`: InterpolationMethod): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | number &#124; AngleValue |
`interpolation?` | InterpolationMethod |

___

###  scale

▸ **scale**(`width`: number | PercentValue, `height`: number | PercentValue, `interpolation?`: InterpolationMethod): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number &#124; PercentValue |
`height` | number &#124; PercentValue |
`interpolation?` | InterpolationMethod |

___

###  skew

▸ **skew**(`angleH`: number | AngleValue, `angleV`: number | AngleValue, `interpolation?`: InterpolationMethod): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`angleH` | number &#124; AngleValue |
`angleV` | number &#124; AngleValue |
`interpolation?` | InterpolationMethod |

___

###  warp

▸ **warp**(`warp`: [BuiltinWarp](../builtinwarp/) | [CustomWarp4X4](../customwarp4x4/), `interpolation?`: InterpolationMethod): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`warp` | [BuiltinWarp](../builtinwarp/) &#124; [CustomWarp4X4](../customwarp4x4/) |
`interpolation?` | InterpolationMethod |
