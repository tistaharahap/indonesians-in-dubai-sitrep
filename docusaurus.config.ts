import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WNI di Dubai — SITREP',
  tagline: 'Laporan situasi dan informasi darurat untuk warga negara Indonesia di Dubai dan UEA.',
  favicon: 'img/favicon.svg',

  url: 'https://indonesians-in-dubai-sitrep.pages.dev',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    localeConfigs: {
      id: {label: 'Bahasa Indonesia'},
      en: {label: 'English'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'WNI di Dubai — SITREP',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sitrepsSidebar',
          position: 'left',
          label: 'Laporan Situasi',
        },
        {
          type: 'docSidebar',
          sidebarId: 'emergencySidebar',
          position: 'left',
          label: 'Info Darurat',
        },
        {
          type: 'docSidebar',
          sidebarId: 'defconSidebar',
          position: 'left',
          label: 'Kerangka Siaga',
        },
        {
          href: 'https://peduliwni.kemlu.go.id',
          label: 'Peduli WNI',
          position: 'right',
        },
        {
          href: 'https://kemlu.go.id/abudhabi',
          label: 'KBRI Abu Dhabi',
          position: 'right',
        },
        {
          href: 'https://kemlu.go.id/dubai',
          label: 'KJRI Dubai',
          position: 'right',
        },
        {
          href: 'tel:+97124492666',
          label: '📞 +971-2-449-2666',
          position: 'right',
          className: 'navbar-emergency-phone',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Darurat',
          items: [
            {
              label: 'Laporan Situasi',
              to: '/',
            },
            {
              label: 'Kontak Darurat',
              to: '/emergency/contacts',
            },
            {
              label: 'Rute Evakuasi',
              to: '/emergency/exit-routes',
            },
            {
              label: 'Daftar Tas Darurat',
              to: '/emergency/go-bag-checklist',
            },
          ],
        },
        {
          title: 'Sumber Resmi',
          items: [
            {
              label: 'Peduli WNI',
              href: 'https://peduliwni.kemlu.go.id',
            },
            {
              label: 'KBRI Abu Dhabi',
              href: 'https://kemlu.go.id/abudhabi',
            },
            {
              label: 'KJRI Dubai',
              href: 'https://kemlu.go.id/dubai',
            },
          ],
        },
        {
          title: 'Sosial',
          items: [
            {
              label: 'KBRI di X',
              href: 'https://x.com/kbriabudhabi',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tistaharahap/indonesians-in-dubai-sitrep',
            },
          ],
        },
      ],
      copyright: `Dikelola oleh sukarelawan. Tidak berafiliasi dengan pemerintah Indonesia.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
