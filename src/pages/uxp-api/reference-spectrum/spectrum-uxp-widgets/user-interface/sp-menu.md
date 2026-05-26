---
title: sp-menu
description: Renders a menu with menu items. Inside the sp-menu, a series of sp-menu-item or sp-menu-divider elements may exist.
jsDoc: true
---
# sp-menu

**Since:** UXP v4.1

Renders a menu with menu items. Inside the `sp-menu`, a series of `sp-menu-item` or `sp-menu-divider` elements may exist.

![Menus](../../assets/sp-menu.png)

**See**:
- [https://opensource.adobe.com/spectrum-web-components/components/menu](https://opensource.adobe.com/spectrum-web-components/components/menu)

**Example**

```html
<sp-menu>
    <sp-menu-item> Deselect </sp-menu-item>
    <sp-menu-item> Select inverse </sp-menu-item>
    <sp-menu-item> Feather... </sp-menu-item>
    <sp-menu-item> Select and mask... </sp-menu-item>
    <sp-menu-divider></sp-menu-divider>
    <sp-menu-item> Save selection </sp-menu-item>
    <sp-menu-item disabled> Make work path </sp-menu-item>
</sp-menu>
```

## Responding to events

You can respond to changes in the menu using the `change` event.

```js
document.querySelector(".yourMenu").addEventListener("change", evt => {
    console.log(`Selected item: ${evt.target.selectedIndex}`);
})
```

## Quirks

* `sp-menu-divider` elements will only render inside an `sp-dropdown`.

