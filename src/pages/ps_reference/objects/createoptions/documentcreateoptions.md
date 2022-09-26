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
---

# Document Create Options

Options to pass into the createDocument API.
Provide `width`, `height`, `resolution`, `fill`, color `mode` parameters, or a saved `preset` name.

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| depth | *number* | R W | 8 | [8,16,32] | 22.5 | Bit depth |
| fill | [*DocumentFill*](/ps_reference/modules/constants/#documentfill) | R W | - | - | 22.5 | Fill color of the document. |
| fillColor | [*SolidColor*](/ps_reference/classes/solidcolor/) | R W | - | - | 23.0 | Custom fill color of the document. |
| height | *number* | R W | - | - | 22.5 | Height of image in pixels. |
| mode | [*NewDocumentMode*](/ps_reference/modules/constants/#newdocumentmode) | R W | - | - | 22.5 | ImageMode class. |
| name | *string* | R W | - | - | 22.5 | The name to give the new document. |
| pixelScaleFactor | *number* | R W | - | - | 22.5 | Pixel Scale Factor. |
| preset | *string* | R W | - | - | 22.5 | Preset. |
| presetJSON | *string* | R W | - | - | 22.5 | JSON Preset, requires JSONified string. |
| profile | *string* | R W | - | - | 22.5 | Color Profile using profile name. |
| resolution | *number* | R W | - | - | 22.5 | Resolution of image . |
| typename | *string* | R | - | - | 22.5 | The class name of the referenced object: *&quot;DocumentCreateOptions&quot;*. |
| width | *number* | R W | - | - | 22.5 | Width of image in pixels. |
