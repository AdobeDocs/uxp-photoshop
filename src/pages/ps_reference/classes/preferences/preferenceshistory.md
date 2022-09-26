---
id: "preferenceshistory"
title: "PreferencesHistory"
sidebar_label: "PreferencesHistory"
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

# PreferencesHistory

All preferences related to history logging

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| createFirstSnapshot | *boolean* | R W | 24.0 | If true, automatically makes the first snapshot when a new document is created |
| editLogItems | [*EditLogItemsType*](/ps_reference/modules/constants/#editlogitemstype) | R W | 24.0 | Options for edit log items.  Sets &#x60;history.useHistoryLog &#x3D; true&#x60; as side effect. |
| nonLinearHistory | *boolean* | R W | 24.0 | If true, allows non-linear history |
| numberOfHistoryStates | *number* | R W | 24.0 | The whole number of history states to preserve [1,1000]. |
| saveLogItems | [*SaveLogItemsType*](/ps_reference/modules/constants/#savelogitemstype) | R W | 24.0 | Options for saving the history items. It can be metadata, file or both.  Sets &#x60;history.useHistoryLog &#x3D; true&#x60; as side effect. |
| typename | *string* | R | 24.0 | The class name of the referenced object: *&quot;PreferencesHistory&quot;*. |
| useHistoryLog | *boolean* | R W | 24.0 | Turn on and off the history logging |
