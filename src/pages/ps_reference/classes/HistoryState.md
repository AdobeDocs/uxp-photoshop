---
id: "historystate"
title: "HistoryState"
sidebar_label: "HistoryState"
---

# HistoryState

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| id | *number* | Read-only | For use with batchPlay operations. This history ID, along with its document ID can be used to represent this history state for the lifetime of this document. |
| name | *string* | Read-only | The name of this history state as it appears on history panel |
| parent | [*Document*](/ps_reference/classes/Document/) | Read-only | Owner document of this history state |
| snapshot | *boolean* | Read-only | Whether this history state is a snapshot or an automatically generated history state |
