# Getting started

## Get the SDK

Begin by downloading the UXP Hybrid plugin SDK from [Developer Console](https://developer.adobe.com/console/servicesandapis/ps) (here is [what to do if you get “Access Denied”](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/faq/#what-do-i-do-when-i-get-access-denied-upon-login)). Unpack the contents and make sure you check out the README.md. There are special instructions for building and packaging these plugins since they are different from a traditional UXP plugin.

The concept of a hybrid plugin is very similar to Node.js C++ Addons. The dynamically linked shared objects written in C++ are made available to JavaScript. `template-dev` walks you through a very basic example that illustrates how the two worlds communicate.

## Samples

Try the ready-to-use `template-plugin` provided with the SDK to say a quick ‘Hello world!’ in Photoshop via UDT.

With the hybrid plugins, we have relaxed the UXP sandbox restrictions. You can access the file system in the following way:

```jsx
let entry = '/path/to/target.psd';
document.saveAs.psd(entry);
```

This is opposed to a traditional UXP plugin’s method of accessing the file system:

```jsx
let entry = await require('uxp').storage.localFileSystem.getFileForSaving("target.psd");
document.saveAs.psd(entry);
```

<InlineAlert variant="warning" slots="text"/>

The binaries in the `template-plugin` are not code signed. In macOS, please go to ‘Security & Privacy’ in your System Preferences to allow them to load and work properly.

## Debug

UXP Hybrid plugin has both - JavaScript and C++. Use the UDT Debug tool for setting breakpoints for JavaScript.

For debugging C++ code, you must attach to the `Photoshop.exe` process via the IDE. In most IDEs you can find that option under Debug -> Attach to Process.

In the case of macOS, you have to perform a prior step. Follow the instructions [here](https://helpx.adobe.com/ca/photoshop/kb/debug-plugins-in-photoshop-bigsur.html)

## Known Issues

While loading your plugin via the UDT, it may not show your plugin in Photoshop automatically. Uncheck and check the plugin name from the ‘Plugin’ menu item to launch it. The fix for this is expected in a future macOS release.

## Releases

The SDKs are labeled with a UXP version, as the UXP hybrid plugin SDK is designed to be app-independent. In the future, you will be able to use the same SDK to build plugins for other UXP-based applications.

Announcements of new SDK releases will be made in the [Changelog section](../../ps_reference/changelog). Keep in mind that updating to a new SDK version will require recompiling and republishing your plugin, and may also include changes to the minimum host app version supported. Be sure to read the instructions carefully.

However, if you choose not to use the new SDK, your plugin built with an older version of the SDK will still be forward-compatible and will continue to work in newer versions of the host application.