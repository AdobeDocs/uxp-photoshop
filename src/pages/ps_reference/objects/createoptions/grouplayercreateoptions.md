---
id: "grouplayercreateoptions"
title: "GroupLayerCreateOptions"
sidebar_label: "GroupLayerCreateOptions"
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

# GroupLayerCreateOptions

An object literal can be constructed with any of the following properties
and passed to [Document.createLayerGroup](/ps_reference/classes/document/#createlayergroup).
As a type, `GroupLayerCreateOptions` can be used in Typescript development.

```javascript
const options = { name: "myGroup", opacity: 50 };
await require('photoshop').app.activeDocument.createLayerGroup(options);
```

| Name | Type | Default | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| blendMode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | Constants.BlendMode.NORMAL | 22.5 | Blend mode of the newly created layer or group. |
| color | [*LabelColors*](/ps_reference/modules/constants/#labelcolors) | Constants.LabelColors.NONE | 22.5 | Label color of the newly created layer or group. |
| fromLayers | [*Layer*](/ps_reference/classes/layer/) \| [*Layer*](/ps_reference/classes/layer/)[] | - | 22.5 | Layer(s) to populate the newly created group. |
| group | *boolean* | false | 22.5 | Whether to use previous layer to create clipping mask. |
| mode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | Constants.BlendMode.NORMAL | 22.5 | Deprecated, please use &#x60;blendMode&#x60; above as it will override this value. |
| name | *string* | - | 22.5 | Name of the newly created layer group. If no value is provided, then a name will be generated following the template, &quot;Group #&quot;. |
| opacity | *number* | 100 | 22.5 | Opacity of the newly created layer or group. |
