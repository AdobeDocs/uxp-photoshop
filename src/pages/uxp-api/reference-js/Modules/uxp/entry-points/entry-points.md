---
title: "require('uxp').entrypoints"
description: "To get an instance: require(\"uxp\").entrypoints"
---

# require('uxp').entrypoints
To get an instance: `require("uxp").entrypoints`



## setup(entrypoints)
API for plugin to add handlers and menu items for entrypoints defined in manifest.
This API can only be called once and there after other apis can be used to modify menu items.
The function throws in case of any error in entrypoints data or if its called more than once.


| Param | Type | Description |
| --- | --- | --- |
| entrypoints | `Object` | it consists of mainly three objects - 'plugin', 'panels' and 'commands'. |
| entrypoints.plugin | `Object` | This can be an object or a function. If this is a function, it is                                           assumed as the 'create' handler (described below). |
| entrypoints.plugin.create | `function` | This is called after plugin is loaded. 'this' can be used to access                                         UxpPluginInfo object. If 'plugin' object is defined, 'create' must be defined.                                         To signal failure, throw an exception. |
| entrypoints.plugin.destroy | `function` | This is called before plugin is unloaded. 'this' can be used to access                                          UxpPluginInfo object. |
| entrypoints.panels | `Array<object>` | This contains a list of key-value pairs where each key is a panel id (string) and                               value is the data for the panel whose type can be object/function.                               If a function, it is assumed to be the 'show' method (described below).                               If an object, it can contain following properties but it is must to                               define either of 'create' or 'show'. |
| entrypoints.panels.create | `function` | This is called when a panel is created. 'this' can be used to access                                         UxpPanelInfo object. This function can return a promise.                                         To signal failure, throw an exception or return a rejected promise.                                         This has a default Timeout of 300 MSec from manifest v5 onwards.                              Parameters :                                          create(event) \{}, till Manifest Version V4                                          create(rootNode) \{}, from v5 onwards |
| entrypoints.panels.show | `function` | This is called when a panel is shown. 'this' can be used to access                                         UxpPanelInfo object. This function can return a promise.                                         To signal failure, throw an exception or return a rejected promise.                                         This has a default Timeout of 300 MSec from manifest v5 onwards.                              Parameters :                                          show(event) \{}, till Manifest Version V4                                          show(rootNode, data) \{}, from v5 onwards |
| entrypoints.panels.hide | `function` | This is called when a panel is hidden. 'this' can be used to access                                       UxpPanelInfo object. This function can return a promise.                                       To signal failure, throw an exception or return a rejected promise.                                       This has a default Timeout of 300 MSec from manifest v5 onwards.                              Parameters :                                          hide(event) \{}, till Manifest Version V4                                          hide(rootNode, data) \{}, from v5 onwards |
| entrypoints.panels.destroy | `function` | This is called when a panel is going to be destroyed. 'this' can be                                          used to access UxpPanelInfo object. To signal failure, throw an exception.                              Parameters :                                          destroy(event) \{}, till Manifest Version V4                                          destroy(rootNode) \{}, from v5 onwards |
| entrypoints.panels.invokeMenu | `function` | This is called when a panel menu item is invoked.                                             Menu id is passed as the first argument to this function. 'this' can be                                             used to access UxpPanelInfo object. This function can return a promise.                                             To signal failure, throw an exception or return a rejected promise. |
| entrypoints.panels.customEntrypoint | `function` | Apart from the above default uxp panel entrypoints, Host Apps can define                                                   additional entrypoints to support custon lifecycle events. Details of the entrypoint like                                                   name, parameters passed, return type, etc. are defined by the host app.                                                   Currently, Photoshop hasn't defined any custom entrypoints.                                                   Xd has defined one custom entrypoint `update`.                                                        update entrypoint in XD is called whenever panel UI content should be updated.                                                        Parameters : update(scenegraph.selection, scenegraph.update)                                                        [https://developer.adobe.com/xd/uxp/develop/reference/ui/panels/update/](https://developer.adobe.com/xd/uxp/develop/reference/ui/panels/update/) |
| entrypoints.panels.menuItems | `Array` | array of menu items. Each menu item can be a string or an object with                                         properties defined below. Menu items are displayed in the                                         same order as specified in this array. For specifying a separator,                                         a value of "-" or menu item with label "-" can be used at required place in the array. |
| entrypoints.panels.menuItems.id | `string` | identifier of the menu item. |
| entrypoints.panels.menuItems.label | `string` | display text for the menu item. Should be localized. If label is not                                              specified, id is used as label. |
| entrypoints.panels.menuItems.enabled | `boolean` | enabled/disabled state for the menu item. Default - true. |
| entrypoints.panels.menuItems.checked | `boolean` | checked state for the menu item. Default - false. |
| entrypoints.panels.menuItems.submenu | `Array` | submenu for this menu item again as an array of 'menuItems'.                                               'id' of submenus should still be unique across panel. |
| entrypoints.commands | `Array<object>` | This object contains a list of key-value pairs where each key is the command id and                                 value is command's data whose type can be an object or function.                                 If a function, it is assumed to be 'run' method (described below).                                 If an objet, it can contain following properties but 'run' is must to specify. |
| entrypoints.commands.run | `function` | This is called when the command is invoked via menu entry. 'this' can be used                                      to access UxpCommandInfo object. This function can return a promise.                                      To signal failure, throw an exception or return a rejected promise.                              Parameters :                                          run(event) \{}, till Manifest Version V4                                          run(executionContext, ...arguments) \{}, from v5 onwards |
| entrypoints.commands.cancel | `function` | For future use. |

**Example**  
```js
const { entrypoints } = require("uxp");
 entrypoints.setup({
     plugin: {
         create() {..},
         destroy() {..}
     },
     panels: {
         "panel1": {
             create() {..},
             show() {..},
             hide() {..},
             destroy() {..},
             invokeMenu() {..},
             update() {..}, // customEntrypoint example
             validatNode() {..} // customEntrypoint example
              menuItems: [
                  {
                      id: "signIn",
                      label: "Sign In...",
                      enabled: false,
                      checked: false
                      submenu: [
                          { id: "submenu1", label: "submenu1", enabled: false, checked: false},
                          { "submenu2" }
                      ]
                  },
                  "-",  // separator.
                  "Sign out",  // by default enabled, and the id will be same with the label.
              ]
          },
          "panel2": {..}
      },
      commands: {
          "command1": {
              run() {..},
              cancel() {..}
          },
          "command2": function(){..}
      }
  });
```


## getPanel(id)
Get panel with specified id

**Returns**: `UxpPanelInfo` - - panel object for a valid id
                          null for an invalid id  

| Param | Type | Description |
| --- | --- | --- |
| id | `String` | panel id |



## getCommand(id)
Get command with specified id

**Returns**: `UxpCommandInfo` - - command object for a valid id
                            null for an invalid id  

| Param | Type | Description |
| --- | --- | --- |
| id | `String` | command id |


  