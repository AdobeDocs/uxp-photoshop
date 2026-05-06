---
title: "require('uxp').xmp.XMPMeta"
description: XMPMeta
---

# require('uxp').xmp.XMPMeta
XMPMeta
This class provides the core services of the XMP Toolkit. The functions provide the ability to create
and query metadata properties from an XMP namespace. The class also provides static functions
that allow you to create and query namespaces and aliases.

There is one static property on the class that provides XMP version information; there are no
JavaScript properties in the instance. The object encapsulates a set of metadata properties, which
you access through the object functions.

The generic functions [getProperty()](#getpropertyschemans-propname-valuetype), [setProperty()](#setpropertyschemans-propname-propvalue-setoptions-valuetype),
and [deleteProperty()](#deletepropertyschemans-propname) allow you to manipulate alltypes of properties, when used with appropriately composed path expressions.
For convenience, the object also provides more specific functions for use with specific types of properties, such as arrays.

**Since**: v7.2.0  


## XMPMeta(packet, buffer)
To create an XMPMeta object, use the new operator. The constructor accepts an RDF/XML
serialized metadata packet as a string, or as an array of numbers that contain only byte values.
It returns the new object. If no argument is supplied, the new object is empty; you can use the
object’s functions to add namespaces and properties.


| Param | Type | Description |
| --- | --- | --- |
| packet | `string` | A String containing an XML file or an XMP packet. |
| buffer | `string` | An Array of Number. The UTF-8 or UTF-16 encoded bytes of an XML file or an XMP packet. This array is the result of XMPMeta.:ref:xmpmeta-serializeToArray. |

**Example**  
```js
// Create an XMPMeta object using property based APIs

let { XMPMeta, XMPConst } = require("uxp").xmp;
let meta = new XMPMeta();
meta.setProperty(XMPConst.NS_XMP, "Name", "vkumarg");
let prop = meta.getProperty(XMPConst.NS_XMP, "Name");
console.log(prop.namespace);
console.log(prop.options);
console.log(prop.path);
// checking for the property existence and deleting it
if(meta.doesPropertyExist(XMPConst.NS_XMP, "Name")) {
     meta.deleteProperty(XMPConst.NS_XMP, "Name");
}

if(!meta.doesPropertyExist(XMPConst.NS_XMP, "Name")) {
     console.log("Property doesn't exist");
} else {
     console.log("Property exists");
}
```
**Example**  
```js
// Create an XMPMeta object using struct based APIs

let { XMPDateTime, XMPMeta, XMPConst } = require("uxp").xmp;
let meta = new XMPMeta();

let jsDate = new Date("2007-04-10T17:54:50+01:00");
let xmpDate = new XMPDateTime(jsDate);
meta.setProperty(XMPConst.NS_XMP, "CreateDate", xmpDate, XMPConst.XMPDATE);
meta.doesPropertyExist(XMPConst.NS_XMP, "CreateDate");
let prop = meta.getProperty(XMPConst.NS_XMP, "CreateDate", XMPConst.XMPDATE);
meta.deleteProperty(XMPConst.NS_XMP, "CreateDate");

meta.setStructField(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName", "sampleFieldValue");
if (meta.doesStructFieldExist(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName")) {
     prop = meta.getStructField(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName");
     meta.deleteStructField(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName");
     if (meta.doesStructFieldExist(XMPConst.NS_XML, "structNameSample", XMPConst.NS_XMP, "sampleFieldName")) {
        console.log("Struct field exists");
    } else {
       console.log("Struct field doesn't exist");
   }
} else {
 console.log("Struct field doesn't exist");
}
```


## appendArrayItem(schemaNS, arrayName, itemValue, [itemOptions], [arrayOptions])
Appends an item to an existing array, or creates a new array-type property if the named array does not exist.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` |  | The array-type property name string. Can be a general path expression. |
| itemValue | `string` |  | The new item value string. Pass null for array items that do not have values. |
| [itemOptions] | `number` | `0` | A flag that describes the new item, if it is being created. One of:\<br\>\</br\> - 0: A simple item, or the type implied by the arrayOptions value.\<br\>\</br\> - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).\<br\>\</br\> - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.\<br\>\</br\> |
| [arrayOptions] | `number` | `0` | A flag that describes the array form.  Must be provided if the array is being created; ignored if the array already exists. One of:\<br\>\</br\> - XMPConst.ARRAY_IS_ORDERED: Item order is significant. Implies XMPConst.PROP_IS_Array\<br\>\</br\> - XMPConst.ARRAY_IS_ALTERNATIVE: Items are mutually exclusive alternates. Implies XMPConst.PROP_IS_ARRAY and XMPConst.ARRAY_IS_ORDERED`\<br\>\</br\> |

**Example**  
```js
XMPMetaObj.appendArrayItem(schemaNS, arrayName, itemValue[, itemOptions, arrayOptions])
```


## countArrayItems(schemaNS, arrayName)
Reports the number of items in an array-type metadata property.

**Returns**: `number` - the number of items  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` | The array-type property name string. Can be a general path expression. |

**Example**  
```js
XMPMetaObj.countArrayItems(schemaNS, arrayName)
```


## deleteArrayItem(schemaNS, arrayName, itemIndex)
Deletes the metadata tree that has the given array item as its root.


| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` | The array-type property name string. Can be a general path expression. |
| itemIndex | `number` | The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. |

**Example**  
```js
XMPMetaObj.deleteArrayItem(schemaNS, arrayName, itemIndex)
```


## deleteProperty(schemaNS, propName)
Deletes the metadata tree that has the given property as its root. If the property does not exist, does nothing.


| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| propName | `string` | The property name string. Can be a general path expression. |

**Example**  
```js
XMPMetaObj.deleteProperty(schemaNS, propName)
```


## deleteStructField(schemaNS, structName, fieldNS, fieldName)
Deletes the metadata tree that has the given structure field as its root.


| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| structName | `string` | The structure name string. Can be a general path expression. |
| fieldNS | `string` | The field type namespace string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| fieldName | `string` | The field name string. Must be a simple XML name. |

**Example**  
```js
XMPMetaObj.deleteStructField(schemaNS, structName, fieldNS, fieldName)
```


## deleteQualifier(schemaNS, structName, qualNS, qualName)
Deletes the metadata tree that has the given qualifier as its root. If the qualifier does not exist, does nothing.


| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| structName | `string` | The structure name string. Can be a general path expression. |
| qualNS | `string` | The URI string of the qualifier namespace. |
| qualName | `string` | The qualifier name string. Must be a simple XML name. |

**Example**  
```js
XMPMetaObj.deleteQualifier(schemaNS, structName, qualNS, qualName)
```


## doesArrayItemExist(schemaNS, arrayName, itemIndex)
Reports whether an array item with a given index currently exists in an existing array in the metadata.

**Returns**: `boolean` - true if the array and item exist.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` | The array name string. Can be a general path expression. |
| itemIndex | `number` | The 1-based position index of the item. |

**Example**  
```js
XMPMetaObj.doesArrayItemExist(schemaNS, arrayName, itemIndex)
```


## doesPropertyExist(schemaNS, propName)
Reports whether a property with a given name currently exists in the metadata.

**Returns**: `boolean` - true if the property exists.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| propName | `string` | The property name string. Can be a general path expression. |

**Example**  
```js
XMPMetaObj.doesPropertyExist(schemaNS, propName)
```


## doesStructFieldExist(schemaNS, structName, fieldNS, fieldName)
Reports whether a structure field with a given name currently exists in the metadata.

**Returns**: `boolean` - true if the structure and field exist.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| structName | `string` | The structure name string. Can be a general path expression. |
| fieldNS | `string` | The field type namespace string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| fieldName | `string` | The field name string. Must be a simple XML name. |

**Example**  
```js
XMPMetaObj.doesStructFieldExist(schemaNS, structName, fieldNS, fieldName)
```


## doesQualifierExist(schemaNS, structName, qualNS, qualName)
Reports whether a qualifier with a given name currently exists for a given property.

**Returns**: `boolean` - true if the property and qualifier exist.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| structName | `string` | The structure name string. Can be a general path expression. |
| qualNS | `string` | The URI string of the qualifier namespace. |
| qualName | `string` | The qualifier name string. Must be a simple XML name. |

**Example**  
```js
XMPMetaObj.doesQualifierExist(schemaNS, structName, qualNS, qualName)
```


## dumpObject()
Creates and returns a string containing the metadata content of this object as RDF.

**Returns**: `string` - a string containing the metadata content of this object as RDF.  
**Example**  
```js
XMPMetaObj.dumpObject()
```


## getArrayItem(schemaNS, arrayName, itemIndex)
Retrieves an item from an array-type metadata property.
Returns an [XMPProperty object](../../../../modules/uxp/xmp/xmp-classes/xmp-property.md).

**Returns**: `XMPProperty` \| `undefined` - the contents of the file.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` | The array name string. Can be a general path expression. |
| itemIndex | `number` | The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. |

**Example**  
```js
XMPMetaObj.getArrayItem(schemaNS, arrayName, itemIndex)
```


## getLocalizedText(schemaNS, altTextName, genericLang, specificLang)
Retrieves the text value for a specific language from an alternate-text array. First tries to match the specific language.
If not found, tries to match the generic language, if specified. If not found, gets the x-default item, if any. Otherwise, gets the first item.

**Returns**: `string` \| `undefined` - the text value for a specific language from an alternate-text array.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| altTextName | `string` | The alternate-text array name string. Can be a general path expression. |
| genericLang | `string` | The name of the generic language as an RFC 3066 primary subtag. Can be null or the empty string. |
| specificLang | `string` | The name of the specific language as an RFC 3066 primary subtag; for example, en-US. Must be specified. |

**Example**  
```js
XMPMetaObj.getLocalizedText(schemaNS, altTextName, genericLang, specificLang)
```


## getProperty(schemaNS, propName, [valueType])
Retrieves the value and options of a metadata property. Use for top-level, simple properties, or after using the path-composition functions in the [XMPUtils object](../../../../modules/uxp/xmp/xmp-classes/xmp-utils.md).
Returns an [XMPProperty object](../../../../modules/uxp/xmp/xmp-classes/xmp-property.md).

**Returns**: `XMPProperty` \| `undefined` - the value and options of a metadata property  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| propName | `string` |  | The property name string. Can be a general path expression. |
| [valueType] | `string` | `&quot;\&quot;\&quot;&quot;` | The property data type, one of: - XMPConst.STRING - XMPConst.INTEGER - XMPConst.NUMBER - XMPConst.BOOLEAN - XMPConst.XMPDATE |

**Example**  
```js
XMPMetaObj.getProperty(schemaNS, propName[, valueType])
```


## getStructField(schemaNS, structName, fieldNS, fieldName)
Retrieves a field value from within a nested structure in metadata.
Returns an [XMPProperty object](../../../../modules/uxp/xmp/xmp-classes/xmp-property.md).

**Returns**: `XMPProperty` \| `undefined` - the field value from within a nested structure in metadata.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| structName | `string` | The structure name string. Can be a general path expression. |
| fieldNS | `string` | The field type namespace string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| fieldName | `string` | The field name string. Must be a simple XML name. |

**Example**  
```js
XMPMetaObj.getStructField(schemaNS, structName, fieldNS, fieldName)
```


## getQualifier(schemaNS, structName, qualNS, qualName)
Retrieves a qualifier attached to a metadata property.
Returns an [XMPProperty object](../../../../modules/uxp/xmp/xmp-classes/xmp-property.md).

**Returns**: `XMPProperty` \| `undefined` - the qualifier attached to a metadata property  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| structName | `string` | The structure name string. Can be a general path expression. |
| qualNS | `string` | The URI string of the qualifier namespace. |
| qualName | `string` | The qualifier name string. Must be a simple XML name. |

**Example**  
```js
XMPMetaObj.getQualifier(schemaNS, structName, qualNS, qualName)
```


## insertArrayItem(schemaNS, arrayName, itemIndex, itemValue, [itemOptions])
Inserts an item into an array, before an existing item. The index positions of all later items are incremented. The array must exist.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` |  | The array-type property name string. Can be a general path expression. |
| itemIndex | `number` |  | The 1-based position index at which to insert the new item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. |
| itemValue | `string` |  | The new item value. Pass null for array items that do not have values. |
| [itemOptions] | `number` | `0` | A flag that describes the new item, if it is being created. One of:\<br\>\</br\> - 0: A simple item, the default.\<br\>\</br\> - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).\<br\>\</br\> - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.\<br\>\</br\> |

**Example**  
```js
XMPMetaObj.insertArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])
```


## iterator(options, schemaNS, propName)
Creates an iteration object that can iterate over the properties, arrays, and qualifiers within this metadata.
Specify options, a namespace, and a property to limit the range and granularity of the resulting items.
Returns an [XMPIterator object](../../../../modules/uxp/xmp/xmp-classes/xmp-iterator.md).

**Returns**: `XMPIterator` - the XMPIterator object for this metadata object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `number` | `0` | The set of options that control how the iteration is performed, and how values are returned. A logical OR of these bit-flag constants:\<br\>\</br\> XMPConst.ITERATOR_JUST_CHILDREN - Limit iteration to immediate children of the root property. By default, iterates into subtrees.\<br\>\</br\> XMPConst.ITERATOR_JUST_LEAFNODES - Limit iteration to leaf nodes. By default, iterates into all nodes of a subtree.\<br\>\</br\> XMPConst.ITERATOR_JUST_LEAFNAMES - Return only the leaf part of the path. By default, returns a full path.\<br\>\</br\> XMPConst.ITERATOR_INCLUDE_ALIASES - Include aliases. By default, considers only actual properties.\<br\>\</br\> XMPConst.ITERATOR_OMIT_QUALIFIERS - Omit qualifiers from iteration.\<br\>\</br\> |
| schemaNS | `string` |  | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| propName | `string` |  | The array-type property name string. Can be a general path expression. |

**Example**  
```js
XMPMetaObj.iterator(options, schemaNS, propName)
```


## serialize([options], [padding], [indent], [newline], [baseIndent])
Serializes this XMP metadata into a string as RDF.

**Returns**: `string` - the serialized XMP metadata as a RDF string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | `number` | `0` | The set of options that control how the serialization is performed. The options must be logically consistent; if they conflict, the function throws an exception. A logical OR of these bit-flag constants:\<br\>\</br\> XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER - Do not include an XML packet wrapper.\<br\>\</br\> XMPConst.SERIALIZE_READ_ONLY_PACKET - Create a read-only XML packet wrapper.\<br\>\</br\> XMPConst.SERIALIZE_USE_COMPACT_FORMAT - Use a highly compact RDF syntax and layout.\<br\>\</br\> XMPConst.SERIALIZE_USE_PLAIN_XMP - Serialize a plain XMP (not currently supported).\<br\>\</br\> XMPConst.SERIALIZE_INCLUDE_THUMBNAIL_PAD - Include typical space for a JPEG thumbnail in the padding if no xmp:Thumbnail property is present.\<br\>\</br\> XMPConst.SERIALIZE_EXACT_PACKET_LENGTH - Compute padding to meet the overall packet length provided by the padding parameter. Throws an exception if the unpadded packet exceeds this length.\<br\>\</br\> XMPConst.SERIALIZE_WRITE_ALIAS_COMMENTS - Include XML comments for aliases.\<br\>\</br\> |
| [padding] | `number` | `0` | If the options value is SERIALIZE_EXACT_PACKET_LENGTH, this the exact length of the packet, including padding characters that are added to meet this length. If the options value is not SERIALIZE_EXACT_PACKET_LENGTH, this is a number of padding characters to add.Default is 0, meaning to use the appropriate amount of padding. |
| [indent] | `string` | `&quot;\&quot;  \&quot;&quot;` | The string to use as an indent. Default is two spaces. |
| [newline] | `string` | `&quot;\&quot;U+000A\&quot;&quot;` | The newline character to use. |
| [baseIndent] | `number` | `0` | The level of indentation of the outermost XML element. |

**Example**  
```js
XMPMetaObj.serialize([options, padding, indent, newline, baseIndent])
```


## serializeToArray([options], [padding], [indent], [newline], [baseIndent])
Serializes this XMP metadata into a string as RDF, then converts that to an array of one-byte numeric values, the UTF-8 or UTF-16 encoded characters.

**Returns**: `Array` - the Array of Numbers.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | `number` | `0` | The set of options that control how the serialization is performed. The options must be logically consistent; if they conflict, the function throws an exception. A logical OR of these bit-flag constants:\<br\>\</br\> XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER - Do not include an XML packet wrapper.\<br\>\</br\> XMPConst.SERIALIZE_READ_ONLY_PACKET - Create a read-only XML packet wrapper.\<br\>\</br\> XMPConst.SERIALIZE_USE_COMPACT_FORMAT - Use a highly compact RDF syntax and layout.\<br\>\</br\> XMPConst.SERIALIZE_USE_PLAIN_XMP - Serialize a plain XMP (not currently supported).\<br\>\</br\> XMPConst.SERIALIZE_INCLUDE_THUMBNAIL_PAD - Include typical space for a JPEG thumbnail in the padding if no xmp:Thumbnail property is present.\<br\>\</br\> XMPConst.SERIALIZE_EXACT_PACKET_LENGTH - Compute padding to meet the overall packet length provided by the padding parameter. Throws an exception if the unpadded packet exceeds this length.\<br\>\</br\> XMPConst.SERIALIZE_WRITE_ALIAS_COMMENTS - Include XML comments for aliases.\<br\>\</br\> |
| [padding] | `number` | `0` | If the options value is SERIALIZE_EXACT_PACKET_LENGTH, this the exact length of the packet, including padding characters that are added to meet this length. If the options value is not SERIALIZE_EXACT_PACKET_LENGTH, this is a number of padding characters to add. Default is 0, meaning to use the appropriate amount of padding. |
| [indent] | `string` | `&quot;\&quot;  \&quot;&quot;` | The string to use as an indent. Default is two spaces. |
| [newline] | `string` | `&quot;\&quot;U+000A\&quot;&quot;` | The newline character to use. |
| [baseIndent] | `number` | `0` | The level of indentation of the outermost XML element. |

**Example**  
```js
XMPMetaObj.serializeToArray([options, padding, indent, newline, baseIndent])
```


## setArrayItem(schemaNS, arrayName, itemIndex, itemValue, [itemOptions])
Replaces an item within an array, or appends an item. The array must exist. To create an item, appendArrayItem() and insertArrayItem() are preferred.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` |  | The array-type property name string. Can be a general path expression. |
| itemIndex | `number` |  | The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. |
| itemValue | `string` |  | The new item value string. Pass null for array items that do not have values. |
| [itemOptions] | `number` | `0` | A flag that describes the new item, if it is being created. One of:\<br\>\</br\> - 0: A simple item, or the type implied by the arrayOptions value.\<br\>\</br\> - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).\<br\>\</br\> - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.\<br\>\</br\> |

**Example**  
```js
XMPMetaObj.setArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])
```


## setLocalizedText(schemaNS, altTextName, genericLang, specificLang, itemValueThe)
Sets the text value for a specific language in an alternate-text array. Handles special cases for the x-default item.


| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| altTextName | `string` | The name string of the alternate-text array. Can be a general path expression. |
| genericLang | `string` | The name of the generic language as an RFC 3066 primary subtag. Can be null or the empty string. |
| specificLang | `string` | The name of the specific language as an RFC 3066 primary subtag; for example, en-US. Must be specified. |
| itemValueThe | `string` | new string value. |

**Example**  
```js
XMPMetaObj.setLocalizedText(schemaNS, altTextName, genericLang, specificLang, itemValue, setOptions)
```


## setStructField(schemaNS, structName, fieldNS, fieldName, fieldValue, [options])
Sets the value of a field within a structure-type property, or creates a new field if the named field does not exist in the structure,
or creates a new structure containing the named field if the named structure does not exist.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| structName | `string` |  | The name string of an existing structure. Can be a general path expression. |
| fieldNS | `string` |  | The field type namespace string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| fieldName | `string` |  | The field name string. Must be a simple XML name. |
| fieldValue | `string` |  | he new field value string. Pass null for fields that do not have values. |
| [options] | `number` | `0` | option flags that describe a new structure. Used only if the structure is being created. One of:\<br\>\</br\> - 0: A simple item, the default.\<br\>\</br\> - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).\<br\>\</br\> - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.\<br\>\</br\> |

**Example**  
```js
XMPMetaObj.setStructField(schemaNS, structName, fieldNS, fieldName, fieldValue[, options])
```


## setQualifier(schemaNS, propName, qualNS, qualName, qualValue, [options])
Attaches a new qualifier to a metadata property. A qualifier can be added to a simple property, an array item, a struct field, or another qualifier.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| propName | `string` |  | The name string of an existing property. Can be a general path expression. |
| qualNS | `string` |  | The URI of the qualifier namespace. Has the same URI and prefix usage as a schema namespace. |
| qualName | `string` |  | The name of the qualifier. Must be a simple XML name. Has the same prefix usage as a property name. |
| qualValue | `string` |  | The new qualifier value string. Pass null for qualifiers that do not have values. |
| [options] | `number` | `0` | option flags that describe a new structure. Used only if the structure is being created. One of:\<br\>\</br\> - 0: A simple item, the default.\<br\>\</br\> - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).\<br\>\</br\> - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.\<br\>\</br\> |

**Example**  
```js
XMPMetaObj.setQualifier(schemaNS, propName, qualNS, qualName, qualValue[, options])
```


## setProperty(schemaNS, propName, propValue, [setOptions], [valueType])
Sets the value of a simple metadata property, creating the property if necessary, or creates a new array or structure property.
For creating array and structure properties,  [setArrayItem()](#setarrayitemschemans-arrayname-itemindex-itemvalue-itemoptions) and [setStructField()](#setstructfieldschemans-structname-fieldns-fieldname-fieldvalue-options) are preferred.
Use this call to create or set top-level, simple properties, or after using the path-composition functions in the [[XMPUtils object](../../../../modules/uxp/xmp/xmp-classes/xmp-utils.md)](./XMPUtils.md).


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| propName | `string` |  | The property name string. Can be a general path expression. |
| propValue | `string` |  | The new property value string. Pass null to create an array or non-leaf level structure property. |
| [setOptions] | `number` | `0` | option flags that describe a new structure. Used only if the structure is being created. One of:\<br\>\</br\> - 0: A simple item, the default.\<br\>\</br\> - XMPConst.PROP_IS_ARRAY: The item is an array (of type alt, bag, or seq).\<br\>\</br\> - XMPConst.PROP_IS_STRUCT: The item is a structure with nested fields.\<br\>\</br\> |
| [valueType] | `string` | `&quot;\&quot;\&quot;&quot;` | The property data type, If supplied, the value is converted to this type. one of: \<br\>\</br\> - XMPConst.STRING\<br\>\</br\>         - XMPConst.INTEGER\<br\>\</br\>         - XMPConst.NUMBER\<br\>\</br\>         - XMPConst.BOOLEAN\<br\>\</br\>         - XMPConst.XMPDATE\<br\>\</br\> |

**Example**  
```js
XMPMetaObj.setProperty(schemaNS, propName, propValue[, setOptions, valueType])
```


## sort()
Sorts the XMP contents alphabetically. At the top level, sorts namespaces by their prefixes.
Within a namespace, sorts top-level properties are sorted by name. Within a struct, sorts fields by their qualified name (that is, the XML prefix:local form.)
Sorts unordered arrays of simple items by value. Sorts language alternative arrays by the xml:lang qualifiers, with the "x-default" item placed first.

**Example**  
```js
XMPMetaObj.sort()
```


## deleteNamespace(namespaceURI)
Deletes a registered prefix - namespace URI pair.


| Param | Type | Description |
| --- | --- | --- |
| namespaceURI | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |

**Example**  
```js
XMPMeta.deleteNamespace(namespaceURI)
```


## dumpNamespaces(namespaceURI)
Creates and returns a human-readable string containing the list of registered namespace URIs and their associated prefixes.

**Returns**: `string` - the list of registered namespace URIs and their associated prefixes.  

| Param | Type | Description |
| --- | --- | --- |
| namespaceURI | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |

**Example**  
```js
XMPMeta.dumpNamespaces()
```


## getNamespacePrefix(namespaceURI)
Retrieves the prefix associated with a registered namespace URI.

**Returns**: `string` - the prefix string followed by a colon.  

| Param | Type | Description |
| --- | --- | --- |
| namespaceURI | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |

**Example**  
```js
XMPMeta.getNamespacePrefix(namespaceURI)
```


## getNamespaceURI(namespacePrefix)
Retrieves the registered namespace URI associated with a namespace prefix.

**Returns**: `string` - the URI String.  

| Param | Type | Description |
| --- | --- | --- |
| namespacePrefix | `string` | The namespace prefix string. |

**Example**  
```js
XMPMeta.getNamespaceURI(namespacePrefix)
```


## registerNamespace(namespaceURI, suggestedPrefix)
Registers a namespace with a prefix. If the suggested prefix is already in use, generates, registers,
and returns a different prefix.

**Returns**: `string` - the String containing the actual registered prefix. This is the suggestedPrefix, unless that one is already assigned to another namespace.  

| Param | Type | Description |
| --- | --- | --- |
| namespaceURI | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| suggestedPrefix | `string` | The suggested namespace prefix string. |

**Example**  
```js
XMPMeta.registerNamespace(namespaceURI, suggestedPrefix)
```

  