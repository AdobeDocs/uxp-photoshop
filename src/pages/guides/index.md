---
title: Getting Started—UXP for Adobe Photoshop
description: Get started building your Photoshop plugin with the UXP Plugin API.
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

## The UXP Technology Stack

If you're coming to Photoshop development from Adobe XD, you might know all you need to know about UXP. But if you're brand-new to UXP, read on to learn how to build UXP plugins for Photoshop.

UXP provides a comprehensive extensibility solution, turning JavaScript and HTML markup into controls in native application windows. Unlike older CEP (Common Extensibility Platform) plugins, UXP plugins run within the same process as the host application, with their UI in its own non-blocking thread.

Also unlike CEP plugins, UXP plugins communicate natively with the host application; there is no boundary between JavaScript and ExtendScript that requires passing strings back and forth.

UXP plugins are built using JavaScript (aka ECMAScript), the scripting language of the Web. All but the simplest plugins also use HTML and CSS. The JavaScript engine is [V8](https://v8.dev), a modern implementation used in many popular browsers. This is in contrast to the engine used in ExtendScript, which is ECMA Edition 3 (about 20 years old). UXP supports all of ES5 and most of ES6 features, including arrow functions, async/await, etc.

Basically, a UXP plugin is running inside a pseudo-browser window, inside the host application (e.g., Photoshop). Even though UXP uses HTML, CSS, and JavaScript, its underlying engine is _not_ a full browser (unlike Chromium, which is used in CEP). This means that some HTML and CSS features that you may be used to in web development and CEP are not supported in UXP. Additionally, some JavasScript libraries and many JavaScript frameworks are not supported. An overview of what's supported and what's not in UXP is [here](../guides/uxp_guide/unsupported/). That page will change as UXP matures and additional functionality is added to its browser, so you might want to bookmark it.

Since UXP is a cross-application cross-platform technology, its API documentation starts [here](/uxp/reference-js/), and it applies to all Adobe applications that support UXP. Documentation for Photoshop-specific features that are exposed by UXP starts [here](../guides/ps_basics/).

## Key UXP Features

Independent of the host application API, UXP provides features of its own, including:

* File access - UXP can read and write files and folders in the user's filesystem. File accesses outside of the plugin's root folder, the plugin's data folder, and a plugin temporary folder require the user's permission. File I/O is discussed [here](./uxp_guide/uxp-misc/file-access/). 

* Network access - UXP supports XMLHttpRequest, WebSockets, and Fetch APIs. Network access is discussed [here](./uxp_guide/uxp-misc/network-io/).

* HTML and CSS - UXP supports a subset of HTML and CSS needed to develop plugin UIs.

* Spectrum CSS - UXP plugins can use platform-native HTML components such as buttons, input fields, etc. But a plugin can also use Spectrum CSS components.

* Debugging - UXP plugins can be debugged using the UXP Developer Tookit, [described here](./uxp-developer-tool/).

* Localization
If you want your plugins to be used internationally, you should localize them. [Here's how to localize your plugins](./uxp_guide/uxp-misc/localization-and-platforms/).

* Flyout menus
If you're writing a panel-based plugin, you have access to the flyout menu (shown at the top right of every panel). Flyout menus are [described here](./uxp_guide/uxp-misc/flyout-menus/).

## Setting Up for UXP Development

The first thing you'll want to do to start developing UXP plugins is to understand the development toolchain. [This page](./uxp_guide/uxp-toolchain/) explains describes the tools you'll need..