import adapter from '@sveltejs/adapter-cloudflare';
import { svelteMarkdown } from '@hypernym/svelte-markdown';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  extensions: ['.svelte', '.md'],
  preprocess: [svelteMarkdown()],
};

export default config;
