---
title: script
description: Loads and executes a script.
jsDoc: true
---
# script

**Since** UXP v3.0

Loads and executes a script.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/script](https://developer.mozilla.org/en/docs/Web/HTML/Element/script)

**Example**

```html
<script src="index.js"></script>    
```

## Quirks

Note that while Photoshop will allow you to inject `<script>` tags via the HTML5 DOM API and they _will_ execute, you should not rely on this behavior, as this can be a source of significant security risks. You should only use `<script>` tags to load and execute local, static content.
