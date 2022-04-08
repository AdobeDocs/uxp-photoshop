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

### addNotificationListener

*Promise*<void\>

Attach a listener to a Photoshop core event. A callback in the form
of `(eventName: string, descriptor: Descriptor) => void` will be performed.
The event(s) below are supported:

group: '`UI`', event: '`userIdle`'

- Invoked after the Photoshop user idles for a specified number of seconds. See [setUserIdleTime](/ps_reference/media/photoshopcore/#setuseridletime).
- Invoked a second time with the descriptor `{idleEnd: true}` if the user is no longer idle. This signal can
be used to finish up tasks being performed during the idle time.
```javascript
await PhotoshopCore.addNotificationListener('UI', ['userIdle'], onUserIdle)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | *string* |
| `events` | *string*[] |
| `notifier` | NotificationListener |

___

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
| `targetModel` | ColorConversionModel |

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

### getPluginInfo

*Promise*<[*ActionDescriptor*](/ps_reference/interfaces/actiondescriptor/)\>

Return information about the execution of the plugin.
This method is intended for developing plugins.
Shipping code should not use this method.

The returned information include the following properties:

`numberOfPendingMainThreadTasks`: Number of pending promises.

`batchPlayCount`: Number of `batchPlay` calls since the plugin was loaded.

`mainThreadTimeOutCount`: Number of JavaScript calls that have timed out.
This is typically caused by executing commands while Photoshop is modal without using
`executeAsModal`.

`v8HeapSize`: V8 heap allocated for the plugin. This number is only accurate
when loading plugins through the UXP Developer Tool.

```javascript
await PhotoshopCore.getPluginInfo()
```

___

### isModal

*boolean*

 Returns true if the plugin is currently in a modal state using [executeAsModal](/ps_reference/media/photoshopcore/#executeasmodal)

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

### setExecutionMode

*Promise*<void\>

The execution mode can be used while debugging a plugin. It is only available
when the developer mode is enabled.

The following example illustrate how to enable stacktraces for batchPlay commands
that fail. When stacktraces are enabled, then an error result descriptor from a
batchPlay request will include a stacktrace property. The property can be used when
reporting bugs to Adobe.
```javascript
await PhotoshopCore.setExecutionMode({ enableErrorStacktraces: true })
```
The following illustrates how to enable console warnings when a promise is rejected:
```javascript
await PhotoshopCore.setExecutionMode({ logRejections: true })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.enableErrorStacktraces?` | *boolean* |
| `options.logRejections?` | *boolean* |

___

### setUserIdleTime

*Promise*<void\>

Specifies the number of seconds a user must be idle on Photoshop before invoking the
userIdle event handler defined with [addNotificationListener](/ps_reference/media/photoshopcore/#addnotificationlistener). An idleTime of 0
turns off idle notifications.

```javascript
await PhotoshopCore.setUserIdleTIme(3)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `idleTime` | *number* |

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
