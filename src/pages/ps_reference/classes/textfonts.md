---
id: "textfonts"
title: "TextFonts"
sidebar_label: "TextFonts"
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

# TextFonts

The collection of fonts available on your computer. Fonts are represented by
 [TextFont](/ps_reference/classes/textfont/) objects. Access this object in the [Photoshop.fonts](/ps_reference/classes/photoshop/#fonts) property.

## Indexable

▪ [index: *number*]: [*TextFont*](/ps_reference/classes/textfont/)

Used to access the text fonts in the collection.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 23.0 | Number of [TextFont](/ps_reference/classes/textfont/) elements in this collection. |
| parent | [*Photoshop*](/ps_reference/classes/photoshop/) | R | 23.0 | The owner application of this TextFonts collection. |
| typename | *string* | R | 23.0 | The name for this object collection: TextFonts. |

## Methods

### getByName
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">23.0</span>

[*TextFont*](/ps_reference/classes/textfont/)

Find the first font with the given PostScript name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
