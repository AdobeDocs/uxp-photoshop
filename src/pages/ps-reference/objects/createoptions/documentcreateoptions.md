---
id: "documentcreateoptions"
title: "DocumentCreateOptions"
sidebar_label: "DocumentCreateOptions"
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
description: An object literal can be constructed with any of the following properties
---

# DocumentCreateOptions

An object literal can be constructed with any of the following properties
and passed to [Photoshop.createDocument](/ps-reference/classes/photoshop.md#createdocument).
As a type, `DocumentCreateOptions` can be used in Typescript development.

```javascript
const options = { name: "Web mockup", preset: "Web Large" };
require('photoshop').app.createDocument(options);
```

| Name | Type | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ |
| depth | *number* | 8 | [8,16,32] | 22.5 | Bit depth |
| fill | [*DocumentFill*](/ps-reference/modules/constants.md#documentfill) | - | - | 22.5 | Fill color of the document. |
| fillColor | [*SolidColor*](/ps-reference/classes/solidcolor.md) | - | - | 23.0 | Custom fill color of the document. |
| height | *number* | - | - | 22.5 | Height of image in pixels. |
| mode | [*NewDocumentMode*](/ps-reference/modules/constants.md#newdocumentmode) | - | - | 22.5 | ImageMode class. |
| name | *string* | - | - | 22.5 | The name to give the new document. |
| pixelScaleFactor | *number* | - | - | 22.5 | Pixel Scale Factor. |
| preset | *string* | - | - | 22.5 | Preset. |
| presetJSON | *string* | - | - | 22.5 | JSON Preset, requires JSONified string. |
| profile | *string* | - | - | 22.5 | Color Profile using profile name. |
| resolution | *number* | - | - | 22.5 | Resolution of image. |
| width | *number* | - | - | 22.5 | Width of image in pixels. |
