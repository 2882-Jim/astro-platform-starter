import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Fully static site: deploys to Cloudflare Pages, Netlify or any static host.
export default defineConfig({
    site: 'https://mcass.uk',
    output: 'static',
    integrations: [tailwind({ applyBaseStyles: false })]
});
