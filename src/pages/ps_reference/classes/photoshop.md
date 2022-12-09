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
---

# Photoshop

The top level application object, root of the Photoshop DOM

```
const app = require('photoshop').app
```

From here you can access open documents, tools, UI elements and run commands or menu items.

## Properties

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| actionTree | [*ActionSet*](/ps_reference/classes/actionset/)[] | R | 23.0 | Returns the action tree shown in Actions panel, as an array of ActionSets, each containing Actions. |
| activeDocument | [*Document*](/ps_reference/classes/document/) | R W | 23.0 | The current document that has the application&#x27;s focus. |
| backgroundColor | [*SolidColor*](/ps_reference/classes/solidcolor/) | R | 23.0 | The background color and color style for documents. |
| currentTool | [*Tool*](/ps_reference/objects/tool/) | R | 23.0 | Current selected tool. For now, the Tool class is an object with only an &#x60;id&#x60; field. In the future, we aim to provide tools with their own classes. |
| displayDialogs | [*DialogModes*](/ps_reference/modules/constants/#dialogmodes) | R W | 23.0 | The dialog mode for the application, which controls what types of dialogs should be displayed when your code is interacting with Photoshop. |
| documents | [*Documents*](/ps_reference/classes/documents/) | R | 23.0 | A list of the documents currently open. |
| fonts | [*TextFonts*](/ps_reference/classes/textfonts/) | R | 23.0 | The fonts installed on this system. |
| foregroundColor | [*SolidColor*](/ps_reference/classes/solidcolor/) | R W | 23.0 | The foreground color (used to paint, fill, and stroke selections). |
| preferences | [*Preferences*](/ps_reference/classes/preferences/) | R | 24.0 | Contains Photoshop preferences grouped into several categories similar to the Preferences dialog. |
| typename | *string* | R | 23.0 | The class name of the referenced object: *&quot;Photoshop&quot;*. |

## Methods

### batchPlay
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*Promise*<[*ActionDescriptor*](/ps_reference/interfaces/actiondescriptor/)[]\>

At the heart of all our APIs is batchPlay. It is the evolution of executeAction. It accepts
ActionDescriptors deserialized from JS objects, and can play multiple descriptors sequentially
without updating the UI. This API is subject to change and may be accessible in other ways in the future.

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | *any* |
| `options` | *any* |

___

### bringToFront
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*void*

Brings application to focus, useful when your script ends, or requires an input.

___

### convertUnits
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.4</span>

*number*

Convert the given value from one unit to another. Available units are:
Constants.Units.{CM, MM, INCHES, PIXELS, POINTS, PICAS}.
Use [Document.resolution](/ps_reference/classes/document/#resolution) when converting from or to PIXELS.
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
| `fromUnits` | [*Units*](/ps_reference/modules/constants/#units) | The unit that the fromValue is in. Use [Constants.Units](/ps_reference/modules/constants/#units) for valid values. |
| `toUnits` | [*Units*](/ps_reference/modules/constants/#units) | The unit that the return value is in. Use [Constants.Units](/ps_reference/modules/constants/#units) for valid values. |
| `resolution?` | *number* | The pixels per inch value to use when converting to and from pixel values. |

___

### createDocument
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<[*Document*](/ps_reference/classes/document/)\>

Create a new document.

No options will create a document of 7 x 5 inches at 300 pixels per inch.
This is the same as the "Default Photoshop Size" preset.

An object with a 'preset' string parameter can be used to specify any of
the other presets that come installed with Photoshop or created by users.

An object with one or more parameters can also be supplied. Any parameter
missing will be set to the default of: width 2100 pixels, height 1500 pixels,
resolution 300 pixels per inch, mode: @RGBColorMode and a fill of white with
no transparency.

```javascript
// "Default Photoshop Size" 7x5 inches at 300ppi
let newDoc1 = await app.documents.add();
let newDoc2 = await app.documents.add({
   width: 800, 
   height: 600, 
   resolution: 300, 
   mode: "RGBColorMode", 
   fill: "transparent"
});
let newDoc3 = await app.documents.add({preset: "My Default Size 1"});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [*DocumentCreateOptions*](/ps_reference/objects/createoptions/documentcreateoptions/) | @DocumentCreateOptions |

___

### getColorProfiles
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*string*[]

List of installed color profiles, for RGB and Gray modes.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorMode` | *string* | 'RGB' | Specify which color mode's profiles to list. (default: "RGB", options: "Gray") |

___

### open
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

**async** : *Promise*<[*Document*](/ps_reference/classes/document/)\>

Opens the specified document and returns the model

> *Note that this API requires a
[UXPFileEntry](../../../uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/File/)
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

___

### showAlert
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*Promise*<void\>

Shows an alert in Photoshop with the given message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | *string* |
