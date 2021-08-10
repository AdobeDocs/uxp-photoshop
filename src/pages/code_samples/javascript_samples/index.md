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

# Plain JavaScript Samples

Plain (also called "Vanilla") JavaScript is JavaScript without any libraries or frameworks. Because of that, it's also the easiest environment in which to show examples.

The examples are described briefly below. You can find the source code for these in GitHub [here](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples).

## Direct Action ("headless")

The simplest of all plugin patterns in terms of UI. A "headless" plugin is one that has no user interface. When the user selects the plugin from Photoshop's Plugins menu, the plugin runs silently.

Why would you want to do this? If your plugin only does one thing, and has no options or user-entered parameters, you could create it without any UI. The only time you would need a UI would be if the plugin failed in some way, at which point you should display a message describing the failure.

[This example](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/direct-action-js-sample) shows how to get the layer names of the current document and write them to a file. No user interaction is involved.

## Hello, World Alert

In the spirit of the gold standard for trivial examples since the publication of *The C Programming Language* book in 1978 (and [earlier](https://www.thesoftwareguild.com/blog/the-history-of-hello-world/)), [this plugin example](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/hello-world-js-sample) does nothing but display a Photoshop alert. But it gives you the idea of the structure of simple plugins that use only pure JavaScript (no HTML or CSS).

## Hello, World Panel

A Panel is a common interface element in Photoshop. Panels are everywhere. You would choose to create a panel-based plugin if you had a UI that needed to persist, as opposed to appearing once and then being dismissed (i.e., a modal dialog).

This is a variant on the plugin above that displays a panel with two buttons. When one button is clicked, the plugin displays a Photoshop alert. Another button fills a list with layer names from the current document. 

[This plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/hello-world-panel-js-sample) shows how you use an index.html file, some basic CSS, and how to capture UI events to trigger plugin actions.

## Layer Creation and Population

[This panel-based plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/layer-creation-js-sample) lets you type text into an input field, then press a button to create a layer containing that text. It also allows you to read the text from a file. This shows input field processing, file I/O, and some debugging techniques.

## Web Service Query

[This plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/web-service-call-js-sample) demonstrates the common use case of needing to talk to an external website (using `fetch`) to obtain some information that's then used in the document. It then creates a document with a layer containing the data returned from the website.

## Theme Awareness

The Photoshop UI supports multiple "themes" (light, dark, etc.). You can use CSS selectors to change the way your UI looks depending upon what theme the user picks in Photoshop Preferences->Interface. [This sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-kitchen-sink) shows the CSS and HTML necessary to make your plugin aware of user-initiated theme changes, and change your color scheme accordingly.
