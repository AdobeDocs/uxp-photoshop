---
id: "photoshopcore"
title: "photoshopCore"
sidebar_label: "photoshopCore"
repo: "uxp-photoshop"
product: "photoshop"
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

### convertColor

ColorDescriptor

Converts the given color (in descriptor form) to the
given color space, returning the color descriptor.

This is an internal API that is used for [SolidColor](/ps_reference/classes/solidcolor/)
and all the other color classes.

Currently, this API uses the application color settings
for conversion (Edit > Color Settings...). '
In the future, we will provide color conversion
based on embedded color profiles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceColor` | ColorDescriptor |
| `targetModel` | [*ColorConversionModel*](/ps_reference/modules/coremodules/#colorconversionmodel) |

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
This includes scenarios where the plugin wants to create or modify documents,
or the plugin wants to update UI or preference state.

ExecuteAsModal is only available to plugin that is using apiVersion 2 or higher.

See [Modal Execution](../executeasmodal) for details

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetFunction` | (`executionContext`: [*ExecutionContext*](/ps_reference/interfaces/executioncontext/)) => *Promise*<any\> |
| `options` | [*ExecuteAsModalOptions*](/ps_reference/interfaces/executeasmodaloptions/) |

___

### getActiveTool

*Promise*<{ `classID`: *string* ; `isModal`: *boolean* ; `key`: *string* ; `title`: *string*  }\>

Returns information about the active Photoshop tool.
```javascript
{ title } = await PhotoshopCore.getActiveTool()
```

___

### getCPUInfo

[*CPUInfo*](/ps_reference/interfaces/cpuinfo/)

Returns information about the host CPU.
```javascript
{ logicalCores, frequencyMhz, vendor } = PhotoshopCore.getCPUInfo()
var isAMD = vendor === "AMD"
var isARM = vendor === "ARM"
```

___

### getGPUInfo

[*GPUInfo*](/ps_reference/interfaces/gpuinfo/)

Returns OpenGL and OpenCL information about the available graphics processor.
```javascript
{ gpuInfoList, clgpuInfoList } = PhotoshopCore.getGPUInfo()
console.log(JSON.stringify(gpuInfoList))
// > [{"version":"2.1 ATI-4.5.14","memoryMB":8192,"name":"16915464", ...}]
console.log(JSON.stringify(clgpuInfoList))
// > [{"version":"OpenCL 1.2 ","memoryMB":8589,"name":"AMD Radeon Pro 580X Compute Engine", ...}]
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

___

### translateUIString

*string*

Given a Photoshop ZString (of format `"$$$/slash/separated/key=english default value"`),
will return the translated string for the current UI language

#### Parameters

| Name | Type |
| :------ | :------ |
| `zstring` | *string* |
