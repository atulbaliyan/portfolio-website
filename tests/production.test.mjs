import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
const html = readFileSync("dist/index.html", "utf8");
const js = readdirSync("dist/assets")
  .filter((x) => x.endsWith(".js"))
  .map((x) => readFileSync(`dist/assets/${x}`, "utf8"))
  .join("");
test("built entry points resolve beneath the GitHub Pages project path", () => {
  const urls = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((x) => x.startsWith("/"));
  assert.ok(urls.length >= 3);
  for (const url of urls) {
    assert.ok(url.startsWith("/portfolio-website/"), url);
    assert.ok(
      existsSync(`dist/${url.slice("/portfolio-website/".length)}`),
      url,
    );
  }
});
test("all required project destinations survive the production bundle", () => {
  for (const url of [
    "https://github.com/atulbaliyan/WallpaperHub",
    "https://github.com/atulbaliyan/PDFMaster",
    "https://github.com/atulbaliyan/handwritten-equation-solver",
    "https://play.google.com/store/apps/details?id=com.baliyan_2004.WallpaperHub",
  ])
    assert.ok(js.includes(url), url);
});
test("resume and portrait are intact and bundled", () => {
  for (const path of [
    "resume/Atul_Baliyan_Resume.pdf",
    "assets/atul-portrait.webp",
  ])
    assert.deepEqual(
      readFileSync(`public/${path}`),
      readFileSync(`dist/${path}`),
    );
  assert.equal(
    readFileSync("dist/resume/Atul_Baliyan_Resume.pdf")
      .subarray(0, 4)
      .toString(),
    "%PDF",
  );
  assert.ok(js.includes("/portfolio-website/"));
});
test("navigation destinations exist and no placeholder href is shipped", () => {
  const source = [
    "src/components/Background.tsx",
    "src/components/Work.tsx",
    "src/components/Contact.tsx",
  ]
    .map((x) => readFileSync(x, "utf8"))
    .join("");
  for (const id of ["about", "work", "toolbox", "experience", "contact"])
    assert.match(source, new RegExp(`id=["']${id}["']`));
  for (const file of readdirSync("src/components"))
    assert.doesNotMatch(
      readFileSync(`src/components/${file}`, "utf8"),
      /href=["']#["']/,
    );
});
