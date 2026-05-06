---
id: "cmykcolor"
title: "CMYKColor"
sidebar_label: "CMYKColor"
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

# CMYKColor

Defines a CMYK color, used in [SolidColor](/ps_reference/classes/solidcolor/) object.

 ***Fixes in Photoshop 24.2:***
- *Getter now will return number instead of `undefined`*
- *Value used in setter is now respected when passed to Photoshop*

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| black | *number* | R W | 0 | 0.0..100.0 | 23.0 | The black color value, as percentage. |
| cyan | *number* | R W | 0 | 0.0..100.0 | 23.0 | The cyan color value, as percentage. |
| magenta | *number* | R W | 0 | 0.0..100.0 | 23.0 | The magenta color value, as percentage. |
| typename | *string* | R | - | - | 23.0 | The class name of the referenced object: *&quot;CMYKColor&quot;*. |
| yellow | *number* | R W | 0 | 0.0..100.0 | 23.0 | The yellow color value, as percentage. |
