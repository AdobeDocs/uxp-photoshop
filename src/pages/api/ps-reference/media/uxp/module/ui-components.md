---
id: "ui-components"
title: "Spectrum UXP Components for 3.8"
sidebar_label: "UI Components"
---

UXP now brings some exciting new widgets to your user interface designs. These widgets will be the same across platforms
and applications, enabling much easier reuse of plugin UI.

You can think of Spectrum UXP components as web components. In general, we follow the 
[Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/) API wherever possible to ensure that you
can also reuse code in UXP and on the web.

> Note: This is separate from the Adobe React Spectrum project. A version of that library compatible with UXP is coming soon.

This version of UXP 3.8 supports the following Spectrum Components:

* [sp-action-button](https://opensource.adobe.com/spectrum-web-components/components/action-button)
* [sp-button](https://opensource.adobe.com/spectrum-web-components/components/button)
* [sp-checkbox](https://opensource.adobe.com/spectrum-web-components/components/checkbox)
* [sp-dropdown](https://opensource.adobe.com/spectrum-web-components/components/dropdown)
* [sp-icon](https://opensource.adobe.com/spectrum-web-components/components/icon)
* [sp-link](https://opensource.adobe.com/spectrum-web-components/components/link)
* [sp-menu](https://opensource.adobe.com/spectrum-web-components/components/menu)
* [sp-menu-group](https://opensource.adobe.com/spectrum-web-components/components/menu-group)
* [sp-menu-item](https://opensource.adobe.com/spectrum-web-components/components/menu-item)
* [sp-radio](https://opensource.adobe.com/spectrum-web-components/components/radio)
* [sp-radio-group](https://opensource.adobe.com/spectrum-web-components/components/radio-group)
* [sp-slider](https://opensource.adobe.com/spectrum-web-components/components/slider)
* [sp-textfield](https://opensource.adobe.com/spectrum-web-components/components/textfield)
* [search](https://opensource.adobe.com/spectrum-web-components/components/search) – use `<sp-textfield type="search"/>`
* [Number field](https://opensource.adobe.com/spectrum-web-components/components/textfield) – use `<sp-textfield type="number"/>`
* [Password field](https://opensource.adobe.com/spectrum-web-components/components/textfield) – use `<sp-textfield type="password"/>`

# Known Bugs

* The widgets currently only support the dark theme. If you're using Ps in the light theme, you'll want to
  switch in order to see the controls rendered correctly.
* If a boolean attribute doesn't appear to work (for example, `invalid`), try using `invalid="true"`.
* Embedded SVG icons in buttons and other controls may appear too large. You can apply CSS styles to adjust this.
* Keyboard focus and accessibilty are currently very limited & buggy.
* `sp-action-button` doesn't support the `toggled` attribute.
* `sp-dropdown` requries that the `sp-menu` have `slot="options"` in order to render correctly. 
* `sp-slider` does not support ticks markings.
* `sp-textfield` supports the Search, Number, and Password field types by specifying `type="search"`, 
  `type="number"`, and `type="password"` respectively.
* `sp-textfield`'s width cannot be controlled.
* `sp-link` may not align with surrounding text.