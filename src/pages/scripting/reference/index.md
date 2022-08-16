---
title: Reference
description: Scripting Reference
contributors:
  - https://github.com/amandahuarng
---

# Scripting Reference

## Script module
Represents the UXP module that contains the properties and methods used for scripting.

### Usage
---
```js
const script = await require("uxp").script;
```

### Properties

---

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| executionContext | ExecutionContext | readOnly | ExecutionContext passed by the host when invoking Script |

## ExecutionContext
Passed by the host when invoking scripts. Contains the following: 

- Details about the current script execution
- Methods that can send data to Photoshop
- Events to manage the lifecycle of the script

### Usage

---

```jsx
const script = await require("uxp").script;
const executionContext = script.executionContext;
console.log("isCancelled: ", executionContext.isCancelled);
```

### Properties

---

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| isCancelled | bool | readOnly | Used to check if the execution context has been cancelled by the client or host.  |
| hostControl | Object | readOnly | Object with 4 properties, detailed [below](#hostcontrol). | 

#### hostControl
The hostControl property is used to suspend and resume history states. 
* `suspendHistory(options)`: used to suspend history on a target document
* `resumeHistory(suspensionID, commit)`: used to resume history on a target document
* `registerAutoCloseDocument(docID)`: register a document to be closed when the modal scope exits
* `unregisterAutoCloseDocument(docID)`: unregister a document from being closed when the modal scope exists 


### Methods: hostControl
---
#### History state suspension
**`executionContext.hostControl.suspendHistory(options)`**

- Returns a suspension identifier that should be used with `resumeHistory`
- Suspends history state of document with ID `options.documentID`
- Coalesces all document changes into a single history state defined as `options.name`

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| options | Object | `documentID`: ID of the document whose history state should be suspended. |
| | | `name`: name that is used for the history state - visible in the History panel|

**`executionContext.hostControl.resumeHistory(suspensionID, commit)`**

- Resumes the history state
- Optionally creates a history state for the current document state

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| suspensionID | string | the suspension identifier that was returned from `suspendHistory` |
| commit | bool | If true, then the current document state is committed and a history state is created. If false, the document is rolled back to the time when the state was suspended. (optional and defaults to true)|

#### Example
This example demonstrates suspending the history state on a target document, then resuming the state after modifying the document.
```js
let hostControl = executionContext.hostControl;
// Get an ID for a target document
let documentID = await getTargetDocument();

// Suspend history state on the target document
// This will coalesce all changes into a single history state called
// 'Custom Command'
let suspensionID = await hostControl.suspendHistory({
    "documentID": documentID,
    "name": "Custom Command"
});

// modify the document
// . . .

// resume the history state
await hostControl.resumeHistory(suspensionID);
```

#### Automatic document closing
**`executionContext.hostControl.registerAutoCloseDocument(docID)`**

- Register a document to be automatically closed without saving when the execution context ends

**`executionContext.hostControl.unregisterAutoCloseDocument(docID)`**

- Unregister a document to be automatically closed without saving when the execution context ends

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| docID | number | The ID of the document of this history state 

#### Example
This example demonstrates creating and marking a document as "auto close" first. After adding some contents to the page, the document is unregistered from the set of auto close documents. If the user cancels while the script is running, the document is closed. 
```js
let hostControl = executionContext.hostControl;
let docID = await createDocument();
await hostControl.registerAutoCloseDocument(docID);

// Add contents to docID
...

await hostControl.unregisterAutoCloseDocument(docID);
```


### Events

**`onCancel`**

* Script cancellation can occur either when the user clicks “Cancel” in the progress bar, or when the host app encounters some exception in running the script file. Developers can add **event handlers** to get notified when the command has been cancelled. The associated callback will receive a parameter `reason`. 

```jsx
executionContext.onCancel.addListener((reason) => {
		// reason would be a json object set by the host while cancelling
		reject("Script Cancelled");
});
```