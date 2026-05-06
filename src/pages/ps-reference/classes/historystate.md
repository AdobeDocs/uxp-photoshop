---
id: "historystate"
title: "HistoryState"
sidebar_label: "HistoryState"
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

# HistoryState

Represents a single history state in the History panel.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| docId | *number* | R | 22.5 | The ID of the document of this history state. |
| id | *number* | R | 22.5 | For use with batchPlay operations. This history ID, along with its document ID can be used to represent this history state for the lifetime of this document. |
| name | *string* | R | 22.5 | The name of this history state as it appears on history panel. |
| parent | [*Document*](/ps_reference/classes/document/) | R | 22.5 | Owner document of this history state. |
| snapshot | *boolean* | R | 22.5 | Whether this history state is a snapshot or an automatically generated history state. |
| typename | *string* | R | 23.0 | The class name of the referenced object: *&quot;HistoryState&quot;*. |
