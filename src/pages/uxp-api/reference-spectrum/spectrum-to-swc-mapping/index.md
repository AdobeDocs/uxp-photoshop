---
keywords:
  - Spectrum widgets to SWC Mapping
title: Adobe Spectrum UXP to SWC Mapping Reference
description: Describes Spectrum UXP to SWC components mapping 
contributors:
  - https://github.com/padmkris123
---

# UXP Spectrum widgets to SWC mapping

This document provides a comprehensive mapping guide for transitioning from Spectrum UXP widgets to their corresponding SWC (Spectrum Web Component) UXP equivalents. Use this guide to seamlessly map your required UI components and ensure a smooth transition between the two libraries.

The status of each component represents the following \<br\>\</br\>
✅ : Ready to be integrated.\<br\>\</br\>
🟡  : The component exists in the SWC library but is not yet supported by UXP.\<br\>\</br\>
N/A : The corresponding component does not exist in the SWC library.\<br\>\</br\>
\<br\>\</br\>

| Control Name      | Spectrum UXP Widget    | Corresponding SWC in UXP                        | Status |
|-------------------|------------------------|-------------------------------------------------|--------|
| Avatar            | sp-avatar              | sp-avatar                                       |  ✅    | 
| Body              | sp-body                | N/A                                             |  N/A |
| Button            | sp-button              | sp-button                                       |  ✅  |
| ButtonGroup       | sp-button-group        | sp-button-group                                 |  ✅  |
| Checkbox          | sp-checkbox            | sp-checkbox                                     |  ✅  |
| Detail            | sp-detail              | N/A                                             |  N/A |
| Dialog            | sp-dialog              | sp-dialog                                       |  ✅  |
| Divider           | sp-divider             | sp-divider                                      |  ✅  |
| Heading           | sp-heading             | N/A                                             |  N/A |
| Icon              | sp-icon                | sp-icon                                         |  ✅  |
| Label             | sp-label               | sp-field-label                                  |  ✅  |
| Link              | sp-link                | sp-link                                         |  ✅  |
| Menu              | sp-menu                | sp-menu                                         |  ✅  |
| MenuItem          | sp-menu-item           | sp-menu-item                                    |  ✅  |
| MenuGroup         | sp-menu-group          | sp-menu-group                                   |  ✅  |
| MenuDivider       | sp-menu-divider        | sp-menu-divider                                 |  ✅  |
| Meter             | sp-meter               | sp-meter                                        |  🟡  |
| Overlay           | sp-overlay             | sp-overlay                                      |  🟡  |
| Picker            | sp-picker              | sp-picker                                       |  🟡  |
| Popover&nbsp;     | sp-popover             | sp-popover                                      |  ✅  |
| Progressbar       | sp-progressbar         | sp-progress-bar                                 |  🟡  |
| Radio             | sp-radio               | sp-radio                                        |  ✅  |
| RadioGroup        | sp-radio-group         | sp-radio-group                                  |  ✅  |
| Slider            | sp-slider              | sp-slider                                       |  🟡  |
| Switch            | sp-switch              | sp-switch                                       |  ✅  |
| Textarea          | sp-textarea            | sp-textfield (multiline)                        |  🟡  |
| Textfiled         | sp-textfield           | sp-textfield/sp-number-field/sp-search          |  ✅  |
| Tooltip           | sp-tooltip             | sp-tooltip                                      |  ✅  |
