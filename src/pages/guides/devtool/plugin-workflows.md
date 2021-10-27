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
title: Plugin workflows
description:
---

# Plugin workflows

Once you've added a plugin to your developer workspace, there are several things you can do with it. All of the following features are accessed via the **•••**/**Actions** dropdown associated with each plugin.

## Load plugin

Plugins added to the developer workspace do not automatically get added to their supported host application. Instead, once you launch the host application, you'll be able to tell the plugin (**••• > Load**) to launch in the host. This allows you to use the marketplace version of your plugin while you're not doing active development, but load up the development version when you need to make a new version of the plugin.

Plugins that load successfully will show a small green notification at the bottom of the screen indicating that the plugin was loaded. If a plugin _fails_ to load, a small red notification will appear with a **Details** link. If you click this link, the application's logs will appear to help you troubleshoot the reason why the plugin failed to load.

Once your plugin is loaded, you'll typicaly use the **Reload** action if you need to see any changes in your plugin's behavior. However, if you make changes to your plugin's `manifest.json` file, you'll want to use the **Load** action to load the plugin from scratch.

<InlineAlert variant="info" slots="text"/>

If Photoshop is in a "modal" state (showing a dialog, or a tool's changes has yet to be committed -- say, from a cropping operation), your plugin will not appear to load, but you'll receive _no_ messaging about this. If you don't immediately see an indication of failure _or_ success, check Photoshop and exit any modal states. At that point your plugin will then load. (This applies to all actions related to loading.)

## Reload plugin

Clicking **Reload** will reload a plugin's code and restart execution. This action does _not_ reload the plugin's manifest.

## Watch plugin folder for changes

Once loaded, you can click **Watch** to watch your plugin's code for changes. If changes are detected, the plugin will reload automatically. Once you start watching, you can then stop watching by clicking **Unwatch**.

## Debug your plugin

Once loaded, you can click **Debug** to launch a customized version of the Chrome Developer Tools to debug your plugin. Full support for breakpoints, the console, source maps, etc., is supported. The tool does have several limitations including the inability to edit CSS styles in the property inspector, but even so, you can now walk through code, inspect elements, and more.

Once you're done with debugging, you can close the debugger window.

## Show plugin logs

If you want quick access to the logs your plugin may be generating via `console.log` and the like, you can click the **Logs** action. This will launch the debugger, but take you directly to the JavaScript console.

## Package your plugins for distribution

Once you've got a plugin that's ready for sharing, you can click **Package** to get it ready for distribution. Once you select a folder, the plugin package will be written there. The plugin package will always be named after the plugin's ID.

## Open your plugin folder

Sometimes with a lot of plugins it may be tricky to navigate your file system to locate the source code. You can instead use **Open Folder** to open the plugin's folder in Finder or Explorer.

## Edit options

Sometimes it's useful to "break on start" when debugging your plugins. When this option is checked, the plugin will immediately break into the debugger when it is loaded so that you can trace through the plugin's initialization routines.

The **Advanced** section allows you to specify the plugin's build folder, relative to its `manifest.json` file. This is useful when [working with React](../working-with-react/) or other bundlers.

To save changes to these settings, click the **Save** button.

