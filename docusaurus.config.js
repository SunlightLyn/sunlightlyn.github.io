// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sunlight\'s Space',
  tagline: 'Welcome to my land.',
  url: 'https://sunlightlyn.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SunlightLyn',
  projectName: 'website',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/SunlightLyn/sunlightlyn.github.io/',
        },
        blog: {
          showReadingTime: true,
          // editUrl: 'https://github.com/SunlightLyn/sunlightlyn.github.io/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Sunlight\'s',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {
            to: '/blog',
            label: '博客',
            position: 'left',
          },
          {
            href: 'https://github.com/SunlightLyn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '本站导航',
            items: [
              {
                label: '文档',
                to: '/docs/intro',
              },
              {
                label: '博客',
                to: '/blog',
              },
            ],
          },
          {
            title: '外部链接',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: '关注我',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/SunlightLyn',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/SunlightLyn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SunlightLyn. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
};

module.exports = config;
