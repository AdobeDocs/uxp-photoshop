# Available APIs

Adobe Photoshop provides several categories of APIs:

* [APIs for interacting with Photoshop itself](#Photoshop-specific-apis)**.

* The **UXP runtime**, which provides all the capabilities that aren't Photoshop-specific:
    * A [_browser-like_ HTML and CSS engine](../uxp/ui-index.md) which drives actual XD _native UI components_ -- it is **not** a complete browser engine, but lets you build your UI using familiar web APIs and frameworks.
    * [Network APIs](../uxp/network-index.md) similar to the web standard XHR, `fetch`, and WebSocket found in browsers.
    * The [`storage` API](../uxp/storage-index.md), offering sandboxed filesystem access.

* The usual **[core JavaScript language APIs](../javascript/javascript-support.md)** you see in all JS runtimes, such as `setTimeout()` and `Date`.

* A simple **[module-loader `require()` API](../javascript/javascript-support.md#can-i-use-require)**

Read below for **how to access** Photoshop and UXP APIs...


## Photoshop-specific APIs

__TBD: ADD LINKS AS NECESSARY TO THESE BULLET POINTS__

Photoshop APIs are accessed by loading a module via `require()`, but some are passed directly to your plugin's handler functions. See the [Photoshop specific APIs page](../../photoshop-specific-apis/index.md) for a full list of modules. Some of the APIs are currently incomplete; more will be forthcoming. The modules currently available via the API include:

* Photoshop - the top-level application object. Through this you can get to the active document, the current tool, and also create and open documents, among other things.

* Document - properties of a given document, including its size, layers, width, etc. With this object you can also create and manipulate layers and layer groups, close (with or without saving), and resize both the image and canvas.

* Layer - methods for duplicating, deleting, moving, and linking layers in a document.

* Action - represents an action in the Actions palette. With this object, you can enumerate, delete, duplicate, and play Actions. You cannot currently record new Actions.

* ActionSet - an ActionSet contains a list of actions. Similarly to the Action object, ActionSet allows you to enumerate, delete, duplicate, and play ActionSets. You cannot currently create new ActionSets.

* BatchPlay - an advanced capability that provides access to the Photoshop event queue. You can often use batchPlay to access Photoshop features that are not yet exposed by the API.


## UXP

* Network APIs -- access just as in a browser, via the global classes `XMLHttpRequest` and `WebSocket`, and the global function `fetch()`. Of these, `fetch()` is the recommended method of communicating with external REST servers.

* Storage APIs -- access via `const fs = require("uxp").storage`. With these APIs, you can access files and directories (as allowed by the user; you _cannot_ access arbitrary paths on local or server-based drives). You can also access files and directories in your own plugin directory, as well as use temporary storage (restricted to your plugin). UXP also offers Secure Storage, which is protected storage that can be used to store sensitive data per plugin. It takes a key-value pair and encrypts the value before it is stored. 
