---
keywords:
  - SWC
  - SWC in UXP
  - Spectrum Web Components
  - Spectrum Web Components in UXP
title: Spectrum Web Components in UXP
description: Describes the Spectrum Web Components within UXP
contributors:
  - https://github.com/padmkris123
---
# Spectrum Web Component

**Since UXP v7.0**

To understand Spectrum Web Components (popularly known as SWC), you must first familiarize yourself with

- [Web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components): HTML5 Web technology that lets you define custom HTML tags.
- [Spectrum](https://spectrum.adobe.com/): An open-source design language and guidelines provided by Adobe.

[Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/) are open-source Adobe Spectrum-styled Web Components. UXP v7.0 introduces the support for Web Components and Spectrum Web Components (SWC).

## Getting started

__Step 1__: Enable SWC in manifest.json

- Use `manifestVersion` version 5 or above
- Enable the `enableSWCSupport` feature flag

```json
"manifestVersion": 5,
 "host": [
   {
     "app": "PS",
     "minVersion": "24.4"
   }
 ],
 "featureFlags": {
   "enableSWCSupport": true
 }
```

__Step 2__: Install the component. For example,

```
npm install @swc-uxp-wrappers/button
```

__Step 3__: Import the component

```js
import '@swc-uxp-wrappers/button/sp-button.js';
```

```html
<sp-button variant="primary">I'm a button</sp-button>
```

## Sample plugin

The following resources are available for you to get started quickly


### Command line Templates
Use command-line tools (starter templates) for setting up a new UXP-based React/Vanilla app with SWC bundling. It helps you quickly scaffold a project optimized for building UXP plugins using SWC.
- [Vanilla starter template](https://www.npmjs.com/package/@swc-uxp-wrappers/create-swc-uxp-app)
- [React starter template](https://www.npmjs.com/package/@swc-uxp-wrappers/create-swc-uxp-react-app)


### Photoshop

- [Photoshop SWC starter plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter)
- [Photoshop React-based SWC starter plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter) (since UXP v7.3).

### InDesign

- [InDesign SWC starter plugin](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-starter)
- [InDesign React-based SWC starter plugin](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-react-starter) (since UXP v7.3).

Make sure you follow the `README` of the above `plugins`.

## List of supported SWC

Refer to the [Github page](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers) for the list of the components and their variants.
**Note** With UXP v8.0.0, all the SWC components in UXP are locked to version 0.37.0.
**Note** Apart from the components specific known issues, `RTL` direction parameter does not work with `sp-theme` across components.
