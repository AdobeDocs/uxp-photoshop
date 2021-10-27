---
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
title: UXP for XD Developers
description:
---

# UXP in Photoshop vs Other Creative Cloud Applications

As of this writing, the only other Creative Cloud application that supports UXP is [Adobe XD](https://adobexdplatform.com). Here are the main differences between UXP in Photoshop and UXP in XD.

## Manifest JSON
The manifest.json file used in XD plugins before version 34 is version 3.x, which differs from the manifests used in Photoshop UXP (version 4.x and later) in a number of ways. In XD versions 35 and later, the manifest versions are the same.

So if you have an XD plugin that you are porting to Photoshop, make sure to look at the current structure of the [manifest.json](/guides/uxp_guide/uxp-misc/manifest-v4/) file.

## Host Application API
Obviously Photoshop and XD are very different applications and, as such, they expose very different DOMs and APIs. Additionally, Photoshop has a large number of different use cases, each with its own kind of objects and properties; it's a much more complex application than XD.

As of this writing, the [Photoshop API](/guides/ps_basics/) is less mature than what's available in XD, but this is changing rapidly with each Photoshop release. Until the Photoshop API surface is complete for every object of interest, you can use an interface called [batchPlay](/guides/ps_basics/batchplay_intro/) to get to objects, properties, and actions that are not yet exposed to UXP directly.