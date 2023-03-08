---
title: UXP Scripting
description: Create your first UXP-powered script
contributors:
  - https://github.com/amandahuarng
---

# Overview

UXP scripting allows developers to execute a single file to accomplish tasks in Photoshop. Unlike ExtendScript, these scripts can utilize the [UXP](../uxp-api/) and [Photoshop](../ps_reference/) APIs to communicate with Photoshop.

## When are scripts useful?
Scripts are mainly used to perform one-off tasks that end-users would otherwise perform manually. It is especially useful when the task is repetitive in nature, such as adding a watermark to your documents. When a script is invoked by a user, it executes a task and is unloaded by Photoshop once it’s done. If required, a dialog can be used to prompt the user for inputs. Scripts can be executed in a headless manner or with minimal UI, without the need for any manifest setup.

The biggest advantage that scripting offers is its simplicity. You can accomplish tasks in Photoshop without requiring as elaborate of a setup as that of a UXP plugin.  Any script code can be reused in a UXP plugin as well.

## How is it different from UXP plugin development? 
1. **[Lifetime](../scripting/how-it-works/index.md#execution-context):** A script’s lifetime ends when it finishes executing.
2. **[Limited UI](../scripting/how-it-works/index.md#user-interface):** Unlike plugins, scripts cannot have a panel UI. They can only create dialog UIs.
3. **No persistent data:** Scripts also don’t have access to persistent storage like the plugin data folder or `window.localStorage`. 
4. **[Limited access to UXP modules](../scripting/how-it-works/index.md#permitted-uxp-modules):** Permissions to access UXP modules are managed by the host application and for now, only a limited number of modules are enabled. *We plan on enabling more modules with future versions.*
5. **No identity:** UXP scripts are not supported in our distribution channels yet. Once shared, any user can use them. Plugins on the other hand are tied to a plugin ID, and procured via the CCD plugin marketplace. 

## How is this different from ExtendScript scripting?

Legacy extensibility platforms supported scripting in ExtendScript. ExtendScript uses a very old version of JavaScript (ES3), while UXP uses the V8 JavaScript engine which supports ES6.  Developers can write scripts while utilizing the flexibility offered by modern JavaScript. 

Compared to ExtendScript, UXP scripting makes it much easier for developers to access the Photoshop DOM (thanks to the Photoshop API!). Until all significant features are available via UXP, you can use a feature called [**batchPlay**](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/batchplay/) to talk to Photoshop elements. 

