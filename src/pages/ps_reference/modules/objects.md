---
id: "objects"
title: "Objects"
sidebar_label: "Objects"
repo: "uxp-photoshop"
product: "photoshop"
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

# Objects

## References

### BMPSaveOptions

 

| Name | Type | Default | Range | Description |
| :------ | :------ | :------ | :------ | :------ |
| alphaChannels | *boolean* | - | - | True to save the alpha channels |
| depth | [*BMPDepthType*](/ps_reference/modules/constants/#bmpdepthtype) | - | - | The number of bits per channel |
| flipRowOrder | *boolean* | - | - | True to write the image from top to bottom, available only when osType is OperatingSystem.WINDOWS |
| osType | [*OperatingSystem*](/ps_reference/modules/constants/#operatingsystem) | - | - | The target OS. |
| rleCompression | *boolean* | - | - | True to use RLE compression |
| typename | *string* | &quot;BMPSaveOptions&quot;
 | - | The class name of the referenced object |

___

### GIFSaveOptions

 

| Name | Type | Default | Range | Description |
| :------ | :------ | :------ | :------ | :------ |
| colors | *number* | - | - | The number of palette colors. Valid only when palette is: |
| dither | [*Dither*](/ps_reference/modules/constants/#dither) | - | - | The dither type. |
| ditherAmount | *number* | - | - | The amount of dither. |
| forced | [*ForcedColors*](/ps_reference/modules/constants/#forcedcolors) | - | - | The type of colors to force into the color palette. |
| interlaced | *boolean* | - | - | True if rows should be interlaced/ |
| matte | [*MatteColor*](/ps_reference/modules/constants/#mattecolor) | - | - | The color to use to fill anti-aliased edges adjacent to transparent  areas of the image. |
| palette | [*PaletteType*](/ps_reference/modules/constants/#palettetype) | - | - | The type of palette to use. |
| preserveExactColors | *boolean* | - | - | True to protect colors in the image that contain entries in the color table from being dithered. |
| transparency | *boolean* | - | - | True to preserve transparent areas of the image during conversion to GIF format. |
| typename | *string* | &quot;GIFSaveOptions&quot;
 | - | The class name of the referenced object |

___

### JPEGSaveOptions

 

| Name | Type | Default | Range | Description |
| :------ | :------ | :------ | :------ | :------ |
| color | ColorDescType | - | - | A custom color to use to fill anti-aliased edges adjacent to transparent areas of the image. Mutually exclusive with &#x27;matteColor&#x27;. |
| customMatte | RGBColorDesc | - | - | Custom matting color; overrides matteColor |
| embedColorProfile | *boolean* | - | - | False to skip embedding the color profile in the document |
| formatOptions | [*JPEGFormatOptions*](/ps_reference/modules/constants/#jpegformatoptions) | STANDARDBASELINE
 | - | The JPEG format option to use. |
| matteColor | [*MatteColor*](/ps_reference/modules/constants/#mattecolor) | - | - | The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Mutually exclusive with &#x27;color&#x27;. |
| quality | *number* | 8 | 0...12
 | The image quality setting to use; affects file size and compression. |
| scans | *number* | 3 | 3...5
 | The number of scans to incrementally display the image on the page. formatOptions must be JPEGFormatOptions.PROGRESSIVE. |
| typename | *string* | &quot;JPEGSaveOptions&quot;
 | - | The class name of the referenced object |

___

### PNGSaveOptions

 

| Name | Type | Default | Range | Description |
| :------ | :------ | :------ | :------ | :------ |
| compression | *number* | 6
 | 0...9 | The compression value to be used when method &#x3D; PNGMethod.QUICK |
| interlaced | *boolean* | false
 | - | True to interlace rows when method &#x3D; PNGMethod.QUICK |
| method | [*PNGMethod*](/ps_reference/modules/constants/#pngmethod) | - | - | PNG File Size optimization method. |
| typename | *string* | &quot;PNGSaveOptions&quot;
 | - | The class name of the referenced object |

___

### PhotoshopSaveOptions

 

| Name | Type | Default | Range | Description |
| :------ | :------ | :------ | :------ | :------ |
| alphaChannels | *boolean* | - | - | True to save the alpha channels |
| annotations | *boolean* | - | - | True to save the annotations |
| embedColorProfile | *boolean* | - | - | True to embed the color profiles in the document |
| layers | *boolean* | - | - | True to preserve the layers |
| maximizeCompatibility | *boolean* | - | - | Maximize Compatibility with older versions |
| spotColor | *boolean* | - | - | True to save the spot colors |
| typename | *string* | &quot;PhotoshopSaveOptions&quot;
 | - | The class name of the referenced object |
