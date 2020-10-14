# UXP Technology Overview

The definitive reference guide for UXP can be found [here](tbd), but this section has a brief overview of some key UXP concepts.

## Plugin Folder Structure

A UXP plugin is contained in a single folder, which may contain any number of subfolders. At a minimum, it requires these files at the folder's top level:

* A [manifest.json](./uxp-manifest.md) file. The manifest  identifies a plugin (with a globally unique ID), describes the plugin, identifies its entry points, and more. If your manifest file is malformed or missing pieces, your plugin will not load. No executable code goes in the manifest, only the JSON description of your plugin.

The manifest describes one or more entry points, which define strings that show up in the Plugins menu.

The manifest also contains [icon definitions](plugin-icons.md) describing icons that appear in Photoshop's Plugins panel, and in collapsed panels.

* At least one JavaScript file that contains the plugin's executable code.

* Optionally, if the plugin provides a user interface, one or more HTML files that define that UI.

* Plugins using React require additional components, including `package.json` and `webpack.config.js` files.

## Key UXP Features

* File access - UXP can read and write files and folders in the user's filesystem. File accesses outside of the plugin's root folder and a temporary folder require the user's permission. File I/O is discussed [here](./file-access.md). 

* Network access - UXP supports XMLHttpRequest, WebSockets, and Fetch APIs. Network access is discussed [here](./network-io.md).

* Spectrum CSS - UXP plugins can use platform-native HTML components such as buttons, input fields, etc. But a plugin can also use Spectrum CSS components.

* Localization
If you want your plugins to be used internationally, you should localize them. [Here's how to localize your plugins](./localization-and-platforms.md).

* Flyout menus

* JSON: UXP, being rooted in modern JavaScript, has the JSON features you would expect. These include JSON.
