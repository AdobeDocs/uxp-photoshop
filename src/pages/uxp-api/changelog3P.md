<!--
index_desc: Changelog in UXP version
-->

# UXP Changelog

## UXP v8.0.1

### Breaking Changes
- `enableFillAsCustomAttribute` feature flag, introduced in UXPv7.1.0, will be turned on by default.

### Deprecations
- Changes to Clipboard
  - [Clipboard.setContent](./reference-js/Global%20Members/Data%20Transfers/Clipboard.md#setcontentdata) is deprecated. Please use [Clipboard.write](./reference-js/Global%20Members/Data%20Transfers/Clipboard.md#writedata) instead.
  - [Clipboard.getContent](./reference-js/Global%20Members/Data%20Transfers/Clipboard.md#getcontent) is deprecated. Please use [Clipboard.read](./reference-js/Global%20Members/Data%20Transfers/Clipboard.md#read) instead.
  - Passing an `object` to [Clipboard.writeText(object)](./reference-js/Global%20Members/Data%20Transfers/Clipboard.md##writetexttext) is deprecated. Please use [Clipboard.write(object)](./reference-js/Global%20Members/Data%20Transfers/Clipboard.md#writedata) instead.
  - [Clipboard.clearContent](./reference-js/Global%20Members/Data%20Transfers/Clipboard.md#clearcontent) is deprecated. [Clipboard.writeText("")](./reference-js/Global%20Members/Data%20Transfers/Clipboard.md#writetexttext) would be an alternative.
- Changes to VideoElement
  - Event `uxpvideoload` in [load()](./reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md#load) is deprecated. Use `loadeddata` instead.
  - Event `uxpvideoplay` in [play()](./reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md#play) is deprecated. Use `ended` instead.
  - Event `uxpvideocomplete` in [play()](./reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md#play) is deprecated. Use `ended` instead.
  - Event `uxpvideopause` in [pause()](./reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md#pause) is deprecated. Use `pause` instead.

### New
- New components supported in Spectrum Web Components (SWC). More details [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers)
  - sp-asset
  - sp-meter
  - sp-number-field
  - sp-overlay
  - sp-quick-actions
  - sp-search
  - sp-swatch
- New command line templates to get started with SWC easily. Find details in this [section](./reference-spectrum/swc/index.md#command-line-templates).
- Support for local HTML files in [WebView](./reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement.md#load-local-content-onto-webview)
- New CSS capabilities
  - scaleX() & scaleY()
  - transform-origin
  - translate property
  - `Box-shadow` property now supports `transform rotate`.
- New feature flag `CSSNextSupport` in the manifest.json to gate the new and future CSS capability.

  | Manifest setting | Description  |
  | ---------------- | ------------ |
  | `featureFlags: {"CSSNextSupport": true}` | Enables all the new CSS features. |
  | `featureFlags: {"CSSNextSupport": ["boxShadow", "transformFunctions", "transformProperties" ]}` | Enables only the named properties in the list. |
  
  Note that `"enableSWCSupport": true` will enable `CSSNextSupport` by default, even if it is not done explicitly in plugin manifest otherwise.
- Video enhancements: Support added for [Seek Event](./reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md)
- Support for [Navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) API
- Support for new HTMLElement APIs - [append](./reference-js/Global%20Members/HTML%20Elements/HTMLElement.md#appendnodes), [prepend](./reference-js/Global%20Members/HTML%20Elements/HTMLElement.md#prependnodes) and [replaceChildren](./reference-js/Global%20Members/HTML%20Elements/HTMLElement.md#replacechildrennodes)
- [Beta] Support for form reset in [HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

### Updated
- Upgraded Spectrum Web Components to v0.37.0. [More detail](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers)
- [UXP Clipboard.writeText()](./reference-js/Global%20Members/Data%20Transfers/Clipboard.md#writetexttext) now accepts strings as input to meet standards


## UXP v7.4.0
### Updated
- UXP Alerts ([alert](./reference-js/Global%20Members/HTML%20DOM/alert.md), [prompt](./reference-js/Global%20Members/HTML%20DOM/prompt.md), [confirm](./reference-js/Global%20Members/HTML%20DOM/confirm.md)) have been moved back to beta due to a few inherent instabilities in this feature. While we work on addressing these issues, the feature can be accessed using the feature flag `enableAlerts` in the manifest.json file. Also, note that UXP alerts will be `available only in Plugins` and `not in scripts`.
- Wildcards (*) at the top-level `domain` name are not allowed. Please ensure you revisit the `permissions` setup in manifest.json for [WebView](./reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement.md), and network calls [XMLHttp](./reference-js/Global%20Members/Data%20Transfers/XMLHttpRequest.md) [fetch](./reference-js/Global%20Members/Data%20Transfers/fetch.md)
- New doc for tracking the [mapping between Spectrum widgets and Spectrum Web Components](./reference-spectrum/spectrum-widgets-to-swc-mapping/index.md) in UXP


### Fixed
- XMP in Scripts.
- Plugin crashes while using [fit-content](https://forums.creativeclouddeveloper.com/t/ps-2024-crashes-when-opening-my-uxp-plugin/6840/7) 
- WebView support for [file selector](https://forums.creativeclouddeveloper.com/t/macos-uxp-webview-for-photoshop-is-missing-file-selector/6843) in MacOS
- GUID returning hashed empty string
- Updated missing docs for pseudo-class [defined](./reference-css/Pseudo-classes/defined.md) (Available since UXP v6.0)

## UXP v7.3.0
### New
- [GUID](./reference-js/Modules/uxp/User%20Information/UserInfo.md) for uniquely identifying a Creative Cloud User (Currently Supported only in `Photoshop`).
- Multipart `FormData` support in [Request](./reference-js/Global%20Members/Data%20Transfers/Request.md) and [Response](./reference-js/Global%20Members/Data%20Transfers/Response.md) for `fetch`
- [FormData](./reference-js/Global%20Members/Data%20Transfers/FormData.md) now supports the following APIs
    - delete()
    - get()
    - getAll()
    - has()
    - keys()
    - set()
    - values()


### Updated
- [FormData's append](./reference-js/Global%20Members/Data%20Transfers/FormData.md#append--namevaluefilename) now supports `Blob` as an additional parameter.
- `Spectrum Web Components` support in `React` context is now available for all 30 components.
    - Sample plugin for UXP-SWC plugin in React context can be referred [here](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter)
### Fixed
- Tab Navigation not working for several SWC Components is now fixed
- Spacebar doesn't work on SWC Button component when reached via TAB navigation.
- Support for `Alerts` in InDesign
    - [alert()](./reference-js/Global%20Members/HTML%20DOM/alert.md)
    - [prompt()](./reference-js/Global%20Members/HTML%20DOM/prompt.md)
    - [confirm()](./reference-js/Global%20Members/HTML%20DOM/confirm.md)

## UDT v2.0

### New
- UXP Playground to experiment with APIs. Click on the 'Playground' tab next to 'Developer Workspace' to select an app and get started.

### Updated
- Plugin actions are surfaced based on the 'Status' of your plugin in the Developer Workspace


## UXP v7.2.0
### New
- Support for XMP in Photoshop
    - [Get Started With XMP](./reference-js/Modules/uxp/XMP/getting-started/index.md)
    - [XMP Classes](./reference-js/Modules/uxp/XMP/XMP%20Classes/index.md)
- Support for [pointer-events:none](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) `CSS` property
- Support for pseudoElement in [getComputedStyle(element, pseudoElement)](./reference-js/Global%20Members/HTML%20DOM/getComputedStyle.md) API

### Updated
- `Spectrum Web Component` is promoted to `release` and has support for [additional list of components](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc/).
- The are updates to the support matrix for Spectrum web components and its variants which is mentioned in the [support matrix](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc/#list-of-supported-swc)
- `swc-uxp-wrappers` to be used to consume the components inside UXP. These wrappers are hosted on [npmjs](https://www.npmjs.com/search?q=swc-uxp-wrappers)
- Plugin sample for [react is available](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter) using SWC.

## UXP v7.1.0

### New
HTMLElement now supports
- [setPointerCapture](./reference-js/Global%20Members/HTML%20DOM/Element.md#setpointercapturepointerid)
- [releasePointerCapture](./reference-js/Global%20Members/HTML%20DOM/Element.md#releasepointercapturepointerid)
- [hasPointerCapture](./reference-js/Global%20Members/HTML%20DOM/Element.md#haspointercapturepointerid)
- [dir](./reference-js/Global%20Members/HTML%20Elements/HTMLHtmlElement.md#dir--string)

### Updated
- Documentation for `shell` moved to [new location](./reference-js/Modules/uxp/shell/)

### Fixed
- `SVGElement`: The color of the `fill` attribute using a CSS variable will resolve as per the variable value. For now, please test this fix by enabling the feature flag in your plugin manifest `"featureFlags" : { "enableFillAsCustomAttribute" : true }`. This flag will be turned on by default in the next UXP release.
```
// CSS variable
html {
  --iconColor: yellow;
}

<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="var(--iconColor, red)" />
</svg>
// shows a yellow circle
```

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
- HTML [2D Canvas Support](./reference-js/Global%20Members/HTML%20Elements/HTMLCanvasElement.md) for Basic Shapes and Styling.
- Alerts
    - [alert()](./reference-js/Global%20Members/HTML%20DOM/alert.md)
    - [prompt()](./reference-js/Global%20Members/HTML%20DOM/prompt.md)
    - [confirm()](./reference-js/Global%20Members/HTML%20DOM/confirm.md)
- Support for [pipeThrough](./reference-js/Global%20Members/Streams/ReadableStream.md#pipeThroughtransform,-options) and [tee](./reference-js/Global%20Members/Streams/ReadableStream.md#tee) in ReadableStream](./reference-js/Global%20Members/Streams/ReadableStream.md). Refer to [Streams](./reference-js/Global%20Members/Streams/index.md) for more details
- [ImageBlob](./reference-js/Global%20Members/ImageBlob/ImageBlob.md) to render an uncompressed image buffer in UXP

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
- [Path Module APIs](./reference-js/Global%20Members/Path/Path.md)
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