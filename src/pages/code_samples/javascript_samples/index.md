# Plain JavaScript Samples

Plain (also called "Vanilla") JavaScript is JavaScript without any libraries or frameworks. Because of that, it's also the easiest environment in which to show examples.

The examples are described briefly below. You can find the source code for these in GitHub [here](#TBD).

## Direct Action ("headless")

The simplest of all plugin patterns in terms of UI. A "headless" plugin is one that has no user interface. When the user selects the plugin from Photoshop's Plugins menu, the plugin runs silently.

Why would you want to do this? If your plugin only does one thing, and has no options or user-entered parameters, you could create it without any UI. The only time you would need a UI would be if the plugin failed in some way, at which point you should display a dialog describing the failure.

This example shows how to get the layer names of the current document and write them to a file. No user interaction is involved.

## Hello, World Dialog

In the spirit of the gold standard for trivial examples since the publication of *The C Programming Language* book in 1978 (and [earlier](https://www.thesoftwareguild.com/blog/the-history-of-hello-world/)), this plugin example does nothing but display a dialog box. But it gives you the idea of the structure of simple plugins that use only pure JavaScript (no HTML or CSS).

## Hello, World Panel

A Panel is a common interface element in Photoshop. Panels are everywhere. You would choose to create a panel-based plugin if you had a UI that needed to persist, as opposed to appearing once and then being dismissed (i.e., a modal dialog).

This is a variant on the plugin above that displays a panel with two buttons. When one button is clicked, the plugin displays a Photoshop alert. Another button fills a list with layer names from the current document. 

This plugin shows how you use an index.html file, some basic CSS, and how to capture UI events to trigger plugin actions.

## Layer Creation and Population

This panel-based plugin lets you type text into an input field, then press a button to create a layer containing that text. It also allows you to read the text from a file. This shows input field processing, file I/O, and some debugging techniques.

## Web Service Query

This plugin demonstrates the common use case of needing to talk to an external website (using `fetch`) to obtain some information that's then used in the document. It then creates a document with a layer containing the data returned from the website.

## Creating A Listbox

A listbox component is not included in Spectrum-CSS, but it's possible to simulate one using `<sp-menu>` and some simple CSS.

## Multi-App Sample

Because UXP will be the standard way of supporting third-party developers across Creative Cloud applications, it's possible for a single plugin to support multiple applications.

This example demonstrates that, supporting both Adobe Photoshop and Adobe XD in a single package. This sample plugin itself does very little, since the DOMs of these two applications are very different.

What is the use case for such a plugin? Typically you'd want to support multiple applications if you're connecting to some external asset service and want to pull assets into multiple applications. Or, you might be using a RESTful service that supplies data that you use in multiple applications.

## Theme Awareness

The Photoshop UI supports multiple "themes" (light, dark, etc.). You can use CSS selectors to change the way your UI looks depending upon what theme the user picks in Photoshop Preferences->Interface. This sample shows the CSS and HTML necessary to make your plugin aware of user-initiated theme changes, and change your color scheme accordingly.