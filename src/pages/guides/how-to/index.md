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

# How Do I...

This section provides snippets of HTML, CMS, and JavaScript code needed to accomplish common operations needed in many plugins. There are no complete plugins in this section, only code snippets. Copy and paste these snippets into sections of your plugin as needed.

## Basic JavaScript

If you're already a JavaScript expert, skip this section. But if you're coming to UXP from ExtendScript, you might want to read it.

### How to `#include` An External JavaScript File

JavaScript has never had the `#include` syntax of C and its descendants, nor the `import` of Python. However, recent JavaScript (including that used in UXP) has "modules" and the `require` statement. Here's how to use them:

In the JavaScript file you want to be included, structure it like this:

````js
// file "includeMe.js"
// this file will be included by some other file
function foo(someNumber) {
    return(someNumber * 2);
}

function bar() {
    return(42);
}
module.exports = {
    foo,
    bar
}
````

and then in the file that wants to include the above file, add this line at the top:

````js
const {foo, bar} = require("./includeMe.js");
. . .
    result = foo(3); // will return 6
````
The `require` in UXP isn't as robust as some other include systems (e.g., it doesn't search any global paths to find the file you want), but careful use of relative paths allows you to structure your plugin directory the way you want. For example, you can have a subdirectory named `lib` and require a file in there this way:

`const {foo, bar} = require("./lib/includeMe.js");`

### How to write debugging statements

This one is easy. It's no longer `console.writeln()`:

````js
console.log("foo"); // writes "foo" to the UXP Developer Tool console.

console.error("foo"); // does the same thing, but the text is shown in red so errors are more easily seen.
````

### How to Use Promises and async/await

This is one of the most puzzling features of modern JavaScript for those new to the latest language versions. Basically, `await` allows your code to wait for an operation to complete, without blocking the host application (e.g., Photoshop). But the trick is you *cannot* use `await` in a regular function; any function in which `await` is used has to be declared like this:

````js
    async function foo(argument1, argument2...) {

    }
````
This is a very cavilier treatment of `async` and `await`, which are actually part of a larger `promises` feature in JavaScript. For the real story, consult your favorite search engine. You might start with the highly regarded MDN page [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).

## UXP-specific Snippets

### How to determine the host and OS a plugin is using

Sometimes it's necesssary (for localization or other reasons) to find out what a plugin's host environment is. Here's how to do that:

```js
const host = require('uxp').host;
const locale = host.uiLocale;
const hostName = host.name
const hostVersion = host.version;
const hostOS = require('os').platform(); // note that this is a method, not a property
console.log(`locale: ${locale}  host ${hostName} version ${hostVersion} running on ${hostOS}`);
```

### How to get notified that your panel is opening or closing

In your startup code, add something like this:

```js
document.addEventListener('uxpcommand', (event) => {
  const { commandId } = event
  if (commandId === 'uxpshowpanel') {
    console.log("panel is showing');
  } else if (commandId === 'uxphidepanel') {
    console.log('panel is hiding');
  }
})
```

## File I/O

Files and folders in UXP for Photoshop can exist in four different places:

* Your plugin's home directory. Files in this directory are *read-only*. This is a good place to keep localizations, data files that never change, etc.

* Your plugin's data directory. This is a directory managed by UXP which allows read/write access for *only* your plugin. Files in this directory survive application restarts and OS reboots.

* Your plugin's temp directory. This is a place to store session-specific data which will not necessarily persist. You shouldn't rely on anything in this directory lasting beyond an application restart.

* The host OS filesystem. Access to specific files or folders in the computer's filesystem must be requested of the user by your plugin, by showing a file or folder picker. If the user selects a file and does not cancel, your plugin code receives a `token` which you can use to access that file or folder.

* UXP also provids `Secure Storage`. This is a UXP-managed facility that holds encrypted key/value pairs. This is good for storing login information and any other data that needs to be securely stored. As such, it's not for general file access, but if you're not writing a lot of data it might be appropriate.


### How to Read a File

Coming soon.


### How to Write a File

Coming Soon

## Other Useful Snippets

### How to Display a Simple Alert

Sometimes you don't need a complicated dialog box, just a simple alert message. If you don't need any icons or special branding in your alert, this will do the trick:

```js
const psCore = require('photoshop').core;
psCore.showAlert({ message: 'Warp Factor 9!'});
```