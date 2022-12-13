---
id: "pixellayercreateoptions"
title: "PixelLayerCreateOptions"
sidebar_label: "PixelLayerCreateOptions"
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

# PixelLayerCreateOptions

An object literal can be constructed with any of the following properties and passed to [Document.createLayer](/ps_reference/classes/document/#createlayer).
As a type, `PixelLayerCreateOptions` can be used in Typescript development.

```javascript
const options = { name: "myLayer", opacity: 80, blendMode: Constants.BlendMode.COLORDODGE };
await require('photoshop').app.activeDocument.createLayer(options);
```

| Name | Type | Default | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| blendMode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | Constants.BlendMode.NORMAL | 22.5 | Blend mode of the newly created layer or group. |
| color | [*LabelColors*](/ps_reference/modules/constants/#labelcolors) | Constants.LabelColors.NONE | 22.5 | Label color of the newly created layer or group. |
| fillNeutral | *boolean* | false | 22.5 | Whether to fill the layer with a neutral color when applying Blend Mode. |
| group | *boolean* | false | 22.5 | Whether to use previous layer to create clipping mask. |
| mode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | Constants.BlendMode.NORMAL | 22.5 | Deprecated, please use &#x60;blendMode&#x60; above as it will override this value. |
| name | *string* | - | 22.5 | Name of the newly created layer. If no value is provided, then a name will be generated following the template, &quot;Layer #&quot;. |
| opacity | *number* | 100 | 22.5 | Opacity of the newly created layer or group. |
