---
id: "action"
title: "Action"
sidebar_label: "Action"
repo: "uxp-photoshop"
index: "photoshop"
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

Represents an action in the Actions palette. Actions are series of commands that can be recorded by user, and can be replayed
at a later time

## Accessors

###  index

• **get index**(): *number*

0-index of this action in it's parent action set

___

###  name

• **get name**(): *string*

The name of this action, displayed in the panel
Cannot be changed

• **set name**(`name`: string): *void*

Renames the action set

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

___

###  parent

• **get parent**(): *[ActionSet](/ps_reference/classes/actionset/)*

The action set this action belongs to

## Methods

###  delete

▸ **delete**(): *void*

Deletes this action from the actions panel

___

###  duplicate

▸ **duplicate**(): *[Action](/ps_reference/classes/action)*

Creates a copy of this action, placing it in the same action set

___

###  play

▸ **play**(): *Promise‹void›*

Plays this action

**`async`**
