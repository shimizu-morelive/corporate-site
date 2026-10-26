import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import { voidPlugin } from "void";

export default defineConfig({
  site: "https://more-live.com",
  // Optimize images at build time so the Worker needs no Images binding.
  adapter: cloudflare({ configPath: "./.void-wrangler.jsonc", imageService: "compile" }),
  vite: { plugins: [voidPlugin()] },
});
