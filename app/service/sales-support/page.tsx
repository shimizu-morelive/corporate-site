import type { Metadata } from "next";
import ServiceDetail from "../service-detail";

export const metadata: Metadata = {
  title: "委託販売・販売支援 | 株式会社モアライブ",
  description: "メーカー・小売事業者向けの委託販売・ライブコマース販売支援についてご紹介します。",
};

export default function SalesSupportPage() {
  return (
    <ServiceDetail
      variant="sales"
      number="02"
      label="FOR MANUFACTURERS & RETAILERS"
      title={"委託販売・\n販売支援"}
      lead="商品をお預かりし、企画・キャスティング・配信・販売・改善まで一貫して支援します。"
      descriptions={[
        "商品の特徴やブランドの背景を理解したうえで、ライブコマースを中心とした販売方法を設計します。販売条件や計画が固まっていない段階でも、取り扱い方法から一緒に検討できます。",
      ]}
      introTitle={"商品の魅力まで\n預かる"}
      imageSrc="/service-sales-support.webp"
      imageAlt="ライブ配信で商品を紹介し販売結果を確認するライブコマーサー"
      imageCaption="商品の理解から配信、購入、結果の分析までを一つの販売活動として設計します。"
      journey={{
        title: "ライブコマースで売上が生まれるまで",
        text: "商品をただ配信に出すのではなく、魅力を理解し、伝え方を設計し、購入結果から改善するまでをつなげます。",
        steps: [
          { title: "商品・ブランドの理解", icon: "product", detail: { summary: "商品の特徴だけでなく、ブランドの背景、既存顧客、現在の販路、販売上の課題を確認します。", points: ["主力商品と販売条件を確認", "既存ECでの売れ方や顧客像を整理", "配信で正確に伝える情報を共有"] } },
          { title: "販売企画", icon: "plan", detail: { summary: "誰に何を伝えるかを決め、実演、比較、使用シーンなど、商品の魅力が伝わる配信構成を設計します。", points: ["配信テーマと訴求を決定", "紹介する商品と順番を設計", "LIVEとショート動画の役割を整理"] } },
          { title: "コマーサー選定", icon: "creator", detail: { summary: "商品カテゴリー、想定する購入者、配信内容との相性を見ながら、紹介を担当するコマーサーを検討します。", points: ["商品との相性を確認", "話し方や得意分野を考慮", "商品理解に必要な情報を共有"] } },
          { title: "集客・ライブ配信", icon: "live", detail: { summary: "配信前の告知や準備を行い、視聴者の反応や質問を受けながら商品を紹介します。", points: ["告知と配信準備", "商品の実演と質疑応答", "視聴中の反応を確認"] } },
          { title: "TikTok Shopで購入", icon: "purchase", detail: { summary: "紹介した商品への導線を用意し、興味を持った視聴者が商品情報と購入画面へ進める状態を整えます。", points: ["商品情報と在庫を確認", "配信商品を正しく紐付け", "購入を妨げる要因を確認"] } },
          { title: "販売結果を分析・改善", icon: "analysis", detail: { summary: "配信や販売の結果を振り返り、次回に向けて商品構成、説明、進行、配信時間などを改善します。", points: ["視聴・商品反応・販売結果を確認", "伝わった点と離脱要因を整理", "次回の改善内容を決定"] } },
        ],
      }}
      featuresTitle="このようなご相談に対応します"
      featuresLinkDisabled
      features={[
        { title: "既存ECに加えて売上を伸ばしたい", text: "楽天市場・Amazon・自社ECとは異なる、新しい顧客接点を検討します。" },
        { title: "TikTok Shopを始めたい", text: "出店後の企画、配信、運用まで、必要な体制を一緒に整理します。" },
        { title: "販売をまとめて任せたい", text: "企画から販売後の改善まで、一貫して支援します。" },
        { title: "在庫に新しい機会をつくりたい", text: "商品の価値を整理し、ライブに合う販売方法を検討します。" },
      ]}
      steps={[
        { title: "ご相談・ヒアリング", text: "商品、販売条件、現在の課題について伺います。" },
        { title: "商品理解・販売設計", text: "商品の特徴とブランドの背景を整理し、配信企画と伝え方を設計します。" },
        { title: "キャスティング・販売", text: "商品に合うコマーサーと配信体制を整え、集客から販売まで実施します。" },
        { title: "振り返り・継続改善", text: "配信と販売の結果を確認し、次の施策へつなげます。" },
      ]}
      ctaTitle="商品や販売について相談する"
      ctaText="商品や販売条件が固まっていなくても構いません。取り扱い方法から一緒に検討します。"
      ctaLabel="メーカー・小売事業者のお問い合わせ"
    />
  );
}
