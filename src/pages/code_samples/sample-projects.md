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

## Plain JavaScript Samples

Plain (also called "Vanilla") JavaScript is JavaScript without any libraries or frameworks. Because of that, it's also the easiest environment in which to show examples.

### Direct Action ("headless")

The simplest of all plugin patterns in terms of UI. A "headless" plugin is one that has no user interface. When the user selects the plugin from Photoshop's Plugins menu, the plugin runs silently.

Why would you want to do this? If your plugin only does one thing, and has no options or user-entered parameters, you could create it without any UI. The only time you would need a UI would be if the plugin failed in some way, at which point you should display a dialog describing the failure.

This example shows how to get the layer names of the current document and write them to a file. No user interaction is involved.

### Hello, World Dialog

In the spirit of the gold standard for trivial examples since the publication of *The C Programming Language* book in 1978 (and [earlier](https://www.thesoftwareguild.com/blog/the-history-of-hello-world/)), this plugin example does nothing but display a dialog box. But it gives you the idea of the structure of simple plugins that use only pure JavaScript (no HTML or CSS).

### Hello, World Panel

This is a variant on the plugin above that displays nothing but a panel with a button. When the button is clicked, the plugin displays a dialog. Another button fills a list with layer names from the current document. This plugin shows how you use an index.html file, some basic CSS, and how to capture UI events to trigger plugin actions.

### Layer Creation and Population

This panel-based plugin lets you type text into an input field, then press a button to create a layer containing that text. It also allows you to read the text from a file. This shows input field processing, file I/O, and some debugging techniques.

### Web Service Query

This plugin demonstrates the common use case of needing to talk to an external website (using `fetch`) to obtain some information that's then used in the document. It then creates a document with a layer containing the data returned from the website.

### Creating A Listbox

A listbox component is not included in Spectrum-CSS, but it's not hard to simulate one using `<sp-menu>` and some simple CSS.

### Multi-App Sample

This plugin shows how to build a single code base that supports multiple Creative Cloud applications.

### Theme Awareness

The Photoshop UI supports multiple "themes" (light, dark, etc.). You can use CSS selectors to change the way your UI looks depending upon what theme the user picks in Photoshop Preferences->Interface.

## React Samples

[React](https://reactjs.org) is a very popular modern JavaScript framework. UXP plugins can be built using React to enable complex UIs which would otherwise require complex and difficult-to-maintain JavaScript.

If you've never used React, one of the best places to start is with the (React Tutorial)[https://reactjs.org/tutorial/tutorial.html].

### React sample 1

Description coming soon.

### React sample 2

Description coming soon.

### batchPlay Samples

As of this writing, not all of the Photoshop DOM is exposed to UXP. If an interface for your favorite Photoshop functionality isn't present in UXP, you may be able to use batchPlay to access what you need. These examples demonstrate how to do things using batchPlay.

### batchPlay sample 1

Description coming soon.

### batchPlay sample 2

Description coming soon.

### batchPlay sample 3

Description coming soon.