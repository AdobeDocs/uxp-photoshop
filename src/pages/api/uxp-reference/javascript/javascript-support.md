# JavaScript version and feature support

UXP plugins support "modern JavaScript" (aka ECMAScript, the standard which JavaScript follows)... but what does that mean exactly? 

## Can I use ES5 features?

Yes! This means you can use `Array#map`, `Array#reduce`, and numerous other language features introduced with ES5.

In fact, you can write your whole plugin in ES5 if you so choose.


## What ES2015+ (ES6) features can I use?

UXP plugin APIs support most of ES2015 and beyond. You can use features such as:

- Template literals
- Classes
- Block-scoped variables ( `let` , `const` )
- Object destructuring
- Default parameters
- Spread and Rest ( `...` )
- Arrow functions
- Asynchronous functions ( `async` / `await` )
- Promises


## Can I use require?

Yes, you can use `require` to import additional files.

Note that `require` in UXP does not follow Node.js-style resolution. You can only require files in your plugin directory relative to your file location, but not outside of your plugin directory. There is no lookup in a `package.json` or a `node_modules` directory.

For example, the following works:

```js
const aFile = require("./aFile");
const someJSON = require("./someJSON.json");
const anotherFile = require("./path/to/file/file");
const someLib = require("./node_modules/somelib");
```

However, the following will not:

```js
const someLib = require("somelib");  // no package.json lookup
```


## Can I use npm packages or Node.js APIs?

The plugin sandbox in UXP does not include most Node.js APIs, such as unrestricted filesystem access or the ability to spawn external processes. Npm packages that only depend on the core JavaScript language APIs can work in UXP, but because UXP's `require()` differs (see above), you will likely have to use webpack or rollup in order to generate a single-file bundle first.
