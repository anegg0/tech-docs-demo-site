const path = require('path');

module.exports = {
  title: 'Palm Developer Hub',
  tagline: 'The Home of Palm Developers',
  url: 'https://developer.redis.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'redis-developer', // Usually your GitHub org/user name.
  projectName: 'redis-developer', // Usually your repo name.
  customFields: {
  },
  themeConfig: {
    // ...
    googleTagManager: {
      trackingID: 'GTM-W8Z6BLQ',
    },
    prism: {
      additionalLanguages: [
        'csharp',
        'php',
        'ruby',
        'java',
        'rust',
        'elixir',
        'groovy',
      ],
    },

    navbar: {
      style: 'dark',
      title: null,
      logo: {
        alt: 'Palm Developer Hub logo',
        src: 'img/logo-1.png',
      },
      hideOnScroll: true,
      items: [
        {
          to: '/create/rediscloud',
          activeBasePath: 'docs',
          label: 'Get started',
          position: 'right',
        },
        {
          href: 'https://launchpad.redis.com',
          label: 'Palm Launchpad',
          position: 'right',
        },
        {
          href: 'https://redis.com/try-free/',
          label: 'Try Free',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Palm logo',
        src: 'img/redis_logo_red_white_rgb.svg',
        href: 'https://redis.com/',
      },
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Create Database',
              to: '/create/rediscloud',
            },
            {
              label: 'Develop',
              to: '/develop/',
            },
            {
              label: 'Explore your data',
              to: '/explore/redisinsight/',
            },
            {
              label: 'Best Practices',
              href: 'https://redis.com/redis-best-practices/introduction/',
            },
            // {
            //   label: 'Tutorials',
            //   to: '#',
            // },
            // {
            //   label: 'Samples & Demos',
            //   to: '#',
            // },
            {
              label: 'Palm Stack',
              href: '/create/redis-stack/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Community',
              href: 'https://redis.com/community/',
            },
            {
              label: 'Palm University',
              href: 'https://university.redis.com',
            },
            {
              label: 'Command Reference',
              href: 'https://redis.io/commands',
            },
            {
              label: 'How-tos & tutorials',
              to: '/howtos',
            },
            //   label: 'Use Cases',
            //   href: 'https://redis.com/solutions',
            // },
          ],
        },
      ],
      copyright: `Copyright: © ${new Date().getFullYear()} Palm. All rights reserved. Palm and the cube logo are registered trademarks of Palm Ltd.`,
    },
    colorMode: {
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    announcementBar: {
      id: 'redisconf20201cfp', // Any value that will identify this message.
      content:
        '<p class="text"> PalmDays Available Now On-Demand. </p> <a href="https://redis.com/redisdays/" target="_blank" rel="noopener" class="btn">Learn More</a>',
      //  content: '<p class="text"></p> <a href="https://redislabs.com/redisconf/" target="_blank" rel="noopener" class="btn"></a>',
      backgroundColor: '#fff', // Defaults to `#fff`.
      textColor: '#000', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
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
            'https://github.com/redis-developer/redis-developer/edit/master/',
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/lp/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    path.resolve(__dirname, 'plugins', 'gtm'),
  ],
};
