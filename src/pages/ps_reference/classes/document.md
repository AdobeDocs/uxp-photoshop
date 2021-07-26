---
id: "document"
title: "Document"
sidebar_label: "Document"
repo: "uxp-photoshop"
product: "photoshop"
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

## Properties

### saveAs

• **saveAs**: *object*

Save the document to a desired file type.

For operations that require a UXP File token, use the UXP storage APIs to generate one.
See https://www.adobe.com/go/ps-api-uxp-filesystemprovider.

```javascript
let entry = await require('uxp').storage.localFileSystem.getFileForSaving("target.psd");
document.saveAs.psd(entry);

// Save as a Copy (High JPG quality)
document.saveAs.jpg(entryJpg, { quality: 12 }, true);

// Save a PSB, with some options:
document.saveAs.psb(entryPsb, { embedColorProfile: true });

```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bmp` | (`entry`: File, `saveOptions?`: [*BMPSaveOptions*](/ps_reference/objects/bmpsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |
| `gif` | (`entry`: File, `saveOptions?`: [*GIFSaveOptions*](/ps_reference/objects/gifsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |
| `jpg` | (`entry`: File, `saveOptions?`: [*JPEGSaveOptions*](/ps_reference/objects/jpegsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |
| `png` | (`entry`: File, `saveOptions?`: [*PNGSaveOptions*](/ps_reference/objects/pngsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |
| `psb` | (`entry`: File, `saveOptions?`: [*PhotoshopSaveOptions*](/ps_reference/objects/photoshopsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |
| `psd` | (`entry`: File, `saveOptions?`: [*PhotoshopSaveOptions*](/ps_reference/objects/photoshopsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| activeHistoryBrushSource | [*HistoryState*](/ps_reference/classes/historystate/) | Read-write | The history state that history brush tool will use as its source |
| activeHistoryState | [*HistoryState*](/ps_reference/classes/historystate/) | Read-write | Currently active history state of the document |
| activeLayers | [*Layers*](/ps_reference/classes/collections/layers/) | Read-only | The selected layers in the document |
| artboards | [*Layers*](/ps_reference/classes/collections/layers/) | Read-only | The artboards in the document |
| backgroundLayer | [*Layer*](/ps_reference/classes/layer/) | Read-only | Background layer, if it exists |
| height | *number* | Read-only | Document&#x27;s height in pixels |
| historyStates | [*HistoryStates*](/ps_reference/classes/collections/historystates/) | Read-only | History states of the document  **&#x60;readonly&#x60;** |
| id | *number* | Read-only | The internal ID of this document, valid as long as this document is open Can be used for batchPlay calls to refer to this document, used internally |
| layers | [*Layers*](/ps_reference/classes/collections/layers/) | Read-only | All the layers in the document at the top level |
| path | *string* | Read-only | Full file system path to this document, or the identifier if it is a cloud document |
| pixelAspectRatio | *number* | Read-write | The (custom) pixel aspect ratio to use |
| resolution | *number* | Read-only | Document&#x27;s resolution (in pixels per inch) |
| title | *string* | Read-only | Document title &#x60;&#x60;&#x60;javascript const currentTitle &#x3D; doc.title &#x60;&#x60;&#x60;  **&#x60;readonly&#x60;** |
| width | *number* | Read-only | Document&#x27;s width in pixels |

## Methods

### close

**async** : *Promise*<void\>

Closes the document, showing a prompt to save
unsaved changes if specified

#### Parameters

| Name | Type |
| :------ | :------ |
| `saveDialogOptions` | [*SaveOptions*](/ps_reference/modules/constants/#saveoptions) |

___

### closeWithoutSaving

*void*

___

### createLayer

**async** : *Promise*<[*default*](/ps_reference/classes/layer/)\>

Create a layer. See @CreateOptions
```javascript
const myEmptyLayer = await doc.createLayer()
const myLayer = await doc.createLayer({ name: "myLayer", opacity: 80, mode: "colorDodge" })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [*LayerCreateOptions*](/ps_reference/objects/layercreateoptions/) |

___

### createLayerGroup

**async** : *Promise*<[*default*](/ps_reference/classes/layer/)\>

Create a layer group. See @CreateOptions
```javascript
const myEmptyGroup = await doc.createLayerGroup()
const myGroup = await doc.createLayerGroup({ name: "myLayer", opacity: 80, mode: "colorDodge" })
const nonEmptyGroup = await doc.createLayerGroup({ name: "group", fromLayers: [layer1, layer2] })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [*GroupLayerCreateOptions*](/ps_reference/objects/grouplayercreateoptions/) |

___

### crop

**async** : *Promise*<void\>

Crops the document to given bounds

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bounds` | [*Bounds*](/ps_reference/objects/bounds/) | - |
| `angle` | *number* | 0 |

___

### duplicateLayers

**async** : *Promise*<[*default*](/ps_reference/classes/layer/)[]\>

Duplicates given layer(s), creating all copies above the top most one in layer stack,
and returns the newly created layers.
```javascript
// duplicate some layers
const layerCopies = await document.duplicateLayers([layer1, layer3])
layerCopies.forEach((layer) => { layer.blendMode = 'multiply' })
// ...to another document
const finalDoc = await photoshop.open('~/path/to/collated/image.psd')
await document.duplicateLayers([logo1, textLayer1], finalDoc)
await finalDoc.close(SaveOptions.SAVECHANGES)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layers` | [*default*](/ps_reference/classes/layer/)[] |  |
| `targetDocument?` | [*default*](/ps_reference/classes/document/) | if specified, duplicate to a different document target. |

___

### flatten

**async** : *Promise*<void\>

Flatten all layers in the document

___

### groupLayers

**async** : *Promise*<[*default*](/ps_reference/classes/layer/)\>

Create a layer group from existing layers.
```javascript
const layers = doc.layers
const group = await doc.groupLayers([layers[1], layers[2], layers[4]])
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `layers` | [*default*](/ps_reference/classes/layer/)[] |

___

### linkLayers

[*default*](/ps_reference/classes/layer/)[]

Links layers together if possible, and returns a list of linked layers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layers` | [*default*](/ps_reference/classes/layer/)[] | array of layers to link together |

___

### mergeVisibleLayers

**async** : *Promise*<void\>

Flattens all visible layers in the document

___

### resizeCanvas

**async** : *Promise*<void\>

Changes the size of the canvas, but does not change image size
To change the image size, see [resizeImage](/ps_reference/classes/document/#resizeimage)

```javascript
// grow the canvas by 400px
let width = await document.width
let height = await document.height
await document.resizeCanvas(width + 400, height + 400)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | *number* | Numeric value of new width in pixels |
| `height` | *number* | Numeric value of new height in pixels |
| `anchor?` | [*AnchorPosition*](/ps_reference/modules/constants/#anchorposition) | Anchor point for resizing, by default will resize an equal amount on all sides. |

___

### resizeImage

**async** : *Promise*<void\>

Changes the size of the image

```javascript
await document.resizeImage(800, 600)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | *number* | Numeric value of new width in pixels |
| `height` | *number* | Numeric value of new height in pixels |
| `resolution?` | *number* | Image resolution in pixels per inch (ppi) |
| `resampleMethod?` | [*ResampleMethod*](/ps_reference/modules/constants/#resamplemethod) | Method used during image interpolation. |

___

### rotate

**async** : *Promise*<void\>

Rotates the image clockwise in given angle, expanding canvas if necessary

#### Parameters

| Name | Type |
| :------ | :------ |
| `angles` | *number* |

___

### save

**async** : *Promise*<void\>

Performs a save of the document. The user will be presented with
a Save dialog if the file has yet to be saved on disk.

```javascript
// To save a document in the current location
document.save()

// Shows the save dialog
unsavedDocument.save()
```
