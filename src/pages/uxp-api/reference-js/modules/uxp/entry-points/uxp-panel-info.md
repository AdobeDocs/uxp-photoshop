---
title: UxpPanelInfo
description: Overview of UxpPanelInfo
---

# UxpPanelInfo


## UxpPanelInfo()
Class describing a panel of the plugin.



## id : `string`
**Read only**
Get panel id



## label : `string`
**Read only**
Get panel label, localized string



## description : `string`
**Read only**
Get panel description, localized string



## shortcut ⇒ `Object`
**Read only**
Get panel shortcut

**Returns**: `Object` - which consists of following keys:                 \{string} shortcutKey                 \{boolean} commandKey                 \{boolean} altKey                 \{boolean} shiftKey                 \{boolean} ctrlKey  


## title : `string`
**Read only**
Get panel title, localized string



## icons ⇒ `Array`
**Read only**
Get panel icons

**Returns**: `Array` - each object contains following properties:                           \{string} path                           \{Array of Number} scale                           \{Array of string} theme                           \{Array of string} species  


## minimumSize ⇒ `Object`
**Read only**
Get panel minimum size

**Returns**: `Object` - each object contains following properties:                           \{Number} width                           \{Number} height  


## maximumSize ⇒ `Object`
**Read only**
Get panel maximum size

**Returns**: `Object` - each object contains following properties:                           \{Number} width                           \{Number} height  


## preferredDockedSize ⇒ `Object`
**Read only**
Get panel preferred docked size

**Returns**: `Object` - each object contains following properties:                           \{Number} width                           \{Number} height  


## preferredFloatingSize ⇒ `Object`
**Read only**
Get panel preferred floating size

**Returns**: `Object` - each object contains following properties:                           \{Number} width                           \{Number} height  


## menuItems : `UxpMenuItems`
**Read only**
Get panel menu items


  