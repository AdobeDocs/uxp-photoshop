---
id: "cpp-pluginsdk"
title: "Communication with C++ Plugin SDK"
sidebar_label: "CSDK <-> UXP Messaging"
---

For developers with the intent to utilize the C++ based plugin SDK in conjunction with a UXP based plugin, the C++ SDK now includes a method to communicate with its UXP counterpart. On C++ side, we use the component's plugin name property in the plugin resource to identify plugins, and on UXP side, we use the `id` field from the `manifest.json` file.

# PIUXPSuite

The PIUXPSuite communicates with UXP plugins using PIActionDescriptors. Use the ActionDescriptor suite as defined in the SDK's `PIAction.h` whenever using this suite. To start with, grab [PIUXPSuite.h](./PIUXPSuite.h) and add it to your plugin project.

The signatures in `PIUXPSuite.h` are as follows:

```cpp
typedef void (*PIUXPMessageNotifier)(PIActionDescriptor descriptor);
typedef struct PsUXPSuite1
{
    SPAPI SPErr (*SendUXPMessage) (SPPluginRef selfRef, const char* uxpPluginId, PIActionDescriptor descriptor);
    SPAPI SPErr (*AddUXPMessageListener) (SPPluginRef selfRef, PIUXPMessageNotifier notifier);
    SPAPI SPErr (*RemoveUXPMessageListener) (SPPluginRef selfRef);

} PsUXPSuite1;
```

# CSDK to UXP messaging

`PsUXPSuite1.SendUXPMessage` can be used to send messages to a UXP plugin given the plugin ID (from `manifest.json`) and an action descriptor containing the message. 

## Includes and globals
First, make sure to include the right files and declare the globals to store the important pointers.

```cpp
// Include these
#include "PIActions.h" // For PIActionDescriptor
#include "PIUXPSuite.h" // For messaging

// Your globals
SPBasicSuite * sSPBasic = NULL; // This is passed to your main function
SPPluginRef gPlugInRef = NULL; // This is passed to your main function
PsUXPSuite1* sUxpProcs = NULL; // You acquire this using sSPBasic
PSActionDescriptorProcs* sDescriptorProcs = NULL; // You acquire this using sSPBasic
```

## Based on Plugin Type...

### Automation Plugins: `AutoPluginMain`

For Automation plugins, the entry method is called `AutoPluginMain` use the code below to extract the plugin reference and the basic suite.

```cpp
DLLExport SPAPI SPErr AutoPluginMain(const char* caller, const char* selector, void* message) {

    SPMessageData* basicMessage = (SPMessageData*) message;
    sSPBasic = basicMessage->basic;
    gPlugInRef = basicMessage->self;
    ...
```

### Filter plugins: `PluginMain`

Filter plugins use an entry method called `PluginMain`, in which you can grab the basic suite and the plugin reference directly.

```cpp
DLLExport MACPASCAL void PluginMain(const int16 selector,
                                    FilterRecordPtr filterRecord,
                                    intptr_t * data,
                                    int16 * result) {
    sSPBasic = filterRecord->sSPBasic;
    gPlugInRef = filterRecord->plugInRef; 
    ...
```

## Acquiring the suites

Next up is acquiring the correct suites to create your messages with ActionDescriptors and sending them to the UXP plugin of your choice.

```cpp
// in your main method
    sSPBasic->AcquireSuite(kPSUXPSuite,
                           kPSUXPSuiteVersion1,
                           (const void**)&sUxpProcs);

    sSPBasic->AcquireSuite(kPSActionDescriptorSuite,
                           kPSActionDescriptorSuiteVersion,
                           (const void**)&sDescriptorProcs);

    PIActionDescriptor desc;
    sDescriptorProcs->Make(&desc);
    sDescriptorProcs->PutString(desc, 'helo', "Hello World!");
    sDescriptorProcs->PutFloat(desc, 'fltp', 0.952);

    const char* UXP_MANIFEST_ID = "com.your.pluginId";
    sUxpProcs->SendUXPMessage(gPlugInRef, UXP_MANIFEST_ID, desc);
}
```

## On your UXP plugin

Add a messaging listener using the `messaging` API group. Any descriptors sent from a CSDK plugin to the ID of this plugin will arrive on this callback.

```js
let callback = (o) => { 
    console.log("Message from " + o.pluginId + ":" + o.message); 
}

require('photoshop').messaging.addSDKMessagingListener(callback);

...
// You can remove your listener using this API
require('photoshop').messaging.removeSDKMessagingListener(callback);
```

# UXP to CSDK messaging

For communication from a UXP plugin to a C plugin, define a listener within your CPlugin, and utilize both `AddUXPMessageListener` and `RemoveUXPMessageListener` at the appropriate time.

## Listener Callback

All messages sent to this plugin will be handled in this method

```cpp
void UXPMessageHandler(PIActionDescriptor descriptor) {
    // do something
}
```

## Adding listener

Use the code below where you'd like to start listening to messages.

```cpp
sUxpProcs->AddUXPMessageListener(gPlugInRef, UXPMessageHandler);
```

## Removing listener

Use the code below to stop listening to messages from UXP plugins.

```cpp
sUxpProcs->RemoveUXPMessageListener(gPlugInRef);
```

> *NOTE*: Only one notifier per plugin may be registered.

## Sending the message from UXP

To send messages to the C Plugin, take note of the Component Id as defined in its resouce `PiPL`. This is the second parameter of the `PIComponentProperty`.

With this Id, use the messaging group of the photoshop package to send your message across.

```js
let messageContent = {
    status: "ok",
    filter: 416
};
window.require('photoshop').messaging.sendSDKPluginMessage(<YourPluginComponentId>, messageContent);
```
