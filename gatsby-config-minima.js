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

globalNav.menus = [globalNav.menus[1]];

module.exports = {
  siteMetadata: {
    globalNav,
    versions: [
      {
        title: 'v1.0'
      },
      {
        title: 'v1.4',
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
        title: 'API Reference',
        path: '/api/'
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-parliament`],
  pathPrefix: process.env.PATH_PREFIX || '/gatsby-theme-parliament-documentation'
};
