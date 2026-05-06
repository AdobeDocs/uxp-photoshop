---
id: "displayunits"
title: "Display Units"
sidebar_label: "Display Units"
---

## Display Units

The `core` method `getDisplayConfiguration` will return numeric values representing various properties of the connected displays.

These values differ in their units between Windows and Mac.  Windows will return pixel values.  OS X uses the term "points" for logical display units.  Readers with knowledge of print units be warned: "points" has a different meaning here.

See [developer.apple.com](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Explained/Explained.html) for a detailed explanation on the topic of points and logical resolution.

### Examples
On a 27" 4k display we receive the following output (edited for brevity).

Windows with scale set to 2.
```JSON
{
    "globalBounds": {
        "bottom": 2160,
        "left": 0,
        "right": 3840,
        "top": 0
    },
    "physicalResolution": {
        "horizontal": 163,
        "vertical": 163
    },
    "scaleFactor": 2,
}
```
Mac with Display Options > Use as: 1920x1080.
```JSON
{
    "globalBounds": {
        "bottom": 1080,
        "left": 0,
        "right": 1920,
        "top": 0
    },
    "physicalResolution": {
        "horizontal": 163.00000244801444,
        "vertical": 161.00000241797744
    },
    "scaleFactor": 2,
}
```

Note that on Windows we see the full pixel count and the pixels-per-inch (ppi) is 163 as expected.
On Mac, we see the same values in `globalBounds` as was set in the OS Display Options.

Interestingly, when we change the option "Use as" to 3200x1800, we see:
```JSON
{
    "globalBounds": {
        "bottom": 1800,
        "left": 0,
        "right": 3200,
        "top": 0
    },
    "physicalResolution": {
        "horizontal": 271.0000040700117,
        "vertical": 269.0000040399747
    }
}
```

We also see above that the "horizontal" value has changed to 271.

Dividing the horizontal point count by the "physicalResolution" value: 
`3200 / 271 ~= 11.8`.
This result matches that of the first block above `1920 / 163 ~= 11.8`.  


