---
title: calc
description: You can use calc to evaluate arbitrary expressions in the context of a CSS style rule.
jsDoc: true
---
# calc

**Since** UXP v3.0

You can use `calc` to evaluate arbitrary expressions in the context of a CSS style rule. 

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/calc](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/calc)

**Example**

```css
.someElement {
    width: calc(100vh - 50px);
}
```

## Quirks and Exceptions

* `calc` works for length values, not colors. However, you _can_ use `calc` for the numeric portions of an `rgb()` color.