---
id: "photoshop"
title: "Photoshop"
sidebar_label: "Photoshop"
repo: "uxp-photoshop"
product: "photoshop"
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
description: The top level application object, root of the Photoshop DOM
---

# Photoshop

The top level application object, root of the Photoshop DOM

```javascript
const {app} = require('photoshop');
```

From here you can access open documents, tools, UI elements and run commands or menu items.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| actionTree | [*ActionSet*](/ps-reference/classes/actionset.md)[] | R | 23.0 | Returns the action tree shown in Actions panel, as an array of ActionSets, each containing Actions. |
| activeDocument | [*Document*](/ps-reference/classes/document.md) | R W | 23.0 | The current document that has the application&#x27;s focus. |
| backgroundColor | [*SolidColor*](/ps-reference/classes/solidcolor.md) | R W | 23.0 | The background color and color style for documents. [(24.2)](/ps-reference/changelog/index.md#other-fixes) |
| currentTool | [*Tool*](/ps-reference/objects/tool.md) | R | 23.0 | Current selected tool. For now, the Tool class is an object with only an &#x60;id&#x60; field. In the future, we aim to provide tools with their own classes. |
| displayDialogs | [*DialogModes*](/ps-reference/modules/constants.md#dialogmodes) | R W | 23.0 | The dialog mode for the application, which controls what types of dialogs should be displayed when your code is interacting with Photoshop. |
| documents | [*Documents*](/ps-reference/classes/documents.md) | R | 23.0 | A list of the documents currently open. |
| fonts | [*TextFonts*](/ps-reference/classes/textfonts.md) | R | 23.0 | The fonts installed on this system. |
| foregroundColor | [*SolidColor*](/ps-reference/classes/solidcolor.md) | R W | 23.0 | The foreground color (used to paint, fill, and stroke selections). [(24.2)](/ps-reference/changelog/index.md#other-fixes) |
| preferences | [*Preferences*](/ps-reference/classes/preferences.md) | R | 24.0 | Contains Photoshop preferences grouped into several categories similar to the Preferences dialog. |
| typename | *string* | R | 23.0 | The class name of the referenced object: *&quot;Photoshop&quot;*. |

## Methods

### batchPlay
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.0\</span\>

*Promise*<ActionDescriptor[]\>

At the heart of all our APIs is batchPlay. It is the evolution of executeAction. It accepts
ActionDescriptors deserialized from JS objects, and can play multiple descriptors sequentially
without updating the UI. This API is subject to change and may be accessible in other ways in the future.

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | *any* |
| `options` | *any* |

<HorizontalLine />

### bringToFront
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.0\</span\>

*void*

Brings application to focus, useful when your script ends, or requires an input.

<HorizontalLine />

### convertUnits
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.4\</span\>

*number*

Convert the given value from one unit to another. Available units are:
Constants.Units.\{CM, MM, INCHES, PIXELS, POINTS, PICAS}.
Use [Document.resolution](/ps-reference/classes/document.md#resolution) when converting from or to PIXELS.
For example, use this routine for converting a document's width from pixels to inches.

```javascript
// convert the current document's width to inches
const exportDoc = psApp.activeDocument;
let widthInInches = psApp.convertUnits(exportDoc.width, 
                                       Constants.Units.PIXELS, 
                                       Constant.Units.INCHES, 
                                       exportDoc.resolution);

```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromValue` | *number* | The value that is to be converted. |
| `fromUnits` | [*Units*](/ps-reference/modules/constants.md#units) | The unit that the fromValue is in. Use [Constants.Units](/ps-reference/modules/constants.md#units) for valid values. |
| `toUnits` | [*Units*](/ps-reference/modules/constants.md#units) | The unit that the return value is in. Use [Constants.Units](/ps-reference/modules/constants.md#units) for valid values. |
| `resolution?` | *number* | The pixels per inch value to use when converting to and from pixel values. |

<HorizontalLine />

### createDocument
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.0\</span\>

**async** : *Promise*<[*Document*](/ps-reference/classes/document.md)\>

Create a new document.

No options will create a document of 7 x 5 inches at 300 pixels per inch.
This is the same as the "Default Photoshop Size" preset.

An object with a 'preset' string parameter can be used to specify any of
the other presets that come installed with Photoshop or created by users.

An object with one or more parameters can also be supplied. Any parameter
missing will be set to the default of: width 2100 pixels, height 1500 pixels,
resolution 300 pixels per inch, mode:
[RGB](../modules/constants.md#newdocumentmode), and a fill of white with
no transparency.

```javascript
// "Default Photoshop Size" 7x5 inches at 300ppi
let defaultDoc = await app.createDocument({
  preset: "Default Photoshop Size"
});

let transparentDoc = await app.createDocument({
  width: 800, 
  height: 600, 
  resolution: 300, 
  mode: "RGBColorMode", 
  fill: "transparent"
});

const redColor = new SolidColor();
redColor.rgb.green = 0;
redColor.rgb.blue = 0;
let fillColorDoc = await app.createDocument({
  mode: "RGBColorMode", 
  fillColor: redColor
});
```

Updates: [(26.9)](/ps-reference/changelog/index.md#photoshop-269-july-2025)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | [*DocumentCreateOptions*](/ps-reference/objects/createoptions/documentcreateoptions.md) | \{} | An object literal containing the option values. |

<HorizontalLine />

### getColorProfiles
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>24.1\</span\>

*string*[]

List of installed color profiles, for RGB and Gray modes.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorMode` | *string* | 'RGB' | Specify which color mode's profiles to list. (default: "RGB", options: "Gray") |

<HorizontalLine />

### open
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.0\</span\>

**async** : *Promise*<[*Document*](/ps-reference/classes/document.md)\>

Opens the specified document and returns the model

> *Note that this API requires a
[UXPFileEntry](../../uxp-api/reference-js/modules/uxp/persistent-file-storage/file.md)
object as its argument.

```javascript
// Open a file given entry
let entry = await require('uxp').storage.localFileSystem.getFileForOpening()
const document = await app.open(entry);

// Show open file dialog
const document = await app.open();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry?` | File |

<HorizontalLine />

### showAlert
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>23.0\</span\>

*Promise*<void\>

Shows an alert in Photoshop with the given message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | *string* |

<HorizontalLine />

### updateUI
\<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;"\>26.0\</span\>

**async** : *Promise*<void\>

Force an update to the following panels: Layers, Channels, and Paths.
The primary use case is within the handler function of a slider control.
Normally, the panels will not update until after the handle is released.
Note: this function will have no apparent effect outside of a tracking context like a slider handle.
Inside a plain loop (encapsulated in `executeAsModal`),
a slight pause can be used to demonstrate the need to refresh.
```javascript
    // Inside slider handler function.
    await app.activeDocument.createPixelLayer();
    await app.updateUI();
```
