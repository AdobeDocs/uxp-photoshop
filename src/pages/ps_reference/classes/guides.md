---
id: "guides"
title: "Guides"
sidebar_label: "Guides"
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

# Guides

A collections class allowing for array access into a document's guides

Access this collection through [Document.guides](/ps_reference/classes/document/#guides) property. For example,
following adds a new guide to the collection:

```javascript
app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
```

## Indexable

▪ [index: *number*]: [*Guide*](/ps_reference/classes/guide/)

Used to access the guides in the collection

Access this collection through [Document.guides](/ps_reference/classes/document/#guides) property. For example,
following adds a new guide to the collection:

```javascript
app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
```

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| length | *number* | Read-only | Number of [Guide](/ps_reference/modules/guide/) elements in this collection |
| parent | Document | Read-only | The owner document of this Guide collection |

## Methods

### add

*void*

Adds a guide for the collection at the given coordinate and direction

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [*Direction*](/ps_reference/modules/constants/#direction) |
| `coordinate` | *number* |

___

### removeAll

*void*

Clears all guides from this collection
