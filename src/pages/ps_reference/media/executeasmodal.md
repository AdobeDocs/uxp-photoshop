---
id: "executeasmodal"
title: "ExecuteAsModal Details"
sidebar_label: "Modal Execution"
---

# Modal Execution in an Async World: executeAsModal

Introduced with [apiVersion](../../../guides/uxp_guide/uxp-misc/manifest-v4/photoshop-manifest/#apiversion) 2, a modal state is required when a plugin wants to make modifications to the Photoshop state. This modal state prevents other operations from outside the plugin from interferring, potentially leading to an unstable application state.  Operations requiring a modal state include creating or modifying documents, or even updating UI or preference state.

Since only one plugin at a time can use `executeAsModal`, exclusive access to Photoshop is guaranteed with respect to other plugins' calls to `executeAsModal`.

When `executeAsModal` is executed, Photoshop enters a modal user interaction state, affecting much of the UI. Note that some menu items are disabled. Again, this measure is also intended to prevent interference.

Once plugin is granted a modal scope, then it controls Photoshop. This means that you no longer need to use options such as `modalBehavior` with `batchPlay`.

<br />


`executeAsModal` can be found on the Photoshop UXP API ["core" module](./photoshopcore).

```javascript
await require('photoshop').core.executeAsModal(targetFunction, options);
```

## Arguments

1. *targetFunction*: The JavaScript function to execute after Photoshop enters a modal state.
1. *options*: An object literal describing [the options for the request](#options-parameter). 

### Target Function parameter
The `targetFunction` parameter is a JavaScript function that will be executed after Photoshop enters the requested modal state. When the `targetFunction` completes, then Photoshop will exit the modal state. It can be asynchronous, but care should be give to ensure it does not return early. It has the following signature:
```javascript
async function targetFunction(executionContext, descriptor)
```

The *executionContext* parameter contains functionality related to managing the modal state. It contains the following properties:

| Name | Type | Description |
| :------ | :------ | :------ |
| isCancelled | boolean | True if the user has cancelled the modal interaction. |
| onCancel | function | If function is assigned to this property, then this function is executed if the user cancels the modal interaction. |
| reportProgress | function | A function that can customize updates to the progress bar. See [progress bar](#progress-bar) below for details. |
| hostControl | object | An object containing the properties in the following table. |
<br />

`hostControl` properties

> | Name | Type | Description |
> | :------ | :------ | :------ |
> | suspendHistory | function | Used to suspend history on a target document. See [History state suspension](#history-state-suspension). |
> | resumeHistory | function | Used to resume history on a target document. See [History state suspension](#history-state-suspension). |
> | registerAutoCloseDocument | function | Register a document to be closed when the modal scope exits. See > [Automatic document closing](#automatic-document-closing). |
> | unregisterAutoCloseDocument | function | Unregister a document from being closed when the modal scope exits. See [Automatic document closing](#automatic-document-closing). |
<br />
  
The *descriptor* parameter contains the values provided to the descriptor property in the options argument to `executeAsModal`.  It is used to pass values to the function's scope.


### Options parameter
The options object can contain the following properties:

| Name | Type | Inclusion | Min Version | Description |
| :------ | :------ | :------ | :------ | :---------- |
| commandName | string | **required** | 23.0 |  This description is shown above the progress bar. |
| descriptor | object | optional | 23.0 | Command arguments are provided to the target function via this object. See documentation for [*targetFunction*](#target-function-parameter) below. |
| interactive | boolean | optional | 23.0 | A boolean to toggle [interactive mode](#interactive-mode).  |
| timeOut | number | optional | 25.10 | Defaults to one second. During this time, the request will enter a queue to attempt again.  The attempts will continue until the blocking modal state concludes or time expires. |

Since only one plugin can be modal at any given time, what happens if another plugin is modal when you call `executeAsModal`?  Previously, `executeAsModal` would immediately throw an error, declaring, *"host is in a modal state"*. Starting in 25.10, the request will continue to try until the the specified duration is exhausted.  That duration defaults to one second and is controlled by the `timeOut` option.  Most modal interactions are expected to be very short. Even with the timeout, it remains important to handle errors when calling this method.

Also new in 25.10, the error message returned due to an existing modal state will include the plugin that held that existing state.  For example, *"Plugin: com.adobe.testPlugin is running a modal command"*. This identification will assist with debugging modal state collisions.  
- If it's your plugin, then you likely didn't use `await`.
- If it's another third-party plugin, you can disable that during your development.
- If it's an Adobe plugin, [please let us know in the forum](https://forums.creativeclouddeveloper.com/c/photoshop/63).

We highly recommend that the use of `await` with with calls to `executeAsModal`. Without an await, execution will proceed to the subsequent lines of code while Photoshop enters the requested modal state.

A typical use case is:
```javascript
try {
  await require('photoshop').core.executeAsModal(
    targetFunction,
    {commandName: "My Script Command"}
  );
} catch(e) {
  if (e.number == 9) {
    console.error(e);
    showAlert("executeAsModal was rejected (some other plugin is currently inside a modal scope)");
  } else {
    // This case is hit if the targetFunction throws an exception.
  }
}
```

<br />

## User cancellation
`executeAsModal` puts Photoshop into a modal state, and it is important to allow the user to exit this state if the command was invoked by mistake, or if the command is taking too much time.

The user can cancel the operation by pressing the Escape key or using cancellation UI in the progress bar.
If the user cancels the interaction, then JavaScript should return from its target function as soon as possible.
JavaScript can use `isCancelled` and `onCancel` on the *executionContext* to get information about the current user cancellation state. In addition to this, Photoshop APIs such as `batchPlay` will raise an exception if they are invoked from a target function after the user has cancelled the interaction.

The following is an example of a target JavaScript function:
```javascript
async function targetFunction(executionContext, descriptor) {
  let target = {
    _ref: [
      {_ref: "property", _property: "hostName"},
      {_ref: "application", _enum: "ordinal", _value: "targetEnum"}
    ]
  };
  let command = {_obj: "get", _target: target};
  while (true) { // <--  WAIT FOR THE USER TO MANUALLY CANCEL
    await psAction.batchPlay([command], {});
  }
}

await require("photoshop").core.executeAsModal(
  targetFunction,
  {commandName: "User Cancel Test"}
);
```
Due to the `while` loop, this sample will run until the user cancels the interaction. After the user cancels, the modal scope becomes cancelled, and the next call to batchPlay will raise an exception and exit the target function.

Due to the design of the underlying JavaScript runtime, JavaScript can only be cancelled when it is *interruptible*. JavaScript can be interrupted when it is waiting on the resolution of a promise. Without the `await` keyword in the above example, the JavaScript function would not terminate when the user cancels. Having a tight loop such as the following also does not allow for automatic cancellation of the JavaScript function.
```javascript
async function targetFunction(executionContext) {
  while (true) { // <--  WAIT FOR THE USER TO MANUALLY CANCEL
    calculateSomeDigitsOfPi();
  }
}
```
JavaScript that runs for a significant amount of time without an interruption point should regularly query `isCancelled` on the *executionContext*. The JavaScript example above can be made cancellable by modifying it to the following:
```javascript
async function targetFunction(executionContext) {
  while (true) { // <--  WAIT FOR THE USER TO MANUALLY CANCEL
    calculateSomeDigitsOfPi();
    if (executionContext.isCancelled) {
      throw "user cancelled";
    }
  }
}
```

When the JavaScript function uses `await` with a Photoshop JavaScript command, then it is automatically terminated if the user cancels the operation. The automatic cancellation relies on JavaScript exceptions, and it is therefore important to not discard exceptions. The following function discards exceptions around the `batchPlay` call and will therefore *not* be automatically terminated when the user cancels the interaction.
```javascript
async function targetFunction(executionContext) {
  let target = {_ref: [
    {_ref: "property", _property: "hostName"},
    {_ref: "application", _enum: "ordinal", _value: "targetEnum"}
  ]};
  let command = {_obj: "get", _target: target};

  while (true) { // <--  WAIT FOR THE USER TO MANUALLY CANCEL
    try {
       await psAction.batchPlay([command], {});
    } catch (e) {}  // WILL NOT AUTOMATICALLY TERMINATE ON CANCEL
  }
}

await require("photoshop").core.executeAsModal(targetFunction, {commandName: "User Cancel Test"});
```

<br />

## Progress bar
If the modal state lasts a significant amount of time (currently more than two seconds), then a progress bar will appear. The progress dialog's title bar will display the name of the plugin that initiated the modal state, and it will include the ability for the user to cancel the interaction. The following illustrates the progress bar that would be shown for a plugin labled "Sample Plugin". The message that appears above the bar is supplied by `commandName` as described under [Arguments](#arguments). The progress bar will show indefinite progress until the plugin informs Photoshop about its quantative progress.

![progress bar](./assets/progress-bar.png)

### reportProgress
By default, this progress bar will be indeterminate. In JavaScript we can use the execution context's method `reportProgress` to customize the progress reporting. To obtain a determinate progress bar, JavaScript can specify a value between 0 and 1 when calling reportProgress. For example:
```javascript
async function targetFunction(executionContext) {
  executionContext.reportProgress({value: 0.3});
}
```

Setting a value will switch the progress bar to be determinate.  Also, if it is not yet visible, it will be shown.

JavaScript can change the message that is shown in the progress UI by using the `commandName` property. This can be used to inform the user about the current stage of the operation. Example:
```javascript
executionContext.reportProgress({value: 0.9, commandName: "Finishing Up"});
```
![progress bar](./assets/progress-bar-2.png)

The progress bar is hidden while modal UI is shown.  
<!-- Also, the progress bar may be suppressed using the option `suppressProgressBar` in `batchPlay` [options](./batchplay.md#command-execution-options). -->

<br />

## Interactive Mode
*Added in Photoshop 23.3*

If a plugin requires the accepting of user input or interaction while in an `executeAsModal` scope, "Interactive Mode" may be required.

This mode refrains from displaying a blocking progress dialog to the user, and reduces the number of restrictions that hinder accepting of user input. Use-cases for interactive mode may include:
- allowing users to input data into an invoked modal filter dialog
- awaiting user input on a Photoshop workspace, such as Select and Mask

```javascript
await require("photoshop").core.executeAsModal(
  targetFunction,
  {commandName: "Apply two filters", interactive: true}
  );
```

In lieu of the progress bar dialog, users can find the `Cancel Plugin Command` menu item under the Photoshop `Plugins` menu. This will interrupt the plugin's `executeAsModal` scope as described in [User Cancellation](#user-cancellation).

![cancel via plugin menu](./assets/eam-pluginmenu-cancel.png)

<br />

## History state suspension
The hostControl property on the executionContext can be used to suspend and resume history states. While a history state is suspended, Photoshop will coalesce all document changes into a single history state with a custom name.

Example:
```javascript
async function historyStateSample(executionContext) {
    let hostControl = executionContext.hostControl;

    // Get an ID for a target document
    let documentID = await getTargetDocument();

    // Suspend history state on the target document
    // This will collect all changes into a single history state called
    // 'Custom Command'
    let suspensionID = await hostControl.suspendHistory({
        documentID: documentID,
        name: "Custom Command"
    });

    // modify the document
    // . . .

    // resume the history state
    await hostControl.resumeHistory(suspensionID);
}
```

### suspendHistory
The signature for `suspendHistory` is:
```javascript
executionContext.hostControl.suspendHistory(options)
```
The `options` parameter is an object with the following properties:

| Name | Type | Description |
| :--------- | :------ | :---------- |
| documentID | number | The ID of the document whose history state should be suspended. |
| name | string | This name will be shown on the history state in the History panel. `suspendHistory` returns a suspension identifier. This identifier should be used with `resumeHistory`. |

### resumeHistory
The signature for `resumeHistory` is:
```javascript
executionContext.hostControl.resumeHistory(suspensionID, commit)
```
| Name | Type | Description |
| :--------- | :------ | :---------- |
| suspensionID | object | The suspension identifier object that was returned from `suspendHistory`. |
| commit | boolean | Default `true`.  Either commit current document state with a history state, or roll back the document state to the point at which it was suspended. |

Note:
* Photoshop only creates a history state if the document was modified between the calls to `suspendHistory` and `resumeHistory`. 

* To rename the committed history state, assign an optional string to the property `finalName` on the `suspensionID` object to provide a final update to the name of the history state in the History panel. This will override the original `name` passed to `suspendHistory`.

When the modal scope ends, Photoshop will auto-resume history on any document that is still in a suspended state. If the target function for the modal scope returns normally, then all unsuspended states are committed. If the target function exits via an exception, then all unsuspended history states are cancelled.

<!--  Prerelease still
When a user plays an Action from the Actions panel, they have the option to suspend the history state on the active document for the duration of the playback. If a UXP plugin calls `suspendHistory` in this situation, the call to `suspendHistory` is ignored, and the following value is returned: `4294967295` (0xFFFFFFFF). This value indicates that the currently running Action owns the document suspension state. If a plugin invokes `resumeHistory` with a commit value of `true` and suspension ID of 4294967295, then an exception will be raised. A plugin cannot roll back changes for a suspension state that is owned by the Actions panel.
-->

<br />

## Event Notifications
When `executeAsModal` is active (and not set to [interactive](#interactive-mode)), then Photoshop event notifications are silenced similar to when an action is run from the actions panel.

This means that other plugins cannot listen for batchPlay commands that are executed while the modal scope is active.

Plugins can register for notifications related to starting and ending a modal JavaScript scope by registering for the following events:
* `"modalJavaScriptScopeEnter"`
* `"modalJavaScriptScopeExit"`

<br />

## Automatic document closing
When the user cancels a modal scope, then JavaScript cannot make any further document changes until it returns from the modal scope. In order to ensure proper clean up of temporary documents, JavaScript can register one or more documents to be automatically closed without saving when the modal scope ends. The following is an example of JavaScript that registers a document to be closed when the modal scope ends:
```javascript
async function modalFunction(executionContext) {
    let hostControl = executionContext.hostControl;

    let docID = await createDocument();
    await hostControl.registerAutoCloseDocument(docID);

    ...
}
```
JavaScript can unregister a document from being automatically closed by using `unregisterAutoCloseDocument`. The following illustrates JavaScript that creates and marks a document as "auto close" while the method is running. If the method succeeds then the document is unregistered from the set of auto close documents. This allows JavaScript to create a complete document, or close the document is the user cancels while the script is running.
```javascript
async function modalFunction(executionContext) {
    let hostControl = executionContext.hostControl;

    let docID = await createDocument();
    await hostControl.registerAutoCloseDocument(docID);

    // Add contents to the created document.

    ...

    await hostControl.unregisterAutoCloseDocument(docID);
}
```

<br />

## Notes
You can have nested modal scopes. A target function can itself call `executeAsModal` to execute another target function.
All modal scopes share the same global modal state. This mean that any nested scope can modify the state on the shared progress bar. Similarly, you can suspend the history state of a document in one scope, and resume the state in another.
