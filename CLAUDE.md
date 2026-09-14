# CLAUDE.md

## Stack

- **Framework**: Next.js 14.2.28 (App Router), React 18.3.1
- **Language**: JavaScript (JSX, not TypeScript — `tsx: false` in components.json)
- **Styling**: Tailwind CSS 3.3.5 + `tailwindcss-animate`, custom theme (primary `#1c1c22`, accent `#00ff99`), dark mode via `class` strategy
- **UI components**: shadcn/ui (style: default, baseColor: slate, cssVariables: true) on top of Radix UI primitives (`dialog`, `scroll-area`, `select`, `slot`, `tabs`, `tooltip`); components live in `components/ui`
- **Animation**: Framer Motion, custom page/stair transitions (`PageTransition.jsx`, `Stairs.jsx`, `StairTransition.jsx`)
- **Icons**: lucide-react, react-icons
- **Other libs**: swiper (carousels), react-countup (stats), nodemailer (contact form email, via `app/api`), class-variance-authority, clsx, tailwind-merge (className utilities in `lib/utils.js`)
- **Package manager**: npm (`package-lock.json` present; no yarn.lock/pnpm-lock.yaml)
- **Linting**: ESLint 8 with `eslint-config-next`
- **Path aliases**: `@/*` → project root (jsconfig.json)

## Git / Commit Conventions

- Commits must look like normal human commits: plain conventional message, no trailers, no attribution lines. This is also enforced globally via `~/.claude/settings.json` (`attribution.commit`/`attribution.pr` set to `""`, `attribution.sessionUrl: false`, `includeCoAuthoredBy: false`).

## Known Issues Backlog

- [x] Homepage stat counters (`components/Stats.jsx`) rendered with no numeric value. Fixed 2026-09-14 — see Session Log.

## Status Snapshot

- Homepage stat counters (Years of experience / Projects completed / Technologies mastered / Code commits) render their real values (3 / 11 / 17 / 128) directly in SSR output; `react-countup`'s count-up animation runs client-side as a progressive enhancement on top, not a prerequisite for the numbers being visible.

## Session Log

- **2026-09-14**: Initial setup session. Verified `git config user.name`/`user.email` (eldarhadzi / eldarhadzovic03@gmail.com, set globally, matches user) — no changes needed. Confirmed no repo-level git config, hooks, or commit template injected attribution trailers. Found that Claude Code's own default behavior would append a `Co-Authored-By` trailer / session link to commits; disabled this globally in `~/.claude/settings.json` by setting `attribution.commit`/`attribution.pr` to `""` and `attribution.sessionUrl` to `false` (plus the deprecated `includeCoAuthoredBy: false` for backward compat). Filled in this file's Stack section from repo inspection. No application code touched.
- **2026-09-14**: Fixed homepage stat counter bug in `components/Stats.jsx`. Root cause: `react-countup`'s default (non-render-prop) usage renders an empty `<span>` — it only shows `props.start` formatted, which was never passed — and countup.js then writes the real digits into that span imperatively, client-side only, after mount (and only after the hardcoded 2s `delay`). So the real numbers never existed in SSR/initial DOM output and stayed blank without JS. The underlying data (`stats` array: 3 years experience, 11 projects, 17 technologies, 128 commits) was already correct and untouched — this was a rendering bug, not a data bug. Fix: switched to `react-countup`'s render-prop (`children` as a function) API so the `<span>` always renders the real number as normal React children (present in SSR/DOM immediately); `delay={0}` keeps `CountUp`'s auto-start-on-mount behavior enabled so the count-up animation still plays as an enhancement once JS loads. Verified via `curl` against the Next.js dev server that the real numbers (3/11/17/128) are present in the raw SSR HTML, and visually in Chrome that the stats render and animate correctly. `npm run lint` passes (one pre-existing, unrelated warning in `app/work/page.jsx`).
