const path = require('path');

module.exports = {
  title: 'gr0wing Developer Hub',
  tagline: 'The Home of gr0wing Developers',
  url: 'https://633222b60bbe8e0260e8f140--monumental-pudding-6a2262.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Gr0wing-Network', // Usually your GitHub org/user name.
  projectName: 'docs.gr0wing.io', // Usually your repo name.
  customFields: {},
  themeConfig: {
    // ...
    googleTagManager: {
      trackingID: 'UA-64552723-17',
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'ODORIVVBIV',

      // Public API key: it is safe to commit it
      apiKey: '4159edcccacb5986984a1f5600547cf6',

      indexName: 'dev_tech_docs_demo_site',

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
        alt: 'Gr0wing logo',
        src: 'img/stone-egg-gr0wing.png',
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
        alt: 'Gr0wing logo',
        src: 'img/stone-egg-gr0wing.png',
        href: 'https://633222b60bbe8e0260e8f140--monumental-pudding-6a2262.netlify.app',
      },
      copyright: `Copyright: © ${new Date().getFullYear()} The Gr0wing Network. All rights reserved.`,
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
          editUrl:
            'https://github.com/Gr0wing-Network/docs.gr0wing.io/edit/main/',
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
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    path.resolve(__dirname, 'plugins', 'gtm'),
  ],
};
