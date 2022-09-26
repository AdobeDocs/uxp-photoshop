---
id: "layercreateoptions"
title: "LayerCreateOptions"
sidebar_label: "LayerCreateOptions"
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

# Layer Create Options

Options to use with [Document.createLayer](/ps_reference/classes/document/#createlayer)

## Properties

| Name | Type | Access | Default | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ |
| blendMode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | R W | normal | 22.5 | Blend mode of the newly created layer |
| color | [*LabelColors*](/ps_reference/modules/constants/#labelcolors) | R W | none | 22.5 | Label color of the newly created layer |
| fillNeutral | *boolean* | R W | false | 22.5 | Whether to fill with neutral color when applying Blend Mode |
| group | *boolean* | R W | false | 22.5 | Whether to use previous layer to create clipping mask |
| mode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | R W | normal | 22.5 | Blend mode of the newly created layer. Deprecated, please use &#x60;blendMode&#x60; above as it will override this value. |
| name | *string* | R W | - | 22.5 | Name of the newly created layer |
| opacity | *number* | R W | 100 | 22.5 | Opacity of the newly created layer |
| typename | *string* | R | - | 22.5 | The class name of the referenced object: *&quot;LayerCreateOptions&quot;*. |
