# 株式会社モアライブ コーポレートサイト

more-live.com のサイトです。Astro で作り、Void で Cloudflare Workers に載せています。

## 手元で動かす

[Bun](https://bun.sh) と、`.node-version` の Node.js（24.21 以上）が必要です。

```bash
bun install
bun run dev
```

問い合わせフォームを手元で試すときは、`.env` に `RESEND_API_KEY` を書きます（コミットしないでください）。

## 確認

```bash
bun run lint
bun run check
bun run build
```

GitHub に PR を出すと、CI が同じ確認を自動で行います。

## 構成

- `src/pages/`：ページ
- `src/pages/api/contact.ts`：問い合わせフォーム（Resend でメール送信）
- `public/`：画像など
- `astro.config.mjs`、`void.config.ts`：ビルドとデプロイの設定、問い合わせメールの送信元・送信先

`RESEND_API_KEY` は Cloudflare の Secret で管理しています。
