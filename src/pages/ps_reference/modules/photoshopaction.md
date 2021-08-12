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
id: "photoshopaction"
title: "photoshopAction"
sidebar_label: "photoshopAction"
---

The module that facilitates Actions being performed in the
UXP-Photoshop world. You may perform your own `batchPlay` commands,
or attach listeners using this module.

```javascript
var PhotoshopAction = require('photoshop').action;
```

## Index

### Functions

* [addNotificationListener](photoshopaction.md#addnotificationlistener)
* [batchPlay](photoshopaction.md#batchplay)
* [removeNotificationListener](photoshopaction.md#removenotificationlistener)

## Functions

###  addNotificationListener

▸ **addNotificationListener**(`events`: [NotificationEvent](../interfaces/notificationevent/)[], `notifier`: NotificationListener): *Promise‹void›*

Attach a listener to a Photoshop event. A callback in the form
of `(eventName: string, descriptor: Descriptor) => void` will be performed.
```javascript
await PhotoshopAction.addNotificationListener([{ event: 'open' }], onOpenNewDocument)
```

**Parameters:**

Name | Type |
------ | ------ |
`events` | [NotificationEvent](../interfaces/notificationevent/)[] |
`notifier` | NotificationListener |

___

###  batchPlay

▸ **batchPlay**(`commands`: ActionDescriptor[], `options?`: [BatchPlayCommandOptions](../interfaces/batchplaycommandoptions/)): *Promise‹ActionDescriptor[]›*

Performs a batchPlay call with the provided commands. Equivalent
to an `executeAction` in ExtendScript.
```javascript
var target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum'}
var commands = [{ _obj: 'hide', _target: target }]
await PhotoshopAction.batchPlay(commands)
```

**Parameters:**

Name | Type |
------ | ------ |
`commands` | ActionDescriptor[] |
`options?` | [BatchPlayCommandOptions](../interfaces/batchplaycommandoptions/) |

___

###  removeNotificationListener

▸ **removeNotificationListener**(`events`: [NotificationEvent](../interfaces/notificationevent/)[], `notifier`: NotificationListener): *Promise‹void›*

Detaches a listener from a Photoshop event.

**`see`** addNotificationListener
```javascript
await PhotoshopAction.removeNotificationListener([{ event: 'open' }], onOpenNewDocument)
```

**Parameters:**

Name | Type |
------ | ------ |
`events` | [NotificationEvent](../interfaces/notificationevent/)[] |
`notifier` | NotificationListener |
