# Icons for Your Plugins

The manifest.json file supports an optional `icons` node. Children of this node describe one or more icons used in your plugin's UI. The icons only apply to panel plugins, not modal dialogs nor faceless plugins. They are shown when a plugin's panel is collapsed.

There can be separate icons for dark and light Photoshop UI themes, and separate icons for various resolutions:

* 1x = 32x32 pixels
* 1.25x = 40x40 pixels
* 1.5x = 48x48 pixels
* 2x = 64x64 pixels

## Quick Start
To use icons in your plugin, follow these steps:

1. Design your icons with a border; for example for a 32x32 1x icon, design it at 23x23 and leave your icon a little border -- this will ensure best rendering. You can use larger sizes, but the results may be blurrier. Leave similar margins for the other sizes.

2. Export your icons with @1x and @2x scales. If you want, you can also export for 1.5 and 1.25x sizes as well. So, if your icon is named "pluginIcon", the files should be:

```
pluginIcon@1x.png [note the "@1x" suffix]
pluginIcon@1.25x.png
pluginIcon@1.5x.png
pluginIcon@2x.png
````

3. In your manifest, use the following form (note that we're assuming you exported the icons above into your plugin's "icons" folder -- not absolutely necessary, but a good organizing practice):

 ````
 "icons": [
    {
      "width": 23,
      "height": 23,
      "path": "icons/pluginIcon.png",
      "scale": [1, 1.25, 1.5, 2],
      "theme": ["darkest", "dark", "light", "lightest", "all"]
    }
  ]
````

Note that the width and height determines the size of the icon in Ps right now, and not the size of your icon's actual resolution. Using anything other than 23x23 is probably going to render poorly.

With this, your plugin's icon should be visible inside Photoshop (but not in the Plugin Panel; this latter limitation is by design).

## Supporting Themes

Photoshop supports multiple themes, and you may choose to create an icon that uses these themes. All the updated samples have theme-appropriate icons.

Using themes is just like supporting a single icon, but now you have two entries inside icons and another set of icon files.

For example:

 ````
    "icons": [
        {
            "width": 23, "height": 23, "path": "icons/dark.png", "scale": [ 1, 2 ],
            "theme": [ "darkest", "dark ]
        }, {
            "width": 23, "height": 23, "path": "icons/light.png", "scale": [ 1, 2 ],
            "theme": [ "lightest", "light" ]
        }
    ]
````

Here the "dark.png" icons will be used when Photoshop is using the dark themes, and "light.png" will be used when Photoshop uses the light themes.

You should seriously supporting themes with your icons, as not doing so may result in poor contrast when using certain themes.

## Supporting multiple panels

Plugins can have more than one panel, and each panel can have its own icon. To support this, you can override the top-level icons entry by adding another entry into your plugin's entrypoint. For example:

 ````
  "entrypoints": [
        {
            "type": "panel",
            "id": "runPanel",
            "icons": [
                {
                    "width": 23, "height": 23, "path": "icons/run-dark.png", "scale": [ 1, 2 ],
                    "theme": [ "darkest", "dark" ]
                }, {
                    "width": 23, "height": 23, "path": "icons/run-light.png", "scale": [ 1, 2 ],
                    "theme": [ "lightest", "light" ]
                }
            ]
        }
    ],
    "icons": [
        {
            "width": 23, "height": 23, "path": "icons/plugin-dark.png", "scale": [ 1, 2 ],
            "theme": [ "darkest", "dark" ]
        }, {
            "width": 23, "height": 23, "path": "icons/plugin-light.png", "scale": [ 1, 2 ],
            "theme": [ "lightest", "light" ]
        }
    ]
````

In the above example, the runPanel panel will show a separate icon.

> You should supply a separate icon for each panel you support. If you don't, the user may not be able to immediately determine which panel they're trying to open.