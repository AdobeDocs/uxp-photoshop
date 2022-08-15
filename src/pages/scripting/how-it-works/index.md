---
title: How it works
description: More details about UXP Scripting
contributors:
  - https://github.com/amandahuarng
---

# How UXP Scripting Works
Each Photoshop script file is a plain text file with a `.psjs` file extension. We plan on expanding UXP scripting to other applications and supporting opening scripts via double-click in the future. When this happens, the file extension will help identify which application the script should be launched in. 

## Execution Context
Photoshop sets an execution context while invoking a script.

Within each execution context, only one script can be executed at a time. You cannot invoke another script from the running script. Using the UXP script module, you can access `ExecutionContext`.

```js
const script = await require("uxp").script;
const executionContext = script.executionContext;
```
It provides details about the current script execution, methods to send data to Photoshop, and events to manage script lifecycles. You can also use methods belonging to `executionControl.hostControl` to suspend/resume history states and auto close documents. Read more in the scripting [reference](../reference/).

## Events
Script execution can be cancelled when: 
* a user clicks on "Cancel" in the progress bar
* Photoshop encounters some exception in running a script file 

Script developers can add event handlers to get notified when the command has been cancelled. The callback will receive "reason" as a parameter. 

```js
executionContext.onCancel.addListener((reason) => {
    // reason would be a json object set by PS while cancelling
    reject("Message");
});
``` 

## User Interface
Scripts can only show a dialog UI. Any UI created by a script is modal in nature and must use **global await** or it will be destroyed when the script is done running. Photoshop automatically shows a **progress bar** if the script takes more than 2-3 seconds to finish.


### Global Await
`await` expressions cause `async` function execution to pause until a Promise is either fulfilled or rejected, and to resume execution
of the `async` function after fulfillment. When resumed, the value of the `await` expression is that of the fulfilled Promise.

Global await means awaiting for a global scope async function to finish. 

```js
function anyAsyncFunction() {
    return new Promise((resolve, reject) => {
        const val = Math.random();
        if (val > 0.5) {
            console.log("Resolve promise");
            resolve(val);
        } else {
            console.error("Rejecting promise");
            reject(val);
        }
    })
}

// Global await
try {
    const val = await anyAsyncFunction();
    console.log("Value from function", val);
} catch {
    console.log("Rejected promise!;")
}
console.log("Script completed");
```

## Permitted UXP Modules
With plugin development, developers define which UXP modules they want to access in the `manifest.json` file. Script permissions are managed by Photoshop internally and no manifest configuration is required. 

**At this time, not all UXP modules are accessible by scripts but we plan on enabling more modules in future UXP versions.**  All modules that are currently supported are enabled by default:


| UXP Module | Supported | Current Access Level | Sample
| --- | --- | --- | --- | 
| Fonts | Yes | Installed fonts can be read | [View sample.](../samples/index.md#access-installed-fonts) |
| Clipboard | Yes | Read/write access | [View sample.](../samples/index.md#readwrite-to-clipboard)| 
| LocalFileSystem | Yes | File pickers can be used to open/save files. You can also call the ```getTemporaryFolder API``` to access a temporary data folder. | [View sample.](../samples/index.md#access-the-local-filesystem) |
| Network | No |  |
| LaunchProcess | No |  |
| WebView | No |  |
| IPC  | No |  |

If you need to use the UXP modules that are not yet enabled for scripts, you should opt to create a UXP plugin instead. 

## FAQ
* What are the required minimum versions for UDT (for debugging) and Photoshop?
  * UXP Scripting is available in Photoshop v23.5 and UDT v1.6.
* Can you invoke a script from within another script? 
  * No, inter-script communication is not possible. 
* Can you pass arguments to scripts? 
  * For this first release, passing arguments is not supported but **will be possible in a future release.**
* Can scripts be executed from plugins? 
  * No; however, any UXP script code should be able to run from within a UXP plugin.
* Can I enable permissions for a module?
  * Developers cannot enable or seek the permission for a module. All permitted modules are enabled by default. 
* Why only a limited number of modules are permitted in PS? Do we expect other modules to be enabled in the future?
  * This is the first release of the UXP script module, and we’re working on enabling permissions to access more modules in upcoming releases.