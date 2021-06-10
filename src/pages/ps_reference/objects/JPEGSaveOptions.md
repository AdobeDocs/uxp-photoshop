---
id: "jpegsaveoptions"
title: "jpegsaveoptions"
sidebar_label: "jpegsaveoptions"
---

# JPEGSaveOptions

| Name | Type | Default | Range | Description |
| :------ | :------ | :------ | :------ | :------ |
| color | ColorDescType | - | - | A custom color to use to fill anti-aliased edges adjacent to transparent areas of the image. Mutually exclusive with &#x27;matteColor&#x27;. |
| customMatte | RGBColorDesc | - | - | Custom matting color; overrides matteColor |
| embedColorProfile | *boolean* | - | - | False to skip embedding the color profile in the document |
| formatOptions | [*JPEGFormatOptions*](/ps_reference/modules/Constants/#jpegformatoptions) | STANDARDBASELINE
 | - | The JPEG format option to use. |
| matteColor | [*MatteColor*](/ps_reference/modules/Constants/#mattecolor) | - | - | The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Mutually exclusive with &#x27;color&#x27;. |
| quality | *number* | 8 | 0...12
 | The image quality setting to use; affects file size and compression. |
| scans | *number* | 3 | 3...5
 | The number of scans to incrementally display the image on the page. formatOptions must be JPEGFormatOptions.PROGRESSIVE. |
| typename | *string* | &quot;JPEGSaveOptions&quot;
 | - | The class name of the referenced object |
