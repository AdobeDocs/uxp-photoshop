---
title: CSS Selectors
description: defined Selector
keywords:
  - defined
  - :defined
  - css selectors
  - Pseudo-classes
contributors:
  - https://github.com/kareemmyk
jsDoc: true
---
# :defined

**Since** UXP v6.0

Represents any element that has been defined.

**See:** [:defined](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined)

**Syntax:**
```css
:defined {
  /* ... */
}
```

**Example:**
\<br\>\</br\>
Demonstrates the application of styles via `:defined`
<CodeBlock slots="heading, code" repeat="2" languages="HTML, CSS" />

#### HTML
```html
<simple-custom text="Custom element example text"></simple-custom>

<p>Standard paragraph example text</p>
```
#### CSS
```css
/* Give the `p` elements distinctive background */
p {
  background: yellow;
}

/* Both the custom and the built-in element are given italic text */
:defined {
  font-style: italic;
}

/* Only simple-custom element is applied with green background*/
simple-custom:defined {
  display: block;
  background: green;
}
```