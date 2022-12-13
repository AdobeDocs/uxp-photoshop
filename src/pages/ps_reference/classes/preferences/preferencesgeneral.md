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
| colorPicker | [*ColorPickerArg*](/ps_reference/interfaces/colorpickerarg/) | R W | 24.0 | Changes color picker within the Photoshop. It uses object where &#x60;type&#x60; property is color picker type to use. If color picker type is &#x60;ColorPicker.PLUGIN&#x60; then also &#x60;pluginID&#x60; property must be provided and must contain internal ID of the plugin as a string. |
| exportClipboard | *boolean* | R W | 24.0 | If true, retains Adobe Photoshop contents on the clipboard after you exit the application. |
| imageInterpolation | [*InterpolationMethod*](/ps_reference/modules/constants/#interpolationmethod) | R W | 24.0 | Method used when scaling or resizing images. |
| typename | *string* | R | 24.0 | The class name of the referenced object: *&quot;PreferencesGeneral&quot;*. |
