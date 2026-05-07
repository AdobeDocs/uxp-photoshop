---
id: "textfonts"
title: TextFonts
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
description: The collection of fonts available on your computer. Fonts are represented by
---

# TextFonts

The collection of fonts available on your computer. Fonts are represented by
 [TextFont](/ps-reference/classes/textfont.md) objects. Access this object in the [Photoshop.fonts](/ps-reference/classes/photoshop.md#fonts) property.

## Indexable

▪ [index: *number*]: [*TextFont*](/ps-reference/classes/textfont.md)

Used to access the text fonts in the collection.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| length | *number* | R | 23.0 | Number of [TextFont](/ps-reference/classes/textfont.md) elements in this collection. |
| parent | [*Photoshop*](/ps-reference/classes/photoshop.md) | R | 23.0 | The owner application of this TextFonts collection. |
| typename | *string* | R | 23.0 | The name for this object collection: TextFonts. |

## Methods

### getByName
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.0\</span\>

\<br/\>
[*TextFont*](/ps-reference/classes/textfont.md)

Find the first font with the given PostScript name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
