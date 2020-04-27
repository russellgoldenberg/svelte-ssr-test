const fs = require("fs");
const { compile } = require("svelte/compiler");

const source = fs.readFileSync("./src/App.svelte", "utf8");

const { js } = compile(source, {
  format: "cjs",
  generate: "ssr",
  hydratable: true,
});

fs.writeFileSync("./generate-html.js", js.code);
