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

# Group Layer Create Options

Options to use with [Document.createLayerGroup](/ps_reference/classes/document/#createlayergroup)

## Properties

| Name | Type | Access | Default | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ |
| color | [*LabelColors*](/ps_reference/modules/constants/#labelcolors) | R W | none | 22.5 | Label color of the newly created layer group |
| fromLayers | [*Layer*](/ps_reference/classes/layer/) \| [*Layer*](/ps_reference/classes/layer/)[] | R W | - | 22.5 | Layer(s) to populate the newly created group |
| mode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | R W | normal | 22.5 | Blend mode of the newly created layer group |
| name | *string* | R W | - | 22.5 | Name of the newly created layer group |
| opacity | *number* | R W | 100 | 22.5 | Opacity of the newly created layer group |
| typename | *string* | R | - | 22.5 | The class name of the referenced object: *&quot;GroupLayerCreateOptions&quot;*. |
