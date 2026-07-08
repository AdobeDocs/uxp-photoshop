---
title: border-style
description: Specifies the type of border to render.
jsDoc: true
---
# border-style

**Since**  UXP v2.0

Specifies the type of border to render.

Value   | Rendering
--------|-----------
`none`  | No border
`solid` | A solid border
`dashed`| A dashed border

All other CSS border styles are treated as `solid`, including `hidden`.

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border-style)  

**Example**

```css
.button {
    border-width: 2px;
    border-style: solid;
    border-color: white;
}
```


## Quirks and Exceptions

* Not all Spectrum UXP components allow border overrides.
* Border styles do not work for specific sides; they can only be applied to the entire element.