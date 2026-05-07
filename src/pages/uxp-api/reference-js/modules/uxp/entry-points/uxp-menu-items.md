---
title: UxpMenuItems
description: Overview of UxpMenuItems
---

# UxpMenuItems


## UxpMenuItems()
Class describing the menu of a panel.



## size : `Number`
**Read only**
Get number of menu items



## getItem(id)
Get menu item with specified id

**Returns**: `UxpMenuItem`  

| Param | Type |
| --- | --- |
| id | `string` | 



## getItemAt(index)
Get menu item at specified index

**Returns**: `UxpMenuItem`  

| Param | Type |
| --- | --- |
| index | `Number` | 



## insertAt(index, newItem)
Inserts/replaces the menu item at the specified index with the new menu item.index < size of menuItems array : replaces the existing menu itemindex = size of menuItems array : Inserts menu item at endindex > size of menuItems array : throws invalid index exception


| Param | Type | Description |
| --- | --- | --- |
| index | `Number` |  |
| newItem | `Object` | see 'entrypoints.setup' api for menu item description. |



## removeAt(index)
Removes menu item from specified index.


| Param | Type |
| --- | --- |
| index | `Number` | 


  