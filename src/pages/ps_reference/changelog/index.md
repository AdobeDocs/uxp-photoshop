---
id: "photoshop-api-changelog"
title: API Changelog
description: Contains a running log of changes to the UXP API environment in Adobe Photoshop
contributors:
  - https://github.com/padmkris123
---

# Photoshop API Changelog

## Photoshop Beta (September 2023)

Document objects can report the current [zoom](../classes/document) value.
### UXP Plugin Action Record Again
The ability to re-record an Action step via the Actions panel flyout menu item, "Record Again", or by double-clicking the step now works. To support that ability, see the notes at [Action Recording](../media/action-recording#record-again).

### UXP v7.3 Integration

#### New
- [GUID](../../uxp-api/reference-js/Modules/uxp/User%20Information/index.md) for uniquely identifying a Creative Cloud User.
- Multipart `FormData` support in [Request](../../uxp-api/reference-js/Global%20Members/Data%20Transfers/Request.md) and [Response](../../uxp-api/reference-js/Global%20Members/Data%20Transfers/Response.md) for [fetch](../../uxp-api/reference-js/Global%20Members/Data%20Transfers/fetch/)
- [FormData](../../uxp-api/reference-js/Global%20Members/Data%20Transfers/FormData.md) now supports the following APIs
    - delete()
    - get()
    - getAll()
    - has()
    - keys()
    - set()
    - values()

#### Updated
- [FormData's append](../../uxp-api/reference-js/Global%20Members/Data%20Transfers/FormData.md#append--namevaluefilename) now supports `Blob` as an additional parameter.
- `Spectrum Web Components` support in `React` context is now available for all 30 components.
    - Sample plugin for UXP-SWC plugin in React context can be referred [here](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter)

#### Fixed
- Tab Navigation not working for several SWC Components is now fixed
- Spacebar doesn't work on SWC Button component when reached via TAB navigation.

### UDT v2.0

#### New
- UXP Playground to experiment with APIs. Click on the 'Playground' tab next to 'Developer Workspace' to select an app and get started.

#### Updated
- Plugin actions are surfaced based on the 'Status' of your plugin in the Developer Workspace


## Photoshop 25.0 (September 2023)

### Action Recording
Adds the capability for UXP plugins to record and playback Action steps.
See Advanced [Action Recording](../media/action-recording) for usage details.

### batchPlay option: suppressProgressBar
This [value](../media/batchplay#command-execution-options) can be used to suppress a Photoshop progress bar while the command is being executed.

### Selection
In [Document.selection](../classes/document#selection) you can now find the new [Selection](../classes/selection) class for handling pixel selection.
Properties: `typename`, `docId`, `parent`, `bounds`, `solid`.

And methods:
`contract`, `deselect`, `expand`, `feather`, `grow`, `inverse`, `load`, `makeWorkPath`, `selectAll`, `selectRectangle`, `selectEllipse`, `selectPolygon`, `selectRow`, `selectColumn`, `save`, `saveTo`, `selectBorder`, `smooth`, `translateBoundary`, `resizeBoundary`, `rotateBoundary`. (All methods here return `Promise<void>`.)

### Bug Fixes
- Fixes error when `Channels.getByName` did not work for inactive document

### Photoshop C++ SDK Access from UXP Hybrid Plugins
UXP hybrid plugins can now [access the suites of functionality made available via the Photoshop C++ SDK.](../../guides/hybrid-plugins/getting-started/index.md#photoshop-c-sdk)

### UXP v7.2 Integration

#### New
- Adobe [Extensibility Metadata Platform (XMP)](../../uxp-api/reference-js/Modules/uxp/XMP/getting-started/index.md) support
- [pointer-events: none](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) `CSS` property
- Support for `pseudoElement` in [getComputedStyle(element, pseudoElement)](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/getComputedStyle.md) API

#### Updated
- Support of [Spectrum Web Component (SWC)](../../uxp-api/reference-spectrum/swc/) in UXP is moving out of Beta.
- Support for [additional components and variants](../../uxp-api/reference-spectrum/swc/index.md#list-of-supported-swc) in SWC
- Updated [starter plugin for SWC](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter).

----
## Photoshop 24.6 (June 2023)

### 24.6 Bug Fixes

- Component channels should work now correctly in non-English localizations. This applies to:
  - `document.componentChannels`
  - `document.compositeChannels` (deprecated)
  - `document.activeChannels`
  - `channels.getByName()`
  - other methods inherited from an Array in Channels Class
- Channel should be now returned correctly in Bitmap and Indexed Color modes.
- Component channel name will now throw an error if channel no longer exist in document.
- Component channel name is no longer converted into lowercase and is same as in UI.
- TypeScript: `channels.parent` now points to the correct `Document` type.
- Deprecated `document.compositeChannels` since these channels are component not composite. 
  Use `componentChannels` instead.

----
## Photoshop 24.5 (May 2023) 

### Calculations and Apply Image
The blending operations [Layer](../classes/layer) Apply Image and [Document](../classes/document) Calculations are now available.

- [`applyImage()`](classes/layer/#applyimage)
- [`calculations()`](classes/document/#calculations)

Both methods accept an options object that matches the parameters required in the respective UI dialog.

### Other updates
 - Replaced `compositeChannels` property on Document with more appropriately named `componentChannels`.
 - Channels returned will be of type `ComponentChannel` instead of `CompositeChannel` with corresponding `typename`.

### UXP v7.1 Integration

#### New
HTMLElement now supports
- [setPointerCapture](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#setpointercapturepointerid)
- [releasePointerCapture](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#releasepointercapturepointerid)
- [hasPointerCapture](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#haspointercapturepointerid)
- [dir](../../uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLHtmlElement.md#dir--string)

#### Updated
- Documentation for `shell` module moved to [new location](../../uxp-api/reference-js/Modules/uxp/shell/)

#### Fixed
- `SVGElement`: The color of the `fill` attribute using a CSS variable will resolve as per the variable value. For now, please test this fix by enabling the feature flag in your plugin manifest `"featureFlags" : { "enableFillAsCustomAttribute" : true }`. This flag will be turned on by default in the next UXP release. 

```
// CSS variable
html {
  --iconColor: yellow;
}
```

----
## Photoshop 24.4 (April 2023)

### Imaging API update
The [Imaging API](../media/imaging) is moving out of Prerelease.  It will now be available in the Beta build with the module name "imaging".
Previously, access was via `require("photoshop").imaging_beta`. It is now `require("photoshop").imaging`.
#### Improvements and Fixes
- Speed on Windows, especially medium to small images.
- Invalid `targetBounds` caused crash.

### UXP v7.0 Integration
#### New
- Support for Web Components in UXP Plugins. Various HTML elements and methods have been added to support this feature.
    - Classes
        - [HTMLSlotElement](../../uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLSlotElement.md)
        - [HTMLTemplateElement](../../uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLTemplateElement.md)
    - Methods
        - [Element.assignedSlot](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#assignedslot--htmlslotelement)
        - [Element.slot](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#slot--string)
        - [Element.attachShadow](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#attachshadowinit)
        - [Element.shadowRoot](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#shadowroot--shadowroot)
        - [CustomElementRegistry.upgrade](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry.md#upgraderoot)
        - [CustomElementRegistry.whenDefined](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry.md#whendefinedname)
- [Spectrum Web Components (Beta)](../../uxp-api/reference-spectrum/swc/index.md) Support for Adobe SWC.
- Several augmentations to the JS API set
    - Properties
        - [HTMLElement.lang](../../uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLElement.md#lang--string)
    - Classes added to the global scope
        - [TreeWalker](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/TreeWalker.md)
        - [NodeFilter](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/NodeFilter.md)
    - Methods
        - [Element.hasAttributes](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#hasattributes)
        - [Element.getAttributeNames](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#getattributenames)
        - [Event.composed](../../uxp-api/reference-js/Global%20Members/HTML%20Events/Event.md#composed--boolean)
        - [Event.composedPath](../../uxp-api/reference-js/Global%20Members/HTML%20Events/Event.md#composedpath)
        - [DocumentFragment.append](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#appendargs)
        - [DocumentFragment.querySelector](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#queryselectorselector)
        - [DocumentFragment.querySelectorAll](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#queryselectorallselector)
- New focus events to support React 16
    - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
    - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- HTML [2D Canvas Support](../../uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLCanvasElement.md) for basic shapes and styling.
- Alerts
    - [alert()](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/alert.md)
    - [prompt()](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/prompt.md)
    - [confirm()](../../uxp-api/reference-js/Global%20Members/HTML%20DOM/confirm.md)
- Support for [pipeThrough](../../uxp-api/reference-js/Global%20Members/Streams/ReadableStream.md#pipeThroughtransform-options) and [tee](../../uxp-api/reference-js/Global%20Members/Streams/ReadableStream.md#tee) in [ReadableStream](../../uxp-api/reference-js/Global%20Members/Streams/ReadableStream.md). Refer to [Streams](../../uxp-api/reference-js/Global%20Members/Streams/index.md) for more details
- [ImageBlob](../../uxp-api/reference-js/Global%20Members/ImageBlob/) to render an uncompressed image buffer in UXP

#### Changed
- [HTMLVideoElement](../../uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md): 'metadata' is the default value for `preload` attribute
- [FS API](../../uxp-api/reference-js/Modules/fs/): No need for the `file://` protocol

----
## Photoshop 24.2 (February 2023)

### Imaging API Beta
We are excited to provide an entirely new capability with the [Imaging API](../media/imaging).  Anyone that has been eagerly awaiting the ability to directly get and set pixels in a document should head to the [dedicated page](../media/imaging).  Note: we are serious about the Beta label.  While this is exciting new territory, keep in mind that the API is in an early form.  We want your feedback to help guide it toward maturity.

### Text support
The UXP DOM features a variety of new text-related APIs, that provide a more robust and consistent experience for developers. Instead of aiming for ExtendScript parity, the UXP DOM has been designed to provide a more modern and intuitive API surface. While still providing the old functionality, it's been extended to cover many features that weren't previously available.

- A [Document.createTextLayer](../classes/document.md#createtextlayer) method was added, which allows developers to create a new text layer in a document. It accepts a [TextLayerCreateOptions](../objects/createoptions/textlayercreateoptions/) object, which can be used to set the initial text content, style, and other properties.
- The `textItem` property of a Text Layer is the entrypoint for everything text-related. It provides direct access to a few properties and methods:
  - contents
  - isParagraphText
  - isPointText
  - orientation
  - textClickPoint
  - convertToParagraphText()
  - convertToPointText()
  - convertToShape()
  - createWorkPath()
- Properties and methods related to features made available by Photoshop in the Character palette are now grouped in the `textItem.characterStyle` object:
  - alternateLigatures
  - antiAliasMethod
  - autoKerning
  - baseline
  - baselineShift
  - capitalization
  - characterAlignment
  - color
  - fauxBold
  - fauxItalic
  - font
  - fractionalWidths
  - fractions
  - horizontalScale
  - kashidas
  - horizontalDiacriticPosition
  - verticalDiacriticPosition
  - language
  - leading
  - ligatures
  - middleEasternDigitsType
  - middleEasternTextDirection
  - noBreak
  - ordinals
  - size
  - strikeThrough
  - stylisticAlternates
  - swash
  - titlingAlternates
  - tracking
  - useAutoLeading
  - verticalScale
  - reset()
- Properties and methods related to features made available by Photoshop in the Paragraph palette are now grouped in the `textItem.paragraphStyle` object:
  - firstLineIndent
  - hyphenation
  - hyphenationFeatures
  - justification
  - justificationFeatures
  - layoutMode
  - kashidaWidth
  - kinsoku
  - mojikumi
  - leftIndent
  - rightIndent
  - spaceAfter
  - spaceBefore
  - reset()
- Properties and methods related to features made available by Photoshop in the Warp text dialog are now grouped in the `textItem.warpStyle` object:
  - style
  - direction
  - bend
  - horizontalDistortion
  - verticalDistortion
  - reset()
  
### Other fixes

- `solidColor.cmyk` no longer shows `undefined` for `yellow` color. Also setter is now fixed.
- `SolidColor` - Adds range validation for all color modes and its components so it should not be possible to enter invalid value. This should also fix invalid hex code value.
- Adds setter to the `app.backgroundColor` so it can be changed.
- `app.backgroundColor` and `app.foregroundColor` were broken when color was was not picked as RGB color*
- RGB32 is currently not supported. If RGB 32 bit per channel is obtained, it will be converted automatically into
nearest RGB 16 bit per channel.

### UXP v6.5 Integration
#### New
- [UXP Hybrid plugins](../../guides/hybrid-plugins/)
- Allow unrestricted relative paths in require from scripts
- [getEntryWithUrl](../../uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider.md#getentrywithurlurl) in LocalFileProvider

----
## Photoshop 24.1 (December 2022)

### app.getColorProfiles
Color profiles are needed for the Imaging API, so a new method on the `app` is introduced to return profile names.  At this time, only profiles for RGB and Gray are available.

### CountItems support

The CountItems DOM API is now available in Photoshop.

- The [CountItems collection](../classes/countitems/) behaves like other collections at the Document level in the API. CountItems further support the following properties and methods:
  - `typename`, `length`, `parent`.
  - `add()`, `removeAll()`, `getAll()`, `createGroup()`, `renameActiveGroup()`, `removeGroupByIndex()`, `toggleActiveGroupVisibility()`, `activateGroupByIndex()`, `setActiveMarkerSize()`, `setActiveLabelSize()`, `setActiveColor()`.

### Other fixes

#### We now throw errors in more situations with layer blend modes

- Passing a value that is not in [Constants.blendMode](../modules/constants/#blendmode).
- Passing a blend mode that is not compatible with the document's color mode or bit depth. Previously, this call would fail silently.
- Attempting to set the blend mode on the Background layer. Previously, doing so would convert Background to a regular layer and generate a new layer ID.  Automatic Background promotion is undesirable as a side effect in this case.  This action is not available via the UI.

- The [CountItem class](../classes/countitem) implements the following properties and methods: 
  - `typename`, `parent`, `itemIndex`, `groupIndex`, `position`
  - `move()`, `remove()`
  - 

### UXP v6.4 Integration
#### New
- [WebView](../../uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement) for panels
- Support [Path Module APIs](../../uxp-api/reference-js/Global%20Members/Path)
- Script can run fsapi with full access in localFileSystem

#### Bugs Fixes
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

----
## Photoshop 24.0 (October 2022)

### Preferences
Adds API to change some of the Photoshop [preferences](../classes/preferences). Only first set of 38 preferences was added. More will follow.

### ColorSamplers support
The ColorSampler DOM API is now available in Photoshop.

- The [ColorSamplers collection](../classes/colorsamplers/) behaves like other collections at the Document level in the API. ColorSamplers further supports the following methods:
    - `colorSamplers.add()` 
    - `colorSamplers.removeAll()`
- The [ColorSamplers class](../classes/colorsampler) implements the following properties and methods: 
    - `typename`: String
    - `parent`: [Document](../classes/document)
    - `position`: `{x: number, y: number}`
    - `color`: [SolidColor](../classes/solidcolor.md)
    - `move({x: number, y: number})`
    - `remove()`
    <!-- - `sampleSize()`: static member, accepts values from [Constants.SampleSize](../modules/constants/#samplesize). -->
- The [Document](../classes/document#samplecolor) class implements a new `sampleColor()` method that samples an `{x, y}` position on the fly, returning a [SolidColor](../classes/solidcolor.md) object without the need to create a [ColorSampler](../classes/colorsampler.md) object.

### Layer Comps support
- [Document.layerComps](../classes/document/#layercomps) property is now added, giving access to similar APIs from ExtendScript to work with layer comps.
- [LayerComps collection](../classes/layercomps)
  - Adds the following Layer Comp methods: `add()`, `removeAll()`, `getByName()`
  - Create new layer comps in the document using [`LayerComps.add()`](../classes/layercomps/#add) method. Constructors for them can be found in [app](../classes/photoshop/) object.
- [LayerComp class](../classes/layercomp)
  - Adds the following Layer Comp properties: `name`, `comment`, `selected`, `appearance`, `position`, `visibility`, `childComp`.
  - Adds the following Layer Comp methods: `apply()`, `recapture()`, `remove()`, `resetLayerComp()`, `duplicate()`

### Guide fixes
- [Guide.coordinate](../classes/guide/#coordinate) Fixes coordinate getter when document resolution is not 72 PPI
- [Guide.coordinate](../classes/guide/#coordinate) Fixes coordinate setter when document resolution is not 72 PPI
- [Guides.add](../classes/guides/#add) Fixes coordinate when creating a new guide if document resolution is not 72 PPI
- [Guides.add](../classes/guides/#add) Creating a new guide had returned an invalid, nonexistent instance. It now points to an existing guide.

### Known Issues and Workarounds
- A new page of [Known Issues and Workarounds](../known-issues) was introduced, and aims to outline some common issues encountered by our developer community. New entries will be summarized in this changelog.
- A note about increased error throws from `batchPlay`, specifically with the `move` command, was added.

### Layer Filter Methods
- [Layer.applySmartBlur(radius: number, threshold: number, blurQuality: Constants.SmartBlurQuality, mode: Constants.SmartBlurMode)](../classes/layer/#applysmartblur) Applies the smart blur filter.
- [Layer.applySpherize(amount: number, mode: Constants.SpherizeMode)](../classes/layer/#applyspherize) Applies the spherize filter.
- [Layer.applyUnSharpMask(amount: number, radius: number, threshold: number)](../classes/layer/#applyunsharpmask) Applies the unsharp mask filter.
- [Layer.applyWave(generatorNumber: number, minimumWavelength: number, maximumWavelength: number, minimumAmplitude: number, maximumAmplitude: number, horizontalScale: number, verticalScale: number, waveType: Constants.WaveType, undefinedAreas: Constants.UndefinedAreas, randomSeed: number)](../classes/layer/#applywave) Applies the wave filter.
- [Layer.applyZigZag(amount: number, ridges: number, style: Constants.ZigZagType)](../classes/layer/#applyzigzag) Applies the zigzag filter.

### Other
- Color mode validation for all filters
- Fixed Lens Flare coordinates
- Fixed file arguments for filters 

----
## Photoshop 23.5 (August 2022)

### UXP Scripting
Script files with extension .psjs are executed using UXP. 
- [Overview](../../scripting/)
- [Quickstart Guide](../../scripting/getting-started/)
- [Ps UXP Scripting](../media/uxpscripting/)

### Layer Filter methods
- [Layer.applyAddNoise(amount: number, distribution: Constants.NoiseDistribution, monochromatic: boolean)](../classes/layer/#applyaddnoise) Applies the Add Noise filter.
- [Layer.applyAverage()](../classes/layer/#applyaverage) Applies the Average filter.
- [Layer.applyBlur()](../classes/layer/#applyblur) Applies the Blur filter.
- [Layer.applyBlurMore()](../classes/layer/#applyblurmore) Applies the Blur More filter.
- [Layer.applyClouds()](../classes/layer/#applyclouds) Applies the Clouds filter.
- [Layer.applyCustomFilter(characteristics: number[], scale: number, offset: number)](../classes/layer/#applycustomfilter) Applies the Custom filter.
- [Layer.applyDeInterlace(eliminateFields: Constants.EliminateFields, createFields: Constants.CreateFields)](../classes/layer/#applydeinterlace) Applies the De-Interlace filter.
- [Layer.applyDespeckle()](../classes/layer/#applydespeckle) Applies the Despeckle filter.
- [Layer.applyDifferenceClouds()](../classes/layer/#applydifferenceclouds) Applies the Difference Clouds filter.
- [Layer.applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number)](../classes/layer/#applydiffuseglow) Applies the Diffuse Glow filter.
- [Layer.applyDisplace(horizontalScale: number, verticalScale: number, displacementType: Constants.DisplacementMapType, undefinedAreas: Constants.UndefinedAreas, displacementMapFile: File)](../classes/layer/#applydisplace) Applies the Displace filter.
- [Layer.applyDustAndScratches(radius: number, threshold: number)](../classes/layer/#applydustandscratches) Applies the Dust and Scratches filter.
- [Layer.applyGaussianBlur(radius: number)](../classes/layer/#applygaussianblur) Applies the Gaussian Blur filter.
- [Layer.applyGlassEffect(distortion: number, smoothness: number, scaling: number, invert: boolean, texture: Constants.TextureType, textureFile?: File)](../classes/layer/#applyglasseffect) Applies the Glass filter.
- [Layer.applyHighPass(radius: number)](../classes/layer/#applyhighpass) Applies the High Pass filter.
- [Layer.applyLensBlur(source: Constants.DepthMapSource, focalDistance: number, invertDepthMask: boolean, shape: Constants.Geometry, radius: number, bladeCurvature: number, rotation: number, brightness: number, threshold: number, amount: number, distribution: Constants.NoiseDistribution, monochromatic: boolean)](../classes/layer/#applylensblur) Applies the Lens Blur filter.
- [Layer.applyLensFlare(brightness: number, flareCenter: {x: number, y: number}, lensType: Constants.LensType)](../classes/layer/#applylensflare) Applies the Lens Flare filter.
- [Layer.applyMaximum(radius: number, preserveShape: Constants.PreserveShape)](../classes/layer/#applymaximum) Applies the Maximum filter.
- [Layer.applyMinimum(radius: number, preserveShape: Constants.PreserveShape)](../classes/layer/#applyminimum) Applies the Minimum filter.
- [Layer.applyMedianNoise(radius: number)](../classes/layer/#applymediannoise) Applies the Median Noise filter.
- [Layer.applyMotionBlur(angle: number, distance: number)](../classes/layer/#applymotionblur) Applies the Motion Blur filter.
- [Layer.applyNTSC()](../classes/layer/#applyntsc) Applies the NTSC filter.
- [Layer.applyOceanRipple(size: number, magnitude: number)](../classes/layer/#applyoceanripple) Applies the Ocean Ripple filter.
- [Layer.applyOffset(horizontal: number, vertical: number, undefinedAreas: Constants.OffsetUndefinedAreas)](../classes/layer/#applyoffset) Applies the Offset filter.
- [Layer.applyTwirl(angle: number)](../classes/layer/#applytwirl) Applies the Twirl filter.
- [Layer.applyPinch(amount: number)](../classes/layer/#applypinch) Applies the Pinch filter.
- [Layer.applyPolarCoordinates(conversion: Constants.PolarConversionType)](../classes/layer/#applypolarcoordinates) Applies the Polar Coordinates filter.
- [Layer.applyRipple(amount: number, size: Constants.RippleSize)](../classes/layer/#applyripple) Applies the Ripple filter.
- [Layer.applySharpen()](../classes/layer/#applysharpen) Applies the Sharpen filter.
- [Layer.applySharpenEdges()](../classes/layer/#applysharpenedges) Applies the Sharpen Edges filter.
- [Layer.applySharpenMore()](../classes/layer/#applysharpenmore) Applies the Sharpen More filter.
- [Layer.applyShear(curve: {x: number, y: number}[], undefinedArea: Constants.UndefinedAreas)](../classes/layer/#applyshear) Applies the Shear filter.

----
## Photoshop 23.4 (July 2022)

### convertUnits method on the Photoshop Application object
 - [Application.convertUnits](../classes/photoshop/#convertunits) is a method for converting the pixel values found in the UXP API to other units. For example, use this routine for converting a document's width from pixels to inches.

----
## Photoshop 23.3 (April 2022)

### Paths support
 - Document.pathItems property is now added, giving access to same APIs from ExtendScript to work with paths.
 - `Document.pathItems` provides the collection class [PathItems](../classes/pathitems/), which is a collection of [PathItem](../classes/pathitem/) objects.
 - `PathItem.subPathItems` provides the collection class [SubPathItems](../classes/subpathitems/), which is a collection of [SubPathItem](../classes/subpathitem/) objects.
 - `SubPathItem.pathPoints` provides the collection class [PathPoints](../classes/pathpoints/), which is a collection of [PathPoint](../classes/pathpoint/) objects.
 - Create new paths in the document using [`PathItems.add`](../classes/pathitems/#add) method by providing `PathPointInfo` and `SubPathInfo` objects. Constructors for them can be found in [app](../classes/photoshop/) object.

### Load on Launch support
You can now set your plugin manifest to load your plugin on app launch. See [Photoshop Manifest](../../guides/uxp_guide/uxp-misc/manifest-v4/photoshop-manifest/) for details.

### batchPlay development helper: Copy as Javascript
It is now possible to use the Photoshop Actions panel to help build your plugin. Record valid actions, and let Photoshop generate readable and valid batchPlay to use in your UXP plugin. See the [batchPlay documentation](../media/batchplay.md#accepted-action-descriptors) under "Accepted action descriptors".

### Core event: "userIdle"
This event is generated when Photoshop detects that a user becomes idle, while Photoshop is the foreground application. A plugin must specify a number of idle seconds, and then may choose to batch process-intensive tasks. See [photoshopCore](../media/photoshopcore/).

### Interactive Mode for executeAsModal
As an alterative to a UI-blocking progress bar when a plugin is within a Modal Execution scope, `interactiveMode` can be requested to allow for user interaction in specific circumstances. See [Interactive Mode](../media/executeasmodal#interactive-mode/).

----
## Photoshop 23.2 (February 2022)
- Core Module: `setExecutionMode()`
- Core Module: `getPluginInfo()`

----
## Photoshop 23.1 (December 2022)
- Core Module: `batchPlaySync()`
- Core Module: `validateReference()`
- Core Module: `isModal()`
- Core Module: `getCPUInfo()`
- Core Module: `getGPUInfo()`

----
## Photoshop 23.0 (October 2021)

### Channel support
- [Channels collections](../classes/channels/) behave like other collections in the API. Channels further supports `channels.add()` and `channels.removeAll()`. 
- [Channel class](../classes/channel)
    - Supports four types of channels, as listed in [Constants.ChannelType](../modules/constants/#channeltype): `COMPONENT`, `MASKEDAREA`, `SELECTEDAREA`, `SPOTCOLOR`.
    - Adds the following Channel properties: `name`, `type`, `visible`, `histogram`, `color`, `opacity`.
    - Adds the following Channel methods: `remove()`, `merge()` (for ChannelType.SPOTCOLOR).
    - Adds to the Document class: `get compositeChannels`, `get activeChannels`, `set activeChannels`.

### Document Transformations
- `Document.crop(bounds: Bounds, angle, width, height)`: Crops the document. The `bounds` paramter is an array of four coordinates for the region remaining after cropping, [left, top, right, bottom].
- `Document.resizeCanvas(width, height, Constants.AnchorPosition)`: Changes the size of the canvas to display more or less of the image but does not change the image size. See `resizeImage`
- `Document.resizeImage(width, heigh, resolution, Constants.ResampleMethod, amount)`: Changes the size of the image. The `amount` of noise value when using preserve details (Range: 0 1 100).
- `Document.rotateCanvas(angle)`: Rotates the image and resizes the canvas to fit the resized image.
- `Document.trim(Constants.TrimType, top, left, bottom, right)`: If `TrimType.TRANSPARENT`, trims the transparent area around the image on the specified sides of the canvas. Trims surround areas that color match the top left corner or bottom right corner pixel if `TrimType.TOPLEFT` or `TrimType.BOTTOMRIGHT` is specified, respectively.

### Layer cut and copy
- `layer.cut()`: Cut the pixels out of the layer.
- `layer.copy(merge: boolean)`: Copy the layer or if a selection is present the merge option will copy from multiple layers..

### Layer Methods
- `layer.duplicate(relativeObject?: Document | Layer, insertionLocation?: Constants.ElementPlacement, name?: string)`: Duplicates the layer, creating a copy above it in layer stack and returns the newly created layer.
- `layer.delete()`: Deletes this layer from the document.
- `layer.link()`: Creates a link between this layer and the target layer if not already linked and returns a list of layers linked to this layer.
- `layer.unlink()`: Unlinks the layer from any existing links.

### Document paste
- `document.paste(intoSelection: boolean)`: Pastes the contents of the clipboard into the document. If the optional argument is set to true and a selection is active, the contents are pasted into the selection.

### Document Methods
- `Document.flatten()`: Merges all visible layers in the document into a single layer.
- `Document.mergeVisibleLayers()`: Flattens all visible layers in the document
- `Document.revealAll()`: Expands the document to show clipped sections.
- `Document.rasterizeAllLayers()`: Rasterizes all layers.
- `Document.splitChannels()`: Splits the document channels into separate, single-channel documents.
- `Document.duplicate()`: Creates a copy of the document, switching to the copy.

### [SolidColor](../classes/solidcolor) API
 - Add require('photoshop').app.SolidColor constructor, which allows for creation of SolidColor objects.
 - APIs that accept colors now also accept SolidColor objects.
   - app.foregroundColor and app.backgroundColor.
   - app.documents.add `fillColor` property.
   - Document.saveAs methods that use colors.
 - `require('photoshop').core.convertColor` low level API added, used internally by SolidColor. It uses app color 
 settings to convert between color spaces.

## Adobe Photoshop Beta Build 65: Sep 3, 2021 (23.0)

### Layer Transformations
- `layer.rotate(angle: number, anchor?: Constants.AnchorPosition)`: Rotate by `angle` about `anchor`.
- `layer.scale(width: number, height: number, anchor?: Constants.AnchorPosition)`: Scale layer by `width` percent and `height` percent of the image, relative to `anchor`.
- `layer.translate(horizontal: number, vertical: number)`: Translate layer by `horizontal` and `vertical` offset (by pixel or percent).

### app.fonts and TextFont classes
 - `app.fonts` getter: Returns all installed fonts
 - `TextFont` class and `TextFonts` collection class

### Document Properties

- Document.bitsPerChannel (read-write): The bits per color channel (type Constants.BitsPerChannelType)
- Document.cloudDocument (read only): This document is in the Adobe Creative Cloud (type boolean)
- Document.cloudWorkAreaDirectory (read only): Local directory for this cloud document (type string)
- Document.histogram (read only): A histogram containing the number of pixels at each color intensity level for the composite channel. The array contains 256 members.
- Document.name (read only): The name of the document (type string)
- Document.path (read only): Full file system path to this document, or the identifier if it is a cloud document (type string)
- Document.quickMaskMode (read-write): The state of Quick Mask mode. If true, the app is in Quick Mask mode (type boolean)
- Document.saved (read only): True if the document has been saved since the last change (type boolean)

### Document Color Profile APIs

 - Document.mode property (read only)
 - Document.colorProfileType and Document.colorProfileName properties (read-write)
 - Document.changeMode(), Document.convertProfile(), and Document.trap() methods

## Adobe Photoshop Beta Build 64: Aug 6, 2021 (23.0)

### [Document.suspendHistory](../classes/document/#suspendhistory)

This API wraps around [`core.executeAsModal`](https://adobe.ly/psmodal) within a single document to make it easier for you to run your code under a single history state. Unlike it's ExtendScript predecessor, this method takes a Javascript function, rather than a script string.

### [Layer Move APIs](../classes/layer/#move)

- Arrange layers with `layer.move(targetLayer, Constants.ElementPlacement)`. Added `Constants.ElementPlacement` for moving layers: `"placeAfter"` (place below a layer, below group if group layer), `"placeBefore"` (place above a layer, above group if group layer), and `"placeInside"` (inside group layers only).
- Send a layer to the back or bring a layer to the front with `layer.sendToBack()` and `layer.bringToFront()`. If `layer` is within a group, the commands will operate within that group.

## Adobe Photoshop Prerelease Build 61: Jun 24, 2021 (22.5)

### Updated DOM API

- New `Layers` collection, the old `layerTree` object is now called `layers` but as a collection using the JavaScript Proxy object. See below for introduction of collections. The old `layers` behavior is no longer part of the DOM. Most scripts can be updated to replace `layerTree` with `layers`.  A document and a layer, if the layer kind is group, will have a valid `layers` collection. A `pixel` layer will have `null` for the `layers` property. A collection has the same semantics as an Array. The additional ExtendScript routines of `add` and `getByName` are also available. Use `LayerKind.GROUP` on a `layer` to see if any `layers` are available.
- `GroupLayer` has been removed. Use `activeLayer.kind === LayerKind.GROUP` instead.
- `Constants.LayerKind`, similar to ExtendScript version, but with "group" layer addition.
- Layer APIs
    - *new* locked, read-only way to tell if any of the properties are locked
    - allLocked, pixelsLocked, positionLocked, transparentPixelsLocked properties
    - Some existing properties exposed in documentation

## Adobe Photoshop Prerelease Build 60: Jun 10, 2021 (22.5)

This update contains changes that were made since the MAX 2020 (Adobe Photoshop 22.0) release.

### Breaking changes
To use the new set of APIs, your project's `manifest.json` must be updated to include the following under the `host` object:
```javascript
    "data" : {
        "apiVersion": 2
    }
```
Further, your `manifest.json` must use version 4:
```javascript
  "manifestVersion": 4
```
To roll back to the MAX 2020 version of the Photoshop DOM API, set the `apiVersion` to 1.

### Updated DOM API
- Collections
    - We're introducing collection classes built using [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), to make it easier to interact with the DOM.
    - Try iterating through all the documents as such: `app.documents.forEach(h =console.log(h.title));`
- [HistoryStates collections](../classes/historystates/) and [HistoryState API](../classes/historystate/)
    - We've built HistoryStates to mirror ExtendScript functionality. `length`, `parent`, and `getByName(name)` are provided. You can also use indices as such: `activeDocument.historyStates[2]`.
    - HistoryState provides `name`, `parent`, `snapshot`.
- [Documents collections](../classes/documents/)
    - Documents also follows ExtendScript functionality. `length`, `add`, `getByName(name)`, `parent` are provided.
- [Constants module](../modules/constants/), collecting all enumerations and constants used in DOM API. Accessible via `require("photoshop").constants`.
- Updated [app.createDocument / app.add](../classes/photoshop/#createdocument)
    - Create a document with no params for a default document, with a predefined preset, or by providing a host of [DocumentCreateOptions](../objects/createoptions/documentcreateoptions/)).
- Updated [document.save](../classes/document/#save) and [document.saveAs](../classes/document/#saveas)
    - `save` no longer infers the file type from the requested file name. Instead, it invokes a save dialog for unsaved files, and performs a save operation for saved, modified files.
    - `saveAs` is provided for `bmp`, `gif`, `jpg`, `png`, `psb`, `psd` formats. Use SaveOptions objects to request specific saves (e.g. [PhotoshopSaveOptions](../objects/photoshopsaveoptions/)).
- [layer.id getter](../classes/layer)
- Updated [document.createLayer](../classes/document/#createlayer) and [document.createLayerGroup](../classes/document/#createlayergroup)
    - With respective Create options: LayerCreateOptions and GroupLayerCreateOptions.
    - Collection access updates for Layer and Layer-like items are planned for upcoming releases.

#### Photoshop Core updates
- [Execute as Modal](../media/executeasmodal/) allows you to create plugins that can be guaranteed exclusive control over Photoshop during execution. It further allows for clear user feedback when this is occuring, and allows plugins to `suspendHistory` and `resumeHistory`.