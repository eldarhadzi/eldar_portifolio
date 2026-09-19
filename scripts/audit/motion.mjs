// Reduced-motion test: emulate prefers-reduced-motion and sample animation state right after navigation.
import { launch, sleep, BASE } from "./cdp.mjs";

const routes = (process.argv[2] || "/,/resume,/work,/contact").split(",");
const c = await launch();
await c.viewport(1440, 900);

const sample = `(() => {
  const main = document.querySelector('main');
  const fixedCovers = [...document.querySelectorAll('body div')].filter(e => { const s = getComputedStyle(e); const b = e.getBoundingClientRect(); return s.position === 'fixed' && b.width >= innerWidth - 2 && b.height >= innerHeight - 2 && s.display !== 'none' && parseFloat(s.opacity) > 0.02; });
  const content = main && main.firstElementChild ? parseFloat(getComputedStyle(main.firstElementChild).opacity) : null;
  const circle = document.querySelector('svg circle');
  const ring = circle ? circle.getAttribute('stroke-dasharray') + '|' + getComputedStyle(circle).transform + '|' + circle.style.strokeDasharray : null;
  return { covers: fixedCovers.length, content, waapi: document.getAnimations().filter(a => a.playState === 'running').length, ring };
})()`;

for (const reduce of [false, true]) {
  await c.reducedMotion(reduce);
  console.log(`\n##### prefers-reduced-motion: ${reduce ? "REDUCE" : "no-preference"}`);
  for (const path of routes) {
    await c.send("Page.navigate", { url: BASE + path });
    const t0 = Date.now(); const rows = []; const rings = new Set();
    while (Date.now() - t0 < 3600) {
      await sleep(250);
      try { const s = await c.evalJs(sample); rows.push([Date.now() - t0, s]); if (s.ring) rings.add(s.ring); } catch {}
    }
    const fmt = rows.filter((_, i) => i % 2 === 0).map(([t, s]) => `${(t / 1000).toFixed(1)}s[covers=${s.covers} content=${s.content} anim=${s.waapi}]`).join(" ");
    const maxCovers = Math.max(...rows.map(([, s]) => s.covers));
    const firstVisible = rows.find(([, s]) => s.content === 1);
    console.log(`${path.padEnd(8)} maxFullScreenCovers=${maxCovers}  contentFullyVisibleAt=${firstVisible ? (firstVisible[0] / 1000).toFixed(2) + "s" : "never"}  ringStates=${rings.size}`);
    console.log("   " + fmt);
  }
}
await c.close();
