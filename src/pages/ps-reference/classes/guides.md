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

Used to access the guides in the collection.

Access this collection through [Document.guides](/ps_reference/classes/document/#guides) property. For example,
following adds a new guide to the collection:

```javascript
app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
```

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 23.0 | Number of [Guide](/ps_reference/classes/guide/) elements in this collection. |
| parent | [*Document*](/ps_reference/classes/document/) | R | 23.0 | The owner document of this Guide collection. |

## Methods

### add
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

[*Guide*](/ps_reference/classes/guide/)

Adds a guide for the collection at the given coordinate and direction

***Fixes in Photoshop 24.0:***
- *Correct coordinate when resolution is not 72 PPI*
- *Returns valid instance of guide*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | [*Direction*](/ps_reference/modules/constants/#direction) | Indicates whether the guide is vertical or horizontal |
| `coordinate` | *number* | Position of the guide measured from the ruler origin in pixels. The value can be a decimal.  Note: the user can move the ruler origin which will affect the position value of the guides. |

___

### removeAll
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*void*

Clears all guides from this collection.
