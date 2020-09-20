# The API environment

If you're used to writing JavaScript for web pages or Node.js servers, there are some things to know about the JavaScript environment when creating Photoshop plugins.

## Not a browser and not Node.js

While it may feel like it, the Photoshop plugin API environment is not a browser, nor is it Node.js. This means that you shouldn't make assumptions about what APIs are available based on your experience in other JavaScript environments.

However, we do follow standards for API surfaces where appropriate. For example, you'll find our implementation of [`XMLHttpRequest`](/reference/uxp/class/XMLHttpRequest.md) to work as you would expect.

In some cases, we follow standards, but only support a _subset_ of features you might expect in a browser. As an example, see our document on [CSS support](/reference/uxp/namespace/css.html).


## Accessing global APIs

Supported APIs that you would expect as window globals in other enviroments are also available as globals in Photoshop. Examples include `XMLHttpRequest`, `fetch`, `WebSocket`, and more.

APIs that are specific to Photoshop are reachable via [the `require` method](/reference/javascript/javascript-support.html#can-i-use-require). Examples include `Layer`, `Action`, `uxp`, and more.