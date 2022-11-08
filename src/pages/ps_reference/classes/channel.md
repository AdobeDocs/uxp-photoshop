---
id: "channel"
title: "Channel"
sidebar_label: "Channel"
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

| Name | Type | Access | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| color | [*SolidColor*](/ps_reference/classes/solidcolor/) | R W | acc??? | - |
| histogram | *number*[] | R | 23.0 | A histogram containing the number of pixels at each color intensity level for this channel. The array contains 256 members. The target channel must be visible. |
| kind | [*ChannelType*](/ps_reference/modules/constants/#channeltype) | R W | acc??? | - |
| name | *string* | R W | acc??? | - |
| opacity | *number* | R W | acc??? | - |
| parent | [*Document*](/ps_reference/classes/document/) | R | 23.0 | The containing document. |
| visible | *boolean* | R W | acc??? | - |

## Methods

### duplicate
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">23.0</span>

**async** : `Promise`<`void`\>

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
| `targetDocument?` | [`Document`](/ps_reference/classes/document/) | if specified, duplicate to a different document target. |

___

### merge
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">23.0</span>

`Promise`<`void`\>

Merges a Spot Color channel into the component channels.

___

### remove
<span class="minversion" style="float:left; margin-left:36em; opacity:0.5;">23.0</span>

`Promise`<`void`\>

Deletes the channel.
