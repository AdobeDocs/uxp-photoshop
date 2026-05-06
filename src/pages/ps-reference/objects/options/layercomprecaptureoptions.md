---
id: "layercomprecaptureoptions"
title: "LayerCompRecaptureOptions"
sidebar_label: "LayerCompRecaptureOptions"
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

# LayerCompRecaptureOptions

An object literal can be constructed with any of the following properties and passed to [LayerComp.recapture](/ps_reference/classes/layercomp/#recapture).
As a type, `LayerCompRecaptureOptions` can be used in Typescript development.

```javascript
const options = { visibility: true, position: true };
await require('photoshop').app.activeDocument.layerComps.add(options);
```

| Name | Type | Default | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| appearance | *boolean* | false | 24.0 | Update the recorded state of the layers&#x27; effects. |
| childComp | *boolean* | false | 24.0 | Update the recorded state of any Layer Comps contained in the recorded layers&#x27; Smart Objects. |
| position | *boolean* | false | 24.0 | Update the recorded state of the layers&#x27; position. |
| visibility | *boolean* | false | 24.0 | Update the recorded state of the layers&#x27; visibility. |
