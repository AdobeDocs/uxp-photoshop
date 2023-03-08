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
title: Getting Started—UXP for Adobe Photoshop
description: Get started building your Photoshop plugin with the UXP Plugin API.
---

# Getting Started with UXP for Photoshop

## Hello World

Building your first UXP plugin requires two pieces of software, both of which can be installed via [Adobe Creative Cloud Desktop](https://www.adobe.com/creativecloud/desktop-app.html) - the latest version of Photoshop, and the [UXP Developer Tool](./devtool/installation/).

To get started, we suggest following these tutorials to get your hands dirty and get started with building UXP plugins for Photoshop:

1. [Creating your first plugin](./getting-started/creating-your-first-plugin/index.md)
2. [Editing the document](./getting-started/editing-the-document/index.md)
3. [Writing a file with UXP](./getting-started/writing-a-file/index.md)

## Important resources

### The Basics

- [The UXP manifest](./uxp_guide/uxp-misc/manifest-v4/): Essential to tailoring your UXP plugin.
- [UXP Developer Tool Walkthrough](./devtool/udt-walkthrough/): Learn how to create a plugin from a sample, load and debug it on Photoshop.
- [The intro to the Photoshop API](../ps_reference/): Explore what is offered in the form of the DOM API, the successor to ExtendScript.
- [Spectrum UI reference](../uxp-api/reference-spectrum/User%20Interface/): UXP provides a smaller set of elements that you should be aware of, before creating UI.

### Must Reads

- [UXP API reference](../uxp-api/): The UXP platform offers many, but not all capabilities of a web browser. Learn about what could be familiar, and what is different.
- [Modal Execution in Photoshop](../ps_reference/media/executeasmodal/): A new paradigm for building performant and resilient plugins. If you are building plugins that modifies the users' document, this is an essential read.
- [Photoshop manifest](./uxp_guide/uxp-misc/manifest-v4/photoshop-manifest/): An addendum to `manifest.json`. For Adobe Photoshop 2022, you will need to be aware of potential breaking changes related to Modal Execution.

<InlineAlert variant="info" slots="text"/>

Got a question? The Adobe [Creative Cloud Developer Forums](https://forums.creativeclouddeveloper.com/) is a great resource for answers!

## Explore

### Plugin Samples

We've collected a few samples that cover a lot of ground. They may contain code that you need to solve that one frustrating bug! Download and view [Code Samples](./code_samples/).

### Design guides

If your plugin contains a visual element, you may want to view our [Design Guides](../design/) to ensure your users have the best experience.
