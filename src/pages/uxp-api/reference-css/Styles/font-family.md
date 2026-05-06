---
title: font-family
description: Sets the font family for a given element's text.
jsDoc: true
---
# font-family

**Since** UXP v2.0

Sets the font family for a given element's text.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-family](https://developer.mozilla.org/en/docs/Web/CSS/font-family)

**Example**

```css
.someElement {
    font-family: Helvetica, Arial, 'Courier New';
}
```

## Quirks and Exceptions

* Does not support font families such as `monospace`, `serif` or `sans-serif`.
* If one font can't be located, fallback fonts will be tried until one is found. If none are found, the system font of the host application is used instead.
* By default, the font family used is the host's font. In general you should avoid specifying a font family if you're trying to get the default look and feel.
* Text edit fields do not support overriding the font family.
* Not all Spectrum UXP components support overriding the font family.
