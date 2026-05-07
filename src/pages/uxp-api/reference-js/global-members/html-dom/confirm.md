---
title: window.confirm()
description: Returns: boolean - true If OK button is pressed and false when Cancel button is pressed.
---

# window.confirm()
**Returns**: `boolean` - true If OK button is pressed and false when Cancel button is pressed.  
**Since**: v7.0.0
\<br\>\</br\>

Displays a Confirm message dialog putting the application in a modal state while \<b\>not blocking\</b\> the Javascript thread and still allowing processing of events in the main event loop.

<InlineAlert variant="info" slots="text"/>

UXP behaviour is different from the standard behaviour of blocking the javascript thread of execution until the dialog has been dismissed.

The following are additional simple alerts supported by UXP
1. [alert()](alert.md)
2. [prompt()](prompt.md)  

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | A string you want to display in the confirmation dialog. |

**Example**  
```javascript
confirm("This is confirmation message");
```

\<b\> Note: \</b\>
1. Since UXP v7.4, `confirm()` can only be invoked in `plugin` via the featureFlags `enableAlerts`. Update your Manifest v5 with the following

```json
"featureFlags": {
     "enableAlerts": true
 }
```
2. Since UXP v7.4, `confirm()` is disabled for `scripts`

