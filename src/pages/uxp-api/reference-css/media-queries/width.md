---
title: width
description: Enables you to restrict a set of CSS rules to match when the size of the plugin's dialog or panel meets your specified criteria.
jsDoc: true
---
# width

**Since** UXP v4.1

Enables you to restrict a set of CSS rules to match when the size of the plugin's dialog or panel meets your specified criteria.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/width](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/width)

**Example**

```css
@media (max-width: 700px) {
    .someElement {
        background-color: red;
    }
}
```

## Known Issues

* When a plugin has multiple panels, only the size of the first panel is used for this calculation. As such, media queries based on viewport size do not make much sense when a plugin as two or more panels.