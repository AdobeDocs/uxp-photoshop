---
id: "applyimagetypes"
title: "ApplyImageTypes"
sidebar_label: "ApplyImageTypes"
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

# types/ApplyImageTypes

## Interfaces

- [ApplyImageOptions](/ps_reference/objects/options/applyimageoptions/)
- [ApplyImageSource](/ps_reference/objects/options/applyimagesource/)

## Type aliases

### ApplyImageChannelType

Ƭ **ApplyImageChannelType**: ComponentChannel \| AlphaChannel \| [*RGB*](/ps_reference/modules/constants/#rgb) \| [*CMYK*](/ps_reference/modules/constants/#cmyk) \| [*LAB*](/ps_reference/modules/constants/#lab) \| [*SELECTION*](/ps_reference/modules/constants/#selection) \| [*TRANSPARENCY*](/ps_reference/modules/constants/#transparency)

Type for the Channel choice in [ApplyImageSource](/ps_reference/objects/options/applyimagesource/)

___

### ApplyImageLayerType

Ƭ **ApplyImageLayerType**: [*Layer*](/ps_reference/classes/layer/) \| [*MERGED*](/ps_reference/modules/constants/#merged)

Type for the Layer choice in [ApplyImageSource](/ps_reference/objects/options/applyimagesource/).
Select [ApplyImageLayer.MERGED](../constants/#applyimagelayer) to use the pixels from a merged
or flattened version of the document.
