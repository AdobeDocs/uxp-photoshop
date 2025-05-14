---
id: "photoshopaction"
title: "photoshopAction"
sidebar_label: "photoshopAction"
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

# photoshopAction

The module that facilitates Actions being performed in the
UXP-Photoshop world. You may perform your own `batchPlay` commands,
or attach listeners using this module.

```javascript
const {action} = require('photoshop');
```

## Functions

### addNotificationListener
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Attach a callback function to one or more Photoshop events.
The callback has the form `(eventName: string, descriptor: ActionDescriptor) => void`.
```javascript
await action.addNotificationListener(['open'], onOpenDocumentHandler);
```
A [table of events is available](./eventcodes#action-events) or
the [introspection methods described under `batchPlay`](./batchplay) may be employed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | *string*[] |
| `callback` | NotificationListener |

___

### batchPlay
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*Promise*<ActionDescriptor[]\>

Performs a batchPlay call with the provided commands. Equivalent
to an `executeAction` in ExtendScript.
```javascript
const target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' };
const commands = [{ _obj: 'hide', _target: target }];
await action.batchPlay(commands);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | ActionDescriptor[] |
| `options?` | [*BatchPlayCommandOptions*](/ps_reference/objects/options/batchplaycommandoptions/) |

___

### batchPlaySync
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

ActionDescriptor[]

Performs a batchPlay call with the provided commands. Equivalent
to an `executeAction` in ExtendScript.
```javascript
const target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' };
const commands = [{ _obj: 'hide', _target: target }];
await action.batchPlay(commands);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | ActionDescriptor[] |
| `options?` | [*BatchPlayCommandOptions*](/ps_reference/objects/options/batchplaycommandoptions/) |

___

### getIDFromString
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

*number*

Return the identifier number assigned to an action string value.
If the string is not already registered, a new ID will be created and returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *string* |

___

### recordAction
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">25.0</span>

*Promise*<void\>

Records this plugin's action to an active Action recording.
See [Action Recording](./action-recording/) for usage and manifest requirements.

```javascript
await action.recordAction({ name: 'My Command', methodName: 'actionHandler'}, {prop: value} );
```
When the action is invoked, the following top level JavaScript function will be invoked:
```javascript
async function actionHandler(executionContext, info) {
    let propValue = info['prop'];
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | RecordActionOptions |  |
| `info` | ActionDescriptor | Object with action specific information. See [Action Recording](./action-recording/). |

___

### removeNotificationListener
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*Promise*<void\>

Detaches a listener from a Photoshop event.
See [addNotificationListener](#addnotificationlistener)
```javascript
await action.removeNotificationListener(['open'], onOpenNewDocument);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | *string*[] |
| `listener` | NotificationListener |

___

### validateReference
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

*boolean*

Synchronously validates the given action reference, returning true if it still
exists. For example, calling this with a closed document would return false.

This feature is intended for advanced developers who understand well how batchPlay works.
Validate reference could get handy when you want to add new DOM functionality or use low-level code for
performance optimization.

See [Action references](../batchplay#action-references) for details.

Supported reference classes:
`action`,
`document`,
`channel`,
`layer`,
`guide`,
`historyState`,
`compsClass`,
`path`,
`actionSet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ActionReference \| ActionReference[] |
