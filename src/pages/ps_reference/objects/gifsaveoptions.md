---
id: "gifsaveoptions"
title: "GIFSaveOptions"
sidebar_label: "GIFSaveOptions"
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

# GIFSaveOptions

| Name | Type | Default | Range | Description |
| :------ | :------ | :------ | :------ | :------ |
| colors | *number* | - | - | The number of palette colors. Valid only when palette is: |
| dither | [*Dither*](/ps_reference/modules/constants/#dither) | - | - | The dither type. |
| ditherAmount | *number* | - | - | The amount of dither. |
| forced | [*ForcedColors*](/ps_reference/modules/constants/#forcedcolors) | - | - | The type of colors to force into the color palette. |
| interlaced | *boolean* | - | - | True if rows should be interlaced/ |
| matte | [*MatteColor*](/ps_reference/modules/constants/#mattecolor) | - | - | The color to use to fill anti-aliased edges adjacent to transparent  areas of the image. |
| palette | [*Palette*](/ps_reference/modules/constants/#palette) | - | - | The type of palette to use. |
| preserveExactColors | *boolean* | - | - | True to protect colors in the image that contain entries in the color table from being dithered. |
| transparency | *boolean* | - | - | True to preserve transparent areas of the image during conversion to GIF format. |
| typename | *string* | &quot;GIFSaveOptions&quot;
 | - | The class name of the referenced object |
