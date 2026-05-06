---
id: "bitmapconversionoptions"
title: "BitmapConversionOptions"
sidebar_label: "BitmapConversionOptions"
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

# Bitmap Conversion Options

Options for converting an image to bitmap mode, using [Document.changeMode](/ps_reference/classes/document/#changemode) with `ChangeMode.BITMAP`.

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| angle | *number* | R W | - | -180...180 | 23.0 | The angle (in degrees) at which to orient individual dots. See shape property below. Valid only when the method property is set to &#x60;BitmapConversionType.HALFTONESCREEN&#x60;. |
| frequency | *number* | R W | - | 1.0..999.99 | 23.0 | The number of dots (per inch) to use. Valid only when the method property is set to &#x60;BitmapConversionType.HALFTONESCREEN&#x60;. |
| method | [*BitmapConversionType*](/ps_reference/modules/constants/#bitmapconversiontype) | R W | DIFFUSIONDITHER | - | 23.0 | The conversion method. |
| patternName | *string* | R W |  | - | 23.0 | The name of the pattern to use. Valid only when the method property is set to BitmapConversionType.CUSTOMPATTERN. |
| resolution | *number* | R W | 72 | - | 23.0 | The output resolution (in pixels per inch). |
| shape | [*BitmapHalfToneType*](/ps_reference/modules/constants/#bitmaphalftonetype) | R W | - | - | 23.0 | The dot shape. Valid only when the method property is set to BitmapConversionType.HALFTONESCREEN. |
| typename | *string* | R | - | - | 23.0 | The class name of the referenced object: *&quot;BitmapConversionOptions&quot;*. |
