# Steps to reproduce

1. Install dependencies with `pnpm i`
2. Start the development server with `pnpm dev`
3. Open http://localhost:5173 in your browser and notice the page freezing:

- Clicking the Bits-UI tabs does not work
- Clicking the link to /hello-world does not trigger client-side navigation, but does update the URL

5. Downgrade to Svelte 5.53.7 and notice that the issue is resolved. Might need to run `pnpm dedupe` after downgrading to ensure the correct version of Svelte is used.

# Findings

It seems like bits-ui is needed to reproduce this issue, as the problem does not occur when using simple custom components or native HTML elements.

Another interesting thing is that removing or changing the line src/routes/+page.svelte#L23 to not have the `bits-ui` component seems to fix the issue

# sv

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv@0.12.6 create --template minimal --types ts --add prettier eslint sveltekit-adapter="adapter:node" devtools-json --install pnpm ./svelte-5.53.8-mvce
```
