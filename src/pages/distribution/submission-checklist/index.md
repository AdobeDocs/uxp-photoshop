---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
---

# Submission and review

Congratulations! You've built a great plugin and you're ready to release it to your customers.

To be able to publish on our marketplace, **your plugin must first go through a review process**.

By reviewing every plugin, Adobe aims to help developers get ready for primetime and ensure that users have great experiences with the plugins they consume. Our goal is to balance providing you the best developer experience during review that we can, while helping ensure that approved plugins offer a great user experience for our mutual customers.

This document will give you an idea of how to prepare for and submit to the review process, as well as details on what we’re checking for. While lengthy, working through the points below will help you make sure you’ve accounted for all of the requirements, and avoid having to fix things and resubmit before being published. Please note that this list is intended as a helpful overview; it will change over time, and cannot cover absolutely everything we look at.

## Pre-submission checklist

As part of submission, you will provide Adobe with 3 types of data via the [Adobe Developer Console](https://console.adobe.io):

1. A publisher profile about you, the developer
2. Listing information about the specific plugin you are submitting
3. Your plugin package

In this section, we will take a look at each of these types of data.

For specifics regarding character lengths, image dimensions, and required fields, always refer to the Adobe Developer Console submission form for the latest requirements.

<InlineAlert variant="info" slots="text"/>

We recommend that you draft this metadata in a text editor, and not directly in the Adobe Developer Console. This will help you avoid losing your writing if your browser refreshes before submission.

### Publisher profile

Your publisher profile is about you as a company or developer as whole. Once you've submitted this information and it has been approved by Adobe, it is shown for _all plugins and integrations you publish with Adobe_.

Your publisher profile includes required details like:

- Your publisher public name (often company name or, for individuals, your own name)
- Your publisher marketing website (again, because this is part of the publisher profile, this website shows for _all things you publish with Adobe_ and should be scoped to you as the publisher, not scoped to any single plugin or integration you submit)
- A description of you, the publisher
- Your logo

**Your publisher profile is an important thing to get right the first time!** After it is approved, changing it is not easy or fast: you will have to email us via the "View public profile" link on your [Adobe Developer Console](https://console.adobe.io) project. Doing so will trigger a new review of your publisher details, and possibly of your plugin as well.

Frequently changing your publisher profile will confuse users and erode trust. Please be sure you're ready before entering this information.

<InlineAlert variant="info" slots="text"/>

**You must complete your publisher profile** in order to submit your first plugin or integration. Next time you submit something, your publisher profile will already be set, so you won't need to do this again.

### Listing information

Your listing information provides Adobe and users with details about the specific plugin you are currently submitting. Each plugin you submit will have its own listing information that you provide.

Always check the [Adobe Developer Console](https://console.adobe.io) for the latest list of required details. At the time of writing, those details include the following lists.

#### Plugin information

The information you add here will be made public to users via Adobe's marketplace surfaces once your plugin is approved.

- Public plugin name
- Subtitle
- Support URL or email
- Description
- Tags
- Categories
- Languages supported

#### Commerce

Here, you'll be able to indicate whether your plugin is free or paid.

For paid plugin listings, you’ll need to register with Adobe’s third-party payment provider, [FastSpring](https://fastspring.com/sign-up/payee-adobe/), and enter your FastSpring key. **Please note that it may take up to 24 hours for FastSpring to create your key.**

#### Connection to other applications and services

You'll set flags that inform the user within your listing if your plugin requires connection to another application or service.

#### Privacy policy and terms

Here, you'll be able to add a link to:

- Your privacy policy
- Your terms of service

Per the [Adobe Developer Agreement](http://www.adobe.com/go/developer-terms), if your plugin collects a user’s personal information, you must provide a link to the privacy policy listed on your app or plugin page.

#### Version details

This information is specific to the version of your plugin that you are submitting. Let your users know what's new and what's changed.

#### Plugin icon

The plugin icon will be seen by users in the Plugin Marketplace and other marketplace surfaces.

At the time of writing, you are required to provide us with three sizes of the same plugin icon: 48x48 px, 96x96 px, 192x192 px. These should all be in PNG or JPG format, and under 1MB in size.

Again, always refer to the Adobe Developer Console submission form for the latest requirements.

#### Screenshots

Your screenshots will be featured in the detail page of your plugin. You should show your plugin in action and get users excited to try it out.

These should all be in PNG or JPG format, under 5MB in size and 1360x800 px dimension. You must provide between 1 and 5 images.

Again, always refer to the Adobe Developer Console submission form for the latest requirements.

<InlineAlert variant="info" slots="text"/>

**Test accounts:** If your plugin requires a user account to access any part of the plugin, **you must provide credentials for a test account in the "Notes to reviewer" field**. If we are unable to access parts of the plugin, the submission will be rejected and you will need to resubmit.

### Plugin package

As part of your submission, you will upload your plugin package, which is a `.ccx` file. You can learn how to create a `.ccx` package on our ["Packing your plugin"](../packaging-your-plugin) page.

The plugin package you upload will be reviewed by Adobe (see the next section to learn more about what we review). When approved, this plugin package will become available on our marketplace surfaces.

## What we review

In this section, we will show many of our review test cases and criteria. Each review test case is cause for rejection if not adhered to.

This is not meant to be an exhaustive list of what we review for, and our test cases will change and evolve over time. However, checking through each of these test cases will improve your chances of being approved the first time.

### Publisher profile

All data in your publisher profile will be reviewed, including public profile name, website, and logo.

### Listing information

Plugin listing information is the content that users will see in the Plugin Marketplace when browsing your listing. Unless otherwise noted, this is information that you will input and maintain on the [Adobe Developer Console](https://console.adobe.io).

In this section, we’ll go over what we’re checking for to ensure that your plugin listing is complete, correct, and in line with Adobe’s standards.

#### Plugin description

- A plugin name can only include the host app name (e.g., “Photoshop” or “XD”) if it fits the pattern “\${Plugin Name} for XD”. Refer to the [Adobe Branding Guidelines](../marketing) for further information.
  - OK: “Rectangulator”, or “Rectangulator for Photoshop”
  - Not OK: “Photoshop Rectangulator”, or “Rectangulator Photoshop.
- The plugin description must be relevant and self-explanatory.
- Regardless of supported languages, an English description must be provided.
- All listing content, including author name, email address, and website must comply with [Adobe Branding Guidelines](../marketing).
- Any plugin website must provide an email address or contact form so that users can contact the plugin developer easily.
- The listing may not link to websites that are in development (i.e. “under construction”, “coming soon”, etc). Your website will be reviewed, and it must be live _at the time of review_.

#### Manifest minVersions

You will need to set your plugin manifest's minimum version depending on the host app and API features you are using.

**Photoshop**

- For all UXP plugins, the manifest minVersion must be set to 22.0 or above.

**XD**

- For panel plugins, the manifest minVersion must be set to 21.0 or above.
- For modal or headless plugins, the manifest minVersion must be set to 13.0 or above, although 21.0 or above is recommended to take advantage of newer improvements in UXP.

#### Icons

- Placeholder icons will not be accepted. Icons must be unique and must be property of the plugin author. Submissions that contain icons from sample projects (or variations thereof) will be rejected.
- Plugin icons may not contain Adobe product assets or icons.
- Plugin icons must be clear and free of distortion.
- All required plugin icons must be provided at the appropriate dimensions and file sizes. See the manifest documentation for your host app and "Pre-submission checklist" in this guide to learn more about which icons to include in your plugin package versus which to upload via the Adobe Developer Console.

#### Adobe Branding

- Make sure to review and adhere to the [Adobe Branding Guidelines](../marketing).
- Avoid using publisher names, domain names, email addresses, and other such property names that are confusingly similar to existing Adobe brand, product, or service names.
- Using Adobe assets and icons in your plugin or your plugin marketing material requires explicit permission from Adobe [(see Adobe Branding Guidelines for details)](../marketing). Note that getting permission to use Adobe branding assets can add to the time it takes to get your plugin approved and published.

#### External Services

- If your plugin requires paid credentials, when you submit your plugin to Adobe, you must provide test account login credentials, license number, or anything else that would be required to ensure that we can fully review your plugin.
- All plugin functionality must be accessible, either openly or through the credentials that you provide Adobe, for Adobe's reviewers.

#### Third Party Companion Apps

- When a companion app is required, your plugin's description must indicate where the user can download the companion app.
- The companion app must successfully install on platforms it claims to support.
- The companion app must be able to successfully communicate with the plugin.
- The companion app must not cause abnormal resource usage (e.g., CPU, RAM, storage).

### User experience

Checking the plugin's user experience is the core of our review process. Once users install your plugin, we want to make sure they have a great experience with their newfound addition to the host app's core product. In this section, we’ll go over what we’re reviewing in terms of your plugin’s functionality, UI, and more.

Since all plugins are different, it isn't possible to provide a permanent and exhaustive list of what we look at. However, we are generally looking at these three areas: functionality, user interface, and performance.

- **Functionality:** Does the plugin do what is suggested by the associated content and the user interface?
- **User interface:** Is the user able to complete tasks? Is the UI broken or distorted in any way? Is the user made aware of what is (or isn't) happening?
- **Performance:** Are system or account resources misused or overused? Is the user left waiting for an abnormal amount of time?

#### Functionality

- The plugin must install without error.
- The plugin must launch via all insertion points that the plugin claims to support (e.g. Plugins Menu, Plugins Panel).
- The plugin must support any keyboard shortcuts provided by the developer.
- The plugin must show a loading indicator or spinner during longer operations like loading large content or accessing resources via a network connection.
- Modal dialogs must provide an affordance in the UI for closing the modal (e.g. a cancel/close button).
- The plugin must perform the desired actions when the user interacts with components in the plugin’s UI.
- The plugin must support all user selection types. Alternatively, if the plugin doesn’t support some selection types, the plugin must communicate this to the user when an unsupported selection is selected.
- The plugin must indicate to the user if an internet connection is not available but is required.
- The plugin must provide feedback to the user if it is unable to perform an action triggered by the user.
- The plugin must never show a completely blank UI.
- The plugin may not link to websites that are in development (i.e. “under construction”, “coming soon”, etc).
- If the plugin supports login functionality, it must also provide logout.
- Browsers are the only external applications that plugins are allowed to launch. If your plugin launches any other external application, it will be rejected.
- No “debug” items are allowing in the panel or in the flyouts. This includes things like “reload panel” as a user-facing feature, or directing users to developer console output.

#### User Interface

- For modal plugins, the plugin must be functional when the host application window is at the minimum size that the host application itself supports.
- For panel plugins, no content should be clipped when the plugins panel is at minimum width.
- For panel plugins, the plugin's UI content must adapt appropriately when the panel width is increased.
- For panel plugins, the plugin's UI content must adapt appropriately when the panel width is decreased.
- The plugin must be functional when the host app application window is at maximum size.
- The plugin UI must scroll when all content is not visible on the screen.
- UI elements in the plugin must not overlap or truncate.
- UI content must wrap or adapt as necessary to accommodate the available width of the UI.
- For plugins with multiple panels, each panel needs a different icon so as to be differentiable by the user.
- Plugin content must be in compliance with [Adobe Branding Guidelines](../marketing).

#### Performance

- The plugin must not degrade the performance of the host app.
- The plugin must load in a timely manner.
- The plugin must not cause abnormal resource usage (e.g., CPU, RAM, storage).
- The plugin must not cause crashes, system errors, or any major failures.

### Associated content

Content within, and associated with, your plugin with be reviewed.

#### Adobe Branding

See our ["Marketing your plugin"](../marketing) page for guidelines on using Adobe brand assets and messaging your plugin to customers.

#### Inappropriate content

- Your plugin and associated marketing surfaces must not include any intense violence, blood, gore, sexual content, nudity, or strong language.
- Your plugin must not promote or conduct phishing, spamming, hacking, password trafficking, or spyware, nor contain malware, trojans, or viruses.

#### Internationalization and Localization

- The plugin UI must not break when the user enters valid characters for all languages the plugin supports.
- The plugin must support input from local keyboards for all languages the plugin supports.
- The plugin must provide localized strings for all languages indicated as supported by the developer and successfully display them when the system is set to each supported locale.
- The plugin UI must not break due to localized strings for supported locales.

## How to submit for review

You can submit your plugin for review and approval on the [Adobe Developer Console](https://console.adobe.io).

The following is a basic overview of the steps for submitted a plugin for review.

### Create your profile and listing

1. [Visit the Adobe Developer Console](https://console.adobe.io)
2. Go to the _Projects_ tab
3. Find and select the project that contains the plugin ID you are seeking marketplace approval for
4. On your project page, select _Distribute_
5. (First time only) Complete your publisher profile via the "View public profile" button, and save
6. Click the "Create Photoshop plugin listing" button
7. Fill out the form on the "Listing information" tab

Further details on the data you are required to submit can be found in the [Pre-submission checklist](#pre-submission-checklist) section of this page.

### Upload your plugin file

1. Click the "Plugin file" tab
2. Drag and drop your `.ccx` plugin file onto the appropriate area
3. After you've dropped in your `.ccx` plugin file, the fields in the "Manifest details" section of the page will auto-populate based on values you've set in your manifest.
4. Click "Preview and submit"

If you don't have a `.ccx` yet, you can learn how to create one on our ["Packing your plugin"](../packaging-your-plugin) page.

### Preview and submit

After you have filled out your publisher public profile and listing information, then uploaded your plugin, you will be able to click "Preview and submit".

On the "Preview and submit" page, you can:

- Preview your listing on Adobe Exchange
- Provide notes to Adobe reviewers
- Choose whether to auto-publish or manually publish upon approval
- Submit your plugin to Adobe for review

1. Click "Preview in Exchange" to see how your listing will look before you publish it
2. Fill in the "Note to Adobe reviewers" field with any further details we should know, _including_ test credentials if any part of your plugin requires a logged in user
3. Choose whether you want to publish immediately after approval, or publish manually
4. Click "Submit"

After you submit, you will receive a confirmation email from Adobe with your unique submission identifiers.

## Timelines and outcomes

We aim to respond to all submissions within 10 business days, but we are typically much faster on average.

Ultimately, your submission will either be approved or rejected. In some cases, we may reach out to you with questions before we send you the outcome of the review.

If your submission is rejected, we will provide the reasons. You can ask for clarifications, if you need any. Once you have addressed the reasons for rejection in your listing information, plugin, and/or associated content, you are welcome to resubmit.

Again, our goal is to provide you the best developer experience during review that we can, while helping ensure that approved plugins and integrations offer a great user experience for our mutual customers.

## Troubleshooting

Sometimes things can go wrong while submitting. This section aims to help you with common Adobe Developer Console errors.

### Error messages

1. `"Extension id: not matched"`: The `id` in your manifest must match the plugin ID provided by the Adobe Developer Console. During development you're free to use whatever string you want as your manifest `id`, but for submission to succeed you must match the manifest `id` to the plugin ID provided by the Adobe Developer Console.
2. `"Invalid"`: The `host` field in your manifest **must not be an array** when submitting to the marketplace. While UXP and the UXP DevTool both support arrays for `host`, this is a convenience for development against multiple hosts, and is not intended for deployment.
3. `"Invalid"`: Make sure your manifest is a valid JSON file (and is included in the package).
4. `"Version #.#.# already exists for extension ${pluginID}."`: You have already submitted a plugin package with this version number specified in the manifest. Bump the plugin version number in the manifest, then submit.

### Silent errors and hangs

1. **Plugin version number format**: Make sure that the plugin version number specified in your manifest consists of three numeric parts, no more and no less. As an example, `version: 2.0` is currently not accepted by the marketplace, while `version: 2.0.0` will work. If your version number format is not exactly correct, you'll see a hang on "Saving Draft".
2. **Character limit for filenames**: There's a 45-character limit on uploaded `.ccx` filenames. If you exceed this limit, validation will fail but you may not get a helpful error message. If your upload is failing, check that your filename contains no more than 45-characters, including the `.ccx` file extension.
3. **Version numbers in filenames**: Do not include version numbers in your `.ccx` filename that you upload to the Adobe Developer Console. This is known to cause problems.
4. **Plugin icons**: Make sure you include required icons for both the plugin and its panels, if any. If all icons aren't included, your plugin will be rejected during review (but submission will succeed). See [the manifest docs for more info](/guides/uxp_guide/uxp-misc/manifest-v4).
5. **No zero-byte files**: Ensure your package has no zero-byte files within it. This will cause validation to fail.
