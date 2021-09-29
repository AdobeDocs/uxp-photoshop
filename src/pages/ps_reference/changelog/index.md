---
id: "photoshop-api-changelog"
title: API Changelog
description: Contains a running log of changes to the UXP API environment in Adobe Photoshop
---

# Photoshop API Changelog

## Introduction

As of now, this documentation site describes API functionality that is available for use to a select number of participants in [Adobe Prerelease community](https://www.adobeprerelease.com/). We will start to evolve the site to support users and plugin developers outside the Prerelease group, once more functionality is available, and when we can be more confident our changes are stable for the wider audience.

If you would like to join the conversation, please consider joining the [Adobe Prerelease community](https://www.adobeprerelease.com/)!

## Latest

### Channel support
- [Channels collections](../classes/Channels/) behave like other collections in the API. Channels further supports `channels.add()` and `channels.removeAll()`. 
- [Channel class](../classes/Channel)
	- Supports four types of channels, as listed in [Constants.ChannelType](../modules/constants/#channeltype): `COMPONENT`, `MASKEDAREA`, `SELECTEDAREA`, `SPOTCOLOR`.
	- Adds the following Channel properties: `name`, `type`, `visible`, `histogram`, `color`, `opacity`.
	- Adds the following Channel methods: `remove()`, `merge()` (for ChannelType.SPOTCOLOR).
	- Adds to the Document class: `get compositeChannels`, `get activeChannels`, `set activeChannels`.

### Document Transformations
- `Document.crop(bounds: Bounds, angle, width, height)`: Crops the document. The `bounds` paramter is an array of four coordinates for the region remaining after cropping, [left, top, right, bottom].
- `Document.resizeCanvas(width, height, Constants.AnchorPosition)`: Changes the size of the canvas to display more or less of the image but does not change the image size. See `resizeImage`
- `Document.resizeImage(width, heigh, resolution, Constants.ResampleMethod, amount)`: Changes the size of the image. The `amount` of noise value when using preserve details (Range: 0 1 100).
- `Document.rotateCanvas(angle)`: Rotates the image and resizes the canvas to fit the resized image.
- `Document.trim(Constants.TrimType, top, left, bottom, right)`: If `TrimType.TRANSPARENT`, trims the transparent area around the image on the specified sides of the canvas. Trims surround areas that color match the top left corner or bottom right corner pixel if `TrimType.TOPLEFT` or `TrimType.BOTTOMRIGHT` is specified, respectively.

### Layer cut and copy
- `layer.cut()`: Cut the pixels out of the layer.
- `layer.copy(merge: boolean)`: Copy the layer or if a selection is present the merge option will copy from multiple layers..

### Layer Methods
- `layer.duplicate(relativeObject?: Document | Layer, insertionLocation?: Constants.ElementPlacement, name?: string)`: Duplicates the layer, creating a copy above it in layer stack and returns the newly created layer.
- `layer.delete()`: Deletes this layer from the document.
- `layer.link()`: Creates a link between this layer and the target layer if not already linked and returns a list of layers linked to this layer.
- `layer.unlink()`: Unlinks the layer from any existing links.

### Document paste
- `document.paste(intoSelection: boolean)`: Pastes the contents of the clipboard into the document. If the optional argument is set to true and a selection is active, the contents are pasted into the selection.

### Document Methods
- `Document.flatten()`: Merges all visible layers in the document into a single layer.
- `Document.mergeVisibleLayers()`: Flattens all visible layers in the document
- `Document.revealAll()`: Expands the document to show clipped sections.
- `Document.rasterizeAllLayers()`: Rasterizes all layers.
- `Document.splitChannels()`: Splits the document channels into separate, single-channel documents.
- `Document.duplicate()`: Creates a copy of the document, switching to the copy.

### [SolidColor](../classes/solidcolor) API
 - Add require('photoshop').app.SolidColor constructor, which allows for creation of SolidColor objects.
 - APIs that accept colors now also accept SolidColor objects.
   - app.foregroundColor and app.backgroundColor.
   - app.documents.add `fillColor` property.
   - Document.saveAs methods that use colors.
 - `require('photoshop').core.convertColor` low level API added, used internally by SolidColor. It uses app color 
 settings to convert between color spaces.

## Adobe Photoshop Beta Build 65: Sep 3, 2021

### Layer Transformations
- `layer.rotate(angle: number, anchor?: Constants.AnchorPosition)`: Rotate by `angle` about `anchor`.
- `layer.scale(width: number, height: number, anchor?: Constants.AnchorPosition)`: Scale layer by `width` percent and `height` percent of the image, relative to `anchor`.
- `layer.translate(horizontal: number, vertical: number)`: Translate layer by `horizontal` and `vertical` offset (by pixel or percent).

### app.fonts and TextFont classes
 - `app.fonts` getter: Returns all installed fonts
 - `TextFont` class and `TextFonts` collection class

### Document Properties

- Document.bitsPerChannel (read-write): The bits per color channel (type Constants.BitsPerChannelType)
- Document.cloudDocument (read only): This document is in the Adobe Creative Cloud (type boolean)
- Document.cloudWorkAreaDirectory (read only): Local directory for this cloud document (type string)
- Document.histogram (read only): A histogram containing the number of pixels at each color intensity level for the composite channel. The array contains 256 members.
- Document.name (read only): The name of the document (type string)
- Document.path (read only): Full file system path to this document, or the identifier if it is a cloud document (type string)
- Document.quickMaskMode (read-write): The state of Quick Mask mode. If true, the app is in Quick Mask mode (type boolean)
- Document.saved (read only): True if the document has been saved since the last change (type boolean)

### Document Color Profile APIs

 - Document.mode property (read only)
 - Document.colorProfileType and Document.colorProfileName properties (read-write)
 - Document.changeMode(), Document.convertProfile(), and Document.trap() methods

## Adobe Photoshop Beta Build 64: Aug 6, 2021

### [Document.suspendHistory](../classes/Document/#suspendHistory)

This API wraps around [`core.executeAsModal`](https://adobe.ly/psmodal) within a single document to make it easier for you to run your code under a single history state. Unlike it's ExtendScript predecessor, this method takes a Javascript function, rather than a script string.

### [Layer Move APIs](../classes/Layer/#move)

- Arrange layers with `layer.move(targetLayer, Constants.ElementPlacement)`. Added `Constants.ElementPlacement` for moving layers: `"placeAfter"` (place below a layer, below group if group layer), `"placeBefore"` (place above a layer, above group if group layer), and `"placeInside"` (inside group layers only).
- Send a layer to the back or bring a layer to the front with `layer.sendToBack()` and `layer.bringToFront()`. If `layer` is within a group, the commands will operate within that group.

## Adobe Photoshop Prerelease Build 61: Jun 24, 2021

### Updated DOM API

- New `Layers` collection, the old `layerTree` object is now called `layers` but as a collection using the JavaScript Proxy object. See below for introduction of collections. The old `layers` behavior is no longer part of the DOM. Most scripts can be updated to replace `layerTree` with `layers`.  A document and a layer, if the layer kind is group, will have a valid `layers` collection. A `pixel` layer will have `null` for the `layers` property. A collection has the same semantics as an Array. The additional ExtendScript routines of `add` and `getByName` are also available. Use `LayerKind.GROUP` on a `layer` to see if any `layers` are available.
- `GroupLayer` has been removed. Use `activeLayer.kind === LayerKind.GROUP` instead.
- `Constants.LayerKind`, similar to ExtendScript version, but with "group" layer addition.
- Layer APIs
	- *new* locked, read-only way to tell if any of the properties are locked
	- allLocked, pixelsLocked, positionLocked, transparentPixelsLocked properties
	- Some existing properties exposed in documentation

## Adobe Photoshop Prerelease Build 60: Jun 10, 2021

This update contains changes that were made since the MAX 2020 (Adobe Photoshop 22.0) release.

### Breaking changes
To use the new set of APIs, your project's `manifest.json` must be updated to include the following under the `host` object:
```javascript
	"data" : {
		"apiVersion": 2
	}
```
Further, your `manifest.json` must use version 4:
```javascript
  "manifestVersion": 4
```
To roll back to the MAX 2020 version of the Photoshop DOM API, set the `apiVersion` to 1.

### Updated DOM API
- Collections
	- We're introducing collection classes built using [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), to make it easier to interact with the DOM.
	- Try iterating through all the documents as such: `app.documents.forEach(h => console.log(h.title));`
- [HistoryStates collections](../classes/HistoryStates/) and [HistoryState API](../classes/HistoryState)
	- We've built HistoryStates to mirror ExtendScript functionality. `length`, `parent`, and `getByName(name)` are provided. You can also use indices as such: `activeDocument.historyStates[2]`.
	- HistoryState provides `name`, `parent`, `snapshot`.
- [Documents collections](../classes/Documents/)
	- Documents also follows ExtendScript functionality. `length`, `add`, `getByName(name)`, `parent` are provided.
- [Constants module](../modules/constants/), collecting all enumerations and constants used in DOM API. Accessible via `require("photoshop").constants`.
- Updated [app.createDocument / app.add](../classes/Photoshop/#createdocument)
	- Create a document with no params for a default document, with a predefined preset, or by providing a host of [DocumentCreateOptions](../objects/DocumentCreateOptions/)).
- Updated [document.save](../classes/Document/#save) and [document.saveAs](../classes/Document/#saveas)
	- `save` no longer infers the file type from the requested file name. Instead, it invokes a save dialog for unsaved files, and performs a save operation for saved, modified files.
	- `saveAs` is provided for `bmp`, `gif`, `jpg`, `png`, `psb`, `psd` formats. Use SaveOptions objects to request specific saves (e.g. [PhotoshopSaveOptions](../objects/PhotoshopSaveOptions/)).
- [layer.id getter](../classes/Layer)
- Updated [document.createLayer](../classes/Document/#createlayer) and [document.createLayerGroup](../classes/Document/#createlayergroup)
	- With respective Create options: [LayerCreateOptions](../objects/LayerCreateOptions/) and [GroupLayerCreateOptions](../objects/GroupLayerCreateOptions).
	- Collection access updates for Layer and Layer-like items are planned for upcoming releases.

#### Photoshop Core updates
- [Execute as Modal](../media/executeAsModal/) allows you to create plugins that can be guaranteed exclusive control over Photoshop during execution. It further allows for clear user feedback when this is occuring, and allows plugins to `suspendHistory` and `resumeHistory`.
