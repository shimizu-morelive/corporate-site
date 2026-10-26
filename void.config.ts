import { defineConfig } from "void/config";

export default defineConfig({
  cloudflare: {
    // Same Worker name as the current site, so the existing RESEND_API_KEY
    // secret and the more-live.com custom domain stay attached on deploy.
    name: "more-live-corporate-site",
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
