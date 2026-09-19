import { launch } from "./cdp.mjs";
const c = await launch();
for (const w of [390, 1440]) {
  await c.viewport(w, 900); await c.goto(process.argv[2] || "/", 3800);
  const r = await c.evalJs(`(() => [...document.querySelectorAll('header a')].filter(a => a.getBoundingClientRect().width>0).map(a => { const b=a.getBoundingClientRect(), cx=b.left+b.width/2;
    // walk outward from the top edge and the bottom edge while the point still hits this link
    const hits = (y) => { const e=document.elementFromPoint(cx,y); return e && (e===a || a.contains(e)); };
    let up=0; while (hits(b.top-up-1) && up<30) up++; let dn=0; while (hits(b.bottom+dn) && dn<30) dn++;
    return (a.getAttribute('aria-label')||a.textContent.trim()).slice(0,22)+': box '+Math.round(b.height)+'px, clickable '+Math.round(b.height+up+dn)+'px'; }))()`);
  console.log(`@${w}px`, r.join(" | "));
}
await c.close();
