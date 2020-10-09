---
id: "panel"
title: "Sample Panel"
sidebar_label: "Panel Plugins"
---

One way to expose your plugin UI to user is to host it in a Photoshop panel. This approach is most similar to CEP panels, and we hope to provide a guide for migration from CEP to UXP panels in this page.

## Sample Plugin

The easiest way to start writing your own panel plugin is to grab the template repo of our [uxp-starter-panel](https://www.github.com/adobe-photoshop/uxp-starter-panel). By following the instructions on the README, you can get a sample panel repo ready to be built in both dev and production modes. We will keep it up-to-date as we develop UXP in Photoshop.

## (PreRelease) Prerequisites

While we're still developing UXP, we want to make sure these features are behind flags so they don't affect end users. To enable UXP development and see your panels in Photoshop, you will need to add a line to your PSUserConfig.txt file.

Windows:
> C:\Users\{user}\AppData\Roaming\Adobe\Adobe Photoshop 2020 Settings\PSUserConfig.txt

Mac:
> /Users/{user}/Library/Preferences/Adobe Photoshop 2020 Settings/PSUserConfig.txt

Open (or create) this text file, and add the following line:

> `ScriptDeveloper 1`

This will enable Photoshop to start loading UXP plugins, and support your custom panels. 

## Panel Entrypoints

The ui entrypoint of a UXP plugin as a panel is defined in it's `manifest.json` file. This is subject to change, so please refer to latest copy of the starter repository as above.

The plugin will be available in Window > Extensions menu with the plugin's name. This will open up a PS panel with your plugin loaded in it.

## Debugging

In Chrome, navigate to `chrome://inspect`. Press Configure... next to Discover network targets checkbox, and add localhost:9240 (or the port you declared in your debug.json). 

When the plugin is loaded, it should show up with it's ID on this page.