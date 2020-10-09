# UXP Guide

If you're coming to Photoshop development from Adobe XD, you probably know all you need to about UXP. But if you're brand-new to UXP, start here to learn how to build UXP plugins for Photoshop.

## The UXP Technology Stack

UXP provides a comprehensive extensibility solution, turning JavaScript and HTML markup into controls in native application windows. Unlike older CEP (Common Extensibility Platform) plugins, UXP plugins run within the same process as the host application, with their UI in its own non-blocking thread.

Also unlike CEP plugins, UXP plugins communicate natively with the host application; there is no boundary between JavaScript and ExtendScript that requires passing strings back and forth.

UXP plugins are built using JavaScript (aka ECMAScript), the scripting language of the Web. All but the simplest plugins also use HTML and CSS. The JavaScript engine is [V8](https://v8.dev), a modern implementation used in many popular browsers. This is in contrast to the engine used in ExtendScript, which is ECMA Edition 3 (about 20 years old). UXP supports all of ES5 and most of ES6 features, including arrow functions, async/await, etc.

Basically, a UXP plugin is running inside a pseudo-browser window, inside the host application (e.g., Photoshop). Even though UXP uses HTML, CSS, and JavaScript, its underlying engine is _not_ a full browser (unlike Chromium, which is used in CEP). This means that some HTML and CSS features that you may be used to in web development and CEP are not supported in UXP. Additionally, some JavasScript libraries and many JavaScript frameworks are not supported. An overview of what's supported and what's not in UXP is [here](../guides/uxp_basics/unsupported.md). That page will change as UXP matures and additional functionality is added to its browser, so you might want to bookmark it.

Since UXP is a cross-application cross-platform technology, its documentation starts [here](/tbd), and it applies to all Adobe applications that support UXP. Documentation for Photoshop-specific features that are exposed by UXP starts [here](../ps_basics/index.md).

## Key UXP Features

Independent of the host application API, UXP provides features of its own, including:

* File access - UXP can read and write files and folders in the user's filesystem. File accesses outside of the plugin's root folder, the plugin's data folder, and a plugin temporary folder require the user's permission. File I/O is discussed [here](./file-access.md). 

* Network access - UXP supports XMLHttpRequest, WebSockets, and Fetch APIs. Network access is discussed [here](./network-io.md).

* HTML and CSS - UXP supports a subset of HTML and CSS needed to develop plugin UIs.

* Spectrum CSS - UXP plugins can use platform-native HTML components such as buttons, input fields, etc. But a plugin can also use Spectrum CSS components.

* Debugging - UXP plugins can be debugged using the UXP Developer Tool, [described here](../uxp-developer-tool/index.js).

* Localization
If you want your plugins to be used internationally, you should localize them. [Here's how to localize your plugins](./localization-and-platforms.md).

* Flyout menus
If you're writing a panel-based plugin, you have access to the flyout menu (shown at the top right of every panel). Flyout menus are [described here](./flyout-menus.md).

## Setting Up for UXP Development

The first thing you'll want to do to start developing UXP plugins is to understand the development toolchain. [This page](./toolchain.md) explains describes the tools you'll need..