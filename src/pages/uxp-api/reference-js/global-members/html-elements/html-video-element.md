---
title: window.HTMLVideoElement
description: Properties
---

# window.HTMLVideoElement
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| preload | `string` |  | Determines how much the media data be loaded when the plugin loads.      This can be one of the followings. Default is "metadata".      \<ul\>          \<li\>'none': Video should not be loaded\</li\>          \<li\>'metadata': Only video metadata is fetched\</li\>          \<li\>'auto': The whole video file can be downloaded\</li\>          \<li\>''(empty string): Synonym of the 'auto' value\</li\>      \</ul\>      example: \<br\>\</br\>`<video src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata"></video>` |
| autoplay | `boolean` | `false` | Video automatically begins to play back as soon as loading the data.      example: \<br\>\</br\>`<video src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" autoplay></video>` |



## src : `string`
URL of a media resource.



## currentTime : `number`
Current playback time in seconds.
The seeked event is fired since v7.3.0

**Emits**: `event:seeked`  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.play();
vid.currentTime = 10;
vid.addEventListener("seeked", (ev) => {
    console.log("Event - seeked");
});
</script>
```


## duration : `number`
Length of the media in seconds.

**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.addEventListener("loadeddata", (ev) => {
    vid.currentTime = vid.duration; //seek to the end of the video
});
</script>
```


## muted : `boolean`
Whether the media element is muted.



## volume : `number`
The volume at which the media will be played.
Values must fall between 0 and 1, where 0 is effectively muted and 1 is the loudest possible value.



## volume
Set the volume.
Values must fall between 0 and 1, where 0 is effectively muted and 1 is the loudest possible value.

**Emits**: `event:volumechange`  

| Param | Type | Description |
| --- | --- | --- |
| newValue | `number` | new volume |



## played : `TimeRanges`
Range of the media source.

**See:**: [https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges](https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges)  


## paused : `boolean`
Whether the media element is paused.



## ended : `boolean`
Whether the media element has ended playback.



## error : `MediaError`
MediaError for the most recent error, or null if there has not been an error.

**See:**: [https://developer.mozilla.org/en-US/docs/Web/API/MediaError](https://developer.mozilla.org/en-US/docs/Web/API/MediaError)  


## loop : `boolean`
Whether the media element should start over when it reaches the end.



## audioTracks : `AudioTrackList`
AudioTrackList object listing all of the AudioTrack objects representing the media's audio tracks.

**See:**: [https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList](https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList)  


## videoTracks : `VideoTrackList`
VideoTrackList object listing all of the VideoTrack objects representing the media's video tracks.

**See:**: [https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList](https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList)  


## textTracks : `TextTrackList`
TextTrackList object listing all of the TextTrack objects representing the media's text tracks

**See:**: [https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList](https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList)  


## videoWidth : `number`
**Read only**
Width of the video in pixel.

**Since**: v7.4.0  


## videoHeight : `number`
**Read only**
Height of the video in pixel.

**Since**: v7.4.0  


## playbackRate : `number`
The rate at which the media is being played back.
1.0 is normal speed, values lower than 1.0 make the media play slower than normal,
higher values make it play faster. Default is 1.0.



## playbackRate
Set the rate at which the media is being played back.

**Emits**: `event:ratechange`  

| Param | Type | Description |
| --- | --- | --- |
| newValue | `number` | playback rate |



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


## canPlayType(mimeType)
How likely it is that UXP's media player will be able to play media of a given MIME type.

**Returns**: `string` - How likely it is that the media can be played. One of the followings.
     \<ul\>
         \<li\>''(empty string): Media cannot be played on the current device.\</li\>
         \<li\>'probably': Media is probably playable on the current device.\</li\>
         \<li\>'maybe': There is not enough information to determine whether the media can play.\</li\>
     \</ul\>  

| Param | Type | Description |
| --- | --- | --- |
| mimeType | `string` | MIME type of the media. |



## load()
Resets the media to its initial state and begins the process of selecting a media source
and loading the media in preparation for playback.
The amount of media data that is prefetched is determined by the value of 'preload' attribute.

**Emits**: `event:loadedmetadata`, `event:loadeddata`, `event:uxpvideoload - Deprecated: Use loadeddata instead`  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="none">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.load();
vid.addEventListener("loadedmetadata", (ev) => {
    console.log("Event - loadedmetadata");
});
vid.addEventListener("loadeddata", (ev) => {
    console.log("Event - loadeddata");
});
</script>
```


## play()
Attempts to begin playback of the media.
\<br\>\</br\>Note that it returns a resolved Promise regardless of the actual result.
It notifies an error over the error event.

**Returns**: `Promise<void>` Resolved when playback has been started, or rejected if playback cannot be started.  
**Emits**: `event:play`, `event:uxpvideoplay - Deprecated: Use play instead`, `event:ended`, `event:uxpvideocomplete - Deprecated: Use ended instead`  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.play();
vid.addEventListener("play", (ev) => {
    console.log("Event - play");
});
</script>
```


## pause()
Pause the playback of the media. If the media is already in a paused state, no effect.

**Emits**: `event:pause`, `event:uxpvideopause - Deprecated: Use pause instead`  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.play();
vid.pause();
vid.addEventListener("pause", (ev) => {
    console.log("Event - pause");
});
</script>
```


## fastSeek()
Seeks the media to the new time quickly with precision tradeoff.

**Emits**: `event:seeked`  
**See**: [fastSeek](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/fastSeek)  
**Since**: v7.4.0  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.play();
vid.fastSeek(10);
vid.addEventListener("seeked", (ev) => {
    console.log("Event - seeked");
});
</script>
```


## stop()
Pause the playback of the media and set the current playback time to the beginning.

**Emits**: `event:uxpvideostop`, `event:seeked`  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.play();
vid.stop();
vid.addEventListener("uxpvideostop", (ev) => {
    console.log("Event - uxpvideostop");
});
vid.addEventListener("seeked", (ev) => {
    console.log("Event - seeked");
});
</script>
```


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


  