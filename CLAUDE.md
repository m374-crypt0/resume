# CLAUDE.md

Personal résumé site for Sébastien Lévy: one career-overview home page plus
three role-targeted CVs, all designed to be read in the browser **and** printed
to PDF from the browser.

## Stack

- **Astro 6**, static output (`output: "static"`, no adapter, no SSR)
- **Tailwind CSS 4** via `@tailwindcss/vite` (no `tailwind.config.js` — config
  lives in `src/styles/global.css` using `@import` / `@plugin`)
- **@tailwindcss/typography** — all markdown renders inside `.prose`
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
up Bun from `bun.lock`.

Consequence: **a push to `main` is a publish.** Treat it as the deploy step.
Verify print/PDF output locally before pushing, since that is the part Netlify
cannot show you.

## Architecture

```
src/
  content/         markdown — the actual résumé text, the only thing that
                   changes often
  pages/           one .astro file per route, each ~11 lines of identical glue
  layouts/         HomeLayout, ResumeLayout (html shell + theme + print button)
  components/      Header, TableOfContents, CvCard
  styles/global.css  design tokens, prose overrides, print rules
  assets/          avatar
```

Routes: `/` → `home.md`, `/system` → `resume-system.md`,
`/tech-lead` → `resume-tech-lead.md`, `/web3` → `resume-web3.md`.

### Content is plain markdown imports, not content collections

Despite living in `src/content/`, these files are **not** an Astro content
collection — there is no `src/content.config.ts`. Pages do:

```astro
import * as resume from '../content/resume-web3.md'
const { title, author: name } = resume.frontmatter
const headings = resume.getHeadings()
...
<resume.Content />
```

Frontmatter schema is informal: `title` (the role headline shown under the
name), `author` (the name), and on `home.md` also `location`. There is no
validation — a typo in a key fails silently at render.

### Adding a new CV

1. Add `src/content/resume-<slug>.md` with `title` + `author` frontmatter.
2. Copy an existing page (e.g. `src/pages/web3.astro`) to
   `src/pages/<slug>.astro` and swap the import.
3. Add an entry to the `cvs` array in `src/pages/index.astro` so it's linked
   from the home page.

The three steps are not wired together — forgetting step 3 produces a live but
unreachable page.

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

This whole block — head script, toggle button, toggle script — is **duplicated
verbatim** between `HomeLayout.astro` and `ResumeLayout.astro`. Change one,
change the other. The only real difference is that `ResumeLayout` additionally
renders the "Export PDF" button.

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

- **No `site` in `astro.config.mjs`** — blocks canonical URLs, sitemap, and
  Open Graph absolute URLs. Set it to the Netlify URL once that is fixed.
- **No meta description / Open Graph tags** on any page, despite this being a
  site meant to be shared with recruiters.
- A stray untracked `~/` directory (an npm cache created by a misconfigured
  `--cache` flag) sits at the repo root. Safe to delete; not gitignored.

## Conventions

- Commits follow Conventional Commits: `feat:`, `fix:`, `style:`, `refactor:`,
  `chore:`, and `docs:` — note that `docs:` here means **résumé content
  changes**, not documentation.
- Astro frontmatter uses no semicolons and `{title}` shorthand props; match it.
