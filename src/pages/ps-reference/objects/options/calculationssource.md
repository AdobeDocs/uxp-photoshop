---
id: "calculationssource"
title: "CalculationsSource"
sidebar_label: "CalculationsSource"
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
description: Reference for sources (source1, source2, mask) to be used in CalculationsOptions.
---

# CalculationsSource

Reference for sources (source1, source2, mask) to be used in [CalculationsOptions](/ps-reference/objects/options/calculationsoptions.md).

| Name | Type | Default | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| channel | [*CalculationsChannelType*](/ps-reference/modules/types/calculationstypes.md#calculationschanneltype) | - | 24.5 | The channel used as a source: either a Channel instance or one of the Constants.CalculationsChannel values. |
| document | [*Document*](/ps-reference/classes/document.md) | - | 24.5 | The document used as a source |
| invert | *boolean* | false | 24.5 | Whether to invert the source or not |
| layer | CalculationsLayerType | - | 24.5 | Either a layer or the pseudo-layer that represents the merged result of all layers, the constant Constants.CalculationsLayer.MERGED. |
