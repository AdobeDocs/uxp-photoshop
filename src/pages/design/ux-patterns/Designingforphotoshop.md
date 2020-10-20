---
title: Design - Designing for Photoshop
description: This is the page for Photoshop plugin design guidelines
contributors:
  - https://github.com/dcaiced0
---

# Designing for Photoshop

This section will cover the different interfaces in Photoshop available to plugins. This includes specs, guidance around when and how to use the different interfaces and high level UX patterns that exist in Photoshop. 

 * Overview
 * Plugins Panel (non-blocking UI)
 * Plugins Dialog (blocking UI)
 * Themes and Icons
 * UX Best Practices

## Overview

There are two interfaces available to plugins in Photoshop: blocking UI (Dialog UI) and non-blocking UI (Panel UI).  The Plugin Launch Pad in Photoshop will let users view the list of their installed plugins and open a plugin right from their workspace. 

![Photoshop Plugin interfaces](../ux-images/pluginsinphotoshop.png)

## Plugins Panel (non-blocking UI)

This section has recommendations when using a Plugins Panel - Non-Blocking UI in Photoshop. If the user needs to have access to the canvas, the plugin panel is the best option, since it’s contextual to the user’s selection and allows the user to modify items on their canvas while interacting with the plugin. 

![Photoshop Plugin interfaces](../ux-images/Photoshop_panel.png)

**Panel UI - Specs**

MacOS example

![Photoshop Plugin Panel Specs](../ux-images/photoshoppanelspecs.png)

Example

![Photoshop Plugin Panel Example](../ux-images/pspluginexample.png)

**Plugin Launch Pad**

In the Plugin Launch Pad your plugin icon and name will be shown in the list of other plugins the user has installed. If the plugin has a submenu with multiple commands then the submenu labels should let users know what the each command does. 

![Photoshop Plugin Lauch Pad](../ux-images/pspluginlaunchpad.png)


## Plugins Dialog (blocking UI)

This section has recommendations when using a Plugins Dialog - Blocking UI in Photoshop. This interface is best used when the plugin needs to run an action and the user doesn’t need to modify or change selection of objects on the canvas.

For more guidance on “Dialog” best practices reference [Spectrum guidelines](spectrum.adobe.com/page/dialog)

![Plugin Dialog Specs](../ux-images/plugindialogspecs.png)

**Panel UI - Specs**

Example

![Plugin Dialog example](../ux-images/plugindialogexample.png)


## Themes and Icons

Photoshop has different interface themes users can choose from. Ensure your plugin supports the different themes when designing the plugin UI. The [UXP User Interface Spectrum Components](../user-interface/index/) support themes.

**Panel UI - Specs**

Lightest and Light Themes

![Photoshop light and lightest themes](../ux-images/lightThemes.png)

Dark and Darkest Themes

![Photoshop Dark and Darkest themes](../ux-images/darkThemes.png)


**Photoshop Icon Guidelines**

This icon is shown when plugin is docked/undocked in the Photoshop application frame. There are a few things to consider when designing an icon for a panel plugin in Photoshop; the color of your icon and themes, icon size, padding and background.

![Photoshop Plugin icon example](../ux-images/psiconexample.png)
![Photoshop Plugin icon specs](../ux-images/psiconspecs.png)

Since Photoshop uses themes, make sure there is enough contrast in the different Photoshop themes, or include at least light and dark versions of your icon. Here are some examples of monochromatic icons to support light and dark themes. Button states the icon will have a unselected, hover and selected states

![Photoshop Plugin icon guidelines](../ux-images/psiconguidelines.png)
![Photoshop Plugin icon Do's and Don'ts](../ux-images/psicondosdonts.png)

## UX Best Practices

**Avoid using minimum fixed widths larger than 240px**

Plugin panels in Photoshop can be docked within other panels. Having a fixed width larger than 240 px can create workspace issues for users. Allowing the user to resize the width and height of the plugin panel can create a better user experience for users interacting with your plugin within Photoshop.

![Photoshop large fixed widths Do](../ux-images/pslargewidtdo.png)
![Photoshop large fixed widths Don't](../ux-images/pslargewidthdont.png)

**Placing image object into document**

It’s preferable to lead users towards a non-destructive path whenever possible. For example, if the plugin is adding a new image layer the recommendation is to place it as an embedded Smart Object. That way, the original pixels are protected and accessible even after the user makes edits to the layer.

![Photoshop placing an object Do](../ux-images/psplaceobjectdo.png)
![Photoshop placing an object Don't](../ux-images/psplaceobjectdont.png)

**Contextual Actions and Photoshop Tools**

When the plugin needs a tool to be selected by the user to continue with the plugin workflow, provide contextual feedback on the plugin UI to let the user know or allow the user to open the photoshop tool from the plugin UI. For example if the user needs to change the color, provide them with an action to launch the photoshop Color Picker from the plugin UI.

![Photoshop contextual tool Do](../ux-images/pscontextualtoolsDo.png)
![Photoshop contextual tool Don't](../ux-images/pscontextualtoolsDont.png)