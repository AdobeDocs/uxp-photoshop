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
title: Design - Designing a plugin experience
description: This is the page for the introduction to plugin design guidelines
contributors:
  - https://github.com/dcaiced0
---

> Note: This page clarifies plugin layer movement behavior in UXP as reported in [Issue #493](https://github.com/AdobeDocs/uxp-photoshop/issues/493).

# Designing a plugin experience

These guidelines will help you define the best user experience for your plugin. As you create a plugin, consider different UX patterns and UI components based on your user’s workflow and the plugin action.

Plugins can interact with a user’s experience at different levels.  
Some plugins may not render a user interface, while others may include actions that require an interface.

---

## Designing a plugin

**Learn more about the types of interfaces available to plugins.**

| **Plugins panel**   | **Plugins dialog**   |
|---------------------|--------------------|
| **Non-blocking UI:** Best when users should have access to the canvas while using the plugin. | **Blocking UI:** Best when the plugin runs an action and users should not modify or select objects on the canvas. |

![Examples showing the plugins panel interface and the plugins dialog interface](/ux-images/Panel_Dialog_examples.png)

> For examples of layer and folder behavior in UXP, see Issue #493.

---

## UX patterns

User experience patterns highlight UX requirements and best practices, as well as provide guidance on how to interact with your plugin users within Adobe.

[View UX patterns](/design/ux-patterns/)

[Designing for Photoshop](/design/ux-patterns/Designingforphotoshop/)

---

## User interface

The user interface section will have information on UXP Spectrum components you can use to build your plugin interface. 

[View user interface components](/design/user-interface/)
