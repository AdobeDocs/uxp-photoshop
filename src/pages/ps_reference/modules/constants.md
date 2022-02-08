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

### OperatingSystem

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

The type of a [PathItem](/ps_reference/classes/pathitem/)

| Name | Description |
| :------ | :------ |
| CLIPPINGPATH | - |
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
