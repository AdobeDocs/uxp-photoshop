---
id: "photoshop"
title: "Photoshop"
sidebar_label: "Photoshop"
repo: "uxp-photoshop"
index: "photoshop"
keywords: "
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
"
---

# Photoshop App
The top level application object, root of our DOM

```
const app = require('photoshop').app
```

From here, you can access open documents, tools, UI elements and run commands or menu items.

## Accessors

###  actionTree

• **get actionTree**(): *[ActionSet](/ps_reference/classes/actionset/)[]*

Returns the action tree shown in Actions panel, as an array of ActionSets, each containing actions

___

###  activeDocument

• **get activeDocument**(): *[Document](/ps_reference/classes/document/)*

The current active document

```javascript
const doc = Photoshop.activeDocument;
```

• **set activeDocument**(`doc`: [Document](/ps_reference/classes/document/)): *void*

Set the current active document to be given one

```javascript
const doc = Photoshop.activeDocument;
```

**Parameters:**

Name | Type |
------ | ------ |
`doc` | [Document](/ps_reference/classes/document/) |

___

###  backgroundColor

• **get backgroundColor**(): *Color*

The default background color and color style for documents.

___

###  currentTool

• **get currentTool**(): *Tool*

Current selected tool. For now, the Tool class is an object with
only an `id` field. In the future, we aim to provide tools with their own classes

___

###  documents

• **get documents**(): *[Document](/ps_reference/classes/document/)[]*

List of currently open documents

```javascript
const documents = app.documents;
```

___

###  eventNotifier

• **set eventNotifier**(`handler`: function): *void*

_Dev environments only._

A callback for event notifications in Photoshop. This will cause your plugin to get a notification
on every event the user is doing, so it may slow things down. But it will be helpful to figure out
different descriptors

```javascript
app.eventNotifier = (event, descriptor) => {
   console.log(event, JSON.stringify(descriptor, null, ' '));
}
```

> This is temporary while we are in Alpha, we are working on a more structured notification system
> This setter will not function outside developer mode

To register listeners to specific events in production, follow [Event Listeners](/ps_reference/media/advanced/event-listener/) in the Advanced section.

**Parameters:**

▪ **handler**: *function*

▸ (`event`: string, `descriptor`: object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`descriptor` | object |

___

###  foregroundColor

• **get foregroundColor**(): *Color*

The default foreground color (used to paint, fill, and stroke selections)

## Methods

###  batchPlay

▸ **batchPlay**(`commands`: any, `options`: any): *Promise‹Descriptor[]›*

At the heart of all our APIs is [batchPlay](/ps_reference/media/advanced/batchplay/). It is the evolution of executeAction. It accepts ActionDescriptors deserialized from JS objects, and can play multiple descriptors sequentially without updating the UI. This API is subject to change and may be accessible in other ways in the future. Learn more in our [batchPlay reference](/ps_reference/media/advanced/batchplay/).

**Parameters:**

Name | Type |
------ | ------ |
`commands` | any |
`options` | any |

___

###  bringToFront

▸ **bringToFront**(): *void*

Brings application to focus, useful when your script ends, or requires an input

___

###  createDocument

▸ **createDocument**(`options?`: DocumentCreateOptions): *Promise‹[Document](/ps_reference/classes/document/) | null›*

Create a new document. See @DocumentCreateOptions.

Documents not created from presets must specify width, height, resolution, (color) mode, and fill.

```javascript
let newDoc1 = app.createDocument(); // creates a 2100px * 1500px document
let newDoc2 = app.createDocument({width: 800, height: 600, resolution: 300, mode: "RGBColorMode", fill: "transparent"});
let newDoc3 = app.createDocument({preset: "My Default Size 1"});
```

**Parameters:**

Name | Type |
------ | ------ |
`options?` | DocumentCreateOptions |

___

###  open

▸ **open**(`entry?`: File): *Promise‹[Document](/ps_reference/classes/document/)›*

Opens the specified document and returns it's model

> (0.4.0) Please note that this API now requires you to provide a UXPFileEntry

**`async`** 

```javascript
// Open a file given entry
let entry = await require('uxp').storage.localFileSystem.getFileForOpening()
const document = await app.open(entry);

// Show open file dialog
const document = await app.open();
```

**Parameters:**

Name | Type |
------ | ------ |
`entry?` | File |

___

###  showAlert

▸ **showAlert**(`message`: string): *Promise‹void›*

Shows an alert in Photoshop with the given message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
