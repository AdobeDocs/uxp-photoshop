---
id: "bmpsaveoptions"
title: "BMPSaveOptions"
sidebar_label: "BMPSaveOptions"
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

# BMPSaveOptions

Options for saving a document in BMP format using the [Document.saveAs](/ps_reference/classes/document/#saveas) method

| Name | Type | Default | Range | Description |
| :------ | :------ | :------ | :------ | :------ |
| alphaChannels | *boolean* | - | - | True to save the alpha channels |
| depth | [*BMPDepthType*](/ps_reference/modules/constants/#bmpdepthtype) | - | - | The number of bits per channel |
| flipRowOrder | *boolean* | - | - | True to write the image from top to bottom, available only when osType is OperatingSystem.WINDOWS |
| osType | [*OperatingSystem*](/ps_reference/modules/constants/#operatingsystem) | - | - | The target OS. |
| rleCompression | *boolean* | - | - | True to use RLE compression |
| typename | *string* | &quot;BMPSaveOptions&quot;
 | - | The class name of the referenced object |
