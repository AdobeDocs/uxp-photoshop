---
id: "photoshop-api-known-issues"
title: Known Issues and Workarounds
description: Contains a log of common issues encountered by our developer community, and potential solutions or workarounds to resolve them.
---
# Known Issues and Workarounds
## Photoshop 23.4.1 (July 2022)
### Increased batchPlay throwing
A change was introduced in Photoshop which will cause `batchPlay` calls to throw more often on a bad request. In this update in particular, the `move` command on layers may be more sensitive to the state of your Document, and throw where it previously had not.

We suggest that if you are using `batchPlay` to enhance your plugin, that you guard against such possibilities with an appropriate try-catch block, or use the DOM APIs when applicable.
