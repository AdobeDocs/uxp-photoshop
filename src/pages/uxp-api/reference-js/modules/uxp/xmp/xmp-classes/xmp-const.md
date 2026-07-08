---
title: require('uxp').xmp.XMPConst
description: This object contains the read-only constant definitions for use with the JavaScript XMP API. Some of these are listed in the context in which they are used. ...
---

# require('uxp').xmp.XMPConst
This object contains the read-only constant definitions for use with the JavaScript XMP API. Some of these are listed in the context in which they are used. Longer lists are provided here.

\<br\>\</br\>
## Schema namespace string constants
Constant values for the namespace URI strings used in all get and set property operations. See XMPMeta object.

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| NS_DC | string | Read-only | The XML namespace for the Dublin Core schema, [http://purl.org/dc/elements/1.1](http://purl.org/dc/elements/1.1) |
| NS_IPTC_CORE | string | Read-only | The XML namespace for the IPTC Core schema. |
| NS_RDF | string | Read-only | The XML namespace for RDF. |
| NS_XML | string | Read-only | The XML namespace for XML. |
| NS_XMP | string | Read-only | The XML namespace for the XMP basic schema. |
| NS_XMP_RIGHTS | string | Read-only | The XML namespace for the XMP copyright schema. |
| NS_XMP_MM | string | Read-only | The XML namespace for the XMP digital asset management schema. |
| NS_XMP_BJ | string | Read-only | The XML namespace for the job management schema. |
| NS_XMP_NOTE | string | Read-only | The XML namespace for the XMP note schema. An Adobe private namespace; do not create new properties. |
| NS_PDF | string | Read-only | The XML namespace for the PDF schema. |
| NS_PDFX | string | Read-only | The XML namespace for the PDFX schema. An Adobe private namespace; do not create new properties. |
| NS_PHOTOSHOP | string | Read-only | The XML namespace for the Adobe Photoshop custom schema. |
| NS_PS_ALBUM | string | Read-only | The XML namespace for the Adobe Photoshop Album custom schema. |
| NS_EXIF | string | Read-only | The XML namespace for Adobe’s EXIF schema. |
| NS_EXIF_AUX | string | Read-only | The XML namespace for Adobe’s EXIF auxiliary schema. |
| NS_TIFF | string | Read-only | The XML namespace for Adobe’s TIFF schema. |
| NS_PNG | string | Read-only | The XML namespace for the PNG schema. |
| NS_JPEG | string | Read-only | The XML namespace for the JPEG schema. |
| NS_SWF | string | Read-only | The XML namespace for the Flash small web format schema. |
| NS_JPK | string | Read-only | The XML namespace for the JPK schema. |
| NS_CAMERA_RAW | string | Read-only | The XML namespace for the Camera Raw schema. |
| NS_DM | string | Read-only | The XML namespace for the DM schema. |
| NS_ADOBE_STOCK_PHOTO | string | Read-only | The XML namespace for the Adobe Stock Photo schema. |
| NS_ASF | string | Read-only | The XML namespace for the Microsoft advanced streaming format schema. |

\<br\>\</br\>
## Type namespace string constants
Constant values for the field-type namespace URI strings used in all structured property operations. See XMPMeta object.

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| TYPE_IDENTIFIER_QUAL | string | Read-only | The XML namespace for qualifiers of the xmp:Identifier property. |
| TYPE_DIMENSIONS | string | Read-only | The XML namespace for fields of the Dimensions type. |
| TYPE_TEXT | string | Read-only | The XML namespace for the XMP text document schema. |
| TYPE_PAGEDFILE | string | Read-only | The XML namespace for the XMP paged document schema. |
| TYPE_GRAPHICS | string | Read-only | The XML namespace for a structure containing the characteristics of a colorant (swatch) used in a document. |
| TYPE_IMAGE | string | Read-only | The XML namespace for fields of a graphical image. Used for the Thumbnail type. |
| TYPE_FONT | string | Read-only | The XML namespace for a structure containing the characteristics of a font used in a document. |
| TYPE_RESOURCE_EVENT | string | Read-only | The XML namespace for fields of the ResourceEvent type. |
| TYPE_RESOURCE_REF | string | Read-only | The XML namespace for fields of the ResourceRef type. |
| TYPE_ST_VERSION | string | Read-only | The XML namespace for fields of the Version type. |
| TYPE_ST_JOB | string | Read-only | The XML namespace for fields of the JobRef type. |
| TYPE_MANIFEST_ITEM | string | Read-only | The XML namespace for fields of the ManifestItem type. |
| TYPE_PDFA_SCHEMA | string | Read-only | The XML namespace for fields of the PDFA schema. |
| TYPE_PDFA_PROPERTY | string | Read-only | The XML namespace for fields of the PDFA property. |
| TYPE_PDFA_TYPE | string | Read-only | The XML namespace for fields of the PDFA type. |
| TYPE_PDFA_FIELD | string | Read-only | The XML namespace for fields of the PDFA field. |
| TYPE_PDFA_ID | string | Read-only | The XML namespace for fields of the PDFA ID. |
| TYPE_PDFA_EXTENSION | string | Read-only | The XML namespace for PDF subtypes. |

\<br\>\</br\>
## File format numeric constants\<br\>\</br\>
Constant values for supported file types, used in I/O operations. See XMPFile object.

| Name | Type | Access | Description |
| --- | --- | --- | --- |
| FILE_UNKNOWN | number | Read-only | Unknown file-format. |
| FILE_PDF | number | Read-only | PDF |
| FILE_POSTSCRIPT | number | Read-only | PS, general PostScript following DSC conventions |
| FILE_EPS | number | Read-only | EPS, encapsulated PostScript |
| FILE_JPEG | number | Read-only | JPEG |
| FILE_JPEG2K | number | Read-only | JPX, JPEG 2000 file |
| FILE_TIFF | number | Read-only | TIFF |
| FILE_GIF | number | Read-only | GIF |
| FILE_PNG | number | Read-only | PNG |
| FILE_SWF | number | Read-only | SWF, Flash file |
| FILE_FLA | number | Read-only | FLA, Flash authoring file |
| FILE_FLV | number | Read-only | FLV, Flash video file |
| FILE_MOV | number | Read-only | MOV, Quicktime |
| FILE_AVI | number | Read-only | AVI |
| FILE_CIN | number | Read-only | CIN, Cineon |
| FILE_WAV | number | Read-only | WAV |
| FILE_MP3 | number | Read-only | MP3 |
| FILE_SES | number | Read-only | SES, Audition session |
| FILE_CEL | number | Read-only | CEL, Audition loop |
| FILE_MPEG | number | Read-only | MPEG |
| FILE_MPEG2 | number | Read-only | MPEG2 |
| FILE_MPEG4 | number | Read-only | MPEG4 |
| FILE_WMAV | number | Read-only | WMAV, Windows Media Audio and Video |
| FILE_AIFF | number | Read-only | AIFF |
| FILE_HTML | number | Read-only | HTML |
| FILE_XML | number | Read-only | XML |
| FILE_TEXT | number | Read-only | TEXT |
| FILE_PHOTOSHOP | number | Read-only | PSD, Photoshop |
| FILE_ILUSTRATOR | number | Read-only | AI, Illustrator |
| FILE_INDESIGN | number | Read-only | INDD, InDesign |
| FILE_AE_PROJECT | number | Read-only | AEP, After Effects project |
| FILE_AE_PROJECT_TEMPLATE | number | Read-only | AET, After Effects project template |
| FILE_AE_FILTER_PRESET | number | Read-only | FFX, After Effects filter preset file |
| FILE_ENCORE_PROJECT | number | Read-only | NCOR, Encore project file |
| FILE_PREMIERE_PROJECT | number | Read-only | PPJ, Premiere project file |
| FILE_PREMIERE_TITLE | number | Read-only | PRPROJ, Premiere title file |


  