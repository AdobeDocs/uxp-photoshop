---
id: "layers"
title: Layers
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
description: A collections class allowing for array access into the applications
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

▪ [index: *number*]: [*Layer*](/ps-reference/classes/layer.md)

Used to access the layers in the collection.

```javascript
// Iterate through all the top layers of frontmost document
app.activeDocument.layers.forEach(h => console.log(h.name));
```

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 22.5 | Number of [Layer](/ps-reference/classes/layer.md) elements in this collection. |
| typename | *string* | R | 22.5 | The name for this object collection: Layers. |

## Methods

### add
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
**async** : *Promise*\<[*Layer*](/ps-reference/classes/layer.md)\>

Create a new layer.

```javascript
let newDoc1 = await app.activeDocument.layers.add();
```

<HorizontalLine />

### getByName
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>22.5\</span\>

\<br/\>
[*Layer*](/ps-reference/classes/layer.md)

Find the first layer with the matching name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
