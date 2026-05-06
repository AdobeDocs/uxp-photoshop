---
title: border-bottom-style
description: Specifies the style of bottom border to render.
jsDoc: true
---
# border-bottom-style

**Since**  UXP v2.0

Specifies the [style](border-style.md) of bottom border to render.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-style](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-style)  

**Example**

```css
.button {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: white;
}
```

## Quirks and Exceptions

* Not all Spectrum UXP components allow border overrides.
* Border styles do not work for specific sides; they can only be applied to the entire element.