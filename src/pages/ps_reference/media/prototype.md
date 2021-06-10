---
id: "prototype"
title: "Extending DOM APIs"
sidebar_label: "API Extensions"
---

We build the DOM APIs with a lot of intent and carefully to work around many expectations Photoshop has when a command is being [batchPlayed](./batchplay). 

There is a lot of functionality in Photoshop, and while we strive to bring all of them into DOM, some may not be ready as you're writing your plug-ins. Or you might have a different way of scripting into Photoshop and want to add more properties and methods to DOM classes.

This is where prototypes come in. In JavaScript, [prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) define what methods and properties are inherited by an object. Properties can be attached to a prototype to ensure that every instance of that object will have those properties. 

You can overload the Document prototype at the beginning of your plugin, either via code you run first, or via a library you wrote that gets loaded before your code.

For example, suppose you want to add a new method to [Document](../../classes/document) where you rename all layers by prepending '_' to them. 

```javascript
require('photoshop').app.Document.prototype.prependLodash = function () {
  // `this` will be the instance of Document you're calling the method on
  this.layers.forEach(l => {
    l.name = '_' + l.name
  })
}
```

And later on, when you want to call this on any document, you can call it on the instance of that document:

```javascript
require('photoshop').app.activeDocument.prependLodash() // All layers in the document will be renamed
```

Right now, you have these prototypes available:
 * [app.Photoshop](../../classes/photoshop)
 * [app.Document](../../classes/document)
 * [app.Layer](../../classes/layer)
 * [app.ActionSet](../../classes/actionset)
 * [app.Action](../../classes/action)

