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

A collections class allowing for array access into a document's Layer Comps

Access this collection through [Document.layerComps](/ps_reference/classes/document/#layercomps) property. For example,
following adds a new Layer Comp to the collection:

```javascript
const comp = await app.activeDocument.layerComps.add();
```

## Indexable

▪ [index: *number*]: [*LayerComp*](/ps_reference/classes/layercomp/)

Used to access the Layer Comp in the collection

Access this collection through [Document.layerComps](/ps_reference/classes/document/#layercomps) property. For example,
following adds a new Layer Comp to the collection:

```javascript
const comp = await app.activeDocument.layerComps.add();
```

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 24.0 | Number of [LayerComp](/ps_reference/classes/layercomp/) elements in this collection |
| parent | [*Document*](/ps_reference/classes/document/) | R | 24.0 | The owner document of this Layer comp collection |
| typename | *string* | R | 24.0 | The name for this object collection: LayerComps |

## Methods

### add
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

*Promise*<[*LayerComp*](/ps_reference/classes/layercomp/)\>

Adds a Layer Comp to the document's collection. If no options are given, only visibility will be recorded.

Note: This command will fail if the document is flat, that is, only a Background and no other layers.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | [*LayerCompCreateOptions*](/ps_reference/objects/createoptions/layercompcreateoptions/) | {} | An optional object literal containing key/value pairs as described by [LayerCompCreateOptions](/ps_reference/objects/createoptions/layercompcreateoptions/) ``` const options = {    name: "mockup",   comment: "First attempt",   visibility: true,   position: true  }; await require('photoshop').app.activeDocument.layerComps.add(options); ``` |

___

### getAllByName
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

[*LayerComp*](/ps_reference/classes/layercomp/)[]

Get all Layer Comps by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

___

### removeAll
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

*Promise*<void\>

Clears all Layer Comps from this collection
