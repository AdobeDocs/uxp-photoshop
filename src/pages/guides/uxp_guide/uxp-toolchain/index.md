---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
---

# UXP Toolchain

UXP plugins are built using modern JavaScript with the UI created using subsets of HTML and CSS. See [Technology Stack](../../#the-uxp-technology-stack) for more detail.

## Tools for Development

### A Basic Toolchain
In order to build a UXP-based plugin, you'll need the following pieces of software:

- A good text editor. Any modern developer-friendly text editor should work, but many people are using [Visual Studio Code](https://code.visualstudio.com), which has deep integrations with the other pieces needed for UXP, and a wide variety of its own plugins to help with code formatting, syntax checking, JSON parsing, and so on.

- The [UXP Developer Tool](../../uxp-developer-tool/) provides a GUI that allows you to load, unload, and debug plugins. It also creates the `.ccx` files you'll need to distribute your plugin to others.

- If you're using the UXP CLI, you'll need a command-line environment. The Terminal app in macOS works fine, as does the Windows Command Prompt. VS Code has a built-in terminal window which is convenient. And there are a dozen other command-line interpreters on both platforms, including Windows PowerShell. If you're building plugins that don't involve using React, you probably don't need to worry about this.

[Here is a step-by-step walkthrough showing the creation of a Photoshop UXP plugin](../../udt-walkthrough/).

### Advanced Toolchain

 If you're using the UXP Developer Tool, and using plain JavaScript instead of React, you probably don't need any of the following tools.

- [Node.js](https://nodejs.org/en/): a JavaScript runtime environment. It's often used as a backend server in web environments. In the case of UXP, it's used as an engine to help manage installing plugins while using a command-line environment.

- [npm](https://www.npmjs.com): a "package manager" bundled with Node which helps manage your project's dependencies (i.e., other code and files that are needed to make your plugin work). If you're just using bare HTML/CSS/js, you probably don't need npm.

- [yarn](https://yarnpkg.com): a "better" package manager than npm for Node. Many people, including those developing Photoshop UXP tools, are using yarn instead of npm.

### Installing the Tooling
- __UXP Developer Tool for macOS and Windows 10__ - See the instructions [here](/devtool/) to install and run the UXP Developer Toolkit.

-  __Node.js__ - Go to the [Node.js download page](https://nodejs.org/en/download/), download the installer for your platform, and run it. This will also install npm. 

- __yarn__: In order to install yarn you'll need to have npm installed first (see above). After that, use this command:

    ```bash
    npm install yarn --global
    ```

## Intellectual Toolchain
Before starting to build a plugin, you should have a good working knowledge of modern JavaScript. If you're coming from an ExtendScript background and haven't used recent JavaScript, you'll want to make sure that you understand concepts including asynchronous functions, newer JavaScript syntax (e.g., let/const vs "var"), and things like anonymous functions and arrow function expressions. There are thousands of websites and online videos that explain these concepts.

If you're going to be building a non-trivial UI into your plugin, you should also become familiar with [React](https://reactjs.org).

In order to build React-based plugins, you'll need to know a bit about [NodeJS](https://nodejs.org/en/) and [npm, the Node Package Manager](https://www.npmjs.com). Some plugin examples use [Yarn](https://yarnpkg.com), an alternative to npm.

## Useful Utilities and Resources

### Kitchen Sink Example
This is sample code, not actually a tool. But the [uxp-ui-kitchen-sink-plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-kitchen-sink) is very useful in showing the kinds of controls you can use in UXP. It covers both Spectrum and native controls.

### HTML Playground
The [HTML PLayground](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-playground) plugin is designed to make it easy to test out simple HTML layouts in Photoshop using UXP's layout engine. To use this, install the plugin using the UXP Developer Tool.

### batchPlay Logger for ExtendScript developers

Plug the [ExtendScript BatchPlay logger](https://github.com/adobe-uxp/ps-es-to-uxp) jsx code into your ExtendScript project, and it will print out all your `executeAction` and `executeActionGet` methods in a format suitable for use with UXP's BatchPlay.
