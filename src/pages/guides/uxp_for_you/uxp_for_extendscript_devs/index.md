# UXP for ExtendScript Developers

If you're coming to UXP from ExtendScript and the ESTK (ExtendScript ToolKit) or its 64-bit successor, the [ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug), you'll be pleasantly surprised but you'll also have some new things to learn:

### Different DOM access

UXP provides different methods for accessing the Photoshop DOM. See the [Photoshop API page](/photoshop-specific-apis/index.md) for more information. At present, the entire DOM is not yet supported, but more access is being added with every Photoshop release.

As a workaround until all the significant Photoshop features are accessible via UXP, a 

### Development environment
ExtendScript Toolkit ("ESTK") was the development environment of choice for many years, and still is for many Windows developers. On macOS, ESTK died a lingering death due to the deprecation of 32-bit code. Recently, ESTK has been replaced by a plugin for Visual Studio Code, a widely-used editor.

UXP source code (which is just HTML, CSS, and JavaScript) can be developed in the programming editor of your choice, although many in the UXP world prefer VS Code due to its powerful extensibility features.

### User interface
In some ExtendScripts, there is generally little to no UI; the end user picks a script from the File->Scripts menu, and the script runs facelessly. If your ExtendScript  *does* need a UI, you typically use simple JavaScript `alert()`, `confirm()`, and `prompt()` calls. Or you could use the full-featured but complex [ScriptUI](https://creativepro.com/files/kahrel/indesign/scriptui.html) to create complex dialogs. Moving beyond ExtendScript into CEP, there are more possibilities with panels.

In UXP, on the other hand, you're able to design as simple or as complex a UI as you want, merely by using HTML and CSS to create the visual part, and JavaScript to create the UI's underlying logic (e.g., "what should I do when this button is clicked").

### Modern JavaScript
ExtendScript uses a very old version of JavaScript (ES3), from the era when JavaScript was coded on punched cards. In contrast, UXP uses the V8 JavaScript engine which supports ES6; this has a number of important features lacking in ExtendScript. Not all of the newer features are used and/or supported in the UXP world, but as an ExtendScript developer you'll see enough puzzling syntax in UXP examples that you should probably familiarize yourself with ECMAScript ES6 (the standards body name for JavaScript) so you can understand the sample code.

A full introduction to ES6 features and syntax is beyond the scope of this documentation. You can find many websites that discuss ES6 features, including the popular [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript). Make sure you understand at least these language features, which you will find in UXP code you pick up from around the web:

- ["const" and "let" declarations vs "var"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Promises and asynchronous functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [Anonymous functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

### What's Missing in UXP
UXP provides an HTML interpreter similar to Chromium; it's more limited than a full browser, which means some commonly-used web CSS and HTML idioms don't work. For more information on what does and doesn't work in the UXP HTML environment, see [this document](../uxp-development/unsupported.md).