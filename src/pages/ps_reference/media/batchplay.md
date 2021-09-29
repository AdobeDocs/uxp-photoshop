---
id: "batchplay"
title: "BatchPlay Details"
sidebar_label: "BatchPlay"
---

At the heart of our APIs is `batchPlay`, a method that can send multiple actions into Photoshop event queue, and return their results. `batchPlay` is the evolution of `executeAction` from ExtendScript. Where `executeAction` could only play one descriptor at a time, `batchPlay` accepts an array of action descriptors. 

## API

BatchPlay can directly be accessed from the Photoshop action module, and by default is asynchronous

```javascript
require('photoshop').action.batchPlay(descriptors: ActionDescriptor[], options: Object): Promise<Object[]>
```

Below we will dive into both how action descriptors are defined in JavaScript, and what options are available.

### Action Descriptors

In ExtendScript, we provided a class around constructing descriptors, references, and putting values in. With `batchPlay`, we have added a way to construct ActionDescriptors directly from JS objects. This is sometimes referred to as `actionJSON`, as well. 

Here's an example of a simple ActionDescriptor defined in JSON:

```javascript
{
  _obj: "colorSampler", // _obj is a reserved identifier for the event of the action descriptor. 
                  // _obj is universally needed for all descriptors being passed into batchPlay.
  _target: { // This is the ActionReference, the element on which this action should be played
    _ref: "document", // In this case we are trying to play an event on the document element
    _enum: "ordinal", // _enum and _value signify that this is the active element. In document's case, this is the active document
    _value: "targetEnum"
  },
  samplePoint: { // All other fields are optional and are used by the action itself
    horizontal: 100,
    vertical: 100
  }
}
```

#### String identifiers

If you have used `executeAction` in ExtendScript, you are probably familiar with 4 character codes (OSTypes) and helper methods around them. In JavaScript, we support string identifiers. However, you can still use an OSType by prepending it with a `$` sign and passing that as a string, like `'$app ` (mind the space!).

#### Accepted action descriptors

The composition of action descriptors can be complicated and Photoshop provides a number of ways that a developer can see which descriptors Photoshop can accept.

One option is to create a listener function in JavaScript. This is done by providing the global event hook to a low level API. This call only works when developer mode is enabled.
```javascript
require('photoshop').action.addNotificationListener(['$All '], (event, descriptor) => { . . . })
```

Another option is to use the developer UI to save descriptors to a file. When "developer mode" is enabled, then the following menu items will be available:
* "Plugins > Development > Record Action Commands..." This menu item can be used to save any Photoshop command as an action descriptor to a file. After selecting the menu item and selecting the destination file, perform one of more Photoshop commands using the normal UI. Then choose "Plugins > Development > Stop Action Recording". The destination file will contain descriptors for the performed commands.
* "Plugins > Development > Record Action Notifications..." This menu item will save both commands and change notifications to the selected destination file. 

### BatchPlay options

The second argument of batchPlay adjusts the options. Below is the list of options that are most commonly needed.

#### synchronousExecution (default: false)

If set to true, batchPlay will block the entire scripting thread until it resolves, then return the value(s). We use this in the DOM API for property getters and setters, as it allows for simpler code. For expensive operations, make sure you keep this false.

#### historyStateInfo (default: none)

Request Photoshop to describe the entire batchPlayed series of actions as a single history state. History state should have two properties:

 * `name`: A string to show the name of the history event in History panel
 * `target`: A document reference for where to create the history state at. Keep in mind that if you point at a different document, or if your batchPlays aren't all acting on the same document, the behavior is undefined.

 Plugins that use api version 2 may find it easier to use the history state functionality that is provided via the executionContext object.

### Getting state from Photoshop
batchPlay can be used to obtain state from Photoshop. To do this, use the action command "get" with a target property.

The following sample obtains the title of a target document.:
```javascript
var target = {_ref:[{"_property": "title"}, {_ref: "document", _id: someDocumentID}, {"_ref":"application"}]};
var command = {"_obj": "get", "_target": target};
let result = await photoshop.action.batchPlay([command], {});
```
A possible result from running this command is:
```javascript
[{"title":"Untitled-1"}]
```


If you use the "get" command without a target property, then all possible properties for the target are returned. The following lists all possible document properties:
```javascript
var target = {_ref:[{_ref: "document", _id: someDocumentID}, {"_ref":"application"}]};
var command = {"_obj": "get", "_target": target};
let result = await photoshop.action.batchPlay([command], {});
```

A possible result from running this command may include the following:
```javascript
[{"mode":{"_enum":"colorSpace","_value":"RGBColor"},"bigNudgeH":655360,"bigNudgeV":655360,"rulerOriginH":0,"rulerOriginV":0,"width":{"_unit":"distanceUnit","_value":504},"height":{"_unit":"distanceUnit","_value":360},"resolution":{"_unit":"densityUnit","_value":300},"title":"Untitled-1","fileInfo":{"_obj":"fileInfo"},"numberOfPaths":0,"numberOfChannels":3,"numberOfLayers":0,"targetPathIndex":-1,"workPathIndex":-1,"clippingPathInfo":{"_obj":"clippingInfo","clippingPathIndex":-1,"clippingPathFlatness":0}, . . . ]
```

Using "get" without a property is intended for use during the development of a plugin. This for allows a developer to understand which properties a given element support.

_A shipping plugin should not obtain all properties for a given target because this may be slow, and may become slower in the future when additional properties are added._
