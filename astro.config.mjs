import cloudflare from "@astrojs/cloudflare";
import { defineConfig, fontProviders } from "astro/config";
import { voidPlugin } from "void";

export default defineConfig({
  site: "https://more-live.com",
  // Pages build to service/foo.html so URLs stay as on the old site, without a
  // trailing slash (directory output makes /service/foo redirect to /service/foo/).
  build: { format: "file" },
  // Optimize images at build time so the Worker needs no Images binding.
  adapter: cloudflare({ configPath: "./.void-wrangler.jsonc", imageService: "compile" }),
  vite: { plugins: [voidPlugin()] },
  fonts: [
    {
      // Self-hosted and split by unicode-range, so a page only downloads the
      // Japanese glyph slices it actually uses.
      provider: fontProviders.google(),
      name: "M PLUS 1",
      cssVariable: "--font-jp",
      // One variable-font range instead of three weights: the files are the
      // same, and separate weights triple the @font-face CSS in every page.
      weights: ["400 900"],
      fallbacks: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic Medium", "Meiryo", "sans-serif"],
      // The generated metric fallback scales Arial to the width of Japanese
      // glyphs, so Latin text renders about twice as large until the font loads.
      optimizedFallbacks: false,
    },
    {
      provider: fontProviders.google(),
      name: "Archivo",
      cssVariable: "--font-en",
      weights: ["500 800"],
      styles: ["normal"],
      // Only the extended width is used, so the width axis is pinned at 125
      // and every --font-en text is wide without setting font-stretch.
      options: { experimental: { variableAxis: { wdth: [["125", "125"]] } } },
      subsets: ["latin"],
      fallbacks: ["Helvetica Neue", "Arial", "sans-serif"],
    },
  ],
});
