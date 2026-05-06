---
title: XMPPacketInfo
description: "Since: v7.2.0"
---

# XMPPacketInfo
**Since**: v7.2.0
This object is returned by [XMPFile.getpacketinfo](../../../../modules/uxp/xmp/xmp-classes/xmp-file.md#getpacketinfo).. The read-only properties describe the XMP packet for the file represented by the [XMPFile object](../../../../modules/uxp/xmp/xmp-classes/xmp-file.md).  


## charForm : `number`
**Read only**
The character encoding in the packet, one of:                     0 - UTF8                     2 - UTF-16, MSB-first (big-endian)                     3 - UTF-16, LSB-first (little-endian)                     4 - UTF 32, MSB-first (big-endian)                     5 - UTF 32, LSB-first (little-endian)



## length : `number`
**Read only**
The length of the packet in bytes.



## offset : `number`
**Read only**
The byte-offset from the start of the file where the packet begins.



## packet : `string`
**Read only**
The raw packet data.



## padSize : `number`
**Read only**
The packet’s padding size in bytes, 0 if unknown.



## writeable : `boolean`
**Read only**
If true, the packet is writeable.


  