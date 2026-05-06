---
title: Unsupported Elements
description: Only elements found in the surrounding documentation are supported.
jsDoc: true
---
# Unsupported Elements

Only elements found in the surrounding documentation are supported. Unsupported elements such as `<li>`, `<ul>`, etc., are treated as simple `<div>`s. As such, this does mean that you can often style unsupported elements in a way that more closely matches their browser counterparts.

## Typography

Several tags such as `<i>` are not supported. However, you can easily add some CSS in order to support their visual appearance:

```css
i, em { font-style: italic; }
strong { font-weight: bold; }
q:before { content: '“'; }
q:after { content: '”'; }
blockquote { margin: 1em; }
pre { white-space: pre; }
code { font-family: Courier; }
```

## Unordered Lists

UXP does not, by default, support lists or list items. However, you can simulate an unordered list with bullets with some simple CSS.

```css
ul {
    margin-left: 1em;
}
li:before {
    content: '•';
    display: inline-block;
    text-align: center;
    margin-left: -1em;
    width: 1em;
}
```

## Ordered Lists

UXP does not support ordered lists (`<ol>`). You can work around this by manually creating the numbered elements for each item.

## Title

The `<title>` element is not used in UXP. If you do specify it, you may find that it makes itself visible inside your plugin. To remedy this, add the following CSS to your project:

```css
title {
    display: none;
}
```

