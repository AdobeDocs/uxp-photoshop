---
id: "applyimageoptions"
title: "ApplyImageOptions"
sidebar_label: "ApplyImageOptions"
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
description: An object literal can be constructed with the following properties
---

# ApplyImageOptions

An object literal can be constructed with the following properties
and passed to [Layer.applyImage](/ps-reference/classes/layer.md#applyimage).
As a type, `ApplyImageOptions` can be used in Typescript development.

```javascript
const options = {
    source: {
        document: require('photoshop').app.documents[0],
        layer: require('photoshop').app.documents[0].layers[1],
        channel: require('photoshop').app.documents[0].channels[2],
    },
    blending: require('photoshop').constants.ApplyImageBlendMode.SCREEN,
};
await require('photoshop').app.activeDocument.layers[0].applyImage(options);
```

| Name | Type | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ |
| blending | [*ApplyImageBlendMode*](/ps-reference/modules/constants.md#applyimageblendmode) | MULTIPLY | - | 24.5 | The blend mode used to apply the source to the active layer. |
| mask | [*ApplyImageSource*](/ps-reference/objects/options/applyimagesource.md) | - | - | 24.5 | The Mask reference to be used in the Apply Image operation. |
| opacity | *number* | 100 | 0..100 | 24.5 | The opacity used while applying the source to the active layer. |
| preserveTransparency | *boolean* | false | - | 24.5 | Whether to preserve the original transparency of the active layer. |
| source | [*ApplyImageSource*](/ps-reference/objects/options/applyimagesource.md) | - | - | 24.5 | The source reference to be used in the Apply Image operation. |
