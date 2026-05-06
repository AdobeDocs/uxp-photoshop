---
title: ":disabled"
description: Matches when the selected element is disabled.
jsDoc: true
---
# :disabled

**Since** UXP v3.0

Matches when the selected element is disabled. 

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled)

**Example:**

```css
input:disabled {
    border: 1px solid blue;
}
```

## Quirks and Exceptions

* Only works for `<input>`s. Does not work for Spectrum UXP components. For Spectrum UXP checkboxes, use an attribute selector (e.g., `[disabled]`).
