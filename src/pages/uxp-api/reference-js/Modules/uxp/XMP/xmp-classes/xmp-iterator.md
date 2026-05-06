---
title: XMPIterator
description: "Since: v7.2.0"
---

# XMPIterator
**Since**: v7.2.0
Created by a call to [XMPMeta.iterator](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md#iteratoroptions-schemans-propname). Walks recursively through the properties and qualifiers of an [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md), and returns them as [XMPProperty object](../../../../modules/uxp/xmp/xmp-classes/xmp-iterator.md).

The object has no JavaScript properties.  


## next()
Retrieves the next item in the metadata.

**Returns**: `XMPProperty` \| `null`  


## skipSiblings()
Skips the subtree below and the siblings of the current node on the subsequent call to next().



## skipSubtree()
Skips the subtree below the current node on the subsequent call to next().


  