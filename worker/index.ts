/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

type ContactPayload = {
  category?: unknown;
  organization?: unknown;
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

const CONTACT_CATEGORIES = new Set([
  "メーカー・小売事業者",
  "ライブコマーサー",
  "その他",
]);

function readText(value: unknown, maximumLength: number): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  if (text.length > maximumLength) return null;
  return text;
}

function contactError(message: string, status: number): Response {
  return Response.json({ ok: false, message }, { status });
}

async function handleContactRequest(request: Request, env: Env): Promise<Response> {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("Origin");
  if (origin && origin !== requestUrl.origin) {
    return contactError("不正なリクエストです。", 403);
  }

  if (!request.headers.get("Content-Type")?.includes("application/json")) {
    return contactError("送信形式が正しくありません。", 415);
  }

  let payload: ContactPayload;
  try {
    payload = await request.json<ContactPayload>();
  } catch {
    return contactError("入力内容を読み取れませんでした。", 400);
  }

  // Invisible honeypot: regular visitors never fill this field.
  if (readText(payload.website, 200)) {
    return Response.json({ ok: true });
  }

  const category = readText(payload.category, 50);
  const organization = readText(payload.organization, 120);
  const name = readText(payload.name, 80);
  const email = readText(payload.email, 254);
  const message = readText(payload.message, 4000);

  if (
    !category ||
    !CONTACT_CATEGORIES.has(category) ||
    organization === null ||
    !name ||
    !email ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !message
  ) {
    return contactError("入力内容を確認してください。", 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_FROM_EMAIL || !env.CONTACT_TO_EMAIL) {
    console.error("Contact email environment variables are not configured.");
    return contactError("現在、送信機能を準備中です。恐れ入りますが、メールでお問い合わせください。", 503);
  }

  const subject = `【Webサイトお問い合わせ】${category}`;
  const text = [
    `お問い合わせ種別：${category}`,
    `会社名・活動名：${organization || "未入力"}`,
    `お名前：${name}`,
    `メールアドレス：${email}`,
    "",
    "お問い合わせ内容：",
    message,
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!resendResponse.ok) {
    const responseText = await resendResponse.text();
    console.error("Resend rejected a contact email:", resendResponse.status, responseText);
    return contactError("送信に失敗しました。時間をおいて再度お試しください。", 502);
  }

  return Response.json({ ok: true });
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response(null, { status: 405, headers: { Allow: "POST" } });
      }
      return handleContactRequest(request, env);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
