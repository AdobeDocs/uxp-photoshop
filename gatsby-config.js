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

const fs = require('fs');

const globalNavFilePath = require.resolve('@adobe/gatsby-theme-parliament/globalNav.json');
const globalNav = JSON.parse(fs.readFileSync(globalNavFilePath, 'utf8'));

globalNav.menus = [globalNav.menus[2]];

module.exports = {
  siteMetadata: {
    globalNav,
    /*versions: [
      {
        title: 'v4.1'
      },
      {
        title: 'v1.4',
        path: 'https://github.com/AdobeDocs/uxp-photoshop'
      }
    ],*/
    pages: [
      {
        title: 'UXP for Adobe Photoshop',
        path: '/'
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'API Reference',
        path: '/ps_reference/'
      },
      {
        title: 'UXP Reference',
        path: '/uxp/reference-js/'
      },
      {
        title: 'Sample Code',
        path: '/code_samples/'
      },
      {
        title: 'Design',
        path: '/design/'
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Getting Started',
        path: '/guides/',
        header: true,
        pages: [
          {
            title: 'Getting Started',
            path: '/guides/'
          },
          {
            title: 'UXP Overview', // put the uxp_guide folder contents UNDER this menu. How?
            path: '/guides/uxp_guide/'
          },
          {
            title: 'UXP for You',
            path: '/guides/uxp_for_you/'
          },
          {
            title: 'The UXP Toolchain',
            path: '/guides/uxp_guide/uxp-toolchain/'
          },
          {
            title: 'UXP for Photoshop Basics',
            path: '/guides/ps_basics/'
          },
          {
            title: 'UXP Developer Toolkit',
            path: '/guides/uxp-developer-tool/'
          },
          {
            title: 'Developer Tool Walkthrough',
            path: '/guides/udt-walkthrough/'
          },
          {
            title: 'Other Topics',
            path: '/guides/uxp_guide/uxp-misc/'
          },
           {
            title: 'How Do I...',
            path: '/guides/how-to/'
          },
          {
            title: 'Theme Awareness',
            path: '/guides/theme-awareness/'
          },
          {
            title: 'Debugging your Plugins',
            path: '/guides/debugging/'
          },
          {
            title: 'Distributing your Plugins',
            path: '/guides/distribution/'
          }
        ]
      },
      {
        title: 'Code Samples',
        path: '/code_samples/',
        header: true,
        pages: [
          {
            title: 'Overview',
            path: '/code_samples/'
          },
          {
            title: 'JavaScript Samples',
            path: '/code_samples/javascript_samples/'
          },
          {
            title: 'React Samples',
            path: '/code_samples/react_samples/'
          },
          {
            title: 'batchPlay Samples',
            path: '/code_samples/batchplay_samples/'
          }
        ]
      },
      {
        title: 'Overview',
        path: '/support/',
        header: true,
        pages: [
          {
            title: 'Help',
            path: '/support/'
          },
          {
            title: 'FAQ',
            path: '/support/FAQ/'
          },
          {
            title: 'How to contribute',
            path: '/support/contribute/'
          }
        ]
      },
      {
        title: 'Community',
        path: '/support/community/',
        header: true,
        pages: [
          {
            title: 'Information',
            path: '/support/community/'
          }
        ]
      },
      {
        title: 'UXP Reference',
        path: '/uxp/reference-js/',
        header: true,
        pages: [
          {
            title: 'JavaScript Reference',
            path: '/uxp/reference-js/',
            pages: require("./reference-js.js")
          },
          {
            title: 'CSS Reference',
            path: '/uxp/reference-css/',
            pages: require("./reference-css.js")
          }
        ]
      },
      {
        title: "API Reference",
        path: '/ps_reference/',
        pages: require('./reference-ps.js'),
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-parliament`],
  pathPrefix: process.env.PATH_PREFIX || '/gatsby-theme-parliament-documentation'
};