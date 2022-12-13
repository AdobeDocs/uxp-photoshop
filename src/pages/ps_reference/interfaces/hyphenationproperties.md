---
id: "hyphenationproperties"
title: "HyphenationProperties"
sidebar_label: "HyphenationProperties"
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

# HyphenationProperties

The hyphenation features as they're displayed in the dialog
found in the Paragraph's flyout menu "Hyphenation...".
All numbers are pixels.

| Name | Type | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ |
| afterFirst | *number* | 2 | 1..15 | 24.1 | The minimum number of letters after which hyphenation in word wrap is allowed. |
| beforeLast | *number* | 2 | 1..15 | 24.1 | The minimum number of letters before which hyphenation in word wrap is allowed. |
| capitalWords | *boolean* | true | - | 24.1 | True to allow hyphenation in word wrap of capitalized words. |
| limit | *number* | 2 | 2..25 | 24.1 | The maximum number of consecutive lines that can end with a hyphenated word. |
| wordsLongerThan | *number* | 5 | 2..25 | 24.1 | The minimum number of letters a word must have in order for hyphenation in word wrap to be allowed. |
| zone | *number* | 36 | 0..8640 for a 72PPI document | 24.1 | The distance in pixels at the end of a line that will cause a word to break in unjustified type. |
