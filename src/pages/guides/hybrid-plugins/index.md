# UXP Hybrid plugin

A UXP Hybrid plugin is a UXP plugin combined with the power of C++ native libraries. 

Take advantage of more performant C++ code to enhance your plugins. For instance, you can expand the capabilities of your plugin to
- Execute computation-intensive tasks
- Integrate with existing external pipelines, processes, and executables
- More securely distribute trade secret code in a compiled format
- Make use of other popular libraries such as OpenCV

In order to write a Hybrid plugin, you must be proficient in C++. Consider this to be an advanced topic, so make sure you have

- Experience in writing [UXP plugins](../getting-started/creating-your-first-plugin/)
- Experience with [UDT (UXP Developer tool)](../devtool/) for loading/testing UXP plugins

## UXP Hybrid plugin vs Photoshop C++ plugins

A UXP hybrid plugin should not be confused with the [Photoshop C++ plugin built using CSDK](../../ps_reference/media/cpp-pluginsdk/). In a Photoshop C++ plugin, the UI (JavaScript) and C++ code reside in two separate plugins. But a UXP hybrid plugin allows you to bundle all the code within a single .ccx package.

What you choose also depends upon your use case. For example, if you wish to build a Photoshop filter that appears under the Filter menu or implement a new file type, you probably should create a C++ plugin using PS CSDK. But opt for UXP Hybrid plugins if you want to write generic C++ code alongside JavaScript.

We are exploring ways to integrate the two types in the future. Lookout for updates in our [forums and newsletters](https://www.adobe.com/subscription/ccdevnewsletter.html)

## Minimum Version Requirements

You will require at least `Photoshop v24.2.0` and `UDT v1.7.0` to build, test, and distribute your plugins.
