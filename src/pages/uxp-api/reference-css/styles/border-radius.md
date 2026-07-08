---
title: border-radius
description: Shorthand for setting the border radius.
jsDoc: true
---
# border-radius

**Since**  UXP v2.0

Shorthand for setting the border radius.

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border-radius)  

**Example**

```css
.someElement {
    border-radius: 4px;
}
.card {
    border-radius: 4px 0;
}
```

## Quirks and Exceptions

* Not all Spectrum UXP components allow border overrides.
* If you need to clip an image, be sure to set `overflow: hidden`.