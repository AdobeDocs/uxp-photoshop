---
title: "require('fs')"
description: UXP Provides Node.js style file system API, FSAPI.
---

# require('fs')
UXP Provides Node.js style file system API, FSAPI.
Unlike [Entry](../uxp/persistent-file-storage/entry.md) based [File](../uxp/persistent-file-storage/file.md) or [Folder](../uxp/persistent-file-storage/folder.md) classes,
these methods can directly access a local file or folder with path or file descriptor.
The starting point of a path in the native filesystem depends on the scheme.
UXP supports plugin-specific storage schemes, such as "plugin:", "plugin-data:",
and "plugin-temp:", as well as a native "file:" scheme for the path parameter.\<br\>\</br\>
Note:\<br\>\</br\>
1. If there are no schemes defined for the path parameter of FSAPI methods, it considers to have "file:" scheme for the path.\<br\>\</br\>
2. [UWP](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)(Universal Windows Platform)
has the strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions),
and UXP FSAPI may have access issues with anonymous filepaths. So, XD does not support this feature for compatibility across platforms.\<br\>\</br\>
3. The native layer of UXP FSAPI is based on [libUV](https://libuv.org/) except UWP powered features, such as FilePicker and Drag&Drop on Win10 XD.\<br\>\</br\>



## readFile(path, options, callback)
Reads data from the path asynchronously.
The file format can be specified with the encoding options.
If an encoding is not supplied, the file is assumed to be a binary format.

**Returns**: `Promise<string|ArrayBuffer>` - the contents of the file  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where the file to read is located |
| options | `any` |  |
| [options.encoding] | `string` | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const data = await fs.readFile("plugin-data:/binaryFile.obj");
```
**Example**  
```js
const text = await fs.readFile("plugin-data:/textFile.txt", {encoding: "utf-8"});
```


## readFileSync(path, options)
Reads data from the path synchronously.
The file format can be specified with the encoding options.
If an encoding is not supplied, the file is assumed to be a binary format.

**Returns**: `string` \| `ArrayBuffer` - the contents of the file  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where the file to read is located |
| options | `any` |  |
| [options.encoding] | `string` | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |

**Example**  
```js
const data = fs.readFileSync("plugin-data:/binaryFile.obj");
```
**Example**  
```js
const text = fs.readFileSync("plugin-data:/textFile.txt", {encoding: "utf-8"});
```


## writeFile(path, data, options, callback)
Writes data to the path asynchronously, appending if desired.
The format of the file is controlled via the encoding option, and defaults to a binary format.

**Returns**: `Promise<number>` - the length of contents written to the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | path where the file to write is located |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` |  | the data to write to the file |
| options | `any` |  |  |
| [options.flag] | `number` \| `string` | `w` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [options.mode] | `number` \| `string` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| [options.encoding] | `string` |  | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |
| callback | `function` |  | if not provided, this function will return Promise object |

**Example**  
```js
const bufLen = await fs.writeFile("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
```
**Example**  
```js
const strLen = await fs.writeFile("plugin-data:/textFile.txt", "It was a dark and stormy night.\n", {encoding: "utf-8"});
```


## writeFileSync(path, data, options)
Writes data to a path synchronously, appending if desired.
The format of the file is controlled via the encoding option, and defaults to a binary format.

**Returns**: `number` - the length of contents written to the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | path where the file to write is located |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` |  | the data to write to the file |
| options | `any` |  |  |
| [options.flag] | `number` \| `string` | `w` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [options.mode] | `number` \| `string` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| [options.encoding] | `string` |  | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |

**Example**  
```js
const bufLen = fs.writeFileSync("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
```
**Example**  
```js
const strLen = fs.writeFileSync("plugin-data:/textFile.txt", "It was a dark and stormy night.\n", {encoding: "utf-8"});
```


## open(path, [flag], [mode], callback)
Opens or a creates a file asynchronously

**Returns**: `Promise<number>` - fd(file descriptor)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | path where to open a file |
| [flag] | `number` \| `string` | `r` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [mode] | `number` \| `string` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| callback | `function` |  | if not provided, this function will return Promise object |

**Example**  
```js
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
```


## close(fd, callback)
Closes a file descriptor asynchronously

**Returns**: `number` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor of the file to close |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
await fs.close(fd);
```


## read(fd, buffer, offset, length, position, callback)
Reads data in chunks from the file it refers to the file descriptor

**Returns**: `Promise<Object>` - \{ bytesRead: number, buffer: ArrayBuffer }  
**Throws**:

- `Error` if invalid file descriptor is passed.
 if invalid parameter format or value is passed.


| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | a file descriptor obtained from fs.open |
| buffer | `ArrayBuffer` | the buffer where read bytes are written to |
| offset | `number` | the offset to the buffer where read bytes are written from |
| length | `number` | the length to read |
| position | `number` | the position of the file to read from. if -1, the current file position to read from. when the bytes are read, the current file position advances by size of the read bytes. if the value is greater than or equal to 0, it specifies a file position to read from. after the bytes are read, a current file position stayed the same |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const fileSize = 1024;
const buffer = new ArrayBuffer(fileSize);
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
let bytesReadInTotal = 0;
while (bytesReadInTotal < fileSize) {
    const { bytesRead } = await fs.read(fd, buffer, bytesReadInTotal, 128, -1);
    if (!bytesRead) {
        break;
    }
    bytesReadInTotal += bytesRead;
}
await fs.close(fd);
```


## write(fd, buffer, offset, length, position, callback)
Writes data in chunks to the file it refers to the file descriptor

**Returns**: `Promise<Object>` - \{ bytesWritten, buffer }  
**Throws**:

- `Error` if invalid file descriptor is passed
if invalid parameter format or value is passed


| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | the file descriptor obtained from fs.open |
| buffer | `ArrayBuffer` | the buffer where the data to write with |
| offset | `number` | the offset of the buffer where write bytes start from |
| length | `number` | the length to write |
| position | `number` | the position of the file to write from. if -1,writing will start from the current file position. when the bytes are written, the current file position advances by size of the written bytes. if the value is greater than or equal to 0, it specifies a file position to write from. After writing, it will not change the file position |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const fd = await fs.open("plugin-data:/fileToWrite.txt", "w+");
const data = "It was a dark and stormy night.\n";
const srcBuffer = new Uint8Array(data.length);
for (let i = 0; i < data.length; i++) {
 srcBuffer[i] = data.charCodeAt(i);
}
const { bytesWritten } = await fs.write(fd, srcBuffer.buffer, 0, srcBuffer.length, 0);
await fs.close(fd);
```


## lstat(path, callback)
Gets information asynchronously from a file or a folder of the path

**Returns**: `Promise<Object>` - see [Stats](https://nodejs.org/api/fs.html#class-fsstats) class in Node.js
Note: Some methods or properties may not be supportive for the return object due to the platform limitation  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where the file to get its information is located |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const stats = await fs.lstat("plugin-data:/textFile.txt");
const isFile = stats.isFile();
```


## lstatSync(path)
Gets information synchronously from a file or a folder of the path

**Returns**: `Object` - see [Stats](https://nodejs.org/api/fs.html#class-fsstats) class in Node.js
Note: Some methods or properties may not be supportive for the return object due to the platform limitation  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where the file to get its information is located |

**Example**  
```js
const stats = fs.lstatSync("plugin-data:/textFile.txt");
const birthTime = stats.birthtime;
```


## rename(oldPath, newPath, callback)
Renames or moves, if required, the file from the oldPath to the newPath

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| oldPath | `string` | path where the old file name to change is located |
| newPath | `string` | path where the new file name will be |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
fs.rename("plugin-data:/oldName.txt", "plugin-temp:/newName.txt");
```


## copyFile(srcPath, destPath, flags, callback)
Copies a file or a folder from the source path to the destination path

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| srcPath | `string` |  | path where the source file to copy is located |
| destPath | `string` |  | path where the source file will be copied to |
| flags | `number` | `0` | see flags in [uv_fs_copyfile](https://docs.libuv.org/en/v1.x/fs.html) |
| callback | `function` |  | if not provided, this function will return Promise object |

**Example**  
```js
const data = fs.copyFile("plugin-data:/copyFrom.txt", "plugin-temp:/copyTo.txt");
```


## unlink(path, callback)
Deletes a name with the file it refers to asynchronously

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where the file to delete is located |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
await fs.unlink("plugin-data:/fileToDelete.txt");
```


## mkdir(path, options, callback)
Creates a directory of the path asynchronously

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | path where to create the directory |
| options | `*` |  |  |
| [options.recursive] | `boolean` | `false` | whether parents folders should be created |
| callback | `function` |  | if not provided, this function will return Promise object |

**Example**  
```js
await fs.mkdir("plugin-data:/newDir");
```


## rmdir(path, callback)
Removes a directory asynchronously

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where to remove the directory |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
await fs.rmdir("plugin-data:/dirToRemove");
```


## readdir(path, callback)
Reads a directory to list the containing files and directories asynchronously

**Returns**: `Promise<Array<string>>` - string array of containing files and directories in the path  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where to read the directory |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const paths = await fs.readdir("plugin-data:/dirToRead");
```


## readdirSync(path)
Reads a directory to list the containing files and directories synchronously

**Returns**: `Array<string>` - string array of containing files and directories in the path  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where to read the directory |

**Example**  
```js
const paths = fs.readdirSync("plugin-data:/dirToRead");
```

  