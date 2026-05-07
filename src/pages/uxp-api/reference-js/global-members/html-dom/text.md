---
title: window.Text
description: See: https://developer.mozilla.org/en-US/docs/Web/API/Text
---

# window.Text
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Text](https://developer.mozilla.org/en-US/docs/Web/API/Text)  


## Text(document, textContent)
Creates an instance of Text.


| Param | Type |
| --- | --- |
| document | `*` | 
| textContent | `*` | 



## nodeName : `string`
**Read only**
**Default**: `&quot;\&quot;#text\&quot;&quot;`  


## nodeType : `number`
**Read only**
**Default**: `Node.TEXT_NODE`  


## nodeValue : `string`


## data : `string`


## textContent : `string`


## length : `number`
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


## childNodes : `NodeList`
**Read only**


## children : `HTMLCollection`
**Read only**


## ownerDocument
**Read only**


## attributes
**Read only**


## substringData(offset, count)
**Returns**: `string`  

| Param | Type |
| --- | --- |
| offset | `*` | 
| count | `*` | 



## appendData(arg)

| Param | Type |
| --- | --- |
| arg | `string` | 



## insertData(offset, arg)

| Param | Type |
| --- | --- |
| offset | `number` | 
| arg | `string` | 



## deleteData(offset, count)

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 



## replaceData(offset, count, arg)

| Param | Type |
| --- | --- |
| offset | `number` | 
| count | `number` | 
| arg | `string` | 



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



## remove()


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


  