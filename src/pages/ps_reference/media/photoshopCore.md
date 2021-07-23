---
id: "photoshopcore"
title: "photoshopCore"
sidebar_label: "photoshopCore"
repo: "uxp-photoshop"
index: "photoshop"
keywords: "
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
"
---

# photoshopCore

The module that allows access to specialized commands
within the application. Various application state can be
modified or queried here.

```javascript
var PhotoshopCore = require('photoshop').core;
```

## Variables

### apiVersion

• `Let` **apiVersion**: *number*

API Version declared by the plugin's manifest.json under `host.data.apiVersion` field.

If value 1, you will have access to Photoshop 22.0 DOM and be able to make mutable calls outside a modal state.
If 2, you will have access to latest DOM, modal execution and everything else new we're adding.

## Functions

### calculateDialogSize

*Promise*<{ `height`: *number* ; `width`: *number*  }\>

Returns the effective size of a dialog.
```javascript
var idealSize = { width: 200, height: 500 }
{ width, height} = await PhotoshopCore.calculateDialogSize(idealSize)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `preferredSize` | *object* |
| `preferredSize.height` | *number* |
| `preferredSize.width` | *number* |
| `identifier?` | *string* |
| `minimumSize?` | *object* |
| `minimumSize.height` | *number* |
| `minimumSize.width` | *number* |

___

### endModalToolState

*Promise*<void\>

End the current modal tool editing state.
```javascript
// close the modal dialog, cancelling changes
await PhotoshopCore.endModalToolState(false)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `commit` | *boolean* |

___

### executeAsModal

*Promise*<void\>

ExecuteAsModal is needed when a plugin wants to make modifications to the Photoshop state.
This includes scenarios where the plugin wants to create or modify documents, or the plugin wants to update UI or preference state.

ExecuteAsModal is only available to plugin that is using apiVersion 2 or higher.

See [Modal Execution](../executeAsModal) for details

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetFunction` | (`executionContext`: [*ExecutionContext*](/ps_reference/interfaces/ExecutionContext/)) => *Promise*<any\> |
| `options` | [*ExecuteAsModalOptions*](/ps_reference/interfaces/ExecuteAsModalOptions/) |

___

### getActiveTool

*Promise*<{ `classID`: *string* ; `isModal`: *boolean* ; `key`: *string* ; `title`: *string*  }\>

Returns information about the active Photoshop tool.
```javascript
{ title } = await PhotoshopCore.getActiveTool()
```

___

### getMenuCommandState

*Promise*<boolean\>

Returns whether a command menu item is available for invoking.
```javascript
// can a Fill be performed?
var canFill = await PhotoshopCore.getMenuCommandState({ commandID: 1042 })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.commandID` | *number* |
| `options.scheduling?` | Scheduling |

___

### getMenuCommandTitle

*Promise*<string\>

Returns the localized menu title of the menu command item.
```javascript
var renameLayerStr = await PhotoshopCore.getMenuCommandTitle({ commandID: 2983 })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.commandID?` | *number* |
| `options.menuID?` | *number* |
| `options.scheduling?` | Scheduling |

___

### performMenuCommand

*Promise*<boolean\>

Invokes the menu command via its `commandID`. Returns false
on failure, or if the command is not available.
```javascript
// select all
await PhotoshopCore.performMenuCommand({ commandID: 1017 })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.commandID` | *number* |
| `options.scheduling?` | Scheduling |

___

### showAlert

*Promise*<void\>

Show a generic alert box to the user. 'OK' to dismiss.
```javascript
// script has completed.
await PhotoshopCore.showAlert({ message: 'Operation successful'})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.message` | *string* |
