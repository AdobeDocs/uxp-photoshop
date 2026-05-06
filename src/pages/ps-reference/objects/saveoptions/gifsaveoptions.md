---
id: "gifsaveoptions"
title: "GIFSaveOptions"
sidebar_label: "GIFSaveOptions"
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

# GIF Save Options

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
