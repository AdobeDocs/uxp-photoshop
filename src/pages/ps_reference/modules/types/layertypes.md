---
id: "layertypes"
title: "LayerTypes"
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
---

# types/LayerTypes

## Interfaces

- [GroupLayerCreateOptions](/ps_reference/objects/createoptions/grouplayercreateoptions/)
- [PixelLayerCreateOptions](/ps_reference/objects/createoptions/pixellayercreateoptions/)
- [TextLayerCreateOptions](/ps_reference/objects/createoptions/textlayercreateoptions/)

## Type aliases

### LayerCreateOptions

Ƭ **LayerCreateOptions**: [*PixelLayerCreateOptions*](/ps_reference/objects/createoptions/pixellayercreateoptions/) \| [*GroupLayerCreateOptions*](/ps_reference/objects/createoptions/grouplayercreateoptions/)

The options passed to [Document.createLayer](/ps_reference/classes/document/#createlayer) may take any of the following forms:
- PixelLayerCreateOptions
- GroupLayerCreateOptions
