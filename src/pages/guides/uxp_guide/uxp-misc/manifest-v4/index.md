# Manifest File Structure

The plugin's manifest is where you include metadata about your plugin. Simply put, the manifest is a list of facts about your plugin in the form of a JSON object. No executable code goes into your manifest.

The manifest is located in your plugin's root folder and must be named `manifest.json`.

If you are a bit rusty at reading JSON, [here's a good reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

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
            "icons": [
                {"width":23,"height":23,"path":"icons/dark.png","scale":[1,2],"theme":["darkest","dark","medium"]},
                {"width":23,"height":23,"path":"icons/light.png","scale":[1,2],"theme":["lightest","light"]}
            ]
        }
    ],
    "icons": [
        { "width": 23, "height": 23, "path": "icons/icon_D.png", "scale": [ 1, 2 ], "theme": [ "dark", "darkest" ], "species": [ "generic" ] },
        { "width": 23, "height": 23, "path": "icons/icon_N.png", "scale": [ 1, 2 ], "theme": [ "lightest", "light" ], "species": [ "generic" ] }
    ]
}
```
See the sections below to learn more about each key/value field. All fields are required unless otherwise noted below.

## Top-level metadata

The top level of the manifest JSON object contains high-level information about your plugin.


Here are the definitions of the keywords in the "Required" column:
* Develop - required field for the plugin to be loaded.
* Publish - required field for plugins to be submitted in the Adobe Developer Console and published in the Plugin Manager.

Key path | Type | Description | Required
---------|------|-------------|---------
`manifestVersion` | `number` | The version of the manifest. For Photoshop, this should be `4` or higher. | Develop / Publish
`id`     | `string` | Unique identifier for your plugin. You can get your unique ID on the [Adobe Developer Console](https://console.adobe.io/projects).%7C Develop / Publish
`name`   | `string` | The name should be 3 - 45 characters. We recommend your plugin name matches the _project name_ you created when getting your plugin ID from the Adobe Developer Console. | Develop / Publish
`version`| `string` | Version number of your plugin in `x.y.z` format. <br/>Version must be three segments and each version component must be between `0` and `99`. | Develop / Publish
`main`   | `string` | Path to the your plugin initialization code. This can be a JavaScript file or an HTML file. | Optional (defaults to `main.js`)
`icons` | `IconDefinition[]` | Icons for your plugin (which may be rendered in various contexts, such as the plugin panel) <br/> PNG, JPG/JPEG formats are supported and the max file size for each icon is 1MB. <br/> You should specify at least the 1x and 2x size. Icons for the Plugin Manager are uploaded directly via the Adobe Developer Console, not included within your plugin itself. See our ["Publishing your plugin" guide](../../../../distribution/packaging-your-plugin/) to learn more. | Publish
| `host` | `HostDefinition\|HostDefinition[]` | Describes the supported applications that can be used with this plugin. This can include the type of application, the minimum required version, or the maximum version of the host app that the plugin supports. <br/><br/> **Note:** An array can ONLY be used during development. A single definition will be needed when submitting to the marketplace | Develop / Publish
`entryPoints` | `EntryPointDefinition[]`| Describes the entries your plugin adds to the _Plugins_ menu & plugin panel. See the next section for details. | Develop / Publish

## Icons

Icons are not required during development, but *must be provided* when distributing through the Plugin Marketplace.
The `icons` field is an array of a `IconDefinition`s.

### IconDefinition

Key | Type | Description
----|------|----------------
`width` | `number` | Width in logical pixels
`height` | `number` | Height in logical pixels
`path` | `string` | Path to the icon (relative to the plugin root)
`scale` | `number[]` | Array of scales provided. For example, `[1, 2]` means that there is a `@1x` and `@2x` version of the icon specified at the `path`. (Densities other than `1x` can be specified by adding `@2x` before the icon's extension)
`theme` | `string[]` | Array of themes this icon supports. Photoshop supports `lightest`, `light`, `dark`, and `darkest`. If all themes are compatible with the icon, you can use `all`. (Default is `all`).
`species` | `string[]` | Identifies the type of icon and where it would make sense to display it. The default is `generic`, meaning that Photoshop is free to use this icon anywhere.

## Host

The `host` field is an _object_ matching the `HostDefinition` format specified below. This entry allows your plugin to specify which app your plugin can run on such as Adobe XD or Photoshop. During development, the field can contain an _array_ of HostDefinition's. This can be very convient during development of cross-compatible UXP plugins. However, during submission to the marketplace, only one HostDefinition is allowed.

### HostDefinition

Key | Type | Description | Required
----|------|-------------| --------
`app` | `string` | Indicates the supported application for this plugin (currently, the only valid values here are `"XD"` and `"PS"`). | Develop / Publish
`minVersion` | `string` | Minimum required version of the host app (in `x.y` format) that can run this plugin. The lowest valid version for manifest V4 plugins is version `22.0`. <br/> **Note:** The version number must be at least two segments. Typically, you'll leave the minor segment set to `0`, e.g. `22.0`. | Develop / Publish
`maxVersion` | `string` | Maximum version of host app that can run this plugin. Same formatting as `host.minVersion`. | Optional

## Entry Points

The `entryPoints` field is an _array_ of objects matching the `EntryPointDefinition` format specified below. These entries appear both in the _Plugins_ menu in the native menubar, and the plugin panel.

Each entry point specifies a `type`, to create either a direct-action command or a panel show/hide command.

### EntryPointDefinition

Key | Type | Description
----|------|------------
`type` | `string` | Entry point type: either `"command"` or `"panel"`.
`id`   | `string` | Unique identifier for the entry point. This `id` will also be mapped to entrypoints defined in your plugin code.
`label` | `string` | Label for this menu item that the user will select to run your plugin. May be a single string _or_ a dictionary of localized strings.
`shortcut` | `Object` | _Optional._ <br/><br/> Object defining Mac and Windows keyboard shortcuts for this menu item. See "Keyboard shortcuts" below for details. Only valid for `command` entry points.
`minimumSize` | `Object` | _Optional._ Valid only for `panel` entry points. <br/><br/> Object defining the preferred minimum size of the panel. This object is of the form `{width: number, height: number}` where each length is in pixel units. The host app may not guarantee the minimum width depending upon context.
`maximumSize` | `Object` | _Optional._ Valid only for `panel` entry points. <br/><br/> Object defining the preferred maximum size of the panel. This object is of the form `{width: number, height: number}` where each length is in pixel units. The host app may not guarantee the maximum width depending upon context.
`preferredDockedSize` | `Object` | _Optional._ Valid only for `panel` entry points. <br/><br/> Object defining the preferred size of the panel when docked. This object is of the form `{width: number, height: number}` where each length is in pixel units. This setting is a preference, and may not be honored.
`preferredFloatingSize` | `Object` | _Optional._ Valid only for `panel` entry points. <br/><br/> Object defining the preferred size of the panel when floating. This object is of the form `{width: number, height: number}` where each length is in pixel units. This setting is a preference, and may not be honored.
`icons` | `array<object>` | Icons for your panel. Each panel in a plugin requires its own set of icon set, which is shown in the toolbars when minimized, and has no additional treatment supplied. A panel icon is 23x23 (46x46) in size, and can be transparent. These are different from the icons in the main plugin. They are optional during development, but *must* be present in the manifest and the project if the plugin is submitted to the Plugin Marketplace via the Developer Console.

### Keyboard shortcuts
> Shortcuts are not yet available for plugins.

## Menu Localization

Plugin menu item labels or panel labels can be localized to match the host's current UI language setting. Other manifest fields such as `name` _cannot be localized yet._
Localized labels are represented as an object containing multiple translations, instead of a single string value:

```json
"label": {
    "default": "Menu Label",
    "fr": "Etiquette de Menu",
    "de": "Menübezeichnung"
}
```

A default string is always required.

## Inheritance and Overrides

Certain top-level fields can be overridden deeper in the manifest.

* `icons` can be overridden for each panel's entry point.
