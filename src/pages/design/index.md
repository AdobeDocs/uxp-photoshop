---
title: Design - Desiging for Photoshop
description: This is the page for Photoshop pliugin design guidelines
contributors:
  - https://github.com/dcaiced0
---
# Designing for Photoshop

This section will cover the different interfaces in Photoshop available to plugins. This includes specs, guidance around when and how to use the different interfaces and high level UX patterns that exist in Photoshop. 

<Resources slots="heading, links"/>

* [Overview](link)
* [Plugins Panel (non-blocking UI)](link)
* [Plugins Dialog (blocking UI)](link)
* [Themes and Icons](link)
* [UX Requirements](link)


----------
 <br />

## Overview

There are two interface’s available to plugins in Photoshop, blocking UI (Dialog UI) and non-blocking UI (Panel UI).  The Plugin Launch Pad in Photoshop will let users view the list of their installed plugins and open a plugin right from their workspace. 

![Photoshop Plugin interfaces](./ux-images/pluginsinphotoshop.png)

## Plugins Panel (non-blocking UI)

This section has recommendations when using a Plugins Panel - Non-Blocking UI in Photoshop. If the user needs to have access to the canvas, the plugin panel is the best option, since it’s contextual to the user’s selection and allows the user to modify items on their canvas while interacting with the plugin. 

![Photoshop Plugin interfaces](./ux-images/Photoshop_panel.png)

**Panel UI - Specs**

MacOS example

![Photoshop Plugin Panel Specs](./ux-images/photoshoppanelspecs.png)

Example

![Photoshop Plugin Panel Example](./ux-images/pspluginexample.png)

**Plugin Launch Pad**

Plugin launch pad and active submenu examples

![Photoshop Plugin Lauch Pad](./ux-images/pspluginlaunchpad.png)


## Plugins Dialog (blocking UI)

This section has recommendations when using a Plugins Dialog - Blocking UI in Photoshop. This interface is best used when the plugin needs to run an action and the user doesn’t need to modify or change selection of objects on the canvas.

For more guidance on “Dialog” best practices reference [Spectrum guidelines](spectrum.adobe.com/page/dialog)

![Plugin Dialog Specs](./ux-images/plugindialogspecs.png)

**Panel UI - Specs**

Example

![Plugin Dialog example](./ux-images/plugindialogexample.png)


## Themes and Icons

Photoshop has different interface themes end-users can choose from. Consider the different themes when designing the plugin UI.[Spectrum guidelines](Link)support themes.

**Panel UI - Specs**

Lightest and Light Themes

![Photoshop light and lightest themes](./ux-images/lightThemes.png)

Dark and Darkest Themes

![Photoshop Dark and Darkest themes](./ux-images/darkThemes.png)


**Photoshop Icon Guidelines**

This icon is shown when plugin is docked/undocked in the Photoshop application frame. There are a few things to consider when designing an icon for a panel plugin in Photoshop; the color of your icon and themes, icon size, padding and background.

[Download the plugin icon template](Link)

![Photoshop Plugin icon example](./ux-images/psiconexample.png)

![Photoshop Plugin icon specs](./ux-images/psiconspecs.png)

Since Photoshop uses themes, make sure there is enough contrast in the different Photoshop themes, or include at least light and dark versions of your icon. Here are some examples of monochromatic icons to support light and dark themes. Button states the icon will have a unselected, hover and selected states

![Photoshop Plugin icon guidelines](./ux-images/psiconguidelines.png)

