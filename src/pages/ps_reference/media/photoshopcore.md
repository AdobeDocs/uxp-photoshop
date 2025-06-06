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

The `core` module allows access to specialized commands
within the application. Various application state properties can be
modified or queried here.

Some of these commands can be considered experimental.  Some will be integrated
into the DOM at a later date. The use of which will then be easier, for example,
removing the need to specify the document ID as an argument.

```javascript
const {core} = require('photoshop');
```

## Properties

 

| Name | Type | Min Version | Description |
| :------ | :------ | :------ | :------ |
| apiVersion | *number* | 22.5 | API Version declared by the plugin&#x27;s manifest.json under &#x60;host.data.apiVersion&#x60; field. |

## Functions

### addNotificationListener
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

**async** : *Promise*<void\>

Attach a listener to a Photoshop core event. A callback in the form
of `(eventName: string, descriptor: ActionDescriptor) => void` will be performed.

A [table of events is available](./eventcodes#core-events).

For example: using group '`UI`' and event '`userIdle`'

- Invoked after the Photoshop user idles for a specified number of seconds. See [setUserIdleTime](/ps_reference/media/photoshopcore/#setuseridletime).
- Invoked a second time with the descriptor `{idleEnd: true}` if the user is no longer idle. This signal can
be used to finish up tasks being performed during the idle time.
```javascript
await core.addNotificationListener('UI', ['userIdle'], onUserIdle);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | *string* |
| `events` | *string*[] |
| `callback` | NotificationListener |

___

### calculateDialogSize
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

**async** : *Promise*<{ `height`: *number* ; `width`: *number*  }\>

Returns the effective size of a dialog.
```javascript
const idealSize = { width: 200, height: 500 };
const { width, height } = await core.calculateDialogSize(idealSize);
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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

RGBColorDescriptor \| RGB32ColorDescriptor

Converts the given color (in descriptor form) to RGB,
returning the color descriptor.

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
| `targetModel` | ColorConversionModel.RGB |

LabColorDescriptor

Convert to Lab

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.Lab |

HSBColorDescriptor

Convert to HSB

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.HSB |

GrayscaleColorDescriptor

Convert to Grayscale

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.Gray |

CMYKColorDescriptor

Convert to CMYK

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.CMYK |

___

### convertGlobalToLocal
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">26.0</span>

**async** : *Promise*<{ `x`: *number* ; `y`: *number*  }\>

Given the (x,y) coordinates of a position in global (display) space, we convert to coordinates
with the origin based at the top left corner of the given panel.
A plugin can only make calls against panels that are defined in its manifest,
so the given `target` must be defined there.

In the example manifest on the documentation page for
[UXP manifest v5](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/),
the identifier is "panelName".

Note: global coordinates differ between macOS and Windows. On macOS global coordinates are expressed as
points while on Windows the unit is pixels. See [getDisplayConfiguration](/ps_reference/media/photoshopcore/#getdisplayconfiguration) for more information
on global coordinates.

```javascript
const target = 'panelName';
const location = { x: 200, y: 500 };
const { x, y } = await core.convertGlobalToLocal(target, location);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | *string* | The `id` of the panel to use as the origin. |
| `location` | *object* | Point coordinates in the form {x, y}. |
| `location.x` | *number* | - |
| `location.y` | *number* | - |

___

### createTemporaryDocument
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*object*

Create a temporary duplicate document for background processing.  This document does not appear in the UI,
and there are limitations with some editing features.

```javascript
await core.createTemporaryDocument({ documentID: 123 });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | *object* | Object containing the id the document to duplicate under property `documentID`. |
| `options.documentID` | *number* | - |

___

### deleteTemporaryDocument
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*void*

Remove a temporary document.

```javascript
await core.deleteTemporaryDocument({ documentID: 146 });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | *object* | Object containing key of `documentID` for the document to delete. |
| `options.documentID` | *number* | - |

___

### endModalToolState
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

**async** : *Promise*<void\>

End the current modal tool editing state.
```javascript
// close the modal dialog, cancelling changes
await core.endModalToolState(false);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `commit` | *boolean* |

___

### executeAsModal
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

**async** : *Promise*<void\>

ExecuteAsModal is needed when a plugin wants to make modifications to the Photoshop state.
This includes scenarios where the plugin wants to create or modify documents,
or the plugin wants to update UI or preference state.

ExecuteAsModal is only available to plugin that is using apiVersion 2 or higher.

See [Modal Execution](../executeasmodal) for details

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetFunction` | (`executionContext`: [*ExecutionContext*](/ps_reference/objects/options/executioncontext/), `descriptor?`: *object*) => *Promise*<any\> |
| `options` | [*ExecuteAsModalOptions*](/ps_reference/objects/returnobjects/executeasmodaloptions/) |

___

### getActiveTool
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

**async** : *Promise*<{ `classID`: *string* ; `isModal`: *boolean* ; `key`: *string* ; `title`: *string*  }\>

Returns information about the active Photoshop tool.
```javascript
const { title } = await core.getActiveTool();
```

___

### getCPUInfo
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

[*CPUInfo*](/ps_reference/objects/returnobjects/cpuinfo/)

Returns information about the host CPU.
```javascript
const { logicalCores, frequencyMhz, vendor } = core.getCPUInfo();
const isAMD = vendor === 'AMD';
const isARM = vendor === 'ARM';
```

___

### getDisplayConfiguration
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*Promise*<[[*DisplayConfiguration*](/ps_reference/objects/returnobjects/displayconfiguration/)]\>

Returns the current display configuration as an array with an entry for each display.

Note: returned units differ by platform.
 - Mac uses logical units, points.
 - Windows uses physical units, pixels.
Further discussion of the units may be found on [Display Units](../../media/displayunits)

```javascript
core.getDisplayConfiguration({ physicalResolution: true });
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | [*DisplayConfigurationOptions*](/ps_reference/objects/options/displayconfigurationoptions/) | {} | Additional properties to include, e.g., `physicalResolution`. |

___

### getGPUInfo
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

[*GPUInfo*](/ps_reference/objects/returnobjects/gpuinfo/)

Returns OpenGL and OpenCL information about the available graphics processor.
```javascript
const { gpuInfoList, clgpuInfoList } = core.getGPUInfo();
console.log(JSON.stringify(gpuInfoList));
// > [{"version":"2.1 ATI-4.5.14","memoryMB":8192,"name":"16915464", ...}]
console.log(JSON.stringify(clgpuInfoList));
// > [{"version":"OpenCL 1.2 ","memoryMB":8589,"name":"AMD Radeon Pro 580X Compute Engine", ...}]
```

___

### getLayerGroupContents
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

*Promise*<{ `list`: LayerTreeInfo[]  }\>

Returns a list of the layers contained by the specified layer group.

```javascript
await core.getLayerGroupContents({ documentID: 123, layerID: 9 });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.documentID` | *number* |
| `options.layerID` | *number* |

___

### getLayerGroupContentsSync
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

*object*

Returns a list of the layers contained by the specified layer group.

```javascript
core.getLayerGroupContentsSync({ documentID: 123, layerID: 9 });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.documentID` | *number* |
| `options.layerID` | *number* |

___

### getLayerTree
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

**async** : *Promise*<{ `list`: LayerTreeInfo[]  }\>

Returns the full hierarchy of the layer stack in nested "lists".
```javascript
await core.getLayerTree({ documentID: 123 });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | *object* | Object containing key of `documentID` for the target document. |
| `options.documentID` | *number* | - |

___

### getLayerTreeSync
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

*object*

Returns the full hierarchy of the layer stack in nested "lists".
```javascript
core.getLayerTreeSync({ documentID: 123 });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | *object* | Object containing key of `documentID` for the target document. |
| `options.documentID` | *number* | - |

___

### getMenuCommandState
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

**async** : *Promise*<boolean\>

Returns whether a command menu item is available for invoking.
```javascript
// can a Fill be performed?
const canFill = await core.getMenuCommandState({ commandID: 1042 });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.commandID` | *number* |

___

### getMenuCommandTitle
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

**async** : *Promise*<string\>

Returns the localized menu title of the menu command item.
```javascript
const renameLayerStr = await core.getMenuCommandTitle({ commandID: 2983 });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.commandID?` | *number* |
| `options.menuID?` | *number* |

___

### getPluginInfo
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.2</span>

**async** : *Promise*<ActionDescriptor\>

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
await core.getPluginInfo();
```

___

### getUserIdleTime
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

*Promise*<void\>

Return the current number of seconds for user idle time. See also: [setUserIdleTime](/ps_reference/media/photoshopcore/#setuseridletime)

```javascript
await core.getUserIdleTime();
```

___

### historySuspended
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

*Promise*<boolean\>

Returns true if the history is in a suspended state.  See [Document.suspendHistory](/ps_reference/classes/document/#suspendhistory).
```javascript
await core.historySuspended( {documentID: 123} );
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | *object* | Object containing key of `documentID` for the target document. |
| `options.documentID` | *number* | - |

___

### isModal
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

*boolean*

Returns true if the plugin is currently in a modal state using [executeAsModal](/ps_reference/media/photoshopcore/#executeasmodal).

___

### performMenuCommand
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

**async** : *Promise*<boolean\>

Invokes the menu command via its `commandID`. Returns false
on failure, or if the command is not available.
Record Action Notifications via the Plugins > Development menu can be used to capture the command IDs.
```javascript
// menu item Select > All
await core.performMenuCommand({ commandID: 1017 });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | *object* | Object containing key of `commandID` for the menu item. |
| `options.commandID` | *number* | - |

___

### redrawDocument
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

**async** : *Promise*<number\>

Request that Photoshop redraws (updates) a document immediately.
This method can be used to ensure that the document is updated
immediately while a user is interacting with a UI element (such as a slider).
This can provide a more responsive interaction.
Updating a document can be time consuming, and will often happen at a lower frequency
than UI events are received.
Plugins may therefore want to implement a throttle between UI events and calls to
redrawDocument.
A throttle could be implemented by using a timer, or by avoiding to call redrawDocument
for a small amount of time after a previous request completes.
redrawDocument returns the time that it took Photoshop to update the target document
in seconds. This number can be used to refine the throttle.
redrawDocument is only available to a plugin that is using apiVersion 2 or higher.
```javascript
await core.redrawDocument({ documentID: 123 });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.documentID` | *number* |

___

### removeNotificationListener
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*Promise*<void\>

Detaches a listener from a Photoshop event.
See [addNotificationListener](#addnotificationlistener)
```javascript
await core.addNotificationListener('UI', ['userIdle'], onUserIdle);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group` | *string* | Notification group. |
| `events` | *string*[] | Array of event names. |
| `listener` | NotificationListener | - |

___

### setExecutionMode
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.2</span>

**async** : *Promise*<void\>

The execution mode can be used while debugging a plugin. It is only available
when the developer mode is enabled.

The following example illustrate how to enable stacktraces for batchPlay commands
that fail. When stacktraces are enabled, then an error result descriptor from a
batchPlay request will include a stacktrace property. The property can be used when
reporting bugs to Adobe.
```javascript
await core.setExecutionMode({ enableErrorStacktraces: true });
```
The following illustrates how to enable console warnings when a promise is rejected:
```javascript
await core.setExecutionMode({ logRejections: true });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.enableErrorStacktraces?` | *boolean* |
| `options.logRejections?` | *boolean* |

___

### setUserIdleTime
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.3</span>

**async** : *Promise*<void\>

Specifies the number of seconds a user must be idle on Photoshop before invoking the
userIdle event handler defined with [addNotificationListener](/ps_reference/media/photoshopcore/#addnotificationlistener). An idleTime of 0
turns off idle notifications.

```javascript
await core.setUserIdleTime(3);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `idleTime` | *number* |

___

### showAlert
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

**async** : *Promise*<void\>

Show a generic alert box to the user. 'OK' to dismiss.
```javascript
// script has completed.
await core.showAlert({ message: 'Operation successful' });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *object* |
| `options.message` | *string* |

___

### suppressResizeGripper
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

*Promise*<void\>

The "resize gripper", a small square in the botton-right corner of a panel, may be hidden
by this function. This square will appear above the contents the panel itself including
scrollbars. While many panels over the years have simply left space at the bottom to
accomodate the gripper, this option removes it.

```javascript
await core.suppressResizeGripper({ type: 'panel', target: 'panel's ID', value: true });
```

The value for `target` above will be the id attached to the panel's entry under `entrypoints` in the plugin manifest.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | *any* | Object containing type, target, and value. |

___

### translateUIString
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

*string*

Given a Photoshop ZString (of format `"$$$/slash/separated/key=english default value"`),
will return the translated string for the current UI language

#### Parameters

| Name | Type |
| :------ | :------ |
| `zstring` | *string* |
