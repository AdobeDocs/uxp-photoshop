---
id: "index"
title: "Photoshop JS API"
sidebar_label: "README"
---

# PLEASE NOTE

> Our APIs are a work in progress, and a labor of love. We want to include all stakeholders from the start, so we are publishing these documents as a way to gather feedback. **They are not final, and are subject to change.** Limitations, missing APIs, and capabilities should not be viewed as representative of what will be possible when these APIs are released. Furthermore, these APIs and the underlying platform will continue to evolve _after_ release.
>
> This is the documentation for iteration 0.5.0 of our APIs, where we are still settling on the architecture.
>
> If you are interested in joining the discussion, please fill out our [Developer Interest Survey](https://adobe.allegiancetech.com/cgi-bin/qwebcorporate.dll?73T3AX)

## Introduction

With the introduction of Unified Extensibility Platform (UXP), Photoshop now runs a JavaScript engine powered by V8. UXP provides a truly native extensibility solution in Photoshop by rendering HTML markup into native controls. Extensions run within the same process, communicate with the Photoshop DOM asynchronously allowing the UI to run on its own thread. 

We provide UXP extensions with a new API that allows you to interact with Photoshop DOM, accessing all available functionality and models. On this page, we will provide documentation around all APIs, and sample code on how to use them.

## Usage

We bundle our API library into every build of Photoshop. To use them in your UXP extension, all you have to do is a simple require. The `app` object exposed in the module gives you entry point into the rest of the DOM.

### An example script 

A script that deletes the top most layer in the currently active document may look like this:

```javascript
let topLayer = require('photoshop').app.activeDocument.layerTree

layerTree[0].delete()
```

## User Interface

In UXP, you will be able to expose your extensions either as panels (a la CEP) or bring up modal dialogs to gather user input (ExtendScript).

Note: We are exploring the options around offering a scripting environment (similar to running .jsx files). More info to come.

## Design

Our API provides two layers of usability. The main layer, accessed through the `app` object provides you with stateful JS models that represent Photoshop and it's models. This layer will be familiar to those who have used ExtendScript DOM.

Underneath, Photoshop exposes `batchPlay`, which takes an array of JSON objects (`ActionDescriptors`), and injects the described actions into Photoshop event system. If you're familiar with ExtendScript or CEP, batchPlay is the evolution of `executeAction` and `executeActionGet`. 

The second layer will provide pure functions around creating the said `ActionDescriptors`, which can all be fed to `batchPlay`. This more advanced technique will allow you to write more performant code at the cost of managing state yourself. This layer is still under construction.

Internally, we have been using `batchPlay` in features like Learn Panel, and even our automation testing. While very powerful, this API requires knowledge of Photoshop codebase to use effectively. 

With these DOM APIs, our motivation is to abstract away `batchPlay` completely, but it's still there if you'd like to use it and the descriptor layer should help make it easier to use.

### Asynchrony vs Synchrony

In ExtendScript, all DOM methods were synchronous, and would also block the UI. With UXP, the calls made into Photoshop can either be asynchronous
or synchronous. We are designing our DOM APIs very carefully to be synchronous where it makes sense, and asynchronous for more expensive operations.

Our rule of thumb, for now, is that properties of models are synchronous. Methods affecting the models, particularly ones that create new models
will be asynchronous.

We hope that our APIs are simple enough that this will not be a big learning curve.
