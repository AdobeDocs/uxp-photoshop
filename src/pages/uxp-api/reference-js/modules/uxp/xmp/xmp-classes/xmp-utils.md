---
title: require('uxp').xmp.XMPUtils
description: Since: v7.2.0
---

# require('uxp').xmp.XMPUtils
**Since**: v7.2.0  


## XMPUtils()
This class provides additional utility functions for the XMP Toolkit, layered upon the functionality of
the [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md). It has only static functions, you cannot create an instance.

Path-composition functions such as composeArrayItemPath(), provide support for composing path
expressions to deeply nested properties, which you can then pass to the accessor functions in
[XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md), such as xmpmetaobj-getProperty.

Higher-level functions such as xmputils-duplicateSubtree allow you to manipulate the metadata tree
in an [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md).



## appendProperties(source, dest, [options])
Copies properties from a source [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md) and appends them to a destination [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md).


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | `XMPMeta` |  | The source [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md). |
| dest | `XMPMeta` |  | The destination [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md). |
| [options] | `number` | `0` | Option flags that control the copying operation. A logical OR of these bit-flag constants:\<br\>\</br\> - XMPConst.APPEND_ALL_PROPERTIES: Include both internal and external properties. By default, copies only external properties. This applies only to top-level properties.\<br\>\</br\> - XMPConst.APPEND_REPLACE_OLD_VALUES: Replace the values of existing properties with the value from the source object. By default, existing values are retained. This applies to properties at all levels of hierarchy.\<br\>\</br\> - XMPConst.APPEND_DELETE_EMPTY_VALUES: Delete properties if the new value is empty. |

**Example**  
```js
XMPUtils.appendProperties(source, dest, options)
```


## catenateArrayItems(xmpObj, schemaNS, arrayName, [separator], [quotes &#x3D;], [options])
Concatenates a set of array item values into a single string. The resulting string can be separated back out into array items using separateArrayItems().

**Returns**: `string` - the concatenated string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| xmpObj | `XMPMeta` |  | The [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md) containing the array. |
| schemaNS | `string` |  | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` |  | The array property name string. Can be a general path expression. Each item in the array must be a simple string value. |
| [separator] | `string` | `&quot;;&quot;` | The string used to separate the items in the result string. Default is ‘; ‘, an ASCII semicolon and space (U+003B,U+0020). |
| [quotes =] | `string` |  | The character used to quote items that contain a separator. Default is ‘”’, an ASCII double quote (U+0022). |
| [options] | `number` | `0` | Option flag that controls the concatenation. This constant value:\<br\>\</br\> - XMPConst.SEPARATE_ALLOW_COMMAS: Allow commas in item values (such as “LastName, FirstName”). This option must be set the same way in this function and in [separateArrayItems()](#separatearrayitemsxmpobj-schemans-arrayname-arrayoptions-concatstring) to reconstruct the items correctly. |

**Example**  
```js
XMPUtils.catenateArrayItems(xmpObj, schemaNS, arrayName, separator, quotes, options)
```


## composeArrayItemPath(schemaNS, arrayName, itemIndex)
Creates and returns a string containing the path expression for an item in an array, using the registered prefix for the namespace, in the form:
schemaNS:arrayName[itemIndex]

**Returns**: `string` - a string containing the path expression for an item in an array.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` | The array property name string. Can be a general path expression. |
| itemIndex | `number` | The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. In this case, the resulting path is ns:arrayName[last()]. |

**Example**  
```js
XMPUtils.composeArrayItemPath(schemaNS, arrayName, itemIndex)
```


## composeFieldSelector(schemaNS, arrayName, fieldNS, fieldName, fieldValue)
Creates and returns a string containing the path expression to select an alternate item by a field’s value, using the registered prefixes for the namespaces, in the form:
schemaNS:arrayName[fieldNS:fieldName='fieldValue']

**Returns**: `string` - a string containing the path expression to select an alternate item by a field’s value.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` | The array property name string. Can be a general path expression. |
| fieldNS | `string` | The field namespace URI string. |
| fieldName | `string` | The field name. Must be a simple XML name. |
| fieldValue | `string` | The desired field value. |

**Example**  
```js
XMPUtils.composeFieldSelector(schemaNS, arrayName, fieldNS, fieldName, fieldValue)
```


## composeLangSelector(schemaNS, arrayName, locale)
Creates and returns a string containing the path expression to select an alternate item in an alt text array by language, using the registered prefix for the namespace, in the form:
schemaNS:arrayName[@xml:lang='langName']

**Returns**: `string` - a string containing the path expression to select an alternate item in an alt text array by language.  
**Note**: Do not use this in place of getLocalizedText() or setLocalizedText().
Those functions provide extra logic to choose the appropriate language and maintain consistency with the x-default value.
This function provides a path expression for an explicit language, and only for that language.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` | The array property name string. Can be a general path expression. |
| locale | `string` | The RFC3066 locale code string for the desired language. |

**Example**  
```js
XMPUtils.composeLanguageSelector(schemaNS, arrayName, locale)
```


## composeStructFieldPath(schemaNS, structName, fieldNS, fieldName)
Creates and returns a string containing the path expression for a field in a structure, using the registered prefixes for the namespaces, in the form:
schemaNS:structName/fieldNS:fieldName

**Returns**: `string` - a string containing the path expression for a field in a structure.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| structName | `string` | The structure property name string. Can be a general path expression. |
| fieldNS | `string` | The field namespace URI string. |
| fieldName | `string` | The field name. Must be a simple XML name. |

**Example**  
```js
XMPUtils.composeStructFieldPath(schemaNS, structName, fieldNS, fieldName)
```


## composeQualifierPath(schemaNS, propName, qualNS, qualName)
Creates and returns a string containing the path expression for a qualifier attached to a property, using the registered prefix for the namespace, in the form:
schemaNS:propName/?qualNS:qualName

**Returns**: `string` - a string containing the path expression for a qualifier attached to a property.  

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| propName | `string` | The property name string. Can be a general path expression. |
| qualNS | `string` | The qualifier namespace URI string. |
| qualName | `string` | The qualifier name. Must be a simple XML name. |

**Example**  
```js
XMPUtils.composeQualifierPath(schemaNS, propName, qualNS, qualName)
```


## duplicateSubtree(source, dest, sourceNS, sourceRoot, destNS, [destRoot], [options])
Copies properties in the specified subtree from a source [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md) and adds them into a destination [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md).


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | `XMPMeta` |  | The source [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md). |
| dest | `XMPMeta` |  | The destination [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md). |
| sourceNS | `string` |  | The source namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| sourceRoot | `string` |  | The property name string for the root location of the source subtree. Can be a general path expression. |
| destNS | `string` |  | The destination namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| [destRoot] | `string` |  | The property name string for the root location of the destination subtree. Can be a general path expression. Default is the source root location. |
| [options] | `number` | `0` | Option flags that control the copying operation. A logical OR of these bit-flag constants:\<br\>\</br\> - XMPConst.APPEND_ALL_PROPERTIES: Include both internal and external properties. By default, copies only external properties. This applies only to top-level properties.\<br\>\</br\> - XMPConst.APPEND_REPLACE_OLD_VALUES: Replace the values of existing properties with the value from the source object. By default, existing values are retained. This applies to properties at all levels of hierarchy.\<br\>\</br\> - XMPConst.APPEND_DELETE_EMPTY_VALUES: Delete properties if the new value is empty. |

**Example**  
```js
XMPUtils.duplicateSubtree(source, dest, sourceNS, sourceRoot, destNS, destRoot, options)
```


## removeProperties(xmpObj, [schemaNS], [propName], [options])
Removes multiple properties from an [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md).\<br\>\</br\>\<br\>\</br\>
If both the namespace and property name are supplied, removes the property if it is external, even if it is an alias.\<br\>\</br\>
If it is internal, removes it if the option XMPConst.REMOVE_ALL_PROPERTIES is specified.\<br\>\</br\>\<br\>\</br\>
If the namespace is supplied and the property name is not, removes all external properties in the namespace,\<br\>\</br\>
and optionally all internal properties. Removes aliases only if the option XMPConst.REMOVE_INCLUDE_ALIASES is specified.\<br\>\</br\>\<br\>\</br\>
If neither the namespace nor the property name are supplied, removes all external properties, and optionally all internal properties.\<br\>\</br\>
Aliases are handled implicitly, because the associated actual is removed.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| xmpObj | `XMPMeta` |  | The [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md). |
| [schemaNS] | `string` |  | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). Must be supplied if a property name is supplied. |
| [propName] | `string` |  | The property name string. Can be a general path expression. |
| [options] | `number` | `0` | Option flags that control the deletion operation. A logical OR of these bit-flag constants:\<br\>\</br\> - XMPConst.REMOVE_ALL_PROPERTIES: Remove internal and external properties. By default, removes only external properties. Applies only to top-level properties.\<br\>\</br\> - XMPConst.REMOVE_INCLUDE_ALIASES: Remove aliases defined in the namespace. If the property name is supplied, removes it regardless of this option. |

**Example**  
```js
XMPUtils.removeProperties(xmpObj, schemaNS, propName, options)
```


## separateArrayItems(xmpObj, schemaNS, arrayName, [arrayOptions], concatString)
Updates individual array item strings in the [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md) from a concatenated string returned by catenateArrayItems().
Recognizes a large set of separator characters, including semicolons, commas, tab, return, linefeed, and multiple spaces.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| xmpObj | `XMPMeta` |  | The [XMPMeta object](../../../../modules/uxp/xmp/xmp-classes/xmp-meta.md) containing the array. |
| schemaNS | `string` |  | The namespace URI string. See [Schema namespace string constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants). |
| arrayName | `string` |  | The array property name string. Can be a general path expression. Each item in the array must be a simple string value. |
| [arrayOptions] | `number` | `0` | Option flags that control how the array property is updated from the separated string. A logical OR of these bit-flag constants:\<br\>\</br\> - XMPConst.APPEND_ALL_PROPERTIES: Include both internal and external properties. By default, copies only external properties. This applies only to top-level properties.\<br\>\</br\> - XMPConst.APPEND_REPLACE_OLD_VALUES: Replace the values of existing properties with the value from the source object. By default, existing values are retained. This applies to properties at all levels of hierarchy.\<br\>\</br\> - XMPConst.APPEND_DELETE_EMPTY_VALUES: Delete properties if the new value is empty.\<br\>\</br\> - XMPConst.SEPARATE_ALLOW_COMMAS: Allow commas in item values. If not specified, an item containing a comma (such as “LastName, FirstName”) is separated into two array items. |
| concatString | `string` |  | The string containing the concatenated array values, as returned by catenateArrayItems(). |

**Example**  
```js
XMPUtils.separateArrayItems(xmpObj, schemaNS, arrayName, arrayOptions, concatString)
```

  