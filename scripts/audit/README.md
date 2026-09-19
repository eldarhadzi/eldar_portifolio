# Audit scripts

Dependency-free checks that drive a headless Chrome over the DevTools protocol (Node 22+ for the
built-in `WebSocket`). They run against a **production** server, since dev mode skews performance.

```bash
npm run build && npx next start -p 3111
cd scripts/audit
node responsive.mjs              # 4 routes x 320/390/768/1024/1440: overflow, small targets
node keyboard.mjs 1440           # Tab through every route, step by step (pass a width, and optional routes)
node sheet.mjs                   # mobile menu: open, focus containment, Escape, focus return
node motion.mjs                  # prefers-reduced-motion off vs on: overlays, fades, running animations
node motion2.mjs                 # reduced motion for CSS animations (sheet, hover, tooltip)
node perf.mjs desktop detail     # transfer by type, FCP, LCP, CLS, long tasks (or: perf.mjs mobile)
node cls.mjs                     # layout-shift sources
node a11y.mjs                    # contrast, headings, landmarks, alts, unnamed controls, titles
node errors.mjs                  # Contact error state: contrast and aria-describedby links
node hit.mjs                     # real clickable height of header links
node shots.mjs                   # screenshots of every route at every width, into the current folder
```

Environment: `CHROME_PATH` (default is the Windows Chrome install) and `AUDIT_BASE` (default
`http://localhost:3111`). On Git Bash for Windows, prefix with `MSYS_NO_PATHCONV=1` when passing a
route such as `/resume`.

These are lab measurements, not Lighthouse scores. `shots.mjs` writes PNGs into the current folder.
