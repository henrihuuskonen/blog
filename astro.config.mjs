import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.henrihuuskonen.dev",
  trailingSlash: "never",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-light"
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }), sitemap(), tailwind(), react()],
  output: "static",
  adapter: vercelStatic(
      {
        webAnalytics: {
          enabled: true,
        },
      }
  ),
  server: {
    port: 3000
  }
});