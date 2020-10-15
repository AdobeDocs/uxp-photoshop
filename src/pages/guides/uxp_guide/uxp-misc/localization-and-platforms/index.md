# Localization and Platforms

## Localization

Sometimes it's necesssary (for localization or other reasons) to find out what a plugin's host environment is. Here's how to do that:

```js
const host = require('uxp').host;
const locale = host.uiLocale;
const hostName = host.name
const hostVersion = host.version;

console.log(`locale: ${locale}  host ${hostName} version ${hostVersion}`);
```
You can use the returned strings in `switch` statements (or other control flow techniques) to alter your plugin's behavior, such as outputting the correct strings in messages and dialogs.

You can also use it to change properties of HTML components in your panels (typically the `innerHTML` or `innerText` property) so they contain the correct language strings.

## OS Identification

Sometimes you need to write different code depending upon whether your plugin is hosted on macOS or Windows. You can find out what app your plugin is hosted in with this methods:

```js
const hostOS = require('os').platform(); 
// note that this is a method, not a property.
```
`hostOS` will contain the string "darwin" for macOS and "windows" for, well, Windows.
