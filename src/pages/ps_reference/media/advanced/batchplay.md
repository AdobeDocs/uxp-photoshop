---
id: "batchplay"
title: "BatchPlay Details"
sidebar_label: "BatchPlay"
repo: "uxp-photoshop"
index: "photoshop"
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
# batchPlay

At the heart of our APIs is `batchPlay`, a method that can send multiple actions into Photoshop event queue, and return you their results. `batchPlay` is the evolution of `executeAction` from ExtendScript. Where `executeAction` could only play one descriptor at a time, `batchPlay` accepts an array of action descriptors. 

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

- One way of gaining insight about what Photoshop accepts as acceptable action descriptors would be to add a listener via the `app.eventNotifier` property, and then performing the action. Use the listener output to construct your action descriptors.

### BatchPlay options

The second argument of batchPlay adjusts the options. Below is the list of options that are most commonly needed.

#### synchronousExecution (default: false)

If set to true, batchPlay will block the entire scripting thread until it resolves, then return the value(s). We use this in the DOM API for property getters and setters, as it allows for simpler code. For expensive operations, make sure you keep this false.

#### modalBehavior (default: "fail")

This can be "wait", "execute" or "fail", and describes what the batchPlay command should do if Photoshop is modal. Keep in mind that if you are showing a dialog via your own plug-in, that is also considered a modal state.

#### historyStateInfo (default: none)

Request Photoshop to describe the entire batchPlayed series of actions as a single history state. History state should have two properties:

 * `name`: A string to show the name of the history event in History panel
 * `target`: A document reference for where to create the history state at. Keep in mind that if you point at a different document, or if your batchPlays aren't all acting on the same document, the behavior is undefined.
