---
title: border-top-style
description: Specifies the style of top border to render.
jsDoc: true
---
# border-top-style

**Since**  UXP v2.0

Specifies the [style](../styles/border-style.md) of top border to render.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-top-style](https://developer.mozilla.org/en/docs/Web/CSS/border-top-style)  

**Example**

```css
.button {
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: white;
}
```

## Quirks and Exceptions

* Not all Spectrum UXP components allow border overrides.
* Border styles do not work for specific sides; they can only be applied to the entire element.