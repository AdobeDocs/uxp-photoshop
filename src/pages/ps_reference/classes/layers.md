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

# Layers

A collections class allowing for array access into the applications
list of layers on a document,
while also providing familiar methods from ExtendScript, like `getByName`

```javascript
// Iterate through all the top layers of frontmost document
app.activeDocument.layers.forEach(h => console.log(h.name));
```

## Hierarchy

- *Array*<[*Layer*](/ps_reference/classes/layer/)\>

  ↳ **Layers**

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| length | *number* | Read-only | Number of [Layer](/ps_reference/modules/layer/) elements in this collection |
| typename | *string* | Read-only | The name for this object collection: Layers |

## Methods

### add

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Create a new layer.

___

### getByName

[*Layer*](/ps_reference/classes/layer/)

Find the first layer with the matching name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
