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

 // Config file of 9-18-20 CWeger

const globalNav = require('@adobe/gatsby-theme-parliament/globalNav.json');

globalNav.menus = [globalNav.menus[1]];

module.exports = {
  siteMetadata: {
    globalNav,
    versions: [
      {
        title: 'Something'
      },
      {
        title: 'Something Else',
        path: 'https://github.com/AdobeDocs/uxp-photoshop'
      }
    ],
    pages: [
      {
        title: 'Adobe UXP for Photoshop',
        path: '/'
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'Photoshop API Reference',
        path: '/ps-api-reference/'
      },
      {
        title: 'UXP Reference',
        path: '/uxp-reference/'
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Get Started',
        path: '/guides/start-here/',
        pages: [
          {
            title: 'Overview',
            path: '/guides-start-here/'
          },
          {
            title: 'Getting Started',
            path: '/guides-start-here/'
          },
          {
            title: 'UXP Basics',
            path: '/guides/uxp-basics/'
          },
          {
            title: 'Photoshop Basics',
            path: '/guides/ps-basics/'
          },
          {
            title: 'UXP Developer Tools',
            path: '/guides/uxp-developer-tools/'
          }
        ]
      }
      {
        title: 'API References',
        path: '/api/',
        pages: [
          {
            title: 'Photoshop UXP API Reference',
            path: '/api/ps-api-reference/'
          },
          {
            title: 'UXP Reference',
            path: '/api/uxp-reference/'
          }
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
  plugins: [`@adobe/gatsby-theme-parliament`],
  pathPrefix: process.env.PATH_PREFIX || '/gatsby-theme-parliament-documentation'
};
