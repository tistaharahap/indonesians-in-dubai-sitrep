# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Emergency situation report (SITREP) site for Indonesian nationals in Dubai/UAE during Middle East crisis. Built with Docusaurus 3.9, React 19, TypeScript, and bun as package manager. Deployed to Cloudflare Pages at `indonesians-in-dubai-sitrep.pages.dev`.

## Commands

```bash
bun install          # Install dependencies
bun start            # Dev server (Indonesian locale, default)
bun start -- --locale en  # Dev server (English locale)
bun run build        # Production build
bun run serve        # Serve production build locally
bun run typecheck    # TypeScript type checking (tsc)
bun run clear        # Clear Docusaurus cache (.docusaurus/)
```

Docker build/run:
```bash
docker build -t sitrep .
docker run -p 3000:3000 sitrep
```

## Architecture

### Content Structure

- **docs/** — Primary content in Indonesian (MDX). This is the default locale (`id`).
  - `index.mdx` — Landing page (slug: `/`)
  - `sitreps/` — Situation reports, named `YYYY-MM-DD-HHMMutc.mdx`
  - `emergency/` — Static reference pages (contacts, exit-routes, go-bag-checklist)
  - `defcon/` — Threat level framework (overview)
- **i18n/en/docusaurus-plugin-content-docs/current/** — English translations, mirroring `docs/` structure
- **i18n/en/*.json** — UI string translations (navbar, footer, etc.)

Docs are served at the site root (`routeBasePath: '/'`), blog is disabled.

### Sidebars

`sidebars.ts` defines three sidebars mapped to navbar items:
- `sitrepsSidebar` — SITREPs (add newest entries at the top of the items array, `sidebar_position: 1` for latest)
- `emergencySidebar` — Emergency reference pages
- `defconSidebar` — Threat level framework

### Custom MDX Components

Registered globally in `src/theme/MDXComponents.tsx` — usable in any MDX file without imports:

| MDX Tag | Component | Props |
|---------|-----------|-------|
| `<Card>` | `CardLink` | `title`, `icon`, `href`, `horizontal?`, children |
| `<Columns>` | `CardGrid` | `cols` (2/3/4, default 3), children |
| `<Accordion>` | `Accordion` | `title`, `icon?`, children |
| `<AccordionGroup>` | `AccordionGroup` | children |
| `<Steps>` | `Steps` | children |
| `<Step>` | `Step` | `title`, children |

Icon names map to lucide-react icons. Available keys in `CardLink`: `circle-exclamation`, `phone`, `route`, `bag-shopping`, `shield-halved`, `shield`, `mobile`. In `Accordion`: `list-check`, `clipboard-list`, `building-flag`.

Docusaurus built-in components (`Tabs`, `TabItem`, admonitions) require explicit imports in MDX files.

### Adding a New SITREP

1. Create `docs/sitreps/YYYY-MM-DD-HHMMutc.mdx` with frontmatter (`title`, `description`, `sidebar_position: 1`)
2. Create English translation at `i18n/en/docusaurus-plugin-content-docs/current/sitreps/YYYY-MM-DD-HHMMutc.mdx`
3. Add the doc ID to `sidebars.ts` in the appropriate month category (newest first)
4. Update the `<Card>` link on `docs/index.mdx` to point to the new SITREP

### Styling

`src/css/custom.css` — Mintlify-inspired theme with emergency-red primary color (`#DC2626` light / `#EF4444` dark). All custom component styles (card-link, card-grid, accordion, steps) are in this single file.

### i18n

Default locale is Indonesian (`id`). Content in `docs/` is Indonesian. English is the secondary locale with full page translations under `i18n/en/`. Both content files and UI strings need translation.
