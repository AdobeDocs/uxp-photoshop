---
id: "historystates"
title: "HistoryStates"
sidebar_label: "HistoryStates"
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

# HistoryStates

A collections class allowing for array access into a document's history states,
while also providing familiar methods from ExtendScript, like `getByName`

```javascript
// Iterate through all history states
app.activeDocument.historyStates.forEach(h => console.log(h.name));

// Find all snapshot history states
var snapshots = app.activeDocument.historyStates.filter(h => h.snapshot)
```

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| length | *number* | Read-only | Number of [HistoryState](/ps_reference/modules/historystate/) elements in this collection |
| parent | Document | Read-only | The owner document of this HistoryState collection |

## Methods

### getByName

[*HistoryState*](/ps_reference/classes/historystate/)

Find the first history state with the matching name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
