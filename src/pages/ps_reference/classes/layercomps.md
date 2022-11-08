---
id: "layercomps"
title: "LayerComps"
sidebar_label: "LayerComps"
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

# LayerComps

A collections class allowing for array access into a document's layer comps

Access this collection through [Document.layerComps](/ps_reference/classes/document/#layercomps) property. For example,
following adds a new layer comp to the collection:

```javascript
const comp = await app.activeDocument.layerComps.add();
```

## Indexable

▪ [index: `number`]: [`LayerComp`](/ps_reference/classes/layercomp/)

Used to access the layer comp in the collection

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 24.0 | Number of [LayerComp](/ps_reference/classes/layercomp/) elements in this collection |
| parent | [*Document*](/ps_reference/classes/document/) | R | 24.0 | The owner document of this Layer comp collection |
| typename | *string* | R | 24.0 | The name for this object collection: LayerComps |

## Methods

### add
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">24.0</span>

`Promise`<[`LayerComp`](/ps_reference/classes/layercomp/)\>

Adds a layer comp for the collection

Note: This command will fail if document has only background layer and no other layers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `LayerCompAddArgument` |

___

### getAllByName
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">24.0</span>

[`LayerComp`](/ps_reference/classes/layercomp/)[]

Get all layer comps by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

___

### removeAll
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">24.0</span>

`Promise`<`void`\>

Clears all layer comps from this collection
