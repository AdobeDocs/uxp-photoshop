---
id: "actionset"
title: "ActionSet"
sidebar_label: "ActionSet"
---

Photoshop Actions

Handles the content in Actions panel. Actions panel will have a hierarchy of action sets that contain a list of actions

## Accessors

###  actions

• **get actions**(): *[Action](action.md)[]*

List of actions in this action set

___

###  index

• **get index**(): *number*

0-index of this action set in the actions palette

___

###  name

• **get name**(): *string*

The name of this action set, displayed in the panel

• **set name**(`name`: string): *void*

Renames the action set

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

## Methods

###  delete

▸ **delete**(): *void*

Deletes this action set from the actions panel

___

###  duplicate

▸ **duplicate**(): *[ActionSet](actionset.md)*

Creates a copy of this action set

___

###  play

▸ **play**(): *Promise‹void›*

Plays all actions in this set one by one

**`async`**
