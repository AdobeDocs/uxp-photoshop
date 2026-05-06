---
id: "preferencesfilehandling"
title: "PreferencesFileHandling"
sidebar_label: "PreferencesFileHandling"
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

# PreferencesFileHandling

File handling preferences. Mostly about file saving options, file compatibility and recent files

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| askBeforeSavingLayeredTIFF | *boolean* | R W | 24.0 | If true, asks the user to verify layer preservation options when saving a file in TIFF format. |
| imagePreviews | [*SavePreview*](/ps_reference/modules/constants/#savepreview) | R W | 24.0 | The behavior mode to use when saving files |
| maximizeCompatibility | [*MaximizeCompatibility*](/ps_reference/modules/constants/#maximizecompatibility) | R W | 24.0 | The behavior to use to check whether to maximize compatibility when opening Adobe Photoshop (PSD) files. |
| recentFileListMaximum | *number* | R W | 24.0 | The maximum number of items in the recent file list [0,100]. |
| typename | *string* | R | 24.0 | The class name of the referenced object: *&quot;PreferencesFileHandling&quot;*. |
| useLowerCaseExtension | *boolean* | R W | 24.0 | If true, the file extension is lowercase |
