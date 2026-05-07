---
title: window.Attr
description: See: https://developer.mozilla.org/en-US/docs/Web/API/Attr
---

# window.Attr
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Attr](https://developer.mozilla.org/en-US/docs/Web/API/Attr)  


## Attr(document, nodeName)
Creates an instance of Attr.


| Param | Type |
| --- | --- |
| document | `Document` | 
| nodeName | `string` | 



## nodeName : `string`
**Read only**


## localName : `string`
**Read only**


## name : `string`
**Read only**


## specified : `boolean`
**Read only**


## value : `*`


## nodeType : `number`
**Read only**


## nodeValue : `*`


## ownerElement : `Element`
**Read only**


## contentEditable
**Read only**


## isConnected : `boolean`
**Read only**


## parentNode : `Node`
**Read only**


## parentElement : `Element`
**Read only**


## firstChild : `Node`
**Read only**


## lastChild : `Node`
**Read only**


## previousSibling : `Node`
**Read only**


## nextSibling : `Node`
**Read only**


## firstElementChild : `Node`
**Read only**


## lastElementChild : `Node`
**Read only**


## previousElementSibling : `Node`
**Read only**


## nextElementSibling : `Node`
**Read only**


## textContent : `string`


## childNodes : `NodeList`
**Read only**


## children : `HTMLCollection`
**Read only**


## ownerDocument
**Read only**


## attributes
**Read only**


## remove()


## hasChildNodes()
**Returns**: `boolean`  


## cloneNode(deep)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| deep | `boolean` | 



## appendChild(child)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 



## insertBefore(child, before)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 
| before | `Node` | 



## replaceChild(newChild, oldChild)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| newChild | `Node` | 
| oldChild | `Node` | 



## removeChild(child)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 



## before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



## after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



## replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



## contains(node)

| Param | Type |
| --- | --- |
| node | `Node` | 



## getRootNode(options)
**Returns**: `Node` - root node  

| Param | Type |
| --- | --- |
| options | `Object` | 



## addEventListener(eventName, callback, options)
**See**: [EventTarget - addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | `*` |  |
| callback | `*` |  |
| options | `boolean` \| `Object` | Boolean value denoting capture value or options object. Currently supports only capture in options object (\{ capture: bool_value }). |



## removeEventListener(eventName, callback, options)
**See**: [EventTarget - removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | `*` |  |
| callback | `*` |  |
| options | `boolean` \| `Object` | Boolean value denoting capture value or options object. Currently supports only capture in options object (\{ capture: bool_value }). |



## dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `*` | 


  