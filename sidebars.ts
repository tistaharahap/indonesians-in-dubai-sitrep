import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sitrepsSidebar: [
    {
      type: 'category',
      label: 'Ringkasan',
      items: ['index'],
    },
    {
      type: 'category',
      label: 'Maret 2026',
      items: ['sitreps/2026-03-02-1610utc', 'sitreps/2026-03-02-1420utc', 'sitreps/2026-03-02-1330utc'],
    },
  ],
  emergencySidebar: [
    {
      type: 'category',
      label: 'Kontak & Sumber Daya',
      items: [
        'emergency/contacts',
        'emergency/exit-routes',
        'emergency/go-bag-checklist',
      ],
    },
  ],
  defconSidebar: [
    {
      type: 'category',
      label: 'Tingkat Siaga',
      items: ['defcon/overview'],
    },
  ],
};

export default sidebars;
