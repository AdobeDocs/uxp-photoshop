---
id: "layer"
title: "Layer"
sidebar_label: "Layer"
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

# Layer

An object within a document that contains visual elements of the image, equivalent to a layer in Photoshop.

You can access layers in a document using [Document.layers](/ps_reference/classes/document/#layers) collection.

If the object is representing a group layer, you can access it's children layers using [Layer.layers](/ps_reference/classes/layer/#layers) property.
```javascript
group.layers.forEach((layer) => {
  layer.visible = true;
})
```

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| allLocked | *boolean* | R W | 22.5 | When set to true, prevents edits to pixels and properties of this layer. |
| blendMode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | R W | 22.5 | The blend mode of the layer.  ***Fixes in Photoshop 24.2:*** - *Now it will throw error when passing non-existent blend mode* - *Also will throw error if combination of document color mode, bit depth and blend mode is not possible instead of failing silently* - *Prior this version it was possible to set blend mode for background layer which turned it into regular layer as a side effect and also changed its ID. Not it will throw error instead since these side effects are not expected to happen* |
| bounds | [*Bounds*](/ps_reference/objects/bounds/) | R | 22.5 | Bounds of the layer, including the effects. |
| boundsNoEffects | [*Bounds*](/ps_reference/objects/bounds/) | R | 22.5 | Bounds of the layer excluding effects. |
| document | [*Document*](/ps_reference/classes/document/) | R | 23.0 | The document that contains this layer. |
| fillOpacity | *number* | R W | 23.0 | The fill opacity of the layer, in percentage. |
| filterMaskDensity | *number* | R W | 23.0 | The density of the filter mask, in percentage. |
| filterMaskFeather | *number* | R W | 23.0 | The feather of the filter mask between 0.0 and 1000.0. |
| id | *number* | R | 22.5 | ID of the layer, can be used for making batchPlay calls. |
| isBackgroundLayer | *boolean* | R | 22.5 | True when the layer is the special Background layer. |
| isClippingMask | *boolean* | R W | 23.0 | Whether the layer is being used as a clipping mask. Releasing a clipping mask will also release the layers above. |
| kind | [*LayerKind*](/ps_reference/modules/constants/#layerkind) | R | 22.5 | The kind of the layer. |
| layerMaskDensity | *number* | R W | 23.0 | The density of the layer mask, in percentage. |
| layerMaskFeather | *number* | R W | 23.0 | The feather of the layer mask between 0.0 and 1000.0. |
| layers | [*Layers*](/ps_reference/classes/layers/) | R | 23.0 | The layers inside this group layer. |
| linkedLayers | [*Layers*](/ps_reference/classes/layers/) | R | 22.5 | Layers linked to this layer. See [Layer.link](/ps_reference/classes/layer/#link) |
| locked | *boolean* | R | 22.5 | True if any property of this layer is locked. |
| name | *string* | R W | 22.5 | Name of the layer. |
| opacity | *number* | R W | 22.5 | The master opacity of the layer, in percent. |
| parent | [*Layer*](/ps_reference/classes/layer/) | R | 22.5 | The group layer that contains this layer. It will return null if the layer is a top layer in the document. |
| pixelsLocked | *boolean* | R W | 22.5 | When set to true, prevents the pixels of this layer from being edited. |
| positionLocked | *boolean* | R W | 22.5 | When set to true, prevents the layer from being moved. |
| textItem | [*TextItem*](/ps_reference/classes/textitem/) | R | 24.2 | The object that contains properties and methods related to Text for Layers whose &#x60;kind&#x60; is equal to &#x60;LayerKind.TEXT&#x60; |
| transparentPixelsLocked | *boolean* | R W | 22.5 | When set to true, prevents the transparent pixels from being edited |
| typename | *string* | R | 23.0 | The class name of the referenced object: *&quot;Layer&quot;*. |
| vectorMaskDensity | *number* | R W | 23.0 | The density of the vector mask, in percentage. |
| vectorMaskFeather | *number* | R W | 23.0 | The feather of the vector mask between 0.0 and 1000.0. |
| visible | *boolean* | R W | 22.5 | True when the layer is visible. |

## Methods

### applyAddNoise
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Add Noise filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | *number* | Percentage of noise applied [0.1,400]. |
| `distribution` | [*NoiseDistribution*](/ps_reference/modules/constants/#noisedistribution) | Distribution method to use. |
| `monochromatic` | *boolean* | Adds black and white noise if true. |

___

### applyAverage
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Average filter.

Unsupported color modes: Indexed Color, Bitmap

___

### applyBlur
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Blur filter.

Unsupported color modes: Indexed Color, Bitmap

___

### applyBlurMore
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Blur More filter.

Unsupported color modes: Indexed Color, Bitmap

___

### applyClouds
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Clouds filter.

Unsupported color modes: Indexed Color, Bitmap

___

### applyCustomFilter
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Custom filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `characteristics` | *number*[] | Square matrix (5 x 5) used to perform filter operation. |
| `scale` | *number* | The value by which to divide the sum of the pixel values included in the calculation |
| `offset` | *number* | The value to be added to the result of the scale calculation. |

___

### applyDeInterlace
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the De-Interlace filter.

Unsupported color modes: Indexed Color, Bitmap, CMYK 8 bits, CMYK 16 bits, Duotone 8 bits

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eliminateFields` | [*EliminateFields*](/ps_reference/modules/constants/#eliminatefields) | Eliminate EVENFIELDS or ODDFIELDS field order. |
| `createFields` | [*CreateFields*](/ps_reference/modules/constants/#createfields) | Create fields by either DUPLICATION or INTERPOLATION. |

___

### applyDespeckle
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Despeckle filter.

Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits

___

### applyDifferenceClouds
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Difference Clouds filter.

Unsupported color modes: Indexed Color, Bitmap, Lab 8 bits, Lab 16 bits

___

### applyDiffuseGlow
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Diffuse Glow filter.

Supported color modes: RGB 8 bits, Duotone 8 bits, Grayscale 8 bits, Multichannel 8 bits

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `graininess` | *number* | The amount of grain [0,10]. |
| `glowAmount` | *number* | The glow amount [0,20]. |
| `clearAmount` | *number* | The clear amount [0,20]. |

___

### applyDisplace
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Displace filter using the specified horizontal
and vertical scale, mapping type, treatment of undistorted
areas, and path to the distortion image map.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `horizontalScale` | *number* | How much to scale in the direction of width [-999,999]. |
| `verticalScale` | *number* | How much to scale in the direction of height [-999,999]. |
| `displacementType` | [*DisplacementMapType*](/ps_reference/modules/constants/#displacementmaptype) | Describes how the displacement map fits the image if the image is not the same size as the map. |
| `undefinedAreas` | [*UndefinedAreas*](/ps_reference/modules/constants/#undefinedareas) | The method used to treat undistorted areas or areas left blank in an image to which the filter in the Distor category has been applied. |
| `displacementMapFile` | File | Path to the distortion image map. |

___

### applyDustAndScratches
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Dust & Scratches filter.

Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The radius of the filter in pixels [1,100]. |
| `threshold` | *number* | The lower the amount, the stronger the effect [0,255]. |

___

### applyGaussianBlur
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Gaussian Blur filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The radius of the filter in pixels [0.1,250]. |

___

### applyGlassEffect
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Glass filter.

Supported color modes: RGB 8 bits, Duotone 8 bits, Grayscale 8 bits, Multichannel 8 bits

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `distortion` | *number* | - | Change the amount the glass distorts the image [0,20]. |
| `smoothness` | *number* | - | Change the smoothness of the glass [1,15]. |
| `scaling` | *number* | - | The percentage value to scale by [50,200]. |
| `invert` | *boolean* | false | Invert the glass (default: false). |
| `texture` | [*TextureType*](/ps_reference/modules/constants/#texturetype) | - | The type of glass texture. This argument is ignored if "textureFile" is provided. (default: TextureType.CANVAS) |
| `textureFile?` | File | - | Mapping for glass distortion (optional). |

___

### applyHighPass
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the High Pass filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The width of high pass filter (pixels) [0.1,1000]. |

___

### applyImage
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.5</span>

**async** : *Promise*<void\>

The applyImage method lets you blend one image’s layer and channel (the source) with a this layer (the target).
This will change pixels contained in this layer.
Performs Image > Apply Image on the document. See the ApplyImageOptions
object for more info and examples.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `applyImageOptions` | [*ApplyImageOptions*](/ps_reference/objects/options/applyimageoptions/) | Option object for applyImage. |

___

### applyLensBlur
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Lens Blur filter.

Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | [*DepthMapSource*](/ps_reference/modules/constants/#depthmapsource) | - | The source for the depth map (default: `DepthMapSource.NONE`) |
| `focalDistance` | *number* | 0 | The blur focal distance for the depth map [0,255] (default: `0`). |
| `invertDepthMask` | *boolean* | false | True if the depth map is inverted (default: `false`) |
| `shape` | [*Geometry*](/ps_reference/modules/constants/#geometry) | - | The shape of the iris (default: `Geometry.HEXAGON`) |
| `radius` | *number* | 15 | The radius of the iris [0,100] (default: 15) |
| `bladeCurvature` | *number* | 0 | The blade curvature of the iris [0,100] (default: `0`) |
| `rotation` | *number* | 0 | The rotation of the iris [0,360] (default: `0`) |
| `brightness` | *number* | 0 | The brightness for the specular highlights [0,100] (default: `0`) |
| `threshold` | *number* | 0 | The threshold for the specular highlights [0,255] (default: `0`) |
| `amount` | *number* | 0 | The amount of noise [0,100] (default: `0`) |
| `distribution` | [*NoiseDistribution*](/ps_reference/modules/constants/#noisedistribution) | - | The distribution value for the noise (default: `NoiseDistribution.UNIFORM`) |
| `monochromatic` | *boolean* | false | True if the noise is monochromatic (default: `false`) |

___

### applyLensFlare
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Lens Flare filter.

Supported color modes: RGB 8 bits, RGB 16 bits, RGB 32 bits

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `brightness` | *number* | Percentage of brightness applied [10,300]. |
| `flareCenter` | *object* | The flare center `{x: number, y: number}`. |
| `flareCenter.x` | *number* | The horizontal coordinate in pixels. |
| `flareCenter.y` | *number* | The vertical coordinate in pixels. |
| `lensType` | [*LensType*](/ps_reference/modules/constants/#lenstype) | The lens type used to produce the effect (default: `LensType.ZOOMLENS`). |

___

### applyMaximum
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

*Promise*<void\>

Applies the Maximum filter

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The radius of the filter in pixels.<br/>               Integer in the range [1,500] when using `SQUARENESS`.<br/>               Float in the range [0.2,500] when using `ROUNDNESS`.<br/> |
| `preserveShape` | [*PreserveShape*](/ps_reference/modules/constants/#preserveshape) | Favor hard corners or smooth curves around the edges<br/>                      (default: `PreserveShape.SQUARENESS`) |

___

### applyMedianNoise
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

*Promise*<void\>

Applies the Median filter

Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The radius of the filter in pixels [1,500] |

___

### applyMinimum
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

*Promise*<void\>

Applies the Minimum filter

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The radius of the filter in pixels.<br/>               Integer in the range [1,500] when using `SQUARENESS`.<br/>               Float in the range [0.2,500] when using `ROUNDNESS`.<br/> |
| `preserveShape` | [*PreserveShape*](/ps_reference/modules/constants/#preserveshape) | Favor hard corners or smooth curves around the edges<br/>                      (default: `PreserveShape.SQUARENESS`) |

___

### applyMotionBlur
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

*Promise*<void\>

Applies the Motion Blur filter

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | *number* | The angle the blur effect will be applied at (degrees) [-360,360] |
| `distance` | *number* | The amount of blur [1,2000] |

___

### applyNTSC
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

*Promise*<void\>

Applies the NTSC Colors filter

Supported color modes: RGB 8 bits, RGB 16 bits, RGB 32 bits

___

### applyOceanRipple
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

*Promise*<void\>

Applies the Ocean Ripple filter

Supported color modes: RGB 8 bits, Duotone 8 bits, Grayscale 8 bits, Multichannel 8 bits

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | *number* | The Ripple size [1,15] |
| `magnitude` | *number* | The Ripple magnitude [1,20] |

___

### applyOffset
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

*Promise*<void\>

Applies the Offset filter

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `horizontal` | *number* | The horizontal offset [-2 \* doc.width, 2 \* doc.width] |
| `vertical` | *number* | The vertical offset [-2 \* doc.height, 2 \* doc.height] |
| `undefinedAreas` | [*OffsetUndefinedAreas*](/ps_reference/modules/constants/#offsetundefinedareas) | Method to use to fill the empty space left by the offset<br/>                       (default: `OffsetUndefinedAreas.WRAPAROUND`). |

___

### applyPinch
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Pinch filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | *number* | The pinch amount. Negative value creates effect of expansion and positive creates effect of contraction. [-100,100] |

___

### applyPolarCoordinates
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Polar Coordinates filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conversion` | [*PolarConversionType*](/ps_reference/modules/constants/#polarconversiontype) | The conversion type. |

___

### applyRipple
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Ripple filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | *number* | The ripple amount. [-999,999] |
| `size` | [*RippleSize*](/ps_reference/modules/constants/#ripplesize) | The ripple size. |

___

### applySharpen
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Sharpen filter.

Unsupported color modes: Indexed Color, Bitmap

___

### applySharpenEdges
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Sharpen Edges filter.

Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits

___

### applySharpenMore
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Sharpen More filter.

Unsupported color modes: Indexed Color, Bitmap

___

### applyShear
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the the Shear filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `curve` | { `x`: *number* ; `y`: *number*  }[] | Specification of the shear curve in points as coordinates object with x, y properties e.g.in the format [{x:-20, y:1}, {x:30, y:128}]. Any number higher than 2 of coordinate objects can be specified. For "x" coordinate it is recommended to use range [-63,64] and for "y" coordinate use range [1,128]. For bests results please make sure that first point has 0 at "y" axis and last point has 128 at "y" axis. Also sort points by "y" value in ascending order. Follow these rules to ensure that curve will be shown correctly in dialog UI. |
| `undefinedArea` | [*UndefinedAreas*](/ps_reference/modules/constants/#undefinedareas) | The treatment of areas left blank by the distortion. |

___

### applySmartBlur
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

**async** : *Promise*<void\>

Applies the Smart Blur filter.

Supported color modes: RGB 8 bits, CMYK 8 bits, Duotone 8 bits,

Grayscale 8 bits, Lab 8 bits, Multichannel 8 bits

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The blur radius [0.1,100]. |
| `threshold` | *number* | The blur threshold [0.1,100]. |
| `blurQuality` | [*SmartBlurQuality*](/ps_reference/modules/constants/#smartblurquality) | The smoothness or graininess of the blurred image. |
| `mode` | [*SmartBlurMode*](/ps_reference/modules/constants/#smartblurmode) | The smart blur mode. |

___

### applySpherize
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

**async** : *Promise*<void\>

Applies the Spherize filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | *number* | The amount of distortion [-100,100]. |
| `mode` | [*SpherizeMode*](/ps_reference/modules/constants/#spherizemode) | The distortion mode. |

___

### applyTwirl
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

**async** : *Promise*<void\>

Applies the Twirl filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | *number* | The amount of twirl to apply (degrees) [-999,999] |

___

### applyUnSharpMask
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

**async** : *Promise*<void\>

Applies the Unsharp Mask filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | *number* | The amount of sharpening (as a whole number percentage) [1,500]. |
| `radius` | *number* | The radius in pixels [0.1,1000]. |
| `threshold` | *number* | The contrast threshold [0,255]. |

___

### applyWave
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

**async** : *Promise*<void\>

Applies the Wave filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generatorNumber` | *number* | The whole number of generators [1,999]. |
| `minimumWavelength` | *number* | The minimum wave length [1,(maximum wave length - 1)] (whole number). |
| `maximumWavelength` | *number* | The maximum wave length [(minimum wave length + 1),999] (whole number). |
| `minimumAmplitude` | *number* | The minimum amplitude [1,(maximum amplitude - 1)] (whole number). |
| `maximumAmplitude` | *number* | The maximum amplitude [(minimum amplitude + 1),999] (whole number). |
| `horizontalScale` | *number* | The amount of horizontal scale (as a percentage) [1,100] (whole number). |
| `verticalScale` | *number* | The amount of vertical scale (as a percentage) [1,100] (whole number). |
| `waveType` | [*WaveType*](/ps_reference/modules/constants/#wavetype) | The wave type (optional). |
| `undefinedAreas` | [*UndefinedAreas*](/ps_reference/modules/constants/#undefinedareas) | The treatment of areas left blank by the distortion (optional). |
| `randomSeed` | *number* | The random seed (optional). |

___

### applyZigZag
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

**async** : *Promise*<void\>

Applies the ZigZag filter.

Unsupported color modes: Indexed Color, Bitmap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | *number* | The amount of zigzag [-100,100]. |
| `ridges` | *number* | The number of ridges [0,20]. |
| `style` | [*ZigZagType*](/ps_reference/modules/constants/#zigzagtype) | The zigzag style. |

___

### bringToFront
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*void*

Moves the layer to a position above the topmost layer or group.

___

### clear
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Clears the layer pixels and does not copy to the clipboard.
If no pixel selection is found, select all pixels and clear.

___

### copy
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Copies the layer to the clipboard. When the optional argument is set to true, a
merged copy is performed (that is, all visible layers are copied to the clipboard).

```javascript
await layer.copy(true)
await layer.copy()
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `merge?` | *boolean* |

___

### cut
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Cuts the layer contents to the clipboard. If no selection is found then select all the pixels and then cut.

___

### delete
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*void*

Deletes this layer from the document.
```javascript
const layers = document.layers
layers && layers[0] && layers[0].delete()
```

___

### duplicate
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Duplicates the layer, creating a copy above it in layer stack,
and returns the newly created layer.

```javascript
// duplicate a layer
const copyLayer = await layer.duplicate()

// extract to a new document
const exportDoc = psApp.documents[1]
const exportedLayer = await layer.duplicate(exportDoc)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativeObject?` | [*Document*](/ps_reference/classes/document/) \| [*Layer*](/ps_reference/classes/layer/) |
| `insertionLocation?` | [*ElementPlacement*](/ps_reference/modules/constants/#elementplacement) |
| `name?` | *string* |

___

### flip
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Flips the layer on one or both axis.

```javascript
// flip horizontally
await layer.flip(constants.FlipAxis.HORIZONTAL);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [*FlipAxis*](/ps_reference/modules/constants/#flipaxis) | Which axis (or both) to flip the layer on. |

___

### link
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

[*Layer*](/ps_reference/classes/layer/)[]

Creates a link between this layer and the target layer if not already linked,
and returns a list of layers linked to this layer.

```javascript
// link two layers together
const linkedLayers = strokes.link(fillLayer)
linkedLayers.forEach((layer) => console.log(layer.name))
> "strokes"
> "fillLayer"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetLayer` | [*Layer*](/ps_reference/classes/layer/) |

___

### merge
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Merges layers. This operates on the currently selected layers. If multiple
layers are selected, they will be merged together. If one layer is selected,
it is merged down with the layer beneath. In this case, the layer below must
be a pixel layer. The merged layer will now be the active layer.

___

### move
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*void*

Moves the layer relative to the layer specified in parameters.
"placeAfter" places the layer below relativeObject.
"placeBefore" places the layer above relativeObject.
"placeInside" places the layer inside relativeObject if relativeObject is a group layer.
`ElementPlacement.PLACEINSIDE` is only valid when `relativeObject.kind === LayerKind.group`

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativeObject` | [*Layer*](/ps_reference/classes/layer/) |
| `insertLocation` | [*ElementPlacement*](/ps_reference/modules/constants/#elementplacement) |

___

### rasterize
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Converts the targeted contents in the layer into a flat, raster image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [*RasterizeType*](/ps_reference/modules/constants/#rasterizetype) |

___

### rotate
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Rotates the layer.

```javascript
// rotate 90 deg counter clockwise
await layer.rotate(-90)

// rotate 90 deg clockwise relative to top left corner
let anchorPos = require('photoshop').constants.AnchorPosition
await layer.rotate(90, anchorPos.TOPLEFT)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | *number* \| AngleValue | Angle to rotate the layer by in degrees |
| `anchor?` | [*AnchorPosition*](/ps_reference/modules/constants/#anchorposition) | Anchor position to rotate around |
| `options?` | *object* | - |
| `options.interpolation?` | [*InterpolationMethod*](/ps_reference/modules/constants/#interpolationmethod) | Interpolation method to use when resampling the image |

___

### scale
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Scales the layer.

Renamed from `resize` in ExtendScript.

```javascript
await layer.scale(80, 80)

// Scale the layer to be a quarter of the size relative to bottom left corner
let anchorPos = require('photoshop').constants.AnchorPosition
await layer.scale(50, 50, anchorPos.BOTTOMLEFT)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | *number* \| PercentValue | Numeric percentage to scale layer horizontally |
| `height` | *number* \| PercentValue | Numeric percentage to scale layer vertically |
| `anchor?` | [*AnchorPosition*](/ps_reference/modules/constants/#anchorposition) | Anchor position to rotate around |
| `options?` | *object* | - |
| `options.interpolation?` | [*InterpolationMethod*](/ps_reference/modules/constants/#interpolationmethod) | Interpolation method to use when resampling the image |

___

### sendToBack
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*void*

Moves the layer to the bottom. If the bottom layer is the
background, it will move the layer to the position above the background.
If it is in a group, it will move to the bottom of the group.

___

### skew
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Applies a skew to the layer.

```javascript
// parellelogram shape
await layer.skew(-15, 0)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angleH` | *number* \| AngleValue | Horizontal angle to skew by |
| `angleV` | *number* \| AngleValue | Vertical angle to skew by |
| `options?` | *object* | - |
| `options.interpolation?` | [*InterpolationMethod*](/ps_reference/modules/constants/#interpolationmethod) | - |

___

### translate
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Moves the layer (translation).

```javascript
// Translate the layer to the left by 200px
await layer.translate(-200, 0)

// move the layer one height down
let xOffsetPct = {_unit: "percentUnit", _value: 0};
let yOffsetPct = {_unit: "percentUnit", _value: 100};
await layer.translate(xOffsetPct, yOffsetPct);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `horizontal` | *number* \| PercentValue \| PixelValue | Numeric value to offset layer by in pixels or percent |
| `vertical` | *number* \| PercentValue \| PixelValue | Numeric value to offset layer by in pixels or percent |

___

### unlink
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Unlinks the layer from any existing links.

```javascript
// detach layer from any existing links
await layer.unlink()
```
