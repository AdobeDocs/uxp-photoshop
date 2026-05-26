---
title: XMPProperty
description: Since: v7.2.0
---

# XMPProperty
**Since**: v7.2.0  


## XMPProperty()
This object is returned by various property accessor functions of the [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md),
such as [xmpmetaobj.getProperty](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md#getpropertyschemans-propname-valuetype). The read-only properties describe a metadata property.



## locale : `string`
**Read only**
The language of the property value. This value is set by calls to getLocalizedText(),which assigns the language of the selected alternative text item,if an appropriate item is found.



## namespace : `string`
**Read only**
The namespace of the property; See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants).Typically used when browsing metadata with an [XMPIterator object](../../../../modules/uxp/xmp/xmp-classes/xmp-iterator.md).



## options : `number`
**Read only**
A constant that describes the property type, 0 for a simple property.\<br\>\</br\>XMPConst.PROP_IS_ARRAY - The property is an array (of type alt, bag, or seq).\<br\>\</br\>XMPConst.PROP_IS_STRUCT - The property is a structure with nested fields.\<br\>\</br\>



## path : `number`
**Read only**
The property path, including the property name.For a simple property, the entire path is the property name.



## value : `string` \| `number` \| `boolean` \| `XMPDateTime`
**Read only**
The value of the property, if any.Arrays and non-leaf levels of structures do not have values.



## toString()
To get the Property Value as String

**Returns**: `string` - The value of the property as a string.  

  