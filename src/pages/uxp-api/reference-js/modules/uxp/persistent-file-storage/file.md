---
title: File
description: Represents a file on a file system. Provides methods for reading from and
---

# File
Represents a file on a file system. Provides methods for reading from and
writing to the file. You'll never instantiate a `File` directly; instead
you'll get access via a [storage.FileSystemProvider](../../../modules/uxp/persistent-file-storage/file-system-provider.md).
Keep in mind that `File` as such doesn't need a `require()` statement, however a `localFileSystem` will need it.

**Example**
```js
// Get the object of a File instance
const fs = require('uxp').storage.localFileSystem;
const file = await fs.createEntryWithUrl("file:/Users/user/Documents/tmp"); // Gets a File instance
console.log(file.isFile); // returns true
```



## isFile
Indicates that this instance is a file.

**Example**  
```js
if (anEntry.isFile) {
    await anEntry.read();
}
```


## mode : `Symbol`
Indicates whether this file is read-only or read-write. See [readOnly](../../../modules/uxp/persistent-file-storage/modes.md#readonly--symbol) and [readWrite](../../../modules/uxp/persistent-file-storage/modes.md#readwrite--symbol).

**Example**  
```js
if (aFile.mode === modes.readOnly) {
    throw new Error("Can't write to a file opened as read-only.");
}
```


## read(options)
Reads data from the file and returns it. The file format can be specified
with the `format` option. If a format is not supplied, the file is assumed
to be a text file using UTF8 encoding.

**Returns**: `Promise<string|ArrayBuffer>` the contents of the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `any` |  |  |
| [options.format] | `Symbol` | `formats.utf8` | The format of the file; see [utf8](../../../modules/uxp/persistent-file-storage/formats.md#utf8--symbol) and [binary](../../../modules/uxp/persistent-file-storage/formats.md#binary--symbol). |

**Example**  
```js
const text = await myNovel.read();
```
**Example**  
```js
const data = await myNovel.read({format: formats.binary});
```


## write(data, options)
Writes data to a file, appending if desired. The format of the file
is controlled via the `format` option, and defaults to UTF8.

**Returns**: `Promise<number>` -  the length of the contents written to the file  
**Throws**:

- `FileIsReadOnly` if writing to a read-only file
- `OutOfSpace` If writing to the file causes the file system to exceed the available space (or quota)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | `string` \| `ArrayBuffer` |  | the data to write to the file |
| options | `any` |  |  |
| [options.format] | `Symbol` | `formats.utf8` | the format of the file; see [utf8](../../../modules/uxp/persistent-file-storage/formats.md#utf8--symbol) and [binary](../../../modules/uxp/persistent-file-storage/formats.md#binary--symbol). |
| [options.append] | `boolean` | `false` | if `true`, the data is written to the end of the file |

**Example**  
```js
await myNovel.write("It was a dark and stormy night.\n");
await myNovel.write("Cliches and tropes aside, it really was.", {append: true});
```
**Example**  
```js
const data = new ArrayBuffer();
await aDataFile.write(data, {format: formats.binary});
```


## isFile(entry)
Determines if the entry is a file or not. This is safe to use even if the
entry is `null` or `undefined`.

**Returns**: `boolean` - if `true`, the entry is a file.  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |


  