module.exports = {
  title: 'Mixcore CMS',
  tagline: 'Fully Open Source ASP.Net Core / Dotnet Core CMS UI Toolkit',
  url: 'https://mixcore.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Mixcore CMS',
      logo: {
        alt: 'Mixcore CMS Logo',
        src: 'img/logo.png',
      },
      links: [
        {to: '/docs/introduction', label: 'Docs', position: 'left'},
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://mixcore.org',
          label: 'Home',
          position: 'right',
        },
        
        {
          href: 'https://github.com/mixcore/mix.core/releases',
          label: 'Download',
          position: 'right',
        },
        {
          href: 'https://github.com/mixcore/mix.core',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/mixcore',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/mixcore',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mixcore/mix.core',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mixcore_cms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mixcore CMS.`,
    },
    gtag: {
      trackingID: 'UA-134154017-3',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/mixcore/docs/edit/master/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
