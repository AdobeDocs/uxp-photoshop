---
title: require('uxp').script;
description: Script module, which contains essential properties and methods while writing scripts.
---

# require('uxp').script;
Script module, which contains essential properties and methods while writing scripts.



## args : `Array`
**Read only**
To get the arguments(if any) passed by host app, while invoking the script.



## executionContext : `ExecutionContext`
**Read only**
ExecutionContext passed by the host app, while invoking the script.



## setResult(result)
To send the execution result back to the host (if required).


| Param | Type | Description |
| --- | --- | --- |
| result | `HostDefinition` | Host defines the contract on what can be returned from scripts and its format. |


  