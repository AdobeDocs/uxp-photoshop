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
description: "Root of the API, accessed at require(\"photoshop\")"
---

# Objects

Root of the API, accessed at `require("photoshop")`

## Properties

### action

• **action**: *typeof* [*photoshopAction*](/ps-reference/media/photoshopaction.md)

The set of lower level APIs for interfacing with the action system, including `batchPlay`,
evolution of `executeAction`.

<HorizontalLine />

### app

• **app**: *typeof* [*Photoshop*](/ps-reference/classes/photoshop.md)

Root of the DOM, the `app` object where you can access application settings,
open documents and reach rest of the APIs.

<HorizontalLine />

### constants

• **constants**: [*Constants*](/ps-reference/modules/constants.md)

The different constants and enumerations that DOM APIs expect as certain parameters.

<HorizontalLine />

### core

• **core**: *typeof* [*photoshopCore*](/ps-reference/media/photoshopcore.md)

The set of lower level APIs for directly interfacing with Photoshop UI and user.
