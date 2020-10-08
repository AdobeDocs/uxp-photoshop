---
title: Getting Started - UXP for Adobe Photoshop
description: This is the getting started page of UXP for Adobe Photoshop
contributors:
  - https://github.com/chuckweger
---

# Getting Started with UXP for Photoshop
## Welcome!
Welcome to the world of Adobe Photoshop and UXP (**U**nified **E**tensibility **P**latform)! UXP is the modern way to create plugins for Adobe Creative Cloud products, including Photoshop. 

There are a great many things you can do with UXP plugins to extend and enhance Photoshop, to integrate Photoshop with other services (either internal or on the Internet), and to automate workflows that would otherwise require tedious manual effort by a Photoshop user.

UXP plugins can be composed of:

* Zero or more `panels` (windows that persist in the host application)
* Zero or more `dialogs` (a modal window that closes when the user pushes a button)
* Zero or more `direct-action commands`, which have no interface whatsoever

Plugins can be used for quick workflow-like actions (say, nudge a layer by a configured # of pixels); in that case, perhaps no UI is required (unless an error occurs). A plugin could just be something that could mass rename layers -- in that case, you may want to show a dialog to allow the renaming to be configured, but that UI is not persistent (it goes away when the action is completed). Or, a plugin could have a complex panel UI that reacts to changes in the document (selection changes, tool changes, and so on).

OR, a plugin can provide all of those things.

## Types of Plugins

Direct-action (aka "headless") plugins are the easiest to write, followed by plugins with modal dialogs. Panels are like writing a full app: often you have to worry about state management, HTML/CSS issues, and so forth.

A plugin's dialogs and panels contain user interface elements (text fields, buttons, dropdowns, and so on) as well as code that drives Photoshop to do things such as create and modify documents, report on document properties, read and write files, and much more.

As of this writing, UXP is supported in Adobe XD and Adobe Photoshop, with support for more Creative Cloud applications in the pipeline. The long-term goal is to integrate UXP with most Creative Cloud applications, so that developers will have one common kit that works across platforms and applications. Learning UXP now will prepare you to use it with other Creative Cloud Applications.

You'll find everything you need to get started with UXP for Photoshop on this site.

## Other ways to extend Photoshop

Although UXP is new to Photoshop, it is the future for plugin development for Photoshop and other Creative Cloud applications. But that does _not_ mean that other ways of extending Photoshop are going away in the near future.

* [ExtendScript](https://www.adobe.com/devnet/photoshop/scripting.html) has been around for a long time, and will continue to function as UXP evolves. Even though the ExtendScript Toolkit IDE is no longer maintained (due to its 32-bit nature), you can develope ExtendScripts using the [Visual Studio plugin for ExtendScript](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug).
* The [Common Extensibility Platform](https://www.adobe.io/apis/creativecloud/cep.html), introduced as a way of extending Creative Suite applications, will also continue to be supported.
* [Plugins using native C++](https://www.adobe.com/devnet/photoshop/sdk.html) will also continue to function, although the use case for this type of add-on continues to diminish as the scripting capabilities of Photoshop grow.