# CLAUDE.md

Portfolio site for Eldar Hadžović. One identity: software engineer who builds products. Business and entrepreneurial experience is supporting context in the Experience section, not a separate persona.

## Tech Stack

- **Framework**: Next.js 14.2.28 (App Router), React 18.3.1
- **Language**: JavaScript (JSX, not TypeScript; `tsx: false` in components.json)
- **Styling**: Tailwind CSS 3.3.5 + `tailwindcss-animate`, dark mode via `class` strategy
- **UI components**: shadcn/ui (style: default, baseColor: slate, cssVariables: true) on Radix UI primitives (`dialog`, `scroll-area`, `select`, `slot`, `tabs`, `tooltip`); components live in `components/ui`
- **Animation**: Framer Motion; page/stair transitions in `PageTransition.jsx`, `Stairs.jsx`, `StairTransition.jsx`
- **Icons**: lucide-react, react-icons
- **Other libs**: swiper (Work carousel), react-countup (currently unused), nodemailer (contact email), class-variance-authority, clsx, tailwind-merge (`lib/utils.js`)
- **Font**: JetBrains Mono via `next/font/google` (`--font-jetbrainsMono`)
- **Package manager**: npm
- **Linting**: ESLint 8 with `eslint-config-next`. One known warning is allowed: missing `alt` on the `<Image>` in `app/work/page.jsx`.
- **Path alias**: `@/*` maps to the project root (`jsconfig.json`)
- **Breakpoints**: sm 640, md 768, lg 960, xl 1200

## Colors

From `tailwind.config.js`:

- `primary`: `#1c1c22`
- `accent`: `#00ff99`
- `accent-hover`: `#00e187`

Hardcoded in components and CSS:

- Card surfaces: `#232329` (Resume cards), `#27272c` (Contact form and icon tiles)
- Outline text stroke (`globals.css`): `#ffffff`, hover `#00ff99`
- Social brand colors (`components/Socials.jsx`): GitHub `#181717`, LinkedIn `#0077B5` (hover `#005582`), WhatsApp `#25D366` (hover `#128C7E`)

## Tone Rules

BANNED: sales-pitch language, motivational language, exaggerated claims, "visionary"/"industry-leading"/"next-generation" style phrasing, self-congratulatory statements, generic personal-brand language.

WANTED: state what was built plainly, explain role directly, describe technical decisions without hedging, let the work provide credibility, avoid unnecessary disclaimers.

Example — BANNED: "Leading with vision, negotiating with confidence, and managing like a pro."

Example — WANTED: "I build software products across web, mobile, and backend systems, with a focus on turning ideas into working products."

## No-Fabrication Rule

Every claim on the site must trace to a verified source: the CV (`public/assets/resume/Eldar Hadzovic cv.docx`), the repository, a deployed project, or a fact the owner has stated directly.

- No invented statistics, counts, ratings, clients, metrics, or technologies. If a number can't be verified, omit it. The old homepage stats (11 projects, 17 technologies mastered, 128 commits) were fabricated and were removed; do not reintroduce them.
- Do not fill gaps by guessing. Report the gap and ask.
- Do not list a technology unless there is evidence of use (a project, a job entry, or the repo).
- Do not name clients. Promet Bilgi Sistemleri is described generically as mobile development for a major Turkish telecom operator.
- RestaurantOS and Eldix are in development. Describe them as in development, evidenced by their GitHub repositories, never as launched products or live deployments.
- Placeholder or demo content in project screenshots (for example the "Trusted by" logos in the Eoned thumbnail) must not be presented as clients or results.

## Verified Content Snapshot

Experience (Resume page):

- Promet Bilgi Sistemleri, Mobile Application Developer, Feb 2026 - Present
- Koloniyas D.o.o., Co-Founder & Full-Stack Developer, Jan 2025 - Feb 2026 (ended)
- DAKAEi AI, Business Development Manager, Dec 2024 - Jan 2026 (ended)
- Heritage Hotel Krone, Agency Relations Officer, Oct 2024 - Dec 2025 (ended)
- HaydeSoft, Frontend Developer, Mar 2023 - Jun 2023
- Simurg Media D.o.o., Undergraduate Technical Assistant, Jan 2021 - Jun 2021

Education: Ostim Technical University, B.S. Software Engineering, graduated Jun 2026, GPA 3.81/4.00. First Bosniak Gymnasium, Mathematics & Information Technology, graduated Jun 2022, GPA 4.89/5.00. Achievement: BBI League of Negotiation, 1st place, Mar 2021.

## Project Scope

- **Services and business-development framing are permanently removed from project scope.** There is no Services page, no services nav entry, and no service-type selector on the contact form. Do not add a service menu, consulting offering, or a separate business-development persona back in any form.
- Business and entrepreneurial roles (Koloniyas, DAKAEi AI, Heritage Hotel Krone) appear as supporting context in Experience.
- Pages: Home, Resume, Work, Contact.

## Known Issues Backlog

- [ ] Contact API is broken: `app/api/contact.js` is not an App Router route (needs `app/api/contact/route.js` exporting `POST`), and the handler uses the Pages Router `(req, res)` signature. Form submissions 404. Also logs request data and the password length, and interpolates unescaped input into HTML. Scheduled for the next phase.
- [ ] Work page: `github` links are empty for all projects and Vertex Banking has no `live` link, so the buttons point at `href=""`.
- [ ] Skills list on the Resume page includes items with no evidence of use in the repo or projects (C, PostgreSQL). Needs the owner's confirmation before changes.
- [ ] `README.md` is stale (wrong CV path, placeholder clone URL, nonexistent `styles/` folder).
- [ ] Visual redesign is a later phase. Do not change color tokens, typography, spacing, or layout during content-only work.

## Git / Commit Conventions

- Work on the `redesign` branch.
- Plain conventional commit messages (`fix:`, `docs:`, `feat:`, etc.). No trailers, no attribution lines, no co-author lines. This is also enforced globally via `~/.claude/settings.json` (`attribution.commit`/`attribution.pr` set to `""`, `attribution.sessionUrl: false`, `includeCoAuthoredBy: false`).
- Before committing, `npm run lint` and `next build` must pass with no new errors.
