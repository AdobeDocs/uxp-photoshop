---
id: "textitem"
title: "TextItem"
sidebar_label: "TextItem"
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

# TextItem

The Class that groups all Type related properties of a Text Layer in Photoshop.

```javascript
const app = require('photoshop').app;
const textItem = app.activeDocument.activeLayers[0].textItem;
```

Some properties and methods are available directly in the TextItem instance itself:

```javascript
textItem.contents; // "Lorem Ipsum"
textItem.contents = "Hello World";
textItem.isPointText; // true
await textItem.convertToParagraphText();
```

Most properties and methods are grouped for convenience in
the [characterStyle](/ps_reference/classes/textitem/#characterstyle) and [paragraphStyle](/ps_reference/classes/textitem/#paragraphstyle) properties of [TextItem](/ps_reference/classes/textitem/).

```javascript
textItem.characterStyle.size; // 12
textItem.characterStyle.size = 24;
textItem.paragraphStyle.hyphenation; // true
```

Finally, the [warpStyle](/ps_reference/classes/textitem/#warpstyle) object contains all the properties related to the
Warp effect applied to the text layer.

```javascript
textItem.warpStyle.style; // "arcLower"
```

Please note that for some properties that are expressed in pixels, the valid range
of values might depend on the document's resolution. When this is the case, you'll find
that in the documentation "for a 72ppi document" is specified.

An example is the font size:

```javascript
// Range: 0.01..1296—for a 72ppi document
textItem.characterStyle.size = 1000;
```

If you want to find the range for documents with a different resolution, please use
the following conversion formula:

```javascript
newVal = (documentResolution / 72) * referenceVal;

// I.e., for a 300ppi document the maximum font size will be:
// (300 / 72) * 1296 = 5400px
```

Upon setting a value, validation will be performed internally.
An invalid value will result in a Range Error.

## Properties

### characterStyle

• **characterStyle**: [*CharacterStyle*](/ps_reference/classes/characterstyle/)

The object that stores properties related to the Character panel in the Photoshop UI.

___

### paragraphStyle

• **paragraphStyle**: [*ParagraphStyle*](/ps_reference/classes/paragraphstyle/)

The object that stores properties related to the Paragraph panel in the Photoshop UI.

___

### warpStyle

• **warpStyle**: [*WarpStyle*](/ps_reference/classes/warpstyle/)

The object that stores properties related to the Warp Text dialog.

## Properties

| Name | Type | Access | Default | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ |
| contents | *string* | R W | - | 24.1 | The actual text of the Layer. |
| isParagraphText | *boolean* | R | - | 24.1 | True if the Text Layer is a &quot;Paragraph Text&quot;: text that uses boundaries to control the flow of characters, either horizontally or vertically. |
| isPointText | *boolean* | R | - | 24.1 | True if the Text Layer is a &quot;Point Text&quot;: a horizontal or vertical line of text that begins where the user clicks in the image. |
| orientation | [*Orientation*](/ps_reference/modules/constants/#orientation) | R W | Direction.HORIZONTAL | 24.1 | The text orientation. |
| parent | [*Layer*](/ps_reference/classes/layer/) | R | - | 24.1 | The parent Layer |
| textClickPoint | *object* | R W | - | 24.1 | The text insertion point in the document, as an &#x60;{x, y}&#x60; object where the coordinates are expressed in pixels. |
| typename | *string* | R | - | 24.1 | The typename |

## Methods

### convertToParagraphText
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*Promise*<[*TextItem*](/ps_reference/classes/textitem/)\>

Convert a Text Layer from Point Text to Paragraph Text

___

### convertToPointText
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*Promise*<[*TextItem*](/ps_reference/classes/textitem/)\>

Convert a Text Layer from Paragraph Text to Point Text

___

### convertToShape
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*Promise*<void\>

Convert the Text Layer into a Shape Layer

___

### createWorkPath
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

*Promise*<void\>

Create a Work Path from the Text Layer
