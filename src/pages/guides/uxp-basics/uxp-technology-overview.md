# UXP Technology Overview

The definitive reference guide for UXP can be found [here](../../api/uxp-reference/index.md), but this section has a brief overview of some key UXP concepts.

## Plugin Folder Structure

A UXP plugin is contained in a single folder, which may contain any number of subfolders. At a minimum, it requires these files at the folder's top level:

* A [manifest.json](./uxp-manifest.md) file. The manifest  identifies a plugin (with a globally unique ID), describes the plugin, identifies its entry points, and more. If your manifest file is malformed or missing pieces, your plugin will not load. No executable code goes in the manifest, only the JSON description of your plugin.

The manifest describes one or more [entry points](./entry-points.md), which define strings that show up in the Plugins menu.

The manifest also contains [icon definitions](plugin-icons.md) describing icons that appear in Photoshop's Plugins panel, and in collapsed panels.

* At least one JavaScript file that contains the plugin's executable code.

* Optionally, if the plugin provides a user interface, one or more HTML files that define that UI.

* Plugins using React require additional components, including `package.json` and `webpack.config.js` files.

__TBD: DO WE NEED TO GO INTO MORE DETAIL ABOUT REACT PACKAGING?__

## UXP Features

* File access

* Network access

* Flyout menus

* Secure s

