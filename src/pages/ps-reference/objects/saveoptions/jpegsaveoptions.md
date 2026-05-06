---
id: "jpegsaveoptions"
title: "JPEGSaveOptions"
sidebar_label: "JPEGSaveOptions"
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
description: "| Name | Type | Access | Default | Range | Min Version | Description |"
---

# JPEG Save Options

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| color | [*SolidColor*](/ps-reference/classes/solidcolor.md) | R W | - | - | 22.5 | A custom color to use to fill anti-aliased edges adjacent to transparent areas of the image. Mutually exclusive with &#x27;matteColor&#x27;. |
| customMatte | [*SolidColor*](/ps-reference/classes/solidcolor.md) | R W | - | - | 22.5 | Custom matting color; overrides matteColor |
| embedColorProfile | *boolean* | R W | - | - | 22.5 | False to skip embedding the color profile in the document |
| formatOptions | [*JPEGFormatOptions*](/ps-reference/modules/constants.md#jpegformatoptions) | R W | STANDARDBASELINE | - | 22.5 | The JPEG format option to use. |
| matteColor | [*MatteColor*](/ps-reference/modules/constants.md#mattecolor) | R W | - | - | 22.5 | The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Mutually exclusive with &#x27;color&#x27;. |
| quality | *number* | R W | 8 | 0...12 | 22.5 | The image quality setting to use; affects file size and compression. |
| scans | *number* | R W | 3 | 3...5 | 22.5 | The number of scans to incrementally display the image on the page. formatOptions must be JPEGFormatOptions.PROGRESSIVE. |
| typename | *string* | R | - | - | 22.5 | The class name of the referenced object: *&quot;JPEGSaveOptions&quot;*. |
