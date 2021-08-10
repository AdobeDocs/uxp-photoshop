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

## Overview

Here are some examples of plugins you can create with UXP in Photoshop. On GitHub, they exist as fully formed projects that you can load immediately to get a flavor for how things work; then you can modify the projects so they become more your own code.

The samples are all available on GitHub [here](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples) where you can clone or fork them. If you're not familiar with GitHub and just want to download the examples, click on the link above and just click the green `Code` button, then click "Download ZIP."

There are three basic kinds of plugins:

- Direct Action ("headless") - a plugin doesn't _have_ to present a UI to the user. If you want to create a plugin that does the same thing each time without any user input, or gets its parameters some other way (say, a configuration file or a website), this might be the way to go.

- Modal Dialog - many plugins can use a simple dialog box to get parameters from the user, then execute code based on those parameters. If you're coming from ExtendScript, you'll most likely be building this type of plugin.

- Panel - panels are everywhere in Photoshop, and plugins can present first-class panels that look and feel like the ones built into Photoshop.

A given plugin can use one or all of the above approaches. For example, a single plugin could use a modal dialog for some operations, a panel for others, and a direct action (invoked by a flyout menu in a panel or a Photoshop's Plugins menu) for other operations. The `manifest.json` specifies what the entry points of your plugin are.

## Plain JavaScript vs React

These samples come in two flavors: one uses plain JavaScript with no extra frameworks, while the other uses the [React](https://reactjs.org) JavaScript framework. If you've never used React, definitely start with the plain (aka "vanilla") JavaScript samples.

The React versions support richer, more complex user interactions, but contain code that will be foreign to you if you've never used React. The packaging of a React-based plugin is also more complex than one using plain JavaScript, due to the dependencies React requires.

When you build a React-based plugin, you will be using command-line tools for the build process, although you can use the UXP Developer Tool for loading and debugging. When you build a plugin that uses plain JavaScript, you only need the UXP Developer Tool (and a text editor, of course).

If you're writing a plugin with a complex UI (for example, a UI that changes depending upon what item in a listbox is selected, or a UI that changes based on the user's selection in Photoshop), you probably want to use React.

## batchPlay

As you browse through the sample code, you'll see occasional use of a method named `batchPlay`. This is a way for your plugin to call Photoshop methods and retrieve data that isn't yet available through the Photoshop API for UXP. There are a number of batchPlay examples to show typical usage of this feature.
