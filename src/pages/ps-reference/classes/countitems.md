---
id: "countitems"
title: "CountItems"
sidebar_label: "CountItems"
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

# CountItems

A collections class allowing access to the document's CountItem.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 24.1 | Number of [CountItem](/ps_reference/classes/countitem/) elements in this collection. |
| parent | [*Document*](/ps_reference/classes/document/) | R | 24.1 | The owner [Document](/ps_reference/classes/document/) of this CountItems collection. |
| typename | *string* | R | 24.1 | The CountItems collection&#x27;s typename. |

## Methods

### activateGroupByIndex
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*void*

Activates a Count Item group by its index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | *number* |

___

### add
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

[*CountItem*](/ps_reference/classes/countitem/)

Adds a new [CountItem](/ps_reference/classes/countitem/) to the collection.

```javascript
app.activeDocument.countItems.add({x: 20, y: 20});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | *object* |
| `position.x` | *number* |
| `position.y` | *number* |

___

### createGroup
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*void*

Creates a new Count Item group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupName` | *string* |

___

### getAll
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

[*CountItem*](/ps_reference/classes/countitem/)[]

Retrieves all [CountItem](/ps_reference/classes/countitem/) objects from this collection.

```javascript
app.activeDocument.countItems.getAll();
```

___

### removeAllFromActiveGroup
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*void*

Clears all [CountItem](/ps_reference/classes/countitem/) objects from this collection.

```javascript
app.activeDocument.countItems.removeAllFromActiveGroup();
```

___

### removeGroupByIndex
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*void*

Removes a Count Item group by its index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | *number* |

___

### renameActiveGroup
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*void*

Renames the currently active Count Item group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupName` | *string* |

___

### setActiveColor
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*void*

Sets the Color of the Count Item marker and label.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*SolidColor*](/ps_reference/classes/solidcolor/) |

___

### setActiveLabelSize
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*void*

Sets the Count Item label (the number) size.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | *number* |

___

### setActiveMarkerSize
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*void*

Sets the Count Item marker (the dot) size.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | *number* |

___

### toggleActiveGroupVisibility
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*void*

Toggles the visibility of the currently selected Count Item group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `isVisible` | *boolean* |
