---
title: Unsupported Attributes
description: The following global attributes are unsupported.
jsDoc: true
---
# Unsupported Attributes

The following global attributes are unsupported.

* `accesskey`
* `aria*`
* `autocapitalize`
* `contenteditable`
* `contextmenu`
* `dir`
* `dropzone`
* `hidden`
* `inputmode`
* `is`
* `item*`
* `part`
* `spellcheck`
* `tabindex` (supported, but does not match the specification. Negative values are not focused, and positive values will allow focus, but tab order cannot be specified.)
* `translate`

Along with the above items, most event handlers should be attached using `addEventListener` instead of their `on*` counterparts.