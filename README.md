===== FILE: README.md =====

# Linoa Corporate Website

Static corporate website built with HTML, CSS and JavaScript.

## GitHub Pages
1. Upload all files and folders in this repository to GitHub.
2. Open Settings → Pages.
3. Set Source to Deploy from a branch.
4. Select `main` and `/ (root)`.
5. Save and wait for the published URL.

`index.html` is located at the repository root, so it can be published directly with GitHub Pages.


===== FILE: dev-server.js =====

const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
};

http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const relativePath = pathname.replace(/^[/\\]+/, '');
  let filePath = path.resolve(root, relativePath || 'index.html');

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  if (!path.extname(filePath)) filePath = path.join(filePath, 'index.html');

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }
    response.writeHead(200, { 'Content-Type': contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    response.end(file);
  });
}).listen(4173, () => console.log('LINOA preview: http://localhost:4173'));


===== FILE: index.html =====

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <meta name="description" content="中小企業のIT・Web支援ならLINOA。Web制作、業務改善、クラウド導入、AI活用まで伴走します。" />
    <title>LINOA | 中小企業向けIT・Web支援</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="LINOA トップへ">
          <span class="brand-mark" aria-hidden="true"><i></i><b></b></span>
          <span class="brand-copy"><strong>LINOA</strong><small>ITで、ビジネスにもっと余白を。</small></span>
        </a>
        <nav class="desktop-nav" aria-label="メインナビゲーション">
          <a href="/about">私たちについて</a>
          <a href="/services">サービス</a>
          <a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a>
        </nav>
        <a class="header-cta" href="/contact"><span class="mail-icon" aria-hidden="true"></span>お問い合わせ <span aria-hidden="true">›</span></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span><em>MENU</em></button>
      </div>
      <nav id="mobile-nav" class="mobile-nav" aria-label="モバイルナビゲーション" hidden>
        <a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a><a class="mobile-contact" href="/contact">お問い合わせ</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-inner">
          <div class="hero-copy">
            <p class="eyebrow"><span></span>中小企業向け IT・Web支援</p>
            <h1 id="hero-title">ITの悩みを、<br /><em>わかる言葉で。</em></h1>
            <p class="hero-description">Web制作・業務効率化・クラウド導入・生成AI活用まで。<br />中小企業に寄り添い、現場に合ったIT支援を行います。</p>
            <div class="hero-actions">
              <a class="button button-primary" href="/contact"><span class="mail-icon" aria-hidden="true"></span>無料相談はこちら <b aria-hidden="true">›</b></a>
            </div>
          </div>

          <div class="hero-visual" aria-label="LINOAのIT支援イメージ">
            <img src="assets/linoa-hero-base.png" alt="ノートパソコンを囲んで相談するビジネスパーソン" />
          </div>
        </div>
      </section>

      <section class="industries" aria-label="対応業種">
        <div class="industries-inner">
          <p>さまざまな業種の<br /><strong>中小企業様をご支援しています</strong></p>
          <ul>
            <li><span class="industry-icon store" aria-hidden="true"></span>小売・サービス</li>
            <li><span class="industry-icon building" aria-hidden="true"></span>建設・不動産</li>
            <li><span class="industry-icon factory" aria-hidden="true"></span>製造業</li>
            <li><span class="industry-icon people" aria-hidden="true"></span>士業・コンサルティング</li>
            <li><span class="industry-icon heart" aria-hidden="true">♡</span>医療・福祉</li>
          </ul>
        </div>
      </section>

      <section class="about-section" aria-labelledby="about-title">
        <div class="about-inner">
          <div class="about-copy">
            <p class="about-kicker"><span></span>ABOUT LINOA</p>
            <h2 id="about-title">ITを導入することが、<br />ゴールではありません。</h2>
            <div class="about-body">
              <p>LINOAは、Web制作やクラウド、AIなどのツールを導入すること自体を目的にはしていません。</p>
              <p>まず現場の仕事や困りごとを理解し、本当に必要なものだけを一緒に考えます。</p>
              <p>専門用語をできるだけ使わず、導入したあとも実際に使える状態になるまで支援します。</p>
            </div>
            <p class="about-message">仕事の困りごとを、一緒に整理するITパートナー。</p>
            <a class="about-link" href="/about">私たちについて <span aria-hidden="true">›</span></a>
          </div>

          <div class="about-visual" aria-label="LINOAの支援姿勢">
            <span class="about-orbit orbit-a" aria-hidden="true"></span><span class="about-orbit orbit-b" aria-hidden="true"></span>
            <div class="about-visual-header"><span class="about-symbol" aria-hidden="true">L</span><span>LINOA's approach</span></div>
            <ol class="approach-list">
              <li><span class="approach-number">01</span><div><strong>Listen</strong><small>現場の声を聞く</small></div><i aria-hidden="true">↘</i></li>
              <li><span class="approach-number">02</span><div><strong>Organize</strong><small>課題を整理する</small></div><i aria-hidden="true">↘</i></li>
              <li><span class="approach-number">03</span><div><strong>Support</strong><small>使える状態まで支える</small></div><i aria-hidden="true">✓</i></li>
            </ol>
          </div>
        </div>
      </section>

      <section id="services" class="services-section" aria-labelledby="services-title">
        <div class="services-inner">
          <header class="services-heading">
            <p class="services-kicker"><span></span>SERVICES</p>
            <h2 id="services-title">事業に合わせた、4つのIT支援</h2>
            <p>Web制作から業務改善、クラウド、AI活用まで。必要な領域からご相談いただけます。</p>
          </header>

          <div class="services-grid">
            <article class="service-link-card"><div class="service-link-card__top"><span class="service-link-icon service-browser" aria-hidden="true"></span><span>01</span></div><h3>Web制作</h3><p>企業やサービスの魅力が伝わるWebサイトを、目的に合わせて設計・制作します。</p></article>
            <article class="service-link-card"><div class="service-link-card__top"><span class="service-link-icon service-gear" aria-hidden="true">⚙</span><span>02</span></div><h3>業務改善・DX支援</h3><p>日々の業務を整理し、無理なく続けられる仕組みへ改善します。</p></article>
            <article class="service-link-card"><div class="service-link-card__top"><span class="service-link-icon service-cloud" aria-hidden="true">☁</span><span>03</span></div><h3>クラウド導入支援</h3><p>情報共有やデータ管理を、より安全で使いやすい環境へ整えます。</p></article>
            <article class="service-link-card"><div class="service-link-card__top"><span class="service-link-icon service-ai" aria-hidden="true">AI</span><span>04</span></div><h3>AI活用支援</h3><p>生成AIを実際の業務で活用できる形へ整理し、導入を支援します。</p></article>
          </div>
          <div class="services-footer"><a class="services-all-link" href="/services">サービス一覧を見る <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      <section id="cases" class="cases-section" aria-labelledby="cases-title">
        <div class="cases-inner">
          <header class="cases-heading">
            <p class="cases-kicker"><span></span>CASES</p>
            <h2 id="cases-title">導入事例</h2>
            <p>企業ごとの課題に合わせて、Web・業務改善・クラウド・AI活用を支援しています。</p>
          </header>

          <div class="cases-grid">
            <article class="case-card">
              <div class="case-thumbnail thumbnail-manufacturing" aria-hidden="true"><span class="thumb-label">CASE 01</span><span class="factory-shape"></span><span class="report-shape"><i></i><i></i><i></i></span></div>
              <div class="case-content"><div class="case-meta"><span>製造業</span><b>業務改善・DX支援</b></div><h3>紙の日報管理をクラウド化し、<br />情報共有をスムーズに</h3><p>紙で管理していた作業日報を見直し、入力・確認・共有までをオンラインで行える仕組みに整理。</p></div>
            </article>
            <article class="case-card">
              <div class="case-thumbnail thumbnail-care" aria-hidden="true"><span class="thumb-label">CASE 02</span><span class="care-window"><i></i><i></i><i></i></span><span class="care-leaf">✦</span></div>
              <div class="case-content"><div class="case-meta"><span>介護・福祉</span><b>Web制作</b></div><h3>採用と問い合わせにつながる<br />Webサイトへリニューアル</h3><p>情報が探しにくかった既存サイトを整理し、利用者・求職者それぞれが必要な情報へたどり着きやすい構成へ改善。</p></div>
            </article>
            <article class="case-card">
              <div class="case-thumbnail thumbnail-construction" aria-hidden="true"><span class="thumb-label">CASE 03</span><span class="building-shape"><i></i><i></i><i></i><i></i></span><span class="cloud-shape">☁</span></div>
              <div class="case-content"><div class="case-meta"><span>建設業</span><b>クラウド導入支援</b></div><h3>社内の情報共有を<br />クラウドへ集約</h3><p>メールや個人管理に分散していた資料を整理し、社内で安全に共有できる環境を構築。</p></div>
            </article>
          </div>
          <div class="cases-footer"><a class="cases-all-link" href="/cases">導入事例をもっと見る <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      <section id="news" class="news-section" aria-labelledby="news-title">
        <div class="news-inner">
          <header class="news-heading"><p class="news-kicker"><span></span>NEWS</p><h2 id="news-title">お知らせ</h2></header>
          <div class="news-list">
            <article class="news-item news-item--static"><time datetime="2026-09-20">2026.09.20</time><span class="news-category">お知らせ</span><h3>コーポレートサイトをリニューアルしました</h3></article>
            <article class="news-item news-item--static"><time datetime="2026-09-05">2026.09.05</time><span class="news-category">セミナー</span><h3>中小企業向け 生成AI活用セミナーを開催します</h3></article>
            <article class="news-item news-item--static"><time datetime="2026-08-18">2026.08.18</time><span class="news-category">コラム</span><h3>社内のIT化を進める前に整理したい3つのこと</h3></article>
          </div>
          <div class="news-footer"><a class="news-all-link" href="/news">お知らせ一覧を見る <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      <section id="contact" class="contact-section" aria-labelledby="contact-title">
        <div class="contact-inner">
          <p class="contact-kicker"><span></span>CONTACT<span></span></p>
          <h2 id="contact-title">ITのこと、まずは気軽にご相談ください。</h2>
          <p>Webサイトや業務改善、クラウド、AI活用など、まだ具体的な方法が決まっていない段階でもご相談いただけます。</p>
          <div class="contact-actions"><a class="contact-primary" href="/contact"><span class="mail-icon" aria-hidden="true"></span>お問い合わせ <b aria-hidden="true">→</b></a><a class="contact-secondary" href="/services">サービスを見る <b aria-hidden="true">→</b></a></div>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-brand"><a class="footer-brand-name" href="/" aria-label="LINOA トップへ"><span class="footer-mark" aria-hidden="true">L</span>LINOA</a><p>ITで、ビジネスにもっと余白を。</p><small>中小企業向けIT・Web支援</small></div>
        <nav class="footer-nav" aria-label="フッターナビゲーション">
          <div><h2>COMPANY</h2><a href="/about">私たちについて</a><a href="/company">会社情報</a></div>
          <div><h2>SERVICES</h2><a href="/services">サービス</a></div>
          <div><h2>CONTENT</h2><a href="/cases">導入事例</a><a href="/news">お知らせ</a><a href="/contact">お問い合わせ</a></div>
        </nav>
      </div>
      <div class="footer-bottom"><a href="/privacy">プライバシーポリシー</a><small>© 2026 LINOA Inc.</small></div>
    </footer>
    <script src="scripts/main.js"></script>
  </body>
</html>


===== FILE: styles.css =====

:root { --navy:#08294f; --navy-deep:#062344; --blue:#2187ca; --sky:#eaf7ff; --green:#20966e; --green-dark:#147755; --line:#dceaf2; --muted:#53677f; --white:#fff; }
* { box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { margin:0; color:var(--navy); background:#f8fbfd; font-family:"Yu Gothic UI","Hiragino Kaku Gothic ProN",Meiryo,sans-serif; overflow-x:hidden; }
a { color:inherit; text-decoration:none; }
.site-header { position:relative; z-index:20; background:rgba(255,255,255,.97); border-bottom:1px solid #edf3f6; }
.header-inner { max-width:1536px; min-height:110px; margin:auto; padding:16px clamp(24px,4vw,70px); display:flex; align-items:center; gap:30px; }
.brand { display:flex; align-items:center; gap:12px; min-width:max-content; }
.brand-mark { width:48px; height:48px; position:relative; display:block; background:linear-gradient(135deg,#167bb7 0 50%,var(--navy) 50%); clip-path:polygon(0 0,55% 0,55% 55%,100% 55%,100% 100%,0 100%); }
.brand-mark i { position:absolute; inset:10px 10px 10px 19px; background:white; display:block; }
.brand-mark b { position:absolute; width:12px; height:12px; background:#238ec6; left:19px; top:10px; }
.brand-copy { display:grid; gap:1px; }
.brand-copy strong { font-size:2.1rem; letter-spacing:.18em; line-height:1; }
.brand-copy small { color:#60738a; font-size:.67rem; letter-spacing:.04em; }
.desktop-nav { margin-left:auto; display:flex; align-items:center; gap:clamp(20px,2.3vw,42px); font-weight:700; font-size:.95rem; white-space:nowrap; }
.desktop-nav>a,.service-menu summary { transition:color .2s ease; cursor:pointer; }
.desktop-nav>a:hover,.service-menu summary:hover { color:var(--blue); }
.service-menu { position:relative; }
.service-menu summary { list-style:none; }
.service-menu summary::-webkit-details-marker { display:none; }
.service-menu summary span { margin-left:5px; font-size:1.15em; }
.service-dropdown { position:absolute; top:32px; left:-22px; min-width:206px; padding:9px; background:#fff; box-shadow:0 12px 28px rgba(8,41,79,.16); border:1px solid var(--line); border-radius:10px; }
.service-dropdown a { display:block; padding:10px 12px; border-radius:6px; font-size:.84rem; }.service-dropdown a:hover { background:var(--sky); color:var(--blue); }
.header-cta,.button-primary { background:linear-gradient(135deg,#279c74,#188e68); color:white; box-shadow:0 8px 16px rgba(20,119,85,.18); }
.header-cta { min-width:214px; min-height:58px; border-radius:10px; display:flex; align-items:center; justify-content:center; gap:14px; font-weight:700; font-size:1.02rem; transition:transform .2s,background .2s; }.header-cta:hover,.button-primary:hover { background:var(--green-dark); transform:translateY(-2px); }
.mail-icon { width:24px; height:17px; display:inline-block; border:2px solid currentColor; border-radius:3px; position:relative; }.mail-icon::after,.mail-icon::before { content:""; position:absolute; width:14px; height:2px; top:5px; background:currentColor; }.mail-icon::before { transform:rotate(35deg); left:0; }.mail-icon::after { transform:rotate(-35deg); right:0; }
.menu-toggle { display:none; margin-left:auto; border:0; background:transparent; color:var(--navy); width:46px; padding:6px 0; cursor:pointer; }.menu-toggle span { display:block; height:2px; background:currentColor; margin:6px 0; }.menu-toggle em { font-size:.55rem; font-style:normal; letter-spacing:.08em; }
.mobile-nav { padding:6px 20px 22px; border-top:1px solid var(--line); background:#fff; }.mobile-nav a { display:block; padding:14px 8px; font-weight:700; border-bottom:1px solid #edf3f6; }.mobile-nav .mobile-contact { margin-top:16px; text-align:center; border:0; border-radius:8px; color:#fff; background:var(--green); }
.hero { position:relative; overflow:hidden; background:linear-gradient(105deg,#fff 20%,#f7fcff 70%,#edf8fd); }
.hero::before { content:""; width:420px; height:420px; position:absolute; left:-250px; top:50%; border-radius:50%; background:rgba(195,237,252,.25); }
.hero-inner { max-width:1536px; min-height:700px; padding:clamp(72px,6vw,100px) clamp(24px,4vw,70px) clamp(52px,4vw,80px); margin:auto; display:grid; grid-template-columns:minmax(0,45%) minmax(500px,55%); align-items:center; }
.hero-copy { position:relative; z-index:5; padding-bottom:15px; }.eyebrow { margin:0 0 34px; display:flex; align-items:center; gap:19px; font-size:1rem; letter-spacing:.07em; font-weight:700; }.eyebrow span { width:55px; height:3px; background:var(--blue); }
h1 { margin:0; color:var(--navy-deep); font-size:clamp(3.4rem,5.05vw,5.15rem); line-height:1.31; letter-spacing:.035em; font-weight:800; }.hero-copy h1 em { font-style:normal; font-weight:900; }
.hero-description { margin:25px 0 36px; font-size:clamp(1rem,1.35vw,1.3rem); line-height:1.75; letter-spacing:.03em; font-weight:500; }
.hero-actions { display:flex; gap:18px; }.button { min-height:85px; padding:0 31px; border-radius:12px; display:inline-flex; align-items:center; justify-content:center; gap:16px; font-weight:800; font-size:1.18rem; transition:transform .2s,background .2s,border .2s; }.button b { font-size:2rem; line-height:1; font-weight:400; }.button-secondary { background:#fff; color:#157bc3; border:2px solid #1684d0; }.button-secondary:hover { transform:translateY(-2px); background:#f0f9ff; }
.hero-visual { position:relative; align-self:stretch; min-height:550px; margin:-30px -70px -80px -55px; }.hero-visual>img { width:100%; height:100%; min-height:660px; object-fit:cover; object-position:61% 48%; display:block; mix-blend-mode:multiply; }
.industries { background:rgba(255,255,255,.96); border-bottom:1px solid #e6eef2; }.industries-inner { max-width:1536px; padding:25px clamp(24px,4vw,70px); margin:auto; display:flex; align-items:center; gap:38px; }.industries p { margin:0; min-width:278px; padding-right:30px; border-right:1px solid #c8dae5; font-size:.9rem; line-height:1.55; }.industries p strong { font-size:1rem; }.industries ul { list-style:none; margin:0; padding:0; display:grid; grid-template-columns:repeat(5,1fr); flex:1; }.industries li { min-height:54px; padding:0 18px; display:flex; align-items:center; justify-content:center; gap:12px; border-right:1px solid #c8dae5; color:#445d76; white-space:nowrap; font-size:.89rem; }.industries li:last-child { border:0; }.industry-icon { color:#3a9dd8; width:32px; height:32px; display:inline-grid; place-items:center; flex:0 0 32px; position:relative; }.store { border:2px solid currentColor; border-top:0; margin-top:8px; height:23px; }.store::before { content:""; position:absolute; width:38px; height:9px; left:-5px; top:-9px; border:2px solid currentColor; background:linear-gradient(90deg,transparent 25%,currentColor 25% 31%,transparent 31% 64%,currentColor 64% 70%,transparent 70%); }.building { border:2px solid currentColor; }.building::before { content:"▦"; font-size:25px; }.factory::before { content:"⚙"; font-size:34px; }.people::before { content:"♧"; font-size:41px; transform:rotate(180deg); }.heart { font-size:39px; }
@media (max-width:1250px) { .desktop-nav { gap:20px; font-size:.85rem; }.header-cta { min-width:184px; }.hero-inner { grid-template-columns:45% 55%; }.hero-visual { margin-right:-50px; } }
@media (max-width:1020px) { .desktop-nav,.header-cta { display:none; }.menu-toggle { display:block; }.hero-inner { min-height:650px; grid-template-columns:46% 54%; padding-top:65px; }.hero-visual { min-height:500px; margin:-20px -32px -66px -25px; }.hero-visual>img { min-height:610px; }.industries-inner { gap:18px; }.industries p { min-width:215px; padding-right:18px; font-size:.76rem; }.industries p strong { font-size:.84rem; }.industries li { padding:0 9px; gap:7px; font-size:.73rem; }.industry-icon { transform:scale(.78); margin-right:-5px; } }
@media (max-width:767px) { .header-inner { min-height:76px; padding:12px 18px; }.brand { gap:8px; }.brand-mark { width:35px; height:35px; }.brand-mark i { inset:7px 7px 7px 14px; }.brand-mark b { width:9px; height:9px; left:14px; top:7px; }.brand-copy strong { font-size:1.55rem; }.brand-copy small { font-size:.51rem; }.hero { background:linear-gradient(150deg,#fff 0,#f5fbff 100%); }.hero::before { width:280px; height:280px; left:-190px; top:30%; }.hero-inner { display:block; min-height:0; padding:49px 18px 0; }.hero-copy { padding:0; }.eyebrow { margin-bottom:20px; gap:12px; font-size:.78rem; }.eyebrow span { width:37px; height:2px; } h1 { font-size:clamp(2.42rem,11.4vw,3.3rem); line-height:1.29; letter-spacing:.02em; }.hero-description { margin:18px 0 25px; font-size:.92rem; line-height:1.7; letter-spacing:0; }.hero-description br { display:none; }.hero-actions { gap:10px; }.button { flex:1; min-height:58px; padding:0 11px; border-radius:9px; gap:7px; font-size:.88rem; white-space:nowrap; }.button .mail-icon { width:18px; height:13px; border-width:1.5px; }.button b { font-size:1.5rem; }.hero-visual { min-height:0; height:auto; margin:35px -18px 0; padding:0 18px 28px; display:grid; grid-template-columns:1fr 1fr; gap:9px; align-items:end; }.hero-visual>img { grid-column:1/-1; width:100%; height:280px; min-height:0; object-fit:cover; object-position:62% 50%; mix-blend-mode:multiply; border-radius:0; }.industries-inner { padding:22px 18px 25px; display:block; }.industries p { min-width:0; padding:0 0 15px; border:0; text-align:center; font-size:.78rem; }.industries p strong { font-size:.88rem; }.industries ul { grid-template-columns:1fr 1fr; gap:0; border-top:1px solid #e0ebf0; }.industries li { min-height:48px; justify-content:flex-start; padding:0 7px; border-bottom:1px solid #e0ebf0; border-right:0; font-size:.7rem; }.industries li:nth-child(odd) { border-right:1px solid #e0ebf0; }.industries li:last-child { grid-column:1/-1; justify-content:center; }.industry-icon { transform:scale(.7); margin-right:-7px; } }
@media (max-width:380px) { .hero-actions { display:grid; grid-template-columns:1fr; }.button { width:100%; }.hero-visual { grid-template-columns:1fr; }.hero-visual>img { height:240px; }.industries li { font-size:.65rem; } }

/* HOME hero: stack copy and photo at tablet widths, then return to a balanced desktop split. */
@media (min-width:768px) and (max-width:1020px) {
  .hero-inner { display:block; max-width:960px; min-height:0; padding:62px clamp(24px,4vw,52px) 52px; }
  .hero-copy { max-width:760px; padding:0; }
  .hero h1 { font-size:clamp(3rem,6vw,4.2rem); }
  .hero-visual { width:100%; min-height:0; height:auto; margin:38px 0 0; aspect-ratio:2/1; }
  .hero-visual>img { width:100%; height:100%; min-height:0; object-position:100% 48%; }
}
@media (min-width:768px) and (max-width:1100px) {
  .industries-inner { display:block; padding:24px clamp(24px,4vw,52px) 27px; }
  .industries p { min-width:0; padding:0 0 18px; border-right:0; }
  .industries ul { grid-template-columns:repeat(3,minmax(0,1fr)); border-top:1px solid #c8dae5; }
  .industries li { min-height:51px; justify-content:flex-start; padding:0 12px; border-right:1px solid #c8dae5; border-bottom:1px solid #c8dae5; white-space:normal; }
  .industries li:nth-child(3n) { border-right:0; }
  .industries li:nth-last-child(-n+2) { border-bottom:0; }
}
@media (min-width:1021px) {
  .hero-inner { max-width:1280px; min-height:0; padding:78px clamp(24px,4vw,52px) 62px; grid-template-columns:minmax(0,45%) minmax(0,55%); }
  .hero-visual { width:100%; min-height:0; margin:0; align-self:center; aspect-ratio:1.3/1; }
  .hero-visual>img { width:100%; height:100%; min-height:0; object-position:100% 48%; }
}
@media (prefers-reduced-motion:reduce) { *,*::before,*::after { scroll-behavior:auto!important; transition:none!important; } }

/* SECTION 02: about */
.about-section { padding:125px 0 132px; overflow:hidden; background:#fff; }.about-inner { max-width:1360px; margin:auto; padding:0 clamp(24px,4vw,70px); display:grid; grid-template-columns:minmax(0,1fr) minmax(410px,.86fr); align-items:center; gap:clamp(60px,9vw,150px); }.about-copy { max-width:620px; }.about-kicker { display:flex; align-items:center; gap:13px; margin:0 0 20px; color:#258bc8; font-size:.78rem; font-weight:800; letter-spacing:.2em; }.about-kicker span { width:35px; height:2px; background:#55aee0; }.about-copy h2 { margin:0; color:var(--navy-deep); font-size:clamp(2.15rem,3.4vw,3.45rem); line-height:1.43; letter-spacing:.025em; }.about-body { margin-top:29px; color:#516378; font-size:1rem; line-height:1.85; }.about-body p { margin:0 0 13px; }.about-message { margin:25px 0 0; color:#177aaf; font-size:1rem; font-weight:700; letter-spacing:.025em; }.about-link { display:inline-flex; align-items:center; gap:18px; margin-top:31px; padding-bottom:10px; border-bottom:2px solid #1b8bc8; color:#0c5f99; font-size:1rem; font-weight:800; transition:color .2s,border-color .2s; }.about-link span { font-size:1.75rem; line-height:.55; font-weight:400; }.about-link:hover { color:var(--green-dark); border-color:var(--green); }.about-link:focus-visible { outline:3px solid #8bd0f4; outline-offset:5px; }
.about-visual { min-height:440px; padding:41px 39px 38px; position:relative; overflow:hidden; border:1px solid #dcecf2; border-radius:24px; background:linear-gradient(135deg,#f2fbff 0%,#f8fcfd 55%,#effaf5 100%); box-shadow:0 18px 36px rgba(15,70,103,.07); }.about-orbit { position:absolute; border:1px solid #a7d9ef; border-radius:50%; opacity:.65; }.orbit-a { width:310px; height:310px; right:-130px; top:-125px; }.orbit-b { width:218px; height:218px; left:-123px; bottom:-108px; border-color:#a9dfcb; }.about-visual-header { position:relative; z-index:1; display:flex; align-items:center; gap:10px; color:#5d768b; font-size:.76rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; }.about-symbol { width:25px; height:25px; display:grid; place-items:center; border-radius:7px; background:var(--navy); color:#fff; font-size:.8rem; font-weight:900; }.approach-list { position:relative; z-index:1; display:grid; gap:13px; margin:35px 0 0; padding:0; list-style:none; }.approach-list li { min-height:78px; padding:15px 18px; display:flex; align-items:center; gap:15px; border:1px solid rgba(201,224,234,.9); border-radius:13px; background:rgba(255,255,255,.85); box-shadow:0 5px 14px rgba(25,83,114,.045); }.approach-number { width:31px; color:#8ba7b7; font-size:.72rem; font-weight:800; letter-spacing:.07em; }.approach-list div { display:grid; gap:3px; }.approach-list strong { color:var(--navy); font-family:Arial,sans-serif; font-size:1rem; letter-spacing:.02em; }.approach-list small { color:#627688; font-size:.8rem; }.approach-list i { margin-left:auto; color:#268ec3; font-size:1.15rem; font-style:normal; }.approach-list li:last-child i { display:grid; width:23px; height:23px; place-items:center; border-radius:50%; color:#fff; background:var(--green); font-size:.74rem; }
@media (max-width:1000px) { .about-section { padding:95px 0 105px; }.about-inner { grid-template-columns:minmax(0,1fr) minmax(330px,.75fr); gap:48px; }.about-visual { min-height:410px; padding:33px 27px; }.approach-list { margin-top:29px; }.approach-list li { min-height:74px; padding:13px; } }
@media (max-width:767px) { .about-section { padding:75px 0 84px; }.about-inner { display:flex; flex-direction:column; align-items:stretch; gap:38px; padding:0 18px; }.about-copy { max-width:none; }.about-kicker { margin-bottom:16px; }.about-copy h2 { font-size:clamp(1.78rem,7.4vw,2.2rem); line-height:1.45; }.about-copy h2 br { display:none; }.about-body { margin-top:22px; font-size:.92rem; line-height:1.82; }.about-body p { margin-bottom:12px; }.about-message { margin-top:20px; font-size:.92rem; line-height:1.6; }.about-link { margin-top:25px; font-size:.93rem; }.about-visual { min-height:0; padding:27px 21px; border-radius:17px; }.about-visual-header { font-size:.68rem; }.approach-list { gap:9px; margin-top:25px; }.approach-list li { min-height:65px; padding:11px 12px; border-radius:10px; gap:9px; }.approach-number { width:26px; font-size:.66rem; }.approach-list strong { font-size:.91rem; }.approach-list small { font-size:.72rem; }.orbit-a { width:220px; height:220px; right:-115px; top:-110px; }.orbit-b { width:160px; height:160px; left:-100px; bottom:-95px; } }

/* SECTION 03: services */
.services-section { padding:115px 0 124px; background:#f6fafc; }.services-inner { max-width:1360px; margin:auto; padding:0 clamp(24px,4vw,70px); }.services-heading { max-width:745px; margin:0 auto 52px; text-align:center; }.services-kicker { display:flex; align-items:center; justify-content:center; gap:12px; margin:0 0 16px; color:#258bc8; font-size:.78rem; font-weight:800; letter-spacing:.2em; }.services-kicker span { width:30px; height:2px; background:#63b9e7; }.services-heading h2 { margin:0; color:var(--navy-deep); font-size:clamp(2rem,3.05vw,2.95rem); line-height:1.42; letter-spacing:.025em; }.services-heading>p:last-child { margin:17px 0 0; color:#566b7d; font-size:1rem; line-height:1.7; }
.services-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:21px; }.service-link-card { min-height:281px; padding:26px 30px 25px; display:flex; flex-direction:column; border:1px solid #d9e8ef; border-radius:16px; background:#fff; box-shadow:0 6px 15px rgba(17,69,105,.04); }.service-link-card__top { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:20px; }.service-link-card__top>span:last-child { color:#a8bac7; font-family:Arial,sans-serif; font-size:.77rem; font-weight:700; letter-spacing:.12em; }.service-link-icon { width:57px; height:57px; display:grid; place-items:center; flex:0 0 57px; border-radius:14px; color:#218bd0; background:#eaf7ff; position:relative; }.service-link-card:nth-child(3) .service-link-icon { color:#208c70; background:#eaf8f2; }.service-browser::before { content:""; width:31px; height:22px; border:2px solid currentColor; border-radius:3px; box-shadow:inset 0 5px rgba(33,139,208,.2); }.service-browser::after { content:""; width:17px; height:2px; position:absolute; bottom:13px; background:currentColor; }.service-gear { font-size:2.2rem; }.service-cloud { font-size:2.65rem; line-height:1; }.service-ai { border:2px dashed #56afe4; font-size:.95rem; font-weight:900; }.service-ai::before,.service-ai::after { content:""; position:absolute; top:7px; width:3px; height:37px; background:repeating-linear-gradient(to bottom,currentColor 0 4px,transparent 4px 7px); }.service-ai::before { left:-7px; }.service-ai::after { right:-7px; }.service-link-card h3 { margin:0 0 10px; color:var(--navy); font-size:1.25rem; line-height:1.4; }.service-link-card>p { max-width:430px; margin:0; color:#586a7d; font-size:.91rem; line-height:1.75; }.services-footer { margin-top:44px; text-align:center; }.services-all-link { display:inline-flex; align-items:center; gap:14px; padding:15px 26px; border:1px solid #a5cfe4; border-radius:7px; color:#12699f; background:transparent; font-size:.98rem; font-weight:800; transition:color .2s,border-color .2s,background .2s; }.services-all-link span { font-size:1.2rem; font-weight:400; }.services-all-link:hover { border-color:#2088c3; color:#075983; background:#fff; }.services-all-link:focus-visible { outline:3px solid #82c8ec; outline-offset:4px; }
@media (max-width:767px) { .services-section { padding:76px 0 86px; }.services-inner { padding:0 18px; }.services-heading { margin-bottom:34px; text-align:left; }.services-kicker { justify-content:flex-start; }.services-heading h2 { font-size:clamp(1.78rem,7.4vw,2.2rem); line-height:1.44; }.services-heading>p:last-child { margin-top:14px; font-size:.91rem; }.services-grid { grid-template-columns:1fr; gap:13px; }.service-link-card { min-height:0; padding:21px 21px 20px; border-radius:13px; }.service-link-card__top { margin-bottom:14px; }.service-link-icon { width:47px; height:47px; flex-basis:47px; border-radius:12px; }.service-browser::before { width:26px; height:18px; }.service-browser::after { bottom:10px; }.service-gear { font-size:1.9rem; }.service-cloud { font-size:2.25rem; }.service-ai { font-size:.8rem; }.service-ai::before,.service-ai::after { top:6px; height:30px; }.service-link-card h3 { margin-bottom:7px; font-size:1.1rem; }.service-link-card>p { font-size:.87rem; line-height:1.7; }.service-link-more { padding-top:16px; font-size:.87rem; }.services-footer { margin-top:32px; }.services-all-link { min-height:52px; padding:12px 23px; font-size:.91rem; } }

/* SECTION 04: cases */
.cases-section { padding:118px 0 128px; background:#fff; }.cases-inner { max-width:1360px; margin:auto; padding:0 clamp(24px,4vw,70px); }.cases-heading { max-width:745px; margin:0 auto 49px; text-align:center; }.cases-kicker { display:flex; align-items:center; justify-content:center; gap:12px; margin:0 0 16px; color:#258bc8; font-size:.78rem; font-weight:800; letter-spacing:.2em; }.cases-kicker span { width:30px; height:2px; background:#63b9e7; }.cases-heading h2 { margin:0; color:var(--navy-deep); font-size:clamp(2rem,3.05vw,2.95rem); line-height:1.42; letter-spacing:.025em; }.cases-heading>p:last-child { margin:17px 0 0; color:#566b7d; font-size:1rem; line-height:1.7; }
.cases-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:23px; }.case-card { display:flex; flex-direction:column; overflow:hidden; border:1px solid #dce8ee; border-radius:16px; background:#fff; box-shadow:0 5px 15px rgba(17,69,105,.045); cursor:pointer; transition:box-shadow .2s ease,border-color .2s ease; }.case-card:hover { border-color:#afd9ea; box-shadow:0 15px 27px rgba(17,69,105,.1); }.case-card:focus-visible { outline:3px solid #82c8ec; outline-offset:4px; }.case-thumbnail { position:relative; height:196px; overflow:hidden; }.thumb-label { position:absolute; z-index:2; top:16px; left:18px; color:rgba(255,255,255,.94); font-family:Arial,sans-serif; font-size:.66rem; font-weight:700; letter-spacing:.13em; }.thumbnail-manufacturing { background:linear-gradient(140deg,#155785,#2e9fbe); }.thumbnail-manufacturing::after { content:""; position:absolute; width:280px; height:65px; right:-60px; bottom:-26px; background:rgba(255,255,255,.12); transform:rotate(-10deg); }.factory-shape { position:absolute; width:205px; height:82px; bottom:24px; left:42px; border:3px solid rgba(255,255,255,.8); border-top:0; background:linear-gradient(90deg,rgba(255,255,255,.08) 50%,transparent 50%); }.factory-shape::before { content:""; position:absolute; width:55px; height:55px; top:-25px; left:17px; border:3px solid rgba(255,255,255,.8); border-bottom:0; transform:skewY(-38deg); }.factory-shape::after { content:""; position:absolute; width:63px; height:45px; right:15px; top:-22px; border:3px solid rgba(255,255,255,.8); border-bottom:0; transform:skewY(32deg); }.report-shape { position:absolute; z-index:1; width:86px; height:111px; right:36px; top:42px; padding:24px 14px; border-radius:6px; background:rgba(255,255,255,.95); box-shadow:0 9px 18px rgba(0,37,73,.18); transform:rotate(5deg); }.report-shape i { display:block; height:7px; margin-bottom:9px; background:#48a9cf; }.report-shape i:nth-child(2) { width:72%; }.report-shape i:nth-child(3) { width:45%; background:#7ac8ad; }
.thumbnail-care { background:linear-gradient(140deg,#72b8d7,#9bd6cf); }.thumbnail-care::before { content:""; position:absolute; width:180px; height:180px; top:-92px; right:-34px; border:22px solid rgba(255,255,255,.14); border-radius:50%; }.care-window { position:absolute; width:190px; height:115px; left:50%; bottom:26px; border:5px solid rgba(255,255,255,.86); border-radius:8px; background:rgba(255,255,255,.15); transform:translateX(-50%); }.care-window::before { content:""; position:absolute; left:0; right:0; top:25px; height:4px; background:rgba(255,255,255,.82); }.care-window i { display:block; float:left; width:27px; height:30px; margin:44px 0 0 16px; border-radius:3px 3px 0 0; background:rgba(255,255,255,.76); }.care-window i:nth-child(2) { height:47px; margin-top:27px; background:#d3f3e8; }.care-leaf { position:absolute; right:42px; bottom:32px; display:grid; place-items:center; width:51px; height:51px; border-radius:50%; color:#278a6c; background:#f1fbf8; font-size:1.35rem; box-shadow:0 7px 14px rgba(34,111,97,.16); }.thumbnail-construction { background:linear-gradient(140deg,#274d77,#5786a6); }.thumbnail-construction::before { content:""; position:absolute; right:-22px; top:-48px; width:210px; height:210px; border:1px solid rgba(255,255,255,.2); border-radius:50%; }.building-shape { position:absolute; bottom:0; left:43px; width:194px; height:141px; background:rgba(255,255,255,.18); border:3px solid rgba(255,255,255,.65); border-bottom:0; }.building-shape::before { content:""; position:absolute; left:-30px; bottom:0; width:28px; height:104px; background:rgba(255,255,255,.24); border:3px solid rgba(255,255,255,.65); border-bottom:0; }.building-shape i { position:relative; display:inline-block; width:25px; height:25px; margin:22px 0 0 15px; background:rgba(255,255,255,.65); }.cloud-shape { position:absolute; z-index:2; right:42px; top:70px; display:grid; place-items:center; width:67px; height:67px; border-radius:50%; color:#377fa5; background:#eff9fd; font-size:2.55rem; box-shadow:0 8px 18px rgba(9,50,85,.16); transition:transform .2s ease; }.case-card:hover .cloud-shape { transform:translateY(-3px); }
.case-content { display:flex; flex:1; flex-direction:column; padding:21px 23px 22px; }.case-meta { display:flex; flex-wrap:wrap; align-items:center; gap:7px; margin-bottom:13px; font-size:.72rem; font-weight:800; }.case-meta span { color:#527088; }.case-meta b { padding:4px 8px; border-radius:99px; color:#1879b4; background:#eaf7ff; font-weight:800; }.case-card:nth-child(3) .case-meta b { color:#197e64; background:#eaf8f2; }.case-content h3 { margin:0 0 11px; color:var(--navy); font-size:1.1rem; line-height:1.55; letter-spacing:.01em; }.case-content>p { margin:0; color:#596b7c; font-size:.84rem; line-height:1.75; }.case-more { display:flex; align-items:center; gap:10px; margin-top:auto; padding-top:19px; color:#1679b9; font-size:.86rem; font-weight:800; }.case-more i { font-size:1.15rem; font-style:normal; transition:transform .2s ease; }.case-card:hover .case-more i { transform:translateX(5px); }.cases-footer { margin-top:44px; text-align:center; }.cases-all-link { display:inline-flex; align-items:center; gap:14px; padding:15px 26px; border:1px solid #a5cfe4; border-radius:7px; color:#12699f; background:transparent; font-size:.98rem; font-weight:800; transition:color .2s,border-color .2s,background .2s; }.cases-all-link span { font-size:1.2rem; font-weight:400; }.cases-all-link:hover { border-color:#2088c3; color:#075983; background:#f8fcff; }.cases-all-link:focus-visible { outline:3px solid #82c8ec; outline-offset:4px; }
@media (max-width:1050px) { .cases-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }.case-card:last-child { max-width:calc(50% - 12px); }.case-thumbnail { height:205px; } }
@media (max-width:767px) { .cases-section { padding:76px 0 87px; }.cases-inner { padding:0 18px; }.cases-heading { margin-bottom:34px; text-align:left; }.cases-kicker { justify-content:flex-start; }.cases-heading h2 { font-size:clamp(1.78rem,7.4vw,2.2rem); line-height:1.44; }.cases-heading>p:last-child { margin-top:14px; font-size:.91rem; }.cases-grid { grid-template-columns:1fr; gap:15px; }.case-card:last-child { max-width:none; }.case-thumbnail { height:184px; }.case-content { padding:19px 20px 20px; }.case-meta { margin-bottom:10px; }.case-content h3 { margin-bottom:8px; font-size:1.07rem; }.case-content>p { font-size:.86rem; line-height:1.7; }.case-more { padding-top:16px; font-size:.87rem; }.cases-footer { margin-top:32px; }.cases-all-link { min-height:52px; padding:12px 22px; font-size:.91rem; } }

/* SECTION 05: news */
.news-section { padding:112px 0 119px; background:#f6fafc; }.news-inner { max-width:1120px; margin:auto; padding:0 clamp(24px,4vw,70px); }.news-heading { margin-bottom:39px; text-align:center; }.news-kicker { display:flex; align-items:center; justify-content:center; gap:12px; margin:0 0 13px; color:#258bc8; font-size:.78rem; font-weight:800; letter-spacing:.2em; }.news-kicker span { width:30px; height:2px; background:#63b9e7; }.news-heading h2 { margin:0; color:var(--navy-deep); font-size:clamp(2rem,3.05vw,2.8rem); line-height:1.4; letter-spacing:.025em; }.news-list { border-top:1px solid #cddfe8; }.news-item { min-height:81px; display:grid; grid-template-columns:116px 103px minmax(0,1fr) 28px; align-items:center; column-gap:16px; padding:17px 15px; border-bottom:1px solid #d7e5eb; background:transparent; transition:background .2s ease; }.news-item:hover { background:rgba(232,246,252,.58); }.news-item:focus-visible { outline:3px solid #82c8ec; outline-offset:3px; }.news-item time { color:#7b8d9c; font-family:Arial,sans-serif; font-size:.8rem; letter-spacing:.03em; }.news-category { width:max-content; padding:4px 8px; border-radius:99px; color:#197bad; background:#e3f4fc; font-size:.71rem; font-weight:800; }.news-item:nth-child(2) .news-category { color:#1b846c; background:#e5f7f0; }.news-item:nth-child(3) .news-category { color:#52778e; background:#edf3f6; }.news-item h3 { margin:0; color:var(--navy); font-size:.98rem; font-weight:700; line-height:1.55; transition:color .2s ease; }.news-item i { color:#177cb9; font-size:1.25rem; font-style:normal; transition:transform .2s ease; }.news-item:hover h3 { color:#126ca4; }.news-item:hover i { transform:translateX(5px); }.news-footer { margin-top:38px; text-align:center; }.news-all-link { display:inline-flex; align-items:center; gap:13px; padding-bottom:8px; border-bottom:2px solid #2189c5; color:#146fa6; font-size:.96rem; font-weight:800; transition:color .2s,border-color .2s; }.news-all-link span { font-size:1.18rem; font-weight:400; }.news-all-link:hover { border-color:var(--green); color:var(--green-dark); }.news-all-link:focus-visible { outline:3px solid #82c8ec; outline-offset:5px; }
@media (max-width:767px) { .news-section { padding:76px 0 85px; }.news-inner { padding:0 18px; }.news-heading { margin-bottom:29px; text-align:left; }.news-kicker { justify-content:flex-start; }.news-heading h2 { font-size:clamp(1.78rem,7.4vw,2.2rem); }.news-item { min-height:0; grid-template-columns:1fr 26px; grid-template-areas:"meta arrow" "title arrow"; row-gap:9px; column-gap:10px; padding:18px 5px 19px; }.news-item time { grid-area:meta; }.news-category { grid-area:meta; justify-self:start; margin-left:95px; }.news-item h3 { grid-area:title; padding-right:8px; font-size:.96rem; line-height:1.6; }.news-item i { grid-area:arrow; align-self:center; }.news-footer { margin-top:29px; }.news-all-link { font-size:.91rem; } }

/* SECTION 06: contact */
.contact-section { position:relative; overflow:hidden; padding:106px 0 112px; color:#fff; background:var(--navy-deep); text-align:center; }.contact-section::before,.contact-section::after { content:""; position:absolute; border:1px solid rgba(112,202,239,.22); border-radius:50%; pointer-events:none; }.contact-section::before { width:470px; height:470px; left:-265px; bottom:-330px; }.contact-section::after { width:380px; height:380px; right:-235px; top:-270px; border-color:rgba(103,204,160,.2); }.contact-inner { position:relative; z-index:1; max-width:810px; margin:auto; padding:0 24px; }.contact-kicker { display:flex; align-items:center; justify-content:center; gap:12px; margin:0 0 20px; color:#78c8ed; font-size:.78rem; font-weight:800; letter-spacing:.2em; }.contact-kicker span { width:30px; height:2px; background:#54b5e2; }.contact-inner h2 { margin:0; font-size:clamp(2rem,3.1vw,3rem); line-height:1.45; letter-spacing:.025em; }.contact-inner>p:last-of-type { max-width:655px; margin:20px auto 0; color:#c0d1df; font-size:1rem; line-height:1.8; }.contact-actions { display:flex; justify-content:center; gap:13px; margin-top:33px; }.contact-primary,.contact-secondary { min-height:57px; padding:0 25px; display:inline-flex; align-items:center; justify-content:center; gap:13px; border-radius:8px; font-size:1rem; font-weight:800; transition:background .2s,transform .2s,border-color .2s; }.contact-primary { color:#fff; background:var(--green); box-shadow:0 8px 17px rgba(0,0,0,.15); }.contact-primary:hover { background:var(--green-dark); transform:translateY(-2px); }.contact-secondary { border:1px solid rgba(217,237,248,.65); color:#e6f4fc; }.contact-secondary:hover { border-color:#fff; background:rgba(255,255,255,.08); }.contact-primary b,.contact-secondary b { font-size:1.18rem; font-weight:400; }.contact-primary:focus-visible,.contact-secondary:focus-visible { outline:3px solid #82c8ec; outline-offset:4px; }
/* shared footer */
.site-footer { color:#e0edf5; background:#051d37; }.footer-main { max-width:1360px; margin:auto; padding:64px clamp(24px,4vw,70px) 52px; display:grid; grid-template-columns:minmax(250px,.85fr) minmax(550px,1.45fr); gap:75px; }.footer-brand-name { display:flex; align-items:center; gap:10px; color:#fff; font-size:1.8rem; font-weight:800; letter-spacing:.16em; }.footer-mark { width:34px; height:34px; display:grid; place-items:center; border-radius:6px; color:#062b52; background:linear-gradient(135deg,#62bde7,#d8f3ff); font-size:1.05rem; font-weight:900; letter-spacing:0; }.footer-brand p { margin:17px 0 4px; color:#c5d6e2; font-size:.91rem; }.footer-brand small { color:#819bb0; font-size:.77rem; }.footer-nav { display:grid; grid-template-columns:1.12fr 1.35fr .8fr; gap:28px; }.footer-nav div { display:grid; align-content:start; gap:11px; }.footer-nav h2 { margin:0 0 5px; color:#73c9ef; font-family:Arial,sans-serif; font-size:.68rem; font-weight:700; letter-spacing:.16em; }.footer-nav a { width:max-content; max-width:100%; color:#d6e4ed; font-size:.84rem; line-height:1.5; transition:color .2s; }.footer-nav a:hover { color:#71c8ee; }.footer-nav a:focus-visible,.footer-bottom a:focus-visible,.footer-brand-name:focus-visible { outline:2px solid #71c8ee; outline-offset:4px; }.footer-bottom { max-width:1360px; min-height:71px; margin:auto; padding:0 clamp(24px,4vw,70px); border-top:1px solid rgba(179,211,230,.17); display:flex; align-items:center; justify-content:space-between; color:#849eb2; font-size:.75rem; }.footer-bottom a { color:#b7cbd8; transition:color .2s; }.footer-bottom a:hover { color:#71c8ee; }.footer-bottom small { font-size:.75rem; }
@media (max-width:900px) { .footer-main { grid-template-columns:1fr; gap:42px; }.footer-nav { max-width:700px; }.contact-section { padding:88px 0 93px; } }
@media (max-width:767px) { .contact-section { padding:76px 0 80px; text-align:left; }.contact-inner { padding:0 18px; }.contact-kicker { justify-content:flex-start; }.contact-inner h2 { font-size:clamp(1.78rem,7.4vw,2.2rem); line-height:1.5; }.contact-inner>p:last-of-type { margin:16px 0 0; font-size:.92rem; line-height:1.75; }.contact-actions { display:grid; grid-template-columns:1fr; gap:10px; margin-top:27px; }.contact-primary,.contact-secondary { width:100%; min-height:55px; font-size:.94rem; }.footer-main { padding:49px 18px 37px; gap:36px; }.footer-brand-name { font-size:1.55rem; }.footer-brand p { margin-top:14px; font-size:.86rem; }.footer-nav { grid-template-columns:1fr 1fr; gap:29px 21px; }.footer-nav div:last-child { grid-column:1/-1; }.footer-nav a { font-size:.82rem; }.footer-bottom { min-height:0; padding:21px 18px; flex-direction:column; align-items:flex-start; gap:15px; font-size:.72rem; }.footer-bottom small { font-size:.72rem; } }

/* Static case summaries: only the section-level link leads to the case index. */
.case-card { cursor:default; transition:none; }
.case-card:hover { border-color:#dce8ee; box-shadow:0 5px 15px rgba(17,69,105,.045); }
.case-card:hover .cloud-shape,.case-card:hover .case-more i { transform:none; }

/* HOME news: summary rows are deliberately static until individual articles exist. */
.news-item--static { grid-template-columns:116px 103px minmax(0,1fr); cursor:default; }
.news-item--static:hover { background:transparent; }
.news-item--static:hover h3 { color:var(--navy); }
@media (max-width:767px) {
  .news-item--static { grid-template-columns:1fr; grid-template-areas:"meta" "title"; }
  .news-item--static h3 { padding-right:0; }
}


===== FILE: subpage.css =====

/* Shared typography and spacing for lower-level pages only. */
:root { --subpage-body:1.0625rem; --subpage-copy:1rem; --subpage-section-space:92px; }
.breadcrumb { font-size:.84rem; }
.page-kicker,.section-label { font-size:.9rem; letter-spacing:.16em; }
.page-hero-inner,.company-hero-inner,.cases-hero-inner,.news-hero-inner,.contact-hero-inner,.privacy-hero-inner { min-height:0; padding-top:60px; padding-bottom:54px; }
.page-hero h1,.company-hero h1,.cases-hero h1,.news-hero h1,.contact-hero h1,.privacy-hero h1 { font-size:clamp(2.5rem,3.2vw,3rem); }
.page-hero-inner>p:not(.page-kicker),.company-hero p:not(.page-kicker),.cases-hero p:not(.page-kicker),.news-hero p:not(.page-kicker),.contact-hero p:not(.page-kicker),.privacy-hero p:not(.page-kicker) { font-size:1.125rem; line-height:1.8; }
.content-section { padding-top:var(--subpage-section-space); padding-bottom:var(--subpage-section-space); }
.company-section { padding-top:92px; padding-bottom:92px; }
.case-list-section { padding-top:92px; padding-bottom:96px; }
.news-list-section { padding-top:88px; padding-bottom:96px; }
.contact-main { padding-top:90px; padding-bottom:98px; }
.policy-inner { padding-top:90px; padding-bottom:100px; }
.service-detail-inner,.service-detail-inner--reverse { min-height:0; padding-top:88px; padding-bottom:88px; }
.section-heading h2,.values-heading h2,.message-grid h2,.story-copy h2,.service-detail-copy h2,.contact-intro h2,.policy-inner>h2 { font-size:clamp(1.9rem,2.5vw,2.35rem); }
.message-body,.story-copy,.service-lead,.contact-intro>p:not(.section-label),.policy-list p,.case-summary dd,.profile-list dd,.access-copy p { font-size:var(--subpage-body); line-height:1.82; }
.belief>p:last-child,.values-grid p,.business-grid p,.case-list-card p,.news-row p,.service-detail-copy li,.contact-intro li,.policy-list ul { font-size:var(--subpage-copy); line-height:1.75; }
.values-grid h3,.business-grid h3 { font-size:1.2rem; }
.case-list-card h3 { font-size:1.35rem; }
.news-row h3 { font-size:1.12rem; }
.service-detail-copy li { min-height:51px; }
.case-summary dt,.news-label,.case-meta,.profile-list dt { font-size:.84rem; }
@media (max-width:767px) {
  :root { --subpage-body:1rem; --subpage-copy:.94rem; --subpage-section-space:72px; }
  .breadcrumb { font-size:.8rem; }
  .page-kicker,.section-label { font-size:.76rem; }
  .page-hero-inner,.company-hero-inner,.cases-hero-inner,.news-hero-inner,.contact-hero-inner,.privacy-hero-inner { padding-top:50px; padding-bottom:48px; }
  .page-hero h1,.company-hero h1,.cases-hero h1,.news-hero h1,.contact-hero h1,.privacy-hero h1 { font-size:clamp(2rem,9vw,2.25rem); }
  .page-hero-inner>p:not(.page-kicker),.company-hero p:not(.page-kicker),.cases-hero p:not(.page-kicker),.news-hero p:not(.page-kicker),.contact-hero p:not(.page-kicker),.privacy-hero p:not(.page-kicker) { font-size:1rem; }
  .company-section,.case-list-section,.news-list-section,.contact-main,.policy-inner { padding-top:72px; padding-bottom:76px; }
  .service-detail-inner,.service-detail-inner--reverse { padding-top:72px; padding-bottom:72px; }
  .section-heading h2,.values-heading h2,.message-grid h2,.story-copy h2,.service-detail-copy h2,.contact-intro h2,.policy-inner>h2 { font-size:1.85rem; }
  .case-list-card h3 { font-size:1.12rem; }
  .news-row h3 { font-size:1rem; }
}


===== FILE: about/about.css =====

.breadcrumb-wrap { max-width:1536px; margin:auto; padding:16px clamp(24px,4vw,70px); }
.breadcrumb { display:flex; align-items:center; gap:11px; color:#7890a0; font-size:.84rem; }.breadcrumb a { color:#55728a; }.breadcrumb a:hover { color:#1679b9; }
.page-hero.about-hero { position:relative; overflow:hidden; border-top:1px solid #e5f0f4; background:#f4fafc; }
.page-hero.about-hero .about-hero-inner { position:relative; min-height:228px; max-width:1360px; margin:auto; padding:0 clamp(24px,4vw,70px); }
.about-hero-copy { position:relative; z-index:1; display:flex; width:53%; min-height:228px; flex-direction:column; justify-content:center; padding:40px 0; }
.page-kicker,.section-label { margin:0; color:#258bc8; font-size:.9rem; font-weight:800; letter-spacing:.16em; }.page-kicker { display:flex; align-items:center; gap:12px; }.page-kicker span { width:33px; height:2px; background:#60b7e4; }
.page-hero.about-hero h1 { margin:17px 0 14px; color:var(--navy-deep); font-size:clamp(2.5rem,3.2vw,3rem); line-height:1.3; letter-spacing:.04em; }
.about-hero-copy>p:not(.page-kicker) { max-width:550px; margin:0; color:#536b7d; font-size:1.125rem; line-height:1.8; }
.about-hero-photo { position:absolute; z-index:0; inset:0 0 0 39%; min-height:0; margin:0; overflow:hidden; }.about-hero-photo::after { position:absolute; inset:0; content:""; background:linear-gradient(90deg,rgba(244,250,252,.98) 0%,rgba(244,250,252,.78) 18%,rgba(244,250,252,.28) 48%,rgba(244,250,252,0) 72%); pointer-events:none; }.about-hero-photo img { display:block; width:100%; height:100%; object-fit:cover; object-position:center; }
.about-features { max-width:1180px; margin:auto; padding:52px clamp(24px,4vw,70px) 62px; }
.about-feature { border-top:1px solid #d9e7ed; }.about-feature:last-child { border-bottom:1px solid #d9e7ed; }
.about-feature-inner { display:grid; grid-template-columns:minmax(0,1.1fr) minmax(340px,.9fr); align-items:center; gap:clamp(48px,7vw,92px); padding:48px 0; }
.feature-copy { max-width:540px; }.feature-index { display:flex; align-items:baseline; gap:15px; margin:0; color:#9fc6dd; font:800 1.72rem/1 Arial,sans-serif; letter-spacing:.03em; }.feature-index span { color:#5d9fd0; font-size:.76rem; letter-spacing:.13em; }.feature-index::after { display:none; }
.feature-copy h2 { margin:17px 0 18px; color:var(--navy-deep); font-size:clamp(1.75rem,2.2vw,2.05rem); line-height:1.45; letter-spacing:.02em; }
.feature-copy p:not(.feature-index) { margin:0; color:#506b7d; font-size:1.0625rem; line-height:1.82; }
.feature-photo { width:100%; margin:0; overflow:hidden; border:1px solid #d8e9ef; border-radius:5px; background:#eef5f7; aspect-ratio:3/2; box-shadow:0 8px 20px rgba(22,75,104,.04); }
.feature-photo img { display:block; width:100%; height:100%; object-fit:cover; object-position:center; }
.mission-photo img { object-position:center center; }.approach-photo img { object-position:center center; }.value-photo img { object-position:center center; }
@media (max-width:767px) { .breadcrumb-wrap { padding:13px 18px; }.breadcrumb { font-size:.8rem; }.page-hero.about-hero .about-hero-inner { display:flex; min-height:0; flex-direction:column; padding:0; }.about-hero-copy { display:flex; width:auto; min-height:0; padding:46px 18px 32px; }.page-kicker,.section-label { font-size:.76rem; }.page-hero.about-hero h1 { margin:16px 0 12px; font-size:clamp(2rem,9vw,2.25rem); }.about-hero-copy>p:not(.page-kicker) { font-size:1rem; }.about-hero-photo { position:relative; inset:auto; width:100%; min-height:0; margin:0; aspect-ratio:16/9; }.about-hero-photo::after { display:none; }.about-features { padding:38px 18px 52px; }.about-feature-inner { display:flex; flex-direction:column; gap:25px; padding:48px 0; }.feature-copy { max-width:none; }.feature-index { font-size:1.45rem; }.feature-index span { font-size:.7rem; }.feature-copy h2 { margin:14px 0 15px; font-size:1.82rem; }.feature-copy p:not(.feature-index) { font-size:1rem; line-height:1.8; }.feature-photo { aspect-ratio:3/2; border-radius:5px; } }


===== FILE: about/index.html =====

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <meta name="description" content="LINOAの考え方と、中小企業に寄り添うIT支援の姿勢をご紹介します。" />
    <title>私たちについて | LINOA</title>
    <link rel="stylesheet" href="/styles.css" />
    <link rel="stylesheet" href="/about/about.css" />
    <link rel="stylesheet" href="/subpage.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="LINOA トップへ"><span class="brand-mark" aria-hidden="true"><i></i><b></b></span><span class="brand-copy"><strong>LINOA</strong><small>ITで、ビジネスにもっと余白を。</small></span></a>
        <nav class="desktop-nav" aria-label="メインナビゲーション"><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a></nav>
        <a class="header-cta" href="/contact"><span class="mail-icon" aria-hidden="true"></span>お問い合わせ <span aria-hidden="true">›</span></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span><em>MENU</em></button>
      </div>
      <nav id="mobile-nav" class="mobile-nav" aria-label="モバイルナビゲーション" hidden><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a><a class="mobile-contact" href="/contact">お問い合わせ</a></nav>
    </header>
    <main>
      <div class="breadcrumb-wrap"><nav class="breadcrumb" aria-label="パンくずリスト"><a href="/">HOME</a><span aria-hidden="true">›</span><span aria-current="page">私たちについて</span></nav></div>
      <section class="page-hero about-hero" aria-labelledby="page-title"><div class="about-hero-inner"><div class="about-hero-copy"><p class="page-kicker"><span></span>ABOUT</p><h1 id="page-title">私たちについて</h1><p>LINOAは、ITの力で中小企業の「やりたい」を実現するパートナーです。</p></div><figure class="about-hero-photo"><img src="/assets/linoa_about_hero_photo_generated.png" alt="明るいオフィスの机とノートパソコン" /></figure></div></section>

      <section class="about-features" aria-label="LINOAの紹介">
        <article class="about-feature"><div class="about-feature-inner"><div class="feature-copy"><p class="feature-index">01 <span>OUR MISSION</span></p><h2>中小企業の可能性を広げる、ITのパートナーとして</h2><p>LINOAは、ITを特別なものではなく、日々の業務の中で無理なく使いこなせるものにすることで、中小企業の成長を支援します。</p></div><figure class="feature-photo mission-photo"><img src="/assets/linoa_message_photo_clean.png" alt="企業担当者とLINOA担当者が会話している様子" /></figure></div></article>
        <article class="about-feature"><div class="about-feature-inner"><div class="feature-copy"><p class="feature-index">02 <span>OUR APPROACH</span></p><h2>現場に寄り添い、一緒に考え、進める</h2><p>一方的にシステムを導入するのではなく、お客様の業務や課題を丁寧に理解し、一緒に考えながら最適な方法を見つけていきます。</p></div><figure class="feature-photo approach-photo"><img src="/assets/linoa_story_photo_clean.png" alt="PCや資料を使いながら業務を整理するオフィスの様子" /></figure></div></article>
        <article class="about-feature"><div class="about-feature-inner"><div class="feature-copy"><p class="feature-index">03 <span>OUR VALUE</span></p><h2>人とITで、これからの働き方をつくる</h2><p>ITの仕組みだけでなく、それを使う「人」の視点を大切にし、働く人がより前向きに、安心して業務に取り組める環境づくりを目指します。</p></div><figure class="feature-photo value-photo"><img src="/assets/linoa_value_photo_generated.png" alt="明るいオフィスでチームがIT活用について話し合う様子" /></figure></div></article>
      </section>
      <section class="contact-section" aria-labelledby="about-contact-title">
        <div class="contact-inner">
          <p class="contact-kicker"><span></span>CONTACT<span></span></p>
          <h2 id="about-contact-title">ITのこと、まずは気軽にご相談ください。</h2>
          <p>Webサイトや業務改善、クラウド、AI活用など、まだ具体的な方法が決まっていない段階でもご相談いただけます。</p>
          <div class="contact-actions"><a class="contact-primary" href="/contact"><span class="mail-icon" aria-hidden="true"></span>お問い合わせ <b aria-hidden="true">→</b></a></div>
        </div>
      </section>
    </main>
    <footer class="site-footer"><div class="footer-main"><div class="footer-brand"><a class="footer-brand-name" href="/" aria-label="LINOA トップへ"><span class="footer-mark" aria-hidden="true">L</span>LINOA</a><p>ITで、ビジネスにもっと余白を。</p><small>中小企業向けIT・Web支援</small></div><nav class="footer-nav" aria-label="フッターナビゲーション"><div><h2>COMPANY</h2><a href="/about">私たちについて</a><a href="/company">会社情報</a></div><div><h2>SERVICES</h2><a href="/services">サービス</a></div><div><h2>CONTENT</h2><a href="/cases">導入事例</a><a href="/news">お知らせ</a><a href="/contact">お問い合わせ</a></div></nav></div><div class="footer-bottom"><a href="/privacy">プライバシーポリシー</a><small>© 2026 LINOA Inc.</small></div></footer>
    <script src="/scripts/main.js"></script>
  </body>
</html>


===== FILE: cases/cases.css =====

.breadcrumb-wrap { max-width:1536px; margin:auto; padding:16px clamp(24px,4vw,70px); }.breadcrumb { display:flex; align-items:center; gap:11px; color:#7890a0; font-size:.74rem; }.breadcrumb a { color:#55728a; }.breadcrumb a:hover { color:#1679b9; }.cases-hero { overflow:hidden; background:#f4fafc; border-top:1px solid #e5f0f4; }.cases-hero-inner { position:relative; max-width:1360px; min-height:285px; margin:auto; padding:63px clamp(24px,4vw,70px); }.page-kicker,.section-label { margin:0; color:#258bc8; font-size:.75rem; font-weight:800; letter-spacing:.19em; }.page-kicker { display:flex; align-items:center; gap:12px; }.page-kicker span { width:33px; height:2px; background:#60b7e4; }.cases-hero h1 { position:relative; z-index:1; margin:18px 0 12px; color:var(--navy-deep); font-size:clamp(2.35rem,4vw,4rem); line-height:1.3; letter-spacing:.04em; }.cases-hero p:not(.page-kicker) { position:relative; z-index:1; margin:0; color:#536b7d; font-size:1rem; line-height:1.8; }.cases-hero i { position:absolute; width:440px; height:440px; top:-250px; right:8%; border:1px solid #b4e0f3; border-radius:50%; }.case-list-section { max-width:1360px; margin:auto; padding:108px clamp(24px,4vw,70px) 120px; }.section-heading { margin-bottom:42px; }.section-heading h2 { margin:16px 0 0; color:var(--navy-deep); font-size:clamp(1.9rem,3vw,2.7rem); }.case-list-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:23px; }.case-list-card { overflow:hidden; border:1px solid #d7e7ed; border-radius:16px; background:#fff; box-shadow:0 6px 17px rgba(16,69,106,.045); }.case-visual { position:relative; height:198px; overflow:hidden; }.case-number { position:absolute; z-index:2; top:17px; left:18px; color:rgba(255,255,255,.92); font:700 .64rem Arial,sans-serif; letter-spacing:.13em; }.case-visual--manufacturing { background:linear-gradient(140deg,#155985,#36a3bd); }.factory { position:absolute; bottom:27px; left:12%; width:56%; height:66px; border:3px solid rgba(255,255,255,.8); border-top:0; background:repeating-linear-gradient(90deg,rgba(255,255,255,.15) 0 24px,transparent 24px 42px); }.factory::before { content:""; position:absolute; width:53px; height:53px; top:-26px; left:17px; border:3px solid rgba(255,255,255,.8); border-bottom:0; transform:skewY(-38deg); }.daily-report { position:absolute; top:47px; right:11%; width:73px; height:93px; padding:20px 11px; border-radius:5px; background:#fff; transform:rotate(5deg); box-shadow:0 9px 18px rgba(0,39,75,.19); }.daily-report i { display:block; height:6px; margin-bottom:10px; background:#4aaed0; }.daily-report i:nth-child(2) { width:70%; }.daily-report i:nth-child(3) { width:45%; background:#7ac8ad; }.cloud-mark { position:absolute; right:30%; bottom:24px; color:#d6f6ff; font-size:2rem; }.case-visual--care { background:linear-gradient(145deg,#3689a8,#86c6b6); }.web-window { position:absolute; bottom:30px; left:17%; width:62%; height:110px; padding:21px 17px; border:3px solid rgba(255,255,255,.84); border-radius:7px; background:rgba(255,255,255,.15); }.web-window::before { content:""; position:absolute; top:11px; left:15px; width:52px; border-top:3px solid rgba(255,255,255,.8); }.web-window i { display:block; height:11px; margin:18px 0; background:rgba(255,255,255,.75); }.web-window i:nth-child(2) { width:68%; }.web-window i:nth-child(3) { width:35%; background:#d2f1df; }.care-bubble { position:absolute; top:41px; right:13%; display:grid; width:50px; height:50px; place-items:center; border-radius:50%; color:#319278; background:#e7faef; font-size:1.2rem; }.care-line { position:absolute; right:22%; bottom:39px; width:58px; border-top:2px dashed #dff8ef; transform:rotate(-35deg); }.case-visual--construction { background:linear-gradient(140deg,#15577f,#5ba1cd); }.building { position:absolute; bottom:25px; left:17%; width:115px; height:116px; border:3px solid rgba(255,255,255,.8); background:rgba(255,255,255,.11); }.building::before { content:""; position:absolute; top:-32px; left:18px; width:40px; height:29px; border:3px solid rgba(255,255,255,.8); border-bottom:0; }.building i { display:block; width:14px; height:13px; margin:16px 0 0 17px; background:rgba(255,255,255,.68); box-shadow:35px 0 rgba(255,255,255,.68),70px 0 rgba(255,255,255,.68); }.folder { position:absolute; right:15%; bottom:35px; display:grid; width:72px; height:54px; place-items:center; border-radius:5px; color:#4e9ed2; background:#edfaff; font-size:2.1rem; }.share-cloud { position:absolute; top:48px; right:19%; color:#e3f5ff; font-size:2.6rem; }.case-card-copy { padding:23px 24px 27px; }.case-meta { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:16px; font-size:.71rem; font-weight:800; }.case-meta span { color:#5d7485; }.case-meta b { padding:3px 7px; border-radius:3px; color:#168077; background:#eaf8f2; }.case-list-card:nth-child(2) .case-meta b { color:#247fb2; background:#eaf6fc; }.case-list-card h3 { margin:0; color:var(--navy); font-size:1.12rem; line-height:1.55; letter-spacing:.01em; }.case-list-card p { margin:14px 0 0; color:#607889; font-size:.86rem; line-height:1.75; }.case-areas { background:#f6fafc; }.case-areas-inner { max-width:1120px; margin:auto; padding:81px clamp(24px,4vw,70px); display:grid; grid-template-columns:.8fr 1fr; gap:36px 90px; align-items:center; }.case-areas h2 { margin:16px 0 0; color:var(--navy-deep); font-size:clamp(1.55rem,2.5vw,2.2rem); line-height:1.48; }.case-areas ul { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:0; padding:0; list-style:none; }.case-areas li { padding:14px 16px; border:1px solid #d5e6ed; border-radius:7px; color:#45647a; background:#fff; font-size:.86rem; font-weight:700; }.case-areas a { display:inline-flex; width:max-content; gap:12px; padding-bottom:8px; border-bottom:2px solid #2a91c6; color:#176f9f; font-size:.9rem; font-weight:800; }.cases-contact { padding:77px 24px 81px; color:#fff; background:var(--navy-deep); text-align:center; }.cases-contact .section-label { color:#7bc9ec; }.cases-contact h2 { margin:14px 0 10px; font-size:clamp(1.75rem,2.6vw,2.35rem); }.cases-contact p:not(.section-label) { margin:0; color:#bed2df; font-size:.93rem; }.cases-contact a { display:inline-flex; gap:12px; margin-top:23px; padding-bottom:8px; border-bottom:2px solid #63bce3; color:#e8f7ff; font-size:.94rem; font-weight:800; }
@media (max-width:1000px) { .case-list-grid { grid-template-columns:1fr 1fr; }.case-list-card:last-child { grid-column:1/-1; max-width:calc(50% - 12px); }.case-areas-inner { gap:36px 55px; } }
@media (max-width:767px) { .breadcrumb-wrap { padding:13px 18px; }.cases-hero-inner { min-height:0; padding:52px 18px 55px; }.cases-hero h1 { margin:16px 0 10px; font-size:2.28rem; }.cases-hero p:not(.page-kicker) { font-size:.91rem; }.cases-hero i { width:280px; height:280px; top:-165px; right:-105px; }.case-list-section { padding:74px 18px 80px; }.section-heading { margin-bottom:29px; }.section-heading h2 { font-size:1.82rem; }.case-list-grid { grid-template-columns:1fr; gap:15px; }.case-list-card:last-child { grid-column:auto; max-width:none; }.case-visual { height:190px; }.case-card-copy { padding:21px 20px 23px; }.case-list-card h3 { font-size:1.05rem; }.case-list-card h3 br { display:none; }.case-list-card p { font-size:.84rem; }.case-areas-inner { grid-template-columns:1fr; gap:28px; padding:72px 18px; }.case-areas h2 { font-size:1.68rem; }.case-areas h2 br { display:none; }.case-areas ul { gap:8px; }.case-areas li { padding:12px; font-size:.8rem; }.cases-contact { padding:69px 18px 73px; text-align:left; } }

/* Case details remain on one page, without individual detail links. */
.case-list-grid { grid-template-columns:1fr; gap:28px; }
.case-list-card { display:grid; grid-template-columns:minmax(280px,.7fr) minmax(0,1.3fr); align-items:stretch; border-radius:15px; }
.case-visual { height:auto; min-height:300px; }
.case-card-copy { padding:33px 38px 34px; }
.case-list-card h3 { font-size:clamp(1.2rem,2vw,1.48rem); }
.case-summary { display:grid; gap:0; margin:25px 0 0; border-top:1px solid #deebf0; }
.case-summary>div { display:grid; grid-template-columns:88px minmax(0,1fr); gap:18px; padding:14px 0; border-bottom:1px solid #deebf0; }
.case-summary dt { color:#2d82ad; font-size:.78rem; font-weight:800; }
.case-summary dd { margin:0; color:#587183; font-size:.88rem; line-height:1.72; }
@media (max-width:767px) { .case-list-grid { gap:18px; }.case-list-card { display:block; }.case-visual { min-height:190px; height:190px; }.case-card-copy { padding:23px 20px 25px; }.case-summary { margin-top:20px; }.case-summary>div { grid-template-columns:1fr; gap:5px; padding:13px 0; }.case-summary dt { font-size:.75rem; }.case-summary dd { font-size:.84rem; } }

/* Rebuilt CASES page hero */
.cases-hero{position:relative;overflow:hidden;background:#f4fafc;border-top:1px solid #e5f0f4}.cases-hero-inner{position:relative;min-height:244px;max-width:1360px;margin:auto;padding:0 clamp(24px,4vw,70px)}.cases-hero-copy{position:relative;z-index:1;display:flex;width:45%;min-height:244px;flex-direction:column;justify-content:center;padding:42px 0}.cases-hero .page-kicker{margin:0;color:#258bc8;font-size:.88rem;font-weight:800;letter-spacing:.16em}.cases-hero h1{position:static;margin:17px 0 13px;color:var(--navy-deep);font-size:clamp(2.55rem,3.3vw,3.05rem);line-height:1.3;letter-spacing:.04em}.cases-hero-copy>p:not(.page-kicker){position:static;max-width:540px;margin:0;color:#536b7d;font-size:1.125rem;line-height:1.8}.cases-hero-photo{position:absolute;z-index:0;inset:0 0 0 37%;margin:0;overflow:hidden}.cases-hero-photo::after{position:absolute;inset:0;content:"";background:linear-gradient(90deg,rgba(244,250,252,.98) 0%,rgba(244,250,252,.78) 18%,rgba(244,250,252,.28) 48%,rgba(244,250,252,0) 72%)}.cases-hero-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}
@media(max-width:767px){.cases-hero-inner{display:flex;min-height:0;flex-direction:column;padding:0}.cases-hero-copy{display:flex;width:auto;min-height:0;padding:46px 18px 32px}.cases-hero h1{margin:16px 0 12px;font-size:2.28rem}.cases-hero-copy>p:not(.page-kicker){font-size:1rem}.cases-hero-photo{position:relative;inset:auto;width:100%;aspect-ratio:16/9}.cases-hero-photo::after{display:none}}


===== FILE: cases/index.html =====

<!doctype html>
<html lang="ja"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="icon" href="/favicon.ico" sizes="any" /><meta name="description" content="LINOAが支援した企業の導入事例をご紹介します。" /><title>導入事例 | LINOA</title><link rel="stylesheet" href="/styles.css" /><link rel="stylesheet" href="/cases/cases.css" /><link rel="stylesheet" href="/subpage.css" /></head>
<body>
<header class="site-header"><div class="header-inner"><a class="brand" href="/" aria-label="LINOA トップへ"><span class="brand-mark" aria-hidden="true"><i></i><b></b></span><span class="brand-copy"><strong>LINOA</strong><small>ITで、ビジネスにもっと余白を。</small></span></a><nav class="desktop-nav" aria-label="メインナビゲーション"><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a></nav><a class="header-cta" href="/contact"><span class="mail-icon" aria-hidden="true"></span>お問い合わせ <span aria-hidden="true">›</span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span><em>MENU</em></button></div><nav id="mobile-nav" class="mobile-nav" aria-label="モバイルナビゲーション" hidden><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a><a class="mobile-contact" href="/contact">お問い合わせ</a></nav></header>
<main>
<div class="breadcrumb-wrap"><nav class="breadcrumb" aria-label="パンくずリスト"><a href="/">HOME</a><span aria-hidden="true">›</span><span aria-current="page">導入事例</span></nav></div>
<section class="cases-hero" aria-labelledby="cases-page-title"><div class="cases-hero-inner"><div class="cases-hero-copy"><p class="page-kicker"><span></span>CASES</p><h1 id="cases-page-title">導入事例</h1><p>企業ごとの課題に合わせた、LINOAの支援事例をご紹介します。</p></div><figure class="cases-hero-photo"><img src="/assets/linoa_cases_hero_generated.png" alt="PCと業務資料を見ながら改善案を確認する様子" /></figure></div></section>
<section class="case-list-section" aria-labelledby="case-list-title">
  <header class="section-heading"><p class="section-label">CASE STUDIES</p><h2 id="case-list-title">支援事例一覧</h2></header>
  <div class="case-list-grid">
    <article class="case-list-card">
      <div class="case-visual case-visual--manufacturing" aria-hidden="true"><span class="case-number">CASE 01</span><span class="factory"></span><span class="daily-report"><i></i><i></i><i></i></span><span class="cloud-mark">☁</span></div>
      <div class="case-card-copy"><div class="case-meta"><span>製造業</span><b>業務改善・DX支援</b></div><h3>紙の日報管理をクラウド化し、情報共有をスムーズに</h3><dl class="case-summary"><div><dt>課題</dt><dd>紙の日報を各担当者が記入し、管理者が後から確認・集計していた。</dd></div><div><dt>支援内容</dt><dd>入力・確認・共有までをオンラインで行える業務フローへ整理。</dd></div><div><dt>導入後</dt><dd>情報確認がしやすくなり、日報を探したり転記したりする作業を減らせる運用になった。</dd></div></dl></div>
    </article>
    <article class="case-list-card">
      <div class="case-visual case-visual--care" aria-hidden="true"><span class="case-number">CASE 02</span><span class="web-window"><i></i><i></i><i></i></span><span class="care-bubble">✦</span><span class="care-line"></span></div>
      <div class="case-card-copy"><div class="case-meta"><span>介護・福祉</span><b>Web制作</b></div><h3>採用と問い合わせにつながるWebサイトへリニューアル</h3><dl class="case-summary"><div><dt>課題</dt><dd>情報が整理されておらず、利用希望者と求職者が必要な情報を探しにくかった。</dd></div><div><dt>支援内容</dt><dd>情報設計を見直し、利用案内・採用情報・問い合わせ導線を整理。</dd></div><div><dt>導入後</dt><dd>目的別に情報を探しやすいWebサイトになった。</dd></div></dl></div>
    </article>
    <article class="case-list-card">
      <div class="case-visual case-visual--construction" aria-hidden="true"><span class="case-number">CASE 03</span><span class="building"><i></i><i></i><i></i><i></i></span><span class="folder">▰</span><span class="share-cloud">☁</span></div>
      <div class="case-card-copy"><div class="case-meta"><span>建設業</span><b>クラウド導入支援</b></div><h3>社内の情報共有をクラウドへ集約</h3><dl class="case-summary"><div><dt>課題</dt><dd>資料がメールや個人PCなど複数の場所に分散していた。</dd></div><div><dt>支援内容</dt><dd>資料の保存ルールを整理し、クラウド上で共有できる環境を構築。</dd></div><div><dt>導入後</dt><dd>必要な資料を社内で確認しやすい運用へ改善した。</dd></div></dl></div>
    </article>
  </div>
</section>
<section class="case-areas" aria-labelledby="areas-title"><div class="case-areas-inner"><div><p class="section-label">SUPPORT AREAS</p><h2 id="areas-title">さまざまな支援領域で<br />事例を積み重ねています</h2></div><ul><li>Web制作</li><li>業務改善・DX支援</li><li>クラウド導入支援</li><li>AI活用支援</li></ul></div></section>
<section class="cases-contact" aria-labelledby="cases-contact-title"><p class="section-label">CONTACT</p><h2 id="cases-contact-title">お問い合わせ</h2><p>ご相談内容に合わせて、必要な支援を一緒に整理します。</p><a href="/contact">お問い合わせはこちら <span aria-hidden="true">→</span></a></section>
</main>
<footer class="site-footer"><div class="footer-main"><div class="footer-brand"><a class="footer-brand-name" href="/" aria-label="LINOA トップへ"><span class="footer-mark" aria-hidden="true">L</span>LINOA</a><p>ITで、ビジネスにもっと余白を。</p><small>中小企業向けIT・Web支援</small></div><nav class="footer-nav" aria-label="フッターナビゲーション"><div><h2>COMPANY</h2><a href="/about">私たちについて</a><a href="/company">会社情報</a></div><div><h2>SERVICES</h2><a href="/services">サービス</a></div><div><h2>CONTENT</h2><a href="/cases">導入事例</a><a href="/news">お知らせ</a><a href="/contact">お問い合わせ</a></div></nav></div><div class="footer-bottom"><a href="/privacy">プライバシーポリシー</a><small>© 2026 LINOA Inc.</small></div></footer><script src="/scripts/main.js"></script>
</body></html>


===== FILE: company/company.css =====

.breadcrumb-wrap{max-width:1536px;margin:auto;padding:16px clamp(24px,4vw,70px)}.breadcrumb{display:flex;align-items:center;gap:11px;color:#7890a0;font-size:.84rem}.breadcrumb a{color:#55728a}.breadcrumb a:hover{color:#1679b9}
.company-hero{position:relative;overflow:hidden;border-top:1px solid #e5f0f4;background:#f4fafc}.company-hero-inner{position:relative;min-height:244px;max-width:1360px;margin:auto;padding:0 clamp(24px,4vw,70px)}.company-hero-copy{position:relative;z-index:1;display:flex;width:53%;min-height:244px;flex-direction:column;justify-content:center;padding:42px 0}.page-kicker,.section-label{margin:0;color:#258bc8;font-size:.88rem;font-weight:800;letter-spacing:.16em}.page-kicker{display:flex;align-items:center;gap:12px}.page-kicker span{width:33px;height:2px;background:#60b7e4}.company-hero h1{margin:17px 0 13px;color:var(--navy-deep);font-size:clamp(2.55rem,3.3vw,3.05rem);line-height:1.3;letter-spacing:.04em}.company-hero-copy>p:not(.page-kicker){max-width:530px;margin:0;color:#536b7d;font-size:1.125rem;line-height:1.8}.company-hero-photo{position:absolute;z-index:0;inset:0 0 0 39%;margin:0;overflow:hidden}.company-hero-photo::after{position:absolute;inset:0;content:"";background:linear-gradient(90deg,rgba(244,250,252,.98) 0%,rgba(244,250,252,.78) 18%,rgba(244,250,252,.28) 48%,rgba(244,250,252,0) 72%)}.company-hero-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}
.company-section{max-width:1180px;margin:auto;padding:80px clamp(24px,4vw,70px)}.company-heading{margin:0 0 27px}.company-heading p{margin:0;color:#5a9dcc;font:800 .78rem Arial,sans-serif;letter-spacing:.14em}.company-heading h2{margin:10px 0 0;color:var(--navy-deep);font-size:clamp(1.9rem,2.6vw,2.3rem);line-height:1.4}.company-heading h2::after{display:block;width:34px;height:1px;margin-top:12px;content:"";background:#65add2}
.representative-section{padding-bottom:72px}.representative-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(270px,.46fr);align-items:start;gap:clamp(54px,9vw,126px)}.representative-copy h3{margin:0 0 25px;color:var(--navy-deep);font-size:clamp(1.75rem,2.35vw,2.15rem);line-height:1.43;letter-spacing:.015em}.representative-body{max-width:635px}.representative-body p{margin:0 0 15px;color:#506b7d;font-size:1.0625rem;line-height:1.82}.representative-signature{margin:28px 0 0;color:#526e80;font-size:1rem}.representative-signature strong{margin-left:10px;color:var(--navy-deep);font-size:1.13rem;letter-spacing:.08em}.representative-photo{width:100%;max-width:365px;margin:3px 0 0 auto;overflow:hidden;border:1px solid #d9e9ef;border-radius:5px;background:#eef5f7;aspect-ratio:3/4}.representative-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center top}
.profile-section{border-top:1px solid #d9e7ed}.profile-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,.55fr);align-items:start;gap:clamp(48px,8vw,108px)}.profile-list{margin:0;border-top:1px solid #d7e6ed}.profile-list>div{display:grid;grid-template-columns:150px minmax(0,1fr);border-bottom:1px solid #d7e6ed}.profile-list dt{padding:16px 20px;color:#2d5773;font-size:.94rem;font-weight:800}.profile-list dd{margin:0;padding:16px 20px;color:#526d80;font-size:1rem;line-height:1.7}.profile-list dd ul{margin:0;padding:0;list-style:none}.profile-list dd li{position:relative;padding-left:15px}.profile-list dd li::before{position:absolute;top:.72em;left:1px;width:5px;height:5px;border-radius:50%;content:"";background:#5ba990}.office-photo{width:100%;margin:3px 0 0;overflow:hidden;border:1px solid #d9e9ef;border-radius:5px;background:#eef5f7;aspect-ratio:3/2}.office-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}
.history-section{max-width:900px;border-top:1px solid #d9e7ed}.history-list{margin:0;padding:0;list-style:none;border-left:1px solid #c8e1eb}.history-list li{position:relative;display:grid;grid-template-columns:145px 1fr;gap:28px;padding:0 0 24px 34px}.history-list li:last-child{padding-bottom:0}.history-list li::before{position:absolute;top:4px;left:-5px;width:9px;height:9px;border:3px solid #e8f7fb;border-radius:50%;content:"";background:#48a8d1}.history-list time{color:#2781ae;font-size:.94rem;font-weight:800}.history-list p{margin:0;color:#516c7e;font-size:1rem;line-height:1.65}
.access-section{max-width:none;padding-top:74px;padding-bottom:80px;background:#f6fafc}.access-section .company-heading,.access-grid{max-width:1040px;margin-left:auto;margin-right:auto}.access-grid{display:grid;grid-template-columns:.6fr 1fr;gap:clamp(50px,9vw,118px);align-items:center}.access-copy p{margin:0;color:#536f81;font-size:1.0625rem;line-height:1.9}.access-copy strong{color:var(--navy);font-size:1.15rem}.access-copy small{display:block;margin-top:20px;color:#8094a0;font-size:.8rem;line-height:1.65}.map-placeholder{position:relative;min-height:260px;overflow:hidden;border:1px solid #d4e6ec;border-radius:8px;background:#edf7f8}.map-road{position:absolute;background:#fff;opacity:.94}.road-one{top:47%;left:-20%;width:150%;height:35px;transform:rotate(-15deg)}.road-two{top:-15%;left:51%;width:38px;height:130%;transform:rotate(25deg)}.road-three{right:-20%;bottom:22%;width:115%;height:20px;transform:rotate(20deg)}.map-block{position:absolute;width:83px;height:56px;border:1px solid #d1e3e4;border-radius:5px;background:#dceeea}.block-one{top:17%;left:14%}.block-two{right:13%;bottom:16%;background:#d8e8f1}.map-placeholder b{position:absolute;z-index:2;top:47%;left:51%;display:grid;width:67px;height:67px;place-items:center;border-radius:50%;color:#fff;background:#218bbb;box-shadow:0 7px 16px rgba(30,109,145,.2);font:800 .7rem Arial,sans-serif;transform:translate(-50%,-50%)}.map-placeholder i{position:absolute;right:18px;bottom:15px;color:#7c9aa8;font:700 .63rem Arial,sans-serif;letter-spacing:.12em}
.company-contact{padding:70px 24px 74px;color:#fff;background:var(--navy-deep);text-align:center}.company-contact .section-label{color:#7bc9ec}.company-contact h2{margin:14px 0 18px;font-size:clamp(1.75rem,2.6vw,2.35rem)}.company-contact a{display:inline-flex;align-items:center;gap:12px;padding-bottom:8px;border-bottom:2px solid #63bce3;color:#e8f7ff;font-size:.98rem;font-weight:800}.company-contact a:hover{color:#fff}
@media(max-width:900px){.representative-grid{grid-template-columns:minmax(0,1fr) minmax(240px,.55fr);gap:40px}.profile-grid{grid-template-columns:minmax(0,1fr) minmax(260px,.6fr);gap:38px}}
@media(max-width:767px){.breadcrumb-wrap{padding:13px 18px}.breadcrumb{font-size:.8rem}.company-hero-inner{display:flex;min-height:0;flex-direction:column;padding:0}.company-hero-copy{display:flex;width:auto;min-height:0;padding:46px 18px 32px}.company-hero h1{margin:16px 0 12px;font-size:2.28rem}.company-hero-copy>p:not(.page-kicker){font-size:1rem}.company-hero-photo{position:relative;inset:auto;width:100%;aspect-ratio:16/9}.company-hero-photo::after{display:none}.company-section{padding:62px 18px}.company-heading{margin-bottom:24px}.company-heading h2{font-size:1.82rem}.representative-section{padding-bottom:60px}.representative-grid,.profile-grid{display:flex;flex-direction:column;gap:25px}.representative-copy h3{font-size:1.7rem}.representative-body p{font-size:1rem}.representative-photo{max-width:none;margin:0;aspect-ratio:3/4}.profile-section{padding-top:60px}.profile-list>div{display:block;padding:14px 0}.profile-list dt{padding:0;font-size:.86rem}.profile-list dd{padding:7px 0 0;font-size:.96rem}.office-photo{margin:0;aspect-ratio:3/2}.history-list li{grid-template-columns:1fr;gap:5px;padding:0 0 23px 26px}.history-list time{font-size:.88rem}.history-list p{font-size:.96rem}.access-section{padding-top:62px;padding-bottom:64px}.access-grid{grid-template-columns:1fr;gap:27px}.access-copy p{font-size:1rem}.map-placeholder{min-height:230px}.company-contact{padding:67px 18px 70px;text-align:left}}


===== FILE: company/index.html =====

<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <meta name="description" content="株式会社LINOAの会社概要、代表メッセージ、沿革、アクセスをご紹介します。" />
  <title>会社情報 | LINOA</title>
  <link rel="stylesheet" href="/styles.css" />
  <link rel="stylesheet" href="/company/company.css" />
  <link rel="stylesheet" href="/subpage.css" />
</head>
<body>
  <header class="site-header"><div class="header-inner"><a class="brand" href="/" aria-label="LINOA トップへ"><span class="brand-mark" aria-hidden="true"><i></i><b></b></span><span class="brand-copy"><strong>LINOA</strong><small>ITで、ビジネスにもっと余白を。</small></span></a><nav class="desktop-nav" aria-label="メインナビゲーション"><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a></nav><a class="header-cta" href="/contact"><span class="mail-icon" aria-hidden="true"></span>お問い合わせ <span aria-hidden="true">›</span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span><em>MENU</em></button></div><nav id="mobile-nav" class="mobile-nav" aria-label="モバイルナビゲーション" hidden><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a><a class="mobile-contact" href="/contact">お問い合わせ</a></nav></header>
  <main>
    <div class="breadcrumb-wrap"><nav class="breadcrumb" aria-label="パンくずリスト"><a href="/">HOME</a><span aria-hidden="true">›</span><span aria-current="page">会社情報</span></nav></div>
    <section class="company-hero" aria-labelledby="company-page-title"><div class="company-hero-inner"><div class="company-hero-copy"><p class="page-kicker"><span></span>COMPANY</p><h1 id="company-page-title">会社情報</h1><p>LINOAの基本情報や、事業への想いをご紹介します。</p></div><figure class="company-hero-photo"><img src="/assets/linoa_company_hero_generated.png" alt="明るいオフィスのエントランスと会議スペース" /></figure></div></section>
    <section class="company-section representative-section" aria-labelledby="message-title"><div class="representative-grid"><div class="representative-copy"><header class="company-heading"><p>MESSAGE</p><h2 id="message-title">代表メッセージ</h2></header><h3>ITの力で、中小企業の<br />これからを支えていきたい。</h3><div class="representative-body"><p>LINOAは、ITを通じて中小企業の皆さまの課題解決を支援することを目的に設立しました。</p><p>テクノロジーは、特別なものではなく、日々の業務を支え、働く人の可能性を広げるためのものです。</p><p>私たちは、現場に寄り添い、一緒に考え、実現まで伴走するパートナーとして、これからも中小企業の成長を支えていきます。</p></div><p class="representative-signature">代表取締役　<strong>山本 拓也</strong></p></div><figure class="representative-photo"><img src="/assets/linoa_company_representative_generated.png" alt="LINOA代表を表すビジネスパーソンの写真" /></figure></div></section>
    <section class="company-section profile-section" aria-labelledby="profile-title"><div class="profile-grid"><div><header class="company-heading"><p>PROFILE</p><h2 id="profile-title">会社概要</h2></header><dl class="profile-list"><div><dt>会社名</dt><dd>株式会社LINOA</dd></div><div><dt>英語表記</dt><dd>LINOA Inc.</dd></div><div><dt>所在地</dt><dd>京都府京都市下京区○○町1-2-3</dd></div><div><dt>設立</dt><dd>2021年4月</dd></div><div><dt>代表者</dt><dd>代表取締役　山本 拓也</dd></div><div><dt>事業内容</dt><dd><ul><li>Webサイト企画・制作</li><li>業務改善・DX支援</li><li>クラウド導入支援</li><li>AI活用支援</li><li>IT運用サポート</li></ul></dd></div><div><dt>お問い合わせ</dt><dd>お問い合わせフォームより受付</dd></div></dl></div><figure class="office-photo"><img src="/assets/linoa_company_office_generated.png" alt="LINOAのオフィスを表す明るいオフィス内観" /></figure></div></section>
    <section class="company-section history-section" aria-labelledby="history-title"><header class="company-heading"><p>HISTORY</p><h2 id="history-title">沿革</h2></header><ol class="history-list"><li><time>2021年4月</time><p>LINOA創業</p></li><li><time>2021年8月</time><p>Web制作・IT支援サービス開始</p></li><li><time>2022年6月</time><p>クラウド導入支援開始</p></li><li><time>2023年4月</time><p>業務改善・DX支援を拡大</p></li><li><time>2024年5月</time><p>AI活用支援開始</p></li><li><time>2026年</time><p>現在の4サービス体制へ整理</p></li></ol></section>
    <section class="company-section access-section" aria-labelledby="access-title"><header class="company-heading"><p>ACCESS</p><h2 id="access-title">アクセス</h2></header><div class="access-grid"><div class="access-copy"><p><strong>株式会社LINOA</strong><br />京都府京都市下京区○○町1-2-3</p><small>※架空企業のため、地図サービスへのリンクは掲載していません。</small></div><div class="map-placeholder" role="img" aria-label="京都市下京区周辺を表す抽象的なアクセスマップ"><span class="map-road road-one"></span><span class="map-road road-two"></span><span class="map-road road-three"></span><span class="map-block block-one"></span><span class="map-block block-two"></span><b>LINOA</b><i>ACCESS MAP</i></div></div></section>
    <section class="company-contact" aria-labelledby="company-contact-title"><p class="section-label">CONTACT</p><h2 id="company-contact-title">お問い合わせ</h2><a href="/contact">お問い合わせはこちら <span aria-hidden="true">→</span></a></section>
  </main>
  <footer class="site-footer"><div class="footer-main"><div class="footer-brand"><a class="footer-brand-name" href="/" aria-label="LINOA トップへ"><span class="footer-mark" aria-hidden="true">L</span>LINOA</a><p>ITで、ビジネスにもっと余白を。</p><small>中小企業向けIT・Web支援</small></div><nav class="footer-nav" aria-label="フッターナビゲーション"><div><h2>COMPANY</h2><a href="/about">私たちについて</a><a href="/company">会社情報</a></div><div><h2>SERVICES</h2><a href="/services">サービス</a></div><div><h2>CONTENT</h2><a href="/cases">導入事例</a><a href="/news">お知らせ</a><a href="/contact">お問い合わせ</a></div></nav></div><div class="footer-bottom"><a href="/privacy">プライバシーポリシー</a><small>© 2026 LINOA Inc.</small></div></footer><script src="/scripts/main.js"></script>
</body>
</html>


===== FILE: contact/contact.css =====

.breadcrumb-wrap { max-width:1536px; margin:auto; padding:16px clamp(24px,4vw,70px); }.breadcrumb { display:flex; align-items:center; gap:11px; color:#7890a0; font-size:.74rem; }.breadcrumb a { color:#55728a; }.breadcrumb a:hover { color:#1679b9; }.contact-hero { overflow:hidden; background:#f4fafc; border-top:1px solid #e5f0f4; }.contact-hero-inner { position:relative; max-width:1360px; min-height:285px; margin:auto; padding:63px clamp(24px,4vw,70px); }.page-kicker,.section-label { margin:0; color:#258bc8; font-size:.75rem; font-weight:800; letter-spacing:.19em; }.page-kicker { display:flex; align-items:center; gap:12px; }.page-kicker span { width:33px; height:2px; background:#60b7e4; }.contact-hero h1 { position:relative; z-index:1; margin:18px 0 12px; color:var(--navy-deep); font-size:clamp(2.35rem,4vw,4rem); line-height:1.3; letter-spacing:.04em; }.contact-hero p:not(.page-kicker) { position:relative; z-index:1; max-width:700px; margin:0; color:#536b7d; font-size:1rem; line-height:1.8; }.contact-hero i { position:absolute; width:440px; height:440px; top:-250px; right:8%; border:1px solid #b4e0f3; border-radius:50%; }.contact-main { padding:112px 0 122px; background:#fff; }.contact-main-inner { max-width:1230px; margin:auto; padding:0 clamp(24px,4vw,70px); display:grid; grid-template-columns:minmax(260px,.6fr) minmax(560px,1fr); align-items:start; gap:clamp(55px,10vw,145px); }.contact-intro { padding-top:28px; }.contact-intro h2 { margin:18px 0 20px; color:var(--navy-deep); font-size:clamp(1.9rem,3vw,2.85rem); line-height:1.48; letter-spacing:.02em; }.contact-intro>p:not(.section-label) { max-width:380px; margin:0; color:#567083; font-size:.96rem; line-height:1.85; }.contact-intro ul { margin:29px 0 0; padding:19px 0 0; border-top:1px solid #dbe9ef; list-style:none; }.contact-intro li { position:relative; padding:9px 0 9px 18px; color:#527083; font-size:.83rem; line-height:1.55; }.contact-intro li::before { content:""; position:absolute; top:17px; left:0; width:7px; height:7px; border-radius:50%; background:#59ad96; }.form-panel { padding:43px clamp(25px,4vw,48px) 45px; border:1px solid #d7e7ed; border-radius:18px; background:#fff; box-shadow:0 10px 25px rgba(16,69,106,.05); }.form-panel h2 { margin:0; color:var(--navy); font-size:1.36rem; }.form-note { margin:10px 0 29px; color:#718592; font-size:.78rem; }.form-note span { color:#c85353; }.form-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px 22px; }.form-field { min-width:0; }.form-field--full { grid-column:1/-1; }.form-field label { display:flex; align-items:center; gap:8px; margin:0 0 8px; color:#284d67; font-size:.9rem; font-weight:700; }.form-field label b,.form-field label em { padding:3px 6px; border-radius:3px; font-size:.64rem; font-style:normal; font-weight:700; line-height:1; }.form-field label b { color:#b34d4d; background:#fff0f0; }.form-field label em { color:#6e8190; background:#eef3f5; }.form-field input,.form-field select,.form-field textarea { box-sizing:border-box; width:100%; border:1px solid #cbdde6; border-radius:7px; outline:0; color:#284d67; background:#fff; font:inherit; font-size:.92rem; transition:border-color .2s,box-shadow .2s; }.form-field input,.form-field select { height:49px; padding:0 13px; }.form-field textarea { min-height:155px; padding:13px; resize:vertical; line-height:1.75; }.form-field textarea::placeholder { color:#9aabb6; }.form-field input:focus,.form-field select:focus,.form-field textarea:focus { border-color:#1f849b; box-shadow:0 0 0 3px rgba(71,171,147,.15); }.form-field [aria-invalid="true"] { border-color:#c75b5b; background:#fffafa; }.field-error { min-height:18px; margin:5px 0 0; color:#bd5151; font-size:.76rem; line-height:1.45; }.privacy-note { margin:25px 0 0; color:#6a7f8d; font-size:.8rem; line-height:1.65; }.privacy-note a { color:#1974a7; text-decoration:underline; text-underline-offset:3px; }.form-submit { min-height:56px; margin-top:27px; padding:0 26px; border:0; border-radius:8px; color:#fff; background:var(--green); box-shadow:0 7px 16px rgba(26,108,82,.16); font:inherit; font-size:.94rem; font-weight:800; cursor:pointer; transition:background .2s,transform .2s; }.form-submit:hover { background:var(--green-dark); transform:translateY(-1px); }.form-submit:focus-visible,.privacy-note a:focus-visible,.contact-complete a:focus-visible { outline:3px solid #82c8ec; outline-offset:4px; }.form-submit span { margin-left:11px; font-size:1.12rem; font-weight:400; }.contact-complete { padding:25px 0 5px; }.contact-complete h2 { margin:16px 0 12px; font-size:clamp(1.55rem,2.6vw,2.2rem); line-height:1.45; }.contact-complete p:not(.section-label) { margin:0; color:#5b7283; font-size:.94rem; line-height:1.75; }.contact-complete a { display:inline-flex; gap:12px; margin-top:28px; padding-bottom:7px; border-bottom:2px solid #2992c8; color:#1472a7; font-size:.9rem; font-weight:800; }.privacy-route { max-width:900px; min-height:380px; margin:auto; padding:80px clamp(24px,4vw,70px); }.privacy-route h1 { margin:0; color:var(--navy-deep); font-size:clamp(2rem,3.3vw,3rem); }.privacy-route p { margin:18px 0 0; color:#5b7283; line-height:1.8; }
@media (max-width:900px) { .contact-main-inner { grid-template-columns:1fr; gap:42px; max-width:820px; }.contact-intro { padding-top:0; }.contact-intro>p:not(.section-label) { max-width:600px; }.contact-intro ul { display:grid; grid-template-columns:repeat(3,1fr); gap:8px 20px; }.contact-intro li { padding-top:0; padding-bottom:0; }.contact-intro li::before { top:8px; } }
@media (max-width:767px) { .breadcrumb-wrap { padding:13px 18px; }.contact-hero-inner { min-height:0; padding:52px 18px 55px; }.contact-hero h1 { margin:16px 0 10px; font-size:2.28rem; }.contact-hero p:not(.page-kicker) { font-size:.91rem; }.contact-hero i { width:280px; height:280px; top:-165px; right:-105px; }.contact-main { padding:74px 0 80px; }.contact-main-inner { padding:0 18px; gap:34px; }.contact-intro h2 { margin:15px 0; font-size:1.82rem; }.contact-intro h2 br { display:none; }.contact-intro>p:not(.section-label) { font-size:.91rem; }.contact-intro ul { display:block; margin-top:23px; }.contact-intro li { padding:7px 0 7px 18px; font-size:.8rem; }.contact-intro li::before { top:14px; }.form-panel { padding:28px 19px 31px; border-radius:13px; }.form-panel h2 { font-size:1.2rem; }.form-note { margin-bottom:23px; }.form-grid { grid-template-columns:1fr; gap:16px; }.form-field--full { grid-column:auto; }.form-field input,.form-field select { height:50px; }.form-field textarea { min-height:145px; }.form-submit { width:100%; margin-top:23px; } }


===== FILE: contact/contact.js =====

const form = document.querySelector('#contact-form');

if (form) {
  const requiredFields = [['company', '会社名を入力してください。'], ['name', 'お名前を入力してください。'], ['service', 'ご相談内容を選択してください。'], ['message', 'ご相談・お問い合わせ内容を入力してください。']];
  const setError = (field, message = '') => {
    document.querySelector(`#${field}`).setAttribute('aria-invalid', String(Boolean(message)));
    document.querySelector(`#${field}-error`).textContent = message;
  };
  const validate = () => {
    let firstInvalid = null;
    requiredFields.forEach(([field, message]) => {
      const input = document.querySelector(`#${field}`);
      const error = input.value.trim() ? '' : message;
      setError(field, error);
      if (error && !firstInvalid) firstInvalid = input;
    });
    const email = document.querySelector('#email');
    const emailError = !email.value.trim() ? 'メールアドレスを入力してください。' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? 'メールアドレスの形式を確認してください。' : '';
    setError('email', emailError);
    return firstInvalid || (emailError ? email : null);
  };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstInvalid = validate();
    if (firstInvalid) { firstInvalid.focus(); return; }
    form.hidden = true;
    const complete = document.querySelector('#contact-complete');
    complete.hidden = false;
    complete.querySelector('h2').focus();
  });
  form.querySelectorAll('input, select, textarea').forEach((input) => input.addEventListener('input', () => {
    if (input.getAttribute('aria-invalid') === 'true') validate();
  }));
}


===== FILE: contact/index.html =====

<!doctype html>
<html lang="ja"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="icon" href="/favicon.ico" sizes="any" /><meta name="description" content="LINOAへのお問い合わせはこちらから。" /><title>お問い合わせ | LINOA</title><link rel="stylesheet" href="/styles.css" /><link rel="stylesheet" href="/contact/contact.css" /><link rel="stylesheet" href="/subpage.css" /></head>
<body>
<header class="site-header"><div class="header-inner"><a class="brand" href="/" aria-label="LINOA トップへ"><span class="brand-mark" aria-hidden="true"><i></i><b></b></span><span class="brand-copy"><strong>LINOA</strong><small>ITで、ビジネスにもっと余白を。</small></span></a><nav class="desktop-nav" aria-label="メインナビゲーション"><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a></nav><a class="header-cta" href="/contact"><span class="mail-icon" aria-hidden="true"></span>お問い合わせ <span aria-hidden="true">›</span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span><em>MENU</em></button></div><nav id="mobile-nav" class="mobile-nav" aria-label="モバイルナビゲーション" hidden><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a><a class="mobile-contact" href="/contact">お問い合わせ</a></nav></header>
<main>
<div class="breadcrumb-wrap"><nav class="breadcrumb" aria-label="パンくずリスト"><a href="/">HOME</a><span aria-hidden="true">›</span><span aria-current="page">お問い合わせ</span></nav></div>
<section class="contact-hero" aria-labelledby="contact-page-title"><div class="contact-hero-inner"><p class="page-kicker"><span></span>CONTACT</p><h1 id="contact-page-title">お問い合わせ</h1><p>Web制作、業務改善、クラウド、AI活用など、まだ内容がまとまっていない段階でもご相談いただけます。</p><i aria-hidden="true"></i></div></section>
<section class="contact-main" aria-labelledby="contact-form-title"><div class="contact-main-inner"><aside class="contact-intro"><p class="section-label">GET IN TOUCH</p><h2>まずはお気軽に<br />ご相談ください</h2><p>ご相談内容を確認後、担当者よりご連絡します。具体的なサービスが決まっていない場合でも問題ありません。</p><ul><li>法人のお客様向けの相談窓口です</li><li>内容がまとまっていなくてもご相談いただけます</li><li>営業目的のお問い合わせはご遠慮ください</li></ul></aside>
<div class="form-panel"><form id="contact-form" novalidate><h2 id="contact-form-title">お問い合わせ内容</h2><p class="form-note"><span aria-hidden="true">*</span> は必須項目です</p><div class="form-grid"><div class="form-field"><label for="company">会社名 <b>必須</b></label><input id="company" name="company" type="text" autocomplete="organization" aria-describedby="company-error" /><p id="company-error" class="field-error" role="alert"></p></div><div class="form-field"><label for="name">お名前 <b>必須</b></label><input id="name" name="name" type="text" autocomplete="name" aria-describedby="name-error" /><p id="name-error" class="field-error" role="alert"></p></div><div class="form-field"><label for="email">メールアドレス <b>必須</b></label><input id="email" name="email" type="email" autocomplete="email" inputmode="email" aria-describedby="email-error" /><p id="email-error" class="field-error" role="alert"></p></div><div class="form-field"><label for="tel">電話番号 <em>任意</em></label><input id="tel" name="tel" type="tel" autocomplete="tel" inputmode="tel" /></div><div class="form-field form-field--full"><label for="service">ご相談内容 <b>必須</b></label><select id="service" name="service" aria-describedby="service-error"><option value="">選択してください</option><option>Web制作</option><option>業務改善・DX支援</option><option>クラウド導入支援</option><option>AI活用支援</option><option>その他</option><option>まだ決まっていない</option></select><p id="service-error" class="field-error" role="alert"></p></div><div class="form-field form-field--full"><label for="message">ご相談・お問い合わせ内容 <b>必須</b></label><textarea id="message" name="message" rows="7" aria-describedby="message-error" placeholder="現在お困りのことや、ご相談したい内容をご記入ください。"></textarea><p id="message-error" class="field-error" role="alert"></p></div></div><p class="privacy-note"><a href="/privacy">プライバシーポリシー</a>をご確認のうえ、送信してください。</p><button class="form-submit" type="submit">送信内容を確認する <span aria-hidden="true">→</span></button></form><section id="contact-complete" class="contact-complete" aria-live="polite" hidden><p class="section-label">THANK YOU</p><h2 tabindex="-1">お問い合わせありがとうございます。</h2><p>内容を確認のうえ、担当者よりご連絡いたします。</p><a href="/">TOPへ戻る <span aria-hidden="true">→</span></a></section></div></div></section>
</main>
<footer class="site-footer"><div class="footer-main"><div class="footer-brand"><a class="footer-brand-name" href="/" aria-label="LINOA トップへ"><span class="footer-mark" aria-hidden="true">L</span>LINOA</a><p>ITで、ビジネスにもっと余白を。</p><small>中小企業向けIT・Web支援</small></div><nav class="footer-nav" aria-label="フッターナビゲーション"><div><h2>COMPANY</h2><a href="/about">私たちについて</a><a href="/company">会社情報</a></div><div><h2>SERVICES</h2><a href="/services">サービス</a></div><div><h2>CONTENT</h2><a href="/cases">導入事例</a><a href="/news">お知らせ</a><a href="/contact">お問い合わせ</a></div></nav></div><div class="footer-bottom"><a href="/privacy">プライバシーポリシー</a><small>© 2026 LINOA Inc.</small></div></footer><script src="/scripts/main.js"></script><script src="/contact/contact.js"></script></body></html>


===== FILE: news/index.html =====

<!doctype html>
<html lang="ja"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="icon" href="/favicon.ico" sizes="any" /><meta name="description" content="LINOAからのお知らせ、セミナー、IT活用に関するコラムをご紹介します。" /><title>お知らせ | LINOA</title><link rel="stylesheet" href="/styles.css" /><link rel="stylesheet" href="/news/news.css" /><link rel="stylesheet" href="/subpage.css" /></head>
<body>
<header class="site-header"><div class="header-inner"><a class="brand" href="/" aria-label="LINOA トップへ"><span class="brand-mark" aria-hidden="true"><i></i><b></b></span><span class="brand-copy"><strong>LINOA</strong><small>ITで、ビジネスにもっと余白を。</small></span></a><nav class="desktop-nav" aria-label="メインナビゲーション"><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a></nav><a class="header-cta" href="/contact"><span class="mail-icon" aria-hidden="true"></span>お問い合わせ <span aria-hidden="true">›</span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span><em>MENU</em></button></div><nav id="mobile-nav" class="mobile-nav" aria-label="モバイルナビゲーション" hidden><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a><a class="mobile-contact" href="/contact">お問い合わせ</a></nav></header>
<main>
<div class="breadcrumb-wrap"><nav class="breadcrumb" aria-label="パンくずリスト"><a href="/">HOME</a><span aria-hidden="true">›</span><span aria-current="page">お知らせ</span></nav></div>
<section class="news-hero" aria-labelledby="news-page-title"><div class="news-hero-inner"><p class="page-kicker"><span></span>NEWS</p><h1 id="news-page-title">お知らせ</h1><p>LINOAからのお知らせや、IT活用に関する情報を掲載しています。</p><i aria-hidden="true"></i></div></section>
<section class="news-list-section" aria-labelledby="news-list-title"><header class="section-heading"><p class="section-label">LATEST NEWS</p><h2 id="news-list-title">お知らせ一覧</h2></header><div class="news-list"><article class="news-row"><time datetime="2026-09-20">2026.09.20</time><span class="news-label notice">お知らせ</span><div><h3>コーポレートサイトをリニューアルしました</h3><p>LINOAのサービスや取り組みをより分かりやすくお伝えするため、コーポレートサイトをリニューアルしました。</p></div><i aria-hidden="true">—</i></article><article class="news-row"><time datetime="2026-09-05">2026.09.05</time><span class="news-label seminar">セミナー</span><div><h3>中小企業向け 生成AI活用セミナーを開催します</h3><p>生成AIを業務で活用するための基本的な考え方と、実際の活用例をご紹介します。</p></div><i aria-hidden="true">—</i></article><article class="news-row"><time datetime="2026-08-18">2026.08.18</time><span class="news-label column">コラム</span><div><h3>社内のIT化を進める前に整理したい3つのこと</h3><p>ツールを導入する前に確認しておきたい、業務整理のポイントをご紹介します。</p></div><i aria-hidden="true">—</i></article><article class="news-row"><time datetime="2026-07-30">2026.07.30</time><span class="news-label notice">お知らせ</span><div><h3>夏季休業のお知らせ</h3><p>夏季休業期間についてお知らせします。</p></div><i aria-hidden="true">—</i></article><article class="news-row"><time datetime="2026-07-12">2026.07.12</time><span class="news-label column">コラム</span><div><h3>クラウド導入で最初に考えたい情報共有のルール</h3><p>クラウドツールを導入する前に整理しておきたい、社内の情報共有ルールについて解説します。</p></div><i aria-hidden="true">—</i></article></div></section>
<section class="news-contact" aria-labelledby="news-contact-title"><p class="section-label">CONTACT</p><h2 id="news-contact-title">お問い合わせ</h2><p>LINOAへのご相談やご質問はこちらからお問い合わせください。</p><a href="/contact">お問い合わせはこちら <span aria-hidden="true">→</span></a></section>
</main>
<footer class="site-footer"><div class="footer-main"><div class="footer-brand"><a class="footer-brand-name" href="/" aria-label="LINOA トップへ"><span class="footer-mark" aria-hidden="true">L</span>LINOA</a><p>ITで、ビジネスにもっと余白を。</p><small>中小企業向けIT・Web支援</small></div><nav class="footer-nav" aria-label="フッターナビゲーション"><div><h2>COMPANY</h2><a href="/about">私たちについて</a><a href="/company">会社情報</a></div><div><h2>SERVICES</h2><a href="/services">サービス</a></div><div><h2>CONTENT</h2><a href="/cases">導入事例</a><a href="/news">お知らせ</a><a href="/contact">お問い合わせ</a></div></nav></div><div class="footer-bottom"><a href="/privacy">プライバシーポリシー</a><small>© 2026 LINOA Inc.</small></div></footer><script src="/scripts/main.js"></script>
</body></html>


===== FILE: news/news.css =====

.breadcrumb-wrap { max-width:1536px; margin:auto; padding:16px clamp(24px,4vw,70px); }.breadcrumb { display:flex; align-items:center; gap:11px; color:#7890a0; font-size:.74rem; }.breadcrumb a { color:#55728a; }.breadcrumb a:hover { color:#1679b9; }.news-hero { overflow:hidden; background:#f4fafc; border-top:1px solid #e5f0f4; }.news-hero-inner { position:relative; max-width:1360px; min-height:285px; margin:auto; padding:63px clamp(24px,4vw,70px); }.page-kicker,.section-label { margin:0; color:#258bc8; font-size:.75rem; font-weight:800; letter-spacing:.19em; }.page-kicker { display:flex; align-items:center; gap:12px; }.page-kicker span { width:33px; height:2px; background:#60b7e4; }.news-hero h1 { position:relative; z-index:1; margin:18px 0 12px; color:var(--navy-deep); font-size:clamp(2.35rem,4vw,4rem); line-height:1.3; letter-spacing:.04em; }.news-hero p:not(.page-kicker) { position:relative; z-index:1; margin:0; color:#536b7d; font-size:1rem; line-height:1.8; }.news-hero i { position:absolute; width:440px; height:440px; top:-250px; right:8%; border:1px solid #b4e0f3; border-radius:50%; }.news-list-section { max-width:1120px; margin:auto; padding:108px clamp(24px,4vw,70px) 120px; }.section-heading { margin-bottom:34px; }.section-heading h2 { margin:16px 0 0; color:var(--navy-deep); font-size:clamp(1.9rem,3vw,2.7rem); }.news-list { border-top:1px solid #d8e7ed; }.news-row { min-height:131px; padding:25px 0; display:grid; grid-template-columns:105px 82px minmax(0,1fr) 23px; gap:18px; align-items:start; border-bottom:1px solid #d8e7ed; }.news-row time { padding-top:4px; color:#738995; font:700 .78rem Arial,sans-serif; letter-spacing:.04em; }.news-label { display:inline-flex; align-self:start; justify-content:center; width:max-content; min-width:56px; margin-top:1px; padding:4px 7px; border-radius:3px; font-size:.68rem; font-weight:800; line-height:1.25; }.news-label.notice { color:#237caa; background:#eaf6fb; }.news-label.seminar { color:#29836c; background:#eaf8f2; }.news-label.column { color:#5f70a1; background:#eef1fa; }.news-row h3 { margin:0; color:var(--navy); font-size:1rem; line-height:1.55; }.news-row p { margin:8px 0 0; color:#687f8d; font-size:.84rem; line-height:1.7; }.news-row>i { padding-top:3px; color:#75abc3; font-size:1.15rem; font-style:normal; }.news-contact { padding:74px 24px 78px; color:#fff; background:var(--navy-deep); text-align:center; }.news-contact .section-label { color:#7bc9ec; }.news-contact h2 { margin:14px 0 10px; font-size:clamp(1.75rem,2.6vw,2.35rem); }.news-contact p:not(.section-label) { margin:0; color:#bed2df; font-size:.93rem; }.news-contact a { display:inline-flex; gap:12px; margin-top:23px; padding-bottom:8px; border-bottom:2px solid #63bce3; color:#e8f7ff; font-size:.94rem; font-weight:800; }
@media (max-width:767px) { .breadcrumb-wrap { padding:13px 18px; }.news-hero-inner { min-height:0; padding:52px 18px 55px; }.news-hero h1 { margin:16px 0 10px; font-size:2.28rem; }.news-hero p:not(.page-kicker) { font-size:.91rem; }.news-hero i { width:280px; height:280px; top:-165px; right:-105px; }.news-list-section { padding:74px 18px 80px; }.section-heading { margin-bottom:27px; }.section-heading h2 { font-size:1.82rem; }.news-row { min-height:0; padding:22px 0; grid-template-columns:auto 1fr; gap:8px 12px; }.news-row time { padding-top:2px; font-size:.74rem; }.news-row>i { display:none; }.news-row>div { grid-column:1/-1; }.news-row h3 { font-size:.98rem; }.news-row p { margin-top:8px; font-size:.82rem; }.news-contact { padding:67px 18px 71px; text-align:left; } }


===== FILE: privacy/index.html =====

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <meta name="description" content="株式会社LINOAのプライバシーポリシーです。" />
    <title>プライバシーポリシー | LINOA</title>
    <link rel="stylesheet" href="/styles.css" />
    <link rel="stylesheet" href="/privacy/privacy.css" />
    <link rel="stylesheet" href="/subpage.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="LINOA トップへ"><span class="brand-mark" aria-hidden="true"><i></i><b></b></span><span class="brand-copy"><strong>LINOA</strong><small>ITで、ビジネスにもっと余白を。</small></span></a>
        <nav class="desktop-nav" aria-label="メインナビゲーション"><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a></nav>
        <a class="header-cta" href="/contact"><span class="mail-icon" aria-hidden="true"></span>お問い合わせ <span aria-hidden="true">›</span></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span><em>MENU</em></button>
      </div>
      <nav id="mobile-nav" class="mobile-nav" aria-label="モバイルナビゲーション" hidden><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a><a class="mobile-contact" href="/contact">お問い合わせ</a></nav>
    </header>
    <main>
      <div class="breadcrumb-wrap"><nav class="breadcrumb" aria-label="パンくずリスト"><a href="/">HOME</a><span aria-hidden="true">›</span><span aria-current="page">プライバシーポリシー</span></nav></div>
      <section class="privacy-hero" aria-labelledby="privacy-title"><div class="privacy-hero-inner"><p class="page-kicker"><span></span>PRIVACY POLICY</p><h1 id="privacy-title">プライバシーポリシー</h1><p>株式会社LINOAは、お客様の個人情報を適切に取り扱い、安全な管理に努めます。</p><i aria-hidden="true"></i></div></section>
      <section class="policy-section" aria-labelledby="policy-heading"><div class="policy-inner"><h2 id="policy-heading">個人情報の取り扱いについて</h2><div class="policy-list">
        <section><h3><span>01</span>個人情報の取得について</h3><p>株式会社LINOAは、お問い合わせやサービスのご相談などに際し、氏名、会社名、メールアドレス、電話番号その他必要な情報を取得する場合があります。</p></section>
        <section><h3><span>02</span>個人情報の利用目的</h3><p>取得した個人情報は、以下の目的で利用します。</p><ul><li>お問い合わせへの回答</li><li>ご相談内容への対応</li><li>サービスのご案内</li><li>契約・業務上必要な連絡</li><li>サービス改善のための分析</li></ul></section>
        <section><h3><span>03</span>個人情報の管理</h3><p>取得した個人情報について、不正アクセス、紛失、漏えい、改ざん等を防ぐため、適切な安全管理に努めます。</p></section>
        <section><h3><span>04</span>第三者への提供</h3><p>法令に基づく場合を除き、本人の同意なく個人情報を第三者へ提供しません。</p></section>
        <section><h3><span>05</span>外部サービスについて</h3><p>当サイトでは、サイト運営や分析等のために外部サービスを利用する場合があります。今後アクセス解析ツール等を導入する場合は、必要に応じて本ポリシーへ追記します。</p></section>
        <section><h3><span>06</span>個人情報の開示・訂正・削除</h3><p>本人から個人情報の開示、訂正、削除等の申し出があった場合、本人確認のうえ適切に対応します。</p></section>
        <section><h3><span>07</span>プライバシーポリシーの変更</h3><p>必要に応じて、本ポリシーの内容を変更する場合があります。変更後の内容は当サイト上に掲載します。</p></section>
        <section><h3><span>08</span>お問い合わせ</h3><p>個人情報の取り扱いに関するお問い合わせは、当サイトの<a href="/contact">お問い合わせフォーム</a>よりご連絡ください。</p></section>
      </div></div></section>
    </main>
    <footer class="site-footer"><div class="footer-main"><div class="footer-brand"><a class="footer-brand-name" href="/" aria-label="LINOA トップへ"><span class="footer-mark" aria-hidden="true">L</span>LINOA</a><p>ITで、ビジネスにもっと余白を。</p><small>中小企業向けIT・Web支援</small></div><nav class="footer-nav" aria-label="フッターナビゲーション"><div><h2>COMPANY</h2><a href="/about">私たちについて</a><a href="/company">会社情報</a></div><div><h2>SERVICES</h2><a href="/services">サービス</a></div><div><h2>CONTENT</h2><a href="/cases">導入事例</a><a href="/news">お知らせ</a><a href="/contact">お問い合わせ</a></div></nav></div><div class="footer-bottom"><a href="/privacy">プライバシーポリシー</a><small>© 2026 LINOA Inc.</small></div></footer>
    <script src="/scripts/main.js"></script>
  </body>
</html>


===== FILE: privacy/privacy.css =====

.breadcrumb-wrap { max-width:1536px; margin:auto; padding:16px clamp(24px,4vw,70px); }
.breadcrumb { display:flex; align-items:center; gap:11px; color:#7890a0; font-size:.74rem; }
.breadcrumb a { color:#55728a; }
.breadcrumb a:hover { color:#1679b9; }
.privacy-hero { overflow:hidden; border-top:1px solid #e5f0f4; background:#f4fafc; }
.privacy-hero-inner { position:relative; max-width:1360px; min-height:285px; margin:auto; padding:63px clamp(24px,4vw,70px); }
.page-kicker { display:flex; align-items:center; gap:12px; margin:0; color:#258bc8; font-size:.75rem; font-weight:800; letter-spacing:.19em; }
.page-kicker span { width:33px; height:2px; background:#60b7e4; }
.privacy-hero h1 { position:relative; z-index:1; margin:18px 0 12px; color:var(--navy-deep); font-size:clamp(2.35rem,4vw,4rem); line-height:1.3; letter-spacing:.04em; }
.privacy-hero p:not(.page-kicker) { position:relative; z-index:1; max-width:680px; margin:0; color:#536b7d; font-size:1rem; line-height:1.8; }
.privacy-hero i { position:absolute; width:440px; height:440px; top:-250px; right:8%; border:1px solid #b4e0f3; border-radius:50%; }
.policy-section { background:#fff; }
.policy-inner { max-width:900px; margin:auto; padding:105px clamp(24px,4vw,70px) 120px; }
.policy-inner>h2 { margin:0 0 43px; color:var(--navy-deep); font-size:clamp(1.9rem,3vw,2.55rem); line-height:1.4; }
.policy-list { border-top:1px solid #d9e7ed; }
.policy-list section { padding:33px 0 34px; border-bottom:1px solid #d9e7ed; }
.policy-list h3 { display:flex; align-items:baseline; gap:17px; margin:0 0 16px; color:var(--navy); font-size:1.12rem; line-height:1.55; }
.policy-list h3 span { color:#56a5cf; font:700 .7rem Arial,sans-serif; letter-spacing:.1em; }
.policy-list p { margin:0; color:#566f80; font-size:.94rem; line-height:1.9; }
.policy-list ul { display:grid; gap:7px; margin:17px 0 0; padding:0; list-style:none; color:#566f80; font-size:.92rem; line-height:1.7; }
.policy-list li { position:relative; padding-left:17px; }
.policy-list li::before { content:""; position:absolute; top:.63em; left:1px; width:6px; height:6px; border-radius:50%; background:#5aaf91; }
.policy-list a { padding-bottom:2px; border-bottom:1px solid #52a6d1; color:#1577ad; font-weight:800; }
.policy-list a:hover { color:var(--green-dark); border-color:var(--green); }
.policy-list a:focus-visible { outline:3px solid #82c8ec; outline-offset:4px; }
@media (max-width:767px) { .breadcrumb-wrap { padding:13px 18px; }.privacy-hero-inner { min-height:0; padding:52px 18px 55px; }.privacy-hero h1 { margin:16px 0 10px; font-size:2.28rem; }.privacy-hero p:not(.page-kicker) { font-size:.91rem; }.privacy-hero i { width:280px; height:280px; top:-165px; right:-105px; }.policy-inner { padding:74px 18px 80px; }.policy-inner>h2 { margin-bottom:30px; font-size:1.82rem; }.policy-list section { padding:26px 0; }.policy-list h3 { gap:12px; margin-bottom:12px; font-size:1.03rem; }.policy-list p { font-size:.89rem; line-height:1.82; }.policy-list ul { gap:6px; margin-top:14px; font-size:.87rem; } }


===== FILE: scripts/main.js =====

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.hidden = isOpen;
  document.body.classList.toggle('menu-open', !isOpen);
});

mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  mobileNav.hidden = true;
  document.body.classList.remove('menu-open');
}));


===== FILE: services/index.html =====

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <meta name="description" content="LINOAのWeb制作、業務改善・DX、クラウド導入、AI活用支援をご紹介します。" />
    <title>サービス | LINOA</title>
    <link rel="stylesheet" href="/styles.css" />
    <link rel="stylesheet" href="/services/services.css" />
    <link rel="stylesheet" href="/subpage.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="LINOA トップへ"><span class="brand-mark" aria-hidden="true"><i></i><b></b></span><span class="brand-copy"><strong>LINOA</strong><small>ITで、ビジネスにもっと余白を。</small></span></a>
        <nav class="desktop-nav" aria-label="メインナビゲーション"><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a></nav>
        <a class="header-cta" href="/contact"><span class="mail-icon" aria-hidden="true"></span>お問い合わせ <span aria-hidden="true">›</span></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span><em>MENU</em></button>
      </div>
      <nav id="mobile-nav" class="mobile-nav" aria-label="モバイルナビゲーション" hidden><a href="/about">私たちについて</a><a href="/services">サービス</a><a href="/cases">導入事例</a><a href="/company">会社情報</a><a href="/news">お知らせ</a><a class="mobile-contact" href="/contact">お問い合わせ</a></nav>
    </header>

    <main>
      <div class="breadcrumb-wrap"><nav class="breadcrumb" aria-label="パンくずリスト"><a href="/">HOME</a><span aria-hidden="true">›</span><span aria-current="page">サービス</span></nav></div>
      <section class="page-hero services-hero" aria-labelledby="page-title"><div class="page-hero-inner"><div class="services-hero-copy"><p class="page-kicker"><span></span>SERVICES</p><h1 id="page-title">サービス</h1><p>Web制作から業務改善、クラウド、AI活用まで。企業ごとの状況に合わせて、必要なIT支援を提供します。</p></div><figure class="services-hero-photo"><img src="/assets/linoa_services_hero_generated.png" alt="Web制作や業務改善、クラウド、AI活用を表す業務デスク" /></figure></div></section>

      <nav class="service-index" aria-label="サービス一覧"><div class="service-index-inner"><p>SUPPORT AREAS</p><ol><li><a href="#web"><b>01</b><span>Web制作<small>伝わるWebサイトをつくる</small></span><i aria-hidden="true">↓</i></a></li><li><a href="#dx"><b>02</b><span>業務改善・DX支援<small>仕事の流れを整える</small></span><i aria-hidden="true">↓</i></a></li><li><a href="#cloud"><b>03</b><span>クラウド導入支援<small>安全な情報共有をつくる</small></span><i aria-hidden="true">↓</i></a></li><li><a href="#ai"><b>04</b><span>AI活用支援<small>使えるAIを仕事へ</small></span><i aria-hidden="true">↓</i></a></li></ol></div></nav>

      <section id="web" class="service-detail service-detail--white" aria-labelledby="web-title"><div class="service-detail-inner"><div class="service-detail-copy"><p class="section-label">01 / WEB PRODUCTION</p><h2 id="web-title">Web制作</h2><p class="service-lead">企業やサービスの魅力が正しく伝わるWebサイトを、目的に合わせて設計・制作します。</p><ul><li>コーポレートサイト・採用サイト制作</li><li>UI / UXを意識した設計</li><li>公開後の運用・改善支援</li></ul></div><figure class="service-visual"><img src="/assets/service-web.png" alt="Web制作と運用サポートの図解" /></figure></div></section>

      <section id="dx" class="service-detail service-detail--soft" aria-labelledby="dx-title"><div class="service-detail-inner service-detail-inner--reverse"><div class="service-detail-copy"><p class="section-label">02 / BUSINESS IMPROVEMENT &amp; DX</p><h2 id="dx-title">業務改善・DX支援</h2><p class="service-lead">現在の業務を整理し、無理なく続けられる仕組みへ改善します。</p><ul><li>業務フローの分析・見える化</li><li>必要なツール・仕組みの設計と導入</li><li>導入後の定着支援</li></ul></div><figure class="service-visual"><img src="/assets/service-dx.png" alt="業務改善・DX支援の図解" /></figure></div></section>

      <section id="cloud" class="service-detail service-detail--white" aria-labelledby="cloud-title"><div class="service-detail-inner"><div class="service-detail-copy"><p class="section-label">03 / CLOUD IMPLEMENTATION</p><h2 id="cloud-title">クラウド導入支援</h2><p class="service-lead">情報共有やデータ管理を、安全で使いやすい環境へ整えます。</p><ul><li>クラウドツールの選定・導入</li><li>セキュリティ設定・運用支援</li><li>社内への定着・活用支援</li></ul></div><figure class="service-visual"><img src="/assets/service-cloud.png" alt="クラウド導入支援の図解" /></figure></div></section>

      <section id="ai" class="service-detail service-detail--soft" aria-labelledby="ai-title"><div class="service-detail-inner service-detail-inner--reverse"><div class="service-detail-copy"><p class="section-label">04 / AI ENABLEMENT</p><h2 id="ai-title">AI活用支援</h2><p class="service-lead">生成AIを、実際の業務で使える形に整理して導入します。</p><ul><li>業務でのAI活用方法の企画・設計</li><li>ツールの導入・設定支援</li><li>社内への活用定着支援</li></ul></div><figure class="service-visual"><img src="/assets/service-ai.png" alt="AI活用支援の図解" /></figure></div></section>

      <section class="services-contact" aria-labelledby="services-contact-title"><div><p class="section-label">CONTACT</p><h2 id="services-contact-title">どのサービスが必要かわからない場合も、ご相談ください。</h2><p>現在の業務やお困りごとをお聞きし、必要な支援から一緒に整理します。</p><a href="/contact">お問い合わせ <span aria-hidden="true">→</span></a></div></section>
    </main>

    <footer class="site-footer"><div class="footer-main"><div class="footer-brand"><a class="footer-brand-name" href="/" aria-label="LINOA トップへ"><span class="footer-mark" aria-hidden="true">L</span>LINOA</a><p>ITで、ビジネスにもっと余白を。</p><small>中小企業向けIT・Web支援</small></div><nav class="footer-nav" aria-label="フッターナビゲーション"><div><h2>COMPANY</h2><a href="/about">私たちについて</a><a href="/company">会社情報</a></div><div><h2>SERVICES</h2><a href="/services">サービス</a></div><div><h2>CONTENT</h2><a href="/cases">導入事例</a><a href="/news">お知らせ</a><a href="/contact">お問い合わせ</a></div></nav></div><div class="footer-bottom"><a href="/privacy">プライバシーポリシー</a><small>© 2026 LINOA Inc.</small></div></footer>
    <script src="/scripts/main.js"></script>
  </body>
</html>


===== FILE: services/services.css =====

.breadcrumb-wrap { max-width:1536px; margin:auto; padding:16px clamp(24px,4vw,70px); }.breadcrumb { display:flex; align-items:center; gap:11px; color:#7890a0; font-size:.74rem; }.breadcrumb a { color:#55728a; transition:color .2s; }.breadcrumb a:hover { color:#1679b9; }.breadcrumb a:focus-visible { outline:2px solid #75c5ed; outline-offset:3px; }
.page-hero { overflow:hidden; background:#f4fafc; border-top:1px solid #e5f0f4; }.services-hero .page-hero-inner { position:relative; min-height:244px; max-width:1360px; margin:auto; padding:0 clamp(24px,4vw,70px); }.services-hero-copy { position:relative; z-index:1; display:flex; width:45%; min-height:244px; flex-direction:column; justify-content:center; padding:42px 0; }.page-kicker,.section-label { margin:0; color:#258bc8; font-size:.88rem; font-weight:800; letter-spacing:.16em; }.page-kicker { display:flex; align-items:center; gap:12px; }.page-kicker span { width:33px; height:2px; background:#60b7e4; }.services-hero h1 { margin:17px 0 13px; color:var(--navy-deep); font-size:clamp(2.55rem,3.3vw,3.05rem); line-height:1.3; letter-spacing:.04em; }.services-hero-copy>p:not(.page-kicker) { max-width:540px; margin:0; color:#536b7d; font-size:1.125rem; line-height:1.8; }.services-hero-photo { position:absolute; z-index:0; inset:0 0 0 37%; margin:0; overflow:hidden; }.services-hero-photo::after { position:absolute; inset:0; content:""; background:linear-gradient(90deg,rgba(244,250,252,.98) 0%,rgba(244,250,252,.78) 18%,rgba(244,250,252,.28) 48%,rgba(244,250,252,0) 72%); }.services-hero-photo img { display:block; width:100%; height:100%; object-fit:cover; object-position:center; }
.service-index { background:#fff; border-bottom:1px solid #e1edf2; }.service-index-inner { max-width:1360px; margin:auto; padding:42px clamp(24px,4vw,70px); }.service-index-inner>p { margin:0 0 20px; color:#6b9fba; font:700 .68rem/1 Arial,sans-serif; letter-spacing:.15em; }.service-index ol { display:grid; grid-template-columns:repeat(4,1fr); gap:0; margin:0; padding:0; list-style:none; border-top:1px solid #dcebf1; border-bottom:1px solid #dcebf1; }.service-index li+li { border-left:1px solid #dcebf1; }.service-index a { min-height:104px; padding:16px 19px; display:flex; align-items:center; gap:14px; color:var(--navy); transition:background .2s,color .2s; }.service-index a:hover { color:#1479b3; background:#f5fbfd; }.service-index a:focus-visible { outline:3px solid #82c8ec; outline-offset:-3px; }.service-index b { color:#2a9cd1; font:700 .76rem Arial,sans-serif; letter-spacing:.08em; }.service-index span { display:flex; flex-direction:column; gap:6px; font-size:.96rem; font-weight:800; line-height:1.3; }.service-index small { color:#6f8391; font-size:.73rem; font-weight:500; }.service-index i { margin-left:auto; color:#5aaed4; font-style:normal; font-size:1.05rem; }
.service-detail { scroll-margin-top:85px; }.service-detail--white { background:#fff; }.service-detail--soft { background:#f6fafc; }.service-detail-inner { max-width:1360px; min-height:470px; margin:auto; padding:104px clamp(24px,4vw,70px); display:grid; grid-template-columns:minmax(310px,.72fr) minmax(480px,1fr); align-items:center; gap:clamp(58px,10vw,150px); }.service-detail-inner--reverse { grid-template-columns:minmax(480px,1fr) minmax(310px,.72fr); }.service-detail-inner--reverse .service-detail-copy { order:2; }.service-detail-inner--reverse .service-visual { order:1; }.service-detail-copy { max-width:540px; }.service-detail-copy h2 { margin:17px 0 16px; color:var(--navy-deep); font-size:clamp(2rem,3.2vw,3.25rem); line-height:1.35; letter-spacing:.025em; }.service-lead { margin:0; color:#506a7e; font-size:1rem; line-height:1.85; }.service-detail-copy ul { margin:29px 0 0; padding:0; list-style:none; border-top:1px solid #d8e7ed; }.service-detail-copy li { position:relative; min-height:47px; padding:14px 0 12px 21px; border-bottom:1px solid #d8e7ed; color:#294d68; font-size:.91rem; line-height:1.45; }.service-detail-copy li::before { content:""; position:absolute; top:21px; left:2px; width:8px; height:8px; border-radius:50%; background:#51af9b; }.service-visual { margin:0; overflow:hidden; border:1px solid #dfecf1; border-radius:19px; background:#f9fcfd; box-shadow:0 12px 28px rgba(17,69,105,.055); }.service-visual img { display:block; width:100%; height:auto; object-fit:contain; }
.services-contact { padding:97px 24px 102px; background:var(--navy-deep); color:#fff; text-align:center; }.services-contact>div { max-width:760px; margin:auto; }.services-contact .section-label { color:#7bc9ec; }.services-contact h2 { margin:16px 0 13px; font-size:clamp(1.75rem,2.75vw,2.55rem); line-height:1.45; letter-spacing:.02em; }.services-contact p:not(.section-label) { margin:0; color:#bed2df; font-size:.96rem; line-height:1.75; }.services-contact a { display:inline-flex; align-items:center; gap:14px; margin-top:28px; padding-bottom:8px; border-bottom:2px solid #65bce3; color:#e8f7ff; font-size:.96rem; font-weight:800; transition:color .2s,border-color .2s; }.services-contact a:hover { color:#aee4c9; border-color:#8fd7ad; }.services-contact a:focus-visible { outline:3px solid #82c8ec; outline-offset:4px; }
@media (max-width:1000px) { .service-index a { padding:15px 12px; gap:10px; }.service-index small { display:none; }.service-detail-inner,.service-detail-inner--reverse { grid-template-columns:minmax(280px,.8fr) minmax(390px,1fr); gap:50px; padding-top:82px; padding-bottom:82px; }.service-detail-inner--reverse { grid-template-columns:minmax(390px,1fr) minmax(280px,.8fr); } }
@media (max-width:767px) { .breadcrumb-wrap { padding:13px 18px; }.services-hero .page-hero-inner { display:flex; min-height:0; flex-direction:column; padding:0; }.services-hero-copy { display:flex; width:auto; min-height:0; padding:46px 18px 32px; }.services-hero h1 { margin:16px 0 12px; font-size:2.28rem; }.services-hero-copy>p:not(.page-kicker) { font-size:1rem; }.services-hero-photo { position:relative; inset:auto; width:100%; aspect-ratio:16/9; }.services-hero-photo::after { display:none; }.service-index-inner { padding:31px 18px; }.service-index-inner>p { margin-bottom:14px; }.service-index ol { grid-template-columns:1fr 1fr; }.service-index li+li { border-left:0; }.service-index li:nth-child(odd) { border-right:1px solid #dcebf1; }.service-index li:nth-child(n+3) { border-top:1px solid #dcebf1; }.service-index a { min-height:83px; padding:13px 12px; }.service-index span { font-size:.83rem; }.service-index b { align-self:flex-start; font-size:.68rem; }.service-index i { display:none; }.service-detail-inner,.service-detail-inner--reverse { display:flex; flex-direction:column; align-items:stretch; gap:29px; min-height:0; padding:75px 18px; }.service-detail-inner--reverse .service-detail-copy { order:1; }.service-detail-inner--reverse .service-visual { order:2; }.service-detail-copy { max-width:none; }.service-detail-copy h2 { margin:14px 0 13px; font-size:1.9rem; }.service-lead { font-size:.92rem; line-height:1.8; }.service-detail-copy ul { margin-top:23px; }.service-detail-copy li { min-height:0; padding-top:12px; padding-bottom:11px; font-size:.87rem; }.service-detail-copy li::before { top:18px; }.service-visual { border-radius:14px; }.services-contact { padding:72px 18px 76px; text-align:left; }.services-contact h2 { font-size:1.78rem; }.services-contact p:not(.section-label) { font-size:.9rem; } }
