---
id: "calculationsoptions"
title: "CalculationsOptions"
sidebar_label: "CalculationsOptions"
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

# CalculationsOptions

An object literal can be constructed with the following properties
and passed to [Document.calculations](/ps-reference/classes/document.md#calculations).
As a type, `CalculationsOptions` can be used in Typescript development.

```javascript
const options = {
    source1: {
        document: doc,
        layer: doc.layers[0],
        channel: CalculationsChannel.GRAY
        invert: true
    },
    source2: {
        document: doc,
        layer: CalculationsLayer.MERGED,
        channel: doc.channels[2]
    },
    blending: CalculationsBlendMode.DARKEN,
    opacity: 50,
    result: CalculationsResult.NEWCHANNEL
};
await require('photoshop').app.activeDocument.calculations(options);

```

| Name | Type | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ |
| blending | [*CalculationsBlendMode*](/ps-reference/modules/constants.md#calculationsblendmode) | MULTIPLY | - | 24.5 | The blend mode used to merge &quot;Source 1&quot; and &quot;Source 2&quot; together. &quot;Source 1&quot; will be rendered above &quot;Source 2&quot; |
| mask | [*CalculationsSource*](/ps-reference/objects/options/calculationssource.md) | - | - | 24.5 | The Mask reference to be used in the Calculations operation |
| opacity | *number* | 100 | 0..100 | 24.5 | The opacity used for &quot;Source 1&quot; when merged with &quot;Source 2&quot;. |
| result | [*CalculationsResult*](/ps-reference/modules/constants.md#calculationsresult) | - | - | 24.5 | Where to output the result of the Calculations operation |
| source1 | [*CalculationsSource*](/ps-reference/objects/options/calculationssource.md) | - | - | 24.5 | The &quot;Source 1&quot; reference to be used in the Calculations operation. &quot;Source 1&quot; will be rendered above &quot;Source 2&quot; |
| source2 | [*CalculationsSource*](/ps-reference/objects/options/calculationssource.md) | - | - | 24.5 | The &quot;Source 2&quot; reference to be used in the Calculations operation |
