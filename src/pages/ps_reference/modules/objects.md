---
id: "objects"
title: "Objects"
sidebar_label: "Objects"
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

# Objects

## References

### BMPSaveOptions

 

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| alphaChannels | *boolean* | R W | 22.5 | True to save the alpha channels. |
| depth | [*BMPDepthType*](/ps_reference/modules/constants/#bmpdepthtype) | R W | 22.5 | The number of bits per channel. |
| flipRowOrder | *boolean* | R W | 22.5 | True to write the image from top to bottom, available only when osType is OperatingSystem.WINDOWS |
| osType | [*OperatingSystem*](/ps_reference/modules/constants/#operatingsystem) | R W | 22.5 | The target OS. |
| rleCompression | *boolean* | R W | 22.5 | True to use RLE compression |
| typename | *string* | R | 22.5 | The class name of the referenced object: *&quot;BMPSaveOptions&quot;*. |

___

### GIFSaveOptions

 

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| colors | *number* | R W | 22.5 | The number of palette colors. Valid only when palette is:  Palette.LOCALADAPTIVE, LOCALPERCEPTUAL, LOCALSELECTIVE, MACOSPALETTE, UNIFORM, WEBPALETTE; or WINDOWSPALETTE |
| dither | [*Dither*](/ps_reference/modules/constants/#dither) | R W | 22.5 | The dither type. |
| ditherAmount | *number* | R W | 22.5 | The amount of dither.  Valid only when dither &#x3D; Dither.DIFFUSION. |
| forced | [*ForcedColors*](/ps_reference/modules/constants/#forcedcolors) | R W | 22.5 | The type of colors to force into the color palette. |
| interlaced | *boolean* | R W | 22.5 | True if rows should be interlaced. |
| matte | [*MatteColor*](/ps_reference/modules/constants/#mattecolor) | R W | 22.5 | The color to use to fill anti-aliased edges adjacent to transparent  areas of the image.  When transparency is turned off for an image, the matte color is applied to transparent areas. |
| palette | [*Palette*](/ps_reference/modules/constants/#palette) | R W | 22.5 | The type of palette to use. |
| preserveExactColors | *boolean* | R W | 22.5 | True to protect colors in the image that contain entries in the color table from being dithered.  Valid only when dither &#x3D; DITHER.DIFFUSION |
| transparency | *boolean* | R W | 22.5 | True to preserve transparent areas of the image during conversion to GIF format. |
| typename | *string* | R | 22.5 | The class name of the referenced object: *&quot;GIFSaveOptions&quot;*. |

___

### JPEGSaveOptions

 

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| color | [*SolidColor*](/ps_reference/classes/solidcolor/) | R W | - | - | 22.5 | A custom color to use to fill anti-aliased edges adjacent to transparent areas of the image. Mutually exclusive with &#x27;matteColor&#x27;. |
| customMatte | [*SolidColor*](/ps_reference/classes/solidcolor/) | R W | - | - | 22.5 | Custom matting color; overrides matteColor |
| embedColorProfile | *boolean* | R W | - | - | 22.5 | False to skip embedding the color profile in the document |
| formatOptions | [*JPEGFormatOptions*](/ps_reference/modules/constants/#jpegformatoptions) | R W | STANDARDBASELINE | - | 22.5 | The JPEG format option to use. |
| matteColor | [*MatteColor*](/ps_reference/modules/constants/#mattecolor) | R W | - | - | 22.5 | The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Mutually exclusive with &#x27;color&#x27;. |
| quality | *number* | R W | 8 | 0...12 | 22.5 | The image quality setting to use; affects file size and compression. |
| scans | *number* | R W | 3 | 3...5 | 22.5 | The number of scans to incrementally display the image on the page. formatOptions must be JPEGFormatOptions.PROGRESSIVE. |
| typename | *string* | R | - | - | 22.5 | The class name of the referenced object: *&quot;JPEGSaveOptions&quot;*. |

___

### PNGSaveOptions

 

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| compression | *number* | R W | 6 | 0...9 | 22.5 | The compression value to be used when method &#x3D; PNGMethod.QUICK |
| interlaced | *boolean* | R W | false | - | 22.5 | True to interlace rows when method &#x3D; PNGMethod.QUICK |
| method | [*PNGMethod*](/ps_reference/modules/constants/#pngmethod) | R W | - | - | 22.5 | PNG File Size optimization method. |
| typename | *string* | R | - | - | 22.5 | The class name of the referenced object: *&quot;PNGSaveOptions&quot;*. |

___

### PhotoshopSaveOptions

 

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| alphaChannels | *boolean* | R W | 22.5 | True to save the alpha channels. |
| annotations | *boolean* | R W | 22.5 | True to save the annotations. |
| embedColorProfile | *boolean* | R W | 22.5 | True to embed the color profiles in the document. |
| layers | *boolean* | R W | 22.5 | True to preserve the layers. |
| maximizeCompatibility | *boolean* | R W | 22.5 | Maximize Compatibility with older versions |
| spotColor | *boolean* | R W | 22.5 | True to save the spot colors. |
| typename | *string* | R | 22.5 | The class name of the referenced object: *&quot;PhotoshopSaveOptions&quot;*. |
