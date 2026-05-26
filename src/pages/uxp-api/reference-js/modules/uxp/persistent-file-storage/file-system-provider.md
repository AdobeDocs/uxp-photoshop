---
title: require('uxp').storage.localFileSystem
description: Provides access to files and folders on a file system. You'll typically not
---

# require('uxp').storage.localFileSystem
Provides access to files and folders on a file system. You'll typically not
instantiate this directly; instead you'll use an instance of one that has
already been created for you by UXP.

These APIs work with UXP Manifest version v5 and above.



## isFileSystemProvider : `boolean`
Indicates that this is a `FileSystemProvider`. Useful for type-checking.



## supportedDomains : `Array<Symbol>`
An array of the domains this file system supports. If the file system can
open a file picker to the user's `documents` folder, for example, then [userDocuments](../../../modules/uxp/persistent-file-storage/domains.md#module-storage-domains-userdocuments) will be in this list.

**Example**  
```js
if (fs.supportedDomains.contains(domains.userDocuments)) {
    console.log("We can open a picker to the user's documents.")
}
```


## getFileForOpening(options)
Gets a file (or files) from the file system provider for the purpose of
opening them. Files are read-only.

Multiple files can be returned if the `allowMultiple` option` is `true`.

**Returns**: `Promise<File|Array<File>>` based on `allowMultiple`. Return empty if no file was selected.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `*` |  |  |
| [options.initialDomain] | `Symbol` |  | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |
| [options.types] | `Array<string>` | `[&#x27;.*&#x27;]` | array of file types that the file open picker displays. |
| [options.initialLocation] | `File` \| `Folder` |  | the initial location of the file picker. You can pass an existing file or folder entry to suggest the picker to start at this location. If this is a file entry then the method will pick its parent folder as initial location. This will override initialDomain option. |
| [options.allowMultiple] | `boolean` | `false` | if true, multiple files can be selected |

**Example**  
```js
const folder = await fs.getFolder({initialDomain: domains.userDocuments});
const file = await fs.getFileForOpening({initialLocation: folder});
if (!file) {
    // no file selected
    return;
}
const text = await file.read();
```
**Example**  
```js
const files = await fs.getFileForOpening({allowMultiple: true, types: fileTypes.images});
if (files.length === 0) {
    // no files selected
}
```


## getFileForSaving(suggestedName, options)
Gets a file reference suitable for read-write. Displays a file picker to select a location to "Save" the file.

If the act of writing to the file would overwrite it, the file picker
will prompt the user to confirm before returning a result to you.

**Returns**: `Promise<File>` - returns the selected file, or `null` if no file were selected.  

| Param | Type | Description |
| --- | --- | --- |
| suggestedName | `string` | Required when `options.types` is not defined. |
| options | `Object` |  |
| [options.initialDomain] | `Symbol` | The preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |
| [options.types] | `Array<string>` | Allowed file extensions, with no "." prefix. |

**Example**  
```js
const file = await fs.getFileForSaving("output.txt", { types: [ "txt" ]});
if (!file) {
    // file picker was cancelled
    return;
}
await file.write("It was a dark and stormy night");
```


## getFolder(options)
Gets a folder from the file system via a folder picker dialog. The files
and folders within can be accessed via [Folder#getEntries](../../../modules/uxp/persistent-file-storage/folder.md#getentries). Any
files within are read-write.

If the user dismisses the picker, `null` is returned instead.

**Returns**: `Promise<Folder | null>` - the selected folder or `null` if no folder is selected.  

| Param | Type | Description |
| --- | --- | --- |
| options | `any` |  |
| [options.initialDomain] | `Symbol` | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |

**Example**  
```js
const folder = await fs.getFolder();
const myNovel = (await folder.getEntries()).filter(entry => entry.name.indexOf('novel') > 0);
const text = await myNovel.read();
```


## getTemporaryFolder()
Returns a temporary folder. The contents of the folder will be removed when
the extension is disposed.

**Returns**: `Promise<Folder>`  
**Example**  
```js
const temp = await fs.getTemporaryFolder();
```


## getDataFolder()
Returns a folder that can be used for extension's data storage without user interaction.
It is persistent across host-app version upgrades.

**Returns**: `Promise<Folder>`  


## getPluginFolder()
Returns an plugin's folder – this folder and everything within it are read only.
This contains all the Plugin related packaged assets.

**Returns**: `Promise<Folder>`  


## createEntryWithUrl(url, options)
Creates an entry for the given url and returns the appropriate instance.

**Returns**: `Promise<File|Folder>` the File or Folder object which is created for the given url  
**Throws**:

- `Error` if invalid file url format or value is passed.
if the parent folder of the file/folder to be created does not exist.
if a folder already exists at the url.
if a file already exists at the url and it is requested to create a folder.
if a file already exists at the url and the overwrite option is not set to true to create a file.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | `string` |  | the url to create an Entry object. Note that file: scheme has limited support in UWP due to the strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions) |
| options | `*` |  |  |
| [options.type] | `Symbol` | `types.file` | indicates which kind of entry to create. Pass types.folder to create a new folder. Note that if the type is file then this method just create"s" a file entry object and not the actual file on the disk. File on the storage is created when data is written into the file. eg: call write method on the file entry object. |
| [options.overwrite] | `Boolean` | `false` | if true, the create attempt can overwrite an existing file |

**Example**  
```js
const newImgFolder = await fs.createEntryWithUrl("plugin-temp:/img", { type: types.folder });
const newTmpFolder = await fs.createEntryWithUrl("file:/Users/user/Documents/tmp", { type: types.folder });
```
**Example**  
```js
const newDatFile = await fs.createEntryWithUrl("plugin-temp:/tmp/test.dat", { overwrite: true });
const newTxtFile = await fs.createEntryWithUrl("file:/Users/user/Documents/test.txt", { overwrite: true });
```


## getEntryWithUrl(url)
Gets an entry of the given url and returns the appropriate instance.

**Returns**: `Promise<File|Folder>` the File or Folder object for the given url  
**Throws**:

- `Error` if invalid file url format or value is passed.
if the file/folder does not exist at the url.


| Param | Type | Description |
| --- | --- | --- |
| url | `string` | the url to get an Entry object Note that file: scheme has limited support in UWP due to the strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions) |

**Example**  
```js
const tmpFolder = await fs.getEntryWithUrl("plugin-temp:/tmp");
const docFolder = await fs.getEntryWithUrl("file:/Users/user/Documents");
```
**Example**  
```js
const tmpFile = await fs.getEntryWithUrl("plugin-temp:/tmp/test.dat");
const docFile = await fs.getEntryWithUrl("file:/Users/user/Documents/test.txt");
```


## getFsUrl(entry)
Returns the fs url of given entry.

**Returns**: `string`  

| Param | Type |
| --- | --- |
| entry | `Entry` | 



## getNativePath(entry)
Returns the platform native file system path of given entry.

**Returns**: `string`  

| Param | Type |
| --- | --- |
| entry | `Entry` | 



## createSessionToken(entry)
Returns a token suitable for use with certain host-specific APIs (such as Photoshop). This token is valid only for the current plugin session. As such, it is of no use if you serialize the token to persistent storage, as the token will be invalid in the future.

Note: When using the Photoshop DOM API, pass the instance of the file instead of a session token -- Photoshop will convert the entry into a session token automatically on your behalf.

**Returns**: `string` - the session token for the given entry  

| Param | Type |
| --- | --- |
| entry | `Entry` | 

**Example**  
```js
const fs = require('uxp').storage.localFileSystem;
let entry = await fs.getFileForOpening();
let token = fs.createSessionToken(entry);
let result = await require('photoshop').action.batchPlay([{
    _obj: "open",
    "target": {
       _path: token, // Rather than a system path, this expects a session token
        _kind: "local",
    }
}], {});
```


## getEntryForSessionToken(token)
Returns the file system Entry that corresponds to the session token obtained from `createSessionToken`. If an entry cannot be found that matches the token, then a `Reference Error: token is not defined` error is thrown.

**Returns**: `Entry` - the corresponding entry for the session token  

| Param | Type |
| --- | --- |
| token | `string` | 



## createPersistentToken(entry)
Returns a token suitable for use with host-specific APIs (such as Photoshop), or for storing a persistent reference to an entry (useful if you want to only ask for permission to access a file or folder once). A persistent token is not guaranteed to last forever -- certain scenarios can cause the token to longer work (including moving files, changing permissions, or OS-specific limitations). If a persistent token cannot be reused, you'll get an error at the time of use.

**Returns**: `Promise<string>` - the persistent token for the given entry  

| Param | Type |
| --- | --- |
| entry | `Entry` | 

**Example**  
```js
const fs = require('uxp').storage.localFileSystem;
let entry = await fs.getFileForOpening();
let token = await fs.createPersistentToken(entry);
localStorage.setItem("persistent-file", token);
```


## getEntryForPersistentToken(token)
Returns the file system Entry that corresponds to the persistent token obtained from `createPersistentToken`. If an entry cannot be found that matches the token, then a `Reference Error: token is not defined` error is thrown.

Note: retrieving an entry for a persistent token does _not_ guarantee that the entry is valid for use. You'll need to properly handle the case where the entry no longer exists on the disk, or the permissions have changed by catching the appropriate errors. If that occurs, the suggested practice is to prompt the user for the entry again and store the new token.

**Returns**: `Promise<Entry>` - the corresponding entry for the persistent token  

| Param | Type |
| --- | --- |
| token | `string` | 

**Example**  
```js
const fs = require('uxp').storage.localFileSystem;
let entry, contents, tries = 3, success = false;
while (tries > 0) {
    try {
        entry = await fs.getEntryForPersistentToken(localStorage.getItem("persistent-file"));
        contents = await entry.read();
        tries = 0;
        success = true;
    } catch (err) {
        entry = await fs.getFileForOpening();
        localStorage.setItem("persistent-token", await fs.createPersistentToken(entry));
        tries--;
    }
}
if (!success) {
    // fail gracefully somehow
}
```


## isFileSystemProvider(fs)
Checks if the supplied object is a `FileSystemProvider`. It's safe to use even
if the object is `null` or `undefined`. Useful for type checking.

**Returns**: `boolean` - If `true`, the object is a file system provider  

| Param | Type | Description |
| --- | --- | --- |
| fs | `any` | the object to check |


  