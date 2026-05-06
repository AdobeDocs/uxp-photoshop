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
title: Code Samples—UXP for Adobe Photoshop
description: Learn to build UXP plugins for Photoshop by seeing fully-functioning code samples.
contributors:
  - https://github.com/chuckweger
---

# Code Samples

Below you will find various code samples with links to starter projects that expand on them. These should help you get 
started quickly with your idea, and help you develop a plugin for Photoshop in UXP.

The samples are all available on GitHub [here](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples) where you can clone or fork them. If you're not familiar with GitHub and just want to download the examples, click on the link above and just click the green `Code` button, then click "Download ZIP."

## Theme Awareness

Photoshop provides light and dark themes. Using Spectrum UXP, you can access the Photoshop colors to make your UI look as native as possible.

```css
body {
  background-color: var(--uxp-host-background-color);
  color: var(--uxp-host-text-color);
  border-color: var(--uxp-host-border-color);
  font-size: var(--uxp-host-font-size);
}
```

See [Theme Awareness](/guides/theme-awareness/) for more details.

## Entrypoints

### Menu Items

If your plugin is meant to automate a simple workflow, or you don't need to collect user input, you can expose commands as entry points in your manifest. These kind of plugins will run headless. A "command" type of entry point will define which global scope method in your plugin's JS file should be called when user clicks the menu item.

```json
"entrypoints": [
    {
      "type": "command",
      "id": "writelayers",
      "label": {
        "default": "Export Top Layers..."
      }
    }
  ]
```

```javascript
async function writelayers() {
  // This method will be called by Photoshop when user clicks "Plugins > <Your Plugin> > Export Top Layers...
}
```

See [direct-action-js-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/direct-action-js-sample) as an example that will gather the top layers in the current document, ask user where they want to save, and export them to the folder.

Using this method, you can write one plugin with multiple functionalities.

### Panels

Plugins can present panels that look and feel like the built in panels in Photoshop. 

Defining a "panel" type entrypoint will cause Photoshop to do two things:
- Add a menu item for your plugin with the name defined in the `label` field, based on locale.
- When menu item is clicked, load the `main` field in manifest for the contents of the panel.

See [vanilla-js-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/vanilla-js-sample) as an example project.

```json
"entrypoints": [
    {
      "type": "panel",
      "id": "vanilla",
      "label": {
        "default": "Vanilla JS Sample"
      },
      ...
    }
  ]
```

For all details that go into a panel entrypoint, see [UXP Manifest docs](/guides/uxp_guide/uxp-misc/manifest-v4/).

### Coming Soon - One Off Scripts

For those used to ExtendScript jsx files, we are working on one off scripts where Photoshop can be provided a JavaScript 
file which will be ran on the fly and then be cleaned up. 

## UI Libraries

While writing a simple JS/HTML/CSS plugin is possible, those who are building plugins that have internal state management, 
or more complicated UI may benefit from commonly used UI libraries. Below examples are not necessarily only ones you can use,
but can serve as good starters if you already are familiar with a library.

We do not suggest that you use any particular library for your plugins, but suggest that you read about them and decide
for yourself what will work the best for you.

### React

[React.js](https://reactjs.org/) is one of the most used UI libraries. It's declarative and component based, helping you
break your UI into reusable components. 

See [ui-react-starter](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-react-starter) for the sample project.

### Vue

[Vue.js](https://vuejs.org/) is another declarative UI library that's easy to learn. 

See [ui-vue-starter](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-vue-starter) for the sample project.

### Svelte

[Svelte](https://svelte.dev/) is different from the other two libraries, in the sense that it compiles your code to a 
simple JS application, shrinking it's size.

See [ui-svelte-starter](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-svelte-starter) for the sample project.

## UXP Core APIs

While all APIs under `require("photoshop")` are provided by Photoshop, UXP itself provides core functionality that is shared across
applications, such as file system access, secure storage and web requests.

### File System Access

With UXP, plugins have access only to their own plugin folder, a data folder and a temporary folder. All other file locations
have to be explicitly given access to by the user. See [FileSystemProvider](/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider/)
for information on what APIs and folders are available to you.

See [jszip-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/jszip-sample) for an example of how temporary folder is accessed.

### Secure Storage

This allows you to store data across sessions. Secure storage APIs are all asynchronous.

```javascript
const secureStorage = require("uxp").storage.secureStorage;
const value = await secureStorage.getItem("key");
```

See [secure-storage-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/secure-storage-sample) for an example use of these APIs.

### Web Requests

UXP provides `fetch` method globally, matching HTML DOM `fetch` method. See [fetch](/uxp-api/reference-js/Global%20Members/Data%20Transfers/fetch/) for more details.

See [web-service-call-js-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/web-service-call-js-sample)
for an example plugin that communicates with a web server.

## OAuth Workflows

You can use OAuth to connect to any supporting service that supports it, and provide online functionality in your plugin.

See [oauth-workflow-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/oauth-workflow-sample) to see it in action.

## Cross Compatible JavaScript

UXP, as a unified platform, helps you write plugins for multiple Adobe products. Using `require("uxp").host` you can grab the current host
application's name, and alter your code accordingly. This way, you can write a plugin once, and use it in multiple applications.

See [cross-compatible-js-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/cross-compatible-js-sample) to see it in action.

## External Processes

Currently, we do not support external objects like ExtendScript. However, you can use websockets in UXP to communicate with other 
applications and processes. For an example, see [desktop-helper-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/desktop-helper-sample) and 
[io-websocket-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/io-websocket-sample)

UXP also supports WebAssembly. See [wasm-rust-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/wasm-rust-sample) for an example project
that compiles Rust code into WASM and runs it via the UXP plugin.
