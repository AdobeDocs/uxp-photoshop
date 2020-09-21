# Getting Started with UXP

UXP plugins are built using modern JavaScript with the UI created using subsets of HTML and CSS. See [Technology Stack](../start-here/technology-stack) for more detail.

## Tools for Development

### A basic toolchain
In order to build a UXP-based plugin, you'll need the following pieces of software:

- A good text editor. Any modern developer-friendly text editor should work, but many people are using [Visual Studio Code](https://code.visualstudio.com), which has deep integrations with the other pieces needed for UXP, and a wide variety of its own plugins to help with code formatting, syntax checking, JSON parsing, and so on.

- Either the [UXP Developer Tool](./walkthrough.md) which provides a GUI that allows you to load, unload, and debug plugins, or the command line-based [UXP CLI](https://github.com/adobe-uxp/devtools-cli). The CLI is useful for scripted development toolchains (e.g. React), but has a steeper learning curve; for many plugins, the GUI-based UXP Developer Tool will be sufficient.

- If you're using the UXP CLI, you'll need a command-line environment. The Terminal app in macOS works fine, as does the Windows Command Prompt. VS Code has a built-in terminal window which is convenient. And there are a dozen other command-line interpreters on both platforms, including Windows PowerShell. If you're building plugins that don't involve using React, you probably don't need to worry about this.

[Here is a step-by-step walkthrough showing the creation of a Photoshop UXP plugin](./walkthrough.md).

## Advanced Toolchain

__TBD: CHECK WITH KERRI ABOUT THE REST OF THIS STUFF__

 If you're using the UXP Developer Tool, and using plain JavaScript instead of React, you probably don't need any of the following tools.

- [Node.js](https://nodejs.org/en/): a JavaScript runtime environment. It's often used as a backend server in web environments. In the case of UXP, it's used as an engine to help manage installing plugins while using a command-line environment.

- [npm](https://www.npmjs.com): a "package manager" bundled with Node which helps manage your project's dependencies (i.e., other code and files that are needed to make your plugin work). If you're just using bare HTML/CSS/js, you probably don't need npm.

- [yarn]https://yarnpkg.com: a better package manager for Node. Many people, including those developing Photoshop UXP tools, are using yarn instead of npm.

__TBD KERRI: WHEN ARE YOU RECOMMENDING YARN VS NPM?__

### Intellectual toolchain
Before starting to build a plugin, you should have a good working knowledge of modern JavaScript. If you're coming from an ExtendScript background and haven't used recent JavaScript, you'll want to make sure that you understand concepts including asynchronous functions, newer JavaScript syntax (e.g., let/const vs "var"), and things like anonymous functions and arrow function expressions. There are thousands of websites and online videos that explain these concepts.

If you're going to be building a non-trivial UI into your plugin, you should also become familiar with [React](https://reactjs.org).

In order to build React-based plugins, you'll need to know a bit about [NodeJS](https://nodejs.org/en/) and [npm, the Node Package Manager](https://www.npmjs.com). Some plugin examples use [Yarn](https://yarnpkg.com), an alternative to npm.

### Installing the tooling
- __UXP Developer Tool for macOS__ - [Download the installer DMG file](../../linktbd.md) and double-click to open it. In the folder that opens, double-click the `Install` icon to install. It installs in your `Applications` folder in a folder named `Adobe UXP Developer Tools`.

- __UXP Developer Tool for Windows 10__ - [Download the installer zip file](../../linktbd.md), unzip it, and run `Set-up.exe` in the unzipped folder.

- __UXP CLI (both Mac and Windows)__ - [Download the repository](https://github.com/adobe-uxp/devtools-cli) from GitHub; the `README.md` file contains complete installation instructions.

-  __Node.js__ - this is simple. Go to the [Node.js download page](https://nodejs.org/en/download/), download the installer for your platform, and run it. This will also install npm. 

- __yarn__: In order to install yarn you'll need to have npm installed first (see above). After that, use this command:

    ```npm install yarn --global```

### Technology Overview

Now that you've installed the pieces you need to develop UXP plugins, take a look at an [overview of UXP technology](./uxp-technology-overview.md).


### Useful Utilities and Resources

#### Kitchen Sink Example
This is sample code, not actually a tool. But the [uxp-ui-kitchen-sink-plugin](../../linktbd.md) is very useful in showing the kinds of controls you can use in UXP. It covers both Spectrum and native controls.

#### Alchemist Plugin by Jaroslav Bereza
The third-party [Alchemist plugin](../../linktbd.md) is ideal for developers who need to use batchPlay in their Photoshop plugins. It basically listens to every event in Photoshop and produces a log suitable for use in batchPlay calls. Alchemist also contains an inspector that can be used to browse the Photoshop DOM.

#### HTML Playground
The [HTML PLayground](https://github.com/adobe-uxp/ps-uxp-html-playground) plugin is designed to make it simple to test out simple HTML layouts in Photoshop using UXP's layout engine. To use this, install the plugin using the UXP Developer Tool.

#### batchPlay Logger for ExtendScript developers

Plug the [ExtendScript BatchPlay logger](https://github.com/adobe-uxp/ps-es-to-uxp) jsx code into your ExtendScript project, and it will print out all your `executeAction` and `executeActionGet` methods in a format suitable for use with UXP's BatchPlay.

#### TBD: ANYTHING ELSE?
