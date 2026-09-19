// Lab performance metrics via CDP (not Lighthouse scores): transfer by type, FCP, LCP, CLS, long tasks.
import { launch, sleep, BASE } from "./cdp.mjs";

const profile = process.argv[2] || "desktop"; // desktop | mobile
const c = await launch();
if (profile === "mobile") {
  await c.viewport(390, 844, true);
  await c.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  await c.send("Network.emulateNetworkConditions", { offline: false, latency: 150, downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8 });
} else {
  await c.viewport(1440, 900, false);
}
await c.send("Network.setCacheDisabled", { cacheDisabled: true });

const reqs = new Map();
c.on((m) => {
  if (m.method === "Network.responseReceived") reqs.set(m.params.requestId, { url: m.params.response.url, type: m.params.type, status: m.params.response.status });
  if (m.method === "Network.loadingFinished" && reqs.has(m.params.requestId)) reqs.get(m.params.requestId).bytes = m.params.encodedDataLength;
});

const observe = `new Promise(res => {
  const out = { lcp: 0, lcpEl: '', cls: 0, long: 0, longTotal: 0, fcp: 0 };
  new PerformanceObserver(l => { for (const e of l.getEntries()) { out.lcp = e.startTime; out.lcpEl = (e.element ? e.element.tagName + (e.element.alt ? '[' + e.element.alt.slice(0,18) + ']' : '') : ''); } }).observe({ type: 'largest-contentful-paint', buffered: true });
  new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) out.cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
  new PerformanceObserver(l => { for (const e of l.getEntries()) { out.long++; out.longTotal += Math.max(0, e.duration - 50); } }).observe({ type: 'longtask', buffered: true });
  new PerformanceObserver(l => { for (const e of l.getEntries()) if (e.name === 'first-contentful-paint') out.fcp = e.startTime; }).observe({ type: 'paint', buffered: true });
  setTimeout(() => res(out), 1200);
})`;

const kb = (n) => (n / 1024).toFixed(0).padStart(4);
console.log(`profile=${profile}`);
console.log("route     | total  js   css  font  img  other | reqs | FCP    LCP     LCP element          CLS    longtasks(TBT-ish)");
for (const path of ["/", "/resume", "/work", "/contact"]) {
  reqs.clear();
  await c.send("Page.navigate", { url: BASE + path });
  await sleep(profile === "mobile" ? 9000 : 6500);
  const m = await c.evalJs(observe);
  const sum = { Script: 0, Stylesheet: 0, Font: 0, Image: 0, Other: 0 };
  let total = 0, n = 0;
  for (const r of reqs.values()) { if (!r.bytes) continue; total += r.bytes; n++; sum[sum[r.type] !== undefined ? r.type : "Other"] += r.bytes; }
  console.log(`${path.padEnd(9)} | ${kb(total)}K ${kb(sum.Script)}K ${kb(sum.Stylesheet)}K ${kb(sum.Font)}K ${kb(sum.Image)}K ${kb(sum.Other)}K | ${String(n).padStart(4)} | ${m.fcp.toFixed(0).padStart(5)}ms ${m.lcp.toFixed(0).padStart(6)}ms  ${m.lcpEl.padEnd(20)} ${m.cls.toFixed(3)}  ${m.long}(${m.longTotal.toFixed(0)}ms)`);
  if (process.argv[3] === "detail") for (const r of reqs.values()) if (r.type === "Font" || r.type === "Image") console.log(`     ${r.type} ${kb(r.bytes || 0)}K ${r.url.replace(BASE, "").slice(0, 90)}`);
}
await c.close();
