# CLAUDE.md

Personal résumé site for Sébastien Lévy: one career-overview home page plus
three role-targeted CVs, all designed to be read in the browser **and** printed
to PDF from the browser.

## Stack

- **Astro 6**, static output (`output: "static"`, no adapter, no SSR)
- **Tailwind CSS 4** via `@tailwindcss/vite` (no `tailwind.config.js` — config
  lives in `src/styles/global.css` using `@import` / `@plugin`)
- **@tailwindcss/typography** — all markdown renders inside `.prose`
- **satori + sharp + @fontsource/inter** — render the link-preview PNGs at
  build time (see SEO and link previews below)
- **Bun** is the package manager (`bun.lock`); Node >= 22.12
- No tests, no linter, no formatter

## Commands

```bash
bun install
bun run dev      # needs FRONTEND_EXPOSED_PORT set
bun run build    # -> dist/
bun run preview  # needs FRONTEND_EXPOSED_PORT set
```

`dev` and `preview` interpolate `${FRONTEND_EXPOSED_PORT}` in `package.json`.
It is set in the author's shell environment (8080), not by anything in the
repo — a fresh clone will fail on `bun run dev` until it is exported. `build`
does not depend on it. `.vscode/launch.json` sidesteps it by calling
`astro dev` directly.

## Workflow and deployment

Iterate locally with `bun run dev`, then push to `main` when the result looks
right. A **Netlify GitHub app** is installed on `m374-crypt0/resume` and
deploys from `main` automatically — there is no CI workflow and no
`netlify.toml`; Netlify auto-detects Astro (`astro build` → `dist/`) and picks
up Bun from `bun.lock`. The live site is
<https://sebastien-levy-resume.netlify.app>, which is also `site` in
`astro.config.mjs` — update both if a custom domain is added.

Consequence: **a push to `main` is a publish.** Treat it as the deploy step.
Verify print/PDF output locally before pushing, since that is the part Netlify
cannot show you.

## Architecture

```
src/
  content/<lang>/  markdown — the actual résumé text, the only thing that
                   changes often; one folder per language (en, fr)
  pages/[...lang]/ index.astro (home) and [cv].astro (every résumé)
  pages/og/        [lang]/[page].png.ts — link-preview card per page
  layouts/         BaseLayout (html shell + theme + language selector),
                   ResumeLayout (+ print button)
  components/      Header, TableOfContents, CvCard, LanguageSelector, Flag
  lib/i18n.ts      languages, URL helpers, interface strings (`ui`)
  lib/content.ts   globs content/*/ → homes by language, sorted résumés
  styles/global.css  design tokens, prose overrides, print rules
  assets/          avatar
```

Routes: `/` → `en/home.md`, `/fr/` → `fr/home.md`; `/<slug>` →
`en/resume-<slug>.md`, `/fr/<slug>` → `fr/resume-<slug>.md`. Today that is
`/system`, `/tech-lead`, `/web3` and their `/fr/` twins. Each home page builds
its CV cards from the résumés of its own language.

## Localization

English is the default language and lives at the site root, so URLs shared
before localization still work; every other language lives under `/<lang>/`.
The `[...lang]` rest parameter is `undefined` for English (`routeLang()` in
`src/lib/i18n.ts`), which is how one page file produces both `/web3` and
`/fr/web3`. There is no redirect based on the browser language.

- **Content** — `src/content/<lang>/`, same file names in every language.
- **Interface strings** ("View CV", "Export PDF", aria-labels) — the `ui` object
  in `src/lib/i18n.ts`. Components get the language through a `lang` prop.
- **Language selector** — `LanguageSelector.astro`, rendered by `BaseLayout`
  just left of the theme toggle. A `<details>` dropdown with an SVG flag
  (`Flag.astro`; inline SVG because flag emoji don't render on Windows) and the
  language code; each option links to **the same page** in the other language
  by swapping the URL prefix. That assumes every page exists in every
  language: a résumé missing in one language means a 404 from the selector.
- **SEO** — `BaseLayout` emits `<html lang>` and `hreflang` alternates
  (absolute, built from `site`) for every language plus `x-default` → English.

## SEO and link previews

`BaseLayout` emits, from each page's frontmatter: `<title>` as
`<author> | <title>` (also the default file name of the exported PDF), meta
description, canonical URL, Open Graph tags (`og:locale` from `languages` in
`src/lib/i18n.ts`) and `twitter:card`.

`og:image` points to `/og/<lang>/<page>.png` (`home` for the home page, the
slug otherwise), generated at build time by `src/pages/og/[lang]/[page].png.ts`:
satori lays out name + title as vector paths with the bundled Inter font (the
build machine needs no system fonts), sharp rasterizes to 1200×630. A title
of the form `Role — Specialty` is split onto two lines. Verify the cards by
opening `dist/og/**/*.png` after a build.

LinkedIn caches previews for about a week; use its Post Inspector to refresh
after a change.

Adding a language: an entry in `languages` and `ui` in `src/lib/i18n.ts`, a
flag in `Flag.astro`, and a full `src/content/<lang>/` folder.

### Content is plain markdown imports, not content collections

Despite living in `src/content/`, these files are **not** an Astro content
collection — there is no `src/content.config.ts`. `src/lib/content.ts` loads
them with `import.meta.glob` and the pages receive them as props from
`getStaticPaths`:

```astro
const {lang, resume} = Astro.props
const {title, author: name} = resume.frontmatter
const headings = resume.getHeadings()
...
<resume.Content />
```

Frontmatter schema is informal: `title` (the role headline shown under the
name), `author` (the name), `description` (meta / Open Graph description,
keep it under ~160 characters), and on `home.md` also `location`. Résumés also
carry the home-page card:

```yaml
card:
  title: 'Senior Technical Lead'          # shorter than the page title
  description: 'Hands-on · Coaching · Technical Leadership'
  order: 2                                # position on the home page
```

The `Home` and `Resume` types in `src/lib/content.ts` describe this shape for
the editor, but nothing validates it at build time: a missing `card` breaks
the build, while a typo in `title`/`description` renders as blank and a typo
in `order` silently scrambles the card order.

### Adding a new CV

Add `src/content/<lang>/resume-<slug>.md` with `title`, `author`,
`description` and `card` frontmatter, **in every language**. That alone
publishes it at `/<slug>` (and `/fr/<slug>`), generates its preview card and
adds it to that language's home page — so does any `resume-*.md` file, drafts
included; name a draft differently until it is
ready.

## Markdown conventions

Follow the existing files closely; the styling assumes this shape.

- `## Profile`, `## Experiences`, `## Skills`… — section titles (indigo-950)
- `### <Job or project title>` — one per experience (indigo-700)
- Immediately after each `###`, a two-column table:
  `| Company | Period |`
- Then bullets, with the signal keywords wrapped in `**bold**`
- `---` horizontal rules separate major sections
- Prose is hard-wrapped at ~80 columns
- Links to `linkedin.com` / `github.com` automatically get an inline brand icon
  injected by CSS `::before` in `global.css` — no markup needed

## Theming

`<html data-theme="light|dark">`, driven by CSS custom properties in
`global.css` (`--color-bg`, `--color-h2`, `--color-h3`, …). An inline
`is:inline` script in the `<head>` reads `localStorage.theme` (falling back to
`prefers-color-scheme`) before first paint to avoid a flash; a second script
at the end of `<body>` wires the toggle button.

This whole block — head script, toggle button, toggle script — lives once in
`BaseLayout.astro`. The home page uses `BaseLayout` directly; `ResumeLayout`
wraps it and only adds the "Export PDF" button. The toggle script looks the
button up by id, so it must stay after the button in `BaseLayout`.

## PDF export

There is no PDF pipeline — "Export PDF" calls `window.print()`, and the
`@media print` block in `global.css` does the work:

- scales root font to 80%
- overrides the palette back to light regardless of active theme
- hides anything with `.no-print` (theme toggle, TOC, print button)
- `break-after: avoid` on headings to keep them with their content

Page breaks are **manual**: `<div class="page-break"></div>` placed by hand in
the markdown. When editing content, re-check that these still land sensibly.
Verify layout changes by actually printing to PDF, not just by reading the DOM.

## Known issues

Worth fixing when touching the relevant area:

- **No sitemap.** `@astrojs/sitemap` would generate it from `site`, which is
  already set; it should list both languages.
- **Author name is inconsistent**: `Sébastien Lévy` in `home.md`,
  `Sebastien Levy` in the résumés, and it shows on the preview cards.
- A stray untracked `~/` directory (an npm cache created by a misconfigured
  `--cache` flag) sits at the repo root. Safe to delete; not gitignored.

## Conventions

- Commits follow Conventional Commits: `feat:`, `fix:`, `style:`, `refactor:`,
  `chore:`, and `docs:` — note that `docs:` here means **résumé content
  changes**, not documentation.
- Astro frontmatter uses no semicolons and `{title}` shorthand props; match it.
