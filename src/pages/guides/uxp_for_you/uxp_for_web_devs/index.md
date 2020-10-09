# UXP for Web Developers

At first glance, developing for UXP in Adobe applications looks very familiar to people coming from web development. UXP uses the familiar structure of HTML, CSS, and JavaScript to build what look like web pages but are actually dialogs and panels.

It's not sufficient to know those three technologies when writing UXP plugins; as a developer, you also have to be familiar with the host application's API. This is where the Web and UXP seriously diverge. There's nothing like an application API for websites, yet to accomplish anything useful in XD, Photoshop, or any other Creative Cloud application that supports UXP, you have to know the app.

For Adobe Photoshop, the API documentation can be found [here](../ps-basics/index.md). For Adobe XD, the API documentation is [here](https://adobexdplatform.com).

UXP plugins also have a different directory structure than typical websites. There is a required [manifest file](../uxp-basics/uxp-manifest.md) at the top level of the directory. There is also an optional set of icons which contains png images that are used when a panel is minimized in Photoshop.