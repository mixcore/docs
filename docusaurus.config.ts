import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Mixcore AIO Platform',
  tagline: 'The Open Source Digital Platform that Adapts to Your Business',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.mixcore.studio',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mixcore', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'docs',
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/mixcore/docs/tree/master',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {},
        gtag: {
            trackingID: 'UA-134154017-3',
            anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    
    
    navbar: {
      
      title: 'Mixcore AIO Platform',
      logo: {
          alt: 'Mixcore AIO Platform Logo',
          src: 'img/logo-v2.png',
          srcDark: 'img/logo-v2.png',
      },
      items: [
          // {to: '/', label: 'Docs', position: 'left'},
          // {to: 'blog', label: 'Blog', position: 'left'},
          {
              href: 'https://mixcore.org',
              label: 'Home',
              position: 'left',
          },
          // {
          //     href: 'https://api-docs.mixcore.org',
          //     label: 'API Docs',
          //     position: 'left',
          // },
          {
              href: 'https://github.com/orgs/mixcore/discussions',
              label: 'Discussions',
              position: 'left',
          },
          {
              href: 'https://github.com/mixcore/mix.core/releases',
              label: 'Download',
              position: 'left',
          },
          {
              href: 'https://github.com/mixcore/mix.core',
              label: 'GitHub',
              position: 'left',
          },
          {
              href: 'https://github.com/mixcore/mix.core',
              position: 'right',
              className: 'navbar__item navbar__link header-github-link',
              'aria-label': 'GitHub repository',
          },
      ],
      
  },
    // footer: {
    //   style: 'light',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'X',
    //           href: 'https://x.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },

    // announcementBar: {
    //   id: `announcementBar-v3`,
    //   // content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://x.com/docusaurus">X ${TwitterSvg}</a>`,
    //   content: `⭐️ If you like Mixcore, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/mixcore/mix.core">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mixcore_cms">Twitter</a>`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
