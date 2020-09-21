# Folder structure

 When you have the right structure for your Photoshop plugin, it will look like this:

```
my-plugin-folder
├── [index.html] (optional)
├── index.js
└── manifest.json
```

## Your plugin files

Within my-plugin-folder, you'll need _at minimum_ two files:


1.   `manifest.json` is your plugin’s manifest. It _must_ be named exactly that.

This file is where you include _facts_ about your plugin, such as its name, whether it's a panel, headless plugin, or modal dialog, and so on. [Learn about the manifest here](./manifest.md).

2.   `index.js` is your plugin’s code. It doesn't have to be named index.js; that's determined by the `main` property in your manifest file, but `index.js` is common practice.

This file contains your JavaScript code that implements the logic for your plugin. [Learn more about `index.js` here](./handlers.md).


These two files go into your plugin's parent directory.

The `manifest.json` and `index.js` files stored in your plugin's parent directory are the bare minimum requirement for your plugin to work, but it's possible to have more JavaScript files if you want. You can learn about including further JavaScript files in our [JavaScript concepts section on using `require`](/reference/javascript/javascript-support.html#can-i-use-require).


## Next steps

Read on to learn about the two required files:

- [manifest.json](./manifest.md)
- [index.js](./handlers.md)