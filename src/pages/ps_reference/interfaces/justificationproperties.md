---
id: "justificationproperties"
title: "JustificationProperties"
sidebar_label: "JustificationProperties"
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

# JustificationProperties

The justification features as they're displayed in the dialog
found in the Paragraph's flyout menu "Justification...".
All numbers are percentages.

Unless it's been set, a justificationFeatures value is `null`.
The setter allows you to set individual properties: the missing ones will be
either filled with the default values or left untouched.

Properties' ranges are as follows:
WordSpacing:
0 <= Minimum <= Maximum
Minimum <= Desired <= Maximum
Minimum <= Maximum <= 1000
LetterSpacing:
-100 <= Minimum <= Maximum
Minimum <= Desired <= Maximum
Minimum <= Maximum <= 500
GlyphScaling:
50 <= Minimum <= Maximum
Minimum <= Desired <= Maximum
Minimum <= Maximum <= 200
AutoLeading:
0 <= AutoLeading <= 500

| Name | Type | Default | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ |
| autoLeadingAmount | *number* | 120 | 24.1 | Auto leading amount |
| glyphScalingDesired | *number* | 100 | 24.1 | Desired glyph scaling |
| glyphScalingMaximum | *number* | 100 | 24.1 | Maximum glyph scaling |
| glyphScalingMinimum | *number* | 100 | 24.1 | Minimum glyph scaling |
| letterSpacingDesired | *number* | 0 | 24.1 | Desired letter spacing |
| letterSpacingMaximum | *number* | 0 | 24.1 | Maximum letter spacing |
| letterSpacingMinimum | *number* | 0 | 24.1 | Minimum letter spacing |
| wordSpacingDesired | *number* | 100 | 24.1 | Desired word spacing |
| wordSpacingMaximum | *number* | 133 | 24.1 | Maximum word spacing |
| wordSpacingMinimum | *number* | 80 | 24.1 | Minimum word spacing |
