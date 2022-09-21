---
id: "layers"
title: "Layers"
sidebar_label: "Layers"
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

# Layers

A collections class allowing for array access into the applications
list of layers on a document,
while also providing familiar methods from ExtendScript, like `getByName`

```javascript
// Iterate through all the top layers of frontmost document
app.activeDocument.layers.forEach(h => console.log(h.name));
```

## Indexable

▪ [index: *number*]: [*Layer*](/ps_reference/classes/layer/)

Used to access the layers in the collection.

```javascript
// Iterate through all the top layers of frontmost document
app.activeDocument.layers.forEach(h => console.log(h.name));
```

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 22.5 | Number of [Layer](/ps_reference/classes/layer/) elements in this collection. |
| typename | *string* | R | 22.5 | The name for this object collection: Layers. |

## Methods

### add
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">22.5</span>

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Create a new layer.

```javascript
let newDoc1 = await app.activeDocument.layers.add();
```

___

### getByName
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">22.5</span>

[*Layer*](/ps_reference/classes/layer/)

Find the first layer with the matching name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
