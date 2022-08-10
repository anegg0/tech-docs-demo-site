const path = require('path');

module.exports = {
  title: 'Palm Developer Hub',
  tagline: 'The Home of Palm Developers',
  url: 'https://docusaurus-2.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Palm-Network', // Usually your GitHub org/user name.
  projectName: 'docs.palm.io', // Usually your repo name.
  customFields: {},
  themeConfig: {
    // ...
    googleTagManager: {
      trackingID: 'UA-64552723-17',
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '2F2YINGKQ2',

      // Public API key: it is safe to commit it
      apiKey: 'ffcca0ebd2a62726d33e0c4f9ed86584',

      indexName: 'docs.palm.io',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },

    navbar: {
      style: 'dark',
      title: null,
      logo: {
        alt: 'Palm logo',
        src: 'img/palmLogo.svg',
      },
      hideOnScroll: true,
      items: [
        {
          to: 'intro',
          activeBasePath: 'docs',
          label: 'Get started',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Palm logo',
        src: 'img/palmLogo.svg',
        href: 'https://palm.io/',
      },
      copyright: `Copyright: © ${new Date().getFullYear()} The Palm Network. All rights reserved.`,
    },
    colorMode: {
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/Palm-Network/docs.palm.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        // sitemap: {
        //   changefreq: 'weekly',
        //   priority: 0.5,
        //   ignorePatterns: ['/lp/**'],
        //   filename: 'sitemap.xml',
        // },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    path.resolve(__dirname, 'plugins', 'gtm'),
  ],
};
