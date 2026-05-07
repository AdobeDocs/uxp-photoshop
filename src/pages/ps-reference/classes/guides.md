---
id: "guides"
title: Guides
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
description: A collections class allowing for array access into a document's guides
---

# Guides

A collections class allowing for array access into a document's guides

Access this collection through [Document.guides](/ps-reference/classes/document.md#guides) property. For example,
following adds a new guide to the collection:

```javascript
app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
```

## Indexable

▪ [index: *number*]: [*Guide*](/ps-reference/classes/guide.md)

Used to access the guides in the collection.

Access this collection through [Document.guides](/ps-reference/classes/document.md#guides) property. For example,
following adds a new guide to the collection:

```javascript
app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
```

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 23.0 | Number of [Guide](/ps-reference/classes/guide.md) elements in this collection. |
| parent | [*Document*](/ps-reference/classes/document.md) | R | 23.0 | The owner document of this Guide collection. |

## Methods

### add
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.0\</span\>

\<br/\>
[*Guide*](/ps-reference/classes/guide.md)

Adds a guide for the collection at the given coordinate and direction

***Fixes in Photoshop 24.0:***
- *Correct coordinate when resolution is not 72 PPI*
- *Returns valid instance of guide*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | [*Direction*](/ps-reference/modules/constants.md#direction) | Indicates whether the guide is vertical or horizontal |
| `coordinate` | *number* | Position of the guide measured from the ruler origin in pixels. The value can be a decimal.  Note: the user can move the ruler origin which will affect the position value of the guides. |

<HorizontalLine />

### removeAll
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.0\</span\>

\<br/\>
*void*

Clears all guides from this collection.
