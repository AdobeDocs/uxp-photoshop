---
id: "documents"
title: "Documents"
sidebar_label: "Documents"
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

# Documents

A collections class allowing for array access into the applications
list of documents that are currently open,
while also providing familiar methods from ExtendScript, like `getByName`

```javascript
// Iterate through all the documents
app.documents.forEach(h => console.log(h.title));
```

## Hierarchy

- *Array*<[*Document*](/ps_reference/classes/document/)\>

  ↳ **Documents**

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| length | *number* | Read-only | Number of [Document](/ps_reference/modules/document/) elements in this collection |
| parent | [*Photoshop*](/ps_reference/classes/photoshop/) | Read-only | The owner application of this Documents collection |
| typename | *string* | Read-only | The name for this object collection: Documents |

## Methods

### add

**async** : *Promise*<[*Document*](/ps_reference/classes/document/)\>

Create a new document.

No options will create a document of 7 x 5 inches at 300 pixels per inch.
This is the same as the "Default Photoshop Size" preset.

An object with a 'preset' string parameter can be used to specify any of
the other presets that come installed with Photoshop or created by users.

An object with one or more parameters can also be supplied. Any parameter
missing will be set to the default of: width 2100 pixels, height 1500 pixels,
resolution 300 pixels per inch, mode: @RGBColorMode and a fill of white with
no transparency.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [*DocumentCreateOptions*](/ps_reference/objects/documentcreateoptions/) | @DocumentCreateOptions |

___

### getByName

[*Document*](/ps_reference/classes/document/)

Find the first document with the matching name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
