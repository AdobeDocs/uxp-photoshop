# batchPlay Samples

As of this writing, not all of the Photoshop DOM is exposed to UXP. If an interface for your favorite Photoshop functionality isn't present in UXP, you may be able to use `batchPlay` to access what you need.

batchPlay is a method that can send multiple actions into the Photoshop event queue and return the results of those actions. batchPlay is the evolution of `executeAction` from ExtendScript. But whereas executeAction could only play one descriptor at a time, batchPlay accepts an array of action descriptors, enabling you to "chain" actions together with a single call.

These examples demonstrate how to perform some common actions using batchPlay.

_batchPlay examples are coming soon._