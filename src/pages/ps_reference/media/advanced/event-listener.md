---
id: "event-listener"
title: "Attaching Event Listeners"
sidebar_label: "Event Listeners"
---

# Event Listeners

Photoshop emits various event notifications when a user is actively interacting with the application.

During development of your plugin, you can use [app.eventNotifier](../../../classes/photoshop/#eventnotifier) to enumerate all the event types you'd like to be notified about.

In a production environment, this 'catch-all' notifier is unavailable to you. Once you've created a list of key events you'd like to be notified of, use the following action API to register a listener:


```javascript
var listener = (e,d) => { console.log(e,d); }
require('photoshop').action.addNotificationListener([
    {
        event: "select"
    },
    {
        event: "open"
    } // any other events...
], listener);
```
