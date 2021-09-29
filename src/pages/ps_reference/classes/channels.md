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

## Hierarchy

- *Array*<[*Channel*](/ps_reference/classes/channel/)\>

  ↳ **Channels**

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| length | *number* | Read-only | Number of Channel elements in this collection |
| parent | Document | Read-only | The owner document of this Channel collection |
| typename | *string* | Read-only | The name for this object collection: Channels |

## Methods

### add

[*Channel*](/ps_reference/classes/channel/)

Create a new alpha channel in this document

___

### getByName

[*Channel*](/ps_reference/classes/channel/)

Find the first channel with the matching name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

___

### removeAll

*void*

Remove all Alpha channels in the parent document
