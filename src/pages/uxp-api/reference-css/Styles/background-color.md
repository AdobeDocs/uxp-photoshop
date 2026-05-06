---
title: background-color
description: "Specifies the background color for an element. Supported color formats are as follows:"
jsDoc: true
---
# background-color

**Since** UXP v2.0

Specifies the background color for an element. Supported color formats are as follows:

* Named Colors (See [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js))
* Hex colors
* RGB and RGBA colors
* HSL and HSLA colors

**See**

- [https://developer.mozilla.org/en/docs/Web/CSS/color](https://developer.mozilla.org/en/docs/Web/CSS/color)
- [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js)

**Example**

```css
.someElement {
    backgorund-color: blue;
}
```

## Quirks and Exceptions

* Not all Spectrum UXP components allow color overrides.