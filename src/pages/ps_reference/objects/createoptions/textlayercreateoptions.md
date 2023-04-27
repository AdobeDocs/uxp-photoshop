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
and passed to [Document.createLayer](/ps_reference/classes/document/#createlayer).
As a type, `TextLayerCreateOptions` can be used in Typescript development.

```javascript
const options = { name: "myTextLayer", contents: "Hello, World!", fontSize: 24, position: {x: 200, y: 300} };
await require('photoshop').app.activeDocument.createLayer(options);
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
| position | *object* | document center. | 24.2 | Insertion coordinates of the newly created text layer, in pixels |
| position.x | *number* | - | prop??? | - |
| position.y | *number* | - | prop??? | - |
| textColor | [*SolidColor*](/ps_reference/classes/solidcolor/) | black | 24.2 | Text color of the newly created text layer. |
