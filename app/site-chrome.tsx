/* eslint-disable @next/next/no-html-link-for-pages -- vinext production router currently breaks client-side Link navigation. */

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="logo" href="/" aria-label="株式会社モアライブ トップへ">株式会社モアライブ</a>
      <nav className="nav" aria-label="メインナビゲーション">
        <a href="/#about">ABOUT</a>
        <a href="/#service">SERVICE</a>
        <a href="/#contact">CONTACT</a>
        <a href="/#company">COMPANY</a>
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
