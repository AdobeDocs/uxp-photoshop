---
title: Guides - Photoshop UXP Plugins
description: This is the guides overview page of the Adobe Photoshop API for UXP
---

# Photoshop UXP Plugins

## The Basics
This section covers the basics of UXP in Photoshop. For the basics of UXP itself, see [Getting Started with UXP](/guides/). For the full API for Photoshop, see the [Photoshop API pages](/ps_reference/).

While generic UXP APIs work across applications that support UXP (such as Adobe XD as well as Photoshop), the APIs in this section are specific to Photoshop. As such, they affect Photoshop documents rather than changing your plugin's UI, accessing the file system, and other non-Photoshop operations.

UXP exposes APIs for Photoshop at the same level in your plugin as your UI code. Unlike CEP plugins, UXP plugins do not have to serialize strings and send them back and forth between the UI code and the ExtendScript engine. This removes a substantial barrier to rapid development and debugging.

As of this writing, UXP in Photoshop is a work in progress, with some Photoshop functionality not yet exposed in the API. The workaround if you need some Photoshop function that is not in the API is to use a feature called [batchPlay](batchplay_intro/).

To start writing your plugin, first review the [UXP Toolchain](../uxp_guide/uxp-toolchain/). Then download the [UXP Developer Tool](../uxp-developer-tool/). You can use that tool to create a plugin folder containing basic scaffolding for HTML, JavaScript, and other required files. Edit these files, replacing the sample code with your code.

More detailed information about these APIs can be found in the [Photoshop API reference](/ps_reference/).

## Synchronous vs Asynchronous Methods

An important difference between ExtendScript (and CEP) and UXP in Photoshop is that all ExtendScript calls to Photoshop were synchronous. This means they blocked the Photoshop UI while they were executing. In UXP, a method call can be synchronous or *asynchronous*, i.e., non-blocking.

Asynchronous operations are typically used for methods that can take a long time (e.g., creating a document). Simpler operations, such as getting properties of an object, are typically synchronous.

## Photoshop Objects

Every interaction with Photoshop is done via one of the objects below. Methods on the object allow you to get and set properties and access child objects. 

Most objects are accessed through the `app` object, which exposes the Photoshop DOM. The objects currently implemented are:

### Photoshop Application
This is the top-level object, the root of the Photoshop DOM. From here, you can access open documents, tools, and UI elements as well as run commands or menu items. To get access to this object, use:

```js
const app = require('photoshop').app;
```

Through the `app` object you've just created, you can access Photoshop's objects and methods. For example, the currently-active document is obtained like this:

```js
const app = require('photoshop').app;
const doc = app.activeDocument;
```

And you can get an array of all open documents like this:

```js
const app = require('photoshop').app;
const allDocuments = app.documents;
```

Creating a document is also straightforward:

```js
const app = require('photoshop').app;
let myDoc = await app.createDocument(); // creates a document with default settings

// You can also add some document properties while you're creating a document:
let myDoc = await app.createDocument({width: 1200, height: 800,
  resolution: 300, mode: 'CMYKColorMode', 
  name: 'hello world', fill: 'transparent'});
```

Note that, since `createDocument` is an expensive operation, you need to use `await` (or .`then`) to wait for its completion.

Finally, the `app` object also exposes a method for opening a document. UXP does not allow arbitrary access to the local filesystem; for any file outside of your plugin's home folder, data folder, or temp folder, you must ask the user for access by presenting a (built into UXP) dialog.

```js
const app = require('photoshop').app;
let entry = await require('uxp').storage.localFileSystem.getFileForOpening();
const document = await app.open(entry);
```

See the reference for more methods and properties of the `app` object. But here's one final very useful method: to show a simple alert, use this code:

```js
const app = require('photoshop').app;
await app.showAlert('There's no business like show business');
```

### Document
A single, open, Photoshop document. From this object, you can access the document's layers, its dimensions, resolution, etc. You can crop it, add/delete/duplicate layers, resize, rotate, and save it.

For example, to get the dimensions of the active document:

```js
const app = require('photoshop').app;
const myDoc = app.activeDocument;
const docHeight = myDoc.height;
const docWidth = myDoc.width;
const docResolution = myDoc.resolution;
await app.showAlert(`Doc size is ${docWidth} x ${docHeight}. Resolution is ${docResolution}`);
```

To get an array of all layers in a document, use code like this:

```js
const app = require('photoshop').app;
const myDoc = app.activeDocument;
const docLayers = myDoc.layers; // returns an array of layer objects
```
A layer in that list includes a number of properties, including layer name, parent, whether it's locked or not, etc.

And to create a layer, do this:
```js
const app = require('photoshop').app;
const myDoc = app.activeDocument;
const myLayer = await myDoc.createLayer({name:'hello layer'});
```

Other methods available in the `document` object include merging and grouping layers, flattening, saving, closing, resizing, and rotating.

### Layer

With this class, you can delete and duplicate layers, move them around, link them, rotate them, scale/skew them, and get their parent (but not their children).

There is only one Layer class as of this writing. Ultimately, there will be subclasses for the different layer types.

For a full discussion of the `layer` class, see the [API Reference](/ps_reference/). Here's an example of how to scale a layer named "foo":

```js
 const app = require('photoshop').app;
  const myDoc = app.activeDocument;
  const docLayers = myDoc.layers;
  // there's no "getLayerByName" method, so we loop until we find the layer:
  for (let i=0; i< docLayers.length; i++) {
    if (docLayers[i].name == 'foo') {
      await docLayers[i].scale(50, 50);
    }
  }
```

### Actions and ActionSets
Many Photoshop users make heavy use of the `Actions` panel. Actions are basically macros that you can record and play back to script commands and tools that you use frequently. Actions are grouped into `Action Sets`, similarly to the way layers can be grouped into Layer Sets.

 The Actions object allows you to delete, duplicate, rename, and play actions. There is no current way to *create* an action using UXP.

Similarly to Actions, the ActionSet object allows you to delete, duplicate, rename, and play Action Sets. There is no current way to *create* an Action Set.

Note that Actions and Action Sets exist app-wide; they're not tied to a specific Document.

Here's an example that finds a particular Action in the default Action Set, then plays it if it exists:

```js
  const app = require('photoshop').app;
  const allActionSets = app.actionTree;
  const firstActionSet = allActionSets[0];
  let actions = new Map(); // a JS Map allows easy "find by name" operations
  firstActionSet.actions.forEach((action) => { actions.set(action.name, action)});
  const myAction = actions.get("Wood Frame - 50 pixel");
  if (myAction) { // user may have deleted this action
    await myAction.play();
  }
```
Again, for more information about these operations, see the [API Reference](/ps_reference/).

## batchPlay
Not all objects and actions are exposed in the current Photoshop UXP API. For those that aren't, the workaround is to use [batchPlay](batchplay_intro). With batchPlay, you construct a JSON structure telling Photoshop which actions to perform. Unlike the ExtendScript method ExecuteAction, batchPlay allows you to chain multiple actions together and execute them in sequence.
