---
title: text-overflow
description: Determines if an ellipsis should be shown when text is clipped. Supports clip (default) and ellipsis.
jsDoc: true
---
# text-overflow

**Since** UXP v3.0

Determines if an ellipsis should be shown when text is clipped. Supports `clip` (default) and `ellipsis`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/text-overflow](https://developer.mozilla.org/en/docs/Web/CSS/text-overflow)

**Example**

```css
.someElement {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```

## Quirks and Exceptions

* Text edit fields do not support adding an ellipsis.
* Not all Spectrum UXP components support adding an ellipsis.
