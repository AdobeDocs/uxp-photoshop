---
title: Installation
contributors:
  - https://github.com/kerrishotts
---

# Installation

You can install UXP Developer Tools by following these steps.


You can install UXP Developer tool by following these steps.

* Download and install Creative Cloud from [here](https://creativecloud.adobe.com/apps/download/creative-cloud)
* Launch Creative Cloud and Sign in with your Adobe account
* Click on All apps section and scroll down to find UXP Developer Tools

![Creative cloud](./creative-cloud.png)

* Click `Install` for the UXP Developer Tools App

## Launching for the first time

When you launch the Developer Tool for the first time, you'll be prompted to enable Developer Mode. This is required in order for you to load plugins in development into Photoshop.

![Enable Developer Mode](./devmode.png)

Once you click `Enable`, elevated permissions will be requested, and you may be required to enter your password or approve an action from the Developer Tool.

![Elevated Permissions request](./macos-elevated-permissions.png)

If you have problems with this step, you can also configure Developer Mode manually, although you must have Administrative privileges to do so:

* Quit the UXP Developer Tool
* Navigate to `/Library/Application Support/Adobe/UXP/Developer` on macOS, or `%CommonProgramFiles%/Adobe/UXP/Developer` on Windows. (If the folder does not exist, you can create it -- you'll need administrative rights.)
* Create a new file named `settings.json` with the following contents (You'll need administrative rights to save the file):
    ```json
    {"developer" : true}
    ```
* Launch the UXP Developer Tool again.


