---
title: prefers-color-scheme
description: Enables you to restrict a set of CSS rules to match only when a specific theme is being used by the host application.
jsDoc: true
---
# prefers-color-scheme

**Since** UXP v4.1

Enables you to restrict a set of CSS rules to match only when a specific theme is being used by the host application. 

Value      | Ps | Xd
-----------|----|----
`lightest` | ✓  | \*
`light`    | ✓  | –
`medium`   | –  | –
`dark`     | ✓  | –
`darkest`  | ✓  | –

\* XD only supports a single theme. This wll match the "lightest" theme in XD 35. 

**Example**

```css
:root {
    --primary-color: #E8E8E8; /* default colors are for dark themes */
}
@media (prefers-color-scheme: lightest), (prefers-color-scheme:light) {
    :root {
        --primary-color: #181818; /* override for light themes */
    }
}
```

## Known Issues

* There are occasionally race conditions when applying colors based on this media query, especially for styles created and then applied dynamically. Generally the only time the colors are guaranteed to be correct are when a plugin is loaded or when a theme change is complete.