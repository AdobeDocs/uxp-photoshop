---
title: Plugin
description: Plugin object received in the PluginManager.getPlugins list,used for IPC(Inter Plugin Communication)
---

# Plugin
Plugin object received in the PluginManager.getPlugins list,used for IPC(Inter Plugin Communication)



## id : `string`
**Read only**
Get plugin id



## version : `string`
**Read only**
Get plugin version



## name : `string`
Get plugin name



## manifest : `Object`
**Read only**
Get plugin manifest



## enabled : `boolean`
**Read only**
Get plugin enabled/disabled state



## showPanel(panelId)
Show panel with the given ID. This api may be routed to the host app which can chose to disallow it.Used for commmunicating with other plugins (IPC : Inter Plugin Communication)Note: Currently there is no API to hide a panel, panels can be shown but can not be hidden.

**Returns**: `Promise<void>|string` Resolves with a void if success else returns a rejection message  

| Param | Type | Description |
| --- | --- | --- |
| panelId | `string` | id of the panel to be shown |



## invokeCommand(commandId, ...params)
Invoke command with given ID. This api may be routed to the host app which can chose to disallow it.Used for commmunicating with other plugins (IPC : Inter Plugin Communication)

**Returns**: `Promise<void>`  

| Param | Type | Description |
| --- | --- | --- |
| commandId | `string` | id of the command to be invoked |
| ...params | `*` | arguments to be passed to the command entrypoint as defined in the plugin |


  