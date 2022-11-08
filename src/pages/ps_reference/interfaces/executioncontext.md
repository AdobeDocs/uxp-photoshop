---
id: "executioncontext"
title: "ExecutionContext"
sidebar_label: "ExecutionContext"
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

# ExecutionContext

This object is passed to the callback of `core.executeAsModal` for modality related APIs.

## Properties

### hostControl

• **hostControl**: `Object`

Use the methods in here to control Photoshop state.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `resumeHistory` | (`suspensionID`: `number`) => `void` |
| `suspendHistory` | (`info`: { `historyStateInfo`: [`HistoryStateInfo`](/ps_reference/interfaces/historystateinfo/)  }) => `Promise`<`number`\> |

___

### isCancelled

• **isCancelled**: `boolean`

True if user has cancelled the modal interaction.

User can cancel by hitting the Escape key, or by pressing the "Cancel" button in the progress bar.

___

### onCancel

• **onCancel**: `void`

If assigned a method, it will be called when user cancels the modal interaction.

___

### reportProgress

• **reportProgress**: `void`

Call this to customize the progress bar.
