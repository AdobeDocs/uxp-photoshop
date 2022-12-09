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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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

### AntiAlias
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

Method to use to smooth edges by softening the color transition between edge pixels
and the background. Used in a [CharacterStyle.antiAliasMethod](/ps_reference/classes/characterstyle/#antialiasmethod)

| Name | Description |
| :------ | :------ |
| CRISP | - |
| NONE | - |
| SHARP | - |
| SMOOTH | - |
| STRONG | - |

___

### AutoKernType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The type of kerning to use for characters. Used in [CharacterStyle.autoKerning](/ps_reference/classes/characterstyle/#autokerning)

| Name | Description |
| :------ | :------ |
| MANUAL | - |
| METRICS | - |
| OPTICAL | - |

___

### BMPDepthType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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

### Baseline
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The baseline style to use in text. Used in [CharacterStyle.baseline](/ps_reference/classes/characterstyle/#baseline)

| Name | Description |
| :------ | :------ |
| NORMAL | - |
| SUBSCRIPT | - |
| SUPERSCRIPT | - |

___

### BitmapConversionType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

The number of bits per color channel.

| Name | Description |
| :------ | :------ |
| EIGHT | - |
| ONE | - |
| SIXTEEN | - |
| THIRTYTWO | - |

___

### BlendMode
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

The type of a color channel.

| Name | Description |
| :------ | :------ |
| COMPONENT | Specific to document color mode |
| MASKEDAREA | Alpha channel where color indicates masked area |
| SELECTEDAREA | Alpha channel where color indicates selected area |
| SPOTCOLOR | Alpha channel to store a spot color |

___

### CharacterAlignment
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The character alignment to use in text.
Used in [CharacterStyle.characterAlignment](/ps_reference/classes/characterstyle/#characteralignment)

| Name | Description |
| :------ | :------ |
| EMBOXBOTTOMLEFT | - |
| EMBOXCENTER | - |
| EMBOXTOPRIGHT | - |
| ICFBOTTOMLEFT | - |
| ICFBOXTOPRIGHT | - |
| ROMAN | - |

___

### ColorBlendMode
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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

### ColorPicker
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The kind of color picker dialog to use.
Pass to [PreferencesGeneral.colorPicker](/ps_reference/classes/preferences/preferencesgeneral/#colorpicker)

| Name | Description |
| :------ | :------ |
| ADOBE | The Adobe Color Picker. |
| OSNATIVE | The built-in Apple or Windows color picker. |
| PLUGIN | The built-in Windows color picker. |

___

### ColorProfileType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

Type of color profile used to manage a document, used in [Document.colorProfileType](/ps_reference/classes/document/#colorprofiletype)

| Name | Description |
| :------ | :------ |
| CUSTOM | Set for all custom profiles |
| NONE | Set when document is not color managed |
| WORKING | Set when document uses the working color profile |

___

### CreateFields
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

The method used for creating fields. Pass to [Layer.applyDeInterlace](/ps_reference/classes/layer/#applydeinterlace).

| Name | Description |
| :------ | :------ |
| DUPLICATION | - |
| INTERPOLATION | - |

___

### DepthMapSource
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

Controls the type of dialogs Photoshop displays
during API calls

| Name | Description |
| :------ | :------ |
| ALL | All dialogs will be shown |
| ERROR | Dialogs will be shown only if Photoshop raises an error |
| NONE | All dialogs will be hidden, and bad calls will silently fail |

___

### Direction
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

Used in multiple places to represent orientation.

Orientation of a guide in [Guide.direction](/ps_reference/classes/guide/#direction)

| Name | Description |
| :------ | :------ |
| HORIZONTAL | - |
| VERTICAL | - |

___

### DisplacementMapType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

Describes how the displacement map fits the
image if the image is not the same size as
the map. Pass to [Layer.applyDisplace](/ps_reference/classes/layer/#applydisplace).

| Name | Description |
| :------ | :------ |
| STRETCHTOFIT | - |
| TILE | - |

___

### Dither
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

The type of dithering

| Name | Description |
| :------ | :------ |
| DIFFUSION | - |
| NOISE | - |
| NONE | - |
| PATTERN | - |

___

### DocumentFill
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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

### EditLogItemsType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The history log edit options.
Pass to [PreferencesHistory.editLogItems](/ps_reference/classes/preferences/preferenceshistory/#editlogitems)

| Name | Description |
| :------ | :------ |
| CONCISE | Includes the text that appears in the History panel in addition to the Sessions information. |
| DETAILED | Includes the text that appears in the Actions panel in addition to the Concise information. If you need a complete history of all changes made to files, choose Detailed. |
| SESSIONONLY | Keeps a record of each time you start or quit Photoshop and each time you open and close files (each image’s filename is included). Does not include any information about edits made to the file. |

___

### ElementPlacement
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

The type of field to eliminate. Pass to [Layer.applyDeInterlace](/ps_reference/classes/layer/#applydeinterlace).

| Name | Description |
| :------ | :------ |
| EVENFIELDS | - |
| ODDFIELDS | - |

___

### FontSize
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

Font size in panels and dialogs.
Pass to [PreferencesInterface.textFontSize](/ps_reference/classes/preferences/preferencesinterface/#textfontsize)

| Name | Description |
| :------ | :------ |
| LARGE | Large size. |
| MEDIUM | Medium size. |
| SMALL | Small size. |
| TINY | Tiny size. |

___

### ForcedColors
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

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

### GridLineStyle
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The line style for nonprinting grids displayed over images.
Pass to [PreferencesGuidesGridsAndSlices.gridStyle](/ps_reference/classes/preferences/preferencesguidesgridsandslices/#gridstyle)

| Name | Description |
| :------ | :------ |
| DASHED | - |
| DOTTED | - |
| SOLID | - |

___

### GridSize
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The size of grid squares.
Pass to [PreferencesTransparencyAndGamut.gridSize](/ps_reference/classes/preferences/preferencestransparencyandgamut/#gridsize)

| Name | Description |
| :------ | :------ |
| LARGE | Large grid squares. |
| MEDIUM | Medium grid squares. |
| NONE | No grid is displayed. |
| SMALL | Small grid squares. |

___

### GuideLineStyle
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The line style for nonprinting guides displayed over images.
Pass to [PreferencesGuidesGridsAndSlices.guideStyle](/ps_reference/classes/preferences/preferencesguidesgridsandslices/#guidestyle)

| Name | Description |
| :------ | :------ |
| DASHED | - |
| SOLID | - |

___

### Intent
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

The rendering intent to use when converting from one color space to another with
[Document.convertProfile](/ps_reference/classes/document/#convertprofile)

| Name | Description |
| :------ | :------ |
| ABSOLUTECOLORIMETRIC | - |
| PERCEPTUAL | - |
| RELATIVECOLORIMETRIC | - |
| SATURATION | - |

___

### InterpolationMethod
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The method to use for bitmap interpolation.

Pass to [PreferencesGeneral.imageInterpolation](/ps_reference/classes/preferences/preferencesgeneral/#imageinterpolation),
[Layer.scale](/ps_reference/classes/layer/#scale)(), [Layer.skew](/ps_reference/classes/layer/#skew)(), [Layer.rotate](/ps_reference/classes/layer/#rotate)()

| Name | Description |
| :------ | :------ |
| AUTOMATIC | Choose best bicubic option automatically |
| BICUBIC | Bicubic interpolation |
| BICUBICSHARPER | Apply a sharpening mask |
| BICUBICSMOOTHER | Apply a smoothing mask |
| BILINEAR | Bilinear interpolate |
| NEARESTNEIGHBOR | Determine value based on nearest neighbor |

___

### JPEGFormatOptions
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

The option with which to save a JPEG file.

| Name | Description |
| :------ | :------ |
| OPTIMIZEDBASELINE | Optimized color and a slightly reduced file size. |
| PROGRESSIVE | Displays a series of increasing detailed scans as the image downloads. |
| STANDARDBASELINE | Format recognized by most web browsers. |

___

### Justification
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The placement of paragraph text within the bounding box.
Used in [ParagraphStyle.justification](/ps_reference/classes/paragraphstyle/#justification)

| Name | Description |
| :------ | :------ |
| CENTER | - |
| CENTERJUSTIFIED | - |
| FULLYJUSTIFIED | - |
| LEFT | - |
| LEFTJUSTIFIED | - |
| RIGHT | - |
| RIGHTJUSTIFIED | - |

___

### KashidaWidthType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The width of kashida (tatweel) character
Used in [ParagraphStyle.kashidaWidth](/ps_reference/classes/paragraphstyle/#kashidawidth)

| Name | Description |
| :------ | :------ |
| LONG | - |
| MEDIUM | - |
| NONE | - |
| SHORT | - |
| STYLISTIC | - |

___

### Kinsoku
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

Line breaking rules in Japanese text
Used in [ParagraphStyle.kinsoku](/ps_reference/classes/paragraphstyle/#kinsoku)

| Name | Description |
| :------ | :------ |
| JISMAXIMUM | - |
| JISWEAK | - |
| NONE | - |

___

### LabelColors
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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

___

### Language
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The language to use for text. Used in [CharacterStyle.language](/ps_reference/classes/characterstyle/#language)

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

___

### LayerKind
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

The type of Lens to use. Pass to [Layer.applyLensFlare](/ps_reference/classes/layer/#applylensflare)().

| Name | Description |
| :------ | :------ |
| MOVIEPRIME | - |
| PRIME105 | - |
| PRIME35 | - |
| ZOOMLENS | - |

___

### MatteColor
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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

### MaximizeCompatibility
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The permission state for queries.
Pass to [PreferencesFileHandling.maximizeCompatibility](/ps_reference/classes/preferences/preferencesfilehandling/#maximizecompatibility)

| Name | Description |
| :------ | :------ |
| ALWAYS | Always maximize compatibility. |
| ASK | Always ask about maximize compatibility. |
| NEVER | Never ask about maximize compatibility. |

___

### MiddleEasternDigitsType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

Digit type to use in text (Middle Eastern features).
Used in [CharacterStyle.middleEasternDigitsType](/ps_reference/classes/characterstyle/#middleeasterndigitstype)

| Name | Description |
| :------ | :------ |
| FARSI | - |
| HINDI | - |
| LTRARABIC | - |
| RTLARABIC | - |

___

### MiddleEasternTextDirection
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

Text flow direction (Middle Eastern features).
Used in [CharacterStyle.middleEasternTextDirection](/ps_reference/classes/characterstyle/#middleeasterntextdirection)

| Name | Description |
| :------ | :------ |
| DEFAULT | - |
| LEFTTORIGHT | - |
| RIGHTTOLEFT | - |

___

### Mojikumi
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

Spacing between punctuation, symbols, numbers,
and other character classes in Japanese text
Used in [ParagraphStyle.mojikumi](/ps_reference/classes/paragraphstyle/#mojikumi)

| Name | Description |
| :------ | :------ |
| NONE | - |
| SET1 | - |
| SET2 | - |
| SET3 | - |
| SET4 | - |

___

### NewDocumentMode
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

Distribution model to use when applying an Add Noise filter. Pass to [Layer.applyAddNoise](/ps_reference/classes/layer/#applyaddnoise).

| Name | Description |
| :------ | :------ |
| GAUSSIAN | - |
| UNIFORM | - |

___

### OffsetUndefinedAreas
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

Method to use to fill the empty space left by offsetting an image or selection.
Pass to [Layer.applyOffset](/ps_reference/classes/layer/#applyoffset)()

| Name | Description |
| :------ | :------ |
| REPEATEDGEPIXELS | - |
| SETTOBACKGROUND | - |
| WRAPAROUND | - |

___

### OperatingSystem
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

The target operating system in [BMPSaveOptions](/ps_reference/objects/saveoptions/bmpsaveoptions/).

| Name | Description |
| :------ | :------ |
| OS2 | - |
| WINDOWS | - |

___

### Orientation
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

Used in multiple places to represent orientation
e.g., [TextItem.orientation](/ps_reference/classes/textitem/#orientation)

| Name | Description |
| :------ | :------ |
| HORIZONTAL | - |
| VERTICAL | - |

___

### OtherCursors
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The style of the cursors for the following tools: Marquee, Lasso, Polygonal Lasso, Magic Wand, Crop, Slice,
Patch Eyedropper, Pen, Gradient, Line, Paint Bucket, Magnetic Lasso, Magnetic Pen, Freeform Pen,
Measure, and Color Sampler.
Pass to [PreferencesCursors.otherCursors](/ps_reference/classes/preferences/preferencescursors/#othercursors)

| Name | Description |
| :------ | :------ |
| PRECISE | Use crosshair cursors for tools. |
| STANDARD | Use small iconic cursors for tools. |

___

### PNGMethod
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

Compression method for saving a PNG file

| Name | Description |
| :------ | :------ |
| MODERATE | - |
| QUICK | - |
| THOROUGH | - |

___

### PaintingCursors
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The style of the cursors for the following tools: Eraser, Pencil, Paintbrush, Healing Brush,
Rubber Stamp, Pattern Stamp, Smudge, Blur, Sharpen, Dodge, Burn, Sponge.
Pass to [PreferencesCursors.paintingCursors](/ps_reference/classes/preferences/preferencescursors/#paintingcursors)

| Name | Description |
| :------ | :------ |
| BRUSHSIZE | Displays cursors as brush shapes representing the size of the current brush where boundaries have 50% brush opacity |
| FULLSIZE | Use the full size of the brush regardless of brush opacity |
| PRECISE | Use crosshair cursors when painting. |
| STANDARD | Use small iconic cursors when painting. |

___

### Palette
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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

### ParagraphFeatures
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The paragraph features to use in text.
Used in [ParagraphStyle.features](/ps_reference/classes/paragraphstyle/#features)

| Name | Description |
| :------ | :------ |
| DEFAULT | - |
| EASTASIAN | - |
| MIDDLEASTERN | - |

___

### ParagraphLayout
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The paragraph layout to use in text.
Used in [ParagraphStyle.layoutMode](/ps_reference/classes/paragraphstyle/#layoutmode)

| Name | Description |
| :------ | :------ |
| LATINEASTASIAN | - |
| WORLDREADY | - |

___

### PathKind
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

The type of a [PathItem](/ps_reference/classes/pathitem/)

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

The role a [PathPoint](/ps_reference/classes/pathpoint/) plays in a [PathItem](/ps_reference/classes/pathitem/)

| Name | Description |
| :------ | :------ |
| CORNERPOINT | - |
| SMOOTHPOINT | - |

___

### PointType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The point/pica size: either 72 or 72.27 points per inch.
Pass to [PreferencesUnitsAndRulers.pointSize](/ps_reference/classes/preferences/preferencesunitsandrulers/#pointsize)

| Name | Description |
| :------ | :------ |
| POSTSCRIPT | 72 points per inch. |
| TRADITIONAL | 72.27 points per inch. |

___

### PolarConversionType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

The kind of polar conversion.
Pass to [Layer.applyPolarCoordinates](/ps_reference/classes/layer/#applypolarcoordinates)().

| Name | Description |
| :------ | :------ |
| POLARTORECTANGULAR | The distortion applied will take the input pixel grid as polar coordinates and convert them to rectangular coordinates. |
| RECTANGULARTOPOLAR | The distortion applied will take the input pixel grid as rectangular coordinates and convert them to polar coordinates. |

___

### PreserveShape
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

Favor the promotion of either corners or curves.
Pass to [Layer.applyMaximum](/ps_reference/classes/layer/#applymaximum)() and [Layer.applyMinimum](/ps_reference/classes/layer/#applyminimum)().

| Name | Description |
| :------ | :------ |
| ROUNDNESS | - |
| SQUARENESS | - |

___

### RasterizeType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

The method to use for document interpolation

Pass to [Document.resizeImage](/ps_reference/classes/document/#resizeimage)()

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

___

### RippleSize
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

The size of undulations.
Pass to [Layer.applyRipple](/ps_reference/classes/layer/#applyripple)().

| Name | Description |
| :------ | :------ |
| LARGE | - |
| MEDIUM | - |
| SMALL | - |

___

### RulerUnits
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The measurement unit for ruler increments.
Pass to [PreferencesUnitsAndRulers.rulerUnits](/ps_reference/classes/preferences/preferencesunitsandrulers/#rulerunits)

| Name | Description |
| :------ | :------ |
| CENTIMETERS | - |
| INCHES | - |
| MILLIMETERS | - |
| PERCENT | - |
| PICAS | - |
| PIXELS | - |
| POINTS | - |

___

### SampleSize
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

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

### SaveLogItemsType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

Options for logging the history items.
Pass to [PreferencesHistory.saveLogItems](/ps_reference/classes/preferences/preferenceshistory/#savelogitems)

| Name | Description |
| :------ | :------ |
| LOGFILE | Save history log in a text file. |
| LOGFILEANDMETADATA | Save history log in file metadata and a text file. |
| METADATA | Save history log in file metadata. |

___

### SaveMethod
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

The type of save operation.

| Name | Description |
| :------ | :------ |
| SAVE | Saves the current document at the current format. |
| SAVEAS | Changes the format of document, changing the file. |
| SAVEASCOPY | Creates a copy of the document in the new format. |

___

### SaveOptions
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

The policy for handling new changes upon closing a document.

| Name | Description |
| :------ | :------ |
| DONOTSAVECHANGES | Will close document without saving, discarding changes |
| PROMPTTOSAVECHANGES | Will ask the user if they&#x27;d like to save changes, blocking the script |
| SAVECHANGES | Will save all existing changes before closing, prompting if document is not saved yet |

___

### SavePreview
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The application's behavior regarding image previews.
Pass to [PreferencesFileHandling.imagePreviews](/ps_reference/classes/preferences/preferencesfilehandling/#imagepreviews)

| Name | Description |
| :------ | :------ |
| ALWAYSSAVE | Always save the item with the file. |
| ASKWHENSAVING | Prompt the user whether to save the item with the file. |
| NEVERSAVE | Never save the item with the file. |

___

### SelectionType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

The method to use for smart blurring.
Pass to [Layer.applySmartBlur](/ps_reference/classes/layer/#applysmartblur)().

| Name | Description |
| :------ | :------ |
| EDGEONLY | - |
| NORMAL | - |
| OVERLAYEDGE | - |

___

### SmartBlurQuality
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

The smart blur quality.
Pass to [Layer.applySmartBlur](/ps_reference/classes/layer/#applysmartblur)().

| Name | Description |
| :------ | :------ |
| HIGH | - |
| LOW | - |
| MEDIUM | - |

___

### SpherizeMode
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

The curve (or stretch shape) to use for the distortion.
Pass to [Layer.applySpherize](/ps_reference/classes/layer/#applyspherize)().

| Name | Description |
| :------ | :------ |
| HORIZONTAL | - |
| NORMAL | - |
| VERTICAL | - |

___

### StrikeThrough
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The text strikethrough style to use in text. Used in [CharacterStyle.strikeThrough](/ps_reference/classes/characterstyle/#strikethrough)

| Name | Description |
| :------ | :------ |
| STRIKEBOX | - |
| STRIKEHEIGHT | - |
| STRIKEOFF | - |

___

### TextCase
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The capitalization style to use in text. Used in [CharacterStyle.capitalization](/ps_reference/classes/characterstyle/#capitalization)

| Name | Description |
| :------ | :------ |
| ALLCAPS | - |
| NORMAL | - |
| SMALLCAPS | - |

___

### TextureType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

Type of pixels to trim around an image, passed to [Document.trim](/ps_reference/classes/document/#trim).

| Name | Description |
| :------ | :------ |
| BOTTOMRIGHT | Bottom right pixel color. |
| TOPLEFT | Top left pixel color. |
| TRANSPARENT | Transparent pixels. |

___

### TypeInterfaceFeatures
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

Options for changing user interface of Character and Paragraph panels.
This option is not in Preferences dialog but instead it is located in: Main menu > Type > Language Options
Pass to [PreferencesType.showTextFeatures](/ps_reference/classes/preferences/preferencestype/#showtextfeatures)

| Name | Description |
| :------ | :------ |
| DEFAULT | - |
| EASTASIAN | - |
| MIDDLEEASTERN | - |

___

### TypeUnits
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

The measurement unit for type.
Pass to [PreferencesUnitsAndRulers.typeUnits](/ps_reference/classes/preferences/preferencesunitsandrulers/#typeunits)

| Name | Description |
| :------ | :------ |
| MILLIMETERS | - |
| PIXELS | - |
| POINTS | - |

___

### UndefinedAreas
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

How to treat undistorted areas or areas left blank in an image
to which a filter in the Distort category has been applied. Pass
to [Layer.applyDisplace](/ps_reference/classes/layer/#applydisplace)(), [Layer.applyShear](/ps_reference/classes/layer/#applyshear)(), [Layer.applyWave](/ps_reference/classes/layer/#applywave)()

| Name | Description |
| :------ | :------ |
| REPEATEDGEPIXELS | - |
| WRAPAROUND | - |

___

### Underline
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The underline style to use in text. Used in [CharacterStyle.underline](/ps_reference/classes/characterstyle/#underline)

| Name | Description |
| :------ | :------ |
| LEFTINVERTICAL | - |
| NONE | - |
| RIGHTINVERTICAL | - |

___

### Units
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.4</span>

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

### WarpStyle
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

The warp style to use with Text. Used in a [WarpStyle.style](/ps_reference/classes/warpstyle/#style)

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

___

### WaveType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

The type of wave.
Pass to [Layer.applyWave](/ps_reference/classes/layer/#applywave)().

| Name | Description |
| :------ | :------ |
| SINE | - |
| SQUARE | - |
| TRIANGULAR | - |

___

### ZigZagType
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.5</span>

The method of zigzagging.
Pass to [Layer.applyZigZag](/ps_reference/classes/layer/#applyzigzag)().

| Name | Description |
| :------ | :------ |
| AROUNDCENTER | - |
| OUTFROMCENTER | - |
| PONDRIPPLES | - |
