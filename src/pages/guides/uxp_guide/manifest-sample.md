# Sample UXP Manifest JSON

Here is a sample manifest.json file. Below the code listing is a line-by-line explanation of the file. If you are a bit rusty at reading JSON, [here's a good reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

```
 1 {
 2     "manifestVersion": 4,
 3     "id": "YOUR_ID_HERE",
 4     "name": "Name of your plugin",
 5     "version": "1.0.0",
 6     "main": "index.html",
 7     "host": {
 8         "app": "PS",
 9         "minVersion": "22.0.0"
10     },
11     "entrypoints": [
12         {
13             "type": "command",
14             "id": "commandFn",
15             "label": {
16                 "default": "Show A Dialog"
17             }
18         },
19         {
20             "type": "panel",
21             "id": "panelName",
22             "label": {
23                 "default": "Panel Name"
24             },
25             "minimumSize": {"width": 230, "height": 200},
26             "maximumSize": {"width": 2000, "height": 2000},
27             "preferredDockedSize": {"width": 230, "height": 300},
28             "preferredFloatingSize": {"width": 230, "height": 300},
29         }
30     ],
31     "icons": [
32         { "width": 32, "height": 32, "path": "icons/icon_D.png", "scale": [ 1, 2 ], "theme": [ "dark", "darkest" ], "species": [ "generic" ] },
33         { "width": 32, "height": 32, "path": "icons/icon_N.png", "scale": [ 1, 2 ], "theme": [ "lightest", "light" ], "species": [ "generic" ] }
34     ]
35 }
```

### Line-by-line Explanation
Line# | JSON Name | Datatype | Explanation | D/P |
----- | ----- | ----- | ----- | -----
2 | manifestVersion | number | Version of this manifest. For Photoshop, this should be 4 or higher. | DP
3 | id | string | Unique identifier for your plugin, which you can get on the [Adobe Developer Console](https://console.adobe.io/projects). | DP
4 | name | string | The name should be 3 - 45 characters. _Note_: We recommend your plugin name matches the project name you created when getting your plugin ID from the Adobe Developer Console. | DP
5 | version | string | Version number of your plugin in x.y.z format. Version must be three segments and each version component must be between 0 and 99. | DP
6 | main | string | Path to the your plugin initialization code. This can be a JavaScript file or an HTML file. Optional; defaults to "main.js" | O
8 | host.app | string | Indicates that this is a plugin for an Adobe app (currently, the only valid values here are XD or PS). | DP
9 | host.minVersion | string | Minimum required version of the host app (in x.y format) that can run this plugin. The lowest valid version for Photoshop plugins is 22.0. _Note_: The version number must be at least two segments. Typically, you'll leave the minor segment set to 0, e.g. 22.0 | DP
This is cribbed from https://forums.adobeprerelease.com/photoshop/discussion/comment/18040#Comment_18040

__TBD: CAN WE JUST GET THE RAW MD DOC FROM KERRI RATHER THAN RE-CREATING IT?__