---
id: "characterstyle"
title: "CharacterStyle"
sidebar_label: "CharacterStyle"
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

# CharacterStyle

The Class that stores properties related to the Character panel in the Photoshop UI.

## Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| alternateLigatures | *boolean* | R W | false | - | 24.1 | Discretionary ligatures. |
| antiAliasMethod | [*AntiAlias*](/ps_reference/modules/constants/#antialias) | R W | AntiAlias.SHARP | - | 24.1 | The text anti-aliasing |
| autoKerning | [*AutoKernType*](/ps_reference/modules/constants/#autokerntype) | R W | AutoKernType.METRICS | - | 24.1 | The auto kerning option to use. |
| baseline | [*Baseline*](/ps_reference/modules/constants/#baseline) | R W | Baseline.NORMAL | - | 24.1 | The text baseline. |
| baselineShift | *number* | R W | - | -1296..1296 | 24.1 | The value in pixels to use in the baseline offset of text for a 72ppi document. |
| capitalization | [*TextCase*](/ps_reference/modules/constants/#textcase) | R W | TextCase.NORMAL | - | 24.1 | The text case. |
| characterAlignment | [*CharacterAlignment*](/ps_reference/modules/constants/#characteralignment) | R W | CharacterAlignment.ROMAN | - | 24.1 | Character alignment. When a line of text contains different sizes of characters, you can specify how to align text to the largest characters in the line. |
| color | [*SolidColor*](/ps_reference/classes/solidcolor/) | R W | - | - | 24.1 | The text color as a [SolidColor](/ps_reference/classes/solidcolor/) instance. |
| fauxBold | *boolean* | R W | false | - | 24.1 | True to use Faux Bold. Setting this to true is equivalent to selecting text and clicking Faux Bold in the Character panel. |
| fauxItalic | *boolean* | R W | false | - | 24.1 | True to use Faux Italic. Setting this to true is equivalent to selecting text and clicking Faux Italic in the Character panel. |
| font | *string* | R W | - | - | 24.1 | The text face of the character, using the PostScript name of the font. See [TextFont](/ps_reference/classes/textfont/) and use the &#x60;postScriptName&#x60; property. |
| fractionalWidths | *boolean* | R W | false | - | 24.1 | Use fractional widths for the text. |
| fractions | *boolean* | R W | false | - | 24.1 | Fractions. |
| horizontalDiacriticPosition | *number* | R W | - | -1000..1000 | 24.1 | Adjust the horizontal diacritic position for Middle Eastern languages. |
| horizontalScale | *number* | R W | - | 0..1000 | 24.1 | Character scaling (horizontal) in proportion to verticalScale, as a percentage value. |
| kashidas | *boolean* | R W | true | - | 24.1 | Toggles kashidas in Middle Eastern languages. |
| language | [*Language*](/ps_reference/modules/constants/#language) | R W | - | - | 24.1 | Language used as a basis for hyphenation rules and spelling. |
| leading | *number* | R W | null | 0..4999.99 | 24.1 | The leading amount in pixels for a 72ppi document. |
| ligatures | *boolean* | R W | true | - | 24.1 | Standard ligatures (default: true). |
| middleEasternDigitsType | [*MiddleEasternDigitsType*](/ps_reference/modules/constants/#middleeasterndigitstype) | R W | MiddleEasternDigitsType.LTRARABIC | - | 24.1 | The text digits type to use (Middle Eastern features) |
| middleEasternTextDirection | [*MiddleEasternTextDirection*](/ps_reference/modules/constants/#middleeasterntextdirection) | R W | MiddleEasternTextDirection.DEFAULT | - | 24.1 | The text direction (Middle Eastern features) |
| noBreak | *boolean* | R W | false | - | 24.1 | True to disallow line breaks in this text. |
| ordinals | *boolean* | R W | false | - | 24.1 | Ordinals. |
| size | *number* | R W | - | 0.01..1296 | 24.1 | The font size in pixels for a 72ppi document. |
| strikeThrough | [*StrikeThrough*](/ps_reference/modules/constants/#strikethrough) | R W | StrikeThrough.STRIKEOFF | - | 24.1 | Whether the text is strikethrough or not. |
| stylisticAlternates | *boolean* | R W | false | - | 24.1 | Stylistic Alternates |
| swash | *boolean* | R W | false | - | 24.1 | Swash. |
| titlingAlternates | *boolean* | R W | false | - | 24.1 | Titling alternates. |
| tracking | *number* | R W | - | -1000..1000 | 24.1 | The amount of uniform spacing between multiple characters. Tracking units are 1/1000 of an em space. The width of an em space is relative to the current type size. In a 1-point font, 1 em equals 1 point; in a 10-point font, 1 em equals 10 points. So for example, 100 tracking units in a 10-point font are equivalent to 1 point |
| underline | [*Underline*](/ps_reference/modules/constants/#underline) | R W | Underline.NONE | - | 24.1 | The underline style to use. |
| useAutoLeading | *boolean* | R W | - | - | 24.1 | True to use a font&#x27;s built-in leading information. |
| verticalDiacriticPosition | *number* | R W | - | -1000..1000 | 24.1 | Adjust the vertical diacritic position for Middle Eastern languages. |
| verticalScale | *number* | R W | - | 0..1000 | 24.1 | Character scaling (vertical) in proportion to horizontalScale, as a percentage value. |

## Methods

### reset
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.1</span>

**async** : *Promise*<void\>

Resets the text styles of the Character panel to their default values.
