---
id: "rgbcolor"
title: "RGBColor"
sidebar_label: "RGBColor"
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

# RGBColor

Defines an RGB color, used in [SolidColor](/ps_reference/classes/solidcolor/) object.

Please note: RGB with 32 bits per channels is not currently supported. Color values will be rounded to the nearest
range valid for RGB with 16 bits per channel.

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| blue | *number* | R W | 255 | 0..255 | 23.0 | The blue color value. |
| green | *number* | R W | 255 | 0..255 | 23.0 | The green color value. |
| hexValue | *string* | R W | &quot;FFFFFF&quot; | - | 23.0 | The hexadecimal representation of the color.  Ex. returns *FF9801*, but accepts *#ff9801* or *FF9801*. |
| red | *number* | R W | 255 | 0..255 | 23.0 | The red color value. |
| typename | *string* | R | - | - | 23.0 | The class name of the referenced object: *&quot;RGBColor&quot;*. |
