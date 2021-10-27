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

# TextFont

Describes a font that is available to the application. Access this object in the [Photoshop.fonts](/ps_reference/classes/photoshop/#fonts) collection.

```javascript
const arialMTFont = require('photoshop').app.fonts.getByName("ArialMT");
```

## Properties

### family

• `Readonly` **family**: *string*

The font family.

___

### name

• `Readonly` **name**: *string*

The name of the font.

___

### parent

• `Readonly` **parent**: [*Photoshop*](/ps_reference/classes/photoshop/)

The containing application.

___

### postScriptName

• `Readonly` **postScriptName**: *string*

The PostScript name of the font.

___

### style

• `Readonly` **style**: *string*

The font style.

___

### typename

• `Readonly` **typename**: *string*

The class name of the referenced object
