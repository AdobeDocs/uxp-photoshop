---
id: "textlayercreateoptions"
title: "TextLayerCreateOptions"
sidebar_label: "TextLayerCreateOptions"
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

# TextLayerCreateOptions

An object literal can be constructed with any of the following properties
and passed to [Document.createTextLayer](/ps_reference/classes/document/#createtextlayer).
As a type, `TextLayerCreateOptions` can be used in Typescript development.

Note: When using the `position` option, keep in mind that the top-left corner
of the text layer will vary based on the properties.
When using the Text Tool, the click sets the bottom-left corner of the layer.
The `position` option here uses that bottom-left corner.
A value of `{x: 0, y: 0`}` will likely result in the new layer not appearing "on the canvas"
since it landed just above at y of 0.
For this reason, the default position is the center of the document.

```javascript
const options = {
  name: "myTextLayer",
  contents: "Hello, World!",
  fontSize: 24,
  position: {x: 200, y: 300}
};
await require('photoshop').app.activeDocument.createTextLayer(options);
```

| Name | Type | Default | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| blendMode | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | NORMAL | 22.5 | Blend mode of the newly created layer or group. |
| color | [*LabelColors*](/ps_reference/modules/constants/#labelcolors) | NONE | 22.5 | Label color of the newly created layer or group. |
| contents | *string* | &quot;Lorem Ipsum&quot; | 24.2 | Text content of the newly created text layer. |
| fontName | *string* | &quot;MyriadPro-Regular&quot; | 24.2 | Font PostScript name of the newly created text layer. |
| fontSize | *number* | 12px | 24.2 | Font size of the newly created text layer in pixels. |
| group | *boolean* | false | 22.5 | Whether to use previous layer to create clipping mask. |
| ~~mode~~ | [*BlendMode*](/ps_reference/modules/constants/#blendmode) | NORMAL | 22.5 | Deprecated, please use &#x60;blendMode&#x60; above as it will override this value. |
| name | *string* | - | 22.5 | Name of the newly created layer. If no value is provided, then a name will be generated following the template, &quot;Layer #&quot;. |
| opacity | *number* | 100 | 22.5 | Opacity of the newly created layer or group. |
| position | [*Position*](/ps_reference/objects/options/position/) | document center | 24.2 | Insertion coordinates of the newly created text layer, in pixels |
| textColor | [*SolidColor*](/ps_reference/classes/solidcolor/) | black | 24.2 | Text color of the newly created text layer. |
