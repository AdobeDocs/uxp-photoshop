---
id: "action"
title: "Action"
sidebar_label: "Action"
repo: "uxp-photoshop"
product: "photoshop"
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

# Action

Represents an action in the Actions palette.
Actions are series of commands that can be recorded by user, and can be replayed at a later time

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| id | *number* | Read-only | The internal ID of this action  Can be used for batchPlay calls, used internally |
| index | *number* | Read-only | 0-index of this action in it&#x27;s parent action set |
| name | *string* | Read-write | The name of this action, displayed in the panel Cannot be changed |
| parent | [*ActionSet*](/ps_reference/classes/actionset/) | Read-only | The action set this action belongs to |
| typename | *string* | Read-only | The class name of the referenced Action object |

## Methods

### delete

*void*

Deletes this action from the actions panel

___

### duplicate

[*Action*](/ps_reference/classes/action/)

Creates a copy of this action, placing it in the same action set

___

### play

**async** : *Promise*<void\>

Plays this action
