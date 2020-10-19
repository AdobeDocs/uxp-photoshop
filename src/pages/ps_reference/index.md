---
title: Photoshop API—UXP for Adobe Photoshop
description: Learn about the Photoshop API that is exposed through UXP for plugin developers.
---


# Photoshop API

## Introduction

With the introduction of Unified Extensibility Platform (UXP), Photoshop now runs a JavaScript engine powered by V8. UXP provides a truly native extensibility solution in Photoshop by rendering HTML markup into native controls. Plugins run within the same process, and communicate with the Photoshop DOM asynchronously, allowing the UI to run on its own thread. 

## Usage

The API library is built into every build of Photoshop. To use the APIs in your UXP plugin, all you have to do is a simple require. The `app` object exposed in the module gives you entry point into the rest of the DOM.

### An example script 

A script that deletes the top most layer in the currently active document may look like this:

```javascript
let layerTree = require('photoshop').app.activeDocument.layerTree
layerTree[0].delete()
```

## API Usability

The Photoshop API provides two layers of usability. The main layer, accessed through the `app` object provides you with stateful JS models that represent Photoshop and its models. This layer will be familiar to those who have used the ExtendScript DOM.

Underneath, Photoshop exposes `batchPlay`, which takes an array of JSON objects (`ActionDescriptors`), and injects the described actions into Photoshop event system. If you're familiar with ExtendScript or CEP, batchPlay is the evolution of `executeAction` and `executeActionGet`. 

With our DOM APIs, our motivation is to abstract away `batchPlay` completely, but it's still there if you'd like to use it.

## Asynchrony vs Synchrony

In ExtendScript, all DOM methods were synchronous, and would also block the UI. With UXP, the calls made into Photoshop can either be asynchronous
or synchronous. The DOM APIs are designed to be synchronous where it makes sense, and asynchronous for more expensive operations.

The rule of thumb is that properties of models are synchronous. Methods affecting the models, particularly ones that create new models are, in general, asynchronous.