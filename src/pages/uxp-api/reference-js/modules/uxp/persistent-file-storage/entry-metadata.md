---
title: EntryMetadata
description: Metadata for an Entry. It includes useful information such as:
---

# EntryMetadata
Metadata for an `Entry`. It includes useful information such as:

* size of the file (if a file)
* date created
* date modified
* name

Instantiate `EntryMetadata` by using [Entry's - getMetadata()](../../../modules/uxp/persistent-file-storage/entry.md#module-storage-entry-getmetadata).
In order to instantiate `Entry`, you will need to first invoke the `localFileSystem` and then fetch an instance of a File or Folder.

**Example**
```js
const fs = require('uxp').storage.localFileSystem;
const folder = await fs.getPluginFolder(); // Gets an instance of Folder (or Entry)
const entryMetaData = await folder.getMetadata();
console.log(entryMetaData.name);
```



## name : `string`
The name of the entry.



## size : `number`
The size of the entry, if a file. Zero if a folder.



## dateCreated : `Date`
The date this entry was created.



## dateModified : `Date`
The date this entry was modified.



## isFile : `boolean`
Indicates if the entry is a file



## isFolder : `boolean`
Indicates if the entry is a folder


  