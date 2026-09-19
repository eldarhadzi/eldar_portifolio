import { launch } from "./cdp.mjs";
const c = await launch(); await c.viewport(1440, 900, false);
const audit = String.raw`(() => {
  const parse = (s) => { const m = s.match(/rgba?\(([^)]+)\)/); if (!m) return [0,0,0,0]; const p = m[1].split(/[ ,\/]+/).map(Number); return [p[0],p[1],p[2], p.length > 3 ? p[3] : 1]; };
  const over = (top, bot) => { const a = top[3]; return [top[0]*a + bot[0]*(1-a), top[1]*a + bot[1]*(1-a), top[2]*a + bot[2]*(1-a), 1]; };
  const lum = (c) => { const f = (v) => { v/=255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); }; return 0.2126*f(c[0]) + 0.7152*f(c[1]) + 0.0722*f(c[2]); };
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return (Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05); };
  const bgOf = (el) => { const layers = []; for (let e = el; e; e = e.parentElement) { const bg = parse(getComputedStyle(e).backgroundColor); if (bg[3] > 0) layers.push(bg); if (bg[3] === 1) break; } let base = [255,255,255,1]; for (let i = layers.length - 1; i >= 0; i--) base = over(layers[i], base); return base; };
  const fails = [], seen = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const n = walker.currentNode; if (!n.textContent.trim()) continue; const el = n.parentElement;
    if (!el || el.closest('[aria-hidden="true"], script, style, .sr-only') ) continue;
    const cs = getComputedStyle(el); const b = el.getBoundingClientRect(); if (b.width === 0 || cs.visibility === 'hidden' || cs.display === 'none') continue;
    if (cs.webkitTextStrokeWidth !== '0px' && cs.color.includes('0, 0, 0, 0')) continue; // outline-only decorative numerals
    let op = 1; for (let e = el; e; e = e.parentElement) op *= parseFloat(getComputedStyle(e).opacity);
    const fg = parse(cs.color); fg[3] *= op; const bg = bgOf(el); const eff = over(fg, bg);
    const size = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight) >= 700, large = size >= 24 || (size >= 18.66 && bold);
    const r = ratio(eff, bg), need = large ? 3 : 4.5;
    if (r < need) { const k = el.tagName + cs.color + r.toFixed(2); if (!seen.has(k)) { seen.add(k); fails.push(el.tagName.toLowerCase() + ' "' + n.textContent.trim().slice(0, 30) + '" ' + r.toFixed(2) + ':1 (needs ' + need + ') size=' + size); } }
  }
  const hs = [...document.querySelectorAll('h1,h2,h3,h4')].map(h => +h.tagName[1]);
  const order = []; let prev = 0; hs.forEach(h => { if (h > prev + 1 && prev !== 0) order.push('skips h' + prev + '->h' + h); prev = h; });
  const noAlt = [...document.querySelectorAll('img')].filter(i => !i.hasAttribute('alt')).length;
  const unnamed = [...document.querySelectorAll('a,button,input,textarea,select')].filter(e => { const b = e.getBoundingClientRect(); if (b.width === 0 || e.type === 'hidden' || e.getAttribute('aria-hidden') === 'true') return false; const name = (e.getAttribute('aria-label') || e.getAttribute('aria-labelledby') || e.innerText || e.title || (e.labels && e.labels.length) || '').toString().trim(); return !name; }).length;
  const ids = [...document.querySelectorAll('[id]')].map(e => e.id); const dupIds = ids.filter((x, i) => ids.indexOf(x) !== i);
  return { title: document.title, lang: document.documentElement.lang, h1: document.querySelectorAll('h1').length, headings: hs.join(''), headingIssues: order, landmarks: ['header','nav','main','footer'].map(t => t + ':' + document.querySelectorAll(t).length).join(' '), noAlt, unnamed, dupIds, contrastFails: fails };
})()`;
for (const path of ["/", "/resume", "/work", "/contact"]) {
  await c.goto(path, 3800);
  const r = await c.evalJs(audit);
  console.log(`\n${path}  title="${r.title}" lang=${r.lang} h1=${r.h1} headings=[${r.headings}] ${r.headingIssues.join(",")||"order ok"}  ${r.landmarks}  imgWithoutAlt=${r.noAlt} unnamedControls=${r.unnamed} dupIds=${r.dupIds.length}`);
  console.log("  contrast failures:", r.contrastFails.length ? "\n    " + r.contrastFails.join("\n    ") : "none");
}
await c.close();
