---
id: "action"
title: "Action"
sidebar_label: "Action"
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

# Action

Represents an Action in the Actions palette.
Actions are series of commands that can be recorded by user, and can be replayed at a later time

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| id | *number* | R | 22.1 | The internal ID of this Action Can be used for batchPlay calls, used internally |
| index | *number* | R | 22.1 | Zero-based index of this Action in it&#x27;s parent Action Set |
| name | *string* | R W | 22.1 | The name of this Action, displayed in the panel Cannot be changed |
| parent | [*ActionSet*](/ps_reference/classes/actionset/) | R | 22.1 | The Action Set this Action belongs to |
| typename | *string* | R | 23.0 | The class name of the referenced object: *&quot;Action&quot;*. |

## Methods

### delete
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">22.1</span>

*void*

Deletes this Action from the Actions panel

___

### duplicate
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">22.1</span>

[*Action*](/ps_reference/classes/action/)

Creates a copy of this Action, placing it in the same Action Set

___

### play
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">22.1</span>

**async** : *Promise*<void\>

Plays this Action
