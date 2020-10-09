# Localization and Platforms

## Localization

If your plugin requires code-based localization, you can use this method to identify the current locale:

```js
require("uxp").host.uiLocale
// returns string like "en_US" 
```
You can use the returned string in `switch` statements (or other control flow techniques) to output the correct strings in messages and dialogs.

You can also use it to change properties of HTML components in your panels (typically the `innerHTML` property) so they contain the correct language strings.

## Host Application Identification

```js
const foo = require("uxp").host.version
// 'foo' contains a string: "22.0.0" (or whatever version)
```
```js
const bar = require("uxp").host.name
// 'bar contains a string like "Photoshop" or "XD"
```
## OS Identification

Sometimes you need to write different code depending upon whether your plugin is hosted on macOS or Windows. You can find out what app your plugin is hosted in with this methods:

```js
const bar = require("os").platform;
// 'bar contains the string "darwin" for macOS and "windows" for, well, Windows
```
