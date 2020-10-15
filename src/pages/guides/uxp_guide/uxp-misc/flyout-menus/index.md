# Flyout Menus

A flyout menu in Photoshop is shown when the user clicks on the hamburger icon at the top right of your panel. You can use them to invoke operations that, for one reason or another, you don't want them to take up real estate on your panel.

For flexibility, flyout menus are defined by supplying a JSON structure to UXP at runtime, as in the example below.

## Defining Flyout Menus

Flyout menus are defined by a JSON structure that's passed to the UXP `entrypoints.setup` method. The JSON tells UXP what the menuitems are, and what to do when they're invoked. In the following example, there are three starship-related menuitems. When a menuitem is chosen by the user ("invoked"), UXP calls the plugin-defined function `handleFlyout`.

```js
const { entrypoints } = require("uxp");
// the setup() function tells UXP how to handle
// the entrypoints defined in your manifest.json file.
entrypoints.setup({
  panels: {
    my_panel_entrypoint: {
      show() {
        // put any initialization code for your plugin here.
      },
      menuItems: [
        {id: "setWarpFactor", label: "Warp Factor 1"},
        {id: "raiseShields", label: "Shields Up"},
        {id: "makeItSo", label: "Engage"}
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
    case "setWarpFactor": {
        console.log("Aye captain");
        break;
    }
    case "raiseShields": {
        console.log("Shields at 40 percent");
        break;
    }
    case "makeItSo": {
        console.log("Warp drive is offline");
        break;
    }
  }
}
```