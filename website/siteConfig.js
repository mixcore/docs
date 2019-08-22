/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  // {
  //   caption: 'User1',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/image.jpg'.
  //   image: '/img/undraw_open_source.svg',
  //   infoLink: 'https://www.facebook.com',
  //   pinned: true,
  // },
];
 
const siteConfig = {
  title: 'Mixcore CMS docs', // Title for your website.
  tagline: 'mixcore tutorial',
  url: 'https://mixcore.org', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'mixcore',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [

    { href: 'https://mixcore.org', label: 'Homepage' },
    { href: 'https://medium.com/mixcore', label: 'Blog' },
    { doc: 'introduction', label: 'Docs' },
    { page: 'help', label: 'Help' },
    // {blog: true, label: 'Blog'},
    { href: 'https://github.com/mixcore/mix.core/releases', label: 'Download' },
    { languages: true },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/mixcore-logo-white-25px.svg',
  footerIcon: 'img/mixcore-25pt-square-white.svg',
  favicon: 'img/mixcore-25pt-square-white.svg',

  /* Colors for website */
  colors: {
    primaryColor: '#729f00',
    secondaryColor: '#456000',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */


  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Mixcore`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ],
  stylesheets: ['/css/code-block-buttons.css'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: false,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/mixcore/mix.core',

  docsSideNavCollapsible: true,
  editUrl: "https://github.com/mixcore/docs/tree/master/docs/",
  // algolia: {
  //   apiKey: 'a8d14d2461c6df6cc5e628f6476e0eee',
  //   indexName: 'mixcore_docs'
  // },
  cname: "docs.mixcore.org",
  gaTrackingId: "UA-134154017-3",
  disableHeaderTitle: true,
  facebookAppId:407034623499916,
  facebookComments: true
  //facebookPixelId
};

module.exports = siteConfig;
