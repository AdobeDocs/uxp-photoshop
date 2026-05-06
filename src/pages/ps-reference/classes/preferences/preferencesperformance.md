---
id: "preferencesperformance"
title: "PreferencesPerformance"
sidebar_label: "PreferencesPerformance"
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

# PreferencesPerformance

Performance preferences. Options that could possibly affect speed of Photoshop.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| imageCacheLevels | *number* | R W | 24.0 | Number of cached levels of image data. Used to improve screen redraw and histogram speed. Choose more Cache Levels for bigger documents with few layers; choose fewer Cache Levels for smaller documents with many layers [1,8].  *Requires Photoshop restart for changed value to take an effect.* |
| maxRAMuse | *number* | R W | 24.0 | Maximum percentage of available RAM used by Photoshop as a whole number [2,99].  *Requires Photoshop restart for changed value to take an effect.* |
| typename | *string* | R | 24.0 | The class name of the referenced object: *&quot;PreferencesPerformance&quot;*. |
