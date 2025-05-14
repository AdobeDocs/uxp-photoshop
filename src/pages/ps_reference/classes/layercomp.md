---
id: "layercomp"
title: "LayerComp"
sidebar_label: "LayerComp"
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

# LayerComp

Represents a single layer comp in the document.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| appearance | *boolean* | R W | 24.0 | If true, the layer comp will remember the layers&#x27; appearance (layer style) settings. |
| childComp | *boolean* | R W | 24.0 | If true, the layer comp will remember which of the Smart Object&#x27;s layer comps are set in the Properties panel. |
| comment | *string* | R W | 24.0 | The description of the layer comp. |
| docId | *number* | R | 24.0 | The ID of the document of this layer comp. |
| id | *number* | R | 24.0 | For use with batchPlay operations. This layer comp ID, along with its document ID can be used to represent this layer comp for the lifetime of this document or the layer comp. |
| name | *string* | R W | 24.0 | The name of the layer comp. |
| parent | [*Document*](/ps_reference/classes/document/) | R | 24.0 | Owner document of this layer comp |
| position | *boolean* | R W | 24.0 | If true, the layer comp will remember layers&#x27; positions. |
| selected | *boolean* | R | 24.0 | If true, the layer comp is currently selected in the Layer Comps panel.  Note: selected does not mean that this layer comp is applied to document. |
| typename | *string* | R | 24.0 | The class name of the referenced LayerComp object |
| visibility | *boolean* | R W | 24.0 | If true, the layer comp will remember layers&#x27; visibilities. |

## Methods

### apply
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

**async** : *Promise*<void\>

Applies the layer comp to the document.

___

### duplicate
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

**async** : *Promise*<[*LayerComp*](/ps_reference/classes/layercomp/)\>

Duplicates this layer comp

___

### recapture
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

**async** : *Promise*<void\>

Updates the recorded states of the layers for this layer comp.

With no arguments, the update applies to all layers and all properties supported by this layer comp.
```javascript
app.activeDocument.layerComps[0].recapture();
```

___

### remove
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

**async** : *Promise*<void\>

Deletes this object from document.

___

### resetLayerComp
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

**async** : *Promise*<void\>

Resets the layer comp state to the document state.
