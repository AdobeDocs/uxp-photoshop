---
id: "countitem"
title: CountItem
sidebar_label: "CountItem"
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
description: • Readonly groupIndex: number
---

# CountItem

## Properties

### groupIndex

• `Readonly` **groupIndex**: *number*

The index of the Group the CountItem belongs to.

<HorizontalLine />

### itemIndex

• `Readonly` **itemIndex**: *number*

The itemIndex of the CountItem as received from the descriptor.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| parent | [*CountItems*](/ps-reference/classes/countitems.md) | R | 24.1 | The document collection in which we will find this and all other CountItems collected. |
| position | *object* | R | 24.1 | The position of the CountItem as an object with x and y properties in pixels. |
| typename | *string* | R | 24.1 | The class name of the referenced CountItem object |

## Methods

### move
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
*void*

Moves the CountItem to a new position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | *object* | : Object with x and y properties in pixels; |
| `position.x` | *number* | - |
| `position.y` | *number* | - |

<HorizontalLine />

### remove
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
*void*

Removes the CountItem from the document.
