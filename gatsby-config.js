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
        title: "Sample Code",
        path: "/code_samples/",
      },
      {
        title: "Design",
        path: "/design/",
      },
      {
        title: "Developer Tool",
        path: "/devtool/",
      },
      {
        title: "Share",
        path: "/distribution/",
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
            title: "Getting Started",
            path: "/guides/",
          },
          {
            title: "UXP for You",
            path: "/guides/uxp_for_you/",
          },
          {
            title: "The UXP Toolchain",
            path: "/guides/uxp_guide/uxp-toolchain/",
          },
          {
            title: "UXP for Photoshop Basics",
            path: "/guides/ps_basics/",
          },
          {
            title: "UXP Developer Tool",
            path: "/guides/uxp-developer-tool/",
          },
          {
            title: "Developer Tool Walkthrough",
            path: "/guides/udt-walkthrough/",
          },
          {
            title: "Other Topics »»",
            path: "/guides/uxp_guide/uxp-misc/",
            pages: [
              {
                title: "The UXP Manifest",
                path: "/guides/uxp_guide/uxp-misc/manifest-v4/",
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
        title: "Code Samples",
        path: "/code_samples/",
        header: true,
        pages: [
          {
            title: "Overview",
            path: "/code_samples/",
          },
          {
            title: "JavaScript Samples",
            path: "/code_samples/javascript_samples/",
          },
          {
            title: "React Samples",
            path: "/code_samples/react_samples/",
          },
          {
            title: "batchPlay Samples",
            path: "/code_samples/batchplay_samples/",
          },
        ],
      },
      {
        title: "Share",
        path: "/distribution/",
        header: true,
        pages: [
          {
            title: "Packaging Your Plugin",
            path: "/distribution/packaging-your-plugin/",
          },
          {
            title: "Options for Distribution",
            path: "/distribution/distribution-options/",
          },
          {
            title: "Submission and Review",
            path: "/distribution/submission-checklist/",
          },
          {
            title: "Marketing Your Plugin",
            path: "/distribution/marketing/",
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
      ...require("./reference-devtool.js"),
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || "/photoshop/uxp/",
};
