---
id: "documents"
title: "Documents"
sidebar_label: "Documents"
repo: "uxp-photoshop"
index: "photoshop"
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

# collections/Documents

## Hierarchy

- *Array*<[*default*](/ps_reference/classes/Document/)\>

  ↳ **default**

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| length | *number* | Read-only | Number of [Document](/ps_reference/modules/Document/) elements in this collection |
| parent | [*Photoshop*](/ps_reference/classes/Photoshop/) | Read-only | The owner application of this Documents collection |
| typename | *string* | Read-only | The name for this object collection: Documents |

## Methods

### add

**async** : *Promise*<[*default*](/ps_reference/classes/Document/)\>

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
| `options?` | [*DocumentCreateOptions*](/ps_reference/objects/DocumentCreateOptions/) | @DocumentCreateOptions |

___

### getByName

[*default*](/ps_reference/classes/Document/)

Find the first document with the matching name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
