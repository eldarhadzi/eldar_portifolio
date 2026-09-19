import { launch, sleep } from "./cdp.mjs";
const c = await launch();
for (const reduce of [false, true]) {
  await c.reducedMotion(reduce);
  console.log("\nreduced-motion:", reduce ? "REDUCE" : "no-preference");
  await c.viewport(390, 844, true); await c.goto("/", 3800);
  await c.tab(); await c.tab(); await c.tab();
  await c.key("Enter", "Enter", 13, 0, String.fromCharCode(13)); await sleep(60);
  console.log("  sheet open animation-duration:", await c.evalJs("(() => { const d=document.querySelector('[role=dialog]'); return d ? getComputedStyle(d).animationDuration+' / anims running now: '+document.getAnimations().length : 'no dialog'; })()"));
  await c.viewport(1440, 900, false); await c.goto("/resume", 3800);
  console.log("  skill tile icon transition-duration:", await c.evalJs("getComputedStyle(document.querySelector('#skills-title ~ div svg')).transitionDuration"));
  console.log("  socials/CTA hover transition (home):", await (async()=>{ await c.goto("/", 3800); return c.evalJs("getComputedStyle(document.querySelector('main a[download]')).transitionDuration"); })());
  // tooltip: focus a skill tile and read the tooltip's animation
  await c.goto("/resume", 3800);
  await c.evalJs("document.querySelector('#skills-title ~ div button').focus(); 1"); await sleep(120);
  console.log("  tooltip animation-duration:", await c.evalJs("(() => { const t=document.querySelector('[role=tooltip]')?.parentElement; const e=[...document.querySelectorAll('[data-state]')].find(x=>x.className&&String(x.className).includes('animate-in')); return e ? getComputedStyle(e).animationDuration : 'tooltip not found'; })()"));
}
await c.close();
