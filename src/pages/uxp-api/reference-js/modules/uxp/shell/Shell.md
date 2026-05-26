---
title: require('uxp').shell
description: To get an instance: require('uxp').shell<br/>
---

# require('uxp').shell
To get an instance: `require("uxp").shell`\<br/\>
These APIs require UXP Manifest v5 configurations. see [Launch Process](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/#launch-process)



## openPath(path, developerText)
Opens the given file or folder path in the system default application.\<br/\>
NOTE: UWP can access only files in the UWP App sandbox. See [File access permissions in UWP](https://docs.microsoft.com/en-us/windows/uwp/files/file-access-permissions)

**Returns**: `Promise<string>` - Promise that resolves with "" if succeeded or String containing the error message if failed.  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | String representing the path to open |
| developerText | `string` | Information from the plugin developer to be displayed on the user consent dialog. Message should be localized in current host UI locale. |

**Example**  
```js
// for MacOS
shell.openPath("/Users/[username]/Downloads");
shell.openPath("/Users/[username]/sample.txt");

// for Windows
shell.openPath("C:\Users\[username]\Downloads");
shell.openPath("C:\Users\[username]\AppData\Local\...\sample.txt");
```


## openExternal(url, developerText)
Opens the url in the dedicated system applications for the scheme.\<br/\>
NOTE: file scheme is not allowed for openExternal. Use openPath for those cases.

**Returns**: `Promise<string>` - Promise that resolves with "" if succeeded or String containing the error message if failed.  

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | String representing the URL to open |
| developerText | `string` | Information from the plugin developer to be displayed on the user consent dialog. Message should be localized in current host UI locale. |

**Example**  
```js
shell.openExternal("https://www.adobe.com/");
shell.openExternal("https://www.adobe.com/", "develop message for the user consent dialog");
```
**Example**  
```js
shell.openExternal("maps://?address=345+Park+Ave+San+Jose"); // for MacOS
shell.openExternal("bingmaps:?q=345+Park+Ave+San+Jose, +95110"); // for Windows
```

  