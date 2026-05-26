---
id: "executioncontext"
title: ExecutionContext
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
description: This object is passed to the callback of core.executeAsModal for modality related APIs.
---

# ExecutionContext

This object is passed to the callback of `core.executeAsModal` for modality related APIs.

| Name | Type | Min Version | Description |
| :------ | :------ | :------ | :------ |
| hostControl | *object* | 23.0 | Use the methods in here to control Photoshop state. |
| hostControl.resumeHistory | (`params`: [*ResumeHistorySuspensionOptions*](/ps-reference/objects/options/resumehistorysuspensionoptions.md), `commit?`: *boolean*) => *Promise*`<void>` | 23.0 | Call to resume history on a target document. commit (optional): if false, the current modified document state is dropped, and the document returns to the state when `suspendHistory` was invoked. |
| hostControl.suspendHistory | (`params`: [*HistoryStateInfo*](/ps-reference/objects/options/historystateinfo.md)) => *Promise*\<[*HistorySuspension*](/ps-reference/objects/returnobjects/historysuspension.md)\> | 23.0 | Call to suspend history on a target document, returns the suspension ID which can be used for resumeHistory. |
| isCancelled | *boolean* | 23.0 | True if user has cancelled the modal interaction. |
| onCancel | *void* | 23.0 | If assigned a method, it will be called when user cancels the modal interaction. |
| reportProgress | *void* | 23.0 | Call this to customize the progress bar. |
