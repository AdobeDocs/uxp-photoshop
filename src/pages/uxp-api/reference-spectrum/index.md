---
keywords:
  - Spectrum UXP Reference
  - Spectrum Web Components
  - SWC
  - Web Components
  - Spectrum differences
  - Spectrum in UXP
  - Spectrum to SWC Mapping
title: Adobe Spectrum UXP Reference
description: Describes the Spectrum-related UI options available within UXP 
contributors:
  - https://github.com/padmkris123
---

# Spectrum UXP Reference


UXP supports the UI to be written in three ways using standard HTML Elements, built-in Spectrum UXP widgets, and Spectrum Web Components (recently added)


But before we proceed, it's important to understand some terminology
- Spectrum - An open-source design language and guidelines provided by Adobe.
- Web components - HTML5 Web technology lets you define custom HTML tags.
- Adobe Spectrum Web Components (popularly known as SWC) - An open-source library that has Spectrum-styled web components.


With that in mind, let's get into the details:
- **HTML elements** \<br\>\</br\>
   These are pure HTML elements following the web standards. For example, `<img>`, `<dialog>` etc. You have the flexibility to style them with your custom stylesheet. Check out the list of supported HTML [tags](../reference-html/index.md) and [elements](../reference-js/global-members/html-elements/index.md).
  
- **Spectrum UXP widgets** \<br\>\</br\>
   These are built-in Spectrum-styled UXP components. These widgets mimic the Adobe SWC library APIs and expose a subset of the functionality of the corresponding SWC. 

   You can use them as you would any other HTML tag. For example,
   
   ```html
   <sp-button variant="primary">I'm a Spectrum button</sp-button>
   ```

   Take a look at the list of UXP-supported Spectrum widgets - [User Interface](spectrum-uxp-widgets/user-interface/index.md) and [Typography](spectrum-uxp-widgets/typography/index.md)


- **UXP Spectrum web components** \<br\>\</br\>
   These are the Adobe Spectrum Web Components, supported from UXP v7.0 onwards. It's built using Web Components technology.

   In order to use them, you are required to install the components individually and then `import` them before using the component tag. For example,
  
   ```
   npm i @swc-uxp-wrappers/button
   ```
  
   ```js
   import '@swc-uxp-wrappers/button/sp-button.js';
   ```


   ```html
   <sp-button variant="primary">I'm a SWC button</sp-button>
   ```
  Note that although the tag appears to be identical to Spectrum UXP widgets, the way they are implemented is fundamentally different. Read on to learn more about the differences.


## Differences

Now that you know the various options, you must understand their differences and limitations


- **HTML elements** \<br\>\</br\>
   Keep in mind that UXP is not a browser. It's a platform that provides the ease of using web technologies to build plugins/scripts for desktop applications. Hence, it does not support all the HTML/CSS capabilities you can use in a browser. In fact, the tags that are _not_ supported are treated like simple `<div>`.

   Do take a look at the list of HTML [elements](../reference-html/general/unsupported-elements.md), and [attributes](../reference-html/general/unsupported-attributes.md) that are _not_ supported.
  
- **Spectrum UXP widgets**\<br\>\</br\>
   Remember that these are built-in within UXP. Therefore, they may appear to be a black-box solution that does not allow you to peek into the details during debugging or alter their behavior easily.

   ![Debug Spectrum UXP Widgets](./assets/debug-sp.png)


- **UXP Spectrum web components** \<br\>\</br\>
   The support for SWC in UXP is more extensive. It has 30 components including some unique ones that are not available in Spectrum widgets such as table, toast, card etc.
   Plus, these components follow the principles of SWC and web components, which means
   1. You need to `install` and `import` individual comps before using them
   2. You can debug SWC like a regular Web Component 
      ![Debug SWC](./assets/debug-swc.png)


That said, you can mix and match these three offerings to suit your use case. For example, the following will work seamlessly


```HTML
<form> <!-- plain HTML element -->
   <sp-banner> <!-- Spectrum Web Component -->
     <div slot="header">Header text</div>
     <div slot="content">Content of the banner</div>
  </sp-banner>
  <sp-button variant="primary">I'm a button</sp-button> <!-- Spectrum widget -->
</form>
```

## What's best for you?


The choice you make depends on your use case and the stage of development you are in.


If you are looking for a ready-made Adobe Spectrum-styled UI or are just getting started with programming your UI, we recommend you start your journey with SWC. Fall back to Spectrum UXP widgets for variants in the comps that are not available yet. And use plain HTML elements when they are not available in either.


However, if you prefer vanilla HTML and don't mind undertaking the efforts of styling, use the HTML elements along with your custom stylesheet. In fact, you can build your own custom tags using Web Components.


If you are thinking of upgrading your existing UI, you should check out the new components in SWC that are not available with Spectrum UXP widgets.


Visit the following topics to learn about them in detail
- [Spectrum Web Components](swc/index.md)
- [Spectrum UXP widgets](spectrum-uxp-widgets/index.md)
- [Spectrum widgets to SWC Mapping](spectrum-to-swc-mapping/index.md)

