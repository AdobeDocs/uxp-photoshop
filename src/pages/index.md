---
title: Overview - Adobe UXP for Photoshop
description: This is the overview page of Adobe UXP for Photoshop
contributors:
- https://github.com/simonwex
- https://github.com/chuckweger
---

<Hero slots="image, heading, text" background="rgb(64, 34, 138)"/>

![Hero image](./illustration.png) 

# Adobe UXP for Photoshop 

UXP (Unified Extensibility Platform) is the modern technology stack in which to build plugins for Photoshop and other Adobe Creative Cloud applications.<br/>This is the place to find out how developers can use UXP to build amazing Photoshop plugins.

<Resources slots="heading, links"/>

#### Resources

* [Photoshop UXP Examples in GitHub](./linktbd.md)

## Overview

This documentation set helps developers build plugins for Adobe Photoshop versions 22.0 and later. If you're building plugins for earlier versions of Photoshop, see the [CEP Getting Started Guides](https://github.com/Adobe-CEP/Getting-Started-guides).

UXP provides modern JavaScript, a curated selection of UI components, and a more streamlined workflow for plugin developers. With UXP, you can develop:

- Direct Actions - headless plugins that interface with Photoshop, the host OS, and the network, free of any UI.
- Modal Dialogs - plugins that implement one or more modal dialogs. Good for simple user interfaces that don't need to persist.
- Panels - full-featured panels that look like any other panel in Photoshop. UXP panels can contain as complex a UI as you wish to develop. They can be resized, docked, opened and closed just like native Photoshop panels.

> __IMPORTANT__
> 
> While this documentation set talks exclusively about UXP, earlier methods of controlling Photoshop, including CEP (Common Extensibility Platfor) and ExtendScript continue to be supported. You don't need to be in a mad rush to change everything over to UXP, although over time these earlier technologies will be deprecated and then removed from Photoshop.

## Discover 

<DiscoverBlock width="100%" slots="heading, link, text"/>

### Get Started

[Quickstart Guide](./guides/start-here/index.md)
    
Get started developing Photoshop UXP plugins.

<DiscoverBlock slots="heading, link, text"/> 

### UXP Documentation

[Getting Started with UXP](./guides/uxp-basics/index.md) 
     
Read this first to get started with UXP, then come back to learn about UXP in Photoshop.

<DiscoverBlock slots="link, text"/>

[UXP Reference](./api/uxp-reference/index.md) 

UXP components, methods for calling into the OS and network, and best practices.

<DiscoverBlock slots="link, text"/>

[Migrating from CEP and Extendscript](./guides/start-here/next-steps.md)

If you've written Photoshop plugins using CEP (Common Extensibility Platform), or just scripted Photoshop using ExtendScript and the ExtendScript Toolkit, here's how you can update your code so it works in UXP.   

<DiscoverBlock slots="link, text"/>

[UXP Developer Tool](./guides/uxp-developer-tool/index.md)

A single tool that creates a plugin shell for you, then lets you load the plugin in Photoshop and debug it.

### Photoshop API Documentation
<DiscoverBlock slots="link, text"/>

[Getting Started with Photoshop API for UXP](./guides/ps-basics/index.md)

A gentle introduction to UXP use in Photoshop.  

<DiscoverBlock width="100%" slots="heading, link, text"/>

### Photoshop API References

[The Photoshop UXP API](./api/ps-reference/index.md) 

The complete reference for Photoshop methods and objects as exposed to UXP

[batchPlay](./api/ps-reference/media/advanced/batchplay.md)

Designed to support Photoshop operations which are not yet exposed in the UXP API, batchPlay allows direct access to Photoshop's event queue.

## Contributing 

We encourage you to participate in our open documentation initiative, if you have suggestions, corrections, additions 
or deletions for this documentation, check out the source from [this github repo](./linktbd.md), and submit a pull 
request with your contribution. For more information, refer to the [contributing page](./support/contribute/index.md).