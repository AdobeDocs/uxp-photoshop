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
| activeChannels | [*Channel*](/ps_reference/classes/channel/)[] | Read-write | Currently active channels of the document |
| activeHistoryBrushSource | [*HistoryState*](/ps_reference/classes/historystate/) | Read-write | The history state that history brush tool will use as its source |
| activeHistoryState | [*HistoryState*](/ps_reference/classes/historystate/) | Read-write | Currently active history state of the document |
| activeLayers | [*Layers*](/ps_reference/classes/layers/) | Read-only | The selected layers in the document |
| artboards | [*Layers*](/ps_reference/classes/layers/) | Read-only | The artboards in the document |
| backgroundLayer | [*Layer*](/ps_reference/classes/layer/) | Read-only | Background layer, if it exists |
| bitsPerChannel | [*BitsPerChannelType*](/ps_reference/modules/constants/#bitsperchanneltype) | Read-write | The bits per color channel. |
| channels | [*Channels*](/ps_reference/classes/channels/) | Read-only | All channels in the document. |
| cloudDocument | *boolean* | Read-only | This document is in the Adobe Creative Cloud. |
| cloudWorkAreaDirectory | *string* | Read-only | Local directory for this cloud document. |
| colorProfileName | *string* | Read-write | Name of the color profile.  Valid only when [colorProfileType](/ps_reference/classes/document/#colorprofiletype) is &#x60;CUSTOM&#x60; or &#x60;WORKING&#x60;, returns &quot;None&quot; otherwise |
| colorProfileType | [*ColorProfileType*](/ps_reference/modules/constants/#colorprofiletype) | Read-write | Whether the document uses the working color profile, a custom profile, or no profile. |
| compositeChannels | [*Channel*](/ps_reference/classes/channel/)[] | Read-only | Composite channels in the document. |
| guides | [*Guides*](/ps_reference/classes/guides/) | Read-only | - |
| height | *number* | Read-only | Document&#x27;s height in pixels |
| histogram | *number*[] | Read-only | A histogram containing the number of pixels at each color intensity level for the composite channel. The array contains 256 members.  Valid only when [mode](/ps_reference/classes/document/#mode) &#x3D; &#x60;DocumentMode.{RGB,CMYK,INDEXEDCOLOR}&#x60; |
| historyStates | [*HistoryStates*](/ps_reference/classes/historystates/) | Read-only | History states of the document  **&#x60;readonly&#x60;** |
| id | *number* | Read-only | The internal ID of this document, valid as long as this document is open Can be used for batchPlay calls to refer to this document, used internally |
| layers | [*Layers*](/ps_reference/classes/layers/) | Read-only | All the layers in the document at the top level |
| mode | [*DocumentMode*](/ps_reference/modules/constants/#documentmode) | Read-only | The color profile. To change it, please use [Document.changeMode](/ps_reference/classes/document/#changemode) |
| name | *string* | Read-only | The name of the document |
| path | *string* | Read-only | Full file system path to this document, or the identifier if it is a cloud document |
| pixelAspectRatio | *number* | Read-write | The (custom) pixel aspect ratio to use |
| quickMaskMode | *boolean* | Read-write | The state of Quick Mask mode. If true, the app is in Quick Mask mode. |
| resolution | *number* | Read-only | Document&#x27;s resolution (in pixels per inch) |
| saved | *boolean* | Read-only | True if the document has been saved since the last change. |
| title | *string* | Read-only | Document title &#x60;&#x60;&#x60;javascript const currentTitle &#x3D; doc.title &#x60;&#x60;&#x60;  **&#x60;readonly&#x60;** |
| typename | *string* | Read-only | The class name of the referenced Document object |
| width | *number* | Read-only | Document&#x27;s width in pixels |

## Methods

### changeMode

**async** : *Promise*<void\>

Changes the color profile of the document

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [*ChangeMode*](/ps_reference/modules/constants/#changemode) |
| `options?` | [*BitmapConversionOptions*](/ps_reference/objects/bitmapconversionoptions/) \| [*IndexedConversionOptions*](/ps_reference/objects/indexedconversionoptions/) |

___

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

### convertProfile

**async** : *Promise*<void\>

Changes the color profile.

`destinationProfile` must be either a string that names the color mode,
or one of these below, meaning of the working color spaces or Lab color.

`"Working RGB", "Working CMYK", "Working Gray", "Lab Color"`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationProfile` | *string* |
| `intent` | [*Intent*](/ps_reference/modules/constants/#intent) |
| `blackPointCompensation?` | *boolean* |
| `dither?` | *boolean* |

___

### createLayer

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

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

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Create a layer group. See [GroupLayerCreateOptions](/ps_reference/objects/grouplayercreateoptions/)
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
| `width` | *number* | 0 |
| `height` | *number* | 0 |

___

### duplicate

*Promise*<[*Document*](/ps_reference/classes/document/)\>

Creates a duplicate of the document, making the duplicate active.

The optional parameter `name` provides the name for the duplicated document.

The optional parameter `mergeLayersOnly` indicates whether to only duplicate merged layers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | *string* |
| `mergeLayersOnly?` | *boolean* |

___

### duplicateLayers

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)[]\>

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
| `layers` | [*Layer*](/ps_reference/classes/layer/)[] |  |
| `targetDocument?` | [*Document*](/ps_reference/classes/document/) | if specified, duplicate to a different document target. |

___

### flatten

**async** : *Promise*<void\>

Flatten all layers in the document

___

### groupLayers

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Create a layer group from existing layers.
```javascript
const layers = doc.layers
const group = await doc.groupLayers([layers[1], layers[2], layers[4]])
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `layers` | [*Layer*](/ps_reference/classes/layer/)[] |

___

### linkLayers

[*Layer*](/ps_reference/classes/layer/)[]

Links layers together if possible, and returns a list of linked layers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layers` | [*Layer*](/ps_reference/classes/layer/)[] | array of layers to link together |

___

### mergeVisibleLayers

**async** : *Promise*<void\>

Merges all visible layers in the document into a single layer.

___

### paste

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Pastes the contents of the clipboard into the document. If the optional argument is
set to true and a selection is active, the contents are pasted into the selection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `intoSelection?` | *boolean* |

___

### rasterizeAllLayers

**async** : *Promise*<void\>

Rasterizes all layers.

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
| `width?` | *number* | Numeric value of new width in pixels |
| `height?` | *number* | Numeric value of new height in pixels |
| `resolution?` | *number* | Image resolution in pixels per inch (ppi) |
| `resampleMethod?` | [*ResampleMethod*](/ps_reference/modules/constants/#resamplemethod) | Method used during image interpolation. |
| `amount?` | *number* | Numeric value that controls the amount of noise value when using preserve details 0..100 |

___

### revealAll

**async** : *Promise*<void\>

Expands the document to show clipped sections.

___

### rotate

**async** : *Promise*<void\>

Rotates the image clockwise in given angle, expanding canvas if necessary. (Previously rotateCanvas)

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

___

### splitChannels

**async** : *Promise*<[*Document*](/ps_reference/classes/document/)[]\>

Splits the document channels into separate, single-channel
documents.

___

### suspendHistory

*Promise*<any\>

Creates a single history state encapsulating everything that is done
in the callback, only for this document. All changes to the document should
be done in this callback.

Note: If you make changes to any other document, those changes will
not be suspended in the same history state.

The callback is passed in a SuspendHistoryContext object,
which contains the current document in a variable `document`.

For more info and advanced context, see [`core.executeAsModal`](../media/executeAsModal)
API, for which this API is a simple wrapper for.

```javascript
   require("photoshop").app.activeDocument.suspendHistory(async (context) => {
       // context.document is the `app.activeDocument`
       context.document.activeLayers[0].name = "Changed name";
   });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`e`: SuspendHistoryContext) => *void* |
| `historyStateName` | *string* |

___

### trap

**async** : *Promise*<void\>

Applies trapping to a CMYK document.

Valid only when [Document.mode](/ps_reference/classes/document/#mode) is `Constants.DocumentMode.CMYK`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | *number* |

___

### trim

**async** : *Promise*<void\>

Trims the transparent area around the image on the specified sides of the canvas
base on trimType

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `trimType` | [*TrimType*](/ps_reference/modules/constants/#trimtype) | - |
| `top` | *boolean* | true |
| `left` | *boolean* | true |
| `bottom` | *boolean* | true |
| `right` | *boolean* | true |
