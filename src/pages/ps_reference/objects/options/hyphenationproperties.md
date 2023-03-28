---
id: "hyphenationproperties"
title: "HyphenationProperties"
sidebar_label: "HyphenationProperties"
repo: "uxp-photoshop"
product: "photoshop"
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
---

# HyphenationProperties

These property values are used to apply hyphenation to paragraph text.

These hyphenation features can be seen in the dialog
in the Paragraph panel's flyout menu item labeled "Hyphenation...".
They are expressed with an object literal with the following properties (values are in pixels):

```javascript
{    
     // The minimum number of letters a word must have in order for hyphenation
     // in word wrap to be allowed. In the range [2, 25], default 5.
     wordsLongerThan: number,
     // The minimum number of letters after which hyphenation
     // in word wrap is allowed. In the range [1, 15], default 2.
     afterFirst: number,
     // The minimum number of letters before which hyphenation
     // in word wrap is allowed. In the range [1, 15], default 2.
     beforeLast: number,
     // The maximum number of consecutive lines that can end with a hyphenated word.
     // In the range [2, 25], default 2.
     limit: number,
     // The distance in pixels at the end of a line that will cause a word 
     // to break in unjustified type. In the range of [0, 8640] pixels for a 72PPI document.
     // If the document resolution is different, the max. value is scaled accordingly.
     // Default: 36px (72PPI) 
     zone: number,
    // True to allow hyphenation in word wrap of capitalized words. Default true.
     capitalWords: boolean
}
```

The hyphenationFeatures getter returns an object with all the features:

```javascript
const textItem = app.activeDocument.activeLayers[0].textItem;
textItem.paragraphStyle.hyphenationFeatures; 
// { 
//       wordsLongerThan: 5, 
//       afterFirst: 2, 
//       beforeLast: 2, 
//       limit: 2, 
//       zone: 36, 
//       capitalWords: true 
// }
```

In the object that is passed to the setter, all the properties are optional;
the ones that are not specified will be assigned the default values.

```javascript
textItem.paragraphStyle.hyphenationFeatures = { wordsLongerThan: 10, afterFirst: 3 };
// { 
//       wordsLongerThan: 10, 
//       afterFirst: 3, 
//       beforeLast: 2, 
//       limit: 2, 
//       zone: 36, 
//       capitalWords: true 
// }
```

| Name | Type | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ |
| afterFirst | *number* | 2 | 1..15 | 24.1 | The minimum number of letters after which hyphenation in word wrap is allowed. |
| beforeLast | *number* | 2 | 1..15 | 24.1 | The minimum number of letters before which hyphenation in word wrap is allowed. |
| capitalWords | *boolean* | true | - | 24.1 | True to allow hyphenation in word wrap of capitalized words. |
| limit | *number* | 2 | 2..25 | 24.1 | The maximum number of consecutive lines that can end with a hyphenated word. |
| wordsLongerThan | *number* | 5 | 2..25 | 24.1 | The minimum number of letters a word must have in order for hyphenation in word wrap to be allowed. |
| zone | *number* | 36 | 0..8640 for a 72PPI document | 24.1 | The distance in pixels at the end of a line that will cause a word to break in unjustified type. |
