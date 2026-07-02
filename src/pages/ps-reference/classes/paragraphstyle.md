---
id: "paragraphstyle"
title: ParagraphStyle
sidebar_label: "ParagraphStyle"
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
description: The Class that stores properties related to the Paragraph panel in the Photoshop UI.
---

# ParagraphStyle

The Class that stores properties related to the Paragraph panel in the Photoshop UI.

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| features | [*TypeInterfaceFeatures*](/ps-reference/modules/constants.md#typeinterfacefeatures) | R W | [DEFAULT](/ps-reference/modules/constants.md#typeinterfacefeatures) | - | 24.1 | The paragraph UI features to display. |
| firstLineIndent | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to indent the first line of paragraphs for a 72ppi document. |
| hyphenation | *boolean* | R W | false | - | 24.1 | True to use hyphenation in word wrap. Use hyphenationFeatures for maximum control. |
| hyphenationFeatures | [*HyphenationProperties*](/ps-reference/objects/options/hyphenationproperties.md) | R W | - | - | 24.1 | The property values used to calculate hyphenation. |
| justification | [*Justification*](/ps-reference/modules/constants.md#justification) | R W | [LEFT](/ps-reference/modules/constants.md#justification) | - | 24.1 | The paragraph justification. |
| justificationFeatures | [*JustificationProperties*](/ps-reference/objects/options/justificationproperties.md) | R W | - | - | 24.1 | The property values used to calculate justification. |
| kashidaWidth | [*KashidaWidthType*](/ps-reference/modules/constants.md#kashidawidthtype) | R W | [MEDIUM](/ps-reference/modules/constants.md#kashidawidthtype) | - | 24.1 | The width of kashida (tatweel) character |
| kinsoku | [*Kinsoku*](/ps-reference/modules/constants.md#kinsoku) | R W | [NONE](/ps-reference/modules/constants.md#kinsoku) | - | 24.1 | Line breaking rules in Japanese text (Kinsoku Shori) |
| layoutMode | [*ParagraphLayout*](/ps-reference/modules/constants.md#paragraphlayout) | R W | [WORLD](/ps-reference/modules/constants.md#paragraphlayout) | - | 24.1 | The paragraph layout mode. |
| leftIndent | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to indent text from the left for a 72ppi document. |
| mojikumi | [*Mojikumi*](/ps-reference/modules/constants.md#mojikumi) | R W | [NONE](/ps-reference/modules/constants.md#mojikumi) | - | 24.1 | Spacing between punctuation, symbols, numbers, and other character classes in Japanese text. |
| rightIndent | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to indent text from the right for a 72ppi document. |
| spaceAfter | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to use after each paragraph for a 72ppi document. |
| spaceBefore | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to use before each paragraph for a 72ppi document. |

## Methods

### reset
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

\<br/\>
**async** : *Promise*`<void>`

Resets the paragraph style to its default values.
