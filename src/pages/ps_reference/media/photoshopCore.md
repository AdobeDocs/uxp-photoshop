---
id: "photoshopcore"
title: "photoshopcore"
sidebar_label: "photoshopcore"
---

# photoshopCore

The module that allows access to specialized commands
within the application. Various application state can be
modified or queried here.

```javascript
var PhotoshopCore = require('photoshop').core;
```

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
