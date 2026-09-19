// Keyboard pass: Tab through each route, step by step. Records element, whether focus is visible, and order.
import { launch, sleep } from "./cdp.mjs";

const width = Number(process.argv[2] || 1440);
const routes = (process.argv[3] || "/,/resume,/work,/contact").split(",");
const c = await launch();
await c.viewport(width, 900);

const describe = String.raw`(() => {
  const e = document.activeElement;
  if (!e || e === document.body) return null;
  const alpha = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return c === 'transparent' ? 0 : 1; const p = m[1].split(',').map(Number); return p.length > 3 ? p[3] : 1; };
  const cs = getComputedStyle(e), b = e.getBoundingClientRect();
  const all = [...document.querySelectorAll('a[href],button,input,textarea,select,[tabindex]')];
  const pos = all.indexOf(e);
  const name = (e.getAttribute('aria-label') || e.innerText || e.getAttribute('placeholder') || e.name || '').trim().replace(/\s+/g, ' ').slice(0, 30);
  const outline = cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0 && alpha(cs.outlineColor) > 0.2;
  const shadows = cs.boxShadow === 'none' ? [] : cs.boxShadow.split(/,(?![^(]*\))/);
  const shadow = shadows.some(s => { const col = s.match(/rgba?\([^)]+\)/); const nums = s.replace(/rgba?\([^)]+\)/, '').trim().split(/\s+/).map(parseFloat); return col && alpha(col[0]) > 0.2 && (nums[3] > 0 || nums[2] > 0); });
  return { tag: e.tagName.toLowerCase(), name, pos, href: e.getAttribute('href') || '', fv: e.matches(':focus-visible'), ring: outline || shadow, outline, shadow,
    borderOnly: !outline && !shadow, border: cs.borderColor,
    vis: b.width > 0 && b.height > 0 && cs.visibility !== 'hidden' && cs.opacity !== '0', inView: b.bottom > 0 && b.top < innerHeight, inSheet: !!e.closest('[role=dialog]') };
})()`;

for (const path of routes) {
  await c.goto(path, 3800);
  await c.evalJs("document.activeElement && document.activeElement.blur(); window.scrollTo(0,0); 1");
  console.log(`\n=== ${path} @ ${width}px`);
  const seen = new Set(); let step = 0; let last = "";
  for (let i = 0; i < 70; i++) {
    await c.tab();
    await sleep(450);
    const d = await c.evalJs(describe);
    if (!d) { console.log(`  ${String(++step).padStart(2)}. (focus left the page / body)`); break; }
    const key = d.pos + "|" + d.tag + "|" + d.name;
    if (seen.has(key) && key === last) { console.log("  TRAP? same element twice"); break; }
    if (seen.has(key)) { console.log(`  -- wrapped back to "${d.name}" after ${step} stops`); break; }
    seen.add(key); last = key;
    const flag = !d.vis ? "INVISIBLE-ELEMENT" : d.ring ? (d.outline ? "outline" : "ring") : "NO-RING";
    console.log(`  ${String(++step).padStart(2)}. <${d.tag}> "${d.name}" focus-visible=${d.fv} ${flag}${d.inView ? "" : " (scrolled into view)"}`);
  }
}
await c.close();
