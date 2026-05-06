---
title: hr
description: Renders a horizontal rule.
jsDoc: true
---
# hr

**Since** UXP v2.0

Renders a horizontal rule.

<InlineAlert variant="warning" slots="text"/>

The horizontal rule is **not** theme-aware. If you want theme-aware elements, you should use the Spectrum UXP correlates, or you can style them manually based upon the `prefers-color-scheme` media query.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/hr](https://developer.mozilla.org/en/docs/Web/HTML/Element/hr)

**Example**

```html
<hr class="large" />
<hr class="medium" /> <!-- default -->
<hr class="small" />
```
## Spectrum UXP Correlate

When using Spectrum UXP, you can get a similar rendering using `sp-divider`.

```html
<sp-divider size="large"></sp-divider>
<sp-divider size="medium"></sp-divider>
<sp-divider size="small"></sp-divider> <!-- default -->
```