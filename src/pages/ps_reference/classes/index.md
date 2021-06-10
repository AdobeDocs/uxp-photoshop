---
id: "objects"
title: "objects"
sidebar_label: "objects"
---

# Objects

Root of the API, accessed at require("photoshop")

## Properties

### action

• **action**: PhotoshopAction

The set of lower level APIs for interfacing with the action system, including `batchPlay`,
evolution of `executeAction`

___

### app

• **app**: [*Photoshop*](/ps_reference/classes/Photoshop/)

Root of the DOM, the `app` object where you can access application settings,
open documents and reach rest of the APIs

___

### constants

• **constants**: [*Constants*](/ps_reference/modules/Constants/)

The different constants and enumerations that DOM APIs expect as certain parameters

___

### core

• **core**: PhotoshopCore

The set of lower level APIs for directly interfacing with Photoshop UI and user
