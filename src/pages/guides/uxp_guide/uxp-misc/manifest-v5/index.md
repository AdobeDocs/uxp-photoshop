---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - JSON
  - Manifest
  - Scripting
title: Manifest v5
description:
---

# UXP Manifest v5

Manifest v5 gives developers access to a new plugin permissions model and WebViews in modal dialogs. Using the full manifest v5 feature set requires PS 23.3.0 or higher.  (UXP 6.0 or higher)

Upgrade your plugin to use the latest manifest feature set by changing the `manifestVersion` element. 
```json
"manifestVersion": 5
```
## Example manifest
```json
{
    "manifestVersion": 5,
    "id": "YOUR_ID_HERE",
    "name": "Name of your plugin",
    "version": "1.0.0",
    "main": "index.html",
    "host": {
        "app": "PS",
        "minVersion": "23.3.0"
    },
    "entrypoints": [
        {
            "type": "command",
            "id": "commandFn",
            "label": {
                "default": "Show A Dialog"
            }
        },
        {
            "type": "panel",
            "id": "panelName",
            "label": {
                "default": "Panel Name"
            },
            "minimumSize": {"width": 230, "height": 200},
            "maximumSize": {"width": 2000, "height": 2000},
            "preferredDockedSize": {"width": 230, "height": 300},
            "preferredFloatingSize": {"width": 230, "height": 300},
            "icons": [
                {"width":23,"height":23,"path":"icons/dark.png","scale":[1,2],"theme":["darkest","dark","medium"]},
                {"width":23,"height":23,"path":"icons/light.png","scale":[1,2],"theme":["lightest","light"]}
            ]
        }
    ],
    "icons": [
        { "width": 23, "height": 23, "path": "icons/icon_D.png", "scale": [ 1, 2 ], "theme": [ "dark", "darkest" ], "species": [ "generic" ] },
        { "width": 23, "height": 23, "path": "icons/icon_N.png", "scale": [ 1, 2 ], "theme": [ "lightest", "light" ], "species": [ "generic" ] }
    ],
    "requiredPermissions": {
        "network": {
            "domains": [
                "https://adobe.com",         
            ]
        },
        "clipboard": "readAndWrite",
        "webview": {
            "allow": "yes",
            "domains": [ "https://*.adobe.com", "https://*.google.com"]
        },
        "launchProcess": { 
            "schemes":
                [ "https", "slack"],        
            "extensions":
                [ ".xd", ".psd" ]    
        }, 
    },
}
```

## Changes to top-level metadata
Starting from changes to top-level metadata, here are some keys that changed with the v5 upgrade. Read [manifest v4](../manifest-v4/) to learn more about each key/value field.

Key path | Type | Description | Change 
---------|------|-------------|-------
`version` | string| Version number of your plugin in `x.y.z` format. | Plugins can specify semver format with no warnings. <br/>Specify at least one number and the minor and/or patch will be autofilled with zeroes.
`requiredPermissions` | object | Declare [plugin permissions](#plugin-permissions). | New in v5.
`entrypoints` | `EntryPointDefinition[]` | Describes the entries your plugin adds to the _Plugins_ menu and plugin panel. | v5 changes in next section.

## Changes to entry points
The changes to `entryPoints` add flexibility in specifying the initial view/location of plugin panels.

Key | Type | Description | Change
----|------|------------ |------
`id` | string | Unique identifier for the entry point. This `id` will also be mapped to entrypoints defined in your plugin code. | Passed as the id for the uxpcommand, uxpshowpanel, and uxphidepanel
`title` | string | Title for the plugin. <br/>Defaults to plugin's name if none is specified | New in v5.
 

## Plugin Permissions
Plugins using Manifest v5 will enjoy the enhancements in security with the introduction of new permissions model. Users will be asked for their consent when your plugin attempts to use `openExternal`, `openPath`, and `sp-link`/anchor tags. For everything else, consent is given at install time.

Starting with v5, any permissions not explicitly declared in the manifest are not granted by default.

### Network
In order for our plugin to use the network, you must define domains that your plugin will access. You can do this by adding the network object to the requiredPermissions section of the manifest.

```json
{
    "requiredPermissions": {
        "network": {
            "domains": [
                "https://source.unsplash.com",         
            ]
        }
    }
}
```
```html
<img src='https://source.unsplash.com/random'>
```
### Clipboard
To grant read and/or write access to the system clipboard, declare it in `requiredPermissions`.
`clipboard` accepts:
* `readAndWrite` for read/write access
* `read` for read-only access. 

```json
{
    "requiredPermissions": {
        "clipboard": "readAndWrite"
    }
}
```
 
```js
const clipboard = navigator.clipboard;
const dataTransferProviders = {
    'text/plain': 'Sample text'
};
clipboard.writeText(dataTransferProviders).then(
    (result) => {...},
    (error) => {...}
);
```

### Local Filesystem
`localFileSystem` accepts:
* `request`: Allows the plugin to access files on the local file system. For files outside of the plugin's data, temporary, and code folders, the user will be prompted for consent.
* `plugin`: Allows the plugin to access the plugin's sandbox, but does not enable file picker APIs.
  
```json
{
    "requiredPermissions": {
        "localFileSystem": "request"
    }
}
```
 
```js
const fs = require('uxp').storage.localFileSystem;
const file = await fs.getFileForSaving('manifest_demo.txt');
await file.write('Manifest v5 demo');
```
If `plugin` is not specified for plugin storage, the manifest will default to that setting.

### Launch Process
The `launchProcess` permission in the manifest controls the ability to launch applications and open files in other applications. 

With manifest v5, the `launchProcess` permission must be declared to use `openExternal` or `openPath`. 
```json
"permissions": {        
    "launchProcess": {    
        // allows launching files with specified URI schemes         
        "schemes": 
            [ "https", "slack", "adbxd" ],   
        // allows opening files with the specified file extensions          
        "extensions": 
            [ ".pdf", ".xd", ".psd" ],        
    },   
}
```
Both `openPath` and `openExternal` rely on this permission set, and upon either function call, the user will get a runtime consent dialog. Only after they agree will the API call execute. 

### Plugin communication 
If enabled, the plugin can communicate with other installed plugins. Defaults to `false`.
```json
"permissions": {        
    "ipc": {
        "enablePluginCommunication": true   
    }
}
```
```js
const { pluginManager } = require("uxp");
// find the Alchemist plugin in the loaded plugins
const alchemistPlugin = Array.from(pluginManager.plugins).find(plugin => plugin.id==="2bcdb900");   
//What commands and panels are available?
const alchemistCommands = Array.from(alchemistPlugin.manifest.commands, command => command.commandId); // result: ["resetStateFn"]
const alchemistPanels = Array.from(alchemistPlugin.manifest.panels, command => command.panelId); // result: ["inspector"]     
// Show the inspector panel; note that panels can only be made visible -- you can't ask to hide the panel
alchemistPlugin.showPanel("inspector");
// Reset Alchemists state... but be sure you want to do this!
alchemistPlugin.invokeCommand("resetStateFn");
```

## WebViews
WebViews are available with UXP 6.0, and need to be configured in your plugin's manifest (v5 required).

In your `manifest.json`: 
```json
{
    "manifestVersion": 5,
    "requiredPermissions": {
        "webview": {
            "allow": "yes",
            // domains --> string[] | "all"
            "domains": [ "https://*.adobe.com", "https://*.google.com"],
        }
    }
}
```
Then in your plugin's code: 
```html
<dialog>
    <webview id="webview" width="100%" height="360px" src="https://www.adobe.com"></webview>
</dialog>
```

```js
document.querySelector("dialog").showModal();
```

![Webview](webview_example.png)

### Limitations 
WebViews are available within modal dialogs only for now.
