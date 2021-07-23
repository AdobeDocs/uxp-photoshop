---
id: "actionset"
title: "ActionSet"
sidebar_label: "ActionSet"
repo: "uxp-photoshop"
index: "photoshop"
keywords: "
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
"
---

# ActionSet

Photoshop Actions

Handles the content in Actions panel.
Actions panel will have a hierarchy of action sets that contain a list of actions

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| actions | [*Action*](/ps_reference/classes/Action/)[] | Read-only | List of actions in this action set |
| id | *number* | Read-only | The internal ID of this Action Set Can be used for batchPlay calls, used internally |
| index | *number* | Read-only | 0-index of this action set in the actions palette |
| name | *string* | Read-write | The name of this action set, displayed in the panel |

## Methods

### delete

*void*

Deletes this action set from the actions panel

___

### duplicate

[*ActionSet*](/ps_reference/classes/ActionSet/)

Creates a copy of this action set

___

### play

**async** : *Promise*<void\>

Plays all actions in this set one by one
