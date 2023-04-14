<!--
index_desc: Changelog in UXP version
-->

# UXP Changelog

## UXP v7.0.0

### New
- Support for Web Components in UXP Plugins. Various HTML elements and methods have been added to support this feature.
    - Classes
        - [HTMLSlotElement](./reference-js/Global%20Members/HTML%20Elements/HTMLSlotElement.md)
        - [HTMLTemplateElement](./reference-js/Global%20Members/HTML%20Elements/HTMLTemplateElement.md)
    - Methods
        - [Element.assignedSlot](./reference-js/Global%20Members/HTML%20DOM/Element.md#assignedslot--htmlslotelement)
        - [Element.slot](./reference-js/Global%20Members/HTML%20DOM/Element.md#slot--string)
        - [Element.attachShadow](./reference-js/Global%20Members/HTML%20DOM/Element.md#attachshadowinit)
        - [Element.shadowRoot](./reference-js/Global%20Members/HTML%20DOM/Element.md#shadowroot--shadowroot)
        - [CustomElementRegistry.upgrade](./reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry.md#upgraderoot)
        - [CustomElementRegistry.whenDefined](./reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry.md#whendefinedname)
- [Spectrum Web Components (Beta)](./reference-spectrum/swc/index.md) Support for Adobe SWC.
- Several augmentations to the JS API set
    - Properties
        - [HTMLElement.lang](./reference-js/Global%20Members/HTML%20Elements/HTMLElement.md#lang--string)
    - Classes added to the global scope
        - [TreeWalker](./reference-js/Global%20Members/HTML%20DOM/TreeWalker.md)
        - [NodeFilter](./reference-js/Global%20Members/HTML%20DOM/NodeFilter.md)
    - Methods
        - [Element.hasAttributes](./reference-js/Global%20Members/HTML%20DOM/Element.md#hasattributes)
        - [Element.getAttributeNames](./reference-js/Global%20Members/HTML%20DOM/Element.md#getattributenames)
        - [Event.composed](./reference-js/Global%20Members/HTML%20Events/Event.md#composed--boolean)
        - [Event.composedPath](./reference-js/Global%20Members/HTML%20Events/Event.md#composedpath)
        - [DocumentFragment.append](./reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#appendargs)
        - [DocumentFragment.querySelector](./reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#queryselectorselector)
        - [DocumentFragment.querySelectorAll](./reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#queryselectorallselector)
- New focus events to support React 16
    - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
    - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- HTML [2D Canvas Support](./reference-js/Global%20Members/HTML%20Elements/HTMLCanvasElement.md) for basic shapes and styling.
- Alerts
    - [alert()](./reference-js/Global%20Members/HTML%20DOM/alert.md)
    - [prompt()](./reference-js/Global%20Members/HTML%20DOM/prompt.md)
    - [confirm()](./reference-js/Global%20Members/HTML%20DOM/confirm.md)
- Support for [pipeThrough](./reference-js/Global%20Members/Streams/ReadableStream.md#pipeThroughtransform,-options) and [tee](./reference-js/Global%20Members/Streams/ReadableStream.md#tee) in ReadableStream](./reference-js/Global%20Members/Streams/ReadableStream.md). Refer to [Streams](./reference-js/Global%20Members/Streams/index.md) for more details
- [ImageBlob](./reference-js/Global%20Members/ImageBlob/) to render an uncompressed image buffer in UXP

### Changed
- [HTMLVideoElement](./reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md): 'metadata' is the default value for `preload` attribute
- [FS API](./reference-js/Modules/fs/): No need for the `file://` protocol

## UXP v6.5.0

### New
- [UXP Hybrid plugins](../../guides/hybrid-plugins/)
- Allow unrestricted relative paths in require from scripts
- [getEntryWithUrl](./reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider.md#getentrywithurlurl) in LocalFileProvider


## UXP v6.4

### New
- [WebView](./reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement.md) for anels
- [Path Module APIs](./reference-js/Global%20Members/Path/)
- UXP Scripts can run fsapi with full access in localFileSystem

### Bugs Fixes
- PluginManifest parsing / Load Plugin errors not logged in UDT
- Error shown in UDT APP logs on Plugin UnLoad
- UXP script : file session tokens are not getting created
- Error message and stack are empty in case of reject("error string") executed in script
- [Win only]-Volume is being muted automatically for 3rd video in the tutorial while opening the video in Theatre mode
- After closing the theatre mode, video's are Overlapping while scrolling up and down in DP
- Provide an API to programmatically close dialog in pop-out/theatre mode.
- Plugin Data folder shouldn't be created for scripts
- Crash on exit
- script.setResult("kSuccess") not working
- Resource Leaks in Window Dialog on UWP
- Privilege plugin fail to add in XD in certain cases
- Fixed mouse/keyboard events within Webview in XD v55 and Win 10.

## UXP v6.3

### New
- [Blob](./reference-js/Global%20Members/Data%20Transfers/Blob.md) APIs.
- Blob support in Fetch API.
- [Crypto APIs](./reference-js/Global%20Members/Crypto/Crypto.md)
- UXP Developer Tools v1.7.0 has supports for Debugging UXP Scripts in Photoshop and InDesign, refer [here](https://developer.adobe.com/photoshop/uxp/2022/scripting/getting-started/) for more details
- UXP Developer Tools has new templates in the Create Plugin Dialog. This includes examples for using WebView and Multiple Menus in a Plugin. For more details on Webview refer [HTMLWebViewElement](./reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement.md) module under `Global Members/HTML Elements` in JavaScript Reference

### Bugs Fixes
- Plugin cannot open its own folders because version dots are rejected
- PS crashes frequently during UDT watch reload
- UDT Window / Bring all to Front does not work
- UDT console closed when PS crashes or quits
- UDT fails to launch with "sign-in required" error
- PS crashes with empty `<svg> <polygon>`
- Manifest v5 breaks file permissions dialog
- Many stability Fixes and performance improvements