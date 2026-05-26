---
id: "constants"
title: Constants
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
description: To use any constant, import the constants object from the photoshop module first.
---

# Constants

To use any constant, import the `constants` object from the photoshop module first.

```javascript
const {app, constants} = require("photoshop");

await app.activeDocument.resizeImage(
    800, 600, 100,
    constants.InterpolationMethod.AUTOMATIC
);
```

## Enumerations

### AnchorPosition
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
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

<HorizontalLine />

### AntiAlias
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
Method to use to smooth edges by softening the color transition between edge pixels
and the background. Used in a [CharacterStyle.antiAliasMethod](/ps-reference/classes/characterstyle.md#antialiasmethod)

| Name | Description |
| :------ | :------ |
| CRISP | - |
| NONE | - |
| SHARP | - |
| SMOOTH | - |
| STRONG | - |

<HorizontalLine />

### ApplyImageBlendMode
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.5\</span\>

\<br/\>
The kind of blending used in a [Layer.applyImage](/ps-reference/classes/layer.md#applyimage) operation.

| Name | Description |
| :------ | :------ |
| ADD | - |
| COLORBURN | - |
| COLORDODGE | - |
| DARKEN | - |
| DARKERCOLOR | - |
| DIFFERENCE | - |
| DIVIDE | - |
| EXCLUSION | - |
| HARDLIGHT | - |
| HARDMIX | - |
| LIGHTEN | - |
| LIGHTERCOLOR | - |
| LINEARBURN | - |
| LINEARDODGE | - |
| LINEARLIGHT | - |
| MULTIPLY | - |
| NORMAL | - |
| OVERLAY | - |
| PINLIGHT | - |
| SCREEN | - |
| SOFTLIGHT | - |
| SUBTRACT | - |
| VIVIDLIGHT | - |

<HorizontalLine />

### ApplyImageChannel
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.5\</span\>

\<br/\>
Special channels used in [Layer.applyImage](/ps-reference/classes/layer.md#applyimage).

| Name | Description |
| :------ | :------ |
| CMYK | - |
| LAB | - |
| RGB | - |
| SELECTION | - |
| TRANSPARENCY | - |

<HorizontalLine />

### ApplyImageLayer
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.5\</span\>

\<br/\>
Use merged layers as a source in [Layer.applyImage](/ps-reference/classes/layer.md#applyimage).

| Name | Description |
| :------ | :------ |
| MERGED | - |

<HorizontalLine />

### AutoKernType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The type of kerning to use for characters. Used in [CharacterStyle.autoKerning](/ps-reference/classes/characterstyle.md#autokerning)

| Name | Description |
| :------ | :------ |
| MANUAL | - |
| METRICS | - |
| OPTICAL | - |

<HorizontalLine />

### BMPDepthType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Number of bits per channel (also called pixel depth or color depth).

The number selected indicates the exponent of 2. With 8 bits per channel, we have 256 possible colors.

| Name | Description |
| :------ | :------ |
| EIGHT | - |
| FOUR | - |
| ONE | - |
| SIXTEEN | - |
| THIRTYTWO | - |
| TWENTYFOUR | - |

<HorizontalLine />

### Baseline
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The baseline style to use in text. Used in [CharacterStyle.baseline](/ps-reference/classes/characterstyle.md#baseline)

| Name | Description |
| :------ | :------ |
| NORMAL | - |
| SUBSCRIPT | - |
| SUPERSCRIPT | - |

<HorizontalLine />

### BitmapConversionType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Specifies the quality of an image you are converting to bitmap mode. Used in [BitmapConversionOptions](/ps-reference/objects/conversionoptions/bitmapconversionoptions.md)

| Name | Description |
| :------ | :------ |
| CUSTOMPATTERN | - |
| DIFFUSIONDITHER | - |
| HALFTHRESHOLD | - |
| HALFTONESCREEN | - |
| PATTERNDITHER | - |

<HorizontalLine />

### BitmapHalfToneType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Specifies the shape of the dots (ink deposits) in the halftone screen. Used in [BitmapConversionOptions](/ps-reference/objects/conversionoptions/bitmapconversionoptions.md)

| Name | Description |
| :------ | :------ |
| CROSS | - |
| DIAMOND | - |
| ELLIPSE | - |
| LINE | - |
| ROUND | - |
| SQUARE | - |

<HorizontalLine />

### BitsPerChannelType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.0\</span\>

\<br/\>
The number of bits per color channel.

| Name | Description |
| :------ | :------ |
| EIGHT | - |
| ONE | - |
| SIXTEEN | - |
| THIRTYTWO | - |

<HorizontalLine />

### BlendMode
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
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

<HorizontalLine />

### CalculationsBlendMode
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.5\</span\>

\<br/\>
The kind of blending used in a [Document.calculations](/ps-reference/classes/document.md#calculations) operation.

| Name | Description |
| :------ | :------ |
| ADD | - |
| COLORBURN | - |
| COLORDODGE | - |
| DARKEN | - |
| DARKERCOLOR | - |
| DIFFERENCE | - |
| DIVIDE | - |
| EXCLUSION | - |
| HARDLIGHT | - |
| HARDMIX | - |
| LIGHTEN | - |
| LIGHTERCOLOR | - |
| LINEARBURN | - |
| LINEARDODGE | - |
| LINEARLIGHT | - |
| MULTIPLY | - |
| NORMAL | - |
| OVERLAY | - |
| PINLIGHT | - |
| SCREEN | - |
| SOFTLIGHT | - |
| SUBTRACT | - |
| VIVIDLIGHT | - |

<HorizontalLine />

### CalculationsChannel
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.5\</span\>

\<br/\>
Special channels used in [Document.calculations](/ps-reference/classes/document.md#calculations).

| Name | Description |
| :------ | :------ |
| GRAY | - |
| SELECTION | - |
| TRANSPARENCY | - |

<HorizontalLine />

### CalculationsLayer
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.5\</span\>

\<br/\>
Use merged layers as a source in [Document.calculations]].

| Name | Description |
| :------ | :------ |
| MERGED | - |

<HorizontalLine />

### CalculationsResult
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.5\</span\>

\<br/\>
The result of [Document.calculations](/ps-reference/classes/document.md#calculations) can go into a new document,
 a new channel in the active document, or a new selection in the active document.

| Name | Description |
| :------ | :------ |
| NEWCHANNEL | - |
| NEWDOCUMENT | - |
| SELECTION | - |

<HorizontalLine />

### ChangeMode
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
The new color profile or mode for a document, specified in [Document.changeMode](/ps-reference/classes/document.md#changemode)

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

<HorizontalLine />

### ChannelType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
The type of a color channel.

| Name | Description |
| :------ | :------ |
| COMPONENT | Specific to document color mode |
| MASKEDAREA | Alpha channel where color indicates masked area |
| SELECTEDAREA | Alpha channel where color indicates selected area |
| SPOTCOLOR | Alpha channel to store a spot color |

<HorizontalLine />

### CharacterAlignment
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The character alignment to use in text.
Used in [CharacterStyle.characterAlignment](/ps-reference/classes/characterstyle.md#characteralignment)

| Name | Description |
| :------ | :------ |
| EMBOXBOTTOMLEFT | - |
| EMBOXCENTER | - |
| EMBOXTOPRIGHT | - |
| ICFBOTTOMLEFT | - |
| ICFBOXTOPRIGHT | - |
| ROMAN | - |

<HorizontalLine />

### ColorBlendMode
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.3\</span\>

\<br/\>
The kind of blending used in a fill or stroke operation.
Pass to [PathItem.fillPath](/ps-reference/classes/pathitem.md#fillpath)()

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

<HorizontalLine />

### ColorModel
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
The color model representing the current color space
of a [SolidColor](/ps-reference/classes/solidcolor.md) object.

| Name | Description |
| :------ | :------ |
| CMYK | - |
| GRAYSCALE | - |
| HSB | - |
| LAB | - |
| NONE | - |
| RGB | - |

<HorizontalLine />

### ColorPicker
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The provider of the color picker dialog.
Pass to [PreferencesGeneral.colorPicker](/ps-reference/classes/preferences/preferencesgeneral.md#colorpicker)

| Name | Description |
| :------ | :------ |
| ADOBE | The Adobe Photoshop Color Picker. |
| OSNATIVE | The built-in Apple or Windows color picker. |
| PLUGIN | A plugin-provided color picker. The&#x60;pluginID&#x60; property must be provided in the [PreferencesGeneral.colorPicker](/ps-reference/classes/preferences/preferencesgeneral.md#colorpicker) argument object and must contain the internal ID of the plugin as a string. |

<HorizontalLine />

### ColorProfileType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Type of color profile used to manage a document, used in [Document.colorProfileType](/ps-reference/classes/document.md#colorprofiletype)

| Name | Description |
| :------ | :------ |
| CUSTOM | Set for all custom profiles |
| NONE | Set when document is not color managed |
| WORKING | Set when document uses the working color profile |

<HorizontalLine />

### CreateFields
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The method used for creating fields. Pass to [Layer.applyDeInterlace](/ps-reference/classes/layer.md#applydeinterlace).

| Name | Description |
| :------ | :------ |
| DUPLICATION | - |
| INTERPOLATION | - |

<HorizontalLine />

### DepthMapSource
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The source to use for the depth map. Pass to
[Layer.applyLensBlur](/ps-reference/classes/layer.md#applylensblur)().

| Name | Description |
| :------ | :------ |
| IMAGEHIGHLIGHT | - |
| LAYERMASK | - |
| NONE | - |
| TRANSPARENCYCHANNEL | - |

<HorizontalLine />

### DialogModes
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Controls the type of dialogs Photoshop displays
during API calls

| Name | Description |
| :------ | :------ |
| ALL | All dialogs will be shown |
| ERROR | Dialogs will be shown only if Photoshop raises an error |
| NONE | All dialogs will be hidden, and bad calls will silently fail |

<HorizontalLine />

### Direction
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Used in multiple places to represent orientation.

Orientation of a guide in [Guide.direction](/ps-reference/classes/guide.md#direction)

| Name | Description |
| :------ | :------ |
| HORIZONTAL | - |
| VERTICAL | - |

<HorizontalLine />

### DisplacementMapType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
Describes how the displacement map fits the
image if the image is not the same size as
the map. Pass to [Layer.applyDisplace](/ps-reference/classes/layer.md#applydisplace).

| Name | Description |
| :------ | :------ |
| STRETCHTOFIT | - |
| TILE | - |

<HorizontalLine />

### Dither
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
The type of dithering

| Name | Description |
| :------ | :------ |
| DIFFUSION | - |
| NOISE | - |
| NONE | - |
| PATTERN | - |

<HorizontalLine />

### DocumentFill
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Fill methods available for the new document background

| Name | Description |
| :------ | :------ |
| BACKGROUNDCOLOR | - |
| BLACK | - |
| COLOR | - |
| TRANSPARENT | - |
| WHITE | - |

<HorizontalLine />

### DocumentMode
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Color mode of an open document. See also [Document.mode](/ps-reference/classes/document.md#mode) and [Document.changeMode](/ps-reference/classes/document.md#changemode)

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

<HorizontalLine />

### EditLogItemsType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The history log edit options.
Pass to [PreferencesHistory.editLogItems](/ps-reference/classes/preferences/preferenceshistory.md#editlogitems)

| Name | Description |
| :------ | :------ |
| CONCISE | Includes the text that appears in the History panel in addition to the Sessions information. |
| DETAILED | Includes the text that appears in the Actions panel in addition to the Concise information. If you need a complete history of all changes made to files, choose Detailed. |
| SESSIONONLY | Keeps a record of each time you start or quit Photoshop and each time you open and close files (each image’s filename is included). Does not include any information about edits made to the file. |

<HorizontalLine />

### ElementPlacement
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Placement modes for Layer.move method

| Name | Description |
| :------ | :------ |
| PLACEAFTER | Place below a layer, below group if group layer |
| PLACEATBEGINNING | Place at the top |
| PLACEATEND | Place at the bottom, above background if background layer exists |
| PLACEBEFORE | Place above a layer, above group if group layer |
| PLACEINSIDE | Place inside a group layer, throws error if not group layer |

<HorizontalLine />

### EliminateFields
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The type of field to eliminate. Pass to [Layer.applyDeInterlace](/ps-reference/classes/layer.md#applydeinterlace).

| Name | Description |
| :------ | :------ |
| EVENFIELDS | - |
| ODDFIELDS | - |

<HorizontalLine />

### FlipAxis
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.0\</span\>

\<br/\>
Axis (or both) to flip a layer on.
Pass to [Layer.flip](/ps-reference/classes/layer.md#flip)().

| Name | Description |
| :------ | :------ |
| BOTH | - |
| HORIZONTAL | - |
| VERTICAL | - |

<HorizontalLine />

### FontSize
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
Font size in panels and dialogs.
Pass to [PreferencesInterface.textFontSize](/ps-reference/classes/preferences/preferencesinterface.md#textfontsize)

| Name | Description |
| :------ | :------ |
| LARGE | Large size. |
| MEDIUM | Medium size. |
| SMALL | Small size. |
| TINY | Tiny size. |

<HorizontalLine />

### ForcedColors
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
The type of colors to be included the color
table regardless of their usage

| Name | Description |
| :------ | :------ |
| BLACKANDWHITE | Pure black and pure white |
| NONE | None |
| PRIMARIES | Red, green, blue, cyan, magenta, yellow, black, and white. |
| WEB | The 216 web-safe colors |

<HorizontalLine />

### GenerativeUpscaleModel
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>27.2\</span\>

\<br/\>
The generative upscale model to use for AI-powered upscaling.

Pass to [Document.generativeUpscale](/ps-reference/classes/document.md#generativeupscale)()

| Name | Description |
| :------ | :------ |
| FIREFLY | Adobe Firefly generative upscale model |

<HorizontalLine />

### Geometry
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
Geometric options for shapes, such as the iris shape in the
Lens Blur filter. Pass to [Layer.applyLensBlur](/ps-reference/classes/layer.md#applylensblur)().

| Name | Description |
| :------ | :------ |
| HEPTAGON | - |
| HEXAGON | - |
| OCTAGON | - |
| PENTAGON | - |
| SQUARE | - |
| TRIANGLE | - |

<HorizontalLine />

### GridLineStyle
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The line style for nonprinting grids displayed over images.
Pass to [PreferencesGuidesGridsAndSlices.gridStyle](/ps-reference/classes/preferences/preferencesguidesgridsandslices.md#gridstyle)

| Name | Description |
| :------ | :------ |
| DASHED | - |
| DOTTED | - |
| SOLID | - |

<HorizontalLine />

### GridSize
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The size of grid squares.
Pass to [PreferencesTransparencyAndGamut.gridSize](/ps-reference/classes/preferences/preferencestransparencyandgamut.md#gridsize)

| Name | Description |
| :------ | :------ |
| LARGE | Large grid squares. |
| MEDIUM | Medium grid squares. |
| NONE | No grid is displayed. |
| SMALL | Small grid squares. |

<HorizontalLine />

### GuideLineStyle
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The line style for nonprinting guides displayed over images.
Pass to [PreferencesGuidesGridsAndSlices.guideStyle](/ps-reference/classes/preferences/preferencesguidesgridsandslices.md#guidestyle)

| Name | Description |
| :------ | :------ |
| DASHED | - |
| SOLID | - |

<HorizontalLine />

### Intent
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
The rendering intent to use when converting from one color space to another with
[Document.convertProfile](/ps-reference/classes/document.md#convertprofile)

| Name | Description |
| :------ | :------ |
| ABSOLUTECOLORIMETRIC | - |
| PERCEPTUAL | - |
| RELATIVECOLORIMETRIC | - |
| SATURATION | - |

<HorizontalLine />

### InterpolationMethod
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The method to use for bitmap interpolation.

Pass to
- [PreferencesGeneral.imageInterpolation](/ps-reference/classes/preferences/preferencesgeneral.md#imageinterpolation)
- [Layer.scale](/ps-reference/classes/layer.md#scale)()
- [Layer.skew](/ps-reference/classes/layer.md#skew)()
- [Layer.rotate](/ps-reference/classes/layer.md#rotate)()
- [Selection.resizeBoundary](/ps-reference/classes/selection.md#resizeboundary)()
- [Selection.rotateBoundary](/ps-reference/classes/selection.md#rotateboundary)()

| Name | Description |
| :------ | :------ |
| AUTOMATIC | Choose best bicubic option automatically |
| BICUBIC | Bicubic interpolation |
| BICUBICSHARPER | Apply a sharpening mask |
| BICUBICSMOOTHER | Apply a smoothing mask |
| BILINEAR | Bilinear interpolate |
| NEARESTNEIGHBOR | Determine value based on nearest neighbor |

<HorizontalLine />

### JPEGFormatOptions
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
The option with which to save a JPEG file.

| Name | Description |
| :------ | :------ |
| OPTIMIZEDBASELINE | Optimized color and a slightly reduced file size. |
| PROGRESSIVE | Displays a series of increasing detailed scans as the image downloads. |
| STANDARDBASELINE | Format recognized by most web browsers. |

<HorizontalLine />

### Justification
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The placement of paragraph text within the bounding box.
Used in [ParagraphStyle.justification](/ps-reference/classes/paragraphstyle.md#justification)

| Name | Description |
| :------ | :------ |
| CENTER | - |
| CENTERJUSTIFIED | - |
| FULLYJUSTIFIED | - |
| LEFT | - |
| LEFTJUSTIFIED | - |
| RIGHT | - |
| RIGHTJUSTIFIED | - |

<HorizontalLine />

### KashidaWidthType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The width of kashida (tatweel) character
Used in [ParagraphStyle.kashidaWidth](/ps-reference/classes/paragraphstyle.md#kashidawidth)

| Name | Description |
| :------ | :------ |
| LONG | - |
| MEDIUM | - |
| NONE | - |
| SHORT | - |
| STYLISTIC | - |

<HorizontalLine />

### Kinsoku
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
Line breaking rules in Japanese text
Used in [ParagraphStyle.kinsoku](/ps-reference/classes/paragraphstyle.md#kinsoku)

| Name | Description |
| :------ | :------ |
| JISMAXIMUM | - |
| JISWEAK | - |
| NONE | - |

<HorizontalLine />

### LabelColors
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Options for layer list label colors

| Name | Description |
| :------ | :------ |
| BLUE | - |
| GRAY | - |
| GREEN | - |
| NONE | - |
| ORANGE | - |
| RED | - |
| VIOLET | - |
| YELLOW | - |

<HorizontalLine />

### Language
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The language to use for text. Used in [CharacterStyle.language](/ps-reference/classes/characterstyle.md#language)

| Name | Description |
| :------ | :------ |
| ARABIC | - |
| BANGLAINDIA | - |
| BRAZILLIANPORTUGUESE | - |
| BULGARIAN | - |
| BURMESE | - |
| CANADIANFRENCH | - |
| CATALAN | - |
| CHINESE | - |
| CROATIAN | - |
| CZECH | - |
| DANISH | - |
| DUTCH | - |
| ENGLISHCANADA | - |
| ENGLISHUK | - |
| ENGLISHUSA | - |
| ESTONIAN | - |
| FINNISH | - |
| FRENCH | - |
| GERMAN | - |
| GERMAN1996 | - |
| GREEK | - |
| GUJARATI | - |
| HEBREW | - |
| HINDI | - |
| HUNGARIAN | - |
| ICELANDIC | - |
| INDONESIAN | - |
| ITALIAN | - |
| JAPANESE | - |
| KANNADA | - |
| KHMER | - |
| LAO | - |
| LATVIAN | - |
| LITHUANIAN | - |
| MALAYALAM | - |
| MARATHI | - |
| NORWEGIAN | - |
| NYNORSKNORWEGIAN | - |
| ODIA | - |
| OLDDUTCH | - |
| OLDGERMAN | - |
| OLDSWISSGERMAN | - |
| POLISH | - |
| PORTUGUESE | - |
| PUNJABI | - |
| ROMANIAN | - |
| RUSSIAN | - |
| SERBIAN | - |
| SINHALESE | - |
| SLOVAK | - |
| SLOVENIAN | - |
| SPANISH | - |
| SWEDISH | - |
| SWISSGERMAN | - |
| TAMIL | - |
| TELUGU | - |
| THAI | - |
| TURKISH | - |
| UKRAINIAN | - |

<HorizontalLine />

### LayerKind
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Kinds of document layers, including adjustment layers. Grain and Clarity are new in Photoshop 27.4.

| Name | Description |
| :------ | :------ |
| BLACKANDWHITE | Black &amp; White adjustment |
| BRIGHTNESSCONTRAST | Brightness/Contrast adjustment |
| CHANNELMIXER | Channel Mixer adjustment |
| CLARITY | Clarity and dehaze adjustment |
| COLORBALANCE | Color Balance adjustment |
| COLORLOOKUP | Color Lookup adjustment |
| CURVES | Curves adjustment |
| EXPOSURE | Exposure adjustment |
| GRADIENTFILL | Gradient |
| GRADIENTMAP | Gradient Map adjustment |
| GRAIN | Grain adjustment |
| GROUP | Layer group |
| HUESATURATION | Hue/Saturation adjustment |
| INVERSION | Invert adjustment |
| LAYER3D | 3D |
| LEVELS | Levels adjustment |
| NORMAL | Raster (pixel) |
| PATTERNFILL | Pattern |
| PHOTOFILTER | Photo Filter adjustment |
| POSTERIZE | Posterize adjustment |
| SELECTIVECOLOR | Selective Color adjustment |
| SMARTOBJECT | Smart object |
| SOLIDFILL | Solid Color |
| TEXT | Text |
| THRESHOLD | Threshold adjustment |
| VIBRANCE | Color and vibrance adjustment |
| VIDEO | Video |

<HorizontalLine />

### LensType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The type of Lens to use. Pass to [Layer.applyLensFlare](/ps-reference/classes/layer.md#applylensflare)().

| Name | Description |
| :------ | :------ |
| MOVIEPRIME | - |
| PRIME105 | - |
| PRIME35 | - |
| ZOOMLENS | - |

<HorizontalLine />

### MatteColor
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
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

<HorizontalLine />

### MaximizeCompatibility
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The permission state for queries.
Pass to [PreferencesFileHandling.maximizeCompatibility](/ps-reference/classes/preferences/preferencesfilehandling.md#maximizecompatibility)

| Name | Description |
| :------ | :------ |
| ALWAYS | Always maximize compatibility. |
| ASK | Always ask about maximize compatibility. |
| NEVER | Never ask about maximize compatibility. |

<HorizontalLine />

### MiddleEasternDigitsType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
Digit type to use in text (Middle Eastern features).
Used in [CharacterStyle.middleEasternDigitsType](/ps-reference/classes/characterstyle.md#middleeasterndigitstype)

| Name | Description |
| :------ | :------ |
| FARSI | - |
| HINDI | - |
| LTRARABIC | - |
| RTLARABIC | - |

<HorizontalLine />

### MiddleEasternTextDirection
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
Text flow direction (Middle Eastern features).
Used in [CharacterStyle.middleEasternTextDirection](/ps-reference/classes/characterstyle.md#middleeasterntextdirection)

| Name | Description |
| :------ | :------ |
| DEFAULT | - |
| LEFTTORIGHT | - |
| RIGHTTOLEFT | - |

<HorizontalLine />

### Mojikumi
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
Spacing between punctuation, symbols, numbers,
and other character classes in Japanese text
Used in [ParagraphStyle.mojikumi](/ps-reference/classes/paragraphstyle.md#mojikumi)

| Name | Description |
| :------ | :------ |
| NONE | - |
| SET1 | - |
| SET2 | - |
| SET3 | - |
| SET4 | - |

<HorizontalLine />

### NewDocumentMode
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Color Modes available for new document

| Name | Description |
| :------ | :------ |
| BITMAP | - |
| CMYK | - |
| GRAYSCALE | - |
| LAB | - |
| RGB | - |

<HorizontalLine />

### NoiseDistribution
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
Distribution model to use when applying an Add Noise filter. Pass to [Layer.applyAddNoise](/ps-reference/classes/layer.md#applyaddnoise).

| Name | Description |
| :------ | :------ |
| GAUSSIAN | - |
| UNIFORM | - |

<HorizontalLine />

### OffsetUndefinedAreas
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
Method to use to fill the empty space left by offsetting an image or selection.
Pass to [Layer.applyOffset](/ps-reference/classes/layer.md#applyoffset)()

| Name | Description |
| :------ | :------ |
| REPEATEDGEPIXELS | - |
| SETTOBACKGROUND | - |
| WRAPAROUND | - |

<HorizontalLine />

### OperatingSystem
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
The target operating system in [BMPSaveOptions](/ps-reference/objects/saveoptions/bmpsaveoptions.md).

| Name | Description |
| :------ | :------ |
| OS2 | - |
| WINDOWS | - |

<HorizontalLine />

### Orientation
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
Used in multiple places to represent orientation
e.g., [TextItem.orientation](/ps-reference/classes/textitem.md#orientation)

| Name | Description |
| :------ | :------ |
| HORIZONTAL | - |
| VERTICAL | - |

<HorizontalLine />

### OtherCursors
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The style of the cursors for the following tools: Marquee, Lasso, Polygonal Lasso, Magic Wand, Crop, Slice,
Patch Eyedropper, Pen, Gradient, Line, Paint Bucket, Magnetic Lasso, Magnetic Pen, Freeform Pen,
Measure, and Color Sampler.
Pass to [PreferencesCursors.otherCursors](/ps-reference/classes/preferences/preferencescursors.md#othercursors)

| Name | Description |
| :------ | :------ |
| PRECISE | Use crosshair cursors for tools. |
| STANDARD | Use small iconic cursors for tools. |

<HorizontalLine />

### PNGMethod
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
Compression method for saving a PNG file

| Name | Description |
| :------ | :------ |
| MODERATE | - |
| QUICK | - |
| THOROUGH | - |

<HorizontalLine />

### PaintingCursors
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The style of the cursors for the following tools: Eraser, Pencil, Paintbrush, Healing Brush,
Rubber Stamp, Pattern Stamp, Smudge, Blur, Sharpen, Dodge, Burn, Sponge.
Pass to [PreferencesCursors.paintingCursors](/ps-reference/classes/preferences/preferencescursors.md#paintingcursors)

| Name | Description |
| :------ | :------ |
| BRUSHSIZE | Displays cursors as brush shapes representing the size of the current brush where boundaries have 50% brush opacity |
| FULLSIZE | Use the full size of the brush regardless of brush opacity |
| PRECISE | Use crosshair cursors when painting. |
| STANDARD | Use small iconic cursors when painting. |

<HorizontalLine />

### Palette
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
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

<HorizontalLine />

### ParagraphFeatures
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The paragraph features to use in text.
Used in [ParagraphStyle.features](/ps-reference/classes/paragraphstyle.md#features)

| Name | Description |
| :------ | :------ |
| DEFAULT | - |
| EASTASIAN | - |
| MIDDLEASTERN | - |

<HorizontalLine />

### ParagraphLayout
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The paragraph layout to use in text.
Used in [ParagraphStyle.layoutMode](/ps-reference/classes/paragraphstyle.md#layoutmode)

| Name | Description |
| :------ | :------ |
| LATINEASTASIAN | - |
| WORLDREADY | - |

<HorizontalLine />

### PathKind
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The type of a [PathItem](/ps-reference/classes/pathitem.md)

| Name | Description |
| :------ | :------ |
| CLIPPINGPATH | - |
| DUPLICATE | - |
| INTERPOLATE | - |
| NORMALPATH | - |
| TEXTMASK | - |
| VECTORMASK | - |
| WORKPATH | - |

<HorizontalLine />

### PointKind
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.3\</span\>

\<br/\>
The role a [PathPoint](/ps-reference/classes/pathpoint.md) plays in a [PathItem](/ps-reference/classes/pathitem.md)

| Name | Description |
| :------ | :------ |
| CORNERPOINT | - |
| SMOOTHPOINT | - |

<HorizontalLine />

### PointType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The point/pica size: either 72 or 72.27 points per inch.
Pass to [PreferencesUnitsAndRulers.pointSize](/ps-reference/classes/preferences/preferencesunitsandrulers.md#pointsize)

| Name | Description |
| :------ | :------ |
| POSTSCRIPT | 72 points per inch. |
| TRADITIONAL | 72.27 points per inch. |

<HorizontalLine />

### PolarConversionType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The kind of polar conversion.
Pass to [Layer.applyPolarCoordinates](/ps-reference/classes/layer.md#applypolarcoordinates)().

| Name | Description |
| :------ | :------ |
| POLARTORECTANGULAR | The distortion applied will take the input pixel grid as polar coordinates and convert them to rectangular coordinates. |
| RECTANGULARTOPOLAR | The distortion applied will take the input pixel grid as rectangular coordinates and convert them to polar coordinates. |

<HorizontalLine />

### PreserveShape
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
Favor the promotion of either corners or curves.
Pass to [Layer.applyMaximum](/ps-reference/classes/layer.md#applymaximum)() and [Layer.applyMinimum](/ps-reference/classes/layer.md#applyminimum)().

| Name | Description |
| :------ | :------ |
| ROUNDNESS | - |
| SQUARENESS | - |

<HorizontalLine />

### RasterizeType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
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

<HorizontalLine />

### ResampleMethod
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
The method to use for document interpolation

Pass to [Document.resizeImage](/ps-reference/classes/document.md#resizeimage)()

| Name | Description |
| :------ | :------ |
| AUTOMATIC | Choose best bicubic option automatically |
| BICUBIC | Bicubic interpolation |
| BICUBICSHARPER | Apply a sharpening mask |
| BICUBICSMOOTHER | Apply a smoothing mask |
| BILINEAR | Bilinear interpolate |
| DEEPUPSCALE | Using deep learning, predict what the picture will look like larger. |
| NEARESTNEIGHBOR | Determine value based on nearest neighbor |
| NONE | Changes image resolution value without affecting document dimension  **Currently unsupported** |
| PRESERVEDETAILS | Attempt to preserve details by using machine learning |

<HorizontalLine />

### RippleSize
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The size of undulations.
Pass to [Layer.applyRipple](/ps-reference/classes/layer.md#applyripple)().

| Name | Description |
| :------ | :------ |
| LARGE | - |
| MEDIUM | - |
| SMALL | - |

<HorizontalLine />

### RulerUnits
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The measurement unit for ruler increments.
Pass to [PreferencesUnitsAndRulers.rulerUnits](/ps-reference/classes/preferences/preferencesunitsandrulers.md#rulerunits)

| Name | Description |
| :------ | :------ |
| CENTIMETERS | - |
| INCHES | - |
| MILLIMETERS | - |
| PERCENT | - |
| PICAS | - |
| PIXELS | - |
| POINTS | - |

<HorizontalLine />

### SampleSize
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
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

<HorizontalLine />

### SaveLogItemsType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
Options for logging the history items.
Pass to [PreferencesHistory.saveLogItems](/ps-reference/classes/preferences/preferenceshistory.md#savelogitems)

| Name | Description |
| :------ | :------ |
| LOGFILE | Save history log in a text file. |
| LOGFILEANDMETADATA | Save history log in file metadata and a text file. |
| METADATA | Save history log in file metadata. |

<HorizontalLine />

### SaveMethod
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
The type of save operation.

| Name | Description |
| :------ | :------ |
| SAVE | Saves the current document at the current format. |
| SAVEAS | Changes the format of document, changing the file. |
| SAVEASCOPY | Creates a copy of the document in the new format. |

<HorizontalLine />

### SaveOptions
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
The policy for handling new changes upon closing a document.

| Name | Description |
| :------ | :------ |
| DONOTSAVECHANGES | Will close document without saving, discarding changes |
| PROMPTTOSAVECHANGES | Will ask the user if they&#x27;d like to save changes, blocking the script |
| SAVECHANGES | Will save all existing changes before closing, prompting if document is not saved yet |

<HorizontalLine />

### SavePreview
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The application's behavior regarding image previews.
Pass to [PreferencesFileHandling.imagePreviews](/ps-reference/classes/preferences/preferencesfilehandling.md#imagepreviews)

| Name | Description |
| :------ | :------ |
| ALWAYSSAVE | Always save the item with the file. |
| ASKWHENSAVING | Prompt the user whether to save the item with the file. |
| NEVERSAVE | Never save the item with the file. |

<HorizontalLine />

### SelectionType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.3\</span\>

\<br/\>
The selection behavior when a selection already exists.
Used in [PathItem.makeSelection](/ps-reference/classes/pathitem.md#makeselection)(), [Selection.saveTo](/ps-reference/classes/selection.md#saveto)() and [Selection.load](/ps-reference/classes/selection.md#load)()

| Name | Description |
| :------ | :------ |
| DIMINISH | Remove the selection from the already selected area |
| EXTEND | Add the selection to an already selected area |
| INTERSECT | Make the selection only the area where the new selection intersectes the already selected area |
| REPLACE | Replace the selected area |

<HorizontalLine />

### ShapeOperation
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.3\</span\>

\<br/\>
How to combine the shapes if the destination path already has a selection.

Set for [SubPathInfo.operation](/ps-reference/classes/subpathinfo.md#operation), stored in the resulting [SubPathItem](/ps-reference/classes/subpathitem.md)

| Name | Description |
| :------ | :------ |
| SHAPEADD | - |
| SHAPEINTERSECT | - |
| SHAPESUBTRACT | - |
| SHAPEXOR | - |

<HorizontalLine />

### SmartBlurMode
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The method to use for smart blurring.
Pass to [Layer.applySmartBlur](/ps-reference/classes/layer.md#applysmartblur)().

| Name | Description |
| :------ | :------ |
| EDGEONLY | - |
| NORMAL | - |
| OVERLAYEDGE | - |

<HorizontalLine />

### SmartBlurQuality
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The smart blur quality.
Pass to [Layer.applySmartBlur](/ps-reference/classes/layer.md#applysmartblur)().

| Name | Description |
| :------ | :------ |
| HIGH | - |
| LOW | - |
| MEDIUM | - |

<HorizontalLine />

### SpherizeMode
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The curve (or stretch shape) to use for the distortion.
Pass to [Layer.applySpherize](/ps-reference/classes/layer.md#applyspherize)().

| Name | Description |
| :------ | :------ |
| HORIZONTAL | - |
| NORMAL | - |
| VERTICAL | - |

<HorizontalLine />

### StrikeThrough
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The text strikethrough style to use in text. Used in [CharacterStyle.strikeThrough](/ps-reference/classes/characterstyle.md#strikethrough)

| Name | Description |
| :------ | :------ |
| STRIKEBOX | - |
| STRIKEHEIGHT | - |
| STRIKEOFF | - |

<HorizontalLine />

### TextCase
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The capitalization style to use in text. Used in [CharacterStyle.capitalization](/ps-reference/classes/characterstyle.md#capitalization)

| Name | Description |
| :------ | :------ |
| ALLCAPS | - |
| NORMAL | - |
| SMALLCAPS | - |

<HorizontalLine />

### TextureType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The type of texture or glass surface image to load for a texturizer
or glass filter. Pass to [Layer.applyGlassEffect](/ps-reference/classes/layer.md#applyglasseffect)().

| Name | Description |
| :------ | :------ |
| BLOCKS | - |
| CANVAS | - |
| FROSTED | - |
| TINYLENS | - |

<HorizontalLine />

### ToolType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.3\</span\>

\<br/\>
The tool to use with [PathItem.strokePath](/ps-reference/classes/pathitem.md#strokepath)()

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

<HorizontalLine />

### TrimType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.0\</span\>

\<br/\>
Type of pixels to trim around an image, passed to [Document.trim](/ps-reference/classes/document.md#trim).

| Name | Description |
| :------ | :------ |
| BOTTOMRIGHT | The color of the pixel in the bottom right corner of the image. |
| TOPLEFT | The color of the pixel in the top left right corner of the image. |
| TRANSPARENT | Fully transparent pixels. |

<HorizontalLine />

### TypeInterfaceFeatures
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
Options for changing user interface of Character and Paragraph panels.
This option is not in Preferences dialog but instead it is located in: Main menu > Type > Language Options
Pass to [PreferencesType.showTextFeatures](/ps-reference/classes/preferences/preferencestype.md#showtextfeatures)

| Name | Description |
| :------ | :------ |
| DEFAULT | - |
| EASTASIAN | - |
| MIDDLEEASTERN | - |

<HorizontalLine />

### TypeUnits
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.0\</span\>

\<br/\>
The measurement unit for type.
Pass to [PreferencesUnitsAndRulers.typeUnits](/ps-reference/classes/preferences/preferencesunitsandrulers.md#typeunits)

| Name | Description |
| :------ | :------ |
| MILLIMETERS | - |
| PIXELS | - |
| POINTS | - |

<HorizontalLine />

### UndefinedAreas
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
How to treat undistorted areas or areas left blank in an image
to which a filter in the Distort category has been applied. Pass
to [Layer.applyDisplace](/ps-reference/classes/layer.md#applydisplace)(), [Layer.applyShear](/ps-reference/classes/layer.md#applyshear)(), [Layer.applyWave](/ps-reference/classes/layer.md#applywave)()

| Name | Description |
| :------ | :------ |
| REPEATEDGEPIXELS | - |
| WRAPAROUND | - |

<HorizontalLine />

### Underline
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The underline style to use in text. Used in [CharacterStyle.underline](/ps-reference/classes/characterstyle.md#underline)

| Name | Description |
| :------ | :------ |
| LEFTINVERTICAL | - |
| NONE | - |
| RIGHTINVERTICAL | - |

<HorizontalLine />

### Units
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.4\</span\>

\<br/\>
Valid Units for convertUnits method, used in [Photoshop.convertUnits](/ps-reference/classes/photoshop.md#convertunits)

| Name | Description |
| :------ | :------ |
| CM | - |
| INCHES | - |
| MM | - |
| PICAS | - |
| PIXELS | - |
| POINTS | - |

<HorizontalLine />

### WarpStyle
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
The warp style to use with Text. Used in a [WarpStyle.style](/ps-reference/classes/warpstyle.md#style)

| Name | Description |
| :------ | :------ |
| ARC | - |
| ARCH | - |
| ARCLOWER | - |
| ARCUPPER | - |
| BULGE | - |
| FISH | - |
| FISHEYE | - |
| FLAG | - |
| INFLATE | - |
| NONE | - |
| RISE | - |
| SHELLLOWER | - |
| SHELLUPPER | - |
| SQUEEZE | - |
| TWIST | - |
| WAVE | - |

<HorizontalLine />

### WaveType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The type of wave.
Pass to [Layer.applyWave](/ps-reference/classes/layer.md#applywave)().

| Name | Description |
| :------ | :------ |
| SINE | - |
| SQUARE | - |
| TRIANGULAR | - |

<HorizontalLine />

### ZigZagType
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.5\</span\>

\<br/\>
The method of zigzagging.
Pass to [Layer.applyZigZag](/ps-reference/classes/layer.md#applyzigzag)().

| Name | Description |
| :------ | :------ |
| AROUNDCENTER | - |
| OUTFROMCENTER | - |
| PONDRIPPLES | - |
