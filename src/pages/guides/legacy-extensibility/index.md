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
title: Legacy Extensibility - Photoshop UXP Plugins
description: This is the overview page of previous extensibility platforms on Photoshop
---

# Legacy Extensibility

While UXP is the recommended platform for all plugin developers to build on, Photoshop 2022 continues to support legacy extensibility features.

## ExtendScript

The UXP [Photoshop DOM API](../../ps_reference/) aims to be the evolution of the [ExtendScript](https://www.adobe.com/devnet/photoshop/scripting.html) DOM. There are currently no plans to remove ExtendScript support from Photoshop.

Even though the ExtendScript Toolkit IDE is no longer maintained due to its reliance on 32-bit architectures, you can develop ExtendScripts using the [Visual Studio plugin for ExtendScript](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug).

ExtendScript developers wishing to migrate their plugins onto the UXP platform should consult the [UXP for ExtendScript Developers](./uxp_for_you/uxp_for_extendscript_devs).


## CEP (Common Extensibility Platform)

The [Common Extensibility Platform](https://www.adobe.io/apis/creativecloud/cep.html), introduced as a way of extending Creative Suite applications, will continue to be supported in Photoshop.

CEP developers wishing to migrate their plugins onto the UXP platform should consult the [UXP for CEP Developers](./uxp_for_you/uxp_for_cep_devs).


## Native C++ Plugins

[Plugins using native C++](https://www.adobe.com/devnet/photoshop/sdk.html) are an important part of the Photoshop extensibility ecosystem and will continue to be supported.

A communication bridge suite was created to allow C++ plugins running under Photoshop to communicate with UXP plugins. See [Communication with C++ Plugin SDK](../ps_reference/media/cpp-pluginsdk).
