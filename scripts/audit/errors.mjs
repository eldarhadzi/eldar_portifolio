import { launch, sleep } from "./cdp.mjs";
const c = await launch(); await c.viewport(390, 844, true); await c.goto("/contact", 3800);
await c.evalJs("document.querySelector('button[type=submit]').click(); 1"); await sleep(600);
const r = await c.evalJs(String.raw`(() => {
  const parse = (s) => s.match(/\d+(\.\d+)?/g).map(Number);
  const lum = (c) => { const f = (v) => { v/=255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); }; return 0.2126*f(c[0]) + 0.7152*f(c[1]) + 0.0722*f(c[2]); };
  const bg = [245,247,242];
  const errs = [...document.querySelectorAll('p[id$="-error"], [role=status]')].filter(p => p.textContent.trim()).map(p => { const col = parse(getComputedStyle(p).color); const l1 = lum(col), l2 = lum(bg); return p.id + ': "' + p.textContent.trim().slice(0,38) + '" ' + ((Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05)).toFixed(2) + ':1'; });
  const linked = [...document.querySelectorAll('[aria-invalid=true]')].map(i => i.getAttribute('aria-label') + ' -> describedby=' + i.getAttribute('aria-describedby') + ' target exists=' + !!document.getElementById(i.getAttribute('aria-describedby')));
  const d = document.documentElement;
  return { errs, linked, overflow: d.scrollWidth > d.clientWidth };
})()`);
console.log(JSON.stringify(r, null, 1));
await c.close();
