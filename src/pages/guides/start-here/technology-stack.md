# The UXP Technology Stack

UXP provides a comprehensive extensibility solution, turning JavaScript and HTML markup into controls in native application windows. Unlike older CEP (Common Extensibility Platform) plugins, UXP plugins run within the same process as the host application, with their UI in its own non-blocking thread.

Also unlike CEP plugins, UXP plugins communicate natively with the host application; there is no boundary between JavaScript and ExtendScript that requires passing strings back and forth.

UXP plugins are built using JavaScript (aka ECMAScript), the scripting language of the Web. All but the simplest plugins also use HTML and CSS. The JavaScript engine is [V8](https://v8.dev), a modern implementation used in many popular browsers. This is in contrast to the engine used in ExtendScript, which is ECMA Edition 3 (about 20 years old). UXP supports all of ES5 and most of ES6 features, including arrow functions, async/await, etc.

Basically, a UXP plugin is running inside a pseudo-browser window, inside the host application (e.g., Photoshop). Even though UXP uses HTML, CSS, and JavaScript, its underlying engine is _not_ a full browser (unlike Chromium, which is used in CEP). This means that some HTML and CSS features that you may be used to in web development and CEP are not supported in UXP. Additionally, some JavasScript libraries and many JavaScript frameworks are not supported. An overview of what's supported and what's not in UXP is [here](/uxp-development/unsupported.md). That page will change as UXP matures and additional functionality is added to its browser, so you might want to bookmark it.

Since UXP is a cross-application cross-platform technology, its documentation starts [here](/uxp-development/index.md), and it applies to all Adobe applications that support UXP. Documentation for Photoshop-specific features that are exposed by UXP starts [here](/photoshop-specific-apis/index.md).