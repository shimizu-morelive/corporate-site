import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="logo" href="/" aria-label="株式会社モアライブ トップへ">株式会社モアライブ</Link>
      <nav className="nav" aria-label="メインナビゲーション">
        <Link href="/#about">ABOUT</Link>
        <Link href="/#service">SERVICE</Link>
        <Link href="/#contact">CONTACT</Link>
        <Link href="/#company">COMPANY</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <span>© 2026 株式会社モアライブ All Rights Reserved.</span>
      <a href="#top">ページ上部へ ↑</a>
    </footer>
  );
}
