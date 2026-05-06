---
title: Using with React
description: React has a history with Web Components, and this history can often lead to confusing issues. React is not technically incorrect in each of these cases, but it can feel surprising as a developer, and the correct use can often feel non-idiomatic.
jsDoc: true
---
# Using with React

React has a history with Web Components, and this history can often lead to confusing issues. React is not technically incorrect in each of these cases, but it can feel surprising as a developer, and the correct use can often feel non-idiomatic.

## No self-closing tags

Web Components do not support tags that are self-closing. As such, you must always have the full ending tag.

```html
<sp-icon></sp-icon>
```

## Use `class` instead of `className`

Web Components in React use `class` instead of `className`.

## Boolean attributes

When using React with a standard checkbox, you could write something like this:

```js
<input type="checkbox" checked={checked} />
```

This will not work when using `sp-checkbox`, for example, because `checked` is not treated as a boolean attribute. Instead, React falls back to the web standard for attributes: any value (even a string-coerced "false") is treated as `true`. Instead, the web expects `checked` to not be present _at all_ if the checkbox should be unchecked.

In React, this means you need to write the following code so that React knows _not_ to emit the attribute:

```js
<sp-checkbox checked={checked ? true : undefined}></sp-checkbox>
```

## Event Handling

React does not attach event listeners to elements that are Web Components. This is again, technically correct, as React can't know that a particular attribute is an event handler, but it does lead to surprising results that feel broken as event handlers aren't called correctly.

The simplest fix is to add a `ref` to the component and attach event listeners. This results in a lot of unnecessary code, and so we built a [simple wrapper comonent (WC)](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/blob/main/ui-react-starter/src/components/WC.jsx) that takes care of the hard work for us. You'll see examples of this in our [plugin samples](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/blob/main/ui-react-starter/src/components/ColorPicker.jsx#L40) where we wrap Spectrum UXP components with this component.


