---
keywords:
  - UXP Hybrid
  - Hybrid
  - C++
title: Adobe UXP Hybrid plugin
description: A UXP Hybrid plugin is a UXP plugin combined with the power of C++ native libraries. 
contributors:
  - https://github.com/padmkris123
---

# UXP Hybrid plugin

A UXP Hybrid plugin is a UXP plugin combined with the power of C++ native libraries. 

Take advantage of more performant C++ code to enhance your plugins. For instance, you can expand the capabilities of your plugin to
- Execute computation-intensive tasks
- Integrate with existing external pipelines, processes, and executables
- Make use of other popular libraries such as OpenCV

In order to write a Hybrid plugin, you must be proficient in C++. Consider this to be an advanced topic, so make sure you have

- Experience in writing [UXP plugins](../getting-started/creating-your-first-plugin/)
- Experience with [UDT (UXP Developer tool)](../devtool/)

## UXP Hybrid plugin vs Photoshop C++ plugins

A UXP hybrid plugin should not be confused with a Photoshop C++ plugin [built using the C++ SDK](../../ps_reference/media/cpp-pluginsdk/). 

What you choose depends upon your use case. For example, if you wish to build a Photoshop filter that appears under the Filter menu or implement a new file type, you probably should create a C++ plugin using PS CSDK. But opt for UXP Hybrid plugins if you want to write generic C++ code alongside JavaScript.

We have opened the pathway to allow a .uxpaddon to [utilize the Photoshop C++ SDK](./getting-started/index.md#photoshop-c-sdk).  In this way, you create a compiled filter and bundle it with a UXP dialog to control it.  Bear in mind that the filter in this example would only be known to the UXP hybrid plugin.

## Minimum Version Requirements

In order to build and test your plugins, you will need at least `Photoshop v24.2.0` and `UDT v1.7.0`. To publish and distribute your plugin, `Adobe Creative Cloud Desktop v5.10` is required.

## Releases

The SDKs are labeled with a UXP version, as the UXP hybrid plugin SDK is designed to be app-independent. In the future, you will be able to use the same SDK to build plugins for other UXP-based applications.

Announcements of new SDK releases will be made in the [Changelog section](../../ps_reference/changelog). Keep in mind that updating to a new SDK version will require recompiling and republishing your plugin, and may also include changes to the minimum host app version supported. Be sure to read the instructions carefully.

However, if you choose not to use the new SDK, your plugin built with an older version of the SDK will still be forward-compatible and will continue to work in newer versions of the host application.