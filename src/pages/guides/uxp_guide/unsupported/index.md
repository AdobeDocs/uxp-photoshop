---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
---

# What's Unsupported in UXP

Since UXP does not include a full-blown web browser with all the bells and whistles, there are a number of HTML and CSS features that are not currently implemented. Some of these are under development, while others (e.g., iFrames) may never appear.

Bookmark this page so you can see after each Photoshop release if anything has changed with the list below.

## Web features
- Drag and drop (coming soon)
- iFrames
- HTML5 Canvas
- `window.location` ( for loading a webpage inside a plugin)
- data attributes and `font-face`
- CSS `float` (use `flexbox`)

## JavaScript Frameworks and Libraries
- jQuery
- Vue.js (although some people have reported success)

## JavaScript workarounds

`window.event.cancelBubble = true` is not supported. Instead, use `event.stopPropagation()`

`getElementsByClassName(something)` is not supported. Instead, use `document.querySelectorAll("something")`
