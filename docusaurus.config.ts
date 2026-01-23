import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Fungible Standard',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.fungible.design/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gofungible', // Usually your GitHub org/user name.
  projectName: 'gofungible-site', // Usually your repo name.

  onBrokenLinks: 'throw',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
		metadata: [
			{name: 'keywords', content: 'memecoin, reputoken, utility token, security token, fungible, standard'},
		],
    colorMode: {
      respectPrefersColorScheme: true,
    },

		navbar: {
      title: 'Fungible Standard',
      hideOnScroll: true,
      logo: {
        alt: 'Fungible Standard',
        src: 'img/logo32x32.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'stackSidebar',
          position: 'left',
          label: 'Maturity Stack',
        },
/*        {
          type: 'docSidebar',
          sidebarId: 'ecosystemSidebar',
          position: 'left',
          label: 'Ecosystems',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ecosystemSidebar',
          position: 'left',
          label: 'Standardization',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ecosystemSidebar',
          position: 'left',
          label: 'Immutability',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ecosystemSidebar',
          position: 'left',
          label: 'Interoperability',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ecosystemSidebar',
          position: 'left',
          label: 'Principles',
        },
				{
          type: 'docSidebar',
          sidebarId: 'valueSidebar',
          position: 'left',
          label: 'Captured Value',
        },
				{
          type: 'docSidebar',
          sidebarId: 'valueChainSidebar',
          position: 'left',
          label: 'Value Chain',
        },
*/
				{to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/GoFungible',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
		footer: {
			style: 'dark',
			links: [{
				title: 'Maturity Stack',
						items: [{
							label: 'Abstraction Layer',
							href: '/',
						},{
							label: 'Interoperability',
							href: '/',
						}, {
							label: 'Compose',
							href: '/',
						}, {
							label: 'Baseline',
							href: '/',
						},
					],
				}, {
					title: 'Captured Value',
						items: [{
							label: 'Memecoins',
							href: '/',
						},{
							label: 'Reputokens',
							href: '/',
						}, {
							label: 'Utility Tokens',
							href: '/',
						}, {
							label: 'Security Tokens',
							href: '/',
						}, {
							label: 'Stablecoins',
							href: '/',
						}, {
							label: 'Crommodity',
							href: '/',
						},
					],
				}, {
					title: 'Value Chain',
						items: [{
							label: 'Principles',
							href: '/',
						},{
							label: 'Tokenization',
							href: '/',
						}, {
							label: 'Project Funding',
							href: '/',
						}, {
							label: 'Token Negotiation',
							href: '/',
						}, {
							label: 'Token Operations',
							href: '/',
						}, {
							label: 'DeFi Services',
							href: '/',
						}, {
							label: 'Crowdsolving',
							href: '/',
						}
					],
				}, {
					title: 'Ecosystems',
					items: [{
							label: 'Liquidity Provision',
							href: '/',
						}, {
							label: 'Launchap',
							href: '/',
						}, {
							label: 'Transfers',
							href: '/',
						}, {
							label: 'Payments',
							href: '/',
						}, {
							label: 'Cards',
							href: '/',
						}, {
							label: 'Lending',
							href: '/',
						}
					],
				}, 
			],
			copyright: `Copyright © ${new Date().getFullYear()} Fungible Standards, Ltd.`,
		},
    prism: {
      theme: prismThemes.ultramin,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
