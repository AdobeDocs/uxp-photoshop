---
title: "require('uxp').userInfo"
description: Includes information about the user.
---

# require('uxp').userInfo
Includes information about the user.


Add the below permission in your plugin's  `manifest.json` file to use this API.

```js
"requiredPermissions": {
  "enableUserInfo": true
}
```

**Since**: v7.3.0  


## userId()
**Read only**
Get the GUID of the plugin user

**Since**: v7.3.0  
**Example**  
```js
let userId = require('uxp').userInfo.userId(); // Get the GUID of plugin user
console.log(userId); // e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```
