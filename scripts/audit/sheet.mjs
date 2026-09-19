import { launch, sleep } from "./cdp.mjs";
const c = await launch(); await c.viewport(390, 844, true); await c.goto("/", 3800);
const who = `(() => { const e=document.activeElement; if(!e||e===document.body) return 'body'; return e.tagName.toLowerCase()+' "'+(e.getAttribute('aria-label')||e.innerText||'').trim().slice(0,24)+'" inDialog='+!!e.closest('[role=dialog]'); })()`;
const step = async (label) => { await sleep(500); console.log(label.padEnd(34), await c.evalJs(who)); };
await c.tab(); await step("Tab 1 (skip link)");
await c.tab(); await step("Tab 2 (logo)");
await c.tab(); await step("Tab 3 (menu button)");
await c.key("Enter", "Enter", 13, 0, String.fromCharCode(13)); await sleep(700);
console.log("after Enter: dialog open =", await c.evalJs("!!document.querySelector('[role=dialog]')"));
await step("focus after open");
for (let i = 1; i <= 8; i++) { await c.tab(); await step(`Tab in sheet #${i}`); }
await c.key("Escape", "Escape", 27); await sleep(700);
console.log("after Escape: dialog open =", await c.evalJs("!!document.querySelector('[role=dialog]')"));
await step("focus after close");
await c.close();
