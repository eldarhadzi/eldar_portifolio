import { launch, sleep, BASE } from "./cdp.mjs";
const c = await launch(); await c.viewport(1440, 900, false);
for (const path of ["/", "/contact"]) {
  await c.send("Page.addScriptToEvaluateOnNewDocument", { source: `window.__ls=[]; new PerformanceObserver(l=>{for(const e of l.getEntries()){ if(e.hadRecentInput) continue; window.__ls.push({t:Math.round(e.startTime),v:+e.value.toFixed(3),src:(e.sources||[]).map(s=>{const n=s.node; return (n? (n.nodeType===1? n.tagName.toLowerCase()+'.'+String(n.className).split(' ').slice(0,3).join('.') : n.nodeName):'?')+' '+JSON.stringify(s.previousRect.y)+'->'+JSON.stringify(s.currentRect.y)+' h'+Math.round(s.currentRect.height)})})}}).observe({type:'layout-shift',buffered:true});` });
  await c.send("Page.navigate", { url: BASE + path }); await sleep(6000);
  console.log(path, JSON.stringify(await c.evalJs("window.__ls"), null, 1));
}
await c.close();
