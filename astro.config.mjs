import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // ⬅️ ADD THIS

export default defineConfig({
  site: 'https://njtowtruckservice.com', // ⬅️ REQUIRED FOR SITEMAP

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap() // ⬅️ ADD THIS
  ],

  adapter: netlify({
    devFeatures: {
      environmentVariables: true
    }
  })
});
