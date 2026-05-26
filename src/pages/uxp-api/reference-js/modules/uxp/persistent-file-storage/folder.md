---
title: Folder
description: Represents a folder on a file system. You'll never instantiate this directly,
---

# Folder
Represents a folder on a file system. You'll never instantiate this directly,
but will get it by calling [FileSystemProvider.getTemporaryFolder](../../../modules/uxp/persistent-file-storage/storage.md#gettemporaryfolder),
[FileSystemProvider.getFolder](../../../modules/uxp/persistent-file-storage/storage.md#getfolderoptions), or via [Folder.getEntries](../../../modules/uxp/persistent-file-storage/folder.md#getentries).

**Example**
```js
// Get the Folder instance via localFileSystem
const fs = require('uxp').storage.localFileSystem;
const folder = await fs.getTemporaryFolder(); // Gets the Folder instance
console.log(folder.isFolder); // returns true
```



## isFolder
Indicates that this instance is a folder. Useful for type checking.



## getEntries()
Returns an array of entries contained within this folder.

**Returns**: `Promise<Array<Entry>>` - The entries within the folder.  
**Example**  
```js
const entries = await aFolder.getEntries();
const allFiles = entries.filter(entry => entry.isFile);
```


## createEntry(name, options)
Creates an entry within this folder and returns the appropriate instance.

**Returns**: `Promise<File | Folder>` the created entry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | the name of the entry to create |
| options | `any` |  |  |
| [options.type] | `Symbol` | `types.file` | Indicates which kind of entry to create. Pass `Folder` to create a new folder. Note that if the type is file then this method just create a file entry object and not the actual file on the disk. The file actually gets created when you call for eg: write method on the file entry object. |
| [options.overwrite] | `boolean` | `false` | If `true`, the create attempt can overwrite an existing file |

**Example**  
```js
const myNovel = await aFolder.createEntry("mynovel.txt");
```
**Example**  
```js
const catImageCollection = await aFolder.createEntry("cats", {type: types.folder});
```


## createFile(name, options)
Creates a File Entry object within this folder and returns the appropriate instance.
Note that this method just create a file entry object and not the actual file on the disk.
The file actually gets created when you call for eg: write method on the file entry object.

**Returns**: `Promise<File>` - the created file entry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | the name of the file to create. |
| options | `any` |  |  |
| [options.overwrite] | `boolean` | `false` | If `true`, the create attempt can overwrite an existing file |

**Example**  
```js
const myNovelTxtFile = await aFolder.createFile("mynovel.txt");
```


## createFolder(name)
Creates a Folder within this folder and returns the appropriate instance.

**Returns**: `Promise<Folder>` - the created folder entry object  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | the name of the folder to create. |

**Example**  
```js
const myCollectionsFolder = await aFolder.createFolder("collections");
```


## getEntry(filePath)
Gets an entry from within this folder and returns the appropriate instance.

**Returns**: `Promise<File | Folder>` the fetched entry.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | `string` | the name/path of the entry to fetch |

**Example**  
```js
const myNovel = await aFolder.getEntry("mynovel.txt");
```


## renameEntry(entry, newName, options)
Renames an entry to a new name.

**Returns**: `Promise<void>`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| entry | `Entry` |  | the entry to rename |
| newName | `string` |  | the new name to assign |
| options | `any` |  |  |
| [options.overwrite] | `boolean` | `false` | if `true`, renaming can overwrite an existing entry |

**Example**  
```js
await myNovels.rename(myNovel, "myFantasticNovel.txt");
```


## isFolder ⇒ `boolean`
Checks if an entry is a folder. Safe to use if entry might be `null` or
`undefined`. Useful for type checking.

**Returns**: `boolean` - if `true`, the entry is a folder  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |


  