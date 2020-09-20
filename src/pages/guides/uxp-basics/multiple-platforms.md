# Creating One Plugin for Multiple Hosts

## Localization and Host Identification

If your plugin requires code-based localization, you can use this method to identify the current locale:

```js
require("uxp").host.uiLocale
// returns string like "en_US" 
```
You can find out what app your plugin is hosted in with these methods:

```js
require("uxp").host.version
// returns string: "22.0.0" (or whatever version)
```
```js
require("uxp").host.name
// returns string like "Photoshop" or "XD"
```
