---
id: "historystate"
title: "HistoryState"
sidebar_label: "HistoryState"
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

# HistoryState

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| docId | *number* | Read-only | The ID of the document of this history state. |
| id | *number* | Read-only | For use with batchPlay operations. This history ID, along with its document ID can be used to represent this history state for the lifetime of this document. |
| name | *string* | Read-only | The name of this history state as it appears on history panel |
| parent | [*Document*](/ps_reference/classes/document/) | Read-only | Owner document of this history state |
| snapshot | *boolean* | Read-only | Whether this history state is a snapshot or an automatically generated history state |
