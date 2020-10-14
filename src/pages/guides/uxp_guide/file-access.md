# File I/O

## Overview

File and folder access is an important part of many plugins. Files and folders can exist in these locations:

* Inside the plugin folder itself.
* In temporary plugin-specific storage.
* External to the plugin, anywhere in the filesystem. Because of sandboxing requirements of recent OS releases, UXP does not allow arbitrary access to any file on the host system. Therefore, these files are accessed by making a request of the user (by showing a file-picker dialog) and obtaining a _token_.
* In a UXP-specific secure store; this is for for secure files that contain sensitive information. See [Secure Storage](./secure-storage.md).
* On the network (not covered here; see the [Networking](./network-io.md) section.)

> In the near future, UXP will provide a permissions system for persistent tokens so developers won’t need user interaction for the same path every session. For now, if you need constant access to a location to write and read files, please use the UXP sanctioned locations for your plugin, accessed by the methods listed in the FileSystemProvider object of UXP.

## Secure Storage

Sometimes a plugin needs to store sensitive information such as external site tokens or passwords. For these cases, UXP offers Secure Storage, protected storage which can be used to store sensitive data
per plugin.

SecureStorage takes a key-value pair and encrypts the value before being
stored. After encryption, it stores the key and the encrypted value pair. When the value
is requested with an associated key, it's retrieved after being decrypted. Please note
that _the key is not encrypted_, thus it's not protected by the cryptographic operation.

There are some caveats for using SecureStorage:

1. SecureStorage is not appropriate for sensitive data which should be kept secret from the current user. SecureStorage is protected under the current user's account credentials. This means the encrypted data can be at risk of being decrypted with the current user's privilege.

2. Data in SecureStorage can be lost for various reasons. For an example, the user could uninstall the host application and delete the secure storage. Or, the cryptographic information used by the secure storage could be damaged by the user accidentally. This will result in loss of data without the secure storage being removed.

3. SecureStorage should be regarded as a cache rather than a persistent storage. Data in SecureStorage should be able to be regenerated from plugins after the time of loss.
