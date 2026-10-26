import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

const CATEGORIES = new Set(["メーカー・小売事業者", "ライブコマーサー", "その他"]);

function readText(value: unknown, maximumLength: number): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  return text.length > maximumLength ? null : text;
}

function error(message: string, status: number): Response {
  return Response.json({ ok: false, message }, { status });
}

export const POST: APIRoute = async ({ request, url }) => {
  const origin = request.headers.get("Origin");
  if (origin && origin !== url.origin) return error("不正なリクエストです。", 403);

  if (!request.headers.get("Content-Type")?.includes("application/json")) {
    return error("送信形式が正しくありません。", 415);
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return error("入力内容を読み取れませんでした。", 400);
  }

  // Invisible honeypot: regular visitors never fill this field.
  if (readText(payload.website, 200)) return Response.json({ ok: true });

  const category = readText(payload.category, 50);
  const organization = readText(payload.organization, 120);
  const name = readText(payload.name, 80);
  const email = readText(payload.email, 254);
  const message = readText(payload.message, 4000);

  if (
    !category ||
    !CATEGORIES.has(category) ||
    organization === null ||
    !name ||
    !email ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !message
  ) {
    return error("入力内容を確認してください。", 400);
  }

  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = env as Record<string, string | undefined>;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error("Contact email environment variables are not configured.");
    return error("現在、送信機能を準備中です。恐れ入りますが、メールでお問い合わせください。", 503);
  }

  const text = [
    `お問い合わせ種別：${category}`,
    `会社名・活動名：${organization || "未入力"}`,
    `お名前：${name}`,
    `メールアドレス：${email}`,
    "",
    "お問い合わせ内容：",
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `【Webサイトお問い合わせ】${category}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend rejected a contact email:", res.status, await res.text());
    return error("送信に失敗しました。時間をおいて再度お試しください。", 502);
  }

  return Response.json({ ok: true });
};
