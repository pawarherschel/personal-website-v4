import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import swup from '@swup/astro';
import Compress from 'astro-compress';
import icon from 'astro-icon';
import {defineConfig} from 'astro/config';
import Color from 'colorjs.io';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCitation from 'rehype-citation';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import smartypants from 'remark-smartypants';
import {remarkReadingTime} from './src/plugins/remark-reading-time.mjs';

const oklchToHex = str => {
  const DEFAULT_HUE = 250;
  const regex = /-?\d+(\.\d+)?/g;
  const matches = str.string.match(regex);
  const lch = [matches[0], matches[1], DEFAULT_HUE];
  return new Color('oklch', lch).to('srgb').toString({
    format: 'hex',
  });
};

// https://astro.build/config
export default defineConfig({
  site: 'https://sakurakat.systems/',
  base: '/',
  integrations: [
    tailwind(),
    swup({
      theme: false,
      animationClass: 'transition-',
      containers: ['main'],
      smoothScrolling: true,
      cache: true,
      preload: true,
      accessibility: true,
      globalInstance: true,
    }),
    icon({
      include: {
        'material-symbols': ['*'],
        'fa6-brands': ['*'],
        'fa6-regular': ['*'],
        'fa6-solid': ['*'],
      },
    }),
    Compress({
      Image: false,
    }),
    svelte(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime, smartypants, remarkGfm],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['anchor-icon'],
              'data-pagefind-ignore': true,
            },
            children: [
              {
                type: 'text',
                value: '#',
              },
            ],
          },
        },
      ],
      [
        rehypeCitation,
        {
          bibliography: 'bibliography.bib',
          linkCitations: true,
        },
      ],
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          define: {
            oklchToHex: oklchToHex,
          },
        },
      },
    },
  },
});
