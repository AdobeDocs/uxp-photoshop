---
title: window.HTMLLinkElement
description: See: https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement
---

# window.HTMLLinkElement
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement)  


## dataset
Access to all the custom data attributes (data-*) set.

**See**: [HTMLElement - dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)  


## innerText : `string`


## lang : `string`
Base language of an element's attribute values and text content.

**See**: [HTMLElement - lang](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang)  


## dir : `string`
The text writing directionality of the content of the current element limited to only known values.

**See**: [HTMLElement - dir](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dir)  
**Since**: v7.1  


## hidden : `boolean` \| `string`
Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.

**See**: [HTMLElement - hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden), [Spec - `hidden` attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute)  


## nodeName : `string`
**Read only**


## localName : `string`
**Read only**
A string representing the local part of the qualified name of the element

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/localName](https://developer.mozilla.org/en-US/docs/Web/API/Element/localName)  


## tagName : `string`
**Read only**
A string indicating the element's tag name

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)  


## nodeType : `number`
**Read only**


## namespaceURI : `string`
**Read only**
Returns the namespace URI of the element, or null if the element is not in a namespace.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI)  


## id : `string`
Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)  


## tabIndex : `number`


## className : `string`


## attributes : `NamedNodeMap`
**Read only**


## style : `Style`
**Read only**


## clientLeft : `number`
**Read only**


## clientTop : `number`
**Read only**


## clientWidth : `number`
**Read only**


## clientHeight : `number`
**Read only**


## offsetParent : `Element`
**Read only**


## offsetLeft : `number`
**Read only**


## offsetTop : `number`
**Read only**


## offsetWidth : `number`
**Read only**


## offsetHeight : `number`
**Read only**


## scrollLeft : `number`


## scrollTop : `number`


## scrollWidth : `number`
**Read only**


## scrollHeight : `number`
**Read only**


## autofocus : `boolean`
Indicates if the element will focus automatically when it is loaded



## uxpContainer : `number`
**Read only**


## shadowRoot : `ShadowRoot`
**Read only**
[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.

**See**: [Element - shadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot)  


## disabled : `boolean`


## innerHTML
**Read only**


## outerHTML : `string`


## slot : `string`
[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

**See**: [Element - slot](https://developer.mozilla.org/en-US/docs/Web/API/Element/slot)  


## assignedSlot : `HTMLSlotElement`
**Read only**
[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

**See**: [Element - assignedSlot](https://developer.mozilla.org/en-US/docs/Web/API/Element/assignedSlot)  


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


## append(...nodes)
Inserts a set of Node objects or string objects after the last child of the Element.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/append](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)  
**Since**: v8.0  

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



## prepend(...nodes)
Inserts a set of Node objects or string objects before the first child of the Element.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend)  
**Since**: v8.0  

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



## replaceChildren(...nodes)
Replaces the existing children of a Node with a specified new set of children. These can be string or Node objects.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)  
**Since**: v8.0  

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



## scrollTo(xOrOptions, y)
Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)  

| Param | Type | Description |
| --- | --- | --- |
| xOrOptions | `*` | either the new scrollLeft position or an options object. |
| y | `*` | the optional new scrollTop position. |



## scrollIntoView(alignToTop)

| Param | Type |
| --- | --- |
| alignToTop | `boolean` | 



## scrollIntoViewIfNeeded()


## attachShadow(init)
[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.

**Returns**: `ShadowRoot`  
**See**: [Element - attachShadow](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow)  

| Param | Description |
| --- | --- |
| init | An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment |



## focus()


## blur()


## getAttribute(name)
**Returns**: `string`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the attribute whose value you want to get. |



## setAttribute(name, value)
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the attribute whose value is to be set |
| value | `string` | Value to assign to the attribute |



## removeAttribute(name)
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute)  

| Param | Type |
| --- | --- |
| name | `string` | 



## hasAttribute(name)
**Returns**: `boolean`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute)  

| Param | Type |
| --- | --- |
| name | `string` | 



## hasAttributes()
Returns a boolean value indicating whether the current element has any attributes or not.

**Returns**: `boolean`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes)  


## getAttributeNames()
Returns the attribute names of the element as an Array of strings

**Returns**: `Array`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames)  


## getAttributeNode(name)
**Returns**: `*`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNode](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNode)  

| Param | Type |
| --- | --- |
| name | `string` | 



## setAttributeNode(newAttr)
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNode](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNode)  

| Param | Type |
| --- | --- |
| newAttr | `*` | 



## removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `*` | 



## click()


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



## querySelector(selector)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| selector | `string` | 



## querySelectorAll(selector)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| selector | `string` | 



## setPointerCapture(pointerId)
Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.

**Throws**:

- `DOMException` If the element is not connected to the DOM.

**See**: [Element - setPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)  
**Since**: v7.1  

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | The unique identifier of the pointer to be captured. |

**Example**  
```js
// HTML
<style>
    div {
        width: 140px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fbe;
        position: absolute;
    }
</style>
<div id="slider">SLIDE ME</div>

// JS
function beginSliding(e) {
     slider.setPointerCapture(e.pointerId);
     slider.addEventListener("pointermove", slide);
 }

 function stopSliding(e) {
     slider.releasePointerCapture(e.pointerId);
     slider.removeEventListener("pointermove", slide);
 }

 function slide(e) {
     slider.style.left = e.clientX;
 }

 const slider = document.getElementById("slider");

 slider.addEventListener("pointerdown", beginSliding);
 slider.addEventListener("pointerup", stopSliding);
```


## releasePointerCapture(pointerId)
Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.

**See**: [Element - releasePointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/releasePointerCapture)  
**Since**: v7.1  

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | The unique identifier of the pointer to be released. |



## hasPointerCapture(pointerId)
Checks if the element has pointer capture for the specified pointer.

**Returns**: `boolean` - True if the element has pointer capture for the specified pointer, false otherwise.  
**See**: [Element - hasPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasPointerCapture)  
**Since**: v7.1  

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | The unique identifier of the pointer to check. |



## getBoundingClientRect()
**Returns**: `*`  


## closest(selectorString)
**Returns**: `Element`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)  

| Param | Type |
| --- | --- |
| selectorString | `string` | 



## matches(selectorString)
**Returns**: `boolean`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)  

| Param | Type |
| --- | --- |
| selectorString | `string` | 



## insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 



## insertAdjacentElement(position, node)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 



## insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 



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


  