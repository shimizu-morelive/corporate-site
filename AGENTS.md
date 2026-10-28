# AGENTS.md

株式会社モアライブのコーポレートサイト（more-live.com）。Astro で作り、Void で Cloudflare Workers に載せる。パッケージ管理は Bun。サイトの持ち主は技術者ではないので、PR の説明はやさしい日本語で書く。

## コマンド

- `bun install`：依存を入れる
- `bun run dev`：手元で確認する（エージェントからは `bunx astro dev --background`、止めるときは `bunx astro dev stop`）
- `bun run lint`：書き方のチェック（Oxlint）
- `bun run check`：型のチェック
- `bun run build`：本番用にビルドする

PR を出す前に `lint`、`check`、`build` を通す。CI も同じものを動かす。Node は `.node-version` の版を使う（Void は 24.21 以上が必要）。文言や画像を変えたら、スマホ幅（390px）と PC 幅で表示も確かめる。

## 文章・画像の直し方

- 文言はすべて `src/content/` の YAML にある。トップと会社概要は `site.yaml`、サービスのページは `services/*.yaml`、TikTok Shop のページは `tiktok-shop.yaml`、プライバシーポリシーは `privacy.yaml`。ページのファイルは触らずに、ここだけ直す。
- 見出しの改行は自動で調整される。どうしても改行したい位置にだけ `\n` を入れる（その行は "..." で囲む）。
- 見出しでオレンジにする言葉は `site.yaml` の `hero.emphasis` に並べる。
- イラストは `src/assets/illustrations/`、アイコンは `src/assets/icons/` にある PNG。差し替えるときは同じ名前で置き換える。
- YAML の項目名を変えたり消したりすると、ビルドが止まる（`src/content.config.ts` で形を決めている）。止まったら、エラーに出た項目を元の形に戻す。

## 頼まれない限り触らない場所

- `src/pages/api/contact.ts`：問い合わせフォームのメール送信（Resend）。フォームの種別（`site.yaml` の `categories`）は、ここで受け付ける値と同じにしておく
- `src/pages/`、`src/components/`、`src/layouts/`、`src/styles/`：見た目と仕組み
- `astro.config.mjs`、`void.config.ts`：ビルドとデプロイの設定。Worker 名と、問い合わせメールの送信元・送信先もここにある
- `package.json` の `build` の `VOID_CLOUDFLARE_DEPLOY_BUILD=1`：本番は Cloudflare 側の Git 連携が main をビルドして公開している。これがないと Void がビルド後に wrangler の設定の目印（`.wrangler/deploy/config.json`）を消し、ふつうの `wrangler deploy` が失敗する
- `.github/`：CI と Dependabot
- ドメインや DNS の設定（勤怠ツールなど別のサービスも同じドメインを使っている）。Void のメール機能は DNS を変えようとするので使わない

秘密の値（API キーなど）はコミットしない。`RESEND_API_KEY` は Cloudflare 側の Secret にある。

## 部品（依存関係）の更新を頼まれたとき

1. `bun outdated` で古いものを確認する
2. 同じメジャーバージョンの中の更新は、まとめて上げる
3. メジャーバージョンの更新は 1 つずつ、別の PR にする
4. `lint`、`check`、`build` が通らなければ、直すか、その更新を見送る
5. PR には、何を上げたかと、見た目や動きに変化があるかを書く
