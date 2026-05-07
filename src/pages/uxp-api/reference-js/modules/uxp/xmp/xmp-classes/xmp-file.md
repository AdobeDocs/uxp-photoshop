---
title: require('uxp').xmp.XMPFile
description: Since: v7.2.0
---

# require('uxp').xmp.XMPFile
**Since**: v7.2.0  


## XMPFile()
This class corresponds to the Adobe XMP Toolkit’s File Handler component, which provides convenient I/O access to the main,
or document level, XMP for a file. The File Handler supports those file formats in which you can embed XMP metadata,
as defined in the XMP Specification. It allows you to add XMP where none currently exists, expand existing XMP without
regard to existing padding, and reconcile XMP with other metadata formats. The XMP Toolkit also supplies the Packet
Scanner as a fallback solution for unsupported file formats. It provides more limited accesses to all file formats by
performing a dump file scan. It can update a file, but cannot extend the packet or reconcile other metadata formats.
The XMPScript API does not currently support retrieving thumbnails.

**Example**  
```js
// Example of using the XMPFile class to get the XMPMeta object
// Import the XMPFile class
const { XMPFile } = require("uxp").xmp;

// Create a new XMPFile object
const xmpFile = new XMPFile("sample.psd", XMPConst.FILE_PHOTOSHOP, XMPConst.OPEN_FOR_UPDATE);

// Get the XMPMeta object
const xmpMeta = xmpFile.getXMP();
```
**Example**  
```js
// Example of using the XMPFile class to get the XMPPacketInfo object
// Import the XMPFile class
const { XMPFile } = require("uxp").xmp;

// Create a new XMPFile object
const xmpFile = new XMPFile("sample.psd", XMPConst.FILE_PHOTOSHOP, XMPConst.OPEN_FOR_UPDATE);

Get XMPPacketInfo object
const xmpPacketInfo = xmpFile.getPacketInfo();
console.log(xmpPacketInfo.length);
console.log(xmpPacketInfo.offset);
console.log(xmpPacketInfo.padSize);
console.log(xmpPacketInfo.charForm);
```
**Example**  
```js
// Example of using the XMPFile class to get the XMPFileInfo object
// Import the XMPFile class
const { XMPFile } = require("uxp").xmp;

// Create a new XMPFile object
const xmpFile = new XMPFile("sample.psd", XMPConst.FILE_PHOTOSHOP, XMPConst.OPEN_FOR_UPDATE);

// Get XMPFileInfo object
const xmpFileInfo = xmpFile.getFileInfo();
console.log(xmpFileInfo.filePath);
console.log(xmpFileInfo.format);
```


## XMPFile(filePath, format, openFlags)

| Param | Type | Description |
| --- | --- | --- |
| filePath | `string` | A string containing the file path of a document. |
| format | `number` | The file format constant. See [File format numeric constants](../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#file-format-numeric-constants). |
| openFlags | `number` | The open options for the file. One of these constants:\<br\>\</br\>                          - XMPConst.OPEN_FOR_READ - Open for read-only access.\<br\>\</br\>                          - XMPConst.OPEN_FOR_UPDATE - Open for reading and writing.\<br\>\</br\>                          - XMPConst.OPEN_ONLY_XMP - Only the XMP is wanted, allows space/time optimizations.\<br\>\</br\>                          - XMPConst.OPEN_STRICTLY - Be strict about locating XMP and reconciling with other forms.\<br\>\</br\>                          - XMPConst.OPEN_USE_SMART_HANDLER - Require the use of a smart handler. No packet scanning is performed.\<br\>\</br\>                          - XMPConst.OPEN_USE_PACKET_SCANNING - Force packet scanning, do not use a smart handler.\<br\>\</br\>                          - XMPConst.OPEN_LIMITED_SCANNING - Only packet-scan files known to need scanning.\<br\>\</br\> |



## canPutXMP(xmpData)
Reports whether XMP metadata of a given size can be updated for this file.
This is particularly important if the packet size is increased.

Considers only the length of the serialized packet; does not keep the provided XMP.
Use putXMP() to actually update the XMP in the open file.

**Returns**: boolean Returns true if the given XMP can be put into this file.  

| Param | Description |
| --- | --- |
| xmpData | The XMP metadata as an XMPMeta object\<br\>\</br\>                or The XMP metadata as a string containing an XMP packet\<br\>\</br\>                or The XMP metadata as an Array of Number containing raw XMP packet data.\<br\>\</br\> |



## closeFile(closeFlags)
Closes this open file, after writing to it as necessary; that is, if the file was opened for update,
and if the XMP metadata was updated or injected. The options provided when the file was opened determine
whether this function reconciles the XMP with other forms of metadata; that is, whether any legacy metadata
is also updated to be consistent with the XMP metadata.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| closeFlags | `number` | `0` | A close-option constant, or 0. Close options are:                          XMPConst.``CLOSE_UPDATE_SAFELY`` - Write into a temporary file then swap for crash safety. |



## getXMP()
Retrieves and parses the existing XMP metadata from this file. If the file format contains legacy metadata in a format
that is recognized by the File Handler, the function creates an XMP packet containing the metadata.

**Returns**: `XMPMeta` - Returns an XMPMeta object, or null if the files does not contain XMP or convertible legacy metadata.  


## getPacketInfo()
Retrieves the raw XMP packet from this file, along with information about the packet. The options with
which the file was opened determine whether this function reconciles other forms of metadata with the XMP.

**Returns**: `XMPPacketInfo` - Returns an XMPPacketInfo object, or null if the files does not contain XMP metadata.  


## getFileInfo()
Retrieves basic information about this file.

**Returns**: `XMPFileInfo` - Returns an XMPFileInfo object.  


## putXMP(xmpData)
Supplies new XMP metadata for this file. The file is not actually written until closeFile() is called.
The options provided when the file was opened determine whether that function reconciles the XMP with other
forms of metadata; that is, whether any legacy metadata is also updated to be consistent with the XMP metadata.


| Param | Description |
| --- | --- |
| xmpData | The XMP metadata as an XMPMeta object\<br\>\</br\>                or The XMP metadata as a String containing an XMP packet\<br\>\</br\>                or The XMP metadata as an Array of Number containing raw XMP packet data.\<br\>\</br\> |



## getFormatInfo(format)
Reports the supported features for the given file format.

**Returns**: `number` - Returns a logical OR of bit-flag constants, or 0 if the format is not handled  

| Param | Type | Description |
| --- | --- | --- |
| format | `number` | The file format constant. See XMPConst for more details |


  