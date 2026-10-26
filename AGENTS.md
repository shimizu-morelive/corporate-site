# AGENTS.md

株式会社モアライブのコーポレートサイト（more-live.com）。Astro で作り、Void で Cloudflare Workers に載せる。パッケージ管理は Bun。サイトの持ち主は技術者ではないので、PR の説明はやさしい日本語で書く。

## コマンド

- `bun install`：依存を入れる
- `bun run dev`：手元で確認する（エージェントからは `bunx astro dev --background`、止めるときは `bunx astro dev stop`）
- `bun run lint`：書き方のチェック（Oxlint）
- `bun run check`：型のチェック
- `bun run build`：本番用にビルドする

PR を出す前に `lint`、`check`、`build` を通す。CI も同じものを動かす。Node は `.node-version` の版を使う（Void は 24.21 以上が必要）。

## 触ってよい場所

- 文章・画像の修正：`src/pages/` の各ページ、`public/` の画像

## 頼まれない限り触らない場所

- `src/pages/api/contact.ts`：問い合わせフォームのメール送信（Resend）
- `astro.config.mjs`、`void.config.ts`：ビルドとデプロイの設定。Worker 名と、問い合わせメールの送信元・送信先もここにある
- `.github/`：CI と Dependabot
- ドメインや DNS の設定（勤怠ツールなど別のサービスも同じドメインを使っている）。Void のメール機能は DNS を変えようとするので使わない

秘密の値（API キーなど）はコミットしない。`RESEND_API_KEY` は Cloudflare 側の Secret にある。

## 部品（依存関係）の更新を頼まれたとき

1. `bun outdated` で古いものを確認する
2. 同じメジャーバージョンの中の更新は、まとめて上げる
3. メジャーバージョンの更新は 1 つずつ、別の PR にする
4. `lint`、`check`、`build` が通らなければ、直すか、その更新を見送る
5. PR には、何を上げたかと、見た目や動きに変化があるかを書く
