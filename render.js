const fs = require("fs");
const replace = require("replace-in-file");
const component = require("./generate-html.js").default;

const { head, css, html } = component.render({});

const index = fs.readFileSync("./public/index.html", "utf8");
fs.writeFileSync("./public/ssr.html", index);

replace({
  files: "./public/ssr.html",
  from: "<main></main>",
  to: `<main>${html}</main>`,
})
  .then(process.exit)
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
