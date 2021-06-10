---
id: "executeAsModal"
title: "ExecuteAsModal Details"
sidebar_label: "ExecuteAsModal"
---

ExecuteAsModal is needed when a plugin wants to make modifications to the Photoshop state. This includes scenarios where the plugin wants to create or modify documents, or the plugin wants to update UI or preference state.

ExecuteAsModal is only available to plugin that is using apiVersion 2 or higher, set in your `manifest.json`'s `host.data.apiVersion` field for `'app': 'PS'`.

Only one plugin at a time can use `executeAsModal`, guaranteeing that the plugin gets exclusive access to Photoshop.

When `executeAsModal` is active, Photoshop enters a modal user interaction state. Similar to when a dialog is shown, some menu items are disabled.
If the modal state lasts a significant amount of time (currently more than two seconds), then a progress bar is shown. The progress bar will identify the plugin that is associated with the modal state, and it will include the ability for the user to cancel the interaction. The following illustrates the progres bar that would be created for a plugin called "Sample Plugin".

![progress bar](./assets/progress-bar.png)

When a plugin is inside a modal scope, then it controls Photoshop. This means that you no longer need to use options such as `modalBehavior` with `batchPlay`.

## API

ExecuteAsModal is exposed on the Photoshop core module.

```javascript
require('photoshop').core.executeAsModal(targetFunction, options);
```
targetFunction is a JavaScript function that will be executed after Photoshop enters a modal state. When the targetFunction completes, then Photoshop will exit the modal state. The targetFunction can be asynchronous.
Only one plugin can be modal at any given time. If another plugin is modal when you call executeAsModal, then executeAsModal will raise an error. It is therefore important to handle errors when calling this method.

It is also recommended that JavaScript awaits on the result from executeAsModal. Without an await, JavaScript would proceed with the subsequent lines of code while Photoshop enters a modal state.

### Example

A typical use case is:
```javascript
try {
    await require('photoshop').core.executeAsModal(targetFunction, {"commandName": "My Script Command"});
    }
    catch(e) {
      if (e.number == 9) {
          showAlert("executeAsModal was rejected (some other plugin is currently inside a modal scope)");
      }
      else {
        // This case is hit if the targetFunction throws an exception
      }
    }
```

### Details

`executeAsModal` takes the following arguments:
1. `targetFunction`: The JavaScript function to execute after Photoshop enters a modal state.
1. `options`: Options describing the request. The following properties are recognized:
   1. `commandName` (required): A string describing the command. This string is shown in the progress bar UI.
   1. `descriptor` (optional): An object with command arguments. See documentation for targetFunction below

The JavaScript target function has the following signature:
```javascript
async function targetFunction(executionContext, descriptor)
```

 - `executionContext` contains functionality related to managing the modal state.
 - `descriptor` contains the values provided to the descriptor property in the options argument to executeAsModal.

#### `executionContext`

Contains the following properties:

* isCancelled: A boolean that is true if the user has cancelled the modal interaction. The user can cancel by hitting the Escape key, or by pressing the "Cancel" button in the progress bar UI.
* onCancel: A function property. If JavaScript assigns a function to this property, then this function is executed if the user cancels the modal interaction.
* reportProgress: A function that JavaScript can use to customize the progress bar. See below for details.
* hostControl: An object containing the following properties:
   * suspendHistory. A function that can be used to suspend history on a target document. See below for details.
   * resumeHistory. A function that can be used to resume history on a target document. See below for details.

If the user cancels the interaction, then JavaScript should return from its target function. JavaScript can use `isCancelled` and `onCancel` to get information about the current cancellation state. In addition to this, Photoshop APIs such as `batchPlay` will raise an error if they are invoked from a targetFunction after the user has cancelled the modal interaction.

The following is an example of a target JavaScript function:

```javascript
async function targetFunction(executionControl) {
  /// Sample batchPlay command
  let target = {_ref:[{_ref:"property", "_property": "hostName"}, {"_ref":"application","_enum":"ordinal","_value":"targetEnum"}]};
  let command = {"_obj": "get", "_target": target};

  while (true) {
    await psAction.batchPlay([command], {});
  }
}

await require("photoshop").core.executeAsModal(targetFunction, {"commandName": "User Cancel Test"});
```
This sample will run until the user cancels the interaction. As soon as the user cancels, the modal scope becomes cancelled, and the next call to batchPlay will raise an exception and exit the targetFunction.

By default, Photoshop shows an indeterminate progress bar while a modal scope is active. The progress bar is shown a few seconds after the modal scope is initiated.
JavaScript can use `reportProgress` to customize this behavior. To obtain a determinate progress bar, JavaScript can specify a value between 0 and 1 when calling reportProgress. Example:
```javascript
async function targetFunction(executionControl) {
  executionControl.reportProgress({"value": 0.3});
}
```

Setting a value will switch the progress bar to be a determinate progress bar.

JavaScript can change the string that is shown in the progress UI by using the `commandName` property. This can be used to inform the user about the current stage of the operation. Example:

```javascript
    executionControl.reportProgress({"value": 0.9, "commandName": "Finishing Up"});
```
![progress bar](./assets/progress-bar-2.png)

The `hostControl` property on the `executionContext` is used for suspending and resuming history states. While a history state is suspended, Photoshop will coalesc all document changes into a single history state with a custom name.

Example:

```javascript
async function historyStateSample(executionContext) {
    let hostControl = executionContext.hostControl;

    // Get an ID for a target document
    let documentID = await getTargetDocument();

    // Suspend history state on the target document
    // This will coalesc all changes into a single history state called
    // 'Custom Command'
    let suspensionID = await hostControl.suspendHistory({
        "historyStateInfo": {
            "name": "Custom Command",
            "target": [ {_ref: "document", _id: documentID}]
        }
    });

    // modify the document
    // . . .

    // resume the history state
    await hostControl.resumeHistory(suspensionID);
}
```
