---
title: letter-spacing
description: Sets the width inserted between letters.
jsDoc: true
---
# letter-spacing

**Since** UXP v2.0

Sets the width inserted between letters.

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/letter-spacing)

**Example**

```css
.someElement {
    letter-spacing: 3px;
}
```

## Quirks and Exceptions

* Negative values are not valid, and will result in the letters printing on top of each other.
* Not all Spectrum UXP components support overriding the letter spacing.
