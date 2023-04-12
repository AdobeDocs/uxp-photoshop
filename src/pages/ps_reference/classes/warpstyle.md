---
id: "warpstyle"
title: "WarpStyle"
sidebar_label: "WarpStyle"
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

# WarpStyle

The Class that stores properties related to the Warp Text dialog.

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| bend | *number* | R W | - | -100..100 | 24.1 | The warp bend as a percentage. |
| direction | [*Direction*](/ps_reference/modules/constants/#direction) | R W | HORIZONTAL | - | 24.1 | The warp direction |
| horizontalDistortion | *number* | R W | - | -100..100 | 24.1 | The horizontal distortion of the warp as a percentage. |
| style | [*WarpStyle*](/ps_reference/modules/constants/#warpstyle) | R W | NONE | - | 24.1 | he style of warp to apply to the text. |
| verticalDistortion | *number* | R W | - | -100..100 | 24.1 | The vertical distortion of the warp as a percentage. |

## Methods

### reset
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

**async** : *Promise*<void\>

Reset the WarpStyle to its default values.
