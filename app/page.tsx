const services = [
  {
    number: "01",
    title: "ライブコマース\nチャンネル運営",
    text: "配信企画、キャスティング、集客、販売、改善まで一貫して行い、継続的な販売チャネルを構築します。",
  },
  {
    number: "02",
    title: "委託販売・\n販売支援",
    text: "商品やブランドの背景を理解し、ライブコマースを中心に、その魅力が伝わる販売方法を設計します。",
  },
  {
    number: "03",
    title: "ライブコマーサー\nマネジメント",
    text: "商品・案件・集客・配信環境・報酬機会を提供し、長く活躍できる環境とキャリアを支えます。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="株式会社モアライブ トップへ">株式会社モアライブ</a>
        <nav className="nav" aria-label="メインナビゲーション">
          <a href="#about">ABOUT</a>
          <a href="#service">SERVICE</a>
          <a href="#contact">CONTACT</a>
          <a href="#company">COMPANY</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>More<br />Live <span>!!!</span></h1>
          <div className="hero-message">
            <p>メーカーには、新しい販売チャネルを。</p>
            <p>消費者には、楽しい購買体験を。</p>
            <p>ライブコマーサーには、売れる商品と活躍できる場所を。</p>
          </div>
          <p className="hero-about">モアライブは、ライブコマースを通じて、<br />メーカー・小売事業者、消費者、ライブコマーサーをつなぐ会社です。</p>
        </div>
        <div className="hero-side">
          <img src="/hero-live-commerce.png" alt="スマートフォンを使って化粧品を紹介するライブコマーサー" />
          <div className="hero-links">
            <a href="#contact"><span>メーカー・小売事業者の方へ</span><span aria-hidden="true">→</span></a>
            <a href="#creators"><span>ライブコマーサーの方へ</span><span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="what-we-create" aria-labelledby="create-title">
        <div className="create-heading">
          <p id="create-title">WHAT WE CREATE</p>
          <h2>ライブコマースを、新しい<br />「売り方」と「働き方」へ。</h2>
        </div>
        <div className="create-list">
          <div><span>01</span><p>商品を必要としている人へ届ける。</p></div>
          <div><span>02</span><p>ライブだから生まれる購買体験をつくる。</p></div>
          <div><span>03</span><p>コマーサーが長く活躍できる環境をつくる。</p></div>
        </div>
      </section>

      <section className="service section" id="service" aria-labelledby="service-title">
        <div className="section-heading">
          <h2 id="service-title">SERVICE</h2>
          <p>モアライブの事業内容</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon" aria-hidden="true"></div>
              <h3>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <div className="about-visual">
          <img src="/about-live-commerce.png" alt="商品を紹介しながらライブ配信を行うライブコマーサー" />
        </div>
        <div className="about-copy">
          <div className="section-heading align-left">
            <h2 id="about-title">ABOUT</h2>
          </div>
          <h3>ライブコマースを、もっと大きな市場へ。</h3>
          <p>ライブコマースでは、商品の特徴をリアルタイムで知り、質問し、実際に使用する様子を見ながら購入できます。そこには、従来のECにはなかった「人」を中心とした購買体験があります。</p>
          <p>モアライブは、良い商品と、それを伝える人と、それを求める人が出会う場所をつくり、ライブコマースを新しい購買文化として広げていきます。</p>
        </div>
      </section>

      <section className="contact-group" id="contact" aria-labelledby="contact-heading">
        <div className="contact-group-heading section-heading">
          <h2 id="contact-heading">CONTACT</h2>
          <p>メーカー・小売事業者さま、ライブコマーサーの方へ</p>
          <div className="contact-invitation">
            <p className="contact-lead">一緒に、ライブコマースの可能性を広げませんか。</p>
            <p className="contact-note">モアライブでは、商品をもっと多くの人に届けたいメーカー・小売事業者の方、売る力を仕事にしたいライブコマーサーの方をパートナーとして募集しています。まだ具体的な計画がなくても構いません。まずは気軽にお話しください。</p>
          </div>
        </div>

      <div className="business-contact" aria-labelledby="business-contact-title">
        <div className="business-header">
          <p className="business-label">FOR MANUFACTURERS &amp; RETAILERS</p>
          <div className="business-intro">
            <div>
              <h3 id="business-contact-title">大切な商品を、<br />もっと多くの人へ。</h3>
            </div>
            <div className="business-copy">
              <p className="business-belief">モアライブは、商品を預かるのではなく、<strong>その魅力まで預かる。</strong></p>
              <p>商品そのものの魅力や、ブランドに込められた想いを理解したうえで、ライブコマースを通じた新しい販売機会をつくります。</p>
            </div>
          </div>
        </div>

        <div className="business-needs" aria-label="ご相談いただける内容">
          <article><span>01</span><p>ライブコマースで<br />販売してみたい</p></article>
          <article><span>02</span><p>新しい販売チャネルを<br />開拓したい</p></article>
          <article><span>03</span><p>既存商品の売上を<br />さらに伸ばしたい</p></article>
          <article><span>04</span><p>在庫商品の新たな<br />販路をつくりたい</p></article>
        </div>

        <div className="business-support">
          <p className="support-title">モアライブが提供すること</p>
          <div className="support-list">
            <article><h4>商品の理解</h4><p>商品の特徴、つくり手の想い、ブランドの背景まで丁寧に理解します。</p></article>
            <article><h4>販売方法の設計</h4><p>商品や事業者さまの状況に合わせて、配信企画と伝え方を設計します。</p></article>
            <article><h4>販売と継続改善</h4><p>キャスティング、集客、販売、配信後の改善まで一貫して支援します。</p></article>
          </div>
        </div>

        <div className="business-cta">
          <p><strong>商品や販売条件が、まだ固まっていなくても問題ありません。</strong><br />取り扱い方法や販売の可能性から、一緒に検討します。</p>
          <a href="mailto:info@more-live.com"><span>商品・販売について相談する</span><span aria-hidden="true">→</span></a>
        </div>
      </div>

      <div className="creators" id="creators" aria-labelledby="creators-title">
        <div className="creators-header">
          <p className="creators-label">FOR COMMERCE CREATORS</p>
          <div className="creators-intro">
            <h2 id="creators-title">モアライブで、<br />売ることを仕事にする。</h2>
            <div>
              <p>ライブコマースで活躍したい方、ライブコマーサーとしてさらに成長したい方からのご連絡を歓迎しています。</p>
              <p>私たちは、コマーサーに「所属してもらう」だけの会社ではなく、優秀なコマーサーから「ここで活動したい」と選ばれる会社を目指しています。</p>
            </div>
          </div>
        </div>
        <div className="creator-support">
          <article><span>01</span><h3>商品・案件</h3><p>一人ひとりの個性や強みに合った、売れる商品と継続的な案件を提供します。</p></article>
          <article><span>02</span><h3>集客・配信環境</h3><p>集客や配信企画、販売に必要な環境を整え、コマーサーが配信に集中できる状態をつくります。</p></article>
          <article><span>03</span><h3>報酬・キャリア</h3><p>適切な報酬機会と成長の機会をつくり、ライブコマーサーとしての長期的な活動を支えます。</p></article>
        </div>
        <div className="creators-cta">
          <p><strong>「売る力」を、一時的な仕事ではなくキャリアに。</strong><br />モアライブは、ライブコマーサーが長く活躍できる場所をつくります。</p>
          <a href="mailto:info@more-live.com"><span>活動について相談する</span><span aria-hidden="true">→</span></a>
        </div>
      </div>
      </section>

      <section className="information" id="company">
        <div className="company-panel">
          <div className="section-heading align-left"><h2>COMPANY</h2></div>
          <div className="company-layout">
            <dl>
              <div><dt>会社名</dt><dd>株式会社モアライブ</dd></div>
              <div><dt>所在地</dt><dd>〒104-0053 東京都中央区晴海5-6-7 PARK-T-3013</dd></div>
              <div><dt>代表取締役</dt><dd>清水 美希</dd></div>
              <div><dt>設立</dt><dd>2026年7月</dd></div>
              <div><dt>事業内容</dt><dd>ライブコマースチャンネルの企画・運営<br />商品の委託販売・販売支援<br />ライブコマーサーのマネジメント</dd></div>
              <div><dt>お問い合わせ</dt><dd><a href="mailto:info@more-live.com">info@more-live.com</a></dd></div>
            </dl>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 株式会社モアライブ All Rights Reserved.</span>
        <a href="#top">ページ上部へ ↑</a>
      </footer>
    </main>
  );
}
