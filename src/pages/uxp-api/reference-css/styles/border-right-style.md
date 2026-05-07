---
title: border-right-style
description: Specifies the style of right border to render.
jsDoc: true
---
# border-right-style

**Since**  UXP v2.0

Specifies the [style](border-style.md) of right border to render.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-right-style](https://developer.mozilla.org/en/docs/Web/CSS/border-right-style)  

**Example**

```css
.button {
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: white;
}
```

## Quirks and Exceptions

* Not all Spectrum UXP components allow border overrides.
* Border styles do not work for specific sides; they can only be applied to the entire element.