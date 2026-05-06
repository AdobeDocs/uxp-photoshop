---
id: "indexedconversionoptions"
title: "IndexedConversionOptions"
sidebar_label: "IndexedConversionOptions"
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

# Indexed Conversion Options

Options for converting an RGB image to an indexed color model using [Document.changeMode](/ps_reference/classes/document/#changemode)

## Properties

| Name | Type | Access | Default | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ |
| colors | *number* | R W | - | 23.0 | The number of palette colors.  Valid only with palette types: LOCALADAPTIVE, LOCALPERCEPTUAL, LOCALSELECTIVE, MACOSPALETTE, UNIFORM, WEBPALETTE, or WINDOWSPALETTE. |
| dither | [*Dither*](/ps_reference/modules/constants/#dither) | R W | - | 23.0 | The type of dithering to be done. |
| ditherAmount | *number* | R W | - | 23.0 | The amount of dithering to be done.  Valid only when dither typ is DIFFUSION. |
| forced | [*ForcedColors*](/ps_reference/modules/constants/#forcedcolors) | R W | - | 23.0 | The set of colors to force into the color palette. |
| matte | [*MatteColor*](/ps_reference/modules/constants/#mattecolor) | R W | WHITE | 23.0 | The color to use to fill anti-aliased edges adjacent to transparent areas of the image.  When transparency is false, the matte color is applied to transparent areas. |
| palette | [*Palette*](/ps_reference/modules/constants/#palette) | R W | - | 23.0 | The palette type. |
| preserveExactColors | *boolean* | R W | - | 23.0 | When true, the image colors matching entries in the color table will not be dithered. |
| transparency | *boolean* | R W | - | 23.0 | When true, transparent areas of the image are preserved during conversion to GIF format. |
| typename | *string* | R | - | 23.0 | The class name of the referenced object: *&quot;IndexedConversionOptions&quot;*. |
