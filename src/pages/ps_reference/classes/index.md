---
id: "objects"
title: "Objects"
sidebar_label: "Objects"
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

# Objects

Root of the API, accessed at `require("photoshop")`

## Properties

### action

• **action**: *typeof* [*photoshopAction*](/ps_reference/media/photoshopaction/)

The set of lower level APIs for interfacing with the action system, including `batchPlay`,
evolution of `executeAction`

___

### app

• **app**: *typeof* [*Photoshop*](/ps_reference/classes/photoshop/)

Root of the DOM, the `app` object where you can access application settings,
open documents and reach rest of the APIs

___

### constants

• **constants**: [*Constants*](/ps_reference/modules/constants/)

The different constants and enumerations that DOM APIs expect as certain parameters

___

### core

• **core**: *typeof* [*photoshopCore*](/ps_reference/media/photoshopcore/)

The set of lower level APIs for directly interfacing with Photoshop UI and user
