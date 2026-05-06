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

# BMP Save Options

Options for saving a document in BMP format using the [Document.saveAs](/ps_reference/classes/document/#saveas) method

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| alphaChannels | *boolean* | R W | 22.5 | True to save the alpha channels. |
| depth | [*BMPDepthType*](/ps_reference/modules/constants/#bmpdepthtype) | R W | 22.5 | The number of bits per channel. |
| flipRowOrder | *boolean* | R W | 22.5 | True to write the image from top to bottom, available only when osType is OperatingSystem.WINDOWS |
| osType | [*OperatingSystem*](/ps_reference/modules/constants/#operatingsystem) | R W | 22.5 | The target OS. |
| rleCompression | *boolean* | R W | 22.5 | True to use RLE compression |
| typename | *string* | R | 22.5 | The class name of the referenced object: *&quot;BMPSaveOptions&quot;*. |
