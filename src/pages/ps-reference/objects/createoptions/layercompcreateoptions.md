---
id: "layercompcreateoptions"
title: "LayerCompCreateOptions"
sidebar_label: "LayerCompCreateOptions"
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

# LayerCompCreateOptions

An object literal can be constructed with any of the following properties and passed to [LayerComps.add](/ps_reference/classes/layercomps/#add).
As a type, `LayerCompCreateOptions` can be used in Typescript development.

```javascript
const options = { name: "mockup", comment: "First attempt", visibility: true };
await require('photoshop').app.activeDocument.layerComps.add(options);
```

| Name | Type | Default | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| appearance | *boolean* | false | 24.0 | Record the state of the layers&#x27; effects. |
| childComp | *boolean* | false | 24.0 | Record the state of any Layer Comps contained in the recorded layers&#x27; Smart Objects. |
| comment | *string* | null | 24.0 | The comment appears in the Layer Comp Options dialog. |
| name | *string* | - | 24.0 | The name shown in the Layer Comps panel. If no value is provided, then a name will be generated following the template, &quot;Layer Comp #&quot;. |
| position | *boolean* | true | 24.0 | Record the state of the layers&#x27; position. |
| visibility | *boolean* | false | 24.0 | Record the state of the layers&#x27; visibility. |
