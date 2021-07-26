---
id: "layers"
title: "Layers"
sidebar_label: "Layers"
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

# collections/Layers

## Hierarchy

- *Array*<[*default*](/ps_reference/classes/layer/)\>

  ↳ **default**

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| length | *number* | Read-only | Number of [Layer](/ps_reference/modules/layer/) elements in this collection |
| typename | *string* | Read-only | The name for this object collection: Layers |

## Methods

### add

**async** : *Promise*<[*default*](/ps_reference/classes/layer/)\>

Create a new layer.

___

### getByName

[*default*](/ps_reference/classes/layer/)

Find the first layer with the matching name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
