import App from "./App.svelte";

const app = new App({
  target: document.querySelector("main"),
  hydrate: true,
});

export default app;