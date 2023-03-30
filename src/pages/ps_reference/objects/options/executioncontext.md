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

| Name | Type | Min Version | Description |
| :------ | :------ | :------ | :------ |
| hostControl | *object* | 23.0 | Use the methods in here to control Photoshop state. |
| hostControl.resumeHistory | (&#x60;params&#x60;: [*ResumeHistorySuspensionOptions*](/ps_reference/objects/options/resumehistorysuspensionoptions/), &#x60;commit?&#x60;: *boolean*) &#x3D;&gt; *Promise*&lt;void\&gt; | 23.0 | Call to resume history on a target document. commit (optional): if false, the current modified document state is dropped, and the document returns to the state when &#x60;suspendHistory&#x60; was invoked. |
| hostControl.suspendHistory | (&#x60;params&#x60;: [*HistoryStateInfo*](/ps_reference/objects/options/historystateinfo/)) &#x3D;&gt; *Promise*&lt;[*HistorySuspension*](/ps_reference/objects/returnobjects/historysuspension/)\&gt; | 23.0 | Call to suspend history on a target document, returns the suspension ID which can be used for resumeHistory. |
| isCancelled | *boolean* | 23.0 | True if user has cancelled the modal interaction. |
| onCancel | *void* | 23.0 | If assigned a method, it will be called when user cancels the modal interaction. |
| reportProgress | *void* | 23.0 | Call this to customize the progress bar. |
