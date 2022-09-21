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

## Indexable

▪ [index: *number*]: [*HistoryState*](/ps_reference/classes/historystate/)

Used to access the history states in the collection.

```javascript
// Iterate through all history states
app.activeDocument.historyStates.forEach(h => console.log(h.name));

// Find all snapshot history states
var snapshots = app.activeDocument.historyStates.filter(h => h.snapshot)
```

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 22.5 | Number of [HistoryState](/ps_reference/classes/historystate/) elements in this collection. |
| parent | Document | R | 22.5 | The owner document of this HistoryState collection. |

## Methods

### getByName
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">22.5</span>

[*HistoryState*](/ps_reference/classes/historystate/)

Find the first history state with the matching name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
