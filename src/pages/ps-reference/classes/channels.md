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

***Fixes in Photoshop 24.6***
- *Component channels should work now correctly in non-English localizations*
- *Channel should be now returned correctly in Bitmap and Indexed Color modes*

## Indexable

▪ [index: *number*]: [*Channel*](/ps_reference/classes/channel/)

Used to access the channels in the collection

```javascript
// Iterate through all channels in the document
app.activeDocument.channels.forEach(h => console.log(h.name));
```

***Fixes in Photoshop 24.6***
- *Component channels should work now correctly in non-English localizations*
- *Channel should be now returned correctly in Bitmap and Indexed Color modes*

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 23.0 | Number of Channel elements in this collection. |
| parent | [*Document*](/ps_reference/classes/document/) | R | 23.0 | The owner document of this Channel collection. |
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

***Fixes in Photoshop 24.6***
- *Non-English locales return correctly for component channels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

___

### removeAll
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*void*

Remove all Alpha channels in the parent document.
