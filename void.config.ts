import { defineConfig } from "void/config";

export default defineConfig({
  cloudflare: {
    // The Worker that Cloudflare's Git build deploys main to (its check runs
    // name it), so the RESEND_API_KEY secret and the more-live.com custom
    // domain stay attached. The old package.json name was not the Worker name.
    name: "corporate-site",
    compatibility_date: "2026-10-01",
    compatibility_flags: ["nodejs_als", "nodejs_compat"],
    // Secrets are managed in the Cloudflare dashboard; never wipe them on deploy.
    keep_vars: true,
    vars: {
      CONTACT_FROM_EMAIL: "More Live Web <website@send.more-live.com>",
      CONTACT_TO_EMAIL: "info@more-live.com",
    },
  },
});
