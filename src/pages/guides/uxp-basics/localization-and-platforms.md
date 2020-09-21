# Localization and Platforms

## Localization

If your plugin requires code-based localization, you can use this method to identify the current locale:

```js
require("uxp").host.uiLocale
// returns string like "en_US" 
```
You can use the returned string in `switch` statements (or other control flow techniques) to output the correct strings in messages and dialogs.

You can also use it to change properties of HTML components in your panels (typically the `innerHTML` property) so they contain the correct language strings.

## Host Identification

```js
const foo = require("uxp").host.version
// 'foo' contains a string: "22.0.0" (or whatever version)
```
```js
const bar = require("uxp").host.name
// 'bar contains a string like "Photoshop" or "XD"
```
## Platform Identification

Sometimes you need to write different code depending upon whether your plugin is hosted on macOS or Windows. You can find out what app your plugin is hosted in with this methods:

__TBD: THIS DOES NOT CURRENTLY WORK. IS THERE A METHOD THAT DOES?__

```js
const bar = require("uxp").host.platform;
// 'bar contains a string like "Photoshop" or "XD"
```
