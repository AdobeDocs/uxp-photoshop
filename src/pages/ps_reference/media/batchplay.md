---
id: "batchplay"
title: "BatchPlay Details"
sidebar_label: "BatchPlay"
---

# batchPlay

At the heart of our APIs is `batchPlay`, a method that executes one or more Photoshop action commands and return their results.

_batchPlay is an advanced API, and we recommend trying to first use the DOM APIs before resorting to using batchPlay._

## API

BatchPlay can directly be accessed from the Photoshop action module, and as most other APIs it is asynchronous by default and returns a promise.

```javascript
require('photoshop').action.batchPlay(descriptors: ActionDescriptor[], options: Object): Promise<Object[]>
```

Below we will dive into both how action commands are defined in JavaScript, and what options are available.

### Descriptors

The first argument to `batchPlay` is an array of descriptors (also called action descriptors).

UXP for Photoshop uses a textual representation of these action descriptors. This format is sometimes referred to as `actionJSON`.

An action descriptor contains the following components:
* The command. This describes the desired Photoshop command. The command is specified via the `_obj` keyword.
* The target for the command. This describes the (DOM) element that the command should operate on. The target is specified via the `_target` keyword. This property is sometimes omitted. If omitted, the command operates on a default element. The default element is typically the object that is active in the UI.
* Command parameters. Describes the various parameters for the command.
* Command execution options. Options related to how the command should be executed.

The following is an example of an `actionJSON` command for hiding a layer <a id="hidelayerexample"></a>:
```javascript
{
  _obj: "hide",
  _target:[
    {_ref: "layer", _enum: "ordinal", _value: "targetEnum"},
    {_ref: "document", _enum: "ordinal", _value: "targetEnum"}
  ]
}
```
The command is `hide` as specified by the `_obj` keyword.

The value of `_target` is called an `action reference` and specifies which layer should be hidden. The action reference specifies the target in reverse order - from most specific to least (similar to a postal address). To find the DOM object for a target you go from the last value in the list to the first. In this example we have:
* `{"_ref":"document", "_enum":"ordinal","_value":"targetEnum"}` First find the target document. It is specified as `ordinal` and `targetEnum`. This means the active (front most) document.
* In that document we look for the layer specified as `{"_ref":"layer","_enum":"ordinal","_value":"targetEnum"}`. This means the active (selected) layer.

For this command we are therefore targeting the selected layer in the front most document. `targetEnum` is the default value for ordinal enumerations and can be omitted. See the section on [action references](#action-references) below for details.

This command modifies the Photoshop state and must therefore be executed from within a modal scope. See the documentation of [executeAsModal](./executeasmodal) for details. The following JavaScript uses batchPlay to hide the active layer:
```javascript
async function hideActiveLayer() {
  return await require("photoshop").action.batchPlay([{_obj:"hide", _target:[{_ref: "layer", _enum: "ordinal"},{_ref: "document", _enum: "ordinal"}]}], {});
}
let result = require("photoshop").core.executeAsModal(hideActiveLayer, {"commandName": "Hide Layer"});
```

Here is another example of `batchPlay` and `actionJSON`. This examples returns the value of a specific document pixel.
This example illustrates providing `samplePoint` as an additional command parameter.

```javascript
async function samplePixel() {
  return await require("photoshop").action.batchPlay([{
    _obj: "colorSampler",
    _target: {_ref: "document",_enum: "ordinal",_value: "targetEnum"},
    samplePoint: {
      horizontal: 100,
      vertical: 100
    }
  }], {});
}
let result = await require("photoshop").core.executeAsModal(samplePixel, {"commandName": "Sample Pixel"});
```
Sample output from the colorSampler command:
```javascript
[{"colorSampler":{"_obj":"CMYKColorClass","black":0,"cyan":26.27,"magenta":4.71,"yellowColor":0},"sampledData":true}]
```

#### Accepted action descriptors

The composition of action descriptors can be complicated. Photoshop provides a number of ways that help a developer understand which descriptors Photoshop accepts.

The first way is to use the `Actions` panel. Create a new action and record the commands that you want to run from JavaScript. Then select the action in the `Actions` panel, or one or more individual steps in the action. Now select `Copy As JavaScript` from the panel flyout menu. This will copy UXP compatible JavaScript for the selected items to the clipboard. `Copy As JavaScript` is available from the flyout menu when developer mode is enabled.
The following is an example of copying a single "make layer" command as JavaScript:
```javascript
async function actionCommands() {
    let command;
    let result;
    let psAction = require("photoshop").action;

    // Make layer
    command = {"_obj":"make","_target":[{"_ref":"layer"}],"layerID":2};
    result = await psAction.batchPlay([command], {});
}

async function runModalFunction() {
    await require("photoshop").core.executeAsModal(actionCommands, {"commandName": "Action Commands"});
}

await runModalFunction();
```

Another option is to create a listener function in JavaScript. This is done by providing the global event hook to a low level API. This call only works when developer mode is enabled.
```javascript
require('photoshop').action.addNotificationListener(['all'], (event, descriptor) => {console.log("Event:" + event + " Descriptor: " + JSON.stringify(descriptor))});
```

Another option is to use the developer UI to log action descriptors to a file. When "developer mode" is enabled, then the following menu items will be available:
* "Plugins > Development > Record Action Commands..." This menu item can be used to save any Photoshop command as an action descriptor to a file. After selecting the menu item and selecting the destination file, perform one of more Photoshop commands using the normal UI. Then choose "Plugins > Development > Stop Action Recording". The destination file will contain actionJSON for the performed commands.
* "Plugins > Development > Record Action Notifications..." This menu item will save both commands and change notifications to the selected destination file. 

Lastly, you can record your actions as a standard Photoshop action using the Actions panel. Then export actions to an `actionJSON` format by doing the following:
* Select the action set that contains the command.
* Press (macOS)"shift+option+command" or (Windows)"shift+control+alt" and choose "Save Actions..." from the panel fly-out menu.

#### Command execution options
An action descriptor can include a `_options` property. If present then its value specifies how the command is executed.
`_options` can contain the following values:

* `dialogOptions: string`. This value controls how Photoshop shows UI during the execution of the command. The possible values are:
   * "silent": The command is executed without UI. If an error occurs, or if the command needs additional parameters, then a scripting error is returned. This is the default value.
   * "dontDisplay": The command is executed without UI unless an error occurs, or if the command need additional parameters. In that case UI may be shown.
   * "display": Standard UI related to the command is shown.

### options

The second argument of batchPlay adjusts the options. Below is the list of options that are most commonly needed.

#### synchronousExecution (default: false)

If set to true, batchPlay will block the entire scripting thread until it resolves, then return the value(s). We use this in the DOM API for property getters and setters, as it allows for simpler code.

JavaScript code that use batchPlay directly should avoid using this keyword if possible, and instead use the default form that returns a promise.

#### historyStateInfo (default: none)

This option is deprecated as of Photoshop 2022. New JavaScript code should use the history suspension mechanism provided by [executeAsModal](./executeasmodal#history-state-suspension)

Request Photoshop to describe the entire batchPlayed series of actions as a single history state. History state should have two properties:

* `name`: A string to show the name of the history event in History panel
* `target`: A document reference for where to create the history state at. Keep in mind that if you point at a different document, or if your batchPlays aren't all acting on the same document, the behavior is undefined.

 Plugins that use api version 2 may find it easier to use the history state functionality that is provided via the executionContext object.

### Result value
`batchPlay` returns a promise. This promise is rejected if the batchPlay command is invalid. This is the case when incorrect arguments are provided. An example of a batchPlay rejection is:
```javascript
require("photoshop").action.batchPlay(true, {});
```
This example provides an incorrect initial argument to batchPlay. The initial argument is expected to be a descriptor list and not a boolean. For cases such as this, the promise is rejected with an appropriate error message. The above example generates the following rejection:
```javascript
[[PromiseState]]: "rejected"
[[PromiseResult]]: Error: Argument 1 has an invalid type. Expected type: array actual type: boolean
```

A batchPlay command can also fail if a valid command cannot be procesed by Photoshop. This is most often the case if the specified target element does not exist.

The previously shown example to [hide the active layer](#hidelayerexample) will fail if no documents are open, because the command can then not find the target layer to hide. For such cases the `batchPlay` promise is resolved successfully, and an error message is returned in a list form.
```javascript
[
  {
  _obj: "error"
  message: "The object “current document” is not currently available."
  result: -25922
  }
]
```
The elements in the returned list match the action descriptor list passed to batchPlay. The first item in the returned list is the result of the first action descriptor in the batchPlay, and so forth. The properties of the returned elements are:
* `_obj: string`. The value is "Error"
* `message: string`. A localized error message
* `result: number`. An internal Photoshop error code. A "0" means "no error". -128 means that the user cancelled the operation. Other values are possible.

### Action references
Action references specify which DOM objects a command operates on. An action reference is specified using the `_target` keyword.
An action reference is a list of item references that specifies how to find the DOM element starting from the application DOM element.
Each item in the list can use one of the following forms:

| Reference form | Syntax | Example | Notes |
| --------------| --------|-|-|
| ID | `{_ref:className, _id:number}` | `{_ref:"document", _id: 123}` |
| Index | `{_ref:className, _index:number}` | `{_ref:"document", _index: 1}` | Indices are 1 based |
| Name | `{_ref:className, _name:string}` | `{_ref:"document", _name: "Untitled-1"}` |
| Enumeration | `{_ref:className, _enum: "ordinal", _value: enumerationSpecifier*}` | `{_ref:"document", _enum: "ordinal", _value:"targetEnum"}` |
| Property | `{_property:propertyName}` | `{_property:"title"}` |

We recommend using the ID form whenever possible because the ID of an object does not change during the lifetime of the Photoshop session. The index will change if elements are added or removed in front of the specified object.

The enumerationSpecifier is command specific, but the most common value is `targetEnum` meaning the currently selected or active object of the specified class. Other possible values include: "first", "last", and "front". When using the enumeration form, `targetEnum` is the default value for the `_value` property.


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

Using "get" without a property is intended for use only during the development of a plugin. This "get all" request allows a developer to understand which properties a given element supports.

_A shipping plugin should not obtain all properties for a given target because this may be slow, and may become slower in the future when additional properties are added._

#### Multi-Get
In some cases you may want to obtain several property values from the same target, or get the same property from several similar targets.
Examples of this are:
* Get the name, the id, and the color mode for a specific document.
* Get the id's of all open documents.

While you can issue multiple "get" statements to get this information, it is more efficient to use the `multiGet` command.
A multiGet command has the following form:
* `_obj`: must be "multiGet".
* `_target`: a target reference that specifies a base object.
* extendedReference: a list describing what values to return from the base object. The extendedReference has either one or two elements. The first element is a property-list. The second element can be used to specify an element range.
* options: describes how the command should react if any of the requested values are unavailable. options can include:
   * failOnMissingProperty: A boolean describing what should happen if one of the target elements do not expose one of the requested properties. The default value is true, meaning that the command fails if a requested property is not available.
   * failOnMissingElement: A boolean describing what should happen if one of the target elements do exist. The default value is true, meaning that the command fails if any of the requested element do not exist.

The following example illustrates how to get the value of multiple properties on the active layer:
```javascript
layerProperties =
  { _obj: "multiGet",
     _target: {	_ref: [{_ref: "layer", _enum: "ordinal"}, {_ref: "document", _enum: "ordinal"}]},
     extendedReference: [["name", "layerID", "opacity"]],
     options: {failOnMissingProperty:false, failOnMissingElement: false}
  };
result = await require("photoshop").action.batchPlay([layerProperties], {});
```
This command will generate a result such as the following:
```javascript
[{"name":"Layer 4","layerID":5,"opacity":255}]
```
In this example the base object is a layer. The extendedReference specifies the list of properties to return from the target layer.


The following example illustrates how to get the value of multiple properties on the first two layers:
```javascript
layerProperties =
  { _obj: "multiGet",
     _target: {	_ref: [{_ref: "document", _enum: "ordinal"}]},
     extendedReference: [["name", "layerID", "opacity"], {_obj: "layer", index:1, count:2}],
     options: {failOnMissingProperty:false, failOnMissingElement: false}
  };
result = await require("photoshop").action.batchPlay([layerProperties], {});
```
This command will generate a result such as the following:
```javascript
[{"list":[{"name":"Layer 1","layerID":2,"opacity":255},{"name":"Layer 2","layerID":3,"opacity":255}]}]
```
In this example we want to obtain the value from several layers, and this mean that the base object as specified by the `_target` is a document. The extendedReference is used in its two element form to specify a property list and a range of layers.

The element range specifier can use count equal to -1 to specify all elements. Therefore to get the name of all layers in a document, one can use the following multiGet command:
```javascript
layerProperties =
  { _obj: "multiGet",
     _target: {	_ref: [{_ref: "document", _enum: "ordinal"}]},
     extendedReference: [["name"], {_obj: "layer", index:1, count:-1}],
     options: {failOnMissingProperty:false, failOnMissingElement: false}
  };
result = await require("photoshop").action.batchPlay([layerProperties], {});
```
This command will generate a result such as the following:
```javascript
[{"list":[{"name":"Layer 1"},{"name":"Layer 2"},{"name":"Layer 3"},{"name":"Layer 4"}]}]
```

## Legacy notes
`batchPlay` is the evolution of `executeAction` from ExtendScript. Where `executeAction` could only play one descriptor at a time, `batchPlay` accepts an array of action descriptors.

In ExtendScript, we provided a class around constructing descriptors, references, and putting values in. With `batchPlay`, we have replaced these related classes with `actionJSON`.

If you have used `executeAction` in ExtendScript, you are probably familiar with 4 character codes (OSTypes) and helper methods around them. In `actionJson` we prefer extended string identifiers such as `colorSampler`. However, you can still use an OSType by prepending it with a `$` sign and passing that as a string, like `'$app '` (mind the space!).