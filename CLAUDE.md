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

## Identity & Positioning (locked)

This is a two-audience site. Do not blend the two tones on the same page, and do not quietly collapse this back into one tone.

- **Home / Resume / Work**: engineer-candidate framing. Leads with software engineering identity — role, stack, what he builds. Founder/business-dev background may appear as a supporting line, never as the headline.
- **Services**: business-dev/consulting framing. Allowed — expected — to lead with deal-closing/negotiation language; do not soften it to match Home's tone. The page opens with an explicit reframing line (e.g. "Looking to build something together?") so the tonal shift from Home reads as intentional, not accidental.
- Resume's Experience timeline reflects real history (CEO/Co-Founder, Business Development Manager, etc.) — it is not rewritten into engineering-sounding titles.

## Known Issues Backlog

- [x] Homepage stat counters (`components/Stats.jsx`) rendered with no numeric value. Fixed 2026-09-14 — see Session Log.
- [x] Home hero (`app/page.jsx`) read "Business Technologist" / "Coding. Connecting. Conquering deals." — didn't lead with engineering identity. Fixed 2026-09-24 — see Session Log.
- [x] Services page (`app/services/page.jsx`) lacked an explicit reframing line and led with Negotiation/Project Management instead of Web Development/UI/UX Design. Fixed 2026-09-24. Logo Design and SEO Optimization were flagged as generic filler; user confirmed keeping both, so no removal — closing this item as resolved.
- [x] Resume (`app/resume/page.jsx`) About me copy blended engineer and business-dev framing ("leadership roles... blending technical skills with business acumen"), against the Identity & Positioning rule. No "Prompt 4 findings" exist anywhere (not in this file, not in git history); user confirmed proceeding on judgment. Rewrote to lean technical. Fixed 2026-09-24 — see Session Log.

## Status Snapshot

- Homepage stat counters (Years of experience / Projects completed / Technologies mastered / Code commits) render their real values (3 / 11 / 17 / 128) directly in SSR output; `react-countup`'s count-up animation runs client-side as a progressive enhancement on top, not a prerequisite for the numbers being visible.
- Home hero (`app/page.jsx`) eyebrow reads "Software Engineer & Builder"; one-liner reads "From idea to shipped product — with the business chops to fund it." Leads with engineering identity, founder/business-dev is a supporting clause, per Identity & Positioning.
- Services page (`app/services/page.jsx`) opens with "Looking to build something together?" and lists all 6 services in order: Web Development, UI/UX Design, Negotiation, Project Management, Logo Design, SEO Optimization. Nothing removed — user chose to keep Logo Design and SEO Optimization.
- Resume (`app/resume/page.jsx`) About me now leans technical (stack, end-to-end ownership, cross-functional teams) instead of blending in business-acumen language. Experience timeline (CEO/Co-Founder, Business Development Manager, etc.) is untouched, as instructed — real history, not rewritten.
- Work page untouched this session, per instruction.

## Session Log

- **2026-09-14**: Initial setup session. Verified `git config user.name`/`user.email` (eldarhadzi / eldarhadzovic03@gmail.com, set globally, matches user) — no changes needed. Confirmed no repo-level git config, hooks, or commit template injected attribution trailers. Found that Claude Code's own default behavior would append a `Co-Authored-By` trailer / session link to commits; disabled this globally in `~/.claude/settings.json` by setting `attribution.commit`/`attribution.pr` to `""` and `attribution.sessionUrl` to `false` (plus the deprecated `includeCoAuthoredBy: false` for backward compat). Filled in this file's Stack section from repo inspection. No application code touched.
- **2026-09-14**: Fixed homepage stat counter bug in `components/Stats.jsx`. Root cause: `react-countup`'s default (non-render-prop) usage renders an empty `<span>` — it only shows `props.start` formatted, which was never passed — and countup.js then writes the real digits into that span imperatively, client-side only, after mount (and only after the hardcoded 2s `delay`). So the real numbers never existed in SSR/initial DOM output and stayed blank without JS. The underlying data (`stats` array: 3 years experience, 11 projects, 17 technologies, 128 commits) was already correct and untouched — this was a rendering bug, not a data bug. Fix: switched to `react-countup`'s render-prop (`children` as a function) API so the `<span>` always renders the real number as normal React children (present in SSR/DOM immediately); `delay={0}` keeps `CountUp`'s auto-start-on-mount behavior enabled so the count-up animation still plays as an enhancement once JS loads. Verified via `curl` against the Next.js dev server that the real numbers (3/11/17/128) are present in the raw SSR HTML, and visually in Chrome that the stats render and animate correctly. `npm run lint` passes (one pre-existing, unrelated warning in `app/work/page.jsx`).
- **2026-09-24**: Positioning/copy session. Before starting, found local `main` was behind `origin/main` by 3 commits ("add my whatsapp number", "update first page" — changed the hero eyebrow from "Software Developer" to "Business Technologist", "tab title change") pushed outside this session; rebased the local stat-counter-fix commit onto `origin/main` cleanly (no conflicts) before touching anything. Added the "Identity & Positioning" section above — it did not previously exist in this file, so there was nothing to "read as locked"; wrote it directly from this session's instructions rather than inventing content. Implemented Services page changes: added the "Looking to build something together?" reframing line and reordered `services` in `app/services/page.jsx` (Web Development, UI/UX Design, Negotiation, Project Management, then Logo Design, SEO Optimization). Flagged Logo Design/SEO Optimization as generic filler and asked before removing; user chose to keep both, so left them in place at the end of the list, nothing deleted. Drafted 3 headline/one-liner options for the Home hero rather than picking one unilaterally; user picked "Software Engineer & Builder" / "From idea to shipped product — with the business chops to fund it." and that's what shipped in `app/page.jsx`. For Resume `about.description` in `app/resume/page.jsx`: asked about the "Prompt 4 findings" referenced in the instructions, since no record of them exists anywhere in this file or `git log`; user confirmed no such findings exist and to use judgment, so rewrote the About me blurb to lean technical (stack, end-to-end ownership) and dropped the "leadership roles... blending technical skills with business acumen" language that blended the two audiences' tones — Experience timeline and Skills list left untouched. Work page untouched, per instruction. Verified all three changes with `npm run lint` (clean, same pre-existing unrelated warning in `app/work/page.jsx`) and visually in Chrome.
