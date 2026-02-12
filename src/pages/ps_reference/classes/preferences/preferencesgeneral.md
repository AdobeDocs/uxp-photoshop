---
id: "preferencesgeneral"
title: "PreferencesGeneral"
sidebar_label: "PreferencesGeneral"
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

# PreferencesGeneral

General preferences

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| autoUpdateOpenDocuments | *boolean* | R W | 24.0 | Determines whether to automatically re-read open file-based documents updated outside Photoshop. Cloud documents are not affected by this setting.&#x27; |
| beepWhenDone | *boolean* | R W | 24.0 | If true, alerts the user when a command completes |
| colorPicker | [*ColorPickerOption*](/ps_reference/objects/options/colorpickeroption/) | R W | 24.0 | Changes color picker used within Photoshop. The options are Photoshop, OS Native, and Plugin. |
| exportClipboard | *boolean* | R W | 24.0 | If true, retains Adobe Photoshop contents on the clipboard after you exit the application. |
| imageInterpolation | [*InterpolationMethod*](/ps_reference/modules/constants/#interpolationmethod) | R W | 24.0 | Method used when scaling or resizing images. |
| typename | *string* | R | 24.0 | The class name of the referenced object: *&quot;PreferencesGeneral&quot;*. |
