---
id: "paragraphstyle"
title: "ParagraphStyle"
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
---

# ParagraphStyle

The Class that stores properties related to the Paragraph panel in the Photoshop UI.

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| features | [*TypeInterfaceFeatures*](/ps_reference/modules/constants/#typeinterfacefeatures) | R W | [DEFAULT](Constants.TypeInterfaceFeatures) | - | 24.1 | The paragraph UI features to display. |
| firstLineIndent | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to indent the first line of paragraphs for a 72ppi document. |
| hyphenation | *boolean* | R W | false | - | 24.1 | True to use hyphenation in word wrap. Use hyphenationFeatures for maximum control. |
| hyphenationFeatures | [*HyphenationProperties*](/ps_reference/objects/options/hyphenationproperties/) | R W | - | - | 24.1 | The property values used to calculate hyphenation. |
| justification | [*Justification*](/ps_reference/modules/constants/#justification) | R W | [LEFT](Constants.Justification) | - | 24.1 | The paragraph justification. |
| justificationFeatures | [*JustificationProperties*](/ps_reference/objects/options/justificationproperties/) | R W | - | - | 24.1 | The property values used to calculate justification. |
| kashidaWidth | [*KashidaWidthType*](/ps_reference/modules/constants/#kashidawidthtype) | R W | [MEDIUM](Constants.KashidaWidthType) | - | 24.1 | The width of kashida (tatweel) character |
| kinsoku | [*Kinsoku*](/ps_reference/modules/constants/#kinsoku) | R W | [NONE](Constants.Kinsoku) | - | 24.1 | Line breaking rules in Japanese text (Kinsoku Shori) |
| layoutMode | [*ParagraphLayout*](/ps_reference/modules/constants/#paragraphlayout) | R W | [WORLD](Constants.ParagraphLayout) | - | 24.1 | The paragraph layout mode. |
| leftIndent | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to indent text from the left for a 72ppi document. |
| mojikumi | [*Mojikumi*](/ps_reference/modules/constants/#mojikumi) | R W | [NONE](Constants.Mojikumi) | - | 24.1 | Spacing between punctuation, symbols, numbers, and other character classes in Japanese text. |
| rightIndent | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to indent text from the right for a 72ppi document. |
| spaceAfter | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to use after each paragraph for a 72ppi document. |
| spaceBefore | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to use before each paragraph for a 72ppi document. |

## Methods

### reset
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

**async** : *Promise*<void\>

Resets the paragraph style to its default values.
