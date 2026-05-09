// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vroxia Protocol',
  tagline: 'Infraestructura Fintech y Seguridad Biométrica',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // TODO: Update to official Vroxia domain when available
  url: 'https://vroxiaprotocol.com',
  baseUrl: '/',

  organizationName: 'vroxia-protocol',
  projectName: 'vroxia-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v1.0 (Latest)',
              path: '',
            },
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Vroxia Protocol',
        logo: {
          alt: 'Vroxia Protocol Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          // ── Social icons (replace href values when accounts are ready) ──
          {
            type: 'html',
            position: 'right',
            value: `<a href="https://x.com/vroxiaudsx" target="_blank" rel="noopener noreferrer" class="navbar__social-link navbar__social-link--x" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>`,
          },
          {
            type: 'html',
            position: 'right',
            value: `<a href="https://instagram.com/vroxiaudsx" target="_blank" rel="noopener noreferrer" class="navbar__social-link navbar__social-link--ig" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg>
            </a>`,
          },
          {
            type: 'html',
            position: 'right',
            value: `<a href="https://facebook.com/vroxiaudsx" target="_blank" rel="noopener noreferrer" class="navbar__social-link navbar__social-link--fb" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>`,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Protocol',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'UDSX Protocol',
                to: '/docs/udsx',
              },
            ],
          },
          {
            title: 'Follow Vroxia',
            items: [
              {
                label: '𝕏  @vroxiaudsx',
                href: 'https://x.com/vroxiaudsx',
              },
              {
                label: '📸  @vroxiaudsx',
                href: 'https://instagram.com/vroxiaudsx',
              },
              {
                label: '📘  @vroxiaudsx',
                href: 'https://facebook.com/vroxiaudsx',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                  label: '✉  vroxiausdx@gmail.com',
                href: 'mailto:vroxiausdx@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vroxia Protocol. All rights reserved. · vroxiausdx@gmail.com`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
