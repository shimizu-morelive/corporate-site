import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const link = z.object({ label: z.string(), href: z.string() });
const titled = z.object({ title: z.string(), text: z.string() });
const stepIcon = z.enum(["product", "plan", "creator", "live", "purchase", "analysis"]);

const site = defineCollection({
  loader: file("src/content/site.yaml"),
  schema: ({ image }) =>
    z.object({
      meta: z.object({ title: z.string(), description: z.string() }),
      companyName: z.string(),
      menuLabel: z.string(),
      nav: z.array(link),
      hero: z.object({
        brand: z.string(),
        title: z.string(),
        emphasis: z.array(z.string()),
        about: z.string(),
        messages: z.array(z.object({ lead: z.string(), text: z.string(), link, comments: z.array(z.string()) })),
      }),
      about: z.object({
        eyebrow: z.string(),
        title: z.string(),
        lead: z.string(),
        body: z.string(),
        conclusion: z.string(),
        image: image(),
        tiktok: z.object({ eyebrow: z.string(), title: z.string(), text: z.string(), more: z.string(), points: z.array(z.string()) }),
      }),
      service: z.object({ eyebrow: z.string(), title: z.string(), intro: z.string(), more: z.string() }),
      serviceDetail: z.object({ back: z.string(), numberPrefix: z.string(), stepPrefix: z.string(), tiktok: z.string() }),
      contact: z.object({
        eyebrow: z.string(),
        title: z.string(),
        invitation: z.string(),
        lead: z.string(),
        description: z.string(),
        closing: z.string(),
        email: z.string(),
        form: z.object({
          categoryLabel: z.string(),
          categoryPlaceholder: z.string(),
          categories: z.array(z.string()),
          organizationLabel: z.string(),
          nameLabel: z.string(),
          emailLabel: z.string(),
          messageLabel: z.string(),
          required: z.string(),
          consent: z.string(),
          submit: z.string(),
          sending: z.string(),
          success: z.string(),
          failure: z.string(),
          note: z.string(),
          privacy: z.string(),
          privacyLabel: z.string(),
          categoryHints: z.array(z.string()),
          errors: z.object({
            category: z.string(),
            name: z.string(),
            email: z.string(),
            emailFormat: z.string(),
            message: z.string(),
            consent: z.string(),
            summary: z.string(),
          }),
          mailFallback: z.string(),
          noscript: z.string(),
          done: z.string(),
          again: z.string(),
        }),
      }),
      company: z.object({
        eyebrow: z.string(),
        title: z.string(),
        rows: z.array(z.object({ term: z.string(), lines: z.array(z.string()), email: z.boolean().optional() })),
      }),
      footer: z.object({ copyright: z.string(), privacy: z.string(), toTop: z.string() }),
    }),
});

const services = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/content/services" }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      meta: z.object({ title: z.string(), description: z.string() }),
      card: z.object({ title: z.string(), text: z.string() }),
      number: z.string(),
      label: z.string(),
      title: z.string(),
      lead: z.string(),
      image: image(),
      imageCaption: z.string(),
      stat: z.object({ eyebrow: z.string(), value: z.string(), label: z.string(), text: z.string() }).optional(),
      intro: z.object({ eyebrow: z.string(), title: z.string(), descriptions: z.array(z.string()) }),
      journey: z
        .object({
          eyebrow: z.string(),
          title: z.string(),
          text: z.string(),
          steps: z.array(
            z.object({
              title: z.string(),
              icon: stepIcon,
              summary: z.string(),
              points: z.array(z.string()),
            }),
          ),
        })
        .optional(),
      features: z.object({
        eyebrow: z.string(),
        title: z.string(),
        items: z.array(titled),
      }),
      flow: z.object({ eyebrow: z.string(), title: z.string(), steps: z.array(titled) }).optional(),
      comingSoon: z
        .object({ eyebrow: z.string(), title: z.string(), text: z.string(), items: z.array(z.string()), badge: z.string() })
        .optional(),
      cta: z.object({
        eyebrow: z.string(),
        title: z.string(),
        text: z.string(),
        label: z.string(),
        type: z.enum(["maker", "creator"]),
      }),
    }),
});

const tiktokShop = defineCollection({
  loader: file("src/content/tiktok-shop.yaml"),
  schema: ({ image }) =>
    z.object({
      meta: z.object({ title: z.string(), description: z.string() }),
      breadcrumb: z.object({ name: z.string(), home: z.string(), label: z.string() }),
      word: z.string(),
      title: z.string(),
      lead: z.string(),
      image: image(),
      imageCaption: z.string(),
      stat: z.object({ eyebrow: z.string(), value: z.string(), label: z.string(), text: z.string() }),
      intro: z.object({ eyebrow: z.string(), title: z.string(), descriptions: z.array(z.string()) }),
      ways: z.object({
        eyebrow: z.string(),
        title: z.string(),
        text: z.string(),
        items: z.array(z.object({ title: z.string(), icon: stepIcon, summary: z.string(), points: z.array(z.string()) })),
      }),
      audiences: z.object({
        eyebrow: z.string(),
        title: z.string(),
        items: z.array(z.object({ label: z.string(), title: z.string(), text: z.string(), points: z.array(z.string()) })),
      }),
      support: z.object({ eyebrow: z.string(), title: z.string() }),
      faq: z.object({ eyebrow: z.string(), title: z.string(), items: z.array(z.object({ q: z.string(), a: z.string() })) }),
      cta: z.object({ eyebrow: z.string(), title: z.string(), text: z.string(), label: z.string() }),
    }),
});

const privacy = defineCollection({
  loader: file("src/content/privacy.yaml"),
  schema: z.object({
    meta: z.object({ title: z.string(), description: z.string() }),
    eyebrow: z.string(),
    title: z.string(),
    lead: z.string(),
    updated: z.string(),
    sections: z.array(
      z.object({ heading: z.string(), body: z.array(z.string()), items: z.array(z.string()).optional(), links: z.array(link).optional() }),
    ),
  }),
});

export const collections = { site, services, tiktokShop, privacy };
