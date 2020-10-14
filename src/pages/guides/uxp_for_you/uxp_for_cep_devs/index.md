# UXP for CEP Developers

## Goodbye CEP

The Common Extensibility Platform has been the method of choice for plugin developers who needed anything beyond the simplest of user interfaces. While it's still going to be around in Photoshop for some time, it will at some point be deprecated and then, eventually, removed from Photoshop.

CEP is being retired for several reasons:

* CEP uses a full version of Chromium as a web host. This is very resource intensive for the host application, even more so since _each_ CEP plugin runs in its _own_ instance of Chromium.
* CEP doesn't talk directly to the host application, but requires that host scripts be written in ExtendScript, and passed to the app via EvalScript calls. So there are two different JavaScript engines running. In practice, this means that a plugin's code is artifically split between ExtendScript and JavaScript, and passing anything more than simple parameters between the two layers is awkward and inefficient.
* CEP plugins cannot use native host controls, so CEP dialogs and panels don't match host ones without a lot of CSS fiddling.
* The ExtendScript side of CEP uses a very old JavaScript version that lacks many modern features. As such, a developer must juggle two different JavaScript environments.

## Hello UXP
UXP supports the HTML and CSS you'll need to make simple or, with the addition of the React JavaScript framework, complex panels as well as dialogs and headless (no UI) plugins.

Because UXP communicates directly with the host application, the issues associated with the CEP/ExtendScript interface disappear. In general, plugin development is simpler with UXP.

UXP comes with a plugin loader and debugger that makes managing plugin development much simpler than what's available in CEP.

UXP plugins can use the [Spectrum CSS](https://opensource.adobe.com/spectrum-css/) components, which can be used to provide theme-aware cross-platform user interfaces that look the same across CC applications.