---
id: "documents"
title: "Documents"
sidebar_label: "Documents"
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

# Documents

A collections class allowing for array access into the application's
list of documents that are currently open,
while also providing familiar methods from ExtendScript, like `getByName`.

```javascript
// Iterate through all the documents
app.documents.forEach(h => console.log(h.title));
```

## Indexable

▪ [index: `number`]: [`Document`](/ps_reference/classes/document/)

Used to access the documents in the collection.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 22.5 | Number of [Document](/ps_reference/classes/document/) elements in this collection. |
| parent | [*Photoshop*](/ps_reference/classes/photoshop/) | R | 22.5 | The owner application of this Documents collection. |
| typename | *string* | R | 22.5 | The name for this object collection: Documents. |

## Methods

### add
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">22.5</span>

**async** : `Promise`<[`Document`](/ps_reference/classes/document/)\>

Create a new document.

No options will create a document of 7 x 5 inches at 300 pixels per inch.
This is the same as the "Default Photoshop Size" preset.

An object with a 'preset' string parameter can be used to specify any of
the other presets that come installed with Photoshop or created by users.

An object with one or more parameters can also be supplied. Any parameter
missing will be set to the default of: width 2100 pixels, height 1500 pixels,
resolution 300 pixels per inch, mode: @RGBColorMode and a fill of white with
no transparency.

```javascript
// "Default Photoshop Size" 7x5 inches at 300ppi
let newDoc1 = await app.documents.add();
let newDoc2 = await app.documents.add({
   width: 800, 
   height: 600, 
   resolution: 300, 
   mode: "RGBColorMode", 
   fill: "transparent"
});
let newDoc3 = await app.documents.add({preset: "My Default Size 1"});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`DocumentCreateOptions`](/ps_reference/objects/createoptions/documentcreateoptions/) | @DocumentCreateOptions |

___

### getByName
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">22.5</span>

[`Document`](/ps_reference/classes/document/)

Find the first document with the matching name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
