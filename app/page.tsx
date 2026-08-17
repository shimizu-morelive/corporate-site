import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contact-form";
import { SiteFooter, SiteHeader } from "./site-chrome";

const services = [
  {
    number: "01",
    title: "ライブコマース\nチャンネル運営",
    text: "モアライブが主体となり、商品を継続的に紹介・販売するライブコマースチャンネルを運営します。",
    href: "/service/channel-operation",
    image: "/service-channel-operation.png",
    imageAlt: "ライブコマース配信を行うコマーサーと運営スタッフ",
  },
  {
    number: "02",
    title: "委託販売・\n販売支援",
    text: "メーカー・小売事業者の商品や課題に合わせ、委託販売とライブコマース活用を支援します。",
    href: "/service/sales-support",
    image: "/service-sales-support.png",
    imageAlt: "ライブ配信で商品を紹介するコマーサー",
  },
  {
    number: "03",
    title: "ライブコマーサー\nマネジメント",
    text: "ライブコマーサーに商品・案件・配信環境・報酬機会・成長機会を提供します。",
    href: "/service/creator-management",
    image: "/service-creator-management.png",
    imageAlt: "スタッフと一緒に配信準備をするライブコマーサー",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>More<br />Live <span>!!!</span></h1>
          <div className="hero-statement">
            <p className="hero-about">モアライブは、TikTok Shopを通じて、<br />メーカー・小売事業者、消費者、ライブコマーサーをつなぐ会社です。</p>
            <div className="hero-message">
              <p><span>メーカーには、</span>新しい販売チャネルを。</p>
              <p><span>消費者には、</span>楽しい購買体験を。</p>
              <p><span>ライブコマーサーには、</span>売れる商品と活躍できる場所を。</p>
            </div>
          </div>
        </div>
        <div className="hero-side">
          <Image src="/hero-live-commerce.png" width={1566} height={1005} priority sizes="(max-width: 820px) 100vw, 56vw" alt="スマートフォンを使って化粧品を紹介するライブコマーサー" />
          <div className="hero-links">
            <Link href="/service/sales-support"><span>メーカー・小売事業者の方へ</span><span aria-hidden="true">→</span></Link>
            <Link href="/service/creator-management"><span>ライブコマーサーの方へ</span><span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <div className="about-visual">
          <Image src="/about-live-commerce.png" width={1536} height={1024} sizes="(max-width: 820px) 100vw, 44vw" alt="商品を紹介しながらライブ配信を行うライブコマーサー" />
        </div>
        <div className="about-copy">
          <div className="section-heading align-left">
            <p className="eyebrow">ABOUT US</p>
            <h2 id="about-title">私たちについて</h2>
          </div>
          <h3>TikTok Shopから、<br />ライブコマースをもっと身近に。</h3>
          <p>モアライブは、TikTok Shopを中心に、ライブ配信とショート動画を活用した販売支援を行っています。商品やブランドの理解から、企画、キャスティング、集客、配信、販売、改善までを一貫して支援します。</p>
          <p className="about-conclusion">TikTok Shopを、一時的な販路ではなく、<br />継続して育つ販売チャネルへ。</p>
        </div>
      </section>

      <section className="service section" id="service" aria-labelledby="service-title">
        <div className="section-heading service-heading">
          <div>
            <p className="eyebrow">SERVICE</p>
            <h2 id="service-title">事業内容</h2>
          </div>
          <p className="section-intro">ライブコマースを、継続して売れる販売チャネルへ。<br />3つの事業を通じて、商品と人が出会う仕組みをつくります。</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link className="service-card" href={service.href} key={service.number}>
              <div className="service-card-visual">
                <Image src={service.image} width={1536} height={1024} sizes="(max-width: 820px) 100vw, 33vw" alt={service.imageAlt} />
                <span className="service-number">{service.number}</span>
              </div>
              <div className="service-card-body">
                <h3>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p>{service.text}</p>
                <span className="service-more">詳しく見る <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-section section" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="eyebrow">CONTACT</p>
          <h2 id="contact-title">お問い合わせ</h2>
          <h3 className="contact-invitation-title">TikTok Shopを、<br />一緒に盛り上げませんか。</h3>
          <p className="contact-lead">モアライブは、TikTok Shopを一緒に盛り上げてくれるパートナーを探しています。</p>
          <p className="contact-description">商品やブランドの新しい販売方法を探している方、ライブコマースを仕事にしたい方、新しい企画に取り組みたい方。まだ具体的な相談内容が固まっていなくても構いません。</p>
          <ul className="contact-audiences">
            <li><span>01</span>商品を販売したいメーカー・小売事業者</li>
            <li><span>02</span>ライブコマーサーとして活動したい方</li>
            <li><span>03</span>企画・協業について相談したい方</li>
          </ul>
          <p className="contact-closing">まずは、今考えていることをお聞かせください。</p>
          <a className="contact-mail" href="mailto:info@more-live.com">info@more-live.com</a>
        </div>
        <ContactForm />
      </section>

      <section className="information" id="company" aria-labelledby="company-title">
        <div className="company-panel">
          <div className="section-heading align-left">
            <p className="eyebrow">COMPANY</p>
            <h2 id="company-title">会社概要</h2>
          </div>
          <div className="company-layout">
            <dl>
              <div><dt>会社名</dt><dd>株式会社モアライブ</dd></div>
              <div><dt>所在地</dt><dd>〒104-0053 東京都中央区晴海5-6-7 PARK-T-3013</dd></div>
              <div><dt>代表取締役</dt><dd>清水 美希</dd></div>
              <div><dt>設立</dt><dd>2026年</dd></div>
              <div><dt>事業内容</dt><dd>ライブコマースチャンネルの企画・運営<br />商品の委託販売・販売支援<br />ライブコマーサーのマネジメント</dd></div>
              <div><dt>お問い合わせ</dt><dd><a href="mailto:info@more-live.com">info@more-live.com</a></dd></div>
            </dl>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
