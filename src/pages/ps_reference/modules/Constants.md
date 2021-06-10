---
id: "constants"
title: "constants"
sidebar_label: "constants"
---

# Constants

All constants listed on this page can be accessed by using the Constants module.

```javascript
require("photoshop").constants.AnchorPosition.BOTTOMCENTER
```

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
| PINLIGHT | - |
| SATURATION | - |
| SCREEN | - |
| SOFTLIGHT | - |
| SUBTRACT | - |
| VIVIDLIGHT | - |

___

### Dither

The type of dithering

| Name | Description |
| :------ | :------ |
| DIFFUSION | - |
| NOISE | - |
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

### PaletteType

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
