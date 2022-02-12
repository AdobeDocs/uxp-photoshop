/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    versions: [
      {
        title: '2022',
        selected: true
      },
      {
        title: '2021',
        path: 'https://developer-stage.adobe.com/photoshop/uxp/2021'
      }
    ],
    pages: [
      {
        title: "UXP for Adobe Photoshop",
        path: "/",
      },
      {
        title: "Guides",
        path: "/guides/",
      },
      {
        title: "Photoshop API",
        path: "/ps_reference/",
      },
      {
        title: "UXP API",
        path: "/uxp/",
      },
      {
        title: "Design",
        path: "/design/",
      },
      {
        title: "Community",
        path: "/community/",
      },
    ],
    subPages: [
      {
        title: "Getting Started",
        path: "/guides/",
        header: true,
        pages: [
          {
            title: "Quickstart Guide",
            path: "/guides/",
            pages: [
              {
                title: "Creating your first plugin",
                path: "/guides/getting-started/creating-your-first-plugin/"
              },
              {
                title: "Editing the document",
                path: "/guides/getting-started/editing-the-document/"
              },
              {
                title: "Writing a file with UXP",
                path: "/guides/getting-started/writing-a-file/"
              }
            ]
          },
          {
            title: "The UXP manifest",
            path: "/guides/uxp_guide/uxp-misc/manifest-v4/",
          },
          {
            title: "Photoshop manifest",
            path: "/guides/uxp_guide/uxp-misc/manifest-v4/photoshop-manifest/",
          },
          {
            title: "Code Samples",
            path: "/guides/code_samples/"
          },
          {
            title: "Developer Tool »",
            path: "/guides/devtool/",
            pages: [
              {
                title: 'Overview',
                path: '/guides/devtool/'
              },
              {
                title: 'Installation',
                path: '/guides/devtool/installation/'
              },
              {
                title: "Creating your First Plugin",
                path: "/guides/devtool/udt-walkthrough/",
              },
              {
                title: 'Plugin Management',
                path: '/guides/devtool/plugin-management/'
              },
              {
                title: 'Plugin Workflows',
                path: '/guides/devtool/plugin-workflows/'
              },
              {
                title: 'Working with React',
                path: '/guides/devtool/working-with-react/'
              },
            ],
          },
          {
            title: "Legacy Extensibility",
            path: "/guides/legacy-extensibility/",
          },
          {
            title: "Migrating to UXP »",
            path: "/guides/uxp_for_you/",
            pages: [
              {
                title: "From XD",
                path: "/guides/uxp_for_you/uxp_for_xd_devs/",
              },
              {
                title: "From ExtendScript",
                path: "/guides/uxp_for_you/uxp_for_extendscript_devs/",
              },
              {
                title: "From CEP",
                path: "/guides/uxp_for_you/uxp_for_cep_devs/",
              },
              {
                title: "As a Newbie",
                path: "/guides/uxp_for_you/uxp_for_newbies/",
              },
              {
                title: "As a Web dev",
                path: "/guides/uxp_for_you/uxp_for_web_devs/",
              },
            ]
          },
          {
            title: "Share »",
            path: "/guides/distribution/",
            pages: [
              {
                title: "Packaging Your Plugin",
                path: "/guides/distribution/packaging-your-plugin/",
              },
              {
                title: "Options for Distribution",
                path: "/guides/distribution/distribution-options/",
              },
              {
                title: "Submission and Review",
                path: "/guides/distribution/submission-checklist/",
              },
              {
                title: "Marketing Your Plugin",
                path: "/guides/distribution/marketing/",
              },
            ],
          },
          {
            title: "Other Topics »",
            path: "/guides/uxp_guide/uxp-misc/",
            pages: [
              {
                title: "The UXP Toolchain",
                path: "/guides/uxp_guide/uxp-misc/uxp-toolchain/",
              },
              {
                title: "Localization and Platforms",
                path: "/guides/uxp_guide/uxp-misc/localization-and-platforms/",
              },
              {
                title: "Flyout Menus",
                path: "/guides/uxp_guide/uxp-misc/flyout-menus/",
              },
              {
                title: "File Access",
                path: "/guides/uxp_guide/uxp-misc/file-access/",
              },
              {
                title: "Network I/O",
                path: "/guides/uxp_guide/uxp-misc/network-io/",
              },
              {
                title: "Spectrum CSS",
                path: "/guides/uxp_guide/uxp-misc/spectrum-css/",
              },
            ],
          },
          {
            title: "How Do I...",
            path: "/guides/how-to/",
          },
          {
            title: "Theme Awareness",
            path: "/guides/theme-awareness/",
          },
          {
            title: "Debugging your Plugins",
            path: "/guides/debugging/",
          },
        ],
      },
      {
        title: "UXP API",
        path: "/uxp/reference-js/",
        header: true,
        pages: [
          {
            title: "JavaScript Reference",
            path: "/uxp/reference-js/",
            pages: require("./reference-js.js"),
          },
          {
            title: "CSS Reference",
            path: "/uxp/reference-css/",
            pages: require("./reference-css.js"),
          },
          {
            title: "HTML Reference",
            path: "/uxp/reference-html/",
            pages: require("./reference-html.js"),
          },
          {
            title: "Spectrum UXP Reference",
            path: "/uxp/reference-spectrum/",
            pages: require("./reference-spectrum.js"),
          },
          {
            title: "Known Issues",
            path: "/uxp/known-issues/",
          },
        ],
      },
      {
        title: "Photoshop API",
        path: "/ps_reference/",
        pages: require("./reference-ps.js"),
      },
      {
        title: "Overview",
        path: "/design/",
        pages: require("./reference-design.js"),
      },
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || "/photoshop/uxp/2022/",
};
