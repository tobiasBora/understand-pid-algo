import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from 'remark-math'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      remarkPlugins: [
        remarkMath,
      ],
      rehypePlugins: [
        rehypeKatexSvelte,
      ],
      extensions: ['.svx', '.md'],
      layout: "./src/components/markdown_layout.svelte",
    })
  ],

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter()
  },

  extensions: [".svelte", ".svx"]
};

export default config;
