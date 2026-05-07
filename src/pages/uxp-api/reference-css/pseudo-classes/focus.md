---
title: :focus
description: Matches when the selected element is focused. An element is considered to be active when the element has keyboard focus.
jsDoc: true
---
# :focus

**Since** UXP v3.0

Matches when the selected element is focused. An element is considered to be active when the element has keyboard focus.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

**Example:**

```css
input:focus {
    border: 1px solid red;
}
```

## Quirks and Exceptions

* A typically non-interactive element must have a positive tab index in order to be matched by this rule.
