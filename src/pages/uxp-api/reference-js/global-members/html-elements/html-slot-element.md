---
title: window.HTMLSlotElement
description: "See: Web APIs - HTMLSlotElement"
---

# window.HTMLSlotElement
**See**: [Web APIs - HTMLSlotElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement)  
**Since**: v7.0.0  


## name : `string`
A string used to get and set slot's name.

**See**: [HTMLSlotElement - name](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/name)  


## assignedNodes(options)
returns a sequence of the nodes assigned to this slot. If options object is used with flatten: "true",
If slottables is the empty list, then append each slottable child of slot, in tree order, to slottables.\<br\>\</br\>
Refer [find-flattened-slotables](https://dom.spec.whatwg.org/#find-flattened-slotables)

**Returns**: `Array` - An array of nodes  
**See**: [HTMLSlotElement - assignedNodes](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedNodes)  

| Param | Type | Description |
| --- | --- | --- |
| options | `Object` | An object that sets options for the nodes to be returned |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.flatten | `boolean` | A boolean value indicating whether to return the assigned nodes of any available child `slot` elements (true) or not (false). Defaults to false. |



## assignedElements(options)
returns a sequence of the elements assigned to this slot. If options object is used with flatten: "true",
If slottables is the empty list, then append each slottable child of slot, in tree order, to slottables.\<br\>\</br\>
Refer [find-flattened-slotables](https://dom.spec.whatwg.org/#find-flattened-slotables)

**Returns**: `Array` - An array of elements  
**See**: [HTMLSlotElement - assignedElements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements)  

| Param | Type | Description |
| --- | --- | --- |
| options | `Object` | An object that sets options for the elements to be returned |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.flatten | `boolean` | A boolean value indicating whether to return the assigned elements of any available child `<slot>` elements (true) or not (false). Defaults to false |


  