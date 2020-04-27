# Svelte SSR Test

Blocked: It works fine with a single svelte file, but breaks when you try to include a child component (uncomment in App.svelte to test) because of path issues. Even if I manually modify the path in the `generate-html.js` file it throws an error.

### Setup

Clone repo and `npm install`

### SSR

```
npm run ssr
```

Then run a local server in the `public` folder and navigate to `ssr.html`
