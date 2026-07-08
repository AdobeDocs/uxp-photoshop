---
title: ::after
description: Creates a pseudo-element after the matched element.
jsDoc: true
---
# ::after

**Since** UXP v3.0

Creates a pseudo-element after the matched element. 

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::after](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::after)

**Example:**

```css
.withCommas > *::after {
    content: ",";
}
```