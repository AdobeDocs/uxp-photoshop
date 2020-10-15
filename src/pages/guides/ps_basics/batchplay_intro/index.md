# batchPlay

Photoshop is complex software, with many internal classes and methods. Not all of these are as yet exposed via UXP. New interfaces are in development and will be shipped along with each release of Photoshop. In the meantime, if there is something your plugin needs to do that is not exposed in the current DOM, you may be able to use batchPlay.

BatchPlay is for accessing Photoshop functionality that has not yet been exposed via APIs. BatchPlay is a way to send multiple actions into the Photoshop event queue and return their results.

ExtendScript has executeAction; this is analagous to UXP's batchPlay. However, whereas executeAction could only play one descriptor at a time, batchPlay accepts an array of action descriptors. If you have multiple Photoshop operations that need to execute in series, using an array of action descriptors in a single batchPlay call is probably what you want.

Unlike ExtendScript, where there were classes to construction action descriptors, references, and values, in batchPlay these are all built from JSON objects.

The [batchPlay Reference](/ps_reference/media/advanced/) has examples of constructing action descriptors using JSON, as well as using batchPlay in general.