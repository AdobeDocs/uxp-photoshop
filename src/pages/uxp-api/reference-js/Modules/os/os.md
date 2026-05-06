---
title: "require('os')"
description: "See: https://nodejs.org/api/os.html"
---

# require('os')
**See**: [https://nodejs.org/api/os.html](https://nodejs.org/api/os.html)  


## platform()
Gets the platform we are running on (eg. "win32", "win10", "darwin")

**Returns**: `string` - the string representing the platform  


## release()
Gets the release number of the os (eg. "10.0.1.1032")

**Returns**: `string` - the string representing the release  


## arch()
Gets the platform architecture we are running on (eg. "x32, x64, x86_64 etc")

**Returns**: `string` - the string representing the architecture  


## cpus()
Gets the platform cpu information we are running on (eg. "\{'Intel(R) Core(TM) i9-8950HK CPU @ 2.90GHz', 2900}")

**Returns**: `array` - the array of objects containing information about each logical CPU core
Currently only model and speed properties are supported. times property is not supported.
Access to CPU information, such as model string and frequency, is limited on UWP.
"ARM based architecture" or "X86 based architecture" is returned as a 'model' value on UWP.
0 is returned as a 'speed' value on UWP.  


## totalmem()
Gets the total amount of system memory in bytes

**Returns**: `integer` - the total amount of system memory in bytes as an integer  


## freemem()
Gets the total amount of free system memory in bytes

**Returns**: `integer` - the total amount of free system memory in bytes as an integer  


## homedir()
Gets the home directory path of the user

**Returns**: `string` - the home directory path of the user  

  