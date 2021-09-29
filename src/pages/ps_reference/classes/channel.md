---
id: "channel"
title: "Channel"
sidebar_label: "Channel"
repo: "uxp-photoshop"
product: "photoshop"
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

# Channel

Represents a channel in a Photoshop document.
You can access instances of channels using one of these methods:

```javascript
// An array of composite channels in the document
const compositeChannels = app.activeDocument.compositeChannels

// An array of active (selected) channels in the document
const activeChannels = app.activeDocument.activeChannels

// Reference a document's Red channel
const redChannel = app.activeDocument.channels[0]
```

## Properties

| Name | Type | Access | Description |
| :------ | :------ | :------ | :------ |
| color | [*SolidColor*](/ps_reference/classes/solidcolor/) | Read-write | The color of the channel. |
| histogram | *number*[] | Read-only | A histogram containing the number of pixels at each color intensity level for this channel. The array contains 256 members. The target channel must be visible. |
| kind | [*ChannelType*](/ps_reference/modules/constants/#channeltype) | Read-write | The type or kind of the channel. |
| name | *string* | Read-write | The color of the channel. |
| opacity | *number* | Read-write | The opacity or solidity of the channel. |
| parent | [*Document*](/ps_reference/classes/document/) | Read-only | The containing document. |
| visible | *boolean* | Read-write | The visibility of the channel |

## Methods

### duplicate

**async** : *Promise*<void\>

Duplicates the channel to the parent document, or a target document
if specified.

```javascript
// duplicate the channel
await channel.duplicate()

// duplicate to a different, compatible document
const newDoc = psApp.documents[1]
await channel.duplicate(newDoc)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetDocument?` | [*Document*](/ps_reference/classes/document/) | if specified, duplicate to a different document target. |

___

### merge

*Promise*<void\>

Merges a Spot Color channel into the component channels.

___

### remove

*Promise*<void\>

Deletes the channel.
