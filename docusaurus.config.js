module.exports = {
  title: 'Tyk Community Edition',
  tagline: 'The essential component in cloud native API Management: our open source API Gateway, free to all forever',
  url: 'http://sedky.ca/tyk-gw-docker-dev-env/',
  baseUrl: '/tyk-gw-docker-dev-env/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sedkis', 
  projectName: 'tyk-gw-docker-dev-env', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Community Edition',
      logo: {
        alt: 'Tyk Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/TykTechnologies/tyk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Features',
          items: [
            {
              label: 'Out of the Box',
              href: 'https://tyk.io/features/features/',
            },
            {
              label: 'Plugins',
              href: 'https://tyk.io/features/extend-tyk/',
            },
            {
              label: 'Benchmarks',
              to: 'https://tyk.io/why-tyk/benchmark/',
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              label: 'Tyk Cloud',
              href: 'https://tyk.io/api-gateway/cloud/',
            },
            {
              label: 'On-Premises',
              href: 'https://tyk.io/api-gateway/on-premise/',
            },
            {
              label: 'Enterprise',
              href: 'https://tyk.io/api-gateway/enterprise/',
            },
          ],
        },
        {
          title: 'Help',
          items: [
            {
              label: 'Ask a Question',
              href: 'https://community.tyk.io/',
            },
            {
              label: '24/7 Support',
              href: 'https://support.tyk.io/',
            },
            {
              label: 'Raise a Bug',
              href: 'https://github.com/TykTechnologies/tyk/issues',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Team',
              href: 'https://tyk.io/about/team/',
            },
            {
              label: 'Contact',
              href: 'https://tyk.io/about/contact/',
            },
            {
              label: 'Blog',
              href: 'https://tyk.io/api-expertise/blog/',
            },
            {
              label: 'Tyk.io',
              href: 'https://tyk.io/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms & Conditions',
              href: 'https://tyk.io/terms-and-conditions/',
            },
            {
              label: 'Privacy Policy',
              href: 'https://tyk.io/privacy-policy/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Tyk - make things, better',
        src: 'img/logo-white.svg',
        href: 'https://tyk.io/',
      },
       copyright: `Copyright © ${new Date().getFullYear()} Tyk Community Edition, Tyk.io. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/TykTechnologies/tyk',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
