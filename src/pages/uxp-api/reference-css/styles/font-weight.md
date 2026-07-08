---
title: font-weight
description: Sets the font weight for the element.
jsDoc: true
---
# font-weight

**Since** UXP v3.0

Sets the font weight for the element. Supports `normal` (default), `bold`, `lighter`, and `bolder`, as well as the following numeric weights: `50`, `100`, `200`, `300`, `400`, `500`, `550`, `600`, `700`, `800`, `850`, `900`, `950`, and `1000`.

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-weight)

**Example**

```css
.someElement {
    font-weight: bold;
}
```

## Quirks and Exceptions

* Text edit fields do not support overriding the font weight.
* Not all Spectrum UXP components support overriding the font weight.
