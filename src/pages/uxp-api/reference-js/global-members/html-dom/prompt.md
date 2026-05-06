---
title: window.prompt()
description: "Returns: string - message entered by the user in the prompt field or default value if nothing entered."
---

# window.prompt()
**Returns**: `string` - message entered by the user in the prompt field or default value if nothing entered.  
**Since**: v7.0.0

\<br\>\</br\>

Displays a Prompt message dialog putting the application in a modal state while \<b\>not blocking\</b\> the Javascript thread and still allowing processing of events in the main event loop.

<InlineAlert variant="info" slots="text"/>

UXP behaviour is different from the standard behaviour of blocking the javascript thread of execution until the dialog has been dismissed.

The following are additional simple alerts supported by UXP
1. [confirm()](confirm.md)
2. [alert()](alert.md)  

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | A string of text to display to the user. |
| prompt | `string` | Default value for the field. |

**Example**  
```javascript
// Below prompt function has 2 params
// "Enter your name: " - Message to display
// "Adobe" - Default value that will be present in the Prompt pop-up at launch
prompt("Enter your name: ","Adobe");
```

\<b\> Note: \</b\>
1. Since UXP v7.4, `prompt()` can only be invoked in `plugin` via the featureFlags `enableAlerts`. Update your Manifest v5 with the following

```json
"featureFlags": {
     "enableAlerts": true
 }
```
2. Since UXP v7.4, `prompt()` is disabled for `scripts`

