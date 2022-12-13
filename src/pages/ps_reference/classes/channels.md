---
id: "channels"
title: "Channels"
sidebar_label: "Channels"
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

# Channels

A collections class allowing for array access into a document's channels,
while also providing familiar methods from ExtendScript, like `getByName`

```javascript
// Iterate through all channels in the document
app.activeDocument.channels.forEach(h => console.log(h.name));
```

## Indexable

▪ [index: *number*]: [*Channel*](/ps_reference/classes/channel/)

Used to access the channels in the collection

```javascript
// Iterate through all channels in the document
app.activeDocument.channels.forEach(h => console.log(h.name));
```

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 23.0 | Number of Channel elements in this collection. |
| parent | Document | R | 23.0 | The owner document of this Channel collection. |
| typename | *string* | R | 23.0 | The name for this object collection: Channels. |

## Methods

### add
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

[*Channel*](/ps_reference/classes/channel/)

Create a new alpha channel in this document.

___

### getByName
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

[*Channel*](/ps_reference/classes/channel/)

Find the first channel with the matching name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

___

### removeAll
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*void*

Remove all Alpha channels in the parent document.
