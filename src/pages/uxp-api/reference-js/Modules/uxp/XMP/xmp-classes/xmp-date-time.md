---
title: "require('uxp').xmp.XMPDateTime"
description: "Since: v7.2.0"
---

# require('uxp').xmp.XMPDateTime
**Since**: v7.2.0  


## XMPDateTime()
XMPDateTime class represents a date and time.
XMP's time includes time zone, and can have up to nanosecond resolution.



## XMPDateTime(date)
Create XMPDateTime


| Param | Type | Description |
| --- | --- | --- |
| date | `Date` \| `string` | `[Optional]`                  `Date` : A JavaScript Date object. The time zone is set to the local operation-system time-zone value.                         Time can have up to nanosecond resolution; however, when converting to or from a JavaScript Date value,                         time resolution is reduced to milliseconds.\<br\>\</br\>                  `iso8601Date`: A string containing a date-time in ISO 8601 format; for example: "2007-04-10T17:54:50+01:00" |

**Example**  
```js
// Below example demonstrates how to create XMPDateTime
// Importing XMPDateTime class
const { XMPDateTime } = require("uxp").xmp;

// 1. Creating using Date object
const xdt1 = new XMPDateTime(new Date());

// 2. Creating using iso8601Date
const xdt2 = new XMPDateTime("2007-04-10T17:54:50+01:00");

// 3.  Creating with no arguments
const xdt3 = new XMPDateTime();
```
**Example**  
```js
// Below example demonstrates how to compare two XMPDateTime objects
// Importing XMPDateTime class
const { XMPDateTime } = require("uxp").xmp;

const currentDate = new XMPDateTime(new Date());

const oldDate = new XMPDateTime("2007-04-10T17:54:50+01:00");

currentDate.compareTo(oldDate);
// Returns 1

oldDate.compareTo(currentDate);
// Returns -1

currentDate.compareTo(currentDate);
// Returns 0
```


## year : `number`
The year, in the range [0000…9999].



## month : `number`
The month, in the range [1…12].



## day : `number`
The day, in the range [1…31].



## hour : `number`
The hour, in the range [1…23].



## minute : `number`
The minute, in the range [1…59].



## second : `number`
The second, in the range [1…59].



## nanosecond : `number`
The nanosecond, in the range [0…1e+9 -1].



## tzSign : `number`
The time zone direction of offset. - 0: UTC - -1: west - 1: east



## tzHour : `number`
The time zone hour offset from the prime meridian, in the range [1…23].



## tzMinute : `number`
The time zone minute offset from the prime meridian, in the range [1…59].



## compareTo(dateTime)
Reports the time order of two date-time values.

**Returns**: `number` - 0 if the two values are the same,\<br\>\</br\>
                   1 if this date-time is later than the comparison value,\<br\>\</br\>
                   -1 if this date-time is earlier than the comparison value.\<br\>\</br\>`number`  

| Param | Type | Description |
| --- | --- | --- |
| dateTime | `XMPDateTime` | Another XMPDateTime object. |



## convertToLocalTime()
Sets the time zone in this object to the local operating-system time zone,
adjusting the time values from the previous time zone, if necessary.



## convertToUTCTime()
Sets the time zone in this object to UTC (coordinated universal time),
adjusting the time values from the previous time zone, if necessary.



## getDate()
Converts this date-time value to a JavaScript Date. The time zone is normalized
(time zones are not supported in the JavaScript format), and the accuracy is reduced to milliseconds.

**Returns**: `Date`  


## setLocalTimeZone()
Sets the time zone in this object to the current operation-system value,
replacing any existing value. Does not affect other fields.



## hasDate()
To check if the date is available

**Returns**: `boolean`  


## hasTime()
To check if time is available

**Returns**: `boolean`  


## hasTimeZone()
To check if timezone is available

**Returns**: `boolean`  


## toString()
To get the string value of the object

**Returns**: `string`  

  