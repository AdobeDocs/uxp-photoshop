---
id: "action"
title: "action"
sidebar_label: "action"
---

# Action

Represents an action in the Actions palette.
Actions are series of commands that can be recorded by user, and can be replayed at a later time

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| index | *number* | Read-only | 0-index of this action in it&#x27;s parent action set |
| name | *string* | Read-write | The name of this action, displayed in the panel Cannot be changed |
| parent | [*ActionSet*](/ps_reference/classes/ActionSet/) | Read-only | The action set this action belongs to |

## Methods

### delete

*void*

Deletes this action from the actions panel

___

### duplicate

[*Action*](/ps_reference/classes/Action/)

Creates a copy of this action, placing it in the same action set

___

### play

**async** : *Promise*<void\>

Plays this action
