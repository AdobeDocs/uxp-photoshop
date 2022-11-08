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
| alphaChannels | *boolean* | R W | acc??? | - |
| depth | [*BMPDepthType*](/ps_reference/modules/constants/#bmpdepthtype) | R W | acc??? | - |
| flipRowOrder | *boolean* | R W | acc??? | - |
| osType | [*OperatingSystem*](/ps_reference/modules/constants/#operatingsystem) | R W | acc??? | - |
| rleCompression | *boolean* | R W | acc??? | - |
| typename | *string* | R | 22.5 | The class name of the referenced object: *&quot;BMPSaveOptions&quot;*. |

___

### GIFSaveOptions

 

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| colors | *number* | R W | acc??? | - |
| dither | [*Dither*](/ps_reference/modules/constants/#dither) | R W | acc??? | - |
| ditherAmount | *number* | R W | acc??? | - |
| forced | [*ForcedColors*](/ps_reference/modules/constants/#forcedcolors) | R W | acc??? | - |
| interlaced | *boolean* | R W | acc??? | - |
| matte | [*MatteColor*](/ps_reference/modules/constants/#mattecolor) | R W | acc??? | - |
| palette | [*Palette*](/ps_reference/modules/constants/#palette) | R W | acc??? | - |
| preserveExactColors | *boolean* | R W | acc??? | - |
| transparency | *boolean* | R W | acc??? | - |
| typename | *string* | R | 22.5 | The class name of the referenced object: *&quot;GIFSaveOptions&quot;*. |

___

### JPEGSaveOptions

 

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| color | [*SolidColor*](/ps_reference/classes/solidcolor/) | R W | acc??? | - |
| customMatte | [*SolidColor*](/ps_reference/classes/solidcolor/) | R W | acc??? | - |
| embedColorProfile | *boolean* | R W | acc??? | - |
| formatOptions | [*JPEGFormatOptions*](/ps_reference/modules/constants/#jpegformatoptions) | R W | acc??? | - |
| matteColor | [*MatteColor*](/ps_reference/modules/constants/#mattecolor) | R W | acc??? | - |
| quality | *number* | R W | acc??? | - |
| scans | *number* | R W | acc??? | - |
| typename | *string* | R | 22.5 | The class name of the referenced object: *&quot;JPEGSaveOptions&quot;*. |

___

### PNGSaveOptions

 

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| compression | *number* | R W | acc??? | - |
| interlaced | *boolean* | R W | acc??? | - |
| method | [*PNGMethod*](/ps_reference/modules/constants/#pngmethod) | R W | acc??? | - |
| typename | *string* | R | 22.5 | The class name of the referenced object: *&quot;PNGSaveOptions&quot;*. |

___

### PhotoshopSaveOptions

 

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| alphaChannels | *boolean* | R W | acc??? | - |
| annotations | *boolean* | R W | acc??? | - |
| embedColorProfile | *boolean* | R W | acc??? | - |
| layers | *boolean* | R W | acc??? | - |
| maximizeCompatibility | *boolean* | R W | acc??? | - |
| spotColor | *boolean* | R W | acc??? | - |
| typename | *string* | R | 22.5 | The class name of the referenced object: *&quot;PhotoshopSaveOptions&quot;*. |
