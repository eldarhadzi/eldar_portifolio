// Responsive audit: 4 routes x 5 widths. Reports horizontal overflow, offenders, undersized targets, page height.
import { launch } from "./cdp.mjs";

const routes = ["/", "/resume", "/work", "/contact"];
const widths = [320, 390, 768, 1024, 1440];
const c = await launch();
const rows = [];
for (const path of routes) {
  for (const w of widths) {
    await c.viewport(w, 900);
    await c.goto(path, 3800);
    const r = await c.evalJs(`(() => {
      const d = document.documentElement, vw = d.clientWidth;
      const off = [...document.querySelectorAll('body *')].filter(e => { const b = e.getBoundingClientRect(); return b.width > 0 && (b.right > vw + 1 || b.left < -1); })
        .filter(e => !e.closest('[aria-hidden="true"]') && getComputedStyle(e).position !== 'fixed')
        .slice(0, 4).map(e => e.tagName.toLowerCase() + '.' + String(e.className).split(' ').slice(0,3).join('.') + ' r=' + Math.round(e.getBoundingClientRect().right));
      const small = [...document.querySelectorAll('main a, main button, header a, header button, main input, main textarea')]
        .filter(e => { const b = e.getBoundingClientRect(); return b.width > 0 && e.tabIndex >= 0 && (b.height < 44 || b.width < 44) && getComputedStyle(e).visibility !== 'hidden'; })
        .map(e => (e.getAttribute('aria-label') || e.textContent.trim() || e.name || e.tagName).slice(0, 24) + ' ' + Math.round(e.getBoundingClientRect().width) + 'x' + Math.round(e.getBoundingClientRect().height));
      return { overflow: d.scrollWidth > vw, sw: d.scrollWidth, cw: vw, height: d.scrollHeight, off, small };
    })()`);
    rows.push({ path, w, ...r });
    console.log(`${path.padEnd(8)} ${String(w).padStart(4)}  overflow=${r.overflow ? "YES" : "no "} sw=${r.sw}/${r.cw} h=${r.height}  ${r.off.length ? "OFF: " + r.off.join(" | ") : ""}${r.small.length ? "  SMALL: " + r.small.join(", ") : ""}`);
  }
}
await c.close();
