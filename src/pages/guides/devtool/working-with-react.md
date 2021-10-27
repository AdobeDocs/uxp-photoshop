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
title: Working with React
description:
---

# Working with React

When working with React, other frameworks, or bundlers like Webpack and Parcel, you'll need to understand how to effectively use them inside the developer tool. There are various options available to you, depending on your workflow needs.

## Adding a plugin to the workspace

In this particular scenario, you'll essentially have _two_ `manifest.json` files. One will be in your plugin's source code directory, and the other will be in your plugin's distribution directory.

You can load either one of these, but you need to be aware of the differences.

* Adding a plugin using the distribution `manifest.json` means that you're loading the plugin from the distribution folder entirely. If your plugin build steps involve removing and recreating the distribution folder, or cleaning all the files within the folder, your plugin may not reload correctly in the developer tool.
* Adding a plugin using the source `manifest.json` is the preferred option, but you'll also need to edit the plugin's options. Open **••• > Options**, click **Advanced**, and then enter the _relative_ path (from the `manifest.json` file you selected) to your plugin's distribution folder. This will load the plugin in the same manner as the previous point, but any build steps that remove or recreate the distribution folder won't impact reloading the plugin in the developer tool.

Another important note is that if you're adding a plugin that uses a bundler or framework make sure you install its dependencies – for example, if you're downloading the sample plugins for Photoshop, you'll need to run `npm install` or `yarn install` for those based on React. The Developer Tool will not do this for you.

## Watching your plugin

When using bundlers or frameworks, you'll typically have a build step that watches your plugins for changes. The developer tool does not know about your build steps, so if you want the developer tool to reload automatically when changes are detected, you'll need to:

* Run your `watch` build process in a terminal
* **••• > Watch** the desired plugin from the Developer Tool

When your `watch` build process detects a change, it'll rebuild the plugin, and this will cause the Developer Tool to see the resulting build changes and reload the plugin in the host.

