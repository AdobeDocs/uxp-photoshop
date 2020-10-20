# Plugin management

The UXP Developer Tool allows you to create plugins from templates and add existing ones to your developer workspace.

## Creating a new plugin

You can, of course, create a plugin manually -- but using a template can be the fastest way to get started. To create a plugin from the Developer Tool, follow these steps:

* Click **Create Plugin...*.
* A "Create Plugin" dialog appears.
* Supply a plugin name in the **Plugin Name** field.
* Supply a plugin ID in the **Plugin Id** field. During development you can use any identifier you want (as long as it's unique from any other plugin on your system), but for publication, you'll need one from the [Adobe Developer Console](https://console.adobe.io/home).
* Enter the plugin's version in the **Plugin Version** field.
* From the **Host Application** field, select **Adobe Photoshop**.
* Enter `22.0.0` as the minimum version in the **Host Application Version** field. Earlier versions of Photoshop do not support plugins written with UXP. Of course, if your plugin needs features from a later version of Photoshop, you can enter a higher version here.
* Select one of the templates from the **Template** field. The "ps-starter" template will provide a simple plugin with no additional frameworks, whereas the "ps-react-starter" will provide a plugin that's based on React.
* Click **Select Folder**.
* Select where you want the plugin to reside. Note that the plugin files will be created _in the folder you select_, so if you want the plugin to have its own folder, make sure to create a new folder in this dialog.

Once the plugin files are created, the plugin will show up in the Tool's workspace.

## Adding an existing plugin

You're not limited to creating new plugins from the Developer Tool – you can add plugins that you've already started as well.

* Click **Add Plugin...** (if you've not added any plugins, this will read **Add Existing Plugin...**)
* A file picker will appear. This picker expects you to pick the `manifest.json` in your plugin folder.
* Once you close the picker, the plugin will be added to your workspace.

## Removing a plugin

If you're building a lot of plugins, you may find that the workspace may be getting cluttered. You can remove a plugin from the workspace by checking the plugin's associated checkbox and clicking **Remove Selected** (in the upper-right corner). 

<InlineAlert variant="info" slots="text"/>

Removing a plugin from the Developer Tool's workspace does **not** remove the plugin from your storage. You can always add the plugin back later.

