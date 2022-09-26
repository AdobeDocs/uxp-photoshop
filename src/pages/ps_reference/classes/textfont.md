---
id: "textfont"
title: "TextFont"
sidebar_label: "TextFont"
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

# Text Font

Describes a font that is available to the application. Access this object in the [Photoshop.fonts](/ps_reference/classes/photoshop/#fonts) collection.

```javascript
const arialMTFont = require('photoshop').app.fonts.getByName("ArialMT");
```

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| family | *string* | R | 23.0 | The font family. |
| name | *string* | R | 23.0 | The name of the font. |
| parent | [*Photoshop*](/ps_reference/classes/photoshop/) | R | 23.0 | The containing application. |
| postScriptName | *string* | R | 23.0 | The PostScript name of the font. |
| style | *string* | R | 23.0 | The font style. |
| typename | *string* | R | 23.0 | The class name of the referenced object: *&quot;TextFont&quot;*. |
