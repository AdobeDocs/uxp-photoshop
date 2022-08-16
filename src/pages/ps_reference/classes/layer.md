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

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| allLocked | *boolean* | Read-write | When set to true, prevents edits to pixels and properties of this layer |
| blendMode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | Read-write | The blend mode of the layer |
| bounds | [*Bounds*](/ps_reference/objects/bounds/) | Read-only | Bounds of the layer, including the effects |
| boundsNoEffects | [*Bounds*](/ps_reference/objects/bounds/) | Read-only | Bounds of the layer excluding effects |
| document | [*Document*](/ps_reference/classes/document/) | Read-only | The document this layer is in |
| fillOpacity | *number* | Read-write | The fill opacity of the layer, in percentage. |
| filterMaskDensity | *number* | Read-write | The density of the filter mask, in percentage. |
| filterMaskFeather | *number* | Read-write | The feather of the filter mask between 0.0 and 1000.0. |
| id | *number* | Read-only | ID of the layer, can be used for making batchPlay calls |
| isBackgroundLayer | *boolean* | Read-only | - |
| isClippingMask | *boolean* | Read-write | Is the mask used as a clipping mask. |
| kind | [*LayerKind*](/ps_reference/modules/constants/#layerkind) | Read-only | Kind of the layer |
| layerMaskDensity | *number* | Read-write | The density of the layer mask, in percentage. |
| layerMaskFeather | *number* | Read-write | The feather of the layer mask between 0.0 and 1000.0. |
| layers | [*Layers*](/ps_reference/classes/layers/) | Read-only | The layers of this group layer &#x60;&#x60;&#x60;javascript group.layers.forEach((layer) &#x3D;&gt; {   ... }) &#x60;&#x60;&#x60; |
| linkedLayers | [*Layers*](/ps_reference/classes/layers/) | Read-only | Layers linked to this layer. See [Layer.link](/ps_reference/classes/layer/#link) |
| locked | *boolean* | Read-only | True if any property of this layer is locked |
| name | *string* | Read-only | Name of the layer |
| opacity | *number* | Read-write | The master opacity of the layer, in percentage. |
| parent | [*Layer*](/ps_reference/classes/layer/) | Read-only | The group layer this layer is in, null if the layer is a top layer in the document |
| pixelsLocked | *boolean* | Read-write | When set to true, prevents the pixels of this layer from being edited |
| positionLocked | *boolean* | Read-write | When set to true, prevents the layer from being moved |
| transparentPixelsLocked | *boolean* | Read-write | When set to true, prevents the transparent pixels from being edited |
| typename | *string* | Read-only | The class name of the referenced Layer object |
| vectorMaskDensity | *number* | Read-write | The density of the vector mask, in percentage. |
| vectorMaskFeather | *number* | Read-write | The feather of the vector mask between 0.0 and 1000.0 |
| visible | *boolean* | Read-write | True when the layer is visible. |

## Methods

### applyAddNoise

**async** : *Promise*<void\>

Applies the Add Noise filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | *number* | Percentage of noise applied [0.1,400]. |
| `distribution` | [*NoiseDistribution*](/ps_reference/modules/constants/#noisedistribution) | Distribution method to use. |
| `monochromatic` | *boolean* | Adds black and white noise if true. |

___

### applyAverage

**async** : *Promise*<void\>

Applies the Average filter.

___

### applyBlur

**async** : *Promise*<void\>

Applies the Blur filter.

___

### applyBlurMore

**async** : *Promise*<void\>

Applies the Blur More filter.

___

### applyClouds

**async** : *Promise*<void\>

Applies the Clouds filter.

___

### applyCustomFilter

**async** : *Promise*<void\>

Applies the Custom filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `characteristics` | *number*[] | Square matrix (5 x 5) used to perform filter operation. |
| `scale` | *number* | The value by which to divide the sum of the pixel values included in the calculation |
| `offset` | *number* | The value to be added to the result of the scale calculation. |

___

### applyDeInterlace

**async** : *Promise*<void\>

Applies the De-Interlace filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eliminateFields` | [*EliminateFields*](/ps_reference/modules/constants/#eliminatefields) | Eliminate EVENFIELDS or ODDFIELDS field order. |
| `createFields` | [*CreateFields*](/ps_reference/modules/constants/#createfields) | Create fields by either DUPLICATION or INTERPOLATION. |

___

### applyDespeckle

**async** : *Promise*<void\>

Applies the Despeckle filter.

___

### applyDifferenceClouds

**async** : *Promise*<void\>

Applies the Difference Clouds filter.

___

### applyDiffuseGlow

**async** : *Promise*<void\>

Applies the Diffuse Glow filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `graininess` | *number* | The amount of grain [0,10]. |
| `glowAmount` | *number* | The glow amount [0,20]. |
| `clearAmount` | *number* | The clear amount [0,20]. |

___

### applyDisplace

**async** : *Promise*<void\>

Applies the Displace filter using the specified horizontal
and vertical scale, mapping type, treatment of undistorted
areas, and path to the distortion image map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `horizontalScale` | *number* | How much to scale in the direction of width [-999,999]. |
| `verticalScale` | *number* | How much to scale in the direction of height [-999,999]. |
| `displacementType` | [*DisplacementMapType*](/ps_reference/modules/constants/#displacementmaptype) | Describes how the displacement map fits the image if the image is not the same size as the map. |
| `undefinedAreas` | [*UndefinedAreas*](/ps_reference/modules/constants/#undefinedareas) | The method used to treat undistorted areas or areas left blank in an image to which the filter in the Distor category has been applied. |
| `displacementMapFile` | *string* | Path to the distortion image map. |

___

### applyDustAndScratches

**async** : *Promise*<void\>

Applies the Dust & Scratches filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The radius of the filter in pixels [1,100]. |
| `threshold` | *number* | The lower the amount, the stronger the effect [0,255]. |

___

### applyGaussianBlur

**async** : *Promise*<void\>

Applies the Gaussian Blur filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The radius of the filter in pixels [0.1,250]. |

___

### applyGlassEffect

**async** : *Promise*<void\>

Applies the Glass filter.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `distortion` | *number* | - | Change the amount the glass distorts the image [0,20]. |
| `smoothness` | *number* | - | Change the smoothness of the glass [1,15]. |
| `scaling` | *number* | - | The percentage value to scale by [50,200]. |
| `invert` | *boolean* | false | Invert the glass (default: false). |
| `texture` | [*TextureType*](/ps_reference/modules/constants/#texturetype) | - | They type of glass texture (default: TextureType.CANVAS). |
| `textureFile?` | *string* | - | Mapping for glass distortion (optional). |

___

### applyHighPass

**async** : *Promise*<void\>

Applies the High Pass filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The width of high pass filter (pixels) [0.1,1000]. |

___

### applyLensBlur

**async** : *Promise*<void\>

Applies the Lens Blur filter.

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

**async** : *Promise*<void\>

Applies the Lens Flare filter.

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

*Promise*<void\>

Applies the Maximum filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The radius of the filter in pixels.<br/>               Integer in the range [1,500] when using `SQUARENESS`.<br/>               Float in the range [0.2,500] when using `ROUNDNESS`.<br/> |
| `preserveShape` | [*PreserveShape*](/ps_reference/modules/constants/#preserveshape) | Favor hard corners or smooth curves around the edges<br/>                      (default: `PreserveShape.SQUARENESS`) |

___

### applyMedianNoise

*Promise*<void\>

Applies the Median filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The radius of the filter in pixels [1,500] |

___

### applyMinimum

*Promise*<void\>

Applies the Minimum filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | *number* | The radius of the filter in pixels.<br/>               Integer in the range [1,500] when using `SQUARENESS`.<br/>               Float in the range [0.2,500] when using `ROUNDNESS`.<br/> |
| `preserveShape` | [*PreserveShape*](/ps_reference/modules/constants/#preserveshape) | Favor hard corners or smooth curves around the edges<br/>                      (default: `PreserveShape.SQUARENESS`) |

___

### applyMotionBlur

*Promise*<void\>

Applies the Motion Blur filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | *number* | The angle the blur effect will be applied at (degrees) [-360,360] |
| `distance` | *number* | The amount of blur [1,2000] |

___

### applyNTSC

*Promise*<void\>

Applies the NTSC Colors filter

___

### applyOceanRipple

*Promise*<void\>

Applies the Ocean Ripple filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | *number* | The Ripple size [1,15] |
| `magnitude` | *number* | The Ripple magnitude [1,20] |

___

### applyOffset

*Promise*<void\>

Applies the Offset filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `horizontal` | *number* | The horizontal offset [-2 \* doc.width, 2 \* doc.width] |
| `vertical` | *number* | The vertical offset [-2 \* doc.height, 2 \* doc.height] |
| `undefinedAreas` | [*OffsetUndefinedAreas*](/ps_reference/modules/constants/#offsetundefinedareas) | Method to use to fill the empty space left by the offset<br/>                       (default: `OffsetUndefinedAreas.WRAPAROUND`). |

___

### applyPinch

**async** : *Promise*<void\>

Applies the pinch filter.

Unsupported color modes: Bitmap, Indexed Color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | *number* | The pinch amount. Negative value creates effect of expansion and positive creates effect of contraction. [-100,100] |

___

### applyPolarCoordinates

**async** : *Promise*<void\>

Applies the polar coordinates filter.

Unsupported color modes: Bitmap, Indexed Color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conversion` | [*PolarConversionType*](/ps_reference/modules/constants/#polarconversiontype) | The conversion type. |

___

### applyRipple

**async** : *Promise*<void\>

Applies the ripple filter.

Unsupported color modes: Bitmap, Indexed Color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | *number* | The ripple amount. [-999,999] |
| `size` | [*RippleSize*](/ps_reference/modules/constants/#ripplesize) | The ripple size. |

___

### applySharpen

**async** : *Promise*<void\>

Applies the sharpen filter.

Unsupported color modes: Bitmap, Indexed Color

___

### applySharpenEdges

**async** : *Promise*<void\>

Applies the sharpen edges filter.

Unsupported color modes: Bitmap, Indexed Color

___

### applySharpenMore

**async** : *Promise*<void\>

Applies the sharpen more filter.

Unsupported color modes: Bitmap, Indexed Color

___

### applyShear

**async** : *Promise*<void\>

Applies the the shear filter.

Unsupported color modes: Bitmap, Indexed Color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `curve` | { `x`: *number* ; `y`: *number*  }[] | Specification of the shear curve in points as coordinates object with x, y properties e.g.in the format [{x:-20, y:1}, {x:30, y:128}]. Any number higher than 2 of coordinate objects can be specified. For "x" coordinate it is recommended to use range [-63,64] and for "y" coordinate use range [1,128]. For bests results please make sure that first point has 0 at "y" axis and last point has 128 at "y" axis. Also sort points by "y" value in ascending order. Follow these rules to ensure that curve will be shown correctly in dialog UI. |
| `undefinedArea` | [*UndefinedAreas*](/ps_reference/modules/constants/#undefinedareas) | The treatment of areas left blank by the distortion. |

___

### applyTwirl

**async** : *Promise*<void\>

Applies the Twirl filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | *number* | The amount of twirl to apply (degrees) [-999,999] |

___

### bringToFront

*void*

Moves the layer to a position above the topmost layer or group.

___

### clear

**async** : *Promise*<void\>

Clears the layer pixels and does not copy to the clipboard.
If no pixel selection is found, select all pixels and clear.

___

### copy

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

**async** : *Promise*<void\>

Cuts the layer to the clipboard. If no selection is found then select all the pixels and then cut.

___

### delete

*void*

Deletes this layer from the document.
```javascript
const layers = document.layers
layers && layers[0] && layers[0].delete()
```

___

### duplicate

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

**async** : *Promise*<void\>

Flips the layer on one or both axis.

```javascript
// flip horizontally
await layer.flip.horizontal()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | ``"horizontal"`` \| ``"vertical"`` \| ``"both"`` | Which axis (or both) to flip the layer on.             - "horizontal": flip layer on horizontal axis             - "vertical": flip layer on vertical axis             - "both": flip layer on both axes |

___

### link

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

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Merges layers. This operates on the currently selected layers. If multiple
layers are selected, they will be merged together. If one layer is selected,
it is merged down with the layer beneath. In this case, the layer below must
be a pixel layer. The merged layer will now be the active layer.

___

### move

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

**async** : *Promise*<void\>

Converts the targeted contents in the layer into a flat, raster image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [*RasterizeType*](/ps_reference/modules/constants/#rasterizetype) |

___

### rotate

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
| `options.interpolation?` | [*ResampleMethod*](/ps_reference/modules/constants/#resamplemethod) | Interpolation method to use when resampling the image |

___

### scale

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
| `options.interpolation?` | [*ResampleMethod*](/ps_reference/modules/constants/#resamplemethod) | Interpolation method to use when resampling the image |

___

### sendToBack

*void*

Moves the layer to the bottom. If the bottom layer is the
background, it will move the layer to the position above the background.
If it is in a group, it will move to the bottom of the group.

___

### skew

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
| `options.interpolation?` | [*ResampleMethod*](/ps_reference/modules/constants/#resamplemethod) | - |

___

### translate

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

**async** : *Promise*<void\>

Unlinks the layer from any existing links.
```javascript
// detach layer from any existing links
await layer.unlink()
```
