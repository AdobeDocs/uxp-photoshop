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

# LayerCreateOptions

| Name | Type | Default | Range | Description |
| :------ | :------ | :------ | :------ | :------ |
| blendMode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | normal
 | - | Blend mode of the newly created layer |
| color | [*LabelColors*](/ps_reference/modules/constants/#labelcolors) | none
 | - | Label color of the newly created layer |
| fillNeutral | *boolean* | false
 | - | Whether to fill with neutral color when applying Blend Mode |
| group | *boolean* | false
 | - | Whether to use previous layer to create clipping mask |
| mode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | normal
 | - | Blend mode of the newly created layer. Deprecated, please use &#x60;blendMode&#x60; above as it will override this value. |
| name | *string* | - | - | Name of the newly created layer |
| opacity | *number* | 100
 | - | Opacity of the newly created layer |
| typename | *string* | &quot;LayerCreateOptions&quot;
 | - | The class name of the referenced object |
