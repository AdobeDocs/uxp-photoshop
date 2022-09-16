---
id: "constants"
title: "Constants"
sidebar_label: "Constants"
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

# Constants

## Enumerations

### AnchorPosition

The point around which to transform an object.

This is the point that does not move when an object is rotated or resized

| Name | Description |
| :------ | :------ |
| BOTTOMCENTER | - |
| BOTTOMLEFT | - |
| BOTTOMRIGHT | - |
| MIDDLECENTER | - |
| MIDDLELEFT | - |
| MIDDLERIGHT | - |
| TOPCENTER | - |
| TOPLEFT | - |
| TOPRIGHT | - |

___

### BMPDepthType

Number of bits per channel (also called pixel depth or color depth).

The number selected indicates the exponent of 2.

| Name | Description |
| :------ | :------ |
| EIGHT | - |
| FOUR | - |
| ONE | - |
| SIXTEEN | - |
| THIRTYTWO | - |
| TWENTYFOUR | - |

___

### BitmapConversionType

Specifies the quality of an image you are converting to bitmap mode. Used in [BitmapConversionOptions](/ps_reference/objects/conversionoptions/bitmapconversionoptions/)

| Name | Description |
| :------ | :------ |
| CUSTOMPATTERN | - |
| DIFFUSIONDITHER | - |
| HALFTHRESHOLD | - |
| HALFTONESCREEN | - |
| PATTERNDITHER | - |

___

### BitmapHalfToneType

Specifies the shape of the dots (ink deposits) in the halftone screen. Used in [BitmapConversionOptions](/ps_reference/objects/conversionoptions/bitmapconversionoptions/)

| Name | Description |
| :------ | :------ |
| CROSS | - |
| DIAMOND | - |
| ELLIPSE | - |
| LINE | - |
| ROUND | - |
| SQUARE | - |

___

### BitsPerChannelType

The number of bits per color channel.

| Name | Description |
| :------ | :------ |
| EIGHT | - |
| ONE | - |
| SIXTEEN | - |
| THIRTYTWO | - |

___

### BlendMode

Blending mode

| Name | Description |
| :------ | :------ |
| COLOR | - |
| COLORBURN | - |
| COLORDODGE | - |
| DARKEN | - |
| DARKERCOLOR | - |
| DIFFERENCE | - |
| DISSOLVE | - |
| DIVIDE | - |
| EXCLUSION | - |
| HARDLIGHT | - |
| HARDMIX | - |
| HUE | - |
| LIGHTEN | - |
| LIGHTERCOLOR | - |
| LINEARBURN | - |
| LINEARDODGE | - |
| LINEARLIGHT | - |
| LUMINOSITY | - |
| MULTIPLY | - |
| NORMAL | - |
| OVERLAY | - |
| PASSTHROUGH | - |
| PINLIGHT | - |
| SATURATION | - |
| SCREEN | - |
| SOFTLIGHT | - |
| SUBTRACT | - |
| VIVIDLIGHT | - |

___

### ChangeMode

The new color profile or mode for a document, specified in [Document.changeMode](/ps_reference/classes/document/#changemode)

NOTE: Color images must be changed to GRAYSCALE mode before you can change them to BITMAP mode.

| Name | Description |
| :------ | :------ |
| BITMAP | - |
| CMYK | - |
| GRAYSCALE | - |
| INDEXEDCOLOR | - |
| LAB | - |
| MULTICHANNEL | - |
| RGB | - |

___

### ChannelType

The type of a color channel.

| Name | Description |
| :------ | :------ |
| COMPONENT | Specific to document color mode |
| MASKEDAREA | Alpha channel where color indicates masked area |
| SELECTEDAREA | Alpha channel where color indicates selected area |
| SPOTCOLOR | Alpha channel to store a spot color |

___

### ColorBlendMode

The way color should be blended in a fill or stroke operation.
Pass to [PathItem.fillPath](/ps_reference/classes/pathitem/#fillpath)()

| Name | Description |
| :------ | :------ |
| BEHIND | - |
| CLEAR | - |
| COLOR | - |
| COLORBURN | - |
| COLORDODGE | - |
| DARKEN | - |
| DARKERCOLOR | - |
| DIFFERENCE | - |
| DISSOLVE | - |
| EXCLUSION | - |
| HARDLIGHT | - |
| HARDMIXBLEND | - |
| HUE | - |
| LIGHTEN | - |
| LIGHTERCOLOR | - |
| LINEARBURN | - |
| LINEARDODGE | - |
| LINEARLIGHT | - |
| LUMINOSITY | - |
| MULTIPLY | - |
| NORMAL | - |
| OVERLAY | - |
| PINLIGHT | - |
| SATURATION | - |
| SCREEN | - |
| SOFTLIGHT | - |
| VIVIDLIGHT | - |

___

### ColorModel

The color model representing the current color space
of a [SolidColor](/ps_reference/classes/solidcolor/) object.

| Name | Description |
| :------ | :------ |
| CMYK | - |
| GRAYSCALE | - |
| HSB | - |
| LAB | - |
| NONE | - |
| RGB | - |

___

### ColorProfileType

Type of color profile used to manage a document, used in [Document.colorProfileType](/ps_reference/classes/document/#colorprofiletype)

| Name | Description |
| :------ | :------ |
| CUSTOM | Set for all custom profiles |
| NONE | Set when document is not color managed |
| WORKING | Set when document uses the working color profile |

___

### CreateFields

The method used for creating fields. Pass to [Layer.applyDeInterlace](/ps_reference/classes/layer/#applydeinterlace).

| Name | Description |
| :------ | :------ |
| DUPLICATION | - |
| INTERPOLATION | - |

___

### DepthMapSource

The source to use for the depth map. Pass to
[Layer.applyLensBlur](/ps_reference/classes/layer/#applylensblur)().

| Name | Description |
| :------ | :------ |
| IMAGEHIGHLIGHT | - |
| LAYERMASK | - |
| NONE | - |
| TRANSPARENCYCHANNEL | - |

___

### DialogModes

| Name | Description |
| :------ | :------ |
| ALL | All dialogs will be shown |
| ERROR | Dialogs will be shown only if Photoshop raises an error |
| NONE | All dialogs will be hidden, and bad calls will silently fail |

___

### Direction

Used in multiple places to represent orientation.

Orientation of a guide in [Guide.direction](/ps_reference/classes/guide/#direction)

| Name | Description |
| :------ | :------ |
| HORIZONTAL | - |
| VERTICAL | - |

___

### DisplacementMapType

| Name | Description |
| :------ | :------ |
| STRETCHTOFIT | - |
| TILE | - |

___

### Dither

The type of dithering

| Name | Description |
| :------ | :------ |
| DIFFUSION | - |
| NOISE | - |
| NONE | - |
| PATTERN | - |

___

### DocumentFill

Fill methods available for the new document background

| Name | Description |
| :------ | :------ |
| BACKGROUNDCOLOR | - |
| BLACK | - |
| COLOR | - |
| TRANSPARENT | - |
| WHITE | - |

___

### DocumentMode

Color mode of an open document. See also [Document.mode](/ps_reference/classes/document/#mode) and [Document.changeMode](/ps_reference/classes/document/#changemode)

| Name | Description |
| :------ | :------ |
| BITMAP | - |
| CMYK | - |
| DUOTONE | - |
| GRAYSCALE | - |
| INDEXEDCOLOR | - |
| LAB | - |
| MULTICHANNEL | - |
| RGB | - |

___

### ElementPlacement

Placement modes for Layer.move method

| Name | Description |
| :------ | :------ |
| PLACEAFTER | Place below a layer, below group if group layer |
| PLACEATBEGINNING | Place at the top |
| PLACEATEND | Place at the bottom, above background if background layer exists |
| PLACEBEFORE | Place above a layer, above group if group layer |
| PLACEINSIDE | Place inside a group layer, throws error if not group layer |

___

### EliminateFields

The type of field to eliminate. Pass to [Layer.applyDeInterlace](/ps_reference/classes/layer/#applydeinterlace).

| Name | Description |
| :------ | :------ |
| EVENFIELDS | - |
| ODDFIELDS | - |

___

### ForcedColors

The type of colors to be included the color
table regardless of their usage

| Name | Description |
| :------ | :------ |
| BLACKANDWHITE | Pure black and pure white |
| NONE | None |
| PRIMARIES | Red, green, blue, cyan, magenta, yellow, black, and white. |
| WEB | The 216 web-safe colors |

___

### Geometry

Geometric options for shapes, such as the iris shape in the
Lens Blur filter. Pass to [Layer.applyLensBlur](/ps_reference/classes/layer/#applylensblur)().

| Name | Description |
| :------ | :------ |
| HEPTAGON | - |
| HEXAGON | - |
| OCTAGON | - |
| PENTAGON | - |
| SQUARE | - |
| TRIANGLE | - |

___

### Intent

The rendering intent to use when converting from one color space to another with
[Document.convertProfile](/ps_reference/classes/document/#convertprofile)

| Name | Description |
| :------ | :------ |
| ABSOLUTECOLORIMETRIC | - |
| PERCEPTUAL | - |
| RELATIVECOLORIMETRIC | - |
| SATURATION | - |

___

### JPEGFormatOptions

The option with which to save a JPEG file.

| Name | Description |
| :------ | :------ |
| OPTIMIZEDBASELINE | Optimized color and a slightly reduced file size. |
| PROGRESSIVE | Displays a series of increasing detailed scans as the image downloads. |
| STANDARDBASELINE | Format recognized by most web browsers. |

___

### LabelColors

Options for layer list label colors

| Name | Description |
| :------ | :------ |
| BLUE | - |
| GRAY | - |
| GREEN | - |
| ORANGE | - |
| RED | - |
| VIOLET | - |
| YELLOW | - |

___

### LayerKind

Kinds of different layers in a document

| Name | Description |
| :------ | :------ |
| BLACKANDWHITE | - |
| BRIGHTNESSCONTRAST | - |
| CHANNELMIXER | - |
| COLORBALANCE | - |
| COLORLOOKUP | - |
| CURVES | - |
| EXPOSURE | - |
| GRADIENTFILL | - |
| GRADIENTMAP | - |
| GROUP | - |
| HUESATURATION | - |
| INVERSION | - |
| LAYER3D | - |
| LEVELS | - |
| NORMAL | - |
| PATTERNFILL | - |
| PHOTOFILTER | - |
| POSTERIZE | - |
| SELECTIVECOLOR | - |
| SMARTOBJECT | - |
| SOLIDFILL | - |
| TEXT | - |
| THRESHOLD | - |
| VIBRANCE | - |
| VIDEO | - |

___

### LensType

The type of Lens to use. Pass to [Layer.applyLensFlare](/ps_reference/classes/layer/#applylensflare)().

| Name | Description |
| :------ | :------ |
| MOVIEPRIME | - |
| PRIME105 | - |
| PRIME35 | - |
| ZOOMLENS | - |

___

### MatteColor

The color to use to fill anti-aliased edges
adjacent to transparent areas of the image.
When transparency is turned off for an image,
the matte color is applied to transparent areas.

| Name | Description |
| :------ | :------ |
| BACKGROUND | - |
| BLACK | - |
| FOREGROUND | - |
| NETSCAPE | - |
| SEMIGRAY | - |
| WHITE | - |

___

### NewDocumentMode

Color Modes available for new document

| Name | Description |
| :------ | :------ |
| BITMAP | - |
| CMYK | - |
| GRAYSCALE | - |
| LAB | - |
| RGB | - |

___

### NoiseDistribution

Distribution model to use when applying an Add Noise filter. Pass to [Layer.applyAddNoise](/ps_reference/classes/layer/#applyaddnoise).

| Name | Description |
| :------ | :------ |
| GAUSSIAN | - |
| UNIFORM | - |

___

### OffsetUndefinedAreas

Method to use to fill the empty space left by offsetting an image or selection.
Pass to [Layer.applyOffset](/ps_reference/classes/layer/#applyoffset)()

| Name | Description |
| :------ | :------ |
| REPEATEDGEPIXELS | - |
| SETTOBACKGROUND | - |
| WRAPAROUND | - |

___

### OperatingSystem

The target operating system in [BMPSaveOptions](/ps_reference/objects/conversionoptions/bmpsaveoptions/).

| Name | Description |
| :------ | :------ |
| OS2 | - |
| WINDOWS | - |

___

### PNGMethod

Compression method for saving a PNG file

| Name | Description |
| :------ | :------ |
| MODERATE | - |
| QUICK | - |
| THOROUGH | - |

___

### Palette

The palette type to use

| Name | Description |
| :------ | :------ |
| EXACT | - |
| LOCALADAPTIVE | - |
| LOCALPERCEPTUAL | - |
| LOCALSELECTIVE | - |
| MACOSPALETTE | - |
| MASTERADAPTIVE | - |
| MASTERPERCEPTUAL | - |
| MASTERSELECTIVE | - |
| PREVIOUSPALETTE | - |
| UNIFORM | - |
| WEBPALETTE | - |
| WINDOWSPALETTE | - |

___

### PathKind

 * The type of a [PathItem](/ps_reference/classes/pathitem/)

| Name | Description |
| :------ | :------ |
| CLIPPINGPATH | - |
| DUPLICATE | - |
| INTERPOLATE | - |
| NORMALPATH | - |
| TEXTMASK | - |
| VECTORMASK | - |
| WORKPATH | - |

___

### PointKind

The role a [PathPoint](/ps_reference/classes/pathpoint/) plays in a [PathItem](/ps_reference/classes/pathitem/)

| Name | Description |
| :------ | :------ |
| CORNERPOINT | - |
| SMOOTHPOINT | - |

___

### PolarConversionType

The kind of polar conversion.
Pass to [Layer.applyPolarCoordinates](/ps_reference/classes/layer/#applypolarcoordinates)().

| Name | Description |
| :------ | :------ |
| POLARTORECTANGULAR | The distortion applied will take the input pixel grid as polar coordinates and convert them to rectangular coordinates. |
| RECTANGULARTOPOLAR | The distortion applied will take the input pixel grid as rectangular coordinates and convert them to polar coordinates. |

___

### PreserveShape

Favor the promotion of either corners or curves.
Pass to [Layer.applyMaximum](/ps_reference/classes/layer/#applymaximum)() and [Layer.applyMinimum](/ps_reference/classes/layer/#applyminimum)().

| Name | Description |
| :------ | :------ |
| ROUNDNESS | - |
| SQUARENESS | - |

___

### RasterizeType

The type of layer to get rasterized.

| Name | Description |
| :------ | :------ |
| ENTIRELAYER | - |
| FILLCONTENT | - |
| LAYERCLIPPINGPATH | - |
| LAYERSTYLE | - |
| LINKEDLAYERS | - |
| PLACED | - |
| SHAPE | - |
| TEXTCONTENTS | - |
| VECTORMASK | - |
| VIDEO | - |

___

### ResampleMethod

The method to use for image interpolation

| Name | Description |
| :------ | :------ |
| AUTOMATIC | Choose best option automatically |
| BICUBIC | Bicubic interpolation |
| BICUBICSHARPER | Apply a sharpening mask |
| BICUBICSMOOTHER | Apply a smoothing mask |
| BILINEAR | Bilinear interpolate |
| DEEPUPSCALE | Using deep learning, predict what the picture will look like larger |
| NEARESTNEIGHBOR | Determine value based on nearest neighbor |
| NONE | Duplicates pixels |
| PRESERVEDETAILS | Attempt to preserve details by using machine learning |

___

### RippleSize

The size of undulations.
Pass to [Layer.applyRipple](/ps_reference/classes/layer/#applyripple)().

| Name | Description |
| :------ | :------ |
| LARGE | - |
| MEDIUM | - |
| SMALL | - |

___

### SampleSize

Sample size for the EyeDropper tool and ColorSampler instances.

| Name | Description |
| :------ | :------ |
| POINTSAMPLE | - |
| SAMPLE101X101 | - |
| SAMPLE11X11 | - |
| SAMPLE31X31 | - |
| SAMPLE3X3 | - |
| SAMPLE51X51 | - |
| SAMPLE5X5 | - |

___

### SaveMethod

| Name | Description |
| :------ | :------ |
| SAVE | Saves the current document at the current format |
| SAVEAS | Changes the format of document, changing the file |
| SAVEASCOPY | Creates a copy of the document in the new format |

___

### SaveOptions

The policy for closing a document

| Name | Description |
| :------ | :------ |
| DONOTSAVECHANGES | Will close document without saving, discarding changes |
| PROMPTTOSAVECHANGES | Will ask the user if they&#x27;d like to save changes, blocking the script |
| SAVECHANGES | Will save all existing changes before closing, prompting if document is not saved yet |

___

### SelectionType

The selection behavior when a selection already exists.
Used in [PathItem.makeSelection](/ps_reference/classes/pathitem/#makeselection)()

| Name | Description |
| :------ | :------ |
| DIMINISH | Remove the selection from the already selected area |
| EXTEND | Add the selection to an already selected area |
| INTERSECT | Make the selection only the area where the new selection intersectes the already selected area |
| REPLACE | Replace the selected area |

___

### ShapeOperation

How to combine the shapes if the destination path already has a selection.

Set for [SubPathInfo.operation](/ps_reference/classes/subpathinfo/#operation), stored in the resulting [SubPathItem](/ps_reference/classes/subpathitem/)

| Name | Description |
| :------ | :------ |
| SHAPEADD | - |
| SHAPEINTERSECT | - |
| SHAPESUBTRACT | - |
| SHAPEXOR | - |

___

### SmartBlurMode

The method to use for smart blurring.
Pass to [Layer.applySmartBlur](/ps_reference/classes/layer/#applysmartblur)().

| Name | Description |
| :------ | :------ |
| EDGEONLY | - |
| NORMAL | - |
| OVERLAYEDGE | - |

___

### SmartBlurQuality

The smart blur quality.
Pass to [Layer.applySmartBlur](/ps_reference/classes/layer/#applysmartblur)().

| Name | Description |
| :------ | :------ |
| HIGH | - |
| LOW | - |
| MEDIUM | - |

___

### SpherizeMode

The curve (or stretch shape) to use for the distortion.
Pass to [Layer.applySpherize](/ps_reference/classes/layer/#applyspherize)().

| Name | Description |
| :------ | :------ |
| HORIZONTAL | - |
| NORMAL | - |
| VERTICAL | - |

___

### TextureType

The type of texture or glass surface image to load for a texturizer
or glass filter. Pass to [Layer.applyGlassEffect](/ps_reference/classes/layer/#applyglasseffect)().

| Name | Description |
| :------ | :------ |
| BLOCKS | - |
| CANVAS | - |
| FROSTED | - |
| TINYLENS | - |

___

### ToolType

The tool to use with [PathItem.strokePath](/ps_reference/classes/pathitem/#strokepath)()

| Name | Description |
| :------ | :------ |
| ARTHISTORYBRUSH | - |
| BACKGROUNDERASER | - |
| BLUR | - |
| BRUSH | - |
| BURN | - |
| CLONESTAMP | - |
| COLORREPLACEMENTTOOL | - |
| DODGE | - |
| ERASER | - |
| HEALINGBRUSH | - |
| HISTORYBRUSH | - |
| PATTERNSTAMP | - |
| PENCIL | - |
| SHARPEN | - |
| SMUDGE | - |
| SPONGE | - |

___

### TrimType

Type of pixels to trim around an image, passed to [Document.trim](/ps_reference/classes/document/#trim).

| Name | Description |
| :------ | :------ |
| BOTTOMRIGHT | Bottom right pixel color. |
| TOPLEFT | Top left pixel color. |
| TRANSPARENT | Transparent pixels. |

___

### UndefinedAreas

How to treat undistorted areas or areas left blank in an image
to which a filter in the Distort category has been applied. Pass
to [Layer.applyDisplace](/ps_reference/classes/layer/#applydisplace)(), [Layer.applyShear](/ps_reference/classes/layer/#applyshear)(), [Layer.applyWave](/ps_reference/classes/layer/#applywave)()

| Name | Description |
| :------ | :------ |
| REPEATEDGEPIXELS | - |
| WRAPAROUND | - |

___

### Units

Valid Units for convertUnits method, used in [Photoshop.convertUnits](/ps_reference/classes/photoshop/#convertunits)

| Name | Description |
| :------ | :------ |
| CM | - |
| INCHES | - |
| MM | - |
| PICAS | - |
| PIXELS | - |
| POINTS | - |

___

### WaveType

The type of wave.
Pass to [Layer.applyWave](/ps_reference/classes/layer/#applywave)().

| Name | Description |
| :------ | :------ |
| SINE | - |
| SQUARE | - |
| TRIANGULAR | - |

___

### ZigZagType

The method of zigzagging.
Pass to [Layer.applyZigZag](/ps_reference/classes/layer/#applyzigzag)().

| Name | Description |
| :------ | :------ |
| AROUNDCENTER | - |
| OUTFROMCENTER | - |
| PONDRIPPLES | - |
