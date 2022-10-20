<!--
index_desc: Change Log in UXP version
-->

# UXP Changelog

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
  