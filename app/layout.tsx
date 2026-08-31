import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TikTok Shop ライブコマース運営・販売支援 | 株式会社モアライブ",
  description: "TikTok Shopを通じて、メーカー・小売事業者、消費者、ライブコマーサーをつなぐ株式会社モアライブのコーポレートサイトです。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.variable}>{children}</body>
    </html>
  );
}
