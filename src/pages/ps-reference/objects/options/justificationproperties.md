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

These property values are used to apply justification to paragraph text.

These justification features can be seen in the dialog
in the Paragraph panel's flyout menu item labeled "Justification...".
They are expressed with an object literal with the following properties (values are percentages):

```javascript
{    
     // Minimum, Desired and Maximum percentage of normal word spacing
     wordSpacingMinimum:   number,
     wordSpacingDesired:   number,
     wordSpacingMaximum:   number,
     // Minimum, Desired and Maximum percentage of normal letter spacing
     letterSpacingMinimum: number,
     letterSpacingDesired: number,
     letterSpacingMaximum: number,
     // Minimum, Desired and Maximum percentage of normal glyph scaling
     glyphScalingMinimum:  number,
     glyphScalingDesired:  number,
     glyphScalingMaximum:  number
     // Percentage of type size to use for auto leading
     autoLeadingAmount:    number
}
```

Unless it's been set, the justificationFeatures value is `null`.
The setter allows you to set individual properties: the missing ones will be
either filled with the default values or left untouched.

| Name | Type | Default | Range | Min Version | Description |
| :------ | :------ | :------ | :------ | :------ | :------ |
| autoLeadingAmount | *number* | 120 | 0..500 | 24.1 | Auto leading amount |
| glyphScalingDesired | *number* | 100 | 50..200 | 24.1 | Desired glyph scaling - Must be between Minimum and Maximum or equal |
| glyphScalingMaximum | *number* | 100 | 50..200 | 24.1 | Maximum glyph scaling - Must be greater than or equal to Minimum. |
| glyphScalingMinimum | *number* | 100 | 50..200 | 24.1 | Minimum glyph scaling - Must be less than or equal to Maximum. |
| letterSpacingDesired | *number* | 0 | 0..500 | 24.1 | Desired letter spacing - Must be between Minimum and Maximum or equal. |
| letterSpacingMaximum | *number* | 0 | 0..500 | 24.1 | Maximum letter spacing - Must be greater than or equal to Minimum. |
| letterSpacingMinimum | *number* | 0 | 0..500 | 24.1 | Minimum letter spacing - Must be less than or equal to Maximum. |
| wordSpacingDesired | *number* | 100 | 0..1000 | 24.1 | Desired word spacing - Must be between Minimum and Maximum or equal. |
| wordSpacingMaximum | *number* | 133 | 0..1000 | 24.1 | Maximum word spacing - Must be greater than or equal to Minimum. |
| wordSpacingMinimum | *number* | 80 | 0..1000 | 24.1 | Minimum word spacing - Must be less than or equal to Maximum. |
