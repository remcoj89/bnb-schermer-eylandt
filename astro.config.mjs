// @ts-check
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["nl", "en", "fr", "de"],
    defaultLocale: "nl",
  },

  integrations: [react()],
});