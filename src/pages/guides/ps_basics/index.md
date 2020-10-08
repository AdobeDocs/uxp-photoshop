---
title: Guides - Photoshop UXP Plugins
description: This is the guides overview page of Adobe UXP for Photoshop 
---

# Photoshop UXP Plugins

## The Basics
This section covers the basics of UXP in Photoshop. For the basics of UXP itself, see [Getting Started with UXP](../uxp-basics/index.md).

While generic UXP APIs work across applications that support UXP (such as Adobe XD as well as Photoshop), the APIs in this section are specific to Photoshop. As such, they affect Photoshop documents rather than changing your plugin's UI.

UXP exposes APIs for Photoshop at the same level in your plugin as your UI code. Unlike CEP plugins, UXP plugins do not have to serialize strings and send them back and forth between the UI code and the ExtendScript engine.

As of this writing, UXP in Photoshop is a work in progress, with some Photoshop functionality not yet exposed in the API. The current workaround, if you need some Photoshop function that is not in the API, is to use a feature called [batchPlay](./batchplay.md).

To start writing your plugin, first review the [UXP Toolchain](../uxp-basics/index.md). Then download the [UXP Developer Tool](../uxp-developer-tool/index.md). You can use that tool to create a plugin folder containing shell HTML, JavaScript, and other files needed. Edit these files, replacing the sample code with your code.

More detailed information about these APIs can be found in the [Photoshop API reference](../../api/ps-reference/index.md).

## Photoshop Objects
Every interaction with Photoshop is done via one of the objects below. Methods on the object allow you to get and set properties and access child objects. The objects are accessed through the `app` object, which exposes the Photoshop DOM. The objects currently implemented are:

### Photoshop
This is the top-level object, the root of the Photoshop DOM. From here, you can access open documents, tools, and UI elements as well as run commands or menu items.

### Document
A single, open, Photoshop document. From this object, you can access the document's layers, its dimensions, resolution, etc. You can crop it, add/delete/duplicate layers, resize, rotate, and save it.

### Layer
With this class, you can move layers around, create layers, link layers, and get the parent of a layer.

There is only one Layer class as of this writing. Ultimately, there will be subclasses for the different layer types.

### Action
The Actions object allows you to delete, duplicate, rename, and play actions. There is no current way to _create_ an action using UXP.

### ActionSet
Similarly to Actions, this object allows you to delete, duplicate, rename, and play Action Sets. There is no current way to create an Action Set.

## batchPlay
Not all objects and actions are exposed in the current Photoshop UXP API. For those that aren't, the workaround is to use [batchPlay](batchplay.md). With batchPlay, you construct a JSON structure telling Photoshop which actions to perform. Unlike the ExtendScript method ExecuteAction, batchPlay allows you to chain multiple actions together and execute them in sequence.
