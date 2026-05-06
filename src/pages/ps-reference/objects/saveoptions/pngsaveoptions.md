---
id: "pngsaveoptions"
title: "PNGSaveOptions"
sidebar_label: "PNGSaveOptions"
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

# PNG Save Options

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| compression | *number* | R W | 6 | 0...9 | 22.5 | The compression value to be used when method &#x3D; PNGMethod.QUICK |
| interlaced | *boolean* | R W | false | - | 22.5 | True to interlace rows when method &#x3D; PNGMethod.QUICK |
| method | [*PNGMethod*](/ps_reference/modules/constants/#pngmethod) | R W | - | - | 22.5 | PNG File Size optimization method. |
| typename | *string* | R | - | - | 22.5 | The class name of the referenced object: *&quot;PNGSaveOptions&quot;*. |
