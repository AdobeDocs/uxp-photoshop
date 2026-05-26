---
id: "layertypes"
title: LayerTypes
sidebar_label: "LayerTypes"
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
description: - GroupLayerCreateOptions
---

# types/LayerTypes

## Interfaces

- [GroupLayerCreateOptions](/ps-reference/objects/createoptions/grouplayercreateoptions.md)
- [PixelLayerCreateOptions](/ps-reference/objects/createoptions/pixellayercreateoptions.md)
- [TextLayerCreateOptions](/ps-reference/objects/createoptions/textlayercreateoptions.md)

## Type aliases

### LayerCreateOptions

Ƭ **LayerCreateOptions**: [*PixelLayerCreateOptions*](/ps-reference/objects/createoptions/pixellayercreateoptions.md) \| [*GroupLayerCreateOptions*](/ps-reference/objects/createoptions/grouplayercreateoptions.md) \| [*TextLayerCreateOptions*](/ps-reference/objects/createoptions/textlayercreateoptions.md)

The options passed to [Document.createLayer](/ps-reference/classes/document.md#createlayer) may take any of the following forms:
- PixelLayerCreateOptions
- GroupLayerCreateOptions
