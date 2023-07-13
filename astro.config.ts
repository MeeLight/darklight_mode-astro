// Base
import type { AstroUserConfig } from 'astro/config'
import { defineConfig } from 'astro/config'

// Integrations
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'

const astroConfig: AstroUserConfig = {
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true
    }),
    compress()
  ],
  output: 'static',
  compressHTML: true,
  trailingSlash: 'ignore',
  server: {
    host: true,
    port: 8080
  }
}

export default defineConfig(astroConfig)
