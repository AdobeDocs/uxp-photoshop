---
title: window.alert()
description: "Since: v7.0.0"
---

# window.alert()
**Since**: v7.0.0
\<br\>\</br\>

Displays an Alert message dialog putting the application in a modal state while \<b\>not blocking\</b\> the JavaScript thread and still allowing processing of events in the main event loop.

<InlineAlert variant="info" slots="text"/>

UXP behaviour is different from the standard behaviour of blocking the JavaScript thread of execution until the dialog has been dismissed.

The following are additional simple alerts supported by UXP
1. [confirm()](confirm.md)
2. [prompt()](prompt.md)  

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | A message you want to display in the alert dialog\<br\>\</br\> |

**Example**  
```javascript
alert("This is alert message");
```

\<b\> Note: \</b\>
1. Since UXP v7.4, `alert()` can only be invoked in `plugin` via the featureFlags `enableAlerts`. Update your Manifest v5 with the following

```json
"featureFlags": {
     "enableAlerts": true
 }
```
2. Since UXP v7.4, `alert()` is disabled for `scripts`

