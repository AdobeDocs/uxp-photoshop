---
id: "applyimagetypes"
title: ApplyImageTypes
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
description: - ApplyImageOptions
---

# types/ApplyImageTypes

## Interfaces

- [ApplyImageOptions](/ps-reference/objects/options/applyimageoptions.md)
- [ApplyImageSource](/ps-reference/objects/options/applyimagesource.md)

## Type aliases

### ApplyImageChannelType

Ƭ **ApplyImageChannelType**: ComponentChannel \| AlphaChannel \| [*RGB*](/ps-reference/modules/constants.md#rgb) \| [*CMYK*](/ps-reference/modules/constants.md#cmyk) \| [*LAB*](/ps-reference/modules/constants.md#lab) \| [*SELECTION*](/ps-reference/modules/constants.md#selection) \| [*TRANSPARENCY*](/ps-reference/modules/constants.md#transparency)

Type for the Channel choice in [ApplyImageSource](/ps-reference/objects/options/applyimagesource.md)

<HorizontalLine />

### ApplyImageLayerType

Ƭ **ApplyImageLayerType**: [*Layer*](/ps-reference/classes/layer.md) \| [*MERGED*](/ps-reference/modules/constants.md#merged)

Type for the Layer choice in [ApplyImageSource](/ps-reference/objects/options/applyimagesource.md).
Select [ApplyImageLayer.MERGED](../../../ps-reference/modules/constants.md#applyimagelayer) to use the pixels from a merged
or flattened version of the document.
