---
title: UxpMenuItem
description: Overview of UxpMenuItem
---

# UxpMenuItem


## UxpMenuItem()
Class describing a single menu item of a panel



## id : `string`
**Read only**
Get menu item id



## label ⇒ `string`
Get menu item label, localized string

**Returns**: `string`  


## enabled ⇒ `boolean`
Get menu item enable state

**Returns**: `boolean`  


## checked ⇒ `boolean`
Get menu item checked state

**Returns**: `boolean`  


## submenu ⇒ `UxpMenuItems`
Get menu submenu

**Returns**: `UxpMenuItems`  


## parent ⇒ `UxpMenuItems`
Get menu parent.

**Returns**: `UxpMenuItems`  


## label
Set label of the menu item. The label will be updated immediately, asynchronously.


| Param | Type | Description |
| --- | --- | --- |
| label | `string` | should be a localized string |



## enabled
Set enabled state of the menu item. The state will be updated immediately, asynchronously.


| Param | Type |
| --- | --- |
| enabled | `boolean` | 



## checked
Set checked state of the menu item. The state will be updated immediately, asynchronously.


| Param | Type |
| --- | --- |
| checked | `boolean` | 



## remove()
Remove the menu item


  