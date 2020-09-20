# Flyout Menus

In beta versions of UXP for Photoshop, flyout menus (menus that show up in the two-patty hamburger icon at the top right of the panel) were defined in the `manifest.json` file. This is no longer the case. For flexibility, flyout menus are now defined by supplying a JSON structure to UXP at runtime, as in the example below.

## Defining Flyout Menus

Flyout menus are defined by a JSON structure that's passed to the UXP `setup` method. The JSON tells UXP what the menuitems are, and what to do when they're invoked. In the following example, there are three starship-related menuitems. When a menuitem is chosen by the user ("invoked"), UXP calls the plugin-defined function `handleFlyout`.

```js
const { entrypoints } = require("uxp");
// the setup() function tells UXP how to handle
// the entrypoints defined in your manifest.json file.
entrypoints.setup({
  panels: {
    my_panel_entrypoint: {
      show() {
        // usually panels are already populated
        // from the HTML, so we do nothing here
      },
      menuItems: [
        {id: "item1", label: "Warp Factor 1"},
        {id: "item2", label: "Shields Up"},
        {id: "item3", label: "Engage"}
      ],
      invokeMenu(id) {
        handleFlyout(id);
      }
    }
  }
});
```

## Handling Flyouts

The `handleFlyout` function (defined above) gets passed the flyout menu id. It can use this id to dispatch code to handle each menuitem, as shown below.

```js
function handleFlyout(id) {
  switch (id) {
    case "item1": {
        console.log("aye captain");
        break;
    }
    case "item2": {
        console.log("shields at 40 percent");
        break;
    }
    case "item3": {
        console.log("warp drive is offline");
        break;
    }
  }
}
```