import { launch } from "./cdp.mjs";
const c = await launch();
const routes = { home: "/", resume: "/resume", work: "/work", contact: "/contact" };
for (const [name, path] of Object.entries(routes)) {
  for (const w of [320, 390, 768, 1024, 1440]) {
    await c.viewport(w, w < 768 ? 800 : 900, w < 768);
    await c.goto(path, 3800);
    await c.shot(`shot_${name}_${w}.png`);
  }
}
await c.close();
