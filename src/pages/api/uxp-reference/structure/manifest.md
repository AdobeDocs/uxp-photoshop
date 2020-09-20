# The `manifest.json` file

The manifest is where you include metadata about your plugin. Simply put, the manifest is a list of facts about your plugin in the form of a JSON object. No executable code goes into your manifest.

## Example manifest

```json
{
    "manifestVersion": 4,
    "id": "YOUR_ID_HERE",
    "name": "Name of your plugin",
    "version": "1.0.0",
    "main": "index.html",
    "host": {
        "app": "PS",
        "minVersion": "22.0.0"
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
        }
    ],
    "icons": [
        { "width": 32, "height": 32, "path": "icons/icon_D.png", "scale": [ 1, 2 ], "theme": [ "dark", "darkest" ], "species": [ "generic" ] },
        { "width": 32, "height": 32, "path": "icons/icon_N.png", "scale": [ 1, 2 ], "theme": [ "lightest", "light" ], "species": [ "generic" ] }
    ]
}
```

See the sections below to learn more about each key/value field. All fields are required unless otherwise noted below.


## Top-level metadata

The top level of the manifest JSON object contains high-level information about your plugin.
> **WHAT'S REQUIRED?**
>
> Here are the definitions of the letters in the "Required" column:
>
> * __D__ - Develop - required field for the plugin to be loaded.
> * __P__ - Publish - required field for plugins to be submitted in the Adobe Developer Console and published in the Plugin Manager
> * __O__ - Optional - not required

Key path | Type | Description                | Required
---------|------|----------------------------|---------
manifestVersion | number | The version of the manifest. For Photoshop, this should be 4 or higher. | D/P
id | string | Unique identifier for your plugin. You can get your unique ID on the Adobe Developer Console. | D/P
name | string | The name should be 3 - 45 characters. _Note: We recommend your plugin name matches the project name you created when getting your plugin ID from the Adobe Developer Console._ | D/P
version | string | Version number of your plugin in x.y.z format. Version must be three segments and each version component must be between 0 and 99. | D/P
main | string | Path to the your plugin initialization code. This can be a JavaScript file or an HTML file. | O _(defaults to main.js)_
icons | array[icon objects] | Icons for your plugin (which may be rendered in various contexts, such as the plugin panel) PNG, JPG/JPEG formats are supported and the max file size for each icon is 1MB. You should specify at least the 1x and 2x size. _Note: Icons for the Plugin Manager are uploaded directly via the Adobe Developer Console, not included within your plugin itself. See our "Publishing your plugin" guide to learn more._ | P
host.app | string | Indicates that this is a plugin for an Adobe app (currently, the only valid values here are XD or PS). | D/P
host.minVersion | string | Minimum required version of the host app (in x.y format) that can run this plugin. The lowest valid version for Photoshop plugins is 22.0. _Note: The version number must be at least two segments. Typically, you'll leave the minor segment set to 0, e.g. 22.0._ | D/P
host.maxVersion | string | Maximum version of host app that can run this plugin. Same formatting as host.minVersion. | O
entryPoints | array[EntryPointDefinitions] | Describes the entries your plugin adds to the Plugins menu & plugin panel. See the next section for details. | D/P

## Icons

Icons are not required during development, but must be provided when distributing through the Plugin Marketplace.

The icons field is an array of a IconDefinitions:

Key | Type | Description
----|------|------------
width | number | Width in logical pixels
height | number | Height in logical pixels
path | string | Path to the icon (relative to the plugin root)
scale | number[] | Array of scales provided. For example, [1, 2] means that there is a @1x and @2x version of the icon specified at the path. (Densities other than 1x can be specified by adding @2x before the icon's extension)
theme | string[] | Array of themes this icon supports. Photoshop supports lightest, light, dark, and darkest. If all themes are compatible with the icon, you can use all. (Default is _all_).
species | string[] | Identifies the type of icon and where it would make sense to display it. The default is generic, meaning that Photoshop is free to use this icon anywhere.

## Entry Points

The entryPoints field is an array of objects matching the EntryPointDefinition format specified below. These entries appear both in the Plugins menu in the native menubar, and the plugin panel.

Each entry point specifies a type, to create either a __TBD__ direct-action command or a panel show/hide command.

__EntryPointDefinition__

Key | Type | Description
----|------|------------
type | string | Entry point type: either "command" or "panel".
id | string | Unique identifier for the entry point. This id will also be mapped to entrypoints defined in your plugin code.
label | ?string|LocaleMap | Label for this menu item that the user will select to run your plugin. May be a single string or a dictionary of localized strings.
shortcut | object | Optional. Object defining Mac and Windows keyboard shortcuts for this menu item. See "Keyboard shortcuts" below for details. Only valid for command entry points.
minimumSize | Object | Optional. Valid only for panel entry points. Object defining the preferred minimum size of the panel. This object is of the form {width: number, height: number} where each length is in pixel units. The host app may not guarantee the minimum width depending upon context.
maximumSize | Object | Optional. Valid only for panel entry points. Object defining the preferred maximum size of the panel. This object is of the form {width: number, height: number} where each length is in pixel units. The host app may not guarantee the maximum width depending upon context.
preferredDockedSize | Object | Optional. Valid only for panel entry points. Object defining the preferred size of the panel when docked. This object is of the form {width: number, height: number} where each length is in pixel units. This setting is a preference, and may not be honored.
preferredFloatingSize | Object | Optional. Valid only for panel entry points. Object defining the preferred size of the panel when floating. This object is of the form {width: number, height: number} where each length is in pixel units. This setting is a preference, and may not be honored.

# TBD: add the rest of the post of Kerri's (below) to this document.
https://forums.adobeprerelease.com/photoshop/discussion/comment/18040#Comment_18040