---
id: "photoshopaction"
title: "photoshopAction"
sidebar_label: "photoshopAction"
repo: "uxp-photoshop"
product: "photoshop"
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

# photoshopAction

The module that facilitates Actions being performed in the
UXP-Photoshop world. You may perform your own `batchPlay` commands,
or attach listeners using this module.

```javascript
var PhotoshopAction = require('photoshop').action;
```

## Functions

### addNotificationListener

*Promise*<void\>

Attach a listener to a Photoshop event. A callback in the form
of `(eventName: string, descriptor: Descriptor) => void` will be performed.
```javascript
await PhotoshopAction.addNotificationListener(['open'], onOpenNewDocument)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | *string*[] |
| `notifier` | NotificationListener |

___

### batchPlay

*Promise*<[*ActionDescriptor*](/ps_reference/interfaces/actiondescriptor/)[]\>

Performs a batchPlay call with the provided commands. Equivalent
to an `executeAction` in ExtendScript.
```javascript
var target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum'}
var commands = [{ _obj: 'hide', _target: target }]
await PhotoshopAction.batchPlay(commands)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | [*ActionDescriptor*](/ps_reference/interfaces/actiondescriptor/)[] |
| `options?` | [*BatchPlayCommandOptions*](/ps_reference/interfaces/batchplaycommandoptions/) |

___

### removeNotificationListener

*Promise*<void\>

Detaches a listener from a Photoshop event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | *string*[] |
| `notifier` | NotificationListener |
