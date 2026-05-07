---
title: sp-label
description: Renders a text label. Can also be used to add a label to many Spectrum UXP UI elements when using the slot='label' attribute.
jsDoc: true
---
# sp-label

**Since:** UXP v4.1

Renders a text label. Can also be used to add a label to many Spectrum UXP UI elements when using the `slot="label"` attribute.

**See**:
- [https://spectrum.adobe.com/page/label](https://spectrum.adobe.com/page/label)

**Example**

```html
<sp-label>This is a label</sp-label>
```

## Attributes

You can indicate that a label is required by using the `isrequired="true"` attribute.A

```html
<sp-textfield>
    <sp-label slot="label" isrequired="true">This is a label</sp-label>
</sp-textfield>
```
