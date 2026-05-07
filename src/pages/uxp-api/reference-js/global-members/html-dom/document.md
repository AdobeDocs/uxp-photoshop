---
title: window.Document
description: See: Web APIs - Document
---

# window.Document
**See**: [Web APIs - Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)  


## Document()
Creates an instance of Document.



## onLine : `boolean`
**Read only**
Indicates if the computer is online



## nodeName : `string`
**Read only**


## nodeType : `number`
**Read only**


## uxpContainer : `UXPContainer`
**Read only**


## activeElement : `Node`
**Read only**


## documentElement : `Document`
**Read only**


## head : `HTMLHeadElement`
**Read only**


## body : `HTMLBodyElement`
**Read only**


## clipboard : `Clippoard`
**Read only**


## styleSheets : `StyleSheetList`
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


## createElement(name)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| name | `string` | 



## createElementNS(ns, name)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| ns | `string` | 
| name | `string` | 



## createEvent(eventType)
**See**: [dom-document-createevent](https://dom.spec.whatwg.org/#dom-document-createevent)  

| Param | Type |
| --- | --- |
| eventType | `string` | 



## createAttribute(nodeName)
**Returns**: `Attr`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute)  

| Param | Type |
| --- | --- |
| nodeName | `string` | 



## createTextNode([text&#x3D;])
**Returns**: `Text`  

| Param | Type |
| --- | --- |
| [text=] | `string` | 



## createComment([comment])
**Returns**: `Comment`  

| Param | Type | Default |
| --- | --- | --- |
| [comment] | `string` | `&quot;\&quot;\&quot;&quot;` | 



## createDocumentFragment()
**Returns**: `DocumentFragment`  


## createTreeWalker(root, whatToShow, filter)
[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

This represents the nodes of a document subtree and a position within them

**Returns**: `TreeWalker`  

| Param | Type | Description |
| --- | --- | --- |
| root | `Node` | A Node representing the root node as specified when the TreeWalker was created |
| whatToShow | `number` | An unsigned long being a bitmask made of constants describing the types of Node that must be presented |
| filter | `NodeFilter` | NodeFilter used to select the relevant nodes |



## cloneNode(deep)
**Returns**: `Document`  

| Param | Type |
| --- | --- |
| deep | `boolean` | 



## adoptNode(externalNode, deep)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| externalNode | `Node` | 
| deep | `boolean` | 



## importNode(externalNode, deep)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| externalNode | `Node` | 
| deep | `boolean` | 



## querySelector(selector)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| selector | `string` | 



## querySelectorAll(selector)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| selector | `string` | 



## getElementsByClassName(name)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| name | `string` | 



## getElementsByTagName(name)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| name | `string` | 



## getElementById(id)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| id | `string` | 



## hasChildNodes()
**Returns**: `boolean`  


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


  