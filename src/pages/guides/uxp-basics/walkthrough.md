# Creating Your UXP Plugin with the UXP Developer Tool

So you have Photoshop, you have the UXP Developer Toolkit, and you have Visual Studio Code or other programmer's text editor. Now what?

First make sure you have the UXP Developer Tool (UDT). You can download installers for the UDT [here](../../linktbd.md). Once it's downloaded, run the installer just like any other on Mac or Windows. On macOS, it creates a folder in your `Applications` folder named "Adobe UXP Developer Tools." On Windows, the folder is on the boot drive in the `Program Files->Adobe` folder. Then follow these steps:


1. Launch Photoshop.
2. Launch the UXP Developer Toolkit. If you've never launched it before, you should see a window like this:

![UDT Start](./images/udt-start.png)

You'll also see this window if you have no plugins loaded in the Toolkit.

The left pane shows applications that are "connected" to the tool. At this time, the only applications that can connect are Photoshop and XD. In this pane, you should see "Adobe Photoshop" in the `Connected Applications` list. If you don't, something is wrong; UDT can't connect to Photoshop. Make sure you're running at least version 22.0.0 of Photoshop; earlier versions did not support UXP.

The center pane shows the plugs that are loaded in UDT, but you don't have any yet. At the top right is a gear icon; if selected, it shows this sheet:

![UDT gear icon sheet](./images/udt-gear-icon.png)

You shouldn't need to change the Service Port, which is what UDT uses to communicate with host applications. Feel free to change the theme.

3. Close that sheet, then click `Create Plugin`. You'll see this dialog:

![Create Plugin dialog](./images/create-plugin.png)

4. Fill in the fields. The text in gray is cue text, _not_ a default value, so you need to fill in _all_ the fields. Give your plugin a unique name (i.e. don't call it "Layers") and plugin ID. Select "Adobe Photoshop" as the Host Application. Select "ps-starter" as the Template.

> For this exercise, we'll use the `ps-starter` template, which creates a very basic plugin using basic JavaScript with no libraries. Other choices in the `Template` popup include `ps-react-starter`, which creates a simple React-based plugin, and `ps-react-typescript`, which creates a React plugin that makes use of [TypeScript](https://www.typescriptlang.org), a strongly-typed variant of JavaScript.

> When you distribute your plugin, you'll need to obtain a plugin ID from the [Adobe Developer Console](https://console.adobe.io/home). For testing, though, just invent an id like 'com.yourname.pluginname'.

5. Click `Next`. UDT will prompt for a location in which to save the plugin files. Note that it _does not_ create a folder by default, so save your files into an empty folder, or click the `create folder` icon in the top left of the Save dialog:

![Create Folder](images/create-folder.png)

6. You should see this message:

![Plugin Created](images/success.png)

> At the moment, the message says you need run extra commands from the terminal. This is not true for simple JavaScript-only plugins.

7. Now, load your new plugin by clicking the `•••` (aka "Actions") menu (next to the name of the plugin you just created), and select `Load`.

![Load Plugin](images/load-plugin.png)

 You should see a message like this at the bottom of the UDT window:
 
 ![Load Successful](./images/udt-load-successful.png)

 Now take a look at Photoshop; your new plugin panel should be running!

 If it didn't load, you'll see an error popup like this:

![Load Failed](./images/udt-load-failed.png)

 Clicking the `Details` link in this message will show an error log indicating why the plugin failed to load:

 ![Failure Log](./images/udt-failure-log.png)

 ## Now What?

 Customize your plugin by editing the .js and .html files, perhaps adding some CSS. Make it your own! Don't forget to edit the `README.md` file and, if necessary, the `manifest.json` file.

In case you've closed your plugin's panel, you can find it again in Photoshop's `Plugin` menu:

 ![Plugins Menu](./images/udt-ps-plugins-menu.png)

 ## Watching, Reloading, and Debugging

 Selecting the `Watch` item from the Actions menu causes the Developer Tool to watch for any changes in your code on disk. 
 Whenever you make a change to a file in your project, UDT will reload your plugin automatically. This makes for a very rapid code->make mistakes->fix mistakes->reload cycle.

 You can also reload your plugin manually by selecting `Reload` from the Actions menu. If you have `Watch` enabled, you shouldn't have to do this. But some people are superstitious.

 You can also debug your plugin by choosing `Debug` from the Actions menu. This brings up a window like this:

 ![Debug Window](./images/udt-debugger.png)

 In this debugger (which resembles the Chromium debugger) you can look at the console log, and do the usual debugger things such as setting breakpoints, stepping into and out of functions, etc. If you just want to look at logs without dealing with the debugger, you can choose the `Logs` option in the Actions menu.

 ## Multiple Plugins

 You can host as many plugins as you want in the UXP Developer Tool. You can either create the plugin folder structure and files from scratch, or you can use the `Create Plugin` button to have it created for you.

 ## Packaging
 In order to distribute your plugin (after it's been throughly polished and debugged), you'll need to package it as a "ccx" file. This is easily accomplished by choosing the `Package` option in the Actions menu. Make sure you get a plugin ID from the [Adobe Developer Console](https://console.adobe.io/home) website before packaging your plugin for distribution.

 To distribute your plugin, see [Packaging and Distributing Your Plugins](../../guides/distribution/index.md).