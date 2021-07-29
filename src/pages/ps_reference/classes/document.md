---
id: "document"
title: "Document"
sidebar_label: "Document"
repo: "uxp-photoshop"
index: "photoshop"
keywords: "
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
"
---

# Document

Represents a single Photoshop document that is currently open
You can access instances of documents using one of these methods:

```javascript
// The currently active document from the Photoshop object
const currentDocument = app.activeDocument

// Choose one of the open documents from the Photoshop object
const secondDocument = app.documents[1]

// You can also create an instance of a document via a UXP File entry
let fileEntry = require('uxp').storage.localFileSystem.getFileForOpening()
const newDocument = await app.open('/project.psd')
```

## Accessors

###  activeLayers

• **get activeLayers**(): *[Layer](/ps_reference/classes/layer/)[]*

The selected layers in the document
```javascript
const layers = doc.activeLayers;
const topLayer = layers[0]
```

___

###  backgroundLayer

• **get backgroundLayer**(): *[Layer](/ps_reference/classes/layer/) | null*

Background layer, if it exists

```javascript
const bgLayer = currentDocument.backgroundLayer
```

___

###  height

• **get height**(): *number*

Document's height in pixels

___

###  layerTree

• **get layerTree**(): *LayerTypes[]*

Top level layers in the document

___

###  layers

• **get layers**(): *LayerTypes[]*

All the layers in the document, in a flat list

```javascript
const layers = currentDocument.layers
const topLayer = layers[0]
```

___

###  path

• **get path**(): *string*

Path to this document, or it's identifier if a cloud document

___

###  resolution

• **get resolution**(): *number*

Document's resolution (in pixels per inch)

For example, in the default PS document (7 in wide by 5 in tall at 300 ppi)
```javascript
const resolution = doc.resolution // 300
const width = doc.width // 2100
const height = doc.height // 1500
```

___

###  title

• **get title**(): *string*

Document title
```javascript
const currentTitle = doc.title
```

**`readonly`** 

___

###  width

• **get width**(): *number*

Document's width in pixels

## Methods

###  close

▸ **close**(`saveDialogOptions?`: SaveDialogOptions): *Promise‹void›*

Closes the document, showing a prompt to save
unsaved changes if specified

**`async`** 

**Parameters:**

Name | Type |
------ | ------ |
`saveDialogOptions?` | SaveDialogOptions |

___

###  closeWithoutSaving

▸ **closeWithoutSaving**(): *void*

___

###  createLayer

▸ **createLayer**(`options?`: LayerCreateOptions): *Promise‹[Layer](/ps_reference/classes/layer/) | null›*

Create a layer. See @CreateOptions
```javascript
const myEmptyLayer = await doc.createLayer()
const myLayer = await doc.createLayer({ name: "myLayer", opacity: 80, mode: "colorDodge" })
```

**`async`** 

**Parameters:**

Name | Type |
------ | ------ |
`options?` | LayerCreateOptions |

___

###  createLayerGroup

▸ **createLayerGroup**(`options?`: GroupLayerCreateOptions): *Promise‹[GroupLayer](/ps_reference/classes/grouplayer/) | null›*

Create a layer group. See @CreateOptions
```javascript
const myEmptyGroup = await doc.createLayerGroup()
const myGroup = await doc.createLayerGroup({ name: "myLayer", opacity: 80, mode: "colorDodge" })
const nonEmptyGroup = await doc.createLayerGroup({ name: "group", fromLayers: [layer1, layer2] })
```

**`async`** 

**Parameters:**

Name | Type |
------ | ------ |
`options?` | GroupLayerCreateOptions |

___

###  crop

▸ **crop**(`bounds`: PsCommon.Bounds, `angle`: number): *Promise‹void›*

Crops the document to given bounds

**`async`** 

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`bounds` | PsCommon.Bounds | - | - |
`angle` | number | 0 |   |

___

###  duplicateLayers

▸ **duplicateLayers**(`layers`: [Layer](/ps_reference/classes/layer/)[], `targetDocument?`: [Document](/ps_reference/classes/document/)): *Promise‹[Layer](/ps_reference/classes/layer/)[]›*

Duplicates given layer(s), creating all copies above the top most one in layer stack,
and returns the newly created layers.
```javascript
// duplicate some layers
const layerCopies = await document.duplicateLayers([layer1, layer3])
layerCopies.forEach((layer) => { layer.blendMode = 'multiply' })
// ...to another document
const finalDoc = await photoshop.open('~/path/to/collated/image.psd')
await document.duplicateLayers([logo1, textLayer1], finalDoc)
await finalDoc.close(SaveDialogOptions.SAVE_CHANGES)
```

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`layers` | [Layer](/ps_reference/classes/layer/)[] | - |
`targetDocument?` | [Document](#) | if specified, duplicate to a different document target.  |

___

###  flatten

▸ **flatten**(): *Promise‹void›*

Flatten all layers in the document

**`async`** 

___

###  groupLayers

▸ **groupLayers**(`layers`: [Layer](/ps_reference/classes/layer/)[]): *Promise‹[GroupLayer](/ps_reference/classes/grouplayer/) | null›*

Create a layer group from existing layers.
```javascript
const layers = doc.layers
const group = await doc.groupLayers([layers[1], layers[2], layers[4]])
```

**`async`** 

**Parameters:**

Name | Type |
------ | ------ |
`layers` | [Layer](/ps_reference/classes/layer/)[] |

___

###  linkLayers

▸ **linkLayers**(`layers`: [Layer](/ps_reference/classes/layer/)[]): *[Layer](/ps_reference/classes/layer/)[]*

Links layers together if possible, and returns a list of linked layers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`layers` | [Layer](/ps_reference/classes/layer/)[] | array of layers to link together |

array of successfully linked layers

___

###  mergeVisibleLayers

▸ **mergeVisibleLayers**(): *Promise‹void›*

Flattens all visible layers in the document

**`async`** 

___

###  resizeCanvas

▸ **resizeCanvas**(`width`: number, `height`: number, `anchor?`: AnchorPosition): *Promise‹void›*

Changes the size of the canvas, but does not change image size
To change the image size, see [resizeImage](/ps_reference/classes/document/#resizeimage)

```javascript
// grow the canvas by 400px
let width = await document.width
let height = await document.height
await document.resizeCanvas(width + 400, height + 400)
```

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width` | number | Numeric value of new width in pixels |
`height` | number | Numeric value of new height in pixels |
`anchor?` | AnchorPosition | Anchor point for resizing, by default will resize an equal amount on all sides. <br/> Of format:                <br/>[top/middle/bottom]-[left/center/right]  |

___

###  resizeImage

▸ **resizeImage**(`width`: number, `height`: number, `resolution?`: number, `resampleMethod?`: ResampleMethod): *Promise‹void›*

Changes the size of the image

```javascript
await document.resizeImage(800, 600)
```

**`async`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width` | number | Numeric value of new width in pixels |
`height` | number | Numeric value of new height in pixels |
`resolution?` | number | Image resolution in pixels per inch (ppi) |
`resampleMethod?` | ResampleMethod | Method used during image interpolation.<br/>                        Possible values are:<br/>                        <ul>                        <li>nearestNeighbor</li>                        <li>bilinear</li>                        <li>bicubic</li>                        <li>bicubicSmoother</li>                        <li>bicubicSharper</li>                        <li>bicubicAutomatic</li>                        <li>preserveDetailsUpscale</li>                        <li>deepUpscale</li>                        </ul>  |

___

###  rotate

▸ **rotate**(`angles`: number): *Promise‹void›*

Rotates the image clockwise in given angle, expanding canvas if necessary

**`async`** 

**Parameters:**

Name | Type |
------ | ------ |
`angles` | number |

___

###  save

▸ **save**(`entry?`: File, `saveOptions?`: SaveOptions): *Promise‹void›*

Saves the document or a copy, the format is deduced by the extension

```javascript
// To save a document in the same location
document.save()

// Shows the save dialog
unsavedDocument.save()

// To save to a path, use UXP storage APIs to get a file for saving
let entry = await require('uxp').storage.localFileSystem.getFileForSaving("target.psd")
document.save(entry)

// To save to a path, but with some options:
document.save(entry, { embedColorProfile: true })
```

**`async`** 

**Parameters:**

Name | Type |
------ | ------ |
`entry?` | File |
`saveOptions?` | SaveOptions |
