---
id: "documentcreateoptions"
title: "DocumentCreateOptions"
sidebar_label: "DocumentCreateOptions"
repo: "uxp-photoshop"
index: "photoshop"
keywords: "
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
"
---

# DocumentCreateOptions

Options to pass into the createDocument API.
Provide `width`, `height`, `resolution`, `fill`, color `mode` parameters, or a saved `preset` name.

| Name | Type | Default | Range | Description |
| :------ | :------ | :------ | :------ | :------ |
| depth | *number* | - | - | Depth |
| fill | [*DocumentFill*](/ps_reference/modules/Constants/#documentfill) | - | - | Fill color of the document |
| fillColor | ColorDescType | - | - | Custom fill color of the document |
| height | *number* | - | - | Height of image in px |
| mode | [*NewDocumentMode*](/ps_reference/modules/Constants/#newdocumentmode) | - | - | ImageMode class |
| name | *string* | - | - | The name to give the new document |
| pixelScaleFactor | *number* | - | - | Pixel Scale Factor |
| preset | *string* | - | - | Preset |
| presetJSON | *string* | - | - | JSON Preset, requires JSONified string |
| profile | *string* | - | - | Color Profile using profile name |
| resolution | *number* | - | - | Resolution of image |
| typename | *string* | &quot;DocumentCreateOptions&quot;
 | - | The class name of the referenced object |
| width | *number* | - | - | Width of image in px |
