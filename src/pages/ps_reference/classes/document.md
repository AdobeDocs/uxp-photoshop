---
id: "document"
title: "Document"
sidebar_label: "Document"
repo: "uxp-photoshop"
product: "photoshop"
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
---

# Document

Represents a single Photoshop document that is currently open
You can access instances of documents using one of these methods:

```javascript
const app = require('photoshop').app;
const constants = require('photoshop').constants;

// The currently active document from the Photoshop object
const currentDocument = app.activeDocument;

// Choose one of the open documents from the Photoshop object
const secondDocument = app.documents[1];

// You can also create an instance of a document via a UXP File entry
let fileEntry = require('uxp').storage.localFileSystem.getFileForOpening();
const newDocument = await app.open('/project.psd');
```

## Properties

### saveAs

• **saveAs**: *object*

Save the document to a desired file type.

For operations that require a UXP File token, use the
[UXP storage APIs](https://www.adobe.com/go/ps-api-uxp-filesystemprovider) to generate one.

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
| `bmp` | (`entry`: File, `saveOptions?`: [*BMPSaveOptions*](/ps_reference/objects/saveoptions/bmpsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |
| `gif` | (`entry`: File, `saveOptions?`: [*GIFSaveOptions*](/ps_reference/objects/saveoptions/gifsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |
| `jpg` | (`entry`: File, `saveOptions?`: [*JPEGSaveOptions*](/ps_reference/objects/saveoptions/jpegsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |
| `png` | (`entry`: File, `saveOptions?`: [*PNGSaveOptions*](/ps_reference/objects/saveoptions/pngsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |
| `psb` | (`entry`: File, `saveOptions?`: [*PhotoshopSaveOptions*](/ps_reference/objects/saveoptions/photoshopsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |
| `psd` | (`entry`: File, `saveOptions?`: [*PhotoshopSaveOptions*](/ps_reference/objects/saveoptions/photoshopsaveoptions/), `asCopy`: *boolean*) => *Promise*<void\> |

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| activeChannels | [*Channel*](/ps_reference/classes/channel/)[] | R W | 23.0 | Currently active channels of the document. [(24.6)](/ps_reference/changelog#246-bug-fixes) |
| activeHistoryBrushSource | [*HistoryState*](/ps_reference/classes/historystate/) | R W | 22.5 | The history state that history brush tool will use as its source. |
| activeHistoryState | [*HistoryState*](/ps_reference/classes/historystate/) | R W | 22.5 | Currently active history state of the document. |
| activeLayers | [*Layers*](/ps_reference/classes/layers/) | R | 22.5 | The selected layers in the document. |
| artboards | [*Layers*](/ps_reference/classes/layers/) | R | 22.5 | The artboards in the document |
| backgroundLayer | [*Layer*](/ps_reference/classes/layer/) | R | 22.5 | Background layer, if it exists. |
| bitsPerChannel | [*BitsPerChannelType*](/ps_reference/modules/constants/#bitsperchanneltype) | R W | 23.0 | The bits per color channel. |
| channels | [*Channels*](/ps_reference/classes/channels/) | R | 23.0 | All channels in the document. |
| cloudDocument | *boolean* | R | 23.0 | Check whether this a [Photoshop cloud document](https://helpx.adobe.com/photoshop/using/cloud-documents-faq.html). |
| cloudWorkAreaDirectory | *string* | R | 23.0 | Local directory for this cloud document. |
| colorProfileName | *string* | R W | 23.0 | Name of the color profile.  Valid only when [colorProfileType](/ps_reference/classes/document/#colorprofiletype) is &#x60;CUSTOM&#x60; or &#x60;WORKING&#x60;, returns &quot;None&quot; otherwise. |
| colorProfileType | [*ColorProfileType*](/ps_reference/modules/constants/#colorprofiletype) | R W | 23.0 | Whether the document uses the working color profile, a custom profile, or no profile. |
| colorSamplers | [*ColorSamplers*](/ps_reference/classes/colorsamplers/) | R | 24.0 | The collection of ColorSamplers present in the document. |
| componentChannels | [*Channel*](/ps_reference/classes/channel/)[] | R | 24.5 | Component channels in the document. [(24.6)](/ps_reference/changelog#246-bug-fixes) |
| ~~compositeChannels~~ | [*Channel*](/ps_reference/classes/channel/)[] | R | 23.0 | Deprecated since these channels are component not composite. Use &#x60;compositeChannels&#x60; above. |
| countItems | [*CountItems*](/ps_reference/classes/countitems/) | R | 24.1 | The collection of CountItems present in the document. |
| guides | [*Guides*](/ps_reference/classes/guides/) | R | 23.0 | The collection of Guides present in the document. |
| height | *number* | R | 22.5 | Document&#x27;s height in pixels. |
| histogram | *number*[] | R | 23.0 | A histogram containing the number of pixels at each color intensity level for the component channel. The array contains 256 members.  Valid only when [mode](/ps_reference/classes/document/#mode) &#x3D; &#x60;DocumentMode.{RGB,CMYK,INDEXEDCOLOR}&#x60; |
| historyStates | [*HistoryStates*](/ps_reference/classes/historystates/) | R | 22.5 | History states of the document. |
| id | *number* | R | 22.5 | The internal ID of this document will remain valid as long as this document is open. It can be used for batchPlay calls to refer to this document. |
| layerComps | [*LayerComps*](/ps_reference/classes/layercomps/) | R | 24.0 | The layer comps present in the document. |
| layers | [*Layers*](/ps_reference/classes/layers/) | R | 22.5 | The layers in the document at the top level of the layer/group hierarchy. |
| mode | [*DocumentMode*](/ps_reference/modules/constants/#documentmode) | R | 23.0 | The color mode. To change it, please use [Document.changeMode](/ps_reference/classes/document/#changemode). |
| name | *string* | R | 23.0 | The name of the document |
| path | *string* | R | 22.5 | Full file system path to this document, or the identifier if it is a cloud document. |
| pathItems | [*PathItems*](/ps_reference/classes/pathitems/) | R | 23.3 | The collection of paths in this document, as shown in the Paths panel. |
| pixelAspectRatio | *number* | R W | 22.5 | The (custom) pixel aspect ratio to use. |
| quickMaskMode | *boolean* | R W | 23.0 | The state of Quick Mask mode. If true, the app is in Quick Mask mode. |
| resolution | *number* | R | 22.5 | Document&#x27;s resolution (in pixels per inch). |
| saved | *boolean* | R | 23.0 | True if the document has been saved since the last change. |
| title | *string* | R | 22.5 | Document title |
| typename | *string* | R | 23.0 | The class name of the referenced object: *&quot;Document&quot;*. |
| width | *number* | R | 22.5 | Document&#x27;s width in pixels. |

## Methods

### calculations
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.5</span>

**async** : *Promise*<void \| [*Channel*](/ps_reference/classes/channel/) \| [*Document*](/ps_reference/classes/document/)\>

The Calculations command lets you blend two individual channels from one or more source images. You can then
apply the results to a new image or to a new channel or selection in the active image.

Performs Image > Calculations on the document. See the [CalculationsOptions](/ps_reference/objects/options/calculationsoptions/)
object for more info and examples.

```javascript
const doc = app.activeDocument;
const options = {
    source1: {
        document: doc,
        layer: doc.layers[0],
        channel: CalculationsChannel.GRAY
        invert: true
    },
    source2: {
        document: doc,
        layer: CalculationsLayer.MERGED,
        channel: doc.channels[2]
    },
    blending: CalculationsBlendMode.DARKEN,
    opacity: 50,
    result: CalculationsResult.NEWCHANNEL
};
doc.calculations(options);

```

Known issue: currently calculations requires having exactly one unlocked pixel layer being selected otherwise
it won't work. In future there should not be any layer requirements since this cannot output into layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `calculationsOptions` | [*CalculationsOptions*](/ps_reference/objects/options/calculationsoptions/) | Option object for the calculations. |

___

### changeMode
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Changes the color mode of the document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [*ChangeMode*](/ps_reference/modules/constants/#changemode) |
| `options?` | [*BitmapConversionOptions*](/ps_reference/objects/conversionoptions/bitmapconversionoptions/) \| [*IndexedConversionOptions*](/ps_reference/objects/conversionoptions/indexedconversionoptions/) |

___

### close
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

**async** : *Promise*<void\>

Closes the document, showing a prompt to save
unsaved changes if specified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `saveDialogOptions` | [*SaveOptions*](/ps_reference/modules/constants/#saveoptions) | By default, prompts a save dialog                    if there are unsaved changes. |

___

### closeWithoutSaving
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

*void*

Close the document, discarding all unsaved changes.

___

### convertProfile
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Create a new layer.

```javascript
await doc.createLayer() // defaults to pixel layer
```

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Create a new pixel layer.

```javascript
await doc.createLayer(
  Constants.LayerKind.NORMAL,
  { name: "myLayer", opacity: 80, blendMode: Constants.BlendMode.COLORDODGE })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kind` | [*NORMAL*](/ps_reference/modules/constants/#normal) | The kind of layer to create [Constants.LayerKind](/ps_reference/modules/constants/#layerkind). |
| `options?` | [*PixelLayerCreateOptions*](/ps_reference/objects/createoptions/pixellayercreateoptions/) | The options for creation, including general layer options and those specific to the layer kind. |

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Create a new layer group.

```javascript
await doc.createLayer( Constants.LayerKind.GROUP, { name: "myLayer", opacity: 80 })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kind` | [*GROUP*](/ps_reference/modules/constants/#group) | The kind of layer to create [Constants.LayerKind](/ps_reference/modules/constants/#layerkind). |
| `options?` | [*GroupLayerCreateOptions*](/ps_reference/objects/createoptions/grouplayercreateoptions/) | The options for creation, including general layer options and those specific to the layer kind. |

___

### createLayerGroup
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Create a layer group using options described by [GroupLayerCreateOptions](/ps_reference/objects/createoptions/grouplayercreateoptions/).

```javascript
const myEmptyGroup = await doc.createLayerGroup()
const myGroup = await doc.createLayerGroup({ name: "myLayer", opacity: 80, blendMode: "colorDodge" })
const nonEmptyGroup = await doc.createLayerGroup({ name: "group", fromLayers: [layer1, layer2] })
const selectedGroup = await doc.createLayerGroup({ name: "group", fromLayers: doc.activeLayers })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [*GroupLayerCreateOptions*](/ps_reference/objects/createoptions/grouplayercreateoptions/) |

___

### createPixelLayer
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Create a pixel layer using options described by [PixelLayerCreateOptions](/ps_reference/objects/createoptions/pixellayercreateoptions/).

```javascript
await doc.createPixelLayer()
await doc.createPixelLayer({ name: "myLayer", opacity: 80, fillNeutral: true })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [*PixelLayerCreateOptions*](/ps_reference/objects/createoptions/pixellayercreateoptions/) |

___

### createTextLayer
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.2</span>

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Create a text layer using options described by [TextLayerCreateOptions](/ps_reference/objects/createoptions/textlayercreateoptions/).

```javascript
await doc.createTextLayer()
await doc.createTextLayer({ name: "myTextLayer", contents: "Hello, World!", fontSize: 32 })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [*TextLayerCreateOptions*](/ps_reference/objects/createoptions/textlayercreateoptions/) |

___

### crop
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">22.5</span>

**async** : *Promise*<void\>

Flatten all layers in the document.

___

### groupLayers
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

[*Layer*](/ps_reference/classes/layer/)[]

Links layers together if possible, and returns a list of linked layers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layers` | [*Layer*](/ps_reference/classes/layer/)[] | array of layers to link together |

___

### mergeVisibleLayers
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Merges all visible layers in the document into a single layer.

___

### paste
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<[*Layer*](/ps_reference/classes/layer/)\>

Pastes the contents of the clipboard into the document. If the optional argument is
set to true and a selection is active, the contents are pasted into the selection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `intoSelection?` | *boolean* |

___

### rasterizeAllLayers
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Rasterizes all layers.

___

### resizeCanvas
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Expands the document to show clipped sections.

___

### rotate
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Rotates the image clockwise in given angle, expanding canvas if necessary. (Previously rotateCanvas)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angles` | *number* |

___

### sampleColor
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

**async** : *Promise*<[*SolidColor*](/ps_reference/classes/solidcolor/) \| [*NoColor*](/ps_reference/colors/nocolor/)\>

Returns a SolidColor object sampled from the document at the given position.

```javascript
let col = await app.activeDocument.sampleColor({x: 100, y: 100});
console.log(col.rgb);
// {
//    red: 233,
//    green: 179,
//    blue: 135,
//    hexValue: "E9B387"
// }
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | *object* | The point to sample `{x: number, y: number}`. |
| `position.x` | *number* | The horizontal coordinate in pixels. |
| `position.y` | *number* | The vertical coordinate in pixels. |

___

### save
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<[*Document*](/ps_reference/classes/document/)[]\>

Splits the document channels into separate, single-channel
documents.

___

### suspendHistory
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*Promise*<void\>

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
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<void\>

Applies trapping to a CMYK document.

Valid only when [Document.mode](/ps_reference/classes/document/#mode) is `Constants.DocumentMode.CMYK`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | *number* |

___

### trim
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

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
