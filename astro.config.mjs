// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://enje.li',
	base: '/',
	integrations: [mdx(
	{
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }
	), sitemap()],
});
