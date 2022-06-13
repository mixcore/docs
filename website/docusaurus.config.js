const TwitterSvg =
    '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

module.exports = {
    title: 'Mixcore CMS',
    tagline: 'Fully Open Source ASP.Net Core / Dotnet Core CMS UI Toolkit',
    url: 'https://mixcore.org',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'mixcore', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    onBrokenLinks: 'ignore',
    themeConfig: {
        navbar: {
            title: 'Mixcore CMS',
            logo: {
                alt: 'Mixcore CMS Logo',
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
                    href: 'https://github.com/mixcore/mix.core/discussions',
                    label: 'Discussions',
                    position: 'left',
                },
                {
                    href: 'https://github.com/mixcore/mix.core/releases',
                    label: 'Download',
                    position: 'left',
                },
                // {
                //     href: 'https://github.com/mixcore/mix.core',
                //     label: 'GitHub',
                //     position: 'left',
                // },
                {
                    href: 'https://github.com/mixcore/mix.core',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
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
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/mixcore',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/67G5JZc',
                        },
                    ],
                },
                {
                    title: 'Social',
                    items: [{
                            label: 'Blog',
                            // to: 'blog',
                            href: 'https://medium.com/mixcore',
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
        announcementBar: {
            id: 'announcementBar-2', // Increment on change
            content: `⭐️ If you like Mixcore, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/mixcore/mix.core">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mixcore_cms">Twitter ${TwitterSvg}</a>`,
        },
        // algolia: {
        //     // The application ID provided by Algolia
        //     appId: 'YOUR_APP_ID',

        //     // Public API key: it is safe to commit it
        //     apiKey: 'YOUR_SEARCH_API_KEY',

        //     indexName: 'YOUR_INDEX_NAME',

        //     // Optional: see doc section below
        //     contextualSearch: true,

        //     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //     externalUrlRegex: 'external\\.com|domain\\.com',

        //     // Optional: Algolia search parameters
        //     searchParameters: {},

        //     // Optional: path for search page that enabled by default (`false` to disable it)
        //     searchPagePath: 'search',

        //     //... other Algolia params
        // },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    path: 'docs',
                    routeBasePath: '/',
                    editUrl: 'https://github.com/mixcore/docs/edit/master/website/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {},
                gtag: {
                    trackingID: 'UA-134154017-3',
                    anonymizeIP: true,
                },
            },
        ],
    ],
};