---
id: "photoshop-api"
title: Photoshop API—UXP for Adobe Photoshop
description: Learn about the Photoshop API that is exposed through UXP for plugin developers.
---


# Photoshop API

## Overview

The following line allows you access to the Photoshop DOM via UXP.
```javascript
const app = require('photoshop').app;
```
From here, you can open documents, modify them, run menu items, and more.

## Synchronous vs Asynchronous

An important difference between ExtendScript (and CEP) and UXP in Photoshop is that all ExtendScript calls to Photoshop were synchronous. This means they blocked the Photoshop UI while they were executing. In UXP, a method call is *asynchronous*, and does not block the UI thread.

For a smooth transition between the ExtendScript DOM and the UXP DOM, all properties (get and set) in the API were designed to be *synchronous* and do not need to be awaited. It is worth noting that they are, in the background, asynchronous in nature.

## Working with Photoshop Objects

### Photoshop Application

Through the [`app`](#overview) object, you can access the rest of Photoshop's objects and methods.

The currently-active document is obtained like this:

```javascript
const doc = app.activeDocument;
```

And you can get an array of all open documents like this:

```javascript
const allDocuments = app.documents;
```

See more properties and methods in `app` under [Photoshop](./classes/photoshop/).

### Detour - ExecuteAsModal
A key concept to understand before diving straight into Photoshop UXP plugin development is what we have termed "execute as modal". Any and all commands that may **modify the document**, or the **application state**, must utilize executeAsModal.

```javascript
async function makeDefaultDocument(executionControl) {
  const app = require('photoshop').app;
  let myDoc = await app.createDocument({preset: "My Web Preset 1"});
}

await require('photoshop').core.executeAsModal(makeDefaultDocument);
```

As you may notice, this restriction could encompass much of your plugins' functionality! There are many benefits for this model, however. A more detailed explanation is provided in the [Execute as Modal documentation](./media/executeasmodal/).

### Document
Represents a single, open Photoshop document. From this object, you can access the document's layers, dimensions, resolution, etc. You can crop it, add/delete/duplicate layers, resize, rotate, and save it.

Get the dimensions of the active document:

```javascript
const app = require('photoshop').app;
const myDoc = app.activeDocument;
const height = myDoc.height;
const width = myDoc.width;
const resolution = myDoc.resolution;
console.log(`Doc size is ${width} x ${height}. Resolution is ${resolution}`);
```

Flatten all currently open documents:

```javascript
const app = require('photoshop').app;
const toFlatten = app.documents;
async function flattenThem(executionControl) {
  toFlatten.forEach((photoshopDoc) => {
    photoshopDoc.flatten();
  });
};

await require('photoshop').core.executeAsModal(flattenThem);
```

Create a layer:
```javascript
const app = require('photoshop').app;
async function newColorDodgeLayer(executionControl) {
  await app.activeDocument.createLayer({ name: "myLayer", opacity: 80, mode: "colorDodge" });
};

await require('photoshop').core.executeAsModal(newColorDodgeLayer);
```

See more properties and methods regarding `Document` under [Document](./classes/document/) and [Documents](./classes/documents).

### Layer
Represents a Layer, or a group of Layers. This object is tied to a particular [Document](#Document).

Decrease a layer's opacity and bring it to the front:
```javascript
const app = require('photoshop').app;
const doc = app.activeDocument;
function bringActiveLayerToFront(executionControl) {
  const layer = doc.activeLayers[0];
  layer.opacity = layer.opacity - 10;
  layer.bringToFront();
};

await require('photoshop').core.executeAsModal(bringActiveLayerToFront);
```

Scale down each layer whose name includes 'smaller'
```javascript
const app = require('photoshop').app;
const doc = app.activeDocument;
const layers = doc.layers;
async function scaleLayers(executionControl) {
  for (layer of layers) {
    if (layer.name.includes('smaller')) {
      await layer.scale(80, 80);
    }
  }
};

await require('photoshop').core.executeAsModal(scaleLayers);
```

Note that a layer's `kind` property can be `GROUP` for a Group layer (a layer or folder containing multiple layers). To access the layers in a Group layer, use the `layers` property, and the `parent` property to navigate the layer list tree.

See more properties and methods for `Layer` under [Layer](./classes/layer/) and [Layers](./classes/layers/).

### Actions and ActionSets
Many Photoshop users make heavy use of the `Actions` panel. Actions are essentially macros that can be recorded and played back to script commands and tools that you use frequently. Actions are grouped into `Action Sets`, similar to the way layers can be grouped into Group layers.

The Actions object allows you to delete, duplicate, rename, and play actions. There is no current way to *create* an action using UXP.

Similarly to Actions, the ActionSet object allows you to delete, duplicate, rename, and play Action Sets. There is no current way to *create* an Action Set.

Note that Actions and Action Sets exist app-wide; they're not tied to a specific Document.

Here's an example that finds a particular Action in the default Action Set, then plays it if it exists:

```javascript
const app = require('photoshop').app;
const allActionSets = app.actionTree;
const firstActionSet = allActionSets[0];
let actions = new Map(); // a JS Map allows easy "find by name" operations
firstActionSet.actions.forEach((action) => { actions.set(action.name, action)});
const myAction = actions.get("Wood Frame - 50 pixel");
if (myAction) { // user may have deleted this action
  async function playMyAction(executionControl) {
    await myAction.play();
  }
  await require('photoshop').core.executeAsModal(playMyAction);
}
```

See more properties and methods for `Action` under [Action](./classes/action/) and [ActionSet](./classes/actionset/)

### batchPlay

Photoshop is complex software, with many internal classes and methods. Not all of these are yet exposed via UXP. New interfaces are in development and will be shipped along with each release of Photoshop. In the meantime, if there is something your plugin needs to do that is not exposed in the current DOM, you may be able to use `batchPlay`.

BatchPlay is for accessing Photoshop functionality that has not yet been exposed via APIs. BatchPlay is a way to send multiple actions into the Photoshop event queue and return their results.

ExtendScript has `executeAction`; this is analagous to UXP's `batchPlay`. However, whereas `executeAction` could only play one descriptor at a time, `batchPlay` accepts an array of action descriptors. If you have multiple Photoshop operations that need to execute in series, using an array of action descriptors in a single `batchPlay` call is probably what you want.

Unlike ExtendScript where classes were provided to construct action descriptors, references and values, `batchPlay` accepts plain JSON objects.

The [batchPlay documentation](/ps_reference/media/batchplay/) contains details on how to construct JSON for `batchPlay` usage.
