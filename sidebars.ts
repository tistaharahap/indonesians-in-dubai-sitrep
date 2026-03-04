import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sitrepsSidebar: [
    {
      type: 'category',
      label: 'Ringkasan',
      items: ['sitreps/2026-03-04-0510utc', 'index'],
    },
    {
      type: 'category',
      label: 'Maret 2026',
      items: ['sitreps/2026-03-04-0510utc', 'sitreps/2026-03-03-2005utc', 'sitreps/2026-03-03-1715utc', 'sitreps/2026-03-03-1545utc', 'sitreps/2026-03-03-1245utc', 'sitreps/2026-03-03-0900utc', 'sitreps/2026-03-03-0340utc', 'sitreps/2026-03-03-0255utc', 'sitreps/2026-03-03-0210utc', 'sitreps/2026-03-02-1830utc', 'sitreps/2026-03-02-1610utc', 'sitreps/2026-03-02-1420utc', 'sitreps/2026-03-02-1330utc'],
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
