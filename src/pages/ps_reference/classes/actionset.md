---
id: "actionset"
title: "ActionSet"
sidebar_label: "ActionSet"
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

# ActionSet

Photoshop Actions

Handles the content in Actions panel.
Actions panel will have a hierarchy of Action Sets that contain a list of Actions

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| actions | [*Action*](/ps_reference/classes/action/)[] | R | 22.1 | List of Actions in this Action Set |
| id | *number* | R | 22.1 | The internal ID of this Action Set Can be used for batchPlay calls, used internally |
| index | *number* | R | 22.1 | Zero-based index of this Action Set in the Actions palette |
| name | *string* | R W | 22.1 | The name of this Action Set, displayed in the panel |
| typename | *string* | R | 23.0 | The class name of the referenced object: *&quot;ActionSet&quot;*. |

## Methods

### delete
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">22.1</span>

`void`

Deletes this Action Set from the Actions panel

___

### duplicate
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">22.1</span>

[`ActionSet`](/ps_reference/classes/actionset/)

Creates a copy of this Action Set

___

### play
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">22.1</span>

**async** : `Promise`<`void`\>

Plays all Actions in this set one by one
