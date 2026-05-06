---
title: window.ShadowRoot
description: [ This feature is behind a feature flag. You must turn on enableSWCSupport in the featureFlags section of plugin manifest to use the same ]
---

# window.ShadowRoot
[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

**See**: [Web APIs - ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot)  
**Since**: v7.0.0  


## mode : `Element`
**Read only**
Returns the mode of the ShadowRoot — either open or closed. This defines whether or not the shadow root's internal features are accessible from JavaScript.

**See**: [ShadowRoot - mode](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode)  


## host : `Element`
**Read only**
Returns a reference to the DOM element the ShadowRoot is attached to.

**See**: [ShadowRoot - host](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host)  


## innerHTML : `string`
Returns a reference to the DOM tree inside the ShadowRoot

**See**: [ShadowRoot - innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML)  


## activeElement : `Element`
**Read only**
Returns the element within the shadow tree that has focus

**See**: [ShadowRoot - activeElement](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/activeElement)  


## cloneNode(deep)
Duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not

**See**: [ShadowRoot - cloneNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)  

| Param | Type | Description |
| --- | --- | --- |
| deep | `boolean` | Optional param to clone whole sub tree(True) or only node (False) |


  