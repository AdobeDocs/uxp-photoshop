---
id: "prototype"
title: "Extending DOM APIs"
sidebar_label: "API Extensions"
---

# Prototype

We build the DOM APIs with a lot of intent and care to work around expectations Photoshop may have when a command is being [batchPlayed](./batchplay). 

Photoshop is full of functionality and while we strive to bring all of them into the user-friendly DOM, some may not be ready as you're writing your plug-ins.

Further, you may have a different or unique way of scripting Photoshop and may want to add more properties and methods to the provided DOM classes.

This is where [prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) come in to play. In JavaScript, prototypes define what methods and properties are inherited by an object. Properties can be attached to a prototype to ensure that every instance of that object will have those properties. 

You can overload the many classes' prototype at the start or launch of your plugin or via a library you wrote that is loaded before your code.

As a plug-in developer, you have access to these prototypes:
 * [app.Photoshop](../../classes/photoshop)
 * [app.Document](../../classes/document)
 * [app.Layer](../../classes/layer)
 * [app.ActionSet](../../classes/actionset)
 * [app.Action](../../classes/action)

For example, suppose you want to add a new method to [Document](../../classes/document) which renames all layers, prepending '_' to them. You can run the following at the start of your plug-in.

```javascript
require('photoshop').app.Document.prototype.prependLodash = function () {
  // `this` will be the instance of Document you're calling the method on
  this.layers.forEach(l => {
    l.name = '_' + l.name
  })
}
```

Then, when you want to perform this on any document, you can call it on the instance of that document:

```javascript
require('photoshop').app.activeDocument.prependLodash() // All layers in the document will be renamed
```


