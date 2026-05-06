---
id: "preferences"
title: "Preferences"
sidebar_label: "Preferences"
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
description: Contains Photoshop preferences grouped into several categories similar to preferences in user interface.
---

# Preferences

Contains Photoshop preferences grouped into several categories similar to preferences in user interface.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| cursors | [*PreferencesCursors*](/ps-reference/classes/preferences/preferencescursors.md) | R | 24.0 | Options for size and style of tool cursors. |
| fileHandling | [*PreferencesFileHandling*](/ps-reference/classes/preferences/preferencesfilehandling.md) | R | 24.0 | File handling preferences. Mostly about file saving options, file compatibility and recent files. |
| general | [*PreferencesGeneral*](/ps-reference/classes/preferences/preferencesgeneral.md) | R | 24.0 | General preferences. |
| guidesGridsAndSlices | [*PreferencesGuidesGridsAndSlices*](/ps-reference/classes/preferences/preferencesguidesgridsandslices.md) | R | 24.0 | Presentation options for guides, grid, slices, paths, and other on-canvas controls. |
| history | [*PreferencesHistory*](/ps-reference/classes/preferences/preferenceshistory.md) | R | 24.0 | All preferences related to history logging. |
| interface | [*PreferencesInterface*](/ps-reference/classes/preferences/preferencesinterface.md) | R | 24.0 | User interface preferences. |
| notifications | [*PreferencesNotifications*](/ps-reference/classes/preferences/preferencesnotifications.md) | R | 26.11 | Notifications preferences.  Note: Some notifications preferences will be locked when Quiet Mode is enabled. Attempts to modify locked preferences will throw errors while Quiet Mode is active. |
| performance | [*PreferencesPerformance*](/ps-reference/classes/preferences/preferencesperformance.md) | R | 24.0 | Options that could affect the speed of Photoshop performance including GPU usage. |
| tools | [*PreferencesTools*](/ps-reference/classes/preferences/preferencestools.md) | R | 24.0 | Tools preferences. |
| transparencyAndGamut | [*PreferencesTransparencyAndGamut*](/ps-reference/classes/preferences/preferencestransparencyandgamut.md) | R | 24.0 | Controls for how transparency will be shown and what color to use for the out-of-gamut warning. |
| type | [*PreferencesType*](/ps-reference/classes/preferences/preferencestype.md) | R | 24.0 | Preferences related to type. |
| typename | *string* | R | 24.0 | The class name of the referenced object: *&quot;Preferences&quot;*. |
| unitsAndRulers | [*PreferencesUnitsAndRulers*](/ps-reference/classes/preferences/preferencesunitsandrulers.md) | R | 24.0 | Preferences related to ruler units, type units and resolution. |
