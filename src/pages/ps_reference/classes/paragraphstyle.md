---
id: "paragraphstyle"
title: "ParagraphStyle"
sidebar_label: "ParagraphStyle"
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

# ParagraphStyle

The Class that stores properties related to the Paragraph panel in the Photoshop UI.

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| features | [*TypeInterfaceFeatures*](/ps_reference/modules/constants/#typeinterfacefeatures) | R W | TypeInterfaceFeatures.DEFAULT | - | 24.1 | The paragraph UI features to display. |
| firstLineIndent | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to indent the first line of paragraphs for a 72ppi document. |
| hyphenation | *boolean* | R W | false | - | 24.1 | True to use hyphenation in word wrap. Use hyphenationFeatures for maximum control. |
| hyphenationFeatures | [*HyphenationProperties*](/ps_reference/interfaces/hyphenationproperties/) | R W | - | - | 24.1 | The hyphenation features as they&#x27;re displayed in the dialog found in the Paragraph&#x27;s flyout menu &quot;Hyphenation...&quot;. They&#x27;re expressed with an option object with the following properties (numbers are in pixels):  &#x60;&#x60;&#x60;javascript {          // The minimum number of letters a word must have in order for hyphenation      // in word wrap to be allowed. In the range [2, 25], default 5.      wordsLongerThan: number,      // The minimum number of letters after which hyphenation      // in word wrap is allowed. In the range [1, 15], default 2.      afterFirst: number,      // The minimum number of letters before which hyphenation      // in word wrap is allowed. In the range [1, 15], default 2.      beforeLast: number,      // The maximum number of consecutive lines that can end with a hyphenated word.      // In the range [2, 25], default 2.      limit: number,      // The distance in pixels at the end of a line that will cause a word       // to break in unjustified type. In the range of [0, 8640] pixels for a 72PPI document.      // If the document resolution is different, the max. value is scaled accordingly.      // Default: 36px (72PPI)       zone: number,     // True to allow hyphenation in word wrap of capitalized words. Default true.      capitalWords: boolean } &#x60;&#x60;&#x60;  The hyphenationFeatures getter returns an object with all the features:  &#x60;&#x60;&#x60;javascript const textItem &#x3D; app.activeDocument.activeLayers[0].textItem; textItem.paragraphStyle.hyphenationFeatures;  // {  //       wordsLongerThan: 5,  //       afterFirst: 2,  //       beforeLast: 2,  //       limit: 2,  //       zone: 36,  //       capitalWords: true  // } &#x60;&#x60;&#x60;  In the object that is passed to the setter, all the properties are optional; the ones that are not specified will be assigned the default values.  &#x60;&#x60;&#x60;javascript textItem.paragraphStyle.hyphenationFeatures &#x3D; { wordsLongerThan: 10, afterFirst: 3 }; // {  //       wordsLongerThan: 10,  //       afterFirst: 3,  //       beforeLast: 2,  //       limit: 2,  //       zone: 36,  //       capitalWords: true  // } &#x60;&#x60;&#x60; |
| justification | [*Justification*](/ps_reference/modules/constants/#justification) | R W | Justification.LEFT | - | 24.1 | The paragraph justification. |
| justificationFeatures | [*JustificationProperties*](/ps_reference/interfaces/justificationproperties/) | R W | - | - | 24.1 | The justification features as they&#x27;re displayed in the dialog found in the Paragraph&#x27;s flyout menu &quot;Justification...&quot;. They&#x27;re expressed with an option object with the following properties (all percentage numbers):  &#x60;&#x60;&#x60;javascript {          // Minimum, Desired and Maximum percentage of normal word spacing      wordSpacingMinimum:   number,      wordSpacingDesired:   number,      wordSpacingMaximum:   number,      // Minimum, Desired and Maximum percentage of normal letter spacing      letterSpacingMinimum: number,      letterSpacingDesired: number,      letterSpacingMaximum: number,      // Minimum, Desired and Maximum percentage of normal glyph scaling      glyphScalingMinimum:  number,      glyphScalingDesired:  number,      glyphScalingMaximum:  number      // Percentage of type size to use for auto leading      autoLeadingAmount:    number } &#x60;&#x60;&#x60;  Unless it&#x27;s been set, the justificationFeatures value is &#x60;null&#x60;. The setter allows you to set individual properties: the missing ones will be either filled with the default values or left untouched.  Properties&#x27; ranges are as follows: WordSpacing: 0 &lt;&#x3D; Minimum &lt;&#x3D; Maximum Minimum &lt;&#x3D; Desired &lt;&#x3D; Maximum Minimum &lt;&#x3D; Maximum &lt;&#x3D; 1000 LetterSpacing: -100 &lt;&#x3D; Minimum &lt;&#x3D; Maximum Minimum &lt;&#x3D; Desired &lt;&#x3D; Maximum Minimum &lt;&#x3D; Maximum &lt;&#x3D; 500 GlyphScaling: 50 &lt;&#x3D; Minimum &lt;&#x3D; Maximum Minimum &lt;&#x3D; Desired &lt;&#x3D; Maximum Minimum &lt;&#x3D; Maximum &lt;&#x3D; 200 AutoLeading: 0 &lt;&#x3D; AutoLeading &lt;&#x3D; 500 |
| kashidaWidth | [*KashidaWidthType*](/ps_reference/modules/constants/#kashidawidthtype) | R W | KashidaWidthType.MEDIUM | - | 24.1 | The width of kashida (tatweel) character |
| kinsoku | [*Kinsoku*](/ps_reference/modules/constants/#kinsoku) | R W | Kinsoku.NONE | - | 24.1 | Line breaking rules in Japanese text (Kinsoku Shori) |
| layoutMode | [*ParagraphLayout*](/ps_reference/modules/constants/#paragraphlayout) | R W | ParagraphLayout.WORLD | - | 24.1 | The paragraph layout mode. |
| leftIndent | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to indent text from the left for a 72ppi document. |
| mojikumi | [*Mojikumi*](/ps_reference/modules/constants/#mojikumi) | R W | Mojikumi.NONE | - | 24.1 | Spacing between punctuation, symbols, numbers, and other character classes in Japanese text. |
| rightIndent | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to indent text from the right for a 72ppi document. |
| spaceAfter | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to use after each paragraph for a 72ppi document. |
| spaceBefore | *number* | R W | - | -1296..1296 | 24.1 | The amount of space in pixels to use before each paragraph for a 72ppi document. |

## Methods

### reset
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

**async** : *Promise*<void\>

Resets the paragraph style to its default values.
