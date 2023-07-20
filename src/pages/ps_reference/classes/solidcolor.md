---
id: "solidcolor"
title: "SolidColor"
sidebar_label: "SolidColor"
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

# Solid Color

Represents a color, and allows for mapping into all available Photoshop color models.
Import SolidColor from the Photoshop's app object:

```javascript
const SolidColor = require("photoshop").app.SolidColor;
```

When a property is accessed (either via read or write), the current color model
of the SolidColor objects gets set to the space of the accessor. Photoshop internally
converts the color across these color spaces using the Color Settings set by the user.

For example, to set the foreground color to red:

```javascript
const SolidColor = require("photoshop").app.SolidColor;
const red = new SolidColor();
red.rgb.red = 255;
red.rgb.green = 0;
red.rgb.blue = 0;

app.foregroundColor = red;
```

To understand how color models change as you interact with a SolidColor object,
please see example below:

```javascript
const SolidColor = require("photoshop").app.SolidColor;
const c = new SolidColor();
console.log(c.base.typename); // By default, this will be "RGBColor"

c.cmyk.cyan = 50; // Photoshop will convert the color to CMYK using Edit > Color Settings data
console.log(c.base.typename); // Now, the typename will be "CMYKColor"

c.rgb.green = 128; // Typename will change back to "RGBColor"

```

***Fixes in Photoshop 24.2:***
- *Adds range validation for all color modes and its components so it should not be possible to enter invalid value.*

## Constructors

### constructor
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

[*SolidColor*](/ps_reference/classes/solidcolor/)

All colors default to pure white.

```
const SolidColor = require("photoshop").app.SolidColor;
const color = new SolidColor();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `model?` | [*ColorModel*](/ps_reference/modules/constants/#colormodel) | Color model to start. |

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| cmyk | [*CMYKColor*](/ps_reference/colors/cmykcolor/) | R W | 23.0 | The color&#x27;s representation in CMYK color space. |
| gray | [*GrayColor*](/ps_reference/colors/graycolor/) | R W | 23.0 | The color&#x27;s representation in grayscale. |
| hsb | [*HSBColor*](/ps_reference/colors/hsbcolor/) | R W | 23.0 | The color&#x27;s representation in HSB color space. |
| lab | [*LabColor*](/ps_reference/colors/labcolor/) | R W | 23.0 | The color&#x27;s representation in LAB color space. |
| nearestWebColor | [*RGBColor*](/ps_reference/colors/rgbcolor/) | R | 23.0 | The color&#x27;s nearest match within the 216 web-safe colors. |
| rgb | [*RGBColor*](/ps_reference/colors/rgbcolor/) | R W | 23.0 | The color&#x27;s representation in RGB color space. |
| typename | *string* | R | 24.2 | The class name of the referenced object: *&quot;SolidColor&quot;*. |

## Methods

### isEqual
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*boolean*

True if the SolidColor object is visually equivalent to the specified color.

Both colors are converted to Lab colorspace,
and the sum of their normalized squared Euclidian
distance in each space is averaged across the three
then compared to a small constant (3.5e-6).

Due to differences in coverage by various color spaces and clamping,
a color that is converted from RGB to CMYK and back may not be visually equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*SolidColor*](/ps_reference/classes/solidcolor/) |
