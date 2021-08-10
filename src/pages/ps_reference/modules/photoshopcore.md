---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
id: "photoshopcore"
title: "photoshopCore"
sidebar_label: "photoshopCore"
---

The module that allows access to specialized commands
within the application. Various application state can be
modified or queried here.

```javascript
var PhotoshopCore = require('photoshop').core;
```

## Index

### Functions

* [calculateDialogSize](photoshopcore.md#calculatedialogsize)
* [endModalToolState](photoshopcore.md#endmodaltoolstate)
* [getActiveTool](photoshopcore.md#getactivetool)
* [getMenuCommandState](photoshopcore.md#getmenucommandstate)
* [getMenuCommandTitle](photoshopcore.md#getmenucommandtitle)
* [performMenuCommand](photoshopcore.md#performmenucommand)
* [showAlert](photoshopcore.md#showalert)

## Functions

###  calculateDialogSize

▸ **calculateDialogSize**(`preferredSize`: object, `identifier?`: string, `minimumSize?`: object): *Promise‹object›*

Returns the effective size of a dialog.
```javascript
var idealSize = { width: 200, height: 500 }
{ width, height} = await PhotoshopCore.calculateDialogSize(idealSize)
```

**Parameters:**

▪ **preferredSize**: *object*

Name | Type |
------ | ------ |
`height` | number |
`width` | number |

▪`Optional`  **identifier**: *string*

▪`Optional`  **minimumSize**: *object*

Name | Type |
------ | ------ |
`height` | number |
`width` | number |

___

###  endModalToolState

▸ **endModalToolState**(`commit`: boolean): *Promise‹void›*

End the current modal tool editing state.
```javascript
// close the modal dialog, cancelling changes
await PhotoshopCore.endModalToolState(false)
```

**Parameters:**

Name | Type |
------ | ------ |
`commit` | boolean |

___

###  getActiveTool

▸ **getActiveTool**(): *Promise‹object›*

Returns information about the active Photoshop tool.
```javascript
{ title } = await PhotoshopCore.getActiveTool()
```

___

###  getMenuCommandState

▸ **getMenuCommandState**(`options`: object): *Promise‹boolean›*

Returns whether a command menu item is available for invoking.
```javascript
// can a Fill be performed?
var canFill = await PhotoshopCore.getMenuCommandState({ commandID: 1042 })
```

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`commandID` | number |
`scheduling?` | [Scheduling](../interfaces/scheduling/) |

___

###  getMenuCommandTitle

▸ **getMenuCommandTitle**(`options`: object): *Promise‹string›*

Returns the localized menu title of the menu command item.
```javascript
var renameLayerStr = await PhotoshopCore.getMenuCommandTitle({ commandID: 2983 })
```

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`commandID?` | number |
`menuID?` | number |
`scheduling?` | [Scheduling](../interfaces/scheduling/) |

___

###  performMenuCommand

▸ **performMenuCommand**(`options`: object): *Promise‹boolean›*

Invokes the menu command via its `commandID`. Returns false
on failure, or if the command is not available.
```javascript
// select all
await PhotoshopCore.performMenuCommand({ commandID: 1017 })
```

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`commandID` | number |
`scheduling?` | [Scheduling](../interfaces/scheduling/) |

___

###  showAlert

▸ **showAlert**(`options`: object): *Promise‹void›*

Show a generic alert box to the user. 'OK' to dismiss.
```javascript
// script has completed.
await PhotoshopCore.showAlert({ message: 'Operation successful'})
```

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`message` | string |
