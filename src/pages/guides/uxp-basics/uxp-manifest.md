# The Manifest File

Every UXP plugin requires a `manifest.json` file that describes the plugin and instructs UXP how to load and run it. The manifest is a list of facts about your plugin in the form of a JSON object. No executable code goes into the manifest.

The structure of this file has had periodic updates, so pay attention to developer announcements about this.

As of this writing, there are two versions of the manifest.json file:

* Version 3.x, supported by Adobe XD until until version TBD
* Version 4.x, supported by Adobe Photoshop

This section only covers the 4.x format, as the 3.x version is deprecated and will be replaced in an upcoming version of XD.

A sample manifest file with explanations of the fields is [here](../reference/structure/manifest.md).

A manifest file may define multiple _entry points_, which are (as it says) the entry points for your plugin's functionality. An entrypoint has one of these "types" in the manifest.json file:

* "command" -- used for faceless plugins and modal dialogs
* "panel" -- used for modeless panels that can be docked, minimized, and closed.

These entry points must correspond to identifiers in your JavaScript code.

If your plugin is unable to load, the first thing to check is your manifest file. Small 

## Known Issues

* In the manifest, icons must not have a prefix in the path, but on the file system, all icons must have prefixes (even for 1x). This means that if you have icon@1x.png and icon@2x.png, your manifest should use path: "icon.png". If you have icon.png on disk instead of icon@1x.png your icons will not load.

* Don't use symlinks for your icons; this may cause them to fail to load.