---
title: ":active"
description: Matches when the selected element is active. An element is considered to be active when the user is actively clicking on the element.
jsDoc: true
---
# :active

**Since** UXP v3.0

Matches when the selected element is active. An element is considered to be active when the user is actively clicking on the element. 

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)

**Example:**

```css
p:active {
    background-color: yellow;
}
```

## Quirks and Exceptions

* An element that is being right-clicked is considered "active".
* Double-clicking an element will cause it to be unable to be considered "active" until the double-click detection timer expires.
