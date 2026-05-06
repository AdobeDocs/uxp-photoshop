---
title: "require('uxp').storage.errors"
description: "Overview of require('uxp').storage.errors"
---

# require('uxp').storage.errors


## AbstractMethodInvocationError
Attempted to invoke an abstract method.



## ProviderMismatchError
Attempted to execute a command that required the providers of all
entries to match.



## EntryIsNotAnEntryError
The object passed as an entry is not actually an `Entry`.



## EntryIsNotAFolderError
The entry is not a folder, but was expected to be a folder.



## EntryIsNotAFileError
The entry is not a file, but was expected to be.



## NotAFileSystemError
The instance was expected to be a file system, but wasn't.



## OutOfSpaceError
The file system is out of space (or quota has been exceeded)



## PermissionDeniedError
The file system revoked permission to complete the requested
action.



## EntryExistsError
An attempt was made to overwrite an entry without indicating
that it was safe to do so via `overwrite: true`.



## FileIsReadOnlyError
An attempt was made to write to a file that was opened as
read-only.



## DomainNotSupportedError
Domain is not supported by the current FileSystemProvider
instance.



## InvalidFileNameError
The file name contains invalid characters



## InvalidFileFormatError
Unsupported format type



## DataFileFormatMismatchError
Data and Format mismatch


  