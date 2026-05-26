---
keywords:
  - Spectrum Web Components FAQs
  - UXP SWC FAQs
  - FAQs
title: Spectrum Web Components - FAQs
description: FAQs for Adobe Spectrum Web Components in UXP
contributors:
  - https://github.com/padmkris123
---

# FAQs

\<br\>\</br\>

### Q: What is the advantage of using SWC?
A: Since SWC are built using Web Components, they are web-compatible. You can easily port your UI into web browsers.
Also, compared to Spectrum UXP Widgets, you can debug SWC like a standard Web Component.

\<br\>\</br\>

### Q: Can I use Spectrum UXP Widgets and SWC with other frameworks such as React?
A: Yes. These components are framework agnostic, and you can use them with any framework that works with UXP. Do note, however, that some frameworks do have special idioms for working with web components, so be sure to read the documentation for your framework. Check out the [Use with React](../spectrum-uxp-widgets/using-with-react.md) section.

A React wrapper for SWC is also in progress. A sample plugin will soon be added.

\<br\>\</br\>

### Q: Is the Spectrum UXP widget going away?
A: No, but we are no longer adding new capabilities to these widgets.

\<br\>\</br\>

### Q: The tags for Spectrum UXP widgets and SWC look identical. How do I differentiate?
A: Certain components, such as `<sp-button>` and `<sp-link>`, are available as both - Spectrum UXP Widget and SWC. However, you should pay attention to the `import` step needed by SWC. Once imported, UXP will assume you intend to use the SWC variation. 

\<br\>\</br\>

### Q: Can Spectrum UXP widgets and SWC co-exist?
A: Yes. You can combine the two worlds seamlessly. For example,
```
<sp-banner> <!-- Spectrum Web Components -->
   <div slot="header">Header text</div>
   <div slot="content">Content of the banner</div>
</sp-banner>
<sp-dropdown placeholder="Select an option" style="width: 320px"> <!-- Spectrum UXP Widget -->
   <sp-menu slot="options">       
      <sp-menu-item> Option 1 </sp-menu-item>
      <sp-menu-item> Option 2 </sp-menu-item>
   </sp-menu>
</sp-dropdown>
```

\<br\>\</br\>

### Q: Are Spectrum UXP Widgets based on Web Components as well?
A: No. Although these widgets mimic the popular open-source Spectrum Web Components library, they are not built atop Web Components. In our old documentation, we had drawn parallelism with SWC because you will see a close similarity of the names and APIs between the two. Plus, the custom tags resemble the concept of Web Components in general. But, do not confuse them as Web Components.
