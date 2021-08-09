---
id: "executioncontext"
title: "ExecutionContext"
sidebar_label: "ExecutionContext"
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

# ExecutionContext

This object is passed to the callback of `core.executeAsModal` for modality related APIs

## Properties

### hostControl

• **hostControl**: *object*

Use the methods in here to control Photoshop state

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `resumeHistory` | (`suspensionID`: *number*) => *void* | Call to resume history on a target document |
| `suspendHistory` | (`info`: { `historyStateInfo`: [*HistoryStateInfo*](/ps_reference/interfaces/historystateinfo/)  }) => *Promise*<number\> | Call to suspend history on a target document, returns the suspension ID which can be used for resumeHistory |

___

### isCancelled

• **isCancelled**: *boolean*

True if user has cancelled the modal interaction.

User can cancel by hitting the Escape key, or by pressing the "Cancel" button in the progress bar.

___

### onCancel

• **onCancel**: *void*

If assigned a method, it will be called when user cancels the modal interaction.

___

### reportProgress

• **reportProgress**: *void*

Call this to customize the progress bar.
