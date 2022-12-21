<!--
index_desc: Change Log in UXP version
-->

# UXP Changelog

## UXP v6.4

### New
- [UXP-20237]: Webviews for Panels
- [UXP-20191]: Support Path Module APIs
- [UXP-20247]: Script can run fsapi with full access in localFileSystem

### Bugs Fixes
- [UXP-19364]: PluginManifest parsing / Load Plugin errors not logged in UDT
- [UXP-19978]: Error shown in UDT APP logs on Plugin UnLoad
- [UXP-20059]: UXP script : file session tokens are not getting created
- [UXP-20199]: Error message and stack are empty in case of reject("error string") executed in script
- [UXP-20121]: [Win only]-Volume is being muted automatically for 3rd video in the tutorial while opening the video in Theatre mode
- [UXP-20039]: After closing the theatre mode, video's are Overlapping while scrolling up and down in DP
- [UXP-19995]: Provide an API to programmatically close dialog in pop-out/theatre mode.
- [UXP-20095]: Plugin Data folder shouldn't be created for scripts
- [UXP-20168]: Crash on exit
- [UXP-20215]: script.setResult("kSuccess") not working
- [UXP-19851]: Resource Leaks in Window Dialog on UWP
- [UXP-19920]: Privilege plugin fail to add in XD in certain cases
- Fixed mouse/keyboard events within Webview in XD v55 and Win 10.

## UXP v6.3

### New
- [UXP-19671]: Support Blob APIs. Refer `Blob` module under `Global Members/Data Transfers` in JavaScript Reference
- [UXP-19670]: Blob support in Fetch API.
- [UXP-12909]: Support for Crypto APIs - Crypto.getRandomValues() & Crypto.randomUUID(). Refer `Crypto` module under `Global Members` in JavaScript Reference
- UXP Developer Tools v1.7.0 has supports for Debugging UXP Scripts in Photoshop and InDesign, refer [here](https://developer.adobe.com/photoshop/uxp/2022/scripting/getting-started/) for more details
- UXP Developer Tools has new templates in the Create Plugin Dialog. This includes examples for using WebView and Multiple Menus in a Plugin. For more details on Webview refer `HTMLWebViewElement` module under `Global Members/HTML Elements` in JavaScript Reference

### Bugs Fixes
- [UXP-19738]: Plugin cannot open its own folders because version dots are rejected
- [UXP-19807]: PS crashes frequently during UDT watch reload
- [UXP-19806]: UDT Window / Bring all to Front does not work
- [UXP-19767]: UDT console closed when PS crashes or quits
- [UXP-19699]: UDT fails to launch with "sign-in required" error
- [UXP-19665]: PS crashes with empty `<svg> <polygon>`
- [UXP-19250]: Manifest v5 breaks file permissions dialog
- Many stability Fixes and performance improvements
  