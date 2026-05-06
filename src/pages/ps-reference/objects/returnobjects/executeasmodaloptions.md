---
id: "executeasmodaloptions"
title: "ExecuteAsModalOptions"
sidebar_label: "ExecuteAsModalOptions"
repo: "uxp-photoshop"
product: "photoshop"
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
---

# ExecuteAsModalOptions

| Name | Type | Min Version | Description |
| :------ | :------ | :------ | :------ |
| commandName | *string* | 22.5 | Name of the command. It will be shown in the progress bar if the operation takes a noticeable amount of time. |
| descriptor | *object* | 22.5 | An object literal that is passed as the second parameter of &#x60;targetFunction&#x60; following an [executeAsModal](../executeasmodal) call. Cannot include functions. |
| interactive | *boolean* | 23.3 | Optional mode where UI interactions are permissible within the executeAsModal state. Useful for allowing users to input data into invoked dialogs or workspaces. See [Modal Execution](../executeasmodal). |
| timeOut | *number* | 25.10 | If an existing modal state is encountered at execution, this request will retry until this duration of seconds has passed. |
