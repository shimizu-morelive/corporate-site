"use client";

import { FormEvent, useState } from "react";

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "sending"; message: "" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const category = String(form.get("category") ?? "");
    const organization = String(form.get("organization") ?? "");
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const website = String(form.get("website") ?? "");

    setSubmitState({ status: "sending", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, organization, name, email, message, website }),
      });
      const result = await response.json().catch(() => null) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "送信に失敗しました。時間をおいて再度お試しください。");
      }

      formElement.reset();
      setSubmitState({ status: "success", message: "お問い合わせを送信しました。内容を確認のうえ、ご連絡します。" });
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error instanceof Error ? error.message : "送信に失敗しました。時間をおいて再度お試しください。",
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>お問い合わせ種別 <em>必須</em></span>
        <select name="category" defaultValue="" required>
          <option value="" disabled>選択してください</option>
          <option>メーカー・小売事業者</option>
          <option>ライブコマーサー</option>
          <option>その他</option>
        </select>
      </label>
      <label>
        <span>会社名・活動名</span>
        <input name="organization" autoComplete="organization" />
      </label>
      <label>
        <span>お名前 <em>必須</em></span>
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        <span>メールアドレス <em>必須</em></span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>お問い合わせ内容 <em>必須</em></span>
        <textarea name="message" rows={6} required></textarea>
      </label>
      <label className="contact-honeypot" aria-hidden="true">
        <span>ウェブサイト</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent">
        <input type="checkbox" required />
        <span>入力内容を確認し、送信することに同意します。</span>
      </label>
      <button type="submit" disabled={submitState.status === "sending"}>
        <span>{submitState.status === "sending" ? "送信しています…" : "お問い合わせを送信する"}</span>
        <span aria-hidden="true">→</span>
      </button>
      {submitState.status === "success" && <p className="form-status is-success" role="status">{submitState.message}</p>}
      {submitState.status === "error" && <p className="form-status is-error" role="alert">{submitState.message}</p>}
      <p className="form-note">送信された内容は、お問い合わせへの対応にのみ使用します。</p>
    </form>
  );
}
