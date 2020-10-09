# Useful Code Fragments

## UI Fragments

### Show an alert
````js
function showAlert(alertMessage) {
    const psCore = require('photoshop').core;
    psCore.showAlert({ message: alertMessage});
}
````

## Filesystem Fragments

### Saving to Your Plugin's Data Directory
>Note: the plugin directory itself is read-only. If you need to store data that persists through a plugin version update, use this directory, or ask the user for permission to save in a chosen directory.

### Secure Storage
````js
async function saveSecure(key, value) {
  const result = await require('uxp').storage.secureStorage.setItem(key, value);
}

async function loadSecure(key) {
  const result = await require('uxp').storage.secureStorage.getItem(ssKey);
  // note that result is a byte array, which probably needs to be turned into a string. See this article for more info:
  // https://weblog.rogueamoeba.com/2017/02/27/javascript-correctly-converting-a-byte-array-to-a-utf-8-string/
  return result
}

async function countSecure() {
  const result = await require('uxp').storage.secureStorage.length;
  return result;
}
````