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
      imageSrc="/service-sales-support.png"
      imageAlt="ライブ配信で商品を紹介し販売結果を確認するライブコマーサー"
      imageCaption="商品の理解から配信、購入、結果の分析までを一つの販売活動として設計します。"
      journey={{
        title: "ライブコマースで売上が生まれるまで",
        text: "商品をただ配信に出すのではなく、魅力を理解し、伝え方を設計し、購入結果から改善するまでをつなげます。",
        steps: [
          { title: "商品・ブランドの理解", icon: "product" },
          { title: "販売企画", icon: "plan" },
          { title: "コマーサー選定", icon: "creator" },
          { title: "集客・ライブ配信", icon: "live" },
          { title: "TikTok Shopで購入", icon: "purchase" },
          { title: "販売結果を分析・改善", icon: "analysis" },
        ],
      }}
      featuresTitle="このようなご相談に対応します"
      features={[
        { title: "新しい販路をつくりたい", text: "TikTok Shopを活用し、新しい販売チャネルをつくります。" },
        { title: "商品の売上を伸ばしたい", text: "魅力が伝わる企画で、新しい顧客との接点を増やします。" },
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
